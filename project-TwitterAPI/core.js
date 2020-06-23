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

// Test Fetch Data API
fetch('https://api.twitter.com/1.1/users/show.json?screen_name=zulhamsy', {
  mode: 'cors',
  header: {
    'Authorization': `OAuth oauth_consumer_key="ntSAhkIHUmpg5Q7KVBRCTNhK1",oauth_token="594370592-1Gk35x0xaBRWa2Zc2mnC6ScB7GTSgTu8Rt9MCDfs",oauth_signature_method="HMAC-SHA1",oauth_timestamp="${Utility.timeStamp}",oauth_nonce="${Utility.randomStr(11)}",oauth_version="1.0",oauth_signature="DpdH7cUAlvdugr755eVokvhpSYs%3D"`
  }
}).then(response => response.json).then(result => console.log(result));