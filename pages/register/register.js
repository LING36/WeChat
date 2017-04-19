// pages/register/register.js
Page({
  data: {
    imgSrc: ""
  },
  uploadImg: function () {
    var that = this;
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        //返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        // 显示图片
        // that.setData({
        //   imgSrc: tempFilePaths[0]
        // })
        // 上传图片
        wx.uploadFile({
          url: '',
          filePath: tempFilePaths[0],
          name: 'fileup',
          // header: {}, // 设置请求的 header
          // formData: {}, // HTTP 请求中其他额外的 form data
          success: function (res) {
            // success
            var data = res.data;
            console.log(data);
          },
          fail: function (res) {
            // fail
            console.log(fail)
          },
          complete: function (res) {
            // complete
          }
        })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})