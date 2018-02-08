function addPointBlue(){
	blueScore = +blueScore + +increaseBy;
	$.scoreRText.value = bluescore;
	
}

function addPointRed(){
	redScore = +redScore + +increaseBy;
$.scoreLText.value = redscore;
	
}

function minusPointRed(){
	if(redScore >=1){
	redScore = +redScore - +increaseBy;
	$.scoreLText.value = redscore;
	}
}

function minusPointBlue(){
	if(blueScore >=1){
	blueScore = +blueScore - +increaseBy;
	$.scoreRText.value = bluescore;
	}
}
function determineSwipeRight(e){
	if(e.direction == 'up'){
		addPointBlue();
	} else if (e.direction == 'down'){
		minuspointBlue();
		
	}
	
}
function determineSwipeLeft(e){
	if(e.direction == 'up'){
		addPointRed();
	} else if (e.direction == 'down'){
		minuspointRed();
		
	}
	
	function clearScore(){
		redScore = 0;
		blueScore = 0;
		$.scoreLText.value = redScore;
		$.scoreRText.value = blueScore;
		
		
	}
	
	Ti.Gesture.addEventListner('shake',function(e){
		
	clearScore();
	alert("Your Score are Cleared Now");
	
	}
	
	
function openSettings(){
    var settingsPage = Alloy.createController('settings').getView();
    settingsPage.open({modal:true});   
}

$.index.open();

Alloy.Globals.parent= $.index;

