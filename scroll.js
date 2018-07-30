$(document).ready(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('path.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);
	
  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
    win_height_padded = $window.height() * 1.1;

    //1st industry
    $("g._num2_scroll:not(.animated)").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
         if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ');
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated fadeInRight');
        } 
        
      }
    });
	//2nd industry
	
	$("g._num1_scroll:not(.animated)").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
         if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ');
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated fadeInRight');
        } 
        
      }
    });
	
	//1st component
	
	$("g._comp_scroll:not(.animated)").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
         if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ');
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated jello');
        } 
        
      }
    });
	
	// footer scroll
	$("path._foot_scroll:not(.animated)").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
         if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ');
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated bounce');
        } 
        
      }
    });
	
	
	
    //1st industry hidden
   $("g._num2_scroll.animated").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;
	  
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInRight')
      }
    });
	
	//2nd industry hidden
	
	$("g._num1_scroll.animated").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;
	  
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInRight')
      }
    });
	
	//1st component hidden
	
	$("g._comp_scroll.animated").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;
	  
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated jello')
      }
    });
	
	//footer scroll hidden
	$("path._foot_scroll.animated").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;
	  
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated bounce')
      }
    });
	
  }

  revealOnScroll();
});