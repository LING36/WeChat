//用于返回豆瓣前250名的电影 接口
var api = "https://api.douban.com/v2/movie/top250";
Page({
    data: {
        imageSrc: '../img/timg.jpg',
        imgArray: [{
            mode: 'scaleToFill',
            text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
        }, {
            mode: 'aspectFit',
            text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
        }, {
            mode: 'aspectFill',
            text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
        }, {
            mode: 'top',
            text: 'top：不缩放图片，只显示图片的顶部区域'
        }, {
            mode: 'bottom',
            text: 'bottom：不缩放图片，只显示图片的底部区域'
        }, {
            mode: 'center',
            text: 'center：不缩放图片，只显示图片的中间区域'
        }, {
            mode: 'left',
            text: 'left：不缩放图片，只显示图片的左边区域'
        }, {
            mode: 'right',
            text: 'right：不缩放图片，只显示图片的右边边区域'
        }, {
            mode: 'top left',
            text: 'top left：不缩放图片，只显示图片的左上边区域'
        }, {
            mode: 'top right',
            text: 'top right：不缩放图片，只显示图片的右上边区域'
        }, {
            mode: 'bottom left',
            text: 'bottom left：不缩放图片，只显示图片的左下边区域'
        }, {
            mode: 'bottom right',
            text: 'bottom right：不缩放图片，只显示图片的右下边区域'
        }],
        danmuList: [
            {
                text: '第 1s 出现的弹幕',
                color: '#ff0000',
                time: 1
            },
            {
                text: '第 3s 出现的弹幕',
                color: '#ff00ff',
                time: 3
            }],
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        name: '此时此刻',
        author: '许巍',
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    },
    // 获取上下文
    onReady: function () {
        this.audioCtx = wx.createAudioContext('AudioId')

    },
    // 点击播放
    audioPlay: function () {
        this.audioCtx.play()
    },
    //点击暂停
    audioPause: function () {
        this.audioCtx.pause()
    },
    // 设置当前的播放时间为50秒
    audio50: function () {
        this.audioCtx.seek(50)
    },
    // audioStart: function () {
    //     this.audioCtx.seek(0)
    // },

    // 显示操作菜单
    showAction: function () {
        wx.showActionSheet({
            itemList: ['A', 'B', 'C'],
            itemColor: "red",//设置颜色
            // 回调函数
            success: function (res) {
                if (!res.cancel) {
                    console.log(res.tapIndex)//选项下标
                }
            }
        });
    },
    // 显示模态弹窗
    showModal: function () {
        wx.showModal({
            title: "提示",
            content: "我是一个模态弹窗",
            showCancel: true,//是否显示取消按钮
            cancelColor: "red",//取消按钮的文字颜色
            cancelText: "点我取消",//取消按钮的文字内容
            confirmText: "点我确定",//确定按钮的文字内容
            // 成功回调
            success: function (res) {
                console.log(res)
            }
        });
    },
    // 显示消息提示框
    showToast: function () {
        wx.showToast({
            title: "提示的文字",
            icon: "success",//提示的图标/loading
            duration: 50000,//提示框持续时间
            success: function () {
                console.log("接口成功回调")
            }
        });
        // 2秒隐藏  经常用在加载数据请求接口
        // setTimeout(function () {
        //     wx.hideToast();
        // }, 2000);

        // 调用豆瓣接口api
        wx.request({
            url: api,
            data: {},
            //   method: 'GET', 
            header: {
                'Content-Type': 'application/json'
            }, // 设置请求的 header
            success: function (res) {
                // success
                console.log(res.data);
                wx.hideToast();//当数据请求完成后隐藏提示窗口
            }
        })
    },
    onLoad: function (arg) {
        // 接收从index页传过来的参数
        console.log(arg)
    },
    // 返回上一层  默认一层，如果多层那就直接返回到主页
    navigateBack: function () {
        wx.navigateBack({
            data: 2
        });
    }

})