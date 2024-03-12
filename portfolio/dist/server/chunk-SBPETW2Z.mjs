import './polyfills.server.mjs';
import{$ as T,A as wt,B as w,C,D as s,E as l,F as I,G as $,H as k,I as V,J as yt,K as lt,L as p,M as ct,N as f,O as m,P as u,Q as d,W as q,Y as Lt,_ as Pt,a as L,aa as Mt,b as j,ba as Ot,c as et,ca as A,d as nt,da as jt,e as it,ea as J,f as mt,fa as Tt,g as Ct,ga as Dt,h as P,ha as St,i as rt,j as at,k as M,ka as Et,l as g,m as vt,n as _t,o as H,oa as Ft,p as K,q as ot,qa as It,r as x,ra as kt,s as bt,t as U,u as h,v as xt,w as W,x as st,y as c,z as v}from"./chunk-ISV22Q7K.mjs";import{a as tt}from"./chunk-VVCT4QZE.mjs";var S=class{},Vt=(()=>{class n extends S{getTranslation(t){return L({})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),G=class{},At=(()=>{class n{handle(t){return t.key}static \u0275fac=function(e){return new(e||n)};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})();function X(n,r){if(n===r)return!0;if(n===null||r===null)return!1;if(n!==n&&r!==r)return!0;let t=typeof n,e=typeof r,i,a,o;if(t==e&&t=="object")if(Array.isArray(n)){if(!Array.isArray(r))return!1;if((i=n.length)==r.length){for(a=0;a<i;a++)if(!X(n[a],r[a]))return!1;return!0}}else{if(Array.isArray(r))return!1;o=Object.create(null);for(a in n){if(!X(n[a],r[a]))return!1;o[a]=!0}for(a in r)if(!(a in o)&&typeof r[a]<"u")return!1;return!0}return!1}function D(n){return typeof n<"u"&&n!==null}function pt(n){return n&&typeof n=="object"&&!Array.isArray(n)}function Nt(n,r){let t=Object.assign({},n);return pt(n)&&pt(r)&&Object.keys(r).forEach(e=>{pt(r[e])?e in n?t[e]=Nt(n[e],r[e]):Object.assign(t,{[e]:r[e]}):Object.assign(t,{[e]:r[e]})}),t}var B=class{},Bt=(()=>{class n extends B{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(t,e){let i;return typeof t=="string"?i=this.interpolateString(t,e):typeof t=="function"?i=this.interpolateFunction(t,e):i=t,i}getValue(t,e){let i=typeof e=="string"?e.split("."):[e];e="";do e+=i.shift(),D(t)&&D(t[e])&&(typeof t[e]=="object"||!i.length)?(t=t[e],e=""):i.length?e+=".":t=void 0;while(i.length);return t}interpolateFunction(t,e){return t(e)}interpolateString(t,e){return e?t.replace(this.templateMatcher,(i,a)=>{let o=this.getValue(e,a);return D(o)?o:i}):t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),R=class{},Rt=(()=>{class n extends R{compile(t,e){return t}compileTranslations(t,e){return t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=W(n)))(i||n)}})();static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),Y=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new M;onLangChange=new M;onDefaultLangChange=new M},ut=new U("USE_STORE"),dt=new U("USE_DEFAULT_LANG"),ft=new U("DEFAULT_LANGUAGE"),gt=new U("USE_EXTEND"),ht=(()=>{class n{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new M;_onLangChange=new M;_onDefaultLangChange=new M;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(t){this.isolate?this._defaultLang=t:this.store.defaultLang=t}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(t){this.isolate?this._currentLang=t:this.store.currentLang=t}get langs(){return this.isolate?this._langs:this.store.langs}set langs(t){this.isolate?this._langs=t:this.store.langs=t}get translations(){return this.isolate?this._translations:this.store.translations}set translations(t){this.isolate?this._translations=t:this.store.translations=t}constructor(t,e,i,a,o,b=!0,E=!1,F=!1,N){this.store=t,this.currentLoader=e,this.compiler=i,this.parser=a,this.missingTranslationHandler=o,this.useDefaultLang=b,this.isolate=E,this.extend=F,N&&this.setDefaultLang(N)}setDefaultLang(t){if(t===this.defaultLang)return;let e=this.retrieveTranslations(t);typeof e<"u"?(this.defaultLang==null&&(this.defaultLang=t),e.pipe(P(1)).subscribe(i=>{this.changeDefaultLang(t)})):this.changeDefaultLang(t)}getDefaultLang(){return this.defaultLang}use(t){if(t===this.currentLang)return L(this.translations[t]);let e=this.retrieveTranslations(t);return typeof e<"u"?(this.currentLang||(this.currentLang=t),e.pipe(P(1)).subscribe(i=>{this.changeLang(t)}),e):(this.changeLang(t),L(this.translations[t]))}retrieveTranslations(t){let e;return(typeof this.translations[t]>"u"||this.extend)&&(this._translationRequests[t]=this._translationRequests[t]||this.getTranslation(t),e=this._translationRequests[t]),e}getTranslation(t){this.pending=!0;let e=this.currentLoader.getTranslation(t).pipe(rt(1),P(1));return this.loadingTranslations=e.pipe(et(i=>this.compiler.compileTranslations(i,t)),rt(1),P(1)),this.loadingTranslations.subscribe({next:i=>{this.translations[t]=this.extend&&this.translations[t]?tt(tt({},i),this.translations[t]):i,this.updateLangs(),this.pending=!1},error:i=>{this.pending=!1}}),e}setTranslation(t,e,i=!1){e=this.compiler.compileTranslations(e,t),(i||this.extend)&&this.translations[t]?this.translations[t]=Nt(this.translations[t],e):this.translations[t]=e,this.updateLangs(),this.onTranslationChange.emit({lang:t,translations:this.translations[t]})}getLangs(){return this.langs}addLangs(t){t.forEach(e=>{this.langs.indexOf(e)===-1&&this.langs.push(e)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(t,e,i){let a;if(e instanceof Array){let o={},b=!1;for(let E of e)o[E]=this.getParsedResult(t,E,i),j(o[E])&&(b=!0);if(b){let E=e.map(F=>j(o[F])?o[F]:L(o[F]));return mt(E).pipe(et(F=>{let N={};return F.forEach((Zt,Qt)=>{N[e[Qt]]=Zt}),N}))}return o}if(t&&(a=this.parser.interpolate(this.parser.getValue(t,e),i)),typeof a>"u"&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(a=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],e),i)),typeof a>"u"){let o={key:e,translateService:this};typeof i<"u"&&(o.interpolateParams=i),a=this.missingTranslationHandler.handle(o)}return typeof a<"u"?a:e}get(t,e){if(!D(t)||!t.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe(Ct(i=>(i=this.getParsedResult(i,t,e),j(i)?i:L(i))));{let i=this.getParsedResult(this.translations[this.currentLang],t,e);return j(i)?i:L(i)}}getStreamOnTranslationChange(t,e){if(!D(t)||!t.length)throw new Error('Parameter "key" required');return nt(it(()=>this.get(t,e)),this.onTranslationChange.pipe(at(i=>{let a=this.getParsedResult(i.translations,t,e);return typeof a.subscribe=="function"?a:L(a)})))}stream(t,e){if(!D(t)||!t.length)throw new Error('Parameter "key" required');return nt(it(()=>this.get(t,e)),this.onLangChange.pipe(at(i=>{let a=this.getParsedResult(i.translations,t,e);return j(a)?a:L(a)})))}instant(t,e){if(!D(t)||!t.length)throw new Error('Parameter "key" required');let i=this.getParsedResult(this.translations[this.currentLang],t,e);if(j(i)){if(t instanceof Array){let a={};return t.forEach((o,b)=>{a[t[b]]=t[b]}),a}return t}else return i}set(t,e,i=this.currentLang){this.translations[i][t]=this.compiler.compile(e,i),this.updateLangs(),this.onTranslationChange.emit({lang:i,translations:this.translations[i]})}changeLang(t){this.currentLang=t,this.onLangChange.emit({lang:t,translations:this.translations[t]}),this.defaultLang==null&&this.changeDefaultLang(t)}changeDefaultLang(t){this.defaultLang=t,this.onDefaultLangChange.emit({lang:t,translations:this.translations[t]})}reloadLang(t){return this.resetLang(t),this.getTranslation(t)}resetLang(t){this._translationRequests[t]=void 0,this.translations[t]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let t=window.navigator.languages?window.navigator.languages[0]:null;if(t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,!(typeof t>"u"))return t.indexOf("-")!==-1&&(t=t.split("-")[0]),t.indexOf("_")!==-1&&(t=t.split("_")[0]),t}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let t=window.navigator.languages?window.navigator.languages[0]:null;return t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,t}static \u0275fac=function(e){return new(e||n)(h(Y),h(S),h(R),h(B),h(G),h(dt),h(ut),h(gt),h(ft))};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})();var y=(()=>{class n{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(t,e){this.translate=t,this._ref=e}updateValue(t,e,i){let a=o=>{this.value=o!==void 0?o:t,this.lastKey=t,this._ref.markForCheck()};if(i){let o=this.translate.getParsedResult(i,t,e);j(o.subscribe)?o.subscribe(a):a(o)}this.translate.get(t,e).subscribe(a)}transform(t,...e){if(!t||!t.length)return t;if(X(t,this.lastKey)&&X(e,this.lastParams))return this.value;let i;if(D(e[0])&&e.length)if(typeof e[0]=="string"&&e[0].length){let a=e[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{i=JSON.parse(a)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${e[0]}`)}}else typeof e[0]=="object"&&!Array.isArray(e[0])&&(i=e[0]);return this.lastKey=t,this.lastParams=e,this.updateValue(t,i),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(a=>{this.lastKey&&a.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(t,i,a.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(a=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,i,a.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,i))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(e){return new(e||n)(v(ht,16),v(q,16))};static \u0275pipe=_t({name:"translate",type:n,pure:!1});static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),_=(()=>{class n{static forRoot(t={}){return{ngModule:n,providers:[t.loader||{provide:S,useClass:Vt},t.compiler||{provide:R,useClass:Rt},t.parser||{provide:B,useClass:Bt},t.missingTranslationHandler||{provide:G,useClass:At},Y,{provide:ut,useValue:t.isolate},{provide:dt,useValue:t.useDefaultLang},{provide:gt,useValue:t.extend},{provide:ft,useValue:t.defaultLanguage},ht]}}static forChild(t={}){return{ngModule:n,providers:[t.loader||{provide:S,useClass:Vt},t.compiler||{provide:R,useClass:Rt},t.parser||{provide:B,useClass:Bt},t.missingTranslationHandler||{provide:G,useClass:At},{provide:ut,useValue:t.isolate},{provide:dt,useValue:t.useDefaultLang},{provide:gt,useValue:t.extend},{provide:ft,useValue:t.defaultLanguage},ht]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=vt({type:n});static \u0275inj=bt({})}return n})();function te(n,r){if(n&1){let t=$();s(0,"span",4),k("click",function(){let a=H(t).$implicit,o=V();return K(o.goTo(a))}),p(1),u(2,"translate"),l()}if(n&2){let t=r.$implicit;c(),f(" ",d(2,1,t.name)," ")}}var Ht=(()=>{let r=class r{constructor(e){this.router=e,this.routes=[{name:"Links.home",route:"/"},{name:"Links.about",route:"/about"},{name:"Links.projects",route:"/project"}]}goTo(e){this.router.navigate([e.route]).then(i=>console.log("Go to "+e.route))}};r.\u0275fac=function(i){return new(i||r)(v(It))},r.\u0275cmp=g({type:r,selectors:[["app-toolbar"]],standalone:!0,features:[m],decls:6,vars:1,consts:[[1,"bar"],[1,"logo"],[1,"links"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(i,a){i&1&&(s(0,"div",0)(1,"div",1)(2,"span"),p(3," Tonyo Callimoutou "),l()(),s(4,"div",2),w(5,te,3,3,"span",3),l()()),i&2&&(c(5),C("ngForOf",a.routes))},dependencies:[T,_,y],styles:[".bar[_ngcontent-%COMP%]{justify-content:space-between}.bar[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem}"]});let n=r;return n})();function ee(n,r){if(n&1&&(s(0,"span"),p(1),u(2,"translate"),l()),n&2){let t=r.$implicit;c(),f(" ",d(2,1,t.name)," ")}}var Kt=(()=>{let r=class r{constructor(){this.footerLinks=[{name:"Linkedin",route:"https://www.linkedin.com/in/alexander-pan-1b0a8b1a8/"},{name:"Github",route:"github.com/alexanderpan"}]}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=g({type:r,selectors:[["app-footer"]],standalone:!0,features:[m],decls:3,vars:1,consts:[[1,"bar"],[1,"links"],[4,"ngFor","ngForOf"]],template:function(i,a){i&1&&(s(0,"div",0)(1,"div",1),w(2,ee,3,3,"span",2),l()()),i&2&&(c(2),C("ngForOf",a.footerLinks))},dependencies:[T,_,y]});let n=r;return n})();var Ut=(()=>{let r=class r{constructor(){this.title="portfolio"}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=g({type:r,selectors:[["app-root"]],standalone:!0,features:[m],decls:4,vars:0,consts:[[1,"all"]],template:function(i,a){i&1&&(s(0,"div",0),I(1,"app-toolbar")(2,"router-outlet")(3,"app-footer"),l())},dependencies:[Ft,Ht,Kt,J],styles:[".all[_ngcontent-%COMP%]{margin:0 3rem}.all[_ngcontent-%COMP%]   app-footer[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;margin:0 3rem}"]});let n=r;return n})();var $t=(()=>{let r=class r{};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=g({type:r,selectors:[["app-home"]],standalone:!0,features:[m],decls:12,vars:9,consts:[[1,"page"],[1,"image"],[1,"details"],[1,"subtitle"]],template:function(i,a){i&1&&(s(0,"div",0),I(1,"div",1),s(2,"div",2)(3,"p",3),p(4),u(5,"translate"),l(),s(6,"h1"),p(7),u(8,"translate"),l(),s(9,"p"),p(10),u(11,"translate"),l()()()),i&2&&(c(4),f(" ",d(5,3,"Home.position")," "),c(3),f(" ",d(8,5,"Home.name")," "),c(3),f(" ",d(11,7,"Home.info")," "))},dependencies:[_,y],styles:[".page[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.page[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{flex:1}.page[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}"]});let n=r;return n})();var Gt=(()=>{let r=class r{constructor(e){this.http=e}getData(){return this.http.get("assets/data/infos.json")}};r.\u0275fac=function(i){return new(i||r)(h(A))},r.\u0275prov=x({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})();function re(n,r){if(n&1&&(s(0,"li",3)(1,"div")(2,"h1"),p(3),u(4,"translate"),l(),s(5,"p"),p(6),u(7,"translate"),l(),s(8,"p"),p(9),u(10,"translate"),l()()()),n&2){let t=r.$implicit;C("ngClass",t.category),c(3),ct(d(4,4,t.title)),c(3),f("",d(7,6,t.date)," "),c(3),ct(d(10,8,t.description))}}var zt=(()=>{let r=class r{constructor(e,i,a,o){this.renderer=e,this.elementRef=i,this.cdr=a,this.service=o,this.events=[],this.getEvents()}getEvents(){this.service.getData().pipe(P(1)).subscribe(e=>{this.events=e,this.cdr.detectChanges(),this.waitForDOM().then(()=>{this.callbackFunc()})})}waitForDOM(){return new Promise(e=>{document.readyState==="complete"?e():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&e()})})}onWindowEvent(e){this.callbackFunc()}callbackFunc(){this.elementRef.nativeElement.querySelectorAll("li").forEach(i=>{this.isItemInView(i)&&this.renderer.addClass(i,"show")})}isItemInView(e){let i=e.getBoundingClientRect();return i.top>=0&&i.left>=0&&i.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&i.right<=(window.innerWidth||document.documentElement.clientWidth)}};r.\u0275fac=function(i){return new(i||r)(v(wt),v(ot),v(q),v(Gt))},r.\u0275cmp=g({type:r,selectors:[["app-about"]],hostBindings:function(i,a){i&1&&k("resize",function(b){return a.onWindowEvent(b)},!1,st)("scroll",function(b){return a.onWindowEvent(b)},!1,st)},standalone:!0,features:[m],decls:7,vars:4,consts:[[1,"page"],[1,"timeline"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"]],template:function(i,a){i&1&&(s(0,"div",0)(1,"h1"),p(2),u(3,"translate"),l(),s(4,"div",1)(5,"ul"),w(6,re,11,10,"li",2),l()()()),i&2&&(c(2),f(" ",d(3,2,"Links.about"),""),c(4),C("ngForOf",a.events))},dependencies:[_,y,T,Pt],styles:['.timeline[_ngcontent-%COMP%]{overflow-x:hidden}.timeline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-size:40px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:50px 0}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;list-style-type:none;width:6px;background-color:#fff;margin:0 auto;padding-top:50px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{background:#fff;content:"";width:25px;height:25px;border-radius:50%;position:absolute;left:50%;transform:translate(-50%);bottom:0}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;width:400px;padding:15px;border-radius:5px;bottom:0;background:#2a327147}.timeline[_ngcontent-%COMP%]   .degree[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{left:45px}.timeline[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{left:-445px}.timeline[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{font-weight:700;font-size:18px;display:block;margin-bottom:10px}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{visibility:hidden;opacity:0;transition:all .5s ease-in-out}.timeline[_ngcontent-%COMP%]   .degree[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:translate3d(200px,0,0)}.timeline[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:translate3d(-200px,0,0)}.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.show[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:none;visibility:visible;opacity:1}@media screen and (max-width: 900px){.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:250px}.timeline[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{left:-289px}}']});let n=r;return n})();var Z=(()=>{let r=class r{constructor(){this.goBack=new M}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=g({type:r,selectors:[["app-project-detail"]],inputs:{project:"project"},outputs:{goBack:"goBack"},standalone:!0,features:[m],decls:2,vars:0,template:function(i,a){i&1&&(s(0,"p"),p(1,"project-detail works!"),l())}});let n=r;return n})();var Wt=(()=>{let r=class r{constructor(e){this.http=e}getData(){return this.http.get("assets/data/projects.json")}};r.\u0275fac=function(i){return new(i||r)(h(A))},r.\u0275prov=x({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})();function oe(n,r){if(n&1&&I(0,"img",12),n&2){let t=r.$implicit;lt("alt","icon ",t,"")("ngSrc","assets/icons/",t,".ico")}}function se(n,r){if(n&1){let t=$();s(0,"div",5),k("click",function(){let a=H(t).$implicit,o=V(2);return K(o.onClick(a))}),I(1,"img",6),u(2,"translate"),s(3,"div",7)(4,"h2",8),p(5),u(6,"translate"),l(),s(7,"h2",9),p(8),u(9,"translate"),l(),s(10,"p",9),p(11),u(12,"translate"),l()(),s(13,"div",10),w(14,oe,1,2,"img",11),l()()}if(n&2){let t=r.$implicit;c(),yt("alt",d(2,6,t.title)),lt("ngSrc","assets/image/",t.image,""),c(4),f(" ",d(6,8,t.title),""),c(3),f(" ",d(9,10,t.title),""),c(3),f(" ",d(12,12,t.description),""),c(3),C("ngForOf",t.stacks)}}function le(n,r){if(n&1&&(s(0,"div",3),w(1,se,15,14,"div",4),l()),n&2){let t=V();c(),C("ngForOf",t.projects)}}function ce(n,r){if(n&1){let t=$();s(0,"div")(1,"app-project-detail",13),k("goBack",function(){H(t);let i=V();return K(i.onGoBack())}),l()()}if(n&2){let t=V();c(),C("project",t.detailProject)}}var qt=(()=>{let r=class r{constructor(e){this.service=e,this.projects=[],this.detailProject=null,this.getProject()}getProject(){this.service.getData().pipe(P(1)).subscribe(e=>{this.projects=e})}onClick(e){this.detailProject=e}onGoBack(){this.detailProject=null}};r.\u0275fac=function(i){return new(i||r)(v(Wt))},r.\u0275cmp=g({type:r,selectors:[["app-project"]],standalone:!0,features:[m],decls:6,vars:5,consts:[[1,"page"],["class","wrap",4,"ngIf"],[4,"ngIf"],[1,"wrap"],["class","tile",3,"click",4,"ngFor","ngForOf"],[1,"tile",3,"click"],["fill","",1,"background",3,"alt","ngSrc"],[1,"text"],[1,"title"],[1,"animate-text"],[1,"icons","animate-text"],["class","icon","fill","",3,"alt","ngSrc",4,"ngFor","ngForOf"],["fill","",1,"icon",3,"alt","ngSrc"],[3,"project","goBack"]],template:function(i,a){i&1&&(s(0,"div",0)(1,"h1"),p(2),u(3,"translate"),l(),w(4,le,2,1,"div",1)(5,ce,2,1,"div",2),l()),i&2&&(c(2),f(" ",d(3,3,"Links.projects"),""),c(2),C("ngIf",!a.detailProject),c(),C("ngIf",!!a.detailProject))},dependencies:[_,y,T,Ot,Mt,Z],styles:['@charset "UTF-8";.wrap[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;gap:3rem;flex-wrap:wrap;padding:2rem}.tile[_ngcontent-%COMP%]{width:20lvw;height:30lvw;padding:1rem;display:flex;flex-direction:column;justify-content:space-between;background-size:cover;background-color:#000;position:relative;cursor:pointer;transition:all .4s ease-out;box-shadow:0 35px 77px -17px #00000070;overflow:hidden;color:#fff}.tile[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{height:100%;width:100%;position:absolute;top:0;left:0;z-index:0;transition:all .4s ease-out}.tile[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:10%;object-fit:contain}.tile[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:relative!important;width:auto!important}.tile[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-align:justify;display:flex;flex-direction:column}p[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}h2[_ngcontent-%COMP%]{align-self:center}.title[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;justify-content:space-between;align-self:center;opacity:1;transform:translate(0);transition-delay:.2s;transition:all .6s ease-in-out}.animate-text[_ngcontent-%COMP%]{opacity:0;transform:translateY(30lvw);transition-delay:.2s;transition:all .6s ease-in-out}.tile[_ngcontent-%COMP%]:hover{box-shadow:0 35px 77px -17px #000000a3;transform:scale(1.05)}.tile[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.2}.tile[_ngcontent-%COMP%]:hover   .animate-text[_ngcontent-%COMP%]{transform:translate(0);opacity:1}.tile[_ngcontent-%COMP%]:hover   .animate-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:1!important}.tile[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%]{transform:translate(-30lvw);opacity:0}']});let n=r;return n})();var Jt=[{path:"",component:$t},{path:"about",component:zt},{path:"project",component:qt},{path:"project/:id",component:Z}];var Q=class{http;prefix;suffix;constructor(r,t="/assets/i18n/",e=".json"){this.http=r,this.prefix=t,this.suffix=e}getTranslation(r){return this.http.get(`${this.prefix}${r}${this.suffix}`)}};function pe(n){return new Q(n,"./assets/i18n/",".json")}var ue=()=>({defaultLanguage:"fr",loader:{provide:S,useFactory:pe,deps:[A]}}),Xt={providers:[St(),jt(),xt([J,_.forRoot(ue())]),kt(Jt),Dt()]};var de={providers:[Et()]},Yt=Lt(Xt,de);var fe=()=>Tt(Ut,Yt),wn=fe;export{wn as a};