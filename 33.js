webpackJsonp([33],{1179:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),c=n.n(l),s=n(63),i=(n.n(s),n(48)),u=n.n(i),m=n(128),p=n(76),h=n(1312),d=n(402),f=n(33),v=n(132),g=n(39),E=n(392),_=n(267),y=n(130),w=n(19),b=n.n(w),k=n(6),N=n(133),A=n.n(N),C=n(15),S=n(49),P=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),x=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._onBackupDownload=function(){e.setState({step:3})},e.state={validAccountName:!1,accountName:"",validPassword:!1,registrar_account:null,loading:!1,hide_refcode:!0,show_identicon:!1,step:1,showPass:!1},e.onFinishConfirm=e.onFinishConfirm.bind(e),e.accountNameInput=null,e}return o(t,e),P(t,[{key:"componentWillMount",value:function(){S.a.changeSetting({setting:"passwordLogin",value:!0})}},{key:"componentDidMount",value:function(){A.a.rebuild()}},{key:"shouldComponentUpdate",value:function(e,t){return!C.a.are_equal_shallow(t,this.state)}},{key:"isValid",value:function(){var e=0===p.a.getMyAccounts().length,t=this.state.validAccountName;return f.a.getWallet()||(t=t&&this.state.validPassword),e||(t=t&&this.state.registrar_account),t}},{key:"onAccountNameChange",value:function(e){var t={};void 0!==e.valid&&(t.validAccountName=e.valid),void 0!==e.value&&(t.accountName=e.value),this.state.show_identicon||(t.show_identicon=!0),this.setState(t)}},{key:"onPasswordChange",value:function(e){this.setState({validPassword:e.valid,pass:e.value})}},{key:"onFinishConfirm",value:function(e){var t=this;e.included&&e.broadcasted_transaction&&(_.a.unlisten(this.onFinishConfirm),_.a.reset(),n.i(k.c)("getAccount",this.state.accountName).then(function(){console.log("onFinishConfirm"),t.props.router.push("/wallet/backup/create?newAccount=true")}))}},{key:"_unlockAccount",value:function(e,t){f.a.validatePassword(t,!0,e)}},{key:"createAccount",value:function(e,t){var a=this,r=this.refs.refcode?this.refs.refcode.value():null,o=p.a.getState().referralAccount;this.setState({loading:!0}),m.a.createAccountWithPassword(e,t,this.state.registrar_account,o||this.state.registrar_account,0,r).then(function(){a.state.registrar_account?(n.i(k.c)("getAccount",e).then(function(){a.setState({step:2,loading:!1}),a._unlockAccount(e,t)}),_.a.listen(a.onFinishConfirm)):(n.i(k.c)("getAccount",e).then(function(){a.setState({step:2})}),a._unlockAccount(e,t))}).catch(function(t){console.log("ERROR AccountActions.createAccount",t);var n=t.base&&t.base.length&&t.base.length>0?t.base[0]:"unknown error";t.remote_ip&&(n=t.remote_ip[0]),v.a.addNotification({message:"Failed to create account: "+e+" - "+n,level:"error",autoDismiss:10}),a.setState({loading:!1})})}},{key:"onSubmit",value:function(e){if(e.preventDefault(),this.isValid()){var t=this.accountNameInput.getValue(),n=this.refs.password.value();this.createAccount(t,n)}}},{key:"onRegistrarAccountChange",value:function(e){this.setState({registrar_account:e})}},{key:"_renderAccountCreateForm",value:function(){var e=this,t=this.state.registrar_account,n=p.a.getMyAccounts(),a=0===n.length,r=f.a.getWallet(),o=this.isValid(),l=!1,s=t?k.b.getAccount(t):null;s&&s.get("lifetime_referrer")==s.get("id")&&(l=!0);var i=u()("submit-button button no-margin",{disabled:!o||t&&!l});return c.a.createElement("form",{style:{maxWidth:"40rem"},onSubmit:this.onSubmit.bind(this),noValidate:!0},c.a.createElement("p",{style:{fontWeight:"bold"}},c.a.createElement(b.a,{content:"wallet.create_password"})),c.a.createElement(h.a,{ref:function(t){t&&(e.accountNameInput=t.refs.nameInput)},cheapNameOnly:!!a,onChange:this.onAccountNameChange.bind(this),accountShouldNotExist:!0,placeholder:"Account Name (Public)",noLabel:!0}),r?null:c.a.createElement(d.a,{ref:"password",confirmation:!0,onChange:this.onPasswordChange.bind(this),noLabel:!0,passwordLength:12,checkStrength:!0}),a?null:c.a.createElement("div",{className:"full-width-content form-group no-overflow"},c.a.createElement("label",null,c.a.createElement(b.a,{content:"account.pay_from"})),c.a.createElement(E.a,{account_names:n,onChange:this.onRegistrarAccountChange.bind(this)}),t&&!l?c.a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},c.a.createElement(b.a,{content:"wallet.must_be_ltm"})):null),c.a.createElement("div",{className:"divider"}),this.state.loading?c.a.createElement(y.a,{type:"three-bounce"}):c.a.createElement("button",{className:i},c.a.createElement(b.a,{content:"account.create_account"})))}},{key:"_renderAccountCreateText",value:function(){var e=p.a.getMyAccounts(),t=0===e.length;return c.a.createElement("div",null,c.a.createElement("h4",{style:{fontWeight:"bold",paddingBottom:15}},c.a.createElement(b.a,{content:"wallet.wallet_password"})),c.a.createElement(b.a,{style:{textAlign:"left"},unsafe:!0,component:"p",content:"wallet.create_account_password_text"}),c.a.createElement(b.a,{style:{textAlign:"left"},component:"p",content:"wallet.create_account_text"}),t?c.a.createElement(b.a,{style:{textAlign:"left"},component:"p",content:"wallet.first_account_paid"}):c.a.createElement(b.a,{style:{textAlign:"left"},component:"p",content:"wallet.not_first_account"}))}},{key:"_renderBackup",value:function(){var e=this;return c.a.createElement("div",{className:"backup-submit"},c.a.createElement("p",null,c.a.createElement(b.a,{unsafe:!0,content:"wallet.password_crucial"})),c.a.createElement("div",null,this.state.showPass?c.a.createElement("div",null,c.a.createElement("h5",null,c.a.createElement(b.a,{content:"settings.password"}),":"),c.a.createElement("div",{style:{fontWeight:"bold",wordWrap:"break-word"},className:"no-overflow"},this.state.pass)):c.a.createElement("div",{onClick:function(){e.setState({showPass:!0})},className:"button"},c.a.createElement(b.a,{content:"wallet.password_show"}))),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{onClick:function(){e.setState({step:3})},className:"button"},c.a.createElement(b.a,{content:"init_error.understand"})))}},{key:"_renderBackupText",value:function(){return c.a.createElement("div",null,c.a.createElement("p",{style:{fontWeight:"bold"}},c.a.createElement(b.a,{content:"footer.backup"})),c.a.createElement("p",{className:"txtlabel warning"},c.a.createElement(b.a,{unsafe:!0,content:"wallet.password_lose_warning"})))}},{key:"_renderGetStarted",value:function(){return c.a.createElement("div",null,c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(b.a,{content:"wallet.tips_dashboard"}),":"),c.a.createElement("td",null,c.a.createElement(g.f,{to:"dashboard"},c.a.createElement(b.a,{content:"header.dashboard"})))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(b.a,{content:"wallet.tips_account"}),":"),c.a.createElement("td",null,c.a.createElement(g.f,{to:"/account/"+this.state.accountName+"/overview"},c.a.createElement(b.a,{content:"wallet.link_account"})))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(b.a,{content:"wallet.tips_deposit"}),":"),c.a.createElement("td",null,c.a.createElement(g.f,{to:"deposit-withdraw"},c.a.createElement(b.a,{content:"wallet.link_deposit"})))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(b.a,{content:"wallet.tips_transfer"}),":"),c.a.createElement("td",null,c.a.createElement(g.f,{to:"transfer"},c.a.createElement(b.a,{content:"wallet.link_transfer"})))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(b.a,{content:"wallet.tips_settings"}),":"),c.a.createElement("td",null,c.a.createElement(g.f,{to:"settings"},c.a.createElement(b.a,{content:"header.settings"})))))))}},{key:"_renderGetStartedText",value:function(){return c.a.createElement("div",null,c.a.createElement("p",{style:{fontWeight:"bold"}},c.a.createElement(b.a,{content:"wallet.congrat"})),c.a.createElement("p",null,c.a.createElement(b.a,{content:"wallet.tips_explore_pass"})),c.a.createElement("p",null,c.a.createElement(b.a,{content:"wallet.tips_header"})),c.a.createElement("p",{className:"txtlabel warning"},c.a.createElement(b.a,{content:"wallet.tips_login"})))}},{key:"render",value:function(){var e=this.state.step;return c.a.createElement("div",{className:"grid-block vertical page-layout Account_create"},c.a.createElement("div",{className:"grid-block shrink small-12 medium-10 medium-offset-2"},c.a.createElement("div",{className:"grid-content",style:{paddingTop:20}},c.a.createElement(b.a,{content:"wallet.wallet_new",component:"h2"}))),c.a.createElement("div",{className:"grid-block wrap"},c.a.createElement("div",{className:"grid-content small-12 medium-4 medium-offset-2"},1!==e?c.a.createElement("p",{style:{fontWeight:"bold"}},c.a.createElement(b.a,{content:"wallet.step_"+e})):null,1===e?this._renderAccountCreateForm():2===e?this._renderBackup():this._renderGetStarted()),c.a.createElement("div",{className:"grid-content small-12 medium-4 medium-offset-1"},1===e?this._renderAccountCreateText():2===e?this._renderBackupText():this._renderGetStartedText())))}}]),t}(c.a.Component);t.default=n.i(s.connect)(x,{listenTo:function(){return[p.a]},getProps:function(){return{}}})},1312:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(1),c=n.n(l),s=n(48),i=n.n(s),u=n(128),m=n(76),p=n(6),h=n(19),d=(n.n(h),n(22)),f=n.n(d),v=n(166),g=n.n(v),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={value:null,error:null,existing_account:!1},e.handleChange=e.handleChange.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e}return o(t,e),_(t,[{key:"shouldComponentUpdate",value:function(e,t){return t.value!==this.state.value||t.error!==this.state.error||t.account_name!==this.state.account_name||t.existing_account!==this.state.existing_account||e.searchAccounts!==this.props.searchAccounts}},{key:"componentDidUpdate",value:function(){this.props.onChange&&this.props.onChange({valid:!this.getError()})}},{key:"getValue",value:function(){return this.state.value}},{key:"setValue",value:function(e){this.setState({value:e})}},{key:"clear",value:function(){this.setState({account_name:null,error:null,warning:null})}},{key:"focus",value:function(){this.refs.input.focus()}},{key:"valid",value:function(){return!this.getError()}},{key:"getError",value:function(){var e=this;if(null===this.state.value)return null;var t=null;if(this.state.error)t=this.state.error;else if(this.props.accountShouldExist||this.props.accountShouldNotExist){var n=this.props.searchAccounts.find(function(t){return t===e.state.value});this.props.accountShouldNotExist&&n&&(t=f.a.translate("account.name_input.name_is_taken")),this.props.accountShouldExist&&!n&&(t=f.a.translate("account.name_input.not_found"))}return t}},{key:"validateAccountName",value:function(e){this.state.error=""===e?"Please enter valid account name":p.d.is_account_name_error(e),this.state.warning=null,this.props.cheapNameOnly?this.state.error||p.d.is_cheap_name(e)||(this.state.error=f.a.translate("account.name_input.premium_name_faucet")):this.state.error||p.d.is_cheap_name(e)||(this.state.warning=f.a.translate("account.name_input.premium_name_warning")),this.setState({value:e,error:this.state.error,warning:this.state.warning}),this.props.onChange&&this.props.onChange({value:e,valid:!this.getError()}),(this.props.accountShouldExist||this.props.accountShouldNotExist)&&u.a.accountSearch(e)}},{key:"handleChange",value:function(e){e.preventDefault(),e.stopPropagation();var t=e.target.value.toLowerCase();t=t.match(/[a-z0-9\.-]+/),t=t?t[0]:null,this.setState({account_name:t}),this.validateAccountName(t)}},{key:"onKeyDown",value:function(e){this.props.onEnter&&13===event.keyCode&&this.props.onEnter(e)}},{key:"render",value:function(){var e=this.getError()||"",t=i()("form-group","account-name",{"has-error":!1}),n=this.state.warning;return c.a.createElement("div",{className:t},c.a.createElement("section",null,c.a.createElement("label",{className:"left-label"},this.props.placeholder),c.a.createElement("input",{name:"value",type:"text",id:this.props.id,ref:"input",autoComplete:"off",placeholder:null,onChange:this.handleChange,onKeyDown:this.onKeyDown,value:this.state.account_name||this.props.initial_value})),c.a.createElement("div",{style:{textAlign:"left"},className:"facolor-error"},e),c.a.createElement("div",{style:{textAlign:"left"},className:"facolor-warning"},e?null:n))}}]),t}(c.a.Component);y.propTypes={id:l.PropTypes.string,placeholder:l.PropTypes.string,initial_value:l.PropTypes.string,onChange:l.PropTypes.func,onEnter:l.PropTypes.func,accountShouldExist:l.PropTypes.bool,accountShouldNotExist:l.PropTypes.bool,cheapNameOnly:l.PropTypes.bool,noLabel:l.PropTypes.bool},y.defaultProps={noLabel:!1};var w=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),_(t,[{key:"render",value:function(){return c.a.createElement(g.a,{stores:[m.a],inject:{searchAccounts:function(){return m.a.getState().searchAccounts}}},c.a.createElement(y,E({ref:"nameInput"},this.props)))}}]),t}(c.a.Component);t.a=w}});
//# sourceMappingURL=33.js.map