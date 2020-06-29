const $ = (q) => document.querySelector(q);

class HttpRequest {
  async getData(input) {
    let responseProfile = await fetch(`https://api.github.com/users/${input}`);
    let resoponseRepo = await fetch(`https://api.github.com/users/${input}/repos?per_page=5&sort=updated&direction=desc`);
    let profile = await responseProfile.json();
    let repo = await resoponseRepo.json();
    return {
      profile,
      repo
    };
  }
}

class UI {
  static displayProfile(input) {
    $('.result').className = 'result mt-4 show';

    $('#img-profile').src = input.avatar_url;
    $('#name-profile').textContent = `@${input.login}`;
    $('#friend-profile').textContent = `${input.following} Following`;
    $('#follower-profile').textContent = `${input.followers} Follower`;
    $('#repo-profile').textContent = `${input.public_repos} Public Repo`;
  }

  static displayRepo(input) {
    let tableData = '';
    input.forEach(repo => {
      tableData += `
        <tr>
          <td>${repo.name}</td>
        </tr>
      `
    });
    $('.table').innerHTML = tableData;
  }

  static resetDisplay() {
    $('.result').className = 'result mt-4 hidden';
  }
}