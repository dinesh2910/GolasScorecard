// Arguments passed into this controller can be accessed via the `$.args` object directly or:
// var args = $.args;
function closeSettings(){
    increaseBy = $.increaseByNum.value;
    $.container2.close();
    
}

var parent = Alloy.Globals.parent;

function updateBackground(e){
	if(e.source.id == "footballview"){
		parent.backgrounImage = "images/Football_Field.png";
		$.container2.backgroundImage = "images/Football_Field.png"; 
	}else if(e.source.id == "soccerView"){
		parent.backgrounImage = "images/soccer_Back.png.png";
		$.container2.backgroundImage = "images/soccer_Back.png.png"; 
	} else if(e.source.id == "Basketball"){
		parent.backgrounImage = "images/Basket_Back.png.png";
		$.container2.backgroundImage = "images/Basket_Back.png.png";
	} else (e.source.id == "Foosball");{
		parent.backgrounImage = "images/Foosball_Back.png.png";
		$.container2.backgroundImage = "images/Foosball_Back.png.png";
	}
}

function figureValue(e){
	alert($.picker.getSelectedRow(0).title); 
}

function disableLock(e){
	if (evalue ==1){
		$.dialog.show();
		disableScreenLock = true;
		
	}else
	Ti.App.idleTimeDisabled = false;
	disableScreenLock = false;
}

function turnoffScreenSaver(e){
	if(e.index ==1){
	Ti.App.idleTimeDisabled = true;
	alert("Screen Saver is Turned Off");	
	}
}
