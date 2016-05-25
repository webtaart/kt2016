



  $("#teller")
    .countdown("2016/09/02", function(event) {
    $(this).text(
      event.strftime('%D days %H:%M:%S')
      );
    });
