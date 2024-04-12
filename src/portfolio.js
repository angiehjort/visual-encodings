function getYouTubeIframe(src, maxwidth){
    return `
        <iframe
            src="${src}"
            style="max-width:${maxwidth}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    `
} 

function getVideo(src, maxwidth){
    return `
        <video max-width=${maxwidth} controls>
            <source src="${src}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `
}

export default function Portfolio(selector, CASES) { 
    d3.select(selector).selectAll(".ve-case")
        .data(CASES)
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
            const container = d3.select(".ve-portfolio .ve-popup-outer").style("display", "flex")
            const popup = container.select(".ve-portfolio .ve-popup");
            popup.select(".ve-title").text(d.title);
            popup.select(".ve-content").html(() => {
                if (d.iframe) return getYouTubeIframe(d.iframe, d["max-width"]);
                if (d.video) return getVideo(d.video, d["max-width"])
                return "";
            })
            popup.select(".ve-close").on("click", () => {container.style("display", "none")});
            popup.select(".ve-description").html(d.description);
            popup.select(".ve-goto").attr("href", d.link).attr("target", "_blank").text(d.linktext);
        })
}
