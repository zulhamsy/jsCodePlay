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
    console.log(input);
    $('#img-profile').src = input.avatar_url;
    $('#name-profile').textContent = `@${input.login}`;
    $('#friend-profile').textContent = `${input.following} Following`;
    $('#follower-profile').textContent = `${input.followers} Follower`;
    $('#repo-profile').textContent = `${input.public_repos} Public Repo`;
  }
}