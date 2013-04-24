
$(function() {
	$("<p>").text("Another Crime!!!")
	
			.appendTo("body");

});

  
$(function() {



var i = 0;
var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
while(i < 100) { // crime.data.length {


//parseIn mean to convert 'string' to a number' 

var crime = crimes.data[i]
var neighborhood = crime[22];
var crimecode = crime[42];

var x = parseFloat(crime[34],10);
var y = parseFloat(crime[35],10);

if(x < minX) { minX = x; }
if(x > maxX) { maxX = x; }

if(y < minY) { minY = y; }
if(y > maxY) { maxY = y; }


console.log(minX, maxX, minY, maxY);



	
i++;
}


var i = 0;
while(i < crimes.data.length) {


//parseIn mean to convert 'string' to a number' 

var crime = crimes.data[i]
var neighborhood = crime[22];
var crimecode = crime[42];

var x = parseFloat(crime[34],10);
var y = parseFloat(crime[35],10);


var diffX = maxX - minX;
var screenX =  (x - minX) / diffX * 500;


var diffY = maxY - minY;
var screenY =  (y - minY) / diffX * 500;

var div = $("<div>").addClass("crime").css({
position:"absolute", width: 10, height:10,

left: screenX, top: screenY


});		



//weather	
	  							
$(function() {



var i = 0;
var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
while(i < 100) { // crime.data.length {


//parseIn mean to convert 'string' to a number' 

var crime = crimes.data[i]
var neighborhood = crime[22];
var crimecode = crime[42];

var x = parseFloat(crime[14],10);
var y = parseFloat(crime[14],10);

if(x < minX) { minX = x; }
if(x > maxX) { maxX = x; }

if(y < minY) { minY = y; }
if(y > maxY) { maxY = y; }


console.log(minX, maxX, minY, maxY);



	
i++;
}


var i = 0;
while(i < crimes.data.length) {


//parseIn mean to convert 'string' to a number' 

var crime = crimes.data[i]
var neighborhood = crime[22];
var crimecode = crime[42];

var x = parseFloat(crime[14],10);
var y = parseFloat(crime[14],10);


var diffX = maxX - minX;
var screenX =  (x - minX) / diffX * 500;


var diffY = maxY - minY;
var screenY =  (y - minY) / diffX * 500;

var div = $("<div>").addClass("weather").css({
position:"absolute", width: 10, height:10,

left: screenX, top: screenY


});			
	  						
$("body").append(div);


i++;
}
});

