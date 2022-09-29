    // Player name
    var player1 = "Player 1";
    var sum = 0;
    var sum2 = 0;
    var num=0;
     var num2=0;
    var randomNumber=0;
    var count=0;
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
			count++;
		if (count%2==0){
			playerA();
		}
		else {
			playerB();
		}
            document.querySelector(".img1").setAttribute("src",
                "assets/face" + randomNumber + ".png");
    	    
	    

        } ,100);
    }
 function playerA() {
	if (randomNumber==1) {
		num++;
		}
	if (num>0){
		$(".pig").remove();
		sum+=randomNumber;
		console.log(sum);
		
	
		
	 if (sum==5){
		sum=35;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}
	else if (sum==23){
		sum=42;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}
	else if (sum==9){
		sum=51;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}else if (sum==36){
		sum=5;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}
	else if (sum==49){
		sum=7;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}
	else if (sum==48){
		sum=86;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}
	else if (sum==56){
		sum=8;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}
	else if (sum==62){
		sum=83;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}
	else if (sum==69){
		sum=91;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}
	else if (sum==87){
		sum=66;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}
	else if (sum==82){
		sum=20;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}
	else if (sum==95){
		sum=38;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}
	else if (sum==100){
		sum=100;
		$('#'+sum+"").append('<img src="Assets/pig2.gif" class="winner"/>');
		
		
	}
	else if (sum==100){
		sum=100;
		$('#'+sum+"").append('<img src="Assets/pig2.gif" class="winner"/>');
		
		
	}
	else if (sum>100){
		sum=sum-randomNumber;
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
		
	}
	else if (sum==100){
		sum=100;
		$('#'+sum+"").append('<img src="Assets/pig2.gif" class="winner"/>');
		
		
	}
	else {
		$('#'+sum+"").append('<img src="Assets/liz2.gif" class="pig"/>');
		
	}
}
}
 function playerB() {
	if (randomNumber==1) {
		num2++;
		}
	if (num2>0){
		$(".bird1").remove();
		sum2+=randomNumber;
		console.log(sum2);
		
	
		
	 if (sum2==5){
		sum2=35;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}
	else if (sum2==23){
		sum2=42;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}
	else if (sum2==9){
		sum2=51;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}else if (sum2==36){
		sum2=5;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}
	else if (sum2==49){
		sum2=7;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}
	else if (sum2==48){
		sum2=86;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}
	else if (sum2==56){
		sum2=8;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}
	else if (sum2==62){
		sum2=83;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}
	else if (sum2==69){
		sum2=91;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}
	else if (sum2==87){
		sum2=66;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}
	else if (sum2==82){
		sum2=20;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}
	else if (sum2==95){
		sum2=38;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}
	else if (sum2==100){
		sum2=100;
		$('#'+sum2+"").append('<img src="Assets/bird3.gif" class="winner"/>');
		
		
	}
	else if (sum2==100){
		sum2=100;
		$('#'+sum2+"").append('<img src="Assets/bird3.gif" class="winner"/>');
		
		
	}
	else if (sum2>100){
		sum2=sum2-randomNumber;
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
		
	}
	else if (sum2==100){
		sum2=100;
		$('#'+sum2+"").append('<img src="Assets/bird3.gif" class="winner"/>');
		
		
	}
	else {
		$('#'+sum2+"").append('<img src="Assets/bird.png" class="bird1"/>');
		
	}
}
}