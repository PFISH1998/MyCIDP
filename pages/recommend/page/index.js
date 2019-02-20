var util = require('../../../utils/util.js')
Page({
  data: {
    navTab: [{"name": "新闻中心", "id":'xwzx'}, {"name": "通知公告", "id":'tzgg' },{"name": "学术活动", "id":'xshd'}],
    currentNavtab: "0",

    page_num: 0,
    list_type: '',
    hidden: true,
    headhidden: false,

    news_list52: [],
    page52: 0,
    news_list321: [],
    page321: 0,
    news_list4662: [],
    page4662: 0,
    return_news: [],

    page_type: null,
    request_status: false,


  },
  onLoad: function (options) {
    var page_type = 'xwzx'
    var name = "xinwen"
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          list_type: name,
          page_type: page_type,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    });

    // 新闻功能
    that.getNewsList(page_type, 0)

  },

  getNewsList: function (page_type, num) {
    var that = this
    // 临时
    // console.log('page_num', num, page_type)
    if (that.data.request_status) {
      console.log('busy')
      return
    }

    that.setData({
      request_status: true
    })
    wx.request({
      // url: 'http://127.0.0.1:8000/news/list?page_num=' + num + '&type=' + page_type,
      url: 'https://wx.pfish.xyz/news/list?page_num=' + num + '&type=' + page_type,
      method: 'GET',
      success: function (req) {
        var next_page = req.data.news_list.next_page
        if(page_type == 'xwzx'){
          var news = req.data.news_list.news_list
          var return_news = that.data.news_list52.concat(news)
          that.setData({
            page52: next_page,
            headhidden: true,
            hidden: true,
            news_list52: return_news
          })
        }

        if (page_type == 'tzgg') {
          var news = req.data.news_list.news_list
          var return_news = that.data.news_list321.concat(news)
          that.setData({
            page321: next_page,
            headhidden: true,
            hidden: true,
            news_list321: return_news
          })
        }
        if (page_type == 'xshd'){
          var news = req.data.news_list.news_list
          var return_news = that.data.news_list4662.concat(news)
          that.setData({
            page4662: next_page,
            headhidden: true,
            hidden: true,
            news_list4662: return_news
          })
        }
        else{
          return
        }

        
      },


      fail: function (req) {
        // console.log(req)
        that.data.fail = true
      },
      complete: function () {
        that.setData({
          request_status: false,
          headhidden: true,
          hidden: true
        })
      }

    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this
    return {
      title: 'MyCIDP ' + that.data.list_type,
      path: "pages/recommend/newslist?type=" + that.data.page_type + "&name=" + that.data.list_type
    }
  },


  pullUpLoad: function (e) {
    var that = this;
    // 成功再加一，停止刷新
    that.setData({
      hidden: false,
    })
    var page_type = that.data.page_type
    // console.log("page", page_type)
    if (page_type == 'xwzx') {
      var num = that.data.page52
    }
    else if (page_type == 'tzgg') {
      var num = that.data.page321
    }
    else if (page_type == 'xshd') {
      var num = that.data.page4662
    }
    // console.log("pullup")
    that.getNewsList(page_type, num);
  },

  pullDownRefresh: function () {
    // console.log('pulldown')
    // var that = this;
    // num = 1
    // that.setData({
    //   hidden: false,

    // });
  },


  switchTab: function (e) {
    var id = e.target.dataset.id
    // console.log('info',id)
    if (id == 'xwzx'){
      var num = this.data.page52
    }
    if (id == 'tzgg') {
      var num = this.data.page321
    }
    if (id == 'xshd') {
      var num = this.data.page4662
    }
    this.data.page_type = id
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });

    if(num == 0){
      this.getNewsList(id, num)
    }

  }
})
