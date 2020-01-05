class listObject{
    constructor(name, priority,date){
      this.name = name;
      this.priority = priority;
      this.date = date;
    }

    getName(){
      return this.name;
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

var points = 0;
var curItem = "";
var completeness = false;
var ultrabutton;
var today = new Date();
var supe = false;
var dat = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(dat);
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
    button.remove();
    var br = document.getElementById(curItem + "1");
    br.remove();
    for( var i = 0; i < listItems.length; i++){ 
    if (listItems[i].getName() === curItem) {
        listItems.splice(i, 1); 
        }
    }
    x.style.display = "none";
}

document.getElementById("complete").onclick = function() {
    console.log(completeness);
    if(ultrabutton.style.textDecoration != "line-through"){
      ultrabutton.style.setProperty("text-decoration", "line-through");
      if(supe == true){
    var button = document.getElementById(curItem);
    button.remove();
    var br = document.getElementById(curItem + "1");
    br.remove();
    x.style.display = "none";
    points = points + 1;
  }
    }
    else{
      ultrabutton.style.setProperty("text-decoration", "none");
    }
    x.style.display = "none";
}
document.getElementById("inprior").onclick = function() {
    var button = document.getElementById(curItem);
    button.remove();
    var br = document.getElementById(curItem + "1");
    br.remove();
    for( var i = 0; i < listItems.length; i++){ 
    if (listItems[i].getName() == curItem) {
        if(listItems[i].getPriority() == "low"){
            prior = "high"
        }
        else{
            prior = "low"
        }
        listItems.splice(i,1);
      }
    }
    
    construct(curItem, prior);
    x.style.display = "none";
}
document.getElementById("super").onclick = function(){
  supe = true;
  y.style.display = "block";
}
document.getElementById("show").onclick = function(){
  document.getElementById("point").innerHTML = points.toString();
}
}

var listItems = [];

const construct = function(n, p, d) {
   console.log("hola");
   
   const header = document.getElementById("h3");
   listItems.push(new listObject(n, p, d));
   if(n != ""){
   const item = document.createElement("button");
   item.innerHTML = n;
   for (var i = 0; i < listItems.length; i++) {
    console.log("function");
    if(listItems[i].getName() == n){
      console.log(listItems[i].getPriority());
      if(listItems[i].getPriority() == "high"){
          item.innerHTML = "!" + n;
      }
      else{
          item.innerHTML = n;
      }
    }
    //Do something
   }
   const breaker = document.createElement("BR");
   if(p == "high"){
   header.append(breaker);
   header.append(item);
   }
   else{
     header.after(breaker);
     header.after(item);
   }
   item.id = n;
   ultrabutton = item;
   breaker.id = n + "1";
   item.addEventListener ("click", function() {
   for (var i = 0; i < listItems.length; i++) {
    if(listItems[i].getName() == n){
      curItem = listItems[i].getName();
    }
    //Do something
  }
  //curItem = n;
  completeness = false;
  ultrabutton = item;
  document.getElementById("cool").style.display = "block";
});
   }
   console.log("why");
   
  
};
