define(function(){
  var initializeTickerElement = function(node){
    return {
      node: node,
      last: 0
    }
  };

  var setTrendForNode = function(node, last, newVal){
    node.removeClass('up');
    node.removeClass('down');
    if(newVal < last){
      node.addClass('down');
    } else if(newVal > last){
      node.addClass('up');
    }
  };

  return {
    high: initializeTickerElement($('#high')),
    low: initializeTickerElement($('#low')),
    vol: initializeTickerElement($('#vol')),
    buy: initializeTickerElement($('#buy')),
    sell: initializeTickerElement($('#sell')),
    last: initializeTickerElement($('#last')),
    handleTicker: function(msg){
      var newVal;
      var that = this;
      ['high', 'low', 'vol', 'buy', 'sell', 'last'].forEach(function(key){
        item = that[key];
        item.node.html(msg[key].display_short);
        newVal = Number(msg[key].value);
        setTrendForNode(item.node, item.last, newVal);
        item.last = newVal;
      });
    }
  }
});
