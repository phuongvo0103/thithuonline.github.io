(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){e.exports=a(364)},156:function(e,t,a){},157:function(e,t,a){},364:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(43),c=a.n(s),l=(a(156),a(4)),i=a(5),o=a(7),m=a(6),u=a(8),d=a(12),p=(a(157),a(9)),h=a.n(p),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).logout=function(){console.log("\u0111\u0103ng xu\u1ea5t"),h.a.get("/api/users/logout").then(function(e){200===e.status&&(window.location.href="/",console.log(e.data.message))}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},r.a.createElement("a",{className:"navbar-brand active",href:"true",style:{color:"#ffffff"}},"Thi th\u1eed tr\u1eafc nghi\u1ec7m"),r.a.createElement("button",{className:"navbar-toggler hidden-lg-up",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavId"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/danh-sach-mon-thi",className:"nav-link active"},"Trang Ch\u1ee7 ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/admin/question/add",className:"nav-link active"},"Th\xeam c\xe2u h\u1ecfi")),r.a.createElement("li",{className:"nav-item dropdown",style:{position:"absolute",right:15,top:0}},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"true",id:"dropdownId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("img",{src:"/images/avatar-default.png",style:{width:40,height:40},alt:"Avartar",className:"rounded-circle"})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"dropdownId"},r.a.createElement(d.b,{to:"/xem-thong-tin."+localStorage.getItem("user"),className:"dropdown-item"},"Th\xf4ng tin"),r.a.createElement("span",{className:"dropdown-item",style:{cursor:"pointer"},onClick:function(){e.logout()}},"\u0110\u0103ng xu\u1ea5t"))))))}}]),t}(n.Component),v=a(27),b=a(20),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).isChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(b.a)({},t,n))},a.onSubmit=function(e){if(e.preventDefault(),0!==a.state.username.length)if(0!==a.state.password.length){var t={username:a.state.username,password:a.state.password};h.a.post("/api/users/authenticate",t).then(function(e){200===e.status&&(console.log("Login th\xe0nh c\xf4ng!"),localStorage.setItem("user",e.data.user.username_id),a.setState({requiredMessage:"",validatorUsername:"",validatorPassword:""}),a.props.history.push("/danh-sach-mon-thi"))}).catch(function(e){a.setState({requiredMessage:"T\xe0i kho\u1ea3n ho\u1eb7c m\u1eadt kh\u1ea9u kh\xf4ng \u0111\xfang!",validatorUsername:"",validatorPassword:""})})}else a.setState({validatorPassword:"Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u!",validatorUsername:"",requiredMessage:""});else a.setState({validatorUsername:"Vui l\xf2ng nh\u1eadp t\xe0i kho\u1ea3n!",requiredMessage:"",validatorPassword:""})},a.state={username:"",password:"",requiredMessage:"",validatorUsername:"",validatorPassword:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{height:640}},r.a.createElement("div",{className:"col-4 m-auto"},r.a.createElement("form",{style:{padding:20,border:"1px solid #f0f0f0",backgroundColor:"#f0f0f0"},id:"form-login",className:"needs-validation"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputUserName"},"T\xean t\xe0i kho\u1ea3n"),r.a.createElement("input",{type:"text",onChange:function(t){e.isChange(t)},className:"form-control",name:"username",id:"inputUserName","aria-describedby":"usernameHelp",placeholder:"Nh\u1eadp t\xe0i kho\u1ea3n",required:!0}),r.a.createElement("div",{style:{color:"#dc3545",fontSize:"80%"}},this.state.validatorUsername)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputPassword"},"M\u1eadt kh\u1ea9u"),r.a.createElement("input",{type:"password",onChange:function(t){e.isChange(t)},name:"password",className:"form-control",id:"inputPassword",placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u",required:!0}),r.a.createElement("div",{style:{color:"#dc3545",fontSize:"80%"}},this.state.validatorPassword,this.state.requiredMessage)),r.a.createElement("button",{type:"submit",onClick:function(t){e.onSubmit(t)},className:"btn btn-primary"},"\u0110\u0103ng nh\u1eadp"))))))}}]),t}(n.Component),E=a(147),N=a(32),w=a(148),y=a.n(w),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).isChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(b.a)({},t,n)),a.props.getQuestionData({id:t,value:n})},a.printAnswer=function(){var e=["A.","B.","C.","D."],t=-1;return a.state.answers.map(function(n,s){return t++,r.a.createElement("li",{key:s},r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"custom-control material-checkbox"},r.a.createElement("input",{type:"radio",className:"material-control-input",onChange:function(e){a.isChange(e)},name:a.props.id,defaultValue:n.answer_value}),r.a.createElement("span",{className:"material-control-indicator",style:{top:2}}),"\xa0",e[t]+n.answer_name)))})},a.state={answers:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=Object(N.a)(y.a.shuffle(this.props.answers));this.setState({answers:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"carousel-item "+this.props.active},r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",null,r.a.createElement("span",{style:{fontSize:"1.2em",fontWeight:"bold"}},"C\xe2u "+this.props.number+": "+this.props.question_name)),this.printAnswer()))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).getQuestionData=function(e){var t=a.state.dataResult.findIndex(function(t){return t.id===e.id});if(-1===t)a.setState({dataResult:[].concat(Object(N.a)(a.state.dataResult),[e])});else{var n=a.state.dataResult;n[t]=e,a.setState({dataResult:n})}},a.printQuestion=function(){var e=0;return a.state.questions.map(function(t,n){return e++,r.a.createElement(_,{active:1===e?"active":"",key:n,number:e,id:t._id,question_name:t.question_name,answers:t.answers,getQuestionData:function(e){a.getQuestionData(e)}})})},a.nextQuestion=function(){a.state.numberQuetion>=a.state.questions.length?a.setState({numberQuetion:1}):a.setState({numberQuetion:a.state.numberQuetion+1})},a.preQuestion=function(){a.setState({numberQuetion:a.state.numberQuetion-1})},a.submitQuestion=function(){var e=Object(N.a)(a.state.questions),t=Object(N.a)(a.state.dataResult),n=Object(N.a)(e.filter(function(e){return t.find(function(t){return e._id===t.id&&e.answer_correct===t.value})}));e=e.map(function(e){var a=Object(E.a)({},e);return t.forEach(function(e){a._id===e.id&&(a.answer_chooise=e.value)}),a});var r={exam_code:a.props.match.params.id,username:localStorage.getItem("user"),number_correct:n.length,total_complete:a.state.questions.length};h.a.post("/api/examResults/add",r).then(function(t){if(200===t.status){var n={exam_result_id:t.data._id,questions:e};console.log(n),h.a.post("/api/questionHistorys/add",n).then(function(e){200===e.status&&console.log("insert success")}).catch(function(e){console.log(e)}),a.props.history.push("/ket-qua-thi."+t.data._id)}}).catch(function(e){console.log(e)})},a.activePreButton=function(){return 1===a.state.numberQuetion?r.a.createElement("a",{className:"btn btn-primary",onClick:function(){a.preQuestion()},href:"#carouselId","data-slide":"prev",style:{marginRight:"16px",pointerEvents:"none",cursor:"default"},disabled:!0},r.a.createElement("span",null,"Tr\u1edf v\u1ec1")):r.a.createElement("a",{className:"btn btn-primary",onClick:function(){a.preQuestion()},href:"#carouselId","data-slide":"prev",style:{marginRight:"16px"}},r.a.createElement("span",null,"Tr\u1edf v\u1ec1"))},a.state={dataResult:[],questions:[],numberQuetion:1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.id,a=this.props.match.params.pageLimit;h.a.get("/api/questions/pagenation/"+t+"/"+a).then(function(t){e.setState({questions:t.data})}).catch(function(e){})}},{key:"render",value:function(){var e=this;return 0===this.state.questions.length?null:r.a.createElement("div",{className:"container-fluid",style:{backgroundColor:"#F0F0F0",height:640}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 m-auto",id:"card-question"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-title text-center"},r.a.createElement("h4",{className:"card-title"},"C\xe2u h\u1ecfi "+this.state.numberQuetion+"/"+this.state.questions.length)),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{id:"carouselId",className:"carousel slide","data-ride":"carousel","data-interval":"false"},r.a.createElement("div",{className:"carousel-inner",role:"listbox"},this.printQuestion()),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"m-auto"},this.activePreButton(),r.a.createElement("a",{className:"btn btn-primary",onClick:function(){e.nextQuestion()},href:"#carouselId","data-slide":"next"},r.a.createElement("span",null,"Ti\u1ebfp theo")))))))))))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("button",{type:"submit",onClick:function(){e.submitQuestion()},className:"btn btn-primary m-auto"},"N\u1ed9p b\xe0i thi"))))}}]),t}(n.Component),j=["bg-primary","bg-success","bg-info","bg-secondary","bg-warning"],C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).isChange=function(e){var t,n=e.target.name,r=e.target.value,s={pointerEvents:"none",cursor:"default"};r&&(s={pointerEvents:"auto",cursor:"pointer"}),a.setState((t={},Object(b.a)(t,n,r),Object(b.a)(t,"styleActiveLink",s),t))},a.printSelectSubject=function(){for(var e=[],t=0;t<a.state.pageTotal;t++)e.push(r.a.createElement("option",{key:t,value:t},t+1));return e},a.state={bgColor:"",pageLimit:0,pageTotal:0,styleActiveLink:{pointerEvents:"none",cursor:"default"}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=j[Math.random()*j.length|0];this.setState({bgColor:t});var a=this.props._id;h.a.get("/api/questions/getQuestionById/"+a).then(function(t){var a=Math.ceil(t.data.length/60);console.log(t.data.length/60,a),e.setState({pageTotal:a})}).catch(function(e){})}},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card text-white "+this.state.bgColor+" flex-md-row mb-4 shadow-sm h-md-250",style:{width:370}},r.a.createElement("img",{className:"card-img-right flex-auto d-none d-lg-block",alt:this.props.subject_name,src:this.props.src_img,style:{width:200,height:200}}),r.a.createElement("div",{className:"card-body d-flex flex-column align-items-start justify-content-start"},r.a.createElement("strong",{className:"d-inline-block mb-2 text-white"},this.props.subject_name),r.a.createElement("div",{className:"d-inline-block mb-2 text-white"},r.a.createElement("span",null,"Ch\u1ecdn \u0111\u1ec1"),r.a.createElement("select",{name:"pageLimit",onChange:function(e){t.isChange(e)},required:!0},r.a.createElement("option",{value:""},"--Ch\u1ecdn \u0111\u1ec1 thi--"),this.printSelectSubject())),r.a.createElement(d.b,{to:"/bai-thi-mon-"+(e=this.props.subject_name,e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/(\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5)/g,"a")).replace(/(\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5)/g,"e")).replace(/(\xec|\xed|\u1ecb|\u1ec9|\u0129)/g,"i")).replace(/(\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1)/g,"o")).replace(/(\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef)/g,"u")).replace(/(\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9)/g,"y")).replace(/(\u0111)/g,"d")).replace(/([^0-9a-z-\s])/g,"")).replace(/(\s+)/g,"-")).replace(/^-+/g,"")).replace(/-+$/g,""))+"."+this.props._id+"/"+this.state.pageLimit,className:"btn btn-outline-light btn-sm",style:this.state.styleActiveLink,role:"button"},"V\xe0o thi"))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).getListSubjects=function(){return a.state.listSubject.map(function(e,t){return r.a.createElement(C,{key:t,_id:e._id,subject_name:e.subject_name,src_img:e.image})})},a.state={listSubject:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;h.a.get("/api/subjects").then(function(t){e.setState({listSubject:t.data})}).catch(function(e){})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{marginTop:150}},this.getListSubjects())))}}]),t}(n.Component);function S(e){return function(t){function a(){var e;return Object(l.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={loading:!0,redirect:!1},e}return Object(u.a)(a,t),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/checkToken").then(function(t){if(200!==t.status)throw new Error(t.error);e.setState({loading:!1})}).catch(function(t){console.error(t),e.setState({loading:!1,redirect:!0})})}},{key:"render",value:function(){var t=this.state,a=t.loading,n=t.redirect;return a?null:n?r.a.createElement(v.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(e,this.props))}}]),a}(n.Component)}var x=a(44),q=(a(297),a(28)),Q=a.n(q),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).printSelectSubject=function(){return a.state.listSubject.map(function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.subject_name)})},a.isChange=function(e){var t=e.target.name,n=e.target.value;console.log(t,n),a.setState(Object(b.a)({},t,n))},a.notifyAddData=function(){x.b.success("Th\xeam record th\xe0nh c\xf4ng!",{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},a.notifyCheckValidator=function(e){x.b.warn(e,{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},a.notifyError=function(e){x.b.error(e,{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},a.onSubmit=function(e){if(e.preventDefault(),Q.a.isEmpty(a.state.question_name))a.notifyCheckValidator("Vui l\xf2ng nh\u1eadp c\xe2u h\u1ecfi!");else if(Q.a.isEmpty(a.state.answer_1)||Q.a.isEmpty(a.state.answer_2)||Q.a.isEmpty(a.state.answer_3)||Q.a.isEmpty(a.state.answer_4))a.notifyCheckValidator("Vui l\xf2ng nh\u1eadp c\xe2u tr\u1ea3 l\u1eddi!");else if(Q.a.isEmpty(a.state.answer_correct))a.notifyCheckValidator("Vui l\xf2ng ch\u1ecdn \u0111\xe1p \xe1n cho c\xe2u h\u1ecfi!");else if(Q.a.isEmpty(a.state.exam_code))a.notifyCheckValidator("Vui l\xf2ng nh\u1eadp m\xf4n thi!");else{var t=[{answer_name:a.state.answer_1,answer_value:"answer_1"},{answer_name:a.state.answer_2,answer_value:"answer_2"},{answer_name:a.state.answer_3,answer_value:"answer_3"},{answer_name:a.state.answer_4,answer_value:"answer_4"}];console.log(t);var n={question_name:a.state.question_name,answers:t,answer_correct:a.state.answer_correct,exam_code:a.state.exam_code};console.log(n),h.a.post("/api/questions/add",n).then(function(e){200===e.status&&(console.log("Th\xeam th\xe0nh c\xf4ng!"),a.setState({question_name:"",answer_1:"",answer_2:"",answer_3:"",answer_4:"",answer_correct:"",exam_code:""}),a.notifyAddData(),document.getElementById("btn_reset").click())}).catch(function(e){console.log(e),a.notifyError("Th\xeam c\xe2u h\u1ecfi th\u1ea5t b\u1ea1i!")})}},a.state={listSubject:[],question_name:"",answer_1:"",answer_2:"",answer_3:"",answer_4:"",answer_correct:"",exam_code:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;h.a.get("/api/subjects").then(function(t){console.log(t.data),e.setState({listSubject:t.data})}).catch(function(e){})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{marginTop:80}},r.a.createElement("div",{className:"col-10 m-auto"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"colFormLabel",className:"col-sm-2 col-form-label"},"C\xe2u h\u1ecfi"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",onChange:function(t){e.isChange(t)},name:"question_name",defaultValue:this.state.question_name,className:"form-control",required:!0})))),r.a.createElement("div",{className:"custom"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"colFormLabel",className:"col-sm-2 col-form-label"},"\u0110\xe1p \xe1n"),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"row",style:{alignItems:"center",justifyContent:"center"}},r.a.createElement("div",{className:"col-sm-11"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"A")),r.a.createElement("input",{type:"text",onChange:function(t){e.isChange(t)},name:"answer_1",defaultValue:this.state.answer_1,className:"form-control",required:!0}))),r.a.createElement("div",{className:"col-sm-1"},r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("label",{className:"custom-control material-checkbox"},r.a.createElement("input",{type:"radio",className:"material-control-input",onChange:function(t){e.isChange(t)},name:"answer_correct",defaultValue:"answer_1"}),r.a.createElement("span",{className:"material-control-indicator"}))))))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-11"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"B")),r.a.createElement("input",{type:"text",onChange:function(t){e.isChange(t)},name:"answer_2",defaultValue:this.state.answer_2,className:"form-control",required:!0}))),r.a.createElement("div",{className:"col-sm-1"},r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("label",{className:"custom-control material-checkbox"},r.a.createElement("input",{type:"radio",className:"material-control-input",onChange:function(t){e.isChange(t)},name:"answer_correct",defaultValue:"answer_2"}),r.a.createElement("span",{className:"material-control-indicator"}))))))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-11"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"C")),r.a.createElement("input",{type:"text",onChange:function(t){e.isChange(t)},name:"answer_3",defaultValue:this.state.answer_3,className:"form-control",required:!0}))),r.a.createElement("div",{className:"col-sm-1"},r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("label",{className:"custom-control material-checkbox"},r.a.createElement("input",{type:"radio",className:"material-control-input",onChange:function(t){e.isChange(t)},name:"answer_correct",defaultValue:"answer_3"}),r.a.createElement("span",{className:"material-control-indicator"}))))))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-11"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"D")),r.a.createElement("input",{type:"text",onChange:function(t){e.isChange(t)},name:"answer_4",defaultValue:this.state.answer_4,className:"form-control",required:!0}))),r.a.createElement("div",{className:"col-sm-1"},r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("label",{className:"custom-control material-checkbox"},r.a.createElement("input",{type:"radio",className:"material-control-input",onChange:function(t){e.isChange(t)},name:"answer_correct",defaultValue:"answer_4"}),r.a.createElement("span",{className:"material-control-indicator"}))))))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"colFormLabel",className:"col-sm-2 col-form-label"},"M\xf4n thi"),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"input-group"},r.a.createElement("select",{className:"form-control",name:"exam_code",onChange:function(t){e.isChange(t)},required:!0},r.a.createElement("option",{value:""},"--Ch\u1ecdn m\xf4n thi--"),this.printSelectSubject())))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-sm-2"}),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("button",{type:"submit",onClick:function(t){e.onSubmit(t)},className:"btn btn-primary btn-block"},"Th\xeam")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("button",{type:"reset",id:"btn_reset",className:"btn btn-dark btn-block"},"H\u1ee7y b\u1ecf"))))))))),r.a.createElement(x.a,null))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).printResult=function(){return a.state.listResults.map(function(e,t){return r.a.createElement("div",{className:"card-body",key:t},r.a.createElement("h4",{className:"card-title"},"Ch\xfac m\u1eebng b\u1ea1n \u0111\xe3 ho\xe0n th\xe0nh b\xe0i thi!"),r.a.createElement("div",{className:"card-text"},r.a.createElement("h5",null,"K\u1ebft qu\u1ea3"),r.a.createElement("h5",null,"S\u1ed1 c\xe2u tr\u1ea3 l\u1eddi \u0111\xfang: "+e.number_correct+"/"+e.total_complete)),r.a.createElement(d.b,{to:"xem-ket-qua."+e._id,className:"btn btn-info"},"Xem K\u1ebft qu\u1ea3"))})},a.state={listResults:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.id;h.a.get("/api/examResults/"+t).then(function(t){e.setState({listResults:t.data})}).catch(function(e){})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid",style:{height:640,backgroundColor:"#F0F0F0"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"m-auto",style:{position:"relative",top:100}},r.a.createElement("div",{className:"card text-center",style:{width:"38rem"}},this.printResult())))))}}]),t}(n.Component),T=["A.","B.","C.","D."],I="",M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).printAnswer=function(e){var t=-1,a=e.answers.findIndex(function(t){return t.answer_value===e.answer_correct});return I=T[a]+e.answers[a].answer_name,e.answers.map(function(a,n){return t++,e.answer_chooise===e.answer_correct&&e.answer_correct===a.answer_value?r.a.createElement("li",{key:n},r.a.createElement("div",{className:"form-check",style:{fontWeight:"bold",fontStyle:"italic"}},r.a.createElement("input",{type:"radio",readOnly:!0,style:{pointerEvents:"none"},className:"form-check-input",name:e._id,defaultValue:a.answer_value,checked:!0}),r.a.createElement("span",null,T[t]+a.answer_name),r.a.createElement("i",{className:"fas fa-check fa-lg fa-fw",style:{color:"#28a745"}}))):e.answer_chooise===a.answer_value?r.a.createElement("li",{key:n},r.a.createElement("div",{className:"form-check",style:{fontWeight:"bold",fontStyle:"italic"}},r.a.createElement("input",{type:"radio",readOnly:!0,style:{pointerEvents:"none"},className:"form-check-input",name:e._id,defaultValue:a.answer_value,checked:!0}),r.a.createElement("span",null,T[t]+a.answer_name),r.a.createElement("i",{className:"fas fa-times fa-lg fa-fw",style:{color:"red"}}))):r.a.createElement("li",{key:n},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"radio",readOnly:!0,style:{pointerEvents:"none"},className:"form-check-input",name:e._id,defaultValue:a.answer_value}),r.a.createElement("span",null,T[t]+a.answer_name)))})},a.printQuestions=function(){var e=0;return a.state.questions.map(function(t,n){return e++,r.a.createElement("div",{className:"row",key:n},r.a.createElement("div",null,r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",null,r.a.createElement("span",{style:{fontSize:"1.2em",fontWeight:"bold"}},"C\xe2u "+e+": "+t.question_name)),a.printAnswer(t),r.a.createElement("li",null,r.a.createElement("span",{style:{fontSize:"1.1em",fontWeight:"bold"}},"\u0110\xe1p \xe1n: "),r.a.createElement("span",{style:{fontStyle:"italic"}},I)))))})},a.state={examResults:[],questions:[],answerCorrect:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.id;h.a.get("/api/questionHistorys/"+t).then(function(t){t.data&&e.setState({examResults:t.data,questions:t.data[0].questions})}).catch(function(e){})}},{key:"render",value:function(){return console.log(this.state.questions),r.a.createElement("div",{className:"container",style:{marginTop:90}},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col",style:{fontSize:"2.2em"}},"K\u1ebft qu\u1ea3 thi")),this.printQuestions())}}]),t}(n.Component),F=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-sm-4 mb-2"},r.a.createElement("div",{className:"card w-70 text-center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"L\u1ea7n thi th\u1ee9 "+this.props.number),r.a.createElement("div",{className:"card-text"},r.a.createElement("label",null,"S\u1ed1 c\xe2u tr\u1ea3 l\u1eddi \u0111\xfang : "+this.props.number_correct),r.a.createElement("label",null,"S\u1ed1 c\xe2u \u0111\xe3 ho\xe0n th\xe0nh : "+this.props.total_complete)),r.a.createElement(d.b,{to:"/xem-ket-qua."+this.props._id,className:"btn btn-primary"},"Xem k\u1ebft qu\u1ea3"))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).isChange=function(e){var t=e.target.value,n=a.props.match.params.id;console.log(t,n),h.a.get("/api/examResults/"+n+"/"+t).then(function(e){200===e.status&&(console.log(e.data),a.setState({listResult:e.data}))}).catch(function(e){})},a.printSelectSubject=function(){return a.state.listSubject.map(function(e,t){return r.a.createElement("option",{key:t,value:e._id},e.subject_name)})},a.printResultInfo=function(){var e=0;return a.state.listResult.map(function(t,a){return e++,r.a.createElement(F,{key:a,_id:t._id,number:e,number_correct:t.number_correct,total_complete:t.total_complete})})},a.state={listSubject:[],listResult:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;h.a.get("/api/subjects").then(function(t){console.log(t.data),e.setState({listSubject:t.data})}).catch(function(e){})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container",style:{marginTop:90}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card m-auto"},r.a.createElement("div",{className:"card-header"},"Ch\u1ecdn th\xf4ng tin c\u1ea7n xem"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"input-group"},r.a.createElement("select",{className:"form-control",name:"exam_code",onChange:function(t){e.isChange(t)},required:!0},r.a.createElement("option",{value:""},"--Ch\u1ecdn m\xf4n thi--"),this.printSelectSubject()))))),r.a.createElement("div",{className:"row mt-5"},this.printResultInfo()))}}]),t}(n.Component),W=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b,{exact:!0,path:"/",component:g}),r.a.createElement(v.b,{path:"/danh-sach-mon-thi",component:S(O)}),r.a.createElement(v.b,{path:"/bai-thi-mon-:slug.:id/:pageLimit",component:S(k)}),r.a.createElement(v.b,{path:"/admin/question/add",component:S(V)}),r.a.createElement(v.b,{path:"/ket-qua-thi.:id",component:S(R)}),r.a.createElement(v.b,{path:"/xem-ket-qua.:id",component:S(M)}),r.a.createElement(v.b,{path:"/xem-thong-tin.:id",component:S(L)}))}}]),t}(n.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(f,null),r.a.createElement(W,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[151,1,2]]]);
//# sourceMappingURL=main.5c80223c.chunk.js.map