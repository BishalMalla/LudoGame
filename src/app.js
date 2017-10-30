$('form').on('submit', function (event) {
  localStorage.setItem('redPlayer',$('.player1')[0].value);
  localStorage.setItem('greenPlayer',$('.player2')[0].value);
  localStorage.setItem('yellowPlayer',$('.player3')[0].value);
  localStorage.setItem('bluePlayer',$('.player4')[0].value);
});
