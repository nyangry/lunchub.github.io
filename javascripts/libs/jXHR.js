!function(t){var e=t.setTimeout,n=t.document,a=0;t.jXHR=function(){function r(){try{s.parentNode.removeChild(s)}catch(t){}}function c(){d=!1,u="",r(),s=null,i(0)}function o(t){try{f.onerror.call(f,t,u)}catch(e){throw new Error(t)}}function l(){this.readyState&&"complete"!==this.readyState&&"loaded"!==this.readyState||d||(this.onload=this.onreadystatechange=null,d=!0,4!==f.readyState&&o("Script failed to load ["+u+"]."),r())}function i(t,e){e=e||[],f.readyState=t,"function"==typeof f.onreadystatechange&&f.onreadystatechange.apply(f,e)}var u,d,s,f=null;return f={onerror:null,onreadystatechange:null,readyState:0,open:function(e,n){c(),internal_callback="cb"+a++,function(e){t.jXHR[e]=function(){try{i.call(f,4,arguments)}catch(n){f.readyState=-1,o("Script failed to run ["+u+"].")}t.jXHR[e]=null}}(internal_callback),u=n.replace(/=\?/,"=jXHR."+internal_callback),i(1)},send:function(){e(function(){s=n.createElement("script"),s.setAttribute("type","text/javascript"),s.onload=s.onreadystatechange=function(){l.call(s)},s.setAttribute("src",u),n.getElementsByTagName("head")[0].appendChild(s)},0),i(2)},setRequestHeader:function(){},getResponseHeader:function(){return""},getAllResponseHeaders:function(){return[]}},c(),f}}(window);