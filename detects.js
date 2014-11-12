(function(){
  'use strict';
  var win = window;
  var nav = navigator;
  var ua = nav.userAgent;

  win.isIE = function(version) {
    var myNav = ua.toLowerCase();
    var v = (myNav.indexOf('msie') !== -1) ? parseInt(myNav.split('msie')[1]) : false;
    if (!version) {
      return v;
    }
    return v===version;
  };

  win._isIpad = ua.match(/iPad/i) !== null;
  win._isIphone = nav.platform.indexOf('iPhone') !== -1;
  win._isIpod = nav.platform.indexOf('iPod') !== -1;
  win._isAndroid = /Android/i.test(ua);
  win._isIEMobile = /IEMobile/i.test(ua);
  win._isTouch = 'ontouchstart' in win || 'onmsgesturechange' in win;
  win._isIE = win.isIE();
  win._isIE8 = win.isIE(8);
  win._isIE9 = win.isIE(9);
  win._isIE9 = win.isIE(9);
  win._isIE10 = win.isIE(10);
  win._isIE11 = win.isIE(11);
  win._isChrome = !!win.chrome;
  win._isFF = ua.toLowerCase().indexOf('firefox') > -1;
  win._isOpera = ua.toLowerCase().indexOf('Opera') > -1;
  win._isSafari = ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1;

})();
