/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const myAction = new Action('com.elgato.sus.action');

/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
	console.log('Sus Deck connected!');
});

let audio = null;

myAction.onKeyUp(({ action, context, device, event, payload }) => {
	if (audio && !audio.paused) {
		audio.pause();
		audio.currentTime = 0;
		audio = null;
		console.log('Audio stopped!');
	} else {
		audio = new Audio('actions/template/assets/rick.mp3');
		audio.play();
		console.log('Sus sus sus!');
	}
});
myAction.onDialRotate(({ action, context, device, event, payload }) => {
	console.log('Your sus dial code goes here!');
});


