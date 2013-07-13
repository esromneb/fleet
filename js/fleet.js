/*
 * Code-samples JavaScript
 */

var ttsInput, txtPhone, textMsgNum, textMsg, txtFilename, txtContents, txtRead, txtDelete;

function init() {

	// Create Expandable regions
	x$(".group").addClass("closed");
	x$(".group .title").on("click", function() {
		var el = x$(this.parentNode);
		if (el.hasClass("closed"))
			el.removeClass("closed");
		else
			el.addClass("closed");
	});
	
	// BUTTON AND INPUT WIDGETS
	

	
	
	// Audio Control
	var playBtn = new gm.widgets.Button({ callBack: play, label: "Play",
        parentElement: document.getElementById('audio-play') });
	playBtn.render();

	var pauseBtn = new gm.widgets.Button({ callBack: pause, label: "Pause",
        parentElement: document.getElementById('audio-pause') });
	pauseBtn.render();
	
	var seekBtn = new gm.widgets.Button({ callBack: seek, label: "Seek to 30 sec",
        parentElement: document.getElementById('audio-seek') });
	seekBtn.render();
	
	var stopBtn = new gm.widgets.Button({ callBack: stop, label: "Stop",
        parentElement: document.getElementById('audio-stop') });
	stopBtn.render();
	
//	var playVideo = new gm.widgets.Button({ callBack: playVid, label: "Play video",
//        parentElement: document.getElementById('video-play') });
//	playVideo.render();
	
//	
//	var rbCallBack = function(){
//		console.log("The radio button selection is now " + String(new_rb01.getValue()));
//	}
//	
//	var new_rb01 = new gm.widgets.RadioButton({
//		"label":"Test Radio Button Group",
//		"groupName":"TestRadioButtonGroup",
//		"callBack":rbCallBack,
//		"parentElement":document.getElementById("radiobuttonDiv"),
//		"choices":[
//			{"label":"Option 01", "value":"option 01","checked":"checked"},
//			{"label":"Option 02", "value":"option 02"},
//			{"label":"Option 03","value":"option 03"},
//			{"label":"Disabled Option 04","value":"option 04"},
//			{"label":"Option 05","value":"option 05"},
//			{"label":"Disabled Option 06","value":"option 06","disabled":"disabled"}
//		]
//	});
//	new_rb01.render();
//
//	var new_tf = new gm.widgets.TextField({"label":"Text Field","parentElement":document.getElementById("textfieldDiv")});
//	new_tf.render();
//
//	var new_pwf = new gm.widgets.PasswordField({"label":"Password Field","parentElement":document.getElementById("passwordDiv"),"inputType":"password"});
//	new_pwf.render();
//
//	var new_nf = new gm.widgets.NumberField({"label":"Numberfield","min":"0","max":"100","parentElement":document.getElementById("numberfieldDiv")});
//	new_nf.render();
//    
//    // more new widget examples
//    var new_about = new gm.widgets.About({"parentElement":document.getElementById('new-about-widget')});
//   	new_about.render();
//    
//    var new_closeapp = new gm.widgets.CloseApp({"parentElement":document.getElementById('new-closeapp-widget')});
//    new_closeapp.render();
//    
//    var new_fav = new gm.widgets.SetFavorite({"parentElement":document.getElementById('new-setfav-widget')});
//	new_fav.render();
//    
//    var new_ts_selections = ["A","BB","CCC","DDDD","EEEEE","FFFFFF","GGGGGGG","HHHHHHHH","IIIIIIIII","J","K2","LLLL","MMMMMMMMM","NN","OO"];
//	var new_ts = new gm.widgets.TextSpinner({"label":"Text Spinner","parentElement":document.getElementById('new-ts-widget'),"selections":new_ts_selections});
//	new_ts.render();
//	
//	var datePicker = new gm.widgets.DatePicker({"label":"Pick a date", "parentElement":document.getElementById('new-datepicker-widget'),"language":"en_US"});
//    datePicker.render();
//    
//    var timePicker = new gm.widgets.TimePicker({"parentElement":document.getElementById('new-timepicker-widget')});
//    timePicker.render();
    
}

// GM API CALLS

var audioHandle;

var play = function() {
	audioHandle = gm.media.play('http://127.0.0.1:49770/preview/Fleet/test2.mp3', 'mixedAudio');
//	audioHandle = gm.media.play('test2.mp3', 'mixedAudio');
	console.log('clicked');
};

var pause = function(e) {
	gm.media.pause(audioHandle);
};

var stop = function() {
	gm.media.stop(audioHandle);
};

var seek = function() {
	gm.media.seek(audioHandle, 30000);
};


