/* Accordion Script */

$('.acc-info-toggle').on('click', function(event){
    event.preventDefault();
    var accordion = $(this);
    var contactNone = accordion.next('.acc-none');
    accordion.toggleClass("slide");
    contactNone.slideToggle(250);
});

function myFunction() {
	var x = document.getElementById("audio");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
	}
}

$("#audio-btn").on("click", function() {
	var el = $(this);
	if (el.text() == el.data("text-swap")) {
	  el.text(el.data("text-original"));
	} else {
	  el.data("text-original", el.text());
	  el.text(el.data("text-swap"));
	}
  });

/* P5 Slider */



var sketch = {
    offsetBackgroundColor: 0
};



$(document).ready(function () {

    $("#toggle-color").click(function () {
        coloredText = !coloredText;

    });

    $("#toggle-rainbow").click(function () {
        rainbowColors = !rainbowColors;

    });


});

$(function () {
    $("#change-bg").slider({
        value: 0,
        min: 0,
        max: 255,
        step: 1,
        slide: function (event, ui) {
            sketch.offsetBackgroundColor = ui.value;
            updateP5();
        }
    });

    function updateP5() {
        offsetBackgroundColor = sketch.offsetBackgroundColor
    }

});

/* Video */

console.log(1);

var video1 = document.getElementById("vid1");
var video2 = document.getElementById("vid2"); 
var video3 = document.getElementById("vid3"); 

function PlayVideo1() {
	if(video1.paused) {
		video1.play();
	} else {
		video1.pause();
	}
}


function PlayVideo2() {
	if(video2.paused) {
		video2.play();
	} else {
		video2.pause();
	}
}


function PlayVideo3() {
	if(video3.paused) {
		video3.play();
	} else {
		video3.pause();
	}
}