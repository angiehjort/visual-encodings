


export default function circle(d3, notes, selector) {


  function getDistances(notes) {
    const distances = [];
    const starts = notes.filter(f => f.note === "start");
    for (let i = 1; i < starts.length; i++) {
      const date1 = new Date(starts[i-1].date);
      const date2 = new Date(starts[i].date);
      const distance = d3.timeDay.count(date1, date2);
      distances.push(distance);
    }
    return distances.toSorted();
  }

  const distances = getDistances(notes)

  const average = Math.round(d3.median(distances))
  const min = d3.min(distances.slice(2))
  const max = d3.max(distances.slice(0, distances.length - 2))

  function getLastStart() {
    const startDates = notes.filter(f => f.note === "start").toSorted((a,b) => new Date(a.date) - new Date(b.date));
    if (!startDates.length) return null;
    return new Date(startDates.at(-1).date);
  }

  const lastStart = getLastStart();
  

  if (!lastStart) {
    console.log("last start not provided")
    return;
  }

  const daysToday = d3.timeDay.count(lastStart, new Date());
  const cyclesPassed = Math.floor(daysToday / average)



  

  const parent = d3.select(selector).html("");

  const w = parent.node().offsetWidth;

  const dateOrDays = "DATE"
  const cx = w / 2;
  const cy = w / 2;
  const r = (w / 2) - 50;
  const R = (w / 2) - 70;
  const delta = 13;
  const deltaMore = 17;

  const svg = parent
    .append("svg")
    .attr("width", cx * 2)
    .attr("height", cy * 2);

  const circle = svg.append("circle")
    .attr("cx", cx)
    .attr("cy", cy)
    .attr("r", r)
    .style("stroke", "lightgrey")
    .style("stroke-width", 10)
    .style("fill", "none")

  const scale = d3.scaleLinear([0, average], [0 - Math.PI / 2, 2*Math.PI - Math.PI / 2])


  const fertilePossible = svg.append("path")
    .attr("transform", `translate(${cx},${cy})`)
    .attr("d", d3.arc().cornerRadius(10)({
      innerRadius: r - delta,
      outerRadius: r + delta,
      startAngle: scale(min - 14 - 5.5) + Math.PI/2,
      endAngle: scale(max - 14 + 1.5) + Math.PI/2
    }))
    .style("fill", "lightgreen")
    .style("opacity", 0.3);
  
  const fertileExpected = svg.append("path")
    .attr("transform", `translate(${cx},${cy})`)
    .attr("d", d3.arc().cornerRadius(10)({
      innerRadius: r - delta,
      outerRadius: r + delta,
      startAngle: scale(average - 14 - 5.5) + Math.PI/2,
      endAngle: scale(average - 14 + 1.5) + Math.PI/2
    }))
    .style("fill", "lightgreen");
  
  const ovuPossible = svg.append("path")
    .attr("transform", `translate(${cx},${cy})`)
    .attr("d", d3.arc().cornerRadius(10)({
      innerRadius: r - delta,
      outerRadius: r + delta,
      startAngle: scale(average - 14 - 1.5) + Math.PI/2,
      endAngle: scale(average - 14 + 1.5) + Math.PI/2
    }))
    .style("stroke", "black")
    .style("stroke-width", 2)
    .style("fill", "none");
  
  const ovu14 = svg.append("path")
    .attr("transform", `translate(${cx},${cy})`)
    .attr("d", d3.arc().cornerRadius(10)({
      innerRadius: r - deltaMore,
      outerRadius: r + deltaMore,
      startAngle: scale(average - 14 - 0.4) + Math.PI/2,
      endAngle: scale(average - 14 + 0.4) + Math.PI/2
    }))
    .style("stroke", "black")
    .style("stroke-width", 2)
    .style("fill", "lightgreen");

  const potentialStarts = svg.selectAll("path.starts")
    .data(distances)
    .enter().append("path")
    .attr("class", "starts")
    .attr("transform", `translate(${cx},${cy})`)
    .attr("d", d => d3.arc().cornerRadius(10)({
      innerRadius: r - deltaMore,
      outerRadius: r + deltaMore,
      startAngle: scale(d - 0.3) + Math.PI/2,
      endAngle: scale(d + 0.3) + Math.PI/2
    }))
    .style("fill", "red")
    .style("opacity", 0.2);


  const pms = svg.selectAll("text.pms")
    .data(d3.range(average - 4, average))
    .enter().append("text")
    .attr("class", "pms")
    .attr("x", (d,i) => cx + (r + 20) * Math.cos(scale(d) ))
    .attr("y", (d,i) => cy + (r + 20) * Math.sin(scale(d) ))
    .style("text-anchor", "middle")
    .style("dominant-baseline", "middle")
    .style("font-size", "2em")
    .text("☁️")
  

  
  
  const numbers = svg.selectAll("text.labels")
    .data(d3.range(cyclesPassed * average, (cyclesPassed + 1) * average).map(m => d3.utcDay.offset(lastStart, m )))
    .enter().append("text")
    .attr("class", "labels")
    .attr("x", (d,i) => cx + r * Math.cos(scale(i) ))
    .attr("y", (d,i) => cy + r * Math.sin(scale(i) ))
    .style("text-anchor", "middle")
    .style("dominant-baseline", "middle")
    .text((d,i) => dateOrDays === "DATE" ? d.getDate() : i + 1)


  const todayLine = svg
    .append("line")
    .attr("x1", cx )
    .attr("y1", cy )
    .attr("x2", cx + R * Math.cos(scale(daysToday)) )
    .attr("y2", cy + R * Math.sin(scale(daysToday)) )
    .style("stroke", "blue")
    .style("stroke-width", "2")
  
  const today = svg
    .append("circle")
    .attr("cx", cx + R * Math.cos(scale(daysToday)) )
    .attr("cy", cy + R * Math.sin(scale(daysToday)) )
    .attr("r", 5)
    .style("stroke", "blue")
    .style("fill", "blue")

  return svg;
}