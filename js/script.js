
var cats = ['Puss', 'Boots', 'Max', 'Chloe','Tiger'];
var clicks = [];
var currentCat = 0;

$("#cat-list").append('<ul style="list-style: none"  id="cats">');
for (var index = 0; index < cats.length; index++) {
    clicks.push(0);
    $('#cats').append('<li id="cat-name'+index + '"class="name">' +
    	cats[index] + '</li>');
}
$('#image').html('<div><span>' + cats[0] + '</span>: <span id="clicks">' + clicks[0] + '</span></div>' +
  	'<img src="img/cat' + 0 + '.jpg" height=400>');

$('#cat-list').on("click", "ul li", function() {
  var id = $(this).attr('id');
  var idval = id.slice(8);
  var idnum = parseInt(idval);
   $('#image').html('<div><span>' + cats[idnum] + '</span>: 	<span id="clicks">' + clicks[idnum] + '</span></div>' +
  	'<img src="img/cat' + idnum + '.jpg" height=400>');
   currentCat = idnum;
});

$('#image').click(function(){
	clicks[currentCat] += 1;
	$('#clicks').text(clicks[currentCat]);
})
