var date = new Date()
var years = []
var months = []
var days = []

for (var i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (var i = 1 ; i <= 12; i++) {
  months.push(i)
}

for (var i = 1 ; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    year: date.getFullYear(),
    value: [9999, 1, 1],
  },
  bindChange: function(e) {
    var val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  }
})