let w = 1200;
let h = 800;
let padding = 90;
//questions:
//1. how to filter out 0
//2. why the scale is mismatch
//3. can i use if function to write
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color", "azure")
;
let xScale = d3.scaleLinear().range([padding, w-padding]);


d3.csv("HCMST.csv").then(function(incomingData){
console.log(incomingData)

  //xscale and xaxis
  duration = incomingData.map(function(d){return d.how_long_relationship});
  console.log(duration)
  xScale.domain( d3.extent(duration) )
  let xAxis = d3.axisBottom(xScale);
  let xAxisGroup = viz.append("g")
      .attr("class", "xaxisgroup")
      .attr("transform", "translate(0,"+(h-padding)+")")
  ;
  xAxisGroup.call(xAxis);


  let graphGroup = viz.append("g").attr("class", "graphgroup");
  let datagroups = graphGroup.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .attr("class", "datagroup")
      .attr("transform", function(d){
        return "translate("+ xScale(d.how_long_relationship) +","+(Math.random()*(h-padding*2)+padding)+")"
      })
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
