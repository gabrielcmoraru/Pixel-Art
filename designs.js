// Created by Gabriel Moraru
// Email: gabrielcmoraru@gmail.com


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


//Grid
// --------------------------------------------------
function makeGrid() {

	//Gets height and width
	const trow = $('#input_height').val();
	const tcell = $('#input_width').val();

	//Resets canvas
	$('#pixel_canvas').children().remove();

	//Creates table tr and td
	for (var x = 0; x < trow; x++) {
	 $('#pixel_canvas').append("<tr></tr>");
		for (var y = 0; y < tcell; y++) {
			$('#pixel_canvas').children().last().append("<td></td>");
		}
	}

//Adds the selected color on the whole table row
$('#pixel_canvas').on('dblclick', 'tr', function(event) {
	event.preventDefault();
		const colorGenerator = $('#colorSelector').css('background-color');
	$(this).css('background-color', colorGenerator);
});

//Swaps the mouse cursor for a pointer when mouse is over Canvas
$('#pixel_canvas').mouseover(function(event) {
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

//Adds the selected color on the selected table cells
//while holding down first click
$('td').mousemove(function(paint) {
	if (paint.which === 1) {
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

//Adds the color white(erases colors) on selected cell
//while holding down second click
$('td').mousemove(function(paint) {
	if (paint.which === 3) {
	event.preventDefault();
	const colorGenerator = $('#colorSelector').css('background-color');
		$(this).css('background-color', '#FFFFFF');
	}
});

//Removes a whole line(tr) from the table
$('tr').mousedown(function(middleClk) {
	if(middleClk.which === 2){
	event.preventDefault();
	const colorGenerator = $('#colorSelector').css('background-color');
		$(this).remove();
	}
});
}

//Update the Grid Size when change is detected
//Clears all cells
$("#sizePicker").change(function(event) {
	event.preventDefault();
	makeGrid();
});

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

//Update the canvas opacity
$('#canvas_opacity').on('change', function(event){
	event.preventDefault();
	const opacityCanvas = $('#canvas_opacity').val();
		$('#pixel_canvas').css('opacity', opacityCanvas);
});

//Update the canvas border sieze
$('#canvas_border_size').on('change', function(event){
	event.preventDefault();
	const borderSize = $('#canvas_border_size').val();
		$('#pixel_canvas').css('border-width', borderSize);
});

//Remove the canvas inner lines
$('#canvas_remove_lines').click(function(event) {
	event.preventDefault();
	const buttonPressed = $(this);
	$(this).toggleClass('off');
	 if (buttonPressed.is('.off')){
			$('#pixel_canvas td, tr').css('border', '0px');
		} else{
			$('#pixel_canvas td, tr').css('border', '1px solid black');
	 }
});

//Add shadow left to canvas
$('#canvas_shadow_left').click(function(event) {
	$('#pixel_canvas').css({
				'-webkit-box-shadow': '-24px -18px 15px 0px rgba(0,0,0,0.61)',
				'-moz-box-shadow': '-24px -18px 15px 0px rgba(0,0,0,0.61)',
				'box-shadow': '-24px -18px 15px 0px rgba(0,0,0,0.61)'
			});
});

//Add shadow right to canvas
$('#canvas_shadow_right').click(function(event) {
	$('#pixel_canvas').css({
				'-webkit-box-shadow': '24px -18px 15px 0px rgba(0,0,0,0.61)',
				'-moz-box-shadow': '24px -18px 15px 0px rgba(0,0,0,0.61)',
				'box-shadow': '24px -18px 15px 0px rgba(0,0,0,0.61)'
			});
});

//Extra
// ----------------------------------------------------

//Save canvas to HTML(BETA VERSION..)
$("#save_to_html").click( function(save) {
	var picToFrame = $("#pixel_canvas").prop('outerHTML');
	var filename = $("#input-fileName").val();
	var blob = new Blob([picToFrame], {type: "charset=utf-8"});
	saveAs(blob, filename+".html");
});

//Revert to a basic theme (aka Grinch Edition)
$('.grinch_edition').click(function(grinch) {
	$('body').css('background-image', 'url()');
	$('h1').css({
		'color': '#99B2B7',
		'font-family': 'Lobster'
	});
	$('h2').css({
		'color': '#99B2B7',
		'font-family': 'Lobster'
	});
	$('h2').html('Not very Christmassy now...is it?');
	$('.vertical-menu-left a').css('background-color', '#6D9DA6');
	$('.vertical-menu-left a.title').css('background-color', '#746767');
	$('.vertical-menu-right a').css('background-color', '#6D9DA6');
	$('.vertical-menu-right a.title').css('background-color', '#746767');
	$('.vertical-menu-right').children('a').last().remove();
});





