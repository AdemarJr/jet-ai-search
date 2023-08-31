(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function a(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,"string");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}var l=wp.components,s=l.Card,c=l.CardHeader,u=l.CardBody,p=l.CardFooter,h=l.__experimentalHeading,f=l.Button,m=l.TextControl,d=l.SelectControl,y=l.RangeControl,w=wp.element,b=w.render,v=w.Component,g=(w.Fragment,function(a){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(_,a);var l,w,b,v,g=(b=_,v=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var t,n=i(b);if(v){var r=i(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return function(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(this,t)});function _(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_),(r=g.call(this,e)).state=function(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({fetch_post_type:"post",done:0,total:0},r.props.data),r}return l=_,(w=[{key:"saveOptions",value:function(){var e=this;this.setState({saving:!0}),wp.apiFetch({method:"POST",url:window.ajaxurl+"?action=jet_ai_search_dispatch",data:{dispatch:"settings.dispatch_update",settings:{api_key:this.state.api_key,mode:this.state.mode,strictness:this.state.strictness,limit:this.state.limit}}}).then((function(t){e.setState({saving:!1})})).catch((function(t){e.setState({saving:!1})}))}},{key:"clearData",value:function(){wp.apiFetch({method:"POST",url:window.ajaxurl+"?action=jet_ai_search_dispatch",data:{dispatch:"data.dispatch_clear"}}).then((function(e){window.location.reload()}))}},{key:"fetchChunk",value:function(e){var t=this;wp.apiFetch({method:"POST",url:window.ajaxurl+"?action=jet_ai_search_dispatch",data:{dispatch:"data.dispatch_fetch",post_type:this.state.fetch_post_type,api_key:this.state.api_key,chunk:e}}).then((function(n){n.success||t.setState({fetching:!1}),t.setState({done:n.data.done,total:n.data.total}),n.data.has_next?t.fetchChunk(e+1):t.setState({fetching:!1})})).catch((function(e){t.setState({fetching:!1})}))}},{key:"fetchContent",value:function(){this.setState({fetching:!0}),this.fetchChunk(1)}},{key:"fetchButtonLabel",value:function(){return this.state.fetching?"Fetching...":"Fetch"}},{key:"saveButtonLabel",value:function(){return this.state.saving?"Updating...":"Update Settings"}},{key:"modeDesc",value:function(){switch(this.state.mode){case"all":return"All queries with `s` parameter will work in AI mode";case"by_request":return"Query will work in AI mode only if `is_ai` parameter presented in Request. You need to add this paramter on your side.";case"none":return"Only AJAX search by JetSearch will work in AI mode (if used on this website)"}}},{key:"render",value:function(){var e=this;return wp.element.createElement("div",{className:"jet-ai-search",style:{padding:"20px 20px 20px 0"}},wp.element.createElement(s,{style:{margin:"0 0 20px"}},wp.element.createElement(c,null,wp.element.createElement(h,{level:3},"Settings")),wp.element.createElement(u,null,wp.element.createElement(m,{label:"Open AI API key",value:this.state.api_key,help:"Find details at Open AI documentation - https://openai.com/product#made-for-developers",onChange:function(t){e.setState({api_key:t})}}),wp.element.createElement(d,{label:"Working Mode",value:this.state.mode,help:this.modeDesc(),onChange:function(t){e.setState({mode:t})},options:[{label:"All",value:"all"},{label:"By request",value:"by_request"},{label:"None",value:"none"}]}),wp.element.createElement(y,{label:"Strictness",help:"0 - is most 'strict' results, 1 - most 'gentle'",max:1,min:0,step:.01,value:this.state.strictness,onChange:function(t){e.setState({strictness:t})}}),wp.element.createElement(m,{label:"Results Limit",help:"Max number of results AI search will return. This option is not related to `posts per page` option of the query where AI search will be applied.",max:100,min:1,type:"number",step:1,value:this.state.limit,onChange:function(t){e.setState({limit:parseInt(t,10)})}})),wp.element.createElement(p,null,wp.element.createElement(f,{variant:"primary",onClick:function(){e.saveOptions()},disabled:this.state.saving},this.saveButtonLabel()))),wp.element.createElement(s,{style:{margin:"0 0 20px"}},wp.element.createElement(c,null,wp.element.createElement(h,{level:3},"Fetched Content Statistics")),wp.element.createElement(u,null,!this.props.stats.length&&wp.element.createElement("div",null,"You not fetched any content yet."),this.props.stats.length&&wp.element.createElement("ul",null,this.props.stats.map((function(e){return wp.element.createElement("li",null,e.label," - ",e.fetched,"/",e.total)})))),wp.element.createElement(p,null,wp.element.createElement(f,{variant:"secondary",isDestructive:!0,onClick:function(){confirm("Are you sure?")&&e.clearData()}},"Clear Fetched Content"))),wp.element.createElement(s,null,wp.element.createElement(c,null,wp.element.createElement(h,{level:3},"Fetch Content")),wp.element.createElement(u,null,!this.state.api_key&&wp.element.createElement("div",null,"Please set your Open AI API Key to fetch the content."),this.state.api_key&&wp.element.createElement("div",null,wp.element.createElement(d,{label:"Select Post Type to fetch data from",options:this.props.postTypes,value:this.state.fetch_post_type,onChange:function(t){e.setState({fetch_post_type:t})},help:"Already fetched posts will be rewritten with new"}))),wp.element.createElement(p,null,wp.element.createElement(f,{variant:"primary",disabled:!this.state.api_key||this.state.fetching,onClick:function(){e.fetchContent()}},this.fetchButtonLabel()),this.state.fetching&&wp.element.createElement("div",null,this.state.done," / ",this.state.total))))}}])&&r(l.prototype,w),Object.defineProperty(l,"prototype",{writable:!1}),_}(v)),_=document.getElementById("jet_ai_search_app");_&&b(wp.element.createElement(g,{data:window.JetAISearchData.settings,stats:window.JetAISearchData.stats,postTypes:window.JetAISearchData.post_types}),_)})();