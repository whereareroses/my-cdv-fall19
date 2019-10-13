// function screenTime(d,i){
//   return d.screentime;
// }
// function date(d,i){
//   return d.date;
// }
// function xPosition(d,i){
//   return d.time;
// }
//flex property?

function randValue(max) {
  return Math.random() * max;
}
const colors = ['purple', 'seagreen'];

let viz = d3.select("#container")
  .append("svg")
    .attr("width", 1200)
    .attr("height", 800)
    .style("background-color", "lightyellow")
;


function gotData(incomingData){
  console.log(incomingData);

  // let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
  //   .append("g")
  //     .classed("datagroup", true)
  //     // .attr("class","datagroup")
  // ;
  //
  // let points = datagroups.append("rect")
  //     .attr("x", xPosition)
  //     .attr("y", 500)
  //     //position the whole group
  //     .attr("width", 22)
  //     .attr("height", 22)
  //     .attr("fill", "black")
  // ;

  var g = viz.selectAll('g')
      .data(incomingData)
      .enter()
      .append('g')
  ;

  g.selectAll('img')
     .data((d, i) => d3.range(d.timeOne)
                       .map(j => [i, j]))
     .enter()
     .append('img')
     .attr("xlink:href","icons/Werewolves.jpg")
     .attr("width",10)
     .attr("height",18)
       .attr('x', d => randValue(1000)+100)
       .attr('y', d => randValue(600)+100)



   g.selectAll('circle')
          .data((d, i) => d3.range(d.timeTwo)
                            .map(j => [i, j]))
          .enter()
          .append('circle')
            .attr('cx', (d, i) => {0+5*i})
            .attr('cy', d => 200)
            // .attr("display","flex")
            .attr('r',10)
            .attr('fill',"seagreen");
;

g.selectAll('circle')
   .data((d, i) => d3.range(d.timeThree)
                     .map(j => [i, j]))
   .enter()
   .append('circle')
     .attr('cx', d => randValue(1000)+100)
     .attr('cy', d => randValue(600)+100)
     .attr('r',10)

     .attr('fill',"black");



}












d3.json("data2.json").then(gotData);
