import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const newTab = "⧉"
const cases = [{
        text: "For municipal statistics",
        title: "Case: The Södertörn model",
        description: "The Södertörn analysis is an open tool that makes it easier to highlight differences, similarities and trends between different areas in the municipalities of Södertörn. The tool shows facts about ecological, economic and social sustainability.",
        linktext: "Live version " + newTab,
        link: "https://open-numbers.github.io/sodertornsmodellen/",
        image: "./assets/cases/sodertorn.jpg",
        gif: "./assets/cases/sodertorn.gif",
        iframe: "https://www.youtube.com/embed/AI0TU_fxZ-4?si=dJPVbCuWhHILkaqK?cc_load_policy=1&cc_lang_pref=en"
    },{
        text: "For census results and policy analysis",
        title: "Migration between provinces",
        description: "Made as part of a presentation for Community survey (small census) of 2016",
        linktext: "Live version " + newTab,
        link: "http://static.gapminderdev.org/csv-conf-2017-talk/#/26",
        image: "./assets/cases/migration.jpg",
        gif: "./assets/cases/migration.gif",
        iframe: "http://static.gapminderdev.org/csv-conf-2017-talk/#/26"
    },{
        text: "For interactive teaching",
        title: "Case: Income mountains — ongoing since 2015",
        description: "",
        linktext: "Live version " + newTab,
        link: "https://www.gapminder.org/tools/#$model$markers$billy$encoding$selected$data$;;;;;;&chart-type=mountain&url=v1",
        image: "./assets/cases/mountains.jpg",
        gif: "./assets/cases/mountains.gif",
        iframe: "https://www.gapminder.org/tools/?embedded=true#$model$markers$billy$encoding$selected$data$;;;;;;&chart-type=mountain&url=v1",
        "max-width": "none"
    },{
        text: "For more complex data and stories",
        title: "Case: Södertörnsmodellen (The Södertörn model) — 2018",
        description: 'Notice how in many localities of Stockholm area women become more educated (more of red color), but men get paid more (longer lines). The gender difference grows in two ways, not just one. <br/>Switch to "INCOME AND EDUCATION BY GENDER" if you go to see the live version',
        linktext: "Live version " + newTab,
        link: "https://open-numbers.github.io/sodertornsmodellen/",
        image: "./assets/cases/educationpyramid.jpg",
        gif: "./assets/cases/educationpyramid.gif",
        video: "./assets/cases/educationpyramid-large.mp4"
    },{
        text: "For data journalism",
        title: "Case: data availability about UN Targets — 2020",
        description: "Chart featured at 7:20 in the above video, which was presented to the world leaders at the UN SDG Moments event on September 18, 2020.<br/><br/>When the UN talks about their new goals, it’s easy to assume it’s just more of the same. But in one important aspect the SDGs are radically different from all the UN’s previous ideas of progress. Previously each UN organization had their own goals and timelines as if their subject matter was dissociated form everything else. Extreme poverty was an economic problem. Children’s schooling was an education problem. Electricity was an infrastructure problem. But the SDGs help us realize that these goals are all about the same sustainable future. Children in poverty can’t do their homework if they don’t have electricity. It’s all related and when we think of one thing at a time we get an illusion of conflict between different goals. Wading through the data and figuring out how far we have come (if at all) since 2015 is not simple or obvious. That is why the UN asked Ola to summarize the progress across all the SDGs.",
        linktext: "Live version " + newTab,
        link: "http://static.gapminderdev.org/sdg-data-availability/",
        image: "./assets/cases/sdgdata.jpg",
        gif: "./assets/cases/sdgdata.gif",
        iframe: "https://www.youtube.com/embed/v7WUpgPZzpI?si=dzjT6W-yH3dgaHBg?cc_load_policy=1&cc_lang_pref=en"
    },{
        text: "For sustainable cities",
        title: "Case: Boendebarometer (The Housing Gauge) — 2024",
        description: "",
        linktext: "Expand the live version " + newTab,
        link: "http://static.gapminderdev.org/boendebarom3/#$chart-type=combo-emap-bc&url=v1",
        image: "./assets/cases/city.jpg",
        gif: "./assets/cases/city.gif",
        iframe: "http://static.gapminderdev.org/boendebarom3/?embedded=true#$chart-type=combo-emap-bc&url=v1",
        "max-width": "none"


}];

function getYouTubeIframe(src, maxwidth){
    return `<iframe src="${src}" style="max-width:${maxwidth}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
} 
function getVideo(src, maxwidth){
    return `
        <video max-width=${maxwidth} controls>
            <source src="${src}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `
}


d3.select(".ve-portfolio .ve-grid").selectAll(".ve-case")
    .data(cases)
    .join("a")
    .attr("class", "ve-case")
    .html(d => `
        <div class="ve-img" style='background-image: url("${d.image}")'></div>
        <div class="ve-text"> ${d.text}</div>
    `)
    .on("mouseover", function(event, d){
        d3.select(this).select(".ve-img").attr("style", `background-image: url("${d.gif}")`)
    })
    .on("mouseout", function(event, d){
       // d3.select(this).select(".ve-img").attr("style", `background-image: url("${d.image}")`)
    })
    .on("click", function(event, d){
        const popup = d3.select(".ve-portfolio .ve-popup").style("display", "block");
        popup.select(".ve-title").text(d.title);
        popup.select(".ve-content").html(() => {
            if (d.iframe) return getYouTubeIframe(d.iframe, d["max-width"]);
            if (d.video) return getVideo(d.video, d["max-width"])
            return "";
        })
        popup.select(".ve-close").on("click", () => {popup.style("display", "none")});
        popup.select(".ve-description").html(d.description);
        popup.select(".ve-goto").attr("href", d.link).attr("target", "_blank").text(d.linktext);
    })


