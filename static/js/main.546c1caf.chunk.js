(this["webpackJsonpcovid-generator"]=this["webpackJsonpcovid-generator"]||[]).push([[0],{28:function(n,t,e){},44:function(n,t,e){"use strict";e.r(t);var i=e(0),r=e(1),a=e.n(r),o=e(17),c=e.n(o),d=(e(28),e(8)),x=e(2),s=e(3),l=e.p+"static/media/data.b35c3d44.tsv",u=null,h=new XMLHttpRequest;function m(n){for(var t=n.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),i=[n[e],n[t]];n[t]=i[0],n[e]=i[1]}}function p(n,t,e){for(var i=(t+=1)-n,r=[],a=n;a<t;a++)r=r.concat(e[a]);m(r);for(var o=[],c=0;c<i;c++){var d=Math.floor(Math.random()*(r.length-1));o.push(r.splice(d,1))}return o}function j(n,t){var e=t[n],i=e.length;return m(e),e[Math.floor(Math.random()*(i-1))]}function b(){var n={},t=p(0,3,u),e=Object(d.a)(t,4);n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=j(4,u),n[5]=j(5,u),n[6]=function(){var n=Math.random();return n<=.25?"zwolnione z kwarantanny":(n=Math.random(),"zobowi\u0105zane do odbycia kwarantanny przez "+(7+Math.floor(7*n))+" dni")}(),n[7]=j(7,u);var i=p(8,11,u),r=Object(d.a)(i,4);n[8]=r[0],n[9]=r[1],n[10]=r[2],n[11]=r[3];var a,o,c=p(12,16,u),x=Object(d.a)(c,5);n[12]=x[0],n[13]=x[1],n[14]=x[2],n[15]=x[3],n[16]=x[4],n[17]=j(17,u),n[18]=j(18,u),n[19]=(a=n[18],o=j(19,u),a.includes("zamkni\u0119te")?".":", pod warunkiem ".concat(o,".")),n[20]=j(20,u),n[21]=j(21,u),n[22]=j(22,u),n[23]=j(23,u),n[24]=j(24,u),n[25]=j(25,u);var s,l=p(26,27,u),h=Object(d.a)(l,2);return n[26]=h[0],n[27]=h[1],n[28]=j(28,u),n[29]=j(29,u),n[30]=j(30,u),n[31]=j(31,u),n[32]=(s=n[31],Math.floor(60*Number(s)/100)),n.meta={},n.meta[7]=(Number(n[7])%10).between(2,4)?["mog\u0105","osoby"]:["mo\u017ce","os\xf3b"],n}h.open("GET",l,!0),h.onload=function(){if(4===h.readyState)if(200===h.status){u=h.responseText.replace(/[\r]+/g,"").split("\n").filter((function(n){return n}));for(var n=0;n<u.length;n++)u[n]=u[n].split("\t").filter((function(n){return n}))}else console.error(h.statusText)},h.send(null),Number.prototype.between=function(n,t){return n<=this&&this<=t};var f=e(9),w=e.n(f),g={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:2e3,xxxl:3e3},O=e(18),z=e(46),v=e(47),k=e(48),y=e(49),M=e(50),F=e(51),S=e(52),E=e(53),B=e(54),N=e(55);function I(){var n=Object(x.a)(["\n    display: flex;\n    & > button {\n        margin-right: 5px;\n    }\n"]);return I=function(){return n},n}var P=s.a.div(I()),T="https://koronawirus.lol",W=function(n){return Object(O.a)(n),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(P,{children:[Object(i.jsx)(z.a,{url:T,children:Object(i.jsx)(v.a,{size:32,round:!0})}),Object(i.jsx)(k.a,{url:T,children:Object(i.jsx)(y.a,{size:32,round:!0})}),Object(i.jsx)(M.a,{url:T,children:Object(i.jsx)(F.a,{size:32,round:!0})}),Object(i.jsx)(S.a,{url:T,children:Object(i.jsx)(E.a,{size:32,round:!0})}),Object(i.jsx)(B.a,{url:T,children:Object(i.jsx)(N.a,{size:32,round:!0})})]})})};function C(){var n=Object(x.a)(["\n  display: inline-block;\n  width: 15px;\n  height: 1em;\n  background-image: url('like.svg');\n  background-position: center;\n  background-repeat: no-repeat;\n"]);return C=function(){return n},n}function G(){var n=Object(x.a)(["\n  display: inline-block;\n  width: 15px;\n  height: 1em;\n  background-image: url('github.svg');\n  background-position: center;\n  background-repeat: no-repeat;\n"]);return G=function(){return n},n}function L(){var n=Object(x.a)(["\n  width: 95vw;\n  font-size: 11px;\n  font-style: italic;\n  @media (min-width: ","px) {\n    font-size: 11px;\n    width: 600px;\n  }\n  @media (min-width: ","px) {\n    width: 750px;\n  }\n  @media (min-width: ","px) {\n    width: 900px;\n    font-size: 14px;\n  }\n  @media (min-width: ","px) {\n    width: 1400px;\n    font-size: 20px;\n  }\n"]);return L=function(){return n},n}function R(){var n=Object(x.a)(["\n  margin-top: 1rem;\n  padding: 0.3rem;\n  background-color: white;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-top: solid rgb(213, 35, 63) .1875rem;\n  clear: both;\n  width: 100vw;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return R=function(){return n},n}function D(){var n=Object(x.a)(["\n  background-color: white;\n  color: rgb(213, 35, 63);\n  border: 3px solid;\n  border-radius: 5px;\n  border-color: rgb(213, 35, 63);\n  font-size: 16px;\n  font-weight: bold;\n  padding: 0 1em;\n  min-height: 30px;\n  margin: 10px;\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    background-color: rgb(213, 35, 63);\n    color: white;\n    // border-radius: 10px;\n  }\n  @media (min-width: ","px) {\n    padding: 0 2em;\n  }\n  @media (min-width: ","px) {\n    font-size: 20px;\n    min-height: 40px;\n  }\n  @media (min-width: ","px) {\n    font-size: 30px;\n    min-height: 60px;\n  }\n"]);return D=function(){return n},n}function J(){var n=Object(x.a)(["\n  margin: 10px 0;\n  @media (min-width: ","px) {\n    margin: 16px 0;\n  }\n  @media (min-width: ","px) {\n    margin: 20px 0;\n  }\n  @media (min-width: ","px) {\n    margin: 28px 0;\n  }\n"]);return J=function(){return n},n}function H(){var n=Object(x.a)(["\n  list-style-position: inside;\n  padding-left: 0;\n  margin: 0;\n  @media (min-width: ","px) {\n    padding-left: 1.5em;\n    list-style-position: outside;\n  }\n  @media (min-width: ","px) {\n    font-size: 20px;\n  }\n  @media (min-width: ","px) {\n    font-size: 30px;\n  }\n"]);return H=function(){return n},n}function q(){var n=Object(x.a)(["\n  font-size: 18px;\n  width: 100%;\n  margin-top: 20px;\n  @media (min-width: ","px) {\n    margin-top: 30px;\n    margin-bottom: 15px;\n  }\n  @media (min-width: ","px) {\n    margin-top: 45px;\n    font-size: 24px;\n  }\n  @media (min-width: ","px) {\n    margin-top: 60px;\n    font-size: 36px;\n  }\n"]);return q=function(){return n},n}function K(){var n=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1 0 auto;\n  width: 90vw;\n  @media (min-width: ","px) {\n    width: 600px;\n  }\n  @media (min-width: ","px) {\n    width: 750px;\n  }\n  @media (min-width: ","px) {\n    width: 900px;\n  }\n  @media (min-width: ","px) {\n    width: 1400px;\n  }\n"]);return K=function(){return n},n}function U(){var n=Object(x.a)(["\n  margin: 6px;\n  font-size: 16px;\n  @media (min-width: ","px) {\n    font-size: 20px;\n  }\n  @media (min-width: ","px) {\n    font-size: 28px;\n  }\n  @media (min-width: ","px) {\n    font-size: 40px;\n  }\n"]);return U=function(){return n},n}function V(){var n=Object(x.a)(["\n  margin: 6px;\n  font-size: 24px;\n  max-width: 300px;\n  @media (min-width: ","px) {\n    max-width: 90vw;\n    font-size: 36px;\n  }\n  @media (min-width: ","px) {\n    font-size: 42px;\n  }\n  @media (min-width: ","px) {\n    font-size: 56px;\n  }\n  @media (min-width: ","px) {\n    font-size: 72px;\n  }\n"]);return V=function(){return n},n}function Z(){var n=Object(x.a)(["\n  position: absolute;\n  color: white;\n  font-weight: bold;\n  max-width: 100vw;\n  width: 100vw;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n"]);return Z=function(){return n},n}function X(){var n=Object(x.a)(["\n  height: 100%;\n"]);return X=function(){return n},n}function A(){var n=Object(x.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  // justify-content: center;\n  align-items: center;\n  height: 150px;\n  @media (min-width: ","px) {\n    height: 200px;\n  }\n  @media (min-width: ","px) {\n    height: 230px;\n  }\n  @media (min-width: ","px) {\n    height: 300px;\n  }\n  @media (min-width: ","px) {\n    height: 400px;\n  }\n"]);return A=function(){return n},n}function Q(){var n=Object(x.a)(["\n  font-weight: bold;\n  font-size: 14px;\n  width: 95vw;\n  @media (min-width: ","px) {\n    width: 600px;\n  }\n  @media (min-width: ","px) {\n    width: 750px;\n  }\n  @media (min-width: ","px) {\n    width: 900px;\n    font-size: 22px;\n  }\n  @media (min-width: ","px) {\n    width: 1400px;\n    font-size: 32px;\n  }\n"]);return Q=function(){return n},n}function Y(){var n=Object(x.a)(["\n  background-color: rgb(255, 198, 5);\n  width: 100vw;\n  min-height: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  @media (min-width: ","px) {\n    min-height: 30px;\n  }\n  @media (min-width: ","px) {\n    min-height: 30px;\n  }\n  @media (min-width: ","px) {\n    min-height: 40px;\n  }\n  @media (min-width: ","px) {\n    min-height: 60px;\n  }\n"]);return Y=function(){return n},n}function $(){var n=Object(x.a)(['\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: "Open Sans", sans-serif;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n']);return $=function(){return n},n}var _=s.a.div($()),nn=s.a.div(Y(),g.md,g.lg,g.xxl,g.xxxl),tn=s.a.div(Q(),g.md,g.lg,g.xxl,g.xxxl),en=s.a.div(A(),g.md,g.xl,g.xxl,g.xxxl),rn=s.a.img(X()),an=s.a.div(Z()),on=s.a.div(V(),g.md,g.xl,g.xxl,g.xxxl),cn=s.a.p(U(),g.md,g.xxl,g.xxxl),dn=s.a.div(K(),g.md,g.lg,g.xxl,g.xxxl),xn=s.a.h2(q(),g.md,g.xxl,g.xxxl),sn=s.a.ul(H(),g.md,g.xxl,g.xxxl),ln=s.a.li(J(),g.lg,g.xxl,g.xxxl),un=s.a.button(D(),g.md,g.xxl,g.xxxl),hn=s.a.div(R()),mn=s.a.footer(L(),g.md,g.lg,g.xxl,g.xxxl),pn=s.a.span(G()),jn=s.a.span(C());function bn(n){for(var t,e,i=n.length;0!==i;)e=Math.floor(Math.random()*i),t=n[i-=1],n[i]=n[e],n[e]=t;return n}var fn=function(n){var t=Object(r.useState)(null),e=Object(d.a)(t,2),a=e[0],o=e[1],c=Object(r.useState)("GENERUJ"),x=Object(d.a)(c,2),s=x[0],l=x[1],u=[function(n){return Object(i.jsxs)(ln,{children:["Wszystkie osoby przybywaj\u0105ce do Polski z ",n[4]," ",n[5]," s\u0105 ",n[6],"."]})},function(n){return Object(i.jsxs)(ln,{children:["Restauracje i bary s\u0105 ",n[18],n[19]]})},function(n){return Object(i.jsxs)(ln,{children:["\u017b\u0142obki i przedszkola s\u0105 ",n[25],"."]})},function(n){return Object(i.jsxs)(ln,{children:["W godzinach ",n[29]," zakupy mog\u0105 robi\u0107 tylko osoby ",n[30],"."]})},function(n){return Object(i.jsxs)(ln,{children:["W autobusach mo\u017ce by\u0107 zaj\u0119te max. ",n[32]," miejsc siedz\u0105cych (lub ",n[31],"% wszystkich miejsc)."]})}],h=[function(n){return Object(i.jsxs)(ln,{children:["Hotele dost\u0119pne s\u0105 tylko dla ",n[0],", ",n[1],", ",n[2]," oraz ",n[3],"."]})},function(n){return Object(i.jsxs)(ln,{children:["W zgromadzeniach ",n.meta[7][0]," uczestniczy\u0107 maksymalnie ",n[7]," ",n.meta[7][1]," (nie dotyczy ",n[8]," oraz ",n[9],")."]})},function(n){return Object(i.jsxs)(ln,{children:["Obowi\u0105zuje zakaz organizacji ",n[10]," oraz ",n[11],"."]})},function(n){return Object(i.jsxs)(ln,{children:["W ",n[26]," i ",n[27]," mo\u017ce przebywa\u0107 maksymalnie jedna osoba na ",n[28]," m kw. pomieszczenia."]})},function(n){return Object(i.jsxs)(ln,{children:["Nauka zdalna w klasach ",n[20]," szk\xf3\u0142 podstawowych, ",n[21],", oraz ",n[22],", za wyj\u0105tkiem ",n[23]," (chyba, \u017ce ",n[24],")."]})},function(n){return Object(i.jsxs)(ln,{children:["Zamkni\u0119te s\u0105 ",n[12],", ",n[13]," i ",n[14],". Otwarte zostan\u0105 ",n[15]," oraz ",n[16],", ale wy\u0142\u0105cznie w ",n[17],"."]})}],m=(new Date).toLocaleDateString("pl-PL",{day:"numeric",month:"long",year:"numeric"}),p=bn(u),j=[].concat(h,[p[0],p[1]]);return n.breakpoints,n.currentBreakpoint,Object(i.jsxs)(_,{children:[Object(i.jsx)(nn,{id:"topBar",children:Object(i.jsx)(tn,{children:"Koronawirus: wa\u017cne informacje"})}),Object(i.jsxs)(en,{children:[Object(i.jsx)(rn,{src:"logo.jpg"}),Object(i.jsxs)(an,{children:[Object(i.jsx)(on,{children:"Generator obostrze\u0144 COVID-19"}),Object(i.jsx)(f.Media,{children:function(n){var t=n.breakpoints,e=n.currentBreakpoint;return console.log(t[e]),t[e]>=t.sm?Object(i.jsx)(cn,{children:"Sprawd\u017a, co dzisiaj wolno, a czego nie"}):Object(i.jsx)(i.Fragment,{})}})]})]}),Object(i.jsxs)(dn,{children:[Object(i.jsxs)(xn,{children:["Kancelaria Prezesa Rady Ministr\xf3w informuje, \u017ce od ",m," roku:"]}),a&&Object(i.jsx)(sn,{children:bn(j).map((function(n){return n(a)}))}),Object(i.jsx)(un,{onClick:function(){o(b()),l("GENERUJ NOWE"),document.getElementById("topBar").scrollIntoView()},children:s})]}),Object(i.jsx)(W,{}),Object(i.jsx)(hn,{children:Object(i.jsxs)(mn,{children:[Object(i.jsx)("b",{children:"Ta strona to \u017cart"}),". Po prawdziwe informacje na temat obostrze\u0144 udaj si\u0119 ",Object(i.jsx)("a",{href:"https://www.gov.pl/web/koronawirus",children:"tutaj"}),".",Object(i.jsx)("br",{}),"Zaserduszkuj ",Object(i.jsx)(jn,{})," to na ",Object(i.jsx)(pn,{})," ",Object(i.jsx)("a",{href:"https://github.com/808-Squad/koronawirus.lol",children:"GitHubie"}),".",Object(i.jsx)("br",{}),"Ikony dzi\u0119ki ",Object(i.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," przez ",Object(i.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})})]})},wn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,56)).then((function(t){var e=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),i(n),r(n),a(n),o(n)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(w.a,{breakpoints:g,children:Object(i.jsx)(fn,{})})}),document.getElementById("root")),wn()}},[[44,1,2]]]);
//# sourceMappingURL=main.546c1caf.chunk.js.map