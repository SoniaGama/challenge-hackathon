function signup(){
  var app_id = "146768662637277";
  var scopes = "email"
  var loginBtn = '<a href="#" id="login" class="btn btn-primary">Inicia sesion con facebook</a>';
  var div_session = "<div id='facebook-session'>"+ "<strong></strong" + "img" + '<a href="#" id="login" class="btn btn-danger">Cerrar Sesion</a>" "</div>';

   window.fbAsyncInit = function() {
     FB.init({
       appId : 'app_id',
       status : true, 
       cookie : true,
       // enable cookies to allow the server to access
