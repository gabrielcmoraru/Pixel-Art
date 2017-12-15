
// Get range value for size input so it can be dispalyed in real time
function showHeight(newValue)
	{
	document.getElementById('heightValue').innerHTML=newValue;
	}

function showWidth(newValue)
	{
	document.getElementById('widthValue').innerHTML=newValue;
	}

function showOpacity(newValue)
	{
	document.getElementById('opacityValue').innerHTML=newValue;
	}

function showSize(newValue)
	{
	document.getElementById('borderSizeValue').innerHTML=newValue;
	}


//Grid Maker
// --------------------------------------------------
function makeGrid() {

	//Gets height and width
	const trow = $('#input_height').val();
	const tcell = $('#input_width').val();

	//Gets the table
	const canvas = $('#pixel_canvas');

	//Resets canvas
	canvas.children().remove();

	//Creates table tr and td
	for (var x = 0; x < trow; x++) {
	 canvas.append("<tr></tr>");
		for (var y = 0; y < tcell; y++) {
			canvas.children().last().append("<td></td>");
		}
	}

//Adds the selected color on the whole table row
canvas.on('dblclick', 'tr', function(event) {
	event.preventDefault();
		const colorGenerator = $('#colorSelector').css('background-color');
	$(this).css('background-color', colorGenerator);
});

//Adds the selected color on the whole table
//except the one that the user has selected individualy
canvas.mousedown(function(middleClk) {
	if(middleClk.which === 2){
	event.preventDefault();
	const colorGenerator = $('#colorSelector').css('background-color');
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
	const colorGenerator = $('#colorSelector').css('background-color');
		$(this).css('background-color', colorGenerator);
	}
});

//Adds the color white(erases colors) on selected cell
$('td').mousedown(function(secondClk) {
	if(secondClk.which === 3){
	event.preventDefault();
	const colorGenerator = $('#colorSelector').css('background-color');
		$(this).css('background-color', '#FFFFFF');
	}
});

//Adds the selected color on the selected table cells
//while holding down first click
$('td').mousemove(function(paint) {
	if (paint.which === 1) {
	event.preventDefault();
	const colorGenerator = $('#colorSelector').css('background-color');
		$(this).css('background-color', colorGenerator);
	}
});

}

// Canvas beautify
// ----------------------------------------------------

//Update the canvas border color
$('#canvas_border_color').on('change', function(event) {
	const borderColor = $("option:selected", $(this));
	const borderColorValue = '#' +this.value;
	 $('#pixel_canvas').css('border-color', borderColorValue);
});

//Update the canvas inner color
$('#canvas_inner_color').on('change', function(event) {
	const innerColor = $("option:selected", $(this));
	const innerColorValue = '#' +this.value;
	 $('#pixel_canvas').css('background-color', innerColorValue);
});

//
$('#canvas_opacity').on('change', function(event){
	event.preventDefault();
	const opacityCanvas = $('#canvas_opacity').val();
		$('#pixel_canvas').css('opacity', opacityCanvas);
});

//
$('#canvas_border_size').on('change', function(event){
	event.preventDefault();
	const borderSize = $('#canvas_border_size').val();
		$('#pixel_canvas').css('border-width', borderSize);
});

//WORK IN PROGRESS---UNFINISHED (doesn't add the borders back....YET !)
$('#canvas_remove_lines').click(function(event) {
	event.preventDefault();
	const z = $('#pixel_canvas td, tr, border').val();
	 if (z===0){
	 		$('#pixel_canvas td, tr').css('border', '1px solid black');
	 } else{
	 		$('#pixel_canvas td, tr').css('border', '0px');
	 };

});


//Update the Grid Size when change is detected
//Clears all cells
$("#sizePicker").change(function(event) {
	event.preventDefault();
	makeGrid();
});



