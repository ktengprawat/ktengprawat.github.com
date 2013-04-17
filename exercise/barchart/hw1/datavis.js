$(function() {
	$("<p>").text("Crime Barchart")
			.appendTo("body");

});



$(function() {

     var i =0;
    while(i < data.length) {
      var name = data[i];  
      var place = name.name;
      var incident = parseInt(name.incidents);
      var domestic = parseInt(name.domestic)
      
      var maxIncident = 10652;
      var maxDomestic = 2841;
 
       var incidentFraction = incident / maxIncident;
      var domesticFraction = domestic / maxDomestic;
      
           
      var incidentWidth = incidentFraction *1000;
      var domesticWidth = domesticFraction *500;
      

      
      
      var row = $("<div>").addClass("row");
  	  var div =$("<div>").addClass("name").text(place)
  	  					
  	  					.appendTo(row)
  	  					
	  var incidentDiv = $("<div>").addClass("incident").text(incident)
	  					.css({width:incidentWidth})
	  					.appendTo(row);
	  					
	  					
	  	var domesticDiv = $("<div>").addClass("domestic").text(domestic)
	  								.css({width:domesticWidth})
	  								.appendTo(row);
	  								
	  								
   $("body").append(row);

      i= i + 1;
    }
  });

