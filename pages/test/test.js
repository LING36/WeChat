// 1、获取应用实例
var app = getApp();
var APT_URL = 'https://api.douban.com/v2/movie/top250';
// 引入模块
var common = require("../../common/common.js")
Page({
    data: {
        name: '123',
        pass: null,
        id: 5,
        bol: false,
        arr: ['1', '2', '3'],
        obj: {
            a: 1,
            b: 2
        },
        dataArr: []
    },

    show: function () {
        //获取bol的值方法1

        // var bol = this.data.bol;
        this.setData({
            // bol:!bol
            // 方法2
            bol: !this.data.bol
        });
    },
    say: function () {
        common.sayHello(this.data.mame);
    },
    // 路由页面跳转方法1
    toIndex: function () {
        // 受限了，看不到效果
        wx.navigateTo({
            // 跳转路径
            url: "../index/index",
            success: function () {
                console.log("跳转到主页成功！")
            }
        });
    },
    innerTap: function () {
        console.log("触发了innertap")
    },
    middle: function () {
        console.log("触发了middle")
    },
    outter: function (even) {
        console.log(even)
        console.log("触发了outter")
    },
    newTap: function () {
        console.log("鼠标移动上去触发事件")
    },
    // 页面初始化
    onLoad: function () {
        this.setData({
            pass: app.globalData.pass
        });
        wx.request({
            url:"https://news-at.zhihu.com/api/4/news/latest",
            data: {},
            //   method: 'GET', 
            header: {
                "Content-Type": "json"
            }, // 设置请求的 header
            success: function (res) {
                // success
                console.log(res.data);
                // var data = res.data;
                // wx.hideToast();//当数据请求完成后隐藏提示窗口
                // that.setData({
                //     movies: data.subjects
                // })
            }
        })
    },

});
