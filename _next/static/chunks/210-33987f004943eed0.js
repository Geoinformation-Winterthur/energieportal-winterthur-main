(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{333:function(e,t,n){"use strict";n.d(t,{U:function(){return o}});var a=n(7437),i=n(5916),l=n(2486),r=n(966);n(2103);let o=e=>{let{summary:t,children:n}=e;return(0,a.jsx)("div",{className:"accordion",children:n&&(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(l.Z,{expandIcon:(0,a.jsx)(r.Icon,{icon:"chevron-down",color:"red"}),"aria-controls":"panel1-content",id:"panel1-header",children:t}),n]})})}},3395:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var a=n(7437),i=n(3167),l=n(2265),r=n(966),o=n(7915),_=n.n(o);let s=e=>{let{children:t,icon:n,onClick:o,href:s,disabled:c,light:d}=e,[u,h]=(0,l.useState)(!1);return s?(0,a.jsxs)("a",{className:(0,i.Z)(_().button,c?_()["button--disabled"]:"",d?_()["button--light"]:""),href:s,children:[t,n&&(0,a.jsx)(r.Icon,{icon:n,size:24})]}):(0,a.jsxs)("button",{className:(0,i.Z)(_().button,c?_()["button--disabled"]:"",u?_()["button--pressed"]:"",d?_()["button--light"]:""),onClick:o,onTouchStart:()=>h(!0),onTouchEnd:()=>h(!1),children:[t,n&&(0,a.jsx)(r.Icon,{icon:n,size:24})]})}},8270:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});var a=n(7437),i=n(3167),l=n(5723),r=n.n(l);let o=e=>{let{title:t,lead:n,variant:l,slim:o}=e;return(0,a.jsx)("section",{className:(0,i.Z)(r().intro,r()["intro--".concat(l)],o?r()["intro--slim"]:""),children:(0,a.jsxs)("div",{className:r().intro__content,children:[(0,a.jsx)("h1",{className:r().intro__title,children:t}),n&&(0,a.jsx)("p",{className:r().intro__lead,children:n})]})})}},7117:function(e,t,n){"use strict";n.d(t,{o:function(){return o}});var a=n(7437),i=n(3167),l=n(6529),r=n.n(l);let o=e=>{let{children:t,variant:n="green"}=e;return(0,a.jsx)("div",{className:(0,i.Z)(r()["full-width"],r()["full-width--".concat(n)]),children:(0,a.jsx)("div",{className:r()["full-width__inner"],children:t})})}},7571:function(e,t,n){"use strict";n.d(t,{f:function(){return o}});var a=n(7437),i=n(3167),l=n(1780),r=n.n(l);let o=e=>{let{children:t,noPaddingTop:n,noPaddingBottom:l,paddingBottomSmall:o}=e;return(0,a.jsx)("div",{className:(0,i.Z)(r()["one-col"],n?r()["one-col--no-padding-top"]:"",l?r()["one-col--no-padding-bottom"]:"",o?r()["one-col--padding-bottom-small"]:""),children:t})}},572:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7437),i=n(2265),l=n(9482),r=n(7577),o=n.n(r),_=n(966),s=n(3167);let c=e=>{let{closeHandler:t,isOpen:n,children:i}=e;return(0,l.Ni)(),(0,a.jsxs)("div",{className:(0,s.Z)(o().overlay__inner,n?o()["overlay__inner--open"]:o()["overlay__inner--closed"]),children:[(0,a.jsx)("div",{className:o().overlay__header,children:(0,a.jsx)("div",{onClick:t,className:o()["overlay__close-button"],children:(0,a.jsx)(_.Icon,{icon:"close_overlay",color:"light",size:24})})}),(0,a.jsx)("div",{className:o().overlay__content,children:i})]})};function d(e){let{trigger:t,children:n}=e,l=(0,i.useRef)(null),[r,_]=(0,i.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{onClick:()=>{if(_(!0),l){var e;null===(e=l.current)||void 0===e||e.showModal()}},children:t}),(0,a.jsx)("dialog",{ref:l,className:(0,s.Z)(o().overlay,r?o()["overlay--open"]:o()["overlay--closed"]),children:r&&(0,a.jsx)(c,{isOpen:r,closeHandler:()=>{if(_(!1),l){var e;null===(e=l.current)||void 0===e||e.close()}},children:n})})]})}},6798:function(e,t,n){"use strict";n.d(t,{$:function(){return r}});var a=n(7437),i=n(4080),l=n.n(i);let r=e=>{let{title:t,description:n,children:i}=e;return(0,a.jsxs)("div",{className:l().section,children:[(0,a.jsx)("h2",{className:l().section__title,children:t}),n&&(0,a.jsx)("p",{className:l().section__description,children:n}),i]})}},6368:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});var a=n(7437);let i=e=>{let{children:t}=e;return(0,a.jsx)("swiper-slide",{children:t})}},4419:function(e,t,n){"use strict";n.d(t,{i:function(){return o}});var a=n(7437),i=n(2265),l=n(9137),r=n(966);n(710);let o=e=>{let{children:t,slimPagination:n,autoHeight:o=!1}=e,_=(0,i.useRef)(null),s=(0,i.useRef)(null),c=(0,i.useRef)(null),d=(0,i.useRef)(null);return(0,i.useEffect)(()=>{var e;(0,l.z2)();let t={observeSlideChildren:!0,autoHeight:o,slidesPerView:1,spaceBetween:16,pagination:{type:"fraction",el:d.current},navigation:{nextEl:c.current,prevEl:s.current}};Object.assign(null==_?void 0:_.current,t),null==_||null===(e=_.current)||void 0===e||e.initialize()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"swiper-container",children:(0,a.jsx)("swiper-container",{init:"false",ref:_,children:t})}),(0,a.jsxs)("div",{className:"swiper__buttons ".concat(n?"swiper__buttons--slim":""),children:[(0,a.jsx)("button",{className:"swiper-button-prev",ref:s,children:(0,a.jsx)(r.Icon,{icon:"arrow-left",size:20})}),(0,a.jsx)("div",{ref:d}),(0,a.jsx)("button",{className:"swiper-button-next",ref:c,children:(0,a.jsx)(r.Icon,{icon:"arrow-right",size:20})})]})]})}},4540:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7437),i=n(2265),l=n(137),r=n.n(l),o=n(8288),_=n(3167);function s(e){let{children:t}=e,n=(0,i.useContext)(o.R);return(0,a.jsx)("div",{className:(0,_.Z)(r()["tab-list"],r()["tab-list--".concat(n.variant)],n.inOverlay?r()["tab-list--in-overlay"]:""),role:"tablist",children:t})}},3194:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7437),i=n(2265),l=n(8288),r=n(8696),o=n.n(r),_=n(3167);function s(e){let{value:t,children:n}=e,r=(0,i.useContext)(l.R),s=r.value!==t;return(0,a.jsx)("div",{hidden:s,className:(0,_.Z)(o()["tab-panel"],s&&o()["tab-panel--hidden"],o()["tab-panel--".concat(r.variant)],r.inOverlay?o()["tab-panel--in-overlay"]:""),tabIndex:0,id:"".concat(r.name,"-panel-").concat(t),"aria-labelledby":"".concat(r.name,"-tab-").concat(t),role:"tabpanel",children:n})}},3427:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7437),i=n(2265),l=n(8288),r=n(3167),o=n(6872),_=n.n(o),s=n(966);function c(e){let{label:t,value:n,icon:o}=e,c=(0,i.useContext)(l.R),d=c.value===n;return(0,a.jsxs)("button",{onKeyDown:e=>c.handleKeyDown(e),onBlur:e=>c.handleBlur(e),className:(0,r.Z)(_().tab,d&&_()["tab--active"],_()["tab--".concat(c.variant)]),onClick:()=>c.changeTabsValue(n),tabIndex:d?0:-1,"aria-selected":d,id:"".concat(c.name,"-tab-").concat(n),"aria-controls":"".concat(c.name,"-panel-").concat(n),role:"tab",children:[t&&(0,a.jsx)("span",{className:_().tab__inner,children:t}),o&&(0,a.jsx)("span",{className:_().tab__icon,children:(0,a.jsx)(s.Icon,{icon:o,size:40})})]})}},2031:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(7437),i=n(2265),l=n(8288);function r(e){let{children:t,initialValue:n,name:r,variant:o="default",inOverlay:_=!1}=e,s=e=>{h({value:e,name:r,variant:o,inOverlay:_,changeTabsValue:s,handleKeyDown:c,handleBlur:d})},c=e=>{if(e.target instanceof HTMLElement){var t,n;"ArrowRight"===e.key&&(e.target.setAttribute("tabindex","-1"),e.target.nextSibling instanceof HTMLElement?(e.target.nextSibling.setAttribute("tabindex","0"),e.target.nextSibling.focus()):(null===(t=e.target.parentNode)||void 0===t?void 0:t.firstChild)instanceof HTMLElement&&(e.target.parentNode.firstChild.setAttribute("tabindex","0"),e.target.parentNode.firstChild.focus())),"ArrowLeft"===e.key&&(e.target.setAttribute("tabindex","-1"),e.target.previousSibling instanceof HTMLElement?(e.target.previousSibling.setAttribute("tabindex","0"),e.target.previousSibling.focus()):(null===(n=e.target.parentNode)||void 0===n?void 0:n.lastChild)instanceof HTMLElement&&(e.target.parentNode.lastChild.setAttribute("tabindex","0"),e.target.parentNode.lastChild.focus()))}},d=e=>{var t,n,a;e.target instanceof Element&&!(null===(t=e.target.parentNode)||void 0===t?void 0:t.contains(e.relatedTarget))&&(e.target.setAttribute("tabindex","-1"),null===(a=e.target.parentNode)||void 0===a||null===(n=a.querySelector('[aria-selected="true"]'))||void 0===n||n.setAttribute("tabindex","0"))},[u,h]=(0,i.useState)({value:n,variant:o,name:r,inOverlay:_,changeTabsValue:s,handleKeyDown:c,handleBlur:d});return(0,a.jsx)(l.R.Provider,{value:u,children:t})}},8906:function(e,t,n){"use strict";n.d(t,{l:function(){return c}});var a=n(7437),i=n(3167),l=n(703),r=n(8792),o=n(966),_=n(4043),s=n.n(_);let c=e=>{let{title:t,description:n,image:_,image_credits:c,link:d,link_target:u,subtitle:h,asRow:b}=e;return(0,a.jsxs)("div",{className:(0,i.Z)(s().teaser,b?s()["teaser--as-row"]:""),children:[(0,a.jsxs)("div",{className:s().teaser__image,children:[(0,a.jsx)("div",{className:s()["teaser__image-background"],children:c&&(0,a.jsx)("p",{className:s()["teaser__image-copyright"],children:c})}),(0,a.jsx)(l.default,{src:"".concat("/energieportal-winterthur-main","/images/")+_,alt:t,fill:!0,sizes:"(max-width: 833px) 100vw, 50vw"})]}),(0,a.jsxs)("div",{className:s().teaser__content,children:[(0,a.jsx)("h3",{className:s().teaser__title,children:t}),(0,a.jsx)("p",{className:s().teaser__description,children:n}),h&&(0,a.jsx)("h4",{className:s().teaser__subtitle,children:h}),u.startsWith("/")?(0,a.jsxs)(r.default,{href:u,className:"has-icon",children:[d,(0,a.jsx)(o.Icon,{icon:"arrow-right"})]}):(0,a.jsxs)("a",{href:u,target:"_blank",className:"has-icon",children:[d," ",(0,a.jsx)(o.Icon,{icon:"link"})]})]})]})}},8288:function(e,t,n){"use strict";n.d(t,{R:function(){return a}});let a=(0,n(2265).createContext)({value:"0",name:"tabs",variant:"default",inOverlay:!1,changeTabsValue:()=>void 0,handleKeyDown:()=>void 0,handleBlur:()=>void 0})},5610:function(e,t,n){"use strict";n.d(t,{i:function(){return l}});var a=n(2265),i=n(4237);let l=()=>{let[e,t]=(0,a.useState)(0),[n,l]=(0,a.useState)(0),r=()=>{l(window.innerWidth),t(window.innerHeight)};return(0,a.useEffect)(()=>(window.addEventListener("resize",(0,i.D)(r,100)),r(),()=>window.removeEventListener("resize",(0,i.D)(r,100))),[]),{width:n,height:e,isMobile:n<834}}},4237:function(e,t,n){"use strict";n.d(t,{D:function(){return a}});let a=(e,t)=>{let n;return function(){for(var a=arguments.length,i=Array(a),l=0;l<a;l++)i[l]=arguments[l];clearTimeout(n),n=setTimeout(()=>{clearTimeout(n),e(...i)},t)}}},2103:function(){},710:function(){},7915:function(e){e.exports={"headline-1":"button_headline-1__6WPaw","headline-2":"button_headline-2__YKBFn","headline-3":"button_headline-3__YqhnN","headline-4":"button_headline-4__W93Wc","headline-5":"button_headline-5__zws9Z","typo-lead":"button_typo-lead__LOVct",button:"button_button__4MgQk","button--disabled":"button_button--disabled__TdA00","button--pressed":"button_button--pressed__WBWni","button--light":"button_button--light__vplLq"}},5723:function(e){e.exports={"headline-1":"intro_headline-1__gDpUa","headline-2":"intro_headline-2__7Aj2z","headline-3":"intro_headline-3__JmqDY","headline-4":"intro_headline-4__dVNG5","headline-5":"intro_headline-5__2OIvx","typo-lead":"intro_typo-lead__q_AUn",intro__content:"intro_intro__content__lTLNr",intro__title:"intro_intro__title__psvKp",intro__lead:"intro_intro__lead__B4OdE","intro--light":"intro_intro--light___A_mm","intro--dark":"intro_intro--dark__2km49","intro--slim":"intro_intro--slim__77_Mj"}},6529:function(e){e.exports={"headline-1":"full-width_headline-1__L5mZK","headline-2":"full-width_headline-2__OAHPr","headline-3":"full-width_headline-3__F6THU","headline-4":"full-width_headline-4__HPz2i","headline-5":"full-width_headline-5__nDuEa","typo-lead":"full-width_typo-lead__bNLdg","full-width":"full-width_full-width__lNIc1","full-width--green":"full-width_full-width--green__6d1qs","full-width--white":"full-width_full-width--white__uqo6s","full-width__inner":"full-width_full-width__inner__qjIUk"}},1780:function(e){e.exports={"headline-1":"one-col_headline-1__v_q5R","headline-2":"one-col_headline-2__y_4bY","headline-3":"one-col_headline-3__vTjuj","headline-4":"one-col_headline-4___bY5D","headline-5":"one-col_headline-5__akCFE","typo-lead":"one-col_typo-lead__7rOvl","one-col":"one-col_one-col__DE2cp","one-col--no-padding-top":"one-col_one-col--no-padding-top__UZD9s","one-col--no-padding-bottom":"one-col_one-col--no-padding-bottom__Cd6p0","one-col--padding-bottom-small":"one-col_one-col--padding-bottom-small__pYpjF"}},7577:function(e){e.exports={overlay:"overlay_overlay__GhmX5","overlay--closed":"overlay_overlay--closed__p4hEu","overlay--open":"overlay_overlay--open__rvjDA",overlay__inner:"overlay_overlay__inner__teHKx","overlay__inner--open":"overlay_overlay__inner--open__X4_D7",overlay__header:"overlay_overlay__header__KxfiW","overlay__close-button":"overlay_overlay__close-button__sQomN",overlay__content:"overlay_overlay__content__PN6k2"}},4080:function(e){e.exports={"headline-1":"section_headline-1__9YoWz","headline-2":"section_headline-2__1cSt_","headline-3":"section_headline-3__xdwxn","headline-4":"section_headline-4__e4JqM","headline-5":"section_headline-5__HnKXO","typo-lead":"section_typo-lead___3tuo",section:"section_section__WHZBu",section__title:"section_section__title___uGUL",section__description:"section_section__description__64JFC"}},137:function(e){e.exports={"tab-list":"tab-list_tab-list__IXDB6","tab-list--in-overlay":"tab-list_tab-list--in-overlay__U7yv3"}},8696:function(e){e.exports={"tab-panel":"tab-panel_tab-panel__Qp3F6","tab-panel--reduced":"tab-panel_tab-panel--reduced__Hy3DF","tab-panel--in-overlay":"tab-panel_tab-panel--in-overlay__4XXlO"}},6872:function(e){e.exports={"headline-1":"tab_headline-1__5kAbd","headline-2":"tab_headline-2__t9ZlM","headline-3":"tab_headline-3__aRSUF","headline-4":"tab_headline-4__tHXkv","headline-5":"tab_headline-5__SCRrT","typo-lead":"tab_typo-lead__835UA",tab:"tab_tab__vzFhM","tab--active":"tab_tab--active__l7WzW","tab--default":"tab_tab--default__eVrg1","tab--reduced":"tab_tab--reduced__pxliX",tab__inner:"tab_tab__inner__YkefH",tab__icon:"tab_tab__icon__NTn_G"}},4043:function(e){e.exports={"headline-1":"teaser_headline-1__I2g5H","headline-2":"teaser_headline-2__7IlSM","headline-3":"teaser_headline-3__xODDY","headline-4":"teaser_headline-4__m2KXD","headline-5":"teaser_headline-5__uwh0k","typo-lead":"teaser_typo-lead___Omew",teaser:"teaser_teaser__OG7fU","teaser--as-row":"teaser_teaser--as-row__950Rw",teaser__subtitle:"teaser_teaser__subtitle__oRwCi",teaser__image:"teaser_teaser__image__JFvtj","teaser__image-background":"teaser_teaser__image-background__q42tt","teaser__image-copyright":"teaser_teaser__image-copyright__BoXtk",teaser__content:"teaser_teaser__content__Ut1PT",teaser__title:"teaser_teaser__title__8gU7z",teaser__description:"teaser_teaser__description__4VMFz"}}}]);