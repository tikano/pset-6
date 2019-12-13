window.onload = function() {

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
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
