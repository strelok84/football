(this.webpackJsonpfootball=this.webpackJsonpfootball||[]).push([[0],{28:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),r=a(21),i=a.n(r),o=(a(28),a(8)),l=a(9),h=a(11),m=a(10),u=a(6),d=a.n(u),j=a(12),b=(a(30),function(){return Object(s.jsx)("div",{className:"lds-hourglass"})}),p=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,data:[],id:0,year:"",searchName:""},e.request=function(e){return fetch(e,{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}})},e.searchName=function(t){e.setState((function(e){return{searchName:t.target.value}}))},e.searchBar=function(t){t.preventDefault();var a=e.state.searchName;if(!a.match(/\S/))return alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u0447\u0430\u0441\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f");for(var s=document.getElementById("table"),n=new RegExp(a,"gi"),c=!1,r=1;r<s.rows.length;r++)n.test(s.rows[r].cells[0].innerHTML)?(c=!0,s.rows[r].cells[0].className+=" foundCell",s.rows[r].scrollIntoView()):s.rows[r].cells[0].classList.remove("foundCell");c||alert("\u0422\u0430\u043a\u043e\u0439 \u043b\u0438\u0433\u0438 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043d\u0435\u0442. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u0447\u0430\u0441\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f.")},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(t){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://fathomless-spire-81147.herokuapp.com/https://api.football-data.org/v2/competitions",e.next=3,this.request("https://fathomless-spire-81147.herokuapp.com/https://api.football-data.org/v2/competitions");case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,this.setState({isLoading:!1,data:s.competitions}),sessionStorage.clear();case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(e,t){e.preventDefault(),localStorage.setItem("id",t),this.props.history.push({pathname:"/teams",state:{id:t}})}},{key:"matchesOfLigue",value:function(e,t){e.preventDefault(),localStorage.setItem("ligueId",t),this.props.history.push({pathname:"/matchesOfLigue",state:{ligueId:t}})}},{key:"render",value:function(){var e=this,t=[2001,2017,2021,2003,2002,2015,2019,2014,2016,2013,2e3,2018];return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("form",{className:"form-inline m-3",onSubmit:this.searchBar,children:[Object(s.jsx)("input",{className:"form-control",type:"search",onChange:this.searchName,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(s.jsx)("input",{type:"submit",className:"btn btn-primary m-3",value:"\u041d\u0430\u0439\u0442\u0438"})]}),this.state.isLoading?Object(s.jsx)(b,{}):Object(s.jsxs)("table",{className:"table",id:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043b\u0438\u0433\u0438"}),Object(s.jsx)("th",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u043b\u0438\u0433\u0438"}),Object(s.jsx)("th",{children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043b\u0438\u0433\u0438"})]})}),Object(s.jsx)("tbody",{children:this.state.data.map((function(a){return Object(s.jsxs)("tr",{children:[t.includes(a.id)?Object(s.jsx)("td",{children:a.name}):Object(s.jsx)("td",{className:"hiddenTd",children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e"}),t.includes(a.id)?Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:"./teams",onClick:function(t){return e.handleClick(t,a.id)},children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u043b\u0438\u0433\u0438"})}):Object(s.jsx)("td",{className:"hiddenTd",children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e"}),t.includes(a.id)?Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:"./matchesOfLigue",onClick:function(t){return e.matchesOfLigue(t,a.id)},children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043b\u0438\u0433\u0438"})}):Object(s.jsx)("td",{className:"hiddenTd",children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e"})]},a.id)}))})]})]})}}]),a}(c.a.Component),f=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,data:[],year:0,searchName:"",name:""},e.request=function(e){return fetch(e,{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}})},e.handleChange=function(t){e.setState({year:t.target.value}),sessionStorage.setItem("teamYear",t.target.value)},e.handleSubmit=function(t){t.preventDefault(),e.componentDidMount(e.state.year)},e.searchName=function(t){e.setState({searchName:t.target.value})},e.searchBar=function(t){t.preventDefault();var a=e.state.searchName;if(!a.match(/\S/))return alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u0447\u0430\u0441\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f");for(var s=document.getElementById("table"),n=new RegExp(a,"gi"),c=!1,r=1;r<s.rows.length;r++)n.test(s.rows[r].cells[0].innerHTML)?(c=!0,s.rows[r].cells[0].className+=" foundCell",s.rows[r].scrollIntoView()):s.rows[r].cells[0].classList.remove("foundCell");c||alert("\u0422\u0430\u043a\u043e\u0439 \u043b\u0438\u0433\u0438 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043d\u0435\u0442. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u0447\u0430\u0441\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f.")},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(t){var a,s,n,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("id")||this.props.location.state.id,s=sessionStorage.getItem("teamYear")||this.state.year,n="http://api.football-data.org/v2/competitions/".concat(a,"/teams?season=").concat(+s?s:2020),e.next=5,this.request(n);case 5:if(c=e.sent,+s&&window.history.pushState(null,null,"teams?"+s),!c.ok){e.next=14;break}return e.next=10,c.json();case 10:r=e.sent,this.setState({isLoading:!1,data:r.teams,name:r.competition.name}),e.next=15;break;case 14:this.setState({isLoading:!1,data:[{id:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",name:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",area:{name:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 750 \u0434\u043d\u0435\u0439"}}]});case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){sessionStorage.clear()}},{key:"handleClick",value:function(e,t){e.preventDefault(),localStorage.setItem("matchId",t),this.props.history.push({pathname:"/matchesOfTeam",state:{matchid:t}})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"mt-2 mb-2",children:[Object(s.jsx)("a",{className:"mr-3",href:"https://strelok84.github.io/football/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),Object(s.jsx)("span",{children:"\xb7"}),Object(s.jsx)("span",{className:"ml-3",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u043b\u0438\u0433\u0438"})]}),Object(s.jsxs)("div",{className:"grid",children:[Object(s.jsx)("form",{onSubmit:this.searchBar,className:"teamName",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsxs)("label",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:",Object(s.jsx)("input",{className:"form-control",type:"search",onChange:this.searchName,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"})]}),Object(s.jsx)("input",{className:"btn btn-primary ml-3",type:"submit",value:"\u041d\u0430\u0439\u0442\u0438"})]})}),Object(s.jsx)("form",{onSubmit:this.handleSubmit,className:"teamYear",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsxs)("label",{children:["\u0413\u043e\u0434:",Object(s.jsx)("input",{className:"form-control",type:"number",value:this.state.value,onChange:this.handleChange,placeholder:sessionStorage.getItem("teamYear")||"2020"})]}),Object(s.jsx)("input",{className:"btn btn-primary ml-3",type:"submit",value:"\u041d\u0430\u0439\u0442\u0438"})]})}),Object(s.jsx)("div",{className:"ligueName",children:Object(s.jsx)("h1",{children:this.state.name})})]}),this.state.isLoading?Object(s.jsx)(b,{}):Object(s.jsxs)("table",{className:"table",id:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430"}),Object(s.jsx)("th",{children:"\u0421\u0442\u0440\u0430\u043d\u0430"}),Object(s.jsx)("th",{children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b"})]})}),Object(s.jsx)("tbody",{children:this.state.data.map((function(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t.name}),Object(s.jsx)("td",{children:t.area.name}),Object(s.jsx)("td",{children:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"!==e.state.data[0].id?Object(s.jsx)("a",{href:"./teams",onClick:function(a){return e.handleClick(a,t.id)},children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}):"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 750 \u0434\u043d\u0435\u0439"})]},t.id)}))})]})]})}}]),a}(c.a.Component),O=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,data:[],dateFrom:"",dateTo:""},e.request=function(e){return fetch(e,{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}})},e.setDateFrom=function(t){e.setState({dateFrom:t.target.value}),sessionStorage.setItem("teamDateFrom",t.target.value)},e.setDateTo=function(t){e.setState({dateTo:t.target.value}),sessionStorage.setItem("teamDateTo",t.target.value)},e.searchDate=function(t){t.preventDefault(),e.componentDidMount()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,s,n,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("matchId")||this.props.location.state.matchId,s=sessionStorage.getItem("teamDateTo")||this.state.dateTo,n=sessionStorage.getItem("teamDateFrom")||this.state.dateFrom,c="https://api.football-data.org/v2/teams/".concat(a,"/matches?"),n||s){e.next=10;break}return e.next=7,this.request("".concat(c,"status=SCHEDULED"));case 7:t=e.sent,e.next=21;break;case 10:if(!(!n&&s||n&&!s)){e.next=17;break}return alert("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043e\u0431\u0435 \u0434\u0430\u0442\u044b"),e.next=14,this.request("".concat(c,"status=SCHEDULED"));case 14:t=e.sent,e.next=21;break;case 17:return e.next=19,this.request("".concat(c,"dateTo=").concat(s,"&dateFrom=").concat(n));case 19:t=e.sent,window.history.pushState(null,null,"matches?"+n+"--"+s);case 21:return e.next=23,t.json();case 23:r=e.sent,t.ok?this.setState({isLoading:!1,data:r.matches}):this.setState({isLoading:!1,data:[{homeTeam:{name:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u044d\u0442\u043e\u043c \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435"},awayTeam:{name:"\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 750 \u0434\u043d\u0435\u0439"},id:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",utcDate:Date.now()}]});case 25:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){sessionStorage.clear()}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"mt-2 mb-2",children:[Object(s.jsx)("a",{className:"mr-3",href:"https://strelok84.github.io/football/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),Object(s.jsx)("span",{children:"\xb7"}),Object(s.jsx)("a",{href:"https://strelok84.github.io/football/teams",className:"ml-3 mr-3",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u043b\u0438\u0433\u0438"}),Object(s.jsx)("span",{children:"\xb7"}),Object(s.jsx)("span",{className:"ml-3",children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b"})]}),Object(s.jsx)("form",{className:"form-inline mt-3",onSubmit:this.searchDate,children:Object(s.jsxs)("label",{children:["\u041e\u0442:",Object(s.jsx)("input",{className:"form-control ml-1 mr-3",type:"date",onChange:this.setDateFrom})]})}),Object(s.jsxs)("form",{className:"form-inline mt-2 mb-3",onSubmit:this.searchDate,children:[Object(s.jsxs)("label",{children:["\u0414\u043e:",Object(s.jsx)("input",{className:"form-control ml-1 mr-3 ",type:"date",onChange:this.setDateTo})]}),Object(s.jsx)("input",{className:"form-control btn btn-primary",type:"submit",value:"\u041d\u0430\u0439\u0442\u0438"})]}),this.state.isLoading?Object(s.jsx)(b,{}):Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u041c\u0430\u0442\u0447"}),Object(s.jsxs)("th",{children:["\u0414\u0430\u0442\u0430 \u043c\u0430\u0442\u0447\u0430 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"," ",Intl.DateTimeFormat().resolvedOptions().timeZone]})]})}),Object(s.jsx)("tbody",{children:this.state.data.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{children:[e.homeTeam.name," - ",e.awayTeam.name]}),Object(s.jsx)("td",{children:new Date(e.utcDate).toLocaleString()})]},e.id)}))})]})]})}}]),a}(c.a.Component),x=a(2),g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,data:[],dateFrom:"",dateTo:""},e.componentWillUnmount=function(){sessionStorage.clear()},e.request=function(e){return fetch(e,{headers:{"X-Auth-Token":"a3b3685ba5fd4c8685be0540c85652f2"}})},e.setDateFrom=function(t){e.setState({dateFrom:t.target.value}),sessionStorage.setItem("dateFrom",t.target.value)},e.setDateTo=function(t){e.setState({dateTo:t.target.value}),sessionStorage.setItem("dateTo",t.target.value)},e.searchDate=function(t){t.preventDefault(),e.componentDidMount()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,s,n,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("ligueId")||this.props.location.state.ligueId,a=sessionStorage.getItem("dateTo")||this.state.dateTo,s=sessionStorage.getItem("dateFrom")||this.state.dateFrom,c="https://api.football-data.org/v2/competitions/".concat(t,"/matches?"),s||a){e.next=10;break}return e.next=7,this.request("".concat(c,"status=SCHEDULED"));case 7:n=e.sent,e.next=21;break;case 10:if(!(!s&&a||s&&!a)){e.next=17;break}return alert("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u043e\u0431\u0435 \u0434\u0430\u0442\u044b"),e.next=14,this.request("".concat(c,"status=SCHEDULED"));case 14:n=e.sent,e.next=21;break;case 17:return e.next=19,this.request("".concat(c,"dateTo=").concat(a,"&dateFrom=").concat(s));case 19:n=e.sent,window.history.pushState(null,null,"matchesOfLigue?"+s+"--"+a);case 21:return e.next=23,n.json();case 23:r=e.sent,this.setState({isLoading:!1,data:r.matches});case 25:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"mt-2 mb-2",children:[Object(s.jsx)("a",{className:"mr-3",href:"https://strelok84.github.io/football/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),Object(s.jsx)("span",{children:"\xb7"}),Object(s.jsx)("span",{className:"ml-3",children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043b\u0438\u0433\u0438"})]}),Object(s.jsx)("form",{className:"form-inline mt-3",onSubmit:this.searchDate,children:Object(s.jsxs)("label",{children:["\u041e\u0442:",Object(s.jsx)("input",{className:"form-control ml-1 mr-3",type:"date",onChange:this.setDateFrom})]})}),Object(s.jsxs)("form",{className:"form-inline mt-2 mb-3",onSubmit:this.searchDate,children:[Object(s.jsxs)("label",{children:["\u0414\u043e:",Object(s.jsx)("input",{className:"form-control ml-1 mr-3 ",type:"date",onChange:this.setDateTo})]}),Object(s.jsx)("input",{className:"form-control btn btn-primary",type:"submit",value:"\u041d\u0430\u0439\u0442\u0438"})]}),this.state.isLoading?Object(s.jsx)(b,{}):Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"}),Object(s.jsxs)("th",{children:["\u0414\u0430\u0442\u0430 \u043c\u0430\u0442\u0447\u0430 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"," ",Intl.DateTimeFormat().resolvedOptions().timeZone]})]})}),Object(s.jsx)("tbody",{children:this.state.data.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{children:[e.homeTeam.name," - ",e.awayTeam.name]}),Object(s.jsx)("td",{children:new Date(e.utcDate).toLocaleString()})]},e.id)}))})]})]})}}]),a}(c.a.Component),v=Object(x.g)(g),y=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(x.d,{children:[Object(s.jsx)(x.b,{path:"/matchesOfLigue",component:v}),Object(s.jsx)(x.b,{path:"/matchesOfLigue/:ligueId",component:v}),Object(s.jsx)(x.b,{path:"/matchesOfTeam",component:O}),Object(s.jsx)(x.b,{path:"/teams",component:f}),Object(s.jsx)(x.b,{exact:!0,path:"/",component:p}),Object(s.jsx)(x.a,{to:"/"})]})})}}]),a}(n.Component),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))},S=(a(36),a(15));i.a.render(Object(s.jsx)(S.a,{basename:"/football",children:Object(s.jsx)(y,{})}),document.getElementById("root")),N()}},[[37,1,2]]]);
//# sourceMappingURL=main.cc8b8fab.chunk.js.map