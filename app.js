webpackJsonp([0],{30:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),s=n(c),f=r(83),d=n(f),p=r(31),m=n(p),h=r(4),g=n(h),y=function(e){function t(){var e,r,n,a;o(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={hasMore:!0,page:0,repos:[]},a=r,l(n,a)}return u(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.state,r=t.hasMore,n=t.repos;return s.default.createElement(m.default,{loadMore:function(){return e.loadMore()},hasMore:r,loader:s.default.createElement(g.default,null)},n.map(function(e){return s.default.createElement(d.default,{key:e.id,repo:e})}))}},{key:"loadMore",value:function(){var e=this.props.repos,t=this.state,r=t.repos,n=t.page,o=[].concat(a(r),a(e.slice(10*n,10*n+10)));this.setState({page:n+1,repos:o,hasMore:o.length<e.length})}}]),t}(s.default.Component);t.default=y},32:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=r(7),l={default:{display:"inline-block",margin:"40px",fontSize:"20px",color:"#000"},active:{textDecoration:"underline",fontWeight:"bold"}},u=function(e){var t=e.to,r=e.children;return a.default.createElement(o.NavLink,{style:l.default,to:t,activeStyle:l.active},r)};t.default=u},33:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),s=n(c),f=r(29),d=(n(f),r(4)),p=n(d),m=r(89),h=n(m),g=r(31),y=n(g),v={first:{paddingRight:10},second:{paddingLeft:10,paddingRight:10},third:{paddingLeft:10}},b=function(e){function t(){var e,r,n,a;o(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={hasMore:!0,page:0,users:[]},a=r,l(n,a)}return u(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.state,r=t.hasMore,n=t.users;return s.default.createElement("div",{className:"row"},s.default.createElement(y.default,{loadMore:function(){return e.loadMore()},hasMore:r,loader:s.default.createElement(p.default,null)},n.map(function(e,t){return s.default.createElement("div",{key:e.id,className:"col s4",style:v[["first","second","third"][t%3]]},s.default.createElement(h.default,{user:e}))})))}},{key:"loadMore",value:function(){var e=this.props.users,t=this.state,r=t.users,n=t.page,o=[].concat(a(r),a(e.slice(12*n,12*n+12)));this.setState({page:n+1,users:o,hasMore:o.length<e.length})}}]),t}(s.default.Component);t.default=b},34:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(0),o=n(a),l=r(36),u=n(l),i=r(21),c=n(i),s=r(48),f=n(s);c.default.initialize("UA-53810134-2");var d=o.default.createElement(f.default,null);u.default.render(d,document.getElementById("root"))},4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(){return a.default.createElement("div",{className:"progress white"},a.default.createElement("div",{className:"indeterminate blue"}))};t.default=o},48:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),o=n(a),l=r(7),u=r(75),i=n(u),c=r(77),s=n(c),f=r(87),d=n(f),p=r(91),m=n(p),h=r(94),g=n(h),y=r(95),v=n(y),b=function(){return o.default.createElement(l.BrowserRouter,{basename:"/opensource"},o.default.createElement("div",{id:"app"},o.default.createElement(l.Route,{path:"/",component:v.default}),o.default.createElement(i.default,null),o.default.createElement("div",{className:"container"},o.default.createElement(l.Route,{exact:!0,path:"/",render:function(){return o.default.createElement(l.Redirect,{to:"/repositories"})}}),o.default.createElement(l.Route,{path:"/repositories",component:s.default}),o.default.createElement(l.Route,{path:"/developers",component:d.default}),o.default.createElement(l.Route,{path:"/about",component:m.default})),o.default.createElement(g.default,null)))};t.default=b},5:function(e,t,r){"use strict";function n(e){return new Promise(function(t,r){return s.getUsers().then(function(r){return t((0,l.merge)(e,{languages:o(e.languages),user:(0,l.find)(r.items,{login:e.name.split("/")[0]}),createdAt:new Date(e.createdAt)}))}).catch(r)})}function a(e){return(0,l.merge)(e,{githubUrl:"https://github.com/"+e.login})}function o(e){var t=(0,l.compact)(e.split(/\ +/g)),r=t.map(function(e){return{name:e,color:c[e]}});return(0,l.orderBy)(r,["name"],["asc"])}Object.defineProperty(t,"__esModule",{value:!0}),r(79);var l=r(6),u={repos:null,users:null},i={repos:null,users:null},c={other:"grey lighten-3",c:"grey darken-3 white-text","c#":"green darken-3 white-text",go:"blue darken-4 white-text","c++":"pink accent-2 white-text",php:"indigo lighten-1 white-text",css:"deep-purple white-text",html:"red white-text",java:"brown lighten-3",shell:"green accent-3",pascal:"lime lighten-4",python:"blue darken-3 white-text",haskell:"green accent-4",batchfile:"light-green lighten-3",javascript:"amber lighten-2","objective-c":"blue white-text",coffeescript:"indigo darken-4 white-text"},s={getRepos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{force:!1},t=e.force;return u.repos&&!t?Promise.resolve(u.repos):i.repos?i.repos:(i.repos=fetch("/opensource/data/repos.json").then(function(e){return e.json()}).then(function(e){return Promise.all(e.map(n))}).then(function(e){return u.repos={error:!1,ready:!0,items:e},u.repos}).catch(function(e){return console.error("Cannot fetch repos data.",e),{error:e,ready:!1,items:[]}}),i.repos)},getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{force:!1},t=e.force;return u.users&&!t?Promise.resolve(u.users):i.users?i.users:(i.users=fetch("/opensource/data/users.json").then(function(e){return e.json()}).then(function(e){return e.map(a)}).then(function(e){return u.users={error:!1,ready:!0,items:e},u.users}).catch(function(e){return console.error("Cannot fetch users data.",e),{error:e,ready:!1,items:[]}}),i.users)}};t.default=s},75:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),o=n(a),l=r(7),u=r(76),i=n(u),c=function(e){e.location;return o.default.createElement("nav",{className:"blue darken-1"},o.default.createElement("div",{className:"nav-wrapper container"},o.default.createElement("span",{className:"brand-logo"},o.default.createElement("i",{className:"material-icons"},"code"),"Dominican Open Source"),o.default.createElement("ul",{className:"right hide-on-med-and-down"},o.default.createElement(i.default,{to:"/repositories"},"Repositories"),o.default.createElement(i.default,{to:"/developers"},"Developers"),o.default.createElement(i.default,{to:"/about"},"About"))))};t.default=(0,l.withRouter)(c)},76:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),o=n(a),l=r(7),u=r(29),i=n(u),c=function(e){var t=e.to,r=e.children,n=e.location,a=!!(0,l.matchPath)(n.pathname,{path:t});return o.default.createElement("li",{className:(0,i.default)({active:a})},o.default.createElement(l.Link,{to:t},r))};t.default=(0,l.withRouter)(c)},77:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),o=n(a),l=r(7),u=r(78),i=n(u),c=r(85),s=n(c),f=r(86),d=n(f),p=r(32),m=n(p),h=r(5),g=(n(h),function(e){return o.default.createElement("div",{id:"repositories"},o.default.createElement("div",{className:"row center-align"},o.default.createElement(m.default,{to:"/repositories/popular"},"Popular"),o.default.createElement(m.default,{to:"/repositories/trending"},"Trending"),o.default.createElement(m.default,{to:"/repositories/new"},"New")),o.default.createElement(l.Route,{exact:!0,path:"/repositories",render:function(){return o.default.createElement(l.Redirect,{to:"/repositories/popular"})}}),o.default.createElement(l.Route,{path:"/repositories/popular",component:i.default}),o.default.createElement(l.Route,{path:"/repositories/trending",component:s.default}),o.default.createElement(l.Route,{path:"/repositories/new",component:d.default}))});t.default=g},78:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),c=n(i),s=r(4),f=n(s),d=r(5),p=n(d),m=r(30),h=n(m),g=r(6),y=function(e){function t(){var e,r,n,l;a(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={repos:[],loading:!0,error:!1},l=r,o(n,l)}return l(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;p.default.getRepos().then(function(t){e.setState({repos:t.items,loading:!t.ready,error:t.error})})}},{key:"render",value:function(){var e=this.state,t=e.repos,r=e.loading;e.error;if(r)return c.default.createElement(f.default,null);var n=(0,g.orderBy)(t,["stargazers","forks","watchers","name"],["desc","desc","desc","asc"]),a=1;return _.forEach(n,function(e){e.position=a++}),c.default.createElement(h.default,{repos:n})}}]),t}(c.default.Component);t.default=y},83:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o={avatar:{width:32,height:32,verticalAlign:"middle",marginRight:16},action:{display:"inline-block"},language:{display:"inline-block",padding:"0 10px",marginRight:10,borderRadius:5}},l=function(e){var t=e.repo;return a.default.createElement("div",{className:"card hoverable"},a.default.createElement("div",{className:"card-content"},a.default.createElement("div",{className:"card-title"},t.position&&a.default.createElement("strong",{style:{marginRight:20}},"#",t.position),t.name,a.default.createElement("span",{style:{float:"right"}},a.default.createElement("i",{className:"material-icons"},"star"),t.stargazers)),a.default.createElement("p",null,t.description)),a.default.createElement("div",{className:"card-action"},0===t.languages.length?"(no languages)":t.languages.map(function(e,t){return a.default.createElement("span",{key:t,className:e.color,style:o.language},e.name)})),a.default.createElement("div",{className:"card-action"},a.default.createElement("a",{style:o.action,target:"_blank",href:t.user.githubUrl},a.default.createElement("img",{className:"circle",style:o.avatar,src:t.user.avatarUrl}),t.user.name||t.user.login),a.default.createElement("a",{style:o.action,target:"_blank",href:t.url},a.default.createElement("i",{className:"material-icons left"},"link"),"GitHub Project")))};t.default=l},85:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(){return a.default.createElement("p",{style:{fontSize:"2em",textAlign:"center"}},a.default.createElement("i",{className:"material-icons"},"info_outline")," Coming soon!")};t.default=o},86:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),c=n(i),s=r(4),f=n(s),d=r(5),p=n(d),m=r(30),h=n(m),g=r(6),y=function(e){function t(){var e,r,n,l;a(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={repos:[],loading:!0,error:!1},l=r,o(n,l)}return l(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;p.default.getRepos().then(function(t){e.setState({repos:t.items,loading:!t.ready,error:t.error})})}},{key:"render",value:function(){var e=this.state,t=e.repos,r=e.loading;e.error;if(r)return c.default.createElement(f.default,null);var n=(0,g.orderBy)(t,["createdAt"],["desc"]),a=0;return n.reduce(function(e,t){return e.createdAt!==t.createdAt&&a++,t.position=a,t},{}),c.default.createElement(h.default,{repos:n})}}]),t}(c.default.Component);t.default=y},87:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),o=n(a),l=r(7),u=r(88),i=n(u),c=r(90),s=n(c),f=r(32),d=n(f),p=r(5),m=(n(p),function(e){return o.default.createElement("div",{id:"developers"},o.default.createElement("div",{className:"row center-align"},o.default.createElement(d.default,{to:"/developers/popular"},"Popular"),o.default.createElement(d.default,{to:"/developers/recently-joined"},"Recently Joined")),o.default.createElement(l.Route,{exact:!0,path:"/developers",render:function(){return o.default.createElement(l.Redirect,{to:"/developers/popular"})}}),o.default.createElement(l.Route,{path:"/developers/popular",component:i.default}),o.default.createElement(l.Route,{path:"/developers/recently-joined",component:s.default}))});t.default=m},88:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),c=n(i),s=r(4),f=n(s),d=r(5),p=n(d),m=r(33),h=n(m),g=r(6),y=function(e){function t(){var e,r,n,l;a(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={users:[],loading:!0,error:!1},l=r,o(n,l)}return l(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;p.default.getUsers().then(function(t){e.setState({users:t.items,loading:!t.ready,error:t.error})})}},{key:"render",value:function(){var e=this.state,t=e.users,r=e.loading;e.error;if(r)return c.default.createElement(f.default,null);var n=(0,g.orderBy)(t,["followers","name"],["desc","asc"]);return c.default.createElement(h.default,{users:n})}}]),t}(c.default.Component);t.default=y},89:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o={avatar:{width:64,height:64,verticalAlign:"middle",marginRight:16},action:{display:"inline-block"},fact:{display:"inline-block",marginRight:20}},l=function(e){var t=e.user;return a.default.createElement("div",{className:"card hoverable"},a.default.createElement("div",{className:"card-content"},a.default.createElement("a",{className:"card-title truncate",target:"_blank",href:t.githubUrl},a.default.createElement("img",{className:"circle",style:o.avatar,src:t.avatarUrl}),t.name||t.login),a.default.createElement("p",null,"Followed by: ",t.followers),a.default.createElement("p",null,t.description)),a.default.createElement("div",{className:"card-action"},a.default.createElement("span",{style:o.fact},t.sources," repositories"),a.default.createElement("span",{style:o.fact},t.forked," forks")),a.default.createElement("div",{className:"card-action truncate"},a.default.createElement("a",{style:o.action,target:"_blank",href:t.url},t.url)))};t.default=l},90:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),c=n(i),s=r(4),f=n(s),d=r(5),p=n(d),m=r(33),h=n(m),g=r(6),y=function(e){function t(){var e,r,n,l;a(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={users:[],loading:!0,error:!1},l=r,o(n,l)}return l(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;p.default.getUsers().then(function(t){e.setState({users:t.items,loading:!t.ready,error:t.error})})}},{key:"render",value:function(){var e=this.state,t=e.users,r=e.loading;e.error;if(r)return c.default.createElement(f.default,null);var n=(0,g.orderBy)(t,["createdAt","name"],["desc","asc"]);return c.default.createElement(h.default,{users:n})}}]),t}(c.default.Component);t.default=y},91:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),o=n(a),l=r(92),u=n(l),i=r(93),c=n(i),s=function(){return o.default.createElement("div",{id:"about"},o.default.createElement("h5",null,"About this website"),o.default.createElement("p",null,o.default.createElement("strong",null,"Dominican Open Source")," is an initiative to gather all possible public data about projects in GitHub from developers of the Dominican Republic using the ",o.default.createElement("a",{href:"https://developer.github.com/v4/",target:"_blanks"},"GitHub GraphQL API"),"."),o.default.createElement("p",null,"The main purpose of this website is to show local efforts that Dominicans are contributing toward open source communities."),o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col s6"},o.default.createElement(u.default,null)),o.default.createElement("div",{className:"col s6"},o.default.createElement(c.default,null))))};t.default=s},92:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),c=n(i),s=r(5),f=n(s),d=r(4),p=n(d),m=r(6),h={position:{width:40,display:"inline-block",fontSize:18},name:{fontSize:22,marginRight:10},progress:{height:10}},g=function(e){function t(){var e,r,n,l;a(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={repos:[],loading:!0,error:!1},l=r,o(n,l)}return l(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;f.default.getRepos().then(function(t){e.setState({repos:t.items,loading:!t.ready,error:t.error})})}},{key:"render",value:function(){var e=this.state,t=e.repos,r=e.loading;e.error;if(r)return c.default.createElement(p.default,null);var n=t.reduce(function(e,t){return t.languages.forEach(function(t){e[t.name]||(e[t.name]=0),e[t.name]++}),e},{}),a=(0,m.map)(n,function(e,r){return{name:r,total:e,percentage:(e/t.length*100).toFixed(2)}});a.sort(function(e,t){return t.total-e.total});var o=a.slice(0,10);return c.default.createElement("div",null,c.default.createElement("h4",null,"Popular Languages"),o.map(function(e,t){var r=e.name,n=(e.total,e.percentage);return c.default.createElement("div",{key:r},c.default.createElement("span",{className:"grey-text text-darken-3",style:h.position},"#",t+1),c.default.createElement("span",{style:h.name},r),c.default.createElement("strong",{className:"grey-text text-darken-2"},n,"%"),c.default.createElement("div",{className:"progress blue lighten-4",style:h.progress},c.default.createElement("div",{className:"determinate blue darken-2",style:{width:n+"%"}})))}))}}]),t}(c.default.Component);t.default=g},93:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),s=n(c),f=r(5),d=n(f),p=r(4),m=n(p),h=r(6),g=function(e){function t(){var e,r,n,l;a(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.state={repos:[],users:[],loading:!0,error:!1},l=r,o(n,l)}return l(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([d.default.getRepos(),d.default.getUsers()]).then(function(t){var r=u(t,2),n=r[0],a=r[1];e.setState({repos:n.items,users:a.items,loading:!n.ready||!a.ready,error:n||a})})}},{key:"render",value:function(){var e=this.state,t=e.repos,r=e.users,n=e.loading;e.error;if(n)return s.default.createElement(m.default,null);var a=r.filter(function(e){return e.sources>10}).length,o=t.filter(function(e){return e.stargazers>1}).length,l=t.reduce(function(e,t){return t.languages.forEach(function(t){e[t.name]||(e[t.name]=0),e[t.name]++}),e},{}),u=(0,h.map)(l,function(e,r){return{name:r,total:e,percentage:(e/t.length*100).toFixed(2)}});return u.sort(function(e,t){return t.total-e.total}),s.default.createElement("div",null,s.default.createElement("h4",null,"Statistics"),s.default.createElement("ul",{className:"collection"},s.default.createElement("li",{className:"collection-item"},s.default.createElement("h4",null,s.default.createElement("i",{className:"material-icons"},"perm_identity"),r.length.toLocaleString()," developers ",s.default.createElement("small",null,"are contributing to open source.")),s.default.createElement("p",null,"(organizations are not counted)"),s.default.createElement("p",null,"Among that number of developers, ",s.default.createElement("strong",null,a.toLocaleString()," have more 10 repos"),".")),s.default.createElement("li",{className:"collection-item"},s.default.createElement("h4",null,s.default.createElement("i",{className:"material-icons"},"code"),t.length.toLocaleString()," repos ",s.default.createElement("small",null,"created on GitHub. In average, each user contribute with ",(t.length/r.length).toFixed(1).toLocaleString()," repos.")),s.default.createElement("p",null,"(excluding forks)"),s.default.createElement("p",null,"Interesting, the fact that there are ",s.default.createElement("strong",null,o.toLocaleString()," repos with more than one star"),".")),s.default.createElement("li",{className:"collection-item"},s.default.createElement("h4",null,s.default.createElement("i",{className:"material-icons"},"assessment"),u.length.toLocaleString()," programming languages ",s.default.createElement("small",null,"in use across ",t.length.toLocaleString()," repos.")),s.default.createElement("p",null,"The ",s.default.createElement("strong",null,"less used languages")," among dominican developers in open source via GitHub are: ",u.slice(-10).map(function(e){return e.name}).join(", "),"."))))}}]),t}(s.default.Component);t.default=g},94:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function(){return a.default.createElement("div",{className:"fixed-action-btn"},a.default.createElement("a",{className:"btn-floating btn-large red darken-2"},a.default.createElement("i",{className:"large material-icons"},"more_vert")),a.default.createElement("ul",null,a.default.createElement("li",null,a.default.createElement("a",{className:"btn-floating red darken-2 tooltipped",target:"_blank",href:"https://github.com/developersdo/opensource/issues/new","data-position":"left","data-tooltip":"Report an issue"},a.default.createElement("i",{className:"material-icons"},"bug_report"))),a.default.createElement("li",null,a.default.createElement("a",{className:"btn-floating red darken-2 tooltipped",target:"_blank",href:"https://github.com/developersdo/opensource/","data-position":"left","data-tooltip":"View project on GitHub"},a.default.createElement("i",{className:"material-icons"},"code")))))};t.default=o},95:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),o=(n(a),r(21)),l=n(o),u=function(){var e=window.location.pathname+window.location.search;return l.default.set({page:e}),l.default.pageview(e),null};t.default=u}},[34]);