var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//close button functionality.
//This is based on Dataflair's tutorial found on https://data-flair.training/blogs/javascript-project-to-do-list/
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    remove.style.display = "none";
  }
}

//This function allows us to add a new task to the list.
//This is based on Dataflair's tutorial found on https://data-flair.training/blogs/javascript-project-to-do-list/
function addTask(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("todoinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue == '') {
      alert("Please type a task");
    } else {
      document.getElementById("list").appendChild(li);
    }

    document.getElementById("todoinput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var remove = this.parentElement;
        remove.style.display = "none";
      }
    }
}
