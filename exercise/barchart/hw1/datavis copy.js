$(function() {
var i = 0;
while(i < data.length) {
	var incidents = data[i];
      
    
      //whatever i do each time
      var name = incidents[0,0,2];
      var crime = parseInt(incidents[1],10);
      
      var dom = parseInt(incidents[0],10);
      
      var maxIncident = 10651;
      var maxDom = 2840;
      
      
      // fraction between 0-1
      var fraction = crime /  maxIncident;
      var crimeWidth = fraction * 500;
      
      var fraction = dom / maxDom;
      var domWidth = fraction * 500;
      
    	var rowOne = $("<div>").addClass("rowOne");
    	
		var nameDiv = $("<div>").addClass("name").text(name)
								.appendTo(rowOne);
		
		var salaryDiv = $("<div>").addClass("crime").text(crime)
							.css({ width: crimeWidth})
								.appendTo(rowOne);	
								
		var rowTwo = $("<div>").addClass("rowTwo");
		
		var dom = $("<div>").addClass("dom").text(dom)
							.css({width:domWidth})
							.appendTo(rowTwo);
							
								
  /*    var div = $("<div>").text(name + " " + salary)
      						.css({ width: salaryWidth,
      						backgroundColor: "teal"});  another way to do it */
      
      
      
      //make it appear 
      $("body").append(rowOne)
      			;
      
      
      
i = i + 1;
}
});
