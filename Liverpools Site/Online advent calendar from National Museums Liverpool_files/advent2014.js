var getImage = function (src) {
    var img = new Image();
    img.src = src;
    return img;
};

var images = [];

images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim01.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim02.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim03.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim04.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim08.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim09.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim10.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim11.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim12.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim13.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim14.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim15.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim16.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim17.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim18.gif"));
images.push(getImage("/christmas/advent/graphics/anim-frames/door_anim20.gif"));

var doorIndex;
var targetDoor;
var delay = 100;
var thumbSrc;

function animateDoors(sender) {
    thumbElement = $(sender).siblings('.thumb');
	thumbSrc = $(thumbElement).attr('src');	
	targetDoor = thumbElement;
	$(thumbElement).attr('src', images[0].src);
	$(thumbElement).removeClass("hidden");
	
	doorIndex = 0;	
	setTimeout(slide, delay);
}

function slide() {
	img = images[doorIndex];
	src = img.src;
	$(targetDoor).attr('src', src);
	
	doorIndex ++;
	
	if (doorIndex < images.length) {
		setTimeout(slide, delay);
	}
	else
	{
		$(targetDoor).attr('src', thumbSrc);
	}
}

$(document).ready(function () {

    $('.unavailable').click(function () {
        $("#wait-alert").show().delay(3000).fadeOut();
    });

    $('.link').click(function (e) {

        // Check for closed class
        if ($(this).hasClass("closed")) {
            $(this).removeClass("closed");
			animateDoors(this);
            $("#wait-alert").hide();
            e.preventDefault();
        }

    });

});


