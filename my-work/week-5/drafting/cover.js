let w = 1200
let h = 800
let dateConverter = d3.timeParse("%m.%d");

//create a svg
let viz = d3.select("#container")
  .append("svg")
    .attr("width", w*2)
    .attr("height", h)
    .style("background-color", "lavender")
;

//create some styles to the page
      let rect = viz.append("rect")
            .attr("width",1200)
            .attr("height",600)
            .attr("x",0)
            .attr("y",100)
            .attr("opacity","0.5")
            .attr('fill',"white");
        viz.append("text")
            .text("Screentime")
            .attr("x",500)
            .attr("y",350)
            .attr("fill","black")
            .attr("font-size","50")
            .attr("font","Times New Roman")
            .attr("font-stretch", "semi-expanded")
            .attr("font-variant","small-caps")
      ;
        viz.append("text")
            .text("(9.24 - 10.7 2019)")
            .attr("x",500)
            .attr("y",390)
            .attr("fill","black")
            .attr("font-size","20")
            .attr("font","Times New Roman")
            .attr("font-stretch", "semi-expanded")
            ;
        viz.append("text")
            .text("from Jannie's iPhone")
            .attr("x",500)
            .attr("y",430)
            .attr("fill","black")
            .attr("font-size","20")
            .attr("font","Times New Roman")
            .attr("font-stretch", "semi-expanded")
            ;




//create a new array of data
function gotData(incomingData){
  let newData = [];
  for(let i=0;i<incomingData.length-1;i++){
    let datapoint = incomingData[i];
    for(let q=0;q<datapoint.timeone+1;q++){
      newData.push({date:dateConverter(datapoint.date), app:"WeChat"})
    }
    for(let j=0;j<datapoint.timetwo+1;j++){
      newData.push({date:dateConverter(datapoint.date), app:"Werewolves"})
    }
    for(let u=0;u<datapoint.timethree+1;u++){
      newData.push({date:dateConverter(datapoint.date), app:"other"})
    }
  }

  //bind data to g elements
      var g = viz.selectAll('g')
          .data(newData)
          .enter()
          .append('g')
          .classed("datagroup", true)
      ;
  //assign positions to the dots
  function yPosition(d,i){
    return Math.floor(i/100)*11+60
  }
  function xPosition(d,i){
    return (i - Math.floor(i/100)*100)*11.5 +30
  }


       var circles =   g.append('circle')
               .attr('cx', xPosition)
               .attr('cy', yPosition)
               .attr('r',3.5)
               .attr("opacity","0.5")
               .attr('fill',"grey");














  }












  d3.json("screentime.json").then(gotData);
