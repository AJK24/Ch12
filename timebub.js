load('sort.js');
load('testbed.js');


var numElements = 100;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();

var stop = new Date().getTime();
var elapsed = stop - start;
print("Elapsed time for the bubble sort on " +
		numElements + " elements is: " + elapsed + " milliseconds.");
