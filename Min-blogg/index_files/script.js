function toggleState() {
  document.querySelector(".toggle-me").classList.toggle("active");
};

function getPosts(){
  fetch("../posts.json")
  .then((response)=> response.json ())
  .then((data) => {
    for (let i =0; i < data.length; i++) {
      //console.log('my posts: '), i, data[i])
      createTumbnail(data[i])
    }
  });

}

function createTumbnail(post) {

  var title = 
  `<div class="tumb">
  <h1>${post.title}</h1><p>${post.shortSummary}</p>
  </div>`
  console.log(title);
  document.getElementById("loadedContent").innerHTML += title;
}


// This makes the reps generate randomly in a list of 5
  
let maxNr = 10;

function generateRep() { 
  let randomReps = [`4x10`,`4x8`, `4x20`, `4x12`, `4x15`,`3x10`, `3x15`, `4x5`, `5x10`, `10x10`];
  for(let i=0; i < 5; i++){
  let randomNr = Math.floor(Math.random() * maxNr); 
  if (randomNr==9) maxNr=9;
  let repsText = "<li>"+randomReps[randomNr]+"</li>";
  document.getElementById("repsList").innerHTML+=repsText;
  console.log(maxNr);
 }
}

var modal = document.getElementById("tipsModal");
var btn = document.getElementById("tipsBtn");
var span = document.getElementsByClassName("close") [0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


