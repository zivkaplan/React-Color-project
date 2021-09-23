(this["webpackJsonpcolor-project"]=this["webpackJsonpcolor-project"]||[]).push([[0],{207:function(e,t,a){},208:function(e,t,a){},340:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(13),l=a.n(r),c=a(38),i=(a(207),a(6)),s=a(21),d=a(12),h=a(11),m=a(9),u=a(15),p=a(17),b=a(28),j=a(409),g=a(407),f=(a(208),a(3));var x,O,C,v=function(e){var t=e.children;return Object(f.jsx)("section",{className:"Page",children:t})},y=a(10),w=a(4),k={up:function(){},down:function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"1199.98px",lg:"1399.98px",xl:"1599.98px"}[e],")")}},S={"@global":{".fade-enter":{opacity:0},".fade-enter-active":{opacity:1,transition:"opacity 500ms ease-out"},".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},Palette:{height:"100vh",display:"flex",flexDirection:"column"},PaletteColors:{height:"90%",overflow:"hidden"},goBack:(x={width:"20%",height:"50%",display:"inline-block",margin:"0 auto",position:"relative",cursor:"pointer",verticalAlign:"top",backgroundColor:"black",textAlign:"center",color:"white","& a":{textDecoration:"none",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",outline:"none",textAlign:"center",fontSize:"1rem",lineHeight:"30px",backgroundColor:"rgba(255, 255, 255, 0.3)",textTransform:"uppercase",border:"none",cursor:"pointer",color:"white"}},Object(w.a)(x,k.down("lg"),{width:"25%",height:"33.33%"}),Object(w.a)(x,k.down("md"),{width:"50%",height:"20%"}),Object(w.a)(x,k.down("xs"),{width:"100%",height:"10%"}),x)},P=a(406),N=a(392),F=a(408),D=a(393),B=a(101),I=a.n(B),T=a(185),E=(a(261),a(344)),A={Navbar:Object(w.a)({display:"flex",height:"6vh",alignItems:"center",justifyContent:"flex-start"},k.down("xs"),{justifyContent:"center",flexDirection:"column",height:"fit-content",padding:"0px 10px 10px"}),sliderContainer:Object(w.a)({width:"100%",flexShrink:2},k.down("xs"),{paddingTop:"5px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}),slider:(O={display:"inline-block",width:"340px",margin:"0 10px"},Object(w.a)(O,k.down("md"),{width:"200px"}),Object(w.a)(O,k.down("sm"),{width:"100px"}),Object(w.a)(O,k.down("xs"),{width:"80%",paddingTop:"5px"}),O),logo:Object(w.a)({marginRight:"15px",padding:"0 13px",backgroundColor:"#eceff1",fontSize:"22px",fontFamily:"'Roboto', sans-serif",height:"100%",display:"flex",alignItems:"center",letterSpacing:"2px",textTransform:"uppercase",minWidth:"260px","& a":{textDecoration:"none",color:"black",paddingTop:"5px",paddingBottom:"5px",width:"100%"}},k.down("xs"),{width:"100%",textAlign:"center"}),selectContainer:{marginRight:"15px",marginLeft:"auto"},currentLevel:{marginRight:"10px"}},L=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={colorFormat:"hex",open:!1},o.handleFormatChange=o.handleFormatChange.bind(Object(m.a)(o)),o.closeSnackbar=o.closeSnackbar.bind(Object(m.a)(o)),o}return Object(h.a)(a,[{key:"handleFormatChange",value:function(e){var t=this;this.setState({open:!0,colorFormat:e.target.value},(function(){return t.props.changeColorFormat(t.state.colorFormat)}))}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.level,o=e.changeLevel,n=this.state,r=n.colorFormat,l=n.open;return Object(f.jsxs)("header",{className:t.Navbar,children:[Object(f.jsx)("div",{className:t.logo,children:Object(f.jsx)(c.b,{to:"/",children:"react-color-picker"})}),this.props.showSlider&&Object(f.jsxs)("div",{className:t.sliderContainer,children:[Object(f.jsxs)("span",{className:"".concat(t.currentLevel),children:["Level: ",this.props.level]}),Object(f.jsx)("div",{className:t.slider,children:Object(f.jsx)(T.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:o,trackStyle:{backgroundColor:"transparent"},handleStyle:{borderColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"},railStyle:{height:8}})})]}),Object(f.jsx)("div",{className:t.selectContainer,children:Object(f.jsxs)(P.a,{value:r,onChange:this.handleFormatChange,children:[Object(f.jsx)(N.a,{value:"hex",children:"HEX"}),Object(f.jsx)(N.a,{value:"rgb",children:"RGB"}),Object(f.jsx)(N.a,{value:"rgba",children:"RGBA"})]})}),Object(f.jsx)(F.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:2e3,open:l,onClose:this.closeSnackbar,message:Object(f.jsx)("span",{children:"Color Format Set To ".concat(r.toUpperCase())}),ContentProps:{"aria-describedby":"message-id"},action:[Object(f.jsx)(D.a,{onClick:this.closeSnackbar,color:"inherit","aria-label":"close",children:Object(f.jsx)(I.a,{})},"close")]})]})}}]),a}(n.a.Component),R=Object(E.a)(A)(L),M=a(175),G=a(54),z=a.n(G),U={ColorBox:(C={boxSizing:"border-box",width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},display:"inline-block",margin:"0 auto",position:"relative",cursor:"pointer",verticalAlign:"top","&:hover .copyButton":{transform:"scale(1)"}},Object(w.a)(C,k.down("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.33%"}}),Object(w.a)(C,k.down("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(w.a)(C,k.down("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),C),autoTextColor:{color:function(e){return z()(e.background).luminance()<=.4?"white":"rgba(0, 0, 0, 0.6)"}},seeMore:{backgroundColor:"rgba(255, 255, 255, 0.3)",position:"absolute",bottom:"0",right:"0",border:"none",width:"60px",height:"30px",lineHeight:"30px",textAlign:"center",textTransform:"uppercase"},copyButton:{transform:"scale(0)",textDecoration:"none",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",outline:"none",textAlign:"center",fontSize:"1rem",lineHeight:"30px",backgroundColor:"rgba(255, 255, 255, 0.3)",textTransform:"uppercase",border:"none",cursor:"pointer"},boxContent:{position:"absolute",width:"100%",padding:"10px",left:"0",bottom:"0",fontSize:"12px",textTransform:"uppercase",letterSpacing:"1px"},copyOverlay:{opacity:"0",transform:"scale(0.1)",zIndex:"0",width:"100%",height:"100%",transition:"transform 600ms ease-in-out"},copyMsg:{position:"fixed",top:"0",left:"0",bottom:"0",right:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"4rem",transform:"scale(0)",opacity:"0",color:"white",transition:"transform 300ms ease-in-out",transitionDelay:"250ms","& h1":Object(w.a)({textAlign:"center",fontWeight:"400",textShadow:"1px 2px black",backgroundColor:"rgba(255, 255, 255, 0.3)",width:"100%",padding:"1rem",marginBottom:"0",textTransform:"uppercase"},k.down("xs"),{fontSize:"6rem"}),"& p":{font:"2rem",fontWeight:"100"}},showOverlay:{opacity:"1",transform:"scale(50)",position:"fixed",zIndex:"100"},showCopyMsg:{opacity:"1",transform:"scale(1)",zIndex:"1000"}},H=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={copyOverlay:!1},o.handleCopy=o.handleCopy.bind(Object(m.a)(o)),o}return Object(h.a)(a,[{key:"handleCopy",value:function(){var e=this;this.setState({copyOverlay:!0},(function(){setTimeout((function(){return e.setState({copyOverlay:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.name,o=e.background,n=e.moreShadesUrl,r=e.showingFullPalette,l=this.state.copyOverlay;return Object(f.jsx)(M.CopyToClipboard,{text:o,onCopy:this.handleCopy,children:Object(f.jsxs)("div",{style:{background:o},className:t.ColorBox,children:[Object(f.jsx)("div",{style:{background:o},className:"".concat(t.copyOverlay," ").concat(l&&t.showOverlay)}),Object(f.jsxs)("div",{className:"".concat(t.copyMsg," ").concat(l&&t.showCopyMsg,"\n                        "),children:[Object(f.jsx)("h1",{children:"Copied!"}),Object(f.jsx)("p",{className:t.autoTextColor,children:o})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:t.boxContent,children:Object(f.jsx)("span",{className:t.autoTextColor,children:a})}),Object(f.jsx)("button",{className:"copyButton ".concat(t.copyButton," ").concat(t.autoTextColor),children:"Copy"})]}),r&&Object(f.jsx)(c.b,{to:n,onClick:function(e){return e.stopPropagation()},children:Object(f.jsx)("span",{className:"".concat(t.seeMore," ").concat(t.autoTextColor),children:"More"})})]})})}}]),a}(n.a.Component),V=Object(y.a)(U)(H),W={PaletteFooter:{backgroundColor:"white",width:"100%",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"700"},emoji:{margin:"0 15px",fontSize:"1.5rem"}};var q,J,Y=Object(y.a)(W)((function(e){var t=e.paletteName,a=e.classes,o=e.emoji;return Object(f.jsxs)("footer",{className:a.PaletteFooter,children:[t,Object(f.jsx)("span",{className:a.emoji,children:o})]})})),K=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={level:500,colorFormat:"hex"},o.changeLevel=o.changeLevel.bind(Object(m.a)(o)),o.changeColorFormat=o.changeColorFormat.bind(Object(m.a)(o)),o}return Object(h.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeColorFormat",value:function(e){this.setState({colorFormat:e})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.palette,o=this.state,n=o.colorFormat,r=o.level,l=a.colors[r].map((function(e){return Object(f.jsx)(V,{background:e[n],name:e.name,showingFullPalette:!0,moreShadesUrl:"/palette/".concat(a.id,"/").concat(e.id)},e.id)}));return Object(f.jsxs)("div",{className:t.Palette,children:[Object(f.jsx)(R,{showSlider:!0,level:r,changeLevel:this.changeLevel,changeColorFormat:this.changeColorFormat}),Object(f.jsx)("div",{className:t.PaletteColors,children:l}),Object(f.jsx)(Y,{paletteName:a.paletteName,emoji:a.emoji})]})}}]),a}(n.a.Component),_=Object(y.a)(S)(K),Q=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={colorFormat:"hex"},o._shades=o.gatherShades(o.props.palette,o.props.colorId),o.changeColorFormat=o.changeColorFormat.bind(Object(m.a)(o)),o}return Object(h.a)(a,[{key:"changeColorFormat",value:function(e){this.setState({colorFormat:e})}},{key:"gatherShades",value:function(e,t){var a=[];return Object.keys(e.colors).forEach((function(o){a.push.apply(a,Object(s.a)(e.colors[o].filter((function(e){return e.id===t}))))})),a.slice(1)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.palette,o=this.state.colorFormat,n=this._shades.map((function(e){return Object(f.jsx)(V,{name:e.name,background:e[o],showingFullPalette:!1},e.name)}));return Object(f.jsxs)("div",{className:t.Palette,children:[Object(f.jsx)(R,{showSlider:!1,changeColorFormat:this.changeColorFormat}),Object(f.jsxs)("div",{className:t.PaletteColors,children:[n,Object(f.jsx)("div",{className:t.goBack,children:Object(f.jsx)(c.b,{className:t.backButton,to:"/palette/".concat(a.id),children:"Go Back"})})]}),Object(f.jsx)(Y,{paletteName:a.paletteName,emoji:a.emoji})]})}}]),a}(n.a.Component),X=Object(y.a)(S)(Q),Z=a(410),$=a(391),ee=a(342),te=a(396),ae=a(397),oe=a(395),ne=a(394),re=a(106),le=a(105),ce=a(176),ie=a.n(ce),se=a.p+"static/media/bg.b590c2f9.svg",de={root:{height:"100vh",overflow:"scroll",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#017DBB",backgroundImage:"url(".concat(se,")")},heading:{fontSize:"2rem",fontWeight:500},container:Object(w.a)({width:"50%",display:"flex",flexDirection:"column",alignItems:"flex-start",flexWrap:"wrap"},k.down("xl"),{width:"70%"}),nav:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",color:"white",fontFamily:"'Roboto', sans-serif","& a":{color:"black",textDecoration:"none",backgroundColor:"#D5D5D5",borderRadius:"5px",padding:"0.7rem 1rem",textAlign:"center",boxShadow:"0px 2px black","&:hover":{backgroundColor:"grey"}}},palettes:(q={boxSizing:"border-box",width:"100%",display:"grid",paddingBottom:"20px",gridTemplateColumns:"repeat(3,30%)",gap:"1.5rem"},Object(w.a)(q,k.down("md"),{gridTemplateColumns:"repeat(2,50%)"}),Object(w.a)(q,k.down("xs"),{gridTemplateColumns:"repeat(1,100%)"}),q)},he=a(102),me=a.n(he),ue={root:{backgroundColor:"white",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover .deleteIcon":{opacity:1}},colors:{overflow:"hidden",borderRadius:"5px",backgroundColor:"#dae1e4",height:"150px",width:"100%"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{width:"20%",height:"25%",display:"inline-block",position:"relative",margin:"0 auto",marginBottom:"-4px"},delete:{},deleteIcon:{position:"absolute",top:"0px",right:"0px",zIndex:2,color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",padding:"10px",boxShadow:"0 0 5px rgba(0,0,0,0.5)",transition:"opacity 150ms ease-out",borderRadius:"5px",opacity:0}},pe=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).deletePaletteDialog=o.deletePaletteDialog.bind(Object(m.a)(o)),o.handleClick=o.handleClick.bind(Object(m.a)(o)),o}return Object(h.a)(a,[{key:"deletePaletteDialog",value:function(e){e.stopPropagation(),this.props.deletePaletteDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.paletteName,o=e.emoji,n=e.colors;return Object(f.jsxs)("div",{className:t.root,onClick:this.handleClick,children:[Object(f.jsx)(me.a,{className:"deleteIcon ".concat(t.deleteIcon),onClick:this.deletePaletteDialog}),Object(f.jsx)("div",{className:t.colors,children:n.map((function(e){return Object(f.jsx)("div",{className:t.miniColor,style:{backgroundColor:e.color}},e.name)}))}),Object(f.jsxs)("h5",{className:t.title,children:[a,Object(f.jsx)("span",{className:t.emoji,children:o})]})]})}}]),a}(n.a.PureComponent),be=Object(y.a)(ue)(pe),je=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={openDeleteDialog:!1,paletteIdToDelete:null},o.toggleDeleteDialog=o.toggleDeleteDialog.bind(Object(m.a)(o)),o.goToPalette=o.goToPalette.bind(Object(m.a)(o)),o.deletePalette=o.deletePalette.bind(Object(m.a)(o)),o}return Object(h.a)(a,[{key:"toggleDeleteDialog",value:function(e){this.setState({openDeleteDialog:!this.state.openDeleteDialog,paletteIdToDelete:this.state.openDeleteDialog?null:e})}},{key:"deletePalette",value:function(){this.props.deletePalette(this.state.paletteIdToDelete),this.toggleDeleteDialog()}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.palettes,r=this.state.openDeleteDialog;return Object(f.jsxs)("div",{className:a.root,children:[Object(f.jsxs)("div",{className:a.container,children:[Object(f.jsxs)("nav",{className:a.nav,children:[Object(f.jsx)("h1",{className:a.heading,children:"React Colors"}),Object(f.jsx)(c.b,{to:"/palette/create",children:"Create Palette"})]}),Object(f.jsx)(j.a,{className:a.palettes,children:n.map((function(t){return Object(f.jsx)(g.a,{classNames:"fade",timeout:500,children:Object(o.createElement)(be,Object(i.a)(Object(i.a)({},t),{},{key:t.id,deletePaletteDialog:e.toggleDeleteDialog,goToPalette:e.goToPalette}))},t.id)}))})]}),Object(f.jsxs)(ne.a,{onClose:this.toggleDeleteDialog,"aria-labelledby":"delete-palette-dialog-title",open:r,children:[Object(f.jsx)(oe.a,{id:"delete-palette-dialog-title",children:"Delete Palette?"}),Object(f.jsxs)($.a,{children:[Object(f.jsxs)(ee.a,{button:!0,onClick:this.deletePalette,children:[Object(f.jsx)(te.a,{children:Object(f.jsx)(Z.a,{style:{backgroundColor:re.a[100],color:re.a[600]},children:Object(f.jsx)(ie.a,{})})}),Object(f.jsx)(ae.a,{primary:"Delete"})]}),Object(f.jsxs)(ee.a,{button:!0,onClick:this.toggleDeleteDialog,children:[Object(f.jsx)(te.a,{children:Object(f.jsx)(Z.a,{style:{backgroundColor:le.a[100],color:le.a[600]},children:Object(f.jsx)(I.a,{})})}),Object(f.jsx)(ae.a,{primary:"cancel"})]})]})]})]})}}]),a}(n.a.Component),ge=Object(y.a)(de)(je),fe=a(71),xe=a(22),Oe=a.n(xe),Ce=a(411),ve=a(74),ye=a(405),we=a(183),ke=a.n(we),Se=a(401),Pe=400,Ne=function(e){return{root:{display:"flex"},hide:{display:"none"},drawer:{width:Pe,flexShrink:0,marginRight:"-5px"},drawerPaper:{width:Pe,display:"flex",alignItems:"center"},drawerHeader:Object(i.a)(Object(i.a)({width:"100%",display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},drawerContainer:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttonsDiv:{width:"100%"},button:{width:"50%"}}},Fe=a(402),De=a(403),Be=a(404),Ie=a(178),Te=a.n(Ie),Ee=function(e){return{root:{display:"flex",maxWidth:"100vw"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(Pe,"px)"),marginLeft:Pe,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:Object(w.a)({marginLeft:12,marginRight:20},k.down("xs"),{marginLeft:0,marginRight:0}),navBtns:Object(w.a)({marginRight:"0.5rem"},k.down("xs"),{margin:"0"}),button:Object(w.a)({margin:"0 0.5rem","& a":{textDecoration:"none"}},k.down("xs"),{marginRight:"0.2rem",fontSize:"12px"}),hide:{display:"none"}}},Ae=a(186),Le=a(400),Re=a(398),Me=a(399),Ge=a(55),ze=(a(282),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={open:!0,newPaletteName:"",emojiPopup:!1},o.handleChange=o.handleChange.bind(Object(m.a)(o)),o.savePalette=o.savePalette.bind(Object(m.a)(o)),o.handleClose=o.handleClose.bind(Object(m.a)(o)),o.handleOpen=o.handleOpen.bind(Object(m.a)(o)),o.openEmojiPicker=o.openEmojiPicker.bind(Object(m.a)(o)),o}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;Ge.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(t){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==t.toLowerCase()}))}))}},{key:"savePalette",value:function(e){this.props.handleSubmit(this.state.newPaletteName,e.native),this.handleClose()}},{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleClose",value:function(){this.setState({emojiPopup:!1}),this.props.handleClose()}},{key:"handleOpen",value:function(){this.props.handleOpen()}},{key:"openEmojiPicker",value:function(){this.setState({emojiPopup:!0,namePopup:!1})}},{key:"render",value:function(){var e=this.state,t=e.emojiPopup,a=e.newPaletteName,o=this.props.popupState;return Object(f.jsxs)("div",{children:[Object(f.jsxs)(ne.a,{open:t,onClose:this.handleClose,children:[Object(f.jsx)(oe.a,{id:"form-dialog-title",children:"Pick an Emoji for Your Palette"}),Object(f.jsx)(Ae.a,{onSelect:this.savePalette,title:"Choose an Emoji"})]}),Object(f.jsxs)(ne.a,{open:o&&!t,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(f.jsx)(oe.a,{id:"form-dialog-title",children:"Name Your New Palette"}),Object(f.jsxs)(Ge.ValidatorForm,{onSubmit:this.openEmojiPicker,children:[Object(f.jsxs)(Re.a,{children:[Object(f.jsx)(Me.a,{children:"Enter a name for your new palette. Please Make sure it's unique!"}),Object(f.jsx)(Ge.TextValidator,{fullWidth:!0,margin:"normal",label:"Palette Name",name:"newPaletteName",value:a,onChange:this.handleChange,validators:["required","isPaletteNameUnique"],errorMessages:["enter a palette name","palette name already exists"]})]}),Object(f.jsxs)(Le.a,{children:[Object(f.jsx)(Se.a,{onClick:this.handleClose,color:"primary",children:"Cancel"}),Object(f.jsx)(Se.a,{variant:"contained",color:"primary",type:"submit",children:"Save Palette"})]})]})]})]})}}]),a}(n.a.Component)),Ue=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={newPaletteName:"",popupState:!1},o.handleChange=o.handleChange.bind(Object(m.a)(o)),o.handleOpen=o.handleOpen.bind(Object(m.a)(o)),o.handleClose=o.handleClose.bind(Object(m.a)(o)),o}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleOpen",value:function(){this.setState({popupState:!0})}},{key:"handleClose",value:function(){this.setState({popupState:!1})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.open,o=e.handleDrawerOpen,n=e.palettes,r=e.handleSubmit,l=this.state,i=l.newPaletteName,s=l.popupState;return Object(f.jsxs)("div",{className:t.root,children:[Object(f.jsx)(Fe.a,{}),Object(f.jsxs)(De.a,{color:"default",position:"fixed",className:Oe()(t.appBar,Object(w.a)({},t.appBarShift,a)),children:[Object(f.jsxs)(Be.a,{disableGutters:!a,children:[Object(f.jsx)(D.a,{color:"inherit","aria-label":"Open drawer",onClick:o,className:Oe()(t.menuButton,a&&t.hide),children:Object(f.jsx)(Te.a,{})}),Object(f.jsx)(ve.a,{className:t.createPaletteTitle,variant:"h6",color:"inherit",noWrap:!0,children:"Create A Palette"})]}),Object(f.jsxs)("div",{className:t.navBtns,children:[Object(f.jsx)(Se.a,{className:t.button,variant:"contained",color:"primary",onClick:this.handleOpen,children:"Save"}),Object(f.jsx)(c.b,{to:"/",children:Object(f.jsx)(Se.a,{className:t.button,variant:"contained",color:"secondary",children:"Back"})})]})]}),Object(f.jsx)(ze,{popupState:s,palettes:n,handleSubmit:r,newPaletteName:i,handleClose:this.handleClose}),")"]})}}]),a}(n.a.Component),He=Object(y.a)(Ee,{withTheme:!0})(Ue),Ve=a(184),We={colorPicker:{width:"100%",marginTop:"2rem"},addColor:{width:"100%",fontSize:"2rem",padding:"1rem",marginTop:"1rem"},colorNameInput:{width:"100%",height:"70px"}},qe=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={newColorName:"",currentColor:"green"},o.handleChange=o.handleChange.bind(Object(m.a)(o)),o.updateColor=o.updateColor.bind(Object(m.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(m.a)(o)),o}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;Ge.ValidatorForm.addValidationRule("isColorNameUnique",(function(t){return e.props.colors.every((function(e){return e.name.toLowerCase()!==t.toLowerCase()}))})),Ge.ValidatorForm.addValidationRule("isColorUnique",(function(t){return e.props.colors.every((function(t){return t.color!==e.state.currentColor}))}))}},{key:"updateColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.props,t=e.paletteIsFull,a=e.classes,o=this.state,n=o.newColorName,r=o.currentColor;return Object(f.jsxs)("div",{children:[Object(f.jsx)(Ve.a,{className:a.colorPicker,color:r,onChangeComplete:this.updateColor,width:"100%"}),Object(f.jsxs)(Ge.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1,children:[Object(f.jsx)(Ge.TextValidator,{margin:"normal",className:a.colorNameInput,name:"newColorName",variant:"filled",label:"Color Name",value:n,onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["enter a color name","color name already exists","color already in palette"]}),Object(f.jsx)(Se.a,{className:a.addColor,variant:"contained",type:"submit",color:"primary",style:{backgroundColor:t?"grey":r},disabled:t,children:t?"Palette Full":"Add Color"})]})]})}}]),a}(n.a.Component),Je=Object(y.a)(We)(qe),Ye={root:(J={boxSizing:"border-box",width:"20%",height:"25%",display:"inline-block",margin:"0 auto",marginBottom:"-6px",position:"relative",cursor:"pointer","&:hover .deleteIcon":{transform:"scale(1.4)"}},Object(w.a)(J,k.down("lg"),{width:"25%",height:"20%"}),Object(w.a)(J,k.down("md"),{width:"50%",height:"10%"}),Object(w.a)(J,k.down("sm"),{width:"100%",height:"5%"}),J),boxContent:{position:"absolute",width:"100%",padding:"10px",left:"0",bottom:"0",fontSize:"12px",textTransform:"uppercase",letterSpacing:"1px",display:"flex",justifyContent:"space-between",color:function(e){return z()(e.color).luminance()<=.4?"white":"rgba(0, 0, 0, 0.6)"}},deleteIcon:{transition:"transform 300ms ease-in-out"}},Ke=Object(fe.b)((function(e){return Object(f.jsx)("div",{className:e.classes.root,style:{backgroundColor:e.color},children:Object(f.jsxs)("div",{className:e.classes.boxContent,children:[Object(f.jsx)("span",{children:e.name}),Object(f.jsx)(me.a,{className:"deleteIcon ".concat(e.classes.deleteIcon),onClick:e.handleDelete})]})})})),_e=Object(E.a)(Ye)(Ke),Qe=Object(fe.a)((function(e){return Object(f.jsx)("div",{style:{height:"100%"},children:e.colors.map((function(t,a){return Object(f.jsx)(_e,{index:a,color:t.color,name:t.name,handleDelete:function(){return e.deleteColor(t.name)}},t.name)}))})})),Xe=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Ze=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.onSortEnd=function(e){var t=e.oldIndex,a=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(fe.c)(o,t,a)}}))},o.state={open:!1,colors:Object(s.a)(Xe[0].colors),newPaletteName:"",newColorName:""},o.updateColor=o.updateColor.bind(Object(m.a)(o)),o.addNewColor=o.addNewColor.bind(Object(m.a)(o)),o.handleChange=o.handleChange.bind(Object(m.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(m.a)(o)),o.deleteColor=o.deleteColor.bind(Object(m.a)(o)),o.clearPalette=o.clearPalette.bind(Object(m.a)(o)),o.addRandomColor=o.addRandomColor.bind(Object(m.a)(o)),o}return Object(h.a)(a,[{key:"handleSubmit",value:function(e,t){var a={paletteName:e,id:e.toLowerCase().replace(/ /g,"-"),colors:this.state.colors,emoji:t};this.props.savePalette(a),this.props.history.push("/")}},{key:"updateColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(s.a)(this.state.colors),[e]),newColorName:""})}},{key:"deleteColor",value:function(e){this.setState({colors:this.state.colors.filter((function(t){return t.name!==e}))})}},{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"clearPalette",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e=this.props.palettes.map((function(e){return e.colors})).flat(),t=function(){return e[Math.floor(Math.random()*e.length)]},a=t();this.state.colors.includes(a);)a=t();this.setState({colors:[].concat(Object(s.a)(this.state.colors),[a])})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.maxColors,o=e.palettes,n=this.state,r=n.open,l=n.colors,c=l.length>=a;return Object(f.jsxs)("div",{className:t.root,children:[Object(f.jsx)(He,{palettes:o,open:r,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),Object(f.jsxs)(Ce.a,{className:t.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:t.drawerPaper},children:[Object(f.jsx)("div",{className:t.drawerHeader,children:Object(f.jsx)(D.a,{onClick:this.handleDrawerClose,children:Object(f.jsx)(ke.a,{})})}),Object(f.jsx)(ye.a,{}),Object(f.jsxs)("div",{className:t.drawerContainer,children:[Object(f.jsx)(ve.a,{variant:"h4",gutterBottom:!0,children:"Design Your Palette"}),Object(f.jsxs)("div",{className:t.buttonsDiv,children:[Object(f.jsx)(Se.a,{className:t.button,variant:"contained",color:"secondary",onClick:this.clearPalette,children:"Clear Palette"}),Object(f.jsx)(Se.a,{className:t.button,variant:"contained",color:"primary",onClick:this.addRandomColor,disabled:c,children:"Random Color"})]}),Object(f.jsx)(Je,{colors:l,addNewColor:this.addNewColor,paletteIsFull:c})]})]}),Object(f.jsxs)("main",{className:Oe()(t.content,Object(w.a)({},t.contentShift,r)),children:[Object(f.jsx)("div",{className:t.drawerHeader}),Object(f.jsx)(Qe,{onSortEnd:this.onSortEnd,axis:"xy",colors:l,deleteColor:this.deleteColor,distance:5})]})]})}}]),a}(n.a.Component);Ze.defaultProps={maxColors:20};var $e=Object(y.a)(Ne,{withTheme:!0})(Ze),et=[50,100,200,300,400,500,600,700,800,900];var tt=function(e){var t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}};return et.forEach((function(e){t.colors[e]=[]})),e.colors.forEach((function(e){var a,o;(a=e.color,o=10,z.a.scale(function(e){return[z()(e).darken(1.4).hex(),e,"#ffffff"]}(a)).mode("lab").colors(o)).reverse().forEach((function(a,o){t.colors[et[o]].push({name:"".concat(e.name," ").concat(et[o]),id:e.name.toLowerCase().replace(/ /g,"-"),hex:a,rgb:z()(a).css(),rgba:z()(a).css().replace("rgb","rgba").replace(")",",1.0)")})}))})),t},at=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={palettes:JSON.parse(window.localStorage.getItem("palettes"))||Xe},o.savePalette=o.savePalette.bind(Object(m.a)(o)),o.findPalette=o.findPalette.bind(Object(m.a)(o)),o.deletePalette=o.deletePalette.bind(Object(m.a)(o)),o.syncLocalStorage=o.syncLocalStorage.bind(Object(m.a)(o)),o}return Object(h.a)(a,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(t){return t.id===e}))}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(s.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"deletePalette",value:function(e){var t=this;this.setState((function(a){return{palettes:t.state.palettes.filter((function(t){return t.id!==e}))}}),this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this,t=function(t){return Object(f.jsx)(v,{children:Object(f.jsx)(ge,Object(i.a)(Object(i.a)({palettes:e.state.palettes},t),{},{deletePalette:e.deletePalette}))})};return Object(f.jsx)(b.a,{render:function(a){var o=a.location;return Object(f.jsx)(j.a,{children:Object(f.jsx)(g.a,{classNames:"fade",timeout:500,children:Object(f.jsxs)(b.c,{location:o,children:[Object(f.jsx)(b.a,{exact:!0,path:"/",render:t}),Object(f.jsx)(b.a,{exact:!0,path:"/palette/create",render:function(t){return Object(f.jsx)(v,{children:Object(f.jsx)($e,Object(i.a)(Object(i.a)({savePalette:e.savePalette},t),{},{palettes:e.state.palettes}))})}}),Object(f.jsx)(b.a,{exact:!0,path:"/palette/:paletteId",render:function(t){return Object(f.jsx)(v,{children:Object(f.jsx)(_,{palette:tt(e.findPalette(t.match.params.paletteId))})})}}),Object(f.jsx)(b.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(t){return Object(f.jsx)(v,{children:Object(f.jsx)(X,{colorId:t.match.params.colorId,palette:tt(e.findPalette(t.match.params.paletteId))})})}}),Object(f.jsx)(b.a,{render:t})]})},o.key)})}})}}]),a}(n.a.Component),ot=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,413)).then((function(t){var a=t.getCLS,o=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),o(e),n(e),r(e),l(e)}))};l.a.render(Object(f.jsx)(c.a,{children:Object(f.jsx)(at,{})}),document.getElementById("root")),ot()}},[[340,1,2]]]);
//# sourceMappingURL=main.38a79101.chunk.js.map