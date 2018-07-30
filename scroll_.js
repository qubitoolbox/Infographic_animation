//This plugin is in charge of activating animation when scrolling to view
$(document).ready(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('path.cls-18_').addClass('animated'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
    win_height_padded = $window.height() * 1.1;

    //1st component
    $("path.cls-18_:not(.animated)").each(function () {
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
	//1st component
	$("path.cls-18_.animated").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;
	  
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated jello')
      }
    });
	
	//2nd component
	$("path.cls-18_1:not(.animated)").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
         if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ');
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated rotateInDownRight');
        } 
        
      }
    });
	//2nd component
	$("path.cls-18_1.animated").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;
	  
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated rotateInDownRight')
      }
    });
	
	//3rd component
	$("path.cls-18_2:not(.animated)").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
         if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ');
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated rotateInDownRight');
        } 
        
      }
    });
	//3rd component
	$("path.cls-18_2.animated").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;
	  
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated rotateInDownRight')
      }
    });
	
	//4th component
	$("path.cls-18_3:not(.animated)").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
         if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ');
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated rotateInDownRight');
        } 
        
      }
    });
	//4th component
	$("path.cls-18_3.animated").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;
	  
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated rotateInDownRight')
      }
    });
	
	//5th component
	$("path.cls-18_4:not(.animated)").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
         if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ');
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated rotateInDownRight');
        } 
        
      }
    });
	//5th component
	$("path.cls-18_4.animated").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;
	  
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated rotateInDownRight')
      }
    });
	
	//6th component
	$("path.cls-18_5:not(.animated)").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
         if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ');
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated rotateInDownRight');
        } 
        
      }
    });
	//6th component
	$("path.cls-18_5.animated").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;
	  
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated rotateInDownRight')
      }
    });
	//7th component
	$("path.cls-18_6:not(.animated)").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
         if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ');
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated rotateInDownRight');
        } 
        
      }
    });
	//7th component
	$("path.cls-18_6.animated").each(function () {
      var $this     = $(this);
      var offsetTop = $this.offset().top;
	  
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated rotateInDownRight')
      }
    });
	
  }

  revealOnScroll();
});