function myFunction() {
    var bird = document.getElementById("bird");
    var id = setInterval(fly(), 20);
    var pos = 0;
    function fly() {
        if (pos == 0) {
            bird.style.top = pos + "px";
            bird.style.left = pos + "px";
        }
    }
}