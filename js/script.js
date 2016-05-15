
/**
there are two lists that drive this. The list of names and
the list of images. Hopefully they are one-to-one!
**/
var cats = ['Puss', 'Boots', 'Max', 'Chloe','Tiger'];
// this will store the clicks associated with each cat above
var clicks = [];

/**initialize the application to show the first cat**/
var currentCat = 0;

/** generate the list of cats from the names, appearing on the left side */
$("#cat-list").append('<ul style="list-style: none"  id="cats">');
for (var index = 0; index < cats.length; index++) {
    clicks.push(0);
    $('#cats').append('<li id="cat-name'+index + '"class="name">' +
    	cats[index] + '</li>');
}

/** now that we have the list initialize the image from it **/
$('#image').html('<div><span>' + cats[currentCat] + '</span>: <span id="clicks">' + clicks[currentCat] + '</span></div>' +
  	'<img src="img/cat' + currentCat + '.jpg" height=400>');

/** because we are generating html, we need to use 'on("click")'' instead of 'click'
    see http://stackoverflow.com/questions/6658752/click-event-doesnt-work-on-dynamically-generated-elements
**/
$('#cat-list').on("click", "ul li", function() {
  var id = $(this).attr('id');
  var idval = id.slice(8); // need to start from 8th element because form of id is 'cat-namex' where x is a one up number
  var idnum = parseInt(idval);
   $('#image').html('<div><span>' + cats[idnum] + '</span>: 	<span id="clicks">' + clicks[idnum] + '</span></div>' +
  	'<img src="img/cat' + idnum + '.jpg" height=400>');
   currentCat = idnum;
});

// when clicking on image div update the click count
$('#image').click(function(){
	clicks[currentCat] += 1;
	$('#clicks').text(clicks[currentCat]);
})
