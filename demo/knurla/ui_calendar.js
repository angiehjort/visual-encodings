function getMondayOfCurrentWeek() {
  const today = new Date();
  const day = today.getDay(); // getDay() returns 0 for Sunday, 1 for Monday, etc.
  const diff = today.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
  const monday = new Date(today.setDate(diff));
  return monday;
}

const state = {
	referenceMonday: getMondayOfCurrentWeek(),
	selectedDate: null,
}

function areEventsEqual(a,b){
	return a.date === b.date && a.note === b.note;
}


const noteIcons = {
	"start": "🩸",
	"sex": "🍆",
	"moody": "🌩",
	"test": "?"
}
const noteText = {
	"start": "1st day",
	"sex": "sex",
	"moody": "moody",
	"test": "?"
}



export default function calendar(d3, notes, api, selector, callback) {
	const isoFormat = d3.timeFormat("%Y-%m-%d");
	const longFormat = d3.timeFormat("%e %B %Y");
	const fullMonthName = d3.timeFormat("%B %Y");
	const abbrMonthName = (date) => d3.timeFormat("%b")(date).toLowerCase();
	const today = new Date();

	function getCalendarSymbols(notes, day){
		return notes
			.filter(f => f.date === isoFormat(day))
			.map(m => noteIcons[m.note])
			.join("");
	}

	function isFuture(date){
		return date - today > 0
	}


	const parent = d3.select(selector).html("");

	const headerGrid = parent.append("h3");
	const weekdaysGrid = parent.append("div")
		.selectAll(".weekday")
		.data(["M","T","W","T","F","S","S"])
		.join("div")
		.attr("class", "weekday")
		.classed("weekend", d => d === "S")
		.text(d => d)
	const calendarGrid = parent.append("div").attr("class","calendar-grid");
	
	const headerTrackables = parent.append("h3").text("Track:");
	const trackables = parent.append("div").attr("class", "trackables");


	const week_1 = calendarGrid.append("div").attr("class","week");
	const updownbuttons = calendarGrid.append("div").attr("class", "updownbuttons");
	

	function renderWeek({referenceMonday, selectedDate}){
		week_1
			.selectAll("div.button")
			.data(d3.range(0, 7).map(m => d3.timeDay.offset(referenceMonday, m)))
			.join("div")
			.attr("class","button")
			.classed("selected", d => isoFormat(d) === selectedDate)
			.classed("weekend", d => d.getDay() === 6 || d.getDay() === 0)
			.classed("today", d => isoFormat(d) === isoFormat(today) )
			.classed("disabled", d => isFuture(d) )
			.html(d => `
				${d.getDate()}${d.getDate()===1? abbrMonthName(d) : ""}
				<br/>
				${getCalendarSymbols(notes, d)}
			` )
			.on("click", (event, d) => {
				state.selectedDate = state.selectedDate === isoFormat(d) ? null : isoFormat(d);
				
				renderWeek(state);
				renderTrackables(state);
				renderHeader(state);
			})
	}

	renderWeek(state);

	function renderHeader(state) {
		let text = "";
		const selected = state.selectedDate ? new Date(state.selectedDate) : null;
		if(selected)
			text = (isoFormat(selected) === isoFormat(today) ? "Today " : "") + longFormat(selected);

		else if(isoFormat(state.referenceMonday) === isoFormat(getMondayOfCurrentWeek()))
			text = "Today " + longFormat(today);

		else
			text = fullMonthName(state.referenceMonday);

		return headerGrid.text(text);
	}
	renderHeader(state);

	
	function renderTrackables(state){
		trackables.style("visibility", state.selectedDate ? "visible" : "hidden");
		headerTrackables.style("visibility", state.selectedDate ? "visible" : "hidden");
		trackables.selectAll("div.button")
			.data(["start", "sex", "moody"])
			.join("div")
			.attr("class","button")
			.classed("selected", d => {
				const event = {date: state.selectedDate, note: d};
				return (event.date && notes.find(f => areEventsEqual(f, event)));
			})
			.html(d => `<span class="icon">${noteIcons[d]}</span><span class="text">${noteText[d]}</span>`)
			.on("click", async (touchEvent, d) => {
				if (!state.selectedDate) return;
				const event = {date: state.selectedDate, note: d};
				if (notes.find(f => areEventsEqual(f, event))) {
					await api.delete(event);
				} else {
					await api.insert(event);
				}
				callback();
			})
	}
	renderTrackables(state);

	updownbuttons.append("div").text("⬆")
		.attr("class", "button")
		.on("click", () => {
			state.referenceMonday = d3.timeDay.offset(state.referenceMonday, -7);
			state.selectedDate = null;
			renderWeek(state);
			renderTrackables(state);
			renderHeader(state);
		})
	updownbuttons.append("div").text("⬇")
		.attr("class", "button")
		.on("click", () => {
			state.referenceMonday = d3.timeDay.offset(state.referenceMonday, +7);
			state.selectedDate = null;
			renderWeek(state);
			renderTrackables(state);
			renderHeader(state);
		})

	return parent;
}

