(this.webpackJsonpfootball=this.webpackJsonpfootball||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),s=n.n(c),r=n(21),i=n.n(r),o=(n(28),n(8)),h=n(9),d=n(11),l=n(10),j=(n(29),n(6)),u=n.n(j),b=n(12),p=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={isLoading:!0,data:[],id:0},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(b.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.football-data.org/v2/competitions",{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,console.log(n),this.setState({isLoading:!1,data:n.competitions});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"HandleClick",value:function(t,e){console.log(e),t.preventDefault(),this.setState({id:e}),console.log(this.state.id),this.props.history.push({pathname:"/teams",state:{id:e}})}},{key:"MatchesOfLigue",value:function(t,e){t.preventDefault(),this.setState({ligueId:e}),this.props.history.push({pathname:"/matchesOfLigue",state:{ligueId:e}})}},{key:"render",value:function(){var t=this,e=[2001,2017,2021,2003,2002,2015,2019,2014,2016,2013,2e3,2018];return Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID"}),Object(a.jsx)("th",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u043b\u0438\u0433\u0438"}),Object(a.jsx)("th",{children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043b\u0438\u0433\u0438"})]})}),Object(a.jsx)("tbody",{children:this.state.data.map((function(n){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:n.id}),e.includes(n.id)?Object(a.jsx)("td",{children:Object(a.jsx)("a",{href:"./matchesOfLigue",onClick:function(e){return t.MatchesOfLigue(e,n.id)},children:n.name})}):Object(a.jsx)("td",{children:n.name}),Object(a.jsx)("td",{children:n.area.name})]},n.id)}))})]})}}]),n}(s.a.Component),f=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={isLoading:!0,data:[]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(b.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.football-data.org/v2/competitions/".concat(this.props.location.state.id,"/teams"),{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,console.log(n),this.setState({isLoading:!1,data:n.teams});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"HandleClick",value:function(t,e){console.log(e),t.preventDefault(),this.setState({matchid:e}),console.log(this.state.matchid),this.props.history.push({pathname:"/matches",state:{matchid:e}})}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID"}),Object(a.jsx)("th",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"})]})}),Object(a.jsx)("tbody",{children:this.state.data.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.id}),Object(a.jsx)("td",{children:Object(a.jsx)("a",{href:"./teams",onClick:function(n){return t.HandleClick(n,e.id)},children:e.name})}),Object(a.jsx)("td",{children:e.area.name})]},e.id)}))})]})}}]),n}(s.a.Component),O=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={isLoading:!0,data:[]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(b.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.football-data.org/v2/teams/".concat(this.props.location.state.matchid,"/matches?status=SCHEDULED\n        "),{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,console.log(n),this.setState({isLoading:!1,data:n.matches});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID"}),Object(a.jsx)("th",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"})]})}),Object(a.jsx)("tbody",{children:this.state.data.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.id}),Object(a.jsx)("td",{children:Object(a.jsxs)("a",{href:"./matches",children:[t.homeTeam.name,"-",t.awayTeam.name]})}),Object(a.jsx)("td",{children:t.utcDate})]},t.id)}))})]})}}]),n}(s.a.Component),m=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={isLoading:!0,data:[]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(b.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.football-data.org/v2/competitions/2013/matches",{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,console.log(n),this.setState({isLoading:!1,data:n.matches});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID"}),Object(a.jsx)("th",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"})]})}),Object(a.jsx)("tbody",{children:this.state.data.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.id}),Object(a.jsx)("td",{children:Object(a.jsxs)("a",{href:"./matchesOfLigue",children:[t.homeTeam.name,"-",t.awayTeam.name]})}),Object(a.jsx)("td",{children:t.utcDate})]},t.id)}))})]})}}]),n}(s.a.Component),x=n(2),v=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(x.d,{children:[Object(a.jsx)(x.b,{path:"/matchesOfLigue",component:m}),Object(a.jsx)(x.b,{path:"/matches",component:O}),Object(a.jsx)(x.b,{path:"/teams",component:f}),Object(a.jsx)(x.b,{exact:!0,path:"/",component:p}),Object(a.jsx)(x.a,{to:"/"})]})})}}]),n}(c.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),s(t),r(t)}))},y=(n(36),n(14));i.a.render(Object(a.jsx)(y.a,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),g()}},[[37,1,2]]]);
//# sourceMappingURL=main.45bc286b.chunk.js.map