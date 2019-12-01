let w = 1400;
let h = 500;
let padding = 25;

let viz = d3.select("#container").append("svg").style("background-color","lavender")
.attr("width",w).attr("height",h);

//initialise scales
let xScale = d3.scaleLinear().range([padding, w-padding]);

d3.csv("HCMST.csv").then(function(incomingData){
 console.log(incomingData);
 incomingData = incomingData.slice(0,50);



 let extent = d3.extent(incomingData,function(d){
   return parseInt(d.how_long_relationship)
 })
 console.log(extent)
// let domain = [minvalue,maxvalue]
 xScale.domain(extent);
 let xAxisGroup = viz.append("g").attr("class","xaxisgroup")
 let xAxis = d3.axisBottom(xScale);
 xAxisGroup.call(xAxis);

 incomingData.forEach(d=>{
   d.x = xScale(parseInt(d.how_long_relationship))
   d.y = h/2
 })







 let simulation = d3.forceSimulation(incomingData)
 // .force("forceX",d3.forceX(function(d){
 //   return xScale(parseInt(d.how_long_relationship))
 // }))
 // .force("forceY",d3.forceY(h/2))
 .force("collide",d3.forceCollide(8))

 .on("tick",simulationRan)
 .on("end",simulationEnded);
 console.log(incomingData)



 function simulationEnded(){
   // console.log(incomingData[0].x)
   // console.log(incomingData[0].y)
   // console.log("-----")
   viz.selectAll(".datapoint").data(incomingData).enter()
   .append("circle")
   .attr("class","datapoint")
   .attr("cx",function(d){
     return d.x
   })
   .attr("cy",function(d){
     return d.y
   })
   .attr("r",4);
   viz.selectAll(".datapoint").transition()
   .attr("cx",function(d){
     return d.x
   })
   .attr("cy",function(d){
     return d.y
   })

 }
 function simulationRan(){
   viz.selectAll(".datapoint").transition()
   .attr("cx",function(d){
     return d.x
   })
   .attr("cy",function(d){
     return d.y
   })
 }
})





// let viz = d3.select("#container").append("svg")
//     .style("width", w)
//     .style("height", h)
//     .style("background-color", "azure")
// ;
// let xScale = d3.scaleLinear().range([padding, w-padding]);
//
// viz.append("text").attr("class","title").text("How do they meet and how long do they stay together")
// .attr("x",100).attr("y",50)
// d3.csv("HCMST.csv").then(function(incomingData){
// console.log(incomingData)
//
//   //xscale and xaxis
//   duration = incomingData.map(function(d){
//     return parseInt(d.how_long_relationship)
//   });
//
//   console.log(duration)
//
//
//   xScale.domain( d3.extent(incomingData, function(d){
//     return parseInt(d.how_long_relationship)
//   }))
//
//
//
//   console.log(d3.extent(duration));
//   let xAxis = d3.axisBottom(xScale);
//   let xAxisGroup = viz.append("g")
//       .attr("class", "xaxisgroup")
//       .attr("transform", "translate(0,"+(h-padding)+")")
//   ;
//   xAxisGroup.call(xAxis);
//
//
//   let graphGroup = viz.append("g").attr("class", "graphgroup");
//   let datagroups = graphGroup.selectAll(".datagroup").data(incomingData).enter()
//     .filter(function(d){
//       return d.how_long_relationship != "";
//     })  // not even create groups for duration NaN
//     .append("g")
//       .attr("class", "datagroup")
//       .attr("transform", function(d){
//         return "translate("+ xScale(d.how_long_relationship) +","+(Math.random()*(h-padding*2)+padding)+")"
//       })
//   ;
//
//   datagroups
//   .filter(function(d){
//     return d.either_internet == "No" ;
//   })
//     .append("rect")
//     .attr("width", 10)
//     .attr("height", 10)
//
//     .attr("opacity", 0.5)
//     .attr("class","datarect")
//     .attr("fill","lightskyblue")
//   ;
//   datagroups
//   .filter(function(d){
//     return d.either_internet == "Yes" ;
//   })
//     .append("circle")
//     .attr("r", 5)
//     .attr("opacity", 0.5)
//     .attr("class","datacircle")
//     .attr("fill","hotpink")
//   ;
//   datagroups.append("text")
//   ;
//
//   datagroups.on("mouseover",function(d,i){
//
//     // console.log(d,i)
//     let element = d3.select(this);
//     element.select("circle").transition().attr("r",20)
//     element.select("rect").transition().attr("width",30).attr("height",30).attr("x",-10).attr("y",-10)
//     element.select("text").text(function(d){
//       return d.how_long_relationship
//     }).attr("y",-20).attr("x",-20)
//
//   }  )
//   datagroups.on("mouseout",function(){
//     let element = d3.select(this);
//     element.select("circle").transition().attr("r",5)
//     element.select("rect").transition().attr("width",10).attr("height",10)
//     element.select("text").transition().text("")
//   }  )
//
//
//
//
// })
// viz.append("circle").attr("r", 5)
//   .attr("opacity", 0.5)
//   .attr("class","illustration")
//   .attr("fill","hotpink")
//   .attr("cx",100).attr("cy",770)
// viz.append("text").attr("class","title").text("met online")
//   .attr("x",110).attr("y",775)
// viz.append("rect")
// .attr("width", 10)
// .attr("height", 10)
// .attr("opacity", 0.5)
// .attr("class","illustration")
// .attr("fill","lightskyblue")
// .attr("x",300).attr("y",760)
// viz.append("text").attr("class","title").text("not met online")
//   .attr("x",310).attr("y",775)
