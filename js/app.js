'use strict'

//******* GLOBALS  *************
let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  CookieBought: [],
  dailyTotal: 0,

  getCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  CookieGen: function () {
    for (let i = 0; i < time.length; i++) {
      let cookieHours = Math.floor(this.getCust() * this.avgCookieSale);
      this.CookieBought.push(cookieHours);
      this.dailyTotal += cookieHours;
    }
  },
  render: function () {
    this.CookieGen()
    let section = document.getElementById('seattleSales');
    const ulElement = document.createElement('ul');
    section.append(ulElement);

    for (let j = 0; j < time.length; j++) {
      let listElem = document.createElement("li");
      listElem.textContent = `${time[j]}: ${this.CookieBought[j]} `;
      ulElement.append(listElem);
    }
    let totalElem = document.createElement("li");
    totalElem.textContent = `Total: ${ this.dailyTotal} `;
    ulElement.append(totalElem);
  }
};

let tokyo = {
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  CookieBought: [],
  dailyTotal: 0,

  getCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  CookieGen: function () {
    for (let i = 0; i < time.length; i++) {
      let cookieHours = Math.floor(this.getCust() * this.avgCookieSale);
      this.CookieBought.push(cookieHours);
      this.dailyTotal += cookieHours;
    }
  },
  render: function () {
    this.CookieGen()
    let section = document.getElementById('tokyoSales');
    const ulElement = document.createElement('ul');
    section.append(ulElement);

    for (let j = 0; j < time.length; j++) {
      let listElem = document.createElement("li");
      listElem.textContent = `${time[j]}: ${this.CookieBought[j]} `;
      ulElement.append(listElem);
    }
    let totalElem = document.createElement("li");
    totalElem.textContent = `Total: ${ this.dailyTotal} `;
    ulElement.append(totalElem);
  }
};

let dubai	 = {
  location: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  CookieBought: [],
  dailyTotal: 0,

  getCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  CookieGen: function () {
    for (let i = 0; i < time.length; i++) {
      let cookieHours = Math.floor(this.getCust() * this.avgCookieSale);
      this.CookieBought.push(cookieHours);
      this.dailyTotal += cookieHours;
    }
  },
  render: function () {
    this.CookieGen()
    let section = document.getElementById('dubaiSales');
    const ulElement = document.createElement('ul');
    section.append(ulElement);

    for (let j = 0; j < time.length; j++) {
      let listElem = document.createElement("li");
      listElem.textContent = `${time[j]}: ${this.CookieBought[j]} `;
      ulElement.append(listElem);
    }
    let totalElem = document.createElement("li");
    totalElem.textContent = `Total: ${ this.dailyTotal} `;
    ulElement.append(totalElem);
  }
};

let paris	 = {
  location: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  CookieBought: [],
  dailyTotal: 0,

  getCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  CookieGen: function () {
    for (let i = 0; i < time.length; i++) {
      let cookieHours = Math.floor(this.getCust() * this.avgCookieSale);
      this.CookieBought.push(cookieHours);
      this.dailyTotal += cookieHours;
    }
  },
  render: function () {
    this.CookieGen()
    let section = document.getElementById('parisSales');
    const ulElement = document.createElement('ul');
    section.append(ulElement);

    for (let j = 0; j < time.length; j++) {
      let listElem = document.createElement("li");
      listElem.textContent = `${time[j]}: ${this.CookieBought[j]} `;
      ulElement.append(listElem);
    }
    let totalElem = document.createElement("li");
    totalElem.textContent = `Total: ${ this.dailyTotal} `;
    ulElement.append(totalElem);
  }
};

let lima	 = {
  location: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  CookieBought: [],
  dailyTotal: 0,

  getCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  CookieGen: function () {
    for (let i = 0; i < time.length; i++) {
      let cookieHours = Math.floor(this.getCust() * this.avgCookieSale);
      this.CookieBought.push(cookieHours);
      this.dailyTotal += cookieHours;
    }
  },
  render: function () {
    this.CookieGen()
    let section = document.getElementById('limaSales');
    const ulElement = document.createElement('ul');
    section.append(ulElement);

    for (let j = 0; j < time.length; j++) {
      let listElem = document.createElement("li");
      listElem.textContent = `${time[j]}: ${this.CookieBought[j]} `;
      ulElement.append(listElem);
    }
    let totalElem = document.createElement("li");
    totalElem.textContent = `Total: ${ this.dailyTotal} `;
    ulElement.append(totalElem);
  }
};


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

