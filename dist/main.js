!function(n){function c(e){if(i[e])return i[e].exports;var l=i[e]={i:e,l:!1,exports:{}};return n[e].call(l.exports,l,l.exports,c),l.l=!0,l.exports}var i={};c.m=n,c.c=i,c.d=function(n,i,e){c.o(n,i)||Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:e})},c.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(i,"a",i),i},c.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _styles = __webpack_require__(1);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function (w) {\n  var d = document,\n      hero = d.querySelector("#hero"),\n      nav = d.querySelector("#nav"),\n      burgerMenu = nav.querySelector("#nav-icon"),\n      navList = nav.querySelector(".nav-list");\n\n  var smoothMenu = function smoothMenu(w) {\n    var heroOff = hero.getBoundingClientRect().top;\n\n    w.scrollY > heroOff ? nav.classList.add("triggered") : nav.classList.remove("triggered");\n  };\n\n  w.addEventListener("scroll", function (e) {\n    smoothMenu(w);\n  });\n\n  burgerMenu.addEventListener("click", function (e) {\n    this.classList.toggle("open");\n    navList.classList.toggle("active");\n  });\n})(window);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJ3IiwiZCIsImRvY3VtZW50IiwiaGVybyIsInF1ZXJ5U2VsZWN0b3IiLCJuYXYiLCJidXJnZXJNZW51IiwibmF2TGlzdCIsInNtb290aE1lbnUiLCJoZXJvT2ZmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidG9nZ2xlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQSxDQUFDLFVBQVNBLENBQVQsRUFBWTtBQUNYLE1BQU1DLElBQUlDLFFBQVY7QUFBQSxNQUNFQyxPQUFPRixFQUFFRyxhQUFGLENBQWdCLE9BQWhCLENBRFQ7QUFBQSxNQUVFQyxNQUFNSixFQUFFRyxhQUFGLENBQWdCLE1BQWhCLENBRlI7QUFBQSxNQUdFRSxhQUFhRCxJQUFJRCxhQUFKLENBQWtCLFdBQWxCLENBSGY7QUFBQSxNQUlFRyxVQUFVRixJQUFJRCxhQUFKLENBQWtCLFdBQWxCLENBSlo7O0FBTUEsTUFBTUksYUFBYSxTQUFiQSxVQUFhLElBQUs7QUFDdEIsUUFBTUMsVUFBVU4sS0FBS08scUJBQUwsR0FBNkJDLEdBQTdDOztBQUVBWCxNQUFFWSxPQUFGLEdBQVlILE9BQVosR0FDSUosSUFBSVEsU0FBSixDQUFjQyxHQUFkLENBQWtCLFdBQWxCLENBREosR0FFSVQsSUFBSVEsU0FBSixDQUFjRSxNQUFkLENBQXFCLFdBQXJCLENBRko7QUFHRCxHQU5EOztBQVFBZixJQUFFZ0IsZ0JBQUYsQ0FBbUIsUUFBbkIsRUFBNkIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3ZDVCxlQUFXUixDQUFYO0FBQ0QsR0FGRDs7QUFJQU0sYUFBV1UsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBU0MsQ0FBVCxFQUFZO0FBQy9DLFNBQUtKLFNBQUwsQ0FBZUssTUFBZixDQUFzQixNQUF0QjtBQUNBWCxZQUFRTSxTQUFSLENBQWtCSyxNQUFsQixDQUF5QixRQUF6QjtBQUNELEdBSEQ7QUFJRCxDQXZCRCxFQXVCR0MsTUF2QkgiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnN0eWxcIjtcclxuXHJcbihmdW5jdGlvbih3KSB7XHJcbiAgY29uc3QgZCA9IGRvY3VtZW50LFxyXG4gICAgaGVybyA9IGQucXVlcnlTZWxlY3RvcihcIiNoZXJvXCIpLFxyXG4gICAgbmF2ID0gZC5xdWVyeVNlbGVjdG9yKFwiI25hdlwiKSxcclxuICAgIGJ1cmdlck1lbnUgPSBuYXYucXVlcnlTZWxlY3RvcihcIiNuYXYtaWNvblwiKSxcclxuICAgIG5hdkxpc3QgPSBuYXYucXVlcnlTZWxlY3RvcihcIi5uYXYtbGlzdFwiKTtcclxuXHJcbiAgY29uc3Qgc21vb3RoTWVudSA9IHcgPT4ge1xyXG4gICAgY29uc3QgaGVyb09mZiA9IGhlcm8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuICAgIHcuc2Nyb2xsWSA+IGhlcm9PZmZcclxuICAgICAgPyBuYXYuY2xhc3NMaXN0LmFkZChcInRyaWdnZXJlZFwiKVxyXG4gICAgICA6IG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwidHJpZ2dlcmVkXCIpO1xyXG4gIH07XHJcblxyXG4gIHcuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBzbW9vdGhNZW51KHcpO1xyXG4gIH0pO1xyXG5cclxuICBidXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgbmF2TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG59KSh3aW5kb3cpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')},function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLnN0eWw/NzBhNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMuc3R5bFxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n")}]);