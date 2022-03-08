var numKids = [0, 3, 5, 1];
var spouse = ["Michelle", "Valerie", "Melissa", "Lilly"];
var city = ["Dallas", "Houston", "Lubbock", "McAllen"];
var job = ["Teacher", "Designer", "Journalist", "Programmer"];

var randomIndex = Math.floor(Math.random() * 4);

fortune(job[randomIndex], city[randomIndex], spouse[randomIndex], numKids[randomIndex]);

function fortune(job, city, spouse, numKids) {
    document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids.");
}

