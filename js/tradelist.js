define(function(){
  var Tradelist = function(node){
    this.body = $('tbody', node);

    this.add = function(msg){
      var date = new Date(msg.date * 1000);
      var trade = $('<tr>');
      var time = $('<td>').html(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
      var price = $('<td>').html(msg.price)
      var volume = $('<td>').html(msg.amount);
      trade.append(time);
      trade.append(price);
      trade.append(volume);
      trade.prependTo(this.body);
    }
  };

  return Tradelist;
});
