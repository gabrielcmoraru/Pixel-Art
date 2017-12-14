// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//-----------------------------------------------------//

// Get range value for size input so it can be dispalyed in real time
function showHeight(newValue)
	{
	document.getElementById('heightValue').innerHTML=newValue;
	}

function showWidth(newValue)
	{
	document.getElementById('widthValue').innerHTML=newValue;
	}

function makeGrid() {

	//Gets height and width
	const tr = $('#input_height').val();
	const td = $('#input_width').val();

	//Gets the table
	const canvas = $('#pixel_canvas');

	//Resets canvas
	canvas.children().remove();

	//Creates table tr and td
	for (var i = 0; i < tr; i++) {
	canvas.append("<tr></tr>");
	for (var j = 0; j < td; j++) {
	  canvas.children().last().append("<td></td>");
	}
	}
}
	//Event listener for changes on the range value
	//and create the grid according to changes
$("input[type='range']").change(function(event) {
	event.preventDefault(); //Required to avoid submit and page reload
	makeGrid();
});
