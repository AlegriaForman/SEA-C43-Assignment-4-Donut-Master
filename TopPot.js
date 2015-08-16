var DonutMaster = function(storeLoc, minCustPerHour, maxCustPerHour,
  avgDonutsPerHour, hoursOpen) {
  this.location = storeLoc;
  this.minimum = minCustPerHour;
  this.maximum = maxCustPerHour;
  this.average = avgDonutsPerHour;
  this.hours = hoursOpen;

  this.donutsPerHour = function() {
    return Math.floor(Math.random() * (this.maximum - this.minimum + 1) +
      this.minimum) * this.average;
  };

  this.donutsPerDay = function() {
    return Math.floor(this.donutsPerHour() * this.hours);
  };
};

var storeList = [];
var addStore = function(storeLoc, minCustPerHour, maxCustPerHour,
  avgDonutsPerHour, hoursOpen) {
    var newStore = new DonutMaster(storeLoc, minCustPerHour, maxCustPerHour,
      avgDonutsPerHour, hoursOpen);
      storeList.push(newStore);
};

var generateReport = function() {
  for (var index = 0; index < storeList.length; index++) {
    console.log("The " + storeList[index].location + " store sells " +
      this.storeList[index].donutsPerHour().toFixed(2) +
      " donuts per hour and bakes " +
      this.storeList[index].donutsPerDay().toFixed(2) +
       " donuts a day.");
  }
};

addStore('Downtown', 8, 43, 4.5, 12);
addStore('Capitol Hill', 4, 37, 2, 11);
addStore('South Lake Union', 9, 23, 6.33, 11);
addStore('Wedgewood', 2, 28, 1.25, 10);
addStore('Ballard', 8, 58, 3.75, 10);
addStore('Pike Market', 9, 55, 5, 12);

generateReport();
