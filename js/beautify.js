/*  这部分资源不是首屏渲染中重要的东西，会被推迟加载，只是美化的 */

/*  1. 卖萌标题 */
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
  // document.querySelector('[rel="icon"]').setAttribute('href', "/img/favicon.webp");
    if (document.hidden) {
        document.title = '(つェ⊂) 我藏好了哦~~';
        clearTimeout(titleTime);
    } else {
        document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});


// 功能：评论样式更改
// 移除FixedComment类，保持原生样式，确保不与最新评论跳转冲突
function RemoveFixedComment() {
    var activedItems = document.querySelectorAll('.fixedcomment');
    if (activedItems) {
      for (i = 0; i < activedItems.length; i++) {
        activedItems[i].classList.remove('fixedcomment');
      }
    }
}
//给post-comment添加fixedcomment类
function AddFixedComment(){
  var commentBoard = document.getElementById('post-comment');
  var quitBoard = document.getElementById('quit-board');
  commentBoard.classList.add('fixedcomment');
  quitBoard.classList.add('fixedcomment');
}
//创建一个蒙版，作为退出键使用
function CreateQuitBoard(){
  var quitBoard = `<div id="quit-board" onclick="RemoveFixedComment()"></div>`
  var commentBoard = document.getElementById('post-comment');
  commentBoard.insertAdjacentHTML("beforebegin",quitBoard)
}

function FixedCommentBtn(){
  //第一步，判断当前是否存在FixedComment类，存在则移除，不存在则添加
  // 获取评论区对象
  var commentBoard = document.getElementById('post-comment');
  // 若评论区存在
  if (commentBoard) {
      // 判断是否存在fixedcomment类
      if (commentBoard.className.indexOf('fixedcomment') > -1){
        // 存在则移除
        RemoveFixedComment();
      }
      else{
        // 不存在则添加
        CreateQuitBoard();
        AddFixedComment();
      }
  }
  // 若不存在评论区则跳转至留言板
  else{
    // 判断是否开启了pjax，尽量不破坏全局吸底音乐刷新
      if (pjax){
        pjax.loadUrl("/comment/#post-comment");
      }
      else{
        window.location.href = "/comment/#post-comment";
      }
  }
}
//切换页面先初始化一遍，确保开始时是原生状态。所以要加pjax重载。
RemoveFixedComment();