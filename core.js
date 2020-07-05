jQuery(document).ready(function($) {

  $('#club1img').click(function(){
    $('#club1').css('display', 'block');
	  $('#club2').css('display', 'none');
		$('#club3').css('display', 'none');
	});

	$('#club2img').click(function(){
	  $('#club1').css('display', 'none');
    $('#club2').css('display', 'block');
		$('#club3').css('display', 'none');
	});

  $('#club3img').click(function(){
	  $('#club1').css('display', 'none');
		$('#club2').css('display', 'none');
    $('#club3').css('display', 'block');
	});

  //Ссылки
  $('.openclub1').click(function(){
    $('#club1').css('display', 'block');
	  $('#club2').css('display', 'none');
		$('#club3').css('display', 'none');
  });

  $('.openclub2').click(function(){
    $('#club1').css('display', 'none');
    $('#club2').css('display', 'block');
		$('#club3').css('display', 'none');
	});

  $('.openclub3').click(function(){
	  $('#club1').css('display', 'none');
		$('#club2').css('display', 'none');
    $('#club3').css('display', 'block');
	});

  $('.openclub4').click(function(){
	  $('#club1').css('display', 'none');
		$('#club2').css('display', 'none');
    $('#club3').css('display', 'block');
	});

  //Переключатель городов
  $('.sa_slide_link_icon').click(function(){
    if ($(this).attr('href') == "#map") {
      $('#mapmod1').css('display', 'block');
  	  $('#mapmod2').css('display', 'none');
      $('#mapmod3').css('display', 'none');
      $('#mapmod4').css('display', 'none');
      $('#top-map-text h2').text('МЕСТА ПОЛЕТОВ В МОСКВЕ И МОСКОВСКОЙ ОБЛАСТИ');
    };
    if ($(this).attr('href') == "#mapkrim") {
      $('#mapmod1').css('display', 'none');
      $('#mapmod2').css('display', 'block');
      $('#mapmod3').css('display', 'none');
      $('#mapmod4').css('display', 'none');
      $('#top-map-text h2').text('МЕСТА ПОЛЕТОВ В КРЫМУ');
    };
    if ($(this).attr('href') == "#mapkaluga") {
      $('#mapmod1').css('display', 'none');
      $('#mapmod2').css('display', 'none');
      $('#mapmod3').css('display', 'block');
      $('#mapmod4').css('display', 'none');
      $('#top-map-text h2').text('МЕСТА ПОЛЕТОВ В КАЛУГЕ');
    };
    if ($(this).attr('href') == "#mapkursk") {
      $('#mapmod1').css('display', 'none');
      $('#mapmod2').css('display', 'none');
      $('#mapmod3').css('display', 'none');
      $('#mapmod4').css('display', 'block');
      $('#top-map-text h2').text('МЕСТА ПОЛЕТОВ В КУРСКЕ');
    };

  });

});

function goToClub(city) {
  var myNodeList = document.querySelectorAll('.club-block');
  document.location.href = "#club1";
  for (var count = myNodeList.length; count > 0; count--) {
         myNodeList[count-1].style.display = 'none';
       }
  myNodeList[city].style.display = 'block';
}
