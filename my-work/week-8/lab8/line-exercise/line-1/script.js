// data we work with
let data = [
  {
    "laughs": 0,
    "mood": 0
  },
  {
    "laughs": 3,
    "mood": 6
  },
  {
    "laughs": 4,
    "mood": 3
  },
  {
    "laughs": 8,
    "mood": 9
  }
];


let w = 900;
let h = 500;
let padding = 10;
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .style("outline", "solid black")
;


// let theSituation = viz.selectAll("circle").data(data);
// let entering = theSituation.enter();
// entering
//  .append("circle")
//  .attr("cx",getX)
//  .attr("cy",getY)
//  .attr("r",10);

let lineMaker = d3.line()
                  .x(getX)
                  .y(getY);
let test = lineMaker(data);
console.log(test)
// viz.append("path").attr("d",test).attr("fill","none").attr("stroke","cyan")


let theSituation = viz.datum(data)
theSituation.append("path").attr("d",lineMaker).attr("fill","none").attr("stroke","plum")



 let xScale = d3.scaleBand()
     .domain(data.map(function(d){return d.laugh}))
     .range([padding, w-padding])
     .paddingInner(0.1)
 ;
 function getX(d){
   return d.laughs *100
 }
 function getY(d){
   return d.mood *50
 }
 let xAxis = d3.axisBottom(xScale)
 let xAxisGroup = viz.append("g").classed("xAxis", true);
 xAxisGroup.call(xAxis);
 xAxisGroup.selectAll("text").attr("font-size", 24).attr("y", 9);
 xAxisGroup.attr("transform", "translate(0,"+ (h-padding) +")");
