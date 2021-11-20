

$(document).ready(function(){

	"use strict";
	
	
	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");
	
	var slideUp = {
		duration: 3000,
		origin: 'bottom',
		distance: '-100px'
	};
	ScrollReveal().reveal('.navbar', slideUp);

	var wn = {
		duration: 24000,
		origin: 'left',
		distance: '400px'
	};
	ScrollReveal().reveal('.window-notice', wn);

	var sa = {
		duration: 8000,

		distance: '100px'
	};
	ScrollReveal().reveal('.about', sa);

	var ssa = {
		duration: 6000,
		origin: 'left',
		distance: '400px'
	};
	ScrollReveal().reveal('.services', ssa);

	
	var sf = {
		duration: 5000,
		origin: 'top',
		distance: '400px'
	};
	ScrollReveal().reveal('.stat-facts', sf);

	var tips = {
		duration: 5000,
		origin: 'botton',
		distance: '400px'
	};
	ScrollReveal().reveal('.tips', tips);
	
	var noticias = {
		duration: 5000,
		origin: 'top',
		distance: '400px'
	};
	ScrollReveal().reveal('.noticias', noticias);

	var t = {
		duration: 5000,
		origin: 'left',
		distance: '500px'
	};
	ScrollReveal().reveal('.testimonials', t);

	var It1 = {
		duration: 5000,
		origin: 'right',
		distance: '400px'
	};
	ScrollReveal().reveal('.It1', It1);

	var It2 = {
		duration: 5000,
		origin: 'left',
		distance: '400px'
	};
	ScrollReveal().reveal('.It2', It2);

	var It3 = {
		duration: 5000,
		origin: 'right',
		distance: '400px'
	};
	ScrollReveal().reveal('.It3', It3);

	var It4 = {
		duration: 5000,
		origin: 'left',
		distance: '400px'
	};
	ScrollReveal().reveal('.It4', It4);

	var It5 = {
		duration: 5000,
		origin: 'right',
		distance: '400px'
	};
	ScrollReveal().reveal('.It5', It5);

	var It6 = {
		duration: 5000,
		origin: 'left',
		distance: '400px'
	};
	ScrollReveal().reveal('.It6', It6);

	var It7 = {
		duration: 5000,
		origin: 'right',
		distance: '400px'
	};
	ScrollReveal().reveal('.It7', It7);

	var It8 = {
		duration: 5000,
		origin: 'left',
		distance: '400px'
	};
	ScrollReveal().reveal('.It8', It8);

	var It9 = {
		duration: 5000,
		origin: 'right',
		distance: '400px'
	};
	ScrollReveal().reveal('.It9', It9);

	var It10 = {
		duration: 5000,
		origin: 'left',
		distance: '400px'
	};
	ScrollReveal().reveal('.It10', It10);


	/* =================================
	NAVBAR 
	=================================== */
	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var batas = jQuery(window).height();

		if (top > batas) {
			jQuery('.navbar-main').addClass('stiky');
		} else {
			jQuery('.navbar-main').removeClass('stiky'); 
		}
	});

	/* =================================
	MujerServicios
	=================================== */
	/*$(".services-item-image").delay(4000).fadeOut();*/

	
	/* =================================
	FAQ
	=================================== */
	$('.panel-heading a').on('click', function() {
		$('.panel-heading').removeClass('active');
		$(this).parents('.panel-heading').addClass('active');
	});
	
	
	
	/* =================================
	GOOGLE MAPS
	=================================== */

	function CustomZoomControl(controlDiv, map) {
		//grap the zoom elements from the DOM and insert them in the map
		var controlUIzoomIn= document.getElementById('cd-zoom-in'),
			controlUIzoomOut= document.getElementById('cd-zoom-out');
		controlDiv.appendChild(controlUIzoomIn);
		controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
			map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
			map.setZoom(map.getZoom()-1)
		});
	}

	let close_button = document.getElementById('close-button');  //Se agregó para la imagen banner
	close_button.addEventListener("click", function(e) {
		e.preventDefault();
		document.getElementById("window-notice").style.display = "none";
	});

	if ($('#maps').length) {
	//set your google maps parameters
	var myLat = $('#maps').data('lat'),
	myLng = $('#maps').data('lng');

	
	var latitude = myLat,
		longitude = myLng,
		map_zoom = 14;

	//google map custom marker icon - .png fallback for IE11
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var marker_url = ( is_internetExplorer11 ) ? 'images/cd-icon-location.png' : 'images/cd-icon-location.svg';

	//define the basic color of your map, plus a value for saturation and brightness
	var main_color = '#000000',
		saturation_value= -80,
		brightness_value= 5;

	//we define here the style of the map
	var style= [
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},
		{ //poi stands for point of interest - don't show these lables on the map
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show highways lables on the map
			featureType: 'road.highway',
			elementType: 'labels',
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show local road lables on the map
			featureType: "road.local",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show arterial road lables on the map
			featureType: "road.arterial",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		},
		//style different elements on the map
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]

		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		}
	];

	//set google map options
	var map_options = {
		center: new google.maps.LatLng(latitude, longitude),
		zoom: map_zoom,
		panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		streetViewControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		styles: style,
	}
	//inizialize the map
	var map = new google.maps.Map(document.getElementById('maps'), map_options);
	//add a custom marker to the map
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(latitude, longitude),
		map: map,
		visible: true,
		icon: marker_url,
	});

	var zoomControlDiv = document.createElement('div');
	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

	//insert the zoom div on the top left of the map
	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
  }
	
	
	
	
	


    
	
	
	
});




  
  