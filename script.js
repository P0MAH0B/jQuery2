$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
   $("p").click(function() {
        $("p").css("color",'red');
   });
   $("h2").mouseenter(function(){
     $("h2").css('background', 'lightblue');
     $(this).css( 'font-size', '1.3em' );
     });
   $("h2").mouseleave(function(){
     $("h2").css('background', 'white');
     $(this).css( 'font-size', '1em' );
     });
     $(".bottom_button").mouseenter(function(){
          $("body").css('background', 'black');
     });
     $(".bottom_button").mouseleave(function(){
          $("body").css('background', 'grey');
     });
}); 
