var parent = document.getElementsByClassName("window");
for (var i = 0; i < parent.length; i++) {
	var link = parent[i].getElementsByClassName("link";
	var door = parent[i].getElementsByClassName("door");
	link[0].onmouseenter = function() {
		fadeInEffect(door);
		// door.style.display = "hidden";
	};
}

//https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript
function fadeOutEffect(fadeTarget) {
    var fadeEffect = setInterval(function () {
        if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.opacity += 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
}