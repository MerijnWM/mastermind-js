var color = ["red", "darkblue", "purple", "black", "orange", "darkgreen", "pink", "yellow", "limegreen", "lightblue"];
var main = document.getElementById("main");
var table = document.createElement("table");
var helptable = document.createElement("table");
var checkbutton = document.createElement("button");
var curruntcolor = -1;
var currentRownummer = 1;
var smallballcount = 0;
var balls = "";
var colors = "";
var gues = "";


function createGame(){	
	balls = document.getElementById("inputcode").value;
	colors = document.getElementById("inputcolors").value;	
	gues = [color[getRandomColor()],color[getRandomColor()],color[getRandomColor()],color[getRandomColor()],color[getRandomColor()],color[getRandomColor()]];
	var startbutton = document.getElementById("startbutton");
	var invulveld = document.getElementById("invulveld");
	invulveld.parentNode.removeChild(invulveld);
	startbutton.parentNode.removeChild(startbutton);

	main.appendChild(checkbutton);
	checkbutton.innerHTML = "Check";
	checkbutton.id = "checkbutton";
	checkbutton.setAttribute("onclick", "checkCode()"); 

	main.appendChild(table);
	table.id = "gues-code-table";
	for(var y = 1; y < 13; y++){
		var tablerow = document.createElement("tr");
		table.appendChild(tablerow);	
		for(var i= 1; i <= balls; i++){
			var bigball = document.createElement("td");
			tablerow.appendChild(bigball);		
			bigball.className = "bigball";
			bigball.id =  "bigball_" + y + "_" + i;
			bigball.onclick = getClickedElement;			
		}	
	}	

	main.appendChild(helptable);
	helptable.id = "help-to-gues-code-table";
	for(var y = 1; y < 13; y++){
		var helprow = document.createElement("tr");
		helptable.appendChild(helprow);
		for(var i = 1; i <= balls; i++){
			var smallball = document.createElement("td");
			helprow.appendChild(smallball);	
			smallball.className = "smallball";	
			smallball.id = "smallball_" + y + "_" + i;	
		}
	}
}

function getRandomColor() {
	return Math.floor(Math.random() * colors);
}

function getClickedElement(event) {
	var id = event.target.id;	
	curruntcolor = curruntcolor + 1;	
	if (curruntcolor == colors) {
		curruntcolor = 0;
	}

	for(var y = 1; y<=balls; y++){
	    var currentRow = "bigball_" + currentRownummer + "_" + y;
		if(currentRow == id ){
			var element = document.getElementById(id);
			element.style.backgroundColor = color[curruntcolor];		
		}
	}		
}

function checkCode(){	
	for(var y = 1; y<=balls; y++){	
		var checkball = document.getElementById("bigball_" + currentRownummer + "_" + y);		
		var hulpball = document.getElementById("smallball_" + currentRownummer + "_" + y);		
		for (var i = 0; i<colors; i++){			
			if (checkball.style.backgroundColor == gues[i]){
				hulpball.style.backgroundColor = "white";				
			}			
		}	
		if (checkball.style.backgroundColor == gues[y -1]){
			hulpball.style.backgroundColor = "red";
		}				
	}

	for(var y = 1; y<=balls; y++){
		var smallball = document.getElementById("smallball_" + currentRownummer + "_" + y);
		if (smallball.style.backgroundColor == "red" ){	
			smallballcount = smallballcount+1;
		}	
	}
	if(smallballcount == 6 ){
		var winscreen = document.createElement("div");
		main.appendChild(winscreen);
		winscreen.id = "winscreen";
		winscreen.innerHTML = "GEWONNEN";
		checkbutton.onclick = "";
	}
	currentRownummer = currentRownummer + 1;
	smallballcount = 0;
}










