let w = 1200
let h = 800
let xPadding = 50

let yScale = d3.scaleLinear().domain([0,800]).range([0,h/2]);
let xScale = d3.scaleLinear().domain([0,13]).range([0,w*2/3]);
let yScale2 = d3.scaleLinear().domain([800,0]).range([0,h/2]);




let colorScale = d3.scaleLinear().domain([300,400,697]).range(["lightblue","lightgreen","grey"])
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
    .style("background-color", "pink")
;


function gotData(incomingData){
  console.log(incomingData);

  let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .classed("datagroup", true)
  ;



  let rects = datagroups.append("rect")
      .attr("x", 0)
      .attr("y", function(d,i){
        return (-1)*height2(d,i)
      })
      .attr("width", 20)
      .attr("height", height2)
      .attr("fill", getColor)
  ;

  let labels = datagroups.append("text")
      .text(getDate)
      .attr("fill", getColor)
      .attr("transform", "rotate(90)")
  ;

  let xAxis = d3.axisBottom(xScale);
  let xAxisGroup = viz.append("g").attr("class","xaxis").call(xAxis).attr("transform","translate(100," + h*2/3 + ")");
  xAxisGroup.call(xAxis).attr("transform","translate(100," + h*2/3 + ")");

  let yAxisGroup = viz.append("g").attr("class","yaxis");
  yAxisGroup.call(d3.axisLeft(yScale2)).attr("transform","translate(100"  + "," + 133 + ")");




  datagroups.attr("transform", getGroupTranslation);



}












d3.json("screentime.json").then(gotData);
