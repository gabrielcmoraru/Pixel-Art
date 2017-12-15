
// Get range value for size input so it can be dispalyed in real time
function showHeight(newValue)
	{
	document.getElementById('heightValue').innerHTML=newValue;
	}

function showWidth(newValue)
	{
	document.getElementById('widthValue').innerHTML=newValue;
	}


//Grid Maker
function makeGrid() {

	//Gets height and width
	const tr = $('#input_height').val();
	const td = $('#input_width').val();

	//Gets the table
	const canvas = $('#pixel_canvas');

	//Resets canvas
	canvas.children().remove();

	//Creates table tr and td
	for (var x = 0; x < tr; x++) {
	 canvas.append("<tr></tr>");
	for (var y = 0; y < td; y++) {
		canvas.children().last().append("<td></td>");
	}
	}

//Adds the selected color on the table per mouse click
canvas.on('mousedown', 'td', function(event) {
	event.preventDefault();
	const colorGenerator = $('.jscolor').css('background-color');
	$(this).css('background-color', colorGenerator);
});

//Swaps the mouse cursor for a pointer when mouse is over Canvas
canvas.on('mouseover', 'td', function(event) {
	event.preventDefault();
	const colorGenerator = $('.jscolor').css('background-color');
	$(this).css('cursor', 'pointer');
});

//Adds the selected color while holding down left mouse button
}

//Event listener for changes on the range value
//and creates the grid according to changes
$("input[type='range']").change(function(event) {
	event.preventDefault(); //Anti-refresh,
	makeGrid();
});



