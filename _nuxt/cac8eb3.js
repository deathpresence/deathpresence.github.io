(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11],{297:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("bad06536",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";var o=n(11),r=n(0),l=n(4),c=n(106),f=n(15),d=n(12),v=n(181),m=n(34),x=n(75),h=n(180),_=n(5),C=n(76).f,k=n(26).f,w=n(17).f,y=n(299),N=n(300).trim,I="Number",E=r.Number,S=E.prototype,A=r.TypeError,z=l("".slice),B=l("".charCodeAt),F=function(t){var e=h(t,"number");return"bigint"==typeof e?e:L(e)},L=function(t){var e,n,o,r,l,c,f,code,d=h(t,"number");if(x(d))throw A("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=N(d),43===(e=B(d,0))||45===e){if(88===(n=B(d,2))||120===n)return NaN}else if(48===e){switch(B(d,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(c=(l=z(d,2)).length,f=0;f<c;f++)if((code=B(l,f))<48||code>r)return NaN;return parseInt(l,o)}return+d};if(c(I,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var M,O=function(t){var e=arguments.length<1?0:E(F(t)),n=this;return m(S,n)&&_((function(){y(n)}))?v(Object(e),n,O):e},T=o?C(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;T.length>j;j++)d(E,M=T[j])&&!d(O,M)&&w(O,M,k(E,M));O.prototype=S,S.constructor=O,f(r,I,O,{constructor:!0})}},299:function(t,e,n){var o=n(4);t.exports=o(1..valueOf)},300:function(t,e,n){var o=n(4),r=n(23),l=n(13),c=n(301),f=o("".replace),d="["+c+"]",v=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),x=function(t){return function(e){var n=l(r(e));return 1&t&&(n=f(n,v,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:x(1),end:x(2),trim:x(3)}},301:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},307:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{navLinks:[{to:"#",title:"Live"},{to:"#",title:"About"},{to:"#",title:"Blog"},{to:"#",title:"Our stars"},{to:"#",title:"Contact"}],socialLinks:[{to:"https://t.me/CryptoFanBaza",icon:"/img/icon-telegram.svg"},{to:"https://vk.com/club212485987 ",icon:"/img/icon-vk.svg"},{to:"#",icon:"/img/icon-instagram.svg"},{to:"#",icon:"/img/icon-twitter.svg"}]}}},r=(n(327),n(43)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"relative font-body"},[n("div",{staticClass:"mx-auto max-w-sm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"},[t._m(0),t._v(" "),n("div",{staticClass:"divider-blur relative mt-12 h-1 w-full rounded-full bg-gradient-to-r from-warm-green to-cyan-green before:absolute before:h-1 before:w-full before:bg-gradient-to-r"}),t._v(" "),n("div",{staticClass:"flex items-center justify-center py-12 md:justify-between"},[n("div",{staticClass:"hidden font-display text-base font-bold text-accent sm:text-xl md:block"},t._l(t.navLinks,(function(e,o){return n("a",{key:o,staticClass:"pr-8",attrs:{href:e.to}},[t._v(t._s(e.title))])})),0),t._v(" "),n("div",{staticClass:"md:hidden"},t._l(t.socialLinks,(function(t,e){return n("a",{staticClass:"ml-4 inline-flex h-[48px] w-[48px] first:ml-0",attrs:{href:t.to,target:"_blank"}},[n("img",{staticClass:"p-2 icon",attrs:{src:t.icon,alt:""}})])})),0),t._v(" "),n("div",{staticClass:"hidden md:block"},t._l(t.socialLinks,(function(t,e){return n("GButtonIcon",{key:e,staticClass:"button-icon relative ml-4 inline-block before:absolute before:-z-10 before:h-full before:w-full before:rounded-full before:bg-gradient-to-r before:blur first:ml-0",attrs:{icon:t.icon,to:t.to,size:36}})})),1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-2 gap-x-20 gap-y-10 px-5 text-center text-xs font-medium text-white/75 sm:text-base md:grid-cols-5 md:gap-y-0 md:gap-x-28 md:px-0 md:text-left"},[n("div",{staticClass:"col-span-2 row-span-2"},[n("img",{staticClass:"mx-auto md:mx-0",attrs:{src:"img/logo-footer.svg",alt:"Fanbaza logo",srcset:""}}),t._v(" "),n("p",{staticClass:"pt-6 text-justify text-xs sm:text-lg"},[t._v("\n          Fanbaza - web 3.0 платформа для монетизации популярности звезд и\n          взаимодействия их с фанатами через выпуск персональных токенов.\n          Платформа состоит из лаунчпада для первичного размещения токенов,\n          биржи для покупки и продажи токенов и маркетплейса, где знаменитости\n          предлагают своим фанатам различные формы активности\n        ")])]),t._v(" "),n("div",{staticClass:"pt-0 md:pt-10"},[n("span",{staticClass:"block font-display text-base font-bold text-accent sm:text-xl"},[t._v("Компания")]),t._v(" "),n("a",{staticClass:"block pt-4 transition ease-in-out hover:font-bold hover:text-white",attrs:{href:""}},[t._v("О нас")])]),t._v(" "),n("div",{staticClass:"pt-0 md:pt-10"},[n("span",{staticClass:"block font-display text-base font-bold text-accent sm:text-xl"},[t._v("Ресурсы")]),t._v(" "),n("a",{staticClass:"block pt-4 transition ease-in-out hover:font-bold hover:text-white",attrs:{href:""}},[t._v("Dextools (BSC)")])]),t._v(" "),n("div",{staticClass:"order-last col-span-2 pt-0 md:order-none md:col-span-1 md:row-span-2 md:pt-10"},[n("span",{staticClass:"block font-display text-base font-bold text-accent sm:text-xl"},[t._v("Контакты")]),t._v(" "),n("span",{staticClass:"inline-block pt-4 leading-8"},[t._v("Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta")]),t._v(" "),n("span",{staticClass:"block pt-6"},[t._v("hello@fanbaza.ru")]),t._v(" "),n("span",{staticClass:"block pt-6"},[t._v("+62 (0) 000 0000 00")])]),t._v(" "),n("div",[n("span",{staticClass:"block font-display text-base font-bold text-accent sm:text-xl"},[t._v("Buy $BAZA")]),t._v(" "),n("a",{staticClass:"block pt-4 transition ease-in-out hover:font-bold hover:text-white",attrs:{href:""}},[t._v("P2PB2B")]),t._v(" "),n("a",{staticClass:"block pt-4 transition ease-in-out hover:font-bold hover:text-white",attrs:{href:""}},[t._v("PancakeSwap")])]),t._v(" "),n("div",[n("span",{staticClass:"block font-display text-base font-bold text-accent sm:text-xl"},[t._v("Узнать больше")]),t._v(" "),n("a",{staticClass:"block pt-4 transition ease-in-out hover:font-bold hover:text-white",attrs:{href:""}},[t._v("Whitepaper")]),t._v(" "),n("a",{staticClass:"block pt-4 transition ease-in-out hover:font-bold hover:text-white",attrs:{href:""}},[t._v("BscScan")])])])}],!1,null,"89963a72",null);e.default=component.exports;installComponents(component,{GButtonIcon:n(308).default,Footer:n(307).default})},308:function(t,e,n){"use strict";n.r(e);n(298);var o={props:{icon:{type:String,default:""},to:{type:String,default:""},size:{type:Number,default:36}}},r=n(43),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:"width: "+t.size+"px; height: "+t.size+"px"},[t.to?[n("a",{staticClass:"inline-flex h-full w-full rounded-full bg-gradient-to-r from-warm-green to-cyan-green",attrs:{target:"_blank",href:t.to}},[n("img",{staticClass:"p-2",attrs:{src:t.icon,type:""}})])]:[n("button",{staticClass:"inline-flex h-full w-full rounded-full bg-gradient-to-r from-warm-green to-cyan-green"},[n("img",{staticClass:"p-2",attrs:{src:t.icon,type:""}})])]],2)}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,n){"use strict";n(297)},328:function(t,e,n){var o=n(104)((function(i){return i[1]}));o.push([t.i,'footer[data-v-89963a72]:before{top:0;content:"";background-image:url(/img/bg-footer.svg);background-repeat:no-repeat;background-position-x:center;background-position-y:100px;background-size:1536px;position:absolute;width:100%;height:100%;z-index:-10;margin:0 auto;opacity:.6}.icon[data-v-89963a72]{filter:invert(100%)}.button-icon[data-v-89963a72]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(262.24deg,#95fff2 -6.67%,#8de89c 85.88%);border-radius:500px;filter:blur(10px)}',""]),o.locals={},t.exports=o}}]);