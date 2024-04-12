export default function Faq(placeHolder) {
    d3.selectAll(placeHolder)
        .on("click", function(){
            const view = d3.select(this.parentNode).select(".ve-answer");
            const collapsed = view.style("max-height") === "0px";
            view
                .style("max-height",  collapsed ? "500px" : "0px")
                .style("margin-bottom",  collapsed ? "30px" : "0px")
                .style("margin-top",  collapsed ? "10px" : "0px");

        })
}
