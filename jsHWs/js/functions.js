
// Task 1

		

	var taskOne = function (a){

	var dataOne = [];
	
	for (var i=0; i < data.length; i++){
		
		
		dataOne [i] = data [data.length - 1 - i]; 

	}
		console.log (dataOne);


}

taskOne (data = [1,2,3,4]);


// Task 2

	function taskTwo (a){

	
		console.log (typeof a)

	}

	taskTwo (true)

// Task 3

		


var taskThree = function (a) {

	var name = ["Tim","John","Marry","Samuel","Ann"];
	
	for (var i=0; i < name.length; i++){

					if ( name[i].length > name[3].length){
					console.log (name[i].length);
				} else {

				console.log (name[3].length);
			}
	}

}
  taskThree ( name );


// Task 4

var numbers = [7,3,18,45,22,27,35,1];
var taskFour = function (a) {

	
	var min = numbers[0];
	var max = numbers[0];
	var secondmin = numbers[0];
	var secondmax = numbers [0];
	
	for (var i=0; i < numbers.length; i++){

				if (numbers[i] > max){
						secondmax = max;
						max = numbers[i];
				} else if (numbers[i] > secondmax) {
					secondmax = numbers[i];
					}
	}
	for (var i=0; i < numbers.length; i++){

				if (numbers[i] < min){
						secondmin = min;
						min = numbers[i];
				} else if (numbers[i] < secondmin) {
					secondmin = numbers[i];
					}
	}
	console.log(secondmin,secondmax)

}
  taskFour (numbers);



// Task 5

var a = [5, 35, 2, 30, 55, 45, 8, 85];
 	var b = 25;

  function fifthTaskFirst(a, b) {
 	fifthTaskSecond(a, b);

 }


 function fifthTaskSecond() {
 var c = [];
	for(var i = 0; i < a.length; i++) {
 		if(a[i] >= b) {
			c[c.length] = a[i]; 
		}
 	}
 	return c;
 }

 console.log(fifthTaskSecond())

 //Task 6

var numbers = [52, 25, 78, 36, 258, 2];
var lowest = [];
var highest = [];
var zero = [0];

function sixLowest(lowest) {
	for(var i = 0; i < numbers.length; i++) {
		if(numbers[i] >= zero) {
		lowest = numbers[i];
		}
	}
return lowest;
}


function sixHighest(highest) {
	for(var i = 0; i < numbers.length; i++) {
		if(numbers[i] >= i) {
		highest = numbers[i];
		}
	}
return highest;
}

function sixMultiply() {
 
	return sixLowest() * sixHighest();

}

console.log(sixMultiply())

//Task 7

var taskNumbers = [15,35,46,23,15,17,23,24,35,12,72,64,35,22,64];

function seventhTask (a,b ){

	var unique = [];
for(var i = 0; i < a.length; i++) {

for (var j = 0; j < a.length; j++){
if (i==j){
continue;
}
if ( a[i] == a[j]){
break;
}
}
if (j == a.length){
unique[unique.length]= a[i];
}
}
console.log(unique);
b(unique);
console.log(unique);

}

function seventhTaskTwo(c) {

zeroNumber=0;

for(var i = 0; i < c.length; i++) {

if(c[i] > c[zeroNumber]) {
zeroNumber = i;
}
}
delete c[zeroNumber];


}




seventhTask(taskNumbers, seventhTaskTwo);