//var playVid = function() {
//	gm.media.play("http://static.clipcanvas.com/sample/clipcanvas_14348_H264_640x360.mp4", "video");
//};
//
//var watchSpeed = function() {
//	gm.system.watchSpeed(function(spd) {
//		switch (spd) {
//			case 0:
//				x$("#watch-speed-output").inner("PARK"); break;
//			case 1:
//				x$("#watch-speed-output").inner("LOWSPEED"); break;
//			case 2: 
//				x$("#watch-speed-output").inner("HIGHSPEED"); break;
//		}
//	});
//};
//
//var getConfig = function() {
//	gm.info.getVehicleConfiguration(function(args) {
//		x$("#vehicle-config-output").inner(JSON.stringify(args));
//	});
//};
//
//var getVehicleData = function() {
//	gm.info.getVehicleData(function(args) {
//		x$("#vehicle-data-output").inner(JSON.stringify(args));
//	});
//};
//
//var setFave = function() {
//	gm.ui.setFavorite(function(faveId) {
//		x$("#fave-output").inner("success, favorite Id: " + faveId);
//	}, function() {
//		x$("#fave-output").inner("failed");
//	}, {
//		title: "Nitobi Software",
//		URL: "http://www.nitobi.com"
//	});
//};
//
//var showAlert = function() {
//	var alertOptions = {
//			alertTitle : 'The Alert Title', 
//			alertDetail : 'Some details about the alert.',
//			primaryAction : function(){
//				x$("#show-alert-output").inner("primary action clicked");
//			},
//			secondaryAction : function() {
//				x$("#show-alert-output").inner("secondary action clicked");
//			},
//			primaryButtonText : 'OK',
//			secondaryButtonText : 'Cancel' 
//	};
//
//	gm.ui.showAlert(function(){}, function(){}, alertOptions);
//};
//
//var setMenu = function() {
//	gm.ui.setInteractionSelector(function() {
//		console.log('error');
//	}, menuOpts);
//};

//var menuOpts = {
//	button1_type:"text",
//	button1_text:"BUTTON ONE",
//	button1_action: function(arg) { ok(true, "button 1 should get clicked once"); },
//	button2_type:"icon",
//	button2_text:"Icon.png",
//	button2_action: function(arg) { console.log('button 2!' + arg);},
//	button3_type:"text",
//	button3_text:"BUTTON THREE",
//	button3_action: function(arg) { console.log('button 3!' + arg);},
//	button4_type:"text",
//	button4_text:"BUTTON FOUR",
//	button4_action: function(arg) { console.log('button 4!' + arg);},
//	button5_type:"text",
//	button5_text:"BUTTON FIVE",
//	button5_action: function(arg) { console.log('button 5!' + arg);},
//	button6_type:"text",
//	button6_text:"BUTTON SIX",
//	button6_action: function(arg) { console.log('button 6!' + arg);},
//	button7_type:"text",
//	button7_text:"BUTTON SEVEN",
//	button7_action: function(arg) { console.log('button 7!' + arg);}
//};
//
//var showKeyboard = function() {
//	var onDoneCallBack = function (data) {
//		console.log('onDone called with -> ' + data.value);
//	};
//
//	var onCancelCallBack = function () {
//		console.log('Canceled!');
//	};
//
//	var keyboard = new gm.widgets.Keyboard({sender: null, language: "en-US", kbType: 1, feedbackMode: 0, Theme:'gmc', placeholder:'Placeholder', onDone: onDoneCallBack, onCancel:onCancelCallBack});
//};
//
//var showKeyboardEmail = function() {
//	var onDoneCallBack = function (data) {
//		console.log('onDone called with -> ' + data.value);
//	};
//
//	var onCancelCallBack = function () {
//		console.log('Canceled!');
//	};
//	var keyboardEmail = new gm.widgets.Keyboard({sender: null, language: "en-US", kbType: 2, feedbackMode: 0, Theme:'gmc', placeholder:'Placeholder', onDone: onDoneCallBack, onCancel:onCancelCallBack});
//};
//
//var showNumpad = function() {
//	var onDoneCallBack = function (data) {
//		console.log('onDone called with -> ' + data);
//	};
//
//	var onCancelCallBack = function () {
//		console.log('Canceled!');
//	};
//	var numberpad = new gm.widgets.Numberpad({sender: null, language: "en-US",placeholder: "Placeholder", onDone: onDoneCallBack, onCancel:onCancelCallBack});
//};
//
//var showNumpadMult = function() {
//	var numberpadMult = new gm.widgets.Numberpad({sender: 'numpadDiv', language: "en-US"});
//};
//
//var showKeyboardMult = function() {
//	var keyboardMult = new gm.widgets.Keyboard({sender: 'keyboardDiv', language: "en-US", kbType:1, feedbackMode: 0, Theme: 'gmc'});
//};
//
//var watchDest = function () {
//	gm.nav.watchDestination(function (dest) {
//		console.log("Watch Destination Success -> "+ dest);
//	}, function () {
//		console.log("Watch Destination Failed");
//	});
//};
//
//var clearDest = function () {
//	gm.nav.clearDestination();
//};

