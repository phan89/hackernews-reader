(this["webpackJsonphackernews-reader"]=this["webpackJsonphackernews-reader"]||[]).push([[0],{42:function(e,n,t){e.exports=t(71)},71:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(14),i=t.n(o),c=t(3),u=t(4),s=t(7),l=t(6),f=t(8),d=t(10),h=t(1),p=t(2),m="@media only screen and (max-width: 768px)";function g(){var e=Object(p.a)(["\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  overflow: hidden;\n  padding-bottom: 200px;\n  "," {\n    width: 96%;\n  }\n"]);return g=function(){return e},e}var b=h.d.div(g(),m),E=t(12);function S(){var e=Object(p.a)(["\n    width: ","px;\n    height: ","px;\n    fill: ",";\n"]);return S=function(){return e},e}function y(){var e=Object(p.a)(["\n    display: flex;\n    cursor: pointer;\n    font-size: ","px;\n    color: ",";\n    align-items: center;\n    text-align: center;\n    padding-right: 10px;\n"]);return y=function(){return e},e}function v(){var e=Object(p.a)(["\n    display: flex;\n    margin-left: auto;\n    order: 2;\n\n"]);return v=function(){return e},e}function O(){var e=Object(p.a)(["\n    display: flex;\n"]);return O=function(){return e},e}function _(){var e=Object(p.a)(["\n  color: ",";\n  font-size: 24px;\n  font-weight: 300;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  margin-left: 5px;\n"]);return _=function(){return e},e}function T(){var e=Object(p.a)(["\n    background-color: ",";\n    height: ","px;\n    width: 100%;\n    display: flex;\n    padding: 12px;\n    border-bottom: solid 1px ",";\n"]);return T=function(){return e},e}var x=h.d.header(T(),(function(e){return e.theme.background.secondary}),60,(function(e){return e.theme.border})),j=h.d.h1(_(),(function(e){return e.theme.text.primary})),C=h.d.a(O()),k=h.d.div(v()),I=h.d.div(y(),14,(function(e){return e.theme.text.secondary})),P=h.d.svg(S(),36,36,(function(e){return e.theme.logo.color})),R={dark:{name:"dark",background:{primary:"#000",secondary:"#0d0a08"},text:{primary:"#bfbebe",secondary:"#848886",disabled:""},hot:{primary:"#ff0000",secondary:"#af0404"},warning:{primary:"#bfbebe",secondary:"#848886"},error:{primary:"#bfbebe",secondary:"#848886"},border:"#272727",logo:{color:"#f57b51"},chatbox:{background:"#331400"},hover:{brightness:"200%",linkColor:""}},light:{name:"light",background:{primary:"#f9f9f9",secondary:"#f3f3f3"},text:{primary:"#000000",secondary:"#0f4c81",disabled:"",primaryHover:"#ff0000"},hot:{primary:"#ff0000",secondary:"#af0404"},warning:{primary:"#bfbebe",secondary:"#848886"},error:{primary:"#bfbebe",secondary:"#848886"},border:"#272727",logo:{color:"#f57b51"},chatbox:{background:"#fff0f0"},hover:{brightness:"95% ",linkColor:"#ff0000 !important"}}},F={SET_THEME:"".concat("@hsReader/app","/SET_THEME")},w={setTheme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.theme;return localStorage.setItem("preferences.theme",n.name),{type:F.SET_THEME,payload:e}}},H=t(16),A=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(l.a)(n).call(this))).toggleTheme=e.toggleTheme.bind(Object(E.a)(e)),e}return Object(f.a)(n,e),Object(u.a)(n,[{key:"toggleTheme",value:function(e){var n=this.props,t=n.theme,r=n.setTheme;t.name===R.dark.name?r(R.light):r(R.dark)}},{key:"render",value:function(){var e=this.props.theme;return a.a.createElement(x,null,a.a.createElement(C,{href:"/"},a.a.createElement(P,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M20.496 9.026c-2.183-.93-5.116-1.53-8.25-1.695-.5-.03-.987-.04-1.45-.04 2.318-2.83 4.802-4.73 6.437-4.79.322-.013.595.055.813.196.706.458.905 1.768.545 3.59-.04.25.12.493.36.54.25.05.49-.11.54-.36.45-2.28.12-3.846-.94-4.538-.38-.248-.84-.365-1.35-.346-2.05.077-4.94 2.3-7.59 5.72-1.154.035-2.24.13-3.232.287-.646-2.897-.39-4.977.594-5.477.138-.073.285-.11.457-.124.697-.054 1.66.395 2.71 1.27.194.16.486.14.646-.06a.458.458 0 00-.06-.645C9.466 1.51 8.304 1 7.354 1.07a2.244 2.244 0 00-.803.22c-1.19.607-1.67 2.327-1.37 4.838.07.52.16 1.062.29 1.62C2.19 8.404.1 9.718.01 11.372c-.06 1.17.865 2.284 2.68 3.222a.46.46 0 10.42-.816C1.66 13.032.88 12.19.927 11.42c.05-1.08 1.772-2.19 4.76-2.78.27.994.62 2.032 1.05 3.09-1.018 1.888-1.756 3.747-2.137 5.4-.56 2.465-.26 4.22.86 4.948.36.234.78.35 1.247.35.935 0 2.067-.46 3.347-1.372a.458.458 0 10-.53-.746c-1.544 1.103-2.844 1.472-3.562 1.003-.76-.495-.926-1.943-.46-3.976.32-1.386.907-2.93 1.708-4.52.2.438.41.876.63 1.313 1.425 2.796 3.17 5.227 4.91 6.845 1.386 1.29 2.674 1.963 3.735 1.963.35 0 .68-.075.976-.223 1.145-.585 1.64-2.21 1.398-4.575-.224-2.213-1.06-4.91-2.354-7.6a.46.46 0 00-.83.396c2.69 5.602 2.88 10.19 1.37 10.96-1.59.813-5.424-2.355-8.39-8.18-.34-.655-.637-1.3-.9-1.93.34-.608.7-1.22 1.095-1.83.395-.604.806-1.188 1.224-1.745h.394c.54 0 1.126.01 1.734.048 6.53.343 10.975 2.56 10.884 4.334-.04.765-.924 1.538-2.425 2.12a.464.464 0 00-.26.596.455.455 0 00.593.262c1.905-.74 2.95-1.756 3.01-2.93.07-1.33-1.17-2.61-3.5-3.6v-.01zM8.08 9.45c-.27.415-.52.827-.764 1.244a23.66 23.66 0 01-.723-2.215c.713-.11 1.485-.19 2.31-.24-.28.39-.554.794-.82 1.21v-.01zm3.925 1.175a1.375 1.375 0 100 2.75 1.375 1.375 0 100-2.75z"}))),a.a.createElement(j,null,"Hackernews Alternative UI"),a.a.createElement(k,null,e.name===R.dark.name?a.a.createElement(I,{onClick:this.toggleTheme},a.a.createElement(H.b,null)):a.a.createElement(I,{onClick:this.toggleTheme},a.a.createElement(H.a,null))))}}]),n}(r.Component),D=Object(d.b)((function(e){return{theme:e.app.theme}}),(function(e){return{setTheme:function(n){return e(w.setTheme({theme:n}))}}}))(A);function U(){var e=Object(p.a)(["\n  background-color: ",";\n\n"]);return U=function(){return e},e}var L=h.d.div(U(),(function(e){return e.theme.backgroundSecondary}));function B(){var e=Object(p.a)(["\n  text-align: center;\n  span {\n    color: ",";\n    display: inline-block;\n    margin-left: 4px;\n    margin-right: 4px;\n    font-size: 80px;\n    line-height: 0.1;\n\n    ","  \n  };\n"]);return B=function(){return e},e}function G(){var e=Object(p.a)(["\n  /**\n   * Use the blink animation, which is defined above\n   */\n  animation-name: ",";\n  /**\n   * The total time of animation\n   */\n  animation-duration: 1s;\n  /**\n   * It will repeat itself forever\n   */\n  animation-iteration-count: infinite;\n  /**\n   * This makes sure that the starting style (opacity: .2)\n   * of the animation is applied before the animation starts.\n   * Otherwise we would see a short flash or would have\n   * to set the default styling of the dots to the same\n   * as the animation. Same applies for the ending styles.\n   */\n  animation-fill-mode: both;\n\n  &:nth-child(2) {\n    animation-delay: 0.2s;\n  }\n\n  &:nth-child(3) {\n    animation-delay: 0.4s;\n  }\n"]);return G=function(){return e},e}function z(){var e=Object(p.a)(["\n  /**\n  * At the start of the animation the dot\n  * has an opacity of .2\n  */\n  0% {\n    opacity: .2;\n  }\n  /**\n  * At 20% the dot is fully visible and\n  * then fades out slowly\n  */\n  20% {\n    opacity: 1;\n  }\n  /**\n  * Until it reaches an opacity of .2 and\n  * the animation can start again\n  */\n  100% {\n    opacity: .2;\n  }\n"]);return z=function(){return e},e}var Q=Object(h.e)(z()),Y=Object(h.c)(G(),Q),M=h.d.div(B(),(function(e){return e.theme.text.secondary}),Y);function N(){var e=Object(p.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n\n  margin-before: 1em;\n  margin-after: 1em;\n  margin-start: 0;\n  margin-end: 0;\n  margin:0; \n\n"]);return N=function(){return e},e}var W=h.d.ul(N(),(function(e){return e.theme.backgroundSecondary})),K=t(35),J=t.n(K);function $(){var e=Object(p.a)(["\ncolor: ",";\n\n"]);return $=function(){return e},e}function V(){var e=Object(p.a)(["\n  color: ",";\n  &:visited {\n    color: ",";\n  }\n"]);return V=function(){return e},e}function q(){var e=Object(p.a)(["\n  font-size: 12px;\n  color: ",";\n\n  "," {\n    font-size: 11px;\n  }\n"]);return q=function(){return e},e}function X(){var e=Object(p.a)(["\n  color: ",";\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n\n  &:hover {\n    color: ",";\n    h1,h2,h3,span {\n      color: ",";\n    }\n  }\n\n"]);return X=function(){return e},e}function Z(){var e=Object(p.a)(["\n  color: ",";\n  font-size: 12px;\n\n  "," {\n    font-size: 11px;\n  }"]);return Z=function(){return e},e}function ee(){var e=Object(p.a)(["\n  color: ",";\n  margin-top: 0;\n  margin-bottom: 6px;\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: 0.4px;\n  margin-right: 5px;\n\n\n  "," {\n    font-size: 13px;\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(p.a)(["",""]);return ne=function(){return e},e}function te(){var e=Object(p.a)(["\n  border-bottom: 1px solid ",";\n  border-top: 1px solid ",";\n\n  flex-flow: row wrap;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  ","\n\n  &:hover {\n    filter: brightness(",");\n  }\n"]);return te=function(){return e},e}function re(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 14px;\n  justify-content: center;\n  flex: 1;\n\n  "," {\n    padding-left: 12px;\n  }\n\n"]);return re=function(){return e},e}function ae(){var e=Object(p.a)(["\n  background-color: ",";\n\n  color: #ff6600;\n  margin-top: 5px;\n\n  display: inline-block;\n  border-radius: 10%;\n  padding: 1px 6px;\n  text-align: center;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 1.45;\n\n  "," {\n    line-height: 1;\n    font-size: 11px;\n  }\n\n  &:after {\n    margin-top: -.13rem;\n    margin-left: .07rem;\n    border-width: .6rem .66rem 0 0;\n  }\n"]);return ae=function(){return e},e}function oe(){var e=Object(p.a)(["\n  min-width: 80px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;  \n  color: ",";\n  flex-direction: column;\n  background-color: ",";\n  padding: 14px;\n\n  "," {\n    min-width: 60px;\n    padding: 11px;\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(p.a)(["\n  font-size: 12px;\n  color: ",";\n"]);return ie=function(){return e},e}var ce=h.d.div(ie(),(function(e){return e.theme.hot.primary})),ue=h.d.div(oe(),(function(e){return e.theme.hot.primary}),(function(e){return e.theme.background.secondary}),m),se=h.d.div(ae(),(function(e){return e.theme.chatbox.background}),m),le=h.d.div(re(),m),fe=h.d.li(te(),(function(e){return e.theme.border}),(function(e){return e.theme.border}),(function(e){return e.bogusLoader&&Object(h.c)(ne(),Y)}),(function(e){return e.theme.hover.brightness})),de=h.d.h3(ee(),(function(e){return e.theme.text.primary}),m),he=h.d.span(Z(),(function(e){return e.theme.text.secondary}),m),pe=h.d.a(X(),(function(e){return e.theme.text.primary}),(function(e){return e.theme.hover.linkColor}),(function(e){return e.theme.hover.linkColor})),me=h.d.div(q(),(function(e){return e.theme.text.secondary}),m),ge=h.d.a(V(),(function(e){return e.theme.text.secondary}),(function(e){return e.theme.text.secondary})),be=h.d.div($(),(function(e){return e.theme.text.secondary})),Ee=t(36),Se=t.n(Ee),ye=Object({NODE_ENV:"production",PUBLIC_URL:"/hackernews-reader",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).URL||"http://localhost:3000",ve={"Content-Type":"application/json",Accept:"application/json"},Oe="https://hacker-news.firebaseio.com/v0",_e=new(function(){function e(n){var t=n.baseURL,r=void 0===t?ye:t,a=n.timeout,o=void 0===a?2e4:a,i=n.headers,u=void 0===i?ve:i,s=n.auth;Object(c.a)(this,e);var l=Se.a.create({baseURL:r,timeout:o,headers:u,auth:s});l.interceptors.response.use(this.handleSuccess,this.handleError),this.client=l}return Object(u.a)(e,[{key:"handleSuccess",value:function(e){return e}},{key:"handleError",value:function(e){return Promise.reject(e)}},{key:"get",value:function(e){return this.client.get(e).then((function(e){return e.data}))}},{key:"post",value:function(e,n){return this.client.post(e,n).then((function(e){return e.data}))}},{key:"put",value:function(e,n){return this.client.put(e,n).then((function(e){return e.data}))}},{key:"patch",value:function(e,n){return this.client.patch(e,n).then((function(e){return e.data}))}},{key:"delete",value:function(e){return this.client.delete(e).then((function(e){return e.data}))}}]),e}())({baseURL:Oe}),Te="toFetch",xe="fetching",je="fetched",Ce={fetchTopStoriesIDs:function(){return _e.get("".concat(Oe,"/topstories").concat(".json?print=pretty"))},fetchStory:function(e){return _e.get("".concat(Oe,"/item/").concat(e,"/").concat(".json?print=pretty"))},getPageStoryIDs:function(e,n){var t=Ce.getPageRange(20,n),r=t.start,a=t.end;return Ce.getPageItems(e,r,a)},fetchStoriesByPage:function(e,n){var t=Ce.getPageStoryIDs(e,n);if(t){var r=t.map((function(e){return Ce.fetchStory(e)}));return Promise.all(r)}return Promise.resolve([])},fetchStoriesIdsAsync:function(e){return e.map((function(e){return Ce.fetchStory(e)}))},splitStoryIDsIntoPages:function(e,n){var t=n||20;return e.map((function(n,r){return r%t===0?e.slice(r,r+t):null})).filter((function(e){return e})).map((function(e,n){return{index:n,storyIDs:e,status:Te}}))},getPageRange:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{start:e*n,end:e*(n+1)}},getPageItems:function(e,n,t){return e.slice(n,t)},getUserDetailLink:function(e){return"https://news.ycombinator.com/user?id=".concat(e)},getStoryCommentURL:function(e){return"https://news.ycombinator.com/item?id=".concat(e)}},ke=Ce,Ie=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props,n=e.story,t=e.bogusLoader,r=1e3*n.time,o=function(e){var n=void 0;if(e){var t=e.match(/^https:\/\/([^/?#]+)(?:[/?#]|$)/i);n=t&&t[1]}return n}(n.url),i=ke.getStoryCommentURL(n.id);return a.a.createElement(fe,{bogusLoader:t},a.a.createElement(pe,{href:i},a.a.createElement(ue,null,a.a.createElement(ce,{href:i,rel:"nofollow noreferrer noopener",target:"_blank"},n.score),a.a.createElement(se,null,a.a.createElement(be,{href:i,rel:"nofollow noreferrer noopener",target:"_blank"}," ",n.descendants)))),a.a.createElement(le,null,a.a.createElement(pe,{href:n.url,rel:"nofollow noreferrer noopener",target:"_blank"},a.a.createElement(de,null,n.title)),a.a.createElement(me,null,a.a.createElement(ge,{href:ke.getUserDetailLink(n.by),rel:"nofollow noreferrer noopener",target:"_blank"},n.by," "," | "),a.a.createElement("time",{dateTime:new Date(r).toISOString()},J()(r)),o&&a.a.createElement(he,null," | "," ",o))))}}]),n}(r.Component),Pe=Object(d.b)((function(e){return{}}),{})(Ie),Re=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props,n=e.stories,t=e.bogusLoader;return a.a.createElement(a.a.Fragment,null,n&&n.map((function(e){return a.a.createElement(Pe,{key:e.id,story:e,bogusLoader:t})})))}}]),n}(r.Component),Fe=t(9),we=t(17),He="@hnReader/Story",Ae={FETCH_TOP_STORY_IDS_REQUEST:"".concat(He,"/FETCH_TOP_STORY_IDS_REQUEST"),FETCH_TOP_STORY_IDS_SUCCESS:"".concat(He,"/FETCH_TOP_STORY_IDS_SUCCESS"),FETCH_TOP_STORY_IDS_FAILURE:"".concat(He,"/FETCH_TOP_STORY_IDS_FAILURE"),FETCH_PAGE_STORIES_REQUEST:"".concat(He,"/FETCH_PAGE_STORIES_REQUEST"),FETCH_PAGE_STORIES_SUCCESS:"".concat(He,"/FETCH_PAGE_STORIES_SUCCESS"),FETCH_PAGE_STORIES_FAILURE:"".concat(He,"/FETCH_PAGE_STORIES_FAILURE"),FETCH_PAGE_STORIES_BATCH_REQUEST:"".concat(He,"/FETCH_PAGE_STORIES_BATCH_REQUEST"),FETCH_PAGE_STORIES_BATCH_SUCCESS:"".concat(He,"/FETCH_PAGE_STORIES_BATCH_SUCCESS"),FETCH_PAGE_STORIES_BATCH_FAILURE:"".concat(He,"/FETCH_PAGE_STORIES_BATCH_FAILURE"),RELOAD_STORIES:"".concat(He,"/RELOAD_STORIES")},De=function(e,n){return{type:e,payload:n}},Ue={reloadStories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){n(De(Ae.RELOAD_STORIES,e))}},fetchStoryPages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={payload:e};return function(t){return t(De(Ae.FETCH_TOP_STORY_IDS_REQUEST,e)),ke.fetchTopStoriesIDs().then((function(e){var r=ke.splitStoryIDsIntoPages(e);t(De(Ae.FETCH_TOP_STORY_IDS_SUCCESS,{storyIDs:e,pages:r})),n&&t(Ue.fetchStoriesForPage({storyIDs:e,pageIndex:0}))})).catch((function(e){t(De(Ae.FETCH_TOP_STORY_IDS_FAILURE,e))}))}},fetchStoriesForPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){n(De(Ae.FETCH_PAGE_STORIES_REQUEST,e));var t=e.storyIDs,r=e.pageIndex,a=ke.getPageStoryIDs(t,r),o=a.map((function(e,n){return n%20===0?a.slice(n,n+20):null})).filter((function(e){return e})).map((function(e){return ke.fetchStoriesIdsAsync(e)}));n(De(Ae.FETCH_PAGE_STORIES_REQUEST,e));var i=[];return o.reduce((function(t,r){return t.then((function(t){return n(De(Ae.FETCH_PAGE_STORIES_BATCH_REQUEST,e)),Promise.all(r).then((function(t){i=[].concat(Object(we.a)(i),Object(we.a)(t)),n(De(Ae.FETCH_PAGE_STORIES_BATCH_SUCCESS,Object(Fe.a)({},e,{stories:i})))}))}))}),Promise.resolve([])).then((function(t){return n(De(Ae.FETCH_PAGE_STORIES_SUCCESS,Object(Fe.a)({},e,{stories:i}))),Promise.resolve(i)}))}}},Le=Ue,Be=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,null,[{key:"getNextPageToFetch",value:function(e){var n=e.find((function(e){return e.status!==je}));return n?n.index:-1}},{key:"getFetchedPages",value:function(e){return e.filter((function(e){return e.status===je}))}},{key:"getPageBatches",value:function(e){return e.stories.map((function(n,t){return t%5===0?e.stories.slice(t,t+5):null})).filter((function(e){return e})).map((function(n,t){return{index:5*e.index+t,batchStories:n}}))}}]),e}(),Ge=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props,n=e.page,t=e.bogusLoader,r=Be.getPageBatches(n);return a.a.createElement(W,{bogusLoader:t},r&&r.map((function(e){return a.a.createElement(Re,{stories:e.batchStories,key:e.index,bogusLoader:t})})))}}]),n}(r.Component),ze=function(){var e=[{by:"friggeri",descendants:112,id:5789055,kids:[5789971,5789326,5789357,5789716,5790924,5790012,5789187,5789315,5789775,5789490,5790055,5790088,5789421,5789829,5789509,5793681,5791776,5791916,5791185,5789474,5791695,5790082,5789343,5790403,5790214,5794696,5789316,5791466,5790218,5789261,5790066,5790413,5789754,5789638,5789404,5789284,5790033],score:3287,time:1369861238,title:"Fetching from Hackernews API....",type:"story",url:"http://facebook.github.io/react/"},{by:"dmmalam",descendants:2530,id:11966167,kids:[11967528,11966471,11967359,11966219,11966660,11966872,11966390,11968264,11967208,11966468,11967068,11966221,11970411,11966220,11968226,11966296,11966204,11966983,11966242,11967692,11969513,11969017,11966661,11967554,11966425,11967394,11968081,11966355,11966677,11967835,11966281,11968458,11971783,11966985,11970201,11966420,11966209,11966408,11966349,11970290,11966217,11966912,11966521,11966925,11968703,11966435,11967330,11971812,11968155,11966215,11967304,11966669,11967248,11966467,11967374,11966216,11969565,11967795,11966782,11967481,11966556,11967045,11966612,11966651,11966213,11966398,11966333,11971213,11968586,11966871,11967743,11967029,11979365,11967905,11968604,11969049,11966210,11967814,11968785,11966735,11966913,11967972,11966756,11967454,11969389,11967105,11967083,11967239,11967336,11968472,11966198,11967453,11966312,11976841,11968027,11972149,11966264,11972203,11967667,11970413,11974236,11966347,11967489,11973273,11968667,11969189,11967651,11969132,11969563,11966751,11966524,11967499,11970248,11966526,11967378,11976081,11967361,11975951,11977103,11969184,11972433,11967837,11971557,11969792,11969047,11966791,11971060,11966642,11967346,11975907,11966436,11966340,11966237,11967211,11967103,11966980,11968231,11966539,11966586,11971294,11970941,11969465,11966380,11968082,11966341,11966845,11967730,11972855,11967198,11966944,11971093,11966330,11966717,11975804,11970356,11966315,11967820,11968254,11975140,11967139,11966597,11967100,11971471,11967792,11970238,11966332,11970932,11971393,11969300,11967925,11966793,11967895,11968523,11966692,11966873,11966386,11966223,11966316,11967645,11966206,11967418,11970580,11966357,11969567,11966874,11968143,11970166,11973224,11970209,11967230,11966186,11968671,11967371,11966396,11968114,11970047,11970360,11966376,11966265,11970378,11971928,11967512,11966962,11966511,11966278,11967061,11966655,11967575,11966268,11966488,11966202,11966923,11967875,11971458,11968383],score:3125,time:1466740137,title:"Please hang tight...",type:"story",url:"http://www.bbc.co.uk/news/uk-politics-36615028"},{by:"epaga",descendants:967,id:11116274,kids:[11116340,11116609,11119426,11116432,11117062,11117214,11116419,11116480,11116439,11116651,11116525,11116462,11122380,11117385,11116542,11120377,11117890,11119452,11118960,11119308,11116487,11116700,11116427,11118301,11116387,11117411,11120879,11118697,11117922,11118121,11120422,11120918,11121071,11116499,11123471,11119229,11119514,11116767,11116349,11123864,11118742,11118640,11117308,11116510,11117866,11116968,11121906,11117278,11116865,11116475,11119003,11119924,11120087,11117363,11117413,11117249,11117243,11116629,11117211,11118884,11120497,11118174,11118005,11117765,11120138,11117088,11116763,11120546,11123291,11119661,11116563,11120604,11120385,11117739,11121213,11122828,11127064,11116672,11119947,11127045,11123899,11123712,11117440,11120853,11117737,11119071,11116915,11118990,11117359,11120072,11117812,11118138,11117726,11116813,11120571,11120773,11119133,11123568,11116997,11120611,11116592,11117679,11123578,11122930,11116729,11117967,11120858,11119742,11118502,11119100,11116911,11116798,11117431,11116457,11123082,11117920,11116917,11121373,11117403,11121048,11119158,11116711,11117222,11117064,11117988,11119614,11122143,11116642,11117644,11117910,11119439,11120849,11118938,11119380,11122934,11123105,11118550,11121862,11116830,11121636,11117542,11117427,11123593,11118021,11116435,11117409,11118955,11117289,11118251,11120035,11163561,11121418,11122030,11119139,11123748,11116998,11116993,11120590,11122188,11118088,11122577,11116716,11117869,11117666,11116954,11119462,11117757,11164319,11117671,11121509,11123838,11116796,11116938,11123799,11122133,11116693,11122394,11121841,11125127,11116667,11117865,11119237,11117425,11116473,11120467,11117395,11116496,11116635,11120132,11164284,11116615,11117111,11123115,11123958,11121222,11119212,11117524,11116610,11119389,11119519,11119497,11117547,11117500,11121408,11117364,11121824,11118578,11118907,11120173,11119660,11117219,11116394,11123392,11116451,11118025,11119222,11119040,11116789,11117899,11116495,11116382,11118385,11116403,11117210,11116433],score:5771,time:1455698317,title:"Almost there...",type:"story",url:"http://www.apple.com/customer-letter/"}],n={index:0,storyIDs:e.map((function(e){return e.id})),status:"fetched",stories:e};return a.a.createElement("div",null,a.a.createElement(Ge,{page:n,bogusLoader:!0}),a.a.createElement(M,null,a.a.createElement("span",null,"."),a.a.createElement("span",null,"."),a.a.createElement("span",null,".")))},Qe=t(37),Ye=Object(Qe.a)((function(e){var n=e.story.pages;return n?n.map((function(e){return e.index})):0}),(function(e){var n=e.story.pages;return n?n.filter((function(e){return e.status===je})).map((function(e){return e.index})):0}),(function(e,n){return e.length>n.length})),Me=t(38),Ne=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(s.a)(this,Object(l.a)(n).call(this))).fetchNextPage=e.fetchNextPage.bind(Object(E.a)(e)),e.refreshData=e.refreshData.bind(Object(E.a)(e)),e}return Object(f.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.pagesFetched,t=e.fetchStoryPages;n||t()}},{key:"componentDidUpdate",value:function(){}},{key:"fetchNextPage",value:function(e){var n=this.props,t=n.nextPageToFetch,r=n.fetchStoriesForPage,a=n.storyIDs;t>=0&&r(a,t)}},{key:"refreshData",value:function(){var e=this.props,n=e.fetchStoryPages;(0,e.reloadStories)(),n()}},{key:"render",value:function(){var e=this.props,n=e.pagedStoriesFetched,t=e.hasMorePages;return a.a.createElement(Me.a,{dataLength:n.length,next:this.fetchNextPage,hasMore:t,loader:a.a.createElement(ze,null),refreshFunction:this.refreshData,pullDownToRefresh:!0,style:{height:"100%",overflowY:"hidden"}},a.a.createElement(L,null,n&&n.map((function(e){return a.a.createElement(Ge,{key:e.index,page:e})}))))}}]),n}(r.Component),We=Object(d.b)((function(e){var n=e.story,t=n.pages;return{theme:e.app.theme,storyIDs:n.storyIDs,hasMorePages:Ye(e),isFetching:n.isFetching,pagedStoriesFetched:Be.getFetchedPages(t),nextPageToFetch:Be.getNextPageToFetch(t),pagesFetched:n.pagesFetched,pages:n.pages}}),(function(e){return{fetchStoriesForPage:function(n,t){return e(Le.fetchStoriesForPage({storyIDs:n,pageIndex:t}))},fetchStoryPages:function(){return e(Le.fetchStoryPages({fetchFirstPage:!0}))},reloadStories:function(){return e(Le.reloadStories())}}}))(Ne),Ke=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props.theme;return a.a.createElement(h.a,{theme:e},a.a.createElement("div",null,a.a.createElement(b,null,a.a.createElement(D,null),a.a.createElement(We,null))))}},{key:"componentDidMount",value:function(){this.setBodyBackgroundColor()}},{key:"componentDidUpdate",value:function(){this.setBodyBackgroundColor()}},{key:"setBodyBackgroundColor",value:function(){document.body.style="background-color: ".concat(this.props.theme.background.primary)}}]),n}(r.Component),Je=Object(d.b)((function(e){return{theme:e.app.theme}}),(function(e){return{}}))(Ke);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $e(){var e=Object(p.a)(["\n    * {\n        box-sizing: border-box;\n    };\n\n    html, body {\n        font-family: Lato,Helvetica-Neue,Helvetica,Arial,sans-serif;\n        width: 100vw;\n        overflow-x: hidden;\n        margin: 0;\n        padding: 0;\n      }\n      ul {\n        list-style: none;\n        padding: 0;\n      }\n      a {\n        text-decoration: none;\n        &:visited {\n          color: inherit;\n        }\n      }\n"]);return $e=function(){return e},e}var Ve=Object(h.b)($e()),qe=t(11),Xe=t(39),Ze=(t(40),[]);Ze.push(Xe.a);var en=Object(qe.d)(qe.a.apply(void 0,Ze)),nn=function(){var e=localStorage.getItem("preferences.theme");return e?{theme:R[e]}:{theme:R.dark}},tn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nn(),n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case F.SET_THEME:return Object(Fe.a)({},e,{},r);default:return e}},rn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{storyIDs:[],pages:[],error:"",isFetching:!1,pagesFetched:!1},n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case Ae.RELOAD_STORIES:return{storyIDs:[],pages:[],error:"",isFetching:!1,pagesFetched:!1};case Ae.FETCH_TOP_STORY_IDS_REQUEST:return Object(Fe.a)({},e,{isFetching:!0});case Ae.FETCH_PAGE_STORIES_BATCH_REQUEST:case Ae.FETCH_PAGE_STORIES_REQUEST:var a=r.pageIndex;return e.pages[a].status=xe,Object(Fe.a)({},e,{isFetching:!0});case Ae.FETCH_TOP_STORY_IDS_SUCCESS:var o=r.pages,i="undefined"!==typeof o&&0!==o.length;return Object(Fe.a)({},e,{},r,{isFetching:!1,pagesFetched:i});case Ae.FETCH_PAGE_STORIES_BATCH_SUCCESS:case Ae.FETCH_PAGE_STORIES_SUCCESS:var c=r.stories,u=r.pageIndex;return e.pages[u].stories=c,e.pages[u].status=je,c&&c.length,Object(Fe.a)({},e,{isFetching:!1});default:return e}},an=Object(qe.c)({app:tn,story:rn}),on=function(e){return Object(qe.e)(an,e,en)};!function(){var e=on();i.a.render(a.a.createElement(d.a,{store:e},a.a.createElement("div",null,a.a.createElement(Ve,null),a.a.createElement(Je,null))),document.getElementById("root"))}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.343170cd.chunk.js.map