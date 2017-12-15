
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

//Adds the selected color on the whole table row
canvas.on('dblclick', 'tr', function(event) {
	event.preventDefault();
		const colorGenerator = $('.jscolor').css('background-color');
	$(this).css('background-color', colorGenerator);
});

//Adds the selected color on the whole table
//except the one that the user has selected individualy
canvas.mousedown(function(middleClk) {
	if(middleClk.which === 2){
	event.preventDefault();
	const colorGenerator = $('.jscolor').css('background-color');
		$(this).css('background-color', colorGenerator);
	}
});

//Swaps the mouse cursor for a pointer when mouse is over Canvas
canvas.mouseover(function(event) {
	$(this).css('cursor', 'pointer');
});

//Adds the selected color on the selected table cell
$('td').mousedown(function(firstClk) {
	if(firstClk.which === 1){
	event.preventDefault();
	const colorGenerator = $('.jscolor').css('background-color');
		$(this).css('background-color', colorGenerator);
	}
});

//Adds the color white(erases colors) on selected cell
$('td').mousedown(function(secondClk) {
	if(secondClk.which === 3){
	event.preventDefault();
	const colorGenerator = $('.jscolor').css('background-color');
		$(this).css('background-color', '#FFFFFF');
	}
});

//Adds the selected color on the selected table cells
//while holding down first click
$('td').mousemove(function(paint) {
	if (paint.which === 1) {
	event.preventDefault();
	const colorGenerator = $('.jscolor').css('background-color');
		$(this).css('background-color', colorGenerator);
	}
});

}

//Event listener for changes on the range value
//and creates the grid according to changes
$("input[type='range']").change(function(event) {
	event.preventDefault(); //Cancels the default action of the input
	makeGrid();
});



