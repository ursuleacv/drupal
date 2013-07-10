
$('#edit-color').change(function() {
  var color = $('#edit-color').val();
  //$('body').css('color', color);
   var $basepath = Drupal.settings.basePath+ 'sites/all/modules/choosecolor/red.css';
  	$("#content-area").css("color",color);

  	$.cookie('color', color);
});

$(document).ready(function() {
//$(window).load(function() {
 var color = $.cookie('color');
if (color) {
	$("#content-area").css("color",color);
}
});





