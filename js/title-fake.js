<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '(＞﹏＜）看不到我了 · IcePony';
         clearTimeout(titleTime);
     }
     else {
         document.title = '' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 0);
     }
 });