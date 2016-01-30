'use strict';

$().ready(function(){
  init();
});


function init(){

  //getFullContact();

}



function getFullContact(){
  //  email=bart@fullcontact.com   &apiKey=fea00f8a85d7ec98






  var baseURL = 'https://api.fullcontact.com/v2/person.json?';
  var userEmail = 'email='+'james.checks.his.email@gmail.com';
  var apiKey = "&apiKey=fea00f8a85d7ec98";

  var reqURL = baseURL+userEmail+apiKey;


  $.get( reqURL, function( data ) {
  // $( ".result" ).html( data );
  // alert( "Load was performed." );
  console.log(data)

  });


}
