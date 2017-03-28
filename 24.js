webpackJsonp([24],{1173:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r),s=n(128),l=n(76),u=n(40),p=n(136),d=n(1272),f=n(1424),h=n(38),m=n(37),b=n(63),g=(n.n(b),n(173)),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),w=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),v(t,[{key:"componentDidMount",value:function(){this.props.account&&l.a.isMyAccount(this.props.account)&&s.a.setCurrentAccount.defer(this.props.account.get("name")),g.a.getPossibleFees(this.props.account,"transfer")}},{key:"render",value:function(){var e=this.props,t=e.myAccounts,n=e.linkedAccounts,o=e.account_name,a=e.searchAccounts,c=e.settings,r=e.wallet_locked,s=e.account,u=e.hiddenAssets,p=l.a.isMyAccount(s);return i.a.createElement("div",{className:"grid-block page-layout"},i.a.createElement("div",{className:"show-for-medium grid-block shrink left-column no-padding",style:{minWidth:250}},i.a.createElement(f.a,{account:s,isMyAccount:p,linkedAccounts:n,myAccounts:t,viewSettings:this.props.viewSettings})),i.a.createElement("div",{className:"grid-block main-content"},i.a.createElement("div",{className:"grid-container",style:{paddingTop:25}},i.a.cloneElement(i.a.Children.only(this.props.children),{account_name:o,linkedAccounts:n,searchAccounts:a,settings:c,wallet_locked:r,account:s,isMyAccount:p,hiddenAssets:u,contained:!0,balances:s.get("balances",null),orders:s.get("orders",null),backedCoins:this.props.backedCoins,bridgeCoins:this.props.bridgeCoins}))))}}]),t}(i.a.Component);w.propTypes={account:h.a.ChainAccount.isRequired},w.defaultProps={account:"props.params.account_name"},w=n.i(m.a)(w,{keep_updating:!0,show_loader:!0});var E=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),v(t,[{key:"render",value:function(){var e=this.props.routeParams.account_name;return i.a.createElement(w,y({},this.props,{account_name:e}))}}]),t}(i.a.Component);t.default=n.i(b.connect)(E,{listenTo:function(){return[l.a,u.a,p.a,d.a]},getProps:function(){return{linkedAccounts:l.a.getState().linkedAccounts,searchAccounts:l.a.getState().searchAccounts,settings:u.a.getState().settings,hiddenAssets:u.a.getState().hiddenAssets,wallet_locked:p.a.getState().locked,myAccounts:l.a.getState().myAccounts,viewSettings:u.a.getState().viewSettings,backedCoins:d.a.getState().backedCoins,bridgeCoins:d.a.getState().bridgeCoins}}})},1241:function(e,t,n){"use strict";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.b.BASE+g.b.COINS_LIST;return fetch(e).then(function(e){return e.json().then(function(e){return e})}).catch(function(t){console.log("error fetching blocktrades list of coins",t,e)})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.b.BASE+g.b.TRADING_PAIRS;return fetch(e,{method:"get",headers:new Headers({Accept:"application/json"})}).then(function(e){return e.json().then(function(e){return e})}).catch(function(t){console.log("error fetching blocktrades list of coins",t,e)})}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.b.BASE+g.b.DEPOSIT_LIMIT;return fetch(n+"?inputCoinType="+encodeURIComponent(e)+"&outputCoinType="+encodeURIComponent(t),{method:"get",headers:new Headers({Accept:"application/json"})}).then(function(e){return e.json().then(function(e){return e})}).catch(function(n){console.log("error fetching deposit limit of",e,t,n)})}function r(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:g.b.BASE+g.b.ESTIMATE_OUTPUT;return fetch(o+"?inputAmount="+encodeURIComponent(e)+"&inputCoinType="+encodeURIComponent(t)+"&outputCoinType="+encodeURIComponent(n),{method:"get",headers:new Headers({Accept:"application/json"})}).then(function(e){return e.json().then(function(e){return e})}).catch(function(e){console.log("error fetching deposit limit of",t,n,e)})}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.b.BASE+g.b.ACTIVE_WALLETS;return fetch(e).then(function(e){return e.json().then(function(e){return e})}).catch(function(t){console.log("error fetching blocktrades active wallets",t,e)})}function s(e){var t=e.inputCoinType,n=e.outputCoinType,o=e.outputAddress,a=e.url,c=void 0===a?g.b.BASE_OL:a,r=e.stateCallback,i={inputCoinType:t,outputCoinType:n,outputAddress:o},s=JSON.stringify(i);fetch(c+"/simple-api/initiate-trade",{method:"post",headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:s}).then(function(e){e.json().then(function(e){var t={address:e.inputAddress||"unknown",memo:e.inputMemo,error:e.error||null};r&&r(t)},function(e){r&&r({address:"unknown",memo:null})})},function(e){r&&r({address:"unknown",memo:null})}).catch(function(e){console.log("fetch error:",e)})}function l(e){var t=e.allCoins,n=e.backer,o={};t.forEach(function(e){return o[e.coinType]=e});var a=[];return t.forEach(function(e){e.walletSymbol.startsWith(n+".")&&e.backingCoinType&&o[e.backingCoinType]&&a.push({name:o[e.backingCoinType].name,walletType:o[e.backingCoinType].walletType,backingCoinType:o[e.backingCoinType].walletSymbol,symbol:e.walletSymbol,supportsMemos:o[e.backingCoinType].supportsOutputMemos})}),a}function u(e){var t=e.url,n=void 0===t?g.b.BASE:t,o=e.walletType,a=e.newAddress;return a?fetch(n+"/wallets/"+o+"/address-validator?address="+encodeURIComponent(a),{method:"get",headers:new Headers({Accept:"application/json"})}).then(function(e){return e.json().then(function(e){return e.isValid})}).catch(function(e){console.log("validate error:",e)}):new Promise(function(e){return e()})}function p(e){return y.has("history_address_"+e)}function d(e){var t=e.wallet,n=e.addresses;y.set("history_address_"+t,n)}function f(e){return y.get("history_address_"+e,[])}function h(e){var t=e.wallet,n=e.address;y.set("history_address_last_"+t,n)}function m(e){return y.get("history_address_last_"+e,"")}var b=n(93),g=n(389);t.a=o,t.d=a,t.h=c,t.i=r,t.b=i,t.g=s,t.c=l,t.f=u,n.d(t,"e",function(){return v});var y=new b.a(""),v={has:p,set:d,get:f,setLast:h,getLast:m}},1248:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=n(9),c=n(1241),r=function(){function e(e,t){var n=[],o=!0,a=!1,c=void 0;try{for(var r,i=e[Symbol.iterator]();!(o=(r=i.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){a=!0,c=e}finally{try{!o&&i.return&&i.return()}finally{if(a)throw c}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s={},l=function(){function e(){o(this,e)}return i(e,[{key:"fetchCoins",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.backer,o=void 0===t?"OPEN":t,a=e.url,i=void 0===a?void 0:a;return s["fetchCoins_"+o]?{}:(s["fetchCoins_"+o]=!0,function(e){Promise.all([n.i(c.a)(i),n.i(c.b)(i)]).then(function(t){delete s["fetchCoins_"+o];var a=r(t,2),i=a[0],l=a[1];e({coins:i,backedCoins:n.i(c.c)({allCoins:i,backer:o}).filter(function(e){return l.indexOf(e.walletType)!==-1}),backer:o})})})}},{key:"fetchBridgeCoins",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return s.fetchBridgeCoins?{}:(s.fetchBridgeCoins=!0,function(t){Promise.all([n.i(c.a)(e),n.i(c.d)(e),n.i(c.b)(e)]).then(function(e){delete s.fetchBridgeCoins;var n=r(e,3),o=n[0],a=n[1],c=n[2];t({coins:o,bridgeCoins:a,wallets:c})})})}}]),e}();t.a=a.a.createActions(l)},1272:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=n(25),c=n.n(a),r=n(9),i=n(1248),s=n(93),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=new s.a("__graphene__"),p=function(){function e(){o(this,e),this.coins=c.a.Map(),this.backedCoins=c.a.Map(u.get("backedCoins",{})),this.bridgeCoins=c.a.Map(c.a.fromJS(u.get("bridgeCoins",{}))),this.bridgeInputs=["btc","dash","eth","steem"],this.bindListeners({onFetchCoins:i.a.fetchCoins,onFetchBridgeCoins:i.a.fetchBridgeCoins})}return l(e,[{key:"onFetchCoins",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.backer,n=e.coins,o=e.backedCoins;t&&n&&(this.coins=this.coins.set(t,n),this.backedCoins=this.backedCoins.set(t,o),u.set("backedCoins",this.backedCoins.toJS()))}},{key:"onFetchBridgeCoins",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.coins,o=t.bridgeCoins,a=t.wallets;if(n&&o){var r={};n.forEach(function(e){return r[e.coinType]=e}),o=o.filter(function(t){return t&&a.indexOf(r[t.outputCoinType].walletType)!==-1&&"bitshares2"===r[t.outputCoinType].walletType&&e.bridgeInputs.indexOf(t.inputCoinType)!==-1}).forEach(function(t){e.bridgeCoins=e.bridgeCoins.setIn([r[t.outputCoinType].walletSymbol,t.inputCoinType],c.a.fromJS(t))}),u.set("bridgeCoins",this.bridgeCoins.toJS())}}}]),e}();t.a=r.a.createStore(p,"GatewayStore")},1305:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n(1),i=n.n(r),s=n(262),l=n(15),u=n(38),p=n(37),d=n(19),f=n.n(d),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),h(t,[{key:"render",value:function(){var e=this.props,t=e.account,n=e.image_size,o=l.a.get_object_id(t.get("id")),a=t.get("lifetime_referrer_name")===t.get("name");return i.a.createElement("div",{className:"account-info"+(this.props.my_account?" my-account":"")},this.props.title?i.a.createElement("h4",null,this.props.title):null,i.a.createElement(s.a,{size:n,account:t.get("name"),custom_image:null}),i.a.createElement("h4",{className:"account-title"},i.a.createElement("span",{className:a?"lifetime":""},t.get("name"))),i.a.createElement("div",{className:"secondary"},i.a.createElement("span",{className:"subheader"},"#",o),this.props.my_account?i.a.createElement("span",{className:"my-account-label"},i.a.createElement(f.a,{content:"account.mine"})):null))}}]),t}(i.a.Component);m.propTypes={account:u.a.ChainAccount.isRequired,title:i.a.PropTypes.string,image_size:i.a.PropTypes.object.isRequired,my_account:i.a.PropTypes.bool},m.defaultProps={title:null,image_size:{height:120,width:120}},t.a=n.i(p.a)(m)},1424:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n(1),i=n.n(r),s=n(39),l=n(22),u=n.n(l),p=n(133),d=n.n(p),f=(n(64),n(1305)),h=n(19),m=n.n(h),b=n(128),g=n(49),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),v=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.last_path=null,n.state={showAdvanced:e.viewSettings.get("showAdvanced",!1)},n}return c(t,e),y(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=this.last_path!==window.location.hash;return this.last_path=window.location.hash,n||this.props.account!==e.account||this.props.linkedAccounts!==e.linkedAccounts||t.showAdvanced!==this.state.showAdvanced}},{key:"componentWillUnmount",value:function(){d.a.hide()}},{key:"onLinkAccount",value:function(e){e.preventDefault(),b.a.linkAccount(this.props.account.get("name"))}},{key:"onUnlinkAccount",value:function(e){e.preventDefault(),b.a.unlinkAccount(this.props.account.get("name"))}},{key:"_toggleAdvanced",value:function(e){e.preventDefault();var t=!this.state.showAdvanced;this.setState({showAdvanced:t}),g.a.changeViewSetting({showAdvanced:t})}},{key:"render",value:function(){var e=this.props,t=e.account,n=e.linkedAccounts,o=e.isMyAccount,a=t.get("name"),c=null;c=o?null:n.has(a)?i.a.createElement("a",{style:{marginBottom:"1rem",marginRight:0},href:!0,className:"button outline block-button",onClick:this.onUnlinkAccount.bind(this)},i.a.createElement(m.a,{content:"account.unfollow"})):i.a.createElement("a",{style:{marginBottom:"1rem",marginRight:0},href:!0,className:"button outline block-button",onClick:this.onLinkAccount.bind(this)},i.a.createElement(m.a,{content:"account.follow"}));var r=(u.a.translate("header.settings"),this.state.showAdvanced?i.a.createElement("span",null,"▼"):i.a.createElement("span",null,"▲"));return i.a.createElement("div",{className:"grid-block vertical account-left-panel no-padding no-overflow"},i.a.createElement("div",{className:"grid-block"},i.a.createElement("div",{className:"grid-content no-padding",style:{overflowX:"hidden"}},i.a.createElement("div",{className:"regular-padding"},i.a.createElement(f.a,{account:t.get("id"),image_size:{height:140,width:140},my_account:o}),i.a.createElement("div",{className:"grid-container no-margin"},c,i.a.createElement(s.f,{className:"pay-button button small block-button",to:"/transfer/?to="+a},i.a.createElement(m.a,{content:"account.pay"})))),i.a.createElement("section",{className:"block-list"},i.a.createElement("ul",{className:"account-left-menu",style:{marginBottom:0}},i.a.createElement("li",null,i.a.createElement(s.f,{to:"/account/"+a+"/overview/",activeClassName:"active"},i.a.createElement(m.a,{content:"account.overview"}))),i.a.createElement("li",null,i.a.createElement(s.f,{to:"/account/"+a+"/member-stats/",activeClassName:"active"},i.a.createElement(m.a,{content:"account.member.stats"}))),i.a.createElement("li",null,i.a.createElement(s.f,{to:"/account/"+a+"/orders/",activeClassName:"active"},i.a.createElement(m.a,{content:"account.open_orders"}))),i.a.createElement("li",null,i.a.createElement(s.f,{to:"/account/"+a+"/voting/",activeClassName:"active"},i.a.createElement(m.a,{content:"account.voting"}))))),i.a.createElement("div",{style:{paddingBottom:10,paddingTop:20}},i.a.createElement("div",{className:"grid-container no-margin advanced-toggle"},i.a.createElement("a",{onClick:this._toggleAdvanced.bind(this),className:"button outline small block-button",style:{border:"none",textAlign:"left",paddingLeft:"1.75rem"}},i.a.createElement(m.a,{content:"account.user_issued_assets.advanced"}),i.a.createElement("span",null,"  ",r)))),i.a.createElement("section",{className:"block-list"},this.state.showAdvanced?i.a.createElement("ul",{className:"account-left-menu"},i.a.createElement("li",null,i.a.createElement(s.f,{to:"/account/"+a+"/assets/",activeClassName:"active"},i.a.createElement(m.a,{content:"account.user_issued_assets.issued_assets"}))),i.a.createElement("li",null,i.a.createElement(s.f,{to:"/account/"+a+"/permissions/",activeClassName:"active"},i.a.createElement(m.a,{content:"account.permissions"}))),i.a.createElement("li",null,i.a.createElement(s.f,{to:"/account/"+a+"/whitelist/",activeClassName:"active"},i.a.createElement(m.a,{content:"account.whitelist.title"}))),o?i.a.createElement("li",null,i.a.createElement(s.f,{to:"/account/"+a+"/vesting/",activeClassName:"active"},i.a.createElement(m.a,{content:"account.vesting.title"}))):null):null),o?i.a.createElement("div",{className:"regular-padding"},i.a.createElement("div",{className:"button block-button create-account-button"},i.a.createElement(s.f,{to:"/create-account"},i.a.createElement(m.a,{content:"account.create_new"})))):null)))}}]),t}(i.a.Component);v.propTypes={account:i.a.PropTypes.object.isRequired,linkedAccounts:r.PropTypes.object},t.a=v}});
//# sourceMappingURL=24.js.map