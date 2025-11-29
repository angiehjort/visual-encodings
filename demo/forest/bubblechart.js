var ze=Object.defineProperty;var Ee=(O,P,T)=>P in O?ze(O,P,{enumerable:!0,configurable:!0,writable:!0,value:T}):O[P]=T;var x=(O,P)=>ze(O,"name",{value:P,configurable:!0});var U=(O,P,T)=>Ee(O,typeof P!="symbol"?P+"":P,T);import{g as Ae}from"./toolspage.js";import{_ as Fe,a as Ie}from"./_mobx_commonjs-external.js";import{_ as Xe}from"./_d3_commonjs-external.js";import{_ as je,a as Ye}from"./layers_commonjs-external.js";function Ue(O,P){return P.forEach(function(T){T&&typeof T!="string"&&!Array.isArray(T)&&Object.keys(T).forEach(function(p){if(p!=="default"&&!(p in O)){var b=Object.getOwnPropertyDescriptor(T,p);Object.defineProperty(O,p,b.get?b:{enumerable:!0,get:x(function(){return T[p]},"get")})}})}),Object.freeze(O)}x(Ue,"_mergeNamespaces");var H={exports:{}},He=H.exports,Me;function We(){return Me||(Me=1,(function(O,P){(function(T,p){p(P,Fe,Xe,Ie,je,Ye)})(He,(function(T,p,b,w,pe,R){const oe=class oe{constructor(e){this.context=e,this.dragRectangle=b.drag(),this.zoomer=b.zoom(),this.dragRectangle.filter(t=>!t.button).subject(this.dragSubject()).on("start",this.drag().start).on("drag",this.drag().go).on("end",this.drag().stop),this.zoomer.filter(this.zoomFilter()).scaleExtent([1,100]).on("start",this.zoom().start).on("zoom",this.zoom().go).on("end",this.zoom().stop),this.zoomer.ratioX=1,this.zoomer.ratioY=1,this.context._zoomedXYMinMax={x:{zoomedMin:null,zoomedMax:null},y:{zoomedMin:null,zoomedMax:null}}}dragSubject(){const e=this.context;return function(t){return!(t.sourceEvent.ctrlKey||t.sourceEvent.metaKey||e.ui.cursorMode==="plus")||e.ui.cursorMode==="minus"||(t.sourceEvent.type==="touchmove"||t.sourceEvent.type==="touchstart")&&(t.sourceEvent.touches.length>1||t.sourceEvent.targetTouches.length>1)?null:{x:b.pointer(t,this)[0],y:b.pointer(t,this)[1]}}}drag(){const e=this.context,t=this;return{start(i){this.origin={x:b.pointer(i,this)[0],y:b.pointer(i,this)[1]},e.DOM.zoomRect.classed("vzb-invisible",!1)},go(i){const s=this.origin,a={x:i.x,y:i.y};e.DOM.zoomRect.attr("x",Math.min(a.x,s.x)).attr("y",Math.min(a.y,s.y)).attr("width",Math.abs(a.x-s.x)).attr("height",Math.abs(a.y-s.y))},stop(i){if(e.DOM.zoomRect.attr("width",0).attr("height",0).classed("vzb-invisible",!0),this.target={x:b.pointer(i,this)[0],y:b.pointer(i,this)[1]},Math.abs(this.origin.x-this.target.x)<10||Math.abs(this.origin.y-this.target.y)<10)return;const s=i.sourceEvent.ctrlKey||i.sourceEvent.metaKey||e.ui.cursorMode==="plus";t._zoomOnRectangle(b.select(this),this.origin.x,this.origin.y,this.target.x,this.target.y,s,500)}}}zoomFilter(){const e=this.context;return function(t){return t.ctrlKey||t.metaKey?!1:!!((t.type==="touchmove"||t.type==="touchstart")&&(t.touches.length>1||t.targetTouches.length>1)||(t.type==="wheel"||t.type==="mousewheel")&&e.ui.zoomOnScrolling||(t.type==="mousedown"||t.type==="touchstart")&&e.ui.cursorMode!=="plus"&&e.ui.cursorMode!=="minus"&&(e.ui.panWithArrow||e.ui.cursorMode==="hand"))}}zoom(){const e=this.context,t=this.zoomer,i=this;return{start(s){i.__savedTransform=s.transform,e.ui.cursorMode!=="plus"&&e.ui.cursorMode!=="minus"&&e.DOM.chartSvg.classed("vzb-zooming",!0)},go(s){if(e.__labelDragging){i.__labelDragging||(i.__labelDragging=!0);return}const a=s.sourceEvent;let o=s.transform.k,r=[s.transform.x,s.transform.y],n=t.ratioY,l=t.ratioX;e.draggingNow=!0,(isNaN(o)||o==null)&&(o=t.scale),(isNaN(o)||o==null)&&(o=1),o===1&&a!==null&&((a.type==="wheel"||a.type==="mousewheel")&&(a.deltaY||-a.wheelDelta)>0||a.type==="touchmove"&&a.touches.length>1)&&(t.ratioX=1,l=1,t.ratioY=1,n=1),(isNaN(r[0])||isNaN(r[1])||r[0]==null||r[1]==null)&&(r=[0,0]);const c=t.scaleExtent()[0];o*n<c&&(n=c/o,t.ratioY=n),o*l<c&&(l=c/o,t.ratioX=l);const u=o*l<1,f=o*n<1;u?(r[0]<0&&(r[0]=0),r[0]>(1-o*l)*e.width&&(r[0]=(1-o*l)*e.width)):(r[0]>0&&(r[0]=0),r[0]<(1-o*l)*e.width&&(r[0]=(1-o*l)*e.width)),f?(r[1]<0&&(r[1]=0),r[1]>(1-o*n)*e.height&&(r[1]=(1-o*n)*e.height)):(r[1]>0&&(r[1]=0),r[1]<(1-o*n)*e.height&&(r[1]=(1-o*n)*e.height)),i.zoomSelection.property("__zoom",b.zoomIdentity.translate(r[0],r[1]).scale(o));const m=e.width*o*l,h=e.height*o*n,g=[0*o*l+r[0],m+r[0]],d=[h+r[1],0*o*n+r[1]],D=e._rangeBump(g),v=e._rangeBump(d),y=(D[0]-g[0])*o*l,E=(D[1]-g[1])*o*l,k=(v[0]-d[0])*o*n,M=(v[1]-d[1])*o*n;g[0]+=y,g[1]+=E,d[0]+=k,d[1]+=M;const A=[0,e.width],I=[e.height,0],S=e._rangeBump(A),L=e._rangeBump(I);u?(g[0]<S[0]&&(r[0]=S[0]-y),g[1]>S[1]&&(r[0]=S[1]-E-m)):(g[0]>S[0]&&(r[0]=S[0]-y),g[1]<S[1]&&(r[0]=S[1]-E-m)),f?(d[0]>L[0]&&(r[1]=L[0]-k-h),d[1]<L[1]&&(r[1]=L[1]-M)):(d[0]<L[0]&&(r[1]=L[0]-k-h),d[1]>L[1]&&(r[1]=L[1]-M)),u?(g[0]<S[0]&&(g[1]+=Math.abs(g[0]-S[0]),g[0]=S[0]),g[1]>S[1]&&(g[0]-=Math.abs(g[1]-S[1]),g[1]=S[1])):(g[0]>S[0]&&(g[1]-=Math.abs(g[0]-S[0]),g[0]=S[0]),g[1]<S[1]&&(g[0]+=Math.abs(g[1]-S[1]),g[1]=S[1])),f?(d[0]>L[0]&&(d[1]-=Math.abs(d[0]-L[0]),d[0]=L[0]),d[1]<L[1]&&(d[0]+=Math.abs(d[1]-L[1]),d[1]=L[1])):(d[0]<L[0]&&(d[1]+=Math.abs(d[0]-L[0]),d[0]=L[0]),d[1]>L[1]&&(d[0]-=Math.abs(d[1]-L[1]),d[1]=L[1])),e.MDL.x.scale.type==="ordinal"?e.xScale.rangeBands(g):e.xScale.range(g),e.MDL.y.scale.type==="ordinal"?e.yScale.rangeBands(d):e.yScale.range(d);const $=x(function(de){return p.LegacyUtils.isDate(de)?de:+de.toFixed(2)},"formatter"),ye=S,ve=L;e._zoomedXYMinMax={x:{zoomedMin:$(e.xScale.invert(ye[0])),zoomedMax:$(e.xScale.invert(ye[1]))},y:{zoomedMin:$(e.yScale.invert(ve[0])),zoomedMax:$(e.yScale.invert(ve[1]))}},t.dontFeedToState||(e.MDL.x.scale.zoomed=[e._zoomedXYMinMax.x.zoomedMin,e._zoomedXYMinMax.x.zoomedMax],e.MDL.y.scale.zoomed=[e._zoomedXYMinMax.y.zoomedMin,e._zoomedXYMinMax.y.zoomedMax]);const he=e.yAxis.labelerOptions(),ge=e.xAxis.labelerOptions();he.limitMaxTickNumber=o*n<1.5?8:o*n*8,ge.limitMaxTickNumber=o*l<1.5?8:o*l*8,he.transitionDuration=t.duration,ge.transitionDuration=t.duration,e.DOM.xAxisEl.call(e.xAxis.labelerOptions(ge)),e.DOM.yAxisEl.call(e.yAxis.labelerOptions(he)),e.redrawData(t.duration),t.duration=0},stop(){if(e.DOM.chartSvg.classed("vzb-zooming",!1),i.__labelDragging){i.__labelDragging=!1,i.zoomSelection.property("__zoom",i.__savedTransform),i.__savedTransform=null;return}t.dontFeedToState||(e.MDL.x.scale.zoomed=[e._zoomedXYMinMax.x.zoomedMin,e._zoomedXYMinMax.x.zoomedMax],e.MDL.y.scale.zoomed=[e._zoomedXYMinMax.y.zoomedMin,e._zoomedXYMinMax.y.zoomedMax]),t.dontFeedToState=null,e.draggingNow=!1}}}expandCanvas(e){const t=this.context;e||(e=t.duration);const i=b.extent(p.LegacyUtils.values(t.frame.x)),s=b.extent(p.LegacyUtils.values(t.frame.y));if(!i[0]&&i[0]!==0||!i[1]&&i[1]!==0||!s[0]&&s[0]!==0||!s[1]&&s[1]!==0)return p.LegacyUtils.warn("panZoom.expandCanvas: X or Y min/max are broken. Aborting with no action");const a={x1:t.xScale(i[0]),y1:t.yScale(s[0]),x2:t.xScale(i[1]),y2:t.yScale(s[1])},o=[0,t.width],r=[t.height,0],n={x1:o[0],x2:o[1],y1:r[0],y2:r[1]},l=0;if(!t.isCanvasPreviouslyExpanded||a.x1<n.x1*(1-l)||a.x2>n.x2*(1+l)||a.y2<n.y2*(1-l)||a.y1>n.y1*(1+l)){if(t.isCanvasPreviouslyExpanded){const c=t._rangeBump(o),u=t._rangeBump(r);a.x1>c[0]&&(a.x1=c[0]),a.x2<c[1]&&(a.x2=c[1]),a.y1<u[0]&&(a.y1=u[0]),a.y2>u[0]&&(a.y2=u[1])}t.isCanvasPreviouslyExpanded=!0,this._zoomOnRectangle(t.element,a.x1,a.y1,a.x2,a.y2,!1,e)}else t.redrawDataPoints(e)}zoomToMaxMin(e,t,i,s,a,o){const r=this.context;let n=e,l=t,c=i,u=s;const f=r.xScale.domain(),m=r.yScale.domain();n<f[0]&&l<f[1]&&(n=f[0]),n>f[0]&&l>f[1]&&(l=f[1]),c<m[0]&&u<m[1]&&(c=m[0]),c>m[0]&&u>m[1]&&(u=m[1]);const h=[r.xScale(n),r.xScale(l)],g=[r.yScale(c),r.yScale(u)];this._zoomOnRectangle(r.element,h[0],g[0],h[1],g[1],!1,a,o)}_zoomOnRectangle(e,t,i,s,a,o,r,n){const l=this.context,c=this.zoomer,u=b.zoomTransform(this.zoomSelection.node()),f=t,m=i,h=s,g=a;o&&u.translate(f-h,m-g);const d=[0,l.width],D=[l.height,0],v=l._rangeBump(d),y=l._rangeBump(D),E=c.scaleExtent()[0],k=c.scaleExtent()[1];let M,A,I;if(f==h||m==g||v[0]==v[1]||y[0]==y[1])return p.LegacyUtils.warn("_zoomOnRectangle(): can not proceed because this may result in infinity zooms");Math.abs(f-h)>Math.abs(m-g)?(M=Math.abs(y[0]-y[1])/Math.abs(m-g)*u.k,M<E&&(c.ratioY*=M/u.k,M=E),M>k&&(M=k),A=Math.abs(v[0]-v[1])/Math.abs(f-h)*u.k/M*c.ratioX,I=c.ratioY):(M=Math.abs(v[0]-v[1])/Math.abs(f-h)*u.k,M<E&&(c.ratioX*=M/u.k,M=E),M>k&&(M=k),I=Math.abs(y[0]-y[1])/Math.abs(m-g)*u.k/M*c.ratioY,A=c.ratioX);const S=[(u.x-Math.min(f,h))/u.k/c.ratioX*M*A+(v[0]-d[0]),(u.y-Math.min(m,g))/u.k/c.ratioY*M*I+(y[1]-D[1])];c.dontFeedToState=n,c.ratioY=I||1,c.ratioX=A||1,c.duration=r||0,this.zoomSelection.call(c.transform,b.zoomIdentity.translate(S[0],S[1]).scale(M))}zoomByIncrement(e,t,i){const s=b.zoomTransform(this.zoomSelection.node());let a=s.k;const o=[s.x,s.y],r=b.pointer(e,this.zoomSelection.node());let n=Math.log(a)/Math.LN2;(t=="plus"||!t)&&(n=Math.floor(n)+1),t=="minus"&&(n=Math.ceil(n)-1);let l=[(r[0]-o[0])/a,(r[1]-o[1])/a];const c=this.zoomer.scaleExtent();a==c[0]&&(this.zoomer.ratioY=1,this.zoomer.ratioX=1),a=Math.max(c[0],Math.min(c[1],Math.pow(2,n))),l=[l[0]*a+o[0],l[1]*a+o[1]],o[0]+=r[0]-l[0],o[1]+=r[1]-l[1],this.zoomer.duration=i||0,this.zoomSelection.call(this.zoomer.transform,b.zoomIdentity.translate(o[0],o[1]).scale(a))}resetZoomState(e){this.zoomer.ratioY=1,this.zoomer.ratioX=1,(e||this.zoomSelection).property("__zoom",b.zoomIdentity)}reset(e,t){const i=this.context;i.isCanvasPreviouslyExpanded=!1,this.zoomer.ratioY=1,this.zoomer.ratioX=1,this.zoomer.duration=t||0,(e||this.zoomSelection).call(this.zoomer.transform,b.zoomIdentity)}rerun(e){(e||this.zoomSelection).call(this.zoomer.scaleBy,1)}zoomSelection(e){this.zoomSelection=e}};x(oe,"PanZoom");let q=oe;const{ICON_QUESTION:ue}=p.Icons,re=class re extends p.BaseComponent{constructor(e){e.template=`
      <g class="vzb-bc-axis-x-title"><text></text></g>
      <g class="vzb-bc-axis-y-title"><text></text></g>
      <g class="vzb-bc-axis-s-title"><text></text></g>
      <g class="vzb-bc-axis-x-subtitle"><text></text></g>
      <g class="vzb-bc-axis-y-subtitle"><text></text></g>
      <g class="vzb-bc-axis-x-info vzb-noexport"></g>
      <g class="vzb-bc-axis-y-info vzb-noexport"></g>
    `,super(e)}setup(){this.DOM={xTitle:this.element.select(".vzb-bc-axis-x-title"),yTitle:this.element.select(".vzb-bc-axis-y-title"),sTitle:this.element.select(".vzb-bc-axis-s-title"),xSubTitle:this.element.select(".vzb-bc-axis-x-subtitle"),ySubTitle:this.element.select(".vzb-bc-axis-y-subtitle"),xInfo:this.element.select(".vzb-bc-axis-x-info"),yInfo:this.element.select(".vzb-bc-axis-y-info")},this.axisTitleComplimentStrings={Y:"",X:"",S:"",C:""},this.strings={title:{Y:"",X:"",S:"",C:""},title_short:{Y:"",X:"",S:"",C:""},subtitle:{Y:"",X:""}},this._initInfoElements()}draw(){this.localise=this.services.locale.auto(),this.addReaction(this.updateUIStrings),this.addReaction(this.updateTreemenu),this.addReaction(this.updateSize,{throttle_ms:50}),this.addReaction(this.updateInfoElements)}get MDL(){return{y:this.model.encoding[this.parent.state.alias?.y||"y"],x:this.model.encoding[this.parent.state.alias?.x||"x"],size:this.model.encoding.size,color:this.model.encoding.color}}updateTreemenu(){const e=this.root.findChild({type:"TreeMenu"});this.DOM.yTitle.classed("vzb-disabled",e.state.ownReadiness!==p.Utils.STATUS.READY).on("click",()=>{e.encoding(this.parent._alias("y")).alignX(this.services.locale.isRTL()?"right":"left").alignY("top").updateView().toggle()}),this.DOM.xTitle.classed("vzb-disabled",e.state.ownReadiness!==p.Utils.STATUS.READY).on("click",()=>{e.encoding(this.parent._alias("x")).alignX(this.services.locale.isRTL()?"right":"left").alignY("bottom").updateView().toggle()})}updateUIStrings(){const{y:e,x:t,size:i,color:s}=this.MDL;this.strings={title:{Y:p.Utils.getConceptName(e,this.localise),X:p.Utils.getConceptName(t,this.localise),S:p.Utils.getConceptName(i,this.localise),C:p.Utils.getConceptName(s,this.localise)},title_short:{Y:p.Utils.getConceptShortName(e,this.localise),X:p.Utils.getConceptShortName(t,this.localise),S:p.Utils.getConceptShortName(i,this.localise),C:p.Utils.getConceptShortName(s,this.localise)},subtitle:{Y:p.Utils.getConceptNameMinusShortName(e,this.localise),X:p.Utils.getConceptNameMinusShortName(t,this.localise)}},Promise.all([p.Utils.getConceptNameCompliment(e),p.Utils.getConceptNameCompliment(t),p.Utils.getConceptNameCompliment(i),p.Utils.getConceptNameCompliment(s)]).then(w.action(a=>{[this.axisTitleComplimentStrings.Y,this.axisTitleComplimentStrings.X,this.axisTitleComplimentStrings.S,this.axisTitleComplimentStrings.C]=a}))}_initInfoElements(){const e=this,t=x(()=>this.root.findChild({type:"DataNotes"}),"dataNotesDialog"),i=x(()=>this.root.findChild({type:"TimeSlider"}),"timeSlider");p.LegacyUtils.setIcon(this.DOM.yInfo,ue).on("click",()=>{t().pin()}).on("mouseover",function(){if(i().ui.dragging)return;const s=this.getBBox(),a=p.LegacyUtils.makeAbsoluteContext(this,this.farthestViewportElement)(s.x-10,s.y+s.height+10),o=e.root.element.node().getBoundingClientRect(),r=e.element.node().getBoundingClientRect();t().setEncoding(e.MDL.y).show().setPos(a.x+r.left-o.left,a.y)}).on("mouseout",()=>{i().ui.dragging||t().hide()}),p.LegacyUtils.setIcon(this.DOM.xInfo,ue).on("click",()=>{t().pin()}).on("mouseover",function(){if(i().ui.dragging)return;const s=this.getBBox(),a=p.LegacyUtils.makeAbsoluteContext(this,this.farthestViewportElement)(s.x-10,s.y+s.height+10),o=e.root.element.node().getBoundingClientRect(),r=e.element.node().getBoundingClientRect();t().setEncoding(e.MDL.x).show().setPos(a.x+r.left-o.left,a.y)}).on("mouseout",()=>{i().ui.dragging||t().hide()})}updateInfoElements(){this.services.layout.size,this.strings.title.X,this.strings.title.Y,this.axisTitleComplimentStrings.X,this.axisTitleComplimentStrings.Y;const{xInfo:e,yInfo:t,xTitle:i,yTitle:s}=this.DOM,{x:a,y:o}=this.MDL,r=this.services.locale.isRTL(),n=this.parent.profileConstants.infoElHeight,l=this.services.layout.profile;if(t.select("svg").node()){const c=s.node().getBBox(),u=p.LegacyUtils.transform(s.node()),f=r?c.x+u.translateX-n*1.4:c.x+u.translateX+c.width+n*.4,m=r?u.translateY+n*1.4+c.width*.5:u.translateY-n*.4-c.width*.5,h=o.data.conceptProps;t.classed("vzb-hidden",!h.description&&!h.sourceLink||this.services.layout.projector).attr("transform",l!=="SMALL"?`translate(${u.translateX-n*.8}, ${m}) rotate(-90)`:`translate(${f},${u.translateY-n*.8})`).select("svg").attr("width",n+"px").attr("height",n+"px")}if(e.select("svg").node()){const c=i.node().getBBox(),u=p.LegacyUtils.transform(i.node()),f=r?c.x+u.translateX-n*1.4:c.x+u.translateX+c.width+n*.4,m=a.data.conceptProps;e.classed("vzb-hidden",!m.description&&!m.sourceLink||this.services.layout.projector).attr("transform",`translate(${f}, ${u.translateY-n*.8})`).select("svg").attr("width",n+"px").attr("height",n+"px")}}_updateSTitle(e=this.parent.width,t=this.parent.height){const{sTitle:i}=this.DOM,{size:s,color:a}=this.MDL,o=this.axisTitleComplimentStrings,r=this.parent.profileConstants.hideSTitle&&this.root.ui.dialogs.dialogs.sidebar.includes("colors")&&this.root.ui.dialogs.dialogs.sidebar.includes("size");if(i.classed("vzb-invisible",r),r)return;const n=s.data.constant?"":this.localise("buttons/size")+": "+this.strings.title.S+(o.S?" \xB7 "+o.S:""),l=a.data.constant?"":this.localise("buttons/colors")+": "+this.strings.title.C+(o.C?" \xB7 "+o.C:""),c=i.attr("text-anchor","end").attr("transform","translate("+e+",20) rotate(-90)").select("text").style("font-size",null).text(n+(n&&l?", ":"")+l),u=c.node().getBBox().width,f=30,m=parseInt(c.style("font-size"))*(t-f)/u;c.style("font-size",u>t-f?m+"px":null)}_updateYTitle(e=this.parent.width,t=this.parent.height){const{yTitle:i,ySubTitle:s}=this.DOM,{margin:a,infoElHeight:o,yAxisTitleBottomMargin:r}=this.parent.profileConstants,n=this.services.layout.profile,l=this.axisTitleComplimentStrings,c=this.services.locale.isRTL();if(n!=="SMALL"){s.attr("transform","translate(0,0) rotate(-90)").select("text").attr("dy",o*.6).style("font-size",o*.8+"px").text(this.strings.subtitle.Y),i.select("text").style("font-size",o+"px").text(this.strings.title_short.Y+(l.Y?" \xB7 "+l.Y:"")).append("tspan").classed("vzb-noexport",!0).style("font-size",o*.7+"px").attr("dx",(c?-1:1)*o*.25+"px").text("\u25BC");const f=i.node().getBBox().width>t;i.attr("text-anchor",f?"start":"middle").attr("transform","translate("+(-a.left-r)+","+(f?c?0:t:t/2)+") rotate(-90)")}else{s.select("text").text("");const u=i.select("text").text(this.strings.title.Y+(l.Y?" \xB7 "+l.Y:""));u.node().getBBox().width>e&&u.text(this.strings.title_short.Y+(l.Y?" \xB7 "+l.Y:"")),i.attr("text-anchor","start").attr("transform","translate("+(c?e:10-a.left)+", -"+r+")")}}_updateXTitle(e=this.parent.width,t=this.parent.height){const{xTitle:i,xSubTitle:s}=this.DOM,{margin:a,infoElHeight:o,xAxisTitleBottomMargin:r}=this.parent.profileConstants,n=this.services.layout.profile,l=this.axisTitleComplimentStrings,c=this.services.locale.isRTL();n!=="SMALL"?(s.attr("transform","translate("+e+","+t+")").select("text").attr("dy",-o*.3).style("font-size",o*.8+"px").text(this.strings.subtitle.X),i.select("text").style("font-size",o+"px").text(this.strings.title_short.X+(l.X?" \xB7 "+l.X:"")).append("tspan").classed("vzb-noexport",!0).style("font-size",o*.7+"px").attr("dx",(c?-1:1)*o*.25+"px").text("\u25BC")):(s.select("text").text(""),i.select("text").text(this.strings.title.X+(l.X?" \xB7 "+l.X:"")));const u=i.node().getBBox().width>e-100;i.attr("text-anchor",u?"start":"middle").attr("transform","translate("+(u?c?e:0:e/2)+","+(t+a.bottom-r)+")"),u&&n==="SMALL"&&i.select("text").text(this.strings.title_short.X)+(l.X?" \xB7 "+l.X:"")}updateSize(){this.services.layout.size;const{margin:e,leftMarginRatio:t}=this.parent.profileConstants,i=this.parent.elementHeight-e.top-e.bottom||0,s=this.parent.elementWidth-e.left*t-e.right||0;this._updateSTitle(s,i),this._updateYTitle(s,i),this._updateXTitle(s,i)}};x(re,"BCAxisTitles");let Q=re;const Le=w.decorate(Q,{MDL:w.computed,strings:w.observable,axisTitleComplimentStrings:w.observable}),ne=class ne{constructor(){}update(e){const t=this,i=this.ui.decorations,s=this.services.layout.profile,a=this.profileConstants.margin,o=i.xAxisGroups&&i.xAxisGroups[this.MDL.x.data.concept]&&i.enabled&&s!=="SMALL";if(this.DOM.xAxisGroupsEl.classed("vzb-invisible",!o),o){const n=p.Utils.injectIndexes(i.xAxisGroups[this.MDL.x.data.concept]);let l=this.DOM.xAxisGroupsEl.selectAll(".vzb-bc-x-axis-group").data(n);l.exit().remove(),l=l.enter().append("g").attr("class","vzb-bc-x-axis-group").each(function(){const f=b.select(this);f.append("text").attr("class","vzb-bc-x-axis-group-line").text("\u25C6").style("text-anchor","middle"),f.append("text").attr("class","vzb-bc-x-axis-group-text")}).merge(l);const c=[];let u=!1;l.each(function(f,m){const g=b.select(this).select("text.vzb-bc-x-axis-group-text").text(t.localise(f.label)),d={min:f.min,max:f.max};d.textHeight=g.node().getBBox().height,d.textWidth=g.node().getBBox().width,d.boundaryMinX_px=t.xScale(f.min||f.min===0?f.min:b.min(t.xScale.domain()))||0,d.boundaryMaxX_px=t.xScale(f.max||f.max===0?f.max:b.max(t.xScale.domain()))||0,d.centerX_px=(d.boundaryMinX_px+d.boundaryMaxX_px)/2,d.marginX_px=(Math.abs(d.boundaryMinX_px-d.boundaryMaxX_px)-d.textWidth)/2,d.marginX_px-d.textHeight<0&&(u=!0),c[m]=d}),u&&l.each(function(f,m){const g=b.select(this).select("text.vzb-bc-x-axis-group-text").text(t.localise(f.label_short)),d=c[m];d.textWidth=g.node().getBBox().width,d.marginX_px=(Math.abs(d.boundaryMinX_px-d.boundaryMaxX_px)-d.textWidth)/2,c[m]=d}),l.each(function(f,m){const h=b.select(this),g=m==0,d=m==c.length-1,D=c[m],v=D.textHeight/4;let y=D.centerX_px;g&&(y=c[m+1].boundaryMinX_px-Math.max(c[m+1].marginX_px,v)),d&&(y=c[m-1].boundaryMaxX_px+Math.max(c[m-1].marginX_px,v)),h.select("text.vzb-bc-x-axis-group-text").style("text-anchor",g?"end":d?"start":"middle").transition().duration(e||0).attr("dy","-0.2em").attr("y",D.textHeight).attr("x",y),h.select("text.vzb-bc-x-axis-group-line").classed("vzb-invisible",d).transition().duration(e||0).attr("dy","-0.2em").attr("y",D.textHeight*.9).attr("x",D.boundaryMaxX_px)}),l.select("text.vzb-bc-x-axis-group-text").on("mouseenter",function(f,m){const h=c[m.i],g=b.select(this.parentNode);b.select(this).attr("font-weight","bold"),g.append("rect").lower().attr("x",h.boundaryMinX_px).attr("width",h.boundaryMaxX_px-h.boundaryMinX_px).attr("y",-a.top).attr("height",t.height+a.top),(h.min||h.min===0)&&g.append("line").lower().attr("x1",h.boundaryMinX_px).attr("x2",h.boundaryMinX_px).attr("y1",-a.top).attr("y2",t.height),(h.max||h.max===0)&&g.append("line").lower().attr("x1",h.boundaryMaxX_px).attr("x2",h.boundaryMaxX_px).attr("y1",-a.top).attr("y2",t.height)}).on("mouseleave",function(){const f=b.select(this.parentNode);b.select(this).attr("font-weight",null),f.selectAll("rect").remove(),f.selectAll("line").remove()})}const r=this.MDL.x.data.concept==this.MDL.y.data.concept&&i.enabled&&s!=="SMALL";if(this.DOM.lineEqualXY.classed("vzb-invisible",!r),r){this.MDL.x.scale.type,this.MDL.y.scale.type;const n=this.yScale.domain().concat(this.xScale.domain()),l=b.min(n),c=b.max(n),u=(c-l)/100,f=b.range(l,c,u).concat(c),m=b.line().curve(b.curveBasis).x(h=>this.xScale(h)).y(h=>this.yScale(h));this.DOM.lineEqualXY.transition().duration(e||0).attr("d",m(f))}}};x(ne,"BCDecorations");let J=ne;var De=`#version 300 es
#define SHADER_NAME label-icon-layer-vertex-shader

in vec2 positions;

in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceRects;
in float instanceDragged;

uniform float sizeScale;
uniform vec2 iconsTextureDim;
uniform float sizeMinPixels;
uniform float sizeMaxPixels;
uniform bool billboard;
uniform int sizeUnits;
uniform vec4 padding;
uniform float edgeMaxCoord;

out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;

vec2 rotate_by_angle(vec2 vertex, float angle) {
  float angle_radian = angle * PI / 180.0;
  float cos_angle = cos(angle_radian);
  float sin_angle = sin(angle_radian);
  mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
  return rotationMatrix * vertex;
}

void main(void) {
  geometry.worldPosition = instancePositions;
  geometry.uv = positions;
  geometry.pickingColor = instancePickingColors;
  uv = positions;

  vec2 iconSize = instanceIconFrames.zw;
  // convert size in meters to pixels, then scaled and clamp
 
  // project meters to pixels and clamp to limits 
  float sizePixels = clamp(
    project_size_to_pixel(instanceSizes * sizeScale, sizeUnits), 
    sizeMinPixels, sizeMaxPixels
  );

  // scale icon height to match instanceSize
  float instanceScale = iconSize.y == 0.0 ? 0.0 : sizePixels / iconSize.y;

  // scale and rotate vertex in "pixel" value and convert back to fraction in clipspace
  vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
  vec2 offset_icon = pixelOffset;
  pixelOffset += instancePixelOffset;
  pixelOffset.y *= -1.0;

  if (billboard)  {
    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
    vec3 offset = vec3(pixelOffset, 0.0);
    DECKGL_FILTER_SIZE(offset, geometry);
    gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);

  vec2 dimensions_wo_padd = instanceRects.zw * instanceSizes;
  vec2 clip_paddLT = project_pixel_size_to_clipspace(padding.xy);
  vec2 clip_paddRB = project_pixel_size_to_clipspace(padding.zw);
  vec2 positions0 = (positions + vec2(1.)) * 0.5;
  vec2 clip_offset_icon = project_pixel_size_to_clipspace(offset_icon);
  vec2 clip_dimensions_wo_padd = project_pixel_size_to_clipspace(dimensions_wo_padd);
  
  //default pos switch on edge
  if (instanceDragged < 0.5) {
    vec2 clip_offset = project_pixel_size_to_clipspace(abs(instancePixelOffset));
    gl_Position.x += (1.0 - step(-edgeMaxCoord + clip_paddLT.x, gl_Position.x - clip_dimensions_wo_padd.x - clip_offset_icon.x)) * (clip_offset.x * 2.0 + clip_dimensions_wo_padd.x);
    gl_Position.y += (-step(edgeMaxCoord - clip_paddLT.y, gl_Position.y + clip_dimensions_wo_padd.y + clip_offset_icon.y)) * (clip_offset.y * 2.0 + clip_dimensions_wo_padd.y);
  }

  //edge check
  gl_Position.x = clamp(gl_Position.x, -edgeMaxCoord + clip_paddLT.x + clip_dimensions_wo_padd.x + clip_offset_icon.x , edgeMaxCoord - clip_paddRB.x + clip_offset_icon.x);
  gl_Position.y = clamp(gl_Position.y, -edgeMaxCoord + clip_paddRB.y - clip_offset_icon.y, edgeMaxCoord - clip_paddLT.y - clip_dimensions_wo_padd.y - clip_offset_icon.y);

  } else {
    vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
    DECKGL_FILTER_SIZE(offset_common, geometry);
    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position); 
    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
  }

  vTextureCoords = mix(
    instanceIconFrames.xy,
    instanceIconFrames.xy + iconSize,
    (positions.xy + 1.0) / 2.0
  ) / iconsTextureDim;

  vColor = instanceColors;
  DECKGL_FILTER_COLOR(vColor, geometry);

  vColorMode = instanceColorModes;
}
`;const K=class K extends R._MultiIconLayer{initializeState(){super.initializeState(),this.getAttributeManager().addInstanced({instanceRects:{size:4,accessor:x((e,t)=>this.parent.getBoundingRect(e,t),"accessor")},instanceDragged:{size:1,transition:!1,accessor:"getDragged"}})}draw(e){const{edgeMaxCoord:t=1}=this.parent.props;let{backgroundPadding:i=[0,0,0,0]}=this.parent.props;i.length<4&&(i=[i[0],i[1],i[0],i[1]]),e.uniforms.padding=i,e.uniforms.edgeMaxCoord=t,super.draw(e)}getShaders(){return{...super.getShaders(),vs:De}}};x(K,"LabelMultiIconLayer"),U(K,"defaultProps",{getBoundingRect:{type:"accessor",value:[0,0,0,0]},getDragged:{type:"accessor",value:0}});let X=K;var we=`#version 300 es
#define SHADER_NAME label-text-background-layer-vertex-shader

in vec2 positions;

in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
in vec3 instancePickingColors;
in float instanceDragged;

uniform bool billboard;
uniform float opacity;
uniform float sizeScale;
uniform float sizeMinPixels;
uniform float sizeMaxPixels;
uniform vec4 padding;
uniform int sizeUnits;
uniform float edgeMaxCoord;

out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;

vec2 rotate_by_angle(vec2 vertex, float angle) {
  float angle_radian = radians(angle);
  float cos_angle = cos(angle_radian);
  float sin_angle = sin(angle_radian);
  mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
  return rotationMatrix * vertex;
}

void main(void) {
  geometry.worldPosition = instancePositions;
  geometry.uv = positions;
  geometry.pickingColor = instancePickingColors;
  uv = positions;
  vLineWidth = instanceLineWidths;

  // convert size in meters to pixels, then scaled and clamp

  // project meters to pixels and clamp to limits
  float sizePixels = clamp(
    project_size_to_pixel(instanceSizes * sizeScale, sizeUnits),
    sizeMinPixels, sizeMaxPixels
  );

  dimensions = instanceRects.zw * sizePixels + padding.xy + padding.zw;

  vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * sizePixels + mix(-padding.xy, padding.zw, positions);
  pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
  pixelOffset += instancePixelOffsets;
  pixelOffset.y *= -1.0;

  if (billboard)  {
    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
    vec3 offset = vec3(pixelOffset, 0.0);
    DECKGL_FILTER_SIZE(offset, geometry);
    gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);

    vec2 clip_dimensions = project_pixel_size_to_clipspace(dimensions);

    //default pos switch on edge
    if (instanceDragged < 0.5) {
      vec2 clip_dimensions_wo_padd = project_pixel_size_to_clipspace(instanceRects.zw * sizePixels);
      vec2 clip_offset = project_pixel_size_to_clipspace(abs(instancePixelOffsets));
      gl_Position.xy += (vec2(1.0, 0.0) - step(vec2(-edgeMaxCoord, edgeMaxCoord), gl_Position.xy + vec2(-1.0, 1.0) * clip_dimensions * positions)) * (clip_offset * 2.0 + clip_dimensions_wo_padd);
    }

    //edge check
    vec2 a = clamp(gl_Position.xy, vec2(-edgeMaxCoord), vec2(edgeMaxCoord) - clip_dimensions);
    vec2 b = clamp(gl_Position.xy, clip_dimensions - edgeMaxCoord, vec2(edgeMaxCoord));
    //flip y
    gl_Position.xy = mix(a, b, vec2(positions.x, 1.0 - positions.y));

  } else {
    vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
    DECKGL_FILTER_SIZE(offset_common, geometry);
    gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
    DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
  }

  // Apply opacity to instance color, or return instance picking color
  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity);
  DECKGL_FILTER_COLOR(vFillColor, geometry);
  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity);
  DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,Te=`#version 300 es
#define SHADER_NAME label-text-background-layer-fragment-shader

precision highp float;

uniform bool stroked;
uniform float cornerRadius;

in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;

out vec4 fragColor;

float RectSDF(vec2 p, vec2 b, float r)
{
    vec2 d = abs(p) - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;   
}

void main() 
{
  geometry.uv = uv;

  vec2 pixelPosition = uv * dimensions;
        
  if (stroked) {
    float fDist = RectSDF(pixelPosition-dimensions/2.0, dimensions/2.0 - vLineWidth/2.0-1.0, cornerRadius);
    float fBlendAmount = smoothstep(-1.0, 1.0, abs(fDist) - vLineWidth / 2.0);

    vec4 v4FromColor = vLineColor;
    vec4 v4ToColor = (fDist < 0.0) ? vFillColor : vec4(0.0);
    fragColor = mix(v4FromColor, v4ToColor, fBlendAmount);
  } else {
    fragColor = vFillColor;
  }
        
  DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;const G=class G extends R._TextBackgroundLayer{initializeState(){super.initializeState(),this.getAttributeManager().addInstanced({instanceDragged:{size:1,transition:!1,accessor:"getDragged"}})}draw(e){const{cornerRadius:t=0}=this.props,{edgeMaxCoord:i=1}=this.parent.props;e.uniforms.cornerRadius=t,e.uniforms.edgeMaxCoord=i,super.draw(e)}getShaders(){return{...super.getShaders(),vs:we,fs:Te}}};x(G,"LabelBackgroundLayer"),U(G,"defaultProps",{getDragged:{type:"accessor",value:0}});let j=G;var Pe=`#version 300 es
#define SHADER_NAME line-layer-vertex-shader

in vec3 positions;
in vec3 instanceSourcePositions;
in vec3 instanceTargetPositions;
in vec3 instanceSourcePositions64Low;
in vec3 instanceTargetPositions64Low;
in vec2 instanceTargetPixelOffsets;
in vec4 instanceColors;
in vec3 instancePickingColors;
in vec4 instanceRects;
in float instanceSizes;
in float instanceWidths;
in float instanceRadius;
in float instanceSourceDashOffsets;
in float instanceDragged;

uniform float opacity;
uniform float widthScale;
uniform float widthMinPixels;
uniform float widthMaxPixels;
uniform float useShortestPath;
uniform int widthUnits;
uniform vec4 padding;
uniform float edgeMaxCoord;


out vec4 vColor;
out vec2 uv;

// offset vector by strokeWidth pixels
// offset_direction is -1 (left) or 1 (right)
vec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {
  // normalized direction of the line
  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);
  // rotate by 90 degrees
  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);

  return dir_screenspace * offset_direction * width / 2.0;
}

vec3 splitLine(vec3 a, vec3 b, float x) {
  float t = (x - a.x) / (b.x - a.x);
  return vec3(x, mix(a.yz, b.yz, t));
}

void main(void) {
  geometry.worldPosition = instanceSourcePositions;
  geometry.worldPositionAlt = instanceTargetPositions;
  vec3 source_world = instanceSourcePositions;
  vec3 target_world = instanceTargetPositions;
  vec3 source_world_64low = instanceSourcePositions64Low;
  vec3 target_world_64low = instanceTargetPositions64Low;

  if (useShortestPath > 0.5 || useShortestPath < -0.5) {
    source_world.x = mod(source_world.x + 180., 360.0) - 180.;
    target_world.x = mod(target_world.x + 180., 360.0) - 180.;
    float deltaLng = target_world.x - source_world.x;

    if (deltaLng * useShortestPath > 180.) {
      source_world.x += 360. * useShortestPath;
      source_world = splitLine(source_world, target_world, 180. * useShortestPath);
      source_world_64low = vec3(0.0);
    } else if (deltaLng * useShortestPath < -180.) {
      target_world.x += 360. * useShortestPath;
      target_world = splitLine(source_world, target_world, 180. * useShortestPath);
      target_world_64low = vec3(0.0);
    } else if (useShortestPath < 0.) {
      // Line is not split, abort
      gl_Position = vec4(0.);
      return;
    }
  }

  // Position
  vec4 source_commonspace;
  vec4 target_commonspace;
  vec4 source = project_position_to_clipspace(source_world, source_world_64low, vec3(0.), source_commonspace);
  vec4 target = project_position_to_clipspace(target_world, target_world_64low, vec3(0.), target_commonspace);


  vec2 targetPixelOffsets = project_pixel_size_to_clipspace(instanceTargetPixelOffsets);

  vec2 dimensions = instanceRects.zw * instanceSizes + padding.xy; 
  vec2 clip_padd_right_bottom = project_pixel_size_to_clipspace(padding.zw);
  vec2 clip_dimensions = project_pixel_size_to_clipspace(dimensions);
  vec2 dimensions_wo_pad = instanceRects.zw * instanceSizes;
  vec2 clip_dimensions_wo_pad = project_pixel_size_to_clipspace(dimensions_wo_pad);


  //default pos switch on edge
  if (instanceDragged < 0.5) {
    vec2 clip_offset = abs(targetPixelOffsets);
    targetPixelOffsets += (vec2(1.0, 0.0) - step(vec2(-edgeMaxCoord, edgeMaxCoord), target.xy + targetPixelOffsets * vec2(1.0, -1.0) + vec2(-1.0, 1.0) * clip_dimensions)) * (clip_offset * 2.0 + clip_dimensions_wo_pad) * vec2(1.0,-1.0);
  }

  target.xy += targetPixelOffsets * vec2(1.0,-1.0);
  
  //edge check
  target.x = clamp(target.x, -edgeMaxCoord + clip_dimensions.x, edgeMaxCoord - clip_padd_right_bottom.x);
  target.y = clamp(target.y, -edgeMaxCoord + clip_padd_right_bottom.y, edgeMaxCoord - clip_dimensions.y);

  // 8point
  target.xy -= 0.5 * clip_dimensions_wo_pad * (step(0., vec2(1.0, -1.0) * (target.xy - source.xy)) + step(0., vec2(1.0, -1.0) * (target.xy - source.xy) - clip_dimensions_wo_pad)) * vec2(1.0, -1.0);

  //dash source offset
  vec2 line = target.xy - source.xy;
  float lineLength = length(line);
  vec2 clip_dash = project_pixel_size_to_clipspace(vec2(instanceSourceDashOffsets, instanceSourceDashOffsets));
  float dashOffset = min( lineLength / sqrt(pow(line.x / clip_dash.x, 2.0) + pow(line.y / clip_dash.y, 2.0)), lineLength ) / lineLength;
  source = mix(source, target, dashOffset);

  // linear interpolation of source & target to pick right coord
  float segmentIndex = positions.x;
  vec4 p = mix(source, target, segmentIndex);
  geometry.position = mix(source_commonspace, target_commonspace, segmentIndex);
  uv = positions.xy;
  geometry.uv = uv;
  geometry.pickingColor = instancePickingColors;

  // Multiply out width and clamp to limits
  float widthPixels = clamp(
    project_size_to_pixel(instanceWidths * widthScale, widthUnits),
    widthMinPixels, widthMaxPixels
  );

  // extrude
  vec3 offset = vec3(
    getExtrusionOffset(target.xy - source.xy, positions.y, widthPixels),
    0.0);
  DECKGL_FILTER_SIZE(offset, geometry);
  DECKGL_FILTER_GL_POSITION(p, geometry);
  gl_Position = p + vec4(project_pixel_size_to_clipspace(offset.xy), 0.0, 0.0);

  // Color
  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);
  DECKGL_FILTER_COLOR(vColor, geometry);
}
`;const Z=class Z extends R.LineLayer{initializeState(){super.initializeState(),this.getAttributeManager().addInstanced({instanceTargetPixelOffsets:{size:2,transition:!0,accessor:"getTargetPixelOffset"},instanceSourceDashOffsets:{size:1,transition:!0,accessor:"getSourceDashOffset",defaultValue:1},instanceRects:{size:4,accessor:"getBoundingRect"},instanceSizes:{size:1,transition:!0,accessor:"getSize",defaultValue:0},instanceRadius:{size:1,transition:!0,accessor:"getRadius",defaultValue:1},instanceDragged:{size:1,transition:!1,accessor:"getDragged"}})}draw(e){const{edgeMaxCoord:t=1}=this.props;let{padding:i=[0,0,0,0]}=this.props;i.length<4&&(i=[i[0],i[1],i[0],i[1]]),e.uniforms.padding=i,e.uniforms.edgeMaxCoord=t,super.draw(e)}getShaders(){return{...super.getShaders(),vs:Pe}}};x(Z,"LabelLineLayer"),U(Z,"defaultProps",{getTargetPixelOffset:{type:"accessor",value:[0,0]},getSourceDashOffset:{type:"accessor",value:0},getBoundingRect:{type:"accessor",value:[0,0,0,0]},getSize:{type:"accessor",value:0},getRadius:{type:"accessor",value:0},getDragged:{type:"accessor",value:0}});let ee=Z;const le=class le extends R.TextLayer{renderLayers(){if(this.props.data[0]){const e=this.getBoundingRect(this.props.data[0],{}),t=e[2],i=e[3],s=t>i?0:1,a=this.props.backgroundPadding,o=Math.abs(t-i)*.5*this.props.getSize;a[s]-=o,a[s+2]-=o;const r=((t>i?i:t)*this.props.getSize+a[1-s]+a[3-s])*.5*.85;this.props._subLayerProps.background.cornerRadius=r}return super.renderLayers()}};x(le,"LabelCloseButtonLayer");let te=le;const V=class V extends R.TextLayer{getPickingInfo(e){const{info:t,sourceLayer:i}=e;if(t.index!==-1){if(this.state.closeData?.[0]?.dataIndex!==t.index){const s=this.getBoundingRect(t.object,t).slice(2).map(a=>a*this.props.getSize);this.setState({labelSize:s,closeData:[Object.assign({labelSize:s,viewportW:t.viewport.width,viewportH:t.viewport.height,dataIndex:t.index},t.object)]})}}else this.setState({closeData:[]});return t}renderLayers(){return[new ee(this.getSubLayerProps({id:"line",updateTriggers:{getDragged:this.props.updateTriggers.getDragged,getTargetPixelOffset:this.props.updateTriggers.getPixelOffset,getSourcePosition:this.props.updateTriggers.getPosition,getTargetPosition:this.props.updateTriggers.getPosition}}),{data:this.props.data,getColor:[102,102,102],getSourcePosition:this.props.getPosition,getTargetPosition:this.props.getPosition,getTargetPixelOffset:this.props.getPixelOffset,getSourceDashOffset:this.props.getLineSourceFillOffset,getBoundingRect:this.getBoundingRect,getRadius:this.props.getRadius,getSize:this.props.getSize,getWidth:1,getDragged:this.props.getDragged,padding:this.props.backgroundPadding,edgeMaxCoord:this.props.edgeMaxCoord,transitions:{getSourcePosition:this.props.transitions?.getPosition,getTargetPosition:this.props.transitions?.getPosition,getTargetPixelOffset:this.props.transitions?.getPosition,getSourceDashOffset:this.props.transitions?.getPosition}}),...super.renderLayers(),this.state.closeData?.length&&new te(this.getSubLayerProps({id:"close",_subLayerProps:{background:{type:j,cornerRadius:0,getDragged:1},characters:{type:X,getDragged:1}},updateTriggers:{getPixelOffset:this.props.updateTriggers.getPixelOffset}}),{data:this.state.closeData||[],getPosition:x(e=>this.props.getPosition(e,{index:e.dataIndex}),"getPosition"),getPixelOffset:x(e=>{const t=typeof this.props.getPixelOffset=="function"?this.props.getPixelOffset(e):this.props.getPixelOffset.slice(0),i=this.context.viewport.project(this.props.getPosition(e,{index:e.dataIndex}).slice(0,2)),s=e.viewportW,a=e.viewportH,[o,r]=e.labelSize,[n,l,c=n,u=l]=this.props.backgroundPadding;return(this.props.getDragged.name?this.props.getDragged(e):this.props.getDragged)||(i[0]+t[0]<o+n&&(t[0]=o-t[0]),i[1]+t[1]<r+l&&(t[1]=r-t[1])),i[0]+t[0]<o+n?t[0]=o+n-i[0]:i[0]+t[0]>s-c&&(t[0]=s-c-i[0]),i[1]+t[1]<r+l?t[1]=r+l-i[1]:i[1]+t[1]>a-u&&(t[1]=a-u-i[1]),t[0]+=c+9*.5,t[1]-=r+l-9*.5,t},"getPixelOffset"),getText:x(e=>"\u274C","getText"),getColor:[255,255,255],getSize:9,getTextAnchor:"end",getAlignmentBaseline:"bottom",getDragged:x(e=>1,"getDragged"),edgeMaxCoord:this.props.edgeMaxCoord,fontSettings:{sdf:!0,fontSize:27,buffer:8},characterSet:["\u274C"],pickable:!0,background:!0,backgroundPadding:[9,9,9,8],getBackgroundColor:[96,120,137],getBorderColor:[255,255,255],getBorderWidth:2,outlineColor:[255,255,255],outlineWidth:2})]}};x(V,"LabelLayer"),U(V,"defaultProps",{getLineSourceFillOffset:{type:"accessor",value:0},getRadius:{type:"accessor",value:0},getDragged:{type:"accessor",value:0}});let ie=V;const Oe="rgb(253, 253, 253)",fe="rgb(51, 51, 51)",Ce=3,ke=500,xe="ABCDEFGHIJKLMNOPQRSTUVWXYZ\xC5\xC4\xD6abcdefghijklmnopqrstuvwxyz\xE5\xE4\xE9\xF60123456789+-\u2212\u2013*/%,.\xB2:() ".split(""),z=Symbol.for("key"),_=Symbol.for("trailHeadKey"),me=Symbol.for("opacity"),B=Symbol.for("bubbleRequired"),W=x((C,e=0)=>t=>C+t*e,"marginScaleH"),be=x((C,e=0)=>t=>C+t*e,"marginScaleW");function _e(C){return!!C[_]}x(_e,"isTrailBubble");const se=.05,Re=x((C,e)=>({SMALL:{margin:{top:30,bottom:40,left:30,right:10},leftMarginRatio:1,padding:2,minRadiusPx:.5,maxRadiusPx:Math.max(.5,se*p.LegacyUtils.hypotenuse(C,e)),minTrailThicknessPx:1,maxTrailThicknessPx:4,infoElHeight:16,yAxisTitleBottomMargin:6,xAxisTitleBottomMargin:4},MEDIUM:{margin:{top:15,bottom:45,left:40,right:15},leftMarginRatio:1.6,padding:2,minRadiusPx:1,maxRadiusPx:Math.max(.5,se*p.LegacyUtils.hypotenuse(C,e)),minTrailThicknessPx:2,maxTrailThicknessPx:6,infoElHeight:20,yAxisTitleBottomMargin:3,xAxisTitleBottomMargin:4},LARGE:{margin:{top:15,bottom:W(30,.03)(e),left:be(31,.015)(C),right:20},leftMarginRatio:1.8,padding:2,minRadiusPx:1,maxRadiusPx:Math.max(.5,se*p.LegacyUtils.hypotenuse(C,e)),minTrailThicknessPx:2,maxTrailThicknessPx:8,infoElHeight:22,yAxisTitleBottomMargin:3,xAxisTitleBottomMargin:W(0,.01)(e),hideSTitle:!0}}),"PROFILE_CONSTANTS"),Be=x((C,e)=>({MEDIUM:{margin:{top:20,bottom:55,left:50,right:20},yAxisTitleBottomMargin:3,xAxisTitleBottomMargin:4,infoElHeight:26},LARGE:{margin:{top:30,bottom:W(45,.03)(e),left:be(35,.025)(C),right:30},yAxisTitleBottomMargin:3,xAxisTitleBottomMargin:W(-5,.01)(e),infoElHeight:32,hideSTitle:!0}}),"PROFILE_CONSTANTS_FOR_PROJECTOR"),ce=class ce extends p.Chart{constructor(e){e.subcomponents=[{type:p.LabelSizeHelper,placeholder:".vzb-bc-labels",name:"labels"},{type:p.DateTimeBackground,placeholder:".vzb-bc-date"},{type:Le,placeholder:".vzb-bc-axis-titles"}],e.template=`
      <svg class="vzb-bubblechart-svg vzb-export">
          <svg class="vzb-bubblechart-svg-back">
              <g class="vzb-bc-graph">
                  <g class="vzb-bc-date"></g>
                  <svg class="vzb-bc-axis-x"><g></g></svg>
                  <svg class="vzb-bc-axis-y"><g></g></svg>
                  <line class="vzb-bc-projection-x"></line>
                  <line class="vzb-bc-projection-y"></line>
              </g>
          </svg>
      </svg>
      <div class="vzb-bubblechart-canvas-wrap vzb-bubblechart-svg"></div>
      <svg class="vzb-bubblechart-svg vzb-export">
          <svg class="vzb-bubblechart-svg-main">
              <g class="vzb-bc-graph">
                  <g class="vzb-bc-axis-titles"></g>

                  <svg class="vzb-bc-bubbles-crop">
                      <g class="vzb-zoom-selection"></g>
                      <rect class="vzb-bc-eventarea"></rect>
                      <g class="vzb-bc-trails"></g>
                      <g class="vzb-bc-bubbles"></g>
                      <rect class="vzb-bc-forecastoverlay vzb-hidden" x="0" y="0" width="100%" height="100%" fill="url(#vzb-bc-pattern-lines-${e.id})" pointer-events='none'></rect>
                  </svg>

                  <rect class="vzb-bc-zoom-rect"></rect>
              </g>
          </svg>
      </svg>
      <svg class="vzb-bubblechart-svg vzb-export">
          <svg class="vzb-bubblechart-svg-front">
              <g class="vzb-bc-graph">
                  <svg class="vzb-bc-bubbles-crop">
                      <g class="vzb-bc-decorations">
                          <path class="vzb-bc-line-equal-xy vzb-invisible"></path>
                          <g class="vzb-bc-x-axis-groups"></g>
                      </g>   
                      <g class="vzb-bc-lines"></g>
                      <g class="vzb-bc-bubble-crown vzb-hidden">
                          <circle class="vzb-crown-glow"></circle>
                          <circle class="vzb-crown"></circle>
                      </g>        
                  </svg>
                  <svg class="vzb-bc-labels-crop">
                      <g class="vzb-bc-labels"></g>
                  </svg>
              </g>
          </svg>
          <svg width="0" height="0">
              <defs>
                  <filter class="vzb-noexport" id="vzb-glow-filter-${e.id}" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
                  </filter>
                  <pattern class="vzb-noexport" id="vzb-bc-pattern-lines-${e.id}" x="0" y="0" patternUnits="userSpaceOnUse" width="50" height="50" viewBox="0 0 10 10"> 
                      <path d='M-1,1 l2,-2M0,10 l10,-10M9,11 l2,-2' stroke='black' stroke-width='3' opacity='0.08'/>
                  </pattern> 
              </defs>
          </svg>
      </svg>
      <div class="vzb-tooltip vzb-hidden vzb-tooltip-mobile"></div>
    `,super(e),this.__data,this.__oldData,this.__labelData,this.__trailsData,this.__lastLineTrailData,this.__newLastLineTrailData,this.activeObject=void 0,this.labelOffset={},this.labelDragged={},this.dragX0,this.dragY0,this.dragX,this.dragY,this.redrawUpdateTrigger=0,this.opacityUpdateTrigger=0}setup(){this.DOM={element:this.element,chartSvg:this.element.select("svg.vzb-bubblechart-svg-main"),chartSvgFront:this.element.select("svg.vzb-bubblechart-svg-front"),chartSvgBack:this.element.select("svg.vzb-bubblechart-svg-back"),chartSvgAll:this.element.selectAll("svg.vzb-bubblechart-svg"),graphAll:this.element.selectAll(".vzb-bc-graph"),bubbleContainerCropAll:this.element.selectAll(".vzb-bc-bubbles-crop"),zoomRect:this.element.select(".vzb-bc-zoom-rect"),eventArea:this.element.select(".vzb-bc-eventarea"),forecastOverlay:this.element.select(".vzb-bc-forecastoverlay"),tooltipMobile:this.element.select(".vzb-tooltip-mobile"),defs:this.element.select("defs"),canvasWrap:this.element.select(".vzb-bubblechart-canvas-wrap")},this.DOM.chartSvg.select(".vzb-bc-graph").call(t=>Object.assign(this.DOM,{graph:t,trailsContainer:t.select(".vzb-bc-trails"),bubbleContainer:t.select(".vzb-bc-bubbles"),bubbleContainerCrop:t.select(".vzb-bc-bubbles-crop"),zoomSelection:t.select(".vzb-zoom-selection")})),this.DOM.chartSvgFront.select(".vzb-bc-graph").call(t=>{Object.assign(this.DOM,{graphFront:t,labelsContainer:t.select(".vzb-bc-labels"),labelsContainerCrop:t.select(".vzb-bc-labels-crop"),linesContainer:t.select(".vzb-bc-lines"),bubbleCrown:t.select(".vzb-bc-bubble-crown"),decorationsEl:t.select(".vzb-bc-decorations")}),this.DOM.lineEqualXY=this.DOM.decorationsEl.select(".vzb-bc-line-equal-xy"),this.DOM.xAxisGroupsEl=this.DOM.decorationsEl.select(".vzb-bc-x-axis-groups")}),this.DOM.chartSvgBack.select(".vzb-bc-graph").call(t=>{Object.assign(this.DOM,{yAxisElContainer:t.select(".vzb-bc-axis-y"),xAxisElContainer:t.select(".vzb-bc-axis-x"),date:t.select(".vzb-bc-date"),projectionX:t.select(".vzb-bc-projection-x"),projectionY:t.select(".vzb-bc-projection-y")}),this.DOM.yAxisEl=this.DOM.yAxisElContainer.select("g"),this.DOM.xAxisEl=this.DOM.xAxisElContainer.select("g")}),this.DOM.bubbleCrown.selectAll(".vzb-crown-glow").attr("filter",`url(#vzb-glow-filter-${this.id})`),this._date=this.findChild({type:"DateTimeBackground"}),this._labels=this.findChild({type:"LabelSizeHelper"}),this._panZoom=new q(this),this.decorations=new J(this),this.xAxis=p.axisSmart("bottom"),this.yAxis=p.axisSmart("left"),this.isCanvasPreviouslyExpanded=!1,this.draggingNow=null,this.hoverBubble=!1,this.__lastStep=0;const e=this;b.select("body").on("keydown",t=>{e.ui.cursorMode!=="arrow"&&e.ui.cursorMode!=="hand"||(t.metaKey||t.ctrlKey)&&e.DOM.chartSvgAll.classed("vzb-zoomin",!0)}).on("keyup",t=>{e.ui.cursorMode!=="arrow"&&e.ui.cursorMode!=="hand"||!t.metaKey&&!t.ctrlKey&&e.DOM.chartSvgAll.classed("vzb-zoomin",!1)}).on("mouseenter",t=>{e.ui.cursorMode!=="arrow"&&e.ui.cursorMode!=="hand"||!t.metaKey&&!t.ctrlKey&&e.DOM.chartSvgAll.classed("vzb-zoomin",!1)}),this.root.element.on("custom-resetZoom",()=>{e._panZoom.reset(null,500)}),this.DOM.canvasWrap.style("pointer-events","all"),this.FONT_FAMILY='Verdana, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',this.deckBubble=this.getDeck(),this.props=this.getProps(),this._panZoom.zoomSelection(this.DOM.canvasWrap.select("canvas")),this.DOM.canvasWrap.select("canvas").node().addEventListener("wheel",t=>{e.ui?.zoomOnScrolling&&(t.preventDefault(),t.stopPropagation())},{passive:!1}),this.DOM.canvasWrap.select("canvas").call(this._panZoom.dragRectangle).call(this._panZoom.zoomer).on("contextmenu",t=>t.preventDefault()).on("dblclick.zoom",null).on("mouseup",()=>{e.draggingNow=!1}).on("click",t=>{const i=e.ui.cursorMode;!t.defaultPrevented&&i!=="arrow"&&i!=="hand"&&e._panZoom.zoomByIncrement(t,i,500)}).on("mouseleave",()=>{this.MDL.highlighted.data.filter.any()&&this.MDL.highlighted.data.filter.clear()})}get MDL(){return{frame:this.model.encoding.frame,selected:this.model.encoding.selected,highlighted:this.model.encoding.highlighted,superHighlighted:this.model.encoding.superhighlighted,y:this.model.encoding[this.state.alias?.y||"y"],x:this.model.encoding[this.state.alias?.x||"x"],size:this.model.encoding.size,color:this.model.encoding.color,label:this.model.encoding.label,trail:this.model.encoding.trail}}draw(){this.localise=this.services.locale.auto({interval:this.MDL.frame.interval}),this.sScale=this.MDL.size.scale.d3Scale,this.trailSizeScale=this.MDL.size.scale.d3Scale.copy(),this.frameStepIndexMax=this.MDL.frame.stepCount-1,this.TIMEDIM=this.MDL.frame.data.concept,this.KEYS=this.model.data.space.filter(e=>e!==this.TIMEDIM),!this._updateLayoutProfile()&&(this.addReaction(this._updateScales),this.addReaction(this.updateSize,{throttle_ms:50}),this.addReaction(this._redrawOpacity),this.addReaction(this._updateHighlighted),this.addReaction(this._updateLabelFontSizes),this.addReaction(this._updateSelected),this.addReaction(this.updateColorPatterns),this.addReaction(this._updateShowYear),this.addReaction(this._updateYear),this.addReaction(this.drawData),this.addReaction(this._zoomToMarkerMaxMin),this.addReaction(this.redrawData),this.addReaction(this._selectDataPoints),this.addReaction(this._highlightDataPoints),this.addReaction(this._blinkSuperHighlighted),this.addReaction(this._drawForecastOverlay),this.addReaction(this._setupCursorMode),this.addReaction(this.updateDecorations))}drawData(){this.perfDataStart=performance.now(),this._updateMarkerSizeLimits(),this.processFrameData(),this._drawBubbles()}updateColorPatterns(){if(this.MDL.color.scale.isPattern){const e=this.MDL.color.data.concept;this.DOM.defs.selectAll(".flag").data(this.MDL.color.data.domainData,t=>t[0]).enter().append("pattern").attr("id",t=>`flag-${t[0]}-${this.id}`).attr("class","flag").attr("width","100%").attr("height","100%").attr("patternContentUnits","objectBoundingBox").html(t=>t[1][e]).each(function(){const t=b.select(this).select("svg");t.empty()||(t.attr("viewBox")||t.attr("viewBox",`0 0 ${t.attr("width")} ${t.attr("height")}`),t.attr("preserveAspectRatio")||t.attr("preserveAspectRatio","xMidYMid slice"),t.attr("width",1).attr("height",1))})}else this.DOM.defs.selectAll(".flag").remove()}_updateShowYear(){this.DOM.date.classed("vzb-hidden",!this.ui.timeInBackground)}_updateYear(){const e=this.duration;this._date.setText(this.MDL.frame.value,e)}__getColor(e,t){return t!=null&&!p.LegacyUtils.isNaN(t)?this.MDL.color.scale.isPattern?`url(#flag-${e}-${this.id})`:this.cScale(t):Oe}__getColorForTrail(e,t){return e==null||p.LegacyUtils.isNaN(e)||this.MDL.color.scale.isPattern?fe:this.trailSizeScale(t)>Ce?this.cScale(e):this.MDL.color.scale.palette.getColorShade({colorID:e})||fe}redrawData(e=0){if(this.MDL.color.scale.type,this.MDL.size.scale.type,this.MDL.size.scale.extent,e){const t=this.deckBubble.props._pickable;this.deckBubble.setProps({_pickable:!1,layers:this.getBubbleLayers(this.__data,!!e,.001)}),requestAnimationFrame(()=>{this.redrawUpdateTrigger++,this.deckBubble.setProps({layers:this.getBubbleLayers(this.__data,!!e,e)}),setTimeout(()=>{this.deckBubble.setProps({_pickable:t})},e)})}else this.redrawUpdateTrigger++,this.deckBubble.setProps({layers:this.getBubbleLayers(this.__data,!!e,e)})}__getZoomed(e,t,i){return b[e.toLowerCase()](t!==null?t:i)}__getZoomedMin(e,t){return this.__getZoomed("Min",e,t)}__getZoomedMax(e,t){return this.__getZoomed("Max",e,t)}_zoomToMarkerMaxMin(){this.services.layout.size,this.MDL.x.scale.type,this.MDL.y.scale.type;const e={x:this.MDL.x.scale.zoomed,y:this.MDL.y.scale.zoomed},t=this.MDL.x.data.domain,i=this.MDL.y.data.domain;if(this.draggingNow)return;this._panZoom.resetZoomState(),this.yScale.range(this._rangeBump([this.height,0])),this.xScale.range(this._rangeBump([0,this.width]));const s=this.__getZoomedMin(e.x,t),a=this.__getZoomedMax(e.x,t),o=this.__getZoomedMin(e.y,i),r=this.__getZoomedMax(e.y,i);w.runInAction(()=>{this._panZoom.zoomToMaxMin(s,a,o,r,0,"don't feed these zoom values back to state")})}_resetZoomMinMaxXReaction(){return{concept:this.MDL.x.data.concept}}_resetZoomMinMaxX(){this.ui.panzoom.x={zoomedMin:null,zoomedMax:null}}_resetZoomMinMaxYReaction(){return{concept:this.MDL.y.data.concept}}_resetZoomMinMaxY(){this.ui.panzoom.y={zoomedMin:null,zoomedMax:null}}_drawForecastOverlay(){this.DOM.forecastOverlay.classed("vzb-hidden",!this.ui.showForecast||!this.ui.showForecastOverlay||!this.ui.endBeforeForecast||this.MDL.frame.value<=this.MDL.frame.parseValue(this.ui.endBeforeForecast))}_updateLayoutProfile(){if(this.services.layout.size,this.elementHeight=this.element.node().clientHeight||0,this.elementWidth=this.element.node().clientWidth||0,this.profileConstants=this.services.layout.getProfileConstants(Re(this.elementWidth,this.elementHeight),Be(this.elementWidth,this.elementHeight)),!this.elementHeight||!this.elementWidth)return p.LegacyUtils.warn("Chart _updateProfile() abort: container is too little or has display:none")}get duration(){return this.MDL.frame.playing&&this.MDL.frame.speed||0}_updateScales(){this.yScale=this.MDL.y.scale.d3Scale,this.xScale=this.MDL.x.scale.d3Scale}get cScale(){return this.MDL.color.scale.d3Scale}updateSize(){this.services.layout.size;const{x:e,y:t}=this.MDL;this.model.encoding.y.scale.d3Scale;const{graphAll:i,eventArea:s,bubbleContainerCropAll:a,labelsContainerCrop:o,xAxisElContainer:r,xAxisEl:n,yAxisElContainer:l,yAxisEl:c,projectionX:u,projectionY:f,xAxisGroupsEl:m,canvasWrap:h}=this.DOM,g=this;this.services.layout.profile;const d=this.profileConstants.margin,D=this.profileConstants.infoElHeight;this.profileConstants.xAxisTitleBottomMargin;const v=this.height=this.elementHeight-d.top-d.bottom||0,y=this.width=this.elementWidth-d.left*this.profileConstants.leftMarginRatio-d.right||0;i.attr("transform","translate("+d.left*this.profileConstants.leftMarginRatio+","+d.top+")"),h.style("transform","translate("+d.left*this.profileConstants.leftMarginRatio+"px,"+d.top+"px)"),this._date.resizeText(y,v),s.attr("width",y).attr("height",Math.max(0,v)),this.yScale.range(this._rangeBump([v,0])),this.xScale.range(this._rangeBump([0,y]));const E=t.scale.type==="rank"?{ticks:t.rollup.map(M=>M.tickPosition),formatter:x(M=>t.rollup.find(A=>A.tickPosition===M).name,"formatter"),textAnchor:"start",repositionLabels:Object.fromEntries(t.rollup.map(M=>[M.tickPosition,{x:1.5*D,y:-D}]))}:{};this.yAxis.scale(this.yScale).tickSizeInner(-y).tickSizeOuter(0).tickPadding(6).tickSizeMinor(-y,0).labelerOptions(Object.assign({scaleType:t.scale.type,toolMargin:d,limitMaxTickNumber:6,bump:this.profileConstants.maxRadiusPx/2,viewportLength:v,formatter:this.services.locale.auto({shareOrPercent:t.data?.conceptProps?.format})},E)),this.xAxis.scale(this.xScale).tickSizeInner(-v).tickSizeOuter(0).tickPadding(6).tickSizeMinor(-v,0).labelerOptions({scaleType:e.scale.type,toolMargin:d,bump:this.profileConstants.maxRadiusPx/2,viewportLength:y,formatter:this.services.locale.auto({shareOrPercent:e.data?.conceptProps?.format})}),a.attr("width",y).attr("height",Math.max(0,v)),o.attr("width",y).attr("height",Math.max(0,v)),r.attr("width",y+1).attr("height",this.profileConstants.margin.bottom+v).attr("y",-1).attr("x",-1),n.attr("transform","translate(1,"+(1+v)+")"),l.attr("width",this.profileConstants.margin.left+y).attr("height",Math.max(0,v)).attr("x",-this.profileConstants.margin.left),c.attr("transform","translate("+(this.profileConstants.margin.left-1)+",0)"),c.call(this.yAxis),n.call(this.xAxis);const k=this.profileConstants.maxRadiusPx;u.attr("y1",g.yScale.range()[0]+k),f.attr("x2",g.xScale.range()[0]-k),m.style("font-size",D*.8+"px"),h.style("max-width",y+"px"),h.style("max-height",Math.max(0,v)+"px")}_rangeBump(e,t){const i=this.profileConstants.maxRadiusPx;if(t=t?-1:1,p.LegacyUtils.isArray(e)&&e.length>1){let s=e[0],a=e[e.length-1];return s<a?(s+=i*t,a-=i*t,s>a&&(s=a=(s+a)/2)):s>a&&(s-=i*t,a+=i*t,s<a&&(s=a=(s+a)/2)),[s,a]}p.LegacyUtils.warn("rangeBump error: input is not an array or empty")}_drawBubbles(){this.model.encoding.frame.playing?(this.deckBubble.setProps({layers:this.getBubbleLayers(this.__oldData,!1,0,void 0,this.__lastLineTrailData)}),requestAnimationFrame(()=>{this.redrawUpdateTrigger++,this.deckBubble.setProps({layers:this.getBubbleLayers(this.__oldData,!0,.001,void 0,this.__lastLineTrailData)}),requestAnimationFrame(()=>{this.redrawUpdateTrigger++,this.__labelData=this.__newLabelData,this.deckBubble.setProps({layers:this.getBubbleLayers(this.__data,!0,this.duration+this.perfDataStart-performance.now(),void 0,this.__newLastLineTrailData)}),this.__trailsData=this.__newTrailsData})})):this.deckBubble.setProps({layers:this.getBubbleLayers(this.__data,!1)})}processFrameData(){const e=this.frameStepIndexMax+2;let t=0,i=0,s,a=[],o=null;const r=new Map,n=[],l=[],c=[],u={};let f;const m=this.MDL.trail.show&&this.__someSelected;if(m?a=this.model.dataArray.reduce((h,g,d)=>(g.r=p.LegacyUtils.areaToRadius(this.sScale(g.size||0)),g[_]?(o||(o=g[_],n.length+=e,f=h.length,h.length+=e,i=t+1),g[B]||(n[t++]=g,h[f++]=g,r.has(g[_])||r.set(g[_],Object.assign({},g)))):o?(u[o]=g.size,g[B]?(h.fill(Object.assign({uz:-15e3},h[f-1]),f,h.length-1),h.length--):(n.fill(g,t,n.length),s=t==i?1:2,l.push([n[t-s],n[t-s]]),c.push([n[t-s],g]),h.fill(Object.assign({uz:-15e3},h[f-1]),f,h.length-1),h[h.length-1]=g),t=n.length,o=null):g[B]||h.push(g),h),[]):this.__someSelected&&this.ui.opacitySelectDim===0?a=this.model.dataArray.filter(h=>h[B]||!this.MDL.selected.data.filter.markers.has(h[z])?!1:(h.r=p.LegacyUtils.areaToRadius(this.sScale(h.size||0)),!0)):a=this.model.dataArray.filter(h=>h[B]?!1:(h.r=p.LegacyUtils.areaToRadius(this.sScale(h.size||0)),!0)),this.labelZScale=b.scaleLinear([0,r.size-1],[-.09,-.05]),n.length&&n.forEach(h=>{h[_]&&(h.z=u[h[_]])}),this.__newLabelData=m?this.__selectedKeys.map(h=>r.get(h)||this.model.dataMap.get(h)).filter(h=>h&&!h[B]):this.__selectedKeys.map(h=>this.model.dataMap.get(h)).filter(h=>h&&!h[B]),this.__selectedKeys.length>this.__newLabelData.length){const h=this.__newLabelData.map(g=>g[_]||g[z]);this.__selectedKeys.sort((g,d)=>h.includes(d)-h.includes(g))}this.model.encoding.frame.playing?this.__oldData=this.resortData(this.__data,a,e-2):(this.__trailsData=n,this.__labelData=this.__newLabelData),this.__data=a,this.__newTrailsData=n,this.__newLastLineTrailData=c,this.__lastLineTrailData=l}resortData(e,t,i){const s={},a={};let o=0,r;return e.forEach((n,l)=>{n[_]?a[n[_]]===void 0&&(a[n[_]]=l):s[n[z]]=n}),t.map(n=>n[_]?(r=o++,o>i&&(o=0),e[a[n[_]]+r]||Object.assign({[me]:0},n)):s[n[z]]||Object.assign({[me]:0},n))}_updateMarkerSizeLimits(){this.services.layout.size,this.MDL.size.scale.domain;const{minRadiusPx:e,maxRadiusPx:t,minTrailThicknessPx:i,maxTrailThicknessPx:s}=this.profileConstants;this.root.ui.minMaxRadius={min:e,max:t};const a=this.MDL.size.scale.extent||[0,1];let o=p.LegacyUtils.radiusToArea(Math.max(t*a[0],e)),r=p.LegacyUtils.radiusToArea(Math.max(t*a[1],e));this.sScale.range([o,r]),this.trailSizeScale.domain(this.MDL.size.scale.domain).range([i,s])}_getLabelText(e){return this.KEYS.map(t=>e.label[t]).join(",")}_updateLabelFontSizes(){this._labels.MDL.size_label.scale.extent,this.__defaultFontSize=this._labels.defaultFontSize,this.__isConstantFontSize=this._labels.MDL.size_label.data.isConstant,this.__fontSize=this._labels.getFontSize(this._labels.MDL.size_label.data.constant),this.deckBubble.setProps({layers:this.getBubbleLayers(void 0,!1)})}_updateHighlighted(){const e=this.MDL.highlighted.data.filter;this.__someHighlighted=e.any(),this.__highlightedMarkers=new Map(e.markers);const t=this.__highlightedMarkers.size==1?Object.assign({},this.model.dataMap.get(this.__highlightedMarkers.keys().next().value)):null;this.activeObject=t?.[B]?null:t,this.activeObjectData=this.activeObject?[this.activeObject]:[],this.opacityUpdateTrigger++,this.deckBubble.setProps({layers:this.getBubbleLayers(void 0,!1)})}_updateSelected(){const e=this.MDL.selected.data.filter;this.__someSelected=e.any(),this.__selectedMarkers=new Map(e.markers),this.__selectedKeys=[...this.__selectedMarkers.keys()],Object.keys(this.labelOffset).forEach(t=>{this.__selectedMarkers.has(t)||delete this.labelOffset[t]}),Object.keys(this.labelDragged).forEach(t=>{this.__selectedMarkers.has(t)||delete this.labelDragged[t]}),w.runInAction(()=>{this.MDL.trail.show||(this.__labelData=this.__selectedKeys.map(t=>this.model.dataMap.get(t)).filter(t=>t&&!t[B]),this.opacityUpdateTrigger++,this.deckBubble.setProps({layers:this.getBubbleLayers(void 0,!1)}))})}_redrawOpacity(){this.ui.opacityRegular,this.ui.opacitySelect,this.ui.opacitySelectDim,this.ui.opacityHighlight,this.ui.opacityHighlightDim,this.MDL.color.scale.d3Scale,this.opacityUpdateTrigger++,this.deckBubble.setProps({layers:this.getBubbleLayers(this.__data,!1,0)})}_getBubbleOpacity(e){const t=this.ui;return this.__highlightedMarkers.has(e[z])?t.opacityHighlight:_e(e)?t.opacityRegular:this.__selectedMarkers.has(e[z])?t.opacitySelect:this.__someSelected?t.opacitySelectDim:this.__someHighlighted?t.opacityHighlightDim:t.opacityRegular}_setBubbleCrown(e,t,i,s,a){const o=this.DOM.bubbleCrown;e!=null?(o.classed("vzb-hidden",!1),o.select(".vzb-crown").attr("cx",e).attr("cy",t).attr("r",i).attr("fill",a?"none":s),o.selectAll(".vzb-crown-glow").attr("cx",e).attr("cy",t).attr("r",i+10).attr("stroke",s)):o.classed("vzb-hidden",!0)}_axisProjections(e){const{projectionX:t,projectionY:i,xAxisEl:s,yAxisEl:a}=this.DOM;if(e!=null){const o=e[this._alias("y")],r=e[this._alias("x")],n=e.r;this.ui.whenHovering.showProjectionLineX&&this.xScale(r)>0&&this.xScale(r)<this.width&&this.yScale(o)+n<this.height&&t.style("opacity",1).attr("y2",this.yScale(o)+n).attr("x1",this.xScale(r)).attr("x2",this.xScale(r)),this.ui.whenHovering.showProjectionLineY&&this.yScale(o)>0&&this.yScale(o)<this.height&&this.xScale(r)-n>0&&i.style("opacity",1).attr("y1",this.yScale(o)).attr("y2",this.yScale(o)).attr("x1",this.xScale(r)-n),this.ui.whenHovering.higlightValueX&&this.MDL.x.scale.type!=="rank"&&s.call(this.xAxis.highlightValue(r)),this.ui.whenHovering.higlightValueY&&this.MDL.y.scale.type!=="rank"&&a.call(this.yAxis.highlightValue(o))}else t.style("opacity",0),i.style("opacity",0),s.call(this.xAxis.highlightValue("none")),a.call(this.yAxis.highlightValue("none"))}_highlightDataPoints(){const e=this,t=this.MDL.highlighted.data.filter,i=this.MDL.selected.data.filter;this.someHighlighted=t.any();const s=this.activeObject;if(t.markers.size===1&&s&&!s[B]){t.markers.keys().next().value;const a=s[_]||s[z],o=e.xScale(s[e._alias("x")]),r=e.yScale(s[e._alias("y")]),n=s.r,l=e.__getColor(a,s.color);let c=!1;(o+n<0||o-n>this.width||r+n<0||r-n>this.height)&&(c=!0);const u=i.has(a);if(_e(s),u){e._setBubbleCrown(o,r,n,l,!0)}c||e._axisProjections(s)}else this._axisProjections(),this._setBubbleCrown()}_blinkSuperHighlighted(){if(!this.MDL.superHighlighted)return;const e=this.MDL.superHighlighted.data.filter;if(!e.any()||this.duration){this.__superHLTimeoutID&&(clearTimeout(this.__superHLTimeoutID),this.__superHLTimeoutID=null,this.opacityUpdateTrigger++,this.__superHLBlink=!1,this.deckBubble.setProps({layers:this.getBubbleLayers(this.__data,!1,0)}));return}const t=this;this.superHighlightFilter=e,this.__superHLBlink=!1,i();function i(){t.__superHLTimeoutID=setTimeout(()=>{t.__superHLBlink=!t.__superHLBlink,t.opacityUpdateTrigger++,t.deckBubble.setProps({layers:t.getBubbleLayers(t.__data,!1,0)}),i()},ke)}x(i,"loop")}_selectDataPoints(){const e=this,t=this.MDL.selected.data.filter;p.LegacyUtils.isTouchDevice()&&e.MDL.highlighted.data.filter.clear(),e.someSelected=t.any(),e.nonSelectedOpacityZero=!1}_setupCursorMode(){const e=this.DOM.canvasWrap;this.ui.cursorMode==="plus"?(e.classed("vzb-zoomin",!0),e.classed("vzb-zoomout",!1),e.classed("vzb-panhand",!1),this.deckBubble.setProps({_pickable:!1})):this.ui.cursorMode==="minus"?(e.classed("vzb-zoomin",!1),e.classed("vzb-zoomout",!0),e.classed("vzb-panhand",!1),this.deckBubble.setProps({_pickable:!1})):this.ui.cursorMode==="hand"?(e.classed("vzb-zoomin",!1),e.classed("vzb-zoomout",!1),e.classed("vzb-panhand",!0),this.deckBubble.setProps({_pickable:!0})):(e.classed("vzb-zoomin",!1),e.classed("vzb-zoomout",!1),e.classed("vzb-panhand",!1),this.deckBubble.setProps({_pickable:!0}))}updateDecorations(){this.services.layout.size,this.MDL.x.scale.zoomed,this.MDL.y.scale.zoomed,this.decorations.update.bind(this)(this.duration)}__labelWithoutFrame(e){const t=this.model.data.space;return typeof e.label=="object"?Object.entries(e.label).filter(([i,s])=>i!=this.MDL.frame.data.concept).sort(([i,s],[a,o])=>t.indexOf(i)-t.indexOf(a)).map(([i,s])=>p.LegacyUtils.isNumber(s)?i+": "+s:s).join(", "):e.label!=null?""+e.label:e[z]}__labelWithFrame(e){const t=this.MDL.frame.data.concept;return this.__labelWithoutFrame(e)+" "+this.localise(e&&e.label&&e.label[t]||e&&e.frame||this.MDL.frame.value)}_alias(e){return this.state.alias?.[e]||e}getDeck(){const e=this.DOM.canvasWrap.node().offsetWidth,t=this.DOM.canvasWrap.node().offsetHeight;return this.__viewState={target:[e*.5,t*.5,0],maxZoom:9.5,minZoom:-6.9,zoom:0,width:e,height:t},new pe.Deck({parent:this.DOM.canvasWrap.node(),views:this.getViews(),viewState:this.__viewState,getCursor:x(({isDragging:i,isHovering:s})=>i?"grabbing":s?"pointer":"default","getCursor"),onViewStateChange:x(i=>{this.__viewState=i.viewState,this.deckBubble.setProps({viewState:this.__viewState})},"onViewStateChange"),onResize:x(({width:i,height:s})=>{const a=[(this.__viewState.width-i)*.5,(this.__viewState.height-s)*.5,0];this.deckBubble.setProps({viewState:{...this.__viewState,target:this.__viewState.target.map((o,r)=>o-a[r])}})},"onResize")})}getViews(e=!0){return[new pe.OrthographicView({id:"bubble",flipY:!0,far:1e3})]}getProps(){return{getSourcePosition:x(e=>{if(e)return[this.xScale(e.x),this.yScale(e.y),e.uz?e.uz:this.zScale(e.z*1.01)]},"getSourcePosition"),getTargetPosition:x((e,{data:t,index:i})=>{if(!e)return;const s=e[_]&&t[i+1]?t[i+1]:e;if(s)return[this.xScale(s.x),this.yScale(s.y),s.uz?s.uz:this.zScale(s.z*1.01)]},"getTargetPosition"),getLastLineSourcePosition:x(e=>{if(e)return[this.xScale(e[0].x),this.yScale(e[0].y),this.zScale(e[0].z*1.01)]},"getLastLineSourcePosition"),getLastLineTargetPosition:x(e=>{if(e)return[this.xScale(e[1].x),this.yScale(e[1].y),this.zScale(e[1].z*1.01)]},"getLastLineTargetPosition"),getLabelText:x(e=>{if(e)return this.MDL.trail.show?this.__labelWithFrame(e):this.__labelWithoutFrame(e)},"getLabelText"),getTooltipText:x(e=>{if(e)return this.ui.labels.enabled?e[_]||this.__selectedMarkers.has(e[z])?this.localise(e.frame):this.__labelWithoutFrame(e):e[_]?this.__labelWithFrame(e):this.__labelWithoutFrame(e)},"getTooltipText"),getLabelPosition:x(e=>{if(e)return[this.xScale(e.x),this.yScale(e.y)]},"getLabelPosition"),getLabelPositionZ:x((e,{index:t})=>{if(e)return[this.xScale(e.x),this.yScale(e.y),this.labelZScale(t)]},"getLabelPositionZ"),getTooltipPixelOffset:x(e=>{if(!e)return;const t=e.r/Math.sqrt(2)+7;return[-t,-t]},"getTooltipPixelOffset"),getPixelOffset:x(e=>{if(!e)return;const t=e[_]||e[z],i=this.labelOffset[t]&&this.labelOffset[t][0]||0,s=this.labelOffset[t]&&this.labelOffset[t][1]||0,a=e.r/Math.sqrt(2)+4;return[i||-a,s||-a]},"getPixelOffset"),getDragged:x(e=>{if(!e)return;const t=e[_]||e[z];return this.labelDragged[t]},"getDragged"),onLabelDragStart:x(({object:e,x:t,y:i,coordinate:s,sourceLayer:a,viewport:o},r)=>{if(console.log("onLabelDragStart",e,t,i,s,o,a),!e)return;this.__labelDragging=!0;const n=e[_]||e[z];if(!this.labelOffset[n]){const y=e.r/Math.sqrt(2)+4;this.labelOffset[n]=[-y,-y]}const l=this.labelOffset[n],c=o.project(this.props.getPosition(e).slice(0,2)),u=o.width,f=o.height,[m,h]=a.parent.state.labelSize,[g,d,D=g,v=d]=a.parent.props.backgroundPadding;return this.labelDragged[n]||(this.labelDragged[n]=1,c[0]+l[0]<m+g&&(l[0]=m-l[0]),c[1]+l[1]<h+d&&(l[1]=h-l[1])),c[0]+l[0]<m+g?l[0]=m+g-c[0]:c[0]+l[0]>u-D&&(l[0]=u-D-c[0]),c[1]+l[1]<h+d?l[1]=h+d-c[1]:c[1]+l[1]>f-v&&(l[1]=f-v-c[1]),console.log("offset",l,"point",c,m,h,o),this.dragX0=this.labelOffset[n][0]-t,this.dragY0=this.labelOffset[n][1]-i,!0},"onLabelDragStart"),onLabelDrag:x(({object:e,x:t,y:i,coordinate:s,sourceLayer:a,viewport:o},r)=>{if(!e)return;this.dragX=this.dragX0+t,this.dragY=this.dragY0+i;const n=e[_]||e[z];return this.labelOffset[n][0]=this.dragX,this.labelOffset[n][1]=this.dragY,this.props.getPosition(e).slice(0,2),this.deckBubble.setProps({layers:this.getBubbleLayers(void 0,!1,0,!1)}),!0},"onLabelDrag"),onLabelDragEnd:x(()=>(this.__labelDragging=!1,!0),"onLabelDragEnd"),onLabelClick:x(({object:e,layer:t,sourceLayer:i})=>{if(!e||i.id!=="labelTextLayer-close")return;const s={[z]:e[_]||e[z]};console.log("click pretoggle",e,s),w.runInAction(()=>{this.MDL.selected.data.filter.toggle(s),console.log("click toggle",s)}),t.setState({closeData:[]}),this.deckBubble.setProps({layers:this.getBubbleLayers(void 0,!1,0,!1)})},"onLabelClick"),onLabelHover:x(({object:e,layer:t})=>{if(e&&this.__selectedKeys.at(-1)!==(e[_]||e[z])){const i=this.__selectedKeys.indexOf(e[_]||e[z]);this.__selectedKeys.push(this.__selectedKeys.splice(i,1)[0]);const s=this.__labelData.splice(i,1);this.__labelData=[...this.__labelData,...s],t.setState({closeData:[t.state.closeData[0]]}),t.state.closeData[0].dataIndex=this.__selectedKeys.length-1,this.deckBubble.setProps({layers:this.getBubbleLayers(void 0,!1)})}},"onLabelHover"),getLabelLineTargetPixelOffset:x(e=>{if(!e)return;const t=e[_]||e[z],i=this.labelOffset[t]&&this.labelOffset[t][0]||0,s=this.labelOffset[t]&&this.labelOffset[t][1]||0;return[i||0,-s||0]},"getLabelLineTargetPixelOffset"),getPosition:x(e=>{if(e)return[this.xScale(e.x),this.yScale(e.y),e.uz?e.uz:this.zScale(e.size)]},"getPosition"),getPositionHighlight:x(e=>{if(e)return[this.xScale(e.x),this.yScale(e.y),-.095]},"getPositionHighlight"),getPositionXY:x(e=>{if(e)return[this.xScale(e.x),this.yScale(e.y)]},"getPositionXY"),getFillColor:x((e,{target:t})=>{if(!e)return;if(this.__superHLBlink&&this.superHighlightFilter.has(e))return t[3]=0,t;const i=b.color(this.__getColor(e[_]||e[z],e.color)).formatRgb().slice(4,-1).split(",").map(s=>+s);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=this._getBubbleOpacity(e)*255,t},"getFillColor"),getTrailLineFillColor:x((e,{data:t,index:i,target:s})=>{if(!e)return;if(this.__superHLBlink&&this.superHighlightFilter.has(e))return s[3]=0,s;const a=t[i+1]||e,o=b.color(this.__getColorForTrail(a.color,a.size)).formatRgb().slice(4,-1).split(",").map(r=>+r);return s[0]=o[0],s[1]=o[1],s[2]=o[2],s[3]=this._getBubbleOpacity(e)*255,s},"getTrailLineFillColor"),getLastTrailLineFillColor:x((e,{target:t})=>{if(!e)return;const i=b.color(this.__getColorForTrail(e[1].color,e[1].size)).formatRgb().slice(4,-1).split(",").map(s=>+s);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=this._getBubbleOpacity(e[0])*255,t},"getLastTrailLineFillColor"),getLineColor:x((e,{target:t})=>{if(e)return this.__superHLBlink&&this.superHighlightFilter.has(e)?(t[3]=0,t):(t[0]=51,t[1]=51,t[2]=51,t[3]=this._getBubbleOpacity(e)*255,t)},"getLineColor"),getRadius:x(e=>{if(e)return e.r},"getRadius"),getTrailLineWidth:x((e,{data:t,index:i})=>{if(!e)return;const s=t[i+1]||e;return this.trailSizeScale(s.size)},"getTrailLineWidth"),getLastTrailLineWidth:x(e=>{if(e)return this.trailSizeScale(e[1].size)},"getLastTrailLineWidth"),onHover:x(({object:e})=>{if(e&&this._getBubbleOpacity(e)==0)return;e?.[z]!==this.activeObject?.[z]&&(e?(w.runInAction(()=>{this.MDL.highlighted.data.filter.clear()}),w.runInAction(()=>{this.MDL.highlighted.data.filter.set({[z]:e[z]})})):w.runInAction(()=>{this.MDL.highlighted.data.filter.clear()}))},"onHover"),onClick:x(({object:e,index:t},i)=>{e&&this._getBubbleOpacity(e)!=0&&(e[_]||w.runInAction(()=>{const s={[z]:e[z]};if(i.rightButton){s.name=this.__labelWithoutFrame(e);const a=this.profileConstants.margin,o=this.element.node(),r=this.width-i.offsetCenter.x<250?this.width-250:i.offsetCenter.x-5;this.root.findChild({type:"MarkerContextmenu"}).show(s,{x:o.offsetLeft+r+a.left*this.profileConstants.leftMarginRatio,y:o.offsetTop+i.offsetCenter.y+a.top-5})}else this.MDL.selected.data.filter.toggle(s)}))},"onClick")}}getBubbleLayers(e=this.__data,t=!0,i=0,s=!0,a=[]){return[new R.LineLayer({id:"lineLayer",data:this.__trailsData,getColor:this.props.getTrailLineFillColor,getSourcePosition:this.props.getSourcePosition,getTargetPosition:this.props.getTargetPosition,getWidth:this.props.getTrailLineWidth,updateTriggers:{getColor:[this.activeObject,this.opacityUpdateTrigger],getSourcePosition:[this.redrawUpdateTrigger],getTargetPosition:[this.redrawUpdateTrigger]},transitions:t?{getSourcePosition:i,getTargetPosition:i}:null,padding:[6,4]}),new R.LineLayer({id:"lastLineLayer",data:a,getColor:this.props.getLastTrailLineFillColor,getSourcePosition:this.props.getLastLineSourcePosition,getTargetPosition:this.props.getLastLineTargetPosition,getWidth:this.props.getLastTrailLineWidth,updateTriggers:{getColor:[this.activeObject,this.opacityUpdateTrigger],getTargetPosition:[this.redrawUpdateTrigger]},transitions:t?{getTargetPosition:{duration:i}}:null}),new R.ScatterplotLayer({parameters:{depthTest:!1},id:"scatterPlotLayer",data:e,stroked:!0,getPosition:this.props.getPosition,getRadius:this.props.getRadius,radiusUnits:"pixels",getFillColor:this.props.getFillColor,getLineColor:this.props.getLineColor,getLineWidth:1,lineWidthUnits:"pixels",padding:[6,4],pickable:!0,onHover:this.props.onHover,onClick:this.props.onClick,updateTriggers:{getFillColor:[this.activeObject,this.opacityUpdateTrigger],getLineColor:[this.activeObject,this.opacityUpdateTrigger],getPosition:[this.redrawUpdateTrigger]},transitions:t?{getPosition:{duration:i,onStart:x(o=>{console.log("start",o)},"onStart"),onEnd:x(o=>{console.log("end",o)},"onEnd")},getRadius:{duration:i}}:null}),new R.ScatterplotLayer({parameters:{depthTest:!1},id:"activeObjectScatterPlotLayer",data:this.activeObjectData,stroked:!0,getPosition:this.props.getPositionHighlight,getRadius:this.props.getRadius,radiusUnits:"pixels",getFillColor:this.props.getFillColor,getLineColor:this.props.getLineColor,getLineWidth:1,lineWidthUnits:"pixels",pickable:!1,updateTriggers:{getFillColor:[this.activeObject,this.opacityUpdateTrigger],getLineColor:[this.activeObject,this.opacityUpdateTrigger],getPosition:[this.activeObject,this.redrawUpdateTrigger]},transitions:t?{getPosition:{duration:i},getRadius:{duration:i}}:null,visible:!!this.activeObject}),new R.TextLayer({id:"tooltipTextLayer",_subLayerProps:{background:{type:j,cornerRadius:5,getDragged:this.props.getDragged,updateTriggers:{getPixelOffset:[this.dragX,this.dragY],getDragged:[this.dragX0,this.dragY0]}},characters:{type:X,getDragged:this.props.getDragged,updateTriggers:{getPixelOffset:[this.dragX,this.dragY],getDragged:[this.dragX0,this.dragY0]}}},data:this.activeObject&&this.__tooltipDataFilter()?this.activeObjectData:null,fontSettings:this.ui.labels.removeLabelBox?{sdf:!0,fontSize:Math.ceil(this.__fontSize*1.3),buffer:8,radius:11,cutoff:.24}:{sdf:!1},getPosition:this.props.getLabelPosition,getPixelOffset:this.props.getTooltipPixelOffset,getText:this.props.getTooltipText,getColor:[51,51,51],getSize:this.__fontSize,getTextAnchor:"end",getAlignmentBaseline:"bottom",getDragged:this.props.getDragged,pickable:!1,background:!this.ui.labels.removeLabelBox,backgroundPadding:[6,4],getBorderWidth:1,billboard:!0,lineWidthUnits:"pixels",radiusUnits:"pixels",fontFamily:this.FONT_FAMILY,characterSet:xe,outlineColor:[255,255,255],outlineWidth:this.ui.labels.removeLabelBox?3:0,updateTriggers:{getPosition:[this.redrawUpdateTrigger]},visible:!!this.activeObject}),this.ui.labels.enabled&&new ie({id:"labelTextLayer",_subLayerProps:{background:{type:j,cornerRadius:5,getDragged:this.props.getDragged,updateTriggers:{getDragged:[this.dragX0,this.dragY0]}},characters:{type:X,getDragged:this.props.getDragged,updateTriggers:{getDragged:[this.dragX0,this.dragY0]},padding:[6,4]}},data:this.__labelData,fontSettings:this.ui.labels.removeLabelBox?{sdf:!0,fontSize:Math.ceil((this.__isConstantFontSize?this.__fontSize:this._labels.maxLabelTextSize)*1.3),buffer:8,radius:11,cutoff:.24}:{sdf:!1},getPosition:this.props.getLabelPositionZ,getPixelOffset:this.props.getPixelOffset,getText:this.props.getLabelText,getLineSourceFillOffset:this.props.getRadius,getRadius:this.props.getRadius,getColor:[51,51,51],getSize:this.__isConstantFontSize?this.__fontSize:this.props.getLabelFontSize,getTextAnchor:"end",getAlignmentBaseline:"bottom",getDragged:this.props.getDragged,getPolygonOffset:null,onDragStart:this.props.onLabelDragStart,onDrag:this.props.onLabelDrag,onDragEnd:this.props.onLabelDragEnd,onHover:this.props.onLabelHover,onClick:this.props.onLabelClick,characterSet:xe,fontFamily:this.FONT_FAMILY,pickable:!0,outlineColor:[255,255,255],outlineWidth:this.ui.labels.removeLabelBox?3:0,background:!this.ui.labels.removeLabelBox,backgroundPadding:[6,4],getBorderWidth:1,billboard:!0,lineWidthUnits:"pixels",radiusUnits:"pixels",updateTriggers:{getPixelOffset:[this.dragX,this.dragY,this.redrawUpdateTrigger],getDragged:[this.dragX0,this.dragY0],getPosition:[this.redrawUpdateTrigger]},transitions:t?{getPosition:{duration:i},getPixelOffset:{duration:i},getLineSourceFillOffset:{duration:i}}:null})]}__tooltipDataFilter(){const e=this.__selectedKeys.indexOf(this.activeObject[_]||this.activeObject[z]);return!this.ui.labels.enabled||(this.MDL.trail.show?this.activeObject.frame!=this.__labelData[e]?.frame||(this.activeObject[_]||this.activeObject[z])!=this.__labelData[e]?.[_]:e==-1)}get zScale(){return b.scaleLinear(this.MDL.size.scale.d3Scale.domain(),[-.1,-.3])}};x(ce,"_VizabiBubbleChart");let N=ce;N.DEFAULT_UI={};const ae=w.decorate(N,{MDL:w.computed,cScale:w.computed,zScale:w.computed,duration:w.computed});p.Chart.add("bubblechart",ae);const Y=class Y extends p.BaseComponent{constructor(e){const t=e.model.markers?.bubble,i=e.model.markers?.legend;e.Vizabi.utils.applyDefaults(t?.config||{},Y.DEFAULT_MODEL.bubble),e.Vizabi.utils.applyDefaults(i?.config||{},Y.DEFAULT_MODEL.legend);const s=e.Vizabi.stores.encodings.modelTypes.frame,{marker:a,splashMarker:o}=s.splashMarker(t);e.name="bubblechart",e.subcomponents=[{type:p.Repeater,placeholder:".vzb-repeater",model:a,options:{repeatedComponent:ae,repeatedComponentCssClass:"vzb-bubblechart"},name:"chart"},{type:p.TimeSlider,placeholder:".vzb-timeslider",model:a,name:"time-slider"},{type:p.SteppedSlider,placeholder:".vzb-speedslider",model:a,name:"speed-slider"},{type:p.TreeMenu,placeholder:".vzb-treemenu",model:a,name:"tree-menu"},{type:p.MarkerContextmenu,placeholder:".vzb-marker-contextmenu",model:a,name:"marker-contextmenu"},{type:p.DataWarning,placeholder:".vzb-datawarning",options:{appendButtonHere:".vzb-repeater"},model:a,name:"data-warning"},{type:p.DataNotes,placeholder:".vzb-datanotes",model:a},{type:p.Dialogs,placeholder:".vzb-dialogs",model:a,name:"dialogs"},{type:p.ButtonList,placeholder:".vzb-buttonlist",model:a,name:"buttons"},{type:p.ErrorMessage,placeholder:".vzb-errormessage",model:a,name:"error-message"}],e.template=`
      <div class="vzb-repeater"></div>
      <div class="vzb-animationcontrols">
        <div class="vzb-timeslider"></div>
        <div class="vzb-speedslider"></div>
      </div>
      <div class="vzb-sidebar">
        <div class="vzb-dialogs"></div>
        <div class="vzb-buttonlist"></div>
      </div>
      <div class="vzb-treemenu"></div>
      <div class="vzb-marker-contextmenu"></div>
      <div class="vzb-datawarning"></div>
      <div class="vzb-datanotes"></div>
      <div class="vzb-errormessage"></div>
    `,e.locale.Vizabi=e.Vizabi,e.layout.Vizabi=e.Vizabi,e.services={Vizabi:new p.CapitalVizabiService({Vizabi:e.Vizabi}),locale:new p.LocaleService(e.locale),layout:new p.LayoutService(e.layout)},super(e),this.splashMarker=o}};x(Y,"BubbleChart");let F=Y;F.DEFAULT_UI={locale:{id:"en",shortNumberFormat:!0},layout:{projector:!1},buttons:{buttons:["markercontrols","colors","trails","moreoptions","presentation","sidebarcollapse","fullscreen"]},dialogs:{dialogs:{popup:["colors","markercontrols","moreoptions"],sidebar:["colors","markercontrols","size","zoom"],moreoptions:["opacity","speed","axes","size","colors","label","zoom","technical","repeat","presentation","about"]},markercontrols:{disableSlice:!0,disableSwitch:!1,disableAddRemoveGroups:!0,primaryDim:null,drilldown:null,shortcutForSwitch:!1,shortcutForSwitch_allow:null}},"marker-contextmenu":{primaryDim:null,drilldown:null},chart:{show_ticks:!0,showForecast:!1,showForecastOverlay:!0,pauseBeforeForecast:!0,endBeforeForecast:null,opacityHighlight:1,opacitySelect:1,opacityHighlightDim:.1,opacitySelectDim:.3,opacityRegular:.8,timeInBackground:!0,timeInTrails:!0,lockNonSelected:0,panWithArrow:!0,adaptMinMaxZoom:!1,cursorMode:"arrow",zoomOnScrolling:!0,superhighlightOnMinimapHover:!0,whenHovering:{showProjectionLineX:!0,showProjectionLineY:!0,higlightValueX:!0,higlightValueY:!0},labels:{enabled:!0,dragging:!0,removeLabelBox:!1},margin:{left:0,top:0},decorations:{enabled:!1,xAxisGroups:null}},"data-warning":{enable:!1,margin:{LARGE:{bottom:90},MEDIUM:{bottom:70},SMALL:{bottom:50}}},"tree-menu":{showDataSources:!1,folderStrategyByDataset:{}}},F.mainComponent=ae,F.DEFAULT_MODEL={bubble:{requiredEncodings:["x","y","size"],encoding:{show:{modelType:"selection"},selected:{modelType:"selection",data:{filter:{ref:"markers.bubble.encoding.trail.data.filter"}}},highlighted:{modelType:"selection"},superhighlighted:{modelType:"selection"},x:{data:{},scale:{allowedTypes:["linear","log","genericLog","pow","time"]}},y:{modelType:"lane",data:{},scale:{allowedTypes:["linear","log","genericLog","pow","time","rank"]}},order:{modelType:"order",direction:"desc",data:{ref:"markers.bubble.encoding.size.data.config"}},size:{data:{},scale:{modelType:"size",allowedTypes:["linear","point"],range:[0,50],extent:[0,1]}},color:{data:{constant:"_default"},scale:{modelType:"color"}},label:{data:{modelType:"entityPropertyDataConfig"}},frame:{modelType:"frame",speed:200,splash:!0},trail:{modelType:"trail",show:!1},size_label:{data:{constant:"_default"},scale:{extent:[0,.22],modelType:"size",allowedTypes:["linear","point"]}},repeat:{modelType:"repeat",useConnectedRowsAndColumns:!1,row:["y"],column:["x"],allowEnc:["y","x"]}}},legend:{data:{ref:{transform:"entityConceptSkipFilter",path:"markers.bubble.encoding.color"}},encoding:{color:{data:{concept:{ref:"markers.bubble.encoding.color.data.concept"},constant:{ref:"markers.bubble.encoding.color.data.constant"}},scale:{modelType:"color",palette:{ref:"markers.bubble.encoding.color.scale.palette"},domain:null,range:null,type:null,zoomed:null,zeroBaseline:!1,clamp:!1,allowedTypes:null}},name:{data:{concept:{filter:{concept:{$in:["name"]}}}}},order:{modelType:"order",direction:"asc",data:{concept:{filter:{concept:{$in:["rank"]}}}}},map:{data:{concept:{filter:{concept:{$in:["shape_lores_svg","shape","svg"]}}}}}}}},F.versionInfo={version:"5.5.1",build:1764449745412,package:{homepage:"https://github.com/vizabi/bubblechart#readme",name:"@vizabi/bubblechart",description:"Vizabi bubble chart"},sharedComponents:p.versionInfo},T.Base=F,Object.defineProperty(T,"__esModule",{value:!0})}))})(H,H.exports)),H.exports}x(We,"requireBubblechart");var Se=We(),Ne=Ae(Se),Ke=Ue({__proto__:null,default:Ne},[Se]);export{Ke as b};
//# sourceMappingURL=bubblechart.js.map
