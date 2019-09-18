// 1. find *real* data (array containing JS objects) in JSON format

// 2. load data (make it *console.loggable* (what a word!) in our script)
function gotData(incomingData){
console.log(incomingData)
let viz = d3.select("body")
  .append("svg")
    .attr("width",1500)
    .attr("height",1500)
    ;
viz.selectAll("circle").data(incomingData).enter().append("circle")
          .attr("cx",randomNum)
          .attr("cy",300)
          .attr("r",100)

}

d3.json("data.json").then(gotData);

// 3. concept: data and datapoint

// 4. make on circle for each datapoint (size and position doesn't matter)

// 5. concept: functions that "return"

// 6. use function to position circles randomly
function randomNum(datapoint,i){
  console.log(datapoint)
  console.log(i)
  return datapoint.indoorTem *20
}

// 7. realize "who" calls this function / why is there no `()`?

// 8. concept: "passing value into function"

// 9. let's assume: "D3 passes value into the data function"

// 10. if D3 passes a value, how can we receive it?

// 11. use *real* information to impact the x position

// 12. let's assume: "D3 passes another value!"

// 13. how can we receive that value?
// 14. in which ways is D3 making our live easy?
