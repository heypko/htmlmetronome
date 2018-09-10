// Peter Ko
// metronome.js
// Controls input handling to set, start, and stop metronome

var isRunning = false;
// var click = new Audio('click.ogg');
var click = document.createElement('audio');
click.src = 'click.ogg';

var playSeries = function (bpm, intervalWait) {
	console.log(isRunning);
	var interval;
	var toggle = 0;

	
	click.volume = .25;
	interval = setInterval(function () {
		
		
		console.log(intervalWait);
		click.load();
		click.play();
		clearInterval(interval);
		if (isRunning) {
			playSeries(bpm, intervalWait);
		};
	}, intervalWait);
	
};

$('#toggle').click(function() {
   if ($(this).val() == "off") {
      $(this).val("on");
			isRunning = true;
			var bpm = parseInt($('#bpm').val());
			var iW = (1 / (bpm / 60)) * 1000;
			playSeries(bpm, iW);
   }
   else {
      $(this).val("off");
			isRunning = false;
   }
});

