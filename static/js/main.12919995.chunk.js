(this.webpackJsonprouter=this.webpackJsonprouter||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},21:function(e,t,n){},22:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(5),l=n.n(i),o=(n(21),n(10)),c=n(11),s=n(14),u=n(12),m=n(15),h=(n(22),n(3)),p=(n(38),n(41)),f={width:"100%",height:"100%"},d=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).route=function(){fetch("https://freakh2o.pythonanywhere.com/?min="+e.state.min+"&max="+e.state.max).then((function(e){return e.json()})).then((function(t){return e.setState({info:t,show:!1})}))},e.handleMin=function(t){console.log(t.target.value),e.setState({min:t.target.value})},e.handleMax=function(t){e.setState({max:t.target.value})},e.onMarkerClick=function(t,n,a){return e.setState({activeInfo:t.info,img:t.src,activeMarker:n,showingInfoWindow:!0})},e.Displayable=function(){return!0===e.state.show?r.a.createElement("div",null,r.a.createElement("h1",null,"FOOD ROUTER"),r.a.createElement("input",{id:"min",onChange:e.handleMin,placeholder:"Enter Min Price",style:{marginTop:"20px"}}),r.a.createElement("br",null),r.a.createElement("input",{id:"max",onChange:e.handleMax,placeholder:"Enter Max Price",style:{marginTop:"20px"}})):r.a.createElement("div",null,r.a.createElement(h.Map,{google:e.props.google,zoom:14,style:f,initialCenter:{lat:37.778519,lng:-122.40564}},e.state.info.map((function(t){return r.a.createElement(h.Marker,{onClick:e.onMarkerClick,src:t.src,info:t.info,title:t.title,name:t.name,position:t.location})})),r.a.createElement(h.Marker,{title:"The marker`s title will appear as a tooltip.",info:"RESTAURANT 1",onClick:e.onMarkerClick,position:{lat:37.778519,lng:-122.408864}}),r.a.createElement(h.InfoWindow,{marker:e.state.activeMarker,visible:e.state.showingInfoWindow},r.a.createElement("div",null,r.a.createElement("h4",null,e.state.activeInfo),r.a.createElement("img",{style:{width:"350px",height:"350px"},src:e.state.img})))))},e.state={show:!0,min:0,max:0,info:[0,0]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(this.Displayable,null),r.a.createElement("br",null),r.a.createElement(p.a,{onClick:this.route,variant:"dark"},"ROUTE"))}}]),t}(r.a.Component),E=Object(h.GoogleApiWrapper)({apiKey:"AIzaSyC6BrTtbUsJxdWJuRPI99wOs_6hXa_WhdU"})(d);l.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.12919995.chunk.js.map