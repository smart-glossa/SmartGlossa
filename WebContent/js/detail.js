$(document).ready(function() {
$('#btn').click(function() {
  var name= $('#Name').val(); 
  var email = $('#Email').val();
  var mobno= $('#Phone').val();
  var mess=$('#Message').val();

  var url="http://localhost:8080/smartglossa/web?operation=details&Name="+ name +"&Email="+email +"&Phone="+mobno +"&Message="+ mess ;
  $.ajax(url).
  done(function(result) {
  console.log(result);
   
  }).
  fail(function(result) {
    console.log(result);

  });

});
});

