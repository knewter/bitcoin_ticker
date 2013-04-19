require(['bidlist', 'tradelist', 'ticker', 'jquery'], function(Bidlist, Tradelist, ticker, $){
  var conn = io.connect('https://socketio.mtgox.com/mtgox');
  var bids = new Bidlist($('#bid'));
  var asks = new Bidlist($('#ask'));
  var trades = new Tradelist($('#trades'));

  var handleMessage = function(msg) {
    switch(msg.op){
      case 'private':
        handlePrivate(msg);
        break;
      default:
        console.log('handleMessage', msg);
    }
  };

  var handlePrivate = function(msg) {
    switch(msg.private){
      case 'depth':
        handleDepth(msg.depth);
        break;
      case 'ticker':
        ticker.handleTicker(msg.ticker);
        break;
      case 'trade':
        trades.add(msg.trade);
        break;
      default:
        console.log('handlePrivate', msg);
    }
  };

  var handleDepth = function(msg) {
    switch(msg.type_str){
    case 'bid':
      bids.add(msg.price);
      break;
    case 'ask':
      asks.add(msg.price);
      break;
    }
  }
  conn.on('message', handleMessage);
});
