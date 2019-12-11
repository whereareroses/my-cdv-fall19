import currentBox from "./leonScroller.js";
let w = 1700;
let h = 800;
let padding = 40;
let s = 150;
let xScale = d3.scaleLinear().range([padding, w*0.6]);
let graphStage = 1;
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName('close')[0];
// make the duration as their radius
// make the y axis

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
    .filter(d=>{
      if (isCowork(d) || isFamily(d)|| isFriend(d)
      || isNeighbor(d) || isOther(d)|| isChat(d)
      || isGame(d) || isDating(d) || isSocial(d) || isIOther(d)){
        return true
      }
      else{ return false};
    })
    .append("g")
    .attr("class", "datagroup")
    .append("circle")
    .attr("r", 2.5)
    .attr("cx",function (d){return d.x})
    .attr("cy",function (d){return d.y})
    ;

  function isCowork(d){
    return d.met_through_as_coworkers == "1.0" &&
           d.met_through_family == "not met through family" &&
           d.met_through_as_neighbors == "did not meet through or as neighbors" &&
           d.met_through_friends == "not met through friends"
  }
  function isFamily(d){
    return d.met_through_as_coworkers == "0.0" &&
           d.met_through_family == "met through family" &&
           d.met_through_as_neighbors == "did not meet through or as neighbors" &&
           d.met_through_friends == "not met through friends"
  }
  function isFriend(d){
    return d.met_through_as_coworkers == "0.0" &&
           d.met_through_family == "not met through family" &&
           d.met_through_as_neighbors == "did not meet through or as neighbors" &&
           d.met_through_friends == "meet through friends";
  }
  function isNeighbor(d){
    return d.met_through_as_coworkers == "0.0" &&
           d.met_through_family == "not met through family" &&
           d.met_through_as_neighbors == "met through or as neighbors" &&
           d.met_through_friends == "not met through friends";
  }
  function isOther(d){
    return d.met_through_as_coworkers == "0.0" &&
           d.met_through_family == "not met through family" &&
           d.met_through_as_neighbors == "did not meet through or as neighbors" &&
           d.met_through_friends == "not met through friends" &&
           d.either_internet == "No"
  }
  function isChat(d){
    return d.met_through_as_coworkers == "0.0" &&
           d.met_through_family == "not met through family" &&
           d.met_through_as_neighbors == "did not meet through or as neighbors" &&
           d.met_through_friends == "not met through friends" &&
           d.either_internet == "Yes" &&
           d.either_internet == "Yes" &&
           d.q24_internet_chat == "Yes" &&
           d.q24_internet_dating == "No" &&
           d.q24_internet_game == "No" &&
           d.q24_internet_other == "No" &&
           d.q24_internet_social_networking == "No";
  }
  function isGame(d){
    return d.met_through_as_coworkers == "0.0" &&
           d.met_through_family == "not met through family" &&
           d.met_through_as_neighbors == "did not meet through or as neighbors" &&
           d.met_through_friends == "not met through friends" &&
           d.either_internet == "Yes" &&
           d.either_internet == "Yes" &&
           d.q24_internet_chat == "No" &&
           d.q24_internet_dating == "No" &&
           d.q24_internet_game == "Yes" &&
           d.q24_internet_other == "No" &&
           d.q24_internet_social_networking == "No"
  }
  function isDating(d){
    return d.met_through_as_coworkers == "0.0" &&
           d.met_through_family == "not met through family" &&
           d.met_through_as_neighbors == "did not meet through or as neighbors" &&
           d.met_through_friends == "not met through friends" &&
           d.either_internet == "Yes" &&
           d.either_internet == "Yes" &&
           d.q24_internet_chat == "No" &&
           d.q24_internet_dating == "Yes" &&
           d.q24_internet_game == "No" &&
           d.q24_internet_other == "No" &&
           d.q24_internet_social_networking == "No";
  }
  function isSocial(d){
    return d.met_through_as_coworkers == "0.0" &&
           d.met_through_family == "not met through family" &&
           d.met_through_as_neighbors == "did not meet through or as neighbors" &&
           d.met_through_friends == "not met through friends" &&
           d.either_internet == "Yes" &&
           d.either_internet == "Yes" &&
           d.q24_internet_chat == "No" &&
           d.q24_internet_dating == "No" &&
           d.q24_internet_game == "No" &&
           d.q24_internet_other == "No" &&
           d.q24_internet_social_networking == "Yes"
  }
  function isIOther(d){
    return d.met_through_as_coworkers == "0.0" &&
           d.met_through_family == "not met through family" &&
           d.met_through_as_neighbors == "did not meet through or as neighbors" &&
           d.met_through_friends == "not met through friends" &&
           d.either_internet == "Yes" &&
           d.q24_internet_chat == "No" &&
           d.q24_internet_dating == "No" &&
           d.q24_internet_game == "No" &&
           d.q24_internet_community == "No" &&
           d.q24_internet_social_networking == "No"
  }
  function isOnline(d){
    return d.either_internet == "Yes"
  }
  viz.selectAll(".datagroup").attr("fill",function(d){
      if (isCowork(d) == true){
        return "lightskyblue"
      }
      else if(isFamily(d) == true){
        return "plum"
      }
      else if(isFriend(d) == true){
        return "salmon"
      }
      else if(isNeighbor(d) == true){
        return "limegreen"
      }
      else if(isOther(d) == true){
        return "gold"
      }
      else if(isChat(d) == true){
        return "deeppink"
      }
      else if(isGame(d) == true){
        return "lavender"
      }
      else if(isDating(d) == true){
        return "aqua"
      }
      else if(isSocial(d) == true){
        return "peachpuff"
      }
      else if(isIOther(d) == true){
        return "palegreen"
      }})
  let clusters = [];
  clusters.push(  incomingData.find(isCowork)  )
  clusters.push(  incomingData.find(isFamily)  )
  clusters.push(  incomingData.find(isFriend)  )
  clusters.push(  incomingData.find(isNeighbor)  )
  clusters.push(  incomingData.find(isOther)  )
  clusters.push(  incomingData.find(isChat)  )
  clusters.push(  incomingData.find(isGame)  )
  clusters.push(  incomingData.find(isDating)  )
  clusters.push(  incomingData.find(isSocial)  )
  clusters.push(  incomingData.find(isIOther)  )
  console.log(clusters);

  let simulation = d3.forceSimulation(incomingData)
  .force("forceX",d3.forceX(function (d){

    if(graphStage == 1){
      if (isCowork(d) == true){
        return padding +s/2
      }
      else if(isFamily(d) == true){
        return padding +s/2 +s +padding
      }
      else if(isFriend(d) == true){
        return padding +s/2 +(s +padding)*2
      }
      else if(isNeighbor(d) == true){
        return padding +s/2 +(s +padding)*3
      }
      else if(isOther(d) == true){
        return padding +s/2 +(s +padding)*4
      }
      else if(isChat(d) == true){
        return padding +s/2
      }
      else if(isGame(d) == true){
        return padding +s/2 +(s +padding)
      }
      else if(isDating(d) == true){
        return padding +s/2 +(s +padding)*2
      }
      else if(isSocial(d) == true){
        return padding +s/2 +(s +padding)*3
      }
      else if(isIOther(d) == true){
        return padding +s/2 +(s +padding)*4
      }
      else{ return 0};
    }else if(graphStage == 2){
      if(isOnline(d) == true){
        return w/4
      }
      else{
        return w/2
      }
    }
    else{
      return padding + xScale(parseInt(d.how_long_relationship))
      }
    }))
  .force("forceY",d3.forceY(function (d){
    if(graphStage == 1){
    if (isCowork(d) == true){
      return padding*2 + s/2
    }
    else if(isFamily(d) == true){
      return padding*2 + s/2
    }
    else if(isFriend(d) == true){
      return padding*2 + s/2
    }
    else if(isNeighbor(d) == true){
      return padding*2 + s/2
    }
    else if(isOther(d) == true){
      return padding*2 + s/2
    }
    else if(isChat(d) == true){
      return padding*2 + s/2 +s + padding*2
    }
    else if(isGame(d) == true){
      return padding*2 + s/2 +s + padding*2
    }
    else if(isDating(d) == true){
      return padding*2 + s/2 +s + padding*2
    }
    else if(isSocial(d) == true){
      return padding*2 + s/2 +s + padding*2
    }
    else if(isIOther(d) == true){
      return padding*2 + s/2 +s + padding*2
    }
    else{ return 0};
  }else if(graphStage == 2){
    return h/4
    }
    else{
    return h/2
    }
  }
  ))
  .force("collide",d3.forceCollide(3))
  .on("tick", simulationRan)
  .alpha(0.5)
  ;
  function simulationRan(){
        viz.selectAll(".datagroup")
        .attr("transform",function (d){return "translate(" + d.x + "," + d.y + ")"})
      };












function forceCluster(alpha) {
  let d;
  let cluster;
  let k = alpha * 1;

  for(let i = 0 ; i< incomingData.length; ++i){
    d = incomingData[i];
    if (isCowork(d)){  cluster = clusters[0]  }
    else if(isFamily(d)){  cluster = clusters[1]  }
    else if(isFriend(d)){  cluster = clusters[2]  }
    else if(isNeighbor(d)){  cluster = clusters[3]  }
    else if(isOther(d)){  cluster = clusters[4]  }
    else if(isChat(d)){  cluster = clusters[5]  }
    else if(isGame(d)){  cluster = clusters[6]  }
    else if(isDating(d)){  cluster = clusters[7]  }
    else if(isSocial(d)){  cluster = clusters[8]  }
    else if(isIOther(d)){  cluster = clusters[9]  }
    d.vx -= (d.x - cluster.x) * k;
    d.vy -= (d.y - cluster.y) * k;
  }
}

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
    xAxisGroup.call(xAxis);



// scrolling event listener
let previousSection;
d3.select("#textboxes").on("scroll", function(){
  currentBox(function(box){
    console.log(box.id);
    if(box.id=="two" && box.id!=previousSection){
      console.log("changing viz");
      graphStage = 2
      simulation.force("forceX").initialize(incomingData);
      simulation.force("forceY").initialize(incomingData);
      simulation.alpha(0.5);
      simulation.restart();
      previousSection = box.id;
      let texts1 = document.getElementsByClassName('graph1');
      let texts2 = document.getElementsByClassName("graph2")
      for(let text1 of texts1){
        text1.style.display= "none"
      }
      for(let text2 of texts2){
        text2.style.display= "block"
      }
      viz.selectAll(".datagroup").transition().attr("fill",function(d){
        if(isOnline(d)){
          return "hotpink"
        }
        else{
          return "lightskyblue"
        }
      }).attr("opacity",0.8)
  }
    else if(box.id == "three" && box.id != previousSection){
      console.log("changing viz");
      graphStage = 3
      simulation.force("forceX").initialize(incomingData);
      simulation.force("forceY").initialize(incomingData);
      simulation.alpha(0.5);
      simulation.restart();
      let texts1 = document.getElementsByClassName('graph1');
      let texts2 = document.getElementsByClassName("graph2")
      for(let text1 of texts1){
        text1.style.display= "none"
      }
      for(let text2 of texts2){
        text2.style.display= "none"
      }
      document.getElementById("graph3").style.display="block"
      previousSection = box.id;
    }

  })})

