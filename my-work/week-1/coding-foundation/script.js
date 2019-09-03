//
//
//
// document.getElementById('box1').addEventListener("click",generate());
//
//
//
// function generate(){
//
//
//
// }



document.getElementById('box2').addEventListener("click",generatethree);

function generate(){

  var boxone = document.createElement("div");   // Create a <button> element
  boxone.className = "boxstyle";                   // Insert text
  document.getElementById('boxes').appendChild(boxone);

}

function generatethree(){
var x = document.getElementById('number').value;
var i = 0;
for(i;i<x;i++){
  generate();
}


}
