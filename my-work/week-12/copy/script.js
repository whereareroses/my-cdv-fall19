let w = 1200;
let h = 600;
let padding = 40;
let s = 150
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
.attr("background-color","azure")
;

d3.csv("HCMST.csv").then(function(incomingData){

  // 1. verify dataset
  incomingData = incomingData.slice(0,300);
  console.log(incomingData)

  // 2. add x and y key
  incomingData.forEach(function (d){
    d.x = Math.random()*w
    d.y = Math.random()*h

  })


  // 3. place elements using x and y key
  let graphGroup = viz.append("g").attr("class", "graphgroup");
  let datagroups = graphGroup.selectAll(".datagroup").data(incomingData).enter()
    // .filter(function(d){
    //   return d.how_long_relationship != "";
    // })  // not even create groups for duration NaN
    .append("g")
    .attr("class", "datagroup")
    .attr("transform",function (d){
      return "translate(" + d.x + "," + d.y + ")"
    })
  ;
   datagroups.append("circle").attr("r",5).attr("fill","plum")

  // 4. apply simulation to dataset
  let simulation = d3.forceSimulation(incomingData)
  .force("forceX",d3.forceX(w/2))
  .force("forceY",d3.forceY(h/2))
   .force("collide",d3.forceCollide(8))
  .on("tick",simulationRan)

  console.log(incomingData)
  function simulationRan(){
    console.log("**");
    viz.selectAll(".datagroup").transition()
    .attr("transform",function (d){
      return "translate(" + d.x + "," + d.y + ")"
    })
  }

// datagroups.append("circle").attr("r",10).attr("fill","plum")





})
