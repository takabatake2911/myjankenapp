(this.webpackJsonpjanken=this.webpackJsonpjanken||[]).push([[0],{13:function(n,t,e){"use strict";e.r(t);var i=e(1),s=e(3),c=e.n(s),a=e(4),h=e(5),r=e(7),d=e(6),j={hands:["./images/gu.png","./images/choki.png","./images/pa.png"],human:["./images/human.png"],robot:["./images/robot.png"]},l=e(0),o=function(n){Object(r.a)(e,n);var t=Object(d.a)(e);function e(n){var i;return Object(a.a)(this,e),(i=t.call(this,n)).pon=function(n){i.setState({humanHand:n,comHand:Math.floor(3*Math.random())})},i.judge=function(){if(null!=i.state.comHand||null!=i.state.humanHand){var n=(i.state.comHand-i.state.humanHand+3)%3;return 0==n?"DROW":1==n?"YOU WIN!!":2==n?"YOU LOSE!!":void 0}},i.state={humanHand:null,comHand:null},i.hands=["gu","choki","pa"],i}return Object(h.a)(e,[{key:"render",value:function(){var n=this,t=this.state,e=t.humanHand,i=t.comHand,s={margin:30,backgroundColor:"#fff"};return Object(l.jsxs)("div",{style:{textAlign:"center"},children:[Object(l.jsx)("h1",{children:"JANKEN GAME!!!"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{style:s,onClick:function(){return n.pon(0)},children:Object(l.jsx)("img",{width:100,height:100,src:j.hands[0]})}),Object(l.jsx)("button",{style:s,onClick:function(){return n.pon(1)},children:Object(l.jsx)("img",{width:100,height:100,src:j.hands[1]})}),Object(l.jsx)("button",{style:s,onClick:function(){return n.pon(2)},children:Object(l.jsx)("img",{width:100,height:100,src:j.hands[2]})})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{style:{display:"inline-block",margin:50},children:[Object(l.jsx)("span",{children:"you"}),Object(l.jsx)("br",{}),Object(l.jsx)("img",{width:100,height:100,src:j.human})]}),Object(l.jsx)("div",{style:{display:"inline-block",margin:50},children:Object(l.jsx)("img",{width:100,height:100,src:j.hands[e]})}),Object(l.jsx)("div",{style:{display:"inline-block",margin:50},children:Object(l.jsx)("img",{width:100,height:100,src:j.hands[i]})}),Object(l.jsxs)("div",{style:{display:"inline-block",margin:50},children:[Object(l.jsx)("span",{children:"com"}),Object(l.jsx)("br",{}),Object(l.jsx)("img",{width:100,height:100,src:j.robot})]})]}),Object(l.jsx)("h1",{children:this.judge()})]})}}]),e}(i.Component);c.a.render(Object(l.jsx)(o,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.41f7b0b4.chunk.js.map