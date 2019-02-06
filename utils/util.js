function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
};

// var test_url = "http://127.0.0.1:8000/"
var test_url = "https://wx.pfish.xyz/"

var index = require('../data/index_data.js')
var index_next = require('../data/data_index_next.js') 
// var discovery = require('../data/data_discovery.js')
// var discovery_next = require('../data/data_discovery_next.js')



function upLoadFile(e){
  wx.uploadFile({
    url: '',
    filePath: '',
    name: '',
    header: {},
    formData: {},
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
}

// 下载图片
function downLoadFile(e){
  console.log(e)
  wx.downloadFile({
    url: e.url,
    header: {},
    success: function (res) {
      wx.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success() {
          wx.showToast({ title: '下载成功！', })
        }
      })
    },
    fail: function (res) {
      wx.showToast({ title: '下载失败', icon: fail })
     },
    complete: function (res) { },
  })
}

function getData(e) {
  var url = e.url
  var data = e.data
  var method = e.method
  console.log("request", e)
  return new Promise(function (resolve, reject) {
    wx.request({
      url: test_url+url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("success")
        resolve(getTime(res))
      },
      fail: function (res) {
        reject(res)
        console.log("failed")
      }
    })
  })
}


function request(e){
  console.log("request",e)
  var url = test_url + e.url
  var data = e.data
  var method = e.method
  return new Promise(function (resolve, reject) {wx.request({
    url: url,
    data: data,
    method: method,
    header:{
      'Content-Type': 'application/json'
    },
    success: function(req){
      console.log("back",req)
      resolve(req)
    },
    fail: function (res) {
      reject(res)
      console.log("failed")
    }
  })
  })

}



function getData2(e) {
var user = e.user
console.log("user", user)
var url = test_url
var req_data = {
  "url": url+"post/",
  "method": "GET"
  // "data":e.
}

getData(req_data).then((data) =>{
  // console.log("data", data)
  if (data.statusCode == 500){
    return
  }
  return getTime(data)
})

}

function getNext() {

  return getTime(index_next.next);
}

function getDiscovery() {
  return discovery.discovery;
}

function discoveryNext() {
  return discovery_next.next;
}


function getTime(e){
  // console.log('gettime', e)
  var data = e.data
  
  var now = new Date()
  var minute = 1000*60;
  var hour = minute*60;
  var day = hour*24;
  var halfmonth = day*15;
  var month = day*30;

  for (var i=0; i<data.length; i++){
    var result;
    var pub_time = strToDate(data[i].pub_time) // 解决 iOS 时间兼容问题
    var diffValue = now - pub_time
    if(diffValue < 0){
      return
    }
    var monthC = diffValue/month
    var hourC = diffValue/hour
    var dayC = diffValue/day
    var weekC = diffValue/(7*day)
    var minC = diffValue/minute
    if (monthC >= 1){
      if (monthC <= 12){
        result = "" + parseInt(monthC) + "月前"
      }else{
        result = "" + parseInt(monthC / 12) +"年前"
      }
    }
    else if (weekC >= 1){
      result = "" + parseInt(weekC) + "周前"
    }
    else if (dayC >= 1){
      result = "" + parseInt(dayC) + "天前"
    }
    else if (hourC >= 1){
      result = "" + parseInt(hourC) + "小时前"
    }
    else if (minC >= 1){
      result = "" + parseInt(minC) + "分钟前"
    }else{
      result = "刚刚"
    }
    data[i].pass_time = result


    // console.log(result)
    
    // console.log(data[i])



  }


  return data



}

function strToDate(dateObj){
  dateObj = dateObj.replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').replace(/(-)/g, '/')
  dateObj = dateObj.slice(0, dateObj.indexOf("."))
  return new Date(dateObj)
}



module.exports.getData = getData;
module.exports.getData2 = getData2;
module.exports.getNext = getNext;
module.exports.getDiscovery = getDiscovery;
module.exports.discoveryNext = discoveryNext;
module.exports.downLoadFile = downLoadFile;
module.exports.request = request


