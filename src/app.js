$('form').on('submit', function (event) {
  if($('.player1')[0].value !==""){
    localStorage.setItem('redPlayer',$('.player1')[0].value);
  }
  if($('.player2')[0].value !==""){
    localStorage.setItem('greenPlayer',$('.player2')[0].value);
  }
  if($('.player3')[0].value !==""){
    localStorage.setItem('yellowPlayer',$('.player3')[0].value);
  }
  if(($('.player4')[0].value !=="") && ($('.player4')[0].value !==undefined) && ($('.player4')[0].value !==null)){
    localStorage.setItem('bluePlayer',$('.player4')[0].value);
  }
});
