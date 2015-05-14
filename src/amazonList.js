'use strict'

$(function(){
  var categories = ['71314051','71323051']
  const BestSellersFeedBase = 'http://www.amazon.co.jp/gp/rss/bestsellers/71314051/';
  categories.forEach(function(category){
    $.ajax(BestSellersFeedBase + category,{dataType:'xml'}).done(function(xml){
      xml = $(xml);
      xml.find('item').each(function(index,item){
        var title = $(item).find('title').text();
        var link = $(item).find('link').text();
        $(document.body).append(
          $('<div class="item" style="clear:both">').append(
            $('<a>').attr('href', link).text(title)
          ).append(
            $(item).find('description').text()
          )
        )
      })
    })
  })
})
