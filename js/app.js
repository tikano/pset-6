var listItems = [new listObject("high", "low")];

window.onload = function() {

    var name = document.getElementById("name").value;
    var priority = document.getElementById("priority").value;
    document.getElementById("input").onclick = construct(name, priority);
    document.getElementById("remove").onclick = remove;
    writeItems()
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
   listItems.push(new listObject(n, p));
  
};

const remove = function(n) {
   for (i = 0; i < listItems.length; i++) {
        if((listItems[i].getName()).equals(n)){
            listItems.splice(i);
        }  
   }  
  
};

const writeItems = function() {
   const canvas = document.getElementById('student-canvas-1');
   const ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.font = "48px sans-serif";
   for (i = 0; i < listItems.length; i++) {
   ctx.strokeText(listItems[i].getName(), 30, 70, 994);
   }  
  
};
