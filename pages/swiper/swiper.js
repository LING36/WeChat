Page({
    data:{
       disabledBol:true, 
        imgUrls:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg' 
        ],
         country: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'},
    ],
    citys:["北京","上海","广州","深圳" ],
    index:0,
    time:"09:01",
    date:"2016:11:01"
    },
    // 滑动选择器
    bindSliderChange:function(e){
            console.log(e.detail.value)
    },
    bindPickerChange:function(e){
       console.log(e.detail.value) ;//下标
       this.setData({
          index: e.detail.value
       });
    },
    changeDisabled:function(){
        this.setData({
            disabledBol:false
        })
    },
    // 开关选择器
    bindSwitch:function(e){
       console.log(e.detail.value);
    },
    // 多行文本输入框
    bindLineChange:function(e){
        // 返回一个对象
         console.log(e.detail);   
    },
    // 提交按钮
    subFn:function(e){
       console.log("提交表单",e.detail.value) 
    },
    // 重置按钮
    resetFn:function(){
        console.log("点击重置了")
    },
    // 复选框
    cheChange:function(e){
        console.log("复选框修改了")
         console.log(e.detail.value);
    },
    // 单选框
    radioChange:function(e){
         console.log("单选框修改了")
         console.log(e.detail.value);
    },
    // 时间
    bindTimeChange:function(e){
         console.log(e.detail.value);
          this.setData({
            time:e.detail.value
        })
    },
    // 日期
    bindDateChange:function(e){
         console.log(e.detail.value);
         this.setData({
            date:e.detail.value
        })
    }
});