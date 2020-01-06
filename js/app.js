class listObject{
    constructor(name, priority,date, id){
      this.name = name;
      this.priority = priority;
      this.date = date;
      this.completeness = completeness;
	  this.id = id;
    }

    getName(){
      return this.name;
    }
    
	getId(){
		return this.id;
	}
	
    getPriority(){
        return this.priority;
    }
    TogglePriority(){
        if(this.priority == "low"){
            this.priority = "high";
        }
        else{
            this.priority == "low";
        }
    }
    getDate(){
      return this.date;
    }


}

function count(item) {
  var count = 0;
  for( var i = 0; i < listItems.length; i++){ 
    if (listItems[i].getName() === item) {
		count = count + 1;
    }
  }
  return count;
}


function isValidDate(dateString) {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if(!dateString.match(regEx)) return false;  // Invalid format
  var d = new Date(dateString);
  var dNum = d.getTime();
  if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
  return d.toISOString().slice(0,10) === dateString;
}


var points = 0;
var curItem = "";
var completeness = false;
var ultrabutton;
var ultradiv;
var today = new Date();
var supe = false;
var dat = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(dat);
var datess = "";
var deleted = 0;
window.onload = function(){
var x = document.getElementById("cool");
var y = document.getElementById("show");
y.style.display = "none";
x.style.display = "none";
var prior = "low";
document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("input").click();
  }
});
document.getElementById("input").onclick = function() {
    console.log("hello");
    var name = document.getElementById("name").value;
    var priority = document.getElementById("priority").value;
    var date = document.getElementById("date").value;
    console.log(date);
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    for (var i = 0; i < listItems.length; i++) {
    console.log(listItems[i].getDate());
    if(supe == true && dat == listItems[i].getDate){
      document.getElementById(listItems[i].getName()).remove();
      
      document.getElementById(listItems[i].getName() + "1").remove();
      points = points - 1;
    }
    //Do something
   }
    construct(name, priority, date);
}
document.getElementById("remove").onclick = function() {
    console.log("hello");
    var button = document.getElementById(curItem);
    ultradiv.remove();
    for( var i = 0; i < listItems.length; i++){ 
    if (listItems[i].getName() === curItem) {
        listItems.splice(i, 1);
		deleted = deleted + 1;
		
        }
    }
    x.style.display = "none";
}

document.getElementById("complete").onclick = function() {
    console.log(completeness);
    if(ultrabutton.style.textDecoration != "line-through"){
      ultrabutton.style.setProperty("text-decoration", "line-through");
      document.getElementById(ultradiv.id + "complete").innerHTML = "Mark Incomplete";
	  document.getElementById(ultradiv.id + "complete").style.backgroundColor= "lightgreen";
      if(supe == true){
    var button = document.getElementById(curItem);
    ultradiv.remove();
    x.style.display = "none";
    points = points + 1;
	document.getElementById("point").innerHTML = points.toString();
  }
    }
    else{
      ultrabutton.style.setProperty("text-decoration", "none");
	  document.getElementById(ultradiv.id + "complete").style.backgroundColor= "";
      document.getElementById(ultradiv.id + "complete").innerHTML = "Mark Complete";
    }
    x.style.display = "none";
}
document.getElementById("inprior").onclick = function() {
    console.log("What about this period?");
    if(ultrabutton.style.textDecoration != "line-through"){
        completeness = false;
    }
    else{
        completeness = true;
    }
    ultradiv.remove();
	var idd = "";
    for( var i = 0; i < listItems.length; i++){
    if (listItems[i].getId() == ultradiv.id) {
        datess = listItems[i].getDate();
		idd = listItems[i].getId();
        if(listItems[i].getPriority() == "low"){
            prior = "high"
        }
        else{
            prior = "low"
        }
        listItems.splice(i,1);
		deleted = deleted + 1;
      }
    }
    
    construct(curItem, prior, datess,idd);
	console.log("HERE");
	if(prior == "high"){
		console.log("THERE");
		document.getElementById(idd + "priority").style.backgroundColor= "red";
	}
	else{
		console.log("GERE");
		document.getElementById(idd + "priority").style.backgroundColor="";
	}
    if(completeness == true){
        console.log("Has this?");
        document.getElementById("complete").click();
    }
    x.style.display = "none";
}
document.getElementById("super").onclick = function(){
	if(supe == false){
	document.getElementById("super").innerHTML = "<strong> Deactivate Point Mode </strong>";
	supe = true;
	y.style.display = "block";
	}
	else{
	document.getElementById("super").innerHTML = "<strong> Activate Point Mode </strong>";
	supe = false;
	y.style.display = "none";
	}
}
document.getElementById("show").onclick = function(){
	var permission = prompt("This will delete completed items and items past the due date. Are you okay with this? y/n");
	if(permission == "y"){
	for( var i = 0; i < listItems.length; i++){
		var parts = listItems[i].getDate().split('-');
		var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
		console.log(mydate);
		console.log(listItems[i].getId());
		console.log(today);
		if(today > mydate || document.getElementById(listItems[i].getId() + "5000").style.textDecoration == "line-through"){
			console.log(listItems[i].getId());
			document.getElementById(listItems[i].getId()).remove();
			listItems.splice(i,1);
			deleted = deleted + 1;
			if(today < mydate){
			points = points - 1;
			}
			else{
				points = points + 1;
			}
			i = -1;
		}
	}
	}
  document.getElementById("point").innerHTML = points.toString();
}
}

var listItems = [];

const construct = function(n, p, d, ide) {
	if(ide == undefined){
	var id = n;
	//alert(counts);
	if(count(n) > 0){
		//alert ("in if");
		//alert (listItems.length);
	   id = n + (count(n) + deleted).toString();
    }
	}
	else{
		id = ide;
	}
	
   console.log("hola");
   const header = document.getElementById("h3");
   listItems.push(new listObject(n, p, d, id));
   if(n != ""){
   const item = document.createElement("h2");
   item.innerHTML = n;
   for (var i = 0; i < listItems.length; i++) {
    console.log("function");
    if(listItems[i].getName() == n){
      console.log(listItems[i].getPriority());
      if(listItems[i].getPriority() == "high"){
          item.innerHTML = "! " + n;
      }
      else{
          item.innerHTML = n;
      }
    }
    //Do something
   }
   const div = document.createElement("div");
   const prioritybutton = document.createElement("button");
   prioritybutton.innerHTML = "!";
   const completebutton = document.createElement("button");
   completebutton.innerHTML = "Mark Complete";
   const removebutton = document.createElement("button");
   removebutton.innerHTML = "X"; 
   
   if(p == "high"){
   header.append(div);
   }
   else{
     header.after(div);
   }
   div.append(item);
   div.append(prioritybutton);
   div.append(completebutton);
   div.append(removebutton);
   if(d != undefined && isValidDate(d)){
	   const dates = document.createElement("h2");
       dates.innerHTML = d;
	   div.append(dates);
   }
   div.id = id;
   item.id = id + "5000";
   ultrabutton = item;
   ultradiv = div;
	   if(p == "high"){
		   document.getElementById(prioritybutton).style.backgroundColor= "red";
	   }
   completebutton.id = id + "complete";
   prioritybutton.id = id + "priority";
   prioritybutton.addEventListener ("click", function() {
   for (var i = 0; i < listItems.length; i++) {
    if(listItems[i].getName() == n){
      curItem = listItems[i].getName();
    }
    //Do something
  }
  //curItem = n;
  completeness = false;
  ultrabutton = item;
  ultradiv = div;
  document.getElementById("inprior").click();
  
});
   removebutton.addEventListener ("click", function() {
   curItem = n;
  completeness = false;
  ultrabutton = item;
  ultradiv = div;
  document.getElementById("remove").click();
  
});
   completebutton.addEventListener ("click", function() {
   for (var i = 0; i < listItems.length; i++) {
    if(listItems[i].getName() == n){
      curItem = listItems[i].getName();
    }
    //Do something
  }
  completeness = false;
  ultrabutton = item;
  ultradiv = div;
  document.getElementById("complete").click();
  
});
   }
   console.log("why");
   
};
