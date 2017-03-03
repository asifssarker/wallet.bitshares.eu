webpackJsonp([35],{1147:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),o=n.n(l),i=n(37),m=n(21),s=n.n(m),u=n(6),p=n(45),f=n(44),b=n(1393),d=n(163),_=n(170),E=n(381),g=n(266),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),v(t,[{key:"render",value:function(){var e=this.props.dprops;return o.a.createElement(E.a,h({},this.props,{path:"components/AccountMembership",section:"fee-division",nextMaintenanceTime:{time:e.get("next_maintenance_time")}}))}}]),t}(o.a.Component);y.propTypes={dprops:p.a.ChainObject.isRequired},y.defaultProps={dprops:"2.1.0"},y=n.i(f.a)(y);var w=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),v(t,[{key:"upgradeAccount",value:function(e,t,n){n.preventDefault(),d.a.upgradeAccount(e,t)}},{key:"componentWillMount",value:function(){g.a.getFinalFeeAsset(this.props.account,"account_upgrade")}},{key:"render",value:function(){var e=this.props,t=e.gprops,n=e.core_asset,a=this.props.account.toJS(),r=u.b.getAccount(a.lifetime_referrer);r&&(a.lifetime_referrer_name=r.get("name"));var c=u.b.getAccount(a.referrer);c&&(a.referrer_name=c.get("name"));var l=u.b.getAccount(a.registrar);l&&(a.registrar_name=l.get("name"));var m=a.name,p=a.network_fee_percentage/100,f=a.lifetime_referrer_fee_percentage/100,d=100-p-f,g=d*a.referrer_rewards_percentage/1e4,h=100-g-f-p,v=t.getIn(["parameters","current_fees","parameters",8,1,"membership_lifetime_fee"])*t.getIn(["parameters","current_fees","scale"])/1e4,w=(t.getIn(["parameters","current_fees","parameters",8,1,"membership_annual_fee"]),t.getIn(["parameters","current_fees","scale"]),u.b.getAccountMemberStatus(this.props.account)),k="account.member."+w,O=null;"annual"===w&&(O=o.a.createElement("span",null,"(",o.a.createElement(s.a,{content:"account.member.expires"})," ",o.a.createElement(_.a,{time:a.membership_expiration_date}),")"));var j=a.membership_expiration_date;return"1969-12-31T23:59:59"===j?j="Never":"1970-01-01T00:00:00"===j&&(j="N/A"),o.a.createElement("div",{className:"grid-content",style:{overflowX:"hidden"}},o.a.createElement("div",{className:"content-block no-margin"},o.a.createElement("h3",null,o.a.createElement(s.a,{content:k})," ",O),"lifetime"===w?null:o.a.createElement("div",null,o.a.createElement("div",{className:"large-6 medium-8"},o.a.createElement(E.a,{path:"components/AccountMembership",section:"lifetime",feesCashback:100-p,price:{amount:v,asset:n}}),o.a.createElement("div",{className:"button no-margin",onClick:this.upgradeAccount.bind(this,a.id,!0)},o.a.createElement(s.a,{content:"account.member.upgrade_lifetime"})),"    ",null),o.a.createElement("br",null),o.a.createElement("hr",null))),o.a.createElement("div",{className:"content-block no-margin"},o.a.createElement("div",{className:"no-margin grid-block vertical large-horizontal"},o.a.createElement("div",{className:"no-margin grid-block large-5"},o.a.createElement("div",{className:"grid-content"},"lifetime"===w?o.a.createElement("div",null,o.a.createElement("h4",null,o.a.createElement(s.a,{content:"account.member.referral_link"})),o.a.createElement(s.a,{content:"account.member.referral_text"}),":",o.a.createElement("h5",null,"https://bitshares.openledger.info?r="+a.name)):null,o.a.createElement("h4",null,o.a.createElement(s.a,{content:"account.member.fee_allocation"})),o.a.createElement("table",{className:"table key-value-table"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(s.a,{content:"account.member.network_percentage"})),o.a.createElement("td",null,p,"%")),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(s.a,{content:"account.member.lifetime_referrer"}),"    (",o.a.createElement(i.f,{to:"account/"+a.lifetime_referrer_name+"/overview"},a.lifetime_referrer_name),")"),o.a.createElement("td",null,f,"%")),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(s.a,{content:"account.member.registrar"}),"    (",o.a.createElement(i.f,{to:"account/"+a.registrar_name+"/overview"},a.registrar_name),")"),o.a.createElement("td",null,h,"%")),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(s.a,{content:"account.member.referrer"}),"    (",o.a.createElement(i.f,{to:"account/"+a.referrer_name+"/overview"},a.referrer_name),")"),o.a.createElement("td",null,g,"%")),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(s.a,{content:"account.member.membership_expiration"})," "),o.a.createElement("td",null,j)))),o.a.createElement("h4",{style:{paddingTop:"1rem"}},o.a.createElement(s.a,{content:"account.member.fees_cashback"})),o.a.createElement("table",{className:"table key-value-table"},o.a.createElement(b.a,{stat_object:a.statistics})))),o.a.createElement("div",{className:"grid-block large-7"},o.a.createElement("div",{className:"grid-content"},o.a.createElement(y,{account:m,networkFee:p,referrerFee:g,registrarFee:h,lifetimeFee:f,referrerTotalFee:d,maintenanceInterval:t.getIn(["parameters","maintenance_interval"]),vestingThreshold:{amount:t.getIn(["parameters","cashback_vesting_threshold"]),asset:n},vestingPeriod:t.getIn(["parameters","cashback_vesting_period_seconds"])/60/60/24}))))))}}]),t}(o.a.Component);w.propTypes={account:p.a.ChainAccount.isRequired,gprops:p.a.ChainObject.isRequired,core_asset:p.a.ChainAsset.isRequired},w.defaultProps={gprops:"2.0.0",core_asset:"1.3.0"},w=n.i(f.a)(w),t.default=w},1393:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(1),o=n.n(l),i=n(21),m=n.n(i),s=n(109),u=n(45),p=n(44),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),f(t,[{key:"render",value:function(){var e=this.props.stat_object.toJS();return o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(m.a,{content:"account.member.fees_paid"})," "),o.a.createElement("td",null,o.a.createElement(s.a,{amount:parseFloat(e.lifetime_fees_paid),asset:"1.3.0"}))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(m.a,{content:"account.member.fees_pending"})," "),o.a.createElement("td",null,o.a.createElement(s.a,{amount:parseFloat(e.pending_fees),asset:"1.3.0"}))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(m.a,{content:"account.member.fees_vested"})," "),o.a.createElement("td",null,o.a.createElement(s.a,{amount:parseFloat(e.pending_vested_fees),asset:"1.3.0"}))))}}]),t}(o.a.Component);b.propTypes={stat_object:u.a.ChainObject.isRequired},t.a=n.i(p.a)(b,{keep_updating:!0})}});
//# sourceMappingURL=35.js.map