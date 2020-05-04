// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "oli" );


$( "#clickme" ).click(function() {
  $( ".book" ).hide( "slow", function() {
    // alert( "Animation complete." );
  });
});

});

// https://api.jquery.com/hide/
