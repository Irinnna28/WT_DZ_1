
var button = document.getElementById('btn');
var body = document.getElementsByTagName('body');
var foot = document.getElementById('foot_id');
var head = document.getElementById('head_id');
var a = 0;

button.onclick = function () {
    if (a == 0) {
        body[0].style.background = "lightblue";
        foot.style.background = "orange";
        head.style.background = "orange";
        a = 1;
    }
    else if (a == 1) {
        body[0].style.background = "aquamarine";
        foot.style.background = "hotpink";
        head.style.background = "hotpink";
        a = 0;
    }
}
