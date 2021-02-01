(this.webpackJsonptapcount=this.webpackJsonptapcount||[]).push([[0],[,,,,,,,,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var n=s(0),i=s(1),a=s.n(i),r=s(7),c=s.n(r),o=(s(13),s(2)),l=s(3),d=s(5),p=s(4),u=(s(14),s(15),function(t){Object(d.a)(s,t);var e=Object(p.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).handlePanelBackgroundClick=function(e){e.stopPropagation(),t.props.resetTime(),t.props.resetCount(),t.props.closePanel()},t.handlePanelContentClick=function(t){t.stopPropagation()},t}return Object(l.a)(s,[{key:"render",value:function(){return this.props.isOpen?Object(n.jsxs)("div",{className:"panel","data-testid":"panel-component",children:[Object(n.jsx)("div",{className:"panel-backdrop","data-testid":"panel-backdrop",onMouseDown:this.handlePanelBackgroundClick}),Object(n.jsx)("div",{className:"panel-content",onMouseDown:this.handlePanelContentClick,children:this.props.children})]}):null}}]),s}(a.a.Component)),h=(s(16),function(t){Object(d.a)(s,t);var e=Object(p.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"counter "+(!this.props.isTimerActive&&this.props.didTimerStart?"paused":""),"data-testid":"counter-component",children:Object(n.jsx)("span",{id:"count","data-testid":"count",className:this.props.settingMax?"editable":"",children:this.props.count})})}}]),s}(a.a.Component));function m(t){var e=t,s=Math.floor(e/36e5);e-=60*s*60*1e3;var n=Math.floor(e/6e4);e-=60*n*1e3;var i=Math.floor(e/1e3);return e-=1e3*i,{hours:s,minutes:n,seconds:i,milliseconds:Math.round(e/100)}}s(17);var j=function(t){Object(d.a)(s,t);var e=Object(p.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={hours:0,minutes:0,seconds:0,milliseconds:0},t.updateTimeState=function(e){var s=m(e);t.setState(s)},t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.updateTimeState(this.props.elapsedTime)}},{key:"componentDidUpdate",value:function(t){t.elapsedTime!==this.props.elapsedTime&&this.updateTimeState(this.props.elapsedTime)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"timer "+(!this.props.isTimerActive&&this.props.didTimerStart?"paused":""),"data-testid":"timer-component",children:Object(n.jsxs)("time",{id:"time","data-testid":"time","data-elapsedtime":this.props.elapsedTime,className:this.props.settingMax?"editable":"",children:[Object(n.jsx)("span",{"data-testid":"hours",children:this.state.hours<10?"0"+this.state.hours:this.state.hours}),":",Object(n.jsx)("span",{"data-testid":"minutes",children:this.state.minutes<10?"0"+this.state.minutes:this.state.minutes}),":",Object(n.jsx)("span",{"data-testid":"seconds",children:this.state.seconds<10?"0"+this.state.seconds:this.state.seconds}),".",Object(n.jsx)("span",{"data-testid":"milliseconds",children:10===this.state.milliseconds?"0":this.state.milliseconds})]})})}}]),s}(a.a.Component),b=(s(18),function(t){Object(d.a)(s,t);var e=Object(p.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).lastMeasurementTime=Date.now(),t}return Object(l.a)(s,[{key:"average",value:function(){var t=this.props.count,e=this.props.elapsedTime,s=0;return 0!==e&&(s=Math.round(t/e*1e3*60*1e3/1e3)),s}},{key:"render",value:function(){return Object(n.jsx)("span",{"data-testid":"statistics-component",children:Object(n.jsxs)("table",{children:[Object(n.jsx)("caption",{children:"Session Statistics"}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"Avg. Speed"}),Object(n.jsxs)("td",{"data-testid":"speed",children:[this.average(),"/min"]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"Count"}),Object(n.jsx)("td",{"data-testid":"count",children:this.props.count})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:"Duration"}),Object(n.jsx)("td",{"data-testid":"time",children:Object(n.jsxs)("time",{"data-testid":"stats-report-time",children:[Object(n.jsx)("span",{"data-testid":"hours",children:this.props.timeObject.hours<10?"0"+this.props.timeObject.hours:this.props.timeObject.hours}),":",Object(n.jsx)("span",{"data-testid":"minutes",children:this.props.timeObject.minutes<10?"0"+this.props.timeObject.minutes:this.props.timeObject.minutes}),":",Object(n.jsx)("span",{"data-testid":"seconds",children:this.props.timeObject.seconds<10?"0"+this.props.timeObject.seconds:this.props.timeObject.seconds}),".",Object(n.jsx)("span",{"data-testid":"milliseconds",children:10===this.props.timeObject.milliseconds?"0":this.props.timeObject.milliseconds})]})})]})]})]})})}}]),s}(a.a.Component)),O=(s(19),function(t){Object(d.a)(s,t);var e=Object(p.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).handleResetCounterClick=function(e){t.props.resetCount()},t.handleResetTimerClick=function(e){t.props.resetTime()},t.handleResetButtonClick=function(e){t.props.pauseTimer(),t.props.openPanel()},t.handleMaxClick=function(e){t.props.enterMaxMode()},t.handlePauseButtonClick=function(e){t.props.isTimerActive?t.props.pauseTimer():t.props.startTimer()},t}return Object(l.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{"data-testid":"controls-component",className:"controls",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"pause-button",onMouseDown:this.handlePauseButtonClick,"data-testid":"pause-button",children:"Start/Stop"})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:"reset-button",onMouseDown:this.handleResetButtonClick,"data-testid":"reset-button",children:"Reset"})})]})})}}]),s}(a.a.Component)),T=function(t){Object(d.a)(s,t);var e=Object(p.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={count:0,startTime:0,elapsedTime:0,isTimerActive:!1,settingMaxCount:!1,settingMaxTime:!1,isPanelOpen:!1},t.handleClick=function(e){"button"!==e.target.localName&&(t.state.settingMaxCount||t.state.settingMaxTime?t.exitMaxMode():(t.setCount(t.state.count+1),0===t.state.elapsedTime?(t.resetTime(),t.startTimer()):t.state.isTimerActive||t.startTimer()))},t.enterMaxMode=function(){t.setState({settingMaxCount:!0,settingMaxTime:!0})},t.exitMaxMode=function(){t.setState({settingMaxCount:!1,settingMaxTime:!1})},t.setCount=function(e){t.setState({count:e})},t.resetCount=function(){t.setCount(0)},t.startTimer=function(){t.runningTimer=setInterval((function(){var e=Date.now()-t.state.startTime;t.setState({elapsedTime:e})}),100),t.setState({isTimerActive:!0,startTime:Date.now()-t.state.elapsedTime})},t.pauseTimer=function(){clearInterval(t.runningTimer),t.setState({isTimerActive:!1})},t.setTime=function(e){t.setState({elapsedTime:e})},t.resetTime=function(){t.setState({startTime:Date.now(),elapsedTime:0,isTimerActive:!1}),clearInterval(t.runningTimer)},t.openPanel=function(){t.setState({isPanelOpen:!0})},t.closePanel=function(){t.setState({isPanelOpen:!1})},t}return Object(l.a)(s,[{key:"componentWillUnmount",value:function(){clearInterval(this.runningTimer)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App "+(this.state.isTimerActive?"":"paused ")+(0!==this.state.elapsedTime?"started ":"")+(this.state.isPanelOpen?"panel-open ":""),"data-testid":"app-component",onMouseDown:this.handleClick,children:[Object(n.jsx)(u,{isOpen:this.state.isPanelOpen,closePanel:this.closePanel,resetCount:this.resetCount,resetTime:this.resetTime,children:Object(n.jsx)(b,{count:this.state.count,elapsedTime:this.state.elapsedTime,timeObject:m(this.state.elapsedTime)})}),Object(n.jsxs)("div",{className:"main-area",children:[Object(n.jsx)(h,{count:this.state.count,setCount:this.setCount,settingMax:this.state.settingMaxCount,isTimerActive:this.state.isTimerActive,didTimerStart:0!==this.state.elapsedTime}),Object(n.jsx)(j,{elapsedTime:this.state.elapsedTime,settingMax:this.state.settingMaxTime,isTimerActive:this.state.isTimerActive,didTimerStart:0!==this.state.elapsedTime}),Object(n.jsx)(O,{openPanel:this.openPanel,resetCount:this.resetCount,resetTime:this.resetTime,pauseTimer:this.pauseTimer,startTimer:this.startTimer,enterMaxMode:this.enterMaxMode,isTimerActive:this.state.isTimerActive})]})]})}}]),s}(a.a.Component),x=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(e){var s=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;s(t),n(t),i(t),a(t),r(t)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root")),x()}],[[20,1,2]]]);
//# sourceMappingURL=main.b2e94602.chunk.js.map