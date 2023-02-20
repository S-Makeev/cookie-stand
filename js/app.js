'use strict'
//******* GLOBALS  *************
let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let storeArr = [];
//~~~~~~~~Refactoring process ~~~~~~~~/


//***********Constructor *****************/
function Store(location, minCust, maxCust, avgCookieSales) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSales;
  this.CookieBought = [];
  this.dailyTotal = 0;
}
//************Prototypes ****************/

Store.prototype.getCust = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
}
Store.prototype.cookieGen = function () {
  for (let i = 0; i < time.length; i++) {
    let cookieHours = Math.floor(this.getCust() * this.avgCookieSale);
    this.CookieBought.push(cookieHours);
    this.dailyTotal += cookieHours;
  }
}

function headerTable() {
  let tHead = document.createElement('thead');
  let table = document.getElementById('salesTable');
  table.appendChild(tHead);

  let row = document.createElement('tr');
  tHead.appendChild(row);

  let emptyCell = document.createElement('th');
  row.appendChild(emptyCell);

  for (let i = 0; i < time.length; i++) {
    let heading = document.createElement('th');
    heading.textContent = time[i];
    row.appendChild(heading);
  }
  let totalCell = document.createElement('th');
  totalCell.textContent = 'Total'
  row.appendChild(totalCell);
}

function footerTable() {
  let tHead = document.createElement('tfoot');
  let table = document.getElementById('salesTable');
  table.appendChild(tHead);

  let row = document.createElement('tr');
  tHead.appendChild(row);

  let timeTotal = document.createElement('th');
  timeTotal.textContent = 'Hrly Total';
  row.appendChild(timeTotal);

  let grandTotal = 0;
  for (let i = 0; i < time.length; i++) {
    let sum = 0;
    for (let j = 0; j < storeArr.length; j++) {
      sum += storeArr[j].CookieBought[i];
      grandTotal += storeArr[j].CookieBought[i];
    }
    let footerTotal = document.createElement('th');
    footerTotal.textContent = sum;
    row.appendChild(footerTotal);
  }
  let totalCell = document.createElement('th');
  totalCell.textContent = grandTotal;
  row.appendChild(totalCell);
}

Store.prototype.render = function () {

  let table = document.getElementById('salesTable');
  const tableRow = document.createElement('tr');
  table.appendChild(tableRow);


  let locationElem = document.createElement('th')
  locationElem.textContent = this.location;
  tableRow.appendChild(locationElem)


  for (let j = 0; j < time.length; j++) {
    let tableData = document.createElement("td");
    tableData.textContent = `${this.CookieBought[j]} `;
    tableRow.appendChild(tableData);
  }
  let totalElem = document.createElement('th');
  totalElem.textContent = `${this.dailyTotal}`;
  tableRow.appendChild(totalElem);
}

//Creating new objects with unique params
let seattle = new Store("Seattle", 23, 65, 6.3);
let tokyo = new Store("Tokyo", 3, 24, 1.2)
let dubai = new Store("Dubai", 11, 38, 3.7);
let paris = new Store("Paris", 20, 38, 2.3);
let lima = new Store("Lima", 2, 16, 4.6);
//Pushing new objects into unifying array
storeArr.push(seattle, tokyo, dubai, paris, lima);

//Render function
function renderAll() {
  for (let i = 0; i < storeArr.length; i++) {
    storeArr[i].cookieGen();
    storeArr[i].render();
  }
}

renderAll();
headerTable();
footerTable();

//EVENT HANDLER SECTION
let myCookieForm = document.getElementById('cookieForm');
myCookieForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  let location = event.target.location.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let avgCookieSales = +event.target.avgCookieSales.value;

  let newStore = new Store(location, minCust, maxCust, avgCookieSales);
  removeFooter('tfoot');
  storeArr.push(newStore);

  function removeFooter(footerId) {
    var ele = document.getElementsByTagName(footerId);
    return ele[0].parentNode.removeChild(ele[0]);
  }
  newStore.cookieGen();
  newStore.render();
  footerTable();
}




// let seattle = {
//   location: "Seattle",
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   CookieBought: [],
//   dailyTotal: 0,

//   getCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   CookieGen: function () {
//     for (let i = 0; i < time.length; i++) {
//       let cookieHours = Math.floor(this.getCust() * this.avgCookieSale);
//       this.CookieBought.push(cookieHours);
//       this.dailyTotal += cookieHours;
//     }
//   },
//   render: function () {
//     this.CookieGen()
//     let section = document.getElementById('seattleSales');
//     const ulElement = document.createElement('ul');
//     section.append(ulElement);

//     for (let j = 0; j < time.length; j++) {
//       let listElem = document.createElement("li");
//       listElem.textContent = `${time[j]}: ${this.CookieBought[j]} `;
//       ulElement.append(listElem);
//     }
//     let totalElem = document.createElement("li");
//     totalElem.textContent = `Total: ${ this.dailyTotal} `;
//     ulElement.append(totalElem);
//   }
// };




























//Old version of lab6 (non-refactored)



// let tokyo = {
//   location: "Tokyo",
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   CookieBought: [],
//   dailyTotal: 0,

//   getCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   CookieGen: function () {
//     for (let i = 0; i < time.length; i++) {
//       let cookieHours = Math.floor(this.getCust() * this.avgCookieSale);
//       this.CookieBought.push(cookieHours);
//       this.dailyTotal += cookieHours;
//     }
//   },
//   render: function () {
//     this.CookieGen()
//     let section = document.getElementById('tokyoSales');
//     const ulElement = document.createElement('ul');
//     section.append(ulElement);

//     for (let j = 0; j < time.length; j++) {
//       let listElem = document.createElement("li");
//       listElem.textContent = `${time[j]}: ${this.CookieBought[j]} `;
//       ulElement.append(listElem);
//     }
//     let totalElem = document.createElement("li");
//     totalElem.textContent = `Total: ${ this.dailyTotal} `;
//     ulElement.append(totalElem);
//   }
// };

// let dubai	 = {
//   location: "Dubai",
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   CookieBought: [],
//   dailyTotal: 0,

//   getCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   CookieGen: function () {
//     for (let i = 0; i < time.length; i++) {
//       let cookieHours = Math.floor(this.getCust() * this.avgCookieSale);
//       this.CookieBought.push(cookieHours);
//       this.dailyTotal += cookieHours;
//     }
//   },
//   render: function () {
//     this.CookieGen()
//     let section = document.getElementById('dubaiSales');
//     const ulElement = document.createElement('ul');
//     section.append(ulElement);

//     for (let j = 0; j < time.length; j++) {
//       let listElem = document.createElement("li");
//       listElem.textContent = `${time[j]}: ${this.CookieBought[j]} `;
//       ulElement.append(listElem);
//     }
//     let totalElem = document.createElement("li");
//     totalElem.textContent = `Total: ${ this.dailyTotal} `;
//     ulElement.append(totalElem);
//   }
// };

// let paris	 = {
//   location: "Paris",
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   CookieBought: [],
//   dailyTotal: 0,

//   getCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   CookieGen: function () {
//     for (let i = 0; i < time.length; i++) {
//       let cookieHours = Math.floor(this.getCust() * this.avgCookieSale);
//       this.CookieBought.push(cookieHours);
//       this.dailyTotal += cookieHours;
//     }
//   },
//   render: function () {
//     this.CookieGen()
//     let section = document.getElementById('parisSales');
//     const ulElement = document.createElement('ul');
//     section.append(ulElement);

//     for (let j = 0; j < time.length; j++) {
//       let listElem = document.createElement("li");
//       listElem.textContent = `${time[j]}: ${this.CookieBought[j]} `;
//       ulElement.append(listElem);
//     }
//     let totalElem = document.createElement("li");
//     totalElem.textContent = `Total: ${ this.dailyTotal} `;
//     ulElement.append(totalElem);
//   }
// };

// let lima	 = {
//   location: "Lima",
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   CookieBought: [],
//   dailyTotal: 0,

//   getCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   CookieGen: function () {
//     for (let i = 0; i < time.length; i++) {
//       let cookieHours = Math.floor(this.getCust() * this.avgCookieSale);
//       this.CookieBought.push(cookieHours);
//       this.dailyTotal += cookieHours;
//     }
//   },
//   render: function () {
//     this.CookieGen()
//     let section = document.getElementById('limaSales');
//     const ulElement = document.createElement('ul');
//     section.append(ulElement);

//     for (let j = 0; j < time.length; j++) {
//       let listElem = document.createElement("li");
//       listElem.textContent = `${time[j]}: ${this.CookieBought[j]} `;
//       ulElement.append(listElem);
//     }
//     let totalElem = document.createElement("li");
//     totalElem.textContent = `Total: ${ this.dailyTotal} `;
//     ulElement.append(totalElem);
//   }
// };


// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();

