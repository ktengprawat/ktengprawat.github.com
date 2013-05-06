$(function() {
      var mapOptions = {
      center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);

      
//loop loop marker map


//var i = 0;
//while(i < potholes.length) { // no .data because potholes is data


//parseIn mean to convert 'string' to a number' 

//var pothole = potholes[i];
//var lon = pothole.LONGITUDE;
//var lat = pothole.LATITUDE;

 //var marker = new google.maps.Marker({
   //     position: new google.maps.LatLng(lat, lon),
     //   title: "MassArt",
     //   map: myMap
      //  })
        
        
        
        
 // heat map start  
 


var myHeatmapData = [];
var i = 0;
while(i < potholes.length){ 
var pothole = potholes[i];
var lon = pothole.LONGITUDE;
var lat = pothole.LATITUDE;

        myHeatmapData.push(
          new google.maps.LatLng(lat,lon)  
        )
  
           
	
i++;
}

var heatmap = new google.maps.visualization.HeatmapLayer({
        data: myHeatmapData,
        radius: 30
      });
      heatmap.setMap(myMap);

    
    
});
    
// 	the loop is  
//	var i = 0;
//	while(i < potholes.length) {       // potholes is data, if no potholes then it's .data
//	var pothole = potholes[i]          // var pothole(name it whatever)
//	var long = pothole.LONGTITUTE;		// it's an OBJECT so use .(name) instead of [_] <<< use for array
//	var lat = potholes.LATITUTE;


//i++;

//});