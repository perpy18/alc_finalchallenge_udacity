
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$("input[type='submit']").on("click", function(event) {
	event.preventDefault();  //this prevents the page from automatically reloading after "submit"
makeGrid();
});
function clearTable() {$("tr").remove();   //totally clears any pre-existing grid

}

function makeGrid() {
clearTable();
	
let rows = $("#input_height").val(); //since Grid height equals number of rows
let columns = $("#input_width").val();  //and Grid width equals number of columns
 


//set grid size by entering preferred values for grid height and width
for(let r  = 0; r < rows; r++) {
	$("#pixel_canvas").append($("<tr></tr>"));
	for (let c = 0; c < columns; c++) {
		$("tr:last").append($("<td></td>"));
	}
}
//To select cells and apply color to them
$("td").on("click", function() {
	var fillColour = $("#colorPicker").val();
	//the use of "this" causes the action to be fired on selected cells only
	//selecting an already-styled cell brings about removal of the style(in this cas, colour); this acts as an erase function to the user
	if ($(this).attr("style")) {
		$(this).removeAttr("style")}
		else {$(this).attr("style", "background-color: " + fillColour)}
});
}




//}