datagroups.append("text").attr("fill,white");
    datagroups.on("mouseover",function(d,i){
      let element = d3.select(this);
      element.select("circle").transition().attr("r",20)
      element.select("text").text(function (d,i){return d.how_long_relationship}).attr("y",70).attr("x",w - 500)

    }  )
    datagroups.on("mouseout",function(){
      let element = d3.select(this);
      element.select("circle").transition().attr("r",2.5)
      element.select("text").transition().text("")
    }  )
    datagroups.on("click",function(d,i){
      console.log(d)
      let element = d3.select(this);
      modal.style.display = "block"
      document.getElementById("modalcontent1").innerHTML = d.caseid_new
      document.getElementById("modalcontent2").innerHTML = d.how_long_relationship
      document.getElementById("modalcontent3").innerHTML = d.q34
      document.getElementById("modalcontent4").innerHTML = d.age_difference
      document.getElementById("modalcontent5").innerHTML = d.gender_attraction
      if (isCowork(d) == true){
        document.getElementById("modalcontent6").innerHTML = "through coworker"
      }
      else if(isFamily(d) == true){
        document.getElementById("modalcontent6").innerHTML = "through family"
      }
      else if(isFriend(d) == true){
        document.getElementById("modalcontent6").innerHTML = "through friend"
      }
      else if(isNeighbor(d) == true){
        document.getElementById("modalcontent6").innerHTML = "through neighbor"
      }
      else if(isOther(d) == true){
        document.getElementById("modalcontent6").innerHTML = "offline other ways"
      }
      else if(isChat(d) == true){
        document.getElementById("modalcontent6").innerHTML = "through Internet chatting"
      }
      else if(isGame(d) == true){
        document.getElementById("modalcontent6").innerHTML = "through Internet gaming"
      }
      else if(isDating(d) == true){
        document.getElementById("modalcontent6").innerHTML = "through dating apps"
      }
      else if(isSocial(d) == true){
        document.getElementById("modalcontent6").innerHTML = "online social networking"
      }
      else if(isIOther(d) == true){
        document.getElementById("modalcontent6").innerHTML = "online other ways"
      }
      document.getElementById("modalcontent7").innerHTML = d.respondent_yrsed +" & " + d.partner_yrsed
      document.getElementById("modalcontent8").innerHTML = d.respondent_race +" & " + d.partner_race

        })
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }


})
