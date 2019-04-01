<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '(＞﹏＜）我藏起来了 · IcePony';
         clearTimeout(titleTime);
     }
     else {
         document.title = '\^o^/被找到了 · IcePony' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 200);
     }
 });