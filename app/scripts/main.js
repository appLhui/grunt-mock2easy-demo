'use strict';

$(document).ready(function() {
  $('#test').click(function(){
    $.ajax('/demo/test.json')
      .done(function(data) {
        window.alert('数据来自--http://localhost:9000/demo/test.json\n\n'+data);
      }).fail(function() {
        window.alert('error');
      });
  });
});