/*Menu hidden by default, if the function is called
the display will go from hidden to displaying*/
function showMenu() {
	var menu = document.getElementById("menu");
	var gearAppear = 0;

  if (menu.style.display === "block") {
			gearAppear = 0;
  } else {
			gearAppear = 1;
  }

	switch(gearAppear) {
    case 0:
      menu.style.display = "none";
    break;
    case 1:
      menu.style.display = "block";
    break;
  }
}

/*Used to close the menu display*/
function closeMenu() {
	document.getElementById("menu").style.display="none";
}

/*Function takes in value and uses that in a switch statement to determine the changes*/
function colourChange(value) {
	var colourValue = value;
	
	switch(colourValue) {
    case '1':
      bodyColour = "orange";
			gearColour = "white";
			mainbodyColour = "red";
			mainbodyOutline = "red";
    break;
    case '2':
      bodyColour = "white";
			gearColour = "black";
			mainbodyColour = "white";
			mainbodyOutline = "black";
    break;
  }
  
	document.body.style.backgroundColor = bodyColour;
	document.getElementById("gear").style.color = gearColour;
	document.getElementById("mainbody").style.backgroundColor = mainbodyColour;
	document.getElementById("mainbody").style.borderColor = mainbodyOutline;
}

/*function that rotates the images*/
function spin() {
	var image1 = document.getElementById("image1");
	var image2 = document.getElementById("image2");
	var image3 = document.getElementById("image3");

	var newPosition1 = (generateRandomNumber() * 100);
	var newPosition2 = (generateRandomNumber() * 100);
	var newPosition3 = (generateRandomNumber() * 100);

	/*change image 1 position*/
	setTimeout(function(){
		image1.style.objectPosition = "0 -"+ newPosition1 +"px";
  },0);

	/*change image 2 position*/
	setTimeout(function(){
		image2.style.objectPosition = "0 -"+ newPosition2 +"px";
  },1000);

	/*change image 3 position*/
	setTimeout(function(){
		image3.style.objectPosition = "0 -"+ newPosition3 +"px";
  },2000);

	/*Call streamerWin if two or more images match*/
	setTimeout(function(){
		var winLoose = 0;

		if(image1.style.objectPosition === image2.style.objectPosition || image1.style.objectPosition === image3.style.objectPosition){
			winLoose = 1;
		} else if(image2.style.objectPosition === image1.style.objectPosition || image2.style.objectPosition === image3.style.objectPosition){
			winLoose = 1;
		} else {
			winLoose = 0;
		}

		if(winLoose == 1){
			streamerWin();
		}
  },2001);
	
}

/*called when at least two images match*/
function streamerWin() {
	setTimeout(function(){
    document.getElementById("confetti").style.height = "95%";
  },500);

	setTimeout(function(){
    document.getElementById("confetti").style.height = "0px";
  },3000);
}

/*Shrink handlebar and transition back out*/
function pullHandle() {
	var handleBar = document.getElementById("handleBar");
	handleBar.style.height = "20%";
	handleBar.style.transitionDuration = ".5s";

	setTimeout(function(){
    handleBar.style.height = "50%";
		handleBar.style.transitionDuration = ".5s";
		spin();
  },500);
}

/*Generates random number*/
function generateRandomNumber() {
  var random_number = Math.random() * (5);
  return Math.floor(random_number);
}