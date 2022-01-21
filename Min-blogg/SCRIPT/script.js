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

function generateRep(){ 
  let randomReps = [`4x10`,`4x8`, `4x20`, `4x12`, `4x15`,`3x10`, `3x15`, `4x5`, `5x10`, `10x10`];
  for(let i=0; i < 5; i++){
  let randomNr = Math.floor(Math.random() * maxNr); 
  if (randomNr==9) maxNr=9;
  let repsText = "<li>"+randomReps[randomNr]+"</li>";
  document.getElementById("repsList").innerHTML+=repsText;
  console.log(maxNr);
 }
}

//THIS IS THE SHUFFLE FUNCTION

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

//this is the workout generator for CHEST BACK

function generateWorkout() {
  let workoutList = [`Chins`, `Wide barbell row (bent over)`, `Row with machine`, `Cable pulldown`,
  `Lat pulldown`, `Bent-over dumbbell alternating row`,`Reverse fly with barbell`,`Push-ups`, 
  `Face-pull with cable`, `Seated face pull`, `Single arm lat pulldown`, `Low position row with cable`, 
  `Split stance high anchor row with cable`, `Bench Press`, `Overhead press with dumbbells or barbell`,
  ` One arm row with dumbbell`,` Inverted row`, `Close grip dumbbell press`, ];
  let shuffleWorkoutList= shuffle(workoutList);
  for(let i=0; i < 5; i++){
    let workoutText = "<li>"+workoutList[i]+"</li>";
    document.getElementById("listOfWorkouts").innerHTML+=workoutText;
  }
}

//this is the workout generator for ARMS SHOULDER

function generateWorkoutAS(){
  let workoutList = [`Barbell curl`, `Dumbbell curl`, `Hammer curl`, `Cross-body curl`, 
  `Triceps cable pushdown`, `Lying tricep extension`, `Lateral raise`, `Bent over lateral raise`,
   `Incline YTW`, `Dumbbell thruster`, `Halo to shoulder press`, `Front raise`,  `Reverse cable crossover`,
    `Concentration curls`, `Tricep dips`, `Tricep dumbbell kickback`,`Underhand seated row`, 
    `Reverse grip bar curl`, `Diamond press-up`, `One arm press`, `One arm tricep extension`, 
    `Decline close-grip bar skullcrusher`, `Close grip bench press`, `Pike press-up`, `Arm circles with dumbells`];
  let shuffleWorkoutList = shuffle(workoutList);
  for(let i=0; i < 5; i++){
    let workoutText = "<li>"+workoutList[i]+"</li>";
    document.getElementById("listOfWorkoutsAS").innerHTML+=workoutText;
  }

}

//this is the workout generator for CARDIO CORE

function generateWorkoutCC(){
  let workoutList = [`Jump squats`,`Jumping lunges`, `Mountain climbers`, `Burpees`, `Inchworms`, `High knees`,
   `Butt kicks`, `Plank jacks`, `Power jacks`, `Suicide drills`, `Sumo jump squats`, `Bicycle crunch`, 
   `Cross-over toe tap crunch`, `Cross over oblique crunch`, `Scissor kicks`, `Flutter kicks`,];
   let shuffleWorkoutList = shuffle(workoutList);
   for(let i=0; i < 5; i++){
     let workoutText = "<li>"+workoutList[i]+"</li>";
     document.getElementById("listOfWorkoutCC").innerHTML+=workoutText;
   }
}

function generateWorkoutLB(){
  let workoutList = [`Side lunge`, `Squats`, `Wide stance squats`, `Deadlifts`, `Lunges`, 
  `Kettlebell reverse lunges`, `Hip thrusts`, `Long stationary lunges`, `Single leg Leg press`, 
  `Leg press (45 or 90 degrees)`, `Glute bridges`, `Hip abductor`, `Deep squats`, `Cable kickbacks`, 
  `Cable squats`, `Romanian deadlifts`, `Step-up`];
  let shuffleWorkoutList = shuffle(workoutList);
  for(let i = 0; i < 5; i++){ 
  let workoutText = "<li>"+workoutList[i]+"<li>";
  document.getElementById("listOfWorkoutsLB").innerHTML+=workoutText;
  };
  //localStorage.setItem("workout-list","generateRep", workoutList.join(","));
};


/* function load_prev_workout() {
  const prev_workout = localStorage.getItem("workout-list", "generateRep").split(",");
  console.log(prev_workout);
  for(let i=0; i < 5; i++){
      let workoutText = "<li>"+prev_workout[i]+"</li>";
      console.log("Now use this:",workoutText,"for something.");
  };
};

if(localStorage.getItem("workout-list", "generateRep")) {
  load_prev_workout();
} else {
  generateWorkout();
}; */

//THIS IS THE POP-UP MODAL
if(document.getElementById("tipsModal")){
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
}








