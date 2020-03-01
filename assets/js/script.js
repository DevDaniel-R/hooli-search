$(document).ready(function() {
 
  $(".result").on("click", function() {
  
  var url = $(this).attr("href");
  var id = $(this).attr("data-linkId");
 
  if(!id) {
    alert("data-linkId att not foud");
  }

  increaseLinkClicks(id, url);

  return false;
});

var grid = $(".imageResults");

grid.masonry({
    itemSelector: ".gridItem",
    columnWidth: 200,
    gutter: 5,
    isInitLayout: false
});

});

function loadImage(src, className) {
  
  var image = $("<img>");

  image.on("load", function() {
    $("." + className + " a").append(image);
  });

  image.on("error", function() {

  });

  image.attr("src", src);

}

function increaseLinkClicks(linkId,url) {

  $.post("ajax/updateLinkCount.php", {linkId: linkId})
  .done(function() {
    if(result != "") {
      alert(result);
      return;
    }

    window.location.href = url;
  });

}