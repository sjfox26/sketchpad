//create 16x16 grid of divs inside container
    //with float/clear ... using a table/inline-block displays

/*
function draw() {
    $(this).css("background-color", "black");    
}

*/
function drawBlack() {
    $('.block').on('mouseenter', function () {
       $(this).css("background-color", "black"); 
    });
}

function drawColored() {
		$('.block').on('mouseenter', function() {
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);
			$(this).css("background-color", "rgb(" + r + "," + g + "," + b + ")");
		});
	}

function eraseBlock() {
    $('.block').on('mouseenter', function () {
       $(this).css("background-color", "white"); 
    });
}

/*	
function drawGrid () {
    for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            var unit = $('<div class="block"></div>');
            unit.appendTo('#container');
        }
    }
}
*/

function drawGrid(){
	for (var i = 0; i < gridSize * gridSize; i++) {
		$("#container").append('<div class="block"></div>')
	}
	$(".block").css({
		'width': $('#container').width() / gridSize,
		'height': $('#container').height() / gridSize
	})
}

$(document).ready(function() {
    
    
    gridSize = 16;
    
    drawGrid();
    
    //draws on hover
    //$("#wrapper").on('mouseenter', '.block', drawColored
    
    //default
    drawBlack();
   
    $('.rainbow').on('click', function() {
    	drawColored();
    });
    
    $('.black').on('click', function() {
    	drawBlack();
    });
    
    $('.erase').on('click', function() {
    	eraseBlock();
    });
    
    
    //add clear button
    $('.clear').on('click', function() {
    	$('.block').css("background-color", "rgb(255, 255, 255)");
    });
	   
   
    /*
    $('.rainbow').on('click', function(){
    $(this).data('clicked', true);
    alert(console.log($(this).data('clicked')));
    });
    
    
    if ($(this).data("clicked") === 'true'){
        $("#wrapper").on('mouseenter', '.block', drawColored);
    }
    else {
        $("#wrapper").on('mouseenter', '.block', draw);
    }
    */
    
    
  
    
    
    
    //changes color on hover...REFACTORED
    //$("#frame").on('mouseenter', '.block', function(){
    //$(this).css("background-color", "black");
    //});
    
	
	
	
    
    
});





//set up hover effect to color divs

//add clear button
    //initiate popup message
    

//keep calls to jquery selectors outside of loops