let sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];

/*
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
*/

// let's use the simplified for loop
for (let tempSport of sportsOne) {
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite!");
    } else {
        console.log(tempSport);
    }
}