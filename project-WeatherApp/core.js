const $ = (q) => document.querySelector(q);

class HtmlRequest {
  constructor() {
    this.key = 'b74f9643647c4dc7aa515931200207';
    this.url = 'http://api.weatherapi.com/v1/current.json'
  }
  async getData(query) {
    const response = await fetch(`${this.url}?key=${this.key}&q=${query}`),
      data = response.json();
    return data;
  }
}

class UI {
  static displayData(data) {
    
  }
}