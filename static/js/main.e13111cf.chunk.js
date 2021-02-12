(this.webpackJsonpfootball=this.webpackJsonpfootball||[]).push([[0],{30:function(t,e,a){},31:function(t,e,a){},39:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(1),c=a.n(s),r=a(22),i=a.n(r),o=(a(30),a(24)),h=a(9),l=a(10),d=a(12),u=a(11),b=(a(31),a(7)),j=a.n(b),m=a(13),f=a(3),p=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={isLoading:!0,data:[],id:0,year:"",searchName:""},n.searchBar=n.searchBar.bind(Object(f.a)(n)),n.searchName=n.searchName.bind(Object(f.a)(n)),n.handleClick=n.handleClick.bind(Object(f.a)(n)),n.matchesOfLigue=n.matchesOfLigue.bind(Object(f.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=Object(m.a)(j.a.mark((function t(e){var a,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.football-data.org/v2/competitions",{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,console.log(n),this.setState({isLoading:!1,data:n.competitions});case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleClick",value:function(t,e){console.log(e),t.preventDefault(),this.setState({id:e}),console.log(this.state.id),this.props.history.push({pathname:"/teams",state:{id:e}})}},{key:"matchesOfLigue",value:function(t,e){t.preventDefault(),this.setState({ligueId:e}),this.props.history.push({pathname:"/matchesOfLigue",state:{ligueId:e}})}},{key:"searchName",value:function(t){this.setState({searchName:t.target.value})}},{key:"searchBar",value:function(t){t.preventDefault();for(var e=document.getElementById("table"),a=1;a<e.rows.length;a++)for(var n=0;n<e.rows[a].cells.length;n++)e.rows[a].cells[n].innerHTML===this.state.searchName?(e.rows[a].cells[n].style.fontWeight="bold",e.rows[a].cells[n].style.backgroundColor="grey",e.rows[a].scrollIntoView()):(e.rows[a].cells[n].style.fontWeight="normal",e.rows[a].cells[n].style.backgroundColor="white")}},{key:"render",value:function(){var t=this,e=[2001,2017,2021,2003,2002,2015,2019,2014,2016,2013,2e3,2018],a=Object(n.jsx)("td",{className:"hiddenTd",children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e"});return Object(n.jsxs)("div",{children:[Object(n.jsxs)("form",{onSubmit:this.searchBar,children:[Object(n.jsx)("input",{type:"search",onChange:this.searchName,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(n.jsx)("input",{type:"submit",value:"\u041d\u0430\u0439\u0442\u0438"})]}),Object(n.jsxs)("table",{className:"table",id:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043b\u0438\u0433\u0438"}),Object(n.jsx)("th",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u043b\u0438\u0433\u0438"}),Object(n.jsx)("th",{children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043b\u0438\u0433\u0438"})]})}),Object(n.jsx)("tbody",{children:this.state.data.map((function(s){return Object(n.jsxs)("tr",{children:[e.includes(s.id)?Object(n.jsx)("td",{children:s.name}):a,e.includes(s.id)?Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:"./teams",onClick:function(e){return t.handleClick(e,s.id)},children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u043b\u0438\u0433\u0438"})}):a,e.includes(s.id)?Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:"./matchesOfLigue",onClick:function(e){return t.matchesOfLigue(e,s.id)},children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043b\u0438\u0433\u0438"})}):a]},s.id)}))})]})]})}}]),a}(c.a.Component),O=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={isLoading:!0,data:[],year:0},n.handleChange=n.handleChange.bind(Object(f.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n.searchBar=n.searchBar.bind(Object(f.a)(n)),n.searchName=n.searchName.bind(Object(f.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=Object(m.a)(j.a.mark((function t(e){var a,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.football-data.org/v2/competitions/".concat(this.props.location.state.id,"/teams?season=").concat(e||2020),{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}});case 2:if(!(a=t.sent).ok){t.next=11;break}return t.next=6,a.json();case 6:n=t.sent,this.setState({isLoading:!1,data:n.teams}),console.log(n.teams),t.next=12;break;case 11:this.setState({data:[{id:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",name:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",area:{name:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"}}]});case 12:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleClick",value:function(t,e){t.preventDefault(),this.setState({matchid:e}),this.props.history.push({pathname:"/matches",state:{matchid:e}})}},{key:"handleChange",value:function(t){this.setState({year:t.target.value})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.componentDidMount(this.state.year)}},{key:"searchName",value:function(t){this.setState({searchName:t.target.value})}},{key:"searchBar",value:function(t){t.preventDefault();for(var e=document.getElementById("table"),a=1;a<e.rows.length;a++)for(var n=0;n<e.rows[a].cells.length;n++)e.rows[a].cells[n].innerHTML===this.state.searchName?(e.rows[a].cells[n].style.fontWeight="bold",e.rows[a].cells[n].style.backgroundColor="grey",e.rows[a].scrollIntoView()):(e.rows[a].cells[n].style.fontWeight="normal",e.rows[a].cells[n].style.backgroundColor="white")}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("form",{onSubmit:this.searchBar,children:[Object(n.jsx)("input",{type:"search",onChange:this.searchName,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(n.jsx)("input",{type:"submit",value:"\u041d\u0430\u0439\u0442\u0438"})]}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)("label",{children:["\u0413\u043e\u0434:",Object(n.jsx)("input",{type:"number",value:this.state.value,onChange:this.handleChange,placeholder:"2020"})]}),Object(n.jsx)("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]}),Object(n.jsxs)("table",{className:"table",id:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"}),Object(n.jsx)("th",{children:"\u0421\u0442\u0440\u0430\u043d\u0430"}),Object(n.jsx)("th",{children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b"})]})}),Object(n.jsx)("tbody",{children:this.state.data.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.area.name}),Object(n.jsx)("td",{children:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"!=t.state.data[0].id?Object(n.jsx)("a",{href:"./teams",onClick:function(a){return t.handleClick(a,e.id)},children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}):"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"})]},e.id)}))})]})]})}}]),a}(c.a.Component),x=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={isLoading:!0,data:[],dateFrom:"",dateTo:""},n.setDateFrom=n.setDateFrom.bind(Object(f.a)(n)),n.setDateTo=n.setDateTo.bind(Object(f.a)(n)),n.searchDate=n.searchDate.bind(Object(f.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=Object(m.a)(j.a.mark((function t(){var e,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.dateFrom||this.state.dateTo){t.next=6;break}return t.next=3,fetch("https://api.football-data.org/v2/teams/".concat(this.props.location.state.matchid,"/matches?status=SCHEDULED"),{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}});case 3:e=t.sent,t.next=16;break;case 6:if(!(!this.state.dateFrom&&this.state.dateTo||this.state.dateFrom&&!this.state.dateTo)){t.next=13;break}return alert("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043e\u0431\u0435 \u0434\u0430\u0442\u044b"),t.next=10,fetch("https://api.football-data.org/v2/teams/".concat(this.props.location.state.matchid,"/matches?status=SCHEDULED"),{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}});case 10:e=t.sent,t.next=16;break;case 13:return t.next=15,fetch("https://api.football-data.org/v2/teams/".concat(this.props.location.state.matchid,"/matches?dateTo=").concat(this.state.dateTo,"&dateFrom=").concat(this.state.dateFrom),{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}});case 15:e=t.sent;case 16:return t.next=18,e.json();case 18:a=t.sent,e.ok?this.setState({isLoading:!1,data:a.matches}):this.setState({isLoading:!1,data:[{homeTeam:{name:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u044d\u0442\u043e\u043c \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435"},awayTeam:{name:"\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 750 \u0434\u043d\u0435\u0439"},id:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",utcDate:Date.now()}]});case 20:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setDateFrom",value:function(t){this.setState({dateFrom:t.target.value})}},{key:"setDateTo",value:function(t){this.setState({dateTo:t.target.value})}},{key:"searchDate",value:function(t){t.preventDefault(),this.componentDidMount()}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("form",{onSubmit:this.searchDate,children:Object(n.jsx)("input",{type:"date",onChange:this.setDateFrom})}),Object(n.jsxs)("form",{onSubmit:this.searchDate,children:[Object(n.jsx)("input",{type:"date",onChange:this.setDateTo}),Object(n.jsx)("input",{type:"submit",value:"\u041d\u0430\u0439\u0442\u0438"})]}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\u041c\u0430\u0442\u0447"}),Object(n.jsxs)("th",{children:["\u0414\u0430\u0442\u0430 \u043c\u0430\u0442\u0447\u0430 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"," ",Intl.DateTimeFormat().resolvedOptions().timeZone]})]})}),Object(n.jsx)("tbody",{children:this.state.data.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsxs)("td",{children:[t.homeTeam.name," - ",t.awayTeam.name]}),Object(n.jsx)("td",{children:new Date(t.utcDate).toLocaleString()})]},t.id)}))})]})]})}}]),a}(c.a.Component),v=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={isLoading:!0,data:[],dateFrom:"",dateTo:""},n.setDateFrom=n.setDateFrom.bind(Object(f.a)(n)),n.setDateTo=n.setDateTo.bind(Object(f.a)(n)),n.searchDate=n.searchDate.bind(Object(f.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=Object(m.a)(j.a.mark((function t(){var e,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.dateFrom||this.state.dateTo){t.next=6;break}return t.next=3,fetch("https://api.football-data.org/v2/competitions/".concat(this.props.location.state.ligueId,"/matches?status=SCHEDULED"),{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}});case 3:e=t.sent,t.next=16;break;case 6:if(!(!this.state.dateFrom&&this.state.dateTo||this.state.dateFrom&&!this.state.dateTo)){t.next=13;break}return alert("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043e\u0431\u0435 \u0434\u0430\u0442\u044b"),t.next=10,fetch("https://api.football-data.org/v2/competitions/".concat(this.props.location.state.ligueId,"/matches?status=SCHEDULED"),{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}});case 10:e=t.sent,t.next=16;break;case 13:return t.next=15,fetch("https://api.football-data.org/v2/competitions/".concat(this.props.location.state.ligueId,"/matches?dateTo=").concat(this.state.dateTo,"&dateFrom=").concat(this.state.dateFrom),{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}});case 15:e=t.sent;case 16:return t.next=18,e.json();case 18:a=t.sent,console.log(a),this.setState({isLoading:!1,data:a.matches});case 21:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setDateFrom",value:function(t){this.setState({dateFrom:t.target.value})}},{key:"setDateTo",value:function(t){this.setState({dateTo:t.target.value})}},{key:"searchDate",value:function(t){t.preventDefault(),this.componentDidMount()}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("form",{onSubmit:this.searchDate,children:Object(n.jsx)("input",{type:"date",onChange:this.setDateFrom})}),Object(n.jsxs)("form",{onSubmit:this.searchDate,children:[Object(n.jsx)("input",{type:"date",onChange:this.setDateTo}),Object(n.jsx)("input",{type:"submit",value:"\u041d\u0430\u0439\u0442\u0438"})]}),Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(n.jsxs)("th",{children:["\u0414\u0430\u0442\u0430 \u043c\u0430\u0442\u0447\u0430 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"," ",Intl.DateTimeFormat().resolvedOptions().timeZone]})]})}),Object(n.jsx)("tbody",{children:this.state.data.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsxs)("td",{children:[t.homeTeam.name," - ",t.awayTeam.name]}),Object(n.jsx)("td",{children:new Date(t.utcDate).toLocaleString()})]},t.id)}))})]})]})}}]),a}(c.a.Component),g=a(2),y=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(g.d,{children:[Object(n.jsx)(g.b,{path:"/matchesOfLigue",render:function(t){return Object(n.jsx)(v,Object(o.a)({},t))}}),Object(n.jsx)(g.b,{path:"/matches",component:x}),Object(n.jsx)(g.b,{path:"/teams",component:O}),Object(n.jsx)(g.b,{exact:!0,path:"/",component:p}),Object(n.jsx)(g.a,{to:"/"})]})})}}]),a}(s.Component),k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;a(t),n(t),s(t),c(t),r(t)}))},D=(a(38),a(18));i.a.render(Object(n.jsx)(D.a,{basename:"/football",children:Object(n.jsx)(y,{})}),document.getElementById("root")),k()}},[[39,1,2]]]);
//# sourceMappingURL=main.e13111cf.chunk.js.map