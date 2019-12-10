import currentBox from "./leonScroller.js";
let w = 1610;
let h = 1800;
let padding = 40;
let s = 150;
let xScale = d3.scaleLinear().range([padding, w*0.6]);


let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
;

d3.csv("HCMST.csv").then(function(incomingData){

  incomingData = incomingData.filter(function(d){return d.how_long_relationship != "";})
  console.log(incomingData)

  incomingData.forEach(function (d){
    d.x = 0
    d.y = 0
  })

  let graphGroup = viz.append("g").attr("class", "graphgroup");
  let datagroups = graphGroup.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
    .attr("class", "datagroup");

let cowork = incomingData.filter(function(d){
  return d.met_through_as_coworkers == "1.0" &&
         d.met_through_family == "not met through family" &&
         d.met_through_as_neighbors == "did not meet through or as neighbors" &&
         d.met_through_friends == "not met through friends";});
datagroups
  .filter(function(d){
    return d.met_through_as_coworkers == "1.0" &&
           d.met_through_family == "not met through family" &&
           d.met_through_as_neighbors == "did not meet through or as neighbors" &&
           d.met_through_friends == "not met through friends";})
  .append("circle")
  .attr("r", 2.5)
  .attr("cx",function (d){return d.x})
  .attr("cy",function (d){return d.y})
  .attr("class","cowork")
  .attr("fill","lightskyblue")
  ;

let family = incomingData.filter(function(d){
  return d.met_through_as_coworkers == "0.0" &&
         d.met_through_family == "met through family" &&
         d.met_through_as_neighbors == "did not meet through or as neighbors" &&
         d.met_through_friends == "not met through friends";})
  datagroups
  .filter(function(d){
    return d.met_through_as_coworkers == "0.0" &&
           d.met_through_family == "met through family" &&
           d.met_through_as_neighbors == "did not meet through or as neighbors" &&
           d.met_through_friends == "not met through friends"
  })
    .append("circle")
    .attr("r", 2.5)
    .attr("cx",function (d){return d.x})
    .attr("cy",function (d){return d.y})
    .attr("class","family")
    .attr("fill","plum")
  ;



let friend = incomingData.filter(function (d){return d.met_through_as_coworkers == "0.0" &&
       d.met_through_family == "not met through family" &&
       d.met_through_as_neighbors == "did not meet through or as neighbors" &&
       d.met_through_friends == "meet through friends"})
  datagroups
    .filter(function (d){
    return d.met_through_as_coworkers == "0.0" &&
           d.met_through_family == "not met through family" &&
           d.met_through_as_neighbors == "did not meet through or as neighbors" &&
           d.met_through_friends == "meet through friends";})
    .append("circle")
    .attr("r", 2.5)
    .attr("cx",function (d){return d.x})
    .attr("cy",function (d){return d.y})
    // .attr("opacity", 0.5)
    .attr("class","friend")
    .attr("fill","salmon")
  ;



let neighbor = incomingData.filter(function(d){return d.met_through_as_coworkers == "0.0" &&
       d.met_through_family == "not met through family" &&
       d.met_through_as_neighbors == "met through or as neighbors" &&
       d.met_through_friends == "not met through friends";})
  datagroups
    .filter(function(d){return d.met_through_as_coworkers == "0.0" &&
           d.met_through_family == "not met through family" &&
           d.met_through_as_neighbors == "met through or as neighbors" &&
           d.met_through_friends == "not met through friends";})
    .append("circle")
    .attr("r", 2.5)
    .attr("cx",function (d){return d.x})
    .attr("cy",function (d){return d.y})
    .attr("class","neighbor")
    .attr("fill","limegreen")
  ;




let other = incomingData.filter(function(d){return d.met_through_as_coworkers == "0.0" &&
       d.met_through_family == "not met through family" &&
       d.met_through_as_neighbors == "did not meet through or as neighbors" &&
       d.met_through_friends == "not met through friends" &&
       d.either_internet == "No"
        ;})
  datagroups
  .filter(function(d){return d.met_through_as_coworkers == "0.0" &&
         d.met_through_family == "not met through family" &&
         d.met_through_as_neighbors == "did not meet through or as neighbors" &&
         d.met_through_friends == "not met through friends" &&
         d.either_internet == "No"
           ;})
  .append("circle")
  .attr("r", 2.5)
  .attr("cx",function (d){return d.x})
  .attr("cy",function (d){return d.y})
  .attr("class","other")
  .attr("fill","gold")
  ;


let chat = incomingData.filter(function(d){return d.met_through_as_coworkers == "0.0" &&
       d.met_through_family == "not met through family" &&
       d.met_through_as_neighbors == "did not meet through or as neighbors" &&
       d.met_through_friends == "not met through friends" &&
       d.either_internet == "Yes" &&
       d.either_internet == "Yes" &&
       d.q24_internet_chat == "Yes" &&
       d.q24_internet_dating == "No" &&
       d.q24_internet_game == "No" &&
       d.q24_internet_other == "No" &&
       d.q24_internet_social_networking == "No";})
  datagroups
  .filter(function(d){return d.met_through_as_coworkers == "0.0" &&
         d.met_through_family == "not met through family" &&
         d.met_through_as_neighbors == "did not meet through or as neighbors" &&
         d.met_through_friends == "not met through friends" &&
         d.either_internet == "Yes" &&
         d.q24_internet_chat == "Yes" &&
         d.q24_internet_dating == "No" &&
         d.q24_internet_game == "No" &&
         d.q24_internet_other == "No" &&
         d.q24_internet_social_networking == "No"
;})
   .append("circle")
   .attr("r", 2.5)
   .attr("cx",function (d){return d.x})
   .attr("cy",function (d){return d.y})
    .attr("class","chat")
    .attr("fill","deeppink")
  ;


let game = incomingData.filter(function(d){return d.met_through_as_coworkers == "0.0" &&
       d.met_through_family == "not met through family" &&
       d.met_through_as_neighbors == "did not meet through or as neighbors" &&
       d.met_through_friends == "not met through friends" &&
       d.either_internet == "Yes" &&
       d.either_internet == "Yes" &&
       d.q24_internet_chat == "No" &&
       d.q24_internet_dating == "No" &&
       d.q24_internet_game == "Yes" &&
       d.q24_internet_other == "No" &&
       d.q24_internet_social_networking == "No";})
  datagroups
  .filter(function(d){return d.met_through_as_coworkers == "0.0" &&
         d.met_through_family == "not met through family" &&
         d.met_through_as_neighbors == "did not meet through or as neighbors" &&
         d.met_through_friends == "not met through friends" &&
         d.either_internet == "Yes" &&
         d.q24_internet_chat == "No" &&
         d.q24_internet_dating == "No" &&
         d.q24_internet_game == "Yes" &&
         d.q24_internet_other == "No" &&
         d.q24_internet_social_networking == "No"
;})
   .append("circle")
   .attr("r", 2.5)
   .attr("cx",function (d){return d.x})
   .attr("cy",function (d){return d.y})
    .attr("class","game")
    .attr("fill","lavender")
  ;



let dating = incomingData.filter(function(d){return d.met_through_as_coworkers == "0.0" &&
       d.met_through_family == "not met through family" &&
       d.met_through_as_neighbors == "did not meet through or as neighbors" &&
       d.met_through_friends == "not met through friends" &&
       d.either_internet == "Yes" &&
       d.either_internet == "Yes" &&
       d.q24_internet_chat == "No" &&
       d.q24_internet_dating == "Yes" &&
       d.q24_internet_game == "No" &&
       d.q24_internet_other == "No" &&
       d.q24_internet_social_networking == "No";})
  datagroups
  .filter(function(d){return d.met_through_as_coworkers == "0.0" &&
         d.met_through_family == "not met through family" &&
         d.met_through_as_neighbors == "did not meet through or as neighbors" &&
         d.met_through_friends == "not met through friends" &&
         d.either_internet == "Yes" &&
         d.q24_internet_chat == "No" &&
         d.q24_internet_dating == "Yes" &&
         d.q24_internet_game == "No" &&
         d.q24_internet_other == "No" &&
         d.q24_internet_social_networking == "No"
;})
   .append("circle")
   .attr("r", 2.5)
   .attr("cx",function (d){return d.x})
   .attr("cy",function (d){return d.y})
    .attr("class","dating")
    .attr("fill","aqua")
  ;


let social = incomingData.filter(function(d){return d.met_through_as_coworkers == "0.0" &&
       d.met_through_family == "not met through family" &&
       d.met_through_as_neighbors == "did not meet through or as neighbors" &&
       d.met_through_friends == "not met through friends" &&
       d.either_internet == "Yes" &&
       d.either_internet == "Yes" &&
       d.q24_internet_chat == "No" &&
       d.q24_internet_dating == "No" &&
       d.q24_internet_game == "No" &&
       d.q24_internet_other == "No" &&
       d.q24_internet_social_networking == "Yes";})
  datagroups
  .filter(function(d){return d.met_through_as_coworkers == "0.0" &&
         d.met_through_family == "not met through family" &&
         d.met_through_as_neighbors == "did not meet through or as neighbors" &&
         d.met_through_friends == "not met through friends" &&
         d.either_internet == "Yes" &&
         d.q24_internet_chat == "No" &&
         d.q24_internet_dating == "No" &&
         d.q24_internet_game == "No" &&
         d.q24_internet_other == "No" &&
         d.q24_internet_social_networking == "Yes"
;})
   .append("circle")
   .attr("r", 2.5)
   .attr("cx",function (d){return d.x})
   .attr("cy",function (d){return d.y})
    .attr("class","game")
    .attr("fill","peachpuff")
  ;


let iother = incomingData.filter(function(d){return d.met_through_as_coworkers == "0.0" &&
       d.met_through_family == "not met through family" &&
       d.met_through_as_neighbors == "did not meet through or as neighbors" &&
       d.met_through_friends == "not met through friends" &&
       d.either_internet == "Yes" &&
       d.either_internet == "Yes" &&
       d.q24_internet_chat == "No" &&
       d.q24_internet_dating == "No" &&
       d.q24_internet_game == "No" &&
       d.q24_internet_community == "No" &&
       d.q24_internet_social_networking == "No";})
  datagroups
  .filter(function(d){return d.met_through_as_coworkers == "0.0" &&
         d.met_through_family == "not met through family" &&
         d.met_through_as_neighbors == "did not meet through or as neighbors" &&
         d.met_through_friends == "not met through friends" &&
         d.either_internet == "Yes" &&
         d.q24_internet_chat == "No" &&
         d.q24_internet_dating == "No" &&
         d.q24_internet_game == "No" &&
         d.q24_internet_community == "No" &&
         d.q24_internet_social_networking == "No"
;})
   .append("circle")
   .attr("r", 2.5)
   .attr("cx",function (d){return d.x})
   .attr("cy",function (d){return d.y})
    .attr("class","iother")
    .attr("fill","palegreen")
  ;

  document.body.addEventListener("click", function(){
    console.log("click");
  let online = incomingData.filter(function(d){return d.either_internet == "Yes" })
  datagroups.filter(function(d){return d.either_internet == "Yes" }).attr("class","online")
  let offline = incomingData.filter(function(d){return d.either_internet == "No" })
  datagroups.filter(function(d){return d.either_internet == "No" }).attr("class","offline")


        let simulation11 = d3.forceSimulation(online)
        .force("forceX",d3.forceX(w/4))
        .force("forceY",d3.forceY(h/2))
        .force("collide",d3.forceCollide(3))
        .on("tick", simulation11Ran)
        ;
        let simulation12 = d3.forceSimulation(offline)
        .force("forceX",d3.forceX(w/4*3))
        .force("forceY",d3.forceY(h/2))
        .force("collide",d3.forceCollide(3))
        .on("tick", simulation12Ran)
        ;


        //       .on("tick", simulation11Ran).restart()
              function simulation11Ran(){
                    viz.selectAll(".online") //.transition()
                    .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}
        //
        //   simulation12
        //     .on("tick", simulation12Ran).restart()
            function simulation12Ran(){
                  viz.selectAll(".offline") //.transition()
                  .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}
})


  datagroups.append("text").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "25px")
  ;

  let simulation1 = d3.forceSimulation(cowork)
  .force("forceX",d3.forceX(padding +s/2))
  .force("forceY",d3.forceY(padding*2 + s/2))
  .force("collide",d3.forceCollide(3));
  let simulation2 = d3.forceSimulation(family)
  .force("forceX",d3.forceX(padding +s/2 +s +padding))
  .force("forceY",d3.forceY(padding*2 + s/2))
  .force("collide",d3.forceCollide(3));
  let simulation3 = d3.forceSimulation(friend)
  .force("forceX",d3.forceX(padding +s/2 +(s +padding)*2))
  .force("forceY",d3.forceY(padding*2 + s/2))
  .force("collide",d3.forceCollide(3));
  let simulation4 = d3.forceSimulation(neighbor)
    .force("forceX",d3.forceX(padding +s/2 +(s +padding)*3))
    .force("forceY",d3.forceY(padding*2 + s/2))
    .force("collide",d3.forceCollide(3));
  let simulation5 = d3.forceSimulation(other)
    .force("forceX",d3.forceX(padding +s/2 +(s +padding)*4))
    .force("forceY",d3.forceY(padding*2 + s/2))
    .force("collide",d3.forceCollide(3));
  let simulation6 = d3.forceSimulation(chat)
        .force("forceX",d3.forceX(padding +s/2))
        .force("forceY",d3.forceY(padding*2 + s/2 +s + padding*2))
        .force("collide",d3.forceCollide(3));
  let simulation7 = d3.forceSimulation(game)
        .force("forceX",d3.forceX(padding +s/2 + s +padding ))
        .force("forceY",d3.forceY(padding*2 + s/2 +s + padding*2))
        .force("collide",d3.forceCollide(3));
  let simulation8 = d3.forceSimulation(dating)
        .force("forceX",d3.forceX(padding +s/2 + (s +padding)*2 ))
        .force("forceY",d3.forceY(padding*2 + s/2 +s + padding*2))
        .force("collide",d3.forceCollide(3));
  let simulation9 = d3.forceSimulation(social)
        .force("forceX",d3.forceX(padding +s/2 + (s +padding)*3 ))
        .force("forceY",d3.forceY(padding*2 + s/2 +s + padding*2))
        .force("collide",d3.forceCollide(3));
  let simulation10 = d3.forceSimulation(iother)
        .force("forceX",d3.forceX(padding +s/2 + (s +padding)*4 ))
        .force("forceY",d3.forceY(padding*2 + s/2 +s + padding*2))
        .force("collide",d3.forceCollide(3));
simulation1.on("tick", simulation1Ran);

function simulation1Ran(){
      console.log("running");
      viz.selectAll(".cowork") //.transition()
      .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}

simulation2.on("tick", simulation2Ran);
function simulation2Ran(){
      viz.selectAll(".family") //.transition()
      .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}

simulation3.on("tick", simulation3Ran);
function simulation3Ran(){
      viz.selectAll(".friend") //.transition()
      .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}

simulation4.on("tick", simulation4Ran);
  function simulation4Ran(){
        viz.selectAll(".neighbor") //.transition()
        .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}

simulation5.on("tick", simulation5Ran);
    function simulation5Ran(){
          viz.selectAll(".other") //.transition()
          .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}

simulation6.on("tick", simulation6Ran);
      function simulation6Ran(){
            viz.selectAll(".chat") //.transition()
            .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}

simulation7.on("tick", simulation7Ran);
      function simulation7Ran(){
            viz.selectAll(".game") //.transition()
            .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}
simulation8.on("tick", simulation8Ran);
      function simulation8Ran(){
            viz.selectAll(".dating") //.transition()
            .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}
simulation9.on("tick", simulation9Ran);
      function simulation9Ran(){
            viz.selectAll(".social") //.transition()
            .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}
simulation10.on("tick", simulation10Ran);
      function simulation10Ran(){
            viz.selectAll(".iother")//.transition()
            .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}
    viz.append("text").transition().text("How do they meet?").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "25px").attr("x",100).attr("y",30);
    viz.append("text").transition().text("met through cowork").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "15px")
      .attr("x",padding).attr("y",s+padding*3);
    viz.append("text").transition().text("met through family").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "15px")
      .attr("x",padding*2 +s).attr("y",s+padding*3);
    viz.append("text").transition().text("met through friend").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "15px")
      .attr("x",padding*3 +s*2).attr("y",s+padding*3);
    viz.append("text").transition().text("met through neighbor").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "15px")
      .attr("x",padding*4 +s*3).attr("y",s+padding*3);
    viz.append("text").transition().text("Offline other ways").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "15px")
      .attr("x",padding*5 +s*4).attr("y",s+padding*3);
    viz.append("text").transition().text("Internet Chat").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "15px")
      .attr("x",padding*2).attr("y",s*2+padding*5);
    viz.append("text").transition().text("Internet game").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "15px")
      .attr("x",padding*2 +s).attr("y",s*2+padding*5);
    viz.append("text").transition().text("Internet dating App").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "15px")
      .attr("x",padding*3 +s*2).attr("y",s*2+padding*5);
    viz.append("text").transition().text("Social Networking").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "15px")
      .attr("x",padding*4 +s*3).attr("y",s*2+padding*5);
    viz.append("text").transition().text("Internet other ways").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "15px")
      .attr("x",padding*5 +s*4).attr("y",s*2+padding*5);
    viz.append("text").transition().text("Online vs Offline?").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "25px").attr("x",100).attr("y",600);
    viz.append("text").transition().text("met online").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "15px")
      .attr("x",padding*2 +s).attr("y",600 + padding*3+s*2);
    viz.append("text").transition().text("met offline").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "15px")
      .attr("x",padding*4 +s*3).attr("y",600+padding*3+s*2);
    viz.append("text").transition().text("Relationship Duration").attr("fill","white").attr("font-family", "Baskerville").attr("font-size", "25px").attr("x",100).attr("y",1100);



//xscale and xaxis
  let duration = incomingData.map(function(d){
      return parseInt(d.how_long_relationship)
    });

    console.log(duration)


    xScale.domain( d3.extent(incomingData, function(d){
      return parseInt(d.how_long_relationship)
    }))



    console.log(d3.extent(duration));
    let xAxis = d3.axisBottom(xScale);
    let xAxisGroup = viz.append("g")
        .attr("class", "xaxisgroup")
        .attr("transform", "translate(0,"+(h-padding*2)+")")
    ;
    xAxisGroup.call(xAxis).attr("fill","white");



// scrolling event listener
let previousSection;
d3.select("#textboxes").on("scroll", function(){
  currentBox(function(box){
    console.log(box.id);
    if(box.id == "one" && box.id!=previousSection){

      }
    else if(box.id=="two" && box.id!=previousSection){
      console.log("changing viz");
      previousSection = box.id;


// simulation11
//       .on("tick", simulation11Ran).restart()
//       function simulation11Ran(){
//             viz.selectAll(".online").transition()
//             .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}
//
//   simulation12
//     .on("tick", simulation12Ran).restart()
//     function simulation12Ran(){
//           viz.selectAll(".offline").transition()
//           .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})}
}
    else if(box.id == "three" && box.id != previousSection){
      console.log("changing viz");
      previousSection = box.id;
    }

  })
})







// //second graph
//   datagroups
//     .filter(function(d){
//       return d.either_internet == "Yes" ;
//     })
//       .append("rect")
//       .attr("width", 10)
//       .attr("height", 10)
//       .attr("x",function (d){return Math.random()*s*3 + padding*2})
//       .attr("y",function (d){return Math.random()*s*3 + padding + s*5})
//       .attr("opacity", 0.5)
//       .attr("class","cowork")
//       .attr("fill","lightseagreen")
//
//     ;
//
//     datagroups
//     .filter(function(d){
//       return d.either_internet == "No" ;
//     })
//       .append("rect")
//       .attr("width", 10)
//       .attr("height", 10)
//       .attr("x",function (d){return Math.random()*s*3 + padding*2 +s*3 +padding})
//       .attr("y",function (d){return Math.random()*s*3 + padding +s*5})
//       .attr("opacity", 0.5)
//       .attr("class","family")
//       .attr("fill","thistle")
//     ;
    // datagroups.append("text").attr("fill","white"
    // ;
//
//     viz.append("text").text("met online")
//       .attr("x",padding*5).attr("y",s+padding*2+s*7).attr("fill","white");
//     viz.append("text").text("met offline")
//       .attr("x",padding*6 +s*3).attr("y",s+padding*2+s*7).attr("fill","white");

  datagroups.on("mouseover",function(d,i){

    console.log(d,i)
    let element = d3.select(this);
    element.select("circle").transition().attr("r",10)
    element.select("text").text(function (d,i){return d.how_long_relationship}).attr("y",70).attr("x",w - 500)

  }  )
  datagroups.on("mouseout",function(){
    let element = d3.select(this);
    element.select("circle").transition().attr("r",2.5)
    element.select("text").transition().text("")
  }  )





})
