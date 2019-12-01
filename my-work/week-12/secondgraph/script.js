let w = 1200;
let h = 600;
let padding = 60;
let s = 450
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)

;

d3.csv("HCMST.csv").then(function(incomingData){
  console.log(incomingData)
  let graphGroup = viz.append("g").attr("class", "graphgroup");
  let datagroups = graphGroup.selectAll(".datagroup").data(incomingData).enter()
    .filter(function(d){
      return d.how_long_relationship != "";
    })  // not even create groups for duration NaN
    .append("g")
      .attr("class", "datagroup")
  ;
  datagroups
    .filter(function(d){
      return d.either_internet == "Yes" ;
    })
      .append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("x",function (d){return Math.random()*s + padding*2})
      .attr("y",function (d){return Math.random()*s + padding})
      .attr("opacity", 0.5)
      .attr("class","cowork")
      .attr("fill","lightseagreen")

    ;

    datagroups
    .filter(function(d){
      return d.either_internet == "No" ;
    })
      .append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("x",function (d){return Math.random()*s + padding*2 +s +padding})
      .attr("y",function (d){return Math.random()*s + padding})
      .attr("opacity", 0.5)
      .attr("class","family")
      .attr("fill","thistle")
    ;
    datagroups.append("text")
    ;

    viz.append("text").text("met online")
      .attr("x",padding*5).attr("y",s+padding*2);
    viz.append("text").text("met offline")
      .attr("x",padding*6 +s).attr("y",s+padding*2);



  datagroups.on("mouseover",function(d,i){

    console.log(d,i)
    let element = d3.select(this);
    element.select("circle").transition().attr("r",20)
    element.select("rect").transition().attr("width",20).attr("height",20);
    element.select("text").text(function(d){
      return d.how_long_relationship
    }).attr("y",30).attr("x",550)

  }  )
  datagroups.on("mouseout",function(){
    let element = d3.select(this);
    element.select("circle").transition().attr("r",5)
    element.select("rect").transition().attr("width",10).attr("height",10)
    element.select("text").transition().text("")
  }  )





})
