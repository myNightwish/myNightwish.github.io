//鼠标控制横向滚动
if (document.getElementsByClassName("menu-item")[0]){
  var xscroll = document.getElementsByClassName("menu-item")[0];
  xscroll.addEventListener("mousewheel", function (e) {
  //计算鼠标滚轮滚动的距离
  var v = -e.wheelDelta / 2;
  xscroll.scrollLeft += v;
  //阻止浏览器默认方法
  e.preventDefault();
  }, false);
}

// 获取当前时间

var box = document.getElementById('message-date-box')

//不足十位补零
var addZero = val => val < 10 ? '0' + val : val
//把阿拉伯数字的星期转化为中国汉字的星期 // 星期映射表
var trans = val => {
    var obj = {
        0: '日',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六'
    }
    return obj[val]
}
setTime ()
//获取时间的方法
function setTime() {
    var time = new Date();
    // var year = time.getFullYear(); // 获取年
    // var month = time.getMonth() + 1; // 获取月（是从0到11，所以我们要给他加1）
    // var date = time.getDate(); // 获取日
    var hour = time.getHours(); // 获取小时
    var min = time.getMinutes(); // 获取分钟
    var sec = time.getSeconds(); // 获取秒
    var day = time.getDay(); // 获取星期几(0是星期日)


    var value = addZero(hour) +
        ':' + addZero(min) + ":" + addZero(sec) + ' 星期'+ trans(day)
    // 把所有的时间拼接到一起
    box.innerText = value
    // console.log(value)
    // 把拼接好的时间插入到页面
}
// 让定时器每间隔一秒就执行一次setTime这个方法（这是实现时钟的核心）
setInterval(setTime, 1000)


function Navvisible(){
  var navbar = document.getElementById('menu-container')
  if (navbar) {
      // 首先判断是否存在active类
      if (navbar.className.indexOf('active-menu-bar') > -1){
        // 存在则移除
        navbar.classList.remove('active-menu-bar');
      }
      else{
        // 不存在则先添加
        navbar.classList.add('active-menu-bar');
      }
  }
}