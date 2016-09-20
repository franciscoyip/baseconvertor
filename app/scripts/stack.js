var Stack = function(){
    this.array = [];
};
Stack.prototype = {
  push: function(item){
    this.array.push(item);
  },
  pop: function(){
    return this.array.pop();
  },
  size: function(){
    return this.array.length;
  },
  peek: function(){
    return this.array[this.array.length - 1];
  },
  isEmpty: function(){
    return this.array.length === 0;
  }
};
