load('sort.js');
load('testbed.js');


var numElements = 100;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();

nums.setData();
start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Elapsed time for the insertion sort on " +
		numElements + " elements is: " + elapsed + " milliseconds.");
