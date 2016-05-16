
/**
there are two lists that drive this. The list of names and
the list of images. Hopefully they are one-to-one!
**/
var model = {
  cats : ['Puss', 'Boots', 'Max', 'Chloe','Tiger'],
  // this will store the clicks associated with each cat above
  clicks : [],
  /**initialize the application to show the first cat**/
  currentCat : 0,

  getCats: function(){
    return cats;
  },

  getClicks: function(cat){
    var index = cat.indexOf(cat);
    if(index != -1){
      return model.clicks[index];
    } else {
      return -1;
    }
  }
}

var catListView = {
/** generate the list of cats from the names, appearing on the left side */
init: function (){
  $("#cat-list").append('<ul style="list-style: none"  id="cats">');
  controller.initializeList();

  },
  render: function(){
  }
}


var catImageView = {
/** generate the list of cats from the names, appearing on the left side */
init: function (){
  /** now that we have the list initialize the image from it **/
  $('#image').html('<div><span>' + model.cats[model.currentCat] + '</span>: <span id="clicks">' + model.clicks[model. currentCat] + '</span></div>' +
      '<img src="img/cat' + model.currentCat + '.jpg" height=400>');

  },
  render: function(){
    controller.update_image();
    controller.update_clicks();
  }
}
var adminFormView = {
  init: function(){
    for (var i= 0; i <model.cats.length; i++){
      $("#dropdown-menu").append('<li><a tabindex="-1" href="#">' + model.cats[i] + '</a></li>');
    }
    $("#admin").click(function(){
      $("#adminform").toggle();
    });
    $("#admin-submit").click(function(){
      alert("update " + $(".btn:first-child").val() + " to " + $("#admin-clicks").val());
    });
    $(".dropdown-menu").on('click', 'li a', function(){
          $(".btn:first-child").text($(this).text());
          $(".btn:first-child").val($(this).text());
          var clickVal = controller.getClicks($(this).text())
          $("#admin-clicks").val(clickVal);
       });
    $(".dropdown-menu li a")[1].click();
    }
}
var controller = {
  /** initialize the model and view
  clicks get set to 0, view gets set to the first cat image **/
  init: function(){
    model.currentCat = 0;
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

    catListView.init();
    catImageView.init();
    adminFormView.init();
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
  },
  getCats: function(){
    return model.getCats();
  },

  getClicks: function(cat){
    var clicks =  model.getClicks(cat);
    return clicks;
  }

};
controller.init();

