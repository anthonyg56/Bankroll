$(document).ready(function() {
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {

    	var href = $(this).attr('href');
      var sectionOffset = $(href).offset().top;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    }) 
  });
});

//Global variables used throughout the code
var URL = "https://gist.githubusercontent.com/anthonyg56/f1e4527acb572fdb9f4f555e999be08e/raw/ebc47fa6964ca94654a1a941f525ceeb5258b609/cartelInfo.json";
var Profile = document.getElementById('profileInfo');
var Boxes = document.getElementById('boxes');
var Interview = document.getElementById('interview');
var P = document.getElementById('click');
/*
var Reso = document.getElementById('reso');
var Prince = document.getElementById('prince');
var Velly = document.getElementById('velly');
var Smoov = document.getElementById('smoov');

//Event Listeners for when an artist is clicked on the cartel page
Smoov.addEventListener('click', function() { 
    ajaxCall(1);//Process inititated when user clicks on one of the artists sub sections
});

Prince.addEventListener('click', function() { //Process inititated when user clicks on one of the artists sub sections
    ajaxCall(2);
});

Reso.addEventListener('click', function() { //Process inititated when user clicks on one of the artists sub sections
    ajaxCall(3);
});

Velly.addEventListener('click', function() { //Process inititated when user clicks on one of the artists sub sections
    ajaxCall(4);
});*/

function ajaxCall(num) {
    var request = new XMLHttpRequest();
    request.open('GET', URL);

    request.onload = function() { //Function that excutes when the page loads
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            loadProfile(num, data);
        } else {
            console.log('request error');
        }
    };

    request.onerror = function() { //error handeling
        console.log('error');
    };

    request.send();
};

//Load Profile based off which cartel member was clicked
function loadProfile(num, info) {
    var html = "";
    Boxes.style.display = "none";
    html += '<div class="col-xl-4 col-lg-4 col-md-4" style="padding: 0; height: 100%;">' +
        		'<img src="' + info[num].pic + '" class="img-responsive" style=" padding: 0;">' +
        	'</div>' +
        	'<div class="col-xl-8 col-lg-8 col-md-8">' +
        		'<h3 style="font-weight: 600; font-family: "quicksand"!important;font-size: 3em; letter-spacing: 3px; color: white!important;"> ' + info[num].name + '</h3>' +
        		'<p style="margin: 20px auto; color: white;">' + info[num].bio + '</p>' +
        		'<br>' +
        		'<ul class="social-media" style="margin: 0px auto 20px auto;">' +
        			'<li style="display: inline; padding: 0 35px 0 35px;"><a style=":hover{color: #DAA520;}" href="' + info[num].twitter + '"><img src="img/icons32px/png/twitter (2).png"></a></li>' +
        			'<li style="display: inline; padding: 0 35px 0 35px;"><a href="' + info[num].soundcloud + '"><img src="img/icons32px/png/soundcloud (2).png"></a></li>' +
        			'<li style="display: inline; padding: 0 35px 0 35px;"><a href="' + info[num].insta + '"><img src="img/icons32px/png/instagram (2).png"></a></li>' +
        			'<li style="display: inline; padding: 0 35px 0 35px;"><a href="' + info[num].youtube + '"><img src="img/icons32px/png/youtube (2).png"></a></li>' +
        		'</ul>' +
        	'</div>';

    html += '<div style="margin: 50px auto 30px auto;">' +
        		'<a href="TheCartel.html"><button style="background-color: white; color: #fe0000; font-weight: 600; border-radius: 25px; padding: 15px 45px 15px 45px; font-size: 2em; font-family: "supremeFont"; text-decoration: none; ">Go Back</button></a>' +
        	'</div>';
    Profile.insertAdjacentHTML('afterbegin', html);
}