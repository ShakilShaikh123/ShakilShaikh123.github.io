(this.webpackJsonpresumewebsite=this.webpackJsonpresumewebsite||[]).push([[0],{46:function(e,t,n){e.exports=n(73)},51:function(e,t,n){},52:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},53:function(e,t,n){e.exports=n.p+"static/media/stars.ceeaf8d0.jpeg"},58:function(e,t,n){},65:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(11),r=n.n(o),l=(n(51),n(52),n(53),n(19)),s=n(8),c=n(7),d=n(3),m=n(14);n(54),n(55),n(76),n(75);var h=n(44),p=n(15),u=n(16),f=n(18),g=n(17),v=(n(58),function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var i;return Object(p.a)(this,n),(i=t.call(this,e)).state={menuOpen:!1},i}return Object(u.a)(n,[{key:"handleMenuClick",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"handleLinkClick",value:function(e){switch(e){case"Home":this.props.homeDiv.current&&this.props.homeDiv.current.scrollIntoView({behavior:"smooth"});break;case"About":this.props.aboutDiv.current.scrollIntoView({behavior:"smooth"});break;case"Experience":this.props.resumeDiv.current&&this.props.resumeDiv.current.scrollIntoView({behavior:"smooth"});break;case"Portfolio":case"Skill Set":this.props.projectsDiv.current&&this.props.projectsDiv.current.scrollIntoView({behavior:"smooth"});break;case"Contact":this.props.contactDiv.current&&this.props.contactDiv.current.scrollIntoView({behavior:"smooth"})}this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this,t={container:{position:"absolute",top:0,left:"16vw",zIndex:"99",opacity:1,display:"flex",alignItems:"center",background:"black",width:"30vw",height:70,color:"white",fontFamily:"Lobster"},logo:{margin:"0 auto"},body:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",height:"100vh",filter:this.state.menuOpen?"blur(2px)":null,transition:"filter 0.5s ease"}},n=["Home","About","Experience","Contact"].map((function(t,n){return a.a.createElement(y,{key:n,delay:"".concat(.1*n,"s"),onClick:function(){e.handleLinkClick(t)}},t)}));return a.a.createElement("div",{style:{backgroundColor:"black",display:"flex",justifyContent:"flex-start",height:window.innerHeight}},a.a.createElement("div",{style:t.container},a.a.createElement(E,{open:this.state.menuOpen,onClick:function(){return e.handleMenuClick()},color:"#FF0076"})),a.a.createElement(b,{open:this.state.menuOpen},n))}}]),n}(a.a.Component)),y=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var i;return Object(p.a)(this,n),(i=t.call(this,e)).state={hover:!1},i}return Object(u.a)(n,[{key:"handleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var e={container:{opacity:0,animation:"1s appear forwards",animationDelay:this.props.delay},menuItem:{fontFamily:"'Open Sans', sans-serif",fontSize:"1.2rem",padding:"1rem 0",margin:"0 5%",fontStyle:"bold",cursor:"pointer",color:this.state.hover?"#FF0076":"#fafafa",marginLeft:this.state.hover?20:"5%",transition:"color 0.2s ease-in-out",animation:"0.5s slideIn forwards",animationDelay:this.props.delay},line:{width:"90%",height:"1px",background:"invisible",margin:"0 auto",animation:"0.5s shrink forwards",animationDelay:this.props.delay}};return a.a.createElement("div",{style:e.container},a.a.createElement("div",{style:e.menuItem,onClick:this.props.onClick},this.props.children),a.a.createElement("div",{style:e.line}))}}]),n}(a.a.Component),b=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var i;return Object(p.a)(this,n),(i=t.call(this,e)).state={open:!!i.props.open&&i.props.open},i}return Object(u.a)(n,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"render",value:function(){var e={container:{position:"absolute",top:0,left:"16vw",height:this.state.open?"26em":0,width:"30vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"black",opacity:1,color:"#fafafa",transition:"height 0.8s ease",zIndex:2,backgroundColor:"black",paddingLeft:10,paddingRight:20,paddingBottom:0},menuList:{paddingTop:"3rem",width:"100%"}};return a.a.createElement("div",{style:e.container},this.state.open?a.a.createElement("div",{style:e.menuList,className:"disable_text_highlighting"},this.props.children):null)}}]),n}(a.a.Component),E=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var i;return Object(p.a)(this,n),(i=t.call(this,e)).state={open:!!i.props.open&&i.props.open,color:i.props.color?i.props.color:"black"},i}return Object(u.a)(n,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t={container:{height:"64px",width:"64px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer"},line:{height:"2px",width:"22px",background:this.state.color,transition:"all 0.2s ease"},lineTop:{transform:this.state.open?"rotate(45deg)":"none",transformOrigin:"top left",marginBottom:"5px",display:"flex",position:"absolute",left:20,top:30},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none",display:"flex",position:"absolute",left:20,top:38},lineBottom:{transform:this.state.open?"translateX(-1px) rotate(-45deg)":"none",transformOrigin:"top left",marginTop:"5px",display:"flex",position:"absolute",left:20,top:40}};return a.a.createElement("div",{style:t.container,onClick:this.props.onClick?this.props.onClick:function(){e.handleClick()}},a.a.createElement("div",{style:Object(d.a)(Object(d.a)({},t.line),t.lineTop)}),a.a.createElement("div",{style:Object(d.a)(Object(d.a)({},t.line),t.lineMiddle)}),a.a.createElement("div",{style:Object(d.a)(Object(d.a)({},t.line),t.lineBottom)}))}}]),n}(a.a.Component);a.a.Component;var w=v,k=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={height:0,width:0,stuckBottom:!1,stuckLeft:!1,stuckRight:!1,stuckTop:!1},e.frameId=0,e.stickyDiv=a.a.createRef(),e.handleScroll=function(){var t=e.props.sides,n=e.stickyDiv.current||null,i=e.props.scrollTarget||window;if(e.frameId=0,n){var a=i.getBoundingClientRect?i.getBoundingClientRect():{height:i.innerHeight,width:i.innerWidth,top:0,bottom:0,left:0,right:0,x:i.scrollX,y:i.scrollY},o=n.getBoundingClientRect();if(e.state.height&&e.state.width||e.setState({height:o.height,width:o.height}),o={height:e.state.height||o.height,width:e.state.width||o.width,x:o.x,y:o.y},"number"===typeof t.bottom){var r=o.y+o.height>a.height+a.top-t.bottom;e.setState({stuckBottom:r})}if("number"===typeof t.top){var l=o.y<a.top+t.top;e.setState({stuckTop:l})}if("number"===typeof t.left){var s=o.x<a.left+t.left;e.setState({stuckLeft:s})}if("number"===typeof t.right){var c=o.x+o.width>a.width+a.left-t.right;e.setState({stuckRight:c})}}},e.debouncedScroll=function(){if(!e.frameId){var t=requestAnimationFrame(e.handleScroll);e.frameId=t}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.addEvents(),this.handleScroll()}},{key:"componentDidUpdate",value:function(e){e.scrollTarget!==this.props.scrollTarget&&(this.removeEvents(),this.addEvents())}},{key:"componentWillUnmount",value:function(){this.removeEvents()}},{key:"addEvents",value:function(){var e=this.props.scrollTarget||window;e&&this.stickyDiv.current&&e.addEventListener("scroll",this.debouncedScroll)}},{key:"removeEvents",value:function(){var e=this.props.scrollTarget||window;e&&e.removeEventListener("scroll",this.debouncedScroll),this.frameId&&cancelAnimationFrame(this.frameId)}},{key:"render",value:function(){var e=this.props.children,t=this.state,i=t.stuckBottom,o=t.stuckLeft,r=t.stuckRight,l=t.stuckTop,s=[];i&&s.push("stuck-bottom"),o&&s.push("stuck-left"),r&&s.push("stuck-right"),l&&s.push("stuck-top");var c=a.a.Children.map(e,(function(e){var t=e.props&&e.props.modifiers||[];return a.a.cloneElement(e,{modifiers:[].concat(Object(h.a)(t),s)})}));return a.a.createElement("div",{className:n.baseClass,ref:this.stickyDiv},c)}}]),n}(a.a.Component);k.baseClass="tk-sticky",k.defaultProps={scrollTarget:null,sides:{top:0}};n(59),n(65);var S=n(23),x=n.n(S),O=n(31),j={ABOUT_TITLE:"Let me introduce myself",ABOUT_DESC:"Hello. My name is Shakil Shaikh. I'm originally from Pune, Maharashtra where I received my Education, I have studied in Poona College and received Bachelor of Computer Science Degree from Pune University. I have started my developing apps from second year of my college where I had published my first app on Google Play Store, during my College I had published 3 Native Android Apps on Google Play Store. I had worked in several companies where I learned strong professional skills in React Native, React JS, JavaScript, Bootstrap, HTML, CSS . I also have an understanding of languages like Golang and Java. I believe different languages just have different syntax delivering the expected output. So you just to need to study for a few hours to learn only language syntax or a few of its concepts to start using on it.",FULL_NAME:"Shakil Shaikh",BIRTH_DATE:"12/DEC/1994",JOB:"REACT NATIVE DEVELOPER",EMAIL_ID:"shakilshaikh009.ss@gmail.com",SKILLS_DESC:"Native Libraries integration, Android Studio / XCode, IOS and Android App Development and Deployment on Android and Apple App Store, Payment Integration, Firebase Integration, Android and IOS Push Notification, Responsive Application UI to support both Android and IOS Platforms, D3.js, Redux with Redux thunk and Redux Saga, White Labelling the Application, Expo Apps, Bare Native Apps, Android Native Libraries Customization (In JAVA)",SKILLS_ARR:[{name:"React Native",per:"90%"},{name:"React JS",per:"40%"},{name:"Android",per:"20%"},{name:"Go",per:"10%"}],EXP_ARR:[{title:"Sr React Native Developer",duration:"29/4/2019 - 16/4/2020",company:"Proctur",desc:"This is an Educational product based company. I am working as a Sr React Native Developer. My role is designing the Application and handling the team for interns. I have worked on modules such as Payment Integration, Video Streaming, Document Reader, Responsive Apps supporting all devices and platforms such as Android and IOS. Deployment of Application on Android Play Store and Apple App Store."},{title:"React Native Developer",duration:"14/9/2018 - 11/2/2019",company:"Codism LLC",desc:"This is a service based company where I worked as React Native Developer, we had a team of Project Manager, Backend Developer, Tester. We had a weekly meeting call with client where we have converted the requirement to the successfully delivery of the Project, during my work I have also trained the intern."},{title:"Software Engineer (Full Stack Developer)",duration:"14/9/2017 \u2013  3/7/2018",company:"Qwentic Consulting Pvt. Ltd. Pune",desc:"This is the service based company primarily focussing on the Golang based backend Projects. I have worked on Golang, React Native, Android, HTML, PHP"},{title:"Software Engineer (Android Developer)",duration:"5/4/2017 \u2013 7/9/2017",company:"Gatesoft Solutions pvt. Ltd. Pune",desc:"This is a service based company. I have done my internship here and have worked here as an Android Developer."}],ADDRESS:"Pune, Maharashtra, India",EMAIL_ME_AT:"shakilshaikh009.ss@gmail.com",CALL_ME_AT:"(+91) 9373266753"};var C=function(e){return a.a.createElement("div",{style:{width:"90%"}},a.a.createElement("div",{style:{width:"100%",marginTop:-4}},a.a.createElement("div",{style:{position:"relative",top:"2.1rem",fontSize:20,fontWeight:"bold"}},e.name),a.a.createElement("div",{style:{height:45,left:"".concat(e.per),marginLeft:"".concat(e.per)}},a.a.createElement("img",{style:{position:"absolute"},src:"./assets/interface.png",width:40,height:40}),a.a.createElement("div",{style:{position:"absolute",color:"white",marginLeft:5,marginTop:5,fontSize:14,fontWeight:"bold"}},e.per)),a.a.createElement("div",{style:{backgroundColor:"#313131",height:6}})))},A=function(e){var t=Object(i.useState)(!1),n=Object(m.a)(t,2),o=n[0],r=n[1];return a.a.createElement("div",{onClick:function(){e.aboutDiv.current.scrollIntoView({behavior:"smooth",block:"nearest"})},onMouseEnter:function(){r(!0)},onMouseLeave:function(){r(!1)},style:{display:"flex",cursor:"pointer",borderWidth:3,borderColor:o?"#FF0076":"#676164",paddingLeft:"4vw",paddingRight:"4vw",paddingTop:"1vw",paddingBottom:"1vw",borderStyle:"solid",justifyContent:"center",alignItems:"center",marginTop:"5vw"}},a.a.createElement("div",{style:{color:"white",fontSize:"1.2rem",fontWeight:"500"}},"MORE ABOUT ME"),a.a.createElement("i",{"aria-hidden":"true",class:"angle down icon big icon",style:{color:"white",marginLeft:"1vw"}}))},I=function(e){return a.a.createElement("div",null,a.a.createElement(B,{styles:{marginTop:20,fontSize:25}},"Experience"),a.a.createElement(O.Timeline,{lineColor:"#ddd"},j.EXP_ARR.map((function(e){var t=e.title,n=e.duration,i=e.company,o=e.desc;return a.a.createElement(T,{title:t,duration:n,company:i,desc:o})}))))},T=function(e){var t=Object(S.useMediaQuery)({query:"(max-width: 1224px)"});return a.a.createElement(O.TimelineItem,{key:"001",style:{color:"#FF0076"},dateComponent:a.a.createElement(D,{title:e.title,duration:e.duration})},a.a.createElement("h3",{style:{marginTop:t?20:0}},e.company),a.a.createElement("div",{style:{width:100,height:5,backgroundColor:"#BCBCBC",marginTop:5,marginBottom:10}}),a.a.createElement("p",{style:{fontSize:"1.2em",lineHeight:1.8}},e.desc))},D=function(e){return a.a.createElement("div",{style:{}},a.a.createElement(x.a,{minDeviceWidth:0,maxWidth:768},a.a.createElement("div",{style:{marginBottom:0,color:"#313131",fontWeight:"700",fontSize:"1.2rem",marginLeft:30,lineHeight:1.4}},e.title),a.a.createElement("div",{style:{color:"black",marginLeft:30,fontSize:15,marginBottom:0}},e.duration)),a.a.createElement(x.a,{minDeviceWidth:769},a.a.createElement("div",{style:{color:"#313131",fontWeight:"700",fontSize:"1.5rem",marginLeft:0,lineHeight:1.5}},e.title),a.a.createElement("div",{style:{color:"black",marginLeft:"2vw",fontSize:15,marginTop:2}},e.duration)))},L=function(e,t,n){return a.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",marginTop:20}},a.a.createElement("i",{"aria-hidden":"true",class:"".concat(e," huge icon"),style:{color:"white"}}),a.a.createElement(B,{styles:{marginTop:20}},t),a.a.createElement("div",{style:{color:"#6E6E6E",width:"100%",textAlign:"center",fontSize:17,marginTop:20}},n))},R=function(e,t){return a.a.createElement("div",{style:{marginTop:20}},a.a.createElement("div",{style:{fontWeight:"800",fontSize:20}},e),a.a.createElement("div",{style:{fontWeight:"400",fontSize:20,marginTop:10,lineHeight:1.5}},t))},B=function(e){var t=e.textColor?e.textColor:"#FF0076";return a.a.createElement("div",{style:Object(d.a)(Object(d.a)({},{color:t,fontSize:20,fontWeight:"800",textAlign:"center"}),e.styles)},e.children)},M=function(e){return a.a.createElement("div",{style:Object(d.a)(Object(d.a)({},{display:"flex",marginTop:20,color:"#313131",fontSize:40,fontWeight:"600",alignSelf:"center",lineHeight:1,textAlign:"center"}),e.styles)},e.children)},W={textStyle:{color:"#313131",fontSize:10,fontWeight:"200",display:"flex"},containerStyle:{backgroundColor:"white",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},subContainerStyle:{backgroundColor:"white",display:"flex",flexDirection:"column",paddingTop:40,paddingBottom:40,marginleft:50,width:"70%"}},F=function(){var e,t,n,o=a.a.createRef(),r=a.a.createRef(),l=a.a.createRef(),s=a.a.createRef(),h=a.a.createRef(),p=a.a.createRef(),u=Object(i.useState)(!1),f=Object(m.a)(u,2);return f[0],f[1],Object(i.useEffect)((function(){document.title="RESUME"})),a.a.createElement("div",{style:{}},a.a.createElement("div",{style:Object(d.a)(Object(d.a)({},{position:"fixed",display:"flex",top:0,left:0,zIndex:100}),{})},a.a.createElement(w,{homeDiv:o,aboutDiv:r,resumeDiv:l,projectsDiv:s,skillSetDiv:h,contactDiv:p})),a.a.createElement("div",{style:Object(d.a)(Object(d.a)({},{position:"fixed",display:"flex",top:0,left:0,zIndex:0,WebkitUserSelect:"none"}),{opacity:1})},a.a.createElement("img",{src:"./assets/intro-bg.jpg",style:Object(c.a)({width:"100%",height:window.innerHeight,objectFit:"cover",filter:"blur(0px)",backgroundColor:"black"},"filter","sepia(130%)")}),a.a.createElement("div",{style:{display:"flex",position:"absolute",top:0,left:0,width:window.innerWidth,height:window.innerHeight,zIndex:10,backgroundColor:"#0D1110DA",backgroundBlendMode:"darken"}})),a.a.createElement("div",{style:{display:"flex",flexDirection:"column",position:"relative"}},a.a.createElement("div",{ref:o,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:window.innerHeight,WebkitUserSelect:"none"}},a.a.createElement("div",{style:{display:"flex",color:"white",fontSize:20,fontWeight:"bold",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"invisible",marginTop:"-2vw"}},a.a.createElement("div",{style:{textAlign:"center",lineHeight:1,fontFamily:"sans-serif",color:"#FF0076",fontWeight:"800",fontSize:"2.1rem",marginBottom:15}},"HELLO, WORLD."),a.a.createElement("div",{style:{textAlign:"center",fontSize:"7rem",lineHeight:1,fontFamily:"sans-serif",fontWeight:"800",marginBottom:10}},"I'm Shakil Shaikh."),a.a.createElement("div",{style:(e={textAlign:"center",fontSize:30,lineHeight:0,fontWeight:"200"},Object(c.a)(e,"lineHeight",1),Object(c.a)(e,"marginTop",20),e)},"| React Native / React JS Senior Developer |")),a.a.createElement(A,{aboutDiv:r})),a.a.createElement("div",{ref:r,style:W.containerStyle},a.a.createElement("div",{style:Object(d.a)(Object(d.a)({},W.subContainerStyle),{WebkitUserSelect:"none",width:"70%"})},a.a.createElement(B,null,"ABOUT"),a.a.createElement(M,{styles:{display:"flex",alignSelf:"center",fontSize:34}},j.ABOUT_TITLE),a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginTop:10,width:"100%"}},a.a.createElement("div",{class:"ui column doubling stackable grid",style:{marginTop:0}},a.a.createElement("div",{class:"four wide column"},a.a.createElement("img",{src:"./assets/shakil.png",style:{width:100,height:100,borderRadius:50,objectFit:"cover"}})),a.a.createElement("div",{class:"twelelve wide column",style:Object(d.a)(Object(d.a)({},W.textStyle),{width:"70%",fontSize:20,lineHeight:1.7,fontWeight:"400"})},j.ABOUT_DESC))))),a.a.createElement("div",{style:Object(d.a)(Object(d.a)({},W.containerStyle),{width:"100%"})},a.a.createElement("div",{style:Object(d.a)(Object(d.a)({},W.subContainerStyle),{WebkitUserSelect:"none",width:"80%"})},a.a.createElement("div",{class:"ui four column doubling stackable grid",style:{marginTop:0,justifyContent:"center"}},a.a.createElement("div",{className:"six wide column"},R("FULL NAME",j.FULL_NAME),R("BIRTH DATE",j.BIRTH_DATE),R("JOB",j.JOB),R("EMAIL",j.EMAIL_ID)),a.a.createElement("div",{className:"six wide column",style:{marginLeft:"0%"}},R("REACT NATIVE SKILL SET",j.SKILLS_DESC),j.SKILLS_ARR.map((function(e){var t=e.name,n=e.per;return a.a.createElement(C,{name:t,per:n})})))))),a.a.createElement("div",{ref:l,style:{backgroundColor:"#EBEBEB"}},a.a.createElement(I,null)),a.a.createElement("div",{ref:p,style:Object(d.a)(Object(d.a)({},W.containerStyle),{backgroundColor:"#141414"})},a.a.createElement("div",{style:Object(d.a)(Object(d.a)({},W.subContainerStyle),{WebkitUserSelect:"none",backgroundColor:"#141414",display:"flex",alignItems:"center",width:"90%"})},a.a.createElement("div",{ref:p,style:{marginTop:120,marginBottom:50,paddingBottom:40,width:"100%",display:"flex",flexDirection:"column"}},a.a.createElement(B,{style:{display:"flex",textAlign:"center"},textColor:"#FF0076"},"CONTACT"),a.a.createElement(M,{styles:{display:"flex",marginTop:40,color:"white"}},"Have something for Me. Feel free to contact me."),a.a.createElement("div",{style:(t={color:"white",marginTop:20,fontSize:"1.7rem",textAlign:"center",width:"60%",alignSelf:"center"},Object(c.a)(t,"marginTop",40),Object(c.a)(t,"fontWeight",400),Object(c.a)(t,"fontFamily","ariel"),Object(c.a)(t,"lineHeight",1.5),t)},"Hi, hope you have read enough about me above. If you still have any queries or want to work with/hire me."),a.a.createElement("div",{class:"ui column doubling stackable grid",style:{marginTop:40}},a.a.createElement("div",{class:"five wide column"},L("map marker alternate","WHERE TO FIND ME",j.ADDRESS)),a.a.createElement("div",{class:"six wide column"},L("envelope","EMAIL ME AT",j.EMAIL_ME_AT)),a.a.createElement("div",{class:"five wide column"},L("phone","CALL ME AT",j.CALL_ME_AT))),a.a.createElement("div",{style:(n={color:"white",display:"flex",justifyContent:"center",alignItems:"center",alignSelf:"center",marginTop:"10vh"},Object(c.a)(n,"color","#7EF8FF"),Object(c.a)(n,"fontSize","1.2rem"),Object(c.a)(n,"textAlign","center"),Object(c.a)(n,"width","70%"),Object(c.a)(n,"fontWeight","800"),n)},"This website is built using React",a.a.createElement("img",{src:"./favicon.ico",width:40,height:40,style:{marginLeft:"2%"}})))))))},z=n(26),H=(a.a.Component,Object(s.a)());var P=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(l.b,{history:H},a.a.createElement(l.a,{path:"/",exact:!0,component:F})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.af651ecc.chunk.js.map