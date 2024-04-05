import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import * as splitting from "https://cdn.jsdelivr.net/npm/splitting/+esm"
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm"

window.d3 = d3;

const S_ID = "ljbyyhiaaezetjldooim";
const S_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqYnl5aGlhYWV6ZXRqbGRvb2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwODE2MzQsImV4cCI6MjAyNTY1NzYzNH0.bO6QvpF45pe42nwuWTEnJc6c6R5MDlJhtJHPqjDKnLQ";



const addYear = (date) => d3.utcParse("%Y")( "" + (date.getUTCFullYear() + 1) ) 

d3.csv("./assets/data/basic.csv", (d) => {
    return {
        time: d3.utcParse("%Y")(d.time), 
        GDP: +d.GDP,
        LEX: +d.LEX,
        POP: +d.POP,
        geo: d.geo, 
        region: d.world_region,
        category: d.category
    }
}).then((data) => {
    data = data
        .filter(f => f.GDP > 0 && f.LEX > 0 && f.POP > 0 && f.region && f.geo && f.category !== "global" && f.category !== "region")
        .sort((b,a) => a.POP - b.POP);
    new Main({data})
})

class SendFiles {
    constructor({element}) {

        const sURL = `https://${S_ID}.supabase.co`;
        this.supabase = createClient(sURL, S_KEY);

        this.element = element;
        element
            .on("click", (e) => {
                if (e.target !== element.node()) return;
                element.style("display", null);
                this.onClose();
            })
            .on("submit", e => {this.onSend(e)})
            .on("drop", e => {this.allowDrop(e)})
            .on("dragover", e => {this.allowDrop(e)});
        this.dropZone = element.select(".ve-dropzone");
        this.dropZone
            .on("dragover", e => {this.allowDrop(e)})
            .on("drop", e => {this.onDrop(e)});
        this.sendForm = element.select(".ve-startproject")
        this.inputFiles = element.select(".ve-openfile");
        this.email = element.select(".ve-email");
        this.status = element.select(".ve-status");

    }

    onDrop(e) {
        e.preventDefault();

        this.inputFiles.node().files = e.dataTransfer.files;
    }
    
    allowDrop(e) {
        e.preventDefault();
    }

    async onSend(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const email = data.get("email");
        const files = data.getAll("files");

        this.sendForm.classed("ve-uploading", true);
        this.status.text("Sending...");

        Promise.all(files.map(async file => await this.supabase.storage.from("demo_data").upload(`${email}/${file.name}`, file, {
            upsert: true,
        }))).then(result => this.onSent(result))
    }

    onSent(result) {
        if (result.every(({error}) => !error)) {
            this.status.text("Files uploaded successfully. We will contact you by email when your demo is ready.");
        } else {
            this.status.text("Error! Please try again.");
        }
    }

    onClose() {
        this.inputFiles.node().value = "";
        this.email.node().value = "";
        this.status.text("");
        this.sendForm.classed("ve-uploading", false);
    }
}

class Main {
    constructor({data}){

        const dataMap = d3.rollup(data, v => v[0], d => d.time, d => d.geo);
    
        const xDomain = d3.extent(data, d => d.GDP)
        const yDomain = d3.extent(data, d => d.LEX)
        const sDomain = d3.extent(data, d => d.POP)
        const tDomain = d3.extent([...dataMap.keys()]);
        this.yearMax = tDomain[1].getUTCFullYear();
        this.yearMin = tDomain[0].getUTCFullYear();

        this.time = tDomain[0];
        this.dragging = false;
        this.duration = 500;

        this.chart = new Chart({dataMap, xDomain, yDomain, sDomain, parent: this})
        this.slider = new TimeSlider({domain: tDomain, parent: this})
        this.morphText = new MorphText({domain: tDomain});
        this.sendFiles = new SendFiles({element: d3.select(".ve-startproject-outer-overlay")});

        this.checkbox = d3.select(".ve-ts-play input").on("change", () => {
            this.setPlaying(!this.playing);
        });

        this.button = d3.select(".ve-hero button.ve-cta")
            .on("mouseover", () => this.chart.updateSize({top: 0, left: 0,  right: 0, bottom: -0.5}))
            .on("mouseout", () => this.chart.updateSize())

        this.chart.updateSize();
        this.slider.updateSize();
        this.chart.updateTime({time: this.time, duration: 0})
        this.morphText.updateTime( {time: this.time} );
        this.setPlaying(true);

        window.onresize = () => {
            this.chart.updateSize();
            this.slider.updateSize();
            this.chart.updateTime({time: this.time, duration: 0})
        };
    }
    startPlaying(){
        const year = this.time.getUTCFullYear();
        this.setTime(d3.utcParse("%Y")( (year + 1 > this.yearMax) ? ""+this.yearMin : ""+(year + 1) ));
        
        this.interval = setInterval(() => {      
            const year = this.time.getUTCFullYear();
            this.setTime(d3.utcParse("%Y")( (year + 1 > this.yearMax) ? ""+this.yearMin : ""+(year + 1) ));
        }, this.duration)

    }
    setPlaying(arg){
        this.playing = arg;
        this.checkbox.property("checked", arg);
        if (arg) this.startPlaying();
        if (!arg) this.stopPlaying();
    }
    setDragging(arg){
        this.dragging = arg;
    }
    stopPlaying(){
        clearInterval(this.interval);
    }
    setTime(time){
        this.time = time;
        if(this.chart) this.chart.updateTime({time: time, duration: this.duration});
        if(this.slider) this.slider.updateTime({time: time, duration: this.duration});
        if(this.morphText) this.morphText.updateTime({time: time, duration: this.duration});
    }
}


class MorphText {
    constructor({ domain }) {
        splitting.default({
            whitespace: true
        });
        this.charSelection = d3.select(".splitting").selectAll(".char");
        this.charIndexScale = d3.scaleTime(domain, [0, this.charSelection.size() - 1]);
    }

    updateTime({time, duration}) {
        const charIndex = Math.round(this.charIndexScale(time));
        const selected = [charIndex - 1, charIndex, charIndex + 1];
        const sibling1 = [charIndex - 2, charIndex + 2];
        const sibling2 = [charIndex - 3, charIndex + 3];
        const sibling3 = [charIndex - 4, charIndex + 4];
        this.charSelection.each(function(d, i) {
            d3.select(this).classed("selected", selected.includes(i))
            d3.select(this).classed("sibling1", sibling1.includes(i))
            d3.select(this).classed("sibling2", sibling2.includes(i))
            d3.select(this).classed("sibling3", sibling3.includes(i))
        })
    }
}


class Chart {

    constructor({dataMap, xDomain, yDomain, sDomain, parent}) {

        this.parent = parent;

        this.data = dataMap;

        this.div = d3.select(".ve-bubbles");
        this.body = d3.select("body");
        this.svg = this.div.append("svg");
        this.container = this.svg.append("g");

        this.xScale = d3.scaleLog().domain(xDomain);
        this.yScale = d3.scaleLinear().domain(yDomain);
        this.sScale = d3.scaleSqrt().domain(sDomain);

        this.cScale = d3.scaleOrdinal().domain(["americas", "africa", "asia", "europe"])
            .range(["#7feb00", "#00d5e9", "#ff5872", "#ffe700"])
            .unknown("#ffb600");

        this.lScale = d3.scaleOrdinal().domain(["americas", "africa", "asia", "europe"])
            .range(["#00b900", "#0098df", "#da0025", "#fbaf09"])
            .unknown("#fb6d19");
        
      }

    updateSize(margin){

        if (!margin) margin = {top: 0.1, left: 0.2,  right: 0.2, bottom: 0.3};

        const width = this.div.node().clientWidth;
        const height = this.div.node().clientHeight;
        const hypo = Math.sqrt(width * width + height * height);

        this.xScale.range([width * margin.left, width * (1 - margin.right)]);
        this.yScale.range([height * (1 - margin.bottom), height * margin.top]);
        this.sScale.range([1, hypo / 20]);

        this.svg
            .attr("width", width)
            .attr("height", window.innerHeight)
        //this.container
        //   .attr("transform", `translate(${width * margin.left},${height * margin.top})`)
    }
    updateTime({time, duration}) {
        let data = this.data.get(time);
        let dataArray = [];
        if(data) {
            dataArray = [...data.values()];
        }else{
            const prevYear = d3.utcParse("%Y")("" + time.getUTCFullYear());
            const nextYear = addYear(prevYear);
            const fraction = (time - prevYear) / (nextYear - prevYear);

            const prevData = this.data.get(prevYear);
            const nextData = this.data.get(nextYear);

            if(!prevData || !nextData) console.log(time)

            const interpolate = (prev,next,enc) => prev[enc] + (next[enc] - prev[enc]) * fraction;

            dataArray = [...prevData.keys()].map(key => {
                const prev = prevData.get(key);
                const next = nextData.get(key);
                if(!prev || !next) return {geo: key};
                return {
                    geo: key,
                    GDP: interpolate(prev, next, "GDP"),
                    LEX: interpolate(prev, next, "LEX"),
                    POP: interpolate(prev, next, "POP"),
                    region: prev.region,
                }
            })
        }

        const cicles = this.container.selectAll("circle")
            .data(dataArray, d => d.geo)
            .join("circle")
            .style("visibility", d => !d.GDP || !d.LEX || !d.POP ? "hidden" : null)

        if(!duration || !this.parent.playing)
            cicles.interrupt()
                .attr("cx", d => this.xScale(d.GDP))
                .attr("cy", d => this.yScale(d.LEX))
                .attr("r", d => this.sScale(d.POP))
                .attr("fill", d => this.cScale(d.region))
                .attr("stroke", d => this.lScale(d.region))
                .style("opacity", this.parent.dragging ? 1 : 0.5);
        else 
            cicles
                .transition().duration(duration).ease(d3.easeLinear)
                .attr("cx", d => this.xScale(d.GDP))
                .attr("cy", d => this.yScale(d.LEX))
                .attr("r", d => this.sScale(d.POP))
                .attr("fill", d => this.cScale(d.region))
                .attr("stroke", d => this.lScale(d.region))
                .style("opacity", this.parent.dragging ? 1 : 0.5);
    }


}


class TimeSlider{
    constructor({domain, parent}){
        this.parent = parent;

        this.margin = 15;
        const r = 12;
        this.wasPlaying = null;

        const xToTime = (event) => {
            let x = 0;
            if(event.x > this.width - this.margin * 2) x = this.width - this.margin * 2; 
            else if(event.x < 0) x = 0; 
            else x = event.x;
            return this.scale.invert(x)
        }

        this.div = d3.select(".ve-bubbles");

        this.svg = d3.select(".ve-ts-slider")

        this.view = this.svg
            .select("g")
            .attr("transform", `translate(${10},${10})`)

        const dragevents = {
            start: (event) => { 
                this.wasPlaying = this.parent.playing;
                this.parent.setPlaying(false);
                this.parent.setDragging(true);
                this.parent.setTime(xToTime(event));
            },
            move: (event) => { 
                this.parent.setTime(xToTime(event));
            },
            end: (event) => {
                this.parent.setDragging(false);
                this.parent.setTime(xToTime(event));
                this.parent.setPlaying(this.wasPlaying ?? true);
            }
        }
        this.track = this.view.select("rect")
            .attr("height", 10)
            .attr("rx", 4)
            .call(d3.drag()
                .on("start.interrupt", () => this.knob.interrupt() )
                .on("end", dragevents.end)
                .on("start", dragevents.start)
                .on("drag", dragevents.move)
            );
        this.position = this.margin;
        this.knob = this.view.select("circle")
            .attr("r", r)
            .attr("cx", this.position)
            .attr("cy", r/2)
            
        this.scale = d3.scaleTime().domain(domain);
    }
    updateSize(){
        this.width = this.div.node().clientWidth * 0.5;
        this.height = 50;

        this.scale
            .range([0, this.width - this.margin * 2]);
        this.track
            .attr("width", this.width - this.margin * 2);
        this.svg
            .attr("width", this.width)
            .attr("height", this.height);

    }
    updateTime({time, duration}){
        const margin = 15;
        const r = 12;
        const target = margin + this.scale(time) - r;
        if (this.position > target || !this.parent.playing)
            this.knob
                .interrupt()
                .attr("cx", target);
        else
            this.knob
                .transition().duration(duration).ease(d3.easeLinear)
                .attr("cx", target);

        this.position = target;
    }
}

d3.selectAll(".ve-faq .ve-question .ve-header")
    .on("click", function(){
        const view = d3.select(this.parentNode).select(".ve-answer");
        const collapsed = view.style("max-height") === "0px";
        view
            .style("max-height",  collapsed ? "500px" : "0px")
            .style("margin-bottom",  collapsed ? "30px" : "0px")
            .style("margin-top",  collapsed ? "10px" : "0px");

    })

