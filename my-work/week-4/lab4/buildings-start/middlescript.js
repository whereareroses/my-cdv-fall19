let w = 2400;
let h = 800;
let yScale = d3.scaleLinear().domain([0,828]).range([0,380]);
//d3.max(dataset)


let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lightyellow")
;

let xScale = d3.scaleLinear().domain([0,100]).range([0,2400]);
function xPosition(d, i){
  return xScale(i);
}

function yPosition(d, i){
  return h/2;
}

function getGroupTranslation(d, i){
  return "translate(" + xPosition(d,i) + "," + yPosition(d,i) + ")";
}

function getName(d, i){
  return d.name + " - " + d.height
}
function height(d,i){
  return d.height;
}
function height2(d,i){
  return yScale(d.height)
}
let colorScale = d3.scaleLinear().domain([300,400,828]).range(["lightblue","lightgreen","grey"])
function getColor(d,i){
  return colorScale(d.height);

}

function gotData(incomingData){
  console.log(incomingData);

  let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .classed("datagroup", true)
      // .attr("class","datagroup")
  ;

  let towers = datagroups.append("rect")
      .attr("x", 0)
      .attr("y", function(d,i){
        return (-1)*height2(d,i)
      })
      //position the whole group
      .attr("width", 20)
      .attr("height", height2)
      .attr("fill", getColor)
  ;

  let labels = datagroups.append("text")
      .text(getName)
      .attr("fill", getColor)
      .attr("transform", "rotate(90)")
      //rotate it by 90 degrees
  ;



  datagroups.attr("transform", getGroupTranslation);

}

d3.json("buildings.json").then(gotData);
