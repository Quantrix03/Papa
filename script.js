
function sub(){
  if(document.getElementById("fname").value == "Whiskylove"){
    location.href = "geschafft.html"
  }
}
var bool = 0
function spy(){
  var act = 0
  if(bool == 0){
    document.getElementById("mark1").style.color = "red"
    document.getElementById("mark2").style.color = "red"
    document.getElementById("mark3").style.color = "red"
    document.getElementById("mark4").style.color = "red"
    document.getElementById("mark5").style.color = "red"
    document.getElementById("mark6").style.color = "red"
    document.getElementById("mark7").style.color = "red"
    document.getElementById("mark8").style.color = "red"
    document.getElementById("mark9").style.color = "red"
    document.getElementById("mark0").style.color = "red"
    bool = 1
    act = 1
  }
  if(bool == 1 && act == 0){
    document.getElementById("mark1").style.color = "aquamarine"
    document.getElementById("mark2").style.color = "aquamarine"
    document.getElementById("mark3").style.color = "aquamarine"
    document.getElementById("mark4").style.color = "aquamarine"
    document.getElementById("mark5").style.color = "aquamarine"
    document.getElementById("mark6").style.color = "aquamarine"
    document.getElementById("mark7").style.color = "aquamarine"
    document.getElementById("mark8").style.color = "aquamarine"
    document.getElementById("mark9").style.color = "aquamarine"
    document.getElementById("mark0").style.color = "aquamarine"
    bool = 0
  }

}