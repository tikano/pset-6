var listItems = [new listObject("high", "low")];

window.onload = function() {

    var name = document.getElementById("name").value;
    var priority = document.getElementById("priority").value;
    document.getElementById("input").onclick = construct(name, priority);
    document.getElementById("remove").onclick = remove;
}

class listObject{
    var name = "";
    var priority = "low";
    var complete = false;
    constructor(mname, mpriority){
      name = mname;
      priority = mpriority;
    }

    getStatus(){
        return complete;
    }

    getPriority(){
        return priority;
    }

    getName(){
        return name;
    }

    markComplete(){
        complete = true;
    }

    markInComplete(){
        complete = false;
        
    }

}

const construct = function(n, p) {
   const header = document.getElementById("h3");
   listItems.push(new listObject(n, p));
   const newParagraph = document.createElement("p");
   newParagraph.innerHTML = n;
   header.append(newParagraph);
   console.log("why");
   
  
};

const remove = function(n) {
   for (i = 0; i < listItems.length; i++) {
        if((listItems[i].getName()).equals(n)){
            listItems.splice(i);
        }  
   }  
  
};
  
};
