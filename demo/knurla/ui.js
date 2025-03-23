import circle from "./ui_circle.js";
import calendar from "./ui_calendar.js";

let dataCache = null;

export default async function ui(api, d3) {

    function redraw(data = dataCache) {
    	calendar(d3, data, api, "#calendar-section", update);
    	circle(d3, data, "#datavis-section");
    }

    async function update(){
    	const {data, error} = await api.select();
    	dataCache = data;
    	redraw(data);
    }

    update();

	window.addEventListener('resize', () => redraw());
}