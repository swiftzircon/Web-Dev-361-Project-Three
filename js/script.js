function initMap() {
  var iit = {lat: 41.831, lng: -87.627};
  var map = new google.maps.Map(
      document.getElementById('map'), {
		  zoom: 18, 
		  center: iit,
	      mapTypeId: 'satellite'
	  });
  var marker = new google.maps.Marker({position: iit, map: map});
}

//Slideshow//////
var slides = 0;
var images = [];
var time = 5000;

images[0] = 'images/tour_antarctica_view.png';
images[1] = 'images/tour_bamboo_forest.png';
images[2] = 'images/tour_bryce_canyon.png';

function changeImg(){
  document.getElementById('slide_image').src = images[slides];
  if (slides < images.length - 1){
	slides++;
  }else {
	slides = 0;
  }
  setTimeout("changeImg()",time);
}
window.onload = changeImg;
