document.getElementById("submit_btn").onclick = function(){
    let temp;
    temp = document.getElementById("text_input").value;
    temp = Number(temp);
    if(document.getElementById("cbtn").checked){
        temp = tocel(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C";
    }else if(document.getElementById("fbtn").checked){
        temp = tofar(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }else{
    document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}
function tocel(temp){
    return (temp - 32)*(5/9);
}
function tofar(temp){
    return temp*(5/9) + 32;
}