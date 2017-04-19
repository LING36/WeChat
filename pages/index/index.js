//index.js

//获取应用实例
//目前下列数据和事件只针对index文件夹里的页面，如果要全局的话要加到app.js
var app = getApp()
Page({
  data: {
    //两个键值对
    motto: 'Hello 36号',
    //userInfo里接收的是对象
    userInfo: {}
  },

  //事件处理函数
  //可以自己添加事件
  bindViewTap: function() {
    // 页面跳转
    wx.navigateTo({
      url: '../logs/logs'//日志页
    });
  },
  changeMotto: function() { // 给添加的点击事件写个处理函数
    this.setData({
        motto:"你好 世界！"
    });
  },

  // 路由跳转到操作反馈页面
  navigataTo:function(){
    wx.navigateTo({
      // 传参
      url:'../feedback/feedback?id=54321&name=laoxie'
    })
    //  wx.redirectTo({
    //   // 传参 跳转后关闭之前的页面
    //   url:'../feedback/feedback?id=54321&name=laoxie'
    // })
  },
//当页面加载好后执行（程序加载好后执行）
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
