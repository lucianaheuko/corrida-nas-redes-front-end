$('#candidates li').on('click', function() {
  $('#candidates li').removeClass('active');
  $(this).addClass('active');
  var img = $(this).find('img.wordcloud-img').attr('src');
  // console.log(img);

  $('#wordcloud > img').attr('src', img);

  return false;
})


$('#graphic-candidates li').on('click', function() {
  $('#graphic-candidates li').removeClass('active');
  $(this).addClass('active');

  return false;
})
