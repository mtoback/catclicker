
/**
there are two lists that drive this. The list of names and
the list of images. Hopefully they are one-to-one!
**/
var model = {
  cats : ['Puss', 'Boots', 'Max', 'Chloe','Tiger'],
  // this will store the clicks associated with each cat above
  clicks : [],
  /**initialize the application to show the first cat**/
  currentCat : 0
}

var view = {
/** generate the list of cats from the names, appearing on the left side */
init: function (){
  $("#cat-list").append('<ul style="list-style: none"  id="cats">');
  controller.initializeList();
  /** now that we have the list initialize the image from it **/
  $('#image').html('<div><span>' + model.cats[model.currentCat] + '</span>: <span id="clicks">' + model.clicks[model. currentCat] + '</span></div>' +
    	'<img src="img/cat' + model.currentCat + '.jpg" height=400>');

  },
  render: function(){
    controller.update_image();
    controller.update_clicks()
  }
}

var controller = {
  init: function(){
    for (var index = 0; index < model.cats.length; index++) {
      model.clicks.push(0);
    }
    /** because we are generating html, we need to use 'on("click")'' instead of 'click'
        see http://stackoverflow.com/questions/6658752/click-event-doesnt-work-on-dynamically-generated-elements
    **/
    $('#cat-list').on("click", "ul li", function() {
      var id = $(this).attr('id');
      var idval = id.slice(8); // need to start from 8th element because form of id is 'cat-namex' where x is a one up number
      var idnum = parseInt(idval);
      model.currentCat = idnum;
      controller.update_image();
    });

    // when clicking on image div update the click count
    $('#image').click(function(){
      model.clicks[model.currentCat] += 1;
      controller.update_clicks();
    });
    view.init();
  },
  initializeList: function(){
  for (var index = 0; index < model.cats.length; index++) {
    $('#cats').append('<li id="cat-name'+index + '"class="name">' +
    model.cats[index] + '</li>');
   }
  },
  update_image: function(){
     $('#image').html('<div><span>' + model.cats[model.currentCat] + '</span>:   <span id="clicks">' + model.clicks[model.currentCat] + '</span></div>' +
      '<img src="img/cat' + model.currentCat + '.jpg" height=400>');
  },
  update_clicks: function(currentCat,clicks){
    $('#clicks').text(model.clicks[model.currentCat]);
  }
};
controller.init();

