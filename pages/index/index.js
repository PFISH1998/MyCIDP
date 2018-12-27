
Page({
  data: {
    list: [
      {
        id: 'sreach',
        name: '查询',
        open: true,
        pages: [{ url: '../table/table', name: '课表' }, { url: '../login/login?page=grade', name: '成绩' }, { url: '../calendar/calendar', name: '校历' }]
      },

      // {
      //   id: 'recommend',
      //   name: '浏览',
      //   open: true,
      //   pages: [{ url: '../recommend/newslist?type=52&name=新闻中心', name: '新闻中心' }, { url: '../recommend/newslist?type=321&name=通知公告', name: '通知公告' }, { url: '../recommend/newslist?type=4662&name=学术活动', name: '学术活动' }]
      // },
      // {
      //   id: 'user',
      //   name: '我的',
      //   open: false,
      //   pages: [{ url: '../user/user', name: '账号设置' }, { url: '../table/bindtable', name: '重置课表' }, { url: '../share/share', name: '分享' }, { url: '../notes/notes', name: '提示' }]
      // },
    ]
  },
  onShareAppMessage: function () {
    return {
      title: '试试 MyCIDP 小程序！更方便的查看课表，成绩，学校新闻和通知',
      path: 'pages/index/index'
    }
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },

});
