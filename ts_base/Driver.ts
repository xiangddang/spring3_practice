// import { Shape } from "./Shape";
// import { Circle } from "./Circle";
// import { Rectangle } from "./Rectangle";


// let myCircle = new Circle(5, 10, 20);
// console.log(myCircle.getInfo());

// let myRectangle = new Rectangle(0, 0, 7, 3);
// console.log(myRectangle.getInfo());

import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let theCoaches: Coach[] = [];

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}

