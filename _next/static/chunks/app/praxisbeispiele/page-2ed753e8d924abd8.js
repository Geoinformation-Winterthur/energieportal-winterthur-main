(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{1275:function(e,t,i){Promise.resolve().then(i.bind(i,8129))},8129:function(e,t,i){"use strict";i.r(t),i.d(t,{CaseStudiesTemplate:function(){return Y}});var a=i(7437),l=i(333),s=i(8270),_=i(7117),r=i(7571),d=i(6798),n=i(4540),c=i(3194),h=i(3427),o=i(2031),v=i(8906),x=i(4419),m=i(6368),u=i(5610),w=i(3149),j=i(3395),p=i(572),b=i(703),g=i(966),N=i(9377),y=i.n(N);let f=e=>{var t,i;let{detail:l}=e,s="".concat("/energieportal-winterthur-main","/");return(0,a.jsx)("div",{className:y()["detail-view"],children:(0,a.jsxs)("div",{className:y()["detail-view__inner"],children:[(0,a.jsx)("h3",{className:y()["detail-view__title"],children:l.title}),(0,a.jsx)(x.i,{slimPagination:!0,autoHeight:!0,nested:!0,children:l.images.map((e,t)=>(0,a.jsx)(m.k,{children:(0,a.jsx)("div",{className:y()["detail-view__img-container"],children:(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:s+e.src,alt:e.alt}),(0,a.jsxs)("figcaption",{className:y()["detail-view__copyright"],children:["Bildquelle: ",e.copyright]})]})})},t))}),(0,a.jsxs)("div",{className:y()["detail-view__content"],children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("table",{className:y()["detail-view__table"],children:(0,a.jsx)("tbody",{children:l.facts.map(e=>(0,a.jsxs)("tr",{className:y()["detail-view__table-row"],children:[(0,a.jsx)("th",{className:y()["detail-view__table-row-head"],children:e.key}),(0,a.jsx)("td",{className:y()["detail-view__table-row-data"],children:e.value})]},e.key))})}),(0,a.jsx)("div",{className:y()["detail-view__links"],children:l.links.map(e=>e.label&&(0,a.jsxs)("a",{href:e.src,target:"_blank",className:"has-icon",children:[e.label," ",(0,a.jsx)(g.Icon,{icon:"arrow-right"})]},e.label))})]}),(0,a.jsxs)("div",{className:y()["detail-view__text"],children:[(0,a.jsx)("p",{children:l.text.pre}),l.text.quote&&(0,a.jsxs)("div",{className:y()["detail-view__quote"],children:[(0,a.jsx)("p",{className:y()["detail-view__phrase"],children:null===(t=l.text.quote)||void 0===t?void 0:t.phrase}),(0,a.jsx)("p",{className:y()["detail-view__author"],children:null===(i=l.text.quote)||void 0===i?void 0:i.author})]}),l.text.post&&(0,a.jsx)("p",{children:l.text.post})]})]})]})})};var k=i(6097),Z=i.n(k);let q=e=>{var t,i,l;let{teaser:s,detail:_}=e;return t=(0,a.jsxs)("div",{className:Z()["teaser-tile"],children:[(0,a.jsxs)("div",{className:Z()["teaser-tile__content"],children:[(0,a.jsx)("div",{className:Z()["teaser-tile__header"],children:(0,a.jsx)("h4",{className:Z()["teaser-tile__title"],children:s.title})}),(0,a.jsx)("div",{className:Z()["teaser-tile__img"],children:(0,a.jsx)(b.default,{src:"".concat("/energieportal-winterthur-main","/")+s.imageSrc,alt:s.imageAlt,fill:!0})}),(0,a.jsxs)("div",{className:Z()["teaser-tile__section"],children:[(0,a.jsx)("h5",{className:Z()["teaser-tile__subtitle"],children:s.subtitle}),s.tag&&(0,a.jsx)("p",{className:Z()["teaser-tile__tag"],children:s.tag})]}),(0,a.jsx)("ul",{className:Z()["teaser-tile__list"],children:s.facts.map((e,t)=>(0,a.jsx)("li",{className:Z()["teaser-tile__list-item"],children:e},t))})]}),(0,a.jsx)(j.z,{children:s.buttonLabel})]}),i=s.title,l=s.subtitle,(0,a.jsx)(p.Z,{trigger:t,title:i+" "+l,isCaseStudy:!0,children:(0,a.jsx)(f,{detail:_})})};var C=i(6575),E=i.n(C),S=i(2265);let A=e=>{let{type:t}=e,{t:i}=(0,w.$)(),{isMobile:l}=(0,u.i)(),[s,_]=(0,S.useState)(!1),r=i("case_studies.".concat(t,".items"),{returnObjects:!0}),d=s?r:r.slice(0,12);return Array.isArray(r)&&(0,a.jsxs)("div",{className:E()["teaser-tiles"],children:[(0,a.jsxs)("div",{className:E()["teaser-tiles__header"],children:[(0,a.jsx)("h3",{className:E()["teaser-tiles__title"],children:i("case_studies.".concat(t,".title"))}),(0,a.jsx)("p",{className:E()["teaser-tiles__lead"],children:i("case_studies.".concat(t,".lead"))})]}),l?(0,a.jsx)(x.i,{children:null==r?void 0:r.map((e,t)=>(0,a.jsx)(m.k,{children:(0,a.jsx)(q,{teaser:e.teaser,detail:e.detail},t)},t))}):(0,a.jsxs)("div",{className:E()["teaser-tiles__content"],children:[(0,a.jsx)("div",{className:E()["teaser-tiles__grid"],children:null==d?void 0:d.map((e,t)=>(0,a.jsx)(q,{teaser:e.teaser,detail:e.detail},t))}),!s&&r.length>12&&(0,a.jsx)("div",{className:E()["teaser-tiles__load-more-btn-container"],children:(0,a.jsx)("div",{className:E()["teaser-tiles__load-more-btn"],children:(0,a.jsx)(j.z,{onClick:()=>_(!0),children:i("case_studies.show_more_button")})})})]})]})};var H=i(6929);let Y=()=>{let{t:e}=(0,w.$)(),t=t=>Array.isArray(e("case_studies.".concat(t,".items"),{returnObjects:!0}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{title:e("case_studies.intro.title"),variant:"dark",slim:!0}),(0,a.jsxs)(r.f,{children:[(0,a.jsx)(v.l,{title:e("case_studies.teaser_title"),description:e("case_studies.teaser_description"),image:e("case_studies.teaser_image"),image_credits:e("case_studies.teaser_image_credits"),link:e("case_studies.teaser_link"),link_target:e("case_studies.teaser_link_target"),subtitle:e("case_studies.teaser_subtitle"),asRow:!0}),(0,a.jsx)(l.U,{summary:e("case_studies.accordion_summary"),children:(0,a.jsx)(H.Z,{children:e("case_studies.accordion_detail")})})]}),(0,a.jsx)(r.f,{noPaddingTop:!0,paddingBottomSmall:!0,children:(0,a.jsx)(d.$,{title:e("case_studies.examples.title"),description:e("case_studies.examples.lead")})}),(0,a.jsxs)(o.Z,{name:"tabs",children:[(0,a.jsxs)(n.Z,{children:[t("heating")&&(0,a.jsx)(h.Z,{label:"Heizung",value:"0"}),t("solar")&&(0,a.jsx)(h.Z,{label:"Solaranlage",value:"1"}),t("refurbishment")&&(0,a.jsx)(h.Z,{label:"Sanierung",value:"2"})]}),(0,a.jsx)(c.Z,{value:"0",children:(0,a.jsx)(_.o,{children:(0,a.jsx)(A,{type:"heating"})})}),(0,a.jsx)(c.Z,{value:"1",children:(0,a.jsx)(_.o,{children:(0,a.jsx)(A,{type:"solar"})})}),(0,a.jsx)(c.Z,{value:"2",children:(0,a.jsx)(_.o,{children:(0,a.jsx)(A,{type:"refurbishment"})})})]})]})}},9377:function(e){e.exports={"headline-1":"detail-view_headline-1__DbFwi","headline-2":"detail-view_headline-2__IUQPg","headline-3":"detail-view_headline-3__p9pjM","headline-4":"detail-view_headline-4__hlJ9Q","headline-5":"detail-view_headline-5__Ilyd0","typo-lead":"detail-view_typo-lead__o7ezI","detail-view":"detail-view_detail-view__UrKxM","detail-view__inner":"detail-view_detail-view__inner___iKV8","detail-view__title":"detail-view_detail-view__title__GHtaH","detail-view__img-container":"detail-view_detail-view__img-container__LaQaA","detail-view__copyright":"detail-view_detail-view__copyright__OawcX","detail-view__content":"detail-view_detail-view__content__2oAJi","detail-view__table":"detail-view_detail-view__table__dZqQp","detail-view__table-row":"detail-view_detail-view__table-row__fybxn","detail-view__table-row-head":"detail-view_detail-view__table-row-head__R3wsZ","detail-view__table-row-data":"detail-view_detail-view__table-row-data__xMs6X","detail-view__links":"detail-view_detail-view__links__LbHwV","detail-view__text":"detail-view_detail-view__text__X0rCH","detail-view__quote":"detail-view_detail-view__quote__7XzDo","detail-view__phrase":"detail-view_detail-view__phrase__4Eu5X","detail-view__author":"detail-view_detail-view__author__oh722"}},6097:function(e){e.exports={"headline-1":"teaser-tile_headline-1__8vpBL","headline-2":"teaser-tile_headline-2__eCSA0","headline-3":"teaser-tile_headline-3__5peYG","headline-4":"teaser-tile_headline-4__M0_El","headline-5":"teaser-tile_headline-5__eED6u","typo-lead":"teaser-tile_typo-lead__HVKGW","teaser-tile":"teaser-tile_teaser-tile__PCZgS","teaser-tile__content":"teaser-tile_teaser-tile__content__zCTy_","teaser-tile__header":"teaser-tile_teaser-tile__header__Yk6b2","teaser-tile__title":"teaser-tile_teaser-tile__title__sm6_z","teaser-tile__img":"teaser-tile_teaser-tile__img__TrHb2","teaser-tile__section":"teaser-tile_teaser-tile__section__l2uIE","teaser-tile__subtitle":"teaser-tile_teaser-tile__subtitle__XKlp5","teaser-tile__tag":"teaser-tile_teaser-tile__tag__peEJq","teaser-tile__list":"teaser-tile_teaser-tile__list__WFwL2","teaser-tile__list-item":"teaser-tile_teaser-tile__list-item__h0UxY"}},6575:function(e){e.exports={"headline-1":"teaser-tiles_headline-1__qNObB","headline-2":"teaser-tiles_headline-2__ouJYY","headline-3":"teaser-tiles_headline-3__YhBO4","headline-4":"teaser-tiles_headline-4__nhrkM","headline-5":"teaser-tiles_headline-5__mm6mr","typo-lead":"teaser-tiles_typo-lead__3YayY","teaser-tiles":"teaser-tiles_teaser-tiles__t3iuL","teaser-tiles__header":"teaser-tiles_teaser-tiles__header__UBMmv","teaser-tiles__title":"teaser-tiles_teaser-tiles__title__l6FJy","teaser-tiles__lead":"teaser-tiles_teaser-tiles__lead__iTlPI","teaser-tiles__content":"teaser-tiles_teaser-tiles__content___oCW8","teaser-tiles__grid":"teaser-tiles_teaser-tiles__grid__4EESd","teaser-tiles__load-more-btn-container":"teaser-tiles_teaser-tiles__load-more-btn-container__sIuw7","teaser-tiles__load-more-btn":"teaser-tiles_teaser-tiles__load-more-btn__U1oin"}}},function(e){e.O(0,[912,821,516,966,149,210,971,69,744],function(){return e(e.s=1275)}),_N_E=e.O()}]);