'use strict';
var app = getApp()

Page({
  data: {
    buthidden: false,
    userinfo: null,
    checkbox: true,
    page: ''
  },

  onLoad:function(options){
    console.log('目标页',options.page)
    
    app.appData.userinfo = wx.getStorageSync('userinfo')
    console.log('缓存', app.appData.userinfo)

    this.setData({
      userinfo: app.appData.userinfo,
      page: options.page
    })

    console.log(this.data)
    wx.setNavigationBarTitle({
      title: '登录',
    })
  },

  checkboxchange: function(e){
    var that = this
    that.setData({
       checkbox: e.detail.value
     })
  },

  submitInfo: function submitInfo(e) {
    let that = this
    var return_data = '';
    var sid = e.detail.value.sid;
    var pwd = e.detail.value.pwd;
    if (sid.length <= 7 || pwd.length == 0 ) {
      wx.showToast({
        title: '输入有误',
        icon: 'none',
        duration: 800
      });
    } else {
      that.setData({
        buthidden: true
      })
      wx.showLoading({
        title: '正在登录',
      })

      app.appData.userinfo = {sid:sid, pwd:pwd}
      
      if (this.data.checkbox) {
        wx.setStorageSync('userinfo', app.appData.userinfo)
      } else {
        app.appData.userinfo = null
        wx.removeStorageSync('userinfo')
      }
      console.log('userinfo', app.appData.userinfo)
      console.log('缓存', wx.getStorageSync('userinfo'))


      wx.request({
        
        // url: 'http://127.0.0.1:8000/'+ that.data.page,
        url: 'https://wx.tomwang.club/' + that.data.page,     
        method: 'post',
        data:{
          'sid': sid,
          'pwd': pwd
        },

        success: function (req) {
          console.log('服务器数据', req)
          wx.hideLoading()
          return_data = req.data.data
          // return_data = that.cleanSpelChar(req.data)
          var statusCode = req.data.code
          var info = req.data.info
          if (info == null) {
            info = "服务器未响应"
          }
          console.log('code',statusCode)
          if (statusCode != 200) {
            wx.showModal({
              title: "出错了！",
              content: info + "；code:"+statusCode,
            })
            return
            
          }else{
            console.log(that.data.page)
            app.appData.req_data = return_data
            // wx.setStorageSync('term', term)
            wx.redirectTo({
              url: '../' + that.data.page + '/' + that.data.page + '?page=login',
            })
          }
        },
        fail: function (e) {
          wx.hideLoading()
          console.log(e)
          wx.showModal({
            title: '抱歉',
            content: '某些地方出错了,待会再试试吧！',
          })
        },
        complete: function () {
          that.setData({
            buthidden: false
          })
           wx.hideLoading()
       }
      })
    }
  },
  cleanSpelChar: function (localData) {
    var noiseChar = "~!@#$%^&*()_+-=`[]{};':\"\\|,./<>?\n\r";
    var goodChar = "～！＠＃＄％＾＆＊（）＿＋－＝｀［］｛｝；＇：＂＼｜，．／＜＞？　　";
    for (var i = 0; i < noiseChar.length; i++) {
      var oneChar = noiseChar.charAt(i);
      var towChar = goodChar.charAt(i)
      // console.log('oneChar  ' + oneChar + '   towChar ' + towChar)
      while (localData.indexOf(oneChar) >= 0) {
        localData = localData.replace(oneChar, towChar)
      }
    }
    return localData;
  }

});