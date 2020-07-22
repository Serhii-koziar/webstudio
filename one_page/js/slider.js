
$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.menu_wrap').toggleClass('active');
	});
});

$(document).ready(function(){
  $('.slider').slick({
  	arrows:false
  });
});