var notes = [{
  month: 2,
  content: ['2月23日、24日返校报到，2月25日开始上课。']
},
  {
    month: 3,
    content: []
  },

  {
    month: 4,
    content: ['4月5日-7日放假，共三天。']
  },

  {
    month: 5,
    content: ['1、5月1日放假，共一天。', '2、运动会：5月9日、10日。']
  },
  {
    month: 6,
    content: ['1、6月7日-9日放假，共三天。', '2、6月28日本学期结束']
  },
  {
    month: 7,
    content: ['1、7月1日-8月20日夏季学期。','2、7月1日-8月25日 为夏季短学期，教职工轮休。8月26日 教职工上班。']
  },
  {
    month: 8,
    content: ['1.7月1日-8月25日 为夏季短学期，教职工轮休。8月26日 教职工上班。','2.2019级新生8月29日报到;']
  },
  {
    month: 9,
    content: ['1. 8月30日-9 月1日入学教育;9 月2日-14日军训;9 月16日开始课堂教 学。', '2. 在校生9月7日—8日返校，9月9日开始课堂教学。','3. 中秋节:9月13日 -15日放假，共3天 。']
  },
  {
    month: 10,
    content: ['1. 国庆节:10月1日-7日放假调休，共7天;9月29日上班，补10月4日(周五)的课，10月12日上班，补10月7日(周一)的课。']
  },
  {
    month: 11,
    content: []
  },
  {
    month: 12,
    content: []
  },
  {
    month: 1,
    content: ['1. 元旦:2020年1月1日放假。', '2. 本学期共安排18 个教学周，教职员 工2020年1月11日—12日上班，1月13日开始轮休。学生2020年1月13日放寒假。']
  },
  {
    month: 2,
    content: ['2020年2月22日—23日学生返校，24日开始课堂教学; 教职员工2月20日开始上班。']
  }
]

