(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),c=r("Bnag");e.exports=function(e){return n(e)||o(e)||a(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},TI0m:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("izhR"),c=r("Wbzz"),s=r("dq5L"),u=r("n/Q7");t.a=function(e){var t=e.tags,r=Object(s.a)(),n=r.tagsPath,i=r.basePath;return o.a.createElement(o.a.Fragment,null,t.map((function(e,t){return o.a.createElement(o.a.Fragment,{key:e.slug},!!t&&", ",o.a.createElement(a.e,{as:c.Link,to:Object(u.a)("/"+i+"/"+n+"/"+e.slug)},e.name))})))}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},X8hv:function(e,t,r){var n=r("sXyB"),o=r("RIqP"),a=r("lSNA"),c=r("8OQS");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r("q1tI"),p=r("7ljp").mdx,l=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=c(e,["scope","children"]),s=l(t),f=i.useMemo((function(){if(!r)return null;var e=u({React:i,mdx:p},s),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return i.createElement(f,u({},a))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},sXyB:function(e,t,r){var n=r("SksO"),o=r("b48C");function a(t,r,c){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},xdpm:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("2A+t"),c=r("izhR"),s=r("A2+M"),u=r("Q3iF"),i=r("TI0m"),p=r("5hlw"),l=["32px","16px","8px","4px"].map((function(e){return"rgba(0, 0, 0, 0.15) 0px "+e+" "+e+" 0px"})),f=function(e){var t=e.data.post;return Object(a.c)(u.a,null,Object(a.c)(p.a,{title:t.title,description:t.description?t.description:t.excerpt,image:t.banner?t.banner.childImageSharp.resize.src:void 0,pathname:t.slug,canonicalUrl:t.canonicalUrl}),Object(a.c)(c.d,{as:"h1",variant:"styles.h1"},t.title),Object(a.c)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},Object(a.c)("time",null,t.date),t.tags&&Object(a.c)(o.a.Fragment,null," — ",Object(a.c)(i.a,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&Object(a.c)("span",null,t.timeToRead," min read")),Object(a.c)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:l.join(", ")},variant:"layout.content"}},Object(a.c)(s.MDXRenderer,null,t.body)))};t.default=function(e){var t=Object.assign({},e);return o.a.createElement(f,t)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-f207f1ac6cd68bd176e7.js.map