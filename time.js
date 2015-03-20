load('sort.js');
load('testbed.js');


var start = new Date().getTime();
print(start);

for (var i = 1; i < 100; ++i) {
	print(i);
}
var stop = new Date().getTime();
var elapsed = stop - start;
print("The elapsed time was: " + elapsed +
		" milliseconds.");



