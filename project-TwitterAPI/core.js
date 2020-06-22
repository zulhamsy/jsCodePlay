class Utility {
  static randomStr(length) {
    const string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    
    for(let i = length; i > 0; i--) result += string[Math.floor(Math.random() * string.length)];
    
    return result;
  }
  
  static timeStamp() {
    const now = new Date();
    return Math.round(now.getTime() / 1000);
  }
}
