require("a.js");
// 模块化
console.log('我是common.js')
function sayHello(name){
    console.log('Hello'+name +'!')
}

//暴露出来
module.exports = {
    sayHello:sayHello
}