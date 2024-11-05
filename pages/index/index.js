// index.js
Page({
  data: {
    pcode:'beijing',
    banners: [
      '../../images/banner/banner1.png',
      '../../images/banner/banner2.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0,
    provinceList: [
      [
        {
          code:"beijing",
          name:'北京省',
          imgUrl:'../../images/p/p1.png'
        },
        {
          code:"liaoning",
          name:'辽宁省',
          imgUrl:'../../images/p/p2.png'
        },
        {
          code:"liaoning",
          name:'辽宁省',
          imgUrl:'../../images/p/p3.png'
        },
        {
          code:"liaoning",
          name:'辽宁省',
          imgUrl:'../../images/p/p4.png'
        },
        {
          code:"liaoning",
          name:'辽宁省',
          imgUrl:'../../images/p/p5.png'
        },
        {
          code:"liaoning",
          name:'辽宁省',
          imgUrl:'../../images/p/p6.png'
        },
        {
          code:"liaoning",
          name:'辽宁省',
          imgUrl:'../../images/p/p7.png'
        },
        {
          code:"liaoning",
          name:'辽宁省',
          imgUrl:'../../images/p/p8.png'
        },
        {
          code:"liaoning",
          name:'辽宁省',
          imgUrl:'../../images/p/p9.png'
        },
        {
          code:"liaoning",
          name:'辽宁省',
          imgUrl:'../../images/p/p10.png'
        }
      ],
      [
        {
          code:"zhejiang",
          name:'浙江省',
          imgUrl:'../../images/p/p3.png'
        },
        {
          code:"zhejiang",
          name:'浙江省',
          imgUrl:'../../images/p/p2.png'
        },
        {
          code:"zhejiang",
          name:'浙江省',
          imgUrl:'../../images/p/p7.png'
        },
        {
          code:"zhejiang",
          name:'浙江省',
          imgUrl:'../../images/p/p10.png'
        }
      ]
    ],
    groupList : {
      "liaoning":[
        {
          group:'g2',
          imgUrl: '../../images/group1.png',
          title: 'group2',
          desc: 'This is desc of group2'
        },
        {
          group:'g3',
          imgUrl: '../../images/group2.png',
          title: 'group3',
          desc: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: '../../images/group3.png',
          title: 'group3',
          desc: 'This is desc of group3'
        }
      ],
      "beijing":[
        {
          group:'g2',
          imgUrl: '../../images/group4.png',
          title: 'group2',
          desc: 'This is desc of group2'
        },
        {
          group:'g3',
          imgUrl: '../../images/group5.png',
          title: 'group3',
          desc: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: '../../images/group6.png',
          title: 'group3',
          desc: 'This is desc of group3'
        }
      ],
      "zhejiang":[
        {
          group:'g2',
          imgUrl: '../../images/group4.png',
          title: 'group2',
          desc: 'This is desc of group2'
        },
        {
          group:'g3',
          imgUrl: '../../images/group5.png',
          title: 'group3',
          desc: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: '../../images/group6.png',
          title: 'group3',
          desc: 'This is desc of group3'
        }
      ]
    },
  },

  itemTaped(e){
    this.setData({
      pcode:e.currentTarget.dataset.pcode
    })
  }
})
