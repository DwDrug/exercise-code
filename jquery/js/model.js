$.fn.extend({
  fellow:function(obj){
    var defaultObj = {
      type:"默认"
    }
    $.extend(defaultObj,obj);
    var modelBtn = $('<button class="btn">'+defaultObj.type+'</button>');
    var modelHtml = $('<div class="mosk">'+
                      '<div class="box">'+
                        '<div class="box-header">'+
                          '<span class="title">'+defaultObj.type+'</span>'+
                          '<span class="close">X</span>'+
                        '</div>'+
                        '<div class="box-content">'+
                        '<span>'+defaultObj.type+'</span>'+
                        '</div>'+
                      '</div>')
                          
    $(this).append(modelBtn);
    $(this).append(modelHtml);
    $(modelBtn).click(function(){
      $(modelHtml).show();
    })
    $(".close").click(function(){
      $(modelHtml).hide();
    })
  }
})