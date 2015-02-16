'use strict';

$(document).ready(function () {
  $('#jsonp').click(function () {
    $.ajax({
      url: 'http://localhost:4000/demo/jsonpdemo.json',
      data:{
        a:2
      },
      dataType: "jsonp",
      jsonp: "callback",
      jsonpCallback:"flightHandler"
    }).done(function (data) {
      window.alert('数据来自--http://localhost:4000/demo/jsonpdemo.json\n\n' + JSON.stringify(data));
    });

  });

  $('#json').click(function () {
    $.ajax('/demo/test.json')
      .done(function(data) {
        window.alert('数据来自--http://localhost:9000/demo/test.json\n\n'+data);
      }).fail(function() {
        window.alert('error');
      });
  });


});