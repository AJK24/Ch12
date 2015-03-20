load('sort.js');
load('testbed.js');


var numElements = 100;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();

nums.setData();
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Elapsed time for the selection sort on " +
		numElements + " elements is: " + elapsed + " milliseconds.");
