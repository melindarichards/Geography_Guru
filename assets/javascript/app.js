
// 1. How to get alert to show up on "0" instead of "1"?

// 2. How to fix "submit" button so it won't keep tallying on multiple hits?


$(document).ready(function(){

var number = 30;

var intervalId;

var wins = 0;

var losses = 0;

$("#startTimer").on("click", run);

function decrement() {
	number--;
	
	// Timer controls:
	$("#timeRemaining").html("<h2>" + number + "</h2>");
	console.log(number);
	if (number === 0) {
		// need all of the below actions to apply when "submit" is clicked, except for the alert.
			stop();
			number = 30;
			alert("Time Up!");

			
			clearInterval(intervalId);

			// question 1

			var selValue1 = $('input[name=possibleAnswer1]:checked').val(); 
			console.log(selValue1);


			if (selValue1 === "C") {
				wins++;
				$("#Wins").html("<h2>" + wins + "</h2>");
			}

			else if (selValue1!== "C") {
				losses++;
				$("#Losses").html("<h2>" + losses + "</h2>");
			}



			// question 2

			var selValue2 = $('input[name=possibleAnswer2]:checked').val(); 
			console.log(selValue2);


			if (selValue2 === "D") {
				wins++;
				$("#Wins").html("<h2>" + wins + "</h2>");
			}

			else if (selValue2!== "D") {
				losses++;
				$("#Losses").html("<h2>" + losses + "</h2>");
			}


			// question 3
	
			var selValue3 = $('input[name=possibleAnswer3]:checked').val(); 
			console.log(selValue3);


			if (selValue3 === "B") {
				wins++;
				$("#Wins").html("<h2>" + wins + "</h2>");
			}

			else if (selValue3!== "B") {
				losses++;
				$("#Losses").html("<h2>" + losses + "</h2>");
			}


			// question 4
	
			var selValue4 = $('input[name=possibleAnswer4]:checked').val(); 
			console.log(selValue4);


			if (selValue4 === "A") {
				wins++;
				$("#Wins").html("<h2>" + wins + "</h2>");
			}

			else if (selValue4!== "A") {
				losses++;
				$("#Losses").html("<h2>" + losses + "</h2>");
			}


			// question 5
	
			var selValue5 = $('input[name=possibleAnswer5]:checked').val(); 
			console.log(selValue5);


			if (selValue5 === "D") {
				wins++;
				$("#Wins").html("<h2>" + wins + "</h2>");
			}

			else if (selValue5!== "D") {
				losses++;
				$("#Losses").html("<h2>" + losses + "</h2>");
			}


			// question 6
	
			var selValue6 = $('input[name=possibleAnswer6]:checked').val(); 
			console.log(selValue6);


			if (selValue6 === "B") {
				wins++;
				$("#Wins").html("<h2>" + wins + "</h2>");
			}

			else if (selValue6!== "B") {
				losses++;
				$("#Losses").html("<h2>" + losses + "</h2>");
			}
			
		}
	}

function run() {
	wins = 0;
	losses = 0;
	$("#Wins").html("<h2>" + wins + "</h2>");
			$("#Losses").html("<h2>" + losses + "</h2>");

			var ele = document.getElementsByName("possibleAnswer1");
			for(var i=0;i<ele.length;i++)
				 ele[i].checked = false;

			var ele = document.getElementsByName("possibleAnswer2");
			for(var i=0;i<ele.length;i++)
				 ele[i].checked = false;

			var ele = document.getElementsByName("possibleAnswer3");
			 for(var i=0;i<ele.length;i++)
				ele[i].checked = false;

			var ele = document.getElementsByName("possibleAnswer4");
			for(var i=0;i<ele.length;i++)
				 ele[i].checked = false;

			var ele = document.getElementsByName("possibleAnswer5");
		 for(var i=0;i<ele.length;i++)
					ele[i].checked = false;

			var ele = document.getElementsByName("possibleAnswer6");
			for(var i=0;i<ele.length;i++)
				 ele[i].checked = false;

    clearInterval(intervalId);
		intervalId = setInterval(decrement, 1000);
	

	}

// *********************************************

$("#submit").on("click", function(event){
	event.preventDefault();
	stop();
	number = 30;
	alert("Your answers are being graded.");
	clearInterval(intervalId);


	var selValue1 = $('input[name=possibleAnswer1]:checked').val(); 
	console.log(selValue1);


	if (selValue1 === "C") {
		wins++;
		$("#Wins").html("<h2>" + wins + "</h2>");
	}

	else if (selValue1!== "C") {
		losses++;
		$("#Losses").html("<h2>" + losses + "</h2>");
	}



	// question 2

	var selValue2 = $('input[name=possibleAnswer2]:checked').val(); 
	console.log(selValue2);


	if (selValue2 === "D") {
		wins++;
		$("#Wins").html("<h2>" + wins + "</h2>");
	}

	else if (selValue2!== "D") {
		losses++;
		$("#Losses").html("<h2>" + losses + "</h2>");
	}


	// question 3

	var selValue3 = $('input[name=possibleAnswer3]:checked').val(); 
	console.log(selValue3);


	if (selValue3 === "B") {
		wins++;
		$("#Wins").html("<h2>" + wins + "</h2>");
	}

	else if (selValue3!== "B") {
		losses++;
		$("#Losses").html("<h2>" + losses + "</h2>");
	}


	// question 4

	var selValue4 = $('input[name=possibleAnswer4]:checked').val(); 
	console.log(selValue4);


	if (selValue4 === "A") {
		wins++;
		$("#Wins").html("<h2>" + wins + "</h2>");
	}

	else if (selValue4!== "A") {
		losses++;
		$("#Losses").html("<h2>" + losses + "</h2>");
	}


	// question 5

	var selValue5 = $('input[name=possibleAnswer5]:checked').val(); 
	console.log(selValue5);


	if (selValue5 === "D") {
		wins++;
		$("#Wins").html("<h2>" + wins + "</h2>");
	}

	else if (selValue5!== "D") {
		losses++;
		$("#Losses").html("<h2>" + losses + "</h2>");
	}


	// question 6

	var selValue6 = $('input[name=possibleAnswer6]:checked').val(); 
	console.log(selValue6);


	if (selValue6 === "B") {
		wins++;
		$("#Wins").html("<h2>" + wins + "</h2>");
	}

	else if (selValue6!== "B") {
		losses++;
		$("#Losses").html("<h2>" + losses + "</h2>");
	}



});

function decrement() {
	number--;
	
	// Timer controls:
	$("#timeRemaining").html("<h2>" + number + "</h2>");
	console.log(number);
	if (number === 0) {
		// need all of the below actions to apply when "submit" is clicked, except for the alert.
			stop();
			number = 30;
			alert("Time Up!");

			
			clearInterval(intervalId);

			// question 1

			var selValue1 = $('input[name=possibleAnswer1]:checked').val(); 
			console.log(selValue1);


			if (selValue1 === "C") {
				wins++;
				$("#Wins").html("<h2>" + wins + "</h2>");
			}

			else if (selValue1!== "C") {
				losses++;
				$("#Losses").html("<h2>" + losses + "</h2>");
			}



			// question 2

			var selValue2 = $('input[name=possibleAnswer2]:checked').val(); 
			console.log(selValue2);


			if (selValue2 === "D") {
				wins++;
				$("#Wins").html("<h2>" + wins + "</h2>");
			}

			else if (selValue2!== "D") {
				losses++;
				$("#Losses").html("<h2>" + losses + "</h2>");
			}


			// question 3
	
			var selValue3 = $('input[name=possibleAnswer3]:checked').val(); 
			console.log(selValue3);


			if (selValue3 === "B") {
				wins++;
				$("#Wins").html("<h2>" + wins + "</h2>");
			}

			else if (selValue3!== "B") {
				losses++;
				$("#Losses").html("<h2>" + losses + "</h2>");
			}


			// question 4
	
			var selValue4 = $('input[name=possibleAnswer4]:checked').val(); 
			console.log(selValue4);


			if (selValue4 === "A") {
				wins++;
				$("#Wins").html("<h2>" + wins + "</h2>");
			}

			else if (selValue4!== "A") {
				losses++;
				$("#Losses").html("<h2>" + losses + "</h2>");
			}


			// question 5
	
			var selValue5 = $('input[name=possibleAnswer5]:checked').val(); 
			console.log(selValue5);


			if (selValue5 === "D") {
				wins++;
				$("#Wins").html("<h2>" + wins + "</h2>");
			}

			else if (selValue5!== "D") {
				losses++;
				$("#Losses").html("<h2>" + losses + "</h2>");
			}


			// question 6
	
			var selValue6 = $('input[name=possibleAnswer6]:checked').val(); 
			console.log(selValue6);


			if (selValue6 === "B") {
				wins++;
				$("#Wins").html("<h2>" + wins + "</h2>");
			}

			else if (selValue6!== "B") {
				losses++;
				$("#Losses").html("<h2>" + losses + "</h2>");
			}
			
		}
	}



})