var holidays= [

    //九月
    {
      date: '2018-9-3',
      name: '开学'
    }, {
      date: '2018-9-8',
      name: 8
    }, {
      date: '2018-9-8',
      name: 9
    }, {
      date: '2018-9-9',
      name: 9
    }, {
      date: '2018-9-15',
      name: '15'
    }, {
      date: '2018-9-16',
      name: '16'
    }, {
      date: '2018-9-22',
      name: '22'
    }, {
      date: '2018-9-23',
      name: '23'
    }, {
      date: '2018-9-24',
      name: '中秋'
    },

    // 十月
    {
      date: '2018-10-1',
      name: '国庆'
    }, {
      date: '2018-10-2',
      name: '2'
    }, {
      date: '2018-10-3',
      name: '3'
    }, {
      date: '2018-10-4',
      name: '4'
    }, {
      date: '2018-10-5',
      name: '5'
    }, {
      date: '2018-10-6',
      name: '6'
    }, {
      date: '2018-10-7',
      name: '7'
    }, {
      date: '2018-10-13',
      name: '13'
    }, {
      date: '2018-10-14',
      name: '14'
    }, {
      date: '2018-10-20',
      name: '20'
    }, {
      date: '2018-10-21',
      name: '21'
    }, {
      date: '2018-10-27',
      name: '27'
    }, {
      date: '2018-10-28',
      name: '28'
    },


    //十一月
    {
      date: '2018-11-3',
      name: '3'
    }, {
      date: '2018-11-4',
      name: '4'
    }, {
      date: '2018-11-10',
      name: '10'
    }, {
      date: '2018-11-11',
      name: '11'
    }, {
      date: '2018-11-17',
      name: '17'
    }, {
      date: '2018-11-18',
      name: '18'
    }, {
      date: '2018-11-24',
      name: '24'
    }, {
      date: '2018-11-25',
      name: '25'
    },


    //十二月
    {
      date: '2018-12-1',
      name: '1'
    }, {
      date: '2018-12-2',
      name: '2'
    }, {
      date: '2018-12-8',
      name: '8'
    }, {
      date: '2018-12-9',
      name: '9'
    }, {
      date: '2018-12-15',
      name: '15'
    }, {
      date: '2018-12-16',
      name: '16'
    }, {
      date: '2018-12-22',
      name: '22'
    }, {
      date: '2018-12-23',
      name: '23'
    }, {
      date: '2018-12-30',
      name: '30'
    }, {
      date: '2018-12-31',
      name: '31'
    },

    //一月
    {
      date: '2019-1-1',
      name: '元旦'
    }, {
      date: '2019-1-5',
      name: '寒假'
    }, {
      date: '2019-1-6',
      name: '6'
    }, {
      date: '2019-1-12',
      name: '12'
    }, {
      date: '2019-1-13',
      name: '13'
    }, {
      date: '2019-1-19',
      name: '19'
    }, {
      date: '2019-1-20',
      name: '20'
    }, {
      date: '2019-1-26',
      name: '26'
    }, {
      date: '2019-1-26',
      name: '27'
    },

    //二月
    {
      date: '2019-2-25',
      name: '开学'
    },

    //三月
    {
      date: '2019-3-2',
      name: '2'
    }, {
      date: '2019-3-3',
      name: '3'
    }, {
      date: '2019-3-9',
      name: '9'
    }, {
      date: '2019-3-10',
      name: '10'
    }, {
      date: '2019-3-16',
      name: '16'
    }, {
      date: '2019-3-17',
      name: '17'
    }, {
      date: '2019-3-23',
      name: '23'
    }, {
      date: '2019-3-24',
      name: '24'
    }, {
      date: '2019-3-30',
      name: '30'
    }, {
      date: '2019-3-31',
      name: '31'
    },

    //四月
    {
      date: '2019-4-5',
      name: '清明'
    }, {
      date: '2019-4-6',
      name: '6'
    }, {
      date: '2019-4-7',
      name: '7'
    }, {
      date: '2019-4-13',
      name: '13'
    }, {
      date: '2019-4-14',
      name: '14'
    }, {
      date: '2019-4-20',
      name: '20'
    }, {
      date: '2019-4-21',
      name: '21'
    }, {
      date: '2019-4-27',
      name: '27'
    }, {
      date: '2019-4-28',
      name: '28'
    },

    //五月
    {
      date: '2019-5-1',
      name: '劳动'
    }, {
      date: '2019-5-4',
      name: '4'
    }, {
      date: '2019-5-5',
      name: '5'
    }, {
      date: '2019-5-11',
      name: '11'
    }, {
      date: '2019-5-12',
      name: '12'
    }, {
      date: '2019-5-18',
      name: '18'
    }, {
      date: '2019-5-19',
      name: '19'
    }, {
      date: '2019-5-25',
      name: '25'
    }, {
      date: '2019-5-26',
      name: '26'
    },

    //六月

    {
      date: '2019-6-1',
      name: '1'
    }, {
      date: '2019-6-2',
      name: '2'
    }, {
      date: '2019-6-7',
      name: '端午'
    }, {
      date: '2019-6-8',
      name: '8'
    }, {
      date: '2019-6-9',
      name: '9'
    }, {
      date: '2019-6-15',
      name: '15'
    }, {
      date: '2019-6-16',
      name: '16'
    }, {
      date: '2019-6-22',
      name: '22'
    }, {
      date: '2019-6-23',
      name: '23'
    }, {
      date: '2019-6-28',
      name: '放假'
    },

    {
      date: '2019-7-1',
      name: '夏季'
    },
    // 八月
  {
    date: '2019-8-31',
    name: '31'
  },
  {
    date: '2019-9-1',
    name: '1'
  },
  {
    date: '2019-9-7',
    name: '7'
  },
  {
    date: '2019-9-8',
    name: '8'
  },
  {
    date: '2019-9-9',
    name: '开学'
  },
  {
    date: '2019-9-13',
    name: '中秋节'
  },
  {
    date: '2019-9-14',
    name: '14'
  },
  {
    date: '2019-9-15',
    name: '15'
  },
  {
    date: '2019-9-21',
    name: '21'
  },
  {
    date: '2019-9-22',
    name: '22'
  },
  {
    date: '2019-9-28',
    name: '28'
  },
  {
    date: '2019-9-29',
    name: '29'
  },
  {
    date: '2019-10-1',
    name: '国庆'
  },
  {
    date: '2019-10-2',
    name: '2'
  },
  {
    date: '2019-10-3',
    name: '3'
  },
  {
    date: '2019-10-4',
    name: '4'
  },
  {
    date: '2019-10-5',
    name: '5'
  },
  {
    date: '2019-10-6',
    name: '6'
  },
  {
    date: '2019-10-12',
    name: '12'
  },
  {
    date: '2019-10-13',
    name: '13'
  },
  {
    date: '2019-10-19',
    name: '19'
  },
  {
    date: '2019-10-20',
    name: '20'
  },
  {
    date: '2019-10-26',
    name: '26'
  },
  {
    date: '2019-10-26',
    name: '26'
  },
  {
    date: '2019-10-27',
    name: '27'
  },
  {
    date: '2019-11-2',
    name: '1'
  },
  {
    date: '2019-11-3',
    name: '3'
  },
  {
    date: '2019-11-9',
    name: '9'
  },
  {
    date: '2019-11-10',
    name: '10'
  },
  {
    date: '2019-11-16',
    name: '16'
  },
  {
    date: '2019-11-17',
    name: '17'
  },
  {
    date: '2019-11-23',
    name: '23'
  },
  {
    date: '2019-11-24',
    name: '24'
  },
  {
    date: '2019-11-30',
    name: '30'
  },
  {
    date: '2019-12-1',
    name: '1'
  },
  {
    date: '2019-12-7',
    name: '7'
  },
  {
    date: '2019-12-8',
    name: '8'
  },
  {
    date: '2019-12-14',
    name: '14'
  },
  {
    date: '2019-12-15',
    name: '15'
  },
  {
    date: '2019-12-21',
    name: '21'
  },
  {
    date: '2019-12-22',
    name: '22'
  },
  {
    date: '2019-12-28',
    name: '28'
  },
  {
    date: '2019-12-29',
    name: '29'
  },
  {
    date: '2020-1-1',
    name: '元旦'
  },
  {
    date: '2020-1-4',
    name: '4'
  },
  {
    date: '2020-1-5',
    name: '5'
  },
  {
    date: '2020-1-11',
    name: '11'
  },
  {
    date: '2020-1-12',
    name: '12'
  },
  {
    date: '2020-1-13',
    name: '寒假'
  },

  {
    date: '2020-1-18',
    name: '18'
  },
  {
    date: '2020-1-19',
    name: '19'
  },
  {
    date: '2020-1-25',
    name: '25'
  },
  {
    date: '2020-1-26',
    name: '26'
  },
  {
    date: '2020-2-1',
    name: '元旦'
  },
  {
    date: '2020-2-2',
    name: '2'
  },
  {
    date: '2020-2-8',
    name: '8'
  },
  {
    date: '2020-2-9',
    name: '9'
  },
  {
    date: '2020-2-15',
    name: '16'
  },
  {
    date: '2020-2-22',
    name: '22'
  },
  {
    date: '2020-2-23',
    name: '23'
  },
  {
    date: '2020-2-24',
    name: '开学'
  },

  {
    date: '2020-2-29',
    name: '29'
  },
  {
    date: '2020-2-30',
    name: '30'
  },
  {
    date: '2020-2-1',
    name: '元旦'
  }

]

module.exports.notes = notes
module.exports.holidays = holidays