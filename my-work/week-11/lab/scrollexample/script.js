import currentBox from "./leonScroller.js";
// imports just one function from a different file
// more info, import: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// more info, export: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

// we don't hardcode w and h this time
// but keep them responsive
// (see adjustVizHeight and resized function
// that are defined at the bottom)
let w, h;
let heightRatio = 1;
let padding = 90;
let duration;
let xScale = d3.scaleLinear().range([padding, w-padding]);

let viz = d3.select("#visualization")
    .append("svg")
  .style("background-color", "lavender")
;
// function to adjust viz height dynamically
// in order to keep the heightRatio at any given
// width of the browser window
// (function definition at the bottom)
adjustVizHeight();


// your script starts here, e.g. load data here.
d3.csv("HCMST.csv").then(function(data){
console.log(data)
//xscale and xaxis

xScale.domain( d3.extent(data,function(d){return d.how_long_relationship}) )
let xAxis = d3.axisBottom(xScale);
let xAxisGroup = viz.append("g")
    .attr("class", "xaxisgroup")
    .attr("transform", "translate(0,"+(h-padding)+")")
;
xAxisGroup.call(xAxis);


let graphGroup = viz.append("g").attr("class", "graphgroup");
let datagroups = graphGroup.selectAll(".datagroup").data(data).enter()
  .append("g")
    .attr("class", "datagroup")
    // .attr("transform", function(d){
      // return "translate("+ xScale(d.how_long_relationship) +","+(Math.random()*(h-padding*2)+padding)+")"
    // })
;
datagroups.append("circle")
  .attr("r", 5)
  .attr("opacity", 0.5)
  .attr("class","datacircle")
  .attr("fill","plum")
;
datagroups.append("text")
;

datagroups.on("mouseover",function(d,i){

  console.log(d,i)
  let element = d3.select(this);
  element.select("circle").transition().attr("r",20)
  element.select("text").text(function(d){
    return d.how_long_relationship
  }).attr("y",-20).attr("x",-20)

}  )
datagroups.on("mouseout",function(){
  let element = d3.select(this);
  element.select("circle").transition().attr("r",5)
  element.select("text").transition().text("")
}  )

})


// scrolling event listener
// you might move this block into the part of your code
// in which your data is loaded/available
let previousSection;
d3.select("#textboxes").on("scroll", function(){
  // the currentBox function is imported on the
  // very fist line of this script
  currentBox(function(box){
    console.log(box.id);

    if(box.id=="two" && box.id!=previousSection){
      console.log("changing viz");
      // trigger a new transition
      previousSection = box.id;
    }

  })
})







// function to adjust viz height dynamically
// in order to keep the heightRatio at any given
// width of the browser window
function adjustVizHeight(){
  viz.style("height", function(){
    w = parseInt(viz.style("width"), 10);
    h = w*heightRatio;
    return h;
  })
}
function resized(){
  adjustVizHeight()
}
window.addEventListener("resize", resized);
