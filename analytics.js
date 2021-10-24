(function(){
   var n=this||self,p=function(a,b){a=a.split(".");
   var c=n;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);
   for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};
   var q=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},r=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1};
   var t=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
   

   var v=window,x=document,y=function(a,b){x.addEventListener?x.addEventListener(a,b,!1):x.attachEvent&&x.attachEvent("on"+a,b)};
   var z={},A=function(){z.TAGGING=z.TAGGING||[];z.TAGGING[1]=!0};
   var B=/:[0-9]+$/,C=function(a,b,c){a=a.split("&");
   for(var d=0;d<a.length;d++){var e=a[d].split("=");
   if(decodeURIComponent(e[0]).replace(/\+/g," ")===b)return b=e.slice(1).join("="),c?b:decodeURIComponent(b).replace(/\+/g," ")}},F=function(a,b){b&&(b=String(b).toLowerCase());
    if("protocol"===b||"port"===b)a.protocol=D(a.protocol)||D(v.location.protocol);
    "port"===b?a.port=String(Number(a.hostname?a.port:v.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||
   v.location.hostname).replace(B,"").toLowerCase());
   return E(a,b,void 0,void 0,void 0)},E=function(a,b,c,d,e){var f=D(a.protocol);
    b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":d="";
    a&&a.href&&(d=a.href.indexOf("#"),d=0>d?a.href:a.href.substr(0,d));
    a=d;break;
    case "protocol":a=f;break;case "host":a=a.hostname.replace(B,"").toLowerCase();
    c&&(d=/^www\d*\./.exec(a))&&d[0]&&(a=a.substr(d[0].length));
    break;
    case "port":a=String(Number(a.port)||("http"==f?80:"https"==f?443:""));
    break;case "path":a.pathname||
   a.hostname||A();
   a="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;
   a=a.split("/");
   a:if(d=d||[],c=a[a.length-1],Array.prototype.indexOf)d=d.indexOf(c),d="number"==typeof d?d:-1;
   else{for(e=0;e<d.length;e++)if(d[e]===c){d=e;break a}d=-1}0<=d&&(a[a.length-1]="");a=a.join("/");
   break;
   case "query":a=a.search.replace("?","");e&&(a=C(a,e,void 0));break;
   case "extension":a=a.pathname.split(".");a=1<a.length?a[a.length-1]:"";a=a.split("/")[0];
   break;case "fragment":a=a.hash.replace("#","");break;
   default:a=
   a&&a.href}return a},D=function(a){return a?a.replace(":","").toLowerCase():""},G=function(a){var b=x.createElement("a");
   a&&(b.href=a);
   var c=b.pathname;"/"!==c[0]&&(a||A(),c="/"+c);
   a=b.hostname.replace(B,"");
   return{href:b.href,protocol:b.protocol,host:b.host,hostname:a,pathname:c,search:b.search,hash:b.hash,port:b.port}};
   function H(){for(var a=I,b={},c=0;
    c<a.length;++c)b[a[c]]=c;return b}function J(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a+=a.toLowerCase()+"0123456789-_";return a+"."}var I,K;
   function aa(a){function b(k){for(;d<a.length;){var m=a.charAt(d++),l=K[m];if(null!=l)return l;
    if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return k}I=I||J();K=K||H();
    for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);
        if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);
        64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};
        var L;
        var N=function(){var a=ba,b=ca,c=M(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};
        if(!c.init){y("mousedown",d);
        y("keyup",d);
        y("submit",e);
        var f=HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};
        c.init=!0}},O=function(a,b,c,d,e){a={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};
        M().decorators.push(a)},P=function(a,b,c){for(var d=M().decorators,e={},f=0;
        f<d.length;++f){var g=d[f],h;if(h= !c||g.forms)a:{h=g.domains;var k=a,m=!!g.sameHost;
            if(h&&(m||k!==x.location.hostname))for(var l=0;l<h.length;l++)if(h[l]instanceof RegExp){if(h[l].test(k)){h=!0;break a}}else if(0<=k.indexOf(h[l])||m&&0<=h[l].indexOf(k)){h=!0;break a}h=!1}h&&(h=g.placement,void 0==h&&(h=g.fragment?2:1),h===b&&q(e,g.callback()))}return e},M=function(){var a={};var b=v.google_tag_data;v.google_tag_data=void 0===b?a:b;a=v.google_tag_data;b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var da=/(.*?)\*(.*?)\*(.*)/,ea=/([^?#]+)(\?[^#]*)?(#.*)?/;function Q(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
   var S=function(a){var b=[],c;
    for(c in a)if(a.hasOwnProperty(c)){var d=a[c];
        if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);
            
 