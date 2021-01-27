//Homework 3


//Task 1

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

var i = 0;
while (i<dataOld.length) {
	dataNew [i] = dataOld [i];
	i++;
} 

console.log (dataNew)

//Task 2

var oldData = [34, true, "Peter", 1992];
var newData = [];

var i = 0;
while (i<oldData.length) {
	newData [i] = oldData [oldData.length - 1 - i];
	i++;
} 

console.log (newData)

//Task 3

var old = [34, true, "Peter", 1992];
var newNew = [12, "Jack"];

var i = 0;
while (i<old.length) {
	newNew [newNew.length] = old [i];
	i++;
} 

console.log (newNew)

//Task 4

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var c = [];

var i = 0;
while (i<b.length) {
	 a [a.length] = b [i];
	i++;
	
} 

console.log (c = a)

//Task 5

var d = [12, 56, 32, 44];
var f = [88, 7, 13];
var g = [];


for (var i = 0; i < d.length; i++) {

	g [i*2] = d [i];
	g [i+i+1] = f [i];
	}

console.log (g)

//Task 6



for (var i = 0; i < 6; i++) {
	var star;

	for (var j = 0; j < i; j++) { star = star + ("*");}

	console.log (star)
	star = '';
	
}


//Task 7

var width = 10;
var height = 6;
var edge = '*';
var inside = ' ';
for (var i = 1; i <= height; i++) {
    if (i === 1 || i === height) {
        console.log(edge.repeat(width));
    } else {
        console.log(edge + inside.repeat(width - 2) + edge);
    }
}
