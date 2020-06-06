$('button').click(() => {
    console.log("Yeah, you clicked me")
  });

$('.second').on('click', () => {
    $('.first').text('Clicked on the second')
  });

  $('.third').click(() => {
    $('button').css('background', 'purple')
  });