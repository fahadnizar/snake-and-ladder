    // Player name
    var player1 = "Player 1";
    var sum = 0;
    var num=0;
    var randomNumber=0;
 
    // Function to change the player name
    function editNames() {
        player1 = prompt("Change Player1 name");
        document.querySelector("p.Player1").innerHTML = player1;
    }
  
    // Function to roll the dice
    function rollTheDice() {
             document.querySelector(".img1").setAttribute("src",
                "assets/face0.gif");
        setTimeout(function () {
            randomNumber = Math.floor(Math.random() * 6) + 1;
            document.querySelector(".img1").setAttribute("src",
                "assets/face" + randomNumber + ".png");
    	    if (randomNumber==1) {
		num++;
		}
start();

        } ,100);
    }
 function start() {
	if (num>0){
		$(".lizard").remove();
		sum+=randomNumber;
		console.log(sum);
		
	
		
	 if (sum==5){
		sum=35;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}
	else if (sum==23){
		sum=42;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}
	else if (sum==9){
		sum=51;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}else if (sum==36){
		sum=5;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}
	else if (sum==49){
		sum=7;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}
	else if (sum==48){
		sum=86;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}
	else if (sum==56){
		sum=8;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}
	else if (sum==62){
		sum=83;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}
	else if (sum==69){
		sum=91;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}
	else if (sum==87){
		sum=66;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}
	else if (sum==82){
		sum=20;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}
	else if (sum==95){
		sum=38;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}
	else if (sum==100){
		sum=100;
		$('#'+sum+"").append('<img src="Assets/winner.gif" class="winner"/>');
		
		
	}
	else if (sum==100){
		sum=100;
		$('#'+sum+"").append('<img src="Assets/winner.gif" class="winner"/>');
		
		
	}
	else if (sum>100){
		sum=sum-randomNumber;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
		
	}
	else if (sum==100){
		sum=100;
		$('#'+sum+"").append('<img src="Assets/winner.gif" class="winner"/>');
		
		
	}
	else {
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="lizard"/>');
		
	}
}
}