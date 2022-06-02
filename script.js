var time = new Date().getHours();

// console.log(time);

var greeting = "Hey there";
var name = "Rosehip";

if (time < 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good Afternoon";
} else if (time <= 22) {
  greeting = "Good Evening";
} else {
  greeting = "Go to bed";
}

alert(`${greeting} ${name}!`);
