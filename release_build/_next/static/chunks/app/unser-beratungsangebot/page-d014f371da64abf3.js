(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{7452:function(e,i,t){Promise.resolve().then(t.t.bind(t,1749,23)),Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.bind(t,966)),Promise.resolve().then(t.t.bind(t,5723,23)),Promise.resolve().then(t.t.bind(t,4043,23)),Promise.resolve().then(t.t.bind(t,6529,23)),Promise.resolve().then(t.t.bind(t,1780,23)),Promise.resolve().then(t.bind(t,9279))},6368:function(e,i,t){"use strict";t.d(i,{k:function(){return r}});var _=t(7437);let r=e=>{let{children:i}=e;return(0,_.jsx)("swiper-slide",{children:i})}},4419:function(e,i,t){"use strict";t.d(i,{i:function(){return n}});var _=t(7437),r=t(2265),l=t(9137),s=t(966);t(710);let n=e=>{let{children:i,slimPagination:t,autoHeight:n=!1,nested:a=!1}=e,o=(0,r.useRef)(null),c=(0,r.useRef)(null),d=(0,r.useRef)(null),h=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var e;(0,l.z2)();let i={observeSlideChildren:!0,autoHeight:n,slidesPerView:1,spaceBetween:16,pagination:{type:"fraction",el:h.current},navigation:{nextEl:d.current,prevEl:c.current},nested:a};Object.assign(null==o?void 0:o.current,i),null==o||null===(e=o.current)||void 0===e||e.initialize()},[n,a]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"swiper-container",children:(0,_.jsx)("swiper-container",{init:"false",ref:o,children:i})}),(0,_.jsxs)("div",{className:"swiper__buttons ".concat(t?"swiper__buttons--slim":""),children:[(0,_.jsx)("button",{className:"swiper-button-prev",ref:c,children:(0,_.jsx)(s.Icon,{icon:"arrow-left",size:20})}),(0,_.jsx)("div",{ref:h}),(0,_.jsx)("button",{className:"swiper-button-next",ref:d,children:(0,_.jsx)(s.Icon,{icon:"arrow-right",size:20})})]})]})}},9279:function(e,i,t){"use strict";t.r(i),t.d(i,{ServiceTiles:function(){return v}});var _=t(7437),r=t(4419),l=t(5610),s=t(3149),n=t(966),a=t(3304),o=t.n(a);let c=e=>{let{service:i}=e,{t}=(0,s.$)();return(0,_.jsxs)("div",{className:o()["service-tile"],children:[(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:o()["service-tile__header"],children:[(0,_.jsx)("h3",{className:o()["service-tile__title"],children:i.title}),(0,_.jsx)(n.Icon,{icon:i.icon,size:72})]}),(0,_.jsx)("p",{children:i.description})]}),(0,_.jsx)("table",{className:o()["service-tile__table"],children:(0,_.jsxs)("tbody",{children:[(0,_.jsxs)("tr",{className:o()["service-tile__table-row"],children:[(0,_.jsx)("th",{className:o()["service-tile__table-row-head"],children:t("our_consulting_service.our-services.table_scope")}),(0,_.jsx)("td",{className:o()["service-tile__table-row-data"],children:i.scope})]}),(0,_.jsxs)("tr",{className:o()["service-tile__table-row"],children:[(0,_.jsx)("th",{className:o()["service-tile__table-row-head"],children:t("our_consulting_service.our-services.table_location")}),(0,_.jsx)("td",{className:o()["service-tile__table-row-data"],children:i.location})]}),(0,_.jsxs)("tr",{className:o()["service-tile__table-row"],children:[(0,_.jsx)("th",{className:o()["service-tile__table-row-head"],children:t("our_consulting_service.our-services.table_costs")}),(0,_.jsx)("td",{className:o()["service-tile__table-row-data"],children:i.costs})]})]})})]})};var d=t(2969),h=t.n(d),u=t(6368);let v=()=>{let{t:e}=(0,s.$)(),{isMobile:i}=(0,l.i)(),t=e("our_consulting_service.our-services.tiles",{returnObjects:!0});return(0,_.jsxs)("div",{className:h()["service-tiles"],children:[(0,_.jsx)("h2",{className:h()["service-tiles__title"],children:e("our_consulting_service.our-services.title")}),i?(0,_.jsx)(r.i,{children:t.map(e=>(0,_.jsx)(u.k,{children:(0,_.jsx)(c,{service:e})},e.title))}):(0,_.jsx)("div",{className:h()["service-tiles__services"],children:t.map(e=>(0,_.jsx)(c,{service:e},e.title))}),(0,_.jsxs)("p",{className:h()["service-tiles__text"],children:[e("our_consulting_service.our-services.further_information_1")," ",(0,_.jsx)("a",{href:e("our_consulting_service.our-services.further_information_link_target_1"),target:"_blank",children:e("our_consulting_service.our-services.further_information_link_1")})," ",e("our_consulting_service.our-services.further_information_2")," ",(0,_.jsx)("a",{href:e("our_consulting_service.our-services.further_information_link_target_2"),target:"_blank",children:e("our_consulting_service.our-services.further_information_link_2")})," ",e("our_consulting_service.our-services.further_information_3")]})]})}},5610:function(e,i,t){"use strict";t.d(i,{i:function(){return l}});var _=t(2265),r=t(4237);let l=()=>{let[e,i]=(0,_.useState)(0),[t,l]=(0,_.useState)(0),s=()=>{l(window.innerWidth),i(window.innerHeight)};return(0,_.useEffect)(()=>(window.addEventListener("resize",(0,r.D)(s,100)),s(),()=>window.removeEventListener("resize",(0,r.D)(s,100))),[]),{width:t,height:e,isMobile:t<834}}},4237:function(e,i,t){"use strict";t.d(i,{D:function(){return _}});let _=(e,i)=>{let t;return function(){for(var _=arguments.length,r=Array(_),l=0;l<_;l++)r[l]=arguments[l];clearTimeout(t),t=setTimeout(()=>{clearTimeout(t),e(...r)},i)}}},710:function(){},5723:function(e){e.exports={"headline-1":"intro_headline-1__gDpUa","headline-2":"intro_headline-2__7Aj2z","headline-3":"intro_headline-3__JmqDY","headline-4":"intro_headline-4__dVNG5","headline-5":"intro_headline-5__2OIvx","typo-lead":"intro_typo-lead__q_AUn",intro__content:"intro_intro__content__lTLNr",intro__title:"intro_intro__title__psvKp",intro__lead:"intro_intro__lead__B4OdE","intro--light":"intro_intro--light___A_mm","intro--dark":"intro_intro--dark__2km49","intro--slim":"intro_intro--slim__77_Mj"}},6529:function(e){e.exports={"headline-1":"full-width_headline-1__L5mZK","headline-2":"full-width_headline-2__OAHPr","headline-3":"full-width_headline-3__F6THU","headline-4":"full-width_headline-4__HPz2i","headline-5":"full-width_headline-5__nDuEa","typo-lead":"full-width_typo-lead__bNLdg","full-width":"full-width_full-width__lNIc1","full-width--green":"full-width_full-width--green__6d1qs","full-width--white":"full-width_full-width--white__uqo6s","full-width__inner":"full-width_full-width__inner__qjIUk"}},1780:function(e){e.exports={"headline-1":"one-col_headline-1__v_q5R","headline-2":"one-col_headline-2__y_4bY","headline-3":"one-col_headline-3__vTjuj","headline-4":"one-col_headline-4___bY5D","headline-5":"one-col_headline-5__akCFE","typo-lead":"one-col_typo-lead__7rOvl","one-col":"one-col_one-col__DE2cp","one-col--no-padding-top":"one-col_one-col--no-padding-top__UZD9s","one-col--no-padding-bottom":"one-col_one-col--no-padding-bottom__Cd6p0","one-col--padding-bottom-small":"one-col_one-col--padding-bottom-small__pYpjF"}},4043:function(e){e.exports={"headline-1":"teaser_headline-1__I2g5H","headline-2":"teaser_headline-2__7IlSM","headline-3":"teaser_headline-3__xODDY","headline-4":"teaser_headline-4__m2KXD","headline-5":"teaser_headline-5__uwh0k","typo-lead":"teaser_typo-lead___Omew",teaser:"teaser_teaser__OG7fU","teaser--as-row":"teaser_teaser--as-row__950Rw",teaser__subtitle:"teaser_teaser__subtitle__oRwCi",teaser__image:"teaser_teaser__image__JFvtj","teaser__image-background":"teaser_teaser__image-background__q42tt","teaser__image-copyright":"teaser_teaser__image-copyright__BoXtk",teaser__content:"teaser_teaser__content__Ut1PT",teaser__title:"teaser_teaser__title__8gU7z",teaser__description:"teaser_teaser__description__4VMFz"}},3304:function(e){e.exports={"headline-1":"service-tile_headline-1__ZfsfS","headline-2":"service-tile_headline-2__eZVgZ","headline-3":"service-tile_headline-3__xCFYE","headline-4":"service-tile_headline-4__G_018","headline-5":"service-tile_headline-5__PszNN","typo-lead":"service-tile_typo-lead__EZ7V4","service-tile":"service-tile_service-tile__qM8Gu","service-tile__header":"service-tile_service-tile__header__IaRxi","service-tile__title":"service-tile_service-tile__title__S8lMN","service-tile__table":"service-tile_service-tile__table__NKVkL","service-tile__table-row":"service-tile_service-tile__table-row__Xk2ES","service-tile__table-row-head":"service-tile_service-tile__table-row-head__BbunT","service-tile__table-row-data":"service-tile_service-tile__table-row-data__59UZO"}},2969:function(e){e.exports={"headline-1":"service-tiles_headline-1__2KMmI","headline-2":"service-tiles_headline-2__VQVFL","headline-3":"service-tiles_headline-3__Ldqzl","headline-4":"service-tiles_headline-4__Il1t9","headline-5":"service-tiles_headline-5__wRqf4","typo-lead":"service-tiles_typo-lead__DGIAk","service-tiles__title":"service-tiles_service-tiles__title__hrgbv","service-tiles__services":"service-tiles_service-tiles__services__7PaYE","service-tiles__text":"service-tiles_service-tiles__text__65jrW"}}},function(e){e.O(0,[912,821,966,149,971,69,744],function(){return e(e.s=7452)}),_N_E=e.O()}]);