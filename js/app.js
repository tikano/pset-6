class listObject{
    thisdate = "";
    constructor(mdate){
      thisdate = mdate;
    }

    getDate(){
        return date;
    }

}

var points = 0;
var curItem = "";
var completeness = false;
var ultrabutton;
var today = new Date();
var supe = false;
var dat = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
window.onload = function(){
var x = document.getElementById("cool");
var y = document.getElementById("point");
y.style.display = "none";
x.style.display = "none";
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
    construct(name, priority);
}
document.getElementById("remove").onclick = function() {
    console.log("hello");
    var button = document.getElementById(curItem);
    button.remove();
    var br = document.getElementById(curItem + "1");
    br.remove();
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
    construct(curItem, "high");
    x.style.display = "none";
}
document.getElementById("deprior").onclick = function() {
    var button = document.getElementById(curItem);
    button.remove();
    var br = document.getElementById(curItem + "1");
    br.remove();
    construct(curItem, "low");
    x.style.display = "none";
}
document.getElementById("super").onclick = function(){
  supe = true;
}
}

//var listItems = [new listObject("high", "low")];

const construct = function(n, p) {
   console.log("hola");
   const header = document.getElementById("h3");
   //listObject [{n}] = new listObject(d);
   //listItems.push(new listObject(n, p));
   if(n != ""){
   const item = document.createElement("button");
   item.innerHTML = n;
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
  curItem = n;
  if(supe == true && dat == [{curItem}].getDate()){
    var button = document.getElementById(curItem);
    button.remove();
    var br = document.getElementById(curItem + "1");
    br.remove();
    x.style.display = "none";
    points = points - 1;
  }
  completeness = false;
  ultrabutton = item;
  document.getElementById("cool").style.display = "block";
});
   }
   console.log("why");
   
  
};

/*const remove = function(n) {
   for (i = 0; i < listItems.length; i++) {
        if((listItems[i].getName()).equals(n)){
            listItems.splice(i);
        }  
   }  
  
};
*/
