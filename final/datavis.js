$(function() {

var i = 0;
while(i < movies.length){ 
var movie = movies[i];


var direct = movie.director;
var gen = movie.genre;
var gross = movie.grossing;
var actor = movie.mainactor;
var other = movie.other;


var li = $("<li>");
      var img = $("<img>").attr('src',movie.image);
      






      
	//console.log.img;
           
      li.append(img).data(movie);
      
      $("#container").append(li);
      i++;
    }


//genre
    
$("button.action").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.genre == "Action") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});

$("button.adventure").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.genre == "Adventure") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});


$("button.animation").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.genre == "Animation") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});

$("button.fantasy").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.genre == "Fantasy") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});


$("button.sci").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.genre == "Sci-Fi") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});

 
 
    
// studio

$("button.wb").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.studio == "Warner Brothers") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});


$("button.disney").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.studio == "Disney") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});


$("button.paramount").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.studio == "Paramount") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});

$("button.sony").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.studio == "Sony/ Columbia") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});

$("button.fox").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.studio == "Fox") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});



//story

$("button.frombook").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.other == "From book") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});



$("button.sequel").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.other == "sequel") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});


$("button.original").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.other == "Original") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});


$("button.remake").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.other == "Remake") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});


//year


$("button.eight").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.year == "2008") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});


$("button.nine").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.year == "2009") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});
    
$("button.ten").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.year == "2010") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});    
    
$("button.ele").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.year == "2011") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});    
    
  $("button.twe").on("click",function() {
  
  $("li").each(function() {
     var movie = $(this).data();
     
     if(movie.year == "2012") {
        $(this).show();
     } else {
        $(this).hide();
     }
  });

});  
    
    
});



