let w = 1200;
let h = 600;
let padding = 40;
let s = 150
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
    return d.q24_P_cowork == "Yes" ;
  })
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x",function (d){return Math.random()*s + padding})
    .attr("y",function (d){return Math.random()*s + padding*2})
    .attr("opacity", 0.5)
    .attr("class","cowork")
    .attr("fill","lightskyblue")

  ;

  datagroups
  .filter(function(d){
    return d.q24_P_family == "Yes" ;
  })
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x",function (d){return Math.random()*s + padding +s +padding})
    .attr("y",function (d){return Math.random()*s + padding*2})
    .attr("opacity", 0.5)
    .attr("class","family")
    .attr("fill","plum")
  ;
  datagroups
  .filter(function(d){
    return d.q24_P_friend == "Yes" ;
  })
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x",function (d){return Math.random()*s + padding +(s +padding)*2})
    .attr("y",function (d){return Math.random()*s + padding*2})
    .attr("opacity", 0.5)
    .attr("class","friend")
    .attr("fill","salmon")
  ;
  datagroups
  .filter(function(d){
    return d.q24_P_neighbor == "Yes" ;
  })
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x",function (d){return Math.random()*s + padding +(s +padding)*3})
    .attr("y",function (d){return Math.random()*s + padding*2})
    .attr("opacity", 0.5)
    .attr("class","neighbor")
    .attr("fill","limegreen")
  ;
  datagroups
  .filter(function(d){
    return d.q24_P_sig_other == "Yes" ;
  })
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x",function (d){return Math.random()*s + padding +(s +padding)*4})
    .attr("y",function (d){return Math.random()*s + padding*2})
    .attr("opacity", 0.5)
    .attr("class","sigother")
    .attr("fill","darkorange")
  ;
  datagroups
  .filter(function(d){
    return d.q24_bar_restaurant == "Yes" ;
  })
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x",function (d){return Math.random()*s + padding +(s +padding)*5})
    .attr("y",function (d){return Math.random()*s + padding*2})
    .attr("opacity", 0.5)
    .attr("class","bar")
    .attr("fill","gold")
  ;
  datagroups
  .filter(function(d){
    return d.q24_blind_date == "Yes" ;
  })
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x",function (d){return Math.random()*s + padding})
    .attr("y",function (d){return Math.random()*s + padding*2 +s + padding*2})
    .attr("opacity", 0.5)
    .attr("class","blind")
    .attr("fill","khaki")
  ;
  datagroups
  .filter(function(d){
    return d.q24_internet_chat == "Yes" ;
  })
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x",function (d){return Math.random()*s + padding +s +padding})
    .attr("y",function (d){return Math.random()*s + padding*2 +s + padding*2})
    .attr("opacity", 0.5)
    .attr("class","i_chat")
    .attr("fill","indianred")
  ;
  datagroups
  .filter(function(d){
    return d.q24_internet_dating == "Yes" ;
  })
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x",function (d){return Math.random()*s + padding + (s +padding)*2})
    .attr("y",function (d){return Math.random()*s + padding*2 +s + padding*2})
    .attr("opacity", 0.5)
    .attr("class","i_dating")
    .attr("fill","mediumpurple")
  ;
  datagroups
  .filter(function(d){
    return d.q24_internet_game == "Yes" ;
  })
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x",function (d){return Math.random()*s + padding +(s +padding)*3})
    .attr("y",function (d){return Math.random()*s + padding*2 +s + padding*2})
    .attr("opacity", 0.5)
    .attr("class","i_game")
    .attr("fill","darkgray")
  ;
  datagroups
  .filter(function(d){
    return d.q24_internet_social_networking == "Yes" ;
  })
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x",function (d){return Math.random()*s + padding +(s +padding)*4})
    .attr("y",function (d){return Math.random()*s + padding*2 +s + padding*2})
    .attr("opacity", 0.5)
    .attr("class","i_social")
    .attr("fill","olivedrab")
  ;
  datagroups
  .filter(function(d){
    return d.q24_internet_other == "Yes" || d.q24_internet_community == "Yes";
  })
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("x",function (d){return Math.random()*s + padding+(s +padding)*5})
    .attr("y",function (d){return Math.random()*s + padding*2 +s + padding*2})
    .attr("opacity", 0.5)
    .attr("class","i_other")
    .attr("fill","teal")
  ;


  datagroups.append("text")
  ;
viz.append("text").text("met through cowork")
  .attr("x",padding).attr("y",s+padding*3);
viz.append("text").text("met through family")
  .attr("x",padding*2 +s).attr("y",s+padding*3);
viz.append("text").text("met through friend")
  .attr("x",padding*3 +s*2).attr("y",s+padding*3);
viz.append("text").text("met through neighbor")
  .attr("x",padding*4 +s*3).attr("y",s+padding*3);
viz.append("text").text("through significant other")
  .attr("x",padding*5 +s*4).attr("y",s+padding*3);
viz.append("text").text("through bar or restaurant")
  .attr("x",padding*6 +s*5).attr("y",s+padding*3);
viz.append("text").text("through blind date")
  .attr("x",padding).attr("y",s*2+padding*5);
viz.append("text").text("through blind date")
  .attr("x",padding*2 +s).attr("y",s*2+padding*5);
viz.append("text").text("Internet Chat")
  .attr("x",padding*3 +s*2).attr("y",s*2+padding*5);
viz.append("text").text("Internet game")
  .attr("x",padding*4 +s*3).attr("y",s*2+padding*5);
viz.append("text").text("Internet dating App")
  .attr("x",padding*5 +s*4).attr("y",s*2+padding*5);
viz.append("text").text("Internet Other")
  .attr("x",padding*6 + s*5).attr("y",s*2+padding*5);




  datagroups.on("mouseover",function(d,i){

    console.log(d,i)
    let element = d3.select(this);
    element.select("circle").transition().attr("r",20)
    element.select("rect").transition().attr("width",20).attr("height",20);
    element.select("text").text(function(d){
      return d.how_long_relationship
    }).attr("y",50).attr("x",550)

  }  )
  datagroups.on("mouseout",function(){
    let element = d3.select(this);
    element.select("circle").transition().attr("r",5)
    element.select("rect").transition().attr("width",10).attr("height",10)
    element.select("text").transition().text("")
  }  )





})
