import{S as t,i as n,s as e,v as s,b as a,d as r,e as l,t as o,M as i,j as c,h as f,m as u,f as h,g as m,k as p,o as d,I as v,p as g,r as $,q as w,B as y,y as T,D as E,u as b,z as x,E as A,N,O as j,X as S,Z as k,C as q,w as D,J as I,R as P,x as R,a as H,G as B,H as F}from"./client.0f0e9ea5.js";import{l as L,a as O,A as z}from"./settings.bc92b9ed.js";import{N as X}from"./NavBar.504604fd.js";import{F as _}from"./Footer.a900e9c6.js";import{L as C}from"./Loading.f68b7627.js";import{S as G}from"./SkeletonLoading.003a53ee.js";import"./moment.7288240e.js";import{q as J}from"./api-client.40028785.js";var M="query($recipients: [String!], $owners: [String!], $after: String) {\n  transactions(recipients: $recipients, owners: $owners, after: $after) {\n    pageInfo {\n      hasNextPage\n    }\n    edges {\n      cursor\n      node {\n        id\n        block {\n          timestamp\n        }\n        quantity {\n          ar\n        }\n      }\n    }\n  }\n}\n";const{setTimeout:V}=k;function Y(t,n,e){const s=t.slice();return s[21]=n[e],s}function Z(t,n,e){const s=t.slice();return s[18]=n[e],s}function K(t){let n,e,s,r=t[5],l=[];for(let n=0;n<r.length;n+=1)l[n]=U(Y(t,r,n));let o=t[2]&&W();return{c(){for(let t=0;t<l.length;t+=1)l[t].c();n=a(),o&&o.c(),e=B()},l(t){for(let n=0;n<l.length;n+=1)l[n].l(t);n=f(t),o&&o.l(t),e=B()},m(t,a){for(let n=0;n<l.length;n+=1)l[n].m(t,a);g(t,n,a),o&&o.m(t,a),g(t,e,a),s=!0},p(t,s){if(32&s){let e;for(r=t[5],e=0;e<r.length;e+=1){const a=Y(t,r,e);l[e]?(l[e].p(a,s),b(l[e],1)):(l[e]=U(a),l[e].c(),b(l[e],1),l[e].m(n.parentNode,n))}for(;e<l.length;e+=1)l[e].d(1);l.length=r.length}t[2]?o?4&s&&b(o,1):(o=W(),o.c(),b(o,1),o.m(e.parentNode,e)):o&&(q(),T(o,1,1,(()=>{o=null})),E())},i(t){if(!s){for(let t=0;t<r.length;t+=1)b(l[t]);b(o),s=!0}},o(t){T(o),s=!1},d(t){F(l,t),t&&c(n),o&&o.d(t),t&&c(e)}}}function Q(t){let n,e,s=Array(10),a=[];for(let n=0;n<s.length;n+=1)a[n]=tt(Z(t,s,n));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();n=B()},l(t){for(let n=0;n<a.length;n+=1)a[n].l(t);n=B()},m(t,s){for(let n=0;n<a.length;n+=1)a[n].m(t,s);g(t,n,s),e=!0},p:H,i(t){if(!e){for(let t=0;t<s.length;t+=1)b(a[t]);e=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)T(a[t]);e=!1},d(t){F(a,t),t&&c(n)}}}function U(t){let n,e,r,i,u,$,y,T,E,b,x,A,N,j,S,k,q=t[21].type+"",I=t[21].id+"",B=t[21].amount+"";return{c(){n=l("tr"),e=l("td"),r=l("a"),i=l("span"),u=o(q),$=a(),y=o(I),E=a(),b=l("span"),A=a(),N=l("td"),j=o(B),S=o(" AR"),this.h()},l(t){n=h(t,"TR",{class:!0});var s=m(n);e=h(s,"TD",{style:!0,class:!0});var a=m(e);r=h(a,"A",{href:!0,class:!0});var l=m(r);i=h(l,"SPAN",{class:!0});var o=m(i);u=p(o,q),o.forEach(c),$=f(l),y=p(l,I),l.forEach(c),E=f(a),b=h(a,"SPAN",{class:!0}),m(b).forEach(c),a.forEach(c),A=f(s),N=h(s,"TD",{style:!0,class:!0});var d=m(N);j=p(d,B),S=p(d," AR"),d.forEach(c),s.forEach(c),this.h()},h(){d(i,"class","direction svelte-tnnnvn"),d(r,"href",T="https://viewblock.io/arweave/tx/"+t[21].id),d(r,"class","svelte-tnnnvn"),d(b,"class",x="status "+t[21].status+" svelte-tnnnvn"),v(e,"width","70%"),d(e,"class","svelte-tnnnvn"),v(N,"width","20%"),d(N,"class","svelte-tnnnvn"),d(n,"class","svelte-tnnnvn")},m(t,s){g(t,n,s),w(n,e),w(e,r),w(r,i),w(i,u),w(r,$),w(r,y),w(e,E),w(e,b),w(n,A),w(n,N),w(N,j),w(N,S)},p(t,n){32&n&&q!==(q=t[21].type+"")&&P(u,q),32&n&&I!==(I=t[21].id+"")&&P(y,I),32&n&&T!==(T="https://viewblock.io/arweave/tx/"+t[21].id)&&d(r,"href",T),32&n&&x!==(x="status "+t[21].status+" svelte-tnnnvn")&&d(b,"class",x),32&n&&B!==(B=t[21].amount+"")&&P(j,B)},i(t){k||s((()=>{k=D(n,R,{duration:150}),k.start()}))},o:H,d(t){t&&c(n)}}}function W(t){let n,e,s,o;return n=new C({props:{style:"position: absolute; left: 50%;"}}),{c(){r(n.$$.fragment),e=a(),s=l("br")},l(t){u(n.$$.fragment,t),e=f(t),s=h(t,"BR",{})},m(t,a){$(n,t,a),g(t,e,a),g(t,s,a),o=!0},i(t){o||(b(n.$$.fragment,t),o=!0)},o(t){T(n.$$.fragment,t),o=!1},d(t){x(n,t),t&&c(e),t&&c(s)}}}function tt(t){let n,e,s,o,i,p,y,E;return s=new G({props:{style:"width: 100%; height: 1.5em;"}}),p=new G({props:{style:"width: 100%; height: 1.5em;"}}),{c(){n=l("tr"),e=l("td"),r(s.$$.fragment),o=a(),i=l("td"),r(p.$$.fragment),y=a(),this.h()},l(t){n=h(t,"TR",{class:!0});var a=m(n);e=h(a,"TD",{style:!0,class:!0});var r=m(e);u(s.$$.fragment,r),r.forEach(c),o=f(a),i=h(a,"TD",{style:!0,class:!0});var l=m(i);u(p.$$.fragment,l),l.forEach(c),y=f(a),a.forEach(c),this.h()},h(){v(e,"width","70%"),d(e,"class","svelte-tnnnvn"),v(i,"width","20%"),d(i,"class","svelte-tnnnvn"),d(n,"class","svelte-tnnnvn")},m(t,a){g(t,n,a),w(n,e),$(s,e,null),w(n,o),w(n,i),$(p,i,null),w(n,y),E=!0},p:H,i(t){E||(b(s.$$.fragment,t),b(p.$$.fragment,t),E=!0)},o(t){T(s.$$.fragment,t),T(p.$$.fragment,t),E=!1},d(t){t&&c(n),x(s),x(p)}}}function nt(t){let n,e,N,j,S,k,I,P,H,B,F,L,O,z,C,G,J,M,Y,Z,U,W,tt,nt,et,st,at=!1,rt=()=>{at=!1};s(t[8]),s(t[9]),N=new X({});const lt=[Q,K],ot=[];function it(t,n){return t[1]?1:0}return J=it(t),M=ot[J]=lt[J](t),U=new _({}),{c(){e=a(),r(N.$$.fragment),j=a(),S=l("div"),k=l("h1"),I=o("All Transactions"),P=a(),H=l("table"),B=l("tr"),F=l("th"),L=o("TxID"),O=a(),z=l("th"),C=o("Amount"),G=a(),M.c(),Z=a(),r(U.$$.fragment),W=a(),tt=l("span"),this.h()},l(t){i('[data-svelte="svelte-1kjtrw9"]',document.head).forEach(c),e=f(t),u(N.$$.fragment,t),j=f(t),S=h(t,"DIV",{class:!0});var n=m(S);k=h(n,"H1",{class:!0});var s=m(k);I=p(s,"All Transactions"),s.forEach(c),P=f(n),H=h(n,"TABLE",{class:!0});var a=m(H);B=h(a,"TR",{class:!0});var r=m(B);F=h(r,"TH",{style:!0,class:!0});var l=m(F);L=p(l,"TxID"),l.forEach(c),O=f(r),z=h(r,"TH",{class:!0});var o=m(z);C=p(o,"Amount"),o.forEach(c),r.forEach(c),G=f(a),M.l(a),a.forEach(c),n.forEach(c),Z=f(t),u(U.$$.fragment,t),W=f(t),tt=h(t,"SPAN",{style:!0}),m(tt).forEach(c),this.h()},h(){document.title="Transactions overview",d(k,"class","title"),v(F,"text-transform","none"),d(F,"class","svelte-tnnnvn"),d(z,"class","svelte-tnnnvn"),d(B,"class","svelte-tnnnvn"),d(H,"class","svelte-tnnnvn"),d(S,"class","all-transactions svelte-tnnnvn"),v(tt,"width","100%"),v(tt,"height","1px")},m(s,a){g(s,e,a),$(N,s,a),g(s,j,a),g(s,S,a),w(S,k),w(k,I),w(S,P),w(S,H),w(H,B),w(B,F),w(F,L),w(B,O),w(B,z),w(z,C),w(H,G),ot[J].m(H,null),g(s,Z,a),$(U,s,a),g(s,W,a),g(s,tt,a),t[10](tt),nt=!0,et||(st=[y(window,"scroll",(()=>{at=!0,clearTimeout(n),n=V(rt,100),t[8]()})),y(window,"resize",t[9])],et=!0)},p(t,[e]){8&e&&!at&&(at=!0,clearTimeout(n),scrollTo(window.pageXOffset,t[3]),n=V(rt,100));let s=J;J=it(t),J===s?ot[J].p(t,e):(q(),T(ot[s],1,1,(()=>{ot[s]=null})),E(),M=ot[J],M?M.p(t,e):(M=ot[J]=lt[J](t),M.c()),b(M,1),M.m(H,null))},i(t){nt||(b(N.$$.fragment,t),b(M),Y||s((()=>{Y=D(S,R,{duration:400}),Y.start()})),b(U.$$.fragment,t),nt=!0)},o(t){T(N.$$.fragment,t),T(M),T(U.$$.fragment,t),nt=!1},d(n){n&&c(e),x(N,n),n&&c(j),n&&c(S),ot[J].d(),n&&c(Z),x(U,n),n&&c(W),n&&c(tt),t[10](null),et=!1,A(st)}}}function et(t,n,e){let s,a;N(t,L,(t=>e(13,s=t))),N(t,O,(t=>e(14,a=t)));var r=this&&this.__awaiter||function(t,n,e,s){return new(e||(e=Promise))((function(a,r){function l(t){try{i(s.next(t))}catch(t){r(t)}}function o(t){try{i(s.throw(t))}catch(t){r(t)}}function i(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(l,o)}i((s=s.apply(t,n||[])).next())}))};let l;s||j("/");let o,i,c=[],f="",u="",h=!0,m=!0,p=!1,d=!1;function v(){return r(this,void 0,void 0,(function*(){e(2,d=!0);const t=new z({host:"arweave.net",port:443,protocol:"https",timeout:2e4}),n=h?(yield J({query:M,variables:{owners:[a],recipients:null,after:f}})).data:null,s=m?(yield J({query:M,variables:{recipients:[a],owners:null,after:u}})).data:null,r=h?n.transactions.edges:null,l=m?s.transactions.edges:null;e(6,h=!!h&&n.transactions.pageInfo.hasNextPage),e(7,m=!!m&&s.transactions.pageInfo.hasNextPage);let o=[];null!==r&&r.map((({node:t,cursor:n})=>{f=n,o.push({id:t.id,amount:parseFloat(t.quantity.ar),type:"out",status:"",timestamp:t.block.timestamp})})),null!==l&&l.map((({node:t,cursor:n})=>{u=n,o.push({id:t.id,amount:parseFloat(t.quantity.ar),type:"in",status:"",timestamp:t.block.timestamp})})),o.length>0&&o.sort(((t,n)=>n.timestamp-t.timestamp));for(let n=0;n<o.length;n++)try{200===(yield t.transactions.getStatus(o[n].id)).status?o[n].status="success":o[n].status="pending"}catch(t){console.log(t)}e(5,c=c.concat(o)),e(1,p=!0),setTimeout((()=>e(2,d=!1)),400)}))}return S((()=>v())),t.$$.update=()=>{if(223&t.$$.dirty&&void 0!==l){l.offsetTop+l.offsetHeight<=o+i+120&&p&&!d&&(h||m)&&v()}},[l,p,d,o,i,c,h,m,function(){e(3,o=window.pageYOffset)},function(){e(4,i=window.innerHeight)},function(t){I[t?"unshift":"push"]((()=>{l=t,e(0,l)}))}]}export default class extends t{constructor(t){super(),n(this,t,et,nt,e,{})}}