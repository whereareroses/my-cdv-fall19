let viz = d3.select("#container")
  .append("svg")
    .attr("width", 1200)
    .attr("height", 800)
    .style("background-color", "lightyellow")
;
let i = 0;
function getTime(d,i){
  return d.screenTime;
}





var timeAll = [322,396,320,418,433,355,406,697,610,639,778,379,605]
let num = d3.mean(timeAll);


var img = viz.append("img")
             .attr("xlink:href","icons/pickup.jpg")
             .attr("width",300)
             .attr("height",378)
 ;




function gotData(incomingData){
  console.log(incomingData);
  console.log(num);

  // let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
  //   .append("g")
  //     .classed("datagroup", true)
  // ;
  //
  // let points = datagroups.append("rect")
  //     .attr("x", 200)
  //     .attr("y", 500)
  //     .attr("width", 22)
  //     .attr("height", 22)
  //     .attr("fill", "black")
  // ;



}
while (i < num){
let groups = viz.append("g")
               .classed("datagroup", true)
    ;
let points = groups.append("rect")
      .attr("x", 200)
     .attr("y", 500)
    .attr("width", 22)
    .attr("height", 22)
    .attr("fill", "black")
    ;
    i++;
}







d3.json("screentime.json").then(gotData);
