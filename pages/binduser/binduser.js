var app = getApp()
var that = this
Page({
  data: {
    userinfo: null,
    page: 'grade',
  },

  onLoad: function (options) {
    app.appData.userinfo = wx.getStorageSync('userinfo')
    this.setData({
      userinfo: app.appData.userinfo
    })
  },

  cancel: function (e) {
    var that = this
    console.log(e)

    if (app.appData.userinfo == null) {
      wx.showToast({
        title: '暂未绑定账号',
        icon: 'none'
      })
    } else {
      wx.showModal({
        title: '确定取消',
        content: '取消绑定将删除小程序上教务账号记录，包括课表等信息，你可以重新登录获取',
        success: function (e) {
          if (e.cancel) {

          } else if (e.confirm) {
            that.setData({
              userinfo: null
            })
            app.appData.req_data = null
            app.appData.userinfo = null
            wx.removeStorageSync('userinfo')
            wx.removeStorageSync('table_set')
            wx.showToast({
              title: '取消绑定成功',
            })
          }
        }
      })

    }
  },

  submitInfo: function submitInfo(e) {
    var sid = e.detail.value.sid;
    var pwd = e.detail.value.pwd;
    console.log(sid, pwd)
    if (sid.length == 0 || pwd.length == 0) {
      wx.showToast({
        title: '输入有误',
        icon: 'none',
        duration: 800
      });
    } else {
      wx.showToast({
        title: '正在登录',
        icon: 'loading',
        duration: 2000
      });
      wx.request({

        // url: 'http://127.0.0.1:8000/'+ that.data.page,
        url: 'https://wx.tomwang.club/' + this.data.page,
        method: 'post',
        data: {
          'sid': sid,
          'pwd': pwd
        },

        success: function (req) {
          console.log('服务器数据', req)
          wx.hideLoading()
          var return_data = req.data.data
          // return_data = that.cleanSpelChar(req.data)
          var statusCode = req.data.code
          var info = req.data.info
          if (info == null) {
            info = "服务器未响应"
          }
          console.log('code', statusCode)
          if (statusCode != 200) {
            wx.showModal({
              title: "出错了！",
              content: info + "；code:" + statusCode,
            })
            return
          } else {
            app.appData.userinfo = {
              sid: sid,
              pwd: pwd
            }
            wx.setStorageSync('userinfo', app.appData.userinfo)
            console.log('userinfo', app.appData.userinfo)
            wx.showToast({
              title: '绑定成功',
              icon: 'success'
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
        complete: function (e) {
          var that = this
          that.setData({
            buthidden: false
          })
        }
      })
    }
  },

});