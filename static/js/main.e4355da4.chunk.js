(this["webpackJsonplayout-app"]=this["webpackJsonplayout-app"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),r=c.n(a),n=c(19),o=c.n(n),i=(c(28),c(29),c(4)),l=function(){return Object(s.jsx)("div",{className:"nav-container",children:Object(s.jsxs)("nav",{children:[Object(s.jsx)(i.c,{to:"/",activeStyle:{borderBottom:"0px solid"},children:Object(s.jsx)("p",{className:"title",children:"MAKEUP SHOWROOM"})}),Object(s.jsxs)("ul",{className:"nav-links",children:[Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"/products",children:"Products"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"/about",children:"About"})})]})]})})},j=function(e){var t=e.src,c=e.name,a=e.className;return Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:t,alt:c,className:a})})},u=c.p+"static/media/makeup_yellow_bg.20b4e1f2.jpg",d=c.p+"static/media/makeup_red_bg.0020e6f5.jpg",h=c.p+"static/media/mix.6272145c.jpg";function m(){return Object(s.jsxs)("div",{className:"home-container",children:[Object(s.jsx)("h1",{style:{marginBottom:"2rem"},children:"Meet Makeup Showroom"}),Object(s.jsxs)("div",{className:"home-section",children:[Object(s.jsx)("p",{className:"home-section__text",children:"Browse through a variety of make-up cosmetics and find the best quality foundations, mascaras, shadows and lipsticks for everyday use."}),Object(s.jsx)(i.c,{to:"/products",children:Object(s.jsx)(j,{src:u,name:"makeup_yellow_bg",category:"Makeup no-makeup",className:"home-section__img"})}),Object(s.jsx)("p",{className:"home-section__text",children:"Wake up your creative soul and let yourself go crazy with makeup for an evening or a special occasion. Let only your imagination be the limit. Browse through a variety of make-up cosmetics for art."}),Object(s.jsx)(i.c,{to:"/products",children:Object(s.jsx)(j,{src:d,name:"makeup_red_bg",category:"Makeup for special occasions",className:"home-section__img"})}),Object(s.jsx)("p",{className:"home-section__text",children:"Anything you wish is already here. Click below to browse all makeup products. You will find all categories of cosmetics made for sensitive skin, cruelty-free, without parabens alcohol, silicones, oils, vegan and in eco-friendly packaging. "}),Object(s.jsx)(i.c,{to:"/products",children:Object(s.jsx)(j,{src:h,name:"mix",category:"All makeup products",className:"home-section__img"})})]})]})}var b=c(22),p=c(17),x=c.n(p),g=c(21),O=c(12),f=function(e){var t=e.category,c=e.id,a=e.name,r=e.src;return Object(s.jsxs)("figure",{className:"gallery-item",children:[Object(s.jsx)("img",{className:"gallery-item__img",src:r,alt:a}),Object(s.jsx)("figcaption",{className:"gallery-item__img-caption",children:t})]},c)};function v(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(!0),o=Object(O.a)(n,2),l=o[0],j=o[1],u=Object(a.useState)(),d=Object(O.a)(u,2),h=d[0],m=d[1];Object(a.useEffect)((function(){p(),r([])}),[]);var p=function(){var e=Object(g.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,r(c),j(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),m(e.t0.toString()),j(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),v=Object(b.a)(new Map(null===c||void 0===c?void 0:c.map((function(e){return[e.product_type,e]}))).values()),y=h||0===c.length;return Object(s.jsxs)("div",{className:"gallery-container",children:[Object(s.jsx)("h1",{className:"gallery-title",children:"Products"}),l?Object(s.jsx)("h4",{children:"Loading products..."}):y?Object(s.jsxs)("p",{children:["Problem loading data. ",h," Get back to",Object(s.jsx)(i.b,{to:"/",children:" home page"}),"."]}):v?Object(s.jsx)("div",{className:"gallery",children:v.map((function(e){return Object(s.jsx)(f,{name:e.name,src:e.image_link,category:e.product_type,id:e.id})}))}):null]})}var y=[{source:c.p+"static/media/brushes.2d36def3.jpg",name:"brushes",text:"You'll find more than 15,000 products from approximately 450 beauty brands across all categories and price points. Our core values are diversity, courage and eco-friendliness."},{source:c.p+"static/media/recycle.0ffa58c0.jpg",name:"recycle",text:"We design, develop and manufacture injection moulded reusable packaging. Our products offer includes solutions for every market such as durable beverage crates, pallets, handling trays and bulk-containers. A pioneer in fit-to-purpose loop ready packaging throughout the entire supply chain."},{source:c.p+"static/media/palette.a8ad4325.jpg",name:"palette",text:"To you, brave human, fighter who struggles every day to wear your smile like a flag. To you, the one whose eyes are the colour of strength, the eyes with which you transmit your gaze, the sensitivity that you feel towards life and towards everyone around you. We create cosmetics for you because nobody else knows how to use every battle to continue through the storm. Be creative and wear your make-up proudly."}],w=function(){return Object(s.jsxs)("div",{className:"about-container",children:[Object(s.jsx)("h1",{style:{marginBottom:"2rem"},children:"About Makeup Showroom"}),Object(s.jsx)("div",{className:"about-section",children:y.map((function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j,{src:e.source,name:e.name,className:"about-section__img"}),Object(s.jsx)("p",{className:"about-section__text",children:e.text}),Object(s.jsx)("hr",{})]})}))})]})},k=function(){return Object(s.jsx)("div",{className:"footer-container",children:Object(s.jsxs)("footer",{children:[Object(s.jsx)("p",{className:"footer-title",children:"MAKEUP SHOWROOM"}),Object(s.jsxs)("ul",{className:"footer-links",children:[Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"/products",children:"Products"})}),Object(s.jsx)("li",{children:Object(s.jsx)(i.b,{to:"/about",children:"About"})})]}),Object(s.jsxs)("div",{className:"footer-socials",children:[Object(s.jsx)("a",{id:"facebook",href:"https://www.facebook.com/",children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"})})}),Object(s.jsx)("a",{id:"instagram",href:"https://www.instagram.com/",children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z"})})}),Object(s.jsx)("a",{id:"twitter",href:"https://twitter.com/",children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"})})})]}),Object(s.jsxs)("div",{className:"footer-copyright",children:["Copyright \xa9 ",(new Date).getFullYear()]})]})})},_=c(2);var N=function(){return Object(s.jsx)(i.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{}),Object(s.jsx)("main",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(_.c,{children:[Object(s.jsx)(_.a,{path:"/",exact:!0,component:m}),Object(s.jsx)(_.a,{path:"/products",component:v}),Object(s.jsx)(_.a,{path:"/about",component:w})]})})}),Object(s.jsx)(k,{})]})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),r(e),n(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),z()}},[[36,1,2]]]);
//# sourceMappingURL=main.e4355da4.chunk.js.map