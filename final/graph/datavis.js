$(function() {

var i = 0;
while(i < movies.length){ 
var movie = movies[i];


var direct = movie.director;
var gen = movie.genre;
var gross = parseInt(movie.grossing);
var actor = parseInt(movie.mainactor);
var other = movie.other;


var maxGross = 2782275172,;

var grossFraction = gross / maxGross;

var grossWidth = grossFraction *2000;


var row = $("<div>").addClass("row");

  	  					
var grossDiv = $("<div>").addClass("gross").text(gross)
	  					.css({width:grossWidth})
	  					.appendTo(row);
   
   
   $("body").append(row);

      i= i + 1;
      

//genre
    
$("button.action").on("click",function() {
  
  $("row").each(function() {
     var movie = $(this).data();
     
     if(movie.gross == "grossing") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});

});



