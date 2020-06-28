const $ = (q) => document.querySelector(q);

class HttpRequest {
  async getData(input) {
    let response = await fetch(`https://api.github.com/users/${input}`);
    let data = await response.json();
    return data;
  }
}

class UI {
  static displayProfile(input) {
    $('.result').className = 'result mt-4 show';
    
    // $('#img_profile').src = input.avatar_url;
    console.log(input.login);
    $('#name_profile').innerHTML = input.login;
    $('#friends_profile').innerHTML = input.following;
    $('#follower_profile').innerHTML = input.follower;
    $('#repo_profile').innerHTML = input.public_repo;
  }
}