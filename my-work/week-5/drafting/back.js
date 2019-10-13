let w = 1200
let h = 800
let xPadding = 50

let yScale = d3.scaleLinear().domain([0,800]).range([0,h/2]);
let xScale = d3.scaleLinear().domain([0,14]).range([0,w*2/3]);
let yScale2 = d3.scaleLinear().domain([800,0]).range([0,h/2]);


let colorScale = d3.scaleLinear().domain([300,400,697]).range(["cyan","springGreen","steelblue"])
function xPosition(d, i){
  return xScale(i)+100;
}
function getGroupTranslation(d, i){
  return "translate(" + xPosition(d,i) + "," + h*2/3 + ")";
}
function getDate(d, i){
  return d.date + " - " + d.screentime + "mins"
}
function height2(d,i){
  return yScale(d.screentime);
}
function getColor(d,i){
  return colorScale(d.screentime);

}



let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;


function gotData(incomingData){
  console.log(incomingData);

  let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .classed("datagroup", true)
  ;


viz.append("text")
  .text("This is the bar graph of the screentime on each day from 9.24 - 10.7.")
  .attr("y", -40)
  .attr("x",10)
  .attr("font-size","20")
  .attr("font","Times New Roman")
  .attr("font-stretch", "semi-expanded")
  .attr("fill", "navy")
  .attr("transform", "rotate(90)")
;
viz.append("text")
  .text("The deeper the color is, the more of the screemtime is on that day.")
  .attr("y", -10)
  .attr("x",10)
  .attr("font-size","20")
  .attr("font","Times New Roman")
  .attr("font-stretch", "semi-expanded")
  .attr("fill", "navy")
  .attr("transform", "rotate(90)")
  ;

  let rects = datagroups.append("rect")
      .attr("x", 150)
      .attr("y", function(d,i){
        return (-1)*height2(d,i)
      })
      .attr("width", 20)
      .attr("height", height2)
      .attr("fill", getColor)
  ;

  let labels = datagroups.append("text")
      .text(getDate)
      .attr("y", -150)
      .attr("x",10)
      .attr("fill", getColor)
      .attr("transform", "rotate(90)")
  ;

  let xAxis = d3.axisTop(xScale);
  let xAxisGroup = viz.append("g").attr("class","xaxis").call(xAxis).attr("transform","translate(100," + h*2/3 + ")");
  xAxisGroup.call(xAxis).attr("transform","translate(250," + h*2/3 + ")");

  let yAxisGroup = viz.append("g").attr("class","yaxis");
  yAxisGroup.call(d3.axisLeft(yScale2)).attr("transform","translate(250"  + "," + 133 + ")");




  datagroups.attr("transform", getGroupTranslation);



}












d3.json("screentime.json").then(gotData);
