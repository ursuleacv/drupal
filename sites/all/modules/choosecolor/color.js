
$('#edit-color').change(function() {
  var color = $('#edit-color').val();
  //$('body').css('color', color);
   var $basepath = Drupal.settings.basePath+ 'sites/all/modules/choosecolor/red.css';
   //alert($basepat);
	//$('link[href="/themes/garland/style.css?B"]').attr('href',$basepath);
  
  $("link").attr("href", $basepath);
    $('link[rel=stylesheet][href~="pixture"]').remove();
    return false;

});




