var util = require('../../utils/util.js')
Page({
  data: {
    navTab: ["课表", "成绩", "校历"],
    currentNavtab: "0"
  },
  onLoad: function () {

  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  }
})