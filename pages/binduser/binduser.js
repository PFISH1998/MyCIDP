var app = getApp()
var that = this
Page({
  data: {
    userinfo: null,
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
    
    if(app.appData.userinfo == null){
      wx.showToast({
        title: '暂未绑定账号',
        icon: 'none'
      })
    }else{
      wx.showModal({
        title: '确定取消',
        content: '取消绑定将删除小程序上教务账号记录，包括课表等信息，你可以重新登录获取',
        success: function (e){
          if(e.cancel){

          }else if (e.confirm) {
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

      app.appData.userinfo = { sid: sid, pwd: pwd }
      wx.setStorageSync('userinfo', app.appData.userinfo)

      console.log('userinfo', app.appData.userinfo)
      console.log('缓存', wx.getStorageSync('userinfo'))

      if(true){
        wx.showToast({
          title: '绑定成功',
          icon: 'success'
        })
      }
    }
  },

});