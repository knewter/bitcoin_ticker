define(function(){
  var Bidlist = function(node){
    this.node = node;

    this.add = function(price){
      var newBid = $('<div>').text(price);
      newBid.prependTo(this.node);
    }
  };

  return Bidlist;
});
