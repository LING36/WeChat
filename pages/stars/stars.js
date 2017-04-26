// pages/stars/stars.js
//index.js

//CSDN微信小程序开发专栏:http://blog.csdn.net/column/details/13721.html

//获取应用实例

var app = getApp()

Page({
  data: {
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../img/stars.png',
    selectedSrc: '../img/starsing.png',
    halfSrc: '../img/starsing.png',
    key: 0,//评分
  },
  onLoad: function () {
  },

  //点击,整颗星

  selectRight: function (e) {
    var key = e.currentTarget.dataset.key
    if (this.data.key == 1 && e.currentTarget.dataset.key == 1) {
      //只有一颗星的时候,再次点击,变为0颗
      key = 0;
    }
    console.log("得" + key + "分")
    this.setData({
      key: key
    })
  },
  // 方法二
  chooseicon: function (e) {
    var strnumber = e.target.dataset.id;
    var _obj = {};
    _obj.curHdIndex = strnumber;
    this.setData({
      tabArr: _obj
    });

  },
})