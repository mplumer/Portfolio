/*! For license information please see 6fe911be3cd3411714bb818545f000b88fbee285-67b40d284577a06571eb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2TiG":function(e,t,a){e.exports=a.p+"static/Profile (1)-d5aee86c163b1cd47edd525333467dc4.pdf"},"7W2i":function(e,t,a){var r=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,l=r(a("PJYZ")),i=r(a("VbXa")),o=r(a("8OQS")),s=r(a("pVnL")),c=r(a("q1tI")),u=r(a("17x9")),d=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),a=m(t);return h[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,y=E&&window.IntersectionObserver,b=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:l}),a&&c.default.createElement("source",{media:n,srcSet:a,sizes:l}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(l?'sizes="'+l+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},P=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+c+i+o+a+r+t+l+n+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},_=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,l=e.spreadProps,i=e.ariaHidden,o=c.default.createElement(I,(0,s.default)({ref:t,src:a},l,{ariaHidden:i}));return r.length>1?c.default.createElement("picture",null,n(r),o):o})),I=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,l=e.style,i=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:i,onError:u,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))}));I.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)(a)),a.handleRef=a.handleRef.bind((0,l.default)(a)),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,l=void 0===n?{}:n,i=e.imgStyle,o=void 0===i?{}:i,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,g=e.fixed,v=e.backgroundColor,E=e.durationFadeIn,y=e.Tag,b=e.itemProp,S=e.loading,x=e.draggable,O=h||g;if(!O)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,s.default)({opacity:L?1:0,transition:C?"opacity "+E+"ms":"none"},o),j="boolean"==typeof v?"lightgray":v,R={transitionDelay:E+"ms"},V=(0,s.default)({opacity:this.state.imgLoaded?0:1},C&&R,o,f),q={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:b},H=this.state.isHydrated?p(O):O[0];if(h)return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),j&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&R)}),H.base64&&c.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:q,imageVariants:O,generateSources:k}),H.tracedSVG&&c.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:q,imageVariants:O,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,w(O),c.default.createElement(I,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,s.default)({alt:a,title:t,loading:S},H,{imageVariants:O}))}}));if(g){var z=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},l);return"inherit"===l.display&&delete z.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},j&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:j,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},C&&R)}),H.base64&&c.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:q,imageVariants:O,generateSources:k}),H.tracedSVG&&c.default.createElement(_,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:q,imageVariants:O,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,w(O),c.default.createElement(I,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:P((0,s.default)({alt:a,title:t,loading:S},H,{imageVariants:O}))}}))}return null},t}(c.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),T=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function j(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}L.propTypes={resolutions:C,sizes:T,fixed:j(u.default.oneOfType([C,u.default.arrayOf(C)])),fluid:j(u.default.oneOfType([T,u.default.arrayOf(T)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var R=L;t.default=R},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),i=a("9eSz"),o=a.n(i),s=a("YIkO"),c=a.n(s),u=a("2TiG"),d=a.n(u),f=function(){var e=Object(l.useStaticQuery)("3072600464"),t=Object(r.useState)(!1),a=t[0],i=t[1];Object(r.useEffect)((function(){window.addEventListener("scroll",(function(){i(window.scrollY>10)}))}),[]);var s=e.file.childImageSharp.fixed;return n.a.createElement(r.Fragment,null,n.a.createElement("header",{className:a?"rn-header header-default header-transparent scrolled d-none d-xl-block":"rn-header header-default header-transparent d-none d-xl-block"},n.a.createElement("div",{className:"header-inner"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("div",{className:"header-left"},n.a.createElement("div",{className:"logo"},n.a.createElement(l.Link,{to:"/"},n.a.createElement(o.a,{fixed:s}))))),n.a.createElement("div",{className:"col-lg-9"},n.a.createElement("div",{className:"menu_wrapper"},n.a.createElement(c.a,{className:"mainmenuwrapper",items:["home","about","portfolio","contact","resume"],currentClassName:"is-current",offset:-200},n.a.createElement("li",null,n.a.createElement("a",{className:"menu-hover-link",href:"/#home"},n.a.createElement("span",{className:"hover-item"},n.a.createElement("span",{"data-text":"Home"},"Home")))),n.a.createElement("li",null,n.a.createElement("a",{className:"menu-hover-link",href:"/#about"},n.a.createElement("span",{className:"hover-item"},n.a.createElement("span",{"data-text":"About"},"About")))),n.a.createElement("li",null,n.a.createElement("a",{className:"menu-hover-link",href:"/#portfolio"},n.a.createElement("span",{className:"hover-item"},n.a.createElement("span",{"data-text":"Portfolio"},"Portfolio")))),n.a.createElement("li",null,n.a.createElement("a",{className:"menu-hover-link",href:"/#contact"},n.a.createElement("span",{className:"hover-item"},n.a.createElement("span",{"data-text":"Contact"},"Contact")))),n.a.createElement("li",null,n.a.createElement("a",{className:"menu-hover-link",href:d.a},n.a.createElement("span",{className:"hover-item"},n.a.createElement("span",{"data-text":"Profile"},"Profile"))))))))))))};f.defaultProps={siteTitle:""};var m=f,p=a("f+3g"),h=function(){var e=Object(l.useStaticQuery)("1387849164"),t=Object(r.useState)(!1),a=t[0],i=t[1];Object(r.useEffect)((function(){a||(document.querySelector(".trigger-popup-menu").classList.remove("overlay-wrapper-open"),document.querySelector(".hambergur-menu").classList.remove("hambergur-menu-open"))}));var s=function(){i((function(e){return!e})),document.querySelector(".trigger-popup-menu").classList.toggle("overlay-wrapper-open"),document.querySelector(".hambergur-menu").classList.toggle("hambergur-menu-open")},u=Object(r.useState)(!1),d=u[0],f=u[1];Object(r.useEffect)((function(){window.addEventListener("scroll",(function(){f(window.scrollY>10)}))}),[]);var m=e.file.childImageSharp.fixed;return n.a.createElement(r.Fragment,null,n.a.createElement("header",{className:d?"rn-header header-default header-transparent d-block d-xl-none scrolled":"rn-header header-default header-transparent d-block d-xl-none"},n.a.createElement("div",{className:"header-inner"},n.a.createElement("div",{className:"header-left"},n.a.createElement("div",{className:"logo"},n.a.createElement(l.Link,{to:"/"},n.a.createElement(o.a,{fixed:m})))),n.a.createElement("div",{className:"header-right",onClick:s},n.a.createElement("div",{className:"hambergur-menu"},n.a.createElement("div",{className:"hamburger-box"},n.a.createElement("div",{className:"hamburger-inner"})))))),n.a.createElement("div",{className:"trigger-popup-menu"},n.a.createElement("div",{className:"menu_full"},n.a.createElement("div",{className:"menu_wrapper"},n.a.createElement(c.a,{className:"popup_mainmenu",items:["home","about","portfolio","news","contact"],currentClassName:"is-current",offset:-200},n.a.createElement("li",null,n.a.createElement("a",{className:"menu-hover-link",href:"/#home",onClick:s},n.a.createElement("span",{className:"hover-item"},n.a.createElement("span",{"data-text":"Home"},"Home")))),n.a.createElement("li",null,n.a.createElement("a",{className:"menu-hover-link",href:"/#about",onClick:s},n.a.createElement("span",{className:"hover-item"},n.a.createElement("span",{"data-text":"About"},"About")))),n.a.createElement("li",null,n.a.createElement("a",{className:"menu-hover-link",href:"/#portfolio",onClick:s},n.a.createElement("span",{className:"hover-item"},n.a.createElement("span",{"data-text":"Portfolio"},"Portfolio")))),n.a.createElement("li",null,n.a.createElement("a",{className:"menu-hover-link",href:"/#news",onClick:s},n.a.createElement("span",{className:"hover-item"},n.a.createElement("span",{"data-text":"News"},"News")))),n.a.createElement("li",null,n.a.createElement("a",{className:"menu-hover-link",href:"/#contact",onClick:s},n.a.createElement("span",{className:"hover-item"},n.a.createElement("span",{"data-text":"Contact"},"Contact")))))),n.a.createElement("div",{className:"trigger_closer",onClick:s},n.a.createElement("span",{className:"text"},"Close"),n.a.createElement("span",{className:"icon"})))))};h.defaultProps={siteTitle:""};var g=h,v=a("ma3e"),E=function(e){var t=e.showBelow,a=Object(r.useState)(!t),l=a[0],i=a[1],o=function(){window.pageYOffset>t?l||i(!0):l&&i(!1)};Object(r.useEffect)((function(){if(t)return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o)}}));return n.a.createElement("footer",{className:"rn-footer-area bg-color-black pt--90 pb--60"},n.a.createElement("div",{className:"footer-wrapper"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30 wow fadeInDown","data-wow-delay":"200ms","data-wow-duration":"0.1s"},n.a.createElement("div",{className:"ft-info"},n.a.createElement("p",null,"Maxwell Plumer ",n.a.createElement("br",null),"Full Stack Web Developer"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30 wow fadeInDown","data-wow-delay":"200ms","data-wow-duration":"0.2s"},n.a.createElement("div",{className:"ft-info"},n.a.createElement("p",null,"Sam Keen Rd, ",n.a.createElement("br",null)," Lake Wales, FL"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30 wow fadeInDown","data-wow-delay":"200ms","data-wow-duration":"0.4s"},n.a.createElement("div",{className:"ft-info"},n.a.createElement("p",null,"maxplumer12@gmail.com",n.a.createElement("br",null),"(813)613-8463"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30 wow fadeInDown","data-wow-delay":"200ms","data-wow-duration":"0.6s"},n.a.createElement("div",{className:"ft-info"},n.a.createElement("ul",{className:"social-share"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/mplumer"},n.a.createElement(v.a,null))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://linkedin.com/in/maxplumer"},n.a.createElement(v.b,null))))))))),n.a.createElement("div",{className:"back-to-top"},n.a.createElement("div",{className:"backtop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},n.a.createElement("span",{className:"top"}))))};a("WQPq"),t.a=function(e){var t=e.children;return n.a.createElement("div",{className:"main-wrapper active-dark"},n.a.createElement(p.a,null),n.a.createElement(m,null),n.a.createElement(g,null),n.a.createElement("main",null,t),n.a.createElement(E,null))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){var t,a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var n=+new Date;!!t&&n<t+r?(clearTimeout(a),a=setTimeout((function(){t=n,e()}),r)):(t=n,e())}};t.default=r},Ijbi:function(e,t,a){var r=a("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("q1tI"),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(n),i=function(){return(i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};function s(e){return function(t){return r.createElement(c,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,i({key:a},t.attr),e(t.child))}))}(e.child))}}function c(e){var t=function(t){var a,n=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var l=e.attr,s=e.title,c=o(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,c,{className:a,style:i({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},RIqP:function(e,t,a){var r=a("Ijbi"),n=a("EbDI"),l=a("ZhPi"),i=a("Bnag");e.exports=function(e){return r(e)||n(e)||l(e)||i()}},TSYQ:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===l)for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}},WQPq:function(e,t,a){},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}},YIkO:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("pVnL")),l=r(a("lSNA")),i=r(a("RIqP")),o=r(a("lwsE")),s=r(a("a1gu")),c=r(a("Nsbk")),u=r(a("PJYZ")),d=r(a("W8MJ")),f=r(a("7W2i")),m=r(a("17x9")),p=r(a("q1tI")),h=r(a("TSYQ")),g=r(a("Fxm3"));var v=function(e){function t(e){var a;return(0,o.default)(this,t),(a=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,u.default)(a)),a}return(0,f.default)(t,e),(0,d.default)(t,null,[{key:"propTypes",get:function(){return{items:m.default.arrayOf(m.default.string).isRequired,currentClassName:m.default.string.isRequired,scrolledPastClassName:m.default.string,style:m.default.object,componentTag:m.default.oneOfType([m.default.string,m.default.elementType]),offset:m.default.number,rootEl:m.default.string,onUpdate:m.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,d.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],r=0,n=e.length;r<n;r++)a[r]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],r=[],n=e||this.state.targetItems,l=!1,o=0,s=n.length;o<s;o++){var c=n[o],u=!l&&this._isInView(c);u?(l=!0,t.push(c)):a.push(c);var d=o===s-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&d&&f&&(a.pop(),a.push.apply(a,(0,i.default)(t)),t=[c],r=this._fillArray(r,!1),u=!0),r.push(u)}return{inView:t,outView:a,viewStatusList:r,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(r)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,r=a.rootEl,n=a.offset;r&&(t=document.querySelector(r).getBoundingClientRect());var l=e.getBoundingClientRect(),i=r?t.height:window.innerHeight,o=this._getScrollDimension().scrollTop,s=o+i,c=r?l.top+o-t.top+n:l.top+o+n,u=c+e.offsetHeight;return c<s&&u>o}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,r=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=r}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),r=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(r)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,g.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,r=a.children,i=a.className,o=a.scrolledPastClassName,s=a.style,c=0,u=p.default.Children.map(r,(function(t,a){var r;if(!t)return null;var i=t.type,s=o&&e.state.isScrolledPast[a],u=(0,h.default)((r={},(0,l.default)(r,"".concat(t.props.className),t.props.className),(0,l.default)(r,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,l.default)(r,"".concat(e.props.scrolledPastClassName),s),r));return p.default.createElement(i,(0,n.default)({},t.props,{className:u,key:c++}),t.props.children)})),d=(0,h.default)((0,l.default)({},"".concat(i),i));return p.default.createElement(t,{className:d,style:s},u)}}]),t}(p.default.Component);t.default=v},ZhPi:function(e,t,a){var r=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}},a1gu:function(e,t,a){var r=a("cDf5"),n=a("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?n(e):t}},"f+3g":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=n.a.lazy((function(){return a.e(18).then(a.bind(null,"+wec"))}));t.a=function(){var e="undefined"==typeof window;return n.a.createElement(n.a.Fragment,null,!e&&n.a.createElement(n.a.Suspense,{fallback:n.a.createElement("div",null)},n.a.createElement(l,null)))}},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}}]);
//# sourceMappingURL=6fe911be3cd3411714bb818545f000b88fbee285-67b40d284577a06571eb.js.map