var util = require('../../../utils/util.js')
var app = getApp()
Page({
  data: {
    circle: [],
    circle_length: 0,
    like: true,
    userInfo: {},
    uid: null,
    lowhidden:false,
    page:1,
    nomore:"没有啦_(:з)∠)_，发条新的吧！",
    nomorehid:true
  },

  postCircle:function(){
      wx.navigateTo({
        url: '../post/post'
        })
  },

  //事件处理函数
  bindItemTap: function (e) {
    console.log('tap', e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    var like_circle = this.data.circle
    var uid = this.data.uid
    like_circle[id].is_like = !like_circle[id].is_like

    if (!like_circle[id].is_like) {
      like_circle[id].like_count -= 1
    } else {
      like_circle[id].like_count += 1
    }
    
    this.setData({
      circle: like_circle,
    })

    var e = {
      "method":"post",
      "url": "circle/like/" + like_circle[id].id +"/",
      "data":{
        "post": like_circle[id].id,
        "type": 1,
        "uid": uid,
        "status": like_circle[id].is_like
      }
    }
    util.request(e)
  },


  bindDetialTap: function (e) {
    console.log('detail')
    console.log(e)
    var id = e.currentTarget.dataset.id
    var circle_detail = this.data.circle
    console.log(this.data.circle[id])
    wx.navigateTo({
      url: '../detail/detail?circle_id='+ JSON.stringify(circle_detail[id])
    })
  },



  onLoad: function () {
    console.log('onLoad')
    wx.reportMonitor('circle', 1)
    var that = this
    that.data.userInfo =  app.appData.userInfo
    that.data.uid = app.appData.uid

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    });

    //调用应用实例的方法获取全局数据
    this.refresh(1);
  },


  upper: function () {
    // wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },

  
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function () { wx.hideNavigationBarLoading(); that.nextLoad(); }, 1000);
    console.log("lower")
  },

  //scroll: function (e) {
  //  console.log("scroll")
  //},

  //网络请求数据, 实现首页刷新
  refresh0: function () {
    var index_api = '';
    util.getData(index_api)
      .then(function (data) {
        //this.setData({
        //
        //});
        console.log(data);
      });
  },

  //使用本地 fake 数据实现刷新效果
  refresh: function (page) {
    console.log("loaddata");
    var uid = this.data.uid
    var req_data = {
      "url":"circle/posts",
      "method": "GET",
      "data":{
        "uid": uid,
        "page":page
      }
      
    }
    util.getData(req_data).then((circle) => {
      // console.log(circle)
      var circle_data = circle;
      this.setData({
        circle: circle_data,
        lowhidden:true,
        nomorehid:true
      })
      this.data.page += 1
      this.data.circle_length = circle_data.length,
      wx.hideNavigationBarLoading()
    })
    
    
  },

  //使用本地 fake 数据实现继续加载效果
  nextLoad: function () {
    console.log("continueload")
    var uid = this.data.uid
    var page = this.data.page
    // console.log(page, uid)
    var req_data = {
      "url": "circle/posts",
      "method": "GET",
      "data": {
        "uid": uid,
        "page": page
      }
    }
    util.getData(req_data).then((circle) => {
      // console.log("next",circle)
      var stop = circle.detail
      if (stop == "Invalid page."){
        console.log("null")
        this.setData({
          lowhidden: true,
          nomorehid: false
        })
      }
      else{
        var next_data = circle
        this.setData({
          circle: this.data.circle.concat(next_data),
        })
        this.data.circle_length = this.data.circle_length + next_data.length
        this.data.page = page + 1
      }
      this.setData({
        lowhidden: true
      })
    })
  },

  onPullDownRefresh: function () {
    console.log("pulldown")
  },


  // 下拉刷新
  pullDownRefresh:function(){
    wx.showNavigationBarLoading()
    console.log("pulldownR")
    this.data.circle = []
    this.data.page = 1
    this.refresh(1)
  },

  // 加载更多
  pullUpLoad: function (e){
    if (!this.data.nomorehid) {
      return
    }
    console.log("pullup")
    this.setData({
      lowhidden: false
    })
    this.nextLoad()
  }


})