Page({
    data: {
        // 标记点
        markers: [{
            latitude: 23.126270,
            longitude: 113.321010,
            name: '广州投哪儿网络科技有限公司',
            desc: '我现在的位置'
        }]
        // polyline: [{
        //     points: [{
        //         longitude: 113.3245211,
        //         latitude: 23.10229
        //     }, {
        //         longitude: 113.324520,
        //         latitude: 23.21229
        //     }],
        //     color: "#FF0000DD",
        //     width: 2,
        //     dottedLine: true
        // }],
        // controls: [{
        //     id: 1,
        //     iconPath: '/resources/location.png',
        //     position: {
        //         left: 0,
        //         top: 300 - 50,
        //         width: 50,
        //         height: 50
        //     },
        //     clickable: true
        // }]
    },
    // 获取当前位置
    // 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
    getPos: function () {
        wx.getLocation({
            type: 'wgs02',
            success: function (res) {
                var latitude = res.latitude
                var longitude = res.longitude
                // var speed = res.speed //速度
                // var accuracy = res.accuracy

                console.log(latitude);
                console.log(longitude);
                // ​ 使用微信内置地图查看位置
                wx.openLocation({
                    latitude: latitude,
                    longitude: longitude,
                    scale: 28
                })
            }
        })
    },


})