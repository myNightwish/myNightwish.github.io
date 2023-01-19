document.addEventListener('pjax:complete', tonav);
document.addEventListener('DOMContentLoaded', tonav);
//响应pjax
function tonav() {
    document.getElementById("name-container").setAttribute("style", "display:none");
    var position = $(window).scrollTop();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > position) {
            document.getElementById("name-container").setAttribute("style", "");
            document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");
        } else {
            document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
            document.getElementById("name-container").setAttribute("style", "display:none");
        }
        position = scroll;
    });
    //修复没有弄右键菜单的童鞋无法回顶部的问题
    const titleInfo = document.title.split('| Nightwishのblog🧊');
    if(titleInfo.length >= 2) {
        document.getElementById("page-name").innerText = titleInfo[0];
    } 
}

function scrollToTop() {
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document.getElementById("name-container").setAttribute("style", "display:none");
    btf.scrollToDest(0, 500);
}

// 使用hexo-offline-popup以后，如果还开启了pjax，可能遇到页面URL带着长长的后缀
// 解决pwa导致链接后缀带sw-precache问题：重定向浏览器地址
pjax.site_handleResponse = pjax.handleResponse;
pjax.handleResponse = function(responseText, request, href, options){
  Object.defineProperty(request,'responseURL',{
    value: href
  });
  pjax.site_handleResponse(responseText,request,href,options);
}