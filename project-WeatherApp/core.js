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
  constructor() {
    this.month = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December'];
    this.day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }
  displayData(data) {
    const dates = new Date(data.location.localtime_epoch * 1000);
    
    $('#city-name').textContent = `${data.location.name}, ${data.location.country}`;
    $('#date').textContent = `${this.day[dates.getDay()]}, ${dates.getDate()} ${this.month[dates.getMonth()]} ${dates.getFullYear()}`;
    $('#current-temp').textContent = `${data.current.temp_c}°c`;
    $('#weather-text').textContent = data.current.condition.text;
  }
  static showAlert(message) {
    console.log(message);
  }
}