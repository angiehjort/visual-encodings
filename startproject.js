import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const popup = d3.select(".ve-startproject")

d3.selectAll(".ve-cta")
    .on("click", () => {
        popup.style("display", "block");
    })
