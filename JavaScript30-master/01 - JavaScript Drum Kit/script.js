function play(e){
	// Get the keycode of the current event
    var getKey = e.keyCode;

    // Query Selector choose the audio whose datakey is the getKey
    var selectAudio = document.querySelector("audio[data-key=\""+getKey+"\"]");
    if (selectAudio == null)
    	return;

    // choose the key whose data-key is equal to the getKey
    var selectKey = document.querySelector(".key[data-key=\""+getKey+"\"]");
    selectKey.classList.add('playing');

    // Set the current time equal to zero and play the music
    selectAudio.currentTime = 0;
    selectAudio.play();
  }

  function removeTransition(e){
  	//CHeck the propertyname. If it is transform then move on otherwise stop there.
  	if(e.propertyName!="transform")
  		return;
  	this.classList.remove('playing');
  }

  var allKey = document.querySelectorAll(".key");

  for(var i=0;i<allKey.length;i++){
  	var tmp = allKey[i];
  	tmp.addEventListener("transitionend",removeTransition);
  }

  window.addEventListener("keydown",play);