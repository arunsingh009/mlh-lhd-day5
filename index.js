function generate(){
    var upper = +document.getElementById("i1").value;
    var lower = +document.getElementById("i2").value;
    var out = document.getElementById("Output");

    var x;
    x = Math.floor(Math.random() *(upper-lower+1))+lower;
    out.innerHTML=x;
}