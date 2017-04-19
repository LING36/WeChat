var rectX = 0;
Page({
    data: {

    },
    // 鼠标点击时触发
    bindTouchStart: function (e) {
        console.log(e)
    },
    // 鼠标点击移动时触发
    bindTouchMove: function (e) {
        console.log(e)
    },
    // 鼠标点击松开时触发
    bindTouchEnd:function(e) {
        console.log(e)
    },
    onReady: function () {
        //    使用wx.createCintext 获取绘图的上下文
        var context = wx.createContext("oneCanvas");
        var frameNum = 0;
        // 画一个矩形
        // context.setStrokeStyle("#00ff00");//边框颜色
        // context.rect(0, 0, 200, 200);//坐标x、y，大小
        // context.stroke();
        // context.fill();//使矩形背景色变黑
        // // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
        // wx.drawCanvas({
        //     canvasId: 'oneCanvas',
        //     actions: context.getActions() // 获取绘图动作数组
        // })


        function draw() {
            context.setStrokeStyle("#00ff00");//边框颜色
            context.rect(rectX, 0, 100, 100);//坐标x、y，大小
            context.stroke();
            context.fill();//使矩形背景色变黑
            // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
            wx.drawCanvas({
                canvasId: 'oneCanvas',
                actions: context.getActions() // 获取绘图动作数组
            })
        }

        // 动画
        function animation() {
            frameNum++;
            if (frameNum % 4 == 0) {
                rectX++;
                if (rectX > 100) {
                    return;
                }
            }
            if (frameNum >= 10000) {
                frameNum = 0;
            }

            console.log(rectX);
            draw();
            requestAnimationFrame(animation)
        }
        animation();
    }
})