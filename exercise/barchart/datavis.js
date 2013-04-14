$(function() {
//will wait till document ready

//alert("hey");

//var myParagraph = $("<p>").text("My Visualization Here")    --another way to make paragraph
//$("body").append(myParagraph);								-- another way to make it appear



$("<p>").text("My Visualization Here")
		.appendTo("body");
		






});

$(function() {
var i = 0;
while(i < data.length) {
	var person = data[i];
      
    
      //whatever i do each time
      var name = person[8];
      var salary = parseInt(person[11],10);
      
      var maxSalary = 266750;
      
      // fraction between 0-1
      var fraction = salary /  maxSalary;
      var salaryWidth = fraction * 500;
      
      
      
    	var row = $("<div>").addClass("row");
    	
		var nameDiv = $("<div>").addClass("name").text(name)
								.appendTo(row);
		
		var salaryDiv = $("<div>").addClass("salary").text(salary)
							.css({ width: salaryWidth})
								.appendTo(row);	
								
								
  /*    var div = $("<div>").text(name + " " + salary)
      						.css({ width: salaryWidth,
      						backgroundColor: "teal"});  another way to do it */
      
      
      
      //make it appear 
      $("body").append(row);
      
      
      
i = i + 1;
}
});
