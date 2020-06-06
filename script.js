$('button').click(() => {
    console.log("Yeah, you clicked me")
  });

$('.second').on('click', () => {
    $('.first').text('Clicked on the second')
  });

let color;

$('.third').one('click', () => {
    if ($('.input').val() === "") {
        color = "blue";
    } else {
        color = $('.input').val();
    };
    $('button').css('background', `${color}`);
  });


