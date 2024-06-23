const year = "2000";
var ind_availability = [];
var structure;

const duration = 500;
const waitbefore = 2;
const waitafter = 2;

const colors = [
"#e5243b",
"#dda63a",
"#4c9f38",
"#c5192d",
"#ff3a21",
"#26bde2",
"#fcc30b",
"#a21942",
"#fd6925",
"#dd1367",
"#fd9d24",
"#bf8b2e",
"#3f7e44",
"#0a97d9",
"#56c02b",
"#00689d",
"#19486a"
]

const frames = [
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020"
]

function getIndex(arg){
  const goal = arg.split("_")[0];
  const target = arg.split("_")[1];
  const indicator = arg.split("_")[2];
  
  return {
    goal: [...structure.keys()].indexOf(goal),
    target: [...structure.get(goal).keys()].indexOf(target),
    indicator: [...structure.get(goal).get(target).keys()].indexOf(indicator),
    size: structure.get(goal).get(target).size
  }
}


d3.csv("dense (1).csv").then(function(data) {
  
  const indicators = [];
  data.forEach(d=>{if(!indicators.includes(d._indicator)) indicators.push(d._indicator)});
  structure = d3.group(indicators.sort(), d => d.split("_")[0], d => d.split("_")[1], d => d.split("_")[2]);
  
  const DOM = {};

  const PNG_W = 3956;
  const PNG_H = 2953;
  const PNG_ASPECT_RATIO = PNG_W / PNG_H;

  
  DOM.container = d3.select(".container")
    .attr('width', "100%")
    .style('max-width', PNG_H*1.8);

  const bbox = DOM.container.node().getBoundingClientRect();
  const vw = bbox.width;
  const vh = 1 / PNG_ASPECT_RATIO * bbox.width;
  const shrinkage =  vw / PNG_W;

  const height = 154 * shrinkage;
  const width = 154 * shrinkage;
  const margin_top = 140 * shrinkage;
  const margin_left = 407 * shrinkage;
  const padding_top = 12 * shrinkage;
  const padding_left = 35 * shrinkage;

  DOM.svg = DOM.container
      .append("svg")
      .attr('width', vw)
      .attr('height', vh)  
  
  DOM.svg.append('svg:image')
      .attr("xlink:href", function() {return `horisontal_targets.png`})      
      .attr('width', vw)
      .attr('height', vh)  
  
  DOM.opaque = DOM.svg.append('rect')
      .attr('x', margin_left)
      .attr('y', margin_top)
      .attr('width', vw)
      .attr('height', vh)  
      .style("fill", "white")
      .style("opacity", 0)
  
  
  DOM.year = DOM.svg.append("text")
    .attr("x", vw)
    .attr("y", width * 2)
    .attr("font-size", width * 2)
    .attr("font-family","monospace")
    .attr("fill", "#000000")
    .attr("class", "year")
    .attr("text-anchor","end")
    .style("opacity",0);
  

  
  DOM.bars = DOM.svg.selectAll(".bar").data(indicators, d=>d).enter().append("rect")
    .attr("x", d=>getIndex(d).target*(width + padding_left) + getIndex(d).indicator*(width/getIndex(d).size) + margin_left)
    .attr("y", d=>getIndex(d).goal*(height+padding_top) + margin_top)
    .attr("width", d => width/getIndex(d).size - 2)
    .attr("height", 0)
    .style("fill", d => colors[getIndex(d).goal])
    .style("opacity",0)
    .attr("class", "bar");
  
  
  let frameIndex = -waitbefore*1000/duration;

  setInterval(function(){
    if(0 <= frameIndex && frameIndex < frames.length) draw(DOM, indicators, data, frames[frameIndex]);
    frameIndex++;
    if(frameIndex>= frames.length + waitafter*1000/duration) {
      frameIndex = -waitbefore*1000/duration;
      DOM.opaque.style("opacity",0);
      DOM.bars.style("opacity",0)
        .attr("y", d=>getIndex(d).goal*(height+padding_top) + margin_top)
        .attr("height", 0);
      DOM.year.style("opacity",0);
    };
  }, duration)
  


  function draw(DOM, indicators, data, year){
    var dataframe = data.filter(d=>d.year==year)
    
    function getValue(dataframe, d){
      const row = dataframe.find(f=>f._indicator==d);
      if(+row.num_countries>+row.rel_count) return 1;
      return +row.num_countries/+row.rel_count;
    }
    
    setTimeout(() => {
      DOM.year
      .style("opacity",1)
      .text(year);
    }, duration)

    
    DOM.opaque
      .style("opacity",0.9)
    
    DOM.bars
      .style("opacity",1)
      .transition().duration(duration)
      .attr("y", d=>getIndex(d).goal*(height+padding_top) + margin_top + (height - getValue(dataframe,d) * height))
      .attr("height", d=> getValue(dataframe,d) * height)
  }
});


