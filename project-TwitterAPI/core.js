class Utility {
  static randomStr(length) {
    const string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = length; i > 0; i--) result += string[Math.floor(Math.random() * string.length)];

    return result;
  }

  static timeStamp() {
    const now = new Date();
    return Math.round(now.getTime() / 1000);
  }

  static imgUrl(url) {
    const loc = url.substring(0, (imgUrl.length - 11)),
      ext = url.substring((url.length - 4), (url.length));
    return `${loc}${ext}`;
  }
}

let imgUrl = 'http://pbs.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png';

//(-11, 7);
//console.log(imgUrl.substring(0, (imgUrl.length - 11)));

//console.log(imgUrl.substring((imgUrl.length - 4), (imgUrl.length)));

console.log(Utility.imgUrl(imgUrl));