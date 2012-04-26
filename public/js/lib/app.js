(function($) {
  $.fn.linkURLs = function(options){
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig;

    this.each( function(){
      $(this).html( $(this).html().replace(exp,"<a href='$1'>$1</a>") );
    });
               
    //return this;
  };
})(jQuery);

