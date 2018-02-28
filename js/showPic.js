
window.onload = function(){
    showPic();
    fadeIn();
};

function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";
  
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  };

function showPic(){
    var wechat = document.getElementById("wechat") ;
    wechat.onmouseover = function(){      
        var header = document.getElementsByTagName("header")[0];
        var frame = document.createElement("div");
        frame.setAttribute("id","frame");
        var frame_img = document.createElement("img");
        frame_img.setAttribute("class","js-fade fade-in is-paused");
        frame_img.setAttribute("id","wechatgo")
        frame_img.setAttribute("src","pics/qr.png");
        header.appendChild(frame);
        frame.appendChild(frame_img);
        frame_img.style.opacity = "0";
        var el = document.querySelector('.js-fade');
            if (el.classList.contains('is-paused')){
            el.classList.remove('is-paused');
            };
        };
    wechat.onmouseout = function(){
        var frame = document.getElementById("frame");
        frame.remove();
    };
}

