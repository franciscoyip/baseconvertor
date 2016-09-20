function baseConvertor(decNumber, base){
  var reminderStack = new Stack();
  var reminder = null;
  var baseStr = '';
  var baseStrMap = '0123456789ABCD';

  if(decNumber === 0){return decNumber;}

  while(decNumber > 0){

    reminder = Math.floor(decNumber % base);
    reminderStack.push(reminder);
    decNumber = Math.floor(decNumber / base);

  }

  while(!reminderStack.isEmpty()){
    baseStr += baseStrMap[reminderStack.pop()];
  }

  return baseStr;
};
