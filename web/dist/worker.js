(()=>{var jS=Object.create;var Sa=Object.defineProperty;var XS=Object.getOwnPropertyDescriptor;var WS=Object.getOwnPropertyNames;var zS=Object.getPrototypeOf,JS=Object.prototype.hasOwnProperty;var gs=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var ZS=(e,t)=>()=>(e&&(t=e(e=0)),t);var P=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),YS=(e,t)=>{for(var n in t)Sa(e,n,{get:t[n],enumerable:!0})},td=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of WS(t))!JS.call(e,r)&&r!==n&&Sa(e,r,{get:()=>t[r],enumerable:!(s=XS(t,r))||s.enumerable});return e};var QS=(e,t,n)=>(n=e!=null?jS(zS(e)):{},td(t||!e||!e.__esModule?Sa(n,"default",{value:e,enumerable:!0}):n,e)),ka=e=>td(Sa({},"__esModule",{value:!0}),e);var ct=P((xq,rd)=>{"use strict";var $s=9223372036854775807n,Kn=-9223372036854775808n,eo=0x10000000000000000n,an=Number.MAX_SAFE_INTEGER,ln=Number.MIN_SAFE_INTEGER,$S=function(e){return typeof e=="bigint"?!0:typeof e=="number"&&Number.isInteger(e)},Pn=function(e){return typeof e=="number"&&Number.isInteger(e)&&e>=ln&&e<=an},ce=function(e){return typeof e=="bigint"?e:BigInt(e)},Un=function(e){return e>=ln&&e<=an?Number(e):e},ek=function(e){return typeof e=="bigint"?e<Kn||e>$s?null:Un(e):typeof e=="number"&&Number.isInteger(e)?e>=ln&&e<=an?e:Un(BigInt(e.toFixed(0))):null},it=function(e){let t=e%eo;return t<Kn?t+=eo:t>$s&&(t-=eo),Un(t)},tk=function(e,t){if(Pn(e)&&Pn(t)){let n=e+t;if(n>=ln&&n<=an)return n}return it(ce(e)+ce(t))},nk=function(e,t){if(Pn(e)&&Pn(t)){let n=e-t;if(n>=ln&&n<=an)return n}return it(ce(e)-ce(t))},sk=function(e,t){if(Pn(e)&&Pn(t)){let n=e<0?-e:e,s=t<0?-t:t;if(n<=2097152&&s<=2097152)return e*t;let r=e*t;if(Number.isInteger(r)&&r>=ln&&r<=an)return r}return it(ce(e)*ce(t))},rk=function(e){if(Pn(e)){let t=-e;if(t>=ln&&t<=an)return t}return it(-ce(e))},ok=function(e,t){let n=ce(e),s=ce(t);if(s===0n)return"divzero";if(n===Kn&&s===-1n)return"overflow";let r=n/s;return n<0n!=s<0n&&r*s!==n&&(r-=1n),it(r)},ak=function(e,t){let n=ce(e),s=ce(t);if(s===0n)return"divzero";if(n===Kn&&s===-1n)return 0;let r=n%s;return r<0n!=s<0n&&(r+=s),Un(r)},bq=eo-1n,kt=function(e){return BigInt.asUintN(64,ce(e))},lk=function(e,t){return it(BigInt.asIntN(64,kt(e)&kt(t)))},ik=function(e,t){return it(BigInt.asIntN(64,kt(e)|kt(t)))},ck=function(e,t){return it(BigInt.asIntN(64,kt(e)^kt(t)))},uk=function(e){return it(BigInt.asIntN(64,~kt(e)))},nd=function(e,t){let n=ce(t);return n<0n?sd(e,-n):n>=64n?0:it(BigInt.asIntN(64,kt(e)<<n))},sd=function(e,t){let n=ce(t);return n<0n?nd(e,-n):n>=64n?0:it(BigInt.asIntN(64,kt(e)>>n))},pk=function(e,t){return kt(e)<kt(t)},fk=function(e,t){return typeof e=="bigint"||typeof t=="bigint"?ce(e)===ce(t):e===t},dk=function(e,t){return typeof e=="bigint"||typeof t=="bigint"?ce(e)<ce(t):e<t},hk=function(e,t){return typeof e=="bigint"||typeof t=="bigint"?ce(e)<=ce(t):e<=t},gk=function(e,t){if(typeof e!="number"||!isFinite(e))return null;let n=Math.floor(e);if(e!==n){if(t===0)return null;t>1&&(n+=1)}if(n>=ln&&n<=an)return n;if(n<-9223372036854776e3||n>9223372036854776e3)return null;let s=BigInt(n.toFixed(0));return s<Kn||s>$s?null:Un(s)},mk=function(e){return typeof e=="bigint"?Number(e):e},_k=function(e){return typeof e=="bigint"?e.toString():String(e)},bk=function(e){try{let t=BigInt(e);return t<Kn||t>$s?null:Un(t)}catch{return null}},xk=function(e,t){try{let n=BigInt("0x"+e);return t&&(n=-n),n<Kn||n>$s?null:Un(n)}catch{return null}},Ak=function(e){let t=kt(e),n=new ArrayBuffer(8),s=new DataView(n);return s.setUint32(0,Number(t&0xFFFFFFFFn),!0),s.setUint32(4,Number(t>>32n),!0),new Uint8Array(n)},Sk=function(e){let t=new DataView(e.buffer,e.byteOffset,8),n=BigInt(t.getUint32(0,!0)),r=BigInt(t.getUint32(4,!0))<<32n|n;return it(BigInt.asIntN(64,r))};rd.exports={MAX_INT64:$s,MIN_INT64:Kn,MODULO:eo,MAX_SAFE:an,MIN_SAFE:ln,isIntRep:$S,isSafeNumber:Pn,toBigInt:ce,toFloat:mk,toDecimalString:_k,toBytesLE:Ak,fromBytesLE:Sk,normalize:ek,shrink:Un,wrap:it,add:tk,sub:nk,mul:sk,neg:rk,idiv:ok,imod:ak,band:lk,bor:ik,bxor:ck,bnot:uk,shiftl:nd,shiftr:sd,ult:pk,eq:fk,lt:dk,le:hk,fromFloat:gk,fromDecimalString:bk,fromHexString:xk}});var Ye=P((Aq,M)=>{"use strict";var Ea=typeof process<"u"&&process.env&&process.env.FENGARICONF?JSON.parse(process.env.FENGARICONF):{},{LUA_VERSION_MAJOR:kk,LUA_VERSION_MINOR:Ek,to_luastring:er}=he(),vk=";";M.exports.LUA_PATH_SEP=vk;var Tk="?";M.exports.LUA_PATH_MARK=Tk;var Rk="!";M.exports.LUA_EXEC_DIR=Rk;var tr=kk+"."+Ek;M.exports.LUA_VDIR=tr;if(typeof process>"u"){M.exports.LUA_DIRSEP="/";let t="./lua/"+tr+"/";M.exports.LUA_LDIR=t;let n=t;M.exports.LUA_JSDIR=n;let s=er(t+"?.lua;"+t+"?/init.lua;./?.lua;./?/init.lua");M.exports.LUA_PATH_DEFAULT=s;let r=er(n+"?.js;"+n+"loadall.js;./?.js");M.exports.LUA_JSPATH_DEFAULT=r}else if(gs("os").platform()==="win32"){M.exports.LUA_DIRSEP="\\";let t="!\\lua\\";M.exports.LUA_LDIR=t;let n="!\\";M.exports.LUA_JSDIR=n;let s="!\\..\\share\\lua\\"+tr+"\\";M.exports.LUA_SHRDIR=s;let r=er(t+"?.lua;"+t+"?\\init.lua;"+n+"?.lua;"+n+"?\\init.lua;"+s+"?.lua;"+s+"?\\init.lua;.\\?.lua;.\\?\\init.lua");M.exports.LUA_PATH_DEFAULT=r;let o=er(n+"?.js;"+n+"..\\share\\lua\\"+tr+"\\?.js;"+n+"loadall.js;.\\?.js");M.exports.LUA_JSPATH_DEFAULT=o}else{M.exports.LUA_DIRSEP="/";let t="/usr/local/";M.exports.LUA_ROOT=t;let n="/usr/",s=t+"share/lua/"+tr+"/",r=n+"share/lua/"+tr+"/";M.exports.LUA_LDIR=s;let o=s;M.exports.LUA_JSDIR=o;let a=r,l=er(s+"?.lua;"+s+"?/init.lua;"+r+"?.lua;"+r+"?/init.lua;./?.lua;./?/init.lua");M.exports.LUA_PATH_DEFAULT=l;let i=er(o+"?.js;"+o+"loadall.js;"+a+"?.js;"+a+"loadall.js;./?.js");M.exports.LUA_JSPATH_DEFAULT=i}var yk=Ea.LUA_COMPAT_FLOATSTRING||!1,{MAX_INT64:Nk,MIN_INT64:Ok,shrink:ad}=ct(),Ck=ad(Nk),wk=ad(Ok),Ik=Ea.LUAI_MAXSTACK||1e6,Vk=Ea.LUA_IDSIZE||59,{toDecimalString:Pk,fromFloat:Uk}=ct(),Kk=function(e){return Pk(e)},Fk=function(e){if(e===1/0)return"inf";if(e===-1/0)return"-inf";if(Number.isNaN(e))return"nan";if(e===0)return Object.is(e,-0)?"-0":"0";let t=e<0,n=Math.abs(e),s=Math.floor(Math.log10(n)),r=14;if(s<-4||s>=r){let a=(n/Math.pow(10,s)).toPrecision(r);a=od(a);let l;return s>=0?l=s<10?"+0"+s:"+"+s:l=s>-10?"-0"+Math.abs(s):String(s),(t?"-":"")+a+"e"+l}else{let o=n.toPrecision(r);return o=od(o),(t?"-":"")+o}},od=function(e){return e.indexOf(".")>=0&&(e=e.replace(/0+$/,"").replace(/\.$/,"")),e},Mk=function(e){let t=Uk(e,0);return t===null?!1:t},ld="",Bk="",Dk=`%${ld}d`,Gk="%.14g",qk=function(){return 46},Lk=Ea.LUAL_BUFFERSIZE||8192,Hk=function(e){if(e===0)return[e,0];let t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e);let n=t.getUint32(0)>>>20&2047;n===0&&(t.setFloat64(0,e*Math.pow(2,64)),n=(t.getUint32(0)>>>20&2047)-64);let s=n-1022;return[id(e,-s),s]},id=function(e,t){if(e===0||!isFinite(e))return e;let n=Math.min(3,Math.ceil(Math.abs(t)/1023)),s=e;for(let r=0;r<n;r++)s*=Math.pow(2,Math.floor((t+r)/n));return s};M.exports.LUAI_MAXSTACK=Ik;M.exports.LUA_COMPAT_FLOATSTRING=yk;M.exports.LUA_IDSIZE=Vk;M.exports.LUA_INTEGER_FMT=Dk;M.exports.LUA_INTEGER_FRMLEN=ld;M.exports.LUA_MAXINTEGER=Ck;M.exports.LUA_MININTEGER=wk;M.exports.LUA_NUMBER_FMT=Gk;M.exports.LUA_NUMBER_FRMLEN=Bk;M.exports.LUAL_BUFFERSIZE=Lk;M.exports.frexp=Hk;M.exports.ldexp=id;M.exports.lua_getlocaledecpoint=qk;M.exports.lua_integer2str=Kk;M.exports.lua_number2str=Fk;M.exports.lua_numbertointeger=Mk});var he=P((Sq,S)=>{"use strict";var ud=Uint8Array.from.bind(Uint8Array),jk=function(e,t,n){return e.indexOf(t,n)},Xk=Uint8Array.of.bind(Uint8Array),to=function(e){return e instanceof Uint8Array},Wk=function(e,t){if(e!==t){let n=e.length;if(n!==t.length)return!1;for(let s=0;s<n;s++)if(e[s]!==t[s])return!1}return!0},Ft="cannot convert invalid utf8 to javascript string",zk=function(e,t,n,s){if(!to(e))throw new TypeError("to_jsstring expects a Uint8Array");n===void 0?n=e.length:n=Math.min(e.length,n);let r="",o=t!==void 0?t:0,a=!0;for(let l=o;l<n;l++)if(e[l]>=128){a=!1;break}if(a){if(n-o<=32768)return String.fromCharCode.apply(null,e.subarray(o,n));let i="";for(let u=o;u<n;u+=32768)i+=String.fromCharCode.apply(null,e.subarray(u,Math.min(u+32768,n)));return i}for(let l=o;l<n;){let i=e[l++];if(i<128)r+=String.fromCharCode(i);else if(i<194||i>244){if(!s)throw RangeError(Ft);r+="\xEF\xBF\xBD"}else if(i<=223){if(l>=n){if(!s)throw RangeError(Ft);r+="\xEF\xBF\xBD";continue}let u=e[l++];if((u&192)!==128){if(!s)throw RangeError(Ft);r+="\xEF\xBF\xBD";continue}r+=String.fromCharCode(((i&31)<<6)+(u&63))}else if(i<=239){if(l+1>=n){if(!s)throw RangeError(Ft);r+="\xEF\xBF\xBD";continue}let u=e[l++];if((u&192)!==128){if(!s)throw RangeError(Ft);r+="\xEF\xBF\xBD";continue}let c=e[l++];if((c&192)!==128){if(!s)throw RangeError(Ft);r+="\xEF\xBF\xBD";continue}let f=((i&15)<<12)+((u&63)<<6)+(c&63);if(f<=65535)r+=String.fromCharCode(f);else{f-=65536;let _=(f>>10)+55296,H=f%1024+56320;r+=String.fromCharCode(_,H)}}else{if(l+2>=n){if(!s)throw RangeError(Ft);r+="\xEF\xBF\xBD";continue}let u=e[l++];if((u&192)!==128){if(!s)throw RangeError(Ft);r+="\xEF\xBF\xBD";continue}let c=e[l++];if((c&192)!==128){if(!s)throw RangeError(Ft);r+="\xEF\xBF\xBD";continue}let f=e[l++];if((f&192)!==128){if(!s)throw RangeError(Ft);r+="\xEF\xBF\xBD";continue}let _=((i&7)<<18)+((u&63)<<12)+((c&63)<<6)+(f&63);_-=65536;let H=(_>>10)+55296,E=_%1024+56320;r+=String.fromCharCode(H,E)}}return r},Jk=(function(){let e=";,/?:@&=+$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,-_.!~*'()#",t=new Uint8Array(256);for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=1;return t})(),Zk=function(e){if(!to(e))throw new TypeError("to_uristring expects a Uint8Array");let t=e.length,n=[],s="";for(let r=0;r<t;r++){let o=e[r];Jk[o]?s+=String.fromCharCode(o):(s.length&&(n.push(s),s=""),n.push("%"+(o<16?"0":"")+o.toString(16)))}return s.length&&n.push(s),n.length<=1?n[0]||"":n.join("")},cd={},Pi=function(e,t){if(typeof e!="string")throw new TypeError("to_luastring expects a javascript string");if(t){let o=cd[e];if(to(o))return o}let n=e.length,s=Array(n),r=0;for(let o=0;o<n;++o){let a=e.charCodeAt(o);if(a<=127)s[r++]=a;else if(a<=2047)s[r++]=192|a>>6,s[r++]=128|a&63;else{if(a>=55296&&a<=56319&&o+1<n){let l=e.charCodeAt(o+1);l>=56320&&l<=57343&&(o++,a=(a-55296)*1024+l+9216)}a<=65535?(s[r++]=224|a>>12,s[r++]=128|a>>6&63,s[r++]=128|a&63):(s[r++]=240|a>>18,s[r++]=128|a>>12&63,s[r++]=128|a>>6&63,s[r++]=128|a&63)}}return s=ud(s),t&&(cd[e]=s),s},Yk=function(e){if(!to(e))if(typeof e=="string")e=Pi(e);else throw new TypeError("expects an array of bytes or javascript string");return e};S.exports.luastring_from=ud;S.exports.luastring_indexOf=jk;S.exports.luastring_of=Xk;S.exports.is_luastring=to;S.exports.luastring_eq=Wk;S.exports.to_jsstring=zk;S.exports.to_uristring=Zk;S.exports.to_luastring=Pi;S.exports.from_userstring=Yk;var Qk=Pi("\x1BLua"),pd="5",fd="3",$k=503,dd="4",hd="Lua "+pd+"."+fd,gd=hd+"."+dd,eE=gd+"  Copyright (C) 1994-2017 Lua.org, PUC-Rio",tE="R. Ierusalimschy, L. H. de Figueiredo, W. Celes";S.exports.LUA_SIGNATURE=Qk;S.exports.LUA_VERSION_MAJOR=pd;S.exports.LUA_VERSION_MINOR=fd;S.exports.LUA_VERSION_NUM=$k;S.exports.LUA_VERSION_RELEASE=dd;S.exports.LUA_VERSION=hd;S.exports.LUA_RELEASE=gd;S.exports.LUA_COPYRIGHT=eE;S.exports.LUA_AUTHORS=tE;var nE={LUA_OK:0,LUA_YIELD:1,LUA_ERRRUN:2,LUA_ERRSYNTAX:3,LUA_ERRMEM:4,LUA_ERRGCMM:5,LUA_ERRERR:6},He={LUA_TNONE:-1,LUA_TNIL:0,LUA_TBOOLEAN:1,LUA_TLIGHTUSERDATA:2,LUA_TNUMBER:3,LUA_TSTRING:4,LUA_TTABLE:5,LUA_TFUNCTION:6,LUA_TUSERDATA:7,LUA_TTHREAD:8,LUA_NUMTAGS:9};He.LUA_TSHRSTR=He.LUA_TSTRING|0;He.LUA_TLNGSTR=He.LUA_TSTRING|16;He.LUA_TNUMFLT=He.LUA_TNUMBER|0;He.LUA_TNUMINT=He.LUA_TNUMBER|16;He.LUA_TLCL=He.LUA_TFUNCTION|0;He.LUA_TLCF=He.LUA_TFUNCTION|16;He.LUA_TCCL=He.LUA_TFUNCTION|32;var sE=0,rE=1,oE=2,aE=3,lE=4,iE=5,cE=6,uE=7,pE=8,fE=9,dE=10,hE=11,gE=12,mE=13,_E=0,bE=1,xE=2,AE=20,{LUAI_MAXSTACK:SE}=Ye(),md=-SE-1e3,kE=function(e){return md-e},EE=1,_d=2,vE=_d,Vi=class{constructor(){this.event=NaN,this.name=null,this.namewhat=null,this.what=null,this.source=null,this.currentline=NaN,this.linedefined=NaN,this.lastlinedefined=NaN,this.nups=NaN,this.nparams=NaN,this.isvararg=NaN,this.istailcall=NaN,this.short_src=null,this.i_ci=null}},bd=0,xd=1,Ad=2,Sd=3,TE=4,RE=1<<bd,yE=1<<xd,NE=1<<Ad,OE=1<<Sd;S.exports.LUA_HOOKCALL=bd;S.exports.LUA_HOOKCOUNT=Sd;S.exports.LUA_HOOKLINE=Ad;S.exports.LUA_HOOKRET=xd;S.exports.LUA_HOOKTAILCALL=TE;S.exports.LUA_MASKCALL=RE;S.exports.LUA_MASKCOUNT=OE;S.exports.LUA_MASKLINE=NE;S.exports.LUA_MASKRET=yE;S.exports.LUA_MINSTACK=AE;S.exports.LUA_MULTRET=-1;S.exports.LUA_OPADD=sE;S.exports.LUA_OPBAND=uE;S.exports.LUA_OPBNOT=mE;S.exports.LUA_OPBOR=pE;S.exports.LUA_OPBXOR=fE;S.exports.LUA_OPDIV=iE;S.exports.LUA_OPEQ=_E;S.exports.LUA_OPIDIV=cE;S.exports.LUA_OPLE=xE;S.exports.LUA_OPLT=bE;S.exports.LUA_OPMOD=aE;S.exports.LUA_OPMUL=oE;S.exports.LUA_OPPOW=lE;S.exports.LUA_OPSHL=dE;S.exports.LUA_OPSHR=hE;S.exports.LUA_OPSUB=rE;S.exports.LUA_OPUNM=gE;S.exports.LUA_REGISTRYINDEX=md;S.exports.LUA_RIDX_GLOBALS=_d;S.exports.LUA_RIDX_LAST=vE;S.exports.LUA_RIDX_MAINTHREAD=EE;S.exports.constant_types=He;S.exports.lua_Debug=Vi;S.exports.lua_upvalueindex=kE;S.exports.thread_status=nE});var Qe=P((kq,ye)=>{var Mt=he(),kd="0",Ed="1",CE=1,vd="5",Td="Fengari "+kd+"."+Ed,Rd=Td+"."+vd,yd="B. Giannangeli, Daurnimator",wE=Rd+"  Copyright (C) 2017-2019 "+yd+`
Based on: `+Mt.LUA_COPYRIGHT;ye.exports.FENGARI_AUTHORS=yd;ye.exports.FENGARI_COPYRIGHT=wE;ye.exports.FENGARI_RELEASE=Rd;ye.exports.FENGARI_VERSION=Td;ye.exports.FENGARI_VERSION_MAJOR=kd;ye.exports.FENGARI_VERSION_MINOR=Ed;ye.exports.FENGARI_VERSION_NUM=CE;ye.exports.FENGARI_VERSION_RELEASE=vd;ye.exports.is_luastring=Mt.is_luastring;ye.exports.luastring_eq=Mt.luastring_eq;ye.exports.luastring_from=Mt.luastring_from;ye.exports.luastring_indexOf=Mt.luastring_indexOf;ye.exports.luastring_of=Mt.luastring_of;ye.exports.to_jsstring=Mt.to_jsstring;ye.exports.to_luastring=Mt.to_luastring;ye.exports.to_uristring=Mt.to_uristring;ye.exports.from_userstring=Mt.from_userstring});var $e=P((Eq,Fn)=>{"use strict";var IE=function(e){if(!e)throw Error("assertion failed")};Fn.exports.lua_assert=IE;var VE=function(e,t,n){if(!t)throw Error(n)};Fn.exports.api_check=VE;var PE=200;Fn.exports.LUAI_MAXCCALLS=PE;var UE=32;Fn.exports.LUA_MINBUFFER=UE;var KE=function(e,t,n){let s=t%n;return s*n<0&&(s+=n),s};Fn.exports.luai_nummod=KE;var{MAX_INT64:FE,MIN_INT64:ME,shrink:Nd}=ct(),BE=Nd(FE);Fn.exports.MAX_INT=BE;var DE=Nd(ME);Fn.exports.MIN_INT=DE});var Ui=P((vq,ms)=>{"use strict";var{luastring_of:GE}=he(),nr=GE(0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,22,22,22,22,22,22,22,22,22,22,4,4,4,4,4,4,4,21,21,21,21,21,21,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,5,4,21,21,21,21,21,21,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),Od=0,Cd=1,qE=2,LE=3,HE=4,jE=function(e){return(nr[e+1]&1<<Cd)!==0},XE=function(e){return(nr[e+1]&1<<HE)!==0},WE=function(e){return(nr[e+1]&1<<qE)!==0},zE=function(e){return(nr[e+1]&1<<LE)!==0},JE=function(e){return(nr[e+1]&1<<Od)!==0},ZE=function(e){return(nr[e+1]&(1<<Od|1<<Cd))!==0};ms.exports.lisdigit=jE;ms.exports.lislalnum=ZE;ms.exports.lislalpha=JE;ms.exports.lisprint=WE;ms.exports.lisspace=zE;ms.exports.lisxdigit=XE});var Bt=P((Tq,Mn)=>{"use strict";var{is_luastring:YE,luastring_eq:QE,luastring_from:$E,to_luastring:ev}=he(),{lua_assert:no}=$e(),_s=class{constructor(t,n){this.hash=null,this.realstring=n}getstr(){return this.realstring}tsslen(){return this.realstring.length}},tv=(e,t)=>(no(e instanceof _s),no(t instanceof _s),e===t||QE(e.realstring,t.realstring)),wd="|",Ki=32768,Id=e=>{no(YE(e));let t=e.length;if(t<=Ki)return wd+String.fromCharCode.apply(null,e);let n=wd;for(let s=0;s<t;s+=Ki)n+=String.fromCharCode.apply(null,e.subarray(s,s+Ki));return n},nv=function(e){return no(e instanceof _s),e.hash===null&&(e.hash=Id(e.getstr())),e.hash},Fi=function(e,t){return no(t instanceof Uint8Array),new _s(e,t)},sv=function(e,t){return Fi(e,$E(t))},rv=function(e,t){return Fi(e,ev(t))};Mn.exports.luaS_eqlngstr=tv;Mn.exports.luaS_hash=Id;Mn.exports.luaS_hashlongstr=nv;Mn.exports.luaS_bless=Fi;Mn.exports.luaS_new=sv;Mn.exports.luaS_newliteral=rv;Mn.exports.TString=_s});var Dt=P((yq,Rt)=>{"use strict";var{constant_types:{LUA_TBOOLEAN:ov,LUA_TCCL:av,LUA_TLCF:lv,LUA_TLCL:iv,LUA_TLIGHTUSERDATA:cv,LUA_TLNGSTR:uv,LUA_TNIL:Ud,LUA_TNUMFLT:pv,LUA_TNUMINT:Di,LUA_TSHRSTR:fv,LUA_TTABLE:dv,LUA_TTHREAD:hv,LUA_TUSERDATA:gv},to_luastring:Mi}=he(),{LUA_MAXINTEGER:Rq}=Ye(),{lua_assert:ro}=$e(),mv=ct(),Bi=un(),Be=ut(),{luaS_hashlongstr:Kd,TString:_v}=Bt(),bv=cn(),Vd=new WeakMap,Pd=function(e){let t=Vd.get(e);return t||(t={},Vd.set(e,t)),t},Gi=function(e,t){switch(t.type){case Ud:return Bi.luaG_runerror(e,Mi("table index is nil",!0));case pv:if(isNaN(t.value))return Bi.luaG_runerror(e,Mi("table index is NaN",!0));case Di:case ov:case dv:case iv:case lv:case av:case gv:case hv:return t.value;case fv:case uv:return Kd(t.tsvalue());case cv:{let n=t.value;switch(typeof n){case"string":return"*"+n;case"number":return"#"+n;case"boolean":return n?"?true":"?false";case"function":return Pd(n);case"object":if(n instanceof bv.lua_State&&n.l_G===e.l_G||n instanceof so||n instanceof Be.Udata||n instanceof Be.LClosure||n instanceof Be.CClosure)return Pd(n);default:return n}}default:throw new Error("unknown key type: "+t.type)}},so=class{constructor(t){this.id=t.l_G.id_counter++,this.strong=new Map,this.dead_strong=new Map,this.dead_weak=void 0,this.f=void 0,this.l=void 0,this.metatable=null,this.flags=-1}},xv=function(e){e.flags=0},Fd=function(e,t,n,s){e.dead_strong.clear(),e.dead_weak=void 0;let r=null,o={key:n,value:s,p:r=e.l,n:void 0};e.f||(e.f=o),r&&(r.n=o),e.strong.set(t,o),e.l=o},Av=function(e){return typeof e=="object"?e!==null:typeof e=="function"},Md=function(e,t){let n=e.strong.get(t);if(n){n.key.setdeadvalue(),n.value=void 0;let s=n.n,r=n.p;n.p=void 0,r&&(r.n=s),s&&(s.p=r),e.f===n&&(e.f=s),e.l===n&&(e.l=r),e.strong.delete(t),Av(t)?(e.dead_weak||(e.dead_weak=new WeakMap),e.dead_weak.set(t,n)):e.dead_strong.set(t,n)}},Sv=function(e){return new so(e)},qi=function(e,t){let n=e.strong.get(t);return n?n.value:Be.luaO_nilobject},va=function(e,t){return ro(typeof t=="number"&&Number.isInteger(t)),qi(e,t)},kv=function(e,t){return ro(t instanceof _v),qi(e,Kd(t))},Ev=function(e,t,n){return ro(n instanceof Be.TValue),n.ttisnil()||n.ttisfloat()&&isNaN(n.value)?Be.luaO_nilobject:qi(t,Gi(e,n))},vv=function(e,t,n){ro(typeof t=="number"&&Number.isInteger(t)&&n instanceof Be.TValue);let s=t;if(n.ttisnil()){Md(e,s);return}let r=e.strong.get(s);if(r)r.value.setfrom(n);else{let o=new Be.TValue(Di,t),a=new Be.TValue(n.type,n.value);Fd(e,s,o,a)}},Tv=function(e,t,n,s){ro(n instanceof Be.TValue);let r=Gi(e,n);if(s.ttisnil()){Md(t,r);return}let o=t.strong.get(r);if(o)o.value.setfrom(s);else{let a,l=n.value;if(n.ttisfloat()){let u=mv.fromFloat(l,0);u!==null?a=new Be.TValue(Di,u):a=new Be.TValue(n.type,l)}else a=new Be.TValue(n.type,l);let i=new Be.TValue(s.type,s.value);Fd(t,r,a,i)}},Rv=function(e){let t=0,n=e.strong.size+1;for(;!va(e,n).ttisnil();){if(t=n,n>4611686018427388e3){for(t=1;!va(e,t).ttisnil();)t++;return t-1}n*=2}for(;n-t>1;){let s=Math.floor((t+n)/2);va(e,s).ttisnil()?n=s:t=s}return t},yv=function(e,t,n){let s=e.stack[n],r;if(s.type===Ud){if(r=t.f,!r)return!1}else{let o=Gi(e,s);if(r=t.strong.get(o),r){if(r=r.n,!r)return!1}else{if(r=t.dead_weak&&t.dead_weak.get(o)||t.dead_strong.get(o),!r)return Bi.luaG_runerror(e,Mi("invalid key to 'next'"));do if(r=r.n,!r)return!1;while(r.key.ttisdeadkey())}}return Be.setobj2s(e,n,r.key),Be.setobj2s(e,n+1,r.value),!0};Rt.exports.invalidateTMcache=xv;Rt.exports.luaH_get=Ev;Rt.exports.luaH_getint=va;Rt.exports.luaH_getn=Rv;Rt.exports.luaH_getstr=kv;Rt.exports.luaH_setfrom=Tv;Rt.exports.luaH_setint=vv;Rt.exports.luaH_new=Sv;Rt.exports.luaH_next=yv;Rt.exports.Table=so});var ks=P((Nq,x)=>{"use strict";var Nv=["MOVE","LOADK","LOADKX","LOADBOOL","LOADNIL","GETUPVAL","GETTABUP","GETTABLE","SETTABUP","SETUPVAL","SETTABLE","NEWTABLE","SELF","ADD","SUB","MUL","MOD","POW","DIV","IDIV","BAND","BOR","BXOR","SHL","SHR","UNM","BNOT","NOT","LEN","CONCAT","JMP","EQ","LT","LE","TEST","TESTSET","CALL","TAILCALL","RETURN","FORLOOP","FORPREP","TFORCALL","TFORLOOP","SETLIST","CLOSURE","VARARG","EXTRAARG"],Ov={OP_MOVE:0,OP_LOADK:1,OP_LOADKX:2,OP_LOADBOOL:3,OP_LOADNIL:4,OP_GETUPVAL:5,OP_GETTABUP:6,OP_GETTABLE:7,OP_SETTABUP:8,OP_SETUPVAL:9,OP_SETTABLE:10,OP_NEWTABLE:11,OP_SELF:12,OP_ADD:13,OP_SUB:14,OP_MUL:15,OP_MOD:16,OP_POW:17,OP_DIV:18,OP_IDIV:19,OP_BAND:20,OP_BOR:21,OP_BXOR:22,OP_SHL:23,OP_SHR:24,OP_UNM:25,OP_BNOT:26,OP_NOT:27,OP_LEN:28,OP_CONCAT:29,OP_JMP:30,OP_EQ:31,OP_LT:32,OP_LE:33,OP_TEST:34,OP_TESTSET:35,OP_CALL:36,OP_TAILCALL:37,OP_RETURN:38,OP_FORLOOP:39,OP_FORPREP:40,OP_TFORCALL:41,OP_TFORLOOP:42,OP_SETLIST:43,OP_CLOSURE:44,OP_VARARG:45,OP_EXTRAARG:46},ue=0,se=1,je=2,K=3,U=0,Ta=1,oo=2,Bd=3,co=[64|je<<4|ue<<2|U,64|K<<4|ue<<2|Ta,64|ue<<4|ue<<2|Ta,64|se<<4|se<<2|U,64|se<<4|ue<<2|U,64|se<<4|ue<<2|U,64|se<<4|K<<2|U,64|je<<4|K<<2|U,0|K<<4|K<<2|U,0|se<<4|ue<<2|U,0|K<<4|K<<2|U,64|se<<4|se<<2|U,64|je<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|je<<4|ue<<2|U,64|je<<4|ue<<2|U,64|je<<4|ue<<2|U,64|je<<4|ue<<2|U,64|je<<4|je<<2|U,0|je<<4|ue<<2|oo,128|K<<4|K<<2|U,128|K<<4|K<<2|U,128|K<<4|K<<2|U,128|ue<<4|se<<2|U,192|je<<4|se<<2|U,64|se<<4|se<<2|U,64|se<<4|se<<2|U,0|se<<4|ue<<2|U,64|je<<4|ue<<2|oo,64|je<<4|ue<<2|oo,0|ue<<4|se<<2|U,64|je<<4|ue<<2|oo,0|se<<4|se<<2|U,64|se<<4|ue<<2|Ta,64|se<<4|ue<<2|U,0|se<<4|se<<2|Bd],Cv=function(e){return co[e]&3},wv=function(e){return co[e]>>4&3},Iv=function(e){return co[e]>>2&3},Vv=function(e){return co[e]&64},Pv=function(e){return co[e]&128},Bn=9,Dn=9,bs=Bn+Dn,As=8,ao=Bn+Dn+As,sr=6,Gt=0,Gn=Gt+sr,Ss=Gn+As,lo=Ss+Bn,xs=Ss,io=Gn,Dd=(1<<bs)-1,Ra=Dd>>1,Uv=(1<<ao)-1,Gd=(1<<As)-1,Kv=(1<<Dn)-1,Fv=(1<<Bn)-1,uo=1<<Dn-1,Mv=uo-1,Bv=Gd,Dv=function(e){return e&uo},Gv=function(e){return e&~uo},qv=function(e){return e|uo},Ve=function(e,t){return~(-1<<e)<<t},qd=function(e,t){return~Ve(e,t)},Lv=function(e){return e.opcode},Hv=function(e,t){return e.code=e.code&qd(sr,Gt)|t<<Gt&Ve(sr,Gt),rr(e)},po=function(e,t,n,s){return e.code=e.code&qd(s,n)|t<<n&Ve(s,n),rr(e)},jv=function(e){return e.A},Xv=function(e,t){return po(e,t,Gn,As)},Wv=function(e){return e.B},zv=function(e,t){return po(e,t,lo,Dn)},Jv=function(e){return e.C},Zv=function(e,t){return po(e,t,Ss,Bn)},Yv=function(e){return e.Bx},Ld=function(e,t){return po(e,t,xs,bs)},Qv=function(e){return e.Ax},$v=function(e,t){return po(e,t,io,ao)},eT=function(e){return e.sBx},tT=function(e,t){return Ld(e,t+Ra)},rr=function(e){if(typeof e=="number")return{code:e,opcode:e>>Gt&Ve(sr,0),A:e>>Gn&Ve(As,0),B:e>>lo&Ve(Dn,0),C:e>>Ss&Ve(Bn,0),Bx:e>>xs&Ve(bs,0),Ax:e>>io&Ve(ao,0),sBx:(e>>xs&Ve(bs,0))-Ra};{let t=e.code;return e.opcode=t>>Gt&Ve(sr,0),e.A=t>>Gn&Ve(As,0),e.B=t>>lo&Ve(Dn,0),e.C=t>>Ss&Ve(Bn,0),e.Bx=t>>xs&Ve(bs,0),e.Ax=t>>io&Ve(ao,0),e.sBx=(t>>xs&Ve(bs,0))-Ra,e}},nT=function(e,t,n,s){return rr(e<<Gt|t<<Gn|n<<lo|s<<Ss)},sT=function(e,t,n){return rr(e<<Gt|t<<Gn|n<<xs)},rT=function(e,t){return rr(e<<Gt|t<<io)},oT=50;x.exports.BITRK=uo;x.exports.CREATE_ABC=nT;x.exports.CREATE_ABx=sT;x.exports.CREATE_Ax=rT;x.exports.GET_OPCODE=Lv;x.exports.GETARG_A=jv;x.exports.GETARG_B=Wv;x.exports.GETARG_C=Jv;x.exports.GETARG_Bx=Yv;x.exports.GETARG_Ax=Qv;x.exports.GETARG_sBx=eT;x.exports.INDEXK=Gv;x.exports.ISK=Dv;x.exports.LFIELDS_PER_FLUSH=oT;x.exports.MAXARG_A=Gd;x.exports.MAXARG_Ax=Uv;x.exports.MAXARG_B=Kv;x.exports.MAXARG_Bx=Dd;x.exports.MAXARG_C=Fv;x.exports.MAXARG_sBx=Ra;x.exports.MAXINDEXRK=Mv;x.exports.NO_REG=Bv;x.exports.OpArgK=K;x.exports.OpArgN=ue;x.exports.OpArgR=je;x.exports.OpArgU=se;x.exports.OpCodes=Nv;x.exports.OpCodesI=Ov;x.exports.POS_A=Gn;x.exports.POS_Ax=io;x.exports.POS_B=lo;x.exports.POS_Bx=xs;x.exports.POS_C=Ss;x.exports.POS_OP=Gt;x.exports.RKASK=qv;x.exports.SETARG_A=Xv;x.exports.SETARG_Ax=$v;x.exports.SETARG_B=zv;x.exports.SETARG_Bx=Ld;x.exports.SETARG_C=Zv;x.exports.SETARG_sBx=tT;x.exports.SET_OPCODE=Hv;x.exports.SIZE_A=As;x.exports.SIZE_Ax=ao;x.exports.SIZE_B=Dn;x.exports.SIZE_Bx=bs;x.exports.SIZE_C=Bn;x.exports.SIZE_OP=sr;x.exports.fullins=rr;x.exports.getBMode=wv;x.exports.getCMode=Iv;x.exports.getOpMode=Cv;x.exports.iABC=U;x.exports.iABx=Ta;x.exports.iAsBx=oo;x.exports.iAx=Bd;x.exports.testAMode=Vv;x.exports.testTMode=Pv});var vs=P((Oq,Q)=>{"use strict";var{LUA_MASKLINE:aT,LUA_MASKCOUNT:lT,LUA_MULTRET:iT,constant_types:{LUA_TBOOLEAN:cT,LUA_TLCF:uT,LUA_TLIGHTUSERDATA:pT,LUA_TLNGSTR:Wd,LUA_TNIL:fT,LUA_TNUMBER:zd,LUA_TNUMFLT:dT,LUA_TNUMINT:hT,LUA_TSHRSTR:Jd,LUA_TTABLE:Zd,LUA_TUSERDATA:gT},to_luastring:et}=he(),{INDEXK:Yd,ISK:Qd,LFIELDS_PER_FLUSH:mT,OpCodesI:{OP_ADD:$d,OP_BAND:eh,OP_BNOT:th,OP_BOR:nh,OP_BXOR:sh,OP_CALL:ji,OP_CLOSURE:_T,OP_CONCAT:rh,OP_DIV:oh,OP_EQ:ah,OP_EXTRAARG:Li,OP_FORLOOP:bT,OP_FORPREP:xT,OP_GETTABLE:lh,OP_GETTABUP:ih,OP_GETUPVAL:AT,OP_IDIV:ch,OP_JMP:uh,OP_LE:Xi,OP_LEN:ph,OP_LOADBOOL:ST,OP_LOADK:kT,OP_LOADKX:ET,OP_LOADNIL:vT,OP_LT:fh,OP_MOD:dh,OP_MOVE:TT,OP_MUL:hh,OP_NEWTABLE:RT,OP_NOT:yT,OP_POW:gh,OP_RETURN:NT,OP_SELF:mh,OP_SETLIST:OT,OP_SETTABLE:CT,OP_SETTABUP:wT,OP_SETUPVAL:IT,OP_SHL:_h,OP_SHR:bh,OP_SUB:xh,OP_TAILCALL:VT,OP_TEST:PT,OP_TESTSET:UT,OP_TFORCALL:Ah,OP_TFORLOOP:Wi,OP_UNM:Sh,OP_VARARG:KT}}=ks(),{LUA_MAXINTEGER:FT,LUA_MININTEGER:MT,lua_numbertointeger:BT}=Ye(),{lua_assert:Nt,luai_nummod:DT}=$e(),L=ct(),J=ut(),Na=Rs(),Ln=cn(),{luaS_bless:GT,luaS_eqlngstr:qT,luaS_hashlongstr:Hd}=Bt(),Ne=Ot(),A=Ts(),Es=Dt(),Ue=un(),LT=function(e){let t=e.ci,n=t.l_base,s=t.l_code[t.l_savedpc-1],r=s.opcode;switch(r){case $d:case xh:case hh:case oh:case ch:case eh:case nh:case sh:case _h:case bh:case dh:case gh:case Sh:case th:case ph:case ih:case lh:case mh:{J.setobjs2s(e,n+s.A,e.top-1),delete e.stack[--e.top];break}case Xi:case fh:case ah:{let o=!e.stack[e.top-1].l_isfalse();delete e.stack[--e.top],t.callstatus&Ln.CIST_LEQ&&(Nt(r===Xi),t.callstatus^=Ln.CIST_LEQ,o=!o),Nt(t.l_code[t.l_savedpc].opcode===uh),o!==!!s.A&&t.l_savedpc++;break}case rh:{let o=e.top-1,a=s.B,l=o-1-(n+a);J.setobjs2s(e,o-2,o),l>1&&(e.top=o-1,Qi(e,l)),J.setobjs2s(e,t.l_base+s.A,e.top-1),Ne.adjust_top(e,t.top);break}case Ah:{Nt(t.l_code[t.l_savedpc].opcode===Wi),Ne.adjust_top(e,t.top);break}case ji:{s.C-1>=0&&Ne.adjust_top(e,t.top);break}}},jd=function(e,t,n){return t+n.A},qn=function(e,t,n){return t+n.B},Pe=function(e,t,n,s){return Qd(s.B)?n[Yd(s.B)]:e.stack[t+s.B]},ge=function(e,t,n,s){return Qd(s.C)?n[Yd(s.C)]:e.stack[t+s.C]},HT=function(e){let t=e.ci;t.callstatus|=Ln.CIST_FRESH;e:for(;;){Nt(t===e.ci);let n=t.func.value,s=n.p.k,r=t.l_base,o=t.l_code[t.l_savedpc++];e.hookmask&(aT|lT)&&Ue.luaG_traceexec(e);let a=jd(e,r,o);switch(o.opcode){case TT:{J.setobjs2s(e,a,qn(e,r,o));break}case kT:{let i=s[o.Bx];J.setobj2s(e,a,i);break}case ET:{Nt(t.l_code[t.l_savedpc].opcode===Li);let i=s[t.l_code[t.l_savedpc++].Ax];J.setobj2s(e,a,i);break}case ST:{e.stack[a].setbvalue(o.B!==0),o.C!==0&&t.l_savedpc++;break}case vT:{for(let i=0;i<=o.B;i++)e.stack[a+i].setnilvalue();break}case AT:{let i=o.B;J.setobj2s(e,a,n.upvals[i]);break}case ih:{let i=n.upvals[o.B],u=ge(e,r,s,o);ya(e,i,u,a);break}case lh:{let i=e.stack[qn(e,r,o)],u=ge(e,r,s,o);ya(e,i,u,a);break}case wT:{let i=n.upvals[o.A],u=Pe(e,r,s,o),c=ge(e,r,s,o);zi(e,i,u,c);break}case IT:{n.upvals[o.B].setfrom(e.stack[a]);break}case CT:{let i=e.stack[a],u=Pe(e,r,s,o),c=ge(e,r,s,o);zi(e,i,u,c);break}case RT:{e.stack[a].sethvalue(Es.luaH_new(e));break}case mh:{let i=qn(e,r,o),u=ge(e,r,s,o);J.setobjs2s(e,a+1,i),ya(e,e.stack[i],u,a);break}case $d:{let i=Pe(e,r,s,o),u=ge(e,r,s,o),c,f;i.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(L.add(i.value,u.value)):(c=me(i))!==!1&&(f=me(u))!==!1?e.stack[a].setfltvalue(c+f):A.luaT_trybinTM(e,i,u,e.stack[a],A.TMS.TM_ADD);break}case xh:{let i=Pe(e,r,s,o),u=ge(e,r,s,o),c,f;i.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(L.sub(i.value,u.value)):(c=me(i))!==!1&&(f=me(u))!==!1?e.stack[a].setfltvalue(c-f):A.luaT_trybinTM(e,i,u,e.stack[a],A.TMS.TM_SUB);break}case hh:{let i=Pe(e,r,s,o),u=ge(e,r,s,o),c,f;i.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(L.mul(i.value,u.value)):(c=me(i))!==!1&&(f=me(u))!==!1?e.stack[a].setfltvalue(c*f):A.luaT_trybinTM(e,i,u,e.stack[a],A.TMS.TM_MUL);break}case dh:{let i=Pe(e,r,s,o),u=ge(e,r,s,o),c,f;if(i.ttisinteger()&&u.ttisinteger()){let _=L.imod(i.value,u.value);_==="divzero"&&Ue.luaG_runerror(e,et("attempt to perform 'n%%0'")),e.stack[a].setivalue(_)}else(c=me(i))!==!1&&(f=me(u))!==!1?e.stack[a].setfltvalue(DT(e,c,f)):A.luaT_trybinTM(e,i,u,e.stack[a],A.TMS.TM_MOD);break}case gh:{let i=Pe(e,r,s,o),u=ge(e,r,s,o),c,f;(c=me(i))!==!1&&(f=me(u))!==!1?e.stack[a].setfltvalue(Math.pow(c,f)):A.luaT_trybinTM(e,i,u,e.stack[a],A.TMS.TM_POW);break}case oh:{let i=Pe(e,r,s,o),u=ge(e,r,s,o),c,f;(c=me(i))!==!1&&(f=me(u))!==!1?e.stack[a].setfltvalue(c/f):A.luaT_trybinTM(e,i,u,e.stack[a],A.TMS.TM_DIV);break}case ch:{let i=Pe(e,r,s,o),u=ge(e,r,s,o),c,f;if(i.ttisinteger()&&u.ttisinteger()){let _=L.idiv(i.value,u.value);_==="divzero"?Ue.luaG_runerror(e,et("attempt to divide by zero")):_==="overflow"&&Ue.luaG_runerror(e,et("integer overflow")),e.stack[a].setivalue(_)}else(c=me(i))!==!1&&(f=me(u))!==!1?e.stack[a].setfltvalue(Math.floor(c/f)):A.luaT_trybinTM(e,i,u,e.stack[a],A.TMS.TM_IDIV);break}case eh:{let i=Pe(e,r,s,o),u=ge(e,r,s,o),c,f;(c=yt(i))!==!1&&(f=yt(u))!==!1?e.stack[a].setivalue(L.band(c,f)):A.luaT_trybinTM(e,i,u,e.stack[a],A.TMS.TM_BAND);break}case nh:{let i=Pe(e,r,s,o),u=ge(e,r,s,o),c,f;(c=yt(i))!==!1&&(f=yt(u))!==!1?e.stack[a].setivalue(L.bor(c,f)):A.luaT_trybinTM(e,i,u,e.stack[a],A.TMS.TM_BOR);break}case sh:{let i=Pe(e,r,s,o),u=ge(e,r,s,o),c,f;(c=yt(i))!==!1&&(f=yt(u))!==!1?e.stack[a].setivalue(L.bxor(c,f)):A.luaT_trybinTM(e,i,u,e.stack[a],A.TMS.TM_BXOR);break}case _h:{let i=Pe(e,r,s,o),u=ge(e,r,s,o),c,f;(c=yt(i))!==!1&&(f=yt(u))!==!1?e.stack[a].setivalue(L.shiftl(c,f)):A.luaT_trybinTM(e,i,u,e.stack[a],A.TMS.TM_SHL);break}case bh:{let i=Pe(e,r,s,o),u=ge(e,r,s,o),c,f;(c=yt(i))!==!1&&(f=yt(u))!==!1?e.stack[a].setivalue(L.shiftr(c,f)):A.luaT_trybinTM(e,i,u,e.stack[a],A.TMS.TM_SHR);break}case Sh:{let i=e.stack[qn(e,r,o)],u;i.ttisinteger()?e.stack[a].setivalue(L.neg(i.value)):(u=me(i))!==!1?e.stack[a].setfltvalue(-u):A.luaT_trybinTM(e,i,i,e.stack[a],A.TMS.TM_UNM);break}case th:{let i=e.stack[qn(e,r,o)];i.ttisinteger()?e.stack[a].setivalue(L.bnot(i.value)):A.luaT_trybinTM(e,i,i,e.stack[a],A.TMS.TM_BNOT);break}case yT:{let i=e.stack[qn(e,r,o)];e.stack[a].setbvalue(i.l_isfalse());break}case ph:{Rh(e,e.stack[a],e.stack[qn(e,r,o)]);break}case rh:{let i=o.B,u=o.C;e.top=r+u+1,Qi(e,u-i+1);let c=r+i;J.setobjs2s(e,a,c),Ne.adjust_top(e,t.top);break}case uh:{kh(e,t,o,0);break}case ah:{Ji(e,Pe(e,r,s,o),ge(e,r,s,o))!==o.A?t.l_savedpc++:fo(e,t);break}case fh:{Eh(e,Pe(e,r,s,o),ge(e,r,s,o))!==o.A?t.l_savedpc++:fo(e,t);break}case Xi:{vh(e,Pe(e,r,s,o),ge(e,r,s,o))!==o.A?t.l_savedpc++:fo(e,t);break}case PT:{(o.C?e.stack[a].l_isfalse():!e.stack[a].l_isfalse())?t.l_savedpc++:fo(e,t);break}case UT:{let i=qn(e,r,o),u=e.stack[i];(o.C?u.l_isfalse():!u.l_isfalse())?t.l_savedpc++:(J.setobjs2s(e,a,i),fo(e,t));break}case ji:{let i=o.B,u=o.C-1;if(i!==0&&Ne.adjust_top(e,a+i),Ne.luaD_precall(e,a,u))u>=0&&Ne.adjust_top(e,t.top);else{t=e.ci;continue e}break}case VT:{let i=o.B;if(i!==0&&Ne.adjust_top(e,a+i),!Ne.luaD_precall(e,a,iT)){let u=e.ci,c=u.previous,f=u.func,_=u.funcOff,H=c.funcOff,E=u.l_base+f.value.p.numparams;n.p.p.length>0&&Na.luaF_close(e,c.l_base);for(let X=0;_+X<E;X++)J.setobjs2s(e,H+X,_+X);c.l_base=H+(u.l_base-_),c.top=H+(e.top-_),Ne.adjust_top(e,c.top),c.l_code=u.l_code,c.l_savedpc=u.l_savedpc,c.callstatus|=Ln.CIST_TAIL,c.next=null,t=e.ci=c,Nt(e.top===c.l_base+e.stack[H].value.p.maxstacksize);continue e}break}case NT:{n.p.p.length>0&&Na.luaF_close(e,r);let i=Ne.luaD_poscall(e,t,a,o.B!==0?o.B-1:e.top-a);if(t.callstatus&Ln.CIST_FRESH)return;t=e.ci,i&&Ne.adjust_top(e,t.top),Nt(t.callstatus&Ln.CIST_LUA),Nt(t.l_code[t.l_savedpc-1].opcode===ji);continue e}case bT:{if(e.stack[a].ttisinteger()){let i=e.stack[a+2].value,u=L.add(e.stack[a].value,i),c=e.stack[a+1].value;(L.lt(0,i)?L.le(u,c):L.le(c,u))&&(t.l_savedpc+=o.sBx,e.stack[a].chgivalue(u),e.stack[a+3].setivalue(u))}else{let i=e.stack[a+2].value,u=e.stack[a].value+i,c=e.stack[a+1].value;(0<i?u<=c:c<=u)&&(t.l_savedpc+=o.sBx,e.stack[a].chgfltvalue(u),e.stack[a+3].setfltvalue(u))}break}case xT:{let i=e.stack[a],u=e.stack[a+1],c=e.stack[a+2],f;if(i.ttisinteger()&&c.ttisinteger()&&(f=XT(u,c.value))){let _=f.stopnow?0:i.value;u.value=f.ilimit,i.value=L.sub(_,c.value)}else{let _,H,E;(_=me(u))===!1&&Ue.luaG_runerror(e,et("'for' limit must be a number",!0)),e.stack[a+1].setfltvalue(_),(H=me(c))===!1&&Ue.luaG_runerror(e,et("'for' step must be a number",!0)),e.stack[a+2].setfltvalue(H),(E=me(i))===!1&&Ue.luaG_runerror(e,et("'for' initial value must be a number",!0)),e.stack[a].setfltvalue(E-H)}t.l_savedpc+=o.sBx;break}case Ah:{let i=a+3;J.setobjs2s(e,i+2,a+2),J.setobjs2s(e,i+1,a+1),J.setobjs2s(e,i,a),Ne.adjust_top(e,i+3),Ne.luaD_call(e,i,o.C),Ne.adjust_top(e,t.top),o=t.l_code[t.l_savedpc++],a=jd(e,r,o),Nt(o.opcode===Wi)}case Wi:{e.stack[a+1].ttisnil()||(J.setobjs2s(e,a,a+1),t.l_savedpc+=o.sBx);break}case OT:{let i=o.B,u=o.C;i===0&&(i=e.top-a-1),u===0&&(Nt(t.l_code[t.l_savedpc].opcode===Li),u=t.l_code[t.l_savedpc++].Ax);let c=e.stack[a].value,f=(u-1)*mT+i;for(;i>0;i--)Es.luaH_setint(c,f--,e.stack[a+i]);Ne.adjust_top(e,t.top);break}case _T:{let i=n.p.p[o.Bx],u=r1(i,n.upvals,e.stack,r);u===null?o1(e,i,n.upvals,r,a):e.stack[a].setclLvalue(u);break}case KT:{let i=o.B-1,u=r-t.funcOff-n.p.numparams-1,c;for(u<0&&(u=0),i<0&&(i=u,Ne.luaD_checkstack(e,u),Ne.adjust_top(e,a+u)),c=0;c<i&&c<u;c++)J.setobjs2s(e,a+c,r-u+c);for(;c<i;c++)e.stack[a+c].setnilvalue();break}case Li:throw Error("invalid opcode")}}},kh=function(e,t,n,s){let r=n.A;r!==0&&Na.luaF_close(e,t.l_base+r-1),t.l_savedpc+=n.sBx+s},fo=function(e,t){kh(e,t,t.l_code[t.l_savedpc],1)},Eh=function(e,t,n){if(t.ttisnumber()&&n.ttisnumber())return WT(t,n)?1:0;if(t.ttisstring()&&n.ttisstring())return Th(t.tsvalue(),n.tsvalue())<0?1:0;{let s=A.luaT_callorderTM(e,t,n,A.TMS.TM_LT);return s===null&&Ue.luaG_ordererror(e,t,n),s?1:0}},vh=function(e,t,n){let s;return t.ttisnumber()&&n.ttisnumber()?zT(t,n)?1:0:t.ttisstring()&&n.ttisstring()?Th(t.tsvalue(),n.tsvalue())<=0?1:0:(s=A.luaT_callorderTM(e,t,n,A.TMS.TM_LE),s!==null?s?1:0:(e.ci.callstatus|=Ln.CIST_LEQ,s=A.luaT_callorderTM(e,n,t,A.TMS.TM_LT),e.ci.callstatus^=Ln.CIST_LEQ,s===null&&Ue.luaG_ordererror(e,t,n),s?0:1))},Ji=function(e,t,n){if(t.ttype()!==n.ttype())return t.ttnov()!==n.ttnov()||t.ttnov()!==zd?0:L.eq(t.value,n.value)?1:0;let s;switch(t.ttype()){case fT:return 1;case cT:return t.value==n.value?1:0;case pT:case hT:return L.eq(t.value,n.value)?1:0;case dT:case uT:return t.value===n.value?1:0;case Jd:case Wd:return qT(t.tsvalue(),n.tsvalue())?1:0;case gT:case Zd:if(t.value===n.value)return 1;if(e===null)return 0;s=A.fasttm(e,t.value.metatable,A.TMS.TM_EQ),s===null&&(s=A.fasttm(e,n.value.metatable,A.TMS.TM_EQ));break;default:return t.value===n.value?1:0}if(s===null)return 0;let r=new J.TValue;return A.luaT_callTM(e,s,t,n,r,1),r.l_isfalse()?0:1},jT=function(e,t){return Ji(null,e,t)},XT=function(e,t){let n=!1,s=Oa(e,t<0?2:1);if(s===!1){let r=me(e);if(r===!1)return!1;0<r?(s=FT,t<0&&(n=!0)):(s=MT,t>=0&&(n=!0))}return{stopnow:n,ilimit:s}},Oa=function(e,t){if(e.ttisfloat()){let n=e.value,s=Math.floor(n);if(n!==s){if(t===0)return!1;t>1&&(s+=1)}return BT(s)}else{if(e.ttisinteger())return e.value;if(Yi(e)){let n=new J.TValue;if(J.luaO_str2num(e.svalue(),n)===e.vslen()+1)return Oa(n,t)}}return!1},yt=function(e){return e.ttisinteger()?e.value:Oa(e,0)},me=function(e){if(e.ttnov()===zd)return e.ttisinteger()?L.toFloat(e.value):e.value;if(Yi(e)){let t=new J.TValue;if(J.luaO_str2num(e.svalue(),t)===e.vslen()+1)return t.ttisinteger()?L.toFloat(t.value):t.value}return!1},WT=function(e,t){return typeof e.value=="bigint"||typeof t.value=="bigint"?L.lt(e.value,t.value):e.value<t.value},zT=function(e,t){return typeof e.value=="bigint"||typeof t.value=="bigint"?L.le(e.value,t.value):e.value<=t.value},Th=function(e,t){let n=Hd(e),s=Hd(t);return n===s?0:n<s?-1:1},Rh=function(e,t,n){let s;switch(n.ttype()){case Zd:{let r=n.value;if(s=A.fasttm(e,r.metatable,A.TMS.TM_LEN),s!==null)break;t.setivalue(Es.luaH_getn(r));return}case Jd:case Wd:t.setivalue(n.vslen());return;default:{s=A.luaT_gettmbyobj(e,n,A.TMS.TM_LEN),s.ttisnil()&&Ue.luaG_typeerror(e,n,et("get length of",!0));break}}A.luaT_callTM(e,s,n,n,t,1)},JT=function(e,t){return L.mul(e,t)},ZT=function(e,t,n){let s=L.idiv(t,n);return s==="divzero"?Ue.luaG_runerror(e,et("attempt to divide by zero")):s==="overflow"&&Ue.luaG_runerror(e,et("integer overflow")),s},YT=function(e,t,n){let s=L.imod(t,n);return s==="divzero"&&Ue.luaG_runerror(e,et("attempt to perform 'n%%0'")),s},QT=function(e,t){return L.band(e,t)},$T=function(e,t){return L.bor(e,t)},e1=function(e,t){return L.bxor(e,t)},t1=function(e){return L.bnot(e)},n1=function(e,t){return L.shiftl(e,t)},s1=function(e,t){return L.shiftr(e,t)},r1=function(e,t,n,s){let r=e.cache;if(r!==null){let o=e.upvalues,a=o.length;for(let l=0;l<a;l++){let i=o[l].instack?n[s+o[l].idx]:t[o[l].idx];if(r.upvals[l]!==i)return null}}return r},o1=function(e,t,n,s,r){let o=t.upvalues.length,a=t.upvalues,l=new J.LClosure(e,o);l.p=t,e.stack[r].setclLvalue(l);for(let i=0;i<o;i++)a[i].instack?l.upvals[i]=Na.luaF_findupval(e,s+a[i].idx):l.upvals[i]=n[a[i].idx];t.cache=l},Zi=function(e){return e.ttisnumber()},Yi=function(e){return e.ttisstring()},Hi=function(e,t){let n=e.stack[t];return n.ttisstring()?!0:Zi(n)?(J.luaO_tostring(e,n),!0):!1},Xd=function(e){return e.ttisstring()&&e.vslen()===0},a1=function(e,t,n,s){let r=0;do{let o=e.stack[t-n],a=o.vslen(),l=o.svalue();s.set(l,r),r+=a}while(--n>0)},Qi=function(e,t){Nt(t>=2);do{let n=e.top,s=2;if(!(e.stack[n-2].ttisstring()||Zi(e.stack[n-2]))||!Hi(e,n-1))A.luaT_trybinTM(e,e.stack[n-2],e.stack[n-1],e.stack[n-2],A.TMS.TM_CONCAT);else if(Xd(e.stack[n-1]))Hi(e,n-2);else if(Xd(e.stack[n-2]))J.setobjs2s(e,n-2,n-1);else{let r=e.stack[n-1].vslen();for(s=1;s<t&&Hi(e,n-s-1);s++){let l=e.stack[n-s-1].vslen();r+=l}let o=new Uint8Array(r);a1(e,n,s,o);let a=GT(e,o);J.setsvalue2s(e,n-s,a)}for(t-=s-1;e.top>n-(s-1);)delete e.stack[--e.top]}while(t>1)},yh=2e3,ya=function(e,t,n,s){for(let r=0;r<yh;r++){let o;if(!t.ttistable())o=A.luaT_gettmbyobj(e,t,A.TMS.TM_INDEX),o.ttisnil()&&Ue.luaG_typeerror(e,t,et("index",!0));else{let a=Es.luaH_get(e,t.value,n);if(a.ttisnil()){if(o=A.fasttm(e,t.value.metatable,A.TMS.TM_INDEX),o===null){e.stack[s].setnilvalue();return}}else{J.setobj2s(e,s,a);return}}if(o.ttisfunction()){A.luaT_callTM(e,o,t,n,e.stack[s],1);return}t=o}Ue.luaG_runerror(e,et("'__index' chain too long; possible loop",!0))},zi=function(e,t,n,s){for(let r=0;r<yh;r++){let o;if(t.ttistable()){let a=t.value;if(!Es.luaH_get(e,a,n).ttisnil()||(o=A.fasttm(e,a.metatable,A.TMS.TM_NEWINDEX))===null){Es.luaH_setfrom(e,a,n,s),Es.invalidateTMcache(a);return}}else(o=A.luaT_gettmbyobj(e,t,A.TMS.TM_NEWINDEX)).ttisnil()&&Ue.luaG_typeerror(e,t,et("index",!0));if(o.ttisfunction()){A.luaT_callTM(e,o,t,n,s,0);return}t=o}Ue.luaG_runerror(e,et("'__newindex' chain too long; possible loop",!0))};Q.exports.cvt2str=Zi;Q.exports.cvt2num=Yi;Q.exports.luaV_gettable=ya;Q.exports.luaV_concat=Qi;Q.exports.luaV_div=ZT;Q.exports.luaV_equalobj=Ji;Q.exports.luaV_execute=HT;Q.exports.luaV_finishOp=LT;Q.exports.luaV_imul=JT;Q.exports.luaV_lessequal=vh;Q.exports.luaV_lessthan=Eh;Q.exports.luaV_mod=YT;Q.exports.luaV_objlen=Rh;Q.exports.luaV_rawequalobj=jT;Q.exports.luaV_shiftl=n1;Q.exports.luaV_shiftr=s1;Q.exports.luaV_band=QT;Q.exports.luaV_bor=$T;Q.exports.luaV_bxor=e1;Q.exports.luaV_bnot=t1;Q.exports.luaV_tointeger=Oa;Q.exports.settable=zi;Q.exports.tointeger=yt;Q.exports.tonumber=me});var Ts=P((Cq,Et)=>{"use strict";var{constant_types:{LUA_TTABLE:l1,LUA_TUSERDATA:i1},to_luastring:W}=he(),{lua_assert:c1}=$e(),or=ut(),Nh=Ot(),u1=cn(),{luaS_bless:p1,luaS_new:te}=Bt(),ec=Dt(),Ca=un(),Oh=vs(),f1=["no value","nil","boolean","userdata","number","string","table","function","userdata","thread","proto"].map(e=>W(e)),Ch=function(e){return f1[e+1]},G={TM_INDEX:0,TM_NEWINDEX:1,TM_GC:2,TM_MODE:3,TM_LEN:4,TM_EQ:5,TM_ADD:6,TM_SUB:7,TM_MUL:8,TM_MOD:9,TM_POW:10,TM_DIV:11,TM_IDIV:12,TM_BAND:13,TM_BOR:14,TM_BXOR:15,TM_SHL:16,TM_SHR:17,TM_UNM:18,TM_BNOT:19,TM_LT:20,TM_LE:21,TM_CONCAT:22,TM_CALL:23,TM_N:24},d1=function(e){e.l_G.tmname[G.TM_INDEX]=new te(e,W("__index",!0)),e.l_G.tmname[G.TM_NEWINDEX]=new te(e,W("__newindex",!0)),e.l_G.tmname[G.TM_GC]=new te(e,W("__gc",!0)),e.l_G.tmname[G.TM_MODE]=new te(e,W("__mode",!0)),e.l_G.tmname[G.TM_LEN]=new te(e,W("__len",!0)),e.l_G.tmname[G.TM_EQ]=new te(e,W("__eq",!0)),e.l_G.tmname[G.TM_ADD]=new te(e,W("__add",!0)),e.l_G.tmname[G.TM_SUB]=new te(e,W("__sub",!0)),e.l_G.tmname[G.TM_MUL]=new te(e,W("__mul",!0)),e.l_G.tmname[G.TM_MOD]=new te(e,W("__mod",!0)),e.l_G.tmname[G.TM_POW]=new te(e,W("__pow",!0)),e.l_G.tmname[G.TM_DIV]=new te(e,W("__div",!0)),e.l_G.tmname[G.TM_IDIV]=new te(e,W("__idiv",!0)),e.l_G.tmname[G.TM_BAND]=new te(e,W("__band",!0)),e.l_G.tmname[G.TM_BOR]=new te(e,W("__bor",!0)),e.l_G.tmname[G.TM_BXOR]=new te(e,W("__bxor",!0)),e.l_G.tmname[G.TM_SHL]=new te(e,W("__shl",!0)),e.l_G.tmname[G.TM_SHR]=new te(e,W("__shr",!0)),e.l_G.tmname[G.TM_UNM]=new te(e,W("__unm",!0)),e.l_G.tmname[G.TM_BNOT]=new te(e,W("__bnot",!0)),e.l_G.tmname[G.TM_LT]=new te(e,W("__lt",!0)),e.l_G.tmname[G.TM_LE]=new te(e,W("__le",!0)),e.l_G.tmname[G.TM_CONCAT]=new te(e,W("__concat",!0)),e.l_G.tmname[G.TM_CALL]=new te(e,W("__call",!0))},h1=W("__name",!0),g1=function(e,t){let n;if(t.ttistable()&&(n=t.value.metatable)!==null||t.ttisfulluserdata()&&(n=t.value.metatable)!==null){let s=ec.luaH_getstr(n,p1(e,h1));if(s.ttisstring())return s.svalue()}return Ch(t.ttnov())},wh=function(e,t,n,s,r,o){let a=e.top;if(or.pushobj2s(e,t),or.pushobj2s(e,n),or.pushobj2s(e,s),o||or.pushobj2s(e,r),e.ci.callstatus&u1.CIST_LUA?Nh.luaD_call(e,a,o):Nh.luaD_callnoyield(e,a,o),o){let l=e.stack[e.top-1];delete e.stack[--e.top],r.setfrom(l)}},tc=function(e,t,n,s,r){let o=$i(e,t,r);return o.ttisnil()&&(o=$i(e,n,r)),o.ttisnil()?!1:(wh(e,o,t,n,s,1),!0)},m1=function(e,t,n,s,r){if(!tc(e,t,n,s,r))switch(r){case G.TM_CONCAT:return Ca.luaG_concaterror(e,t,n);case G.TM_BAND:case G.TM_BOR:case G.TM_BXOR:case G.TM_SHL:case G.TM_SHR:case G.TM_BNOT:{let o=Oh.tonumber(t),a=Oh.tonumber(n);return o!==!1&&a!==!1?Ca.luaG_tointerror(e,t,n):Ca.luaG_opinterror(e,t,n,W("perform bitwise operation on",!0))}default:return Ca.luaG_opinterror(e,t,n,W("perform arithmetic on",!0))}},_1=function(e,t,n,s){let r=new or.TValue;return tc(e,t,n,r,s)?!r.l_isfalse():null},b1=function(e,t,n){return t===null||t.flags&1<<n?null:Ih(t,n,e.l_G.tmname[n])},Ih=function(e,t,n){let s=ec.luaH_getstr(e,n);return c1(t<=G.TM_EQ),s.ttisnil()?(e.flags|=1<<t,null):s},$i=function(e,t,n){let s;switch(t.ttnov()){case l1:case i1:s=t.value.metatable;break;default:s=e.l_G.mt[t.ttnov()]}return s?ec.luaH_getstr(s,e.l_G.tmname[n]):or.luaO_nilobject};Et.exports.fasttm=b1;Et.exports.TMS=G;Et.exports.luaT_callTM=wh;Et.exports.luaT_callbinTM=tc;Et.exports.luaT_trybinTM=m1;Et.exports.luaT_callorderTM=_1;Et.exports.luaT_gettm=Ih;Et.exports.luaT_gettmbyobj=$i;Et.exports.luaT_init=d1;Et.exports.luaT_objtypename=g1;Et.exports.ttypename=Ch});var cn=P((wq,Ae)=>{"use strict";var{LUA_MINSTACK:Ph,LUA_RIDX_GLOBALS:x1,LUA_RIDX_MAINTHREAD:A1,constant_types:{LUA_NUMTAGS:S1,LUA_TNIL:Uh,LUA_TTABLE:k1,LUA_TTHREAD:Kh},thread_status:{LUA_OK:Fh}}=he(),ho=ut(),E1=Ot(),Mh=_o(),wa=Dt(),Bh=Ts(),Dh=5,Vh=2*Ph,go=class{constructor(){this.func=null,this.funcOff=NaN,this.top=NaN,this.previous=null,this.next=null,this.l_base=NaN,this.l_code=null,this.l_savedpc=NaN,this.c_k=null,this.c_old_errfunc=null,this.c_ctx=null,this.nresults=NaN,this.callstatus=NaN}},mo=class{constructor(t){this.id=t.id_counter++,this.base_ci=new go,this.top=NaN,this.stack_last=NaN,this.oldpc=NaN,this.l_G=t,this.stack=null,this.ci=null,this.errorJmp=null,this.nCcalls=0,this.hook=null,this.hookmask=0,this.basehookcount=0,this.allowhook=1,this.hookcount=this.basehookcount,this.nny=1,this.status=Fh,this.errfunc=0}},nc=class{constructor(){this.id_counter=1,this.ids=new WeakMap,this.mainthread=null,this.l_registry=new ho.TValue(Uh,null),this.panic=null,this.atnativeerror=null,this.version=null,this.tmname=new Array(Bh.TMS.TM_N),this.mt=new Array(S1)}},v1=function(e){let t=new go;return e.ci.next=t,t.previous=e.ci,t.next=null,e.ci=t,t},Gh=function(e){let t=e.ci;t.next=null},qh=function(e,t){e.stack=new Array(Vh),e.top=0,e.stack_last=Vh-Dh;let n=e.base_ci;n.next=n.previous=null,n.callstatus=0,n.funcOff=e.top,n.func=e.stack[e.top],e.stack[e.top++]=new ho.TValue(Uh,null),n.top=e.top+Ph,e.ci=n},Lh=function(e){e.ci=e.base_ci,Gh(e),e.stack=null},T1=function(e,t){let n=wa.luaH_new(e);t.l_registry.sethvalue(n),wa.luaH_setint(n,A1,new ho.TValue(Kh,e)),wa.luaH_setint(n,x1,new ho.TValue(k1,wa.luaH_new(e)))},R1=function(e){let t=e.l_G;qh(e,e),T1(e,t),Bh.luaT_init(e),t.version=Mh.lua_version(null)},y1=function(e){let t=e.l_G,n=new mo(t);return e.stack[e.top]=new ho.TValue(Kh,n),Mh.api_incr_top(e),n.hookmask=e.hookmask,n.basehookcount=e.basehookcount,n.hook=e.hook,n.hookcount=n.basehookcount,qh(n,e),n},N1=function(e,t){Lh(t)},O1=function(){let e=new nc,t=new mo(e);return e.mainthread=t,E1.luaD_rawrunprotected(t,R1,null)!==Fh&&(t=null),t},C1=function(e){Lh(e)},w1=function(e){e=e.l_G.mainthread,C1(e)};Ae.exports.lua_State=mo;Ae.exports.CallInfo=go;Ae.exports.CIST_OAH=1;Ae.exports.CIST_LUA=2;Ae.exports.CIST_HOOKED=4;Ae.exports.CIST_FRESH=8;Ae.exports.CIST_YPCALL=16;Ae.exports.CIST_TAIL=32;Ae.exports.CIST_HOOKYIELD=64;Ae.exports.CIST_LEQ=128;Ae.exports.CIST_FIN=256;Ae.exports.EXTRA_STACK=Dh;Ae.exports.lua_close=w1;Ae.exports.lua_newstate=O1;Ae.exports.lua_newthread=y1;Ae.exports.luaE_extendCI=v1;Ae.exports.luaE_freeCI=Gh;Ae.exports.luaE_freethread=N1});var ut=P((Pq,$)=>{"use strict";var{LUA_OPADD:dc,LUA_OPBAND:tg,LUA_OPBNOT:ng,LUA_OPBOR:sg,LUA_OPBXOR:rg,LUA_OPDIV:og,LUA_OPIDIV:ag,LUA_OPMOD:lg,LUA_OPMUL:ig,LUA_OPPOW:cg,LUA_OPSHL:ug,LUA_OPSHR:pg,LUA_OPSUB:fg,LUA_OPUNM:dg,constant_types:{LUA_NUMTAGS:hg,LUA_TBOOLEAN:Hh,LUA_TCCL:jh,LUA_TFUNCTION:Xh,LUA_TLCF:Wh,LUA_TLCL:zh,LUA_TLIGHTUSERDATA:Jh,LUA_TLNGSTR:lc,LUA_TNIL:bo,LUA_TNUMBER:I1,LUA_TNUMFLT:sc,LUA_TNUMINT:rc,LUA_TSHRSTR:V1,LUA_TSTRING:P1,LUA_TTABLE:Zh,LUA_TTHREAD:Yh,LUA_TUSERDATA:Qh},from_userstring:U1,luastring_indexOf:ic,luastring_of:K1,to_jsstring:gg,to_luastring:_e}=he(),{lisdigit:Pa,lisprint:F1,lisspace:Ua,lisxdigit:mg}=Ui(),Ia=un(),Va=Ot(),M1=cn(),{luaS_bless:B1,luaS_new:D1}=Bt(),G1=Dt(),{LUA_COMPAT_FLOATSTRING:q1,LUA_MAXINTEGER:Iq,ldexp:L1,lua_integer2str:H1,lua_number2str:j1}=Ye(),ys=vs(),{MAX_INT:Vq,luai_nummod:X1,lua_assert:Ns}=$e(),Xe=ct(),$h=Ts(),W1=hg,cc=hg+1,Hn=class{constructor(t,n){this.type=t,this.value=n}ttype(){return this.type&63}ttnov(){return this.type&15}checktag(t){return this.type===t}checktype(t){return this.ttnov()===t}ttisnumber(){return this.checktype(I1)}ttisfloat(){return this.checktag(sc)}ttisinteger(){return this.checktag(rc)}ttisnil(){return this.checktag(bo)}ttisboolean(){return this.checktag(Hh)}ttislightuserdata(){return this.checktag(Jh)}ttisstring(){return this.checktype(P1)}ttisshrstring(){return this.checktag(V1)}ttislngstring(){return this.checktag(lc)}ttistable(){return this.checktag(Zh)}ttisfunction(){return this.checktype(Xh)}ttisclosure(){return(this.type&31)===Xh}ttisCclosure(){return this.checktag(jh)}ttisLclosure(){return this.checktag(zh)}ttislcf(){return this.checktag(Wh)}ttisfulluserdata(){return this.checktag(Qh)}ttisthread(){return this.checktag(Yh)}ttisdeadkey(){return this.checktag(cc)}l_isfalse(){return this.ttisnil()||this.ttisboolean()&&this.value===!1}setfltvalue(t){this.type=sc,this.value=t}chgfltvalue(t){Ns(this.type==sc),this.value=t}setivalue(t){this.type=rc,this.value=t}chgivalue(t){Ns(this.type==rc),this.value=t}setnilvalue(){this.type=bo,this.value=null}setfvalue(t){this.type=Wh,this.value=t}setpvalue(t){this.type=Jh,this.value=t}setbvalue(t){this.type=Hh,this.value=t}setsvalue(t){this.type=lc,this.value=t}setuvalue(t){this.type=Qh,this.value=t}setthvalue(t){this.type=Yh,this.value=t}setclLvalue(t){this.type=zh,this.value=t}setclCvalue(t){this.type=jh,this.value=t}sethvalue(t){this.type=Zh,this.value=t}setdeadvalue(){this.type=cc,this.value=null}setfrom(t){this.type=t.type,this.value=t.value}tsvalue(){return Ns(this.ttisstring()),this.value}svalue(){return this.tsvalue().getstr()}vslen(){return this.tsvalue().tsslen()}jsstring(t,n){return gg(this.svalue(),t,n,!0)}},z1=function(e,t){e.stack[e.top++]=new Hn(t.type,t.value)},J1=function(e,t){e.stack[e.top++]=new Hn(lc,t)},Z1=function(e,t,n){e.stack[t].setfrom(e.stack[n])},Y1=function(e,t,n){e.stack[t].setfrom(n)},_g=function(e,t,n){e.stack[t].setsvalue(n)},bg=new Hn(bo,null);Object.freeze(bg);$.exports.luaO_nilobject=bg;var Ka=class{constructor(t,n){this.id=t.l_G.id_counter++,this.p=null,this.nupvalues=n,this.upvals=new Array(n)}},Fa=class{constructor(t,n,s){for(this.id=t.l_G.id_counter++,this.f=n,this.nupvalues=s,this.upvalue=new Array(s);s--;)this.upvalue[s]=new Hn(bo,null)}},Ma=class{constructor(t,n){this.id=t.l_G.id_counter++,this.metatable=null,this.uservalue=new Hn(bo,null),this.len=n,this.data=Object.create(null)}},uc=class{constructor(){this.varname=null,this.startpc=NaN,this.endpc=NaN}},ar=_e("..."),oc=_e('[string "'),ac=_e('"]'),Q1=function(e,t){let n=e.length,s;if(e[0]===61)n<t?(s=new Uint8Array(n-1),s.set(e.subarray(1))):(s=new Uint8Array(t),s.set(e.subarray(1,t+1)));else if(e[0]===64)n<=t?(s=new Uint8Array(n-1),s.set(e.subarray(1))):(s=new Uint8Array(t),s.set(ar),t-=ar.length,s.set(e.subarray(n-t),ar.length));else{s=new Uint8Array(t);let r=ic(e,10);s.set(oc);let o=oc.length;t-=oc.length+ar.length+ac.length,n<t&&r===-1?(s.set(e,o),o+=e.length):(r!==-1&&(n=r),n>t&&(n=t),s.set(e.subarray(0,n),o),o+=n,s.set(ar,o),o+=ar.length),s.set(ac,o),o+=ac.length,s=s.subarray(0,o)}return s},hc=function(e){return Pa(e)?e-48:(e&223)-55},lr=8,xg=function(e,t){let n=1;if(Ns(t<=1114111),t<128)e[lr-1]=t;else{let s=63;do e[lr-n++]=128|t&63,t>>=6,s>>=1;while(t>s);e[lr-n]=~s<<1|t}return n},$1=30,eR=function(e){let t=0,n=0,s=0,r=0,o=0,a,l=!1;for(;Ua(e[t]);)t++;if(((a=e[t]===45)||e[t]===43)&&t++,!(e[t]===48&&(e[t+1]===120||e[t+1]===88)))return null;for(t+=2;;t++)if(e[t]===46){if(l)break;l=!0}else if(mg(e[t]))s===0&&e[t]===48?r++:++s<=$1?n=n*16+hc(e[t]):o++,l&&o--;else break;if(r+s===0)return null;if(o*=4,e[t]===112||e[t]===80){let i=0,u;if(t++,((u=e[t]===45)||e[t]===43)&&t++,!Pa(e[t]))return null;for(;Pa(e[t]);)i=i*10+e[t++]-48;u&&(i=-i),o+=i}return a&&(n=-n),{n:L1(n,o),i:t}},tR=function(e){try{e=gg(e)}catch{return null}let t=/^[\t\v\f \n\r]*[+-]?(?:[0-9]+\.?[0-9]*|\.[0-9]*)(?:[eE][+-]?[0-9]+)?/.exec(e);if(!t)return null;let n=parseFloat(t[0]);return isNaN(n)?null:{n,i:t[0].length}},nR=function(e,t){let n=t==="x"?eR(e):tR(e);if(n===null)return null;for(;Ua(e[n.i]);)n.i++;return n.i===e.length||e[n.i]===0?n:null},sR=[46,120,88,110,78],rR={46:".",120:"x",88:"x",110:"n",78:"n"},oR=function(e){let t=e.length,n=0;for(let o=0;o<t;o++){let a=e[o];if(sR.indexOf(a)!==-1){n=a;break}}let s=rR[n];return s==="n"?null:nR(e,s)},aR=function(e){let t=0,n=!0,s;for(;Ua(e[t]);)t++;((s=e[t]===45)||e[t]===43)&&t++;let r=0n;if(e[t]===48&&(e[t+1]===120||e[t+1]===88))for(t+=2;t<e.length&&mg(e[t]);t++)r=r*16n+BigInt(hc(e[t])),n=!1;else for(;t<e.length&&Pa(e[t]);t++)r=r*10n+BigInt(e[t]-48),n=!1;if(s&&(r=-r),r>Xe.MAX_INT64||r<Xe.MIN_INT64)return null;for(;t<e.length&&Ua(e[t]);)t++;return n||t!==e.length&&e[t]!==0?null:{n:Xe.shrink(r),i:t}},lR=function(e,t){let n=aR(e);return n!==null?(t.setivalue(n.n),n.i+1):(n=oR(e),n!==null?(t.setfltvalue(n.n),n.i+1):0)},pc=function(e,t){let n;if(t.ttisinteger())n=_e(H1(t.value));else{let s=j1(t.value);!q1&&/^[-0123456789]+$/.test(s)&&(s+=".0"),n=_e(s)}t.setsvalue(B1(e,n))},tt=function(e,t){Va.luaD_inctop(e),_g(e,e.top-1,D1(e,t))},Ag=function(e,t,n){let s=0,r=0,o=0,a;for(;a=ic(t,37,r),a!=-1;){switch(tt(e,t.subarray(r,a)),t[a+1]){case 115:{let l=n[o++];if(l===null)l=_e("(null)",!0);else{l=U1(l);let i=ic(l,0);i!==-1&&(l=l.subarray(0,i))}tt(e,l);break}case 99:{let l=n[o++];F1(l)?tt(e,K1(l)):Sg(e,_e("<\\%d>",!0),l);break}case 100:case 73:Va.luaD_inctop(e),e.stack[e.top-1].setivalue(n[o++]),pc(e,e.stack[e.top-1]);break;case 102:Va.luaD_inctop(e),e.stack[e.top-1].setfltvalue(n[o++]),pc(e,e.stack[e.top-1]);break;case 112:{let l=n[o++];if(l instanceof M1.lua_State||l instanceof G1.Table||l instanceof Ma||l instanceof Ka||l instanceof Fa)tt(e,_e("0x"+l.id.toString(16)));else switch(typeof l){case"undefined":tt(e,_e("undefined"));break;case"number":tt(e,_e("Number("+l+")"));break;case"string":tt(e,_e("String("+JSON.stringify(l)+")"));break;case"boolean":tt(e,_e(l?"Boolean(true)":"Boolean(false)"));break;case"object":if(l===null){tt(e,_e("null"));break}case"function":{let i=e.l_G.ids.get(l);i||(i=e.l_G.id_counter++,e.l_G.ids.set(l,i)),tt(e,_e("0x"+i.toString(16)));break}default:tt(e,_e("<id NYI>"))}break}case 85:{let l=new Uint8Array(lr),i=xg(l,n[o++]);tt(e,l.subarray(lr-i));break}case 37:tt(e,_e("%",!0));break;default:Ia.luaG_runerror(e,_e("invalid option '%%%c' to 'lua_pushfstring'"),t[a+1])}s+=2,r=a+2}return Va.luaD_checkstack(e,1),tt(e,t.subarray(r)),s>0&&ys.luaV_concat(e,s+1),e.stack[e.top-1].svalue()},Sg=function(e,t,...n){return Ag(e,t,n)},iR=function(e){let t=0;if(e<8)return e;for(;e>=128;)e=e+15>>4,t+=4;for(;e>=16;)e=e+1>>1,t++;return t+1<<3|e-8},eg=function(e,t,n,s){switch(t){case dc:return Xe.add(n,s);case fg:return Xe.sub(n,s);case ig:return Xe.mul(n,s);case lg:{let r=Xe.imod(n,s);return r==="divzero"&&Ia.luaG_runerror(e,_e("attempt to perform 'n%%0'")),r}case ag:{let r=Xe.idiv(n,s);return r==="divzero"?Ia.luaG_runerror(e,_e("attempt to divide by zero")):r==="overflow"&&Ia.luaG_runerror(e,_e("integer overflow")),r}case tg:return Xe.band(n,s);case sg:return Xe.bor(n,s);case rg:return Xe.bxor(n,s);case ug:return Xe.shiftl(n,s);case pg:return Xe.shiftr(n,s);case dg:return Xe.neg(n);case ng:return Xe.bnot(n);default:Ns(0)}},fc=function(e,t,n,s){switch(t){case dc:return n+s;case fg:return n-s;case ig:return n*s;case og:return n/s;case cg:return Math.pow(n,s);case ag:return Math.floor(n/s);case dg:return-n;case lg:return X1(e,n,s);default:Ns(0)}},cR=function(e,t,n,s,r){let o=typeof r=="number"?e.stack[r]:r;switch(t){case tg:case sg:case rg:case ug:case pg:case ng:{let a,l;if((a=ys.tointeger(n))!==!1&&(l=ys.tointeger(s))!==!1){o.setivalue(eg(e,t,a,l));return}else break}case og:case cg:{let a,l;if((a=ys.tonumber(n))!==!1&&(l=ys.tonumber(s))!==!1){o.setfltvalue(fc(e,t,a,l));return}else break}default:{let a,l;if(n.ttisinteger()&&s.ttisinteger()){o.setivalue(eg(e,t,n.value,s.value));return}else if((a=ys.tonumber(n))!==!1&&(l=ys.tonumber(s))!==!1){o.setfltvalue(fc(e,t,a,l));return}else break}}Ns(e!==null),$h.luaT_trybinTM(e,n,s,r,t-dc+$h.TMS.TM_ADD)};$.exports.CClosure=Fa;$.exports.LClosure=Ka;$.exports.LUA_TDEADKEY=cc;$.exports.LUA_TPROTO=W1;$.exports.LocVar=uc;$.exports.TValue=Hn;$.exports.Udata=Ma;$.exports.UTF8BUFFSZ=lr;$.exports.luaO_arith=cR;$.exports.luaO_chunkid=Q1;$.exports.luaO_hexavalue=hc;$.exports.luaO_int2fb=iR;$.exports.luaO_pushfstring=Sg;$.exports.luaO_pushvfstring=Ag;$.exports.luaO_str2num=lR;$.exports.luaO_tostring=pc;$.exports.luaO_utf8esc=xg;$.exports.numarith=fc;$.exports.pushobj2s=z1;$.exports.pushsvalue2s=J1;$.exports.setobjs2s=Z1;$.exports.setobj2s=Y1;$.exports.setsvalue2s=_g});var Rs=P((Uq,jn)=>{"use strict";var{constant_types:{LUA_TNIL:uR}}=he(),mc=ut(),gc=class{constructor(t){this.id=t.l_G.id_counter++,this.k=[],this.p=[],this.code=[],this.cache=null,this.lineinfo=[],this.upvalues=[],this.numparams=0,this.is_vararg=!1,this.maxstacksize=0,this.locvars=[],this.linedefined=0,this.lastlinedefined=0,this.source=null}},pR=function(e,t){return new mc.LClosure(e,t)},fR=function(e,t){return e.stack[t]},dR=function(e,t){for(let n=t;n<e.top;n++){let s=e.stack[n];e.stack[n]=new mc.TValue(s.type,s.value)}},hR=function(e,t){for(let n=0;n<t.nupvalues;n++)t.upvals[n]=new mc.TValue(uR,null)},gR=function(e,t,n){for(let s=0;s<e.locvars.length&&e.locvars[s].startpc<=n;s++)if(n<e.locvars[s].endpc&&(t--,t===0))return e.locvars[s].varname.getstr();return null};jn.exports.MAXUPVAL=255;jn.exports.Proto=gc;jn.exports.luaF_findupval=fR;jn.exports.luaF_close=dR;jn.exports.luaF_getlocalname=gR;jn.exports.luaF_initupvals=hR;jn.exports.luaF_newLclosure=pR});var xo=P((Kq,qt)=>{"use strict";var{lua_assert:kg}=$e(),_c=class{constructor(){this.buffer=null,this.n=0}},mR=function(e){return e.buffer.subarray(0,e.n)},_R=function(e,t){e.n-=t},bR=function(e){e.n=0},xR=function(e,t,n){let s=new Uint8Array(n);if(t.buffer){let r=t.n<n?t.n:n;r>0&&s.set(t.buffer.subarray(0,r))}t.buffer=s},bc=class{constructor(t,n,s){this.L=t,kg(typeof n=="function","ZIO requires a reader"),this.reader=n,this.data=s,this.n=0,this.buffer=null,this.off=0}zgetc(){return this.n-- >0?this.buffer[this.off++]:xc(this)}},Ba=-1,xc=function(e){let t=e.reader(e.L,e.data);if(t===null)return Ba;kg(t instanceof Uint8Array,"Should only load binary of array of bytes");let n=t.length;return n===0?Ba:(e.buffer=t,e.off=0,e.n=n-1,e.buffer[e.off++])},AR=function(e,t,n,s){for(;s;){if(e.n===0){if(xc(e)===Ba)return s;e.n++,e.off--}let r=s<=e.n?s:e.n;for(let o=0;o<r;o++)t[n++]=e.buffer[e.off++];e.n-=r,e.n===0&&(e.buffer=null),s-=r}return 0};qt.exports.EOZ=Ba;qt.exports.luaZ_buffer=mR;qt.exports.luaZ_buffremove=_R;qt.exports.luaZ_fill=xc;qt.exports.luaZ_read=AR;qt.exports.luaZ_resetbuffer=bR;qt.exports.luaZ_resizebuffer=xR;qt.exports.MBuffer=_c;qt.exports.ZIO=bc});var Xa=P((Fq,ft)=>{"use strict";var{constant_types:{LUA_TBOOLEAN:SR,LUA_TLNGSTR:kR},thread_status:{LUA_ERRSYNTAX:ER},to_luastring:Se}=he(),{LUA_MINBUFFER:vR,MAX_INT:Tg,lua_assert:cr}=$e(),TR=un(),RR=Ot(),{lisdigit:La,lislalnum:yR,lislalpha:NR,lisspace:OR,lisxdigit:vc}=Ui(),pt=ut(),{luaS_bless:CR,luaS_hash:wR,luaS_hashlongstr:Tc,luaS_new:IR}=Bt(),VR=Dt(),{EOZ:ur,luaZ_buffer:Rc,luaZ_buffremove:Ao,luaZ_resetbuffer:Da,luaZ_resizebuffer:Rg}=xo(),I=257,yg=Se("_ENV",!0),PR=I,UR=I+1,KR=I+2,FR=I+3,MR=I+4,BR=I+5,DR=I+6,GR=I+7,qR=I+8,LR=I+9,HR=I+10,jR=I+11,XR=I+12,WR=I+13,zR=I+14,JR=I+15,ZR=I+16,YR=I+17,QR=I+18,$R=I+19,e0=I+20,t0=I+21,Ng=I+22,Og=I+23,Cg=I+24,wg=I+25,Ig=I+26,Vg=I+27,Pg=I+28,Ug=I+29,Kg=I+30,Fg=I+31,pn=I+32,Ga=I+33,yc=I+34,Nc=I+35,Os=I+36,n0={TK_AND:PR,TK_BREAK:UR,TK_DO:KR,TK_ELSE:FR,TK_ELSEIF:MR,TK_END:BR,TK_FALSE:DR,TK_FOR:GR,TK_FUNCTION:qR,TK_GOTO:LR,TK_IF:HR,TK_IN:jR,TK_LOCAL:XR,TK_NIL:WR,TK_NOT:zR,TK_OR:JR,TK_REPEAT:ZR,TK_RETURN:YR,TK_THEN:QR,TK_TRUE:$R,TK_UNTIL:e0,TK_WHILE:t0,TK_IDIV:Ng,TK_CONCAT:Og,TK_DOTS:Cg,TK_EQ:wg,TK_GE:Ig,TK_LE:Vg,TK_NE:Pg,TK_SHL:Ug,TK_SHR:Kg,TK_DBCOLON:Fg,TK_EOS:pn,TK_FLT:Ga,TK_INT:yc,TK_NAME:Nc,TK_STRING:Os},Oc=["and","break","do","else","elseif","end","false","for","function","goto","if","in","local","nil","not","or","repeat","return","then","true","until","while","//","..","...","==",">=","<=","~=","<<",">>","::","<eof>","<number>","<integer>","<name>","<string>"].map((e,t)=>Se(e)),So=class{constructor(){this.r=NaN,this.i=NaN,this.ts=null}},qa=class{constructor(){this.token=NaN,this.seminfo=new So}},Sc=class{constructor(){this.current=NaN,this.linenumber=NaN,this.lastline=NaN,this.t=new qa,this.lookahead=new qa,this.fs=null,this.L=null,this.z=null,this.buff=null,this.h=null,this.dyd=null,this.source=null,this.envn=null}},Ha=function(e,t){let n=e.buff;if(n.n+1>n.buffer.length){BigInt(n.buffer.length)>=Tg/2n&&fn(e,Se("lexical element too long",!0),0);let s=n.buffer.length*2;Rg(e.L,n,s)}n.buffer[n.n++]=t<0?255+t+1:t},Mg=function(e,t){if(t<I)return pt.luaO_pushfstring(e.L,Se("'%c'",!0),t);{let n=Oc[t-I];return t<pn?pt.luaO_pushfstring(e.L,Se("'%s'",!0),n):n}},ko=function(e){return e.current===10||e.current===13},be=function(e){e.current=e.z.zgetc()},pe=function(e){Ha(e,e.current),be(e)},s0=new pt.TValue(SR,!0),ja=function(e,t){let n=e.L,s=IR(n,t),r=e.h.strong.get(Tc(s));if(r)s=r.key.tsvalue();else{let o=new pt.TValue(kR,s);VR.luaH_setfrom(n,e.h,o,s0)}return s},Eo=function(e){let t=e.current;cr(ko(e)),be(e),ko(e)&&e.current!==t&&be(e),++e.linenumber>=Tg&&fn(e,Se("chunk has too many lines",!0),0)},r0=function(e,t,n,s,r){t.t={token:0,seminfo:new So},t.L=e,t.current=r,t.lookahead={token:pn,seminfo:new So},t.z=n,t.fs=null,t.linenumber=1,t.lastline=1,t.source=s,t.envn=CR(e,yg),Rg(e,t.buff,vR)},Lt=function(e,t){return e.current===t?(be(e),!0):!1},Ac=function(e,t){return e.current===t[0].charCodeAt(0)||e.current===t[1].charCodeAt(0)?(pe(e),!0):!1},Eg=function(e,t){let n="Ee",s=e.current;for(cr(La(e.current)),pe(e),s===48&&Ac(e,"xX")&&(n="Pp");;)if(Ac(e,n)&&Ac(e,"-+"),vc(e.current))pe(e);else if(e.current===46)pe(e);else break;let r=new pt.TValue;return pt.luaO_str2num(Rc(e.buff),r)===0&&fn(e,Se("malformed number",!0),Ga),r.ttisinteger()?(t.i=r.value,yc):(cr(r.ttisfloat()),t.r=r.value,Ga)},o0=function(e,t){switch(t){case Nc:case Os:case Ga:case yc:return pt.luaO_pushfstring(e.L,Se("'%s'",!0),Rc(e.buff));default:return Mg(e,t)}},fn=function(e,t,n){t=TR.luaG_addinfo(e.L,t,e.source,e.linenumber),n&&pt.luaO_pushfstring(e.L,Se("%s near %s"),t,o0(e,n)),RR.luaD_throw(e.L,ER)},a0=function(e,t){fn(e,t,e.t.token)},kc=function(e){let t=0,n=e.current;for(cr(n===91||n===93),pe(e);e.current===61;)pe(e),t++;return e.current===n?t:-t-1},vg=function(e,t,n){let s=e.linenumber;pe(e),ko(e)&&Eo(e);let r=!1;for(;!r;)switch(e.current){case ur:{let a=`unfinished long ${t?"string":"comment"} (starting at line ${s})`;fn(e,Se(a),pn);break}case 93:{kc(e)===n&&(pe(e),r=!0);break}case 10:case 13:{Ha(e,10),Eo(e),t||Da(e.buff);break}default:t?pe(e):be(e)}t&&(t.ts=ja(e,e.buff.buffer.subarray(2+n,e.buff.n-(2+n))))},ir=function(e,t,n){t||(e.current!==ur&&pe(e),fn(e,n,Os))},Ec=function(e){return pe(e),ir(e,vc(e.current),Se("hexadecimal digit expected",!0)),pt.luaO_hexavalue(e.current)},l0=function(e){let t=Ec(e);return t=(t<<4)+Ec(e),Ao(e.buff,2),t},i0=function(e){let t=4;pe(e),ir(e,e.current===123,Se("missing '{'",!0));let n=Ec(e);for(pe(e);vc(e.current);)t++,n=(n<<4)+pt.luaO_hexavalue(e.current),ir(e,n<=1114111,Se("UTF-8 value too large",!0)),pe(e);return ir(e,e.current===125,Se("missing '}'",!0)),be(e),Ao(e.buff,t),n},c0=function(e){let t=new Uint8Array(pt.UTF8BUFFSZ),n=pt.luaO_utf8esc(t,i0(e));for(;n>0;n--)Ha(e,t[pt.UTF8BUFFSZ-n])},u0=function(e){let t=0,n;for(n=0;n<3&&La(e.current);n++)t=10*t+e.current-48,pe(e);return ir(e,t<=255,Se("decimal escape too large",!0)),Ao(e.buff,n),t},p0=function(e,t,n){for(pe(e);e.current!==t;)switch(e.current){case ur:fn(e,Se("unfinished string",!0),pn);break;case 10:case 13:fn(e,Se("unfinished string",!0),Os);break;case 92:{pe(e);let s,r;switch(e.current){case 97:r=7,s="read_save";break;case 98:r=8,s="read_save";break;case 102:r=12,s="read_save";break;case 110:r=10,s="read_save";break;case 114:r=13,s="read_save";break;case 116:r=9,s="read_save";break;case 118:r=11,s="read_save";break;case 120:r=l0(e),s="read_save";break;case 117:c0(e),s="no_save";break;case 10:case 13:Eo(e),r=10,s="only_save";break;case 92:case 34:case 39:r=e.current,s="read_save";break;case ur:s="no_save";break;case 122:{for(Ao(e.buff,1),be(e);OR(e.current);)ko(e)?Eo(e):be(e);s="no_save";break}default:{ir(e,La(e.current),Se("invalid escape sequence",!0)),r=u0(e),s="only_save";break}}s==="read_save"&&be(e),(s==="read_save"||s==="only_save")&&(Ao(e.buff,1),Ha(e,r));break}default:pe(e)}pe(e),n.ts=ja(e,e.buff.buffer.subarray(1,e.buff.n-1))},Cc=Object.create(null);Oc.forEach((e,t)=>Cc[wR(e)]=t);var f0=function(e){let t=Cc[Tc(e)];return t!==void 0&&t<=22},Bg=function(e,t){for(Da(e.buff);;)switch(cr(typeof e.current=="number"),e.current){case 10:case 13:{Eo(e);break}case 32:case 12:case 9:case 11:{be(e);break}case 45:{if(be(e),e.current!==45)return 45;if(be(e),e.current===91){let n=kc(e);if(Da(e.buff),n>=0){vg(e,null,n),Da(e.buff);break}}for(;!ko(e)&&e.current!==ur;)be(e);break}case 91:{let n=kc(e);return n>=0?(vg(e,t,n),Os):(n!==-1&&fn(e,Se("invalid long string delimiter",!0),Os),91)}case 61:return be(e),Lt(e,61)?wg:61;case 60:return be(e),Lt(e,61)?Vg:Lt(e,60)?Ug:60;case 62:return be(e),Lt(e,61)?Ig:Lt(e,62)?Kg:62;case 47:return be(e),Lt(e,47)?Ng:47;case 126:return be(e),Lt(e,61)?Pg:126;case 58:return be(e),Lt(e,58)?Fg:58;case 34:case 39:return p0(e,e.current,t),Os;case 46:return pe(e),Lt(e,46)?Lt(e,46)?Cg:Og:La(e.current)?Eg(e,t):46;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return Eg(e,t);case ur:return pn;default:if(NR(e.current)){do pe(e);while(yR(e.current));let n=ja(e,Rc(e.buff));t.ts=n;let s=Cc[Tc(n)];return s!==void 0&&s<=22?s+I:Nc}else{let n=e.current;return be(e),n}}},d0=function(e){e.lastline=e.linenumber,e.lookahead.token!==pn?(e.t.token=e.lookahead.token,e.t.seminfo.i=e.lookahead.seminfo.i,e.t.seminfo.r=e.lookahead.seminfo.r,e.t.seminfo.ts=e.lookahead.seminfo.ts,e.lookahead.token=pn):e.t.token=Bg(e,e.t.seminfo)},h0=function(e){return cr(e.lookahead.token===pn),e.lookahead.token=Bg(e,e.lookahead.seminfo),e.lookahead.token};ft.exports.FIRST_RESERVED=I;ft.exports.LUA_ENV=yg;ft.exports.LexState=Sc;ft.exports.RESERVED=n0;ft.exports.isreserved=f0;ft.exports.luaX_lookahead=h0;ft.exports.luaX_newstring=ja;ft.exports.luaX_next=d0;ft.exports.luaX_setinput=r0;ft.exports.luaX_syntaxerror=a0;ft.exports.luaX_token2str=Mg;ft.exports.luaX_tokens=Oc});var fm=P((Mq,C)=>{"use strict";var{LUA_MULTRET:Vc,LUA_OPADD:g0,LUA_OPBAND:m0,LUA_OPBNOT:_0,LUA_OPBOR:b0,LUA_OPBXOR:x0,LUA_OPDIV:A0,LUA_OPIDIV:S0,LUA_OPMOD:k0,LUA_OPSHL:E0,LUA_OPSHR:v0,LUA_OPUNM:T0,constant_types:{LUA_TBOOLEAN:R0,LUA_TLIGHTUSERDATA:y0,LUA_TLNGSTR:N0,LUA_TNIL:O0,LUA_TNUMFLT:Wg,LUA_TNUMINT:Pc,LUA_TTABLE:C0},to_luastring:Uc}=he(),{lua_assert:re}=$e(),Kc=Xa(),Fc=ut(),k=ks(),z=Lc(),Dg=Dt(),Gg=vs(),B=k.OpCodesI,Ht=Fc.TValue,w0=255,Z=-1,w={OPR_ADD:0,OPR_SUB:1,OPR_MUL:2,OPR_MOD:3,OPR_POW:4,OPR_DIV:5,OPR_IDIV:6,OPR_BAND:7,OPR_BOR:8,OPR_BXOR:9,OPR_SHL:10,OPR_SHR:11,OPR_CONCAT:12,OPR_EQ:13,OPR_LT:14,OPR_LE:15,OPR_NE:16,OPR_GT:17,OPR_GE:18,OPR_AND:19,OPR_OR:20,OPR_NOBINOPR:21},vo={OPR_MINUS:0,OPR_BNOT:1,OPR_NOT:2,OPR_LEN:3,OPR_NOUNOPR:4},fr=function(e){return e.t!==e.f},wc=function(e,t){let n=z.expkind;if(fr(e))return!1;switch(e.k){case n.VKINT:return t?new Ht(Pc,e.u.ival):!0;case n.VKFLT:return t?new Ht(Wg,e.u.nval):!0;default:return!1}},zg=function(e,t,n){let s,r=t+n-1;if(e.pc>e.lasttarget&&(s=e.f.code[e.pc-1],s.opcode===B.OP_LOADNIL)){let o=s.A,a=o+s.B;if(o<=t&&t<=a+1||t<=o&&o<=r+1){o<t&&(t=o),a>r&&(r=a),k.SETARG_A(s,t),k.SETARG_B(s,r-t);return}}Ke(e,B.OP_LOADNIL,t,n-1,0)},dn=function(e,t){return e.f.code[t.u.info]},pr=function(e,t){let n=e.f.code[t].sBx;return n===Z?Z:t+1+n},Ic=function(e,t,n){let s=e.f.code[t],r=n-(t+1);re(n!==Z),Math.abs(r)>k.MAXARG_sBx&&Kc.luaX_syntaxerror(e.ls,Uc("control structure too long",!0)),k.SETARG_sBx(s,r)},Xn=function(e,t,n){if(n===Z)return t;if(t===Z)t=n;else{let s=t,r=pr(e,s);for(;r!==Z;)s=r,r=pr(e,s);Ic(e,s,n)}return t},Za=function(e){let t=e.jpc;e.jpc=Z;let n=$g(e,B.OP_JMP,0,Z);return n=Xn(e,n,t),n},I0=function(e,t){return Qg(e,Za(e),t)},V0=function(e,t,n){Ke(e,B.OP_RETURN,t,n+1,0)},To=function(e,t,n,s,r){return Ke(e,t,n,s,r),Za(e)},Ya=function(e){return e.lasttarget=e.pc,e.pc},Jg=function(e,t){return t>=1&&k.testTMode(e.f.code[t-1].opcode)?t-1:t},Zg=function(e,t){return e.f.code[Jg(e,t)]},Yg=function(e,t,n){let s=Jg(e,t),r=e.f.code[s];return r.opcode!==B.OP_TESTSET?!1:(n!==k.NO_REG&&n!==r.B?k.SETARG_A(r,n):e.f.code[s]=k.CREATE_ABC(B.OP_TEST,r.B,0,r.C),!0)},qg=function(e,t){for(;t!==Z;t=pr(e,t))Yg(e,t,k.NO_REG)},za=function(e,t,n,s,r){for(;t!==Z;){let o=pr(e,t);Yg(e,t,s)?Ic(e,t,n):Ic(e,t,r),t=o}},P0=function(e){za(e,e.jpc,e.pc,k.NO_REG,e.pc),e.jpc=Z},Ro=function(e,t){Ya(e),e.jpc=Xn(e,e.jpc,t)},Qg=function(e,t,n){n===e.pc?Ro(e,t):(re(n<e.pc),za(e,t,n,k.NO_REG,n))},U0=function(e,t,n){for(n++;t!==Z;t=pr(e,t)){let s=e.f.code[t];re(s.opcode===B.OP_JMP&&(s.A===0||s.A>=n)),k.SETARG_A(s,n)}},Qa=function(e,t){let n=e.f;return P0(e),n.code[e.pc]=t,n.lineinfo[e.pc]=e.ls.lastline,e.pc++},Ke=function(e,t,n,s,r){return re(k.getOpMode(t)===k.iABC),re(k.getBMode(t)!==k.OpArgN||s===0),re(k.getCMode(t)!==k.OpArgN||r===0),re(n<=k.MAXARG_A&&s<=k.MAXARG_B&&r<=k.MAXARG_C),Qa(e,k.CREATE_ABC(t,n,s,r))},Ja=function(e,t,n,s){return re(k.getOpMode(t)===k.iABx||k.getOpMode(t)===k.iAsBx),re(k.getCMode(t)===k.OpArgN),re(n<=k.MAXARG_A&&s<=k.MAXARG_Bx),Qa(e,k.CREATE_ABx(t,n,s))},$g=function(e,t,n,s){return Ja(e,t,n,s+k.MAXARG_sBx)},em=function(e,t){return re(t<=k.MAXARG_Ax),Qa(e,k.CREATE_Ax(B.OP_EXTRAARG,t))},Wa=function(e,t,n){if(n<=k.MAXARG_Bx)return Ja(e,B.OP_LOADK,t,n);{let s=Ja(e,B.OP_LOADKX,t,0);return em(e,n),s}},tm=function(e,t){let n=e.freereg+t;n>e.f.maxstacksize&&(n>=w0&&Kc.luaX_syntaxerror(e.ls,Uc("function or expression needs too many registers",!0)),e.f.maxstacksize=n)},yo=function(e,t){tm(e,t),e.freereg+=t},Cs=function(e,t){!k.ISK(t)&&t>=e.nactvar&&(e.freereg--,re(t===e.freereg))},hn=function(e,t){t.k===z.expkind.VNONRELOC&&Cs(e,t.u.info)},nm=function(e,t,n){let s=t.k===z.expkind.VNONRELOC?t.u.info:-1,r=n.k===z.expkind.VNONRELOC?n.u.info:-1;s>r?(Cs(e,s),Cs(e,r)):(Cs(e,r),Cs(e,s))},No=function(e,t,n){let s=e.f,r=Dg.luaH_get(e.L,e.ls.h,t);if(r.ttisinteger()){let a=r.value;if(a<e.nk&&s.k[a].ttype()===n.ttype()&&s.k[a].value===n.value)return a}let o=e.nk;return Dg.luaH_setfrom(e.L,e.ls.h,t,new Fc.TValue(Pc,o)),s.k[o]=n,e.nk++,o},K0=function(e,t){let n=new Ht(N0,t);return No(e,n,n)},Mc=function(e,t){let n=new Ht(y0,t),s=new Ht(Pc,t);return No(e,n,s)},Bc=function(e,t){let n=new Ht(Wg,t);return No(e,n,n)},Lg=function(e,t){let n=new Ht(R0,t);return No(e,n,n)},F0=function(e){let t=new Ht(O0,null),n=new Ht(C0,e.ls.h);return No(e,n,t)},sm=function(e,t,n){let s=z.expkind;if(t.k===s.VCALL)k.SETARG_C(dn(e,t),n+1);else if(t.k===s.VVARARG){let r=dn(e,t);k.SETARG_B(r,n+1),k.SETARG_A(r,e.freereg),yo(e,1)}else re(n===Vc)},M0=function(e,t){sm(e,t,Vc)},rm=function(e,t){let n=z.expkind;t.k===n.VCALL?(re(dn(e,t).C===2),t.k=n.VNONRELOC,t.u.info=dn(e,t).A):t.k===n.VVARARG&&(k.SETARG_B(dn(e,t),2),t.k=n.VRELOCABLE)},jt=function(e,t){let n=z.expkind;switch(t.k){case n.VLOCAL:{t.k=n.VNONRELOC;break}case n.VUPVAL:{t.u.info=Ke(e,B.OP_GETUPVAL,0,t.u.info,0),t.k=n.VRELOCABLE;break}case n.VINDEXED:{let s;Cs(e,t.u.ind.idx),t.u.ind.vt===n.VLOCAL?(Cs(e,t.u.ind.t),s=B.OP_GETTABLE):(re(t.u.ind.vt===n.VUPVAL),s=B.OP_GETTABUP),t.u.info=Ke(e,s,0,t.u.ind.t,t.u.ind.idx),t.k=n.VRELOCABLE;break}case n.VVARARG:case n.VCALL:{rm(e,t);break}default:break}},Hg=function(e,t,n,s){return Ya(e),Ke(e,B.OP_LOADBOOL,t,n,s)},om=function(e,t,n){let s=z.expkind;switch(jt(e,t),t.k){case s.VNIL:{zg(e,n,1);break}case s.VFALSE:case s.VTRUE:{Ke(e,B.OP_LOADBOOL,n,t.k===s.VTRUE,0);break}case s.VK:{Wa(e,n,t.u.info);break}case s.VKFLT:{Wa(e,n,Bc(e,t.u.nval));break}case s.VKINT:{Wa(e,n,Mc(e,t.u.ival));break}case s.VRELOCABLE:{let r=dn(e,t);k.SETARG_A(r,n);break}case s.VNONRELOC:{n!==t.u.info&&Ke(e,B.OP_MOVE,n,t.u.info,0);break}default:{re(t.k===s.VJMP);return}}t.u.info=n,t.k=s.VNONRELOC},am=function(e,t){t.k!==z.expkind.VNONRELOC&&(yo(e,1),om(e,t,e.freereg-1))},jg=function(e,t){for(;t!==Z;t=pr(e,t))if(Zg(e,t).opcode!==B.OP_TESTSET)return!0;return!1},Dc=function(e,t,n){let s=z.expkind;if(om(e,t,n),t.k===s.VJMP&&(t.t=Xn(e,t.t,t.u.info)),fr(t)){let r,o=Z,a=Z;if(jg(e,t.t)||jg(e,t.f)){let l=t.k===s.VJMP?Z:Za(e);o=Hg(e,n,0,1),a=Hg(e,n,1,0),Ro(e,l)}r=Ya(e),za(e,t.f,r,n,o),za(e,t.t,r,n,a)}t.f=t.t=Z,t.u.info=n,t.k=s.VNONRELOC},$a=function(e,t){jt(e,t),hn(e,t),yo(e,1),Dc(e,t,e.freereg-1)},ws=function(e,t){if(jt(e,t),t.k===z.expkind.VNONRELOC){if(!fr(t))return t.u.info;if(t.u.info>=e.nactvar)return Dc(e,t,t.u.info),t.u.info}return $a(e,t),t.u.info},B0=function(e,t){(t.k!==z.expkind.VUPVAL||fr(t))&&ws(e,t)},Gc=function(e,t){fr(t)?ws(e,t):jt(e,t)},gn=function(e,t){let n=z.expkind,s=!1;switch(Gc(e,t),t.k){case n.VTRUE:t.u.info=Lg(e,!0),s=!0;break;case n.VFALSE:t.u.info=Lg(e,!1),s=!0;break;case n.VNIL:t.u.info=F0(e),s=!0;break;case n.VKINT:t.u.info=Mc(e,t.u.ival),s=!0;break;case n.VKFLT:t.u.info=Bc(e,t.u.nval),s=!0;break;case n.VK:s=!0;break;default:break}return s&&(t.k=n.VK,t.u.info<=k.MAXINDEXRK)?k.RKASK(t.u.info):ws(e,t)},D0=function(e,t,n){let s=z.expkind;switch(t.k){case s.VLOCAL:{hn(e,n),Dc(e,n,t.u.info);return}case s.VUPVAL:{let r=ws(e,n);Ke(e,B.OP_SETUPVAL,r,t.u.info,0);break}case s.VINDEXED:{let r=t.u.ind.vt===s.VLOCAL?B.OP_SETTABLE:B.OP_SETTABUP,o=gn(e,n);Ke(e,r,t.u.ind.t,t.u.ind.idx,o);break}}hn(e,n)},G0=function(e,t,n){ws(e,t);let s=t.u.info;hn(e,t),t.u.info=e.freereg,t.k=z.expkind.VNONRELOC,yo(e,2),Ke(e,B.OP_SELF,t.u.info,s,gn(e,n)),hn(e,n)},lm=function(e,t){let n=Zg(e,t.u.info);re(k.testTMode(n.opcode)&&n.opcode!==B.OP_TESTSET&&n.opcode!==B.OP_TEST),k.SETARG_A(n,!n.A)},im=function(e,t,n){if(t.k===z.expkind.VRELOCABLE){let s=dn(e,t);if(s.opcode===B.OP_NOT)return e.pc--,To(e,B.OP_TEST,s.B,0,!n)}return am(e,t),hn(e,t),To(e,B.OP_TESTSET,k.NO_REG,t.u.info,n)},cm=function(e,t){let n=z.expkind,s;switch(jt(e,t),t.k){case n.VJMP:{lm(e,t),s=t.u.info;break}case n.VK:case n.VKFLT:case n.VKINT:case n.VTRUE:{s=Z;break}default:{s=im(e,t,0);break}}t.f=Xn(e,t.f,s),Ro(e,t.t),t.t=Z},um=function(e,t){let n=z.expkind,s;switch(jt(e,t),t.k){case n.VJMP:{s=t.u.info;break}case n.VNIL:case n.VFALSE:{s=Z;break}default:{s=im(e,t,1);break}}t.t=Xn(e,t.t,s),Ro(e,t.f),t.f=Z},q0=function(e,t){let n=z.expkind;switch(jt(e,t),t.k){case n.VNIL:case n.VFALSE:{t.k=n.VTRUE;break}case n.VK:case n.VKFLT:case n.VKINT:case n.VTRUE:{t.k=n.VFALSE;break}case n.VJMP:{lm(e,t);break}case n.VRELOCABLE:case n.VNONRELOC:{am(e,t),hn(e,t),t.u.info=Ke(e,B.OP_NOT,0,t.u.info,0),t.k=n.VRELOCABLE;break}}{let s=t.f;t.f=t.t,t.t=s}qg(e,t.f),qg(e,t.t)},L0=function(e,t,n){let s=z.expkind;re(!fr(t)&&(z.vkisinreg(t.k)||t.k===s.VUPVAL)),t.u.ind.t=t.u.info,t.u.ind.idx=gn(e,n),t.u.ind.vt=t.k===s.VUPVAL?s.VUPVAL:s.VLOCAL,t.k=s.VINDEXED},H0=function(e,t,n){switch(e){case m0:case b0:case x0:case E0:case v0:case _0:return Gg.tointeger(t)!==!1&&Gg.tointeger(n)!==!1;case A0:case S0:case k0:return n.value!==0;default:return 1}},pm=function(e,t,n){let s=z.expkind,r,o;if(!(r=wc(t,!0))||!(o=wc(n,!0))||!H0(e,r,o))return 0;let a=new Ht;if(Fc.luaO_arith(null,e,r,o,a),a.ttisinteger())t.k=s.VKINT,t.u.ival=a.value;else{let l=a.value;if(isNaN(l)||l===0)return!1;t.k=s.VKFLT,t.u.nval=l}return!0},j0=function(e,t,n,s){let r=ws(e,n);hn(e,n),n.u.info=Ke(e,t,0,r,0),n.k=z.expkind.VRELOCABLE,qc(e,s)},Xg=function(e,t,n,s,r){let o=gn(e,s),a=gn(e,n);nm(e,n,s),n.u.info=Ke(e,t,0,a,o),n.k=z.expkind.VRELOCABLE,qc(e,r)},X0=function(e,t,n,s){let r=z.expkind,o;n.k===r.VK?o=k.RKASK(n.u.info):(re(n.k===r.VNONRELOC),o=n.u.info);let a=gn(e,s);switch(nm(e,n,s),t){case w.OPR_NE:{n.u.info=To(e,B.OP_EQ,0,o,a);break}case w.OPR_GT:case w.OPR_GE:{let l=t-w.OPR_NE+B.OP_EQ;n.u.info=To(e,l,1,a,o);break}default:{let l=t-w.OPR_EQ+B.OP_EQ;n.u.info=To(e,l,1,o,a);break}}n.k=r.VJMP},W0=function(e,t,n,s){let r=new z.expdesc;switch(r.k=z.expkind.VKINT,r.u.ival=r.u.nval=r.u.info=0,r.t=Z,r.f=Z,t){case vo.OPR_MINUS:case vo.OPR_BNOT:if(pm(t+T0,n,r))break;case vo.OPR_LEN:j0(e,t+B.OP_UNM,n,s);break;case vo.OPR_NOT:q0(e,n);break}},z0=function(e,t,n){switch(t){case w.OPR_AND:{cm(e,n);break}case w.OPR_OR:{um(e,n);break}case w.OPR_CONCAT:{$a(e,n);break}case w.OPR_ADD:case w.OPR_SUB:case w.OPR_MUL:case w.OPR_DIV:case w.OPR_IDIV:case w.OPR_MOD:case w.OPR_POW:case w.OPR_BAND:case w.OPR_BOR:case w.OPR_BXOR:case w.OPR_SHL:case w.OPR_SHR:{wc(n,!1)||gn(e,n);break}default:{gn(e,n);break}}},J0=function(e,t,n,s,r){let o=z.expkind;switch(t){case w.OPR_AND:{re(n.t===Z),jt(e,s),s.f=Xn(e,s.f,n.f),n.to(s);break}case w.OPR_OR:{re(n.f===Z),jt(e,s),s.t=Xn(e,s.t,n.t),n.to(s);break}case w.OPR_CONCAT:{Gc(e,s);let a=dn(e,s);s.k===o.VRELOCABLE&&a.opcode===B.OP_CONCAT?(re(n.u.info===a.B-1),hn(e,n),k.SETARG_B(a,n.u.info),n.k=o.VRELOCABLE,n.u.info=s.u.info):($a(e,s),Xg(e,B.OP_CONCAT,n,s,r));break}case w.OPR_ADD:case w.OPR_SUB:case w.OPR_MUL:case w.OPR_DIV:case w.OPR_IDIV:case w.OPR_MOD:case w.OPR_POW:case w.OPR_BAND:case w.OPR_BOR:case w.OPR_BXOR:case w.OPR_SHL:case w.OPR_SHR:{pm(t+g0,n,s)||Xg(e,t+B.OP_ADD,n,s,r);break}case w.OPR_EQ:case w.OPR_LT:case w.OPR_LE:case w.OPR_NE:case w.OPR_GT:case w.OPR_GE:{X0(e,t,n,s);break}}return n},qc=function(e,t){e.f.lineinfo[e.pc-1]=t},Z0=function(e,t,n,s){let r=(n-1)/k.LFIELDS_PER_FLUSH+1,o=s===Vc?0:s;re(s!==0&&s<=k.LFIELDS_PER_FLUSH),r<=k.MAXARG_C?Ke(e,B.OP_SETLIST,t,o,r):r<=k.MAXARG_Ax?(Ke(e,B.OP_SETLIST,t,o,0),em(e,r)):Kc.luaX_syntaxerror(e.ls,Uc("constructor too long",!0)),e.freereg=t+1};C.exports.BinOpr=w;C.exports.NO_JUMP=Z;C.exports.UnOpr=vo;C.exports.getinstruction=dn;C.exports.luaK_checkstack=tm;C.exports.luaK_code=Qa;C.exports.luaK_codeABC=Ke;C.exports.luaK_codeABx=Ja;C.exports.luaK_codeAsBx=$g;C.exports.luaK_codek=Wa;C.exports.luaK_concat=Xn;C.exports.luaK_dischargevars=jt;C.exports.luaK_exp2RK=gn;C.exports.luaK_exp2anyreg=ws;C.exports.luaK_exp2anyregup=B0;C.exports.luaK_exp2nextreg=$a;C.exports.luaK_exp2val=Gc;C.exports.luaK_fixline=qc;C.exports.luaK_getlabel=Ya;C.exports.luaK_goiffalse=um;C.exports.luaK_goiftrue=cm;C.exports.luaK_indexed=L0;C.exports.luaK_infix=z0;C.exports.luaK_intK=Mc;C.exports.luaK_jump=Za;C.exports.luaK_jumpto=I0;C.exports.luaK_nil=zg;C.exports.luaK_numberK=Bc;C.exports.luaK_patchclose=U0;C.exports.luaK_patchlist=Qg;C.exports.luaK_patchtohere=Ro;C.exports.luaK_posfix=J0;C.exports.luaK_prefix=W0;C.exports.luaK_reserveregs=yo;C.exports.luaK_ret=V0;C.exports.luaK_self=G0;C.exports.luaK_setlist=Z0;C.exports.luaK_setmultret=M0;C.exports.luaK_setoneret=rm;C.exports.luaK_setreturns=sm;C.exports.luaK_storevar=D0;C.exports.luaK_stringK=K0});var Lc=P((Bq,xr)=>{"use strict";var{LUA_MULTRET:su,to_luastring:ae}=he(),{BinOpr:{OPR_ADD:Y0,OPR_AND:Q0,OPR_BAND:$0,OPR_BOR:ey,OPR_BXOR:ty,OPR_CONCAT:ny,OPR_DIV:sy,OPR_EQ:ry,OPR_GE:oy,OPR_GT:ay,OPR_IDIV:ly,OPR_LE:iy,OPR_LT:cy,OPR_MOD:uy,OPR_MUL:py,OPR_NE:fy,OPR_NOBINOPR:Am,OPR_OR:dy,OPR_POW:hy,OPR_SHL:gy,OPR_SHR:my,OPR_SUB:_y},UnOpr:{OPR_BNOT:by,OPR_LEN:xy,OPR_MINUS:Ay,OPR_NOT:Sy,OPR_NOUNOPR:Sm},NO_JUMP:dr,getinstruction:Xc,luaK_checkstack:ky,luaK_codeABC:mr,luaK_codeABx:Ey,luaK_codeAsBx:Hc,luaK_codek:vy,luaK_concat:Ty,luaK_dischargevars:Ry,luaK_exp2RK:dm,luaK_exp2anyreg:yy,luaK_exp2anyregup:km,luaK_exp2nextreg:Wt,luaK_exp2val:Ny,luaK_fixline:el,luaK_getlabel:ru,luaK_goiffalse:Oy,luaK_goiftrue:Em,luaK_indexed:ou,luaK_infix:Cy,luaK_intK:wy,luaK_jump:Oo,luaK_jumpto:Iy,luaK_nil:Vy,luaK_patchclose:rl,luaK_patchlist:au,luaK_patchtohere:Co,luaK_posfix:Py,luaK_prefix:Uy,luaK_reserveregs:hr,luaK_ret:vm,luaK_self:Ky,luaK_setlist:Wc,luaK_setmultret:lu,luaK_setoneret:Fy,luaK_setreturns:My,luaK_storevar:zc,luaK_stringK:By}=fm(),hm=Ot(),iu=Rs(),O=Xa(),{LUAI_MAXCCALLS:Tm,MAX_INT:Rm,lua_assert:nt}=$e(),Xt=ut(),{OpCodesI:{OP_CALL:Dy,OP_CLOSURE:Gy,OP_FORLOOP:qy,OP_FORPREP:Ly,OP_GETUPVAL:Hy,OP_MOVE:jy,OP_NEWTABLE:Xy,OP_SETTABLE:Wy,OP_TAILCALL:zy,OP_TFORCALL:Jy,OP_TFORLOOP:Zy,OP_VARARG:Yy},LFIELDS_PER_FLUSH:Qy,SETARG_B:$y,SETARG_C:ym,SET_OPCODE:eN}=ks(),{luaS_eqlngstr:tN,luaS_new:nN,luaS_newliteral:Nm}=Bt(),sN=Dt(),Om=iu.Proto,g=O.RESERVED,rN=200,ol=function(e){return e===N.VCALL||e===N.VVARARG},_r=function(e,t){return tN(e,t)},Ct=class{constructor(){this.previous=null,this.firstlabel=NaN,this.firstgoto=NaN,this.nactvar=NaN,this.upval=NaN,this.isloop=NaN}},N={VVOID:0,VNIL:1,VTRUE:2,VFALSE:3,VK:4,VKFLT:5,VKINT:6,VNONRELOC:7,VLOCAL:8,VUPVAL:9,VINDEXED:10,VJMP:11,VRELOCABLE:12,VCALL:13,VVARARG:14},oN=function(e){return N.VLOCAL<=e&&e<=N.VINDEXED},aN=function(e){return e===N.VNONRELOC||e===N.VLOCAL},ee=class{constructor(){this.k=NaN,this.u={ival:NaN,nval:NaN,info:NaN,ind:{idx:NaN,t:NaN,vt:NaN}},this.t=NaN,this.f=NaN}to(t){this.k=t.k,this.u=t.u,this.t=t.t,this.f=t.f}},tl=class{constructor(){this.f=null,this.prev=null,this.ls=null,this.bl=null,this.pc=NaN,this.lasttarget=NaN,this.jpc=NaN,this.nk=NaN,this.np=NaN,this.firstlocal=NaN,this.nlocvars=NaN,this.nactvar=NaN,this.nups=NaN,this.freereg=NaN}},Jc=class{constructor(){this.idx=NaN}},Zc=class{constructor(){this.name=null,this.pc=NaN,this.line=NaN,this.nactvar=NaN}},nl=class{constructor(){this.arr=[],this.n=NaN,this.size=NaN}},Yc=class{constructor(){this.actvar={arr:[],n:NaN,size:NaN},this.gt=new nl,this.label=new nl}},cu=function(e,t){e.t.token=0,O.luaX_syntaxerror(e,t)},Cm=function(e,t){O.luaX_syntaxerror(e,Xt.luaO_pushfstring(e.L,ae("%s expected",!0),O.luaX_token2str(e,t)))},lN=function(e,t,n){let s=e.ls.L,r=e.f.linedefined,o=r===0?ae("main function",!0):Xt.luaO_pushfstring(s,ae("function at line %d",!0),r),a=Xt.luaO_pushfstring(s,ae("too many %s (limit is %d) in %s",!0),n,t,o);O.luaX_syntaxerror(e.ls,a)},br=function(e,t,n,s){t>n&&lN(e,n,s)},We=function(e,t){return e.t.token===t?(O.luaX_next(e),!0):!1},uu=function(e,t){e.t.token!==t&&Cm(e,t)},dt=function(e,t){uu(e,t),O.luaX_next(e)},pu=function(e,t,n){t||O.luaX_syntaxerror(e,n)},xn=function(e,t,n,s){We(e,t)||(s===e.linenumber?Cm(e,t):O.luaX_syntaxerror(e,Xt.luaO_pushfstring(e.L,ae("%s expected (to close %s at line %d)"),O.luaX_token2str(e,t),O.luaX_token2str(e,n),s)))},An=function(e){uu(e,g.TK_NAME);let t=e.t.seminfo.ts;return O.luaX_next(e),t},De=function(e,t,n){e.f=e.t=dr,e.k=t,e.u.info=n},al=function(e,t,n){De(t,N.VK,By(e.fs,n))},fu=function(e,t){al(e,t,An(e))},iN=function(e,t){let n=e.fs,s=n.f;return s.locvars[n.nlocvars]=new Xt.LocVar,s.locvars[n.nlocvars].varname=t,n.nlocvars++},Vs=function(e,t){let n=e.fs,s=e.dyd,r=iN(e,t);br(n,s.actvar.n+1-n.firstlocal,rN,ae("local variables",!0)),s.actvar.arr[s.actvar.n]=new Jc,s.actvar.arr[s.actvar.n].idx=r,s.actvar.n++},Is=function(e,t){Vs(e,O.luaX_newstring(e,ae(t,!0)))},wo=function(e,t){let n=e.ls.dyd.actvar.arr[e.firstlocal+t].idx;return nt(n<e.nlocvars),e.f.locvars[n]},gr=function(e,t){let n=e.fs;for(n.nactvar=n.nactvar+t;t;t--)wo(n,n.nactvar-t).startpc=n.pc},cN=function(e,t){for(e.ls.dyd.actvar.n-=e.nactvar-t;e.nactvar>t;)wo(e,--e.nactvar).endpc=e.pc},uN=function(e,t){let n=e.f.upvalues;for(let s=0;s<e.nups;s++)if(_r(n[s].name,t))return s;return-1},wm=function(e,t,n){let s=e.f;return br(e,e.nups+1,iu.MAXUPVAL,ae("upvalues",!0)),s.upvalues[e.nups]={instack:n.k===N.VLOCAL,idx:n.u.info,name:t},e.nups++},pN=function(e,t){for(let n=e.nactvar-1;n>=0;n--)if(_r(t,wo(e,n).varname))return n;return-1},fN=function(e,t){let n=e.bl;for(;n.nactvar>t;)n=n.previous;n.upval=1},Qc=function(e,t,n,s){if(e===null)De(n,N.VVOID,0);else{let r=pN(e,t);if(r>=0)De(n,N.VLOCAL,r),s||fN(e,r);else{let o=uN(e,t);if(o<0){if(Qc(e.prev,t,n,0),n.k===N.VVOID)return;o=wm(e,t,n)}De(n,N.VUPVAL,o)}}},Im=function(e,t){let n=An(e),s=e.fs;if(Qc(s,n,t,1),t.k===N.VVOID){let r=new ee;Qc(s,e.envn,t,1),nt(t.k!==N.VVOID),al(e,r,n),ou(s,t,r)}},du=function(e,t,n,s){let r=e.fs,o=t-n;if(ol(s.k))o++,o<0&&(o=0),My(r,s,o),o>1&&hr(r,o-1);else if(s.k!==N.VVOID&&Wt(r,s),o>0){let a=r.freereg;hr(r,o),Vy(r,a,o)}n>t&&(e.fs.freereg-=n-t)},Vm=function(e){let t=e.L;++t.nCcalls,br(e.fs,t.nCcalls,Tm,ae("JS levels",!0))},Pm=function(e){return e.L.nCcalls--},Um=function(e,t,n){let s=e.fs,r=e.dyd.gt,o=r.arr[t];if(nt(_r(o.name,n.name)),o.nactvar<n.nactvar){let a=wo(s,o.nactvar).varname,l=Xt.luaO_pushfstring(e.L,ae("<goto %s> at line %d jumps into the scope of local '%s'"),o.name.getstr(),o.line,a.getstr());cu(e,l)}au(s,o.pc,n.pc);for(let a=t;a<r.n-1;a++)r.arr[a]=r.arr[a+1];r.n--},Km=function(e,t){let n=e.fs.bl,s=e.dyd,r=s.gt.arr[t];for(let o=n.firstlabel;o<s.label.n;o++){let a=s.label.arr[o];if(_r(a.name,r.name))return r.nactvar>a.nactvar&&(n.upval||s.label.n>n.firstlabel)&&rl(e.fs,r.pc,a.nactvar),Um(e,t,a),!0}return!1},hu=function(e,t,n,s,r){let o=t.n;return t.arr[o]=new Zc,t.arr[o].name=n,t.arr[o].line=s,t.arr[o].nactvar=e.fs.nactvar,t.arr[o].pc=r,t.n=o+1,o},Fm=function(e,t){let n=e.dyd.gt,s=e.fs.bl.firstgoto;for(;s<n.n;)_r(n.arr[s].name,t.name)?Um(e,s,t):s++},dN=function(e,t){let n=t.firstgoto,s=e.ls.dyd.gt;for(;n<s.n;){let r=s.arr[n];r.nactvar>t.nactvar&&(t.upval&&rl(e,r.pc,t.nactvar),r.nactvar=t.nactvar),Km(e.ls,n)||n++}},mn=function(e,t,n){t.isloop=n,t.nactvar=e.nactvar,t.firstlabel=e.ls.dyd.label.n,t.firstgoto=e.ls.dyd.gt.n,t.upval=0,t.previous=e.bl,e.bl=t,nt(e.freereg===e.nactvar)},hN=function(e){let t=Nm(e.L,"break"),n=hu(e,e.dyd.label,t,0,e.fs.pc);Fm(e,e.dyd.label.arr[n])},gN=function(e,t){let n=O.isreserved(t.name)?"<%s> at line %d not inside a loop":"no visible label '%s' for <goto> at line %d";n=Xt.luaO_pushfstring(e.L,ae(n),t.name.getstr(),t.line),cu(e,n)},mN=function(e){let t=e.L,n=new Om(t),s=e.fs,r=s.f;return r.p[s.np++]=n,n},_N=function(e,t){let n=e.fs.prev;De(t,N.VRELOCABLE,Ey(n,Gy,0,n.np-1)),Wt(n,t)},Mm=function(e,t,n){t.prev=e.fs,t.ls=e,e.fs=t,t.pc=0,t.lasttarget=0,t.jpc=dr,t.freereg=0,t.nk=0,t.np=0,t.nups=0,t.nlocvars=0,t.nactvar=0,t.firstlocal=e.dyd.actvar.n,t.bl=null;let s=t.f;s.source=e.source,s.maxstacksize=2,mn(t,n,!1)},_n=function(e){let t=e.bl,n=e.ls;if(t.previous&&t.upval){let s=Oo(e);rl(e,s,t.nactvar),Co(e,s)}t.isloop&&hN(n),e.bl=t.previous,cN(e,t.nactvar),nt(t.nactvar===e.nactvar),e.freereg=e.nactvar,n.dyd.label.n=t.firstlabel,t.previous?dN(e,t):t.firstgoto<n.dyd.gt.n&&gN(n,n.dyd.gt.arr[t.firstgoto])},Bm=function(e){let t=e.fs;vm(t,0,0),_n(t),nt(t.bl===null),e.fs=t.prev},ll=function(e,t){switch(e.t.token){case g.TK_ELSE:case g.TK_ELSEIF:case g.TK_END:case g.TK_EOS:return!0;case g.TK_UNTIL:return t;default:return!1}},Io=function(e){for(;!ll(e,1);){if(e.t.token===g.TK_RETURN){nu(e);return}nu(e)}},$c=function(e,t){let n=e.fs,s=new ee;km(n,t),O.luaX_next(e),fu(e,s),ou(n,t,s)},Dm=function(e,t){O.luaX_next(e),bn(e,t),Ny(e.fs,t),dt(e,93)},eu=class{constructor(){this.v=new ee,this.t=new ee,this.nh=NaN,this.na=NaN,this.tostore=NaN}},gm=function(e,t){let n=e.fs,s=e.fs.freereg,r=new ee,o=new ee;e.t.token===g.TK_NAME?(br(n,t.nh,Rm,ae("items in a constructor",!0)),fu(e,r)):Dm(e,r),t.nh++,dt(e,61);let a=dm(n,r);bn(e,o),mr(n,Wy,t.t.u.info,a,dm(n,o)),n.freereg=s},bN=function(e,t){t.v.k!==N.VVOID&&(Wt(e,t.v),t.v.k=N.VVOID,t.tostore===Qy&&(Wc(e,t.t.u.info,t.na,t.tostore),t.tostore=0))},xN=function(e,t){t.tostore!==0&&(ol(t.v.k)?(lu(e,t.v),Wc(e,t.t.u.info,t.na,su),t.na--):(t.v.k!==N.VVOID&&Wt(e,t.v),Wc(e,t.t.u.info,t.na,t.tostore)))},mm=function(e,t){bn(e,t.v),br(e.fs,t.na,Rm,ae("items in a constructor",!0)),t.na++,t.tostore++},AN=function(e,t){switch(e.t.token){case g.TK_NAME:{O.luaX_lookahead(e)!==61?mm(e,t):gm(e,t);break}case 91:{gm(e,t);break}default:{mm(e,t);break}}},Gm=function(e,t){let n=e.fs,s=e.linenumber,r=mr(n,Xy,0,0,0),o=new eu;o.na=o.nh=o.tostore=0,o.t=t,De(t,N.VRELOCABLE,r),De(o.v,N.VVOID,0),Wt(e.fs,t),dt(e,123);do{if(nt(o.v.k===N.VVOID||o.tostore>0),e.t.token===125)break;bN(n,o),AN(e,o)}while(We(e,44)||We(e,59));xn(e,125,123,s),xN(n,o),$y(n.f.code[r],Xt.luaO_int2fb(o.na)),ym(n.f.code[r],Xt.luaO_int2fb(o.nh))},SN=function(e){let t=e.fs,n=t.f,s=0;if(n.is_vararg=!1,e.t.token!==41)do switch(e.t.token){case g.TK_NAME:{Vs(e,An(e)),s++;break}case g.TK_DOTS:{O.luaX_next(e),n.is_vararg=!0;break}default:O.luaX_syntaxerror(e,ae("<name> or '...' expected",!0))}while(!n.is_vararg&&We(e,44));gr(e,s),n.numparams=t.nactvar,hr(t,t.nactvar)},gu=function(e,t,n,s){let r=new tl,o=new Ct;r.f=mN(e),r.f.linedefined=s,Mm(e,r,o),dt(e,40),n&&(Is(e,"self"),gr(e,1)),SN(e),dt(e,41),Io(e),r.f.lastlinedefined=e.linenumber,xn(e,g.TK_END,g.TK_FUNCTION,s),_N(e,t),Bm(e)},Vo=function(e,t){let n=1;for(bn(e,t);We(e,44);)Wt(e.fs,t),bn(e,t),n++;return n},_m=function(e,t,n){let s=e.fs,r=new ee;switch(e.t.token){case 40:{O.luaX_next(e),e.t.token===41?r.k=N.VVOID:(Vo(e,r),lu(s,r)),xn(e,41,40,n);break}case 123:{Gm(e,r);break}case g.TK_STRING:{al(e,r,e.t.seminfo.ts),O.luaX_next(e);break}default:O.luaX_syntaxerror(e,ae("function arguments expected",!0))}nt(t.k===N.VNONRELOC);let o,a=t.u.info;ol(r.k)?o=su:(r.k!==N.VVOID&&Wt(s,r),o=s.freereg-(a+1)),De(t,N.VCALL,mr(s,Dy,a,o+1,2)),el(s,n),s.freereg=a+1},kN=function(e,t){switch(e.t.token){case 40:{let n=e.linenumber;O.luaX_next(e),bn(e,t),xn(e,41,40,n),Ry(e.fs,t);return}case g.TK_NAME:{Im(e,t);return}default:O.luaX_syntaxerror(e,ae("unexpected symbol",!0))}},mu=function(e,t){let n=e.fs,s=e.linenumber;for(kN(e,t);;)switch(e.t.token){case 46:{$c(e,t);break}case 91:{let r=new ee;km(n,t),Dm(e,r),ou(n,t,r);break}case 58:{let r=new ee;O.luaX_next(e),fu(e,r),Ky(n,t,r),_m(e,t,s);break}case 40:case g.TK_STRING:case 123:{Wt(n,t),_m(e,t,s);break}default:return}},EN=function(e,t){switch(e.t.token){case g.TK_FLT:{De(t,N.VKFLT,0),t.u.nval=e.t.seminfo.r;break}case g.TK_INT:{De(t,N.VKINT,0),t.u.ival=e.t.seminfo.i;break}case g.TK_STRING:{al(e,t,e.t.seminfo.ts);break}case g.TK_NIL:{De(t,N.VNIL,0);break}case g.TK_TRUE:{De(t,N.VTRUE,0);break}case g.TK_FALSE:{De(t,N.VFALSE,0);break}case g.TK_DOTS:{let n=e.fs;pu(e,n.f.is_vararg,ae("cannot use '...' outside a vararg function",!0)),De(t,N.VVARARG,mr(n,Yy,0,1,0));break}case 123:{Gm(e,t);return}case g.TK_FUNCTION:{O.luaX_next(e),gu(e,t,0,e.linenumber);return}default:{mu(e,t);return}}O.luaX_next(e)},vN=function(e){switch(e){case g.TK_NOT:return Sy;case 45:return Ay;case 126:return by;case 35:return xy;default:return Sm}},TN=function(e){switch(e){case 43:return Y0;case 45:return _y;case 42:return py;case 37:return uy;case 94:return hy;case 47:return sy;case g.TK_IDIV:return ly;case 38:return $0;case 124:return ey;case 126:return ty;case g.TK_SHL:return gy;case g.TK_SHR:return my;case g.TK_CONCAT:return ny;case g.TK_NE:return fy;case g.TK_EQ:return ry;case 60:return cy;case g.TK_LE:return iy;case 62:return ay;case g.TK_GE:return oy;case g.TK_AND:return Q0;case g.TK_OR:return dy;default:return Am}},bm=[{left:10,right:10},{left:10,right:10},{left:11,right:11},{left:11,right:11},{left:14,right:13},{left:11,right:11},{left:11,right:11},{left:6,right:6},{left:4,right:4},{left:5,right:5},{left:7,right:7},{left:7,right:7},{left:9,right:8},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:2,right:2},{left:1,right:1}],RN=12,tu=function(e,t,n){Vm(e);let s=vN(e.t.token);if(s!==Sm){let o=e.linenumber;O.luaX_next(e),tu(e,t,RN),Uy(e.fs,s,t,o)}else EN(e,t);let r=TN(e.t.token);for(;r!==Am&&bm[r].left>n;){let o=new ee,a=e.linenumber;O.luaX_next(e),Cy(e.fs,r,t);let l=tu(e,o,bm[r].right);Py(e.fs,r,t,o,a),r=l}return Pm(e),r},bn=function(e,t){tu(e,t,0)},il=function(e){let t=e.fs,n=new Ct;mn(t,n,0),Io(e),_n(t)},sl=class{constructor(){this.prev=null,this.v=new ee}},yN=function(e,t,n){let s=e.fs,r=s.freereg,o=!1;for(;t;t=t.prev)t.v.k===N.VINDEXED&&(t.v.u.ind.vt===n.k&&t.v.u.ind.t===n.u.info&&(o=!0,t.v.u.ind.vt=N.VLOCAL,t.v.u.ind.t=r),n.k===N.VLOCAL&&t.v.u.ind.idx===n.u.info&&(o=!0,t.v.u.ind.idx=r));if(o){let a=n.k===N.VLOCAL?jy:Hy;mr(s,a,r,n.u.info,0),hr(s,1)}},qm=function(e,t,n){let s=new ee;if(pu(e,oN(t.v.k),ae("syntax error",!0)),We(e,44)){let r=new sl;r.prev=t,mu(e,r.v),r.v.k!==N.VINDEXED&&yN(e,t,r.v),br(e.fs,n+e.L.nCcalls,Tm,ae("JS levels",!0)),qm(e,r,n+1)}else{dt(e,61);let r=Vo(e,s);if(r!==n)du(e,n,r,s);else{Fy(e.fs,s),zc(e.fs,t.v,s);return}}De(s,N.VNONRELOC,e.fs.freereg-1),zc(e.fs,t.v,s)},Lm=function(e){let t=new ee;return bn(e,t),t.k===N.VNIL&&(t.k=N.VFALSE),Em(e.fs,t),t.f},Hm=function(e,t){let n=e.linenumber,s;We(e,g.TK_GOTO)?s=An(e):(O.luaX_next(e),s=Nm(e.L,"break"));let r=hu(e,e.dyd.gt,s,n,t);Km(e,r)},NN=function(e,t,n){for(let s=e.bl.firstlabel;s<t.n;s++)if(_r(n,t.arr[s].name)){let r=Xt.luaO_pushfstring(e.ls.L,ae("label '%s' already defined on line %d",!0),n.getstr(),t.arr[s].line);cu(e.ls,r)}},ON=function(e){for(;e.t.token===59||e.t.token===g.TK_DBCOLON;)nu(e)},CN=function(e,t,n){let s=e.fs,r=e.dyd.label,o;NN(s,r,t),dt(e,g.TK_DBCOLON),o=hu(e,r,t,n,ru(s)),ON(e),ll(e,0)&&(r.arr[o].nactvar=s.bl.nactvar),Fm(e,r.arr[o])},wN=function(e,t){let n=e.fs,s=new Ct;O.luaX_next(e);let r=ru(n),o=Lm(e);mn(n,s,1),dt(e,g.TK_DO),il(e),Iy(n,r),xn(e,g.TK_END,g.TK_WHILE,t),_n(n),Co(n,o)},IN=function(e,t){let n=e.fs,s=ru(n),r=new Ct,o=new Ct;mn(n,r,1),mn(n,o,0),O.luaX_next(e),Io(e),xn(e,g.TK_UNTIL,g.TK_REPEAT,t);let a=Lm(e);o.upval&&rl(n,a,o.nactvar),_n(n),au(n,a,s),_n(n)},jc=function(e){let t=new ee;return bn(e,t),Wt(e.fs,t),nt(t.k===N.VNONRELOC),t.u.info},jm=function(e,t,n,s,r){let o=new Ct,a=e.fs,l;gr(e,3),dt(e,g.TK_DO);let i=r?Hc(a,Ly,t,dr):Oo(a);mn(a,o,0),gr(e,s),hr(a,s),il(e),_n(a),Co(a,i),r?l=Hc(a,qy,t,dr):(mr(a,Jy,t,0,s),el(a,n),l=Hc(a,Zy,t+2,dr)),au(a,l,i+1),el(a,n)},VN=function(e,t,n){let s=e.fs,r=s.freereg;Is(e,"(for index)"),Is(e,"(for limit)"),Is(e,"(for step)"),Vs(e,t),dt(e,61),jc(e),dt(e,44),jc(e),We(e,44)?jc(e):(vy(s,s.freereg,wy(s,1)),hr(s,1)),jm(e,r,n,1,1)},PN=function(e,t){let n=e.fs,s=new ee,r=4,o=n.freereg;for(Is(e,"(for generator)"),Is(e,"(for state)"),Is(e,"(for control)"),Vs(e,t);We(e,44);)Vs(e,An(e)),r++;dt(e,g.TK_IN);let a=e.linenumber;du(e,3,Vo(e,s),s),ky(n,3),jm(e,o,a,r-3,0)},UN=function(e,t){let n=e.fs,s=new Ct;mn(n,s,1),O.luaX_next(e);let r=An(e);switch(e.t.token){case 61:VN(e,r,t);break;case 44:case g.TK_IN:PN(e,r);break;default:O.luaX_syntaxerror(e,ae("'=' or 'in' expected",!0))}xn(e,g.TK_END,g.TK_FOR,t),_n(n)},xm=function(e,t){let n=new Ct,s=e.fs,r=new ee,o;if(O.luaX_next(e),bn(e,r),dt(e,g.TK_THEN),e.t.token===g.TK_GOTO||e.t.token===g.TK_BREAK){for(Oy(e.fs,r),mn(s,n,!1),Hm(e,r.t);We(e,59););if(ll(e,0))return _n(s),t;o=Oo(s)}else Em(e.fs,r),mn(s,n,!1),o=r.f;return Io(e),_n(s),(e.t.token===g.TK_ELSE||e.t.token===g.TK_ELSEIF)&&(t=Ty(s,t,Oo(s))),Co(s,o),t},KN=function(e,t){let n=e.fs,s=dr;for(s=xm(e,s);e.t.token===g.TK_ELSEIF;)s=xm(e,s);We(e,g.TK_ELSE)&&il(e),xn(e,g.TK_END,g.TK_IF,t),Co(n,s)},FN=function(e){let t=new ee,n=e.fs;Vs(e,An(e)),gr(e,1),gu(e,t,0,e.linenumber),wo(n,t.u.info).startpc=n.pc},MN=function(e){let t=0,n,s=new ee;do Vs(e,An(e)),t++;while(We(e,44));We(e,61)?n=Vo(e,s):(s.k=N.VVOID,n=0),du(e,t,n,s),gr(e,t)},BN=function(e,t){let n=0;for(Im(e,t);e.t.token===46;)$c(e,t);return e.t.token===58&&(n=1,$c(e,t)),n},DN=function(e,t){let n=new ee,s=new ee;O.luaX_next(e);let r=BN(e,n);gu(e,s,r,t),zc(e.fs,n,s),el(e.fs,t)},GN=function(e){let t=e.fs,n=new sl;mu(e,n.v),e.t.token===61||e.t.token===44?(n.prev=null,qm(e,n,1)):(pu(e,n.v.k===N.VCALL,ae("syntax error",!0)),ym(Xc(t,n.v),1))},qN=function(e){let t=e.fs,n=new ee,s,r;ll(e,1)||e.t.token===59?s=r=0:(r=Vo(e,n),ol(n.k)?(lu(t,n),n.k===N.VCALL&&r===1&&(eN(Xc(t,n),zy),nt(Xc(t,n).A===t.nactvar)),s=t.nactvar,r=su):r===1?s=yy(t,n):(Wt(t,n),s=t.nactvar,nt(r===t.freereg-s))),vm(t,s,r),We(e,59)},nu=function(e){let t=e.linenumber;switch(Vm(e),e.t.token){case 59:{O.luaX_next(e);break}case g.TK_IF:{KN(e,t);break}case g.TK_WHILE:{wN(e,t);break}case g.TK_DO:{O.luaX_next(e),il(e),xn(e,g.TK_END,g.TK_DO,t);break}case g.TK_FOR:{UN(e,t);break}case g.TK_REPEAT:{IN(e,t);break}case g.TK_FUNCTION:{DN(e,t);break}case g.TK_LOCAL:{O.luaX_next(e),We(e,g.TK_FUNCTION)?FN(e):MN(e);break}case g.TK_DBCOLON:{O.luaX_next(e),CN(e,An(e),t);break}case g.TK_RETURN:{O.luaX_next(e),qN(e);break}case g.TK_BREAK:case g.TK_GOTO:{Hm(e,Oo(e.fs));break}default:{GN(e);break}}nt(e.fs.f.maxstacksize>=e.fs.freereg&&e.fs.freereg>=e.fs.nactvar),e.fs.freereg=e.fs.nactvar,Pm(e)},LN=function(e,t){let n=new Ct,s=new ee;Mm(e,t,n),t.f.is_vararg=!0,De(s,N.VLOCAL,0),wm(t,e.envn,s),O.luaX_next(e),Io(e),uu(e,g.TK_EOS),Bm(e)},HN=function(e,t,n,s,r,o){let a=new O.LexState,l=new tl,i=iu.luaF_newLclosure(e,1);return hm.luaD_inctop(e),e.stack[e.top-1].setclLvalue(i),a.h=sN.luaH_new(e),hm.luaD_inctop(e),e.stack[e.top-1].sethvalue(a.h),l.f=i.p=new Om(e),l.f.source=nN(e,r),a.buff=n,a.dyd=s,s.actvar.n=s.gt.n=s.label.n=0,O.luaX_setinput(e,a,t,l.f.source,o),LN(a,l),nt(!l.prev&&l.nups===1&&!a.fs),nt(s.actvar.n===0&&s.gt.n===0&&s.label.n===0),delete e.stack[--e.top],i};xr.exports.Dyndata=Yc;xr.exports.expkind=N;xr.exports.expdesc=ee;xr.exports.luaY_parser=HN;xr.exports.vkisinreg=aN});var n_=P((Dq,t_)=>{"use strict";var{LUA_SIGNATURE:Xm,constant_types:{LUA_TBOOLEAN:Wm,LUA_TLNGSTR:zm,LUA_TNIL:Jm,LUA_TNUMFLT:Zm,LUA_TNUMINT:Ym,LUA_TSHRSTR:jN},thread_status:{LUA_ERRSYNTAX:XN},is_luastring:WN,luastring_eq:zN,to_luastring:_u}=he(),JN=ct(),e_=Ot(),bu=Rs(),Ar=ut(),{MAXARG_sBx:ZN,POS_A:YN,POS_Ax:QN,POS_B:$N,POS_Bx:Qm,POS_C:eO,POS_OP:tO,SIZE_A:nO,SIZE_Ax:sO,SIZE_B:rO,SIZE_Bx:$m,SIZE_C:oO,SIZE_OP:aO}=ks(),{lua_assert:xu}=$e(),{luaS_bless:lO}=Bt(),{luaZ_read:Sr,ZIO:iO}=xo(),cO=[25,147,13,10,26,10],Au=class e{constructor(t,n,s){this.intSize=4,this.size_tSize=4,this.instructionSize=4,this.integerSize=8,this.numberSize=8,xu(n instanceof iO,"BytecodeParser only operates on a ZIO"),xu(WN(s)),s[0]===64||s[0]===61?this.name=s.subarray(1):s[0]==Xm[0]?this.name=_u("binary string",!0):this.name=s,this.L=t,this.Z=n,this.arraybuffer=new ArrayBuffer(Math.max(this.intSize,this.size_tSize,this.instructionSize,this.integerSize,this.numberSize)),this.dv=new DataView(this.arraybuffer),this.u8=new Uint8Array(this.arraybuffer)}read(t){let n=new Uint8Array(t);return Sr(this.Z,n,0,t)!==0&&this.error("truncated"),n}LoadByte(){return Sr(this.Z,this.u8,0,1)!==0&&this.error("truncated"),this.u8[0]}LoadInt(){return Sr(this.Z,this.u8,0,this.intSize)!==0&&this.error("truncated"),this.dv.getInt32(0,!0)}LoadNumber(){return Sr(this.Z,this.u8,0,this.numberSize)!==0&&this.error("truncated"),this.dv.getFloat64(0,!0)}LoadInteger(){return Sr(this.Z,this.u8,0,this.integerSize)!==0&&this.error("truncated"),JN.fromBytesLE(this.u8)}LoadSize_t(){return this.LoadInteger()}LoadString(){let t=this.LoadByte();return t===255&&(t=this.LoadSize_t()),t===0?null:lO(this.L,this.read(t-1))}static MASK1(t,n){return~(-1<<t)<<n}LoadCode(t){let n=this.LoadInt(),s=e;for(let r=0;r<n;r++){Sr(this.Z,this.u8,0,this.instructionSize)!==0&&this.error("truncated");let o=this.dv.getUint32(0,!0);t.code[r]={code:o,opcode:o>>tO&s.MASK1(aO,0),A:o>>YN&s.MASK1(nO,0),B:o>>$N&s.MASK1(rO,0),C:o>>eO&s.MASK1(oO,0),Bx:o>>Qm&s.MASK1($m,0),Ax:o>>QN&s.MASK1(sO,0),sBx:(o>>Qm&s.MASK1($m,0))-ZN}}}LoadConstants(t){let n=this.LoadInt();for(let s=0;s<n;s++){let r=this.LoadByte();switch(r){case Jm:t.k.push(new Ar.TValue(Jm,null));break;case Wm:t.k.push(new Ar.TValue(Wm,this.LoadByte()!==0));break;case Zm:t.k.push(new Ar.TValue(Zm,this.LoadNumber()));break;case Ym:t.k.push(new Ar.TValue(Ym,this.LoadInteger()));break;case jN:case zm:t.k.push(new Ar.TValue(zm,this.LoadString()));break;default:this.error(`unrecognized constant '${r}'`)}}}LoadProtos(t){let n=this.LoadInt();for(let s=0;s<n;s++)t.p[s]=new bu.Proto(this.L),this.LoadFunction(t.p[s],t.source)}LoadUpvalues(t){let n=this.LoadInt();for(let s=0;s<n;s++)t.upvalues[s]={name:null,instack:this.LoadByte(),idx:this.LoadByte()}}LoadDebug(t){let n=this.LoadInt();for(let s=0;s<n;s++)t.lineinfo[s]=this.LoadInt();n=this.LoadInt();for(let s=0;s<n;s++)t.locvars[s]={varname:this.LoadString(),startpc:this.LoadInt(),endpc:this.LoadInt()};n=this.LoadInt();for(let s=0;s<n;s++)t.upvalues[s].name=this.LoadString()}LoadFunction(t,n){t.source=this.LoadString(),t.source===null&&(t.source=n),t.linedefined=this.LoadInt(),t.lastlinedefined=this.LoadInt(),t.numparams=this.LoadByte(),t.is_vararg=this.LoadByte()!==0,t.maxstacksize=this.LoadByte(),this.LoadCode(t),this.LoadConstants(t),this.LoadUpvalues(t),this.LoadProtos(t),this.LoadDebug(t)}checkliteral(t,n){let s=this.read(t.length);zN(s,t)||this.error(n)}checkHeader(){this.checkliteral(Xm.subarray(1),"not a"),this.LoadByte()!==83&&this.error("version mismatch in"),this.LoadByte()!==0&&this.error("format mismatch in"),this.checkliteral(cO,"corrupted"),this.intSize=this.LoadByte(),this.size_tSize=this.LoadByte(),this.instructionSize=this.LoadByte(),this.integerSize=this.LoadByte(),this.numberSize=this.LoadByte(),this.checksize(this.intSize,4,"int"),this.checksize(this.size_tSize,4,"size_t"),this.checksize(this.instructionSize,4,"instruction"),this.checksize(this.integerSize,8,"integer"),this.checksize(this.numberSize,8,"number"),this.LoadInteger()!==22136&&this.error("endianness mismatch in"),this.LoadNumber()!==370.5&&this.error("float format mismatch in")}error(t){Ar.luaO_pushfstring(this.L,_u("%s: %s precompiled chunk"),this.name,_u(t)),e_.luaD_throw(this.L,XN)}checksize(t,n,s){t!==n&&this.error(`${s} size mismatch in`)}},uO=function(e,t,n){let s=new Au(e,t,n);s.checkHeader();let r=bu.luaF_newLclosure(e,s.LoadByte());return e_.luaD_inctop(e),e.stack[e.top-1].setclLvalue(r),r.p=new bu.Proto(e),s.LoadFunction(r.p,null),xu(r.nupvalues===r.p.upvalues.length),r};t_.exports.luaU_undump=uO});var Ot=P((Gq,ke)=>{"use strict";var{LUA_HOOKCALL:c_,LUA_HOOKRET:pO,LUA_HOOKTAILCALL:fO,LUA_MASKCALL:s_,LUA_MASKLINE:dO,LUA_MASKRET:r_,LUA_MINSTACK:cl,LUA_MULTRET:Tu,LUA_SIGNATURE:hO,constant_types:{LUA_TCCL:o_,LUA_TLCF:gO,LUA_TLCL:mO,LUA_TNIL:Er},thread_status:{LUA_ERRMEM:_O,LUA_ERRERR:Ru,LUA_ERRRUN:yu,LUA_ERRSYNTAX:bO,LUA_OK:Sn,LUA_YIELD:kn},lua_Debug:xO,luastring_indexOf:AO,to_luastring:Wn}=he(),Ps=_o(),Uo=un(),Nu=Rs(),{api_check:u_,lua_assert:ht,LUAI_MAXCCALLS:Po}=$e(),le=ut(),SO=ks(),p_=Lc(),ie=cn(),{luaS_newliteral:ku}=Bt(),a_=Ts(),{LUAI_MAXSTACK:zt}=Ye(),kO=n_(),Ko=vs(),{MBuffer:EO}=xo(),Ou=function(e,t){if(e.top<t)for(;e.top<t;)e.stack[e.top++]=new le.TValue(Er,null);else for(;e.top>t;)delete e.stack[--e.top]},fl=function(e,t,n){let s=e.top;for(;e.top<n+1;)e.stack[e.top++]=new le.TValue(Er,null);switch(t){case _O:{le.setsvalue2s(e,n,ku(e,"not enough memory"));break}case Ru:{le.setsvalue2s(e,n,ku(e,"error in error handling"));break}default:le.setobjs2s(e,n,s-1)}for(;e.top>n+1;)delete e.stack[--e.top]},f_=zt+200,ul=function(e,t){ht(t<=zt||t==f_),ht(e.stack_last==e.stack.length-ie.EXTRA_STACK),e.stack.length=t,e.stack_last=t-ie.EXTRA_STACK},d_=function(e,t){let n=e.stack.length;if(n>zt)vr(e,Ru);else{let s=e.top+t+ie.EXTRA_STACK,r=2*n;r>zt&&(r=zt),r<s&&(r=s),r>zt?(ul(e,f_),Uo.luaG_runerror(e,Wn("stack overflow",!0))):ul(e,r)}},kr=function(e,t){e.stack_last-e.top<=t&&d_(e,t)},vO=function(e){let t=e.top;for(let n=e.ci;n!==null;n=n.previous)t<n.top&&(t=n.top);return ht(t<=e.stack_last),t+1},h_=function(e){let t=vO(e),n=t+Math.floor(t/8)+2*ie.EXTRA_STACK;n>zt&&(n=zt),e.stack.length>zt&&ie.luaE_freeCI(e),t<=zt-ie.EXTRA_STACK&&n<e.stack.length&&ul(e,n)},TO=function(e){kr(e,1),e.stack[e.top++]=new le.TValue(Er,null)},dl=function(e,t,n){let s=e.stack[t];switch(s.type){case o_:case gO:{let r=s.type===o_?s.value.f:s.value;kr(e,cl);let o=ie.luaE_extendCI(e);o.funcOff=t,o.nresults=n,o.func=s,o.top=e.top+cl,ht(o.top<=e.stack_last),o.callstatus=0,e.hookmask&s_&&gl(e,c_,-1);let a=r(e);if(typeof a!="number"||a<0||(a|0)!==a)throw Error("invalid return value from JS function (expected integer)");return Ps.api_checknelems(e,a),hl(e,o,e.top-a,a),!0}case mO:{let r,o=s.value.p,a=e.top-t-1,l=o.maxstacksize;if(kr(e,l),o.is_vararg)r=NO(e,o,a);else{for(;a<o.numparams;a++)e.stack[e.top++]=new le.TValue(Er,null);r=t+1}let i=ie.luaE_extendCI(e);return i.funcOff=t,i.nresults=n,i.func=s,i.l_base=r,i.top=r+l,Ou(e,i.top),i.l_code=o.code,i.l_savedpc=0,i.callstatus=ie.CIST_LUA,e.hookmask&s_&&yO(e,i),!1}default:return kr(e,1),OO(e,t,s),dl(e,t,n)}},hl=function(e,t,n,s){let r=t.nresults;e.hookmask&(r_|dO)&&(e.hookmask&r_&&gl(e,pO,-1),e.oldpc=t.previous.l_savedpc);let o=t.funcOff;return e.ci=t.previous,e.ci.next=null,RO(e,n,o,s,r)},RO=function(e,t,n,s,r){switch(r){case 0:break;case 1:{s===0?e.stack[n].setnilvalue():le.setobjs2s(e,n,t);break}case Tu:{for(let a=0;a<s;a++)le.setobjs2s(e,n+a,t+a);for(let a=e.top;a>=n+s;a--)delete e.stack[a];return e.top=n+s,!1}default:{let a;if(r<=s)for(a=0;a<r;a++)le.setobjs2s(e,n+a,t+a);else{for(a=0;a<s;a++)le.setobjs2s(e,n+a,t+a);for(;a<r;a++)n+a>=e.top?e.stack[n+a]=new le.TValue(Er,null):e.stack[n+a].setnilvalue()}break}}let o=n+r;for(let a=e.top;a>=o;a--)delete e.stack[a];return e.top=o,!0},gl=function(e,t,n){let s=e.hook;if(s&&e.allowhook){let r=e.ci,o=e.top,a=r.top,l=new xO;l.event=t,l.currentline=n,l.i_ci=r,kr(e,cl),r.top=e.top+cl,ht(r.top<=e.stack_last),e.allowhook=0,r.callstatus|=ie.CIST_HOOKED,s(e,l),ht(!e.allowhook),e.allowhook=1,r.top=a,Ou(e,o),r.callstatus&=~ie.CIST_HOOKED}},yO=function(e,t){let n=c_;t.l_savedpc++,t.previous.callstatus&ie.CIST_LUA&&t.previous.l_code[t.previous.l_savedpc-1].opcode==SO.OpCodesI.OP_TAILCALL&&(t.callstatus|=ie.CIST_TAIL,n=fO),gl(e,n,-1),t.l_savedpc--},NO=function(e,t,n){let s=t.numparams,r=e.top-n,o=e.top,a;for(a=0;a<s&&a<n;a++)le.pushobj2s(e,e.stack[r+a]),e.stack[r+a].setnilvalue();for(;a<s;a++)e.stack[e.top++]=new le.TValue(Er,null);return o},OO=function(e,t,n){let s=a_.luaT_gettmbyobj(e,n,a_.TMS.TM_CALL);s.ttisfunction(s)||Uo.luaG_typeerror(e,n,Wn("call",!0)),le.pushobj2s(e,e.stack[e.top-1]);for(let r=e.top-2;r>t;r--)le.setobjs2s(e,r,r-1);le.setobj2s(e,t,s)},CO=function(e){e.nCcalls===Po?Uo.luaG_runerror(e,Wn("JS stack overflow",!0)):e.nCcalls>=Po+(Po>>3)&&vr(e,Ru)},g_=function(e,t,n){++e.nCcalls>=Po&&CO(e),dl(e,t,n)||Ko.luaV_execute(e),e.nCcalls--},vr=function(e,t){if(e.errorJmp)throw e.errorJmp.status=t,e.errorJmp;{let n=e.l_G;if(e.status=t,n.mainthread.errorJmp)n.mainthread.stack[n.mainthread.top++]=e.stack[e.top-1],vr(n.mainthread,t);else{let s=n.panic;throw s&&(fl(e,t,e.top),e.ci.top<e.top&&(e.ci.top=e.top),s(e)),new Error(`Aborted ${t}`)}}},pl=function(e,t,n){let s=e.nCcalls,r={status:Sn,previous:e.errorJmp};e.errorJmp=r;try{t(e,n)}catch(o){if(r.status===Sn){let a=e.l_G.atnativeerror;if(a)try{if(r.status=Sn,Ps.lua_pushcfunction(e,a),Ps.lua_pushlightuserdata(e,o),Eu(e,e.top-2,1),e.errfunc!==0){let l=e.errfunc;le.pushobj2s(e,e.stack[e.top-1]),le.setobjs2s(e,e.top-2,l),Eu(e,e.top-2,1)}r.status=yu}catch{r.status===Sn&&(r.status=-1)}else r.status=-1}}return e.errorJmp=r.previous,e.nCcalls=s,r.status},l_=function(e,t){let n=e.ci;ht(n.c_k!==null&&e.nny===0),ht(n.callstatus&ie.CIST_YPCALL||t===kn),n.callstatus&ie.CIST_YPCALL&&(n.callstatus&=~ie.CIST_YPCALL,e.errfunc=n.c_old_errfunc),n.nresults===Tu&&e.ci.top<e.top&&(e.ci.top=e.top);let s=n.c_k,r=s(e,t,n.c_ctx);Ps.api_checknelems(e,r),hl(e,n,e.top-r,r)},m_=function(e,t){for(t!==null&&l_(e,t);e.ci!==e.base_ci;)e.ci.callstatus&ie.CIST_LUA?(Ko.luaV_finishOp(e),Ko.luaV_execute(e)):l_(e,kn)},wO=function(e){for(let t=e.ci;t!==null;t=t.previous)if(t.callstatus&ie.CIST_YPCALL)return t;return null},IO=function(e,t){let n=wO(e);if(n===null)return 0;let s=n.extra;return Nu.luaF_close(e,s),fl(e,t,s),e.ci=n,e.allowhook=n.callstatus&ie.CIST_OAH,e.nny=0,h_(e),e.errfunc=n.c_old_errfunc,1},Su=function(e,t,n){let s=ku(e,t);if(n===0)le.pushsvalue2s(e,s),u_(e,e.top<=e.ci.top,"stack overflow");else{for(let r=1;r<n;r++)delete e.stack[--e.top];le.setsvalue2s(e,e.top-1,s)}return yu},VO=function(e,t){let n=e.top-t,s=e.ci;e.status===Sn?dl(e,n-1,Tu)||Ko.luaV_execute(e):(ht(e.status===kn),e.status=Sn,s.funcOff=s.extra,s.func=e.stack[s.funcOff],s.callstatus&ie.CIST_LUA?Ko.luaV_execute(e):(s.c_k!==null&&(t=s.c_k(e,kn,s.c_ctx),Ps.api_checknelems(e,t),n=e.top-t),hl(e,s,n,t)),m_(e,null))},PO=function(e,t,n){let s=e.nny;if(e.status===Sn){if(e.ci!==e.base_ci)return Su(e,"cannot resume non-suspended coroutine",n)}else if(e.status!==kn)return Su(e,"cannot resume dead coroutine",n);if(e.nCcalls=t?t.nCcalls+1:1,e.nCcalls>=Po)return Su(e,"JS stack overflow",n);e.nny=0,Ps.api_checknelems(e,e.status===Sn?n+1:n);let r=pl(e,VO,n);if(r===-1)r=yu;else{for(;r>kn&&IO(e,r);)r=pl(e,m_,r);r>kn?(e.status=r,fl(e,r,e.top),e.ci.top=e.top):ht(r===e.status)}return e.nny=s,e.nCcalls--,ht(e.nCcalls===(t?t.nCcalls:0)),r},UO=function(e){return e.nny===0},__=function(e,t,n,s){let r=e.ci;return Ps.api_checknelems(e,t),e.nny>0&&(e!==e.l_G.mainthread?Uo.luaG_runerror(e,Wn("attempt to yield across a JS-call boundary",!0)):Uo.luaG_runerror(e,Wn("attempt to yield from outside a coroutine",!0))),e.status=kn,r.extra=r.funcOff,r.callstatus&ie.CIST_LUA?u_(e,s===null,"hooks cannot continue after yielding"):(r.c_k=s,s!==null&&(r.c_ctx=n),r.funcOff=e.top-t-1,r.func=e.stack[r.funcOff],vr(e,kn)),ht(r.callstatus&ie.CIST_HOOKED),0},KO=function(e,t){__(e,t,0,null)},b_=function(e,t,n,s,r){let o=e.ci,a=e.allowhook,l=e.nny,i=e.errfunc;e.errfunc=r;let u=pl(e,t,n);return u!==Sn&&(Nu.luaF_close(e,s),fl(e,u,s),e.ci=o,e.allowhook=a,e.nny=l,h_(e)),e.errfunc=i,u},Eu=function(e,t,n){e.nny++,g_(e,t,n),e.nny--},vu=class{constructor(t,n,s){this.z=t,this.buff=new EO,this.dyd=new p_.Dyndata,this.mode=s,this.name=n}},i_=function(e,t,n){t&&AO(t,n[0])===-1&&(le.luaO_pushfstring(e,Wn("attempt to load a %s chunk (mode is '%s')"),n,t),vr(e,bO))},FO=function(e,t){let n,s=t.z.zgetc();s===hO[0]?(i_(e,t.mode,Wn("binary",!0)),n=kO.luaU_undump(e,t.z,t.name)):(i_(e,t.mode,Wn("text",!0)),n=p_.luaY_parser(e,t.z,t.buff,t.dyd,t.name,s)),ht(n.nupvalues===n.p.upvalues.length),Nu.luaF_initupvals(e,n)},MO=function(e,t,n,s){let r=new vu(t,n,s);e.nny++;let o=b_(e,FO,r,e.top,e.errfunc);return e.nny--,o};ke.exports.adjust_top=Ou;ke.exports.luaD_call=g_;ke.exports.luaD_callnoyield=Eu;ke.exports.luaD_checkstack=kr;ke.exports.luaD_growstack=d_;ke.exports.luaD_hook=gl;ke.exports.luaD_inctop=TO;ke.exports.luaD_pcall=b_;ke.exports.luaD_poscall=hl;ke.exports.luaD_precall=dl;ke.exports.luaD_protectedparser=MO;ke.exports.luaD_rawrunprotected=pl;ke.exports.luaD_reallocstack=ul;ke.exports.luaD_throw=vr;ke.exports.lua_isyieldable=UO;ke.exports.lua_resume=PO;ke.exports.lua_yield=KO;ke.exports.lua_yieldk=__});var un=P((qq,Oe)=>{"use strict";var{LUA_HOOKCOUNT:BO,LUA_HOOKLINE:DO,LUA_MASKCOUNT:GO,LUA_MASKLINE:x_,constant_types:{LUA_TBOOLEAN:qO,LUA_TNIL:LO,LUA_TTABLE:HO},thread_status:{LUA_ERRRUN:jO,LUA_YIELD:Cu},from_userstring:XO,luastring_eq:v_,luastring_indexOf:A_,to_luastring:q}=he(),{api_check:wu,lua_assert:Vu}=$e(),{LUA_IDSIZE:T_}=Ye(),S_=_o(),Fo=Ot(),_l=Rs(),WO=Xa(),Ge=ut(),bl=ks(),st=cn(),k_=Dt(),ne=Ts(),Pu=vs(),V=bl.OpCodesI,xl=e=>(Vu(e.callstatus&st.CIST_LUA),e.l_savedpc-1),R_=e=>{let t=e.func.value.p.lineinfo;return t.length!==0?t[xl(e)]:-1},Tr=e=>{if(e.status===Cu){let t=e.ci,n=t.funcOff;t.func=e.stack[t.extra],t.funcOff=t.extra,t.extra=n}},zO=(e,t,n,s)=>{(t===null||n===0)&&(n=0,t=null),e.ci.callstatus&st.CIST_LUA&&(e.oldpc=e.ci.l_savedpc),e.hook=t,e.basehookcount=s,e.hookcount=e.basehookcount,e.hookmask=n},JO=e=>e.hook,ZO=e=>e.hookmask,YO=e=>e.basehookcount,QO=(e,t,n)=>{if(t<0)return 0;let s;for(s=e.ci;t>0&&s!==e.base_ci;s=s.previous)t--;return t===0&&s!==e.base_ci?(n.i_ci=s,1):0},Iu=(e,t)=>{Vu(t<e.upvalues.length);let n=e.upvalues[t].name;return n===null?q("?",!0):n.getstr()},$O=(e,t)=>{let n=e.func.value.p.numparams;return t>=e.l_base-e.funcOff-n?null:{pos:e.funcOff+n+t,name:q("(*vararg)",!0)}},y_=(e,t,n)=>{let s,r=null;if(t.callstatus&st.CIST_LUA){if(n<0)return $O(t,-n);s=t.l_base,r=_l.luaF_getlocalname(t.func.value.p,n,xl(t))}else s=t.funcOff+1;if(r===null)if((t===e.ci?e.top:t.next.funcOff)-s>=n&&n>0)r=q("(*temporary)",!0);else return null;return{pos:s+(n-1),name:r}},eC=(e,t,n)=>{let s;if(Tr(e),t===null)e.stack[e.top-1].ttisLclosure()?s=_l.luaF_getlocalname(e.stack[e.top-1].value.p,n,0):s=null;else{let r=y_(e,t.i_ci,n);r?(s=r.name,Ge.pushobj2s(e,e.stack[r.pos]),wu(e,e.top<=e.ci.top,"stack overflow")):s=null}return Tr(e),s},tC=(e,t,n)=>{let s;Tr(e);let r=y_(e,t.i_ci,n);return r?(s=r.name,Ge.setobjs2s(e,r.pos,e.top-1),delete e.stack[--e.top]):s=null,Tr(e),s},nC=(e,t)=>{if(t===null||t instanceof Ge.CClosure)e.source=q("=[JS]",!0),e.linedefined=-1,e.lastlinedefined=-1,e.what=q("J",!0);else{let n=t.p;e.source=n.source?n.source.getstr():q("=?",!0),e.linedefined=n.linedefined,e.lastlinedefined=n.lastlinedefined,e.what=e.linedefined===0?q("main",!0):q("Lua",!0)}e.short_src=Ge.luaO_chunkid(e.source,T_)},sC=(e,t)=>{if(t===null||t instanceof Ge.CClosure)e.stack[e.top]=new Ge.TValue(LO,null),S_.api_incr_top(e);else{let n=t.p.lineinfo,s=k_.luaH_new(e);e.stack[e.top]=new Ge.TValue(HO,s),S_.api_incr_top(e);let r=new Ge.TValue(qO,!0);for(let o=0;o<n.length;o++)k_.luaH_setint(s,n[o],r)}},rC=(e,t)=>t===null?null:t.callstatus&st.CIST_FIN?{name:q("__gc",!0),funcname:q("metamethod",!0)}:!(t.callstatus&st.CIST_TAIL)&&t.previous.callstatus&st.CIST_LUA?iC(e,t.previous):null,oC=(e,t,n,s,r)=>{let o=1;for(;t.length>0;t=t.subarray(1))switch(t[0]){case 83:nC(n,s);break;case 108:n.currentline=r&&r.callstatus&st.CIST_LUA?R_(r):-1;break;case 117:n.nups=s===null?0:s.nupvalues,s===null||s instanceof Ge.CClosure?(n.isvararg=!0,n.nparams=0):(n.isvararg=s.p.is_vararg,n.nparams=s.p.numparams);break;case 116:n.istailcall=r?r.callstatus&st.CIST_TAIL:0;break;case 110:{let a=rC(e,r);a===null?(n.namewhat=q("",!0),n.name=null):(n.namewhat=a.funcname,n.name=a.name);break}case 76:case 102:break;default:o=0}return o},aC=(e,t,n)=>{t=XO(t);let s,r,o,a;return Tr(e),t[0]===62?(o=null,a=e.stack[e.top-1],wu(e,a.ttisfunction(),"function expected"),t=t.subarray(1),e.top--):(o=n.i_ci,a=o.func,Vu(o.func.ttisfunction())),r=a.ttisclosure()?a.value:null,s=oC(e,t,n,r,o),A_(t,102)>=0&&(Ge.pushobj2s(e,a),wu(e,e.top<=e.ci.top,"stack overflow")),Tr(e),A_(t,76)>=0&&sC(e,r),s},E_=(e,t,n)=>{let s={name:null,funcname:null};if(bl.ISK(n)){let r=e.k[bl.INDEXK(n)];if(r.ttisstring())return s.name=r.svalue(),s}else{let r=Al(e,t,n);if(r&&r.funcname[0]===99)return r}return s.name=q("?",!0),s},ml=(e,t)=>e<t?-1:e,lC=(e,t,n)=>{let s=-1,r=0;for(let o=0;o<t;o++){let a=e.code[o],l=a.A;switch(a.opcode){case V.OP_LOADNIL:{let i=a.B;l<=n&&n<=l+i&&(s=ml(o,r));break}case V.OP_TFORCALL:n>=l+2&&(s=ml(o,r));break;case V.OP_CALL:case V.OP_TAILCALL:n>=l&&(s=ml(o,r));break;case V.OP_JMP:{let i=a.sBx,u=o+1+i;o<u&&u<=t&&u>r&&(r=u);break}default:bl.testAMode(a.opcode)&&n===l&&(s=ml(o,r));break}}return s},Al=(e,t,n)=>{let s={name:_l.luaF_getlocalname(e,n+1,t),funcname:null};if(s.name)return s.funcname=q("local",!0),s;let r=lC(e,t,n);if(r!==-1){let o=e.code[r];switch(o.opcode){case V.OP_MOVE:{let a=o.B;if(a<o.A)return Al(e,r,a);break}case V.OP_GETTABUP:case V.OP_GETTABLE:{let a=o.C,l=o.B,i=o.opcode===V.OP_GETTABLE?_l.luaF_getlocalname(e,l+1,r):Iu(e,l);return s.name=E_(e,r,a).name,s.funcname=i&&v_(i,WO.LUA_ENV)?q("global",!0):q("field",!0),s}case V.OP_GETUPVAL:return s.name=Iu(e,o.B),s.funcname=q("upvalue",!0),s;case V.OP_LOADK:case V.OP_LOADKX:{let a=o.opcode===V.OP_LOADK?o.Bx:e.code[r+1].Ax;if(e.k[a].ttisstring())return s.name=e.k[a].svalue(),s.funcname=q("constant",!0),s;break}case V.OP_SELF:return s.name=E_(e,r,o.C).name,s.funcname=q("method",!0),s;default:break}}return null},iC=(e,t)=>{let n={name:null,funcname:null},s=0,r=t.func.value.p,o=xl(t),a=r.code[o];if(t.callstatus&st.CIST_HOOKED)return n.name=q("?",!0),n.funcname=q("hook",!0),n;switch(a.opcode){case V.OP_CALL:case V.OP_TAILCALL:return Al(r,o,a.A);case V.OP_TFORCALL:return n.name=q("for iterator",!0),n.funcname=q("for iterator",!0),n;case V.OP_SELF:case V.OP_GETTABUP:case V.OP_GETTABLE:s=ne.TMS.TM_INDEX;break;case V.OP_SETTABUP:case V.OP_SETTABLE:s=ne.TMS.TM_NEWINDEX;break;case V.OP_ADD:s=ne.TMS.TM_ADD;break;case V.OP_SUB:s=ne.TMS.TM_SUB;break;case V.OP_MUL:s=ne.TMS.TM_MUL;break;case V.OP_MOD:s=ne.TMS.TM_MOD;break;case V.OP_POW:s=ne.TMS.TM_POW;break;case V.OP_DIV:s=ne.TMS.TM_DIV;break;case V.OP_IDIV:s=ne.TMS.TM_IDIV;break;case V.OP_BAND:s=ne.TMS.TM_BAND;break;case V.OP_BOR:s=ne.TMS.TM_BOR;break;case V.OP_BXOR:s=ne.TMS.TM_BXOR;break;case V.OP_SHL:s=ne.TMS.TM_SHL;break;case V.OP_SHR:s=ne.TMS.TM_SHR;break;case V.OP_UNM:s=ne.TMS.TM_UNM;break;case V.OP_BNOT:s=ne.TMS.TM_BNOT;break;case V.OP_LEN:s=ne.TMS.TM_LEN;break;case V.OP_CONCAT:s=ne.TMS.TM_CONCAT;break;case V.OP_EQ:s=ne.TMS.TM_EQ;break;case V.OP_LT:s=ne.TMS.TM_LT;break;case V.OP_LE:s=ne.TMS.TM_LE;break;default:return null}return n.name=e.l_G.tmname[s].getstr(),n.funcname=q("metamethod",!0),n},cC=(e,t,n)=>{for(let s=t.l_base;s<t.top;s++)if(e.stack[s]===n)return s;return!1},uC=(e,t,n)=>{let s=t.func.value;for(let r=0;r<s.nupvalues;r++)if(s.upvals[r]===n)return{name:Iu(s.p,r),funcname:q("upvalue",!0)};return null},N_=(e,t)=>{let n=e.ci,s=null;if(n.callstatus&st.CIST_LUA){s=uC(e,n,t);let r=cC(e,n,t);!s&&r&&(s=Al(n.func.value.p,xl(n),r-n.l_base))}return s?Ge.luaO_pushfstring(e,q(" (%s '%s')",!0),s.funcname,s.name):q("",!0)},Uu=(e,t,n)=>{let s=ne.luaT_objtypename(e,t);Mo(e,q("attempt to %s a %s value%s",!0),n,s,N_(e,t))},pC=(e,t,n)=>{(t.ttisstring()||Pu.cvt2str(t))&&(t=n),Uu(e,t,q("concatenate",!0))},fC=(e,t,n,s)=>{Pu.tonumber(t)===!1&&(n=t),Uu(e,n,s)},dC=(e,t,n)=>{let s=ne.luaT_objtypename(e,t),r=ne.luaT_objtypename(e,n);v_(s,r)?Mo(e,q("attempt to compare two %s values",!0),s):Mo(e,q("attempt to compare %s with %s",!0),s,r)},O_=(e,t,n,s)=>{let r;return n?r=Ge.luaO_chunkid(n.getstr(),T_):r=q("?",!0),Ge.luaO_pushfstring(e,q("%s:%d: %s",!0),r,s,t)},Mo=(e,t,...n)=>{let s=e.ci,r=Ge.luaO_pushvfstring(e,t,n);s.callstatus&st.CIST_LUA&&O_(e,r,s.func.value.p.source,R_(s)),C_(e)},C_=e=>{if(e.errfunc!==0){let t=e.errfunc;Ge.pushobj2s(e,e.stack[e.top-1]),Ge.setobjs2s(e,e.top-2,t),Fo.luaD_callnoyield(e,e.top-2,1)}Fo.luaD_throw(e,jO)},hC=(e,t,n)=>{Pu.tointeger(t)===!1&&(n=t),Mo(e,q("number%s has no integer representation",!0),N_(e,n))},gC=e=>{let t=e.ci,n=e.hookmask,s=--e.hookcount===0&&n&GO;if(s)e.hookcount=e.basehookcount;else if(!(n&x_))return;if(t.callstatus&st.CIST_HOOKYIELD){t.callstatus&=~st.CIST_HOOKYIELD;return}if(s&&Fo.luaD_hook(e,BO,-1),n&x_){let r=t.func.value.p,o=t.l_savedpc-1,a=r.lineinfo.length!==0?r.lineinfo[o]:-1;(o===0||t.l_savedpc<=e.oldpc||a!==(r.lineinfo.length!==0?r.lineinfo[e.oldpc-1]:-1))&&Fo.luaD_hook(e,DO,a)}e.oldpc=t.l_savedpc,e.status===Cu&&(s&&(e.hookcount=1),t.l_savedpc--,t.callstatus|=st.CIST_HOOKYIELD,t.funcOff=e.top-1,t.func=e.stack[t.funcOff],Fo.luaD_throw(e,Cu))};Oe.exports.luaG_addinfo=O_;Oe.exports.luaG_concaterror=pC;Oe.exports.luaG_errormsg=C_;Oe.exports.luaG_opinterror=fC;Oe.exports.luaG_ordererror=dC;Oe.exports.luaG_runerror=Mo;Oe.exports.luaG_tointerror=hC;Oe.exports.luaG_traceexec=gC;Oe.exports.luaG_typeerror=Uu;Oe.exports.lua_gethook=JO;Oe.exports.lua_gethookcount=YO;Oe.exports.lua_gethookmask=ZO;Oe.exports.lua_getinfo=aC;Oe.exports.lua_getlocal=eC;Oe.exports.lua_getstack=QO;Oe.exports.lua_sethook=zO;Oe.exports.lua_setlocal=tC});var F_=P((Lq,K_)=>{"use strict";var{LUA_SIGNATURE:w_,LUA_VERSION_MAJOR:mC,LUA_VERSION_MINOR:_C,constant_types:{LUA_TBOOLEAN:bC,LUA_TLNGSTR:xC,LUA_TNIL:AC,LUA_TNUMFLT:SC,LUA_TNUMINT:kC,LUA_TSHRSTR:EC},luastring_of:V_}=he(),vC=ct(),I_=V_(25,147,13,10,26,10),TC=22136,RC=370.5,yC=Number(mC)*16+Number(_C),NC=0,Ku=class{constructor(){this.L=null,this.writer=null,this.data=null,this.strip=NaN,this.status=NaN}},Us=function(e,t,n){n.status===0&&t>0&&(n.status=n.writer(n.L,e,t,n.data))},Ce=function(e,t){Us(V_(e),1,t)},gt=function(e,t){let n=new ArrayBuffer(4);new DataView(n).setInt32(0,e,!0);let r=new Uint8Array(n);Us(r,4,t)},Fu=function(e,t){Us(vC.toBytesLE(e),8,t)},P_=function(e,t){let n=new ArrayBuffer(8);new DataView(n).setFloat64(0,e,!0);let r=new Uint8Array(n);Us(r,8,t)},Bo=function(e,t){if(e===null)Ce(0,t);else{let n=e.tsslen()+1,s=e.getstr();n<255?Ce(n,t):(Ce(255,t),Fu(n,t)),Us(s,n-1,t)}},OC=function(e,t){let n=e.code.map(s=>s.code);gt(n.length,t);for(let s=0;s<n.length;s++)gt(n[s],t)},CC=function(e,t){let n=e.k.length;gt(n,t);for(let s=0;s<n;s++){let r=e.k[s];switch(Ce(r.ttype(),t),r.ttype()){case AC:break;case bC:Ce(r.value?1:0,t);break;case SC:P_(r.value,t);break;case kC:Fu(r.value,t);break;case EC:case xC:Bo(r.tsvalue(),t);break}}},wC=function(e,t){let n=e.p.length;gt(n,t);for(let s=0;s<n;s++)U_(e.p[s],e.source,t)},IC=function(e,t){let n=e.upvalues.length;gt(n,t);for(let s=0;s<n;s++)Ce(e.upvalues[s].instack?1:0,t),Ce(e.upvalues[s].idx,t)},VC=function(e,t){let n=t.strip?0:e.lineinfo.length;gt(n,t);for(let s=0;s<n;s++)gt(e.lineinfo[s],t);n=t.strip?0:e.locvars.length,gt(n,t);for(let s=0;s<n;s++)Bo(e.locvars[s].varname,t),gt(e.locvars[s].startpc,t),gt(e.locvars[s].endpc,t);n=t.strip?0:e.upvalues.length,gt(n,t);for(let s=0;s<n;s++)Bo(e.upvalues[s].name,t)},U_=function(e,t,n){n.strip||e.source===t?Bo(null,n):Bo(e.source,n),gt(e.linedefined,n),gt(e.lastlinedefined,n),Ce(e.numparams,n),Ce(e.is_vararg?1:0,n),Ce(e.maxstacksize,n),OC(e,n),CC(e,n),IC(e,n),wC(e,n),VC(e,n)},PC=function(e){Us(w_,w_.length,e),Ce(yC,e),Ce(NC,e),Us(I_,I_.length,e),Ce(4,e),Ce(4,e),Ce(4,e),Ce(8,e),Ce(8,e),Fu(TC,e),P_(RC,e)},UC=function(e,t,n,s,r){let o=new Ku;return o.L=e,o.writer=n,o.data=s,o.strip=r,o.status=0,PC(o),Ce(t.upvalues.length,o),U_(t,null,o),o.status};K_.exports.luaU_dump=UC});var _o=P((Hq,d)=>{"use strict";var{LUA_MULTRET:Du,LUA_OPBNOT:KC,LUA_OPEQ:FC,LUA_OPLE:MC,LUA_OPLT:BC,LUA_OPUNM:DC,LUA_REGISTRYINDEX:Fs,LUA_RIDX_GLOBALS:kl,LUA_VERSION_NUM:GC,constant_types:{LUA_NUMTAGS:qC,LUA_TBOOLEAN:M_,LUA_TCCL:Gu,LUA_TFUNCTION:LC,LUA_TLCF:B_,LUA_TLCL:qu,LUA_TLIGHTUSERDATA:Nr,LUA_TLNGSTR:HC,LUA_TNIL:El,LUA_TNONE:Lu,LUA_TNUMFLT:jC,LUA_TNUMINT:Hu,LUA_TSHRSTR:XC,LUA_TTABLE:Rr,LUA_TTHREAD:ju,LUA_TUSERDATA:Or},thread_status:{LUA_OK:Sl},from_userstring:zn,to_luastring:Do}=he(),{api_check:v}=$e(),WC=un(),Jn=Ot(),{luaU_dump:zC}=F_(),D_=Rs(),j=ut(),Ks=cn(),{luaS_bless:G_,luaS_new:vl,luaS_newliteral:JC}=Bt(),ZC=Ts(),{LUAI_MAXSTACK:YC}=Ye(),we=vs(),mt=Dt(),{ZIO:QC}=xo(),xe=j.TValue,$C=j.CClosure,Ie=function(e){e.top++,v(e,e.top<=e.ci.top,"stack overflow")},Ee=function(e,t){v(e,t<e.top-e.ci.funcOff,"not enough elements in the stack")},Tl=function(e){if(!e)throw TypeError("invalid argument")},En=function(e){let{isIntRep:t}=ct();Tl(t(e))},yr=function(e){return e!==j.luaO_nilobject},ew=function(e){return e===null?GC:e.l_G.version},tw=function(e,t){let n=e.l_G.panic;return e.l_G.panic=t,n},nw=function(e,t){let n=e.l_G.atnativeerror;return e.l_G.atnativeerror=t,n},T=function(e,t){let n=e.ci;if(t>0){let s=n.funcOff+t;return v(e,t<=n.top-(n.funcOff+1),"unacceptable index"),s>=e.top?j.luaO_nilobject:e.stack[s]}else return t>Fs?(v(e,t!==0&&-t<=e.top,"invalid index"),e.stack[e.top+t]):t===Fs?e.l_G.l_registry:(t=Fs-t,v(e,t<=D_.MAXUPVAL+1,"upvalue index too large"),n.func.ttislcf()?j.luaO_nilobject:t<=n.func.value.nupvalues?n.func.value.upvalue[t-1]:j.luaO_nilobject)},q_=function(e,t){let n=e.ci;if(t>0){let s=n.funcOff+t;return v(e,t<=n.top-(n.funcOff+1),"unacceptable index"),s>=e.top?null:s}else{if(t>Fs)return v(e,t!==0&&-t<=e.top,"invalid index"),e.top+t;throw Error("attempt to use pseudo-index")}},sw=function(e,t){let n,s=e.ci;return v(e,t>=0,"negative 'n'"),e.stack_last-e.top>t?n=!0:e.top+Ks.EXTRA_STACK>YC-t?n=!1:(Jn.luaD_growstack(e,t),n=!0),n&&s.top<e.top+t&&(s.top=e.top+t),n},rw=function(e,t,n){if(e!==t){Ee(e,n),v(e,e.l_G===t.l_G,"moving among independent states"),v(e,t.ci.top-t.top>=n,"stack overflow"),e.top-=n;for(let s=0;s<n;s++)t.stack[t.top]=new j.TValue,j.setobj2s(t,t.top,e.stack[e.top+s]),delete e.stack[e.top+s],t.top++}},ow=function(e,t){return t>0||t<=Fs?t:e.top-e.ci.funcOff+t},aw=function(e){return e.top-(e.ci.funcOff+1)},lw=function(e,t){j.pushobj2s(e,T(e,t)),v(e,e.top<=e.ci.top,"stack overflow")},L_=function(e,t){let n=e.ci.funcOff,s;t>=0?(v(e,t<=e.stack_last-(n+1),"new top too large"),s=n+1+t):(v(e,-(t+1)<=e.top-(n+1),"invalid new top"),s=e.top+t+1),Jn.adjust_top(e,s)},Xu=function(e,t){L_(e,-t-1)},Mu=function(e,t,n){for(;t<n;t++,n--){let s=e.stack[t],r=new xe(s.type,s.value);j.setobjs2s(e,t,n),j.setobj2s(e,n,r)}},Wu=function(e,t,n){let s=e.top-1,r=q_(e,t),o=e.stack[r];v(e,yr(o)&&t>Fs,"index not in the stack"),v(e,(n>=0?n:-n)<=s-r+1,"invalid 'n'");let a=n>=0?s-n:r-n-1;Mu(e,r,a),Mu(e,a+1,e.top-1),Mu(e,r,e.top-1)},H_=function(e,t,n){let s=T(e,t);T(e,n).setfrom(s)},iw=function(e,t){Wu(e,t,-1),Xu(e,1)},cw=function(e,t){Wu(e,t,1)},uw=function(e,t){H_(e,-1,t),Xu(e,1)},pw=function(e){e.stack[e.top]=new xe(El,null),Ie(e)},fw=function(e,t){Tl(typeof t=="number"),e.stack[e.top]=new xe(jC,t),Ie(e)},dw=function(e,t){En(t),e.stack[e.top]=new xe(Hu,t),Ie(e)},hw=function(e,t,n){En(n);let s;return n===0?(t=Do("",!0),s=G_(e,t)):(t=zn(t),v(e,t.length>=n,"invalid length to lua_pushlstring"),s=vl(e,t.subarray(0,n))),j.pushsvalue2s(e,s),v(e,e.top<=e.ci.top,"stack overflow"),s.value},gw=function(e,t){if(t==null)e.stack[e.top]=new xe(El,null),e.top++;else{let n=vl(e,zn(t));j.pushsvalue2s(e,n),t=n.getstr()}return v(e,e.top<=e.ci.top,"stack overflow"),t},mw=function(e,t,n){return t=zn(t),j.luaO_pushvfstring(e,t,n)},_w=function(e,t,...n){return t=zn(t),j.luaO_pushvfstring(e,t,n)},bw=function(e,t){if(t==null)e.stack[e.top]=new xe(El,null),e.top++;else{Tl(typeof t=="string");let n=JC(e,t);j.pushsvalue2s(e,n),t=n.getstr()}return v(e,e.top<=e.ci.top,"stack overflow"),t},zu=function(e,t,n){if(Tl(typeof t=="function"),En(n),n===0)e.stack[e.top]=new xe(B_,t);else{Ee(e,n),v(e,n<=D_.MAXUPVAL,"upvalue index too large");let s=new $C(e,t,n);for(let r=0;r<n;r++)s.upvalue[r].setfrom(e.stack[e.top-n+r]);for(let r=1;r<n;r++)delete e.stack[--e.top];n>0&&--e.top,e.stack[e.top].setclCvalue(s)}Ie(e)},xw=zu,Ju=function(e,t){zu(e,t,0)},Aw=Ju,Sw=function(e,t){e.stack[e.top]=new xe(M_,!!t),Ie(e)},kw=function(e,t){e.stack[e.top]=new xe(Nr,t),Ie(e)},Ew=function(e){return e.stack[e.top]=new xe(ju,e),Ie(e),e.l_G.mainthread===e},vw=function(e){z_(e,Fs,kl)},j_=function(e,t,n){let s=vl(e,zn(n));Ee(e,1),j.pushsvalue2s(e,s),v(e,e.top<=e.ci.top,"stack overflow"),we.settable(e,t,e.stack[e.top-1],e.stack[e.top-2]),delete e.stack[--e.top],delete e.stack[--e.top]},X_=function(e,t){j_(e,mt.luaH_getint(e.l_G.l_registry.value,kl),t)},Tw=function(e,t){Ee(e,1);let n,s=T(e,t);switch(e.stack[e.top-1].ttisnil()?n=null:(v(e,e.stack[e.top-1].ttistable(),"table expected"),n=e.stack[e.top-1].value),s.ttnov()){case Or:case Rr:{s.value.metatable=n;break}default:{e.l_G.mt[s.ttnov()]=n;break}}return delete e.stack[--e.top],!0},Rw=function(e,t){Ee(e,2);let n=T(e,t);we.settable(e,n,e.stack[e.top-2],e.stack[e.top-1]),delete e.stack[--e.top],delete e.stack[--e.top]},yw=function(e,t,n){j_(e,T(e,t),n)},Nw=function(e,t,n){En(n),Ee(e,1);let s=T(e,t);e.stack[e.top]=new xe(Hu,n),Ie(e),we.settable(e,s,e.stack[e.top-1],e.stack[e.top-2]),delete e.stack[--e.top],delete e.stack[--e.top]},Ow=function(e,t){Ee(e,2);let n=T(e,t);v(e,n.ttistable(),"table expected");let s=e.stack[e.top-2],r=e.stack[e.top-1];mt.luaH_setfrom(e,n.value,s,r),mt.invalidateTMcache(n.value),delete e.stack[--e.top],delete e.stack[--e.top]},Cw=function(e,t,n){En(n),Ee(e,1);let s=T(e,t);v(e,s.ttistable(),"table expected"),mt.luaH_setint(s.value,n,e.stack[e.top-1]),delete e.stack[--e.top]},ww=function(e,t,n){Ee(e,1);let s=T(e,t);v(e,s.ttistable(),"table expected");let r=new xe(Nr,n),o=e.stack[e.top-1];mt.luaH_setfrom(e,s.value,r,o),delete e.stack[--e.top]},W_=function(e,t,n){let s=vl(e,zn(n));return j.pushsvalue2s(e,s),v(e,e.top<=e.ci.top,"stack overflow"),we.luaV_gettable(e,t,e.stack[e.top-1],e.top-1),e.stack[e.top-1].ttnov()},z_=function(e,t,n){let s=T(e,t);return En(n),v(e,s.ttistable(),"table expected"),j.pushobj2s(e,mt.luaH_getint(s.value,n)),v(e,e.top<=e.ci.top,"stack overflow"),e.stack[e.top-1].ttnov()},Iw=function(e,t,n){let s=T(e,t);v(e,s.ttistable(),"table expected");let r=new xe(Nr,n);return j.pushobj2s(e,mt.luaH_get(e,s.value,r)),v(e,e.top<=e.ci.top,"stack overflow"),e.stack[e.top-1].ttnov()},Vw=function(e,t){let n=T(e,t);return v(e,n.ttistable(n),"table expected"),j.setobj2s(e,e.top-1,mt.luaH_get(e,n.value,e.stack[e.top-1])),e.stack[e.top-1].ttnov()},J_=function(e,t,n){let s=new j.TValue(Rr,mt.luaH_new(e));e.stack[e.top]=s,Ie(e)},Pw=function(e,t){return new j.Udata(e,t)},Uw=function(e,t){let n=Pw(e,t);return e.stack[e.top]=new j.TValue(Or,n),Ie(e),n.data},Z_=function(e,t,n){switch(En(n),t.ttype()){case Gu:{let s=t.value;return 1<=n&&n<=s.nupvalues?{name:Do("",!0),val:s.upvalue[n-1]}:null}case qu:{let s=t.value,r=s.p;if(!(1<=n&&n<=r.upvalues.length))return null;let o=r.upvalues[n-1].name;return{name:o?o.getstr():Do("(*no name)",!0),val:s.upvals[n-1]}}default:return null}},Kw=function(e,t,n){let s=Z_(e,T(e,t),n);if(s){let r=s.name,o=s.val;return j.pushobj2s(e,o),v(e,e.top<=e.ci.top,"stack overflow"),r}return null},Fw=function(e,t,n){let s=T(e,t);Ee(e,1);let r=Z_(e,s,n);if(r){let o=r.name;return r.val.setfrom(e.stack[e.top-1]),delete e.stack[--e.top],o}return null},Mw=function(e){J_(e,0,0)},Bw=function(e,t,n){Ju(e,n),X_(e,t)},Dw=function(e,t){let n=T(e,t),s,r=!1;switch(n.ttnov()){case Rr:case Or:s=n.value.metatable;break;default:s=e.l_G.mt[n.ttnov()];break}return s!=null&&(e.stack[e.top]=new xe(Rr,s),Ie(e),r=!0),r},Gw=function(e,t){let n=T(e,t);v(e,n.ttisfulluserdata(),"full userdata expected");let s=n.value.uservalue;return e.stack[e.top]=new xe(s.type,s.value),Ie(e),e.stack[e.top-1].ttnov()},qw=function(e,t){let n=T(e,t);return we.luaV_gettable(e,n,e.stack[e.top-1],e.top-1),e.stack[e.top-1].ttnov()},Lw=function(e,t,n){return W_(e,T(e,t),n)},Hw=function(e,t,n){let s=T(e,t);return En(n),e.stack[e.top]=new xe(Hu,n),Ie(e),we.luaV_gettable(e,s,e.stack[e.top-1],e.top-1),e.stack[e.top-1].ttnov()},jw=function(e,t){return W_(e,mt.luaH_getint(e.l_G.l_registry.value,kl),t)},Xw=function(e,t){return!T(e,t).l_isfalse()},Zu=function(e,t){let n=T(e,t);if(!n.ttisstring()){if(!we.cvt2str(n))return null;j.luaO_tostring(e,n)}return n.svalue()},Ww=Zu,zw=function(e,t){let n=T(e,t);if(!n.ttisstring()){if(!we.cvt2str(n))return null;j.luaO_tostring(e,n)}return n.jsstring()},Jw=function(e,t){let n=Zu(e,t);return new DataView(n.buffer,n.byteOffset,n.byteLength)},Zw=function(e,t){let n=T(e,t);switch(n.ttype()){case XC:case HC:return n.vslen();case Or:return n.value.len;case Rr:return mt.luaH_getn(n.value);default:return 0}},Yw=function(e,t){let n=T(e,t);return n.ttislcf()||n.ttisCclosure()?n.value:null},Qw=function(e,t){let n=Y_(e,t);return n===!1?0:n},Y_=function(e,t){return we.tointeger(T(e,t))},$w=function(e,t){let n=Q_(e,t);return n===!1?0:n},Q_=function(e,t){return we.tonumber(T(e,t))},eI=function(e,t){let n=T(e,t);switch(n.ttnov()){case Or:return n.value.data;case Nr:return n.value;default:return null}},tI=function(e,t){let n=T(e,t);return n.ttisthread()?n.value:null},nI=function(e,t){let n=T(e,t);switch(n.ttype()){case Rr:case qu:case Gu:case B_:case ju:case Or:case Nr:return n.value;default:return null}},$_=new WeakMap,sI=function(e,t){let n=$_.get(e);return n?t===null||t.l_G===n:!1},rI=function(e,t,n){let s=function(r){v(r,r instanceof Ks.lua_State&&e===r.l_G,"must be from same global state"),r.stack[r.top]=new xe(t,n),Ie(r)};return $_.set(s,e),s},oI=function(e,t){let n=T(e,t);return rI(e.l_G,n.type,n.value)},aI=function(e,t,n,s){let r=T(e,t),o=T(e,n),a=0;if(yr(r)&&yr(o))switch(s){case FC:a=we.luaV_equalobj(e,r,o);break;case BC:a=we.luaV_lessthan(e,r,o);break;case MC:a=we.luaV_lessequal(e,r,o);break;default:v(e,!1,"invalid option")}return a},lI=function(e,t){let n=new xe,s=j.luaO_str2num(t,n);return s!==0&&(e.stack[e.top]=n,Ie(e)),s},iI=function(e,t){Jn.luaD_callnoyield(e,t.funcOff,t.nresults)},Zn=function(e,t){let n=T(e,t);return yr(n)?n.ttnov():Lu},cI=function(e,t){return v(e,Lu<=t&&t<qC,"invalid tag"),ZC.ttypename(t)},uI=function(e,t){let n=T(e,t);return n.ttislcf(n)||n.ttisCclosure()},pI=function(e,t){return Zn(e,t)===El},fI=function(e,t){return Zn(e,t)===M_},dI=function(e,t){return Zn(e,t)===Lu},hI=function(e,t){return Zn(e,t)<=0},gI=function(e,t){return T(e,t).ttistable()},mI=function(e,t){return T(e,t).ttisinteger()},_I=function(e,t){return we.tonumber(T(e,t))!==!1},bI=function(e,t){let n=T(e,t);return n.ttisstring()||we.cvt2str(n)},xI=function(e,t){let n=T(e,t);return n.ttisfulluserdata(n)||n.ttislightuserdata()},AI=function(e,t){return Zn(e,t)===ju},SI=function(e,t){return Zn(e,t)===LC},kI=function(e,t){return Zn(e,t)===Nr},EI=function(e,t,n){let s=T(e,t),r=T(e,n);return yr(s)&&yr(r)?we.luaV_equalobj(null,s,r):0},vI=function(e,t){t!==DC&&t!==KC?Ee(e,2):(Ee(e,1),j.pushobj2s(e,e.stack[e.top-1]),v(e,e.top<=e.ci.top,"stack overflow")),j.luaO_arith(e,t,e.stack[e.top-2],e.stack[e.top-1],e.stack[e.top-2]),delete e.stack[--e.top]},TI=Do("?"),RI=function(e,t,n,s,r){s?s=zn(s):s=TI,r!==null&&(r=zn(r));let o=new QC(e,t,n),a=Jn.luaD_protectedparser(e,o,s,r);if(a===Sl){let l=e.stack[e.top-1].value;if(l.nupvalues>=1){let i=mt.luaH_getint(e.l_G.l_registry.value,kl);l.upvals[0].setfrom(i)}}return a},yI=function(e,t,n,s){Ee(e,1);let r=e.stack[e.top-1];return r.ttisLclosure()?zC(e,r.value.p,t,n,s):1},NI=function(e){return e.status},OI=function(e,t){Ee(e,1);let n=T(e,t);v(e,n.ttisfulluserdata(),"full userdata expected"),n.value.uservalue.setfrom(e.stack[e.top-1]),delete e.stack[--e.top]},eb=function(e,t,n){v(e,n===Du||e.ci.top-e.top>=n-t,"results from function overflow current stack size")},tb=function(e,t,n,s,r){v(e,r===null||!(e.ci.callstatus&Ks.CIST_LUA),"cannot use continuations inside hooks"),Ee(e,t+1),v(e,e.status===Sl,"cannot do calls on non-normal thread"),eb(e,t,n);let o=e.top-(t+1);r!==null&&e.nny===0?(e.ci.c_k=r,e.ci.c_ctx=s,Jn.luaD_call(e,o,n)):Jn.luaD_callnoyield(e,o,n),n===Du&&e.ci.top<e.top&&(e.ci.top=e.top)},CI=function(e,t,n){tb(e,t,n,0,null)},nb=function(e,t,n,s,r,o){v(e,o===null||!(e.ci.callstatus&Ks.CIST_LUA),"cannot use continuations inside hooks"),Ee(e,t+1),v(e,e.status===Sl,"cannot do calls on non-normal thread"),eb(e,t,n);let a,l;s===0?l=0:l=q_(e,s);let i=e.top-(t+1);if(o===null||e.nny>0){let u={funcOff:i,nresults:n};a=Jn.luaD_pcall(e,iI,u,i,l)}else{let u=e.ci;u.c_k=o,u.c_ctx=r,u.extra=i,u.c_old_errfunc=e.errfunc,e.errfunc=l,u.callstatus&=~Ks.CIST_OAH|e.allowhook,u.callstatus|=Ks.CIST_YPCALL,Jn.luaD_call(e,i,n),u.callstatus&=~Ks.CIST_YPCALL,e.errfunc=u.c_old_errfunc,a=Sl}return n===Du&&e.ci.top<e.top&&(e.ci.top=e.top),a},wI=function(e,t,n,s){return nb(e,t,n,s,0,null)},II=function(e){Ee(e,1),WC.luaG_errormsg(e)},VI=function(e,t){let n=T(e,t);return v(e,n.ttistable(),"table expected"),e.stack[e.top]=new xe,mt.luaH_next(e,n.value,e.top-1)?(Ie(e),1):(delete e.stack[e.top],delete e.stack[--e.top],0)},PI=function(e,t){Ee(e,t),t>=2?we.luaV_concat(e,t):t===0&&(j.pushsvalue2s(e,G_(e,Do("",!0))),v(e,e.top<=e.ci.top,"stack overflow"))},UI=function(e,t){let n=T(e,t),s=new xe;we.luaV_objlen(e,s,n),e.stack[e.top]=s,Ie(e)},Bu=function(e,t,n){let s=T(e,t);v(e,s.ttisLclosure(),"Lua function expected");let r=s.value;return En(n),v(e,1<=n&&n<=r.p.upvalues.length,"invalid upvalue index"),{f:r,i:n-1}},KI=function(e,t,n){let s=T(e,t);switch(s.ttype()){case qu:{let r=Bu(e,t,n);return r.f.upvals[r.i]}case Gu:{let r=s.value;return v(e,Number.isInteger(n)&&n>0&&n<=r.nupvalues,"invalid upvalue index"),r.upvalue[n-1]}default:return v(e,!1,"closure expected"),null}},FI=function(e,t,n,s,r){let o=Bu(e,t,n),a=Bu(e,s,r),l=a.f.upvals[a.i];o.f.upvals[o.i]=l},MI=function(){},BI=function(){return console.warn("lua_getallocf is not available"),0},DI=function(){return console.warn("lua_setallocf is not available"),0},GI=function(){return console.warn("lua_getextraspace is not available"),0};d.exports.api_incr_top=Ie;d.exports.api_checknelems=Ee;d.exports.lua_absindex=ow;d.exports.lua_arith=vI;d.exports.lua_atpanic=tw;d.exports.lua_atnativeerror=nw;d.exports.lua_call=CI;d.exports.lua_callk=tb;d.exports.lua_checkstack=sw;d.exports.lua_compare=aI;d.exports.lua_concat=PI;d.exports.lua_copy=H_;d.exports.lua_createtable=J_;d.exports.lua_dump=yI;d.exports.lua_error=II;d.exports.lua_gc=MI;d.exports.lua_getallocf=BI;d.exports.lua_getextraspace=GI;d.exports.lua_getfield=Lw;d.exports.lua_getglobal=jw;d.exports.lua_geti=Hw;d.exports.lua_getmetatable=Dw;d.exports.lua_gettable=qw;d.exports.lua_gettop=aw;d.exports.lua_getupvalue=Kw;d.exports.lua_getuservalue=Gw;d.exports.lua_insert=cw;d.exports.lua_isboolean=fI;d.exports.lua_iscfunction=uI;d.exports.lua_isfunction=SI;d.exports.lua_isinteger=mI;d.exports.lua_islightuserdata=kI;d.exports.lua_isnil=pI;d.exports.lua_isnone=dI;d.exports.lua_isnoneornil=hI;d.exports.lua_isnumber=_I;d.exports.lua_isproxy=sI;d.exports.lua_isstring=bI;d.exports.lua_istable=gI;d.exports.lua_isthread=AI;d.exports.lua_isuserdata=xI;d.exports.lua_len=UI;d.exports.lua_load=RI;d.exports.lua_newtable=Mw;d.exports.lua_newuserdata=Uw;d.exports.lua_next=VI;d.exports.lua_pcall=wI;d.exports.lua_pcallk=nb;d.exports.lua_pop=Xu;d.exports.lua_pushboolean=Sw;d.exports.lua_pushcclosure=zu;d.exports.lua_pushcfunction=Ju;d.exports.lua_pushfstring=_w;d.exports.lua_pushglobaltable=vw;d.exports.lua_pushinteger=dw;d.exports.lua_pushjsclosure=xw;d.exports.lua_pushjsfunction=Aw;d.exports.lua_pushlightuserdata=kw;d.exports.lua_pushliteral=bw;d.exports.lua_pushlstring=hw;d.exports.lua_pushnil=pw;d.exports.lua_pushnumber=fw;d.exports.lua_pushstring=gw;d.exports.lua_pushthread=Ew;d.exports.lua_pushvalue=lw;d.exports.lua_pushvfstring=mw;d.exports.lua_rawequal=EI;d.exports.lua_rawget=Vw;d.exports.lua_rawgeti=z_;d.exports.lua_rawgetp=Iw;d.exports.lua_rawlen=Zw;d.exports.lua_rawset=Ow;d.exports.lua_rawseti=Cw;d.exports.lua_rawsetp=ww;d.exports.lua_register=Bw;d.exports.lua_remove=iw;d.exports.lua_replace=uw;d.exports.lua_rotate=Wu;d.exports.lua_setallocf=DI;d.exports.lua_setfield=yw;d.exports.lua_setglobal=X_;d.exports.lua_seti=Nw;d.exports.lua_setmetatable=Tw;d.exports.lua_settable=Rw;d.exports.lua_settop=L_;d.exports.lua_setupvalue=Fw;d.exports.lua_setuservalue=OI;d.exports.lua_status=NI;d.exports.lua_stringtonumber=lI;d.exports.lua_toboolean=Xw;d.exports.lua_tocfunction=Yw;d.exports.lua_todataview=Jw;d.exports.lua_tointeger=Qw;d.exports.lua_tointegerx=Y_;d.exports.lua_tojsstring=zw;d.exports.lua_tolstring=Zu;d.exports.lua_tonumber=$w;d.exports.lua_tonumberx=Q_;d.exports.lua_topointer=nI;d.exports.lua_toproxy=oI;d.exports.lua_tostring=Ww;d.exports.lua_tothread=tI;d.exports.lua_touserdata=eI;d.exports.lua_type=Zn;d.exports.lua_typename=cI;d.exports.lua_upvalueid=KI;d.exports.lua_upvaluejoin=FI;d.exports.lua_version=ew;d.exports.lua_xmove=rw});var qe=P((jq,p)=>{"use strict";var b=he(),h=_o(),Yn=un(),Rl=Ot(),Yu=cn();p.exports.LUA_AUTHORS=b.LUA_AUTHORS;p.exports.LUA_COPYRIGHT=b.LUA_COPYRIGHT;p.exports.LUA_ERRERR=b.thread_status.LUA_ERRERR;p.exports.LUA_ERRGCMM=b.thread_status.LUA_ERRGCMM;p.exports.LUA_ERRMEM=b.thread_status.LUA_ERRMEM;p.exports.LUA_ERRRUN=b.thread_status.LUA_ERRRUN;p.exports.LUA_ERRSYNTAX=b.thread_status.LUA_ERRSYNTAX;p.exports.LUA_HOOKCALL=b.LUA_HOOKCALL;p.exports.LUA_HOOKCOUNT=b.LUA_HOOKCOUNT;p.exports.LUA_HOOKLINE=b.LUA_HOOKLINE;p.exports.LUA_HOOKRET=b.LUA_HOOKRET;p.exports.LUA_HOOKTAILCALL=b.LUA_HOOKTAILCALL;p.exports.LUA_MASKCALL=b.LUA_MASKCALL;p.exports.LUA_MASKCOUNT=b.LUA_MASKCOUNT;p.exports.LUA_MASKLINE=b.LUA_MASKLINE;p.exports.LUA_MASKRET=b.LUA_MASKRET;p.exports.LUA_MINSTACK=b.LUA_MINSTACK;p.exports.LUA_MULTRET=b.LUA_MULTRET;p.exports.LUA_NUMTAGS=b.constant_types.LUA_NUMTAGS;p.exports.LUA_OK=b.thread_status.LUA_OK;p.exports.LUA_OPADD=b.LUA_OPADD;p.exports.LUA_OPBAND=b.LUA_OPBAND;p.exports.LUA_OPBNOT=b.LUA_OPBNOT;p.exports.LUA_OPBOR=b.LUA_OPBOR;p.exports.LUA_OPBXOR=b.LUA_OPBXOR;p.exports.LUA_OPDIV=b.LUA_OPDIV;p.exports.LUA_OPEQ=b.LUA_OPEQ;p.exports.LUA_OPIDIV=b.LUA_OPIDIV;p.exports.LUA_OPLE=b.LUA_OPLE;p.exports.LUA_OPLT=b.LUA_OPLT;p.exports.LUA_OPMOD=b.LUA_OPMOD;p.exports.LUA_OPMUL=b.LUA_OPMUL;p.exports.LUA_OPPOW=b.LUA_OPPOW;p.exports.LUA_OPSHL=b.LUA_OPSHL;p.exports.LUA_OPSHR=b.LUA_OPSHR;p.exports.LUA_OPSUB=b.LUA_OPSUB;p.exports.LUA_OPUNM=b.LUA_OPUNM;p.exports.LUA_REGISTRYINDEX=b.LUA_REGISTRYINDEX;p.exports.LUA_RELEASE=b.LUA_RELEASE;p.exports.LUA_RIDX_GLOBALS=b.LUA_RIDX_GLOBALS;p.exports.LUA_RIDX_LAST=b.LUA_RIDX_LAST;p.exports.LUA_RIDX_MAINTHREAD=b.LUA_RIDX_MAINTHREAD;p.exports.LUA_SIGNATURE=b.LUA_SIGNATURE;p.exports.LUA_TNONE=b.constant_types.LUA_TNONE;p.exports.LUA_TNIL=b.constant_types.LUA_TNIL;p.exports.LUA_TBOOLEAN=b.constant_types.LUA_TBOOLEAN;p.exports.LUA_TLIGHTUSERDATA=b.constant_types.LUA_TLIGHTUSERDATA;p.exports.LUA_TNUMBER=b.constant_types.LUA_TNUMBER;p.exports.LUA_TSTRING=b.constant_types.LUA_TSTRING;p.exports.LUA_TTABLE=b.constant_types.LUA_TTABLE;p.exports.LUA_TFUNCTION=b.constant_types.LUA_TFUNCTION;p.exports.LUA_TUSERDATA=b.constant_types.LUA_TUSERDATA;p.exports.LUA_TTHREAD=b.constant_types.LUA_TTHREAD;p.exports.LUA_VERSION=b.LUA_VERSION;p.exports.LUA_VERSION_MAJOR=b.LUA_VERSION_MAJOR;p.exports.LUA_VERSION_MINOR=b.LUA_VERSION_MINOR;p.exports.LUA_VERSION_NUM=b.LUA_VERSION_NUM;p.exports.LUA_VERSION_RELEASE=b.LUA_VERSION_RELEASE;p.exports.LUA_YIELD=b.thread_status.LUA_YIELD;p.exports.lua_Debug=b.lua_Debug;p.exports.lua_upvalueindex=b.lua_upvalueindex;p.exports.lua_absindex=h.lua_absindex;p.exports.lua_arith=h.lua_arith;p.exports.lua_atpanic=h.lua_atpanic;p.exports.lua_atnativeerror=h.lua_atnativeerror;p.exports.lua_call=h.lua_call;p.exports.lua_callk=h.lua_callk;p.exports.lua_checkstack=h.lua_checkstack;p.exports.lua_close=Yu.lua_close;p.exports.lua_compare=h.lua_compare;p.exports.lua_concat=h.lua_concat;p.exports.lua_copy=h.lua_copy;p.exports.lua_createtable=h.lua_createtable;p.exports.lua_dump=h.lua_dump;p.exports.lua_error=h.lua_error;p.exports.lua_gc=h.lua_gc;p.exports.lua_getallocf=h.lua_getallocf;p.exports.lua_getextraspace=h.lua_getextraspace;p.exports.lua_getfield=h.lua_getfield;p.exports.lua_getglobal=h.lua_getglobal;p.exports.lua_gethook=Yn.lua_gethook;p.exports.lua_gethookcount=Yn.lua_gethookcount;p.exports.lua_gethookmask=Yn.lua_gethookmask;p.exports.lua_geti=h.lua_geti;p.exports.lua_getinfo=Yn.lua_getinfo;p.exports.lua_getlocal=Yn.lua_getlocal;p.exports.lua_getmetatable=h.lua_getmetatable;p.exports.lua_getstack=Yn.lua_getstack;p.exports.lua_gettable=h.lua_gettable;p.exports.lua_gettop=h.lua_gettop;p.exports.lua_getupvalue=h.lua_getupvalue;p.exports.lua_getuservalue=h.lua_getuservalue;p.exports.lua_insert=h.lua_insert;p.exports.lua_isboolean=h.lua_isboolean;p.exports.lua_iscfunction=h.lua_iscfunction;p.exports.lua_isfunction=h.lua_isfunction;p.exports.lua_isinteger=h.lua_isinteger;p.exports.lua_islightuserdata=h.lua_islightuserdata;p.exports.lua_isnil=h.lua_isnil;p.exports.lua_isnone=h.lua_isnone;p.exports.lua_isnoneornil=h.lua_isnoneornil;p.exports.lua_isnumber=h.lua_isnumber;p.exports.lua_isproxy=h.lua_isproxy;p.exports.lua_isstring=h.lua_isstring;p.exports.lua_istable=h.lua_istable;p.exports.lua_isthread=h.lua_isthread;p.exports.lua_isuserdata=h.lua_isuserdata;p.exports.lua_isyieldable=Rl.lua_isyieldable;p.exports.lua_len=h.lua_len;p.exports.lua_load=h.lua_load;p.exports.lua_newstate=Yu.lua_newstate;p.exports.lua_newtable=h.lua_newtable;p.exports.lua_newthread=Yu.lua_newthread;p.exports.lua_newuserdata=h.lua_newuserdata;p.exports.lua_next=h.lua_next;p.exports.lua_pcall=h.lua_pcall;p.exports.lua_pcallk=h.lua_pcallk;p.exports.lua_pop=h.lua_pop;p.exports.lua_pushboolean=h.lua_pushboolean;p.exports.lua_pushcclosure=h.lua_pushcclosure;p.exports.lua_pushcfunction=h.lua_pushcfunction;p.exports.lua_pushfstring=h.lua_pushfstring;p.exports.lua_pushglobaltable=h.lua_pushglobaltable;p.exports.lua_pushinteger=h.lua_pushinteger;p.exports.lua_pushjsclosure=h.lua_pushjsclosure;p.exports.lua_pushjsfunction=h.lua_pushjsfunction;p.exports.lua_pushlightuserdata=h.lua_pushlightuserdata;p.exports.lua_pushliteral=h.lua_pushliteral;p.exports.lua_pushlstring=h.lua_pushlstring;p.exports.lua_pushnil=h.lua_pushnil;p.exports.lua_pushnumber=h.lua_pushnumber;p.exports.lua_pushstring=h.lua_pushstring;p.exports.lua_pushthread=h.lua_pushthread;p.exports.lua_pushvalue=h.lua_pushvalue;p.exports.lua_pushvfstring=h.lua_pushvfstring;p.exports.lua_rawequal=h.lua_rawequal;p.exports.lua_rawget=h.lua_rawget;p.exports.lua_rawgeti=h.lua_rawgeti;p.exports.lua_rawgetp=h.lua_rawgetp;p.exports.lua_rawlen=h.lua_rawlen;p.exports.lua_rawset=h.lua_rawset;p.exports.lua_rawseti=h.lua_rawseti;p.exports.lua_rawsetp=h.lua_rawsetp;p.exports.lua_register=h.lua_register;p.exports.lua_remove=h.lua_remove;p.exports.lua_replace=h.lua_replace;p.exports.lua_resume=Rl.lua_resume;p.exports.lua_rotate=h.lua_rotate;p.exports.lua_setallocf=h.lua_setallocf;p.exports.lua_setfield=h.lua_setfield;p.exports.lua_setglobal=h.lua_setglobal;p.exports.lua_sethook=Yn.lua_sethook;p.exports.lua_seti=h.lua_seti;p.exports.lua_setlocal=Yn.lua_setlocal;p.exports.lua_setmetatable=h.lua_setmetatable;p.exports.lua_settable=h.lua_settable;p.exports.lua_settop=h.lua_settop;p.exports.lua_setupvalue=h.lua_setupvalue;p.exports.lua_setuservalue=h.lua_setuservalue;p.exports.lua_status=h.lua_status;p.exports.lua_stringtonumber=h.lua_stringtonumber;p.exports.lua_toboolean=h.lua_toboolean;p.exports.lua_todataview=h.lua_todataview;p.exports.lua_tointeger=h.lua_tointeger;p.exports.lua_tointegerx=h.lua_tointegerx;p.exports.lua_tojsstring=h.lua_tojsstring;p.exports.lua_tolstring=h.lua_tolstring;p.exports.lua_tonumber=h.lua_tonumber;p.exports.lua_tonumberx=h.lua_tonumberx;p.exports.lua_topointer=h.lua_topointer;p.exports.lua_toproxy=h.lua_toproxy;p.exports.lua_tostring=h.lua_tostring;p.exports.lua_tothread=h.lua_tothread;p.exports.lua_touserdata=h.lua_touserdata;p.exports.lua_type=h.lua_type;p.exports.lua_typename=h.lua_typename;p.exports.lua_upvalueid=h.lua_upvalueid;p.exports.lua_upvaluejoin=h.lua_upvaluejoin;p.exports.lua_version=h.lua_version;p.exports.lua_xmove=h.lua_xmove;p.exports.lua_yield=Rl.lua_yield;p.exports.lua_yieldk=Rl.lua_yieldk;p.exports.lua_tocfunction=h.lua_tocfunction});var Go={};YS(Go,{default:()=>LI,existsSync:()=>rb,readFileSync:()=>sb});function qI(e){return()=>{throw new Error(`node-shims/fs: "${e}" is not available in the browser build`)}}var sb,rb,LI,qo=ZS(()=>{sb=qI("readFileSync"),rb=()=>!1,LI={readFileSync:sb,existsSync:rb}});var rt=P((Xq,m)=>{"use strict";var{LUAL_BUFFERSIZE:HI}=Ye(),{LUA_ERRERR:jI,LUA_MULTRET:pb,LUA_REGISTRYINDEX:Vl,LUA_SIGNATURE:ob,LUA_TBOOLEAN:XI,LUA_TLIGHTUSERDATA:WI,LUA_TNIL:wr,LUA_TNONE:zI,LUA_TNUMBER:np,LUA_TSTRING:Lo,LUA_TTABLE:JI,LUA_VERSION_NUM:ZI,lua_Debug:Pl,lua_absindex:Ul,lua_atpanic:YI,lua_call:fb,lua_checkstack:QI,lua_concat:Nl,lua_copy:$I,lua_createtable:sp,lua_error:eV,lua_getfield:Kl,lua_getinfo:Fl,lua_getmetatable:db,lua_getstack:Ho,lua_gettop:Cr,lua_insert:tV,lua_isinteger:nV,lua_isnil:sV,lua_isnumber:rV,lua_isstring:oV,lua_istable:aV,lua_len:lV,lua_load:Qu,lua_newstate:iV,lua_newtable:cV,lua_next:uV,lua_pcall:hb,lua_pop:bt,lua_pushboolean:gb,lua_pushcclosure:pV,lua_pushcfunction:fV,lua_pushfstring:ze,lua_pushinteger:Ol,lua_pushliteral:_t,lua_pushlstring:dV,lua_pushnil:rp,lua_pushstring:Vr,lua_pushvalue:Ms,lua_pushvfstring:hV,lua_rawequal:mb,lua_rawget:gV,lua_rawgeti:$u,lua_rawlen:mV,lua_rawseti:Cl,lua_remove:vn,lua_setfield:jo,lua_setglobal:_V,lua_setmetatable:bV,lua_settop:ep,lua_toboolean:_b,lua_tointeger:bb,lua_tointegerx:xb,lua_tojsstring:xV,lua_tolstring:Ab,lua_tonumber:AV,lua_tonumberx:SV,lua_topointer:kV,lua_tostring:Jt,lua_touserdata:EV,lua_type:Qn,lua_typename:Sb,lua_version:ab}=qe(),{from_userstring:op,luastring_eq:kb,to_luastring:R,to_uristring:vV}=Qe(),Eb=jI+1,ap=R("_LOADED"),TV=R("_PRELOAD"),RV=R("FILE*"),vb=72,lp=R("__name"),yV=R("__tostring"),ip=new Uint8Array(0),wl=class{constructor(){this.L=null,this.b=ip,this.n=0}},lb=10,ib=11,Tb=function(e,t,n){if(n===0||!aV(e,-1))return 0;for(rp(e);uV(e,-2);){if(Qn(e,-2)===Lo){if(mb(e,t,-1))return bt(e,1),1;if(Tb(e,t,n-1))return vn(e,-2),_t(e,"."),tV(e,-2),Nl(e,3),1}bt(e,1)}return 0},Rb=function(e,t){let n=Cr(e);if(Fl(e,R("f"),t),Kl(e,Vl,ap),Tb(e,n+1,2)){let s=Jt(e,-1);return s[0]===95&&s[1]===71&&s[2]===46&&(Vr(e,s.subarray(3)),vn(e,-2)),$I(e,-1,n+1),bt(e,2),1}else return ep(e,n),0},NV=function(e,t){Rb(e,t)?(ze(e,R("function '%s'"),Jt(e,-1)),vn(e,-2)):t.namewhat.length!==0?ze(e,R("%s '%s'"),t.namewhat,t.name):t.what&&t.what[0]===109?_t(e,"main chunk"):t.what&&t.what[0]===76?ze(e,R("function <%s:%d>"),t.short_src,t.linedefined):_t(e,"?")},OV=function(e){let t=new Pl,n=1,s=1;for(;Ho(e,s,t);)n=s,s*=2;for(;n<s;){let r=Math.floor((n+s)/2);Ho(e,r,t)?n=r+1:s=r}return s-1},CV=function(e,t,n,s){let r=new Pl,o=Cr(e),a=OV(t),l=a-s>lb+ib?lb:-1;for(n&&ze(e,R(`%s
`),n),gp(e,10,null),_t(e,"stack traceback:");Ho(t,s++,r);)l--===0?(_t(e,`
	...`),s=a-ib+1):(Fl(t,R("Slnt",!0),r),ze(e,R(`
	%s:`),r.short_src),r.currentline>0&&_t(e,`${r.currentline}:`),_t(e," in "),NV(e,r),r.istailcall&&_t(e,`
	(...tail calls..)`),Nl(e,Cr(e)-o));Nl(e,Cr(e)-o)},wV=function(e){let t="PANIC: unprotected error in call to Lua API ("+xV(e,-1)+")";throw new Error(t)},Pr=function(e,t,n){let s=new Pl;return Ho(e,0,s)?(Fl(e,R("n"),s),kb(s.namewhat,R("method"))&&(t--,t===0)?wt(e,R("calling '%s' on bad self (%s)"),s.name,n):(s.name===null&&(s.name=Rb(e,s)?Jt(e,-1):R("?")),wt(e,R("bad argument #%d to '%s' (%s)"),t,s.name,n))):wt(e,R("bad argument #%d (%s)"),t,n)},yb=function(e,t,n){let s;Gl(e,t,lp)===Lo?s=Jt(e,-1):Qn(e,t)===WI?s=R("light userdata",!0):s=cp(e,t);let r=ze(e,R("%s expected, got %s"),n,s);return Pr(e,t,r)},Nb=function(e,t){let n=new Pl;if(Ho(e,t,n)&&(Fl(e,R("Sl",!0),n),n.currentline>0)){ze(e,R("%s:%d: "),n.short_src,n.currentline);return}Vr(e,R(""))},wt=function(e,t,...n){return Nb(e,1),hV(e,t,n),Nl(e,2),eV(e)},Ob=function(e,t,n,s){if(t)return gb(e,1),1;{rp(e);let r,o;return s?(r=s.message,o=-s.errno):(r="Success",o=0),n?ze(e,R("%s: %s"),n,R(r)):Vr(e,R(r)),Ol(e,o),3}},IV=function(e,t){let n,s;if(t===null)return gb(e,1),_t(e,"exit"),Ol(e,0),3;if(t.status)n="exit",s=t.status;else if(t.signal)n="signal",s=t.signal;else return Ob(e,0,null,t);return rp(e),_t(e,n),Ol(e,s),3},Ml=function(e,t){return Kl(e,Vl,t)},VV=function(e,t){return Ml(e,t)!==wr?0:(bt(e,1),sp(e,0,2),Vr(e,t),jo(e,-2,lp),Ms(e,-1),jo(e,Vl,t),1)},PV=function(e,t){Ml(e,t),bV(e,-2)},Cb=function(e,t,n){let s=EV(e,t);return s!==null&&db(e,t)?(Ml(e,n),mb(e,-1,-2)||(s=null),bt(e,2),s):null},UV=function(e,t,n){let s=Cb(e,t,n);return s===null&&yb(e,t,n),s},KV=function(e,t,n,s){let r=n!==null?Vb(e,t,n):wb(e,t);for(let o=0;s[o];o++)if(kb(s[o],r))return o;return Pr(e,t,ze(e,R("invalid option '%s'"),r))},Bl=function(e,t,n){yb(e,t,Sb(e,n))},FV=function(){let e=iV();return e&&YI(e,wV),e},cp=function(e,t){return Sb(e,Qn(e,t))},MV=function(e,t,n,s){t||Pr(e,n,s)},BV=function(e,t){Qn(e,t)===zI&&Pr(e,t,R("value expected",!0))},DV=function(e,t,n){Qn(e,t)!==n&&Bl(e,t,n)},up=function(e,t){let n=Ab(e,t);return n==null&&Bl(e,t,Lo),n},wb=up,Ib=function(e,t,n){return Qn(e,t)<=0?n===null?null:op(n):up(e,t)},Vb=Ib,GV=function(e,t){rV(e,t)?Pr(e,t,R("number has no integer representation",!0)):Bl(e,t,np)},Pb=function(e,t){let n=SV(e,t);return n===!1&&Bl(e,t,np),n},qV=function(e,t,n){return hp(e,Pb,t,n)},Ub=function(e,t){let n=xb(e,t);return n===!1&&GV(e,t),n},LV=function(e,t,n){return hp(e,Ub,t,n)},Xo=function(e,t){let n=e.n+t;if(e.b.length<n){let s=Math.max(e.b.length*2,n),r=new Uint8Array(s);r.set(e.b),e.b=r}return e.b.subarray(e.n,n)},pp=function(e,t){t.L=e,t.b=ip},HV=function(e,t,n){return pp(e,t),Xo(t,n)},jV=function(e){return Xo(e,HI)},Dl=function(e,t,n){n>0&&(t=op(t),Xo(e,n).set(t.subarray(0,n)),dp(e,n))},tp=function(e,t){t=op(t),Dl(e,t,t.length)},fp=function(e){dV(e.L,e.b,e.n),e.n=0,e.b=ip},XV=function(e,t){Xo(e,1),e.b[e.n++]=t},dp=function(e,t){e.n+=t},WV=function(e,t){dp(e,t),fp(e)},zV=function(e){let t=e.L,n=Jt(t,-1);Dl(e,n,n.length),bt(t,1)},hp=function(e,t,n,s){return Qn(e,n)<=0?s:t(e,n)},JV=function(e,t){let n=t.string;return t.string=null,n},Kb=function(e,t,n,s,r){return Qu(e,JV,{string:t},s,r)},Fb=function(e,t,n,s){return Kb(e,t,n,s,null)},Mb=function(e,t){return Fb(e,t,t.length,t)},ZV=function(e,t){return Mb(e,t)||hb(e,0,pb,0)},Gl=function(e,t,n){if(db(e,t)){Vr(e,n);let s=gV(e,-2);return s===wr?bt(e,2):vn(e,-2),s}else return wr},Bb=function(e,t,n){return t=Ul(e,t),Gl(e,t,n)===wr?!1:(Ms(e,t),fb(e,1,1),!0)},YV=function(e,t){lV(e,t);let n=xb(e,-1);return n===!1&&wt(e,R("object length is not an integer",!0)),bt(e,1),n},QV=R("%I"),$V=R("%f"),eP=function(e,t){if(Bb(e,t,yV))oV(e,-1)||wt(e,R("'__tostring' must return a string"));else switch(Qn(e,t)){case np:{nV(e,t)?ze(e,QV,bb(e,t)):ze(e,$V,AV(e,t));break}case Lo:Ms(e,t);break;case XI:_t(e,_b(e,t)?"true":"false");break;case wr:_t(e,"nil");break;default:{let s=Gl(e,t,lp),r=s===Lo?Jt(e,-1):cp(e,t);ze(e,R("%s: %p"),r,kV(e,t)),s!==wr&&vn(e,-2);break}}return Ab(e,-1)},tP=function(e,t,n,s){Db(e,Vl,ap),Kl(e,-1,t),_b(e,-1)||(bt(e,1),fV(e,n),Vr(e,t),fb(e,1,1),Ms(e,-1),jo(e,-3,t)),vn(e,-2),s&&(Ms(e,-1),_V(e,t))},nP=function(e,t,n){let s=n>>>0,r=t.length,o=e.length+1-r;e:for(;s<o;s++){for(let a=0;a<r;a++)if(e[s+a]!==t[a])continue e;return s}return-1},sP=function(e,t,n,s){let r,o=new wl;for(pp(e,o);(r=nP(t,n))>=0;)Dl(o,t,r),tp(o,s),t=t.subarray(r+n.length);return tp(o,t),fp(o),Jt(e,-1)},Db=function(e,t,n){return Kl(e,t,n)===JI?!0:(bt(e,1),t=Ul(e,t),cV(e),Ms(e,-1),jo(e,t,n),!1)},Gb=function(e,t,n){gp(e,n,R("too many upvalues",!0));for(let s in t){for(let r=0;r<n;r++)Ms(e,-n);pV(e,t[s],n),jo(e,-(n+2),R(s))}bt(e,n)},gp=function(e,t,n){QI(e,t)||(n?wt(e,R("stack overflow (%s)"),n):wt(e,R("stack overflow",!0)))},rP=function(e){sp(e)},oP=function(e,t){sp(e),Gb(e,t,0)},aP=-2,qb=-1,lP=function(e,t){let n;return sV(e,-1)?(bt(e,1),qb):(t=Ul(e,t),$u(e,t,0),n=bb(e,-1),bt(e,1),n!==0?($u(e,t,n),Cl(e,t,0)):n=mV(e,t)+1,Cl(e,t,n),n)},iP=function(e,t,n){n>=0&&(t=Ul(e,t),$u(e,t,0),Cl(e,t,n),Ol(e,n),Cl(e,t,0))},yl=function(e,t,n,s){let r=s.message,o=Jt(e,n).subarray(1);return ze(e,R("cannot %s %s: %s"),R(t),o,R(r)),vn(e,n),Eb},Ir,cb=[239,187,191],cP=function(e){e.n=0;let t,n=0;do{if(t=Ir(e),t===null||t!==cb[n])return t;n++,e.buff[e.n++]=t}while(n<cb.length);return e.n=0,Ir(e)},ub=function(e){let t=cP(e);if(t===35){do t=Ir(e);while(t&&t!==10);return{skipped:!0,c:Ir(e)}}else return{skipped:!1,c:t}},Il;if(typeof process>"u"){class e{constructor(){this.n=NaN,this.f=null,this.buff=new Uint8Array(1024),this.pos=0,this.err=void 0}}let t=function(n,s){let r=s;if(r.f!==null&&r.n>0){let a=r.n;return r.n=0,r.f=r.f.subarray(r.pos),r.buff.subarray(0,a)}let o=r.f;return r.f=null,o};Ir=function(n){return n.pos<n.f.length?n.f[n.pos++]:null},Il=function(n,s,r){let o=new e,a=Cr(n)+1;if(s===null)throw new Error("Can't read stdin in the browser");{ze(n,R("@%s"),s);let c=vV(s),f=new XMLHttpRequest;if(f.open("GET",c,!1),typeof window>"u"&&(f.responseType="arraybuffer"),f.send(),f.status>=200&&f.status<=299)typeof f.response=="string"?o.f=R(f.response):o.f=new Uint8Array(f.response);else return o.err=f.status,yl(n,"open",a,{message:`${f.status}: ${f.statusText}`})}let l=ub(o);l.c===ob[0]&&s||l.skipped&&(o.buff[o.n++]=10),l.c!==null&&(o.buff[o.n++]=l.c);let i=Qu(n,t,o,Jt(n,-1),r),u=o.err;return u?(ep(n,a),yl(n,"read",a,u)):(vn(n,a),i)}}else{let e=(qo(),ka(Go));class t{constructor(){this.n=NaN,this.f=null,this.buff=Buffer.alloc(1024),this.pos=0,this.err=void 0}}let n=function(s,r){let o=r,a=0;if(o.n>0)a=o.n,o.n=0;else{try{a=e.readSync(o.f,o.buff,0,o.buff.length,o.pos)}catch(l){o.err=l,a=0}o.pos+=a}return a>0?o.buff.subarray(0,a):null};Ir=function(s){let r=Buffer.alloc(1),o;try{o=e.readSync(s.f,r,0,1,s.pos)}catch(a){return s.err=a,null}return s.pos+=o,o>0?r.readUInt8():null},Il=function(s,r,o){let a=new t,l=Cr(s)+1;if(r===null)_t(s,"=stdin"),a.f=process.stdin.fd;else{ze(s,R("@%s"),r);try{a.f=e.openSync(r,"r")}catch(f){return yl(s,"open",l,f)}}let i=ub(a);i.c===ob[0]&&r||i.skipped&&(a.buff[a.n++]=10),i.c!==null&&(a.buff[a.n++]=i.c);let u=Qu(s,n,a,Jt(s,-1),o),c=a.err;if(r)try{e.closeSync(a.f)}catch{}return c?(ep(s,l),yl(s,"read",l,c)):(vn(s,l),u)}}var Lb=function(e,t){return Il(e,t,null)},uP=function(e,t){return Lb(e,t)||hb(e,0,pb,0)},pP=function(){for(let e=0;e<arguments.length;e++){let t=arguments[e];if(typeof process>"u")do{let n=/([^\n]*)\n?([\d\D]*)/.exec(t);console.error(n[1]),t=n[2]}while(t!=="");else process.stderr.write(t)}},Hb=function(e,t,n){let s=ab(e);n!=vb&&wt(e,R("core and library have incompatible numeric types")),s!=ab(null)?wt(e,R("multiple Lua VMs detected")):s!==t&&wt(e,R("version mismatch: app. needs %f, Lua core provides %f"),t,s)},fP=function(e){Hb(e,ZI,vb)};m.exports.LUA_ERRFILE=Eb;m.exports.LUA_FILEHANDLE=RV;m.exports.LUA_LOADED_TABLE=ap;m.exports.LUA_NOREF=aP;m.exports.LUA_PRELOAD_TABLE=TV;m.exports.LUA_REFNIL=qb;m.exports.luaL_Buffer=wl;m.exports.luaL_addchar=XV;m.exports.luaL_addlstring=Dl;m.exports.luaL_addsize=dp;m.exports.luaL_addstring=tp;m.exports.luaL_addvalue=zV;m.exports.luaL_argcheck=MV;m.exports.luaL_argerror=Pr;m.exports.luaL_buffinit=pp;m.exports.luaL_buffinitsize=HV;m.exports.luaL_callmeta=Bb;m.exports.luaL_checkany=BV;m.exports.luaL_checkinteger=Ub;m.exports.luaL_checklstring=up;m.exports.luaL_checknumber=Pb;m.exports.luaL_checkoption=KV;m.exports.luaL_checkstack=gp;m.exports.luaL_checkstring=wb;m.exports.luaL_checktype=DV;m.exports.luaL_checkudata=UV;m.exports.luaL_checkversion=fP;m.exports.luaL_checkversion_=Hb;m.exports.luaL_dofile=uP;m.exports.luaL_dostring=ZV;m.exports.luaL_error=wt;m.exports.luaL_execresult=IV;m.exports.luaL_fileresult=Ob;m.exports.luaL_getmetafield=Gl;m.exports.luaL_getmetatable=Ml;m.exports.luaL_getsubtable=Db;m.exports.luaL_gsub=sP;m.exports.luaL_len=YV;m.exports.luaL_loadbuffer=Fb;m.exports.luaL_loadbufferx=Kb;m.exports.luaL_loadfile=Lb;m.exports.luaL_loadfilex=Il;m.exports.luaL_loadstring=Mb;m.exports.luaL_newlib=oP;m.exports.luaL_newlibtable=rP;m.exports.luaL_newmetatable=VV;m.exports.luaL_newstate=FV;m.exports.luaL_opt=hp;m.exports.luaL_optinteger=LV;m.exports.luaL_optlstring=Ib;m.exports.luaL_optnumber=qV;m.exports.luaL_optstring=Vb;m.exports.luaL_prepbuffer=jV;m.exports.luaL_prepbuffsize=Xo;m.exports.luaL_pushresult=fp;m.exports.luaL_pushresultsize=WV;m.exports.luaL_ref=lP;m.exports.luaL_requiref=tP;m.exports.luaL_setfuncs=Gb;m.exports.luaL_setmetatable=PV;m.exports.luaL_testudata=Cb;m.exports.luaL_tolstring=eP;m.exports.luaL_traceback=CV;m.exports.luaL_typename=cp;m.exports.luaL_unref=iP;m.exports.luaL_where=Nb;m.exports.lua_writestringerror=pP});var vp=P((Wq,rx)=>{"use strict";var{LUA_MULTRET:_p,LUA_OK:bp,LUA_TFUNCTION:Wb,LUA_TNIL:Ll,LUA_TNONE:dP,LUA_TNUMBER:hP,LUA_TSTRING:jl,LUA_TTABLE:Kr,LUA_VERSION:gP,LUA_YIELD:mP,lua_call:xp,lua_callk:_P,lua_concat:bP,lua_error:zb,lua_getglobal:xP,lua_geti:AP,lua_getmetatable:SP,lua_gettop:Ds,lua_insert:Jb,lua_isnil:kP,lua_isnone:Zb,lua_isstring:EP,lua_load:vP,lua_next:TP,lua_pcallk:Yb,lua_pop:Ap,lua_pushboolean:$n,lua_pushcfunction:Qb,lua_pushglobaltable:RP,lua_pushinteger:Zt,lua_pushliteral:$b,lua_pushnil:Jo,lua_pushnumber:yP,lua_pushstring:NP,lua_pushvalue:Vt,lua_rawequal:OP,lua_rawget:CP,lua_rawlen:wP,lua_rawset:IP,lua_remove:VP,lua_replace:PP,lua_rotate:UP,lua_setfield:jb,lua_setmetatable:KP,lua_settop:Tn,lua_setupvalue:FP,lua_stringtonumber:MP,lua_toboolean:BP,lua_tolstring:DP,lua_tostring:zo,lua_type:Bs,lua_typename:GP}=qe(),{luaL_argcheck:Zo,luaL_checkany:vt,luaL_checkinteger:Sp,luaL_checkoption:qP,luaL_checkstack:LP,luaL_checktype:Gs,luaL_error:kp,luaL_getmetafield:Ep,luaL_loadbufferx:HP,luaL_loadfile:jP,luaL_loadfilex:XP,luaL_optinteger:WP,luaL_optstring:Ur,luaL_setfuncs:zP,luaL_tolstring:JP,luaL_where:ZP}=rt(),{to_jsstring:ex,to_luastring:It}=Qe(),Wo,ql;if(typeof process>"u")if(typeof TextDecoder=="function"){let e="",t=new TextDecoder("utf-8");Wo=function(s){e+=t.decode(s,{stream:!0})};let n=new Uint8Array(0);ql=function(){e+=t.decode(n),console.log(e),e=""}}else{let e=[];Wo=function(t){try{t=ex(t)}catch{let s=new Uint8Array(t.length);s.set(t),t=s}e.push(t)},ql=function(){console.log.apply(console.log,e),e=[]}}else Wo=function(e){process.stdout.write(Buffer.from(e))},ql=function(){process.stdout.write(`
`)};var YP=function(e){let t=Ds(e);xP(e,It("tostring",!0));for(let n=1;n<=t;n++){Vt(e,-1),Vt(e,n),xp(e,1,1);let s=DP(e,-1);if(s===null)return kp(e,It("'tostring' must return a string to 'print'"));n>1&&Wo(It("	")),Wo(s),Ap(e,1)}return ql(),0},QP=function(e){return vt(e,1),JP(e,1),1},$P=function(e){return vt(e,1),SP(e,1)?(Ep(e,1,It("__metatable",!0)),1):(Jo(e),1)},eU=function(e){let t=Bs(e,2);return Gs(e,1,Kr),Zo(e,t===Ll||t===Kr,2,"nil or table expected"),Ep(e,1,It("__metatable",!0))!==Ll?kp(e,It("cannot change a protected metatable")):(Tn(e,2),KP(e,1),1)},tU=function(e){return vt(e,1),vt(e,2),$n(e,OP(e,1,2)),1},nU=function(e){let t=Bs(e,1);return Zo(e,t===Kr||t===jl,1,"table or string expected"),Zt(e,wP(e,1)),1},sU=function(e){return Gs(e,1,Kr),vt(e,2),Tn(e,2),CP(e,1),1},rU=function(e){return Gs(e,1,Kr),vt(e,2),vt(e,3),Tn(e,3),IP(e,1),1},oU=["stop","restart","collect","count","countb","step","setpause","setstepmul","isrunning"].map(e=>It(e)),aU=function(e){switch(qP(e,1,"collect",oU)){case 0:return $n(e,0),1;case 1:return $n(e,1),1;case 2:return Zt(e,0),1;case 3:return yP(e,0),1;case 4:return Zt(e,0),1;case 5:return $n(e,1),1;case 6:return Zt(e,0),1;case 7:return Zt(e,0),1;case 8:return $n(e,1),1;default:return 0}},lU=function(e){let t=Bs(e,1);return Zo(e,t!==dP,1,"value expected"),NP(e,GP(e,t)),1},iU=function(e,t,n,s){return vt(e,1),Ep(e,1,t)===Ll?(Qb(e,s),Vt(e,1),n?Zt(e,0):Jo(e)):(Vt(e,1),xp(e,1,3)),3},tx=function(e){return Gs(e,1,Kr),Tn(e,2),TP(e,1)?2:(Jo(e),1)},cU=function(e){return iU(e,It("__pairs",!0),0,tx)},uU=function(e){let t=Sp(e,2)+1;return Zt(e,t),AP(e,1,t)===Ll?1:2},pU=function(e){return vt(e,1),Qb(e,uU),Vt(e,1),Zt(e,0),3},fU=function(e,t){try{e=ex(e)}catch{return null}let n=/^[\t\v\f \n\r]*([+-]?)0*([0-9A-Za-z]+)[\t\v\f \n\r]*$/.exec(e);if(!n)return null;let s=parseInt(n[1]+n[2],t);return isNaN(s)?null:s|0},dU=function(e){if(Bs(e,2)<=0){if(vt(e,1),Bs(e,1)===hP)return Tn(e,1),1;{let t=zo(e,1);if(t!==null&&MP(e,t)===t.length+1)return 1}}else{let t=Sp(e,2);Gs(e,1,jl);let n=zo(e,1);Zo(e,2<=t&&t<=36,2,"base out of range");let s=fU(n,t);if(s!==null)return Zt(e,s),1}return Jo(e),1},nx=function(e){let t=WP(e,2,1);return Tn(e,1),Bs(e,1)===jl&&t>0&&(ZP(e,t),Vt(e,1),bP(e,2)),zb(e)},hU=function(e){return BP(e,1)?Ds(e):(vt(e,1),VP(e,1),$b(e,"assertion failed!"),Tn(e,1),nx(e))},gU=function(e){let t=Ds(e);if(Bs(e,1)===jl&&zo(e,1)[0]===35)return Zt(e,t-1),1;{let n=Sp(e,1);return n<0?n=t+n:n>t&&(n=t),Zo(e,1<=n,1,"index out of range"),t-n}},Hl=function(e,t,n){return t!==bp&&t!==mP?($n(e,0),Vt(e,-2),2):Ds(e)-n},mU=function(e){vt(e,1),$n(e,1),Jb(e,1);let t=Yb(e,Ds(e)-2,_p,0,0,Hl);return Hl(e,t,0)},_U=function(e){let t=Ds(e);Gs(e,2,Wb),$n(e,1),Vt(e,1),UP(e,3,2);let n=Yb(e,t-2,_p,2,2,Hl);return Hl(e,n,2)},sx=function(e,t,n){return t===bp?(n!==0&&(Vt(e,n),FP(e,-2,1)||Ap(e,1)),1):(Jo(e),Jb(e,-2),2)},mp=5,bU=function(e,t){return LP(e,2,"too many nested functions"),Vt(e,1),xp(e,0,1),kP(e,-1)?(Ap(e,1),null):(EP(e,-1)||kp(e,It("reader function must return a string")),PP(e,mp),zo(e,mp))},xU=function(e){let t=zo(e,1),n=Ur(e,3,"bt"),s=Zb(e,4)?0:4,r;if(t!==null){let o=Ur(e,2,t);r=HP(e,t,t.length,o,n)}else{let o=Ur(e,2,"=(load)");Gs(e,1,Wb),Tn(e,mp),r=vP(e,bU,null,o,n)}return sx(e,r,s)},AU=function(e){let t=Ur(e,1,null),n=Ur(e,2,null),s=Zb(e,3)?0:3,r=XP(e,t,n);return sx(e,r,s)},Xb=function(e,t,n){return Ds(e)-1},SU=function(e){let t=Ur(e,1,null);return Tn(e,1),jP(e,t)!==bp?zb(e):(_P(e,0,_p,0,Xb),Xb(e,0,0))},kU={assert:hU,collectgarbage:aU,dofile:SU,error:nx,getmetatable:$P,ipairs:pU,load:xU,loadfile:AU,next:tx,pairs:cU,pcall:mU,print:YP,rawequal:tU,rawget:sU,rawlen:nU,rawset:rU,select:gU,setmetatable:eU,tonumber:dU,tostring:QP,type:lU,xpcall:_U},EU=function(e){return RP(e),zP(e,kU,0),Vt(e,-1),jb(e,-2,It("_G")),$b(e,gP),jb(e,-2,It("_VERSION")),1};rx.exports.luaopen_base=EU});var yp=P((zq,fx)=>{"use strict";var{LUA_OK:Tp,LUA_TFUNCTION:vU,LUA_TSTRING:TU,LUA_YIELD:ax,lua_Debug:RU,lua_checkstack:ox,lua_concat:yU,lua_error:NU,lua_getstack:OU,lua_gettop:Fr,lua_insert:Rp,lua_isyieldable:CU,lua_newthread:wU,lua_pop:IU,lua_pushboolean:Wl,lua_pushcclosure:VU,lua_pushliteral:Rn,lua_pushthread:PU,lua_pushvalue:UU,lua_resume:KU,lua_status:lx,lua_tothread:ix,lua_type:FU,lua_upvalueindex:MU,lua_xmove:Xl,lua_yield:BU}=qe(),{luaL_argcheck:DU,luaL_checktype:GU,luaL_newlib:qU,luaL_where:LU}=rt(),cx=e=>{let t=ix(e,1);return DU(e,t,1,"thread expected"),t},ux=(e,t,n)=>{if(!ox(t,n))return Rn(e,"too many arguments to resume"),-1;if(lx(t)===Tp&&Fr(t)===0)return Rn(e,"cannot resume dead coroutine"),-1;Xl(e,t,n);let s=KU(t,e,n);if(s===Tp||s===ax){let r=Fr(t);return ox(e,r+1)?(Xl(t,e,r),r):(IU(t,r),Rn(e,"too many results to resume"),-1)}else return Xl(t,e,1),-1},HU=e=>{let t=cx(e),n=ux(e,t,Fr(e)-1);return n<0?(Wl(e,0),Rp(e,-2),2):(Wl(e,1),Rp(e,-(n+1)),n+1)},jU=e=>{let t=ix(e,MU(1)),n=ux(e,t,Fr(e));return n<0?(FU(e,-1)===TU&&(LU(e,1),Rp(e,-2),yU(e,2)),NU(e)):n},px=e=>{GU(e,1,vU);let t=wU(e);return UU(e,1),Xl(e,t,1),1},XU=e=>(px(e),VU(e,jU,1),1),WU=e=>BU(e,Fr(e)),zU=e=>{let t=cx(e);if(e===t)Rn(e,"running");else switch(lx(t)){case ax:Rn(e,"suspended");break;case Tp:{let n=new RU;OU(t,0,n)>0?Rn(e,"normal"):Fr(t)===0?Rn(e,"dead"):Rn(e,"suspended");break}default:Rn(e,"dead");break}return 1},JU=e=>(Wl(e,CU(e)),1),ZU=e=>(Wl(e,PU(e)),2),YU={create:px,isyieldable:JU,resume:HU,running:ZU,status:zU,wrap:XU,yield:WU},QU=e=>(qU(e,YU),1);fx.exports.luaopen_coroutine=QU});var Pp=P((Jq,Sx)=>{"use strict";var{LUA_MAXINTEGER:Op}=Ye(),Yt=ct(),{LUA_OPEQ:$U,LUA_OPLT:eK,LUA_TFUNCTION:tK,LUA_TNIL:nK,LUA_TTABLE:dx,lua_call:sK,lua_checkstack:rK,lua_compare:gx,lua_createtable:oK,lua_geti:Fe,lua_getmetatable:aK,lua_gettop:mx,lua_insert:lK,lua_isnil:iK,lua_isnoneornil:_x,lua_isstring:cK,lua_pop:es,lua_pushinteger:uK,lua_pushnil:pK,lua_pushstring:fK,lua_pushvalue:Yo,lua_rawget:dK,lua_setfield:hK,lua_seti:yn,lua_settop:gK,lua_toboolean:mK,lua_type:_K}=qe(),{luaL_Buffer:bK,luaL_addlstring:xK,luaL_addvalue:AK,luaL_argcheck:ea,luaL_buffinit:SK,luaL_checkinteger:Qo,luaL_checktype:bx,luaL_error:ta,luaL_len:xx,luaL_newlib:kK,luaL_opt:EK,luaL_optinteger:zl,luaL_optlstring:vK,luaL_pushresult:TK,luaL_typename:RK}=rt(),yK=ns(),{to_luastring:ts}=Qe(),Jl=1,Ip=2,Ax=4,Vp=Jl|Ip,Np=function(e,t,n){return fK(e,t),dK(e,-n)!==nK},Cp=function(e,t,n){if(_K(e,t)!==dx){let s=1;aK(e,t)&&(!(n&Jl)||Np(e,ts("__index",!0),++s))&&(!(n&Ip)||Np(e,ts("__newindex",!0),++s))&&(!(n&Ax)||Np(e,ts("__len",!0),++s))?es(e,s):bx(e,t,dx)}},Zl=function(e,t,n){return Cp(e,t,n|Ax),xx(e,t)},hx=function(e,t,n){Fe(e,1,n),cK(e,-1)||ta(e,ts("invalid value (%s) at index %d in table for 'concat'"),RK(e,-1),n),AK(t)},NK=function(e){let t=Zl(e,1,Vp)+1,n;switch(mx(e)){case 2:n=t;break;case 3:{n=Qo(e,2),ea(e,1<=n&&n<=t,2,"position out of bounds");for(let s=t;s>n;s--)Fe(e,1,s-1),yn(e,1,s);break}default:return ta(e,"wrong number of arguments to 'insert'")}return yn(e,1,n),0},OK=function(e){let t=Zl(e,1,Vp),n=zl(e,2,t);for(n!==t&&ea(e,1<=n&&n<=t+1,1,"position out of bounds"),Fe(e,1,n);n<t;n++)Fe(e,1,n+1),yn(e,1,n);return pK(e),yn(e,1,n),1},CK=function(e){let t=Qo(e,2),n=Qo(e,3),s=Qo(e,4),r=_x(e,5)?1:5;if(Cp(e,1,Jl),Cp(e,r,Ip),n>=t){ea(e,Yt.lt(0,t)||Yt.lt(n,Yt.add(Op,t)),3,"too many elements to move");let o=Yt.sub(Yt.add(n,1),t);if(ea(e,Yt.le(s,Yt.add(Yt.sub(Op,o),1)),4,"destination wrap around"),s>n||s<=t||r!==1&&gx(e,1,r,$U)!==1)for(let a=0;a<o;a++)Fe(e,1,Yt.add(t,a)),yn(e,r,Yt.add(s,a));else for(let a=o-1;a>=0;a--)Fe(e,1,t+a),yn(e,r,s+a)}return Yo(e,r),1},wK=function(e){let t=Zl(e,1,Jl),n=vK(e,2,""),s=n.length,r=zl(e,3,1);t=zl(e,4,t);let o=new bK;for(SK(e,o);r<t;r++)hx(e,o,r),xK(o,n,s);return r===t&&hx(e,o,r),TK(o),1},IK=function(e){let t=mx(e);oK(e,t,1),lK(e,1);for(let n=t;n>=1;n--)yn(e,1,n);return uK(e,t),hK(e,1,ts("n")),1},VK=function(e){let t=zl(e,2,1),n=EK(e,Qo,3,xx(e,1));if(t>n)return 0;let s=n-t;if(s>=Number.MAX_SAFE_INTEGER||!rK(e,++s))return ta(e,ts("too many results to unpack"));for(;t<n;t++)Fe(e,1,t);return Fe(e,1,n),s},PK=function(){return Math.floor(Math.random()*4294967296)},UK=100,Mr=function(e,t,n){yn(e,1,t),yn(e,1,n)},$o=function(e,t,n){if(iK(e,2))return gx(e,t,n,eK);{Yo(e,2),Yo(e,t-1),Yo(e,n-2),sK(e,2,1);let s=mK(e,-1);return es(e,1),s}},KK=function(e,t,n){let s=t,r=n-1;for(;;){for(;Fe(e,1,++s),$o(e,-1,-2);)s==n-1&&ta(e,ts("invalid order function for sorting")),es(e,1);for(;Fe(e,1,--r),$o(e,-3,-1);)r<s&&ta(e,ts("invalid order function for sorting")),es(e,1);if(r<s)return es(e,1),Mr(e,n-1,s),s;Mr(e,s,r)}},FK=function(e,t,n){let s=Math.floor((t-e)/4),r=n%(s*2)+(e+s);return yK.lua_assert(e+s<=r&&r<=t-s),r},wp=function(e,t,n,s){for(;t<n;){if(Fe(e,1,t),Fe(e,1,n),$o(e,-1,-2)?Mr(e,t,n):es(e,2),n-t==1)return;let r;if(n-t<UK||s===0?r=Math.floor((t+n)/2):r=FK(t,n,s),Fe(e,1,r),Fe(e,1,t),$o(e,-2,-1)?Mr(e,r,t):(es(e,1),Fe(e,1,n),$o(e,-1,-2)?Mr(e,r,n):es(e,2)),n-t==2)return;Fe(e,1,r),Yo(e,-1),Fe(e,1,n-1),Mr(e,r,n-1),r=KK(e,t,n);let o;r-t<n-r?(wp(e,t,r-1,s),o=r-t,t=r+1):(wp(e,r+1,n,s),o=n-r,n=r-1),(n-t)/128>o&&(s=PK())}},MK=function(e){let t=Zl(e,1,Vp);return t>1&&(ea(e,t<Op,1,"array too big"),_x(e,2)||bx(e,2,tK),gK(e,2),wp(e,1,t,0)),0},BK={concat:wK,insert:NK,move:CK,pack:IK,remove:OK,sort:MK,unpack:VK},DK=function(e){return kK(e,BK),1};Sx.exports.luaopen_table=DK});var Dp=P((Zq,Ox)=>{"use strict";var GK=(qo(),ka(Go)),{LUA_REGISTRYINDEX:na,lua_getfield:Kp,lua_gettop:qK,lua_isnone:LK,lua_isnoneornil:HK,lua_newuserdata:jK,lua_pop:XK,lua_pushliteral:Yl,lua_pushnil:kx,lua_pushstring:WK,lua_pushvalue:$l,lua_setfield:Ql,lua_tostring:zK,lua_touserdata:JK}=qe(),{LUA_FILEHANDLE:ei,luaL_checkany:ZK,luaL_checklstring:YK,luaL_checkudata:QK,luaL_error:Fp,luaL_fileresult:Mp,luaL_newlib:$K,luaL_newmetatable:e2,luaL_setfuncs:t2,luaL_setmetatable:n2,luaL_testudata:s2}=rt(),r2=ns(),{to_luastring:Qt}=Qe(),Bp="_IO_",o2=Bp.length,Ex=Qt(Bp+"input"),sa=Qt(Bp+"output"),ti=function(e){return QK(e,1,ei)},ni=function(e){return e.closef===null},a2=function(e){ZK(e,1);let t=s2(e,1,ei);return t===null?kx(e):ni(t)?Yl(e,"closed file"):Yl(e,"file"),1},l2=function(e){let t=ti(e);return ni(t)?Yl(e,"file (closed)"):WK(e,Qt(`file (${t.f.toString()})`)),1},si=function(e){let t=ti(e);return ni(t)&&Fp(e,Qt("attempt to use a closed file")),r2.lua_assert(t.f),t.f},i2=function(e){let t=jK(e);return t.f=null,t.closef=null,n2(e,ei),t},c2=function(e){let t=ti(e),n=t.closef;return t.closef=null,n(e)},vx=function(e){return LK(e,1)&&Kp(e,na,sa),si(e),c2(e)},Tx=function(e,t){Kp(e,na,t);let n=JK(e,-1);return ni(n)&&Fp(e,Qt("standard %s file is closed"),t.subarray(o2)),n.f},Rx=function(e,t,n){return HK(e,1)||(zK(e,1)?Fp(e,Qt("opening files not yet implemented")):(si(e),$l(e,1)),Ql(e,na,t)),Kp(e,na,t),1},u2=function(e){return Rx(e,Ex,"r")},p2=function(e){return Rx(e,sa,"w")},f2=typeof process<"u"&&process.versions.node>6?e=>e:e=>typeof Buffer<"u"?Buffer.from(e.buffer,e.byteOffset,e.byteLength):e,yx=function(e,t,n){let s=qK(e)-n,r=!0,o;for(;s--;n++){let a=YK(e,n);try{r=r&&GK.writeSync(t.fd,f2(a),0,a.length)===a.length}catch(l){r=!1,o=l}}return r?1:Mp(e,r,null,o)},d2=function(e){return yx(e,Tx(e,sa),1)},h2=function(e){let t=si(e);return $l(e,1),yx(e,t,2)},g2=function(e){return Tx(e,sa),Mp(e,!0,null,null)},m2=function(e){return si(e),Mp(e,!0,null,null)},_2={close:vx,flush:g2,input:u2,output:p2,type:a2,write:d2},b2={close:vx,flush:m2,write:h2,__tostring:l2},x2=function(e){e2(e,ei),$l(e,-1),Ql(e,-2,Qt("__index",!0)),t2(e,b2,0),XK(e,1)},Nx=function(e){let t=ti(e);return t.closef=Nx,kx(e),Yl(e,"cannot close standard file"),2},Up=function(e,t,n,s){let r=i2(e);r.f=t,r.closef=Nx,n!==null&&($l(e,-1),Ql(e,na,n)),Ql(e,-2,s)},A2=function(e){$K(e,_2),x2(e);let t={fd:-1,write(){return!0},on(){}},n=typeof process<"u"?process.stdin:t,s=typeof process<"u"?process.stdout:t,r=typeof process<"u"?process.stderr:t;return Up(e,n,Ex,Qt("stdin")),Up(e,s,sa,Qt("stdout")),Up(e,r,null,Qt("stderr")),1};Ox.exports.luaopen_io=A2});var Hp=P((Yq,Gx)=>{"use strict";var{LUA_TNIL:S2,LUA_TTABLE:k2,lua_close:E2,lua_createtable:v2,lua_getfield:T2,lua_isboolean:R2,lua_isnoneornil:Kx,lua_pop:y2,lua_pushboolean:N2,lua_pushfstring:O2,lua_pushinteger:Fx,lua_pushliteral:C2,lua_pushnil:w2,lua_pushnumber:Gp,lua_pushstring:Mx,lua_setfield:I2,lua_settop:V2,lua_toboolean:Cx,lua_tointegerx:P2}=qe(),{luaL_Buffer:U2,luaL_addchar:Nn,luaL_addstring:xt,luaL_argerror:K2,luaL_buffinit:F2,luaL_checkinteger:M2,luaL_checkoption:B2,luaL_checkstring:ri,luaL_checktype:D2,luaL_error:oi,luaL_execresult:wx,luaL_fileresult:ra,luaL_newlib:G2,luaL_optinteger:q2,luaL_optlstring:L2,luaL_optstring:Bx,luaL_pushresult:H2}=rt(),{luastring_eq:qp,to_jsstring:Ix,to_luastring:D}=Qe(),j2=D("aAbBcCdDeFhHIjklmMnpPrRStTuUwWxXyYzZ%"),ss=function(e,t,n){Fx(e,n),I2(e,-2,D(t,!0))},Dx=function(e,t,n){ss(e,"sec",n?t.getUTCSeconds():t.getSeconds()),ss(e,"min",n?t.getUTCMinutes():t.getMinutes()),ss(e,"hour",n?t.getUTCHours():t.getHours()),ss(e,"day",n?t.getUTCDate():t.getDate()),ss(e,"month",(n?t.getUTCMonth():t.getMonth())+1),ss(e,"year",n?t.getUTCFullYear():t.getFullYear()),ss(e,"wday",(n?t.getUTCDay():t.getDay())+1),ss(e,"yday",Math.floor((t-new Date(t.getFullYear(),0,0))/864e5))},Vx=Number.MAX_SAFE_INTEGER/2,Br=function(e,t,n,s){let r=T2(e,-1,D(t,!0)),o=P2(e,-1);if(o===!1){if(r!==S2)return oi(e,D("field '%s' is not an integer"),t);if(n<0)return oi(e,D("field '%s' missing in date table"),t);o=n}else{if(!(-Vx<=o&&o<=Vx))return oi(e,D("field '%s' is out-of-bound"),t);o-=s}return y2(e,1),o},Le={days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(e=>D(e)),shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(e=>D(e)),months:["January","February","March","April","May","June","July","August","September","October","November","December"].map(e=>D(e)),shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(e=>D(e)),AM:D("AM"),PM:D("PM"),am:D("am"),pm:D("pm"),formats:{c:D("%a %b %e %H:%M:%S %Y"),D:D("%m/%d/%y"),F:D("%Y-%m-%d"),R:D("%H:%M"),r:D("%I:%M:%S %p"),T:D("%H:%M:%S"),X:D("%T"),x:D("%D")}},Px=function(e,t){let n=e.getDay();t==="monday"&&(n===0?n=6:n--);let s=(e-new Date(e.getFullYear(),0,1))/864e5;return Math.floor((s+7-n)/7)},Je=function(e,t,n){t<10&&Nn(e,n),xt(e,D(String(t)))},On=function(e,t,n,s){let r=0;for(;r<n.length;)if(n[r]!==37)Nn(t,n[r++]);else{r++;let o=X2(e,n,r);switch(n[r]){case 37:Nn(t,37);break;case 65:xt(t,Le.days[s.getDay()]);break;case 66:xt(t,Le.months[s.getMonth()]);break;case 67:Je(t,Math.floor(s.getFullYear()/100),48);break;case 68:On(e,t,Le.formats.D,s);break;case 70:On(e,t,Le.formats.F,s);break;case 72:Je(t,s.getHours(),48);break;case 73:Je(t,(s.getHours()+11)%12+1,48);break;case 77:Je(t,s.getMinutes(),48);break;case 80:xt(t,s.getHours()<12?Le.am:Le.pm);break;case 82:On(e,t,Le.formats.R,s);break;case 83:Je(t,s.getSeconds(),48);break;case 84:On(e,t,Le.formats.T,s);break;case 85:Je(t,Px(s,"sunday"),48);break;case 87:Je(t,Px(s,"monday"),48);break;case 88:On(e,t,Le.formats.X,s);break;case 89:xt(t,D(String(s.getFullYear())));break;case 90:{let a=s.toString().match(/\(([\w\s]+)\)/);a&&xt(t,D(a[1]));break}case 97:xt(t,Le.shortDays[s.getDay()]);break;case 98:case 104:xt(t,Le.shortMonths[s.getMonth()]);break;case 99:On(e,t,Le.formats.c,s);break;case 100:Je(t,s.getDate(),48);break;case 101:Je(t,s.getDate(),32);break;case 106:{let a=Math.floor((s-new Date(s.getFullYear(),0,1))/864e5);a<100&&(a<10&&Nn(t,48),Nn(t,48)),xt(t,D(String(a)));break}case 107:Je(t,s.getHours(),32);break;case 108:Je(t,(s.getHours()+11)%12+1,32);break;case 109:Je(t,s.getMonth()+1,48);break;case 110:Nn(t,10);break;case 112:xt(t,s.getHours()<12?Le.AM:Le.PM);break;case 114:On(e,t,Le.formats.r,s);break;case 115:xt(t,D(String(Math.floor(s/1e3))));break;case 116:Nn(t,9);break;case 117:{let a=s.getDay();xt(t,D(String(a===0?7:a)));break}case 119:xt(t,D(String(s.getDay())));break;case 120:On(e,t,Le.formats.x,s);break;case 121:Je(t,s.getFullYear()%100,48);break;case 122:{let a=s.getTimezoneOffset();a>0?Nn(t,45):(a=-a,Nn(t,43)),Je(t,Math.floor(a/60),48),Je(t,a%60,48);break}}r+=o}},X2=function(e,t,n){let s=j2,r=0,o=1;for(;r<s.length&&o<=t.length-n;r+=o)if(s[r]===124)o++;else if(qp(t.subarray(n,n+o),s.subarray(r,r+o)))return o;K2(e,1,O2(e,D("invalid conversion specifier '%%%s'"),t))},W2=function(e){let t=L2(e,1,"%c"),n=Kx(e,2)?new Date:new Date(Lp(e,2)*1e3),s=!1,r=0;if(t[r]===33&&(s=!0,r++),t[r]===42&&t[r+1]===116)v2(e,0,9),Dx(e,n,s);else{let o=new U2;F2(e,o),On(e,o,t,n),H2(o)}return 1},z2=function(e){let t;return Kx(e,1)?t=new Date:(D2(e,1,k2),V2(e,1),t=new Date(Br(e,"year",-1,0),Br(e,"month",-1,1),Br(e,"day",-1,0),Br(e,"hour",12,0),Br(e,"min",0,0),Br(e,"sec",0,0)),Dx(e,t)),Fx(e,Math.floor(t/1e3)),1},Lp=function(e,t){return M2(e,t)},J2=function(e){let t=Lp(e,1),n=Lp(e,2);return Gp(e,t-n),1},Z2=["all","collate","ctype","monetary","numeric","time"].map(e=>D(e)),Ux=D("C"),Y2=D("POSIX"),Q2=function(e){let t=Bx(e,1,null);return B2(e,2,"all",Z2),Mx(e,t===null||t.length==0||qp(t,Ux)||qp(t,Y2)?Ux:null),1},Cn={date:W2,difftime:J2,setlocale:Q2,time:z2};if(typeof process>"u")Cn.clock=function(e){return Gp(e,performance.now()/1e3),1};else{let e=(qo(),ka(Go)),t=gs("tmp"),n=gs("child_process");Cn.exit=function(r){let o;return R2(r,1)?o=Cx(r,1)?0:1:o=q2(r,1,0),Cx(r,2)&&E2(r),r&&process.exit(o),0},Cn.getenv=function(r){let o=ri(r,1);return o=Ix(o),Object.prototype.hasOwnProperty.call(process.env,o)?C2(r,process.env[o]):w2(r),1},Cn.clock=function(r){return Gp(r,process.uptime()),1};let s=function(){return t.tmpNameSync()};Cn.remove=function(r){let o=ri(r,1);try{e.unlinkSync(o)}catch(a){if(a.code==="EISDIR")try{e.rmdirSync(o)}catch(l){return ra(r,!1,o,l)}else return ra(r,!1,o,a)}return ra(r,!0)},Cn.rename=function(r){let o=ri(r,1),a=ri(r,2);try{e.renameSync(o,a)}catch(l){return ra(r,!1,!1,l)}return ra(r,!0)},Cn.tmpname=function(r){let o=s();return o?(Mx(r,D(o)),1):oi(r,D("unable to generate a unique filename"))},Cn.execute=function(r){let o=Bx(r,1,null);if(o!==null){o=Ix(o);try{n.execSync(o,{stdio:[process.stdin,process.stdout,process.stderr]})}catch(a){return wx(r,a)}return wx(r,null)}else return N2(r,1),1}}var $2=function(e){return G2(e,Cn),1};Gx.exports.luaopen_os=$2});var qx=P(ai=>{(function(){"use strict";var e={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function t(a){return s(o(a),arguments)}function n(a,l){return t.apply(null,[a].concat(l||[]))}function s(a,l){var i=1,u=a.length,c,f="",_,H,E,X,Tt,Kt,lt,St;for(_=0;_<u;_++)if(typeof a[_]=="string")f+=a[_];else if(typeof a[_]=="object"){if(E=a[_],E.keys)for(c=l[i],H=0;H<E.keys.length;H++){if(c==null)throw new Error(t('[sprintf] Cannot access property "%s" of undefined value "%s"',E.keys[H],E.keys[H-1]));c=c[E.keys[H]]}else E.param_no?c=l[E.param_no]:c=l[i++];if(e.not_type.test(E.type)&&e.not_primitive.test(E.type)&&c instanceof Function&&(c=c()),e.numeric_arg.test(E.type)&&typeof c!="number"&&isNaN(c))throw new TypeError(t("[sprintf] expecting number but found %T",c));switch(e.number.test(E.type)&&(lt=c>=0),E.type){case"b":c=parseInt(c,10).toString(2);break;case"c":c=String.fromCharCode(parseInt(c,10));break;case"d":case"i":c=parseInt(c,10);break;case"j":c=JSON.stringify(c,null,E.width?parseInt(E.width):0);break;case"e":c=E.precision?parseFloat(c).toExponential(E.precision):parseFloat(c).toExponential();break;case"f":c=E.precision?parseFloat(c).toFixed(E.precision):parseFloat(c);break;case"g":c=E.precision?String(Number(c.toPrecision(E.precision))):parseFloat(c);break;case"o":c=(parseInt(c,10)>>>0).toString(8);break;case"s":c=String(c),c=E.precision?c.substring(0,E.precision):c;break;case"t":c=String(!!c),c=E.precision?c.substring(0,E.precision):c;break;case"T":c=Object.prototype.toString.call(c).slice(8,-1).toLowerCase(),c=E.precision?c.substring(0,E.precision):c;break;case"u":c=parseInt(c,10)>>>0;break;case"v":c=c.valueOf(),c=E.precision?c.substring(0,E.precision):c;break;case"x":c=(parseInt(c,10)>>>0).toString(16);break;case"X":c=(parseInt(c,10)>>>0).toString(16).toUpperCase();break}e.json.test(E.type)?f+=c:(e.number.test(E.type)&&(!lt||E.sign)?(St=lt?"+":"-",c=c.toString().replace(e.sign,"")):St="",Tt=E.pad_char?E.pad_char==="0"?"0":E.pad_char.charAt(1):" ",Kt=E.width-(St+c).length,X=E.width&&Kt>0?Tt.repeat(Kt):"",f+=E.align?St+c+X:Tt==="0"?St+X+c:X+St+c)}return f}var r=Object.create(null);function o(a){if(r[a])return r[a];for(var l=a,i,u=[],c=0;l;){if((i=e.text.exec(l))!==null)u.push(i[0]);else if((i=e.modulo.exec(l))!==null)u.push("%");else if((i=e.placeholder.exec(l))!==null){if(i[2]){c|=1;var f=[],_=i[2],H=[];if((H=e.key.exec(_))!==null)for(f.push(H[1]);(_=_.substring(H[0].length))!=="";)if((H=e.key_access.exec(_))!==null)f.push(H[1]);else if((H=e.index_access.exec(_))!==null)f.push(H[1]);else throw new SyntaxError("[sprintf] failed to parse named argument key");else throw new SyntaxError("[sprintf] failed to parse named argument key");i[2]=f}else c|=2;if(c===3)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");u.push({placeholder:i[0],param_no:i[1],keys:i[2],sign:i[3],pad_char:i[4],align:i[5],width:i[6],precision:i[7],type:i[8]})}else throw new SyntaxError("[sprintf] unexpected placeholder");l=l.substring(i[0].length)}return r[a]=u}typeof ai<"u"&&(ai.sprintf=t,ai.vsprintf=n),typeof window<"u"&&(window.sprintf=t,window.vsprintf=n,typeof define=="function"&&define.amd&&define(function(){return{sprintf:t,vsprintf:n}}))})()});var xf=P(($q,EA)=>{"use strict";var{sprintf:ci}=qx(),qr=ct(),eF=function(e){return e.replace(/([eE])([-+]?)(\d+)$/,function(t,n,s,r){return r.length<2&&(r="0"+r),s||(s="+"),n+s+r})},nA=function(e,t){let n=String.fromCharCode(...e),s=n[n.length-1],r=n.slice(1,-1),o=!1,a=!1,l=!1,i=!1,u=!1,c=0,f=-1,_=0;for(;_<r.length&&"-+ 0#".indexOf(r[_])>=0;){switch(r[_]){case"-":o=!0;break;case"+":a=!0;break;case" ":l=!0;break;case"0":i=!0;break;case"#":u=!0;break}_++}let H="";for(;_<r.length&&r[_]>="0"&&r[_]<="9";)H+=r[_],_++;if(H&&(c=parseInt(H,10)),_<r.length&&r[_]==="."){_++;let on="";for(;_<r.length&&r[_]>="0"&&r[_]<="9";)on+=r[_],_++;f=on?parseInt(on,10):0}let E=!1,X,Tt=qr.toBigInt(t);if(s==="d"||s==="i"?(E=Tt<0n,X=(E?-Tt:Tt).toString(10)):s==="u"?X=BigInt.asUintN(64,Tt).toString(10):s==="x"||s==="X"?(X=BigInt.asUintN(64,Tt).toString(16),s==="X"&&(X=X.toUpperCase())):s==="o"?X=BigInt.asUintN(64,Tt).toString(8):(X=qr.toDecimalString(t),E=Tt<0n),f>=0){if(f===0&&X==="0")X="";else for(;X.length<f;)X="0"+X;i=!1}let Kt="";u&&(s==="o"?X[0]!=="0"&&(Kt="0"):s==="x"?X!==""&&X!=="0"&&(Kt="0x"):s==="X"&&X!==""&&X!=="0"&&(Kt="0X"));let lt="";(s==="d"||s==="i")&&(E?lt="-":a?lt="+":l&&(lt=" "));let St=Kt+X,$r=lt.length+St.length,Qs;if($r>=c)Qs=lt+St;else if(o)Qs=lt+St+" ".repeat(c-$r);else if(i)if(Kt){let on=c-$r;Qs=lt+Kt+"0".repeat(on)+X}else Qs=lt+"0".repeat(c-$r)+St;else Qs=" ".repeat(c-$r)+lt+St;return Qs},{LUA_INTEGER_FMT:tF,LUA_INTEGER_FRMLEN:ii,LUA_MININTEGER:nF,LUA_NUMBER_FMT:sF,LUA_NUMBER_FRMLEN:rF,frexp:oF,lua_getlocaledecpoint:aF}=Ye(),{LUA_TBOOLEAN:lF,LUA_TFUNCTION:of,LUA_TNIL:iF,LUA_TNUMBER:sA,LUA_TSTRING:rA,LUA_TTABLE:oA,lua_call:cF,lua_createtable:uF,lua_dump:pF,lua_gettable:fF,lua_gettop:aA,lua_isinteger:dF,lua_isstring:hF,lua_pop:ui,lua_pushcclosure:gF,lua_pushinteger:Ut,lua_pushlightuserdata:mF,lua_pushliteral:af,lua_pushlstring:zp,lua_pushnil:Jp,lua_pushnumber:_F,lua_pushstring:qs,lua_pushvalue:Zp,lua_remove:bF,lua_setfield:xF,lua_setmetatable:AF,lua_settop:lA,lua_toboolean:lf,lua_tointeger:SF,lua_tonumber:kF,lua_tostring:iA,lua_touserdata:EF,lua_type:cA,lua_upvalueindex:vF}=qe(),{luaL_Buffer:jr,luaL_addchar:Ze,luaL_addlstring:Gr,luaL_addsize:uA,luaL_addstring:Dr,luaL_addvalue:aa,luaL_argcheck:Pt,luaL_argerror:Ls,luaL_buffinit:fi,luaL_buffinitsize:pA,luaL_checkinteger:Hs,luaL_checknumber:Yp,luaL_checkstack:cf,luaL_checkstring:fe,luaL_checktype:TF,luaL_error:oe,luaL_newlib:RF,luaL_optinteger:Lr,luaL_optstring:yF,luaL_prepbuffsize:fA,luaL_pushresult:di,luaL_pushresultsize:dA,luaL_tolstring:uf,luaL_typename:NF}=rt(),hA=ns(),{luastring_eq:gA,luastring_indexOf:ls,to_jsstring:OF,to_luastring:y}=Qe(),CF="%",tn=CF.charCodeAt(0),wF=32,pf=2147483647,IF=function(e){let t=ls(e,0);return t>-1?t:e.length},Hr=function(e,t){return e>=0?e:0-e>t?0:t+e+1},VF=function(e){let t=fe(e,1),n=t.length,s=Hr(Hs(e,2),n),r=Hr(Lr(e,3,-1),n);return s<1&&(s=1),r>n&&(r=n),s<=r?qs(e,t.subarray(s-1,s-1+(r-s+1))):af(e,""),1},PF=function(e){return Ut(e,fe(e,1).length),1},UF=function(e){let t=aA(e),n=new jr,s=pA(e,n,t);for(let r=1;r<=t;r++){let o=Hs(e,r);Pt(e,o>=0&&o<=255,"value out of range"),s[r-1]=o}return dA(n,t),1},KF=function(e,t,n,s){return Gr(s,t,n),0},FF=function(e){let t=new jr,n=lf(e,2);return TF(e,1,of),lA(e,1),fi(e,t),pF(e,KF,t,n)!==0?oe(e,y("unable to dump given function")):(di(t),1)},Lx=rF.length+1,Hx=1,MF=function(e){if(Object.is(e,1/0))return y("inf");if(Object.is(e,-1/0))return y("-inf");if(Number.isNaN(e))return y("nan");if(e===0){let t=ci(sF+"x0p+0",e);return Object.is(e,-0)&&(t="-"+t),y(t)}else{let t="",n=oF(e),s=n[0],r=n[1];return s<0&&(t+="-",s=-s),t+="0x",t+=(s*(1<<Hx)).toString(16),r-=Hx,t+=ci("p%+d",r),y(t)}},mA=function(e,t,n){let s=MF(n);if(t[Lx]===65)for(let r=0;r<s.length;r++){let o=s[r];o>=97&&(s[r]=o&223)}else t[Lx]!==97&&oe(e,y("modifiers for format '%%a'/'%%A' not implemented"));return s},jx=y("-+ #0"),Xx=e=>97<=e&&e<=122||65<=e&&e<=90,en=e=>48<=e&&e<=57,Qp=e=>0<=e&&e<=31||e===127,$p=e=>33<=e&&e<=126,ef=e=>97<=e&&e<=122,tf=e=>65<=e&&e<=90,nf=e=>97<=e&&e<=122||65<=e&&e<=90||48<=e&&e<=57,Wx=e=>$p(e)&&!nf(e),zx=e=>e===32||e>=9&&e<=13,Jx=e=>48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102,BF=function(e,t,n){Ze(e,34);let s=0;for(;n--;){if(t[s]===34||t[s]===92||t[s]===10)Ze(e,92),Ze(e,t[s]);else if(Qp(t[s])){let r=""+t[s];en(t[s+1])&&(r=("000"+r).slice(-3)),Dr(e,y("\\"+r))}else Ze(e,t[s]);s++}Ze(e,34)},DF=function(e){if(ls(e,46)<0){let t=aF(),n=ls(e,t);n&&(e[n]=46)}},GF=function(e,t,n){switch(cA(e,n)){case rA:{let s=iA(e,n);BF(t,s,s.length);break}case sA:{let s;if(dF(e,n)){let r=SF(e,n);if(qr.eq(r,nF)){let o=BigInt.asUintN(64,qr.toBigInt(r));s=y("0x"+o.toString(16))}else{let o=y(tF,!0);s=y(nA(o,r))}}else{let r=kF(e,n);s=mA(e,y(`%${ii}a`),r),DF(s)}Dr(t,s);break}case iF:case lF:{uf(e,n),aa(t);break}default:Ls(e,n,y("value has no literal form"))}},qF=function(e,t,n,s){let r=n;for(;t[r]!==0&&ls(jx,t[r])>=0;)r++;r-n>=jx.length&&oe(e,y("invalid format (repeated flags)")),en(t[r])&&r++,en(t[r])&&r++,t[r]===46&&(r++,en(t[r])&&r++,en(t[r])&&r++),en(t[r])&&oe(e,y("invalid format (width or precision too long)")),s[0]=37;for(let o=0;o<r-n+1;o++)s[o+1]=t[n+o];return r},jp=function(e,t){let n=e.length,s=t.length,r=e[n-1];for(let o=0;o<s;o++)e[o+n-1]=t[o];e[n+s-1]=r},LF=function(e){let t=aA(e),n=1,s=fe(e,n),r=0,o=new jr;for(fi(e,o);r<s.length;)if(s[r]!==tn)Ze(o,s[r++]);else if(s[++r]===tn)Ze(o,s[r++]);else{let a=[];switch(++n>t&&Ls(e,n,y("no value")),r=qF(e,s,r,a),String.fromCharCode(s[r++])){case"c":{let l=Hs(e,n),i=typeof l=="bigint"?Number(l):l;Ze(o,i&255);break}case"d":case"i":case"o":case"u":case"x":case"X":{let l=Hs(e,n);jp(a,y(ii,!0)),Dr(o,y(nA(a,l)));break}case"a":case"A":{jp(a,y(ii,!0)),Dr(o,mA(e,a,Yp(e,n)));break}case"e":case"E":case"f":case"g":case"G":{let l=Yp(e,n);jp(a,y(ii,!0)),Dr(o,y(eF(ci(String.fromCharCode(...a),l))));break}case"q":{GF(e,o,n);break}case"s":{let l=uf(e,n);a.length<=2||a[2]===0?aa(o):(Pt(e,l.length===IF(l),n,"string contains zeros"),ls(a,46)<0&&l.length>=100?aa(o):(Dr(o,y(ci(String.fromCharCode(...a),OF(l)))),ui(e,1)));break}default:return oe(e,y("invalid option '%%%c' to 'format'"),s[r-1])}}return di(o),1},Xp=0,Zx=16,$t=8,os=8,_A=(1<<os)-1,HF=8,la=class{constructor(t){this.L=t,this.islittle=!0,this.maxalign=1}},as=0,rs=1,oa=2,ia=3,hi=4,gi=5,ff=6,mi=7,df=8,Yx=en,bA=function(e,t){if(e.off>=e.s.length||!Yx(e.s[e.off]))return t;{let n=0;do n=n*10+(e.s[e.off++]-48);while(e.off<e.s.length&&Yx(e.s[e.off])&&n<=(pf-9)/10);return n}},li=function(e,t,n){let s=bA(t,n);return(s>Zx||s<=0)&&oe(e.L,y("integral size (%d) out of limits [1,%d]"),s,Zx),s},Qx=function(e,t){let n={opt:t.s[t.off++],size:0};switch(n.opt){case 98:return n.size=1,n.opt=as,n;case 66:return n.size=1,n.opt=rs,n;case 104:return n.size=2,n.opt=as,n;case 72:return n.size=2,n.opt=rs,n;case 108:return n.size=4,n.opt=as,n;case 76:return n.size=4,n.opt=rs,n;case 106:return n.size=$t,n.opt=as,n;case 74:return n.size=$t,n.opt=rs,n;case 84:return n.size=4,n.opt=rs,n;case 102:return n.size=4,n.opt=oa,n;case 100:return n.size=8,n.opt=oa,n;case 110:return n.size=8,n.opt=oa,n;case 105:return n.size=li(e,t,4),n.opt=as,n;case 73:return n.size=li(e,t,4),n.opt=rs,n;case 115:return n.size=li(e,t,4),n.opt=hi,n;case 99:return n.size=bA(t,-1),n.size===-1&&oe(e.L,y("missing size for format option 'c'")),n.opt=ia,n;case 122:return n.opt=gi,n;case 120:return n.size=1,n.opt=ff,n;case 88:return n.opt=mi,n;case 32:break;case 60:e.islittle=!0;break;case 62:e.islittle=!1;break;case 61:e.islittle=!0;break;case 33:e.maxalign=li(e,t,HF);break;default:oe(e.L,y("invalid format option '%c'"),n.opt)}return n.opt=df,n},hf=function(e,t,n){let s={opt:NaN,size:NaN,ntoalign:NaN},r=Qx(e,n);s.size=r.size,s.opt=r.opt;let o=s.size;if(s.opt===mi)if(n.off>=n.s.length||n.s[n.off]===0)Ls(e.L,1,y("invalid next option for option 'X'"));else{let a=Qx(e,n);o=a.size,a=a.opt,(a===ia||o===0)&&Ls(e.L,1,y("invalid next option for option 'X'"))}return o<=1||s.opt===ia?s.ntoalign=0:(o>e.maxalign&&(o=e.maxalign),(o&o-1)!==0&&Ls(e.L,1,y("format asks for alignment not power of 2")),s.ntoalign=o-(t&o-1)&o-1),s},Wp=function(e,t,n,s,r){let o=fA(e,s),a=qr.toBigInt(t);for(let l=0;l<s;l++){let i;l<8?i=Number(BigInt.asUintN(8,a>>BigInt(l*os))):i=r?_A:0,o[n?l:s-1-l]=i}uA(e,s)},jF=function(e){let t=new jr,n=new la(e),s={s:fe(e,1),off:0},r=1,o=0;for(Jp(e),fi(e,t);s.off<s.s.length;){let a=hf(n,o,s),l=a.opt,i=a.size,u=a.ntoalign;for(o+=u+i;u-- >0;)Ze(t,Xp);switch(r++,l){case as:{let c=Hs(e,r);if(i<$t){let f=i*8-1,_=f<31?1<<f:Math.pow(2,f);Pt(e,-_<=c&&c<_,r,"integer overflow")}Wp(t,c,n.islittle,i,c<0);break}case rs:{let c=Hs(e,r);if(i<$t){let f=i*8,_=f<31?1<<f:Math.pow(2,f);Pt(e,0<=c&&c<_,r,"unsigned overflow")}Wp(t,c,n.islittle,i,!1);break}case oa:{let c=fA(t,i),f=Yp(e,r),_=new DataView(c.buffer,c.byteOffset,c.byteLength);i===4?_.setFloat32(0,f,n.islittle):_.setFloat64(0,f,n.islittle),uA(t,i);break}case ia:{let c=fe(e,r),f=c.length;for(Pt(e,f<=i,r,"string longer than given size"),Gr(t,c,f);f++<i;)Ze(t,Xp);break}case hi:{let c=fe(e,r),f=c.length;Pt(e,i>=4||f<1<<i*os,r,"string length does not fit in given size"),Wp(t,f,n.islittle,i,0),Gr(t,c,f),o+=f;break}case gi:{let c=fe(e,r),f=c.length;Pt(e,ls(c,0)<0,r,"strings contains zeros"),Gr(t,c,f),Ze(t,0),o+=f+1;break}case ff:Ze(t,Xp);case mi:case df:r--;break}}return di(t),1},XF=function(e){let t=fe(e,1),n=t.length,s=new Uint8Array(n);for(let r=0;r<n;r++)s[r]=t[n-1-r];return qs(e,s),1},WF=function(e){let t=fe(e,1),n=t.length,s=new Uint8Array(n);for(let r=0;r<n;r++){let o=t[r];tf(o)&&(o=o|32),s[r]=o}return qs(e,s),1},zF=function(e){let t=fe(e,1),n=t.length,s=new Uint8Array(n);for(let r=0;r<n;r++){let o=t[r];ef(o)&&(o=o&223),s[r]=o}return qs(e,s),1},JF=function(e){let t=fe(e,1),n=t.length,s=Hs(e,2),r=yF(e,3,""),o=r.length;if(s<=0)af(e,"");else{if(n+o<n||n+o>pf/s)return oe(e,y("resulting string too large"));{let a=s*n+(s-1)*o,l=new jr,i=pA(e,l,a),u=0;for(;s-- >1;)i.set(t,u),u+=n,o>0&&(i.set(r,u),u+=o);i.set(t,u),dA(l,a)}}return 1},ZF=function(e){let t=fe(e,1),n=t.length,s=Hr(Lr(e,2,1),n),r=Hr(Lr(e,3,s),n);if(s<1&&(s=1),r>n&&(r=n),s>r)return 0;if(r-s>=Number.MAX_SAFE_INTEGER)return oe(e,"string slice too long");let o=r-s+1;cf(e,o,"string slice too long");for(let a=0;a<o;a++)Ut(e,t[s+a-1]);return o},YF=function(e){let t=new la(e),n={s:fe(e,1),off:0},s=0;for(;n.off<n.s.length;){let r=hf(t,s,n),o=r.opt,a=r.size,l=r.ntoalign;switch(a+=l,Pt(e,s<=pf-a,1,"format result too large"),s+=a,o){case hi:case gi:Ls(e,1,"variable-length format");default:break}}return Ut(e,s),1},$x=function(e,t,n,s,r){if(s<=4){let a=0;for(let l=s-1;l>=0;l--)a<<=os,a|=t[n?l:s-1-l];if(r){let l=1<<s*os-1;a=(a^l)-l}else a=a>>>0;return a}let o=0n;for(let a=s-1;a>=0;a--){let l=t[n?a:s-1-a];o=o<<BigInt(os)|BigInt(l)}if(s>$t){let a=t[n?$t-1:s-$t],i=r&&(a&128)!==0?_A:0;for(let u=$t;u<s;u++)t[n?u:s-1-u]!==i&&oe(e,y("%d-byte integer does not fit into Lua Integer"),s);o=BigInt.asIntN(64,o)}else o=BigInt.asIntN($t*os,o);return qr.shrink(o)},QF=function(e,t,n,s){hA.lua_assert(t.length>=s);let r=new DataView(new ArrayBuffer(s));for(let o=0;o<s;o++)r.setUint8(o,t[o]);return s==4?r.getFloat32(0,n):r.getFloat64(0,n)},$F=function(e){let t=new la(e),n={s:fe(e,1),off:0},s=fe(e,2),r=s.length,o=Hr(Lr(e,3,1),r)-1,a=0;for(Pt(e,o<=r&&o>=0,3,"initial position out of string");n.off<n.s.length;){let l=hf(t,o,n),i=l.opt,u=l.size,c=l.ntoalign;switch(o+c+u>r&&Ls(e,2,y("data string too short")),o+=c,cf(e,2,"too many results"),a++,i){case as:case rs:{let f=$x(e,s.subarray(o),t.islittle,u,i===as);Ut(e,f);break}case oa:{let f=QF(e,s.subarray(o),t.islittle,u);_F(e,f);break}case ia:{qs(e,s.subarray(o,o+u));break}case hi:{let f=$x(e,s.subarray(o),t.islittle,u,0);Pt(e,o+f+u<=r,2,"data string too short"),qs(e,s.subarray(o+u,o+u+f)),o+=f;break}case gi:{let f=ls(s,0,o);f===-1&&(f=s.length-o),qs(e,s.subarray(o,f)),o=f+1;break}case mi:case ff:case df:a--;break}o+=u}return Ut(e,o+1),a+1},ua=-1,xA=-2,AA=200,eM=y("^$*+?.([%-"),ca=class{constructor(t){this.src=null,this.src_init=null,this.src_end=null,this.p=null,this.p_end=null,this.L=t,this.matchdepth=NaN,this.level=NaN,this.capture=[]}},tM=function(e,t){return t=t-49,t<0||t>=e.level||e.capture[t].len===ua?oe(e.L,y("invalid capture index %%%d"),t+1):t},nM=function(e){let t=e.level;for(t--;t>=0;t--)if(e.capture[t].len===ua)return t;return oe(e.L,y("invalid pattern capture"))},eA=function(e,t){switch(e.p[t++]){case tn:return t===e.p_end&&oe(e.L,y("malformed pattern (ends with '%%')")),t+1;case 91:{e.p[t]===94&&t++;do t===e.p_end&&oe(e.L,y("malformed pattern (missing ']')")),e.p[t++]===tn&&t<e.p_end&&t++;while(e.p[t]!==93);return t+1}default:return t}},SA=function(e,t){switch(t){case 97:return Xx(e);case 65:return!Xx(e);case 99:return Qp(e);case 67:return!Qp(e);case 100:return en(e);case 68:return!en(e);case 103:return $p(e);case 71:return!$p(e);case 108:return ef(e);case 76:return!ef(e);case 112:return Wx(e);case 80:return!Wx(e);case 115:return zx(e);case 83:return!zx(e);case 117:return tf(e);case 85:return!tf(e);case 119:return nf(e);case 87:return!nf(e);case 120:return Jx(e);case 88:return!Jx(e);case 122:return e===0;case 90:return e!==0;default:return t===e}},sf=function(e,t,n,s){let r=!0;for(e.p[n+1]===94&&(r=!1,n++);++n<s;)if(e.p[n]===tn){if(n++,SA(t,e.p[n]))return r}else if(e.p[n+1]===45&&n+2<s){if(n+=2,e.p[n-2]<=t&&t<=e.p[n])return r}else if(e.p[n]===t)return r;return!r},gf=function(e,t,n,s){if(t>=e.src_end)return!1;{let r=e.src[t];switch(e.p[n]){case 46:return!0;case tn:return SA(r,e.p[n+1]);case 91:return sf(e,r,n,s-1);default:return e.p[n]===r}}},sM=function(e,t,n){if(n>=e.p_end-1&&oe(e.L,y("malformed pattern (missing arguments to '%%b'")),e.src[t]!==e.p[n])return null;{let s=e.p[n],r=e.p[n+1],o=1;for(;++t<e.src_end;)if(e.src[t]===r){if(--o===0)return t+1}else e.src[t]===s&&o++}return null},rM=function(e,t,n,s){let r=0;for(;gf(e,t+r,n,s);)r++;for(;r>=0;){let o=is(e,t+r,s+1);if(o)return o;r--}return null},oM=function(e,t,n,s){for(;;){let r=is(e,t,s+1);if(r!==null)return r;if(gf(e,t,n,s))t++;else return null}},tA=function(e,t,n,s){let r=e.level;r>=wF&&oe(e.L,y("too many captures")),e.capture[r]=e.capture[r]?e.capture[r]:{},e.capture[r].init=t,e.capture[r].len=s,e.level=r+1;let o;return(o=is(e,t,n))===null&&e.level--,o},aM=function(e,t,n){let s=nM(e);e.capture[s].len=t-e.capture[s].init;let r;return(r=is(e,t,n))===null&&(e.capture[s].len=ua),r},lM=function(e,t,n,s,r){return gA(e.subarray(t,t+r),n.subarray(s,s+r))},iM=function(e,t,n){n=tM(e,n);let s=e.capture[n].len;return e.src_end-t>=s&&lM(e.src,e.capture[n].init,e.src,t,s)?t+s:null},is=function(e,t,n){let s=!1,r=!0;for(e.matchdepth--===0&&oe(e.L,y("pattern too complex"));r||s;)if(r=!1,n!==e.p_end)switch(s?void 0:e.p[n]){case 40:{e.p[n+1]===41?t=tA(e,t,n+2,xA):t=tA(e,t,n+1,ua);break}case 41:{t=aM(e,t,n+1);break}case 36:{if(n+1!==e.p_end){s=!0;break}t=e.src.length-t===0?t:null;break}case tn:{switch(e.p[n+1]){case 98:{t=sM(e,t,n+2),t!==null&&(n+=4,r=!0);break}case 102:{n+=2,e.p[n]!==91&&oe(e.L,y("missing '[' after '%%f' in pattern"));let o=eA(e,n),a=t===e.src_init?0:e.src[t-1];if(!sf(e,a,n,o-1)&&sf(e,t===e.src_end?0:e.src[t],n,o-1)){n=o,r=!0;break}t=null;break}case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:{t=iM(e,t,e.p[n+1]),t!==null&&(n+=2,r=!0);break}default:s=!0}break}default:{s=!1;let o=eA(e,n);if(gf(e,t,n,o))switch(e.p[o]){case 63:{let a;(a=is(e,t+1,o+1))!==null?t=a:(n=o+1,r=!0);break}case 43:t++;case 42:t=rM(e,t,n,o);break;case 45:t=oM(e,t,n,o);break;default:t++,n=o,r=!0}else if(e.p[o]===42||e.p[o]===63||e.p[o]===45){n=o+1,r=!0;break}else t=null;break}}return e.matchdepth++,t},mf=function(e,t,n,s){if(t>=e.level)t===0?zp(e.L,e.src.subarray(n,s),s-n):oe(e.L,y("invalid capture index %%%d"),t+1);else{let r=e.capture[t].len;r===ua&&oe(e.L,y("unfinished capture")),r===xA?Ut(e.L,e.capture[t].init-e.src_init+1):zp(e.L,e.src.subarray(e.capture[t].init),r)}},pi=function(e,t,n){let s=e.level===0&&t!=null?1:e.level;cf(e.L,s,"too many captures");for(let r=0;r<s;r++)mf(e,r,t,n);return s},cM=function(e,t){for(let n=0;n<t;n++)if(ls(eM,e[n])!==-1)return!1;return!0},_f=function(e,t,n,s,r,o){e.L=t,e.matchdepth=AA,e.src=n,e.src_init=0,e.src_end=s,e.p=r,e.p_end=o},bf=function(e){e.level=0,hA.lua_assert(e.matchdepth===AA)},uM=function(e,t,n){let s=n>>>0,r=t.length;if(r===0)return s;for(;(s=e.indexOf(t[0],s))!==-1;s++)if(gA(e.subarray(s,s+r),t))return s;return-1},kA=function(e,t){let n=fe(e,1),s=fe(e,2),r=n.length,o=s.length,a=Hr(Lr(e,3,1),r);if(a<1)a=1;else if(a>r+1)return Jp(e),1;if(t&&(lf(e,4)||cM(s,o))){let l=uM(n.subarray(a-1),s,0);if(l>-1)return Ut(e,a+l),Ut(e,a+l+o-1),2}else{let l=new ca(e),i=a-1,u=s[0]===94;u&&(s=s.subarray(1),o--),_f(l,e,n,r,s,o);do{let c;if(bf(l),(c=is(l,i,0))!==null)return t?(Ut(e,i+1),Ut(e,c),pi(l,null,0)+2):pi(l,i,c)}while(i++<l.src_end&&!u)}return Jp(e),1},pM=function(e){return kA(e,1)},fM=function(e){return kA(e,0)},rf=class{constructor(){this.src=NaN,this.p=NaN,this.lastmatch=NaN,this.ms=new ca}},dM=function(e){let t=EF(e,vF(3));t.ms.L=e;for(let n=t.src;n<=t.ms.src_end;n++){bf(t.ms);let s;if((s=is(t.ms,n,t.p))!==null&&s!==t.lastmatch)return t.src=t.lastmatch=s,pi(t.ms,n,s)}return 0},hM=function(e){let t=fe(e,1),n=fe(e,2),s=t.length,r=n.length;lA(e,2);let o=new rf;return mF(e,o),_f(o.ms,e,t,s,n,r),o.src=0,o.p=0,o.lastmatch=null,gF(e,dM,3),1},gM=function(e,t,n,s){let r=e.L,o=iA(r,3),a=o.length;for(let l=0;l<a;l++)o[l]!==tn?Ze(t,o[l]):(l++,en(o[l])?o[l]===48?Gr(t,e.src.subarray(n,s),s-n):(mf(e,o[l]-49,n,s),uf(r,-1),bF(r,-2),aa(t)):(o[l]!==tn&&oe(r,y("invalid use of '%c' in replacement string"),tn),Ze(t,o[l])))},mM=function(e,t,n,s,r){let o=e.L;switch(r){case of:{Zp(o,3);let a=pi(e,n,s);cF(o,a,1);break}case oA:{mf(e,0,n,s),fF(o,3);break}default:{gM(e,t,n,s);return}}lf(o,-1)?hF(o,-1)||oe(o,y("invalid replacement value (a %s)"),NF(o,-1)):(ui(o,1),zp(o,e.src.subarray(n,s),s-n)),aa(t)},_M=function(e){let t=fe(e,1),n=t.length,s=fe(e,2),r=s.length,o=null,a=cA(e,3),l=Lr(e,4,n+1),i=s[0]===94,u=0,c=new ca(e),f=new jr;for(Pt(e,a===sA||a===rA||a===of||a===oA,3,"string/function/table expected"),fi(e,f),i&&(s=s.subarray(1),r--),_f(c,e,t,n,s,r),t=0,s=0;u<l;){let _;if(bf(c),(_=is(c,t,s))!==null&&_!==o)u++,mM(c,f,t,_,a),t=o=_;else if(t<c.src_end)Ze(f,c.src[t++]);else break;if(i)break}return Gr(f,c.src.subarray(t,c.src_end),c.src_end-t),di(f),Ut(e,u),2},bM={byte:ZF,char:UF,dump:FF,find:pM,format:LF,gmatch:hM,gsub:_M,len:PF,lower:WF,match:fM,pack:jF,packsize:YF,rep:JF,reverse:XF,sub:VF,unpack:$F,upper:zF},xM=function(e){uF(e,0,1),af(e,""),Zp(e,-2),AF(e,-2),ui(e,1),Zp(e,-2),xF(e,-2,y("__index",!0)),ui(e,1)},AM=function(e){return RF(e,bM),xM(e),1};EA.exports.luaopen_string=AM});var kf=P((e4,NA)=>{"use strict";var{lua_gettop:SM,lua_pushcfunction:kM,lua_pushfstring:EM,lua_pushinteger:js,lua_pushnil:TA,lua_pushstring:vM,lua_pushvalue:TM,lua_setfield:RM,lua_tointeger:yM}=qe(),{luaL_Buffer:NM,luaL_addvalue:OM,luaL_argcheck:Wr,luaL_buffinit:CM,luaL_checkinteger:RA,luaL_checkstack:wM,luaL_checkstring:da,luaL_error:_i,luaL_newlib:IM,luaL_optinteger:pa,luaL_pushresult:VM}=rt(),{luastring_of:PM,to_luastring:Af}=Qe(),yA=1114111,Xr=function(e){return(e&192)===128},fa=function(e,t){return e>=0?e:0-e>t?0:t+e+1},UM=[255,127,2047,65535],Sf=function(e,t){let n=e[t],s=0;if(n<128)s=n;else{let r=0;for(;n&64;){let o=e[t+ ++r];if((o&192)!==128)return null;s=s<<6|o&63,n<<=1}if(s|=(n&127)<<r*5,r>3||s>yA||s<=UM[r])return null;t+=r}return{code:s,pos:t+1}},KM=function(e){let t=0,n=da(e,1),s=n.length,r=fa(pa(e,2,1),s),o=fa(pa(e,3,-1),s);for(Wr(e,1<=r&&--r<=s,2,"initial position out of string"),Wr(e,--o<s,3,"final position out of string");r<=o;){let a=Sf(n,r);if(a===null)return TA(e),js(e,r+1),2;r=a.pos,t++}return js(e,t),1},FM=Af("%U"),vA=function(e,t){let n=RA(e,t);Wr(e,0<=n&&n<=yA,t,"value out of range"),EM(e,FM,n)},MM=function(e){let t=SM(e);if(t===1)vA(e,1);else{let n=new NM;CM(e,n);for(let s=1;s<=t;s++)vA(e,s),OM(n);VM(n)}return 1},BM=function(e){let t=da(e,1),n=RA(e,2),s=n>=0?1:t.length+1;if(s=fa(pa(e,3,s),t.length),Wr(e,1<=s&&--s<=t.length,3,"position out of range"),n===0)for(;s>0&&Xr(t[s]);)s--;else if(Xr(t[s])&&_i(e,"initial position is a continuation byte"),n<0)for(;n<0&&s>0;){do s--;while(s>0&&Xr(t[s]));n++}else for(n--;n>0&&s<t.length;){do s++;while(Xr(t[s]));n--}return n===0?js(e,s+1):TA(e),1},DM=function(e){let t=da(e,1),n=fa(pa(e,2,1),t.length),s=fa(pa(e,3,n),t.length);if(Wr(e,n>=1,2,"out of range"),Wr(e,s<=t.length,3,"out of range"),n>s)return 0;if(s-n>=Number.MAX_SAFE_INTEGER)return _i(e,"string slice too long");let r=s-n+1;for(wM(e,r,"string slice too long"),r=0,n-=1;n<s;){let o=Sf(t,n);if(o===null)return _i(e,"invalid UTF-8 code");js(e,o.code),n=o.pos,r++}return r},GM=function(e){let t=da(e,1),n=t.length,s=yM(e,2)-1;if(s<0)s=0;else if(s<n)for(s++;Xr(t[s]);)s++;if(s>=n)return 0;{let r=Sf(t,s);return r===null||Xr(t[r.pos])?_i(e,Af("invalid UTF-8 code")):(js(e,s+1),js(e,r.code),2)}},qM=function(e){return da(e,1),kM(e,GM),TM(e,1),js(e,0),3},LM={char:MM,codepoint:DM,codes:qM,len:KM,offset:BM},HM=PM(91,0,45,127,194,45,244,93,91,128,45,191,93,42),jM=function(e){return IM(e,LM),vM(e,HM),RM(e,-2,Af("charpattern",!0)),1};NA.exports.luaopen_utf8=jM});var yf=P((t4,BA)=>{"use strict";var{LUA_OPLT:wA,LUA_TNUMBER:XM,lua_compare:IA,lua_gettop:vf,lua_isinteger:Xs,lua_isnoneornil:WM,lua_pushboolean:zM,lua_pushinteger:Ws,lua_pushliteral:OA,lua_pushnil:VA,lua_pushnumber:ve,lua_pushvalue:PA,lua_setfield:bi,lua_settop:Tf,lua_tointeger:Ef,lua_tointegerx:JM,lua_type:ZM}=qe(),{luaL_argcheck:Ai,luaL_argerror:YM,luaL_checkany:UA,luaL_checkinteger:ha,luaL_checknumber:Te,luaL_error:QM,luaL_newlib:$M,luaL_optnumber:eB}=rt(),{LUA_MAXINTEGER:KA,LUA_MININTEGER:tB,lua_numbertointeger:nB}=Ye(),{to_luastring:xi}=Qe(),ot=ct(),cs,CA=(e,t)=>(e<<t|e>>>32-t)>>>0,FA=function(e){let t=e>>>0||1,n=new Array(4);for(let s=0;s<4;s++){t=t+2654435769>>>0;let r=t;r=Math.imul(r^r>>>16,2246822507),r=Math.imul(r^r>>>13,3266489909),n[s]=(r^r>>>16)>>>0}return n},ga=null,MA=function(){ga===null&&(ga=FA(cs===void 0?Math.random()*4294967296>>>0:cs>>>0||1));let e=ga,t=Math.imul(CA(e[1]*5,7),9)>>>0,n=e[1]<<9>>>0;return e[2]^=e[0],e[3]^=e[1],e[1]^=e[2],e[0]^=e[3],e[2]^=n,e[3]=CA(e[3],11),t},sB=function(e){cs=e|0||1,cs<0&&(cs=cs+4294967296>>>0),ga=FA(cs)},rB=function(e){let t,n,s=ga===null&&cs===void 0?Math.random():MA()/4294967296;switch(vf(e)){case 0:return ve(e,s),1;case 1:{t=1,n=ha(e,1);break}case 2:{t=ha(e,1),n=ha(e,2);break}default:return QM(e,"wrong number of arguments")}Ai(e,ot.le(t,n),1,"interval is empty");{let l=ot.le(0,t)||ot.le(n,ot.add(KA,t));Ai(e,l,1,"interval too large")}let r=ot.toFloat(t),o=ot.toFloat(n);s*=o-r+1;let a=Math.floor(s)+r;return Ws(e,ot.normalize(a)),1},oB=function(e){return sB(Te(e,1)),MA(),0},aB=function(e){if(Xs(e,1)){let t=Ef(e,1);ot.lt(t,0)&&(t=ot.neg(t)),Ws(e,t)}else ve(e,Math.abs(Te(e,1)));return 1},lB=function(e){return ve(e,Math.sin(Te(e,1))),1},iB=function(e){return ve(e,Math.cos(Te(e,1))),1},cB=function(e){return ve(e,Math.tan(Te(e,1))),1},uB=function(e){return ve(e,Math.asin(Te(e,1))),1},pB=function(e){return ve(e,Math.acos(Te(e,1))),1},fB=function(e){let t=Te(e,1),n=eB(e,2,1);return ve(e,Math.atan2(t,n)),1},dB=function(e){let t=JM(e,1);return t!==!1?Ws(e,t):(UA(e,1),VA(e)),1},Rf=function(e,t){let n=nB(t);n!==!1?Ws(e,n):ve(e,t)},hB=function(e){return Xs(e,1)?Tf(e,1):Rf(e,Math.floor(Te(e,1))),1},gB=function(e){return Xs(e,1)?Tf(e,1):Rf(e,Math.ceil(Te(e,1))),1},mB=function(e){return ve(e,Math.sqrt(Te(e,1))),1},_B=function(e){let t=ha(e,1),n=ha(e,2);return zM(e,ot.ult(t,n)),1},bB=function(e){let t=Te(e,1),n;if(WM(e,2))n=Math.log(t);else{let s=Te(e,2);s===2?n=Math.log2(t):s===10?n=Math.log10(t):n=Math.log(t)/Math.log(s)}return ve(e,n),1},xB=function(e){return ve(e,Math.exp(Te(e,1))),1},AB=function(e){return ve(e,Te(e,1)*(180/Math.PI)),1},SB=function(e){return ve(e,Te(e,1)*(Math.PI/180)),1},kB=function(e){let t=vf(e),n=1;Ai(e,t>=1,1,"value expected");for(let s=2;s<=t;s++)IA(e,s,n,wA)&&(n=s);return PA(e,n),1},EB=function(e){let t=vf(e),n=1;Ai(e,t>=1,1,"value expected");for(let s=2;s<=t;s++)IA(e,n,s,wA)&&(n=s);return PA(e,n),1},vB=function(e){return ZM(e,1)===XM?Xs(e,1)?OA(e,"integer"):OA(e,"float"):(UA(e,1),VA(e)),1},TB=function(e){if(Xs(e,1)&&Xs(e,2)){let t=Ef(e,1),n=Ef(e,2);ot.eq(n,0)?YM(e,2,"zero"):Ws(e,ot.shrink(ot.toBigInt(t)%ot.toBigInt(n)))}else{let t=Te(e,1),n=Te(e,2);ve(e,t%n)}return 1},RB=function(e){if(Xs(e,1))Tf(e,1),ve(e,0);else{let t=Te(e,1),n=t<0?Math.ceil(t):Math.floor(t);Rf(e,n),ve(e,t===n?0:t-n)}return 2},yB={abs:aB,acos:pB,asin:uB,atan:fB,ceil:gB,cos:iB,deg:AB,exp:xB,floor:hB,fmod:TB,log:bB,max:EB,min:kB,modf:RB,rad:SB,random:rB,randomseed:oB,sin:lB,sqrt:mB,tan:cB,tointeger:dB,type:vB,ult:_B},NB=function(e){return $M(e,yB),ve(e,Math.PI),bi(e,-2,xi("pi",!0)),ve(e,1/0),bi(e,-2,xi("huge",!0)),Ws(e,KA),bi(e,-2,xi("maxinteger",!0)),Ws(e,tB),bi(e,-2,xi("mininteger",!0)),1};BA.exports.luaopen_math=NB});var Ff=P((n4,aS)=>{"use strict";var{LUA_MASKCALL:HA,LUA_MASKCOUNT:OB,LUA_MASKLINE:jA,LUA_MASKRET:XA,LUA_REGISTRYINDEX:ba,LUA_TFUNCTION:Of,LUA_TNIL:WA,LUA_TTABLE:CB,LUA_TUSERDATA:zA,lua_Debug:Cf,lua_call:wB,lua_checkstack:IB,lua_gethook:VB,lua_gethookcount:PB,lua_gethookmask:UB,lua_getinfo:JA,lua_getlocal:DA,lua_getmetatable:KB,lua_getstack:wf,lua_getupvalue:ZA,lua_getuservalue:FB,lua_insert:MB,lua_iscfunction:GA,lua_isfunction:YA,lua_isnoneornil:QA,lua_isthread:BB,lua_newtable:DB,lua_pcall:GB,lua_pop:qB,lua_pushboolean:LB,lua_pushfstring:HB,lua_pushinteger:If,lua_pushlightuserdata:$A,lua_pushliteral:jB,lua_pushnil:zr,lua_pushstring:zs,lua_pushvalue:vi,lua_rawgetp:Vf,lua_rawsetp:XB,lua_rotate:eS,lua_setfield:Ti,lua_sethook:WB,lua_setlocal:zB,lua_setmetatable:JB,lua_settop:xa,lua_setupvalue:ZB,lua_setuservalue:YB,lua_tojsstring:QB,lua_toproxy:$B,lua_tostring:eD,lua_tothread:tD,lua_touserdata:Pf,lua_type:tS,lua_upvalueid:nD,lua_upvaluejoin:sD,lua_xmove:Ri}=qe(),{luaL_argcheck:Si,luaL_argerror:Uf,luaL_checkany:yi,luaL_checkinteger:Js,luaL_checkstring:rD,luaL_checktype:Ni,luaL_error:oD,luaL_loadbuffer:aD,luaL_newlib:lD,luaL_optinteger:nS,luaL_optstring:iD,luaL_traceback:cD,lua_writestringerror:uD}=rt(),pD=ns(),{luastring_indexOf:nn,to_luastring:de}=Qe(),Kf=(e,t,n)=>{e!==t&&!IB(t,n)&&oD(e,de("stack overflow",!0))},fD=e=>(vi(e,ba),1),dD=e=>(yi(e,1),KB(e,1)||zr(e),1),hD=e=>{let t=tS(e,2);return Si(e,t==WA||t==CB,2,"nil or table expected"),xa(e,2),JB(e,1),1},gD=e=>(tS(e,1)!==zA?zr(e):FB(e,1),1),mD=e=>(Ni(e,1,zA),yi(e,2),xa(e,2),YB(e,1),1),Jr=e=>BB(e,1)?{arg:1,thread:tD(e,1)}:{arg:0,thread:e},ma=(e,t,n)=>{zs(e,n),Ti(e,-2,t)},_a=(e,t,n)=>{If(e,n),Ti(e,-2,t)},qA=(e,t,n)=>{LB(e,n),Ti(e,-2,t)},LA=(e,t,n)=>{e==t?eS(e,-2,1):Ri(t,e,1),Ti(e,-2,n)},_D=e=>{let t=new Cf,n=Jr(e),s=n.arg,r=n.thread,o=iD(e,s+2,"flnStu");if(Kf(e,r,3),YA(e,s+1))o=HB(e,de(">%s"),o),vi(e,s+1),Ri(e,r,1);else if(!wf(r,Js(e,s+1),t))return zr(e),1;return JA(r,o,t)||Uf(e,s+2,"invalid option"),DB(e),nn(o,83)>-1&&(ma(e,de("source",!0),t.source),ma(e,de("short_src",!0),t.short_src),_a(e,de("linedefined",!0),t.linedefined),_a(e,de("lastlinedefined",!0),t.lastlinedefined),ma(e,de("what",!0),t.what)),nn(o,108)>-1&&_a(e,de("currentline",!0),t.currentline),nn(o,117)>-1&&(_a(e,de("nups",!0),t.nups),_a(e,de("nparams",!0),t.nparams),qA(e,de("isvararg",!0),t.isvararg)),nn(o,110)>-1&&(ma(e,de("name",!0),t.name),ma(e,de("namewhat",!0),t.namewhat)),nn(o,116)>-1&&qA(e,de("istailcall",!0),t.istailcall),nn(o,76)>-1&&LA(e,r,de("activelines",!0)),nn(o,102)>-1&&LA(e,r,de("func",!0)),1},bD=e=>{let t=Jr(e),n=t.thread,s=t.arg,r=new Cf,o=Js(e,s+2);if(YA(e,s+1))return vi(e,s+1),zs(e,DA(e,null,o)),1;{let a=Js(e,s+1);if(!wf(n,a,r))return Uf(e,s+1,"level out of range");Kf(e,n,1);let l=DA(n,r,o);return l?(Ri(n,e,1),zs(e,l),eS(e,-2,1),2):(zr(e),1)}},xD=e=>{let t=Jr(e),n=t.thread,s=t.arg,r=new Cf,o=Js(e,s+1),a=Js(e,s+2);if(!wf(n,o,r))return Uf(e,s+1,"level out of range");yi(e,s+3),xa(e,s+3),Kf(e,n,1),Ri(e,n,1);let l=zB(n,r,a);return l===null&&qB(n,1),zs(e,l),1},sS=(e,t)=>{let n=Js(e,2);Ni(e,1,Of);let s=t?ZA(e,1,n):ZB(e,1,n);return s===null?0:(zs(e,s),MB(e,-(t+1)),t+1)},AD=e=>sS(e,1),SD=e=>(yi(e,3),sS(e,0)),Nf=(e,t,n)=>{let s=Js(e,n);return Ni(e,t,Of),Si(e,ZA(e,t,s)!==null,n,"invalid upvalue index"),s},kD=e=>{let t=Nf(e,1,2);return $A(e,nD(e,1,t)),1},ED=e=>{let t=Nf(e,1,2),n=Nf(e,3,4);return Si(e,!GA(e,1),1,"Lua function expected"),Si(e,!GA(e,3),3,"Lua function expected"),sD(e,1,t,3,n),0},ki=de("__hooks__",!0),vD=["call","return","line","count","tail call"].map(e=>de(e)),rS=(e,t)=>{Vf(e,ba,ki);let s=Pf(e,-1).get(e);s&&(s(e),zs(e,vD[t.event]),t.currentline>=0?If(e,t.currentline):zr(e),pD.lua_assert(JA(e,de("lS"),t)),wB(e,2,0))},TD=(e,t)=>{let n=0;return nn(e,99)>-1&&(n|=HA),nn(e,114)>-1&&(n|=XA),nn(e,108)>-1&&(n|=jA),t>0&&(n|=OB),n},RD=(e,t)=>{let n=0;return e&HA&&(t[n++]=99),e&XA&&(t[n++]=114),e&jA&&(t[n++]=108),t.subarray(0,n)},yD=e=>{let t,n,s,r=Jr(e),o=r.thread,a=r.arg;if(QA(e,a+1))xa(e,a+1),s=null,t=0,n=0;else{let u=rD(e,a+2);Ni(e,a+1,Of),n=nS(e,a+3,0),s=rS,t=TD(u,n)}let l;Vf(e,ba,ki)===WA?(l=new WeakMap,$A(e,l),XB(e,ba,ki)):l=Pf(e,-1);let i=$B(e,a+1);return l.set(o,i),WB(o,s,t,n),0},ND=e=>{let n=Jr(e).thread,s=new Uint8Array(5),r=UB(n),o=VB(n);return o===null?zr(e):o!==rS?jB(e,"external hook"):(Vf(e,ba,ki),Pf(e,-1).get(n)(e)),zs(e,RD(r,s)),If(e,PB(n)),3},OD=e=>{let t=Jr(e),n=t.thread,s=t.arg,r=eD(e,s+1);if(r===null&&!QA(e,s+1))vi(e,s+1);else{let o=nS(e,s+2,e===n?1:0);cD(e,n,r,o)}return 1},oS={gethook:ND,getinfo:_D,getlocal:bD,getmetatable:dD,getregistry:fD,getupvalue:AD,getuservalue:gD,sethook:yD,setlocal:xD,setmetatable:hD,setupvalue:SD,setuservalue:mD,traceback:OD,upvalueid:kD,upvaluejoin:ED},Ei;if(typeof process<"u"){let e=gs("readline-sync");e.setDefaultOptions({prompt:"lua_debug> "}),Ei=()=>e.prompt()}else typeof window<"u"&&(Ei=()=>{let e=prompt("lua_debug>","");return e!==null?e:""});Ei&&(oS.debug=e=>{for(;;){let t=Ei();if(t==="cont")return 0;if(t.length===0)continue;let n=de(t);(aD(e,n,n.length,de("=(debug command)",!0))||GB(e,0,0,0))&&uD(QB(e,-1),`
`),xa(e,0)}});var CD=e=>(lD(e,oS),1);aS.exports.luaopen_debug=CD});var Yf=P((s4,MS)=>{"use strict";var{LUA_DIRSEP:Oi,LUA_EXEC_DIR:wD,LUA_JSPATH_DEFAULT:ID,LUA_PATH_DEFAULT:VD,LUA_PATH_MARK:hS,LUA_PATH_SEP:Zs}=Ye(),{LUA_OK:Zr,LUA_REGISTRYINDEX:ps,LUA_TNIL:qf,LUA_TTABLE:PD,lua_callk:gS,lua_createtable:mS,lua_getfield:In,lua_insert:Lf,lua_isfunction:UD,lua_isnil:KD,lua_isstring:FD,lua_newtable:MD,lua_pop:wn,lua_pushboolean:_S,lua_pushcclosure:BD,lua_pushcfunction:DD,lua_pushfstring:Yr,lua_pushglobaltable:GD,lua_pushlightuserdata:qD,lua_pushliteral:bS,lua_pushlstring:Hf,lua_pushnil:xS,lua_pushstring:sn,lua_pushvalue:Ci,lua_rawgeti:LD,lua_rawgetp:AS,lua_rawseti:SS,lua_rawsetp:HD,lua_remove:Mf,lua_setfield:us,lua_setmetatable:jD,lua_settop:XD,lua_toboolean:kS,lua_tostring:Qr,lua_touserdata:WD,lua_upvalueindex:ES}=qe(),{LUA_LOADED_TABLE:vS,LUA_PRELOAD_TABLE:TS,luaL_Buffer:RS,luaL_addvalue:yS,luaL_buffinit:NS,luaL_checkstring:Vn,luaL_error:wi,luaL_getsubtable:lS,luaL_gsub:Aa,luaL_len:zD,luaL_loadfile:JD,luaL_newlib:ZD,luaL_optstring:iS,luaL_pushresult:OS,luaL_setfuncs:YD}=rt(),QD=ns(),{luastring_indexOf:jf,to_jsstring:Xf,to_luastring:F,to_uristring:CS}=Qe(),$D=Qf(),wS=(function(){return typeof process<"u"?global:typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:(0,eval)("this")})(),Wf=F("__JSLIBS__"),eG="LUA_PATH",tG="LUA_JSPATH",IS="-",VS=Oi,nG=Oi,cS=F("luaopen_"),sG=F("_"),rG="open",uS=F(""),Bf;if(typeof process>"u")Bf=function(e,t,n){t=CS(t);let s=new XMLHttpRequest;if(s.open("GET",t,!1),s.send(),s.status<200||s.status>=300)return sn(e,F(`${s.status}: ${s.statusText}`)),null;let r=s.response;/\/\/[#@] sourceURL=/.test(r)||(r+=" //# sourceURL="+t);let o;try{o=Function("fengari",r)}catch(l){return sn(e,F(`${l.name}: ${l.message}`)),null}let a=o($D);return typeof a=="function"||typeof a=="object"&&a!==null?a:a===void 0?wS:(sn(e,F(`library returned unexpected type (${typeof a})`)),null)};else{let e=gs("path");Bf=function(t,n,s){n=Xf(n),n=e.resolve(process.cwd(),n);try{return gs(n)}catch(r){return sn(t,F(r.message)),null}}}var oG=function(e,t,n){let s=t[Xf(n)];return s&&typeof s=="function"?s:(Yr(e,F("undefined symbol: %s"),n),null)},aG=function(e){In(e,ps,F("LUA_NOENV"));let t=kS(e,-1);return wn(e,1),t},Df;if(typeof process<"u"){let e=(qo(),ka(Go));Df=function(t){try{let n=e.openSync(t,"r");e.closeSync(n)}catch{return!1}return!0}}else Df=function(e){e=CS(e);let t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(),t.status>=200&&t.status<=299};var PS=1,zf=2,Gf=function(e,t,n){let s=iG(e,t);if(s===null){if(s=Bf(e,t,n[0]===42),s===null)return PS;cG(e,t,s)}if(n[0]===42)return _S(e,1),0;{let r=oG(e,s,n);return r===null?zf:(DD(e,r),0)}},lG=function(e){let t=Vn(e,1),n=Vn(e,2),s=Gf(e,t,n);return s===0?1:(xS(e),Lf(e,-2),bS(e,s===PS?rG:"init"),3)},pS=(function(){return typeof process<"u"?process.env:wS})(),fS=function(e,t,n,s){let r=`${n}${QD.LUA_VERSUFFIX}`;sn(e,F(r));let o=pS[r];o===void 0&&(o=pS[n]),o===void 0||aG(e)?sn(e,s):(o=Aa(e,F(o),F(Zs+Zs,!0),F(Zs+Xf(uS)+Zs,!0)),Aa(e,o,uS,s),Mf(e,-2)),us(e,-3,t),wn(e,1)},iG=function(e,t){AS(e,ps,Wf),In(e,-1,t);let n=WD(e,-1);return wn(e,2),n},cG=function(e,t,n){AS(e,ps,Wf),qD(e,n),Ci(e,-1),us(e,-3,t),SS(e,-2,zD(e,-2)+1),wn(e,1)},uG=function(e,t){for(;t[0]===Zs.charCodeAt(0);)t=t.subarray(1);if(t.length===0)return null;let n=jf(t,Zs.charCodeAt(0));return n<0&&(n=t.length),Hf(e,t,n),t.subarray(n)},US=function(e,t,n,s,r){let o=new RS;for(NS(e,o),s[0]!==0&&(t=Aa(e,t,s,r));(n=uG(e,n))!==null;){let a=Aa(e,Qr(e,-1),F(hS,!0),t);if(Mf(e,-2),Df(a))return a;Yr(e,F(`
	no file '%s'`),a),Mf(e,-2),yS(o)}return OS(o),null},pG=function(e){return US(e,Vn(e,1),Vn(e,2),iS(e,3,"."),iS(e,4,Oi))!==null?1:(xS(e),Lf(e,-2),2)},Jf=function(e,t,n,s){In(e,ES(1),n);let r=Qr(e,-1);return r===null&&wi(e,F("'package.%s' must be a string"),n),US(e,t,r,F("."),s)},Zf=function(e,t,n){return t?(sn(e,n),2):wi(e,F(`error loading module '%s' from file '%s':
	%s`),Qr(e,1),n,Qr(e,-1))},fG=function(e){let t=Vn(e,1),n=Jf(e,t,F("path",!0),F(nG,!0));return n===null?1:Zf(e,JD(e,n)===Zr,n)},KS=function(e,t,n){let s;n=Aa(e,n,F("."),sG);let r=jf(n,IS.charCodeAt(0));if(r>=0){s=Hf(e,n,r),s=Yr(e,F("%s%s"),cS,s);let o=Gf(e,t,s);if(o!==zf)return o;n=r+1}return s=Yr(e,F("%s%s"),cS,n),Gf(e,t,s)},dG=function(e){let t=Vn(e,1),n=Jf(e,t,F("jspath",!0),F(VS,!0));return n===null?1:Zf(e,KS(e,n,t)===0,n)},hG=function(e){let t=Vn(e,1),n=jf(t,46),s;if(n<0)return 0;Hf(e,t,n);let r=Jf(e,Qr(e,-1),F("jspath",!0),F(VS,!0));return r===null?1:(s=KS(e,r,t))!==0?s!=zf?Zf(e,0,r):(Yr(e,F(`
	no module '%s' in file '%s'`),t,r),1):(sn(e,r),2)},gG=function(e){let t=Vn(e,1);return In(e,ps,TS),In(e,-1,t)===qf&&Yr(e,F(`
	no field package.preload['%s']`),t),1},mG=function(e,t,n,s){let r=new RS;return NS(e,r),In(e,ES(1),F("searchers",!0))!==PD&&wi(e,F("'package.searchers' must be a table")),FS(e,Zr,{name:t,i:1,msg:r,ctx:n,k:s})},FS=function(e,t,n){for(;t===Zr?(LD(e,3,n.i)===qf&&(wn(e,1),OS(n.msg),wi(e,F("module '%s' not found:%s"),n.name,Qr(e,-1))),sn(e,n.name),gS(e,1,2,n,FS)):t=Zr,!UD(e,-2);n.i++)FD(e,-2)?(wn(e,1),yS(n.msg)):wn(e,2);return n.k(e,Zr,n.ctx)},_G=function(e){let t=Vn(e,1);return XD(e,1),In(e,ps,vS),In(e,2,t),kS(e,-1)?1:(wn(e,1),mG(e,t,t,bG))},bG=function(e,t,n){return sn(e,n),Lf(e,-2),gS(e,2,1,n,dS),dS(e,Zr,n)},dS=function(e,t,n){let s=n;return KD(e,-1)||us(e,2,s),In(e,2,s)==qf&&(_S(e,1),Ci(e,-1),us(e,2,s)),1},xG={loadlib:lG,searchpath:pG},AG={require:_G},SG=function(e){let t=[gG,fG,dG,hG,null];mS(e);for(let n=0;t[n];n++)Ci(e,-2),BD(e,t[n],1),SS(e,-2,n+1);us(e,-2,F("searchers",!0))},kG=function(e){MD(e),mS(e,0,1),jD(e,-2),HD(e,ps,Wf)},EG=function(e){return kG(e),ZD(e,xG),SG(e),fS(e,F("path",!0),eG,VD),fS(e,F("jspath",!0),tG,ID),bS(e,Oi+`
`+Zs+`
`+hS+`
`+wD+`
`+IS+`
`),us(e,-2,F("config",!0)),lS(e,ps,vS),us(e,-2,F("loaded",!0)),lS(e,ps,TS),us(e,-2,F("preload",!0)),GD(e),Ci(e,-2),YD(e,AG,1),wn(e,1),1};MS.exports.luaopen_package=EG});var $f=P((o4,BS)=>{var{lua_pushinteger:vG,lua_pushliteral:Ys,lua_setfield:fs}=qe(),{luaL_newlib:TG}=rt(),{FENGARI_AUTHORS:RG,FENGARI_COPYRIGHT:yG,FENGARI_RELEASE:NG,FENGARI_VERSION:OG,FENGARI_VERSION_MAJOR:CG,FENGARI_VERSION_MINOR:wG,FENGARI_VERSION_NUM:IG,FENGARI_VERSION_RELEASE:VG,to_luastring:ds}=Qe(),PG=function(e){return TG(e,{}),Ys(e,RG),fs(e,-2,ds("AUTHORS")),Ys(e,yG),fs(e,-2,ds("COPYRIGHT")),Ys(e,NG),fs(e,-2,ds("RELEASE")),Ys(e,OG),fs(e,-2,ds("VERSION")),Ys(e,CG),fs(e,-2,ds("VERSION_MAJOR")),Ys(e,wG),fs(e,-2,ds("VERSION_MINOR")),vG(e,IG),fs(e,-2,ds("VERSION_NUM")),Ys(e,VG),fs(e,-2,ds("VERSION_RELEASE")),1};BS.exports.luaopen_fengari=PG});var GS=P((a4,DS)=>{"use strict";var{lua_pop:UG}=qe(),{luaL_requiref:KG}=rt(),{to_luastring:FG}=Qe(),At={},MG=function(e){for(let t in At)KG(e,FG(t),At[t],1),UG(e,1)};DS.exports.luaL_openlibs=MG;var rn=ns(),{luaopen_base:BG}=vp(),{luaopen_coroutine:DG}=yp(),{luaopen_debug:GG}=Ff(),{luaopen_math:qG}=yf(),{luaopen_package:LG}=Yf(),{luaopen_os:HG}=Hp(),{luaopen_string:jG}=xf(),{luaopen_table:XG}=Pp(),{luaopen_utf8:WG}=kf();At._G=BG,At[rn.LUA_LOADLIBNAME]=LG;At[rn.LUA_COLIBNAME]=DG;At[rn.LUA_TABLIBNAME]=XG;At[rn.LUA_OSLIBNAME]=HG;At[rn.LUA_STRLIBNAME]=jG;At[rn.LUA_MATHLIBNAME]=qG;At[rn.LUA_UTF8LIBNAME]=WG;At[rn.LUA_DBLIBNAME]=GG;typeof process<"u"&&(At[rn.LUA_IOLIBNAME]=Dp().luaopen_io);var{luaopen_fengari:zG}=$f();At[rn.LUA_FENGARILIBNAME]=zG});var ns=P((l4,Y)=>{"use strict";var{LUA_VERSION_MAJOR:JG,LUA_VERSION_MINOR:ZG}=qe(),YG="_"+JG+"_"+ZG;Y.exports.LUA_VERSUFFIX=YG;Y.exports.lua_assert=function(e){};Y.exports.luaopen_base=vp().luaopen_base;var QG="coroutine";Y.exports.LUA_COLIBNAME=QG;Y.exports.luaopen_coroutine=yp().luaopen_coroutine;var $G="table";Y.exports.LUA_TABLIBNAME=$G;Y.exports.luaopen_table=Pp().luaopen_table;typeof process<"u"&&(Y.exports.LUA_IOLIBNAME="io",Y.exports.luaopen_io=Dp().luaopen_io);var eq="os";Y.exports.LUA_OSLIBNAME=eq;Y.exports.luaopen_os=Hp().luaopen_os;var tq="string";Y.exports.LUA_STRLIBNAME=tq;Y.exports.luaopen_string=xf().luaopen_string;var nq="utf8";Y.exports.LUA_UTF8LIBNAME=nq;Y.exports.luaopen_utf8=kf().luaopen_utf8;var sq="bit32";Y.exports.LUA_BITLIBNAME=sq;var rq="math";Y.exports.LUA_MATHLIBNAME=rq;Y.exports.luaopen_math=yf().luaopen_math;var oq="debug";Y.exports.LUA_DBLIBNAME=oq;Y.exports.luaopen_debug=Ff().luaopen_debug;var aq="package";Y.exports.LUA_LOADLIBNAME=aq;Y.exports.luaopen_package=Yf().luaopen_package;var lq="fengari";Y.exports.LUA_FENGARILIBNAME=lq;Y.exports.luaopen_fengari=$f().luaopen_fengari;var iq=GS();Y.exports.luaL_openlibs=iq.luaL_openlibs});var Qf=P((i4,Re)=>{"use strict";var at=Qe();Re.exports.FENGARI_AUTHORS=at.FENGARI_AUTHORS;Re.exports.FENGARI_COPYRIGHT=at.FENGARI_COPYRIGHT;Re.exports.FENGARI_RELEASE=at.FENGARI_RELEASE;Re.exports.FENGARI_VERSION=at.FENGARI_VERSION;Re.exports.FENGARI_VERSION_MAJOR=at.FENGARI_VERSION_MAJOR;Re.exports.FENGARI_VERSION_MINOR=at.FENGARI_VERSION_MINOR;Re.exports.FENGARI_VERSION_NUM=at.FENGARI_VERSION_NUM;Re.exports.FENGARI_VERSION_RELEASE=at.FENGARI_VERSION_RELEASE;Re.exports.luastring_eq=at.luastring_eq;Re.exports.luastring_indexOf=at.luastring_indexOf;Re.exports.luastring_of=at.luastring_of;Re.exports.to_jsstring=at.to_jsstring;Re.exports.to_luastring=at.to_luastring;Re.exports.to_uristring=at.to_uristring;var cq=Ye(),uq=qe(),pq=rt(),fq=ns();Re.exports.luaconf=cq;Re.exports.lua=uq;Re.exports.lauxlib=pq;Re.exports.lualib=fq});var dq=QS(Qf(),1);var qS={cli:`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- cli.lua
--
-- This Script contains the Code for the Prometheus CLI.

-- Configure package.path for requiring Prometheus.
local function script_path()
	local str = debug.getinfo(2, "S").source:sub(2)
	return str:match("(.*[/%\\\\])")
end
-- script_path() returns nil when the CLI is invoked without a directory
-- component in its own path (e.g. \`lua cli.lua ...\` from inside the same
-- directory, which is how a locally-cloned checkout is normally run, and
-- also how the test harness in this repo invokes it). Falling through to
-- \`nil .. "?.lua;"\` crashes before a single argument is even parsed. Guard
-- it exactly like prometheus.lua already does for the same pattern.
local resolvedScriptPath = script_path()
if resolvedScriptPath then
	package.path = resolvedScriptPath .. "?.lua;" .. package.path
end

local INSTALL_SCRIPT_URL = "https://raw.githubusercontent.com/prometheus-lua/Prometheus/master/install.sh"

local function run_shell(command)
	local ok = os.execute(command)
	if type(ok) == "number" then
		return ok == 0
	end
	if type(ok) == "boolean" then
		return ok
	end
	return false
end

local function get_version()
	local version = os.getenv("PROMETHEUS_LUA_VERSION")
	if version and version ~= "" then
		return version
	end
	return "dev"
end

local function print_help()
	print("Prometheus Lua CLI")
	print("Usage: prometheus-lua [command] [options] <input.lua>")
	print("")
	print("Commands:")
	print("  update                 Install latest release via installer script")
	print("  --version, -v          Print CLI version")
	print("")
	print("Obfuscation options:")
	print("  --preset, --p <name>   Use preset (e.g. Minify, Medium, High)")
	print("  --config, --c <file>   Use custom config Lua file")
	print("  --out, --o <file>      Set output path")
	print("  --Lua51                Force Lua 5.1 target")
	print("  --LuaU                 Force LuaU target")
	print("  --pretty               Pretty print output")
	print("  --nocolors             Disable colored logs")
	print("  --saveerrors           Persist parser errors to file")
end

local function run_update()
	local command
	if run_shell("command -v curl >/dev/null 2>&1") then
		command = string.format("curl -fsSL '%s' | sh", INSTALL_SCRIPT_URL)
	elseif run_shell("command -v wget >/dev/null 2>&1") then
		command = string.format("wget -qO- '%s' | sh", INSTALL_SCRIPT_URL)
	else
		io.stderr:write("Neither curl nor wget was found. Please install one of them and retry.\\n")
		os.exit(1)
	end

	print("Updating prometheus-lua using official installer")
	if not run_shell(command) then
		io.stderr:write("Update failed\\n")
		os.exit(1)
	end

	print("Update completed")
end

if arg[1] == "update" then
	run_update()
	os.exit(0)
end

if arg[1] == "--version" or arg[1] == "-v" then
	print(get_version())
	os.exit(0)
end

if arg[1] == "--help" or arg[1] == "-h" or arg[1] == "help" then
	print_help()
	os.exit(0)
end

---@diagnostic disable-next-line: different-requires
local Prometheus = require("prometheus")
Prometheus.Logger.logLevel = Prometheus.Logger.LogLevel.Info
Prometheus.Logger.errorCallback = function(...)
	local args = { ... }
	local message = table.concat(args, " ")
	io.stderr:write(Prometheus.colors(Prometheus.Config.NameUpper .. ": " .. message, "red") .. "\\n")
	os.exit(1)
end

-- Check if the file exists
local function file_exists(file)
	local f = io.open(file, "rb")
	if f then
		f:close()
	end
	return f ~= nil
end

string.split = function(str, sep)
	local fields = {}
	local pattern = string.format("([^%s]+)", sep)
	str:gsub(pattern, function(c)
		fields[#fields + 1] = c
	end)
	return fields
end

-- get all lines from a file, returns an empty
-- list/table if the file does not exist
local function lines_from(file)
	if not file_exists(file) then
		return {}
	end
	local lines = {}
	for line in io.lines(file) do
		lines[#lines + 1] = line
	end
	return lines
end

local function load_chunk(content, chunkName, environment)
	if type(loadstring) == "function" then
		local func, err = loadstring(content, chunkName)
		if not func then
			return nil, err
		end
		if environment and type(setfenv) == "function" then
			setfenv(func, environment)
		elseif environment and type(load) == "function" then
			return load(content, chunkName, "t", environment)
		end
		return func
	end

	if type(load) ~= "function" then
		return nil, "No load function available"
	end

	return load(content, chunkName, "t", environment)
end

local function run_cli()
	-- CLI
	local config, sourceFile, outFile, luaVersion, prettyPrint

	Prometheus.colors.enabled = true

	-- Parse Arguments
	local i = 1
	while i <= #arg do
		local curr = arg[i]
		if curr:sub(1, 2) == "--" then
			if curr == "--preset" or curr == "--p" then
				if config then
					Prometheus.Logger:warn("The config was set multiple times")
				end

				i = i + 1
				local preset = Prometheus.Presets[arg[i]]
				if not preset then
					Prometheus.Logger:error(string.format('A Preset with the name "%s" was not found!', tostring(arg[i])))
				end

				config = preset
			elseif curr == "--config" or curr == "--c" then
				i = i + 1
				local filename = tostring(arg[i])
				if not file_exists(filename) then
					Prometheus.Logger:error(string.format('The config file "%s" was not found!', filename))
				end

				local content = table.concat(lines_from(filename), "\\n")
				-- Load Config from File
				local func, err = load_chunk(content, "@" .. filename, {})
				if not func then
					Prometheus.Logger:error(string.format('Failed to parse config file "%s": %s', filename, tostring(err)))
				end
				config = func()
			elseif curr == "--out" or curr == "--o" then
				i = i + 1
				if outFile then
					Prometheus.Logger:warn("The output file was specified multiple times!")
				end
				outFile = arg[i]
			elseif curr == "--nocolors" then
				Prometheus.colors.enabled = false
			elseif curr == "--Lua51" then
				luaVersion = "Lua51"
			elseif curr == "--LuaU" then
				luaVersion = "LuaU"
			elseif curr == "--pretty" then
				prettyPrint = true
			elseif curr == "--saveerrors" then
				-- Override error callback
				Prometheus.Logger.errorCallback = function(...)
					local args = { ... }
					local message = table.concat(args, " ")
					io.stderr:write(Prometheus.colors(Prometheus.Config.NameUpper .. ": " .. message, "red") .. "\\n")

					local fileName = sourceFile:sub(-4) == ".lua" and sourceFile:sub(0, -5) .. ".error.txt"
						or sourceFile .. ".error.txt"
					local handle = io.open(fileName, "w")
					handle:write(message)
					handle:close()

					os.exit(1)
				end
			else
				Prometheus.Logger:warn(string.format('The option "%s" is not valid and therefore ignored', curr))
			end
		else
			if sourceFile then
				Prometheus.Logger:error(string.format('Unexpected argument "%s"', arg[i]))
			end
			sourceFile = tostring(arg[i])
		end
		i = i + 1
	end

	if not sourceFile then
		Prometheus.Logger:error("No input file was specified!")
	end

	if not config then
		Prometheus.Logger:warn("No config was specified, falling back to Minify preset")
		config = Prometheus.Presets.Minify
	end

	-- Add Option to override Lua Version
	config.LuaVersion = luaVersion or config.LuaVersion
	config.PrettyPrint = prettyPrint ~= nil and prettyPrint or config.PrettyPrint

	if not file_exists(sourceFile) then
		Prometheus.Logger:error(string.format('The File "%s" was not found!', sourceFile))
	end

	if not outFile then
		if sourceFile:sub(-4) == ".lua" then
			outFile = sourceFile:sub(0, -5) .. ".obfuscated.lua"
		else
			outFile = sourceFile .. ".obfuscated.lua"
		end
	end

	local source = table.concat(lines_from(sourceFile), "\\n")
	local pipeline = Prometheus.Pipeline:fromConfig(config)
	local out = pipeline:apply(source, sourceFile)
	Prometheus.Logger:info(string.format('Writing output to "%s"', outFile))

	-- Write Output
	local handle = io.open(outFile, "w")
	handle:write(out)
	handle:close()
end

local ok, err = xpcall(run_cli, function(e)
	return tostring(e)
end)
if not ok then
	local message = tostring(err):gsub("^.-:%d+:%s*", "")
	io.stderr:write(Prometheus.colors(Prometheus.Config.NameUpper .. ": " .. message, "red") .. "\\n")
	os.exit(1)
end
`,colors:`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- colors.lua
--
-- This Script provides a simple method for syntax highlighting of Lua code

local keys = {
	reset = 0,
	bright = 1,
	dim = 2,
	underline = 4,
	blink = 5,
	reverse = 7,
	hidden = 8,
	black = 30,
	pink = 91,
	red = 31,
	green = 32,
	yellow = 33,
	blue = 34,
	magenta = 35,
	cyan = 36,
	grey = 37,
	gray = 37,
	white = 97,
	blackbg = 40,
	redbg = 41,
	greenbg = 42,
	yellowbg = 43,
	bluebg = 44,
	magentabg = 45,
	cyanbg = 46,
	greybg = 47,
	graybg = 47,
	whitebg = 107,
}

local escapeString = string.char(27) .. "[%dm"
local function escapeNumber(number)
	return escapeString:format(number)
end

local settings = {
	enabled = true,
}

local function colors(str, ...)
	if not settings.enabled then
		return str
	end
	str = tostring(str or "")

	local escapes = {}
	for _, name in ipairs({ ... }) do
		table.insert(escapes, escapeNumber(keys[name]))
	end

	return escapeNumber(keys.reset) .. table.concat(escapes) .. str .. escapeNumber(keys.reset)
end

return setmetatable(settings, {
	__call = function(_, ...)
		return colors(...)
	end,
})
`,config:`
-- This Script is Part of the Prometheus Obfuscator by Levno_710
--
-- config.lua
--
-- In this Script, some Global config Variables are defined

local NAME = "Prometheus";
local REVISION = "Alpha";
local VERSION = "v0.2";
local BY = "levno-710";

for _, currArg in pairs(arg or {}) do
	if currArg == "--CI" then
		local releaseName = string.gsub(string.format("%s %s %s", NAME, REVISION, VERSION), "%s", "-")
		print(releaseName)
	end

	if currArg == "--FullVersion" then
		print(VERSION)
	end
end

-- Config Starts here
return {
	Name = NAME,
	NameUpper = string.upper(NAME),
	NameAndVersion = string.format("%s %s", NAME, VERSION),
	Version = VERSION;
	Revision = REVISION;
	-- Config Starts Here
	IdentPrefix = "__prometheus_"; -- The Prefix used for Identifiers generated by PROMETHEUS. NOTE: There should be no identifiers in the script to be obfuscated starting with that prefix, because that can lead to weird bugs

	SPACE = " "; -- The Whitespace to be used by the unparser
	TAB = "\\t"; -- The Tab Whitespace to be used by the unparser for pretty printing
}
`,highlightlua:`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- highlightlua.lua
--
-- This Script provides a simple Method for Syntax Highlighting of Lua code

local Tokenizer = require("prometheus.tokenizer");
local colors = require("colors");
local TokenKind = Tokenizer.TokenKind;
local lookupify = require("prometheus.util").lookupify;

return function(code, luaVersion)
    local out = "";
    local tokenizer = Tokenizer:new({
        LuaVersion = luaVersion,
    });

    tokenizer:append(code);
    local tokens = tokenizer:scanAll();

    local nonColorSymbols = lookupify{
        ",", ";", "(", ")", "{", "}", ".", ":", "[", "]"
    }

    local defaultGlobals = lookupify{
        "string", "table", "bit32", "bit"
    }

    local currentPos = 1;
    for _, token in ipairs(tokens) do
        if token.startPos >= currentPos then
            out = out .. string.sub(code, currentPos, token.startPos);
        end
        if token.kind == TokenKind.Ident then
            if defaultGlobals[token.source] then
                out = out .. colors(token.source, "red");
            else
                out = out .. token.source;
            end
        elseif token.kind == TokenKind.Keyword then
            if token.source == "nil" then
                out = out .. colors(token.source, "yellow");
            else
                out = out .. colors(token.source, "yellow");
            end
        elseif token.kind == TokenKind.Symbol then
            if nonColorSymbols[token.source] then
                out = out .. token.source;
            else
                out = out .. colors(token.source, "yellow");
            end
        elseif token.kind == TokenKind.String then
            out = out .. colors(token.source, "green")
        elseif token.kind == TokenKind.Number then
            out = out .. colors(token.source, "red")
        else
            out = out .. token.source;
        end

        currentPos = token.endPos + 1;
    end
    return out;
end
`,logger:`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- logger.lua
--
-- This Script provides a Logger for Prometheus.

local logger = {}
local config = require("config");
local colors = require("colors");

logger.LogLevel = {
	Error = 0,
	Warn = 1,
	Log = 2,
	Info = 2,
	Debug = 3,
}

logger.logLevel = logger.LogLevel.Log;

logger.debugCallback = function(...)
	print(colors(config.NameUpper .. ": " ..  ..., "grey"));
end;
function logger:debug(...)
	if self.logLevel >= self.LogLevel.Debug then
		self.debugCallback(...);
	end
end

logger.logCallback = function(...)
	print(colors(config.NameUpper .. ": ", "magenta") .. ...);
end;
function logger:log(...)
	if self.logLevel >= self.LogLevel.Log then
		self.logCallback(...);
	end
end

function logger:info(...)
	if self.logLevel >= self.LogLevel.Log then
		self.logCallback(...);
	end
end

logger.warnCallback = function(...)
	print(colors(config.NameUpper .. ": " .. ..., "yellow"));
end;
function logger:warn(...)
	if self.logLevel >= self.LogLevel.Warn then
		self.warnCallback(...);
	end
end

logger.errorCallback = function(...)
	print(colors(config.NameUpper .. ": " .. ..., "red"))
	error(...);
end;
function logger:error(...)
	self.errorCallback(...);
	error(config.NameUpper .. ": logger.errorCallback did not throw an Error!");
end


return logger;
`,presets:`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- presets.lua
--
-- This Script provides the predefined obfuscation presets for Prometheus
--
-- Fengetheus preset tuning notes:
--   The Weak/Medium/Strong presets were strengthened by activating features
--   that Prometheus ships but the upstream presets left unused:
--     * Shuffle + Rotate on every ConstantArray pass (randomised index order
--       + per-call rotation of the decrypted array).
--     * LocalWrapperCount / LocalWrapperArgCount on ConstantArray (emits junk
--       wrapper functions with bogus arguments around the array decoder,
--       adding dead code and extra indirection that a reverser must untangle).
--     * SplitStrings (splits string literals into shuffled chunks reassembled
--       via custom local/global functions) on Medium and Strong.
--   The double-Vmify (bytecode-in-bytecode) was tested and is technically
--   correct thanks to a fix in compiler/upvalue.lua's createUpvaluesProxyFunc
--   __len metamethod (wrong scope parenting), but it was removed from the
--   Strong preset because it is too slow for real-world scripts (>5 minutes
--   for a 186-line GUI script). SplitStrings + LocalWrappers provide
--   comparable indirection at a fraction of the cost.
--   All configurations were verified to produce output that executes
--   identically to the original (same printed output AND return values) across
--   every test case and multiple seeds, in LuaNode-VM.

return {
	-- Minifies your code. Does not obfuscate it. No performance loss.
	["Minify"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {},
	},

	-- Weak obfuscation. Very readable, low performance loss.
	-- Strengthened: ConstantArray now shuffles and rotates its index array,
	-- making the constant lookup less trivially reversible at no correctness
	-- cost.
	["Weak"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "Vmify", Settings = {} },
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = true,
					Shuffle = true,
					Rotate = true,
					LocalWrapperThreshold = 0,
				},
			},
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- This is here for the tests.lua file.
	-- It helps isolate any problems with the Vmify step.
	-- It is not recommended to use this preset for obfuscation.
	-- Use the Weak, Medium, or Strong for obfuscation instead.
	["Vmify"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "Vmify", Settings = {} },
		},
	},

	-- Medium obfuscation. Moderate obfuscation, moderate performance loss.
	-- Strengthened with SplitStrings (string chunking) and LocalWrapperCount
	-- (junk wrapper functions around the constant-array decoder).
	["Medium"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "EncryptStrings", Settings = {} },
			{
				Name = "SplitStrings",
				Settings = {
					Threshold = 0.5,
					MinLength = 2,
					MaxLength = 6,
					ConcatenationType = "custom",
					CustomFunctionType = "global",
				},
			},
			{
				Name = "AntiTamper",
				Settings = {
					UseDebug = false,
				},
			},
			{ Name = "Vmify", Settings = {} },
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = true,
					Shuffle = true,
					Rotate = true,
					LocalWrapperThreshold = 1,
					LocalWrapperCount = 3,
					LocalWrapperArgCount = 8,
				},
			},
			{ Name = "NumbersToExpressions", Settings = {} },
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- Strong obfuscation, high performance loss.
	-- Maximum layering WITHOUT double-Vmify: a single Vmify pass (bytecode VM
	-- -- the hardest single layer to reverse), EncryptStrings, SplitStrings
	-- with local reassembly functions, AntiTamper, ProxifyLocals (wraps every
	-- local in a proxy with metamethods), two ConstantArray passes (full +
	-- strings-only) with shuffle/rotate and junk wrapper functions for extra
	-- indirection, NumbersToExpressions with representation mutation, and
	-- WrapInFunction.
	--
	-- Double-Vmify (bytecode-in-bytecode) was tested and is technically
	-- correct thanks to the upvalue.lua fix, but it is too slow for real-world
	-- scripts (a 186-line GUI script takes >5 minutes to obfuscate). It has
	-- been removed in favour of SplitStrings + LocalWrappers which add
	-- comparable indirection at a fraction of the cost. See CHANGELOG.md.
	["Strong"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "Vmify", Settings = {} },
			{ Name = "EncryptStrings", Settings = {} },
			{
				Name = "SplitStrings",
				Settings = {
					Threshold = 0.7,
					MinLength = 2,
					MaxLength = 8,
					ConcatenationType = "custom",
					CustomFunctionType = "local",
					CustomLocalFunctionsCount = 2,
				},
			},
			{
				Name = "AntiTamper",
				Settings = {
					UseDebug = false,
				},
			},
			{ Name = "ProxifyLocals", Settings = {} },
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = false,
					Shuffle = true,
					Rotate = true,
					LocalWrapperThreshold = 1,
					LocalWrapperCount = 4,
					LocalWrapperArgCount = 10,
				},
			},
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = true,
					Shuffle = true,
					Rotate = true,
					LocalWrapperThreshold = 0,
				},
			},
			{
				Name = "NumbersToExpressions",
				Settings = {
					NumberRepresentationMutation = true,
				},
			},
			{ Name = "WrapInFunction", Settings = {} },
		},
	},
}
`,"prometheus.ast":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- ast.lua
--
-- This Script provides the Abstract Syntax Tree (AST) for Prometheus.

local Ast = {}

local AstKind = {
	-- Misc
	TopNode = "TopNode";
	Block = "Block";

	-- Statements
	ContinueStatement = "ContinueStatement";
	BreakStatement = "BreakStatement";
	DoStatement = "DoStatement";
	WhileStatement = "WhileStatement";
	ReturnStatement = "ReturnStatement";
	RepeatStatement = "RepeatStatement";
	ForInStatement = "ForInStatement";
	ForStatement = "ForStatement";
	IfStatement = "IfStatement";
	FunctionDeclaration = "FunctionDeclaration";
	LocalFunctionDeclaration = "LocalFunctionDeclaration";
	LocalVariableDeclaration = "LocalVariableDeclaration";
	FunctionCallStatement = "FunctionCallStatement";
	PassSelfFunctionCallStatement = "PassSelfFunctionCallStatement";
	AssignmentStatement = "AssignmentStatement";

	-- LuaU Compound Statements
	CompoundAddStatement = "CompoundAddStatement";
	CompoundSubStatement = "CompoundSubStatement";
	CompoundMulStatement = "CompoundMulStatement";
	CompoundDivStatement = "CompoundDivStatement";
	CompoundModStatement = "CompoundModStatement";
	CompoundPowStatement = "CompoundPowStatement";
	CompoundConcatStatement = "CompoundConcatStatement";

	-- Assignment Index
	AssignmentIndexing = "AssignmentIndexing";
	AssignmentVariable = "AssignmentVariable";

	-- Expression Nodes
	BooleanExpression = "BooleanExpression";
	NumberExpression = "NumberExpression";
	StringExpression = "StringExpression";
	NilExpression = "NilExpression";
	VarargExpression = "VarargExpression";
	OrExpression = "OrExpression";
	AndExpression = "AndExpression";
	LessThanExpression = "LessThanExpression";
	GreaterThanExpression = "GreaterThanExpression";
	LessThanOrEqualsExpression = "LessThanOrEqualsExpression";
	GreaterThanOrEqualsExpression = "GreaterThanOrEqualsExpression";
	NotEqualsExpression = "NotEqualsExpression";
	EqualsExpression = "EqualsExpression";
	StrCatExpression = "StrCatExpression";
	AddExpression = "AddExpression";
	SubExpression = "SubExpression";
	MulExpression = "MulExpression";
	DivExpression = "DivExpression";
	ModExpression = "ModExpression";
	NotExpression = "NotExpression";
	LenExpression = "LenExpression";
	NegateExpression = "NegateExpression";
	PowExpression = "PowExpression";
	IndexExpression = "IndexExpression";
	FunctionCallExpression = "FunctionCallExpression";
	PassSelfFunctionCallExpression = "PassSelfFunctionCallExpression";
	VariableExpression = "VariableExpression";
	FunctionLiteralExpression = "FunctionLiteralExpression";
	TableConstructorExpression = "TableConstructorExpression";

	-- Table Entry
	TableEntry = "TableEntry";
	KeyedTableEntry = "KeyedTableEntry";

	-- Misc
	NopStatement = "NopStatement";

	IfElseExpression = "IfElseExpression";
}

local astKindExpressionLookup = {
	[AstKind.BooleanExpression] = 0;
	[AstKind.NumberExpression] = 0;
	[AstKind.StringExpression] = 0;
	[AstKind.NilExpression] = 0;
	[AstKind.VarargExpression] = 0;
	[AstKind.OrExpression] = 12;
	[AstKind.AndExpression] = 11;
	[AstKind.LessThanExpression] = 10;
	[AstKind.GreaterThanExpression] = 10;
	[AstKind.LessThanOrEqualsExpression] = 10;
	[AstKind.GreaterThanOrEqualsExpression] = 10;
	[AstKind.NotEqualsExpression] = 10;
	[AstKind.EqualsExpression] = 10;
	[AstKind.StrCatExpression] = 9;
	[AstKind.AddExpression] = 8;
	[AstKind.SubExpression] = 8;
	[AstKind.MulExpression] = 7;
	[AstKind.DivExpression] = 7;
	[AstKind.ModExpression] = 7;
	[AstKind.NotExpression] = 5;
	[AstKind.LenExpression] = 5;
	[AstKind.NegateExpression] = 5;
	[AstKind.PowExpression] = 4;
	[AstKind.IndexExpression] = 1;
	[AstKind.AssignmentIndexing] = 1;
	[AstKind.FunctionCallExpression] = 2;
	[AstKind.PassSelfFunctionCallExpression] = 2;
	[AstKind.VariableExpression] = 0;
	[AstKind.AssignmentVariable] = 0;
	[AstKind.FunctionLiteralExpression] = 3;
	[AstKind.TableConstructorExpression] = 3;
}

Ast.AstKind = AstKind;

function Ast.astKindExpressionToNumber(kind)
	return astKindExpressionLookup[kind] or 100;
end

function Ast.ConstantNode(val)
	if type(val) == "nil" then
		return Ast.NilExpression();
	end

	if type(val) == "string" then
		return Ast.StringExpression(val);
	end

	if type(val) == "number" then
		return Ast.NumberExpression(val);
	end

	if type(val) == "boolean" then
		return Ast.BooleanExpression(val);
	end
end



function Ast.NopStatement()
	return {
		kind = AstKind.NopStatement;
	}
end

function Ast.IfElseExpression(condition, true_value, elseifs, false_value)
	return {
		kind = AstKind.IfElseExpression,
		condition = condition,
		true_value = true_value,
		elseifs = elseifs,
		false_value = false_value
	}
end

-- Create Ast Top Node
function Ast.TopNode(body, globalScope)
	return {
		kind = AstKind.TopNode,
		body = body,
		globalScope = globalScope,

	}
end

function Ast.TableEntry(value)
	return {
		kind = AstKind.TableEntry,
		value = value,

	}
end

function Ast.KeyedTableEntry(key, value)
	return {
		kind = AstKind.KeyedTableEntry,
		key = key,
		value = value,

	}
end

function Ast.TableConstructorExpression(entries)
	return {
		kind = AstKind.TableConstructorExpression,
		entries = entries,
	};
end

-- Create Statement Block
function Ast.Block(statements, scope)
	return {
		kind = AstKind.Block,
		statements = statements,
		scope = scope,
	}
end

-- Create Break Statement
function Ast.BreakStatement(loop, scope)
	return {
		kind = AstKind.BreakStatement,
		loop = loop,
		scope = scope,
	}
end

-- Create Continue Statement
function Ast.ContinueStatement(loop, scope)
	return {
		kind = AstKind.ContinueStatement,
		loop = loop,
		scope = scope,
	}
end

function Ast.PassSelfFunctionCallStatement(base, passSelfFunctionName, args)
	return {
		kind = AstKind.PassSelfFunctionCallStatement,
		base = base,
		passSelfFunctionName = passSelfFunctionName,
		args = args,
	}
end

function Ast.AssignmentStatement(lhs, rhs)
	if(#lhs < 1) then
		print(debug.traceback());
		error("Something went wrong!");
	end
	return {
		kind = AstKind.AssignmentStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundAddStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundAddStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundSubStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundSubStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundMulStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundMulStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundDivStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundDivStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundPowStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundPowStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundModStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundModStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.CompoundConcatStatement(lhs, rhs)
	return {
		kind = AstKind.CompoundConcatStatement,
		lhs = lhs,
		rhs = rhs,
	}
end

function Ast.FunctionCallStatement(base, args)
	return {
		kind = AstKind.FunctionCallStatement,
		base = base,
		args = args,
	}
end

function Ast.ReturnStatement(args)
	return {
		kind = AstKind.ReturnStatement,
		args = args,
	}
end

function Ast.DoStatement(body)
	return {
		kind = AstKind.DoStatement,
		body = body,
	}
end

function Ast.WhileStatement(body, condition, parentScope)
	return {
		kind = AstKind.WhileStatement,
		body = body,
		condition = condition,
		parentScope = parentScope,
	}
end

function Ast.ForInStatement(scope, vars, expressions, body, parentScope)
	return {
		kind = AstKind.ForInStatement,
		scope = scope,
		ids = vars,
		vars = vars,
		expressions = expressions,
		body = body,
		parentScope = parentScope,
	}
end

function Ast.ForStatement(scope, id, initialValue, finalValue, incrementBy, body, parentScope)
	return {
		kind = AstKind.ForStatement,
		scope = scope,
		id = id,
		initialValue = initialValue,
		finalValue = finalValue,
		incrementBy = incrementBy,
		body = body,
		parentScope = parentScope,
	}
end

function Ast.RepeatStatement(condition, body, parentScope)
	return {
		kind = AstKind.RepeatStatement,
		body = body,
		condition = condition,
		parentScope = parentScope,
	}
end

function Ast.IfStatement(condition, body, elseifs, elsebody)
	return {
		kind = AstKind.IfStatement,
		condition = condition,
		body = body,
		elseifs = elseifs,
		elsebody = elsebody,
	}
end

function Ast.FunctionDeclaration(scope, id, indices, args, body)
	return {
		kind = AstKind.FunctionDeclaration,
		scope = scope,
		baseScope = scope,
		id = id,
		baseId = id,
		indices = indices,
		args = args,
		body = body,
		getName = function(self)
			return self.scope:getVariableName(self.id);
		end,
	}
end

function Ast.LocalFunctionDeclaration(scope, id, args, body)
	return {
		kind = AstKind.LocalFunctionDeclaration,
		scope = scope,
		id = id,
		args = args,
		body = body,
		getName = function(self)
			return self.scope:getVariableName(self.id);
		end,
	}
end

function Ast.LocalVariableDeclaration(scope, ids, expressions)
	return {
		kind = AstKind.LocalVariableDeclaration,
		scope = scope,
		ids = ids,
		expressions = expressions,
	}
end

function Ast.VarargExpression()
	return {
		kind = AstKind.VarargExpression;
		isConstant = false,
	}
end

function Ast.BooleanExpression(value)
	return {
		kind = AstKind.BooleanExpression,
		isConstant = true,
		value = value,
	}
end

function Ast.NilExpression()
	return {
		kind = AstKind.NilExpression,
		isConstant = true,
		value = nil,
	}
end

function Ast.NumberExpression(value)
	return {
		kind = AstKind.NumberExpression,
		isConstant = true,
		value = value,
	}
end

function Ast.StringExpression(value)
	return {
		kind = AstKind.StringExpression,
		isConstant = true,
		value = value,
	}
end

-- Patch 13 (v1.3.2): Constant folding must never promote a finite expression
-- into a non-finite (inf / -inf / NaN) constant. Under Lua 5.3/Fengari, an
-- arithmetic operation on finite operands can legally produce Infinity (e.g.
-- a numerically-looking string folded as a number: \`"67" ^ 16777216\`), and
-- once such a value enters the AST as a Number constant it later crashes
-- steps that decompose numeric literals (NumbersToExpressions fails with
-- "attempt to perform arithmetic on a nil value" when handed -Infinity).
-- When the folded result is non-finite we leave the original expression
-- intact, which matches runtime semantics exactly (a non-finite constant
-- could never be produced by folding a finite expression at runtime either).
local function isFiniteNumber(v)
	return type(v) == "number" and v == v and v ~= math.huge and v ~= -math.huge
end

function Ast.OrExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value or rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.OrExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.AndExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value and rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.AndExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.LessThanExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value < rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.LessThanExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.GreaterThanExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value > rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.GreaterThanExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.LessThanOrEqualsExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value <= rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.LessThanOrEqualsExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.GreaterThanOrEqualsExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value >= rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.GreaterThanOrEqualsExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.NotEqualsExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value ~= rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.NotEqualsExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.EqualsExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value == rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.EqualsExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.StrCatExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value .. rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.StrCatExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.AddExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value + rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.AddExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.SubExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value - rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.SubExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.MulExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value * rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.MulExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.DivExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant and rhs.value ~= 0) then
		local success, val = pcall(function() return lhs.value / rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.DivExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.ModExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value % rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.ModExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.NotExpression(rhs, simplify)
	if(simplify and rhs.isConstant) then
		local success, val = pcall(function() return not rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.NotExpression,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.NegateExpression(rhs, simplify)
	if(simplify and rhs.isConstant) then
		local success, val = pcall(function() return -rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.NegateExpression,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.LenExpression(rhs, simplify)
	if(simplify and rhs.isConstant) then
		local success, val = pcall(function() return #rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.LenExpression,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.PowExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value ^ rhs.value end);
		if success and isFiniteNumber(val) then
			return Ast.ConstantNode(val);
		end
	end

	return {
		kind = AstKind.PowExpression,
		lhs = lhs,
		rhs = rhs,
		isConstant = false,
	}
end

function Ast.IndexExpression(base, index)
	return {
		kind = AstKind.IndexExpression,
		base = base,
		index = index,
		isConstant = false,
	}
end

function Ast.AssignmentIndexing(base, index)
	return {
		kind = AstKind.AssignmentIndexing,
		base = base,
		index = index,
		isConstant = false,
	}
end

function Ast.PassSelfFunctionCallExpression(base, passSelfFunctionName, args)
	return {
		kind = AstKind.PassSelfFunctionCallExpression,
		base = base,
		passSelfFunctionName = passSelfFunctionName,
		args = args,

	}
end

function Ast.FunctionCallExpression(base, args)
	return {
		kind = AstKind.FunctionCallExpression,
		base = base,
		args = args,
	}
end

function Ast.VariableExpression(scope, id)
	scope:addReference(id);
	return {
		kind = AstKind.VariableExpression,
		scope = scope,
		id = id,
		getName = function(self)
			return self.scope.getVariableName(self.id);
		end,
	}
end

function Ast.AssignmentVariable(scope, id)
	scope:addReference(id);
	return {
		kind = AstKind.AssignmentVariable,
		scope = scope,
		id = id,
		getName = function(self)
			return self.scope.getVariableName(self.id);
		end,
	}
end

function Ast.FunctionLiteralExpression(args, body)
	return {
		kind = AstKind.FunctionLiteralExpression,
		args = args,
		body = body,
	}
end



return Ast;
`,"prometheus.compiler.block":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- block.lua
--
-- Block management for the compiler

local Scope = require("prometheus.scope");
local util = require("prometheus.util");

local lookupify = util.lookupify;

return function(Compiler)
    function Compiler:createBlock()
        local id;
        repeat
            id = math.random(0, 2^24)
        until not self.usedBlockIds[id];
        self.usedBlockIds[id] = true;

        local scope = Scope:new(self.containerFuncScope);
        local block = {
            id = id;
            statements = {};
            scope = scope;
            advanceToNextBlock = true;
        };
        table.insert(self.blocks, block);
        return block;
    end

    function Compiler:setActiveBlock(block)
        self.activeBlock = block;
    end

    function Compiler:addStatement(statement, writes, reads, usesUpvals)
        if(self.activeBlock.advanceToNextBlock) then
            table.insert(self.activeBlock.statements, {
                statement = statement,
                writes = lookupify(writes),
                reads = lookupify(reads),
                usesUpvals = usesUpvals or false,
            });
        end
    end
end
`,"prometheus.compiler.compile_core":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- compile_core.lua
-- This Script contains the core compilation functions: compileTopNode, compileFunction, compileBlock,
-- compileStatement, and compileExpression

local compileTop = require("prometheus.compiler.compile_top");
local statementHandlers = require("prometheus.compiler.statements");
local expressionHandlers = require("prometheus.compiler.expressions");
local Ast = require("prometheus.ast");
local logger = require("logger");

return function(Compiler)
    compileTop(Compiler);

    function Compiler:compileStatement(statement, funcDepth)
        local handler = statementHandlers[statement.kind];
        if handler then
            handler(self, statement, funcDepth);
            return;
        end
        logger:error(string.format("%s is not a compileable statement!", statement.kind));
    end

    function Compiler:compileExpression(expression, funcDepth, numReturns)
        local handler = expressionHandlers[expression.kind];
        if handler then
            return handler(self, expression, funcDepth, numReturns);
        end
        logger:error(string.format("%s is not an compliable expression!", expression.kind));
    end
end
`,"prometheus.compiler.compile_top":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- compile_top.lua
--
-- This Script contains the compilation of the top node, function, and block.

local Ast = require("prometheus.ast");
local util = require("prometheus.util");
local visitast = require("prometheus.visitast");

local lookupify = util.lookupify;
local AstKind = Ast.AstKind;

return function(Compiler)
    function Compiler:compileTopNode(node)
        local startBlock = self:createBlock();
        local scope = startBlock.scope;
        self.startBlockId = startBlock.id;
        self:setActiveBlock(startBlock);

        local varAccessLookup = lookupify{
            AstKind.AssignmentVariable,
            AstKind.VariableExpression,
            AstKind.FunctionDeclaration,
            AstKind.LocalFunctionDeclaration,
        }

        local functionLookup = lookupify{
            AstKind.FunctionDeclaration,
            AstKind.LocalFunctionDeclaration,
            AstKind.FunctionLiteralExpression,
            AstKind.TopNode,
        }
        visitast(node, function(node, data)
            if node.kind == AstKind.Block then
                node.scope.__depth = data.functionData.depth;
            end

            if varAccessLookup[node.kind] then
                if not node.scope.isGlobal then
                    if node.scope.__depth < data.functionData.depth then
                        if not self:isUpvalue(node.scope, node.id) then
                            self:makeUpvalue(node.scope, node.id);
                        end
                    end
                end
            end
        end, nil, nil)

        self.varargReg = self:allocRegister(true);
        scope:addReferenceToHigherScope(self.containerFuncScope, self.argsVar);
        scope:addReferenceToHigherScope(self.scope, self.selectVar);
        scope:addReferenceToHigherScope(self.scope, self.unpackVar);
        self:addStatement(self:setRegister(scope, self.varargReg, Ast.VariableExpression(self.containerFuncScope, self.argsVar)), {self.varargReg}, {}, false);

        self:compileBlock(node.body, 0);
        if(self.activeBlock.advanceToNextBlock) then
            self:addStatement(self:setPos(self.activeBlock.scope, nil), {self.POS_REGISTER}, {}, false);
            self:addStatement(self:setReturn(self.activeBlock.scope, Ast.TableConstructorExpression({})), {self.RETURN_REGISTER}, {}, false)
            self.activeBlock.advanceToNextBlock = false;
        end

        self:resetRegisters();
    end

    function Compiler:compileFunction(node, funcDepth)
        funcDepth = funcDepth + 1;
        local oldActiveBlock = self.activeBlock;

        local upperVarargReg = self.varargReg;
        self.varargReg = nil;

        local upvalueExpressions = {};
        local upvalueIds = {};
        local usedRegs = {};

        local oldGetUpvalueId = self.getUpvalueId;
        self.getUpvalueId = function(self, scope, id)
            if(not upvalueIds[scope]) then
                upvalueIds[scope] = {};
            end
            if(upvalueIds[scope][id]) then
                return upvalueIds[scope][id];
            end
            local scopeFuncDepth = self.scopeFunctionDepths[scope];
            local expression;
            if(scopeFuncDepth == funcDepth) then
                oldActiveBlock.scope:addReferenceToHigherScope(self.scope, self.allocUpvalFunction);
                expression = Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.allocUpvalFunction), {});
            elseif(scopeFuncDepth == funcDepth - 1) then
                local varReg = self:getVarRegister(scope, id, scopeFuncDepth, nil);
                expression = self:register(oldActiveBlock.scope, varReg);
                table.insert(usedRegs, varReg);
            else
                local higherId = oldGetUpvalueId(self, scope, id);
                oldActiveBlock.scope:addReferenceToHigherScope(self.containerFuncScope, self.currentUpvaluesVar);
                expression = Ast.IndexExpression(Ast.VariableExpression(self.containerFuncScope, self.currentUpvaluesVar), Ast.NumberExpression(higherId));
            end
            table.insert(upvalueExpressions, Ast.TableEntry(expression));
            local uid = #upvalueExpressions;
            upvalueIds[scope][id] = uid;
            return uid;
        end

        local block = self:createBlock();
        self:setActiveBlock(block);
        local scope = self.activeBlock.scope;
        self:pushRegisterUsageInfo();
        for i, arg in ipairs(node.args) do
            if(arg.kind == AstKind.VariableExpression) then
                if(self:isUpvalue(arg.scope, arg.id)) then
                    scope:addReferenceToHigherScope(self.scope, self.allocUpvalFunction);
                    local argReg = self:getVarRegister(arg.scope, arg.id, funcDepth, nil);
                    self:addStatement(self:setRegister(scope, argReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.allocUpvalFunction), {})), {argReg}, {}, false);
                    self:addStatement(self:setUpvalueMember(scope, self:register(scope, argReg), Ast.IndexExpression(Ast.VariableExpression(self.containerFuncScope, self.argsVar), Ast.NumberExpression(i))), {}, {argReg}, true);
                else
                    local argReg = self:getVarRegister(arg.scope, arg.id, funcDepth, nil);
                    scope:addReferenceToHigherScope(self.containerFuncScope, self.argsVar);
                    self:addStatement(self:setRegister(scope, argReg, Ast.IndexExpression(Ast.VariableExpression(self.containerFuncScope, self.argsVar), Ast.NumberExpression(i))), {argReg}, {}, false);
                end
            else
                self.varargReg = self:allocRegister(true);
                scope:addReferenceToHigherScope(self.containerFuncScope, self.argsVar);
                scope:addReferenceToHigherScope(self.scope, self.selectVar);
                scope:addReferenceToHigherScope(self.scope, self.unpackVar);
                self:addStatement(self:setRegister(scope, self.varargReg, Ast.TableConstructorExpression({
                    Ast.TableEntry(Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.selectVar), {
                        Ast.NumberExpression(i);
                        Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.unpackVar), {
                            Ast.VariableExpression(self.containerFuncScope, self.argsVar),
                        });
                    })),
                })), {self.varargReg}, {}, false);
            end
        end

        self:compileBlock(node.body, funcDepth);
        if(self.activeBlock.advanceToNextBlock) then
            self:addStatement(self:setPos(self.activeBlock.scope, nil), {self.POS_REGISTER}, {}, false);
            self:addStatement(self:setReturn(self.activeBlock.scope, Ast.TableConstructorExpression({})), {self.RETURN_REGISTER}, {}, false);
            self.activeBlock.advanceToNextBlock = false;
        end

        if(self.varargReg) then
            self:freeRegister(self.varargReg, true);
        end
        self.varargReg = upperVarargReg;
        self.getUpvalueId = oldGetUpvalueId;

        self:popRegisterUsageInfo();
        self:setActiveBlock(oldActiveBlock);

        local scope = self.activeBlock.scope;

        local retReg = self:allocRegister(false);

        local isVarargFunction = #node.args > 0 and node.args[#node.args].kind == AstKind.VarargExpression;

        local retrieveExpression
        if isVarargFunction then
            scope:addReferenceToHigherScope(self.scope, self.createVarargClosureVar);
            retrieveExpression = Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.createVarargClosureVar), {
                Ast.NumberExpression(block.id),
                Ast.TableConstructorExpression(upvalueExpressions)
            });
        else
            local varScope, var = self:getCreateClosureVar(#node.args + math.random(0, 5));
            scope:addReferenceToHigherScope(varScope, var);
            retrieveExpression = Ast.FunctionCallExpression(Ast.VariableExpression(varScope, var), {
                Ast.NumberExpression(block.id),
                Ast.TableConstructorExpression(upvalueExpressions)
            });
        end

        self:addStatement(self:setRegister(scope, retReg, retrieveExpression), {retReg}, usedRegs, false);
        return retReg;
    end

    function Compiler:compileBlock(block, funcDepth)
        for i, stat in ipairs(block.statements) do
            self:compileStatement(stat, funcDepth);
        end

        local scope = self.activeBlock.scope;
        for id, name in ipairs(block.scope.variables) do
            local varReg = self:getVarRegister(block.scope, id, funcDepth, nil);
            if self:isUpvalue(block.scope, id) then
                scope:addReferenceToHigherScope(self.scope, self.freeUpvalueFunc);
                self:addStatement(self:setRegister(scope, varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.freeUpvalueFunc), {
                    self:register(scope, varReg)
                })), {varReg}, {varReg}, false);
            else
                self:addStatement(self:setRegister(scope, varReg, Ast.NilExpression()), {varReg}, {}, false);
            end
            self:freeRegister(varReg, true);
        end
    end
end
`,"prometheus.compiler.compiler":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- compiler.lua
--
-- This Script is the main compiler module.

local Ast = require("prometheus.ast");
local Scope = require("prometheus.scope");
local util = require("prometheus.util");

local lookupify = util.lookupify;
local AstKind = Ast.AstKind;

local unpack = unpack or table.unpack;

local blockModule = require("prometheus.compiler.block");
local registerModule = require("prometheus.compiler.register");
local upvalueModule = require("prometheus.compiler.upvalue");
local emitModule = require("prometheus.compiler.emit");
local compileCoreModule = require("prometheus.compiler.compile_core");

local Compiler = {};

function Compiler:new()
    local compiler = {
        blocks = {};
        registers = {};
        activeBlock = nil;
        registersForVar = {};
        usedRegisters = 0;
        maxUsedRegister = 0;
        registerVars = {};

        VAR_REGISTER = newproxy(false);
        RETURN_ALL = newproxy(false);
        POS_REGISTER = newproxy(false);
        RETURN_REGISTER = newproxy(false);
        UPVALUE = newproxy(false);

        BIN_OPS = lookupify{
            AstKind.LessThanExpression,
            AstKind.GreaterThanExpression,
            AstKind.LessThanOrEqualsExpression,
            AstKind.GreaterThanOrEqualsExpression,
            AstKind.NotEqualsExpression,
            AstKind.EqualsExpression,
            AstKind.StrCatExpression,
            AstKind.AddExpression,
            AstKind.SubExpression,
            AstKind.MulExpression,
            AstKind.DivExpression,
            AstKind.ModExpression,
            AstKind.PowExpression,
        };
    };

    setmetatable(compiler, self);
    self.__index = self;

    return compiler;
end

blockModule(Compiler);
registerModule(Compiler);
upvalueModule(Compiler);
emitModule(Compiler);
compileCoreModule(Compiler);

function Compiler:pushRegisterUsageInfo()
    table.insert(self.registerUsageStack, {
        usedRegisters = self.usedRegisters;
        registers = self.registers;
    });
    self.usedRegisters = 0;
    self.registers = {};
end

function Compiler:popRegisterUsageInfo()
    local info = table.remove(self.registerUsageStack);
    self.usedRegisters = info.usedRegisters;
    self.registers = info.registers;
end

function Compiler:compile(ast)
    self.blocks = {};
    self.registers = {};
    self.activeBlock = nil;
    self.registersForVar = {};
    self.scopeFunctionDepths = {};
    self.maxUsedRegister = 0;
    self.usedRegisters = 0;
    self.registerVars = {};
    self.usedBlockIds = {};

    self.upvalVars = {};
    self.registerUsageStack = {};

    self.upvalsProxyLenReturn = math.random(-2^22, 2^22);

    local newGlobalScope = Scope:newGlobal();
    local psc = Scope:new(newGlobalScope, nil);

    local _, getfenvVar = newGlobalScope:resolve("getfenv");
    local _, tableVar = newGlobalScope:resolve("table");
    local _, unpackVar = newGlobalScope:resolve("unpack");
    -- NOTE: this used to resolve "_ENV" instead of "_G" as the fallback for
    -- when getfenv() is unavailable (Lua 5.2+/Fengari). That worked when
    -- Vmify is applied once, because the *only* parser that ever sees this
    -- fallback expression as real syntax is the host Lua/Fengari parser
    -- loading the final generated program, and _ENV is a genuine upvalue
    -- there. But when Vmify is applied a second time (the "Strong" preset),
    -- the first pass's already-generated source - including this literal
    -- fallback expression - becomes plain input text for Prometheus's own
    -- parser (prometheus.parser), which has no notion of _ENV as anything
    -- other than an ordinary global name. It gets re-compiled as a normal
    -- global lookup, i.e. (globalTable)["_ENV"], which is nil (_ENV is not
    -- an entry of the global table, unlike _G, which is a real self-
    -- referential entry: _G._G == _G). Under real Lua 5.1 this dead code
    -- path is never evaluated at runtime because getfenv() always exists
    -- and the "and/or" short-circuits before reaching it - so the bug was
    -- invisible there. Under Fengari, getfenv is nil, so the fallback IS
    -- evaluated, and double-Vmify output throws "attempt to index a nil
    -- value" while resolving any global (e.g. print). Using "_G" instead
    -- fixes this because _G is an ordinary global binding that survives
    -- any number of re-parse/re-compile passes, at every nesting depth.
    local _, envVar = newGlobalScope:resolve("_G");
    local _, newproxyVar = newGlobalScope:resolve("newproxy");
    local _, setmetatableVar = newGlobalScope:resolve("setmetatable");
    local _, getmetatableVar = newGlobalScope:resolve("getmetatable");
    local _, selectVar = newGlobalScope:resolve("select");

    psc:addReferenceToHigherScope(newGlobalScope, getfenvVar, 2);
    psc:addReferenceToHigherScope(newGlobalScope, tableVar);
    psc:addReferenceToHigherScope(newGlobalScope, unpackVar);
    psc:addReferenceToHigherScope(newGlobalScope, envVar);
    psc:addReferenceToHigherScope(newGlobalScope, newproxyVar);
    psc:addReferenceToHigherScope(newGlobalScope, setmetatableVar);
    psc:addReferenceToHigherScope(newGlobalScope, getmetatableVar);

    self.scope = Scope:new(psc);
    self.envVar = self.scope:addVariable();
    self.containerFuncVar = self.scope:addVariable();
    self.unpackVar = self.scope:addVariable();
    self.newproxyVar = self.scope:addVariable();
    self.setmetatableVar = self.scope:addVariable();
    self.getmetatableVar = self.scope:addVariable();
    self.selectVar = self.scope:addVariable();

    local argVar = self.scope:addVariable();

    self.containerFuncScope = Scope:new(self.scope);
    self.whileScope = Scope:new(self.containerFuncScope);

    self.posVar = self.containerFuncScope:addVariable();
    self.argsVar = self.containerFuncScope:addVariable();
    self.currentUpvaluesVar = self.containerFuncScope:addVariable();
    self.detectGcCollectVar = self.containerFuncScope:addVariable();
    self.returnVar = self.containerFuncScope:addVariable();

    self.upvaluesTable = self.scope:addVariable();
    self.upvaluesReferenceCountsTable = self.scope:addVariable();
    self.allocUpvalFunction = self.scope:addVariable();
    self.currentUpvalId = self.scope:addVariable();

    self.upvaluesProxyFunctionVar = self.scope:addVariable();
    self.upvaluesGcFunctionVar = self.scope:addVariable();
    self.freeUpvalueFunc = self.scope:addVariable();

    self.createClosureVars = {};
    self.createVarargClosureVar = self.scope:addVariable();
    local createClosureScope = Scope:new(self.scope);
    local createClosurePosArg = createClosureScope:addVariable();
    local createClosureUpvalsArg = createClosureScope:addVariable();
    local createClosureProxyObject = createClosureScope:addVariable();
    local createClosureFuncVar = createClosureScope:addVariable();

    local createClosureSubScope = Scope:new(createClosureScope);

    local upvalEntries = {};
    local upvalueIds = {};
    self.getUpvalueId = function(self, scope, id)
        local expression;
        local scopeFuncDepth = self.scopeFunctionDepths[scope];
        if(scopeFuncDepth == 0) then
            if upvalueIds[id] then
                return upvalueIds[id];
            end
            expression = Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.allocUpvalFunction), {});
        else
            require("logger"):error("Unresolved Upvalue, this error should not occur!");
        end
        table.insert(upvalEntries, Ast.TableEntry(expression));
        local uid = #upvalEntries;
        upvalueIds[id] = uid;
        return uid;
    end

    createClosureSubScope:addReferenceToHigherScope(self.scope, self.containerFuncVar);
    createClosureSubScope:addReferenceToHigherScope(createClosureScope, createClosurePosArg)
    createClosureSubScope:addReferenceToHigherScope(createClosureScope, createClosureUpvalsArg, 1)
    createClosureScope:addReferenceToHigherScope(self.scope, self.upvaluesProxyFunctionVar)
    createClosureSubScope:addReferenceToHigherScope(createClosureScope, createClosureProxyObject);

    self:compileTopNode(ast);

    local functionNodeAssignments = {
        {
            var = Ast.AssignmentVariable(self.scope, self.containerFuncVar),
            val = Ast.FunctionLiteralExpression({
                Ast.VariableExpression(self.containerFuncScope, self.posVar),
                Ast.VariableExpression(self.containerFuncScope, self.argsVar),
                Ast.VariableExpression(self.containerFuncScope, self.currentUpvaluesVar),
                Ast.VariableExpression(self.containerFuncScope, self.detectGcCollectVar)
            }, self:emitContainerFuncBody());
        }, {
            var = Ast.AssignmentVariable(self.scope, self.createVarargClosureVar),
            val = Ast.FunctionLiteralExpression({
                    Ast.VariableExpression(createClosureScope, createClosurePosArg),
                    Ast.VariableExpression(createClosureScope, createClosureUpvalsArg),
                },
                Ast.Block({
                    Ast.LocalVariableDeclaration(createClosureScope, {
                        createClosureProxyObject
                    }, {
                        Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.upvaluesProxyFunctionVar), {
                            Ast.VariableExpression(createClosureScope, createClosureUpvalsArg)
                        })
                    }),
                    Ast.LocalVariableDeclaration(createClosureScope, {createClosureFuncVar},{
                        Ast.FunctionLiteralExpression({
                            Ast.VarargExpression();
                        },
                        Ast.Block({
                            Ast.ReturnStatement{
                                Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.containerFuncVar), {
                                    Ast.VariableExpression(createClosureScope, createClosurePosArg),
                                    Ast.TableConstructorExpression({Ast.TableEntry(Ast.VarargExpression())}),
                                    Ast.VariableExpression(createClosureScope, createClosureUpvalsArg),
                                    Ast.VariableExpression(createClosureScope, createClosureProxyObject)
                                })
                            }
                        }, createClosureSubScope)
                        );
                    });
                    Ast.ReturnStatement{Ast.VariableExpression(createClosureScope, createClosureFuncVar)};
                }, createClosureScope)
            );
        }, {
            var = Ast.AssignmentVariable(self.scope, self.upvaluesTable),
            val = Ast.TableConstructorExpression({}),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.upvaluesReferenceCountsTable),
            val = Ast.TableConstructorExpression({}),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.allocUpvalFunction),
            val = self:createAllocUpvalFunction(),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.currentUpvalId),
            val = Ast.NumberExpression(0),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.upvaluesProxyFunctionVar),
            val = self:createUpvaluesProxyFunc(),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.upvaluesGcFunctionVar),
            val = self:createUpvaluesGcFunc(),
        }, {
            var = Ast.AssignmentVariable(self.scope, self.freeUpvalueFunc),
            val = self:createFreeUpvalueFunc(),
        },
    }

    local tbl = {
        Ast.VariableExpression(self.scope, self.containerFuncVar),
        Ast.VariableExpression(self.scope, self.createVarargClosureVar),
        Ast.VariableExpression(self.scope, self.upvaluesTable),
        Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable),
        Ast.VariableExpression(self.scope, self.allocUpvalFunction),
        Ast.VariableExpression(self.scope, self.currentUpvalId),
        Ast.VariableExpression(self.scope, self.upvaluesProxyFunctionVar),
        Ast.VariableExpression(self.scope, self.upvaluesGcFunctionVar),
        Ast.VariableExpression(self.scope, self.freeUpvalueFunc),
    };
    for i, entry in pairs(self.createClosureVars) do
        table.insert(functionNodeAssignments, entry);
        table.insert(tbl, Ast.VariableExpression(entry.var.scope, entry.var.id));
    end

    util.shuffle(functionNodeAssignments);
    local assignmentStatLhs, assignmentStatRhs = {}, {};
    for i, v in ipairs(functionNodeAssignments) do
        assignmentStatLhs[i] = v.var;
        assignmentStatRhs[i] = v.val;
    end


    -- NEW: Position Shuffler
    local ids = util.shuffle({1, 2, 3, 4, 5, 6, 7});

    local items = {
        Ast.VariableExpression(self.scope, self.envVar),
        Ast.VariableExpression(self.scope, self.unpackVar),
        Ast.VariableExpression(self.scope, self.newproxyVar),
        Ast.VariableExpression(self.scope, self.setmetatableVar),
        Ast.VariableExpression(self.scope, self.getmetatableVar),
        Ast.VariableExpression(self.scope, self.selectVar),
        Ast.VariableExpression(self.scope, argVar),
    }

    local astItems = {
        Ast.OrExpression(Ast.AndExpression(Ast.VariableExpression(newGlobalScope, getfenvVar), Ast.FunctionCallExpression(Ast.VariableExpression(newGlobalScope, getfenvVar), {})), Ast.VariableExpression(newGlobalScope, envVar));
        Ast.OrExpression(Ast.VariableExpression(newGlobalScope, unpackVar), Ast.IndexExpression(Ast.VariableExpression(newGlobalScope, tableVar), Ast.StringExpression("unpack")));
        Ast.VariableExpression(newGlobalScope, newproxyVar);
        Ast.VariableExpression(newGlobalScope, setmetatableVar);
        Ast.VariableExpression(newGlobalScope, getmetatableVar);
        Ast.VariableExpression(newGlobalScope, selectVar);
        Ast.TableConstructorExpression({
            Ast.TableEntry(Ast.VarargExpression());
        })
    }

    local functionNode = Ast.FunctionLiteralExpression({
      items[ids[1]], items[ids[2]], items[ids[3]], items[ids[4]],
      items[ids[5]], items[ids[6]], items[ids[7]],
      unpack(util.shuffle(tbl))
    }, Ast.Block({
        Ast.AssignmentStatement(assignmentStatLhs, assignmentStatRhs);
        Ast.ReturnStatement{
            Ast.FunctionCallExpression(Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.createVarargClosureVar), {
                    Ast.NumberExpression(self.startBlockId);
                    Ast.TableConstructorExpression(upvalEntries);
                }), {Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.unpackVar), {Ast.VariableExpression(self.scope, argVar)})});
        }
    }, self.scope));

    return Ast.TopNode(Ast.Block({
        Ast.ReturnStatement{Ast.FunctionCallExpression(functionNode, {
            astItems[ids[1]], astItems[ids[2]], astItems[ids[3]], astItems[ids[4]],
            astItems[ids[5]], astItems[ids[6]], astItems[ids[7]],
        })};
    }, psc), newGlobalScope);
end

function Compiler:getCreateClosureVar(argCount)
    if not self.createClosureVars[argCount] then
        local var = Ast.AssignmentVariable(self.scope, self.scope:addVariable());
        local createClosureScope = Scope:new(self.scope);
        local createClosureSubScope = Scope:new(createClosureScope);

        local createClosurePosArg = createClosureScope:addVariable();
        local createClosureUpvalsArg = createClosureScope:addVariable();
        local createClosureProxyObject = createClosureScope:addVariable();
        local createClosureFuncVar = createClosureScope:addVariable();

        createClosureSubScope:addReferenceToHigherScope(self.scope, self.containerFuncVar);
        createClosureSubScope:addReferenceToHigherScope(createClosureScope, createClosurePosArg)
        createClosureSubScope:addReferenceToHigherScope(createClosureScope, createClosureUpvalsArg, 1)
        createClosureScope:addReferenceToHigherScope(self.scope, self.upvaluesProxyFunctionVar)
        createClosureSubScope:addReferenceToHigherScope(createClosureScope, createClosureProxyObject);

        local  argsTb, argsTb2 = {}, {};
        for i = 1, argCount do
            local arg = createClosureSubScope:addVariable()
            argsTb[i] = Ast.VariableExpression(createClosureSubScope, arg);
            argsTb2[i] = Ast.TableEntry(Ast.VariableExpression(createClosureSubScope, arg));
        end

        local val = Ast.FunctionLiteralExpression({
            Ast.VariableExpression(createClosureScope, createClosurePosArg),
            Ast.VariableExpression(createClosureScope, createClosureUpvalsArg),
        }, Ast.Block({
                Ast.LocalVariableDeclaration(createClosureScope, {
                    createClosureProxyObject
                }, {
                    Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.upvaluesProxyFunctionVar), {
                        Ast.VariableExpression(createClosureScope, createClosureUpvalsArg)
                    })
                }),
                Ast.LocalVariableDeclaration(createClosureScope, {createClosureFuncVar},{
                    Ast.FunctionLiteralExpression(argsTb,
                    Ast.Block({
                        Ast.ReturnStatement{
                            Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.containerFuncVar), {
                                Ast.VariableExpression(createClosureScope, createClosurePosArg),
                                Ast.TableConstructorExpression(argsTb2),
                                Ast.VariableExpression(createClosureScope, createClosureUpvalsArg),
                                Ast.VariableExpression(createClosureScope, createClosureProxyObject)
                            })
                        }
                    }, createClosureSubScope)
                    );
                });
                Ast.ReturnStatement{Ast.VariableExpression(createClosureScope, createClosureFuncVar)}
            }, createClosureScope)
        );
        self.createClosureVars[argCount] = {
            var = var,
            val = val,
        }
    end


    local var = self.createClosureVars[argCount].var;
    return var.scope, var.id;
end

return Compiler;
`,"prometheus.compiler.constants":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- constants.lua
--
-- This Script contains the compiler constants shared across modules.

return {
    MAX_REGS = 100,
    MAX_REGS_MUL = 0,
}
`,"prometheus.compiler.emit":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- emit.lua
--
-- This Script contains the container function body emission for the compiler.

local Ast = require("prometheus.ast");
local Scope = require("prometheus.scope");
local util = require("prometheus.util");
local constants = require("prometheus.compiler.constants");
local AstKind = Ast.AstKind;

local MAX_REGS = constants.MAX_REGS;

return function(Compiler)
    local function hasAnyEntries(tbl)
        return type(tbl) == "table" and next(tbl) ~= nil;
    end

    local function unionLookupTables(a, b)
        local out = {};
        for k, v in pairs(a or {}) do
            out[k] = v;
        end
        for k, v in pairs(b or {}) do
            out[k] = v;
        end
        return out;
    end

    local function canMergeParallelAssignmentStatements(statA, statB)
        if type(statA) ~= "table" or type(statB) ~= "table" then
            return false;
        end

        if statA.usesUpvals or statB.usesUpvals then
            return false;
        end

        local a = statA.statement;
        local b = statB.statement;
        if type(a) ~= "table" or type(b) ~= "table" then
            return false;
        end
        if a.kind ~= AstKind.AssignmentStatement or b.kind ~= AstKind.AssignmentStatement then
            return false;
        end

        if type(a.lhs) ~= "table" or type(a.rhs) ~= "table" or type(b.lhs) ~= "table" or type(b.rhs) ~= "table" then
            return false;
        end

        if #a.lhs ~= #a.rhs or #b.lhs ~= #b.rhs then
            return false;
        end

        -- Avoid merging vararg/call assignments because they can affect multi-return behavior.
        local function hasUnsafeRhs(rhsList)
            for _, rhsExpr in ipairs(rhsList) do
                if type(rhsExpr) ~= "table" then
                    return true;
                end
                local kind = rhsExpr.kind;
                if kind == AstKind.FunctionCallExpression or kind == AstKind.PassSelfFunctionCallExpression or kind == AstKind.VarargExpression then
                    return true;
                end
            end
            return false;
        end
        if hasUnsafeRhs(a.rhs) or hasUnsafeRhs(b.rhs) then
            return false;
        end

        local aReads = type(statA.reads) == "table" and statA.reads or {};
        local aWrites = type(statA.writes) == "table" and statA.writes or {};
        local bReads = type(statB.reads) == "table" and statB.reads or {};
        local bWrites = type(statB.writes) == "table" and statB.writes or {};

        -- Allow merging even if one statement has no writes (e.g., x = o(x) style assignments)
        -- Only require that at least one of them has writes
        if not hasAnyEntries(aWrites) and not hasAnyEntries(bWrites) then
            return false;
        end

        for r in pairs(aReads) do
            if bWrites[r] then
                return false;
            end
        end

        for r, b in pairs(aWrites) do
            if bWrites[r] or bReads[r] then
                return false;
            end
        end

        return true;
    end

    local function mergeParallelAssignmentStatements(statA, statB)
        local lhs = {};
        local rhs = {};
        local aLhs, bLhs = statA.statement.lhs, statB.statement.lhs;
        local aRhs, bRhs = statA.statement.rhs, statB.statement.rhs;
        for i = 1, #aLhs do lhs[i] = aLhs[i]; end
        for i = 1, #bLhs do lhs[#aLhs + i] = bLhs[i]; end
        for i = 1, #aRhs do rhs[i] = aRhs[i]; end
        for i = 1, #bRhs do rhs[#aRhs + i] = bRhs[i]; end

        return {
            statement = Ast.AssignmentStatement(lhs, rhs),
            writes = unionLookupTables(statA.writes, statB.writes),
            reads = unionLookupTables(statA.reads, statB.reads),
            usesUpvals = statA.usesUpvals or statB.usesUpvals,
        };
    end

    local function mergeAdjacentParallelAssignments(blockstats)
        local merged = {};
        local i = 1;
        while i <= #blockstats do
            local stat = blockstats[i];
            i = i + 1;

            while i <= #blockstats and canMergeParallelAssignmentStatements(stat, blockstats[i]) do
                stat = mergeParallelAssignmentStatements(stat, blockstats[i]);
                i = i + 1;
            end

            table.insert(merged, stat);
        end
        return merged;
    end

    function Compiler:emitContainerFuncBody()
        local blocks = {};

        util.shuffle(self.blocks);

        for i, block in ipairs(self.blocks) do
            local id = block.id;
            local blockstats = block.statements;

            for i = 2, #blockstats do
                local stat = blockstats[i];
                local reads = stat.reads;
                local writes = stat.writes;
                local maxShift = 0;
                local usesUpvals = stat.usesUpvals;
                for shift = 1, i - 1 do
                    local stat2 = blockstats[i - shift];

                    if stat2.usesUpvals or usesUpvals then
                        break;
                    end

                    local reads2 = stat2.reads;
                    local writes2 = stat2.writes;
                    local f = true;

                    for r, b in pairs(reads2) do
                        if(writes[r]) then
                            f = false;
                            break;
                        end
                    end

                    if f then
                        for r, b in pairs(writes2) do
                            if(writes[r]) then
                                f = false;
                                break;
                            end
                            if(reads[r]) then
                                f = false;
                                break;
                            end
                        end
                    end

                    if not f then
                        break
                    end

                    maxShift = shift;
                end

                local shift = math.random(0, maxShift);
                for j = 1, shift do
                    blockstats[i - j], blockstats[i - j + 1] = blockstats[i - j + 1], blockstats[i - j];
                end
            end

            local mergedBlockStats = mergeAdjacentParallelAssignments(blockstats);
            for _=1, 7 do
                mergedBlockStats = mergeAdjacentParallelAssignments(mergedBlockStats);
            end

            blockstats = {};
            for _, stat in ipairs(mergedBlockStats) do
                table.insert(blockstats, stat.statement);
            end

            local block = { id = id, index = i, block = Ast.Block(blockstats, block.scope) }
            table.insert(blocks, block);
            blocks[id] = block;
        end

        table.sort(blocks, function(a, b) return a.id < b.id end);

        -- Build a strict threshold condition between adjacent block IDs.
        -- Using a midpoint avoids exact-id comparisons while preserving dispatch.
        local function buildBlockThresholdCondition(scope, leftId, rightId, useAndOr)
            -- The threshold must be STRICTLY GREATER than leftId so that a
            -- block whose id == leftId satisfies \`pos < bound\` and is
            -- dispatched to its own branch. A naive floor midpoint equals
            -- leftId when leftId and rightId are adjacent integers, which
            -- drops that block into the wrong branch (the #155/#18
            -- "attempt to index a nil value" crash). Bump it to leftId+1
            -- in that case; ids are distinct & sorted so leftId+1 <= rightId.
            local bound = math.floor((leftId + rightId) / 2);
            if bound <= leftId then
                bound = leftId + 1;
            end
            local posExpr = self:pos(scope);
            local boundExpr = Ast.NumberExpression(bound);

            if useAndOr then
                -- Kept for compatibility with caller variations.
                return Ast.LessThanExpression(posExpr, boundExpr);
            else
                local variant = math.random(1, 2);
                if variant == 1 then
                    return Ast.LessThanExpression(posExpr, boundExpr);
                else
                    return Ast.GreaterThanExpression(boundExpr, posExpr);
                end
            end
        end

        -- Build an elseif chain for a range of blocks
        local function buildElseifChain(tb, l, r, pScope)
            -- Handle invalid range by returning an empty block
            if r < l then
                local emptyScope = Scope:new(pScope);
                return Ast.Block({}, emptyScope);
            end

            local len = r - l + 1;

            -- For single block
            if len == 1 then
                tb[l].block.scope:setParent(pScope);
                return tb[l].block;
            end

            -- For small ranges, use elseif chain
            if len <= 4 then
                local ifScope = Scope:new(pScope);
                local elseifs = {};

                -- First block uses the first midpoint threshold
                tb[l].block.scope:setParent(ifScope);
                local firstCondition = buildBlockThresholdCondition(ifScope, tb[l].id, tb[l + 1].id, false);
                local firstBlock = tb[l].block;

                -- Middle blocks use their upper midpoint threshold
                for i = l + 1, r - 1 do
                    tb[i].block.scope:setParent(ifScope);
                    local condition = buildBlockThresholdCondition(ifScope, tb[i].id, tb[i + 1].id, false);
                    table.insert(elseifs, {
                        condition = condition,
                        body = tb[i].block
                    });
                end

                -- Last block becomes else
                tb[r].block.scope:setParent(ifScope);
                local elseBlock = tb[r].block;

                return Ast.Block({
                    Ast.IfStatement(firstCondition, firstBlock, elseifs, elseBlock);
                }, ifScope);
            end

            -- For larger ranges, use binary split with and/or chaining
            local mid = l + math.ceil(len / 2);
            local leftMaxId = tb[mid - 1].id;
            local rightMinId = tb[mid].id;
            -- The split threshold must sit STRICTLY BETWEEN leftMaxId and
            -- rightMinId. condStyle 1/2 (\`pos < bound\` / \`bound > pos\`,
            -- true=left) need leftMaxId < bound <= rightMinId; condStyle 3
            -- (\`pos > bound\`, true=right) needs leftMaxId <= bound < rightMinId,
            -- i.e. a gap of at least 2. When the ids are adjacent (gap 1)
            -- there is no integer strictly between them, so condStyle 3 is
            -- impossible -- force 1 or 2. A naive floor midpoint equals
            -- leftMaxId in the adjacent case, dropping the left block into
            -- the wrong branch (the #155/#18 nil-index crash), so bump it to
            -- leftMaxId+1. This is a correctness fix only; the dispatch tree
            -- shape is unchanged.
            local gap = rightMinId - leftMaxId;
            local bound = math.floor((leftMaxId + rightMinId) / 2);
            if bound <= leftMaxId then
                bound = leftMaxId + 1;
            end
            local ifScope = Scope:new(pScope);

            local lBlock = buildElseifChain(tb, l, mid - 1, ifScope);
            local rBlock = buildElseifChain(tb, mid, r, ifScope);

            -- Randomly choose between different condition styles. condStyle 3
            -- (\`pos > bound\`, reversed branches) requires a gap >= 2; for an
            -- adjacent-id split it cannot produce a correct dispatch, so pick
            -- from {1, 2} instead.
            local condStyle = (gap >= 2) and math.random(1, 3) or math.random(1, 2);
            local condition;
            local trueBlock, falseBlock;

            if condStyle == 1 then
                -- pos < bound
                condition = Ast.LessThanExpression(self:pos(ifScope), Ast.NumberExpression(bound));
                trueBlock, falseBlock = lBlock, rBlock;
            elseif condStyle == 2 then
                -- bound > pos
                condition = Ast.GreaterThanExpression(Ast.NumberExpression(bound), self:pos(ifScope));
                trueBlock, falseBlock = lBlock, rBlock;
            else
                -- Equivalent split using strict > with branches reversed.
                condition = Ast.GreaterThanExpression(self:pos(ifScope), Ast.NumberExpression(bound));
                trueBlock, falseBlock = rBlock, lBlock;
            end

            return Ast.Block({
                Ast.IfStatement(condition, trueBlock, {}, falseBlock);
            }, ifScope);
        end

        local whileBody = buildElseifChain(blocks, 1, #blocks, self.containerFuncScope);
        if self.whileScope then
            -- Ensure whileScope is properly connected
            self.whileScope:setParent(self.containerFuncScope);
        end

        self.whileScope:addReferenceToHigherScope(self.containerFuncScope, self.returnVar, 1);
        self.whileScope:addReferenceToHigherScope(self.containerFuncScope, self.posVar);

        self.containerFuncScope:addReferenceToHigherScope(self.scope, self.unpackVar);

        local declarations = {
            self.returnVar,
        }

        for i, var in pairs(self.registerVars) do
            if(i ~= MAX_REGS) then
                table.insert(declarations, var);
            end
        end

        local stats = {}

        if self.maxUsedRegister >= MAX_REGS then
            table.insert(stats, Ast.LocalVariableDeclaration(self.containerFuncScope, {self.registerVars[MAX_REGS]}, {Ast.TableConstructorExpression({})}));
        end

        table.insert(stats, Ast.LocalVariableDeclaration(self.containerFuncScope, util.shuffle(declarations), {}));

        table.insert(stats, Ast.WhileStatement(whileBody, Ast.VariableExpression(self.containerFuncScope, self.posVar)));


        table.insert(stats, Ast.AssignmentStatement({
            Ast.AssignmentVariable(self.containerFuncScope, self.posVar)
        }, {
            Ast.LenExpression(Ast.VariableExpression(self.containerFuncScope, self.detectGcCollectVar))
        }));

        table.insert(stats, Ast.ReturnStatement{
            Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.unpackVar), {
                Ast.VariableExpression(self.containerFuncScope, self.returnVar)
            });
        });

        return Ast.Block(stats, self.containerFuncScope);
    end
end

`,"prometheus.compiler.expressions.and":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- and.lua
--
-- This Script contains the expression handler for the AndExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local posState = self.registers[self.POS_REGISTER];
    self.registers[self.POS_REGISTER] = self.VAR_REGISTER;

    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i ~= 1 then
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end

    local resReg = regs[1];
    local tmpReg;

    if posState then
        tmpReg = self:allocRegister(false);
        self:addStatement(self:copyRegisters(scope, {tmpReg}, {self.POS_REGISTER}), {tmpReg}, {self.POS_REGISTER}, false);
    end

    local lhsReg = self:compileExpression(expression.lhs, funcDepth, 1)[1];
    if expression.rhs.isConstant then
        local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];
        self:addStatement(self:setRegister(scope, resReg, Ast.AndExpression(self:register(scope, lhsReg), self:register(scope, rhsReg))), {resReg}, {lhsReg, rhsReg}, false);
        if tmpReg then
            self:freeRegister(tmpReg, false);
        end
        self:freeRegister(lhsReg, false);
        self:freeRegister(rhsReg, false);
        return regs;
    end

    local block1, block2 = self:createBlock(), self:createBlock();
    self:addStatement(self:copyRegisters(scope, {resReg}, {lhsReg}), {resReg}, {lhsReg}, false);
    self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(scope, lhsReg), Ast.NumberExpression(block1.id)), Ast.NumberExpression(block2.id))), {self.POS_REGISTER}, {lhsReg}, false);
    self:freeRegister(lhsReg, false);
    do
        self:setActiveBlock(block1);
        scope = block1.scope;
        local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];
        self:addStatement(self:copyRegisters(scope, {resReg}, {rhsReg}), {resReg}, {rhsReg}, false);
        self:freeRegister(rhsReg, false);

        self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.NumberExpression(block2.id)), {self.POS_REGISTER}, {}, false);
    end

    self.registers[self.POS_REGISTER] = posState;

    self:setActiveBlock(block2);
    scope = block2.scope;

    if tmpReg then
        self:addStatement(self:copyRegisters(scope, {self.POS_REGISTER}, {tmpReg}), {self.POS_REGISTER}, {tmpReg}, false);
        self:freeRegister(tmpReg, false);
    end

    return regs;
end;
`,"prometheus.compiler.expressions.binary":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- binary.lua
--
-- This Script contains the expression handler for the Binary operations (Add, Sub, Mul, Div, etc.).

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local lhsReg = self:compileExpression(expression.lhs, funcDepth, 1)[1];
            local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];

            local binaryExpr = Ast[expression.kind](self:register(scope, lhsReg), self:register(scope, rhsReg));
            self:addStatement(self:setRegister(scope, regs[i], binaryExpr), {regs[i]}, {lhsReg, rhsReg}, true);
            self:freeRegister(rhsReg, false);
            self:freeRegister(lhsReg, false);
        else
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus.compiler.expressions.boolean":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- boolean.lua
--
-- This Script contains the expression handler for the BooleanExpression.

local Ast = require("prometheus.ast");

local expressionEvaluators = {
    [Ast.GreaterThanExpression] = function(left, right)
        return left > right
    end,
    [Ast.LessThanExpression] = function(left, right)
        return left < right
    end,
    [Ast.GreaterThanOrEqualsExpression] = function(left, right)
        return left >= right
    end,
    [Ast.LessThanOrEqualsExpression] = function(left, right)
        return left <= right
    end,
    [Ast.NotEqualsExpression] = function(left, right)
        return left ~= right
    end,
}

local function createRandomASTCFlowExpression(resultBool)
    local expTB = {
        Ast.GreaterThanExpression,
        Ast.LessThanExpression,
        Ast.GreaterThanOrEqualsExpression,
        Ast.LessThanOrEqualsExpression,
        Ast.NotEqualsExpression
    }

    local leftInt, rightInt, boolResult, randomExp
    repeat
        randomExp = expTB[math.random(1, #expTB)]
        leftInt = Ast.NumberExpression(math.random(1, 2^24))
        rightInt = Ast.NumberExpression(math.random(1, 2^24))
        boolResult = expressionEvaluators[randomExp](leftInt.value, rightInt.value)
    until boolResult == resultBool

    return randomExp(leftInt, rightInt, false)
end

return function(self, expression, _, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            self:addStatement(self:setRegister(scope, regs[i], createRandomASTCFlowExpression(expression.value)), {regs[i]}, {}, false);
        else
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus.compiler.expressions.function_call":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- function_call.lua
--
-- This Script contains the expression handler for the FunctionCallExpression.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local baseReg = self:compileExpression(expression.base, funcDepth, 1)[1];

    local retRegs = {};
    local returnAll = numReturns == self.RETURN_ALL;
    if returnAll then
        retRegs[1] = self:allocRegister(false);
    else
        for i = 1, numReturns do
            retRegs[i] = self:allocRegister(false);
        end
    end

    local regs = {};
    local args = {};
    for i, expr in ipairs(expression.args) do
        if i == #expression.args and not expr.isParenthesizedExpression and (expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression or expr.kind == AstKind.VarargExpression) then
            local reg = self:compileExpression(expr, funcDepth, self.RETURN_ALL)[1];
            table.insert(args, Ast.FunctionCallExpression(
                self:unpack(scope),
                {self:register(scope, reg)}));
            table.insert(regs, reg);
        else
            local reg = self:compileExpression(expr, funcDepth, 1)[1];
            table.insert(args, self:register(scope, reg));
            table.insert(regs, reg);
        end
    end

    if returnAll then
        self:addStatement(self:setRegister(scope, retRegs[1], Ast.TableConstructorExpression{Ast.TableEntry(Ast.FunctionCallExpression(self:register(scope, baseReg), args))}), {retRegs[1]}, {baseReg, unpack(regs)}, true);
    else
        if numReturns > 1 then
            local tmpReg = self:allocRegister(false);

            -- A parenthesized call, e.g. \`local a, b = (f())\`, must adjust to
            -- exactly one value in real Lua, even though the caller here may
            -- still ask for more registers (because there are more lhs
            -- targets than rhs expressions). Marking the generated call
            -- itself as parenthesized makes the *emitted* Lua source wrap it
            -- in "(...)" too, so the table constructor below only ever
            -- captures one real value; every other requested register is
            -- then indexed out as nil below, exactly like real Lua would.
            local innerCall = Ast.FunctionCallExpression(self:register(scope, baseReg), args);
            if expression.isParenthesizedExpression then
                innerCall.isParenthesizedExpression = true;
            end

            self:addStatement(self:setRegister(scope, tmpReg, Ast.TableConstructorExpression{Ast.TableEntry(innerCall)}), {tmpReg}, {baseReg, unpack(regs)}, true);


            for i, reg in ipairs(retRegs) do
                self:addStatement(self:setRegister(scope, reg, Ast.IndexExpression(self:register(scope, tmpReg), Ast.NumberExpression(i))), {reg}, {tmpReg}, false);
            end

            self:freeRegister(tmpReg, false);
        else
            self:addStatement(self:setRegister(scope, retRegs[1], Ast.FunctionCallExpression(self:register(scope, baseReg), args)), {retRegs[1]}, {baseReg, unpack(regs)}, true);
        end
    end

    self:freeRegister(baseReg, false);
    for i, reg in ipairs(regs) do
        self:freeRegister(reg, false);
    end

    return retRegs;
end;
`,"prometheus.compiler.expressions.function_literal":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- function_literal.lua
--
-- This Script contains the expression handler for the FunctionLiteralExpression

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns do
        if i == 1 then
            regs[i] = self:compileFunction(expression, funcDepth);
        else
            regs[i] = self:allocRegister();
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus.compiler.expressions.if_else":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- if_else.lua
--
-- This Script contains the statement handler for the IfElseExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
	local scope = self.activeBlock.scope;
	local posState = self.registers[self.POS_REGISTER];
    self.registers[self.POS_REGISTER] = self.VAR_REGISTER;

	local regs = {};
	for i = 1, numReturns do
		regs[i] = self:allocRegister();
		if i ~= 1 then
			self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
		end
	end

	local resReg = regs[1];
	local tmpReg;

	if posState then
        tmpReg = self:allocRegister(false);
        self:addStatement(self:copyRegisters(scope, {tmpReg}, {self.POS_REGISTER}), {tmpReg}, {self.POS_REGISTER}, false);
    end

	local conditionReg = self:compileExpression(expression.condition, funcDepth, 1)[1];

	local finalBlock = self:createBlock();
	local nextBlock = self:createBlock();
	local innerBlock = self:createBlock();

	self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(scope, conditionReg), Ast.NumberExpression(innerBlock.id)), Ast.NumberExpression(nextBlock.id))), {self.POS_REGISTER}, {conditionReg}, false);
	self:freeRegister(conditionReg, false);

	self:setActiveBlock(innerBlock);
	scope = innerBlock.scope;

	local trueReg = self:compileExpression(expression.true_value, funcDepth, 1)[1];
	self:addStatement(self:copyRegisters(scope, {resReg}, {trueReg}), {resReg}, {trueReg}, false);
	self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.NumberExpression(finalBlock.id)), {self.POS_REGISTER}, {}, false);

	for _, elif in ipairs(expression.elseifs) do
		self:setActiveBlock(nextBlock);
		conditionReg = self:compileExpression(elif.condition, funcDepth, 1)[1];
		local elifBlock = self:createBlock();
		nextBlock = self:createBlock();
		local elifScope = self.activeBlock.scope;

		self:addStatement(self:setRegister(elifScope, self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(elifScope, conditionReg), Ast.NumberExpression(elifBlock.id)), Ast.NumberExpression(nextBlock.id))), {self.POS_REGISTER}, {conditionReg}, false);
		self:freeRegister(conditionReg, false);

		self:setActiveBlock(elifBlock);
		elifScope = elifBlock.scope;
		local valueReg = self:compileExpression(elif.value, funcDepth, 1)[1];
		self:addStatement(self:copyRegisters(elifScope, {resReg}, {valueReg}), {resReg}, {valueReg}, false);
		self:addStatement(self:setRegister(elifScope, self.POS_REGISTER, Ast.NumberExpression(finalBlock.id)), {self.POS_REGISTER}, {}, false);
	end

	self:setActiveBlock(nextBlock);
	scope = self.activeBlock.scope;
	local falseReg = self:compileExpression(expression.false_value, funcDepth, 1)[1];
	self:addStatement(self:copyRegisters(scope, {resReg}, {falseReg}), {resReg}, {falseReg}, false);
	self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.NumberExpression(finalBlock.id)), {self.POS_REGISTER}, {}, false);

	self.registers[self.POS_REGISTER] = posState;

	self:setActiveBlock(finalBlock);
	scope = finalBlock.scope;

    if tmpReg then
        self:addStatement(self:copyRegisters(scope, {self.POS_REGISTER}, {tmpReg}), {self.POS_REGISTER}, {tmpReg}, false);
        self:freeRegister(tmpReg, false);
    end

	return regs;
end
`,"prometheus.compiler.expressions.index":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- index.lua
--
-- This Script contains the expression handler for the IndexExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local baseReg = self:compileExpression(expression.base, funcDepth, 1)[1];
            local indexReg = self:compileExpression(expression.index, funcDepth, 1)[1];



            self:addStatement(self:setRegister(scope, regs[i], Ast.IndexExpression(self:register(scope, baseReg), self:register(scope, indexReg))), {regs[i]}, {baseReg, indexReg}, true);

            self:freeRegister(baseReg, false);
            self:freeRegister(indexReg, false);
        else
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus.compiler.expressions.len":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- len.lua
--
-- This Script contains the expression handler for the LenExpression

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];

            self:addStatement(self:setRegister(scope, regs[i], Ast.LenExpression(self:register(scope, rhsReg))), {regs[i]}, {rhsReg}, true);
            self:freeRegister(rhsReg, false);
        else
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus.compiler.expressions.negate":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- negate.lua
--
-- This Script contains the expression handler for the NegateExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];

            self:addStatement(self:setRegister(scope, regs[i], Ast.NegateExpression(self:register(scope, rhsReg))), {regs[i]}, {rhsReg}, true);
            self:freeRegister(rhsReg, false);
        else
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus.compiler.expressions.nil":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- nil.lua
--
-- This Script contains the expression handler for the NilExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
    end
    return regs;
end;
`,"prometheus.compiler.expressions.not":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- not.lua
--
-- This Script contains the expression handler for the NotExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];

            self:addStatement(self:setRegister(scope, regs[i], Ast.NotExpression(self:register(scope, rhsReg))), {regs[i]}, {rhsReg}, false);
            self:freeRegister(rhsReg, false);
        else
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus.compiler.expressions.number":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- number.lua
--
-- This Script contains the expression handler for the NumberExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            self:addStatement(self:setRegister(scope, regs[i], Ast.NumberExpression(expression.value)), {regs[i]}, {}, false);
        else
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus.compiler.expressions.or":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- or.lua
--
-- This Script contains the expression handler for the OrExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local posState = self.registers[self.POS_REGISTER];
    self.registers[self.POS_REGISTER] = self.VAR_REGISTER;

    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i ~= 1 then
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end

    local resReg = regs[1];
    local tmpReg;

    if posState then
        tmpReg = self:allocRegister(false);
        self:addStatement(self:copyRegisters(scope, {tmpReg}, {self.POS_REGISTER}), {tmpReg}, {self.POS_REGISTER}, false);
    end

    local lhsReg = self:compileExpression(expression.lhs, funcDepth, 1)[1];
    if expression.rhs.isConstant then
        local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];
        self:addStatement(self:setRegister(scope, resReg, Ast.OrExpression(self:register(scope, lhsReg), self:register(scope, rhsReg))), {resReg}, {lhsReg, rhsReg}, false);
        if tmpReg then
            self:freeRegister(tmpReg, false);
        end
        self:freeRegister(lhsReg, false);
        self:freeRegister(rhsReg, false);
        return regs;
    end

    local block1, block2 = self:createBlock(), self:createBlock();
    self:addStatement(self:copyRegisters(scope, {resReg}, {lhsReg}), {resReg}, {lhsReg}, false);
    self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(scope, lhsReg), Ast.NumberExpression(block2.id)), Ast.NumberExpression(block1.id))), {self.POS_REGISTER}, {lhsReg}, false);
    self:freeRegister(lhsReg, false);

    do
        self:setActiveBlock(block1);
        local scope = block1.scope;
        local rhsReg = self:compileExpression(expression.rhs, funcDepth, 1)[1];
        self:addStatement(self:copyRegisters(scope, {resReg}, {rhsReg}), {resReg}, {rhsReg}, false);
        self:freeRegister(rhsReg, false);


        self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.NumberExpression(block2.id)), {self.POS_REGISTER}, {}, false);
    end

    self.registers[self.POS_REGISTER] = posState;

    self:setActiveBlock(block2);
    scope = block2.scope;

    if tmpReg then
        self:addStatement(self:copyRegisters(scope, {self.POS_REGISTER}, {tmpReg}), {self.POS_REGISTER}, {tmpReg}, false);
        self:freeRegister(tmpReg, false);
    end

    return regs;
end;
`,"prometheus.compiler.expressions.pass_self_function_call":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- pass_self_function_call.lua
--
-- This Script contains the expression handler for the PassSelfFunctionCallExpression.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local baseReg = self:compileExpression(expression.base, funcDepth, 1)[1];
    local retRegs = {};
    local returnAll = numReturns == self.RETURN_ALL;
    if returnAll then
        retRegs[1] = self:allocRegister(false);
    else
        for i = 1, numReturns do
            retRegs[i] = self:allocRegister(false);
        end
    end

    local args = { self:register(scope, baseReg) };
    local regs = { baseReg };

    for i, expr in ipairs(expression.args) do
        if i == #expression.args and not expr.isParenthesizedExpression and (expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression or expr.kind == AstKind.VarargExpression) then
            local reg = self:compileExpression(expr, funcDepth, self.RETURN_ALL)[1];
            table.insert(args, Ast.FunctionCallExpression(
                self:unpack(scope),
                {self:register(scope, reg)}));
            table.insert(regs, reg);
        else
            local reg = self:compileExpression(expr, funcDepth, 1)[1];
            table.insert(args, self:register(scope, reg));
            table.insert(regs, reg);
        end
    end

    if returnAll or numReturns > 1 then
        local tmpReg = self:allocRegister(false);

        self:addStatement(self:setRegister(scope, tmpReg, Ast.StringExpression(expression.passSelfFunctionName)), {tmpReg}, {}, false);
        self:addStatement(self:setRegister(scope, tmpReg, Ast.IndexExpression(self:register(scope, baseReg), self:register(scope, tmpReg))), {tmpReg}, {baseReg, tmpReg}, true);

        if returnAll then
            self:addStatement(self:setRegister(scope, retRegs[1], Ast.TableConstructorExpression{Ast.TableEntry(Ast.FunctionCallExpression(self:register(scope, tmpReg), args))}), {retRegs[1]}, {tmpReg, unpack(regs)}, true);
        else
            -- See the equivalent comment in expressions/function_call.lua:
            -- a parenthesized call must truncate to exactly one real value
            -- even when more registers were requested (e.g. \`local a, b =
            -- (obj:m())\`). Marking the emitted call as parenthesized makes
            -- the generated Lua source do that truncation for us.
            local innerCall = Ast.FunctionCallExpression(self:register(scope, tmpReg), args);
            if expression.isParenthesizedExpression then
                innerCall.isParenthesizedExpression = true;
            end
            self:addStatement(self:setRegister(scope, tmpReg, Ast.TableConstructorExpression{Ast.TableEntry(innerCall)}), {tmpReg}, {tmpReg, unpack(regs)}, true);

            for i, reg in ipairs(retRegs) do
                self:addStatement(self:setRegister(scope, reg, Ast.IndexExpression(self:register(scope, tmpReg), Ast.NumberExpression(i))), {reg}, {tmpReg}, false);
            end
        end

        self:freeRegister(tmpReg, false);
    else
        local tmpReg = retRegs[1] or self:allocRegister(false);

        self:addStatement(self:setRegister(scope, tmpReg, Ast.StringExpression(expression.passSelfFunctionName)), {tmpReg}, {}, false);
        self:addStatement(self:setRegister(scope, tmpReg, Ast.IndexExpression(self:register(scope, baseReg), self:register(scope, tmpReg))), {tmpReg}, {baseReg, tmpReg}, true);
        self:addStatement(self:setRegister(scope, retRegs[1], Ast.FunctionCallExpression(self:register(scope, tmpReg), args)), {retRegs[1]}, {tmpReg, unpack(regs)}, true);
    end

    for i, reg in ipairs(regs) do
        self:freeRegister(reg, false);
    end

    return retRegs;
end;
`,"prometheus.compiler.expressions.string":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- string.lua
--
-- This Script contains the expression handler for the StringExpression.

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns, 1 do
        regs[i] = self:allocRegister();
        if i == 1 then
            self:addStatement(self:setRegister(scope, regs[i], Ast.StringExpression(expression.value)), {regs[i]}, {}, false);
        else
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus.compiler.expressions.table_constructor":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- table_constructor.lua
--
-- This Script contains the expression handler for the TableConstructorExpression.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister();
        if i == 1 then
            local entries = {};
            local entryRegs = {};
            for i, entry in ipairs(expression.entries) do
                if entry.kind == AstKind.TableEntry then
                    local value = entry.value;
                    if i == #expression.entries and not value.isParenthesizedExpression and (value.kind == AstKind.FunctionCallExpression or value.kind == AstKind.PassSelfFunctionCallExpression or value.kind == AstKind.VarargExpression) then
                        local reg = self:compileExpression(entry.value, funcDepth, self.RETURN_ALL)[1];
                        table.insert(entries, Ast.TableEntry(Ast.FunctionCallExpression(
                            self:unpack(scope),
                            {self:register(scope, reg)})));
                        table.insert(entryRegs, reg);
                    else
                        local reg = self:compileExpression(entry.value, funcDepth, 1)[1];
                        table.insert(entries, Ast.TableEntry(self:register(scope, reg)));
                        table.insert(entryRegs, reg);
                    end
                else
                    local keyReg = self:compileExpression(entry.key, funcDepth, 1)[1];
                    local valReg = self:compileExpression(entry.value, funcDepth, 1)[1];
                    table.insert(entries, Ast.KeyedTableEntry(self:register(scope, keyReg), self:register(scope, valReg)));
                    table.insert(entryRegs, valReg);
                    table.insert(entryRegs, keyReg);
                end
            end
            self:addStatement(self:setRegister(scope, regs[i], Ast.TableConstructorExpression(entries)), {regs[i]}, entryRegs, false);
            for i, reg in ipairs(entryRegs) do
                self:freeRegister(reg, false);
            end
        else
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus.compiler.expressions.vararg":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- vararg.lua
--
-- This Script contains the expression handler for the VarargExpression

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    if numReturns == self.RETURN_ALL then
        return {self.varargReg};
    end
    local regs = {};
    for i = 1, numReturns do
        regs[i] = self:allocRegister(false);
        self:addStatement(self:setRegister(scope, regs[i], Ast.IndexExpression(self:register(scope, self.varargReg), Ast.NumberExpression(i))), {regs[i]}, {self.varargReg}, false);
    end
    return regs;
end;
`,"prometheus.compiler.expressions.variable":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- variable.lua
--
-- This Script contains the expression handler for the VariableExpression

local Ast = require("prometheus.ast");

return function(self, expression, funcDepth, numReturns)
    local scope = self.activeBlock.scope;
    local regs = {};
    for i = 1, numReturns do
        if i == 1 then
            if expression.scope.isGlobal then
                regs[i] = self:allocRegister(false);
                local tmpReg = self:allocRegister(false);
                self:addStatement(self:setRegister(scope, tmpReg, Ast.StringExpression(expression.scope:getVariableName(expression.id))), {tmpReg}, {}, false);
                self:addStatement(self:setRegister(scope, regs[i], Ast.IndexExpression(self:env(scope), self:register(scope, tmpReg))), {regs[i]}, {tmpReg}, true);
                self:freeRegister(tmpReg, false);
            else
                if self.scopeFunctionDepths[expression.scope] == funcDepth then
                    if self:isUpvalue(expression.scope, expression.id) then
                        local reg = self:allocRegister(false);
                        local varReg = self:getVarRegister(expression.scope, expression.id, funcDepth, nil);
                        self:addStatement(self:setRegister(scope, reg, self:getUpvalueMember(scope, self:register(scope, varReg))), {reg}, {varReg}, true);
                        regs[i] = reg;
                    else
                        regs[i] = self:getVarRegister(expression.scope, expression.id, funcDepth, nil);
                    end
                else
                    local reg = self:allocRegister(false);
                    local upvalId = self:getUpvalueId(expression.scope, expression.id);
                    scope:addReferenceToHigherScope(self.containerFuncScope, self.currentUpvaluesVar);
                    self:addStatement(self:setRegister(scope, reg, self:getUpvalueMember(scope, Ast.IndexExpression(Ast.VariableExpression(self.containerFuncScope, self.currentUpvaluesVar), Ast.NumberExpression(upvalId)))), {reg}, {}, true);
                    regs[i] = reg;
                end
            end
        else
            regs[i] = self:allocRegister();
            self:addStatement(self:setRegister(scope, regs[i], Ast.NilExpression()), {regs[i]}, {}, false);
        end
    end
    return regs;
end;
`,"prometheus.compiler.expressions":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- expressions.lua
--
-- This Script contains the expression handlers: exports handler table keyed by AstKind.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

local handlers = {};
local expressions = "prometheus.compiler.expressions.";
local function requireExpression(name)
    return require(expressions .. name);
end
handlers[AstKind.StringExpression] = requireExpression("string");
handlers[AstKind.NumberExpression] = requireExpression("number");
handlers[AstKind.BooleanExpression] = requireExpression("boolean");
handlers[AstKind.NilExpression] = requireExpression("nil");
handlers[AstKind.VariableExpression] = requireExpression("variable");
handlers[AstKind.FunctionCallExpression] = requireExpression("function_call");
handlers[AstKind.PassSelfFunctionCallExpression] = requireExpression("pass_self_function_call");
handlers[AstKind.IndexExpression] = requireExpression("index");
handlers[AstKind.NotExpression] = requireExpression("not");
handlers[AstKind.NegateExpression] = requireExpression("negate");
handlers[AstKind.LenExpression] = requireExpression("len");
handlers[AstKind.OrExpression] = requireExpression("or");
handlers[AstKind.AndExpression] = requireExpression("and");
handlers[AstKind.TableConstructorExpression] = requireExpression("table_constructor");
handlers[AstKind.FunctionLiteralExpression] = requireExpression("function_literal");
handlers[AstKind.VarargExpression] = requireExpression("vararg");
handlers[AstKind.IfElseExpression] = requireExpression("if_else");

-- Binary ops share one handler
local binaryHandler = requireExpression("binary");
handlers[AstKind.LessThanExpression] = binaryHandler;
handlers[AstKind.GreaterThanExpression] = binaryHandler;
handlers[AstKind.LessThanOrEqualsExpression] = binaryHandler;
handlers[AstKind.GreaterThanOrEqualsExpression] = binaryHandler;
handlers[AstKind.NotEqualsExpression] = binaryHandler;
handlers[AstKind.EqualsExpression] = binaryHandler;
handlers[AstKind.StrCatExpression] = binaryHandler;
handlers[AstKind.AddExpression] = binaryHandler;
handlers[AstKind.SubExpression] = binaryHandler;
handlers[AstKind.MulExpression] = binaryHandler;
handlers[AstKind.DivExpression] = binaryHandler;
handlers[AstKind.ModExpression] = binaryHandler;
handlers[AstKind.PowExpression] = binaryHandler;

return handlers;
`,"prometheus.compiler.register":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- register.lua
--
-- This Script contains the register management for the compiler.

local Ast = require("prometheus.ast");
local constants = require("prometheus.compiler.constants");
local randomStrings = require("prometheus.randomStrings");

local MAX_REGS = constants.MAX_REGS;

return function(Compiler)
    function Compiler:freeRegister(id, force)
        if force or not (self.registers[id] == self.VAR_REGISTER) then
            self.usedRegisters = self.usedRegisters - 1;
            self.registers[id] = false
        end
    end

    function Compiler:isVarRegister(id)
        return self.registers[id] == self.VAR_REGISTER;
    end

    function Compiler:allocRegister(isVar)
        self.usedRegisters = self.usedRegisters + 1;

        if not isVar then
            if not self.registers[self.POS_REGISTER] then
                self.registers[self.POS_REGISTER] = true;
                return self.POS_REGISTER;
            end

            if not self.registers[self.RETURN_REGISTER] then
                self.registers[self.RETURN_REGISTER] = true;
                return self.RETURN_REGISTER;
            end
        end

        local id = 0;
        if self.usedRegisters < MAX_REGS * constants.MAX_REGS_MUL then
            repeat
                id = math.random(1, MAX_REGS - 1);
            until not self.registers[id];
        else
            repeat
                id = id + 1;
            until not self.registers[id];
        end

        if id > self.maxUsedRegister then
            self.maxUsedRegister = id;
        end

        if(isVar) then
            self.registers[id] = self.VAR_REGISTER;
        else
            self.registers[id] = true
        end
        return id;
    end

    function Compiler:isUpvalue(scope, id)
        return self.upvalVars[scope] and self.upvalVars[scope][id];
    end

    function Compiler:makeUpvalue(scope, id)
        if(not self.upvalVars[scope]) then
            self.upvalVars[scope] = {}
        end
        self.upvalVars[scope][id] = true;
    end

    function Compiler:getVarRegister(scope, id, functionDepth, potentialId)
        if(not self.registersForVar[scope]) then
            self.registersForVar[scope] = {};
            self.scopeFunctionDepths[scope] = functionDepth;
        end

        local reg = self.registersForVar[scope][id];
        if not reg then
            if potentialId and self.registers[potentialId] ~= self.VAR_REGISTER and potentialId ~= self.POS_REGISTER and potentialId ~= self.RETURN_REGISTER then
                self.registers[potentialId] = self.VAR_REGISTER;
                reg = potentialId;
            else
                reg = self:allocRegister(true);
            end
            self.registersForVar[scope][id] = reg;
        end
        return reg;
    end

    function Compiler:getRegisterVarId(id)
        local varId = self.registerVars[id];
        if not varId then
            varId = self.containerFuncScope:addVariable();
            self.registerVars[id] = varId;
        end
        return varId;
    end

    function Compiler:register(scope, id)
        if id == self.POS_REGISTER then
            return self:pos(scope);
        end

        if id == self.RETURN_REGISTER then
            return self:getReturn(scope);
        end

        if id < MAX_REGS then
            local vid = self:getRegisterVarId(id);
            scope:addReferenceToHigherScope(self.containerFuncScope, vid);
            return Ast.VariableExpression(self.containerFuncScope, vid);
        end

        local vid = self:getRegisterVarId(MAX_REGS);
        scope:addReferenceToHigherScope(self.containerFuncScope, vid);
        return Ast.IndexExpression(Ast.VariableExpression(self.containerFuncScope, vid), Ast.NumberExpression((id - MAX_REGS) + 1));
    end

    function Compiler:registerList(scope, ids)
        local l = {};
        for i, id in ipairs(ids) do
            table.insert(l, self:register(scope, id));
        end
        return l;
    end

    function Compiler:registerAssignment(scope, id)
        if id == self.POS_REGISTER then
            return self:posAssignment(scope);
        end
        if id == self.RETURN_REGISTER then
            return self:returnAssignment(scope);
        end

        if id < MAX_REGS then
            local vid = self:getRegisterVarId(id);
            scope:addReferenceToHigherScope(self.containerFuncScope, vid);
            return Ast.AssignmentVariable(self.containerFuncScope, vid);
        end

        local vid = self:getRegisterVarId(MAX_REGS);
        scope:addReferenceToHigherScope(self.containerFuncScope, vid);
        return Ast.AssignmentIndexing(Ast.VariableExpression(self.containerFuncScope, vid), Ast.NumberExpression((id - MAX_REGS) + 1));
    end

    function Compiler:setRegister(scope, id, val, compundArg)
        if(compundArg) then
            return compundArg(self:registerAssignment(scope, id), val);
        end
        return Ast.AssignmentStatement({
            self:registerAssignment(scope, id)
        }, {
            val
        });
    end

    function Compiler:setRegisters(scope, ids, vals)
        local idStats = {};
        for i, id in ipairs(ids) do
            table.insert(idStats, self:registerAssignment(scope, id));
        end

        return Ast.AssignmentStatement(idStats, vals);
    end

    function Compiler:copyRegisters(scope, to, from)
        local idStats = {};
        local vals = {};
        for i, id in ipairs(to) do
            local fromId = from[i];
            if(fromId ~= id) then
                table.insert(idStats, self:registerAssignment(scope, id));
                table.insert(vals, self:register(scope, fromId));
            end
        end

        if(#idStats > 0 and #vals > 0) then
            return Ast.AssignmentStatement(idStats, vals);
        end
    end

    function Compiler:resetRegisters()
        self.registers = {};
    end

    function Compiler:pos(scope)
        scope:addReferenceToHigherScope(self.containerFuncScope, self.posVar);
        return Ast.VariableExpression(self.containerFuncScope, self.posVar);
    end

    function Compiler:posAssignment(scope)
        scope:addReferenceToHigherScope(self.containerFuncScope, self.posVar);
        return Ast.AssignmentVariable(self.containerFuncScope, self.posVar);
    end

    function Compiler:args(scope)
        scope:addReferenceToHigherScope(self.containerFuncScope, self.argsVar);
        return Ast.VariableExpression(self.containerFuncScope, self.argsVar);
    end

    function Compiler:unpack(scope)
        scope:addReferenceToHigherScope(self.scope, self.unpackVar);
        return Ast.VariableExpression(self.scope, self.unpackVar);
    end

    function Compiler:env(scope)
        scope:addReferenceToHigherScope(self.scope, self.envVar);
        return Ast.VariableExpression(self.scope, self.envVar);
    end

    function Compiler:jmp(scope, to)
        scope:addReferenceToHigherScope(self.containerFuncScope, self.posVar);
        return Ast.AssignmentStatement({Ast.AssignmentVariable(self.containerFuncScope, self.posVar)},{to});
    end

    function Compiler:setPos(scope, val)
        if not val then
            local v = Ast.IndexExpression(self:env(scope), randomStrings.randomStringNode(math.random(12, 14)));
            scope:addReferenceToHigherScope(self.containerFuncScope, self.posVar);
            return Ast.AssignmentStatement({Ast.AssignmentVariable(self.containerFuncScope, self.posVar)}, {v});
        end
        scope:addReferenceToHigherScope(self.containerFuncScope, self.posVar);
        return Ast.AssignmentStatement({Ast.AssignmentVariable(self.containerFuncScope, self.posVar)}, {Ast.NumberExpression(val) or Ast.NilExpression()});
    end

    function Compiler:setReturn(scope, val)
        scope:addReferenceToHigherScope(self.containerFuncScope, self.returnVar);
        return Ast.AssignmentStatement({Ast.AssignmentVariable(self.containerFuncScope, self.returnVar)}, {val});
    end

    function Compiler:getReturn(scope)
        scope:addReferenceToHigherScope(self.containerFuncScope, self.returnVar);
        return Ast.VariableExpression(self.containerFuncScope, self.returnVar);
    end

    function Compiler:returnAssignment(scope)
        scope:addReferenceToHigherScope(self.containerFuncScope, self.returnVar);
        return Ast.AssignmentVariable(self.containerFuncScope, self.returnVar);
    end

    function Compiler:setUpvalueMember(scope, idExpr, valExpr, compoundConstructor)
        scope:addReferenceToHigherScope(self.scope, self.upvaluesTable);
        if compoundConstructor then
            return compoundConstructor(Ast.AssignmentIndexing(Ast.VariableExpression(self.scope, self.upvaluesTable), idExpr), valExpr);
        end
        return Ast.AssignmentStatement({Ast.AssignmentIndexing(Ast.VariableExpression(self.scope, self.upvaluesTable), idExpr)}, {valExpr});
    end

    function Compiler:getUpvalueMember(scope, idExpr)
        scope:addReferenceToHigherScope(self.scope, self.upvaluesTable);
        return Ast.IndexExpression(Ast.VariableExpression(self.scope, self.upvaluesTable), idExpr);
    end
end
`,"prometheus.compiler.statements.assignment":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- assignment.lua
--
-- This Script contains the statement handler for the AssignmentStatement.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local exprregs = {};
    local assignmentIndexingRegs = {};
    for i, primaryExpr in ipairs(statement.lhs) do
        if(primaryExpr.kind == AstKind.AssignmentIndexing) then
            assignmentIndexingRegs [i] = {
                base = self:compileExpression(primaryExpr.base, funcDepth, 1)[1],
                index = self:compileExpression(primaryExpr.index, funcDepth, 1)[1],
            };
        end
    end

    for i, expr in ipairs(statement.rhs) do
        if(i == #statement.rhs and #statement.lhs > #statement.rhs) then
            local regs = self:compileExpression(expr, funcDepth, #statement.lhs - #statement.rhs + 1);

            for i, reg in ipairs(regs) do
                if(self:isVarRegister(reg)) then
                    local ro = reg;
                    reg = self:allocRegister(false);
                    self:addStatement(self:copyRegisters(scope, {reg}, {ro}), {reg}, {ro}, false);
                end
                table.insert(exprregs, reg);
            end
        else
            if statement.lhs[i] or expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression then
                local reg = self:compileExpression(expr, funcDepth, 1)[1];
                if(self:isVarRegister(reg)) then
                    local ro = reg;
                    reg = self:allocRegister(false);
                    self:addStatement(self:copyRegisters(scope, {reg}, {ro}), {reg}, {ro}, false);
                end
                table.insert(exprregs, reg);
            end
        end
    end

    for i, primaryExpr in ipairs(statement.lhs) do
        if primaryExpr.kind == AstKind.AssignmentVariable then
            if primaryExpr.scope.isGlobal then
                local tmpReg = self:allocRegister(false);
                self:addStatement(self:setRegister(scope, tmpReg, Ast.StringExpression(primaryExpr.scope:getVariableName(primaryExpr.id))), {tmpReg}, {}, false);
                self:addStatement(Ast.AssignmentStatement({Ast.AssignmentIndexing(self:env(scope), self:register(scope, tmpReg))},
                 {self:register(scope, exprregs[i])}), {}, {tmpReg, exprregs[i]}, true);
                self:freeRegister(tmpReg, false);
            else
                if self.scopeFunctionDepths[primaryExpr.scope] == funcDepth then
                    if self:isUpvalue(primaryExpr.scope, primaryExpr.id) then
                        local reg = self:getVarRegister(primaryExpr.scope, primaryExpr.id, funcDepth);
                        self:addStatement(self:setUpvalueMember(scope, self:register(scope, reg), self:register(scope, exprregs[i])), {}, {reg, exprregs[i]}, true);
                    else
                        local reg = self:getVarRegister(primaryExpr.scope, primaryExpr.id, funcDepth, exprregs[i]);
                        if reg ~= exprregs[i] then
                            self:addStatement(self:setRegister(scope, reg, self:register(scope, exprregs[i])), {reg}, {exprregs[i]}, false);
                        end
                    end
                else
                    local upvalId = self:getUpvalueId(primaryExpr.scope, primaryExpr.id);
                    scope:addReferenceToHigherScope(self.containerFuncScope, self.currentUpvaluesVar);
                    self:addStatement(self:setUpvalueMember(scope, Ast.IndexExpression(Ast.VariableExpression(self.containerFuncScope, self.currentUpvaluesVar), Ast.NumberExpression(upvalId)), self:register(scope, exprregs[i])), {}, {exprregs[i]}, true);
                end
            end
        elseif primaryExpr.kind == AstKind.AssignmentIndexing then
            local baseReg = assignmentIndexingRegs[i].base;
            local indexReg = assignmentIndexingRegs[i].index;
            self:addStatement(Ast.AssignmentStatement({
                Ast.AssignmentIndexing(self:register(scope, baseReg), self:register(scope, indexReg))
            }, {
                self:register(scope, exprregs[i])
            }), {}, {exprregs[i], baseReg, indexReg}, true);
            self:freeRegister(exprregs[i], false);
            self:freeRegister(baseReg, false);
            self:freeRegister(indexReg, false);
        else
            error(string.format("Invalid Assignment lhs: %s", statement.lhs));
        end
    end
end;
`,"prometheus.compiler.statements.break_statement":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- break_statement.lua
--
-- This Script contains the statement handler for the BreakStatement.

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local toFreeVars = {};
    local statScope;
    repeat
        statScope = statScope and statScope.parentScope or statement.scope;
        for id, name in ipairs(statScope.variables) do
            table.insert(toFreeVars, {
                scope = statScope,
                id = id;
            });
        end
    until statScope == statement.loop.body.scope;

    for i, var in pairs(toFreeVars) do
        local varScope, id = var.scope, var.id;
        local varReg = self:getVarRegister(varScope, id, nil, nil);
        if self:isUpvalue(varScope, id) then
            scope:addReferenceToHigherScope(self.scope, self.freeUpvalueFunc);
            self:addStatement(self:setRegister(scope, varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.freeUpvalueFunc), {
                self:register(scope, varReg)
            })), {varReg}, {varReg}, false);
        else
            self:addStatement(self:setRegister(scope, varReg, Ast.NilExpression()), {varReg}, {}, false);
        end
    end


    self:addStatement(self:setPos(scope, statement.loop.__final_block.id), {self.POS_REGISTER}, {}, false);
    self.activeBlock.advanceToNextBlock = false;
end;
`,"prometheus.compiler.statements.compound":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- compound.lua
--
-- This Script contains the statement handler for the Compound statements (compound add, sub, mul, etc.)

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

local compoundConstructors = {
    [AstKind.CompoundAddStatement] = Ast.CompoundAddStatement,
    [AstKind.CompoundSubStatement] = Ast.CompoundSubStatement,
    [AstKind.CompoundMulStatement] = Ast.CompoundMulStatement,
    [AstKind.CompoundDivStatement] = Ast.CompoundDivStatement,
    [AstKind.CompoundModStatement] = Ast.CompoundModStatement,
    [AstKind.CompoundPowStatement] = Ast.CompoundPowStatement,
    [AstKind.CompoundConcatStatement] = Ast.CompoundConcatStatement,
};

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local compoundConstructor = compoundConstructors[statement.kind];
    if statement.lhs.kind == AstKind.AssignmentIndexing then
        local indexing = statement.lhs;
        local baseReg = self:compileExpression(indexing.base, funcDepth, 1)[1];
        local indexReg = self:compileExpression(indexing.index, funcDepth, 1)[1];
        local valueReg = self:compileExpression(statement.rhs, funcDepth, 1)[1];

        self:addStatement(compoundConstructor(Ast.AssignmentIndexing(self:register(scope, baseReg), self:register(scope, indexReg)), self:register(scope, valueReg)), {}, {baseReg, indexReg, valueReg}, true);
        self:freeRegister(baseReg, false);
        self:freeRegister(indexReg, false);
        self:freeRegister(valueReg, false);
    else
        local valueReg = self:compileExpression(statement.rhs, funcDepth, 1)[1];
        local primaryExpr = statement.lhs;
        if primaryExpr.scope.isGlobal then
            local tmpReg = self:allocRegister(false);
            self:addStatement(self:setRegister(scope, tmpReg, Ast.StringExpression(primaryExpr.scope:getVariableName(primaryExpr.id))), {tmpReg}, {}, false);
            self:addStatement(compoundConstructor(Ast.AssignmentIndexing(self:env(scope), self:register(scope, tmpReg)),
             self:register(scope, valueReg)), {}, {tmpReg, valueReg}, true);
            self:freeRegister(tmpReg, false);
            self:freeRegister(valueReg, false);
        else
            if self.scopeFunctionDepths[primaryExpr.scope] == funcDepth then
                if self:isUpvalue(primaryExpr.scope, primaryExpr.id) then
                    local reg = self:getVarRegister(primaryExpr.scope, primaryExpr.id, funcDepth);
                    self:addStatement(self:setUpvalueMember(scope, self:register(scope, reg), self:register(scope, valueReg), compoundConstructor), {}, {reg, valueReg}, true);
                else
                    local reg = self:getVarRegister(primaryExpr.scope, primaryExpr.id, funcDepth, valueReg);
                    if reg ~= valueReg then
                        self:addStatement(self:setRegister(scope, reg, self:register(scope, valueReg), compoundConstructor), {reg}, {valueReg}, false);
                    end
                end
            else
                local upvalId = self:getUpvalueId(primaryExpr.scope, primaryExpr.id);
                scope:addReferenceToHigherScope(self.containerFuncScope, self.currentUpvaluesVar);
                self:addStatement(self:setUpvalueMember(scope, Ast.IndexExpression(Ast.VariableExpression(self.containerFuncScope, self.currentUpvaluesVar), Ast.NumberExpression(upvalId)), self:register(scope, valueReg), compoundConstructor), {}, {valueReg}, true);
            end
            self:freeRegister(valueReg, false);
        end
    end
end;
`,"prometheus.compiler.statements.continue_statement":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- continue_statement.lua
--
-- This Script contains the statement handler for the ContinueStatement.

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local toFreeVars = {};
    local statScope;
    repeat
        statScope = statScope and statScope.parentScope or statement.scope;
        for id, _ in pairs(statScope.variables) do
            table.insert(toFreeVars, {
                scope = statScope,
                id = id;
            });
        end
    until statScope == statement.loop.body.scope;

    for _, var in ipairs(toFreeVars) do
        local varScope, id = var.scope, var.id;
        local varReg = self:getVarRegister(varScope, id, nil, nil);
        if self:isUpvalue(varScope, id) then
            scope:addReferenceToHigherScope(self.scope, self.freeUpvalueFunc);
            self:addStatement(self:setRegister(scope, varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.freeUpvalueFunc), {
                self:register(scope, varReg)
            })), {varReg}, {varReg}, false);
        else
            self:addStatement(self:setRegister(scope, varReg, Ast.NilExpression()), {varReg}, {}, false);
        end
    end


    self:addStatement(self:setPos(scope, statement.loop.__start_block.id), {self.POS_REGISTER}, {}, false);
    self.activeBlock.advanceToNextBlock = false;
end;
`,"prometheus.compiler.statements.do_statement":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- do_statement.lua
--
-- This Script contains the statement handler for the DoStatement.

return function(self, statement, funcDepth)
    self:compileBlock(statement.body, funcDepth);
end;
`,"prometheus.compiler.statements.for_in_statement":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- for_in_statement.lua
--
-- This Script contains the statement handler for the ForInStatement

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local expressionsLength = #statement.expressions;
    local exprregs = {};
    for i, expr in ipairs(statement.expressions) do
        if(i == expressionsLength and expressionsLength < 3) then
            local regs = self:compileExpression(expr, funcDepth, 4 - expressionsLength);
            for i = 1, 4 - expressionsLength do
                table.insert(exprregs, regs[i]);
            end
        else
            if i <= 3 then
                table.insert(exprregs, self:compileExpression(expr, funcDepth, 1)[1])
            else
                self:freeRegister(self:compileExpression(expr, funcDepth, 1)[1], false);
            end
        end
    end

    for i, reg in ipairs(exprregs) do
        if reg and self.registers[reg] ~= self.VAR_REGISTER and reg ~= self.POS_REGISTER and reg ~= self.RETURN_REGISTER then
            self.registers[reg] = self.VAR_REGISTER;
        else
            exprregs[i] = self:allocRegister(true);
            self:addStatement(self:copyRegisters(scope, {exprregs[i]}, {reg}), {exprregs[i]}, {reg}, false);
        end
    end

    local checkBlock = self:createBlock();
    local bodyBlock = self:createBlock();
    local finalBlock = self:createBlock();

    statement.__start_block = checkBlock;
    statement.__final_block = finalBlock;

    self:addStatement(self:setPos(scope, checkBlock.id), {self.POS_REGISTER}, {}, false);

    self:setActiveBlock(checkBlock);
    local scope = self.activeBlock.scope;

    local varRegs = {};
    for i, id in ipairs(statement.ids) do
        varRegs[i] = self:getVarRegister(statement.scope, id, funcDepth)
    end



    self:addStatement(Ast.AssignmentStatement({
        self:registerAssignment(scope, exprregs[3]),
        varRegs[2] and self:registerAssignment(scope, varRegs[2]),
    }, {
        Ast.FunctionCallExpression(self:register(scope, exprregs[1]), {
            self:register(scope, exprregs[2]),
            self:register(scope, exprregs[3]),
        })
    }), {exprregs[3], varRegs[2]}, {exprregs[1], exprregs[2], exprregs[3]}, true);



    self:addStatement(Ast.AssignmentStatement({
        self:posAssignment(scope)
    }, {
        Ast.OrExpression(Ast.AndExpression(self:register(scope, exprregs[3]), Ast.NumberExpression(bodyBlock.id)), Ast.NumberExpression(finalBlock.id))
    }), {self.POS_REGISTER}, {exprregs[3]}, false);

    self:setActiveBlock(bodyBlock);
    local scope = self.activeBlock.scope;

    self:addStatement(self:copyRegisters(scope, {varRegs[1]}, {exprregs[3]}), {varRegs[1]}, {exprregs[3]}, false);

    for i=3, #varRegs do
        self:addStatement(self:setRegister(scope, varRegs[i], Ast.NilExpression()), {varRegs[i]}, {}, false);
    end

    for i, id in ipairs(statement.ids) do
        if(self:isUpvalue(statement.scope, id)) then
            local varreg = varRegs[i];
            local tmpReg = self:allocRegister(false);
            scope:addReferenceToHigherScope(self.scope, self.allocUpvalFunction);
            self:addStatement(self:setRegister(scope, tmpReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.allocUpvalFunction), {})), {tmpReg}, {}, false);
            self:addStatement(self:setUpvalueMember(scope, self:register(scope, tmpReg), self:register(scope, varreg)), {}, {tmpReg, varreg}, true);
            self:addStatement(self:copyRegisters(scope, {varreg}, {tmpReg}), {varreg}, {tmpReg}, false);
            self:freeRegister(tmpReg, false);
        end
    end

    self:compileBlock(statement.body, funcDepth);
    self:addStatement(self:setPos(scope, checkBlock.id), {self.POS_REGISTER}, {}, false);
    self:setActiveBlock(finalBlock);

    for i, _ in ipairs(exprregs) do
        self:freeRegister(exprregs[i], true)
    end
end;
`,"prometheus.compiler.statements.for_statement":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- for_statement.lua
--
-- This Script contains the statement handler for the ForStatement

local Ast = require("prometheus.ast");
local util = require("prometheus.util");

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local checkBlock = self:createBlock();
    local innerBlock = self:createBlock();
    local finalBlock = self:createBlock();

    statement.__start_block = checkBlock;
    statement.__final_block = finalBlock;

    local posState = self.registers[self.POS_REGISTER];
    self.registers[self.POS_REGISTER] = self.VAR_REGISTER;

    local initialReg = self:compileExpression(statement.initialValue, funcDepth, 1)[1];

    local finalExprReg = self:compileExpression(statement.finalValue, funcDepth, 1)[1];
    local finalReg = self:allocRegister(false);
    self:addStatement(self:copyRegisters(scope, {finalReg}, {finalExprReg}), {finalReg}, {finalExprReg}, false);
    self:freeRegister(finalExprReg);

    local incrementExprReg = self:compileExpression(statement.incrementBy, funcDepth, 1)[1];
    local incrementReg = self:allocRegister(false);
    self:addStatement(self:copyRegisters(scope, {incrementReg}, {incrementExprReg}), {incrementReg}, {incrementExprReg}, false);
    self:freeRegister(incrementExprReg);

    local tmpReg = self:allocRegister(false);
    self:addStatement(self:setRegister(scope, tmpReg, Ast.NumberExpression(0)), {tmpReg}, {}, false);
    local incrementIsNegReg = self:allocRegister(false);

    local shouldSwap3 = math.random(1, 2) == 2;
    local shuffledRegs4 = shouldSwap3 and {incrementReg, tmpReg} or {tmpReg, incrementReg};
    self:addStatement(self:setRegister(scope, incrementIsNegReg, Ast[shouldSwap3 and "LessThanExpression" or "GreaterThanExpression"](self:register(scope, shuffledRegs4[1]), self:register(scope, shuffledRegs4[2]))), {incrementIsNegReg}, {shuffledRegs4[1], shuffledRegs4[2]}, false);

    self:freeRegister(tmpReg);

    local currentReg = self:allocRegister(true);
    self:addStatement(self:setRegister(scope, currentReg, Ast.SubExpression(self:register(scope, initialReg), self:register(scope, incrementReg))), {currentReg}, {initialReg, incrementReg}, false);
    self:freeRegister(initialReg);

    self:addStatement(self:jmp(scope, Ast.NumberExpression(checkBlock.id)), {self.POS_REGISTER}, {}, false);

    self:setActiveBlock(checkBlock);

    scope = checkBlock.scope;

    -- x = x + y or x = y + x instead of just x = x + y.
    --> NEW: In an attempt to thwart deobfuscations, despite this being a simple comparison... Shuffling these causes problems for decompilers.
    --> NOTE: This isn't unstable code, I've tested it multiple times.

    local shuffledRegs = util.shuffle({currentReg, incrementReg});
    self:addStatement(self:setRegister(scope, currentReg, Ast.AddExpression(self:register(scope, shuffledRegs[1]), self:register(scope, shuffledRegs[2]))), {currentReg}, {shuffledRegs[1], shuffledRegs[2]}, false);
    local tmpReg1 = self:allocRegister(false);
    local tmpReg2 = self:allocRegister(false);
    self:addStatement(self:setRegister(scope, tmpReg2, Ast.NotExpression(self:register(scope, incrementIsNegReg))), {tmpReg2}, {incrementIsNegReg}, false);

    local shouldSwap = math.random(1, 2) == 2;
    local shuffledRegs2 = shouldSwap and {currentReg, finalReg} or {finalReg, currentReg};
    self:addStatement(self:setRegister(scope, tmpReg1, Ast[shouldSwap and "LessThanOrEqualsExpression" or "GreaterThanOrEqualsExpression"](self:register(scope, shuffledRegs2[1]), self:register(scope, shuffledRegs2[2]))), {tmpReg1}, {shuffledRegs2[1], shuffledRegs2[2]}, false);
    self:addStatement(self:setRegister(scope, tmpReg1, Ast.AndExpression(self:register(scope, tmpReg2), self:register(scope, tmpReg1))), {tmpReg1}, {tmpReg1, tmpReg2}, false);

    local shouldSwap2 = math.random(1, 2) == 2;
    local shuffledRegs3 = shouldSwap2 and {currentReg, finalReg} or {finalReg, currentReg};
    self:addStatement(self:setRegister(scope, tmpReg2, Ast[shouldSwap2 and "GreaterThanOrEqualsExpression" or "LessThanOrEqualsExpression"](self:register(scope, shuffledRegs3[1]), self:register(scope, shuffledRegs3[2]))), {tmpReg2}, {shuffledRegs3[1], shuffledRegs3[2]}, false);

    self:addStatement(self:setRegister(scope, tmpReg2, Ast.AndExpression(self:register(scope, incrementIsNegReg), self:register(scope, tmpReg2))), {tmpReg2}, {tmpReg2, incrementIsNegReg}, false);
    self:addStatement(self:setRegister(scope, tmpReg1, Ast.OrExpression(self:register(scope, tmpReg2), self:register(scope, tmpReg1))), {tmpReg1}, {tmpReg1, tmpReg2}, false);
    self:freeRegister(tmpReg2);
    tmpReg2 = self:compileExpression(Ast.NumberExpression(innerBlock.id), funcDepth, 1)[1];
    self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.AndExpression(self:register(scope, tmpReg1), self:register(scope, tmpReg2))), {self.POS_REGISTER}, {tmpReg1, tmpReg2}, false);
    self:freeRegister(tmpReg2);
    self:freeRegister(tmpReg1);
    tmpReg2 = self:compileExpression(Ast.NumberExpression(finalBlock.id), funcDepth, 1)[1];
    self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.OrExpression(self:register(scope, self.POS_REGISTER), self:register(scope, tmpReg2))), {self.POS_REGISTER}, {self.POS_REGISTER, tmpReg2}, false);
    self:freeRegister(tmpReg2);

    self:setActiveBlock(innerBlock);
    scope = innerBlock.scope;
    self.registers[self.POS_REGISTER] = posState;

    local varReg = self:getVarRegister(statement.scope, statement.id, funcDepth, nil);

    if(self:isUpvalue(statement.scope, statement.id)) then
        scope:addReferenceToHigherScope(self.scope, self.allocUpvalFunction);
        self:addStatement(self:setRegister(scope, varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.allocUpvalFunction), {})), {varReg}, {}, false);
        self:addStatement(self:setUpvalueMember(scope, self:register(scope, varReg), self:register(scope, currentReg)), {}, {varReg, currentReg}, true);
    else
        self:addStatement(self:setRegister(scope, varReg, self:register(scope, currentReg)), {varReg}, {currentReg}, false);
    end


    self:compileBlock(statement.body, funcDepth);
    self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.NumberExpression(checkBlock.id)), {self.POS_REGISTER}, {}, false);

    self.registers[self.POS_REGISTER] = self.VAR_REGISTER;
    self:freeRegister(finalReg);
    self:freeRegister(incrementIsNegReg);
    self:freeRegister(incrementReg);
    self:freeRegister(currentReg, true);

    self.registers[self.POS_REGISTER] = posState;
    self:setActiveBlock(finalBlock);
end;
`,"prometheus.compiler.statements.function_call":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- function_call.lua
--
-- This Script contains the statement handler for the FunctionCallStatement.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local baseReg = self:compileExpression(statement.base, funcDepth, 1)[1];
    local retReg = self:allocRegister(false);
    local regs = {};
    local args = {};

    for i, expr in ipairs(statement.args) do
        if i == #statement.args and not expr.isParenthesizedExpression and (expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression or expr.kind == AstKind.VarargExpression) then
            local reg = self:compileExpression(expr, funcDepth, self.RETURN_ALL)[1];
            table.insert(args, Ast.FunctionCallExpression(
                self:unpack(scope),
                {self:register(scope, reg)}));
            table.insert(regs, reg);
        else
            local reg = self:compileExpression(expr, funcDepth, 1)[1];
            local argExpr = self:register(scope, reg);
            table.insert(args, argExpr);
            table.insert(regs, reg);
        end
    end

    self:addStatement(self:setRegister(scope, retReg, Ast.FunctionCallExpression(self:register(scope, baseReg), args)), {retReg}, {baseReg, unpack(regs)}, true);
    self:freeRegister(baseReg, false);
    self:freeRegister(retReg, false);
    for _, reg in ipairs(regs) do
        self:freeRegister(reg, false);
    end
end;
`,"prometheus.compiler.statements.function_declaration":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- function_declaration.lua
--
-- This Script contains the statement handler for the FunctionDeclaration.

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local retReg = self:compileFunction(statement, funcDepth);
    if(#statement.indices > 0) then
        local tblReg;
        if statement.scope.isGlobal then
            tblReg = self:allocRegister(false);
            self:addStatement(self:setRegister(scope, tblReg, Ast.StringExpression(statement.scope:getVariableName(statement.id))), {tblReg}, {}, false);
            self:addStatement(self:setRegister(scope, tblReg, Ast.IndexExpression(self:env(scope), self:register(scope, tblReg))), {tblReg}, {tblReg}, true);
        else
            if self.scopeFunctionDepths[statement.scope] == funcDepth then
                if self:isUpvalue(statement.scope, statement.id) then
                    tblReg = self:allocRegister(false);
                    local reg = self:getVarRegister(statement.scope, statement.id, funcDepth);
                    self:addStatement(self:setRegister(scope, tblReg, self:getUpvalueMember(scope, self:register(scope, reg))), {tblReg}, {reg}, true);
                else
                    tblReg = self:getVarRegister(statement.scope, statement.id, funcDepth, retReg);
                end
            else
                tblReg = self:allocRegister(false);
                local upvalId = self:getUpvalueId(statement.scope, statement.id);
                scope:addReferenceToHigherScope(self.containerFuncScope, self.currentUpvaluesVar);
                self:addStatement(self:setRegister(scope, tblReg, self:getUpvalueMember(scope, Ast.IndexExpression(Ast.VariableExpression(self.containerFuncScope, self.currentUpvaluesVar), Ast.NumberExpression(upvalId)))), {tblReg}, {}, true);
            end
        end

        for i = 1, #statement.indices - 1 do
            local index = statement.indices[i];
            local indexReg = self:compileExpression(Ast.StringExpression(index), funcDepth, 1)[1];
            local tblRegOld = tblReg;
            tblReg = self:allocRegister(false);
            self:addStatement(self:setRegister(scope, tblReg, Ast.IndexExpression(self:register(scope, tblRegOld), self:register(scope, indexReg))), {tblReg}, {tblReg, indexReg}, true);
            self:freeRegister(tblRegOld, false);
            self:freeRegister(indexReg, false);
        end

        local index = statement.indices[#statement.indices];
        local indexReg = self:compileExpression(Ast.StringExpression(index), funcDepth, 1)[1];
        self:addStatement(Ast.AssignmentStatement({
            Ast.AssignmentIndexing(self:register(scope, tblReg), self:register(scope, indexReg)),
        }, {
            self:register(scope, retReg),
        }), {}, {tblReg, indexReg, retReg}, true);
        self:freeRegister(indexReg, false);
        self:freeRegister(tblReg, false);
        self:freeRegister(retReg, false);

        return;
    end
    if statement.scope.isGlobal then
        local tmpReg = self:allocRegister(false);
        self:addStatement(self:setRegister(scope, tmpReg, Ast.StringExpression(statement.scope:getVariableName(statement.id))), {tmpReg}, {}, false);
        self:addStatement(Ast.AssignmentStatement({Ast.AssignmentIndexing(self:env(scope), self:register(scope, tmpReg))},
         {self:register(scope, retReg)}), {}, {tmpReg, retReg}, true);
        self:freeRegister(tmpReg, false);
    else
        if self.scopeFunctionDepths[statement.scope] == funcDepth then
            if self:isUpvalue(statement.scope, statement.id) then
                local reg = self:getVarRegister(statement.scope, statement.id, funcDepth);
                self:addStatement(self:setUpvalueMember(scope, self:register(scope, reg), self:register(scope, retReg)), {}, {reg, retReg}, true);
            else
                local reg = self:getVarRegister(statement.scope, statement.id, funcDepth, retReg);
                if reg ~= retReg then
                    self:addStatement(self:setRegister(scope, reg, self:register(scope, retReg)), {reg}, {retReg}, false);
                end
            end
        else
            local upvalId = self:getUpvalueId(statement.scope, statement.id);
            scope:addReferenceToHigherScope(self.containerFuncScope, self.currentUpvaluesVar);
            self:addStatement(self:setUpvalueMember(scope, Ast.IndexExpression(Ast.VariableExpression(self.containerFuncScope, self.currentUpvaluesVar), Ast.NumberExpression(upvalId)), self:register(scope, retReg)), {}, {retReg}, true);
        end
    end
    self:freeRegister(retReg, false);
end;
`,"prometheus.compiler.statements.if_statement":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- if_statement.lua
--
-- This Script contains the statement handler for the IfStatement.

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local conditionReg = self:compileExpression(statement.condition, funcDepth, 1)[1];
    local finalBlock = self:createBlock();

    local nextBlock
    if statement.elsebody or #statement.elseifs > 0 then
        nextBlock = self:createBlock();
    else
        nextBlock = finalBlock;
    end
    local innerBlock = self:createBlock();


    self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(scope, conditionReg), Ast.NumberExpression(innerBlock.id)), Ast.NumberExpression(nextBlock.id))), {self.POS_REGISTER}, {conditionReg}, false);

    self:freeRegister(conditionReg, false);

    self:setActiveBlock(innerBlock);
    scope = innerBlock.scope
    self:compileBlock(statement.body, funcDepth);
    self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.NumberExpression(finalBlock.id)), {self.POS_REGISTER}, {}, false);

    for i, eif in ipairs(statement.elseifs) do
        self:setActiveBlock(nextBlock);
        conditionReg = self:compileExpression(eif.condition, funcDepth, 1)[1];
        local innerBlock = self:createBlock();
        if statement.elsebody or i < #statement.elseifs then
            nextBlock = self:createBlock();
        else
            nextBlock = finalBlock;
        end
        local scope = self.activeBlock.scope;

        self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(scope, conditionReg), Ast.NumberExpression(innerBlock.id)), Ast.NumberExpression(nextBlock.id))), {self.POS_REGISTER}, {conditionReg}, false);


        self:freeRegister(conditionReg, false);

        self:setActiveBlock(innerBlock);
        scope = innerBlock.scope;
        self:compileBlock(eif.body, funcDepth);
        self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.NumberExpression(finalBlock.id)), {self.POS_REGISTER}, {}, false);
    end

    if statement.elsebody then
        self:setActiveBlock(nextBlock);
        self:compileBlock(statement.elsebody, funcDepth);
        self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.NumberExpression(finalBlock.id)), {self.POS_REGISTER}, {}, false);
    end

    self:setActiveBlock(finalBlock);
end;
`,"prometheus.compiler.statements.local_function_declaration":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- local_function_declaration.lua
--
-- This Script contains the statement handler for the LocalFunctionDeclaration

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;

    if(self:isUpvalue(statement.scope, statement.id)) then
        local varReg = self:getVarRegister(statement.scope, statement.id, funcDepth, nil);
        scope:addReferenceToHigherScope(self.scope, self.allocUpvalFunction);
        self:addStatement(self:setRegister(scope, varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.allocUpvalFunction), {})), {varReg}, {}, false);
        local retReg = self:compileFunction(statement, funcDepth);
        self:addStatement(self:setUpvalueMember(scope, self:register(scope, varReg), self:register(scope, retReg)), {}, {varReg, retReg}, true);
        self:freeRegister(retReg, false);
    else
        local retReg = self:compileFunction(statement, funcDepth);
        local varReg = self:getVarRegister(statement.scope, statement.id, funcDepth, retReg);

        self:addStatement(self:copyRegisters(scope, {varReg}, {retReg}), {varReg}, {retReg}, false);
        self:freeRegister(retReg, false);
    end
end;
`,"prometheus.compiler.statements.local_variable_declaration":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- local_variable_declaration.lua
--
-- This Script contains the statement handler for the LocalVariableDeclaration

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local exprregs = {};
    for i, expr in ipairs(statement.expressions) do
        if(i == #statement.expressions and #statement.ids > #statement.expressions) then
            local regs = self:compileExpression(expr, funcDepth, #statement.ids - #statement.expressions + 1);
            for i, reg in ipairs(regs) do
                table.insert(exprregs, reg);
            end
        else
            if statement.ids[i] or expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression then
                local reg = self:compileExpression(expr, funcDepth, 1)[1];
                table.insert(exprregs, reg);
            end
        end
    end

    if #exprregs == 0 then
        for _=1, #statement.ids do
            table.insert(exprregs, self:compileExpression(Ast.NilExpression(), funcDepth, 1)[1]);
        end
    end

    for i, id in ipairs(statement.ids) do
        if(exprregs[i]) then
            if(self:isUpvalue(statement.scope, id)) then
                local varreg = self:getVarRegister(statement.scope, id, funcDepth);
                local varReg = self:getVarRegister(statement.scope, id, funcDepth, nil);
                scope:addReferenceToHigherScope(self.scope, self.allocUpvalFunction);
                self:addStatement(self:setRegister(scope, varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.allocUpvalFunction), {})), {varReg}, {}, false);
                self:addStatement(self:setUpvalueMember(scope, self:register(scope, varReg), self:register(scope, exprregs[i])), {}, {varReg, exprregs[i]}, true);
                self:freeRegister(exprregs[i], false);
            else
                local varreg = self:getVarRegister(statement.scope, id, funcDepth, exprregs[i]);
                self:addStatement(self:copyRegisters(scope, {varreg}, {exprregs[i]}), {varreg}, {exprregs[i]}, false);
                self:freeRegister(exprregs[i], false);
            end
        end
    end

    if not self.scopeFunctionDepths[statement.scope] then
        self.scopeFunctionDepths[statement.scope] = funcDepth;
    end
end;
`,"prometheus.compiler.statements.pass_self_function_call":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- pass_self_function_call.lua
--
-- This Script contains the statement handler for the PassSelfFunctionCallStatement.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local baseReg = self:compileExpression(statement.base, funcDepth, 1)[1];
    local tmpReg = self:allocRegister(false);
    local args = { self:register(scope, baseReg) };
    local regs = { baseReg };

    for i, expr in ipairs(statement.args) do
        if i == #statement.args and not expr.isParenthesizedExpression and (expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression or expr.kind == AstKind.VarargExpression) then
            local reg = self:compileExpression(expr, funcDepth, self.RETURN_ALL)[1];
            table.insert(args, Ast.FunctionCallExpression(
                self:unpack(scope),
                {self:register(scope, reg)}));
            table.insert(regs, reg);
        else
            local reg = self:compileExpression(expr, funcDepth, 1)[1];
            table.insert(args, self:register(scope, reg));
            table.insert(regs, reg);
        end
    end
    self:addStatement(self:setRegister(scope, tmpReg, Ast.StringExpression(statement.passSelfFunctionName)), {tmpReg}, {}, false);
    self:addStatement(self:setRegister(scope, tmpReg, Ast.IndexExpression(self:register(scope, baseReg), self:register(scope, tmpReg))), {tmpReg}, {tmpReg, baseReg}, true);

    self:addStatement(self:setRegister(scope, tmpReg, Ast.FunctionCallExpression(self:register(scope, tmpReg), args)), {tmpReg}, {tmpReg, unpack(regs)}, true);

    self:freeRegister(tmpReg, false);
    for _, reg in ipairs(regs) do
        self:freeRegister(reg, false);
    end
end;
`,"prometheus.compiler.statements.repeat_statement":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- repeat_statement.lua
--
-- This Script contains the statement handler for the RepeatStatement.

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local innerBlock = self:createBlock();
    local finalBlock = self:createBlock();
    statement.__start_block = innerBlock;
    statement.__final_block = finalBlock;

    self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.NumberExpression(innerBlock.id)), {self.POS_REGISTER}, {}, false);
    self:setActiveBlock(innerBlock);

    for _, stat in ipairs(statement.body.statements) do
        self:compileStatement(stat, funcDepth);
    end;

    local scope = self.activeBlock.scope;
    local conditionReg = (self:compileExpression(statement.condition, funcDepth, 1))[1];
    self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(scope, conditionReg), Ast.NumberExpression(finalBlock.id)), Ast.NumberExpression(innerBlock.id))), { self.POS_REGISTER }, { conditionReg }, false);
    self:freeRegister(conditionReg, false);

    for id, _ in ipairs(statement.body.scope.variables) do
        local varReg = self:getVarRegister(statement.body.scope, id, funcDepth, nil);
        if self:isUpvalue(statement.body.scope, id) then
            scope:addReferenceToHigherScope(self.scope, self.freeUpvalueFunc);
            self:addStatement(self:setRegister(scope, varReg, Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.freeUpvalueFunc), { self:register(scope, varReg) })), { varReg }, { varReg }, false);
        else
            self:addStatement(self:setRegister(scope, varReg, Ast.NilExpression()), { varReg }, {}, false);
        end;
        self:freeRegister(varReg, true);
    end;

    self:setActiveBlock(finalBlock);
end;
`,"prometheus.compiler.statements.return":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- return.lua
--
-- This Script contains the statement handler for the ReturnStatement.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local entries = {};
    local regs = {};

    for i, expr in ipairs(statement.args) do
        if i == #statement.args and not expr.isParenthesizedExpression and (expr.kind == AstKind.FunctionCallExpression or expr.kind == AstKind.PassSelfFunctionCallExpression or expr.kind == AstKind.VarargExpression) then
            local reg = self:compileExpression(expr, funcDepth, self.RETURN_ALL)[1];
            table.insert(entries, Ast.TableEntry(Ast.FunctionCallExpression(
                self:unpack(scope),
                {self:register(scope, reg)})));
            table.insert(regs, reg);
        else
            local reg = self:compileExpression(expr, funcDepth, 1)[1];
            table.insert(entries, Ast.TableEntry(self:register(scope, reg)));
            table.insert(regs, reg);
        end
    end

    for _, reg in ipairs(regs) do
        self:freeRegister(reg, false);
    end

    self:addStatement(self:setReturn(scope, Ast.TableConstructorExpression(entries)), {self.RETURN_REGISTER}, regs, false);
    self:addStatement(self:setPos(self.activeBlock.scope, nil), {self.POS_REGISTER}, {}, false);
    self.activeBlock.advanceToNextBlock = false;
end;
`,"prometheus.compiler.statements.while_statement":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- while_statement.lua
--
-- This Script contains the statement handler for the WhileStatement

local Ast = require("prometheus.ast");

return function(self, statement, funcDepth)
    local scope = self.activeBlock.scope;
    local innerBlock = self:createBlock();
    local finalBlock = self:createBlock();
    local checkBlock = self:createBlock();

    statement.__start_block = checkBlock;
    statement.__final_block = finalBlock;

    self:addStatement(self:setPos(scope, checkBlock.id), {self.POS_REGISTER}, {}, false);

    self:setActiveBlock(checkBlock);
    scope = self.activeBlock.scope;
    local conditionReg = self:compileExpression(statement.condition, funcDepth, 1)[1];
    self:addStatement(self:setRegister(scope, self.POS_REGISTER, Ast.OrExpression(Ast.AndExpression(self:register(scope, conditionReg), Ast.NumberExpression(innerBlock.id)), Ast.NumberExpression(finalBlock.id))), {self.POS_REGISTER}, {conditionReg}, false);
    self:freeRegister(conditionReg, false);

    self:setActiveBlock(innerBlock);
    local scope = self.activeBlock.scope;
    self:compileBlock(statement.body, funcDepth);
    self:addStatement(self:setPos(scope, checkBlock.id), {self.POS_REGISTER}, {}, false);
    self:setActiveBlock(finalBlock);
end;
`,"prometheus.compiler.statements":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- statements.lua
--
-- This Script contains the statement handlers: exports handler table keyed by AstKind.

local Ast = require("prometheus.ast");
local AstKind = Ast.AstKind;

local handlers = {};
local statements = "prometheus.compiler.statements.";
local function requireStatement(name)
    return require(statements .. name);
end

handlers[AstKind.ReturnStatement] = requireStatement("return");
handlers[AstKind.LocalVariableDeclaration] = requireStatement("local_variable_declaration");
handlers[AstKind.FunctionCallStatement] = requireStatement("function_call");
handlers[AstKind.PassSelfFunctionCallStatement] = requireStatement("pass_self_function_call");
handlers[AstKind.LocalFunctionDeclaration] = requireStatement("local_function_declaration");
handlers[AstKind.FunctionDeclaration] = requireStatement("function_declaration");
handlers[AstKind.AssignmentStatement] = requireStatement("assignment");
handlers[AstKind.IfStatement] = requireStatement("if_statement");
handlers[AstKind.DoStatement] = requireStatement("do_statement");
handlers[AstKind.WhileStatement] = requireStatement("while_statement");
handlers[AstKind.RepeatStatement] = requireStatement("repeat_statement");
handlers[AstKind.ForStatement] = requireStatement("for_statement");
handlers[AstKind.ForInStatement] = requireStatement("for_in_statement");
handlers[AstKind.BreakStatement] = requireStatement("break_statement");
handlers[AstKind.ContinueStatement] = requireStatement("continue_statement");

-- Compound statements share one handler
local compoundHandler = requireStatement("compound");
handlers[AstKind.CompoundAddStatement] = compoundHandler;
handlers[AstKind.CompoundSubStatement] = compoundHandler;
handlers[AstKind.CompoundMulStatement] = compoundHandler;
handlers[AstKind.CompoundDivStatement] = compoundHandler;
handlers[AstKind.CompoundModStatement] = compoundHandler;
handlers[AstKind.CompoundPowStatement] = compoundHandler;
handlers[AstKind.CompoundConcatStatement] = compoundHandler;

return handlers;
`,"prometheus.compiler.upvalue":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- upvalue.lua
--
-- This Script contains the upvalue and GC management for the compiler.

local Ast = require("prometheus.ast");
local Scope = require("prometheus.scope");
local util = require("prometheus.util");

local unpack = unpack or table.unpack;

return function(Compiler)
    function Compiler:createUpvaluesGcFunc()
        local scope = Scope:new(self.scope);
        local selfVar = scope:addVariable();

        local iteratorVar = scope:addVariable();
        local valueVar = scope:addVariable();

        local whileScope = Scope:new(scope);
        whileScope:addReferenceToHigherScope(self.scope, self.upvaluesReferenceCountsTable, 3);
        whileScope:addReferenceToHigherScope(scope, valueVar, 3);
        whileScope:addReferenceToHigherScope(scope, iteratorVar, 3);

        local ifScope = Scope:new(whileScope);
        ifScope:addReferenceToHigherScope(self.scope, self.upvaluesReferenceCountsTable, 1);
        ifScope:addReferenceToHigherScope(self.scope, self.upvaluesTable, 1);

        return Ast.FunctionLiteralExpression({Ast.VariableExpression(scope, selfVar)}, Ast.Block({
            Ast.LocalVariableDeclaration(scope, {iteratorVar, valueVar}, {Ast.NumberExpression(1), Ast.IndexExpression(Ast.VariableExpression(scope, selfVar), Ast.NumberExpression(1))}),
            Ast.WhileStatement(Ast.Block({
                Ast.AssignmentStatement({
                    Ast.AssignmentIndexing(Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable), Ast.VariableExpression(scope, valueVar)),
                    Ast.AssignmentVariable(scope, iteratorVar),
                }, {
                    Ast.SubExpression(Ast.IndexExpression(Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable), Ast.VariableExpression(scope, valueVar)), Ast.NumberExpression(1)),
                    Ast.AddExpression(unpack(util.shuffle{Ast.VariableExpression(scope, iteratorVar), Ast.NumberExpression(1)})),
                }),
                Ast.IfStatement(Ast.EqualsExpression(unpack(util.shuffle{Ast.IndexExpression(Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable), Ast.VariableExpression(scope, valueVar)), Ast.NumberExpression(0)})), Ast.Block({
                    Ast.AssignmentStatement({
                        Ast.AssignmentIndexing(Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable), Ast.VariableExpression(scope, valueVar)),
                        Ast.AssignmentIndexing(Ast.VariableExpression(self.scope, self.upvaluesTable), Ast.VariableExpression(scope, valueVar)),
                    }, {
                        Ast.NilExpression(),
                        Ast.NilExpression(),
                    })
                }, ifScope), {}, nil),
                Ast.AssignmentStatement({
                    Ast.AssignmentVariable(scope, valueVar),
                }, {
                    Ast.IndexExpression(Ast.VariableExpression(scope, selfVar), Ast.VariableExpression(scope, iteratorVar)),
                }),
            }, whileScope), Ast.VariableExpression(scope, valueVar), scope);
        }, scope));
    end

    function Compiler:createFreeUpvalueFunc()
        local scope = Scope:new(self.scope);
        local argVar = scope:addVariable();
        local ifScope = Scope:new(scope);
        ifScope:addReferenceToHigherScope(scope, argVar, 3);
        scope:addReferenceToHigherScope(self.scope, self.upvaluesReferenceCountsTable, 2);
        return Ast.FunctionLiteralExpression({Ast.VariableExpression(scope, argVar)}, Ast.Block({
            Ast.AssignmentStatement({
                Ast.AssignmentIndexing(Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable), Ast.VariableExpression(scope, argVar))
            }, {
                Ast.SubExpression(Ast.IndexExpression(Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable), Ast.VariableExpression(scope, argVar)), Ast.NumberExpression(1));
            }),
            Ast.IfStatement(Ast.EqualsExpression(unpack(util.shuffle{Ast.IndexExpression(Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable), Ast.VariableExpression(scope, argVar)), Ast.NumberExpression(0)})), Ast.Block({
                Ast.AssignmentStatement({
                    Ast.AssignmentIndexing(Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable), Ast.VariableExpression(scope, argVar)),
                    Ast.AssignmentIndexing(Ast.VariableExpression(self.scope, self.upvaluesTable), Ast.VariableExpression(scope, argVar)),
                }, {
                    Ast.NilExpression(),
                    Ast.NilExpression(),
                })
            }, ifScope), {}, nil)
        }, scope))
    end

    function Compiler:createUpvaluesProxyFunc()
        local scope = Scope:new(self.scope);
        scope:addReferenceToHigherScope(self.scope, self.newproxyVar);

        local entriesVar = scope:addVariable();

        local ifScope = Scope:new(scope);
        local proxyVar = ifScope:addVariable();
        local metatableVar = ifScope:addVariable();
        local elseScope = Scope:new(scope);
        ifScope:addReferenceToHigherScope(self.scope, self.newproxyVar);
        ifScope:addReferenceToHigherScope(self.scope, self.getmetatableVar);
        ifScope:addReferenceToHigherScope(self.scope, self.upvaluesGcFunctionVar);
        ifScope:addReferenceToHigherScope(scope, entriesVar);
        elseScope:addReferenceToHigherScope(self.scope, self.setmetatableVar);
        elseScope:addReferenceToHigherScope(scope, entriesVar);
        elseScope:addReferenceToHigherScope(self.scope, self.upvaluesGcFunctionVar);

        local forScope = Scope:new(scope);
        local forArg = forScope:addVariable();
        forScope:addReferenceToHigherScope(self.scope, self.upvaluesReferenceCountsTable, 2);
        forScope:addReferenceToHigherScope(scope, entriesVar, 2);

        return Ast.FunctionLiteralExpression({Ast.VariableExpression(scope, entriesVar)}, Ast.Block({
            Ast.ForStatement(forScope, forArg, Ast.NumberExpression(1), Ast.LenExpression(Ast.VariableExpression(scope, entriesVar)), Ast.NumberExpression(1), Ast.Block({
                Ast.AssignmentStatement({
                    Ast.AssignmentIndexing(Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable), Ast.IndexExpression(Ast.VariableExpression(scope, entriesVar), Ast.VariableExpression(forScope, forArg)))
                }, {
                    Ast.AddExpression(unpack(util.shuffle{
                        Ast.IndexExpression(Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable), Ast.IndexExpression(Ast.VariableExpression(scope, entriesVar), Ast.VariableExpression(forScope, forArg))),
                        Ast.NumberExpression(1),
                    }))
                })
            }, forScope), scope);
            Ast.IfStatement(Ast.VariableExpression(self.scope, self.newproxyVar), Ast.Block({
                Ast.LocalVariableDeclaration(ifScope, {proxyVar}, {
                    Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.newproxyVar), {
                        Ast.BooleanExpression(true)
                    });
                });
                Ast.LocalVariableDeclaration(ifScope, {metatableVar}, {
                    Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.getmetatableVar), {
                        Ast.VariableExpression(ifScope, proxyVar);
                    });
                });
                Ast.AssignmentStatement({
                    Ast.AssignmentIndexing(Ast.VariableExpression(ifScope, metatableVar), Ast.StringExpression("__index")),
                    Ast.AssignmentIndexing(Ast.VariableExpression(ifScope, metatableVar), Ast.StringExpression("__gc")),
                    Ast.AssignmentIndexing(Ast.VariableExpression(ifScope, metatableVar), Ast.StringExpression("__len")),
                }, {
                    Ast.VariableExpression(scope, entriesVar),
                    Ast.VariableExpression(self.scope, self.upvaluesGcFunctionVar),
                    Ast.FunctionLiteralExpression({}, Ast.Block({
                        Ast.ReturnStatement({Ast.NumberExpression(self.upvalsProxyLenReturn)})
                    }, Scope:new(ifScope)));
                });
                Ast.ReturnStatement({
                    Ast.VariableExpression(ifScope, proxyVar)
                })
            }, ifScope), {}, Ast.Block({
                Ast.ReturnStatement({Ast.FunctionCallExpression(Ast.VariableExpression(self.scope, self.setmetatableVar), {
                    Ast.TableConstructorExpression({}),
                    Ast.TableConstructorExpression({
                        Ast.KeyedTableEntry(Ast.StringExpression("__gc"), Ast.VariableExpression(self.scope, self.upvaluesGcFunctionVar)),
                        Ast.KeyedTableEntry(Ast.StringExpression("__index"), Ast.VariableExpression(scope, entriesVar)),
                        Ast.KeyedTableEntry(Ast.StringExpression("__len"), Ast.FunctionLiteralExpression({}, Ast.Block({
                            Ast.ReturnStatement({Ast.NumberExpression(self.upvalsProxyLenReturn)})
                        }, Scope:new(elseScope)))),
                    })
                })})
            }, elseScope));
        }, scope));
    end

    function Compiler:createAllocUpvalFunction()
        local scope = Scope:new(self.scope);
        scope:addReferenceToHigherScope(self.scope, self.currentUpvalId, 4);
        scope:addReferenceToHigherScope(self.scope, self.upvaluesReferenceCountsTable, 1);

        return Ast.FunctionLiteralExpression({}, Ast.Block({
            Ast.AssignmentStatement({
                    Ast.AssignmentVariable(self.scope, self.currentUpvalId),
                },{
                    Ast.AddExpression(unpack(util.shuffle({
                        Ast.VariableExpression(self.scope, self.currentUpvalId),
                        Ast.NumberExpression(1),
                    }))),
                }
            ),
            Ast.AssignmentStatement({
                Ast.AssignmentIndexing(Ast.VariableExpression(self.scope, self.upvaluesReferenceCountsTable), Ast.VariableExpression(self.scope, self.currentUpvalId)),
            }, {
                Ast.NumberExpression(1),
            }),
            Ast.ReturnStatement({
                Ast.VariableExpression(self.scope, self.currentUpvalId),
            })
        }, scope));
    end
end
`,"prometheus.enums":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- enums.lua
--
-- This Script provides some enums used by the Obfuscator.

local Enums = {};

local chararray = require("prometheus.util").chararray;

Enums.LuaVersion = {
	LuaU = "LuaU" ,
	Lua51 = "Lua51",
}

Enums.Conventions = {
	[Enums.LuaVersion.Lua51] = {
		Keywords = {
			"and", "break", "do", "else", "elseif",
			"end", "false", "for", "function", "if",
			"in", "local", "nil", "not", "or",
			"repeat", "return", "then", "true", "until", "while"
		},

		SymbolChars = chararray("+-*/%^#=~<>(){}[];:,."),
		MaxSymbolLength = 3,
		Symbols = {
			"+", "-", "*", "/", "%", "^", "#",
			"==", "~=", "<=", ">=", "<", ">", "=",
			"(", ")", "{", "}", "[", "]",
			";", ":", ",", ".", "..", "...",
		},

		IdentChars = chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789"),
		NumberChars = chararray("0123456789"),
		HexNumberChars = chararray("0123456789abcdefABCDEF"),
		BinaryNumberChars = {"0", "1"},
		DecimalExponent = {"e", "E"},
		HexadecimalNums = {"x", "X"},
		BinaryNums = {"b", "B"},
		DecimalSeperators = false,

		EscapeSequences = {
			["a"] = "\\a";
			["b"] = "\\b";
			["f"] = "\\f";
			["n"] = "\\n";
			["r"] = "\\r";
			["t"] = "\\t";
			["v"] = "\\v";
			["\\\\"] = "\\\\";
			["\\""] = "\\"";
			["\\'"] = "\\'";
		},
		NumericalEscapes = true,
		EscapeZIgnoreNextWhitespace = true,
		HexEscapes = true,
		UnicodeEscapes = true,
	},
	[Enums.LuaVersion.LuaU] = {
		Keywords = {
			"and", "break", "do", "else", "elseif", "continue",
			"end", "false", "for", "function", "if",
			"in", "local", "nil", "not", "or",
			"repeat", "return", "then", "true", "until", "while"
		},

		SymbolChars = chararray("+-*/%^#=~<>(){}[];:,."),
		MaxSymbolLength = 3,
		Symbols = {
			"+", "-", "*", "/", "%", "^", "#",
			"==", "~=", "<=", ">=", "<", ">", "=",
			"+=", "-=", "/=", "%=", "^=", "..=", "*=",
			"(", ")", "{", "}", "[", "]",
			";", ":", ",", ".", "..", "...",
			"::", "->", "?", "|", "&",
		},

		IdentChars = chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789"),
		NumberChars = chararray("0123456789"),
		HexNumberChars = chararray("0123456789abcdefABCDEF"),
		BinaryNumberChars = {"0", "1"},
		DecimalExponent = {"e", "E"},
		HexadecimalNums = {"x", "X"},
		BinaryNums = {"b", "B"},
		DecimalSeperators = {"_"},

		EscapeSequences = {
			["a"] = "\\a";
			["b"] = "\\b";
			["f"] = "\\f";
			["n"] = "\\n";
			["r"] = "\\r";
			["t"] = "\\t";
			["v"] = "\\v";
			["\\\\"] = "\\\\";
			["\\""] = "\\"";
			["\\'"] = "\\'";
		},
		NumericalEscapes = true,
		EscapeZIgnoreNextWhitespace = true,
		HexEscapes = true,
		UnicodeEscapes = true,
	},
}

return Enums;
`,"prometheus.namegenerators.Il":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- namegenerators/il.lua
--
-- This Script provides a function for generation of weird names consisting of I, l and 1

local MIN_CHARACTERS = 5;
local MAX_INITIAL_CHARACTERS = 10;


local util = require("prometheus.util");
local chararray = util.chararray;

local offset = 0;
local VarDigits = chararray("Il1");
local VarStartDigits = chararray("Il");

local function generateName(id, _)
	local name = ''
	id = id + offset;
	local d = id % #VarStartDigits
	id = (id - d) / #VarStartDigits
	name = name..VarStartDigits[d+1]
	while id > 0 do
		local e = id % #VarDigits
		id = (id - e) / #VarDigits
		name = name..VarDigits[e+1]
	end
	return name
end

local function prepare(_)
	util.shuffle(VarDigits);
	util.shuffle(VarStartDigits);
	offset = math.random(3 ^ MIN_CHARACTERS, 3 ^ MAX_INITIAL_CHARACTERS);
end

return {
	generateName = generateName,
	prepare = prepare
};
`,"prometheus.namegenerators.confuse":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- namegenerators/confuse.lua
--
-- This Script provides a function for generation of confusing variable names

local util = require("prometheus.util");

local varNames = {
    "index",
    "iterator",
    "length",
    "size",
    "key",
    "value",
    "data",
    "count",
    "increment",
    "include",
    "string",
    "number",
    "type",
    "void",
    "int",
    "float",
    "bool",
    "char",
    "double",
    "long",
    "short",
    "unsigned",
    "signed",
    "program",
    "factory",
    "Factory",
    "new",
    "delete",
    "table",
    "array",
    "object",
    "class",
    "arr",
    "obj",
    "cls",
    "dir",
    "directory",
    "isWindows",
    "isLinux",
    "game",
    "roblox",
    "gmod",
    "gsub",
    "gmatch",
    "gfind",
    "onload",
    "load",
    "loadstring",
    "loadfile",
    "dofile",
    "require",
    "parse",
    "byte",
    "code",
    "bytecode",
    "idx",
    "const",
    "loader",
    "loaders",
    "module",
    "export",
    "exports",
    "import",
    "imports",
    "package",
    "packages",
    "_G",
    "math",
    "os",
    "io",
    "write",
    "print",
    "read",
    "readline",
    "readlines",
    "close",
    "flush",
    "open",
    "popen",
    "tmpfile",
    "tmpname",
    "rename",
    "remove",
    "seek",
    "setvbuf",
    "lines",
    "call",
    "apply",
    "raise",
    "pcall",
    "xpcall",
    "coroutine",
    "create",
    "resume",
    "status",
    "wrap",
    "yield",
    "debug",
    "traceback",
    "getinfo",
    "getlocal",
    "setlocal",
    "getupvalue",
    "setupvalue",
    "getuservalue",
    "setuservalue",
    "upvalueid",
    "upvaluejoin",
    "sethook",
    "gethook",
    "hookfunction",
    "hooks",
    "error",
    "setmetatable",
    "getmetatable",
    "rand",
    "randomseed",
    "next",
    "ipairs",
    "hasnext",
    "loadlib",
    "searchpath",
    "oldpath",
    "newpath",
    "path",
    "rawequal",
    "rawset",
    "rawget",
    "rawnew",
    "rawlen",
    "select",
    "tonumber",
    "tostring",
    "assert",
    "collectgarbage",
    "a", "b", "c", "i", "j", "m",
}

local function generateName(id, _)
    local name = {};
    local d = id % #varNames
	id = (id - d) / #varNames
	table.insert(name, varNames[d + 1]);
	while id > 0 do
		local e = id % #varNames
		id = (id - e) / #varNames
		table.insert(name, varNames[e + 1]);
	end
	return table.concat(name, "_");
end

local function prepare(_)
    util.shuffle(varNames);
end

return {
	generateName = generateName,
	prepare = prepare
};
`,"prometheus.namegenerators.mangled":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- namegenerators/mangled.lua
--
-- This Script provides a function for generation of mangled names


local util = require("prometheus.util");
local chararray = util.chararray;

local VarDigits = chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_");
local VarStartDigits = chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

return function(id, _)
	local name = ''
	local d = id % #VarStartDigits
	id = (id - d) / #VarStartDigits
	name = name..VarStartDigits[d+1]
	while id > 0 do
		local e = id % #VarDigits
		id = (id - e) / #VarDigits
		name = name..VarDigits[e+1]
	end
	return name
end
`,"prometheus.namegenerators.mangled_shuffled":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- namegenerators/mangled_shuffled.lua
--
-- This Script provides a function for generation of mangled names with shuffled character order


local util = require("prometheus.util");
local chararray = util.chararray;

local VarDigits = chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_");
local VarStartDigits = chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

local function generateName(id, _)
	local name = ''
	local d = id % #VarStartDigits
	id = (id - d) / #VarStartDigits
	name = name..VarStartDigits[d+1]
	while id > 0 do
		local e = id % #VarDigits
		id = (id - e) / #VarDigits
		name = name..VarDigits[e+1]
	end
	return name
end

local function prepare(_)
	util.shuffle(VarDigits);
	util.shuffle(VarStartDigits);
end

return {
	generateName = generateName,
	prepare = prepare
};
`,"prometheus.namegenerators.number":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- namegenerators/number.lua
--
-- This Script provides a function for generation of simple up counting names but with hex numbers

local PREFIX = "_";

return function(id, _)
	return PREFIX .. tostring(id);
end
`,"prometheus.namegenerators":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- namegenerators.lua
--
-- This Script provides a collection of name generators for Prometheus.

return {
	Mangled = require("prometheus.namegenerators.mangled");
	MangledShuffled = require("prometheus.namegenerators.mangled_shuffled");
	Il = require("prometheus.namegenerators.Il");
	Number = require("prometheus.namegenerators.number");
	Confuse = require("prometheus.namegenerators.confuse");
}
`,"prometheus.parser":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- parser.lua
-- Overview:
-- This Script provides a class for parsing of lua code.
-- This Parser is Capable of parsing LuaU and Lua5.1
--
-- Note that when parsing LuaU "continue" is treated as a Keyword, so no variable may be named "continue" even though this would be valid in LuaU
--
-- Settings Object:
-- luaVersion : The LuaVersion of the Script - Currently Supported : Lua51 and LuaU
--

local Tokenizer = require("prometheus.tokenizer");
local Enums = require("prometheus.enums");
local util = require("prometheus.util");
local Ast = require("prometheus.ast");
local Scope = require("prometheus.scope");
local logger = require("logger");

local AstKind = Ast.AstKind;

local LuaVersion = Enums.LuaVersion;
local lookupify = util.lookupify;

local TokenKind = Tokenizer.TokenKind;

local Parser = {};

local ASSIGNMENT_NO_WARN_LOOKUP = lookupify{
	AstKind.NilExpression,
	AstKind.FunctionCallExpression,
	AstKind.PassSelfFunctionCallExpression,
	AstKind.VarargExpression
};

local CALLABLE_PREFIX_EXPRESSION_LOOKUP = lookupify{
	AstKind.VariableExpression,
	AstKind.IndexExpression,
	AstKind.FunctionCallExpression,
	AstKind.PassSelfFunctionCallExpression
};

local function generateError(self, message)
	local token;
	if(self.index > self.length) then
		token = self.tokens[self.length];
	elseif(self.index < 1) then
		return "Parsing Error at Position 0:0, " .. message;
	else
		token = self.tokens[self.index];
	end

	return "Parsing Error at Position " .. tostring(token.line) .. ":" .. tostring(token.linePos) .. ", " .. message;
end

local function generateWarning(token, message)
	return "Warning at Position " .. tostring(token.line) .. ":" .. tostring(token.linePos) .. ", " .. message;
end

function Parser:new(settings)
	local luaVersion = (settings and (settings.luaVersion or settings.LuaVersion)) or LuaVersion.LuaU;
	local parser = {
		luaVersion = luaVersion,
		tokenizer = Tokenizer:new({
			luaVersion = luaVersion
		}),
		tokens = {};
		length = 0;
		index = 0;
	};

	setmetatable(parser, self);
	self.__index = self;

	return parser;
end

-- Function to peek the n'th token
local function peek(self, n)
	n = n or 0;
	local i = self.index + n + 1;
	if i > self.length then
		return Tokenizer.EOF_TOKEN;
	end
	return self.tokens[i];
end

-- Function to get the next Token
local function get(self)
	local i = self.index + 1;
	if i > self.length then
		error(generateError(self, "Unexpected end of Input"));
	end
	self.index = self.index + 1;
	local tk = self.tokens[i];

	return tk;
end

local function is(self, kind, sourceOrN, n)
	local token = peek(self, n);

	local source = nil;
	if(type(sourceOrN) == "string") then
		source = sourceOrN;
	else
		n = sourceOrN;
	end
	n = n or 0;

	if(token.kind == kind) then
		if(source == nil or token.source == source) then
			return true;
		end
	end

	return false;
end

local function consume(self, kind, source)
	if(is(self, kind, source)) then
		self.index = self.index + 1;
		return true;
	end
	return false;
end

local function expect(self, kind, source)
	if(is(self, kind, source, 0)) then
		return get(self);
	end

	local token = peek(self);
	if self.disableLog then error() end
	if(source) then
		logger:error(generateError(self, string.format("unexpected token <%s> \\"%s\\", expected <%s> \\"%s\\"", token.kind, token.source, kind, source)));
	else
		logger:error(generateError(self, string.format("unexpected token <%s> \\"%s\\", expected <%s>", token.kind, token.source, kind)));
	end
end

-- Parse the given code to an Abstract Syntax Tree
function Parser:parse(code)
	self.tokenizer:append(code);
	self.tokens = self.tokenizer:scanAll();
	self.length = #self.tokens;

	-- Create Global Variable Scope
	local globalScope = Scope:newGlobal();

	local ast = Ast.TopNode(self:block(globalScope, false), globalScope);
	-- File Must be Over when Top Node is Fully Parsed
	expect(self, TokenKind.Eof);

	logger:debug("Cleaning up Parser for next Use ...")
	-- Clean Up
	self.tokenizer:reset();
	self.tokens = {};
	self.index = 0;
	self.length = 0;

	logger:debug("Cleanup Done")

	return ast;
end

-- Parse a Code Block
function Parser:block(parentScope, currentLoop, scope)
	scope = scope or Scope:new(parentScope);
	local statements = {};

	repeat
		local statement, isTerminatingStatement = self:statement(scope, currentLoop);
		table.insert(statements, statement);
	until isTerminatingStatement or not statement

	-- Consume Eventual Semicolon after terminating return, break or continue
	consume(self, TokenKind.Symbol, ";");

	return Ast.Block(statements, scope);
end

function Parser:statement(scope, currentLoop)
	-- Skip all semicolons before next real statement
	-- NOP statements are therefore ignored
	while(consume(self, TokenKind.Symbol, ";")) do

	end

	-- Break Statement - only valid inside of Loops
	if(consume(self, TokenKind.Keyword, "break")) then
		if(not currentLoop) then
			if self.disableLog then error() end;
			logger:error(generateError(self, "the break Statement is only valid inside of loops"));
		end
		-- Return true as Second value because break must be the last Statement in a block
		return Ast.BreakStatement(currentLoop, scope), true;
	end

	-- Continue Statement - only valid inside of Loops - only valid in LuaU
	if(self.luaVersion == LuaVersion.LuaU and consume(self, TokenKind.Keyword, "continue")) then
		if(not currentLoop) then
			if self.disableLog then error() end;
			logger:error(generateError(self, "the continue Statement is only valid inside of loops"));
		end
		-- Return true as Second value because continue must be the last Statement in a block
		return Ast.ContinueStatement(currentLoop, scope), true;
	end

	-- do ... end Statement
	if(consume(self, TokenKind.Keyword, "do")) then
		local body = self:block(scope, currentLoop);
		expect(self, TokenKind.Keyword, "end");
		return Ast.DoStatement(body);
	end

	-- While Statement
	if(consume(self, TokenKind.Keyword, "while")) then
		local condition = self:expression(scope);
		expect(self, TokenKind.Keyword, "do");
		local stat = Ast.WhileStatement(nil, condition, scope);
		stat.body = self:block(scope, stat);
		expect(self, TokenKind.Keyword, "end");
		return stat;
	end

	-- Repeat Statement
	if(consume(self, TokenKind.Keyword, "repeat")) then
		local repeatScope = Scope:new(scope);
		local stat = Ast.RepeatStatement(nil, nil, scope);
		stat.body = self:block(nil, stat, repeatScope);
		expect(self, TokenKind.Keyword, "until");
		stat.condition = self:expression(repeatScope);
		return stat;
	end

	-- Return Statement
	if(consume(self, TokenKind.Keyword, "return")) then
		local args = {};
		if(not is(self, TokenKind.Keyword, "end") and not is(self, TokenKind.Keyword, "elseif") and not is(self, TokenKind.Keyword, "else") and not is(self, TokenKind.Symbol, ";") and not is(self, TokenKind.Eof)) then
			args = self:exprList(scope);
		end
		-- Return true as Second value because return must be the last Statement in a block
		return Ast.ReturnStatement(args), true;
	end

	-- If Statement
	if(consume(self, TokenKind.Keyword, "if")) then
		local condition = self:expression(scope);
		expect(self, TokenKind.Keyword, "then");
		local body = self:block(scope, currentLoop);

		local elseifs = {};
		-- Elseifs
		while(consume(self, TokenKind.Keyword, "elseif")) do
			local condition = self:expression(scope);
			expect(self, TokenKind.Keyword, "then");
			local body = self:block(scope, currentLoop);

			table.insert(elseifs, {
				condition = condition,
				body = body,
			});
		end

		local elsebody = nil;
		-- Else
		if(consume(self, TokenKind.Keyword, "else")) then
			elsebody = self:block(scope, currentLoop);
		end

		expect(self, TokenKind.Keyword, "end");

		return Ast.IfStatement(condition, body, elseifs, elsebody);
	end

	-- Function Declaration
	if(consume(self, TokenKind.Keyword, "function")) then
		-- TODO: Parse Function Declaration Name
		local obj = self:funcName(scope);
		local baseScope = obj.scope;
		local baseId = obj.id;
		local indices = obj.indices;

		local funcScope = Scope:new(scope);

		expect(self, TokenKind.Symbol, "(");
		local args = self:functionArgList(funcScope);
		expect(self, TokenKind.Symbol, ")");

		if(obj.passSelf) then
			local id = funcScope:addVariable("self", obj.token);
			table.insert(args, 1, Ast.VariableExpression(funcScope, id));
		end

		local body = self:block(nil, false, funcScope);
		expect(self, TokenKind.Keyword, "end");

		return Ast.FunctionDeclaration(baseScope, baseId, indices, args, body);
	end

	-- Local Function or Variable Declaration
	if(consume(self, TokenKind.Keyword, "local")) then
		-- Local Function Declaration
		if(consume(self, TokenKind.Keyword, "function")) then
			local ident = expect(self, TokenKind.Ident);
			local name = ident.value;

			local id = scope:addVariable(name, ident);
			local funcScope = Scope:new(scope);

			expect(self, TokenKind.Symbol, "(");
			local args = self:functionArgList(funcScope);
			expect(self, TokenKind.Symbol, ")");

			local body = self:block(nil, false, funcScope);
			expect(self, TokenKind.Keyword, "end");

			return Ast.LocalFunctionDeclaration(scope, id, args, body);
		end

		-- Local Variable Declaration
		local ids = self:nameList(scope);
		local expressions = {};
		if(consume(self, TokenKind.Symbol, "=")) then
			expressions = self:exprList(scope);
		end

		-- Variables can only be reffered to in the next statement, so the id's are enabled after the expressions have been parsed
		self:enableNameList(scope, ids);

		if(#expressions > #ids) then
			logger:warn(generateWarning(peek(self, -1), string.format("assigning %d values to %d variable" .. ((#ids > 1 and "s") or ""), #expressions, #ids)));
		elseif(#ids > #expressions and #expressions > 0 and not ASSIGNMENT_NO_WARN_LOOKUP[expressions[#expressions].kind]) then
			logger:warn(generateWarning(peek(self, -1), string.format("assigning %d value" .. ((#expressions > 1 and "s") or "") ..
				" to %d variables initializes extra variables with nil, add a nil value to silence", #expressions, #ids)));
		end
		return Ast.LocalVariableDeclaration(scope, ids, expressions);
	end

	-- For Statement
	if(consume(self, TokenKind.Keyword, "for")) then
		-- Normal for Statement
		if(is(self, TokenKind.Symbol, "=", 1)) then
			local forScope = Scope:new(scope);

			local ident = expect(self, TokenKind.Ident);
			local varId = forScope:addDisabledVariable(ident.value, ident);

			expect(self, TokenKind.Symbol, "=");
			local initialValue = self:expression(scope);

			expect(self, TokenKind.Symbol, ",");
			local finalValue = self:expression(scope);
			local incrementBy = Ast.NumberExpression(1);
			if(consume(self, TokenKind.Symbol, ",")) then
				incrementBy = self:expression(scope);
			end

			local stat = Ast.ForStatement(forScope, varId, initialValue, finalValue, incrementBy, nil, scope);
			forScope:enableVariable(varId);
			expect(self, TokenKind.Keyword, "do");
			stat.body = self:block(nil, stat, forScope);
			expect(self, TokenKind.Keyword, "end");
			return stat;
		end

		-- For ... in ... statement
		local forScope = Scope:new(scope);

		local ids = self:nameList(forScope);
		expect(self, TokenKind.Keyword, "in");
		local expressions = self:exprList(scope);
		-- Enable Ids after Expression Parsing so that code like this works:
		--	local z = {10,20}
		--	for y,z in ipairs(z) do
		--		print(y, z);
		-- 	end
		self:enableNameList(forScope, ids);
		expect(self, TokenKind.Keyword, "do");
		local stat = Ast.ForInStatement(forScope, ids, expressions, nil, scope);
		stat.body = self:block(nil, stat, forScope);
		expect(self, TokenKind.Keyword, "end");

		return stat;
	end

	local expr = self:primaryExpression(scope);
	-- Variable Assignment or Function Call
	if expr then
		-- Function Call Statement
		if(expr.kind == AstKind.FunctionCallExpression) then
			return Ast.FunctionCallStatement(expr.base, expr.args);
		end

		-- Function Call Statement passing self
		if(expr.kind == AstKind.PassSelfFunctionCallExpression) then
			return Ast.PassSelfFunctionCallStatement(expr.base, expr.passSelfFunctionName, expr.args);
		end

		-- Variable Assignment
		if(expr.kind == AstKind.IndexExpression or expr.kind == AstKind.VariableExpression) then
			if(expr.kind == AstKind.IndexExpression) then
				expr.kind = AstKind.AssignmentIndexing
			end
			if(expr.kind == AstKind.VariableExpression) then
				expr.kind = AstKind.AssignmentVariable
			end

			if(self.luaVersion == LuaVersion.LuaU) then
				-- LuaU Compound Assignment
				if(consume(self, TokenKind.Symbol, "+=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundAddStatement(expr, rhs);
				end

				if(consume(self, TokenKind.Symbol, "-=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundSubStatement(expr, rhs);
				end

				if(consume(self, TokenKind.Symbol, "*=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundMulStatement(expr, rhs);
				end

				if(consume(self, TokenKind.Symbol, "/=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundDivStatement(expr, rhs);
				end

				if(consume(self, TokenKind.Symbol, "%=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundModStatement(expr, rhs);
				end

				if(consume(self, TokenKind.Symbol, "^=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundPowStatement(expr, rhs);
				end

				if(consume(self, TokenKind.Symbol, "..=")) then
					local rhs = self:expression(scope);
					return Ast.CompoundConcatStatement(expr, rhs);
				end
			end

			local lhs = {
				expr
			}

			while consume(self, TokenKind.Symbol, ",") do
				expr = self:primaryExpression(scope);

				if(not expr) then
					if self.disableLog then error() end;
					logger:error(generateError(self, string.format("expected a valid assignment statement lhs part but got nil")));
				end

				if(expr.kind == AstKind.IndexExpression or expr.kind == AstKind.VariableExpression) then
					if(expr.kind == AstKind.IndexExpression) then
						expr.kind = AstKind.AssignmentIndexing
					end
					if(expr.kind == AstKind.VariableExpression) then
						expr.kind = AstKind.AssignmentVariable
					end
					table.insert(lhs, expr);
				else
					if self.disableLog then error() end;
					logger:error(generateError(self, string.format("expected a valid assignment statement lhs part but got <%s>", expr.kind)));
				end
			end

			expect(self, TokenKind.Symbol, "=");

			local rhs = self:exprList(scope);

			return Ast.AssignmentStatement(lhs, rhs);
		end

		if self.disableLog then error() end;
		logger:error(generateError(self, "expressions are not valid statements!"));
	end

	return nil;
end

function Parser:primaryExpression(scope)
	local i = self.index;
	local s = self;
	self.disableLog = true;
	local status, val = pcall(self.expressionFunctionCall, self, scope);
	self.disableLog = false;
	if(status) then
		return val;
	else
		self.index = i;
		return nil;
	end
end

-- List of expressions Seperated by a comma
function Parser:exprList(scope)
	local expressions = {
		self:expression(scope)
	};
	while(consume(self, TokenKind.Symbol, ",")) do
		table.insert(expressions, self:expression(scope));
	end
	return expressions;
end

-- list of local variable names
function Parser:nameList(scope)
	local ids = {};

	local ident = expect(self, TokenKind.Ident);
	local id = scope:addDisabledVariable(ident.value, ident);
	table.insert(ids, id);

	while(consume(self, TokenKind.Symbol, ",")) do
		ident = expect(self, TokenKind.Ident);
		id = scope:addDisabledVariable(ident.value, ident);
		table.insert(ids, id);
	end

	return ids;
end

function Parser:enableNameList(scope, list)
	for i, id in ipairs(list) do
		scope:enableVariable(id);
	end
end


-- function name
function Parser:funcName(scope)
	local ident = expect(self, TokenKind.Ident);
	local baseName = ident.value;

	local baseScope, baseId = scope:resolve(baseName);

	local indices = {};
	local passSelf = false;
	while(consume(self, TokenKind.Symbol, ".")) do
		table.insert(indices, expect(self, TokenKind.Ident).value);
	end

	if(consume(self, TokenKind.Symbol, ":")) then
		table.insert(indices, expect(self, TokenKind.Ident).value);
		passSelf = true;
	end

	return {
		scope = baseScope,
		id = baseId,
		indices = indices,
		passSelf = passSelf,
		token = ident,
	};
end

-- Expression
function Parser:expression(scope)
	return self:expressionOr(scope);
end

function Parser:expressionOr(scope)
	local lhs = self:expressionAnd(scope);

	if(consume(self, TokenKind.Keyword, "or")) then
		local rhs = self:expressionOr(scope);
		return Ast.OrExpression(lhs, rhs, true);
	end

	return lhs;
end

function Parser:expressionAnd(scope)
	local lhs = self:expressionComparision(scope);

	if(consume(self, TokenKind.Keyword, "and")) then
		local rhs = self:expressionAnd(scope);
		return Ast.AndExpression(lhs, rhs, true);
	end

	return lhs;
end

function Parser:expressionComparision(scope)
	local curr = self:expressionStrCat(scope);
	repeat
		local found = false;
		if(consume(self, TokenKind.Symbol, "<")) then
			local rhs = self:expressionStrCat(scope);
			curr = Ast.LessThanExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, ">")) then
			local rhs = self:expressionStrCat(scope);
			curr = Ast.GreaterThanExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, "<=")) then
			local rhs = self:expressionStrCat(scope);
			curr = Ast.LessThanOrEqualsExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, ">=")) then
			local rhs = self:expressionStrCat(scope);
			curr = Ast.GreaterThanOrEqualsExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, "~=")) then
			local rhs = self:expressionStrCat(scope);
			curr = Ast.NotEqualsExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, "==")) then
			local rhs = self:expressionStrCat(scope);
			curr = Ast.EqualsExpression(curr, rhs, true);
			found = true;
		end
	until not found;

	return curr;
end

function Parser:expressionStrCat(scope)
	local lhs = self:expressionAddSub(scope);

	if(consume(self, TokenKind.Symbol, "..")) then
		local rhs = self:expressionStrCat(scope);
		return Ast.StrCatExpression(lhs, rhs, true);
	end

	return lhs;
end

function Parser:expressionAddSub(scope)
	local curr = self:expressionMulDivMod(scope);

	repeat
		local found = false;
		if(consume(self, TokenKind.Symbol, "+")) then
			local rhs = self:expressionMulDivMod(scope);
			curr = Ast.AddExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, "-")) then
			local rhs = self:expressionMulDivMod(scope);
			curr = Ast.SubExpression(curr, rhs, true);
			found = true;
		end
	until not found;


	return curr;
end

function Parser:expressionMulDivMod(scope)
	local curr = self:expressionUnary(scope);

	repeat
		local found = false;
		if(consume(self, TokenKind.Symbol, "*")) then
			local rhs = self:expressionUnary(scope);
			curr = Ast.MulExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, "/")) then
			local rhs = self:expressionUnary(scope);
			curr = Ast.DivExpression(curr, rhs, true);
			found = true;
		end

		if(consume(self, TokenKind.Symbol, "%")) then
			local rhs = self:expressionUnary(scope);
			curr = Ast.ModExpression(curr, rhs, true);
			found = true;
		end
	until not found;

	return curr;
end

function Parser:expressionUnary(scope)
	if(consume(self, TokenKind.Keyword, "not")) then
		local rhs = self:expressionUnary(scope);
		return Ast.NotExpression(rhs, true);
	end

	if(consume(self, TokenKind.Symbol, "#")) then
		local rhs = self:expressionUnary(scope);
		return Ast.LenExpression(rhs, true);
	end

	if(consume(self, TokenKind.Symbol, "-")) then
		local rhs = self:expressionUnary(scope);
		return Ast.NegateExpression(rhs, true);
	end

	return self:expressionPow(scope);
end

function Parser:expressionPow(scope)
	local lhs = self:tableOrFunctionLiteral(scope);

	if(consume(self, TokenKind.Symbol, "^")) then
		-- Allow unary operators on the rhs (e.g. 2 ^ #x, 2 ^ -x) while preserving right-associativity. ~ SpinnySpiwal
		local rhs = self:expressionUnary(scope);
		return Ast.PowExpression(lhs, rhs, true);
	end

	return lhs;
end

-- Table Literals and Function Literals cannot directly be called or indexed
function Parser:tableOrFunctionLiteral(scope)

	if(is(self, TokenKind.Symbol, "{")) then
		return self:tableConstructor(scope);
	end

	if(is(self, TokenKind.Keyword, "function")) then
		return self:expressionFunctionLiteral(scope);
	end

	return self:expressionFunctionCall(scope);
end

function Parser:expressionFunctionLiteral(parentScope)
	local scope = Scope:new(parentScope);

	expect(self, TokenKind.Keyword, "function");

	expect(self, TokenKind.Symbol, "(");
	local args = self:functionArgList(scope);
	expect(self, TokenKind.Symbol, ")");

	local body = self:block(nil, false, scope);
	expect(self, TokenKind.Keyword, "end");

	return Ast.FunctionLiteralExpression(args, body);
end

function Parser:functionArgList(scope)
	local args = {};
	if(consume(self, TokenKind.Symbol, "...")) then
		table.insert(args, Ast.VarargExpression());
		return args;
	end

	if(is(self, TokenKind.Ident)) then
		local ident = get(self);
		local name = ident.value;

		local id = scope:addVariable(name, ident);
		table.insert(args, Ast.VariableExpression(scope, id));

		while(consume(self, TokenKind.Symbol, ",")) do
			if(consume(self, TokenKind.Symbol, "...")) then
				table.insert(args, Ast.VarargExpression());
				return args;
			end

			ident = get(self);
			name = ident.value;

			id = scope:addVariable(name, ident);
			table.insert(args, Ast.VariableExpression(scope, id));
		end
	end

	return args;
end

function Parser:expressionFunctionCall(scope, base)
	base = base or self:expressionIndex(scope);

	if(not (base and (CALLABLE_PREFIX_EXPRESSION_LOOKUP[base.kind] or base.isParenthesizedExpression))) then
		return base;
	end

	-- Normal Function Call
	local args = {};
	if(is(self, TokenKind.String)) then
		args = {
			Ast.StringExpression(get(self).value),
		};
	elseif(is(self, TokenKind.Symbol, "{")) then
		args = {
			self:tableConstructor(scope),
		};
	elseif(consume(self, TokenKind.Symbol, "(")) then
		if(not is(self, TokenKind.Symbol, ")")) then
			args = self:exprList(scope);
		end
		expect(self, TokenKind.Symbol, ")");
	else
		return base;
	end

	local node = Ast.FunctionCallExpression(base, args);

	-- the result of a function call can be indexed
	if(is(self, TokenKind.Symbol, ".") or is(self, TokenKind.Symbol, "[") or is(self, TokenKind.Symbol, ":")) then
		return self:expressionIndex(scope, node);
	end

	-- The result of a function call can be a function that is again called
	if(is(self, TokenKind.Symbol, "(") or is(self, TokenKind.Symbol, "{") or is(self, TokenKind.String)) then
		return self:expressionFunctionCall(scope, node);
	end

	return node;
end

function Parser:expressionIndex(scope, base)
	base = base or self:expressionLiteral(scope);

	-- Parse Indexing Expressions
	while(consume(self, TokenKind.Symbol, "[")) do
		local expr = self:expression(scope);
		expect(self, TokenKind.Symbol, "]");
		base = Ast.IndexExpression(base, expr);
	end

	-- Parse Indexing Expressions
	while consume(self, TokenKind.Symbol, ".") do
		local ident = expect(self, TokenKind.Ident);
		base = Ast.IndexExpression(base, Ast.StringExpression(ident.value));

		while(consume(self, TokenKind.Symbol, "[")) do
			local expr = self:expression(scope);
			expect(self, TokenKind.Symbol, "]");
			base = Ast.IndexExpression(base, expr);
		end
	end

	-- Function Passing self
	if(consume(self, TokenKind.Symbol, ":")) then
		local passSelfFunctionName = expect(self, TokenKind.Ident).value;
		local args = {};
		if(is(self, TokenKind.String)) then
			args = {
				Ast.StringExpression(get(self).value),
			};
		elseif(is(self, TokenKind.Symbol, "{")) then
			args = {
				self:tableConstructor(scope),
			};
		else
			expect(self, TokenKind.Symbol, "(");
			if(not is(self, TokenKind.Symbol, ")")) then
				args = self:exprList(scope);
			end
			expect(self, TokenKind.Symbol, ")");
		end

		local node = Ast.PassSelfFunctionCallExpression(base, passSelfFunctionName, args);

		-- the result of a function call can be indexed
		if(is(self, TokenKind.Symbol, ".") or is(self, TokenKind.Symbol, "[") or is(self, TokenKind.Symbol, ":")) then
			return self:expressionIndex(scope, node);
		end

		-- The result of a function call can be a function that is again called
		if(is(self, TokenKind.Symbol, "(") or is(self, TokenKind.Symbol, "{") or is(self, TokenKind.String)) then
			return self:expressionFunctionCall(scope, node);
		end

		return node
	end

	-- The result of a function call can be a function that is again called
	if(is(self, TokenKind.Symbol, "(") or is(self, TokenKind.Symbol, "{") or is(self, TokenKind.String)) then
		return self:expressionFunctionCall(scope, base);
	end

	return base;
end

function Parser:expressionLiteral(scope)
	-- () expression
	if(consume(self, TokenKind.Symbol, "(")) then
		local expr = self:expression(scope);
		expect(self, TokenKind.Symbol, ")");
		if expr then
			expr.isParenthesizedExpression = true;
		end
		return expr;
	end

	-- String Literal
	if(is(self, TokenKind.String)) then
		return Ast.StringExpression(get(self).value);
	end

	-- Number Literal
	if(is(self, TokenKind.Number)) then
		return Ast.NumberExpression(get(self).value);
	end

	-- True Literal
	if(consume(self, TokenKind.Keyword, "true")) then
		return Ast.BooleanExpression(true);
	end

	-- False Literal
	if(consume(self, TokenKind.Keyword, "false")) then
		return Ast.BooleanExpression(false);
	end

	-- Nil Literal
	if(consume(self, TokenKind.Keyword, "nil")) then
		return Ast.NilExpression();
	end

	-- Vararg Literal
	if(consume(self, TokenKind.Symbol, "...")) then
		return Ast.VarargExpression();
	end

	-- Variable
	if(is(self, TokenKind.Ident)) then
		local ident = get(self);
		local name = ident.value;

		local scope, id = scope:resolve(name);
		return Ast.VariableExpression(scope, id);
	end

	-- IfElse
	if(LuaVersion.LuaU) then
		if(consume(self, TokenKind.Keyword, "if")) then
			local condition = self:expression(scope);
			expect(self, TokenKind.Keyword, "then");
			local true_value = self:expression(scope);

			local elseifs = {}
			while(consume(self, TokenKind.Keyword, "elseif")) do
				local elseif_condition = self:expression(scope);
				expect(self, TokenKind.Keyword, "then");
				local elseif_value = self:expression(scope);

				table.insert(elseifs, {
					condition = elseif_condition,
					value = elseif_value
				});
			end

			expect(self, TokenKind.Keyword, "else");
			local false_value = self:expression(scope);

			return Ast.IfElseExpression(condition, true_value, elseifs, false_value);
		end
	end

	if(self.disableLog) then error() end
	logger:error(generateError(self, "Unexpected Token \\"" .. peek(self).source .. "\\". Expected a Expression!"))
end

function Parser:tableConstructor(scope)
	-- TODO: Parse Table Literals
	local entries = {};

	expect(self, TokenKind.Symbol, "{");

	while (not consume(self, TokenKind.Symbol, "}")) do
		if(consume(self, TokenKind.Symbol, "[")) then
			local key = self:expression(scope);
			expect(self, TokenKind.Symbol, "]");
			expect(self, TokenKind.Symbol, "=");
			local value = self:expression(scope);
			table.insert(entries, Ast.KeyedTableEntry(key, value));
		elseif(is(self, TokenKind.Ident, 0) and is(self, TokenKind.Symbol, "=", 1)) then
			local key = Ast.StringExpression(get(self).value);
			expect(self, TokenKind.Symbol, "=");
			local value = self:expression(scope);
			table.insert(entries, Ast.KeyedTableEntry(key, value));
		else
			local value = self:expression(scope);
			table.insert(entries, Ast.TableEntry(value));
		end


		if (not consume(self, TokenKind.Symbol, ";") and not consume(self, TokenKind.Symbol, ",") and not is(self, TokenKind.Symbol, "}")) then
			if self.disableLog then error() end
			logger:error(generateError(self, "expected a \\";\\" or a \\",\\""));
		end
	end

	return Ast.TableConstructorExpression(entries);
end

return Parser
`,"prometheus.pipeline":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- pipeline.lua
--
-- This Script provides a configurable obfuscation pipeline that can obfuscate code using different modules
-- These modules can simply be added to the pipeline.

local Enums = require("prometheus.enums");
local util = require("prometheus.util");
local Parser = require("prometheus.parser");
local Unparser = require("prometheus.unparser");
local logger = require("logger");

local NameGenerators = require("prometheus.namegenerators");

local Steps = require("prometheus.steps");
local LuaVersion = Enums.LuaVersion;

-- On Windows, os.clock can be used. On other systems, os.time must be used for benchmarking.
local isWindows = package and package.config and type(package.config) == "string" and package.config:sub(1,1) == "\\\\";
local function gettime()
	if isWindows then
		return os.clock();
	else
		return os.time();
	end
end

local Pipeline = {
	NameGenerators = NameGenerators;
	Steps = Steps;
	DefaultSettings = {
		LuaVersion = LuaVersion.LuaU; -- The Lua Version to use for the Tokenizer, Parser and Unparser
		PrettyPrint = false; -- Note that Pretty Print is currently not producing Pretty results
		Seed = 0; -- The Seed. 0 or below uses the current time as a seed
		VarNamePrefix = ""; -- The Prefix that every variable will start with
	}
}


function Pipeline:new(settings)
	local luaVersion = settings.luaVersion or settings.LuaVersion or Pipeline.DefaultSettings.LuaVersion;
	local conventions = Enums.Conventions[luaVersion];
	if(not conventions) then
		logger:error("The Lua Version \\"" .. luaVersion
			.. "\\" is not recognized by the Tokenizer! Please use one of the following: \\"" .. table.concat(util.keys(Enums.Conventions), "\\",\\"") .. "\\"");
	end

	local prettyPrint = settings.PrettyPrint or Pipeline.DefaultSettings.PrettyPrint;
	local prefix = settings.VarNamePrefix or Pipeline.DefaultSettings.VarNamePrefix;
	local seed = settings.Seed or 0;

	local pipeline = {
		LuaVersion = luaVersion;
		PrettyPrint = prettyPrint;
		VarNamePrefix = prefix;
		Seed = seed;
		parser = Parser:new({
			LuaVersion = luaVersion;
		});
		unparser = Unparser:new({
			LuaVersion = luaVersion;
			PrettyPrint = prettyPrint;
			Highlight = settings.Highlight;
		});
		namegenerator = Pipeline.NameGenerators.MangledShuffled;
		conventions = conventions;
		steps = {};
	}

	setmetatable(pipeline, self);
	self.__index = self;

	return pipeline;
end

function Pipeline:fromConfig(config)
	config = config or {};
	local pipeline = Pipeline:new({
		LuaVersion = config.LuaVersion or LuaVersion.Lua51;
		PrettyPrint = config.PrettyPrint or false;
		VarNamePrefix = config.VarNamePrefix or "";
		Seed = config.Seed or 0;
	});

	pipeline:setNameGenerator(config.NameGenerator or "MangledShuffled")

	-- Add all Steps defined in Config
	local steps = config.Steps or {};
	for i, step in ipairs(steps) do
		if type(step.Name) ~= "string" then
			logger:error("Step.Name must be a String");
		end
		local constructor = pipeline.Steps[step.Name];
		if not constructor then
			logger:error(string.format("The Step \\"%s\\" was not found!", step.Name));
		end
		pipeline:addStep(constructor:new(step.Settings or {}));
	end

	return pipeline;
end

function Pipeline:addStep(step)
	table.insert(self.steps, step);
end

function Pipeline:resetSteps(_)
	self.steps = {};
end

function Pipeline:getSteps()
	return self.steps;
end

function Pipeline:setOption(name, _)
	assert(false, "TODO");
	if(Pipeline.DefaultSettings[name] ~= nil) then

	else
		logger:error(string.format("\\"%s\\" is not a valid setting"));
	end
end

function Pipeline:setLuaVersion(luaVersion)
	local conventions = Enums.Conventions[luaVersion];
	if(not conventions) then
		logger:error("The Lua Version \\"" .. luaVersion
			.. "\\" is not recognized by the Tokenizer! Please use one of the following: \\"" .. table.concat(util.keys(Enums.Conventions), "\\",\\"") .. "\\"");
	end

	self.parser = Parser:new({
		luaVersion = luaVersion;
	});
	self.unparser = Unparser:new({
		LuaVersion = luaVersion;
	});
	self.conventions = conventions;
end

function Pipeline:getLuaVersion()
	return self.luaVersion;
end

function Pipeline:setNameGenerator(nameGenerator)
	if(type(nameGenerator) == "string") then
		nameGenerator = Pipeline.NameGenerators[nameGenerator];
	end

	if(type(nameGenerator) == "function" or type(nameGenerator) == "table") then
		self.namegenerator = nameGenerator;
		return;
	else
		logger:error("The Argument to Pipeline:setNameGenerator must be a valid NameGenerator function or function name e.g: \\"mangled\\"")
	end
end

function Pipeline:apply(code, filename)
	local startTime = gettime();
	filename = filename or "Anonymous Script";
	logger:info(string.format("Applying Obfuscation Pipeline to %s ...", filename));

	-- Seed the Random Generator
	if(self.Seed > 0) then
		math.randomseed(self.Seed);
	else
		--> use secure random number generator
		local success, seed = pcall(function()
			local seedStr =  io.popen("openssl rand -hex 12"):read("*a"):gsub("\\n", "")..""
			local seedNum = 0;

			--> NOTE: tonumber caps at 1.844674407371e+19. So we use this instead.
			for i = 1, #seedStr do
				local char = seedStr:sub(i, i):lower()
				local digit = char:match("%d") and (char:byte() - 48) or (char:byte() - 87)
				seedNum = seedNum * 16 + digit
			end

			--> Random Number Generator in Lua 5.1 is limited to 9.007199254741e+15.
			if _VERSION == "Lua 5.1" and not jit then
				seedNum = seedNum % 9.007199254741e+15
			end

			return seedNum
		end)

		if success then
			math.randomseed(seed)
		else
			logger:warn("OpenSSL is unavailable. Falling back to unix time.");
			math.randomseed(os.time())
		end
	end

	logger:info("Parsing ...");
	local parserStartTime = gettime();

	local sourceLen = string.len(code);
	local ast = self.parser:parse(code);

	local parserTimeDiff = gettime() - parserStartTime;
	logger:info(string.format("Parsing Done in %.2f seconds", parserTimeDiff));

	-- User Defined Steps
	for i, step in ipairs(self.steps) do
		local stepStartTime = gettime();
		logger:info(string.format("Applying Step \\"%s\\" ...", step.Name or "Unnamed"));
		local newAst = step:apply(ast, self);
		if type(newAst) == "table" then
			ast = newAst;
		end
		logger:info(string.format("Step \\"%s\\" Done in %.2f seconds", step.Name or "Unnamed", gettime() - stepStartTime));
	end

	-- Rename Variables Step
	self:renameVariables(ast);

	code = self:unparse(ast);

	local timeDiff = gettime() - startTime;
	logger:info(string.format("Obfuscation Done in %.2f seconds", timeDiff));

	logger:info(string.format("Generated Code size is %.2f%% of the Source Code size", (string.len(code) / sourceLen)*100))

	return code;
end

function Pipeline:unparse(ast)
	local startTime = gettime();
	logger:info("Generating Code ...");

	local unparsed = self.unparser:unparse(ast);

	local timeDiff = gettime() - startTime;
	logger:info(string.format("Code Generation Done in %.2f seconds", timeDiff));

	return unparsed;
end

function Pipeline:renameVariables(ast)
	local startTime = gettime();
	logger:info("Renaming Variables ...");


	local generatorFunction = self.namegenerator or Pipeline.NameGenerators.mangled;
	if(type(generatorFunction) == "table") then
		if (type(generatorFunction.prepare) == "function") then
			generatorFunction.prepare(ast);
		end
		generatorFunction = generatorFunction.generateName;
	end

	if not self.unparser:isValidIdentifier(self.VarNamePrefix) and #self.VarNamePrefix ~= 0 then
		logger:error(string.format("The Prefix \\"%s\\" is not a valid Identifier in %s", self.VarNamePrefix, self.LuaVersion));
	end

	local globalScope = ast.globalScope;
	globalScope:renameVariables({
		Keywords = self.conventions.Keywords;
		generateName = generatorFunction;
		prefix = self.VarNamePrefix;
	});

	local timeDiff = gettime() - startTime;
	logger:info(string.format("Renaming Done in %.2f seconds", timeDiff));
end

return Pipeline;
`,"prometheus.randomLiterals":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- randomLiterals.lua
--
-- This Script provides a library for creating random literals

local Ast = require("prometheus.ast");
local RandomStrings = require("prometheus.randomStrings");

local RandomLiterals = {};

local function callNameGenerator(generatorFunction, ...)
	if(type(generatorFunction) == "table") then
		generatorFunction = generatorFunction.generateName;
	end
	return generatorFunction(...);
end

function RandomLiterals.String(pipeline)
    return Ast.StringExpression(callNameGenerator(pipeline.namegenerator, math.random(1, 4096)));
end

function RandomLiterals.Dictionary()
    -- \`randomStringNode\` accepts either a table of words to pick from, or a
    -- numeric length for a randomly generated string; passing the boolean
    -- \`true\` matched neither case (it fell through to \`wordsOrLen > 0\`, which
    -- errors when comparing a boolean to a number). There is no actual word
    -- list anywhere in this codebase to select from, so fall back to the
    -- length-based random string generation that already exists.
    return RandomStrings.randomStringNode();
end

function RandomLiterals.Number()
    return Ast.NumberExpression(math.random(-8388608, 8388607));
end

function RandomLiterals.Any(pipeline)
    local type = math.random(1, 3);
    if type == 1 then
        return RandomLiterals.String(pipeline);
    elseif type == 2 then
        return RandomLiterals.Number();
    elseif type == 3 then
        return RandomLiterals.Dictionary();
    end
end


return RandomLiterals;
`,"prometheus.randomStrings":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- randomStrings.lua
--
-- This Script provides a library for generating random strings

local Ast = require("prometheus.ast")
local utils = require("prometheus.util")
local charset = utils.chararray("qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890")

local function randomString(wordsOrLen)
	if type(wordsOrLen) == "table" then
		return wordsOrLen[math.random(1, #wordsOrLen)];
	end

	wordsOrLen = wordsOrLen or math.random(2, 15);
	if wordsOrLen > 0 then
		return randomString(wordsOrLen - 1) .. charset[math.random(1, #charset)]
	else
		return ""
	end
end

local function randomStringNode(wordsOrLen)
	return Ast.StringExpression(randomString(wordsOrLen))
end

return {
	randomString = randomString,
	randomStringNode = randomStringNode,
}
`,"prometheus.scope":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- scope.lua
--
-- This Script provides a class for the Scope of a Lua Script

local logger = require("logger");
local config = require("config");

local Scope = {};

local scopeI = 0;
local function nextName()
	scopeI = scopeI + 1;
	return "local_scope_" .. tostring(scopeI);
end

local function generateWarning(token, message)
	return "Warning at Position " .. tostring(token.line) .. ":" .. tostring(token.linePos) .. ", " .. message;
end

-- Create a new Local Scope
function Scope:new(parentScope, name)
	local scope = {
		isGlobal = false,
		parentScope = parentScope,
		variables = {},
		referenceCounts = {};
		variablesLookup = {},
		variablesFromHigherScopes = {},
		skipIdLookup = {};
		name = name or nextName(),
		children = {},
		level = parentScope.level and (parentScope.level + 1) or 1;
	}

	setmetatable(scope, self);
	self.__index = self;
	parentScope:addChild(scope);
	return scope;
end

-- Create a new Global Scope
function Scope:newGlobal()
	local scope = {
		isGlobal = true,
		parentScope = nil,
		variables = {},
		variablesLookup = {};
		referenceCounts = {};
		skipIdLookup = {};
		name = "global_scope",
		children = {},
		level = 0,
	};

	setmetatable(scope, self);
	self.__index = self;

	return scope;
end

-- Returns the Parent Scope
function Scope:getParent(parentScope)
	return self.parentScope;
end

function Scope:setParent(parentScope)
	self.parentScope:removeChild(self);
	parentScope:addChild(self);
	self.parentScope = parentScope;
	self.level = parentScope.level + 1;
end

local next_name_i = 1;
-- Adds a Variable to the scope and returns the variable id, if no name is passed then a name is generated
function Scope:addVariable(name, token)
	if (not name) then
		name = string.format("%s%i", config.IdentPrefix, next_name_i);
		next_name_i = next_name_i + 1;
	end

	if self.variablesLookup[name] ~= nil then
		if(token) then
			logger:warn(generateWarning(token, "the variable \\"" .. name .. "\\" is already defined in that scope"));
		else
			logger:error(string.format("A variable with the name \\"%s\\" was already defined, you should have no variables starting with \\"%s\\"", name, config.IdentPrefix));
		end

		--return self.variablesLookup[name];
	end

	table.insert(self.variables, name);
	local id = #self.variables;
	self.variablesLookup[name] = id;
	return id;
end

function Scope:enableVariable(id)
	local name = self.variables[id];
	self.variablesLookup[name] = id;
end

function Scope:addDisabledVariable(name, token)
	if (not name) then
		name = string.format("%s%i", config.IdentPrefix, next_name_i);
		next_name_i = next_name_i + 1;
	end

	if self.variablesLookup[name] ~= nil then
		if(token) then
			logger:warn(generateWarning(token, "the variable \\"" .. name .. "\\" is already defined in that scope"));
		else
			logger:warn(string.format("a variable with the name \\"%s\\" was already defined", name));
		end

		--return self.variablesLookup[name];
	end

	table.insert(self.variables, name);
	local id = #self.variables;
	return id;
end

function Scope:addIfNotExists(id)
	if(not self.variables[id]) then
		local name = string.format("%s%i", config.IdentPrefix, next_name_i);
		next_name_i = next_name_i + 1;
		self.variables[id] = name;
		self.variablesLookup[name] = id;
	end
	return id;
end

-- Returns wether the variable is defined in this Scope
function Scope:hasVariable(name)
	if(self.isGlobal) then
		if self.variablesLookup[name] == nil then
			self:addVariable(name);
		end
		return true;
	end
	return self.variablesLookup[name] ~= nil;
end

-- Get List of all Variables defined in this Scope
function Scope:getVariables()
	return self.variables;
end

function Scope:resetReferences(id)
	self.referenceCounts[id] = 0;
end

function Scope:getReferences(id)
	return self.referenceCounts[id] or 0;
end

function Scope:removeReference(id)
	self.referenceCounts[id] = (self.referenceCounts[id] or 0) - 1;
end

function Scope:addReference(id)
	self.referenceCounts[id] = (self.referenceCounts[id] or 0) + 1;
end

-- Resolve the scope of a variable by name
function Scope:resolve(name)
	if(self:hasVariable(name)) then
		return self, self.variablesLookup[name];
	end
	assert(self.parentScope, "No Global Variable Scope was Created! This should not be Possible!");
	local scope, id = self.parentScope:resolve(name);
	self:addReferenceToHigherScope(scope, id, nil, true);
	return scope, id;
end

function Scope:resolveGlobal(name)
	if(self.isGlobal and self:hasVariable(name)) then
		return self, self.variablesLookup[name];
	end
	assert(self.parentScope, "No Global Variable Scope was Created! This should not be Possible!");
	local scope, id = self.parentScope:resolveGlobal(name);
	self:addReferenceToHigherScope(scope, id, nil, true);
	return scope, id;
end

-- Returns the name of an Variable by id - this is used for unparsing
function Scope:getVariableName(id)
	return self.variables[id];
end

-- Remove A Variable from this Scope
function Scope:removeVariable(id)
	local name = self.variables[id];
	self.variables[id] = nil;
	self.variablesLookup[name] = nil;
	self.skipIdLookup[id] = true;
end

-- Add a Children Scope
function Scope:addChild(scope)
	-- This will add all References from that Scope to higher Scopes. Note that the higher scopes may only be global
	for scope, ids in pairs(scope.variablesFromHigherScopes) do
		for id, count in pairs(ids) do
			if count and count > 0 then
				self:addReferenceToHigherScope(scope, id, count);
			end
		end
	end
	table.insert(self.children, scope);
end

function Scope:clearReferences()
	self.referenceCounts = {};
	self.variablesFromHigherScopes = {};
end

function Scope:removeChild(child)
	for i, v in ipairs(self.children) do
		if(v == child) then
			-- This will add all References from that Scope to higher Scopes. Note that the higher scopes may only be global
			for scope, ids in pairs(v.variablesFromHigherScopes) do
				for id, count in pairs(ids) do
					if count and count > 0 then
						self:removeReferenceToHigherScope(scope, id, count);
					end
				end
			end
			return table.remove(self.children, i);
		end
	end
end

function Scope:getMaxId()
	return #self.variables;
end

function Scope:addReferenceToHigherScope(scope, id, n, b)
	n = n or 1;
	if self.isGlobal then
		if not scope.isGlobal then
			logger:error(string.format("Could not resolve Scope \\"%s\\"", scope.name))
		end
		return
	end
	if scope == self then
		self.referenceCounts[id] = (self.referenceCounts[id] or 0) + n;
		return
	end
	if not self.variablesFromHigherScopes[scope] then
		self.variablesFromHigherScopes[scope] = {};
	end
	local scopeReferences = self.variablesFromHigherScopes[scope];
	if scopeReferences[id] then
		scopeReferences[id] = scopeReferences[id] + n;
	else
		scopeReferences[id] = n;
	end
	if not b then
		self.parentScope:addReferenceToHigherScope(scope, id, n);
	end
end

function Scope:removeReferenceToHigherScope(scope, id, n, b)
	n = n or 1;
	if self.isGlobal then
		return
	end
	if scope == self then
		self.referenceCounts[id] = (self.referenceCounts[id] or 0) - n;
		return
	end
	if not self.variablesFromHigherScopes[scope] then
		self.variablesFromHigherScopes[scope] = {};
	end
	local scopeReferences = self.variablesFromHigherScopes[scope];
	if scopeReferences[id] then
		scopeReferences[id] = scopeReferences[id] - n;
	else
		scopeReferences[id] = 0;
	end
	if not b then
		self.parentScope:removeReferenceToHigherScope(scope, id, n);
	end
end

-- Rename Variables from that scope downwards
-- this function needs a settings object with the following properties
-- Keywords => forbidden Variable Names
-- generateName(id, scope, originalName) => function to generate unique variable name based on the id and scope
function Scope:renameVariables(settings)
	if(not self.isGlobal) then
		local prefix = settings.prefix or "";
		local forbiddenNamesLookup = {};
		for _, keyword in pairs(settings.Keywords) do
			forbiddenNamesLookup[keyword] = true;
		end

		for scope, ids in pairs(self.variablesFromHigherScopes) do
			for id, count in pairs(ids) do
				if count and count > 0 then
					local name = scope:getVariableName(id);
					forbiddenNamesLookup[name] = true;
				end
			end
		end

		self.variablesLookup = {};

		local i = 0;
		for id, originalName in pairs(self.variables) do
			if(not self.skipIdLookup[id] and (self.referenceCounts[id] or 0) >= 0) then
				local name;
				repeat
					name = prefix .. settings.generateName(i, self, originalName);
					if name == nil then
						name = originalName;
					end
					i = i + 1;
				until not forbiddenNamesLookup[name];

				self.variables[id] = name;
				self.variablesLookup[name] = id;
			end
		end
	end

	for _, scope in pairs(self.children) do
		scope:renameVariables(settings);
	end
end

return Scope;
`,"prometheus.step":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- step.lua
--
-- This Script provides the base class for Obfuscation Steps

local logger = require("logger");
local util = require("prometheus.util");

local lookupify = util.lookupify;

local Step = {};

Step.SettingsDescriptor = {}

function Step:new(settings)
	local instance = {};
	setmetatable(instance, self);
	self.__index = self;

	if type(settings) ~= "table" then
		settings = {};
	end

	for key, data in pairs(self.SettingsDescriptor) do
		local settingValue = settings[key];
		if settingValue == nil and type(data.aliases) == "table" then
			for _, alias in ipairs(data.aliases) do
				if settings[alias] ~= nil then
					settingValue = settings[alias];
					break;
				end
			end
		end

		if settingValue == nil then
			if data.default == nil then
				logger:error(string.format("The Setting \\"%s\\" was not provided for the Step \\"%s\\"", key, self.Name));
			end
			instance[key] = data.default;
		elseif(data.type == "enum") then
			local lookup = lookupify(data.values);
			if not lookup[settingValue] then
				logger:error(string.format("Invalid value for the Setting \\"%s\\" of the Step \\"%s\\". It must be one of the following: %s", key, self.Name, table.concat(data, ", ")));
			end
			instance[key] = settingValue;
		elseif(type(settingValue) ~= data.type) then
			logger:error(string.format("Invalid value for the Setting \\"%s\\" of the Step \\"%s\\". It must be a %s", key, self.Name, data.type));
		else
			if data.min then
				if  settingValue < data.min then
					logger:error(string.format("Invalid value for the Setting \\"%s\\" of the Step \\"%s\\". It must be at least %d", key, self.Name, data.min));
				end
			end

			if data.max then
				if  settingValue > data.max then
					logger:error(string.format("Invalid value for the Setting \\"%s\\" of the Step \\"%s\\". The biggest allowed value is %d", key, self.Name, data.max));
				end
			end

			instance[key] = settingValue;
		end
	end

	instance:init();

	return instance;
end

function Step:init()
	logger:error("Abstract Steps cannot be Created");
end

function Step:extend()
	local ext = {};
	setmetatable(ext, self);
	self.__index = self;
	return ext;
end

function Step:apply(ast, pipeline)
	logger:error("Abstract Steps cannot be Applied")
end

Step.Name = "Abstract Step";
Step.Description = "Abstract Step";

return Step;
`,"prometheus.steps.AddVararg":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- AddVararg.lua
--
-- This Script provides a Simple Obfuscation Step that wraps the entire Script into a function

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");
local visitast = require("prometheus.visitast");
local AstKind = Ast.AstKind;

local AddVararg = Step:extend();
AddVararg.Description = "This Step Adds Vararg to all Functions";
AddVararg.Name = "Add Vararg";

AddVararg.SettingsDescriptor = {}

function AddVararg:init(_) end

function AddVararg:apply(ast)
	visitast(ast, nil, function(node)
        if node.kind == AstKind.FunctionDeclaration or node.kind == AstKind.LocalFunctionDeclaration or node.kind == AstKind.FunctionLiteralExpression then
            if #node.args < 1 or node.args[#node.args].kind ~= AstKind.VarargExpression then
                node.args[#node.args + 1] = Ast.VarargExpression();
            end
        end
    end)
end

return AddVararg;
`,"prometheus.steps.AntiTamper":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- AntiTamper.lua
--
-- This Script provides an Obfuscation Step, that breaks the script, when someone tries to tamper with it.

local Step = require("prometheus.step")
local RandomStrings = require("prometheus.randomStrings")
local Parser = require("prometheus.parser")
local Enums = require("prometheus.enums")
local logger = require("logger")

local AntiTamper = Step:extend()
AntiTamper.Description = "This Step Breaks your Script when it is modified. This is only effective when using the new VM."
AntiTamper.Name = "Anti Tamper"

AntiTamper.SettingsDescriptor = {
	UseDebug = {
		type = "boolean",
		default = true,
		description = "Use debug library. (Recommended, however scripts will not work without debug library.)",
	},
}

local function generateSanityCheck()
	local sanityCheckAnswers = {}
	local sanityPasses = math.random(1, 10)
	for i = 1, sanityPasses do
		sanityCheckAnswers[i] = (math.random(1, 2 ^ 24) % 2 == 1)
	end
	local primaryCheck = RandomStrings.randomString()
	local codeParts = {}
	local function addCode(fmt, ...)
		table.insert(codeParts, string.format(fmt, ...))
	end

	local function generateAssignment(idx)
		local index = math.min(idx, sanityPasses)
		addCode("            valid = %s;\\n", tostring(sanityCheckAnswers[index]))
	end
	local function generateValidation(idx)
		local index = math.min(idx - 1, sanityPasses)
		addCode("            if valid == %s then\\n", tostring(sanityCheckAnswers[index]))
		addCode("            else\\n")
		addCode("                while true do end\\n")
		addCode("            end\\n")
	end

	addCode("do local valid = '%s';", primaryCheck)
	addCode("for i = 0, %d do\\n", sanityPasses)
	for i = 0, sanityPasses do
		if i == 0 then
			addCode("        if i == 0 then\\n")
			addCode("            if valid ~= '%s' then\\n", primaryCheck)
			addCode("                while true do end\\n")
			addCode("            end\\n")
			addCode("            valid = %s;\\n", tostring(sanityCheckAnswers[1]))
		elseif i == 1 then
			addCode("        elseif i == 1 then\\n")
			addCode("            if valid == %s then\\n", tostring(sanityCheckAnswers[1]))
			addCode("            end\\n")
		else
			addCode("        elseif i == %d then\\n", i)

			--[[
                Basically, even iterations are used to assign a new sanity check value,
                and odd iterations are used to validate the previous sanity check value.
            ]]
			if i % 2 == 0 then
				generateAssignment(i)
			else
				generateValidation(i)
			end
		end
	end
	addCode("        end\\n")
	addCode("    end\\n")
	addCode("do valid = true end\\n")
	return table.concat(codeParts)
end

function AntiTamper:init(settings) end

function AntiTamper:apply(ast, pipeline)
	if pipeline.PrettyPrint then
		logger:warn(string.format('"%s" cannot be used with PrettyPrint, ignoring "%s"', self.Name, self.Name))
		return ast
	end
	local code = generateSanityCheck()
	if self.UseDebug then
		local string = RandomStrings.randomString()
		code = code
			.. [[
            -- Anti Beautify
			local sethook = debug and debug.sethook or function() end;
			local allowedLine = nil;
			local called = 0;
			sethook(function(s, line)
				if not line then
					return
				end
				called = called + 1;
				if allowedLine then
					if allowedLine ~= line then
						sethook(error, "l", 5);
					end
				else
					allowedLine = line;
				end
			end, "l", 5);
			(function() end)();
			(function() end)();
			sethook();
			if called < 2 then
				valid = false;
			end
            if called < 2 then
                valid = false;
            end

            -- Anti Function Hook
            local funcs = {pcall, string.char, debug.getinfo, string.dump}
            for i = 1, #funcs do
                -- Real Lua marks a native (non-Lua-closure) function's
                -- debug.getinfo(...).what as "C". Fengari's own builtins are
                -- implemented in JavaScript, not C, so Fengari legitimately
                -- reports "J" instead for the exact same kind of function
                -- (see funcinfo() in Fengari's ldebug.js - this is intentional
                -- upstream Fengari behavior, not a bug). Checking only for
                -- "C" means this sanity check fails for every unmodified
                -- script the moment it runs under Fengari, since none of
                -- pcall/string.char/debug.getinfo/string.dump will ever
                -- report "C" there - AntiTamper would flag *all* Fengari
                -- executions as tampered and deliberately break them via
                -- Tamper Detected!/the infinite-loop fallback below, with no
                -- actual tampering having occurred. Both markers mean the
                -- same thing (an unhookable native builtin), so both must be
                -- accepted.
                local what = debug.getinfo(funcs[i]).what
                if what ~= "C" and what ~= "J" then
                    valid = false;
                end

                if debug.getupvalue(funcs[i], 1) then
                    valid = false;
                end

                if pcall(string.dump, funcs[i]) then
                    valid = false;
                end
            end

            -- Anti Beautify
            local function getTraceback()
                local str = (function(arg)
                    return debug.traceback(arg)
                end)("]] .. string .. [[");
                return str;
            end

            local traceback = getTraceback();
            valid = valid and traceback:sub(1, traceback:find("\\n") - 1) == "]] .. string .. [[";
            local iter = traceback:gmatch(":(%d*):");
            local v, c = iter(), 1;
            for i in iter do
                valid = valid and i == v;
                c = c + 1;
            end
            valid = valid and c >= 2;
        ]]
    end
    code = code .. [[
    local gmatch = string.gmatch;
    local err = function() error("Tamper Detected!") end;

    local pcallIntact2 = false;
    local pcallIntact = pcall(function()
        pcallIntact2 = true;
    end) and pcallIntact2;

    local random = math.random;
    local tblconcat = table.concat;
    local unpkg = table and table.unpack or unpack;
    local n = random(3, 65);
    local acc1 = 0;
    local acc2 = 0;
    local pcallRet = {pcall(function() local a = ]] .. tostring(math.random(1, 2^24)) .. [[ - "]] .. RandomStrings.randomString() .. [[" ^ ]] .. tostring(math.random(1, 2^24)) .. [[ return "]] .. RandomStrings.randomString() .. [[" / a; end)};
    local origMsg = pcallRet[2];
    local line = tonumber(gmatch(tostring(origMsg), ':(%d*):')());
    for i = 1, n do
        local len = math.random(1, 100);
        local n2 = random(0, 255);
        local pos = random(1, len);
        local shouldErr = random(1, 2) == 1;
        local msg = origMsg:gsub(':(%d*):', ':' .. tostring(random(0, 10000)) .. ':');
        local arr = {pcall(function()
            if random(1, 2) == 1 or i == n then
                local line2 = tonumber(gmatch(tostring(({pcall(function() local a = ]] .. tostring(math.random(1, 2^24)) .. [[ - "]] .. RandomStrings.randomString() .. [[" ^ ]] .. tostring(math.random(1, 2^24)) .. [[ return "]] .. RandomStrings.randomString() .. [[" / a; end)})[2]), ':(%d*):')());
                valid = valid and line == line2;
            end
            if shouldErr then
                error(msg, 0);
            end
            local arr = {};
            for i = 1, len do
                arr[i] = random(0, 255);
            end
            arr[pos] = n2;
            return unpkg(arr);
        end)};
        if shouldErr then
            valid = valid and arr[1] == false and arr[2] == msg;
        else
            valid = valid and arr[1];
            acc1 = (acc1 + arr[pos + 1]) % 256;
            acc2 = (acc2 + n2) % 256;
        end
    end
    valid = valid and acc1 == acc2;

    if valid then else
        repeat
            return (function()
                while true do
                    l1, l2 = l2, l1;
                    err();
                end
            end)();
        until true;
        while true do
            l2 = random(1, 6);
            if l2 > 2 then
                l2 = tostring(l1);
            else
                l1 = l2;
            end
        end
        return;
    end
end

    -- Anti Function Arg Hook
    local obj = setmetatable({}, {
        __tostring = err,
    });
    obj[math.random(1, 100)] = obj;
    (function() end)(obj);

    repeat until valid;
    ]]

    local parsed = Parser:new({LuaVersion = Enums.LuaVersion.Lua51}):parse(code);
    local doStat = parsed.body.statements[1];
    doStat.body.scope:setParent(ast.body.scope);
    table.insert(ast.body.statements, 1, doStat);

    return ast;
end

return AntiTamper;
`,"prometheus.steps.ConstantArray":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- ConstantArray.lua
--
-- This Script provides a Simple Obfuscation Step that wraps the entire Script into a function

-- TODO: Wrapper Functions
-- TODO: Proxy Object for indexing: e.g: ARR[X] becomes ARR + X

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");
local Scope = require("prometheus.scope");
local visitast = require("prometheus.visitast");
local util = require("prometheus.util")
local Parser = require("prometheus.parser");
local enums = require("prometheus.enums")

local LuaVersion = enums.LuaVersion;
local AstKind = Ast.AstKind;

local ConstantArray = Step:extend();
ConstantArray.Description = "This Step will Extract all Constants and put them into an Array at the beginning of the script";
ConstantArray.Name = "Constant Array";

ConstantArray.SettingsDescriptor = {
	Threshold = {
		name = "Threshold",
		description = "The relative amount of nodes that will be affected",
		type = "number",
		default = 1,
		min = 0,
		max = 1,
		aliases = { "Treshold" },
	},
	StringsOnly = {
		name = "StringsOnly",
		description = "Wether to only Extract Strings",
		type = "boolean",
		default = false,
	},
	Shuffle = {
		name = "Shuffle",
		description = "Wether to shuffle the order of Elements in the Array",
		type = "boolean",
		default = true,
	},
	Rotate = {
		name = "Rotate",
		description = "Wether to rotate the String Array by a specific (random) amount. This will be undone on runtime.",
		type = "boolean",
		default = true,
	},
	LocalWrapperThreshold = {
		name = "LocalWrapperThreshold",
		description = "The relative amount of nodes functions, that will get local wrappers",
		type = "number",
		default = 1,
		min = 0,
		max = 1,
		aliases = { "LocalWrapperTreshold" },
	},
	LocalWrapperCount = {
		name = "LocalWrapperCount",
		description = "The number of Local wrapper Functions per scope. This only applies if LocalWrapperThreshold is greater than 0",
		type = "number",
		min = 0,
		max = 512,
		default = 0,
	},
	LocalWrapperArgCount = {
		name = "LocalWrapperArgCount",
		description = "The number of Arguments to the Local wrapper Functions",
		type = "number",
		min = 1,
		default = 10,
		max = 200,
	};
	MaxWrapperOffset = {
		name = "MaxWrapperOffset",
		description = "The Max Offset for the Wrapper Functions",
		type = "number",
		min = 0,
		default = 65535,
	};
	Encoding = {
		name = "Encoding",
		description = "The Encoding to use for the Strings",
		type = "enum",
		default = "mixed",
		values = {
			"none",
			"base64",
			"base85",
			"mixed",
		},
	}
}

local prefix_0, prefix_1;
local function initPrefixes()
	local charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@\xC2\xA3$%^&*()_+-=[]{}|:;<>,./?";
	repeat
		local a, b = math.random(1, #charset), math.random(1, #charset);
		prefix_0 = charset:sub(a, a);
		prefix_1 = charset:sub(b, b);
	until prefix_0 ~= prefix_1
end

local function callNameGenerator(generatorFunction, ...)
	if(type(generatorFunction) == "table") then
		generatorFunction = generatorFunction.generateName;
	end
	return generatorFunction(...);
end

function ConstantArray:init(_) end

function ConstantArray:createArray()
	local entries = {};
	for i, v in ipairs(self.constants) do
		if type(v) == "string" then
			v = self:encode(v);
		end
		entries[i] = Ast.TableEntry(Ast.ConstantNode(v));
	end
	return Ast.TableConstructorExpression(entries);
end

function ConstantArray:indexing(index, data)
	if self.LocalWrapperCount > 0 and data.functionData.local_wrappers then
		local wrappers = data.functionData.local_wrappers;
		local wrapper = wrappers[math.random(#wrappers)];

		local args = {};
		local ofs = index - self.wrapperOffset - wrapper.offset;
		for i = 1, self.LocalWrapperArgCount, 1 do
			if i == wrapper.arg then
				args[i] = Ast.NumberExpression(ofs);
			else
				args[i] = Ast.NumberExpression(math.random(ofs - 1024, ofs + 1024));
			end
		end

		data.scope:addReferenceToHigherScope(wrappers.scope, wrappers.id);
		return Ast.FunctionCallExpression(Ast.IndexExpression(
			Ast.VariableExpression(wrappers.scope, wrappers.id),
			Ast.StringExpression(wrapper.index)
		), args);
	else
		data.scope:addReferenceToHigherScope(self.rootScope, self.wrapperId);
		return Ast.FunctionCallExpression(Ast.VariableExpression(self.rootScope, self.wrapperId), {
			Ast.NumberExpression(index - self.wrapperOffset);
		});
	end
end

function ConstantArray:getConstant(value, data)
	if(self.lookup[value]) then
		return self:indexing(self.lookup[value], data)
	end
	local idx = #self.constants + 1;
	self.constants[idx] = value;
	self.lookup[value] = idx;
	return self:indexing(idx, data);
end

function ConstantArray:addConstant(value)
	if(self.lookup[value]) then
		return
	end
	local idx = #self.constants + 1;
	self.constants[idx] = value;
	self.lookup[value] = idx;
end

local function reverse(t, i, j)
	while i < j do
	  t[i], t[j] = t[j], t[i]
	  i, j = i+1, j-1
	end
end

local function rotate(t, d, n)
	n = n or #t
	d = (d or 1) % n
	reverse(t, 1, n)
	reverse(t, 1, d)
	reverse(t, d+1, n)
end

local rotateCode = [=[
	for i, v in ipairs({{1, LEN}, {1, SHIFT}, {SHIFT + 1, LEN}}) do
		while v[1] < v[2] do
			ARR[v[1]], ARR[v[2]], v[1], v[2] = ARR[v[2]], ARR[v[1]], v[1] + 1, v[2] - 1
		end
	end
]=];

function ConstantArray:addRotateCode(ast, shift)
	local parser = Parser:new({
		LuaVersion = LuaVersion.Lua51;
	});

	local newAst = parser:parse(string.gsub(string.gsub(rotateCode, "SHIFT", tostring(shift)), "LEN", tostring(#self.constants)));
	local forStat = newAst.body.statements[1];
	forStat.body.scope:setParent(ast.body.scope);
	visitast(newAst, nil, function(node, data)
		if(node.kind == AstKind.VariableExpression) then
			if(node.scope:getVariableName(node.id) == "ARR") then
				data.scope:removeReferenceToHigherScope(node.scope, node.id);
				data.scope:addReferenceToHigherScope(self.rootScope, self.arrId);
				node.scope = self.rootScope;
				node.id = self.arrId;
			end
		end
	end)

	table.insert(ast.body.statements, 1, forStat);
end

function ConstantArray:addDecodeCode(ast)
	if self.Encoding == "base64" then
		local base64DecodeCode = [[
	do ]] .. table.concat(util.shuffle{
		"local lookup = LOOKUP_TABLE;",
		"local len = string.len;",
		"local sub = string.sub;",
		"local floor = math.floor;",
		"local strchar = string.char;",
		"local insert = table.insert;",
		"local concat = table.concat;",
		"local type = type;",
		"local arr = ARR;",
	}) .. [[
		for i = 1, #arr do
			local data = arr[i];
			if type(data) == "string" then
				local length = len(data)
				local parts = {}
				local index = 1
				local value = 0
				local count = 0
				while index <= length do
					local char = sub(data, index, index)
					local code = lookup[char]
					if code then
						value = value + code * (64 ^ (3 - count))
						count = count + 1
						if count == 4 then
							count = 0
							local c1 = floor(value / 65536)
							local c2 = floor(value % 65536 / 256)
							local c3 = value % 256
							insert(parts, strchar(c1, c2, c3))
							value = 0
						end
					elseif char == "=" then
						insert(parts, strchar(floor(value / 65536)));
						if index >= length or sub(data, index + 1, index + 1) ~= "=" then
							insert(parts, strchar(floor(value % 65536 / 256)));
						end
						break
					end
					index = index + 1
				end
				arr[i] = concat(parts)
			end
		end
	end
]];

		local parser = Parser:new({
			LuaVersion = LuaVersion.Lua51;
		});

		local newAst = parser:parse(base64DecodeCode);
		local forStat = newAst.body.statements[1];
		forStat.body.scope:setParent(ast.body.scope);

		visitast(newAst, nil, function(node, data)
			if(node.kind == AstKind.VariableExpression) then
				if(node.scope:getVariableName(node.id) == "ARR") then
					data.scope:removeReferenceToHigherScope(node.scope, node.id);
					data.scope:addReferenceToHigherScope(self.rootScope, self.arrId);
					node.scope = self.rootScope;
					node.id = self.arrId;
				end

				if(node.scope:getVariableName(node.id) == "LOOKUP_TABLE") then
					data.scope:removeReferenceToHigherScope(node.scope, node.id);
					return self:createBase64Lookup();
				end
			end
		end)

		table.insert(ast.body.statements, 1, forStat);
	elseif self.Encoding == "base85" then
		local base85DecodeCode = [[
	do ]] .. table.concat(util.shuffle{
		"local lookup = LOOKUP_TABLE;",
		"local len = string.len;",
		"local sub = string.sub;",
		"local floor = math.floor;",
		"local strchar = string.char;",
		"local insert = table.insert;",
		"local concat = table.concat;",
		"local type = type;",
		"local arr = ARR;",
	}) .. [[
		for i = 1, #arr do
			local data = arr[i];
			if type(data) == "string" then
				local length = len(data)
				local parts = {}
				local index = 1
				while index <= length do
					local remain = length - index + 1
					local count = remain >= 5 and 5 or remain
					local value = 0
					local valid = count > 1

					for j = 0, 4 do
						local code
						if j < count then
							local ch = sub(data, index + j, index + j)
							code = lookup[ch]
							if not code then
								valid = false
								break
							end
						else
							code = 84
						end
						value = value * 85 + code
					end

					if valid then
						local b1 = floor(value / 16777216) % 256
						local b2 = floor(value / 65536) % 256
						local b3 = floor(value / 256) % 256
						local b4 = value % 256
						if count == 5 then
							insert(parts, strchar(b1, b2, b3, b4))
						elseif count == 4 then
							insert(parts, strchar(b1, b2, b3))
						elseif count == 3 then
							insert(parts, strchar(b1, b2))
						elseif count == 2 then
							insert(parts, strchar(b1))
						end
					end

					index = index + count
				end
				arr[i] = concat(parts)
			end
		end
	end
]];

		local parser = Parser:new({
			LuaVersion = LuaVersion.Lua51;
		});

		local newAst = parser:parse(base85DecodeCode);
		local forStat = newAst.body.statements[1];
		forStat.body.scope:setParent(ast.body.scope);

		visitast(newAst, nil, function(node, data)
			if(node.kind == AstKind.VariableExpression) then
				if(node.scope:getVariableName(node.id) == "ARR") then
					data.scope:removeReferenceToHigherScope(node.scope, node.id);
					data.scope:addReferenceToHigherScope(self.rootScope, self.arrId);
					node.scope = self.rootScope;
					node.id = self.arrId;
				end

				if(node.scope:getVariableName(node.id) == "LOOKUP_TABLE") then
					data.scope:removeReferenceToHigherScope(node.scope, node.id);
					return self:createBase85Lookup();
				end
			end
		end)

		table.insert(ast.body.statements, 1, forStat);
	elseif self.Encoding == "mixed" then
		local mixedDecodeCode = [[
	do ]] .. table.concat(util.shuffle{
		"local lookup64 = LOOKUP_TABLE_64;",
		"local lookup85 = LOOKUP_TABLE_85;",
		"local len = string.len;",
		"local sub = string.sub;",
		"local floor = math.floor;",
		"local strchar = string.char;",
		"local insert = table.insert;",
		"local concat = table.concat;",
		"local type = type;",
		"local arr = ARR;",
	}) .. [[
		for i = 1, #arr do
			local data = arr[i];
			if type(data) == "string" then
				local first = sub(data, 1, 1)
				if first == "]]..prefix_0..[[" then
					data = sub(data, 2)
					local length = len(data)
					local parts = {}
					local index = 1
					local value = 0
					local count = 0
					while index <= length do
						local char = sub(data, index, index)
						local code = lookup64[char]
						if code then
							value = value + code * (64 ^ (3 - count))
							count = count + 1
							if count == 4 then
								count = 0
								local c1 = floor(value / 65536)
								local c2 = floor(value % 65536 / 256)
								local c3 = value % 256
								insert(parts, strchar(c1, c2, c3))
								value = 0
							end
						elseif char == "=" then
							insert(parts, strchar(floor(value / 65536)));
							if index >= length or sub(data, index + 1, index + 1) ~= "=" then
								insert(parts, strchar(floor(value % 65536 / 256)));
							end
							break
						end
						index = index + 1
					end
					arr[i] = concat(parts)
				elseif first == "]]..prefix_1..[[" then
					data = sub(data, 2)
					local length = len(data)
					local parts = {}
					local idx = 1
					while idx <= length do
						local remain = length - idx + 1
						local count = remain >= 5 and 5 or remain
						local value = 0
						local valid = count > 1

						for j = 0, 4 do
							local code
							if j < count then
								local ch = sub(data, idx + j, idx + j)
								code = lookup85[ch]
								if not code then
									valid = false
									break
								end
							else
								code = 84
							end
							value = value * 85 + code
						end

						if valid then
							local b1 = floor(value / 16777216) % 256
							local b2 = floor(value / 65536) % 256
							local b3 = floor(value / 256) % 256
							local b4 = value % 256
							if count == 5 then
								insert(parts, strchar(b1, b2, b3, b4))
							elseif count == 4 then
								insert(parts, strchar(b1, b2, b3))
							elseif count == 3 then
								insert(parts, strchar(b1, b2))
							elseif count == 2 then
								insert(parts, strchar(b1))
							end
						end

						idx = idx + count
					end
					arr[i] = concat(parts)
				end
			end
		end
	end
]];

		local parser = Parser:new({
			LuaVersion = LuaVersion.Lua51;
		});

		local newAst = parser:parse(mixedDecodeCode);
		local forStat = newAst.body.statements[1];
		forStat.body.scope:setParent(ast.body.scope);

		visitast(newAst, nil, function(node, data)
			if(node.kind == AstKind.VariableExpression) then
				if(node.scope:getVariableName(node.id) == "ARR") then
					data.scope:removeReferenceToHigherScope(node.scope, node.id);
					data.scope:addReferenceToHigherScope(self.rootScope, self.arrId);
					node.scope = self.rootScope;
					node.id = self.arrId;
				end

				if(node.scope:getVariableName(node.id) == "LOOKUP_TABLE_64") then
					data.scope:removeReferenceToHigherScope(node.scope, node.id);
					return self:createBase64Lookup();
				end

				if(node.scope:getVariableName(node.id) == "LOOKUP_TABLE_85") then
					data.scope:removeReferenceToHigherScope(node.scope, node.id);
					return self:createBase85Lookup();
				end
			end
		end)

		table.insert(ast.body.statements, 1, forStat);
	end
end

function ConstantArray:createBase64Lookup()
	local entries = {};
	local i = 0;
	for char in string.gmatch(self.base64chars, ".") do
		table.insert(entries, Ast.KeyedTableEntry(Ast.StringExpression(char), Ast.NumberExpression(i)));
		i = i + 1;
	end
	util.shuffle(entries);
	return Ast.TableConstructorExpression(entries);
end

function ConstantArray:createBase85Lookup()
	local entries = {};
	local i = 0;
	for char in string.gmatch(self.base85chars, ".") do
		table.insert(entries, Ast.KeyedTableEntry(Ast.StringExpression(char), Ast.NumberExpression(i)));
		i = i + 1;
	end
	util.shuffle(entries);
	return Ast.TableConstructorExpression(entries);
end

function ConstantArray:encode(str)
	if self.Encoding == "base64" then
		return ((str:gsub('.', function(x)
			local r,b='',x:byte()
			for i=8,1,-1 do r=r..(b%2^i-b%2^(i-1)>0 and '1' or '0') end
			return r;
		end)..'0000'):gsub('%d%d%d?%d?%d?%d?', function(x)
			if (#x < 6) then return '' end
			local c=0
			for i=1,6 do c=c+(x:sub(i,i)=='1' and 2^(6-i) or 0) end
			return self.base64chars:sub(c+1,c+1)
		end)..({ '', '==', '=' })[#str%3+1]);
	elseif self.Encoding == "base85" then
		local result = {};
		local len = #str;
		local pos = 1;

		while pos <= len do
			local rem = len - pos + 1;
			local count = rem >= 4 and 4 or rem;
			local b1, b2, b3, b4 = string.byte(str, pos, pos + count - 1);
			b1, b2, b3, b4 = b1 or 0, b2 or 0, b3 or 0, b4 or 0;

			local value = ((b1 * 256 + b2) * 256 + b3) * 256 + b4;
			local chars = {};
			for i = 5, 1, -1 do
				local code = (value % 85) + 1;
				chars[i] = self.base85chars:sub(code, code);
				value = math.floor(value / 85);
			end

			result[#result + 1] = table.concat(chars, "", 1, count + 1);
			pos = pos + count;
		end

		return table.concat(result);
	elseif self.Encoding == "mixed" then
		if math.random() < 0.5 then
			local encoded = ((str:gsub('.', function(x)
				local r,b='',x:byte()
				for i=8,1,-1 do r=r..(b%2^i-b%2^(i-1)>0 and '1' or '0') end
				return r;
			end)..'0000'):gsub('%d%d%d?%d?%d?%d?', function(x)
				if (#x < 6) then return '' end
				local c=0
				for i=1,6 do c=c+(x:sub(i,i)=='1' and 2^(6-i) or 0) end
				return self.base64chars:sub(c+1,c+1)
			end)..({ '', '==', '=' })[#str%3+1]);
			return prefix_0 .. encoded;
		else
			local result = {};
			local len = #str;
			local pos = 1;

			while pos <= len do
				local rem = len - pos + 1;
				local count = rem >= 4 and 4 or rem;
				local b1, b2, b3, b4 = string.byte(str, pos, pos + count - 1);
				b1 = b1 or 0;
				b2 = b2 or 0;
				b3 = b3 or 0;
				b4 = b4 or 0;

				local value = ((b1 * 256 + b2) * 256 + b3) * 256 + b4;
				local chars = {};
				for i = 5, 1, -1 do
					local code = (value % 85) + 1;
					chars[i] = self.base85chars:sub(code, code);
					value = math.floor(value / 85);
				end

				result[#result + 1] = table.concat(chars, "", 1, count + 1);
				pos = pos + count;
			end

			return prefix_1 .. table.concat(result);
		end
	end
end

function ConstantArray:apply(ast, pipeline)
	initPrefixes();
	self.rootScope = ast.body.scope;
	self.arrId = self.rootScope:addVariable();

	self.base64chars = table.concat(util.shuffle{
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
		"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
		"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
		"+", "/",
	});

	self.base85chars = table.concat(util.shuffle{
		"!", "\\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
		"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
		":", ";", "<", "=", ">", "?", "@",
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
		"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
		"[", "\\\\", "]", "^", "_", "\`",
		"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
		"p", "q", "r", "s", "t", "u",
	});

	self.constants = {};
	self.lookup = {};

	-- Extract Constants
	visitast(ast, nil, function(node, data)
		-- Apply only to some nodes
		if math.random() <= self.Threshold then
			node.__apply_constant_array = true;
			if node.kind == AstKind.StringExpression then
				self:addConstant(node.value);
			elseif not self.StringsOnly then
				if node.isConstant then
					if node.value ~= nil then
						self:addConstant(node.value);
					end
				end
			end
		end
	end);

	-- Shuffle Array
	if self.Shuffle then
		self.constants = util.shuffle(self.constants);
		self.lookup = {};
		for i, v in ipairs(self.constants) do
			self.lookup[v] = i;
		end
	end

	-- Set Wrapper Function Offset
	self.wrapperOffset = math.random(-self.MaxWrapperOffset, self.MaxWrapperOffset);
	self.wrapperId = self.rootScope:addVariable();

	visitast(ast, function(node, data)
		-- Add Local Wrapper Functions
		if self.LocalWrapperCount > 0 and node.kind == AstKind.Block and node.isFunctionBlock and math.random() <= self.LocalWrapperThreshold then
			local id = node.scope:addVariable()
			data.functionData.local_wrappers = {
				id = id;
				scope = node.scope,
			};
			local nameLookup = {};
			for i = 1, self.LocalWrapperCount, 1 do
				local name;
				repeat
					name = callNameGenerator(pipeline.namegenerator, math.random(1, self.LocalWrapperArgCount * 16));
				until not nameLookup[name];
				nameLookup[name] = true;

				local offset = math.random(-self.MaxWrapperOffset, self.MaxWrapperOffset);
				local argPos = math.random(1, self.LocalWrapperArgCount);

				data.functionData.local_wrappers[i] = {
					arg = argPos,
					index = name,
					offset =  offset,
				};
				data.functionData.__used = false;
			end
		end
		if node.__apply_constant_array then
			data.functionData.__used = true;
		end
	end, function(node, data)
		-- Actually insert Statements to get the Constant Values
		if node.__apply_constant_array then
			if node.kind == AstKind.StringExpression then
				return self:getConstant(node.value, data);
			elseif not self.StringsOnly then
				if node.isConstant then
					return node.value ~= nil and self:getConstant(node.value, data);
				end
			end
			node.__apply_constant_array = nil;
		end

		-- Insert Local Wrapper Declarations
		if self.LocalWrapperCount > 0 and node.kind == AstKind.Block and node.isFunctionBlock and data.functionData.local_wrappers and data.functionData.__used then
			data.functionData.__used = nil;
			local elems = {};
			local wrappers = data.functionData.local_wrappers;
			for i = 1, self.LocalWrapperCount, 1 do
				local wrapper = wrappers[i];
				local argPos = wrapper.arg;
				local offset = wrapper.offset;
				local name = wrapper.index;

				local funcScope = Scope:new(node.scope);

				local arg = nil;
				local args = {};

				for i = 1, self.LocalWrapperArgCount, 1 do
					args[i] = funcScope:addVariable();
					if i == argPos then
						arg = args[i];
					end
				end

				local addSubArg;

				-- Create add and Subtract code
				if offset < 0 then
					addSubArg = Ast.SubExpression(Ast.VariableExpression(funcScope, arg), Ast.NumberExpression(-offset));
				else
					addSubArg = Ast.AddExpression(Ast.VariableExpression(funcScope, arg), Ast.NumberExpression(offset));
				end

				funcScope:addReferenceToHigherScope(self.rootScope, self.wrapperId);
				local callArg = Ast.FunctionCallExpression(Ast.VariableExpression(self.rootScope, self.wrapperId), {
					addSubArg
				});

				local fargs = {};
				for i, v in ipairs(args) do
					fargs[i] = Ast.VariableExpression(funcScope, v);
				end

				elems[i] = Ast.KeyedTableEntry(
					Ast.StringExpression(name),
					Ast.FunctionLiteralExpression(fargs, Ast.Block({
						Ast.ReturnStatement({
							callArg
						});
					}, funcScope))
				)
			end
			table.insert(node.statements, 1, Ast.LocalVariableDeclaration(node.scope, {
				wrappers.id
			}, {
				Ast.TableConstructorExpression(elems)
			}));
		end
	end);

	self:addDecodeCode(ast);

	local steps = util.shuffle({
		-- Add Wrapper Function Code
		function()
			local funcScope = Scope:new(self.rootScope);
			-- Add Reference to Array
			funcScope:addReferenceToHigherScope(self.rootScope, self.arrId);

			local arg = funcScope:addVariable();
			local addSubArg;

			-- Create add and Subtract code
			if self.wrapperOffset < 0 then
				addSubArg = Ast.SubExpression(Ast.VariableExpression(funcScope, arg), Ast.NumberExpression(-self.wrapperOffset));
			else
				addSubArg = Ast.AddExpression(Ast.VariableExpression(funcScope, arg), Ast.NumberExpression(self.wrapperOffset));
			end

			-- Create and Add the Function Declaration
			table.insert(ast.body.statements, 1, Ast.LocalFunctionDeclaration(self.rootScope, self.wrapperId, {
				Ast.VariableExpression(funcScope, arg)
			}, Ast.Block({
				Ast.ReturnStatement({
					Ast.IndexExpression(
						Ast.VariableExpression(self.rootScope, self.arrId),
						addSubArg
					)
				});
			}, funcScope)));

			-- Resulting Code:
			-- function xy(a)
			-- 		return ARR[a - 10]
			-- end
		end,
		-- Rotate Array and Add unrotate code
		function()
			if self.Rotate and #self.constants > 1 then
				local shift = math.random(1, #self.constants - 1);

				rotate(self.constants, -shift);
				self:addRotateCode(ast, shift);
			end
		end,
	});

	for i, f in ipairs(steps) do
		f();
	end

	-- Add the Array Declaration
	table.insert(ast.body.statements, 1, Ast.LocalVariableDeclaration(self.rootScope, {self.arrId}, {self:createArray()}));

	self.rootScope = nil;
	self.arrId = nil;

	self.constants = nil;
	self.lookup = nil;
end

return ConstantArray;
`,"prometheus.steps.EncryptStrings":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- EncryptStrings.lua
--
-- This Script provides a Simple Obfuscation Step that encrypts strings

local Step = require("prometheus.step")
local Ast = require("prometheus.ast")
local Parser = require("prometheus.parser")
local Enums = require("prometheus.enums")
local visitast = require("prometheus.visitast");
local util = require("prometheus.util")
local AstKind = Ast.AstKind;

local EncryptStrings = Step:extend()
EncryptStrings.Description = "This Step will encrypt strings within your Program."
EncryptStrings.Name = "Encrypt Strings"

EncryptStrings.SettingsDescriptor = {}

function EncryptStrings:init(_) end


function EncryptStrings:CreateEncryptionService()
	local usedSeeds = {};

	local secret_key_6 = math.random(0, 63) -- 6-bit  arbitrary integer (0..63)
	local secret_key_7 = math.random(0, 127) -- 7-bit  arbitrary integer (0..127)
	local secret_key_44 = math.random(0, 17592186044415) -- 44-bit arbitrary integer (0..17592186044415)
	local secret_key_8 = math.random(0, 255); -- 8-bit  arbitrary integer (0..255)

	local floor = math.floor

	local function primitive_root_257(idx)
		local g, m, d = 1, 128, 2 * idx + 1
		repeat
			g, m, d = g * g * (d >= m and 3 or 1) % 257, m / 2, d % m
		until m < 1
		return g
	end

	local param_mul_8 = primitive_root_257(secret_key_7)
	local param_mul_45 = secret_key_6 * 4 + 1
	local param_add_45 = secret_key_44 * 2 + 1

	local state_45 = 0
	local state_8 = 2

	local prev_values = {}
	local function set_seed(seed_53)
		state_45 = seed_53 % 35184372088832
		state_8 = seed_53 % 255 + 2
		prev_values = {}
	end

	local function gen_seed()
		local seed;
		repeat
			seed = math.random(0, 35184372088832);
		until not usedSeeds[seed];
		usedSeeds[seed] = true;
		return seed;
	end

	local function get_random_32()
		state_45 = (state_45 * param_mul_45 + param_add_45) % 35184372088832
		repeat
			state_8 = state_8 * param_mul_8 % 257
		until state_8 ~= 1
		local r = state_8 % 32
		local n = floor(state_45 / 2 ^ (13 - (state_8 - r) / 32)) % 2 ^ 32 / 2 ^ r
		return floor(n % 1 * 2 ^ 32) + floor(n)
	end

	local function get_next_pseudo_random_byte()
		if #prev_values == 0 then
			local rnd = get_random_32() -- value 0..4294967295
			local low_16 = rnd % 65536
			local high_16 = (rnd - low_16) / 65536
			local b1 = low_16 % 256
			local b2 = (low_16 - b1) / 256
			local b3 = high_16 % 256
			local b4 = (high_16 - b3) / 256
			prev_values = { b1, b2, b3, b4 }
		end
		--print(unpack(prev_values))
		return table.remove(prev_values)
	end

	local function encrypt(str)
		local seed = gen_seed();
		set_seed(seed)
		local len = string.len(str)
		local out = {}
		local prevVal = secret_key_8;
		for i = 1, len do
			local byte = string.byte(str, i);
			out[i] = string.char((byte - (get_next_pseudo_random_byte() + prevVal)) % 256);
			prevVal = byte;
		end
		return table.concat(out), seed;
	end

    local function genCode()
        local code = [[
do
	]] .. table.concat(util.shuffle{
		"local floor = math.floor",
		"local random = math.random",
		"local remove = table.remove",
		"local char = string.char",
		"local state_45 = 0",
		"local state_8 = 2",
		"local charmap = {}",
		"local nums = {}"
	}, "\\n") .. [[
	for i = 1, 256 do
		nums[i] = i;
	end

	repeat
		local idx = random(1, #nums);
		local n = remove(nums, idx);
		charmap[n] = char(n - 1);
	until #nums == 0;

	local prev_values = {}
	local function get_next_pseudo_random_byte()
		if #prev_values == 0 then
			state_45 = (state_45 * ]] .. tostring(param_mul_45) .. [[ + ]] .. tostring(param_add_45) .. [[) % 35184372088832
			repeat
				state_8 = state_8 * ]] .. tostring(param_mul_8) .. [[ % 257
			until state_8 ~= 1
			local r = state_8 % 32
			local shift = 13 - (state_8 - r) / 32
			local n = floor(state_45 / 2 ^ shift) % 4294967296 / 2 ^ r
			local rnd = floor(n % 1 * 4294967296) + floor(n)
			local low_16 = rnd % 65536
			local high_16 = (rnd - low_16) / 65536
			prev_values = { low_16 % 256, (low_16 - low_16 % 256) / 256, high_16 % 256, (high_16 - high_16 % 256) / 256 }
		end


		local prevValuesLen = #prev_values;
		local removed = prev_values[prevValuesLen];
		prev_values[prevValuesLen] = nil;
		return removed;
	end

	local realStrings = {};
	STRINGS = setmetatable({}, {
		__index = realStrings;
		__metatable = nil;
	});
  	function DECRYPT(str, seed)
		local realStringsLocal = realStrings;
		if(realStringsLocal[seed]) then return seed; else
			prev_values = {};
			local chars = charmap;
			state_45 = seed % 35184372088832
			state_8 = seed % 255 + 2
			local len = #str;
			realStringsLocal[seed] = "";
			local prevVal = ]] .. tostring(secret_key_8) .. [[;
			local s = "";
			for i=1, len, 1 do
				prevVal = (string.byte(str, i) + get_next_pseudo_random_byte() + prevVal) % 256
				s = s .. chars[prevVal + 1];
			end
			realStringsLocal[seed] = s;
		end
		return seed;
	end
end]]

		return code;
    end

    return {
        encrypt = encrypt,
        param_mul_45 = param_mul_45,
        param_mul_8 = param_mul_8,
        param_add_45 = param_add_45,
		secret_key_8 = secret_key_8,
        genCode = genCode,
    }
end

function EncryptStrings:apply(ast, _)
    local Encryptor = self:CreateEncryptionService();

	local code = Encryptor.genCode();
	local newAst = Parser:new({ LuaVersion = Enums.LuaVersion.Lua51 }):parse(code);
	local doStat = newAst.body.statements[1];

	local scope = ast.body.scope;
	local decryptVar = scope:addVariable();
	local stringsVar = scope:addVariable();

	doStat.body.scope:setParent(ast.body.scope);

	visitast(newAst, nil, function(node, data)
		if(node.kind == AstKind.FunctionDeclaration) then
			if(node.scope:getVariableName(node.id) == "DECRYPT") then
				data.scope:removeReferenceToHigherScope(node.scope, node.id);
				data.scope:addReferenceToHigherScope(scope, decryptVar);
				node.scope = scope;
				node.id = decryptVar;
			end
		end
		if(node.kind == AstKind.AssignmentVariable or node.kind == AstKind.VariableExpression) then
			if(node.scope:getVariableName(node.id) == "STRINGS") then
				data.scope:removeReferenceToHigherScope(node.scope, node.id);
				data.scope:addReferenceToHigherScope(scope, stringsVar);
				node.scope = scope;
				node.id = stringsVar;
			end
		end
	end)

	visitast(ast, nil, function(node, data)
		if(node.kind == AstKind.StringExpression) then
			data.scope:addReferenceToHigherScope(scope, stringsVar);
			data.scope:addReferenceToHigherScope(scope, decryptVar);
			local encrypted, seed = Encryptor.encrypt(node.value);
			return Ast.IndexExpression(Ast.VariableExpression(scope, stringsVar), Ast.FunctionCallExpression(Ast.VariableExpression(scope, decryptVar), {
				Ast.StringExpression(encrypted), Ast.NumberExpression(seed),
			}));
		end
	end)


	-- Insert to Main Ast
	table.insert(ast.body.statements, 1, doStat);
	table.insert(ast.body.statements, 1, Ast.LocalVariableDeclaration(scope, util.shuffle{ decryptVar, stringsVar }, {}));
	return ast
end

return EncryptStrings
`,"prometheus.steps.NumbersToExpressions":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- NumbersToExpressions.lua
--
-- This Script provides an Obfuscation Step, that converts Number Literals to expressions.
-- This step can now also convert numbers to different representations!
-- Supported representations: hex, binary, scientific, normal. Please note that binary is only supported in Lua 5.2 and above.

unpack = unpack or table.unpack

local Step = require("prometheus.step")
local Ast = require("prometheus.ast")
local visitast = require("prometheus.visitast")
local util = require("prometheus.util")
local logger = require("logger")
local AstKind = Ast.AstKind

local NumbersToExpressions = Step:extend()
NumbersToExpressions.Description = "This Step Converts number Literals to Expressions"
NumbersToExpressions.Name = "Numbers To Expressions"

NumbersToExpressions.SettingsDescriptor = {
	Threshold = {
		type = "number",
		default = 1,
		min = 0,
		max = 1,
	},

	InternalThreshold = {
		type = "number",
		default = 0.2,
		min = 0,
		max = 0.8,
	},

	NumberRepresentationMutation = {
		type = "boolean",
		default = false,
		aliases = { "NumberRepresentationMutaton" },
	},

	AllowedNumberRepresentations = {
		type = "table",
		default = {"hex", "scientific", "normal"},
		values = {"hex", "binary", "scientific", "normal"},
	},
}

-- The host VM Fengetheus runs inside is LuaNode-VM, a Lua 5.3 VM built with a
-- true 64-bit lua_Integer (LUA_MAXINTEGER = 9223372036854775807 (2^63 - 1),
-- LUA_MININTEGER = -9223372036854775808 (-2^63)). The previous host (Fengari)
-- used a 32-bit lua_Integer, which is why this step originally capped operands
-- to the 32-bit signed range. That cap is kept here as a conservative
-- host-faithfulness guard: it never produces an incorrect result on the
-- 64-bit-double target, it only bounds operand magnitude.
--
-- The real target runtimes Fengetheus compiles for (Lua 5.1 and Roblox Luau)
-- have *no* integer subtype at all -- every number is a 64-bit double, and
-- tostring/\`..\` of an integer-valued double never appends ".0"
-- (tostring(15.0) == "15"). So an obfuscated literal that the host stores as
-- a float is still perfectly correct on the target.
--
-- The remaining concern is the *self-test* in web/src/engine.js: it executes
-- the obfuscated output inside this same host VM and string-compares the
-- printed output against the original's. If NumbersToExpressions emits a
-- literal that the host turns into a float, the float subtype can leak into
-- the user's own arithmetic (e.g. a \`for\` loop counter), and the host then
-- prints \`15.0\` where the original prints \`15\` -- a *false* "silent
-- corruption" that has nothing to do with the real #155/#18 upstream bug and
-- would not happen on the actual target.
--
-- Fix: keep every numeric operand this step emits within a safe signed-integer
-- range, so integer inputs stay integer-typed under the host VM. This is a
-- host-faithfulness constraint only -- it does not weaken the obfuscation
-- (the operands are still large, randomized, and the modulo / add / sub
-- decompositions are unchanged in structure), it merely caps their magnitude
-- so the host VM does not silently demote them to floats.
local LUA_MAXINTEGER = 2147483647      -- 2^31 - 1  (conservative 32-bit cap, kept from the Fengari era)
local LUA_MININTEGER = -2147483648     -- -2^31     (conservative 32-bit cap, kept from the Fengari era)

-- True only when v fits Fengari's 32-bit lua_Integer, so a literal of v is
-- parsed as an integer (not a float) by the host VM.
local function fitsInt32(v)
	return v >= LUA_MININTEGER and v <= LUA_MAXINTEGER
end

local function generateModuloExpression(n)
	-- Keep rhs modest so that lhs = n + multiplier*rhs stays inside 32 bits.
	-- rhs is at most ~2^20; multiplier at most 2^8; so lhs <= n + 2^28, which
	-- fits comfortably for any n that itself fits in 32 bits.
	local rhsMax = 2^20
	local rhs = n + math.random(1, rhsMax)
	-- Shrink the multiplier if n is already large, so lhs never overflows 32 bits.
	local maxMul = 2^8
	local headroom = LUA_MAXINTEGER - n
	if headroom < maxMul * rhsMax then
		-- n is close to the 32-bit ceiling: pick a multiplier that keeps lhs in range.
		maxMul = math.max(1, math.floor(headroom / math.max(1, rhs)))
	end
	local multiplier = math.random(1, math.max(1, maxMul))
	local lhs = n + (multiplier * rhs)
	-- Final safety net: if anything still slipped past the estimate (e.g. n is
	-- itself out of 32-bit range), fall back to a guaranteed-in-range rhs and a
	-- multiplier of 1 so lhs = n + rhs. The generator's own correctness check
	-- (tonumber(tostring(lhs)) % tonumber(tostring(rhs)) ~= val) still rejects
	-- any combination that does not reproduce n, so we never emit a
	-- mathematically-wrong expression; if no in-range decomposition reproduces
	-- n we signal failure (return nil) and the caller keeps the plain literal,
	-- which is numerically correct on the 64-bit-double target regardless.
	if not (fitsInt32(lhs) and fitsInt32(rhs)) then
		rhs = math.random(1, 1024)
		lhs = n + rhs
		if not (fitsInt32(lhs) and fitsInt32(rhs)) then
			return nil, nil
		end
	end
	return lhs, rhs
end

local function contains(table, value)
	for _, v in ipairs(table) do
		if v == value then
			return true
		end
	end
	return false
end

-- Detects negative zero (-0.0). Lua/IEEE754 treats -0.0 == 0.0 as true, so a
-- naive equality check cannot tell them apart; dividing by the value can,
-- since 1 / -0.0 is -inf while 1 / 0.0 is +inf.
local function isNegativeZero(val)
	return type(val) == "number" and val == 0 and 1 / val == -math.huge
end

function NumbersToExpressions:init(_)
	self.ExpressionGenerators = {
		function(val, depth) -- Addition
			local val2 = math.random(-2 ^ 20, 2 ^ 20)
			local diff = val - val2
			-- Keep both operands inside Fengari's 32-bit lua_Integer range so an
			-- integer input does not get demoted to a float on the host VM
			-- (see the note on generateModuloExpression above).
			if not (fitsInt32(val2) and fitsInt32(diff)) then
				return false
			end
			if tonumber(tostring(diff)) + tonumber(tostring(val2)) ~= val then
				return false
			end
			return Ast.AddExpression(
				self:CreateNumberExpression(val2, depth),
				self:CreateNumberExpression(diff, depth),
				false
			)
		end,

		function(val, depth) -- Subtraction
			local val2 = math.random(-2 ^ 20, 2 ^ 20)
			local diff = val + val2
			if not (fitsInt32(val2) and fitsInt32(diff)) then
				return false
			end
			if tonumber(tostring(diff)) - tonumber(tostring(val2)) ~= val then
				return false
			end
			return Ast.SubExpression(
				self:CreateNumberExpression(diff, depth),
				self:CreateNumberExpression(val2, depth),
				false
			)
		end,

		function(val, depth) -- Modulo
			local lhs, rhs = generateModuloExpression(val)
			if lhs == nil or rhs == nil then
				-- No 32-bit-int-safe decomposition exists for this val; let the
				-- caller try another generator (or fall back to a plain literal).
				return false
			end
			if tonumber(tostring(lhs)) % tonumber(tostring(rhs)) ~= val then
				return false
			end
			return Ast.ModExpression(
				self:CreateNumberExpression(lhs, depth),
				self:CreateNumberExpression(rhs, depth),
				false
			)
		end,
	}
end

function NumbersToExpressions:CreateNumberExpression(val, depth)
	-- Negative zero cannot survive any of the arithmetic decompositions below:
	-- addition/subtraction generators rely on a + (-a) or (a - a), which IEEE754
	-- always rounds to +0.0 regardless of the target sign, and the modulo
	-- generator has the same problem. Leaving the literal untouched is the only
	-- way to guarantee the sign bit survives obfuscation.
	if isNegativeZero(val) then
		return Ast.NumberExpression(val)
	end

	if depth > 0 and math.random() >= self.InternalThreshold or depth > 15 then
		local format = self.AllowedNumberRepresentations[math.random(1, #self.AllowedNumberRepresentations)]
		if not self.NumberRepresentationMutation then
			return Ast.NumberExpression(val)
		end

		if format == "hex" then
			if val ~= math.floor(val) or val < 0 then
				return Ast.NumberExpression(val)
			end
			-- Lua 5.3+ (incl. Fengari) requires an exact integer representation for %X.
			-- Very large integer-valued floats (beyond 2^63) can't be represented as
			-- a Lua integer, so fall back to a plain decimal literal in that case.
			local intVal = math.tointeger and math.tointeger(val) or val
			if not intVal then
				return Ast.NumberExpression(val)
			end
			local ok, hexStr = pcall(string.format, "0x%X", intVal)
			if not ok then
				return Ast.NumberExpression(val)
			end
			local result = ""
			for i = 1, #hexStr do
				local c = hexStr:sub(i, i)
				if math.random() > 0.5 then
					result = result .. c:upper()
				else
					result = result .. c:lower()
				end
			end
			return Ast.NumberExpression(result)
		end

		if format == "binary" then
			if val ~= math.floor(val) or val < 0 then
				return Ast.NumberExpression(val)
			end
			local binary = ""
			local n = val
			if n == 0 then
				binary = "0"
			else
				while n > 0 do
					binary = (n % 2) .. binary
					n = math.floor(n / 2)
				end
			end
			return Ast.NumberExpression("0b" .. binary)
		end

		if format == "scientific" then
			if val == 0 then
				return Ast.NumberExpression(val)
			end
			-- Scientific notation is inherently a *float* representation in
			-- Lua 5.3: the division \`val / (10 ^ exp)\` always yields a float,
			-- and a literal such as \`1.5e1\` is parsed as a float too. On
			-- Fengari's 32-bit-int VM that float subtype would leak into the
			-- user's arithmetic (e.g. a for-loop counter becomes 15.0 instead
			-- of 15), and the host self-test would then print \`15.0\` where the
			-- original printed \`15\` -- a false "silent corruption" identical to
			-- the modulo overflow bug. The real target (Lua 5.1 / Luau) has no
			-- integer subtype, so the float is harmless there, but we keep the
			-- host faithful by only using scientific notation for genuinely
			-- fractional values. Integer values fall through to the arithmetic
			-- generators (hex/binary/normal are still available via the random
			-- format pick), so obfuscation power is barely affected (one of
			-- four representations is skipped for integers only).
			if val == math.floor(val) then
				return Ast.NumberExpression(val)
			end

			local exp = math.floor(math.log10(math.abs(val)))
			local mantissa = val / (10 ^ exp)
			return Ast.NumberExpression(string.format("%.15ge%d", mantissa, exp))
		end

		if format == "normal" then
			return Ast.NumberExpression(val)
		end
	end

	local generators = util.shuffle({ unpack(self.ExpressionGenerators) })
	for _, generator in ipairs(generators) do
		local node = generator(val, depth + 1)
		if node then
			return node
		end
	end
	return Ast.NumberExpression(val)
end

function NumbersToExpressions:apply(ast)
	if contains(self.AllowedNumberRepresentations, "binary") then
		logger:warn("Warning: Binary representation is only supported in Lua 5.2 and above!")
	end

	visitast(ast, nil, function(node, _)
		if node.kind == AstKind.NumberExpression then
			if math.random() <= self.Threshold then
				return self:CreateNumberExpression(node.value, 0)
			end
		end
	end)
end

return NumbersToExpressions

`,"prometheus.steps.ProxifyLocals":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- ProxifyLocals.lua
--
-- This Script provides a Obfuscation Step for putting all Locals into Proxy Objects

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");
local Scope = require("prometheus.scope");
local visitast = require("prometheus.visitast");
local RandomLiterals = require("prometheus.randomLiterals")

-- Lua 5.3 (including Fengari) moved unpack to table.unpack. Keep this
-- module compatible with both Lua 5.1 and Lua 5.2+ without relying on a
-- global compatibility shim that could leak into user code.
local unpack = table.unpack or unpack;

local AstKind = Ast.AstKind;

local ProxifyLocals = Step:extend();
ProxifyLocals.Description = "This Step wraps all locals into Proxy Objects";
ProxifyLocals.Name = "Proxify Locals";

ProxifyLocals.SettingsDescriptor = {
	LiteralType = {
		name = "LiteralType",
		description = "The type of the randomly generated literals",
		type = "enum",
		values = {
			"dictionary",
			"number",
			"string",
            "any",
		},
		default = "string",
	},
}

local function shallowcopy(orig)
    local orig_type = type(orig)
    local copy
    if orig_type == 'table' then
        copy = {}
        for orig_key, orig_value in pairs(orig) do
            copy[orig_key] = orig_value
        end
    else -- number, string, boolean, etc
        copy = orig
    end
    return copy
end

local function callNameGenerator(generatorFunction, ...)
	if(type(generatorFunction) == "table") then
		generatorFunction = generatorFunction.generateName;
	end
	return generatorFunction(...);
end

local MetatableExpressions = {
    {
        constructor = Ast.AddExpression,
        key = "__add";
    },
    {
        constructor = Ast.SubExpression,
        key = "__sub";
    },
    {
        constructor = Ast.IndexExpression,
        key = "__index";
    },
    {
        constructor = Ast.MulExpression,
        key = "__mul";
    },
    {
        constructor = Ast.DivExpression,
        key = "__div";
    },
    {
        constructor = Ast.PowExpression,
        key = "__pow";
    },
    {
        constructor = Ast.StrCatExpression,
        key = "__concat";
    }
}

function ProxifyLocals:init(_) end

local function generateLocalMetatableInfo(pipeline)
    local usedOps = {};
    local info = {};
    for i, v in ipairs({"setValue", "getValue", "index"}) do
        local rop;
        repeat
            rop = MetatableExpressions[math.random(#MetatableExpressions)];
        until not usedOps[rop];
        usedOps[rop] = true;
        info[v] = rop;
    end

    info.valueName = callNameGenerator(pipeline.namegenerator, math.random(1, 4096));

    return info;
end

function ProxifyLocals:CreateAssignmentExpression(info, expr, parentScope)
    local metatableVals = {};

    -- Setvalue Entry
    local setValueFunctionScope = Scope:new(parentScope);
    local setValueSelf = setValueFunctionScope:addVariable();
    local setValueArg = setValueFunctionScope:addVariable();
    local setvalueFunctionLiteral = Ast.FunctionLiteralExpression(
        {
            Ast.VariableExpression(setValueFunctionScope, setValueSelf), -- Argument 1
            Ast.VariableExpression(setValueFunctionScope, setValueArg), -- Argument 2
        },
        Ast.Block({ -- Create Function Body
            Ast.AssignmentStatement({
                Ast.AssignmentIndexing(Ast.VariableExpression(setValueFunctionScope, setValueSelf), Ast.StringExpression(info.valueName));
            }, {
                Ast.VariableExpression(setValueFunctionScope, setValueArg)
            })
        }, setValueFunctionScope)
    );
    table.insert(metatableVals, Ast.KeyedTableEntry(Ast.StringExpression(info.setValue.key), setvalueFunctionLiteral));

    -- Getvalue Entry
    local getValueFunctionScope = Scope:new(parentScope);
    local getValueSelf = getValueFunctionScope:addVariable();
    local getValueArg = getValueFunctionScope:addVariable();
    local getValueIdxExpr;
    if(info.getValue.key == "__index" or info.setValue.key == "__index") then
        getValueIdxExpr = Ast.FunctionCallExpression(Ast.VariableExpression(getValueFunctionScope:resolveGlobal("rawget")), {
            Ast.VariableExpression(getValueFunctionScope, getValueSelf),
            Ast.StringExpression(info.valueName),
        });
    else
        getValueIdxExpr = Ast.IndexExpression(Ast.VariableExpression(getValueFunctionScope, getValueSelf), Ast.StringExpression(info.valueName));
    end
    local getvalueFunctionLiteral = Ast.FunctionLiteralExpression(
        {
            Ast.VariableExpression(getValueFunctionScope, getValueSelf), -- Argument 1
            Ast.VariableExpression(getValueFunctionScope, getValueArg), -- Argument 2
        },
        Ast.Block({ -- Create Function Body
            Ast.ReturnStatement({
                getValueIdxExpr;
            });
        }, getValueFunctionScope)
    );
    table.insert(metatableVals, Ast.KeyedTableEntry(Ast.StringExpression(info.getValue.key), getvalueFunctionLiteral));

    parentScope:addReferenceToHigherScope(self.setMetatableVarScope, self.setMetatableVarId);
    return Ast.FunctionCallExpression(
        Ast.VariableExpression(self.setMetatableVarScope, self.setMetatableVarId),
        {
            Ast.TableConstructorExpression({
                Ast.KeyedTableEntry(Ast.StringExpression(info.valueName), expr)
            }),
            Ast.TableConstructorExpression(metatableVals)
        }
    );
end

function ProxifyLocals:apply(ast, pipeline)
    local localMetatableInfos = {};
    local function getLocalMetatableInfo(scope, id)
        -- Global Variables should not be transformed
        if(scope.isGlobal) then return nil end;

        localMetatableInfos[scope] = localMetatableInfos[scope] or {};
        if localMetatableInfos[scope][id] then
            -- If locked, return no Metatable
            if localMetatableInfos[scope][id].locked then
                return nil
            end
            return localMetatableInfos[scope][id];
        end
        local localMetatableInfo = generateLocalMetatableInfo(pipeline);
        localMetatableInfos[scope][id] = localMetatableInfo;
        return localMetatableInfo;
    end

    local function disableMetatableInfo(scope, id)
        -- Global Variables should not be transformed
        if(scope.isGlobal) then return nil end;

        localMetatableInfos[scope] = localMetatableInfos[scope] or {};
        localMetatableInfos[scope][id] = {locked = true}
    end

    -- Create Setmetatable Variable
    self.setMetatableVarScope = ast.body.scope;
    self.setMetatableVarId = ast.body.scope:addVariable();

    -- Create Empty Function Variable
    self.emptyFunctionScope = ast.body.scope;
    self.emptyFunctionId = ast.body.scope:addVariable();
    self.emptyFunctionUsed = false;

    -- Add Empty Function Declaration
    table.insert(ast.body.statements, 1, Ast.LocalVariableDeclaration(self.emptyFunctionScope, {self.emptyFunctionId}, {
        Ast.FunctionLiteralExpression({}, Ast.Block({}, Scope:new(ast.body.scope)));
    }));

    -- Pre-scan: lock any local that the ORIGINAL script itself uses as a metatable, by
    -- literally assigning one of the reserved metamethod names (__add, __sub, __index,
    -- __mul, __div, __pow, __concat) as a field on it - e.g. the extremely common Lua OOP
    -- idiom \`Class.__index = Class\`. ProxifyLocals repurposes exactly these same field
    -- names on the proxy object it builds for each local (to hide get/set access behind
    -- real Lua operators). If the local were proxified AND the original script also writes
    -- one of these fields on it directly, the two uses collide on the same key of the same
    -- table, silently corrupting whichever the proxy needed for its own bookkeeping (this
    -- previously surfaced as sporadic "attempt to index a nil value" crashes, since which
    -- key collides depends on the random metamethod assignment, i.e. Seed). Locals used this
    -- way must be excluded from proxification entirely; there is no way to safely rewrite
    -- them without either technique's key going missing.
    local reservedMetamethodKeys = {};
    for _, entry in ipairs(MetatableExpressions) do
        reservedMetamethodKeys[entry.key] = true;
    end
    visitast(ast, function(node, data)
        if(node.kind == AstKind.AssignmentStatement) then
            for _, lhs in ipairs(node.lhs) do
                if(lhs.kind == AstKind.AssignmentIndexing
                    and lhs.base.kind == AstKind.VariableExpression
                    and lhs.index.kind == AstKind.StringExpression
                    and reservedMetamethodKeys[lhs.index.value]) then
                    disableMetatableInfo(lhs.base.scope, lhs.base.id);
                end
            end
        end
    end)


    visitast(ast, function(node, data)
        -- Lock for loop variables
        if(node.kind == AstKind.ForStatement) then
            disableMetatableInfo(node.scope, node.id)
        end
        if(node.kind == AstKind.ForInStatement) then
            for i, id in ipairs(node.ids) do
                disableMetatableInfo(node.scope, id);
            end
        end

        -- Lock Function Arguments
        if(node.kind == AstKind.FunctionDeclaration or node.kind == AstKind.LocalFunctionDeclaration or node.kind == AstKind.FunctionLiteralExpression) then
            for i, expr in ipairs(node.args) do
                if expr.kind == AstKind.VariableExpression then
                    disableMetatableInfo(expr.scope, expr.id);
                end
            end
        end

        -- Assignment Statements may be Obfuscated Differently
        if(node.kind == AstKind.AssignmentStatement) then
            if(#node.lhs == 1 and node.lhs[1].kind == AstKind.AssignmentVariable) then
                local variable = node.lhs[1];
                local localMetatableInfo = getLocalMetatableInfo(variable.scope, variable.id);
                if localMetatableInfo then
                    local args = shallowcopy(node.rhs);
                    local vexp = Ast.VariableExpression(variable.scope, variable.id);
                    vexp.__ignoreProxifyLocals = true;
                    args[1] = localMetatableInfo.setValue.constructor(vexp, args[1]);
                    self.emptyFunctionUsed = true;
                    data.scope:addReferenceToHigherScope(self.emptyFunctionScope, self.emptyFunctionId);
                    return Ast.FunctionCallStatement(Ast.VariableExpression(self.emptyFunctionScope, self.emptyFunctionId), args);
                end
            end
        end
    end, function(node, data)
        -- Local Variable Declaration
        if(node.kind == AstKind.LocalVariableDeclaration) then
            -- Figure out which (if any) of the declared ids need to be proxified.
            local infos = {};
            local anyProxified = false;
            for i, id in ipairs(node.ids) do
                infos[i] = getLocalMetatableInfo(node.scope, id);
                if infos[i] then
                    anyProxified = true;
                end
            end

            if anyProxified then
                -- IMPORTANT: Lua's multi-assignment semantics allow the number of
                -- expressions to differ from the number of ids. When there are
                -- fewer expressions than ids, the *last* expression (if it is a
                -- function call or vararg) expands to supply values for every
                -- remaining id. Rewriting \`node.expressions[i]\` per-id (the naive
                -- approach) silently discards those extra values whenever
                -- #expressions < #ids, e.g. \`local a, b, c = someCall()\` would end
                -- up with \`b\` and \`c\` set to nil instead of the 2nd/3rd results.
                --
                -- To stay correct in every case, we first evaluate the original,
                -- untouched expression list into plain temporary locals - which
                -- lets the Lua runtime itself apply the usual truncation/expansion
                -- rules exactly as it would without this step - and only then wrap
                -- each temporary's value into its proxy.
                local declScope = node.scope;
                local tempIds = {};
                for i = 1, #node.ids do
                    tempIds[i] = declScope:addVariable();
                end
                local statements = {
                    Ast.LocalVariableDeclaration(declScope, tempIds, node.expressions);
                };
                for i, id in ipairs(node.ids) do
                    local tempExpr = Ast.VariableExpression(declScope, tempIds[i]);
                    local localMetatableInfo = infos[i];
                    if localMetatableInfo then
                        local newExpr = self:CreateAssignmentExpression(localMetatableInfo, tempExpr, declScope);
                        table.insert(statements, Ast.LocalVariableDeclaration(declScope, {id}, {newExpr}));
                    else
                        table.insert(statements, Ast.LocalVariableDeclaration(declScope, {id}, {tempExpr}));
                    end
                end
                return unpack(statements);
            end
        end

        -- Variable Expression
        if(node.kind == AstKind.VariableExpression and not node.__ignoreProxifyLocals) then
            local localMetatableInfo = getLocalMetatableInfo(node.scope, node.id);
            -- Apply Only to Some Variables if Threshold is non 1
            if localMetatableInfo then
                local literal;
                if self.LiteralType == "dictionary" then
                    literal = RandomLiterals.Dictionary();
                elseif self.LiteralType == "number" then
                    literal = RandomLiterals.Number();
                elseif self.LiteralType == "string" then
                    literal = RandomLiterals.String(pipeline);
                else
                    literal = RandomLiterals.Any(pipeline);
                end
                return localMetatableInfo.getValue.constructor(node, literal);
            end
        end

        -- Assignment Variable for Assignment Statement
        if(node.kind == AstKind.AssignmentVariable) then
            local localMetatableInfo = getLocalMetatableInfo(node.scope, node.id);
            -- Apply Only to Some Variables if Threshold is non 1
            if localMetatableInfo then
                -- \`node\` here is an AssignmentVariable, which is only ever valid in LHS
                -- position (it represents "assign into this slot", not a value) - it is not a
                -- compilable expression. Passing it straight through as the \`base\` of
                -- AssignmentIndexing (as done previously) compiles fine for single-target
                -- assignments only because that case is intercepted earlier by the
                -- AssignmentStatement previsit above and never reaches this branch; any
                -- multi-target assignment to a proxified local (e.g. \`a, b = b, a\`) hits this
                -- code directly and fails to compile ("AssignmentVariable is not an compliable
                -- expression!"). Build a proper VariableExpression referencing the same
                -- scope/id instead, matching the pattern already used a few lines above.
                return Ast.AssignmentIndexing(Ast.VariableExpression(node.scope, node.id), Ast.StringExpression(localMetatableInfo.valueName));
            end
        end

        -- Local Function Declaration
        if(node.kind == AstKind.LocalFunctionDeclaration) then
            local localMetatableInfo = getLocalMetatableInfo(node.scope, node.id);
            -- Apply Only to Some Variables if Threshold is non 1
            if localMetatableInfo then
                local funcLiteral = Ast.FunctionLiteralExpression(node.args, node.body);
                local newExpr = self:CreateAssignmentExpression(localMetatableInfo, funcLiteral, node.scope);
                -- \`local function h() ... h() ... end\` is sugar for \`local h; h = function()
                -- ... h() ... end\`, which pre-declares \`h\` so the function body can call
                -- itself recursively. Collapsing this into a single \`local h = <newExpr>\`
                -- (as previously done) breaks that self-reference: at the point the function
                -- literal is evaluated, the new local \`h\` is not yet in scope, so any read of
                -- \`h\` inside the body resolves to an outer/global \`h\` (typically nil) instead
                -- of the function itself. We predeclare \`h\` first, then assign - matching the
                -- original desugaring - so recursive calls keep working.
                return
                    Ast.LocalVariableDeclaration(node.scope, {node.id}, {}),
                    Ast.AssignmentStatement({ Ast.AssignmentVariable(node.scope, node.id) }, { newExpr });
            end
        end

        -- Function Declaration
        if(node.kind == AstKind.FunctionDeclaration) then
            local localMetatableInfo = getLocalMetatableInfo(node.scope, node.id);
            if(localMetatableInfo) then
                table.insert(node.indices, 1, localMetatableInfo.valueName);
            end
        end
    end)

    -- Add Setmetatable Variable Declaration
    table.insert(ast.body.statements, 1, Ast.LocalVariableDeclaration(self.setMetatableVarScope, {self.setMetatableVarId}, {
        Ast.VariableExpression(self.setMetatableVarScope:resolveGlobal("setmetatable"))
    }));
end

return ProxifyLocals;
`,"prometheus.steps.SplitStrings":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- SplitStrings.lua
--
-- This Script provides a Simple Obfuscation Step for splitting Strings

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");
local visitAst = require("prometheus.visitast");
local Parser = require("prometheus.parser");
local util = require("prometheus.util");
local enums = require("prometheus.enums")

local LuaVersion = enums.LuaVersion;

local SplitStrings = Step:extend();
SplitStrings.Description = "This Step splits Strings to a specific or random length";
SplitStrings.Name = "Split Strings";

SplitStrings.SettingsDescriptor = {
	Threshold = {
		name = "Threshold",
		description = "The relative amount of nodes that will be affected",
		type = "number",
		default = 1,
		min = 0,
		max = 1,
	},
	MinLength = {
		name = "MinLength",
		description = "The minimal length for the chunks in that the Strings are splitted",
		type = "number",
		default = 5,
		min = 1,
		max = nil,
	},
	MaxLength = {
		name = "MaxLength",
		description = "The maximal length for the chunks in that the Strings are splitted",
		type = "number",
		default = 5,
		min = 1,
		max = nil,
	},
	ConcatenationType = {
		name = "ConcatenationType",
		description = "The Functions used for Concatenation. Note that when using custom, the String Array will also be Shuffled",
		type = "enum",
		values = {
			"strcat",
			"table",
			"custom",
		},
		default = "custom",
	},
	CustomFunctionType = {
		name = "CustomFunctionType",
		description = "The Type of Function code injection This Option only applies when custom Concatenation is selected.\\
Note that when choosing inline, the code size may increase significantly!",
		type = "enum",
		values = {
			"global",
			"local",
			"inline",
		},
		default = "global",
	},
	CustomLocalFunctionsCount = {
		name = "CustomLocalFunctionsCount",
		description = "The number of local functions per scope. This option only applies when CustomFunctionType = local",
		type = "number",
		default = 2,
		min = 1,
	}
}

function SplitStrings:init(settings) end

local function generateTableConcatNode(chunks, data)
	local chunkNodes = {};
	for i, chunk in ipairs(chunks) do
		table.insert(chunkNodes, Ast.TableEntry(Ast.StringExpression(chunk)));
	end
	local tb = Ast.TableConstructorExpression(chunkNodes);
	data.scope:addReferenceToHigherScope(data.tableConcatScope, data.tableConcatId);
	return Ast.FunctionCallExpression(Ast.VariableExpression(data.tableConcatScope, data.tableConcatId), {tb});
end

local function generateStrCatNode(chunks)
	-- Put Together Expression for Concatenating String
	local generatedNode = nil;
	for i, chunk in ipairs(chunks) do
		if generatedNode then
			generatedNode = Ast.StrCatExpression(generatedNode, Ast.StringExpression(chunk));
		else
			generatedNode = Ast.StringExpression(chunk);
		end
	end
	return generatedNode
end

local customVariants = 2;
local custom1Code = [=[
function custom(table)
    local stringTable, str = table[#table], "";
    for i=1,#stringTable, 1 do
        str = str .. stringTable[table[i]];
	end
	return str
end
]=];

local custom2Code = [=[
function custom(tb)
	local str = "";
	for i=1, #tb / 2, 1 do
		str = str .. tb[#tb / 2 + tb[i]];
	end
	return str
end
]=];

local function generateCustomNodeArgs(chunks, data, variant)
	local shuffled = {};
	local shuffledIndices = {};
	for i = 1, #chunks, 1 do
		shuffledIndices[i] = i;
	end
	util.shuffle(shuffledIndices);

	for i, v in ipairs(shuffledIndices) do
		shuffled[v] = chunks[i];
	end

	-- Custom Function Type 1
	if variant == 1 then
		local args = {};
		local tbNodes = {};

		for i, v in ipairs(shuffledIndices) do
			table.insert(args, Ast.TableEntry(Ast.NumberExpression(v)));
		end

		for i, chunk in ipairs(shuffled) do
			table.insert(tbNodes, Ast.TableEntry(Ast.StringExpression(chunk)));
		end

		local tb = Ast.TableConstructorExpression(tbNodes);

		table.insert(args, Ast.TableEntry(tb));
		return {Ast.TableConstructorExpression(args)};

	-- Custom Function Type 2
	else

		local args = {};
		for i, v in ipairs(shuffledIndices) do
			table.insert(args, Ast.TableEntry(Ast.NumberExpression(v)));
		end
		for i, chunk in ipairs(shuffled) do
			table.insert(args, Ast.TableEntry(Ast.StringExpression(chunk)));
		end
		return {Ast.TableConstructorExpression(args)};
	end

end

local function generateCustomFunctionLiteral(parentScope, variant)
	local parser = Parser:new({
		LuaVersion = LuaVersion.Lua51;
	});

	-- Custom Function Type 1
	if variant == 1 then
		local funcDeclNode = parser:parse(custom1Code).body.statements[1];
		local funcBody = funcDeclNode.body;
		local funcArgs = funcDeclNode.args;
		funcBody.scope:setParent(parentScope);
		return Ast.FunctionLiteralExpression(funcArgs, funcBody);

		-- Custom Function Type 2
	else
		local funcDeclNode = parser:parse(custom2Code).body.statements[1];
		local funcBody = funcDeclNode.body;
		local funcArgs = funcDeclNode.args;
		funcBody.scope:setParent(parentScope);
		return Ast.FunctionLiteralExpression(funcArgs, funcBody);
	end
end

local function generateGlobalCustomFunctionDeclaration(ast, data)
	local parser = Parser:new({
		LuaVersion = LuaVersion.Lua51;
	});

	-- Custom Function Type 1
	if data.customFunctionVariant == 1 then
		local astScope = ast.body.scope;
		local funcDeclNode = parser:parse(custom1Code).body.statements[1];
		local funcBody = funcDeclNode.body;
		local funcArgs = funcDeclNode.args;
		funcBody.scope:setParent(astScope);
		return Ast.LocalVariableDeclaration(astScope, {data.customFuncId},
		{Ast.FunctionLiteralExpression(funcArgs, funcBody)});
	-- Custom Function Type 2
	else
		local astScope = ast.body.scope;
		local funcDeclNode = parser:parse(custom2Code).body.statements[1];
		local funcBody = funcDeclNode.body;
		local funcArgs = funcDeclNode.args;
		funcBody.scope:setParent(astScope);
		return Ast.LocalVariableDeclaration(data.customFuncScope, {data.customFuncId},
		{Ast.FunctionLiteralExpression(funcArgs, funcBody)});
	end
end

function SplitStrings:variant()
	return math.random(1, customVariants);
end

function SplitStrings:apply(ast, pipeline)
	local data = {};


	if(self.ConcatenationType == "table") then
		local scope = ast.body.scope;
		local id = scope:addVariable();
		data.tableConcatScope = scope;
		data.tableConcatId = id;
	elseif(self.ConcatenationType == "custom") then
		data.customFunctionType = self.CustomFunctionType;
		if data.customFunctionType == "global" then
			local scope = ast.body.scope;
			local id = scope:addVariable();
			data.customFuncScope = scope;
			data.customFuncId = id;
			data.customFunctionVariant = self:variant();
		end
	end


	local customLocalFunctionsCount = self.CustomLocalFunctionsCount;
	local self2 = self;

	visitAst(ast, function(node, data)
		-- Previsit Function

		-- Create Local Function declarations
		if(self.ConcatenationType == "custom" and data.customFunctionType == "local" and node.kind == Ast.AstKind.Block and node.isFunctionBlock) then
			data.functionData.localFunctions = {};
			for i = 1, customLocalFunctionsCount, 1 do
				local scope = data.scope;
				local id = scope:addVariable();
				local variant = self:variant();
				table.insert(data.functionData.localFunctions, {
					scope = scope,
					id = id,
					variant = variant,
					used = false,
				});
			end
		end

	end, function(node, data)
		-- PostVisit Function

		-- Create actual function literals for local customFunctionType
		if(self.ConcatenationType == "custom" and data.customFunctionType == "local" and node.kind == Ast.AstKind.Block and node.isFunctionBlock) then
			for i, func in ipairs(data.functionData.localFunctions) do
				if func.used then
					local literal = generateCustomFunctionLiteral(func.scope, func.variant);
					table.insert(node.statements, 1, Ast.LocalVariableDeclaration(func.scope, {func.id}, {literal}));
				end
			end
		end


		-- Apply Only to String nodes
		if(node.kind == Ast.AstKind.StringExpression) then
			local str = node.value;
			local chunks = {};
			local i = 1;

			-- Split String into Parts of length between MinLength and MaxLength
			while i <= string.len(str) do
				local len = math.random(self.MinLength, self.MaxLength);
				table.insert(chunks, string.sub(str, i, i + len - 1));
				i = i + len;
			end

			if(#chunks > 1) then
				if math.random() < self.Threshold then
					if self.ConcatenationType == "strcat" then
						node = generateStrCatNode(chunks);
					elseif self.ConcatenationType == "table" then
						node = generateTableConcatNode(chunks, data);
					elseif self.ConcatenationType == "custom" then
						if self.CustomFunctionType == "global" then
							local args = generateCustomNodeArgs(chunks, data, data.customFunctionVariant);
							-- Add Reference for Variable Renaming
							data.scope:addReferenceToHigherScope(data.customFuncScope, data.customFuncId);
							node = Ast.FunctionCallExpression(Ast.VariableExpression(data.customFuncScope, data.customFuncId), args);
						elseif self.CustomFunctionType == "local" then
							local lfuncs = data.functionData.localFunctions;
							local idx = math.random(1, #lfuncs);
							local func = lfuncs[idx];
							local args = generateCustomNodeArgs(chunks, data, func.variant);
							func.used = true;
							-- Add Reference for Variable Renaming
							data.scope:addReferenceToHigherScope(func.scope, func.id);
							node = Ast.FunctionCallExpression(Ast.VariableExpression(func.scope, func.id), args);
						elseif self.CustomFunctionType == "inline" then
							local variant = self:variant();
							local args = generateCustomNodeArgs(chunks, data, variant);
							local literal = generateCustomFunctionLiteral(data.scope, variant);
							node = Ast.FunctionCallExpression(literal, args);
						end
					end
				end
			end

			return node, true;
		end
	end, data)


	if(self.ConcatenationType == "table") then
		local globalScope = data.globalScope;
		local tableScope, tableId = globalScope:resolve("table")
		ast.body.scope:addReferenceToHigherScope(globalScope, tableId);
		table.insert(ast.body.statements, 1, Ast.LocalVariableDeclaration(data.tableConcatScope, {data.tableConcatId},
		{Ast.IndexExpression(Ast.VariableExpression(tableScope, tableId), Ast.StringExpression("concat"))}));
	elseif(self.ConcatenationType == "custom" and self.CustomFunctionType == "global") then
		table.insert(ast.body.statements, 1, generateGlobalCustomFunctionDeclaration(ast, data));
	end
end

return SplitStrings;
`,"prometheus.steps.Vmify":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- Vmify.lua
--
-- This Script provides a Complex Obfuscation Step that will compile the entire Script to  a fully custom bytecode that does not share it's instructions
-- with lua, making it much harder to crack than other lua obfuscators

local Step = require("prometheus.step");
local Compiler = require("prometheus.compiler.compiler");

local Vmify = Step:extend();
Vmify.Description = "This Step will Compile your script into a fully-custom (not a half custom like other lua obfuscators) Bytecode Format and emit a vm for executing it.";
Vmify.Name = "Vmify";

Vmify.SettingsDescriptor = {}

function Vmify:init(_) end

function Vmify:apply(ast)
    -- Create Compiler
	local compiler = Compiler:new();

    -- Compile the Script into a bytecode vm
    return compiler:compile(ast);
end

return Vmify;
`,"prometheus.steps.Watermark":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- Watermark.lua
--
-- This Script provides a Step that will add a watermark to the script

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");
local Scope = require("prometheus.scope");

local Watermark = Step:extend();
Watermark.Description = "This Step will add a watermark to the script";
Watermark.Name = "Watermark";

Watermark.SettingsDescriptor = {
  Content = {
    name = "Content",
    description = "The Content of the Watermark",
    type = "string",
    default = "This Script is Part of the Prometheus Obfuscator by levno-710",
  },
  CustomVariable = {
    name = "Custom Variable",
    description = "The Variable that will be used for the Watermark",
    type = "string",
    default = "_WATERMARK",
  }
}

function Watermark:init(settings)
	
end

function Watermark:apply(ast)
  local body = ast.body;
  if string.len(self.Content) > 0 then
    local scope, variable = ast.globalScope:resolve(self.CustomVariable);
    local watermark = Ast.AssignmentVariable(ast.globalScope, variable);

    local functionScope = Scope:new(body.scope);
    functionScope:addReferenceToHigherScope(ast.globalScope, variable);
    
    local arg = functionScope:addVariable();
    local statement = Ast.PassSelfFunctionCallStatement(Ast.StringExpression(self.Content), "gsub", {
      Ast.StringExpression(".+"),
      Ast.FunctionLiteralExpression({
        Ast.VariableExpression(functionScope, arg)
      }, Ast.Block({
        Ast.AssignmentStatement({
          watermark
        }, {
          Ast.VariableExpression(functionScope, arg)
        })
      }, functionScope))
    });

    table.insert(ast.body.statements, 1, statement)
  end
end

return Watermark;
`,"prometheus.steps.WatermarkCheck":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- WatermarkCheck.lua
--
-- This Script provides a Step that will add a watermark to the script

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");
local Scope = require("prometheus.scope");
local Watermark = require("prometheus.steps.Watermark");

local WatermarkCheck = Step:extend();
WatermarkCheck.Description = "This Step will add a watermark to the script";
WatermarkCheck.Name = "WatermarkCheck";

WatermarkCheck.SettingsDescriptor = {
  Content = {
    name = "Content",
    description = "The Content of the WatermarkCheck",
    type = "string",
    default = "This Script is Part of the Prometheus Obfuscator by levno-710",
  },
}

local function callNameGenerator(generatorFunction, ...)
	if(type(generatorFunction) == "table") then
		generatorFunction = generatorFunction.generateName;
	end
	return generatorFunction(...);
end

function WatermarkCheck:init(_) end

function WatermarkCheck:apply(ast, pipeline)
  self.CustomVariable = "_" .. callNameGenerator(pipeline.namegenerator, math.random(10000000000, 100000000000));
  pipeline:addStep(Watermark:new(self));

  local body = ast.body;
  local watermarkExpression = Ast.StringExpression(self.Content);
  local scope, variable = ast.globalScope:resolve(self.CustomVariable);
  local watermark = Ast.VariableExpression(ast.globalScope, variable);
  local notEqualsExpression = Ast.NotEqualsExpression(watermark, watermarkExpression);
  local ifBody = Ast.Block({Ast.ReturnStatement({})}, Scope:new(ast.body.scope));

  table.insert(body.statements, 1, Ast.IfStatement(notEqualsExpression, ifBody, {}, nil));
end

return WatermarkCheck;
`,"prometheus.steps.WrapInFunction":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- WrapInFunction.lua
--
-- This Script provides a Simple Obfuscation Step that wraps the entire Script into a function

local Step = require("prometheus.step");
local Ast = require("prometheus.ast");
local Scope = require("prometheus.scope");

local WrapInFunction = Step:extend();
WrapInFunction.Description = "This Step Wraps the Entire Script into a Function";
WrapInFunction.Name = "Wrap in Function";

WrapInFunction.SettingsDescriptor = {
	Iterations = {
		name = "Iterations",
		description = "The Number Of Iterations",
		type = "number",
		default = 1,
		min = 1,
		max = nil,
	}
}

function WrapInFunction:init(_) end

function WrapInFunction:apply(ast)
	for i = 1, self.Iterations, 1 do
		local body = ast.body;

		local scope = Scope:new(ast.globalScope);
		body.scope:setParent(scope);

		ast.body = Ast.Block({
			Ast.ReturnStatement({
				Ast.FunctionCallExpression(Ast.FunctionLiteralExpression({Ast.VarargExpression()}, body), {Ast.VarargExpression()})
			});
		}, scope);
	end
end

return WrapInFunction;
`,"prometheus.steps":`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- steps.lua
--
-- This Script provides a collection of all available obfuscation Steps for Prometheus.

return {
	AddVararg = require("prometheus.steps.AddVararg");
	AntiTamper = require("prometheus.steps.AntiTamper");
	ConstantArray = require("prometheus.steps.ConstantArray");
	EncryptStrings = require("prometheus.steps.EncryptStrings");
	NumbersToExpressions = require("prometheus.steps.NumbersToExpressions");
	ProxifyLocals = require("prometheus.steps.ProxifyLocals");
	SplitStrings = require("prometheus.steps.SplitStrings");
	Vmify = require("prometheus.steps.Vmify");
	Watermark = require("prometheus.steps.Watermark");
	WatermarkCheck = require("prometheus.steps.WatermarkCheck");
	WrapInFunction = require("prometheus.steps.WrapInFunction");
}
`,"prometheus.tokenizer":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- tokenizer.lua
-- Overview:
-- This Script provides a class for lexical Analysis of lua code.
-- This Tokenizer is Capable of tokenizing LuaU and Lua5.1
local Enums = require("prometheus.enums");
local util = require("prometheus.util");
local logger = require("logger");
local config = require("config");

local LuaVersion = Enums.LuaVersion;
local lookupify = util.lookupify;
local unlookupify = util.unlookupify;
local escape = util.escape;
local chararray = util.chararray;
local keys = util.keys;
local Tokenizer = {};

Tokenizer.EOF_CHAR = "<EOF>";
Tokenizer.WHITESPACE_CHARS = lookupify{
	" ", "\\t", "\\n", "\\r",
}

Tokenizer.ANNOTATION_CHARS = lookupify(chararray("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_"))
Tokenizer.ANNOTATION_START_CHARS = lookupify(chararray("!@"))

Tokenizer.Conventions = Enums.Conventions;

Tokenizer.TokenKind = {
	Eof = "Eof",
	Keyword = "Keyword",
	Symbol = "Symbol",
	Ident = "Identifier",
	Number = "Number",
	String = "String",
}

Tokenizer.EOF_TOKEN = {
	kind = Tokenizer.TokenKind.Eof,
	value = "<EOF>",
	startPos = -1,
	endPos = -1,
	source = "<EOF>",
}

local function token(self, startPos, kind, value)
	local line, linePos = self:getPosition(self.index);
	local annotations = self.annotations
	self.annotations = {};
	return {
		kind = kind,
		value = value,
		startPos = startPos,
		endPos = self.index,
		source = self.source:sub(startPos + 1, self.index),
		line = line,
		linePos = linePos,
		annotations = annotations,
	}
end

local function generateError(self, message)
	local line, linePos = self:getPosition(self.index);
	return "Lexing Error at Position " .. tostring(line) .. ":" .. tostring(linePos) .. ", " .. message;
end

local function generateWarning(token, message)
	return "Warning at Position " .. tostring(token.line) .. ":" .. tostring(token.linePos) .. ", " .. message;
end

function Tokenizer:getPosition(i)
	local column = self.columnMap[i]

	if not column then --// \`i\` is bigger than self.length, this shouldn't happen, but it did. (Theres probably some error in the tokenizer, cant find it.)
		column = self.columnMap[#self.columnMap]
	end

	return column.id, column.charMap[i]
end

--// Prepare columnMap for getPosition
function Tokenizer:prepareGetPosition()
	local columnMap, column = {}, { charMap = {}, id = 1, length = 0 }

	for index = 1, self.length do
		local character = string.sub(self.source, index, index) -- NOTE_1: this could use table.clone to reduce amount of NEWTABLE (if that causes any performance issues)

		local columnLength = column.length + 1
		column.length = columnLength
		column.charMap[index] = columnLength

		if character == "\\n" then
			column = { charMap = {}, id = column.id + 1, length = 0 } -- NOTE_1
		end

		columnMap[index] = column
	end

	self.columnMap = columnMap
end

-- Constructor for Tokenizer
function Tokenizer:new(settings)
	local luaVersion = (settings and (settings.luaVersion or settings.LuaVersion)) or LuaVersion.LuaU;
	local conventions = Tokenizer.Conventions[luaVersion];

	if(conventions == nil) then
		logger:error("The Lua Version \\"" .. luaVersion .. "\\" is not recognized by the Tokenizer! Please use one of the following: \\"" .. table.concat(keys(Tokenizer.Conventions), "\\",\\"") .. "\\"");
	end

	local tokenizer = {
		index = 0, -- Index where the current char is read
		length = 0,
		source = "", -- Source to Tokenize
		luaVersion = luaVersion, -- LuaVersion to be used while Tokenizing
		conventions = conventions;

		NumberChars = conventions.NumberChars,
		NumberCharsLookup = lookupify(conventions.NumberChars),
		Keywords = conventions.Keywords,
		KeywordsLookup = lookupify(conventions.Keywords),
		BinaryNumberChars = conventions.BinaryNumberChars,
		BinaryNumberCharsLookup = lookupify(conventions.BinaryNumberChars);
		BinaryNums = conventions.BinaryNums,
		HexadecimalNums = conventions.HexadecimalNums,
		HexNumberChars = conventions.HexNumberChars,
		HexNumberCharsLookup = lookupify(conventions.HexNumberChars),
		DecimalExponent = conventions.DecimalExponent,
		DecimalSeperators = conventions.DecimalSeperators,
		IdentChars = conventions.IdentChars,
		IdentCharsLookup = lookupify(conventions.IdentChars),

		EscapeSequences = conventions.EscapeSequences,
		NumericalEscapes = conventions.NumericalEscapes,
		EscapeZIgnoreNextWhitespace = conventions.EscapeZIgnoreNextWhitespace,
		HexEscapes = conventions.HexEscapes,
		UnicodeEscapes = conventions.UnicodeEscapes,

		SymbolChars = conventions.SymbolChars,
		SymbolCharsLookup = lookupify(conventions.SymbolChars),
		MaxSymbolLength = conventions.MaxSymbolLength,
		Symbols = conventions.Symbols,
		SymbolsLookup = lookupify(conventions.Symbols),

		StringStartLookup = lookupify({"\\"", "\\'"}),
		annotations = {},
	};

	setmetatable(tokenizer, self);
	self.__index = self;

	return tokenizer;
end

-- Reset State of Tokenizer to Tokenize another File
function Tokenizer:reset()
	self.index = 0;
	self.length = 0;
	self.source = "";
	self.annotations = {};
	self.columnMap = {};
end

-- Append String to this Tokenizer
function Tokenizer:append(code)
	self.source = self.source .. code
	self.length = self.length + code:len();
	self:prepareGetPosition();
end

-- Function to peek the n'th char in the source of the tokenizer
local function peek(self, n)
	n = n or 0;
	local i = self.index + n + 1;
	if i > self.length then
		return Tokenizer.EOF_CHAR
	end
	return self.source:sub(i, i);
end

-- Function to get the next char in the source
local function get(self)
	local i = self.index + 1;
	if i > self.length then
		logger:error(generateError(self, "Unexpected end of Input"));
	end
	self.index = self.index + 1;
	return self.source:sub(i, i);
end

-- The same as get except it throws an Error if the char is not contained in charOrLookup
local function expect(self, charOrLookup)
	if(type(charOrLookup) == "string") then
		charOrLookup = {[charOrLookup] = true};
	end

	local char = peek(self);
	if charOrLookup[char] ~= true then
		local etb = unlookupify(charOrLookup);
		for i, v in ipairs(etb) do
			etb[i] = escape(v);
		end
		local errorMessage = "Unexpected char \\"" .. escape(char) .. "\\"! Expected one of \\"" .. table.concat(etb, "\\",\\"") .. "\\"";
		logger:error(generateError(self, errorMessage));
	end

	self.index = self.index + 1;
	return char;
end

-- Returns wether the n'th char is in the lookup
local function is(self, charOrLookup, n)
	local char = peek(self, n);
	if(type(charOrLookup) == "string") then
		return char == charOrLookup;
	end
	return charOrLookup[char];
end

function Tokenizer:parseAnnotation()
	if is(self, Tokenizer.ANNOTATION_START_CHARS) then
		self.index = self.index + 1;
		local source, length = {}, 0;
		while(is(self, Tokenizer.ANNOTATION_CHARS)) do
			source[length + 1] = get(self)
			length = #source
		end
		if length > 0 then
			self.annotations[string.lower(table.concat(source))] = true;
		end
		return nil;
	end
	return get(self);
end

-- skip one or 0 Comments and return wether one was found
function Tokenizer:skipComment()
	if(is(self, "-", 0) and is(self, "-", 1)) then
		self.index = self.index + 2;
		if(is(self, "[")) then
			self.index = self.index + 1;
			local eqCount = 0;
			while(is(self, "=")) do
				self.index = self.index + 1;
				eqCount = eqCount + 1;
			end
			if(is(self, "[")) then
				-- Multiline Comment
				-- Get all Chars to Closing bracket but also consider that the count of equal signs must be the same
				while true do
					if(self:parseAnnotation() == ']') then
						local eqCount2 = 0;
						while(is(self, "=")) do
							self.index = self.index + 1;
							eqCount2 = eqCount2 + 1;
						end
						if(is(self, "]")) then
							if(eqCount2 == eqCount) then
								self.index = self.index + 1;
								return true
							end
						end
					end
				end
			end
		end
		-- Single Line Comment
		-- Get all Chars to next Newline
		while(self.index < self.length and self:parseAnnotation() ~= "\\n") do end
		return true;
	end
	return false;
end

-- skip All Whitespace and Comments to next Token
function Tokenizer:skipWhitespaceAndComments()
	while self:skipComment() do end
	while is(self, Tokenizer.WHITESPACE_CHARS) do
		self.index = self.index + 1;
		while self:skipComment() do end
	end
end

local function int(self, chars, seperators)
	local buffer = {};
	while true do
		if (is(self, chars)) then
			buffer[#buffer + 1] = get(self)
		elseif (is(self, seperators)) then
			self.index = self.index + 1;
		else
			break
		end
	end
	return table.concat(buffer);
end

-- Lex the next token as a Number
function Tokenizer:number()
	local startPos = self.index;
	local source = expect(self, setmetatable({["."] = true}, {__index = self.NumberCharsLookup}));

	if source == "0" then
		if self.BinaryNums and is(self, lookupify(self.BinaryNums)) then
			self.index = self.index + 1;
			source = int(self, self.BinaryNumberCharsLookup, lookupify(self.DecimalSeperators or {}));
			local value = tonumber(source, 2);
			return token(self, startPos, Tokenizer.TokenKind.Number, value);
		end

		if self.HexadecimalNums and is(self, lookupify(self.HexadecimalNums)) then
			self.index = self.index + 1;
			source = int(self, self.HexNumberCharsLookup, lookupify(self.DecimalSeperators or {}));
			local value = tonumber(source, 16);
			return token(self, startPos, Tokenizer.TokenKind.Number, value);
		end
	end

	if source == "." then
		source = source .. int(self, self.NumberCharsLookup, lookupify(self.DecimalSeperators or {}));
	else
		source = source .. int(self, self.NumberCharsLookup, lookupify(self.DecimalSeperators or {}));
		if(is(self, ".")) then
			source = source .. get(self) .. int(self, self.NumberCharsLookup, lookupify(self.DecimalSeperators or {}));
		end
	end

	if(self.DecimalExponent and is(self, lookupify(self.DecimalExponent))) then
		source = source .. get(self);
		if(is(self, lookupify({"+","-"}))) then
			source = source .. get(self);
		end
		local v = int(self, self.NumberCharsLookup, lookupify(self.DecimalSeperators or {}));
		if(v:len() < 1) then
			logger:error(generateError(self, "Expected a Valid Exponent!"));
		end
		source = source .. v;
	end

	local value = tonumber(source);
	return token(self, startPos, Tokenizer.TokenKind.Number, value);
end

-- Lex the Next Token as Identifier or Keyword
function Tokenizer:ident()
	local startPos = self.index;
	local source = expect(self, self.IdentCharsLookup)
	local sourceAddContent = {source}
	while(is(self, self.IdentCharsLookup)) do
		-- source = source .. get(self);
		table.insert(sourceAddContent, get(self))
	end
	source = table.concat(sourceAddContent)
	if(self.KeywordsLookup[source]) then
		return token(self, startPos, Tokenizer.TokenKind.Keyword, source);
	end

	local tk = token(self, startPos, Tokenizer.TokenKind.Ident, source);

	if(string.sub(source, 1, string.len(config.IdentPrefix)) == config.IdentPrefix) then
		logger:warn(generateWarning(tk, string.format("identifiers should not start with \\"%s\\" as this may break the program", config.IdentPrefix)));
	end

	return tk;
end

function Tokenizer:singleLineString()
	local startPos = self.index;
	local startChar = expect(self, self.StringStartLookup);
	local buffer = {};

	while (not is(self, startChar)) do
		local char = get(self);

		-- Single Line String may not contain Linebreaks except when they are escaped by \\
		if(char == '\\n') then
			self.index = self.index - 1;
			logger:error(generateError(self, "Unterminated String"));
		end


		if(char == "\\\\") then
			char = get(self);

			local escape = self.EscapeSequences[char];
			if(type(escape) == "string") then
				char = escape;

			elseif(self.NumericalEscapes and self.NumberCharsLookup[char]) then
				local numstr = char;

				if(is(self, self.NumberCharsLookup)) then
					char = get(self);
					numstr = numstr .. char;
				end

				if(is(self, self.NumberCharsLookup)) then
					char = get(self);
					numstr = numstr .. char;
				end

				char = string.char(tonumber(numstr));

			elseif(self.UnicodeEscapes and char == "u") then
				expect(self, "{");
				local num = "";
				while (is(self, self.HexNumberCharsLookup)) do
					num = num .. get(self);
				end
				expect(self, "}");
				char = util.utf8char(tonumber(num, 16));
			elseif(self.HexEscapes and char == "x") then
				local hex = expect(self, self.HexNumberCharsLookup) .. expect(self, self.HexNumberCharsLookup);
				char = string.char(tonumber(hex, 16));
			elseif(self.EscapeZIgnoreNextWhitespace and char == "z") then
				char = "";
				while(is(self, Tokenizer.WHITESPACE_CHARS)) do
					self.index = self.index + 1;
				end
			end
		end

		--// since table.insert is slower in lua51
		buffer[#buffer + 1] = char
	end

	expect(self, startChar);

	return token(self, startPos, Tokenizer.TokenKind.String, table.concat(buffer))
end

function Tokenizer:multiLineString()
	local startPos = self.index;
	if(is(self, "[")) then
		self.index = self.index + 1;
		local eqCount = 0;
		while(is(self, "=")) do
			self.index = self.index + 1;
			eqCount = eqCount + 1;
		end
		if(is(self, "[")) then
			-- Multiline String
			-- Parse String to Closing bracket but also consider that the count of equal signs must be the same

			-- Skip Leading newline if existing
			self.index = self.index + 1;
			if(is(self, "\\n")) then
				self.index = self.index + 1;
			end

			local value = "";
			while true do
				local char = get(self);
				if(char == ']') then
					local eqCount2 = 0;
					while(is(self, "=")) do
						char = char .. get(self);
						eqCount2 = eqCount2 + 1;
					end
					if(is(self, "]")) then
						if(eqCount2 == eqCount) then
							self.index = self.index + 1;
							return token(self, startPos, Tokenizer.TokenKind.String, value), true
						end
					end
				end
				value = value .. char;
			end
		end
	end
	self.index = startPos;
	return nil, false -- There was not an actual multiline string at the given Position
end

function Tokenizer:symbol()
	local startPos = self.index;
	for len = self.MaxSymbolLength, 1, -1 do
		local str = self.source:sub(self.index + 1, self.index + len);
		if self.SymbolsLookup[str] then
			self.index = self.index + len;
			return token(self, startPos, Tokenizer.TokenKind.Symbol, str);
		end
	end
	logger:error(generateError(self, "Unknown Symbol"));
end


-- get the Next token
function Tokenizer:next()
	-- Skip All Whitespace before the token
	self:skipWhitespaceAndComments();

	local startPos = self.index;
	if startPos >= self.length then
		return token(self, startPos, Tokenizer.TokenKind.Eof);
	end

	-- Numbers
	if(is(self, self.NumberCharsLookup)) then
		return self:number();
	end

	-- Identifiers and Keywords
	if(is(self, self.IdentCharsLookup)) then
		return self:ident();
	end

	-- Singleline String Literals
	if(is(self, self.StringStartLookup)) then
		return self:singleLineString();
	end

	-- Multiline String Literals
	if(is(self, "[", 0)) then
		-- The isString variable is due to the fact that "[" could also be a symbol for indexing
		local value, isString = self:multiLineString();
		if isString then
			return value;
		end
	end

	-- Number starting with dot
	if(is(self, ".") and is(self, self.NumberCharsLookup, 1)) then
		return self:number();
	end

	-- Symbols
	if(is(self, self.SymbolCharsLookup)) then
		return self:symbol();
	end


	logger:error(generateError(self, "Unexpected char \\"" .. escape(peek(self)) .. "\\"!"));
end

function Tokenizer:scanAll()
	local tb = {};
	repeat
		local token = self:next();
		table.insert(tb, token);
	until token.kind == Tokenizer.TokenKind.Eof
	return tb
end

return Tokenizer
`,"prometheus.unparser":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- unparser.lua
-- Overview:
-- This Script provides a class for lua code generation from an ast
-- This UnParser is Capable of generating LuaU and Lua5.1
--
-- Note that a LuaU ast can only be unparsed as LuaU if it contains any continue statements
--
-- Settings Object:
-- luaVersion : The LuaVersion of the Script

local config = require("config");
local Ast = require("prometheus.ast");
local Enums = require("prometheus.enums");
local util = require("prometheus.util");
local logger = require("logger");

local lookupify = util.lookupify;
local LuaVersion = Enums.LuaVersion;
local AstKind = Ast.AstKind;

local Unparser = {}

Unparser.SPACE = config.SPACE;
Unparser.TAB = config.TAB;

local function escapeString(str)
	str = util.escape(str)
	return str;
end

function Unparser:new(settings)
	local luaVersion = settings.LuaVersion or LuaVersion.LuaU;
	local conventions = Enums.Conventions[luaVersion];
	local unparser = {
		luaVersion = luaVersion;
		conventions = conventions;
		identCharsLookup = lookupify(conventions.IdentChars);
		numberCharsLookup = lookupify(conventions.NumberChars);
		prettyPrint = settings and settings.PrettyPrint or false;
		notIdentPattern = "[^" .. table.concat(conventions.IdentChars, "") .. "]";
		numberPattern = "^[" .. table.concat(conventions.NumberChars, "") .. "]";
		highlight = settings and settings.Highlight or false;
		keywordsLookup = lookupify(conventions.Keywords);
	}

	setmetatable(unparser, self);
	self.__index = self;

	return unparser;
end

function Unparser:isValidIdentifier(source)
	if(string.find(source, self.notIdentPattern)) then
		return false;
	end
	if(string.find(source, self.numberPattern)) then
		return false;
	end
	if self.keywordsLookup[source] then
		return false;
	end
	return #source > 0;
end

function Unparser:setPrettyPrint(prettyPrint)
	self.prettyPrint = prettyPrint;
end

function Unparser:getPrettyPrint()
	return self.prettyPrint;
end

function Unparser:tabs(i, ws_needed)
	return self.prettyPrint and string.rep(self.TAB, i) or ws_needed and self.SPACE or "";
end

function Unparser:newline(ws_needed)
	return self.prettyPrint and "\\n" or ws_needed and self.SPACE or "";
end

function Unparser:whitespaceIfNeeded(following, ws)
	if(self.prettyPrint or self.identCharsLookup[string.sub(following, 1, 1)]) then
		return ws or self.SPACE;
	end
	return "";
end

function Unparser:whitespaceIfNeeded2(leading, ws)
	if(self.prettyPrint or self.identCharsLookup[string.sub(leading, #leading, #leading)]) then
		return ws or self.SPACE;
	end
	return "";
end

function Unparser:optionalWhitespace(ws)
	return self.prettyPrint and (ws or self.SPACE) or "";
end

function Unparser:whitespace(ws)
	return self.SPACE or ws;
end

function Unparser:unparse(ast)
	if(ast.kind ~= AstKind.TopNode) then
		logger:error("Unparser:unparse expects a TopNode as first argument")
	end

	return self:unparseBlock(ast.body);
end

-- Helper to join parts table (optimized string building)
local function joinParts(parts)
	return table.concat(parts)
end

function Unparser:unparseBlock(block, tabbing)
	if(#block.statements < 1) then
		return self:whitespace();
	end

	local parts = {}

	for i, statement in ipairs(block.statements) do
		if(statement.kind ~= AstKind.NopStatement) then
			local statementCode = self:unparseStatement(statement, tabbing);
			if(not self.prettyPrint and #parts > 0 and string.sub(statementCode, 1, 1) == "(") then
				-- This is so that the following works:
				-- print("Test");(function() print("Test2") end)();
				statementCode = ";" .. statementCode;
			end
			local ws = self:whitespaceIfNeeded2(#parts > 0 and parts[#parts] or "", self:whitespaceIfNeeded(statementCode, self:newline(true)));
			if i ~= 1 then
				parts[#parts + 1] = ws;
			end
			if(self.prettyPrint) then
				statementCode = statementCode .. ";"
			end
			parts[#parts + 1] = statementCode;
		end
	end

	return joinParts(parts);
end

function Unparser:unparseStatement(statement, tabbing)
	tabbing = tabbing and tabbing + 1 or 0;
	local parts = {};
	local function push(...) -- Helper to add multiple strings efficiently
		for i = 1, select('#', ...) do
			parts[#parts + 1] = select(i, ...)
		end
	end

	if(statement.kind == AstKind.ContinueStatement) then
		push("continue");

	-- Break Statement
	elseif(statement.kind == AstKind.BreakStatement) then
		push("break");

	-- Do Statement
	elseif(statement.kind == AstKind.DoStatement) then
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push("do", self:whitespaceIfNeeded(bodyCode, self:newline(true)),
			bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- While Statement
	elseif(statement.kind == AstKind.WhileStatement) then
		local expressionCode = self:unparseExpression(statement.condition, tabbing);
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push("while", self:whitespaceIfNeeded(expressionCode), expressionCode, self:whitespaceIfNeeded2(expressionCode),
			"do", self:whitespaceIfNeeded(bodyCode, self:newline(true)),
			bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- Repeat Until Statement
	elseif(statement.kind == AstKind.RepeatStatement) then
		local expressionCode = self:unparseExpression(statement.condition, tabbing);
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push("repeat", self:whitespaceIfNeeded(bodyCode, self:newline(true)),
			bodyCode,
			self:whitespaceIfNeeded2(bodyCode, self:newline() .. self:tabs(tabbing, true)), "until",
			self:whitespaceIfNeeded(expressionCode), expressionCode);

	-- For Statement
	elseif(statement.kind == AstKind.ForStatement) then
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push("for", self:whitespace(), statement.scope:getVariableName(statement.id), self:optionalWhitespace(), "=");
		push(self:optionalWhitespace(), self:unparseExpression(statement.initialValue, tabbing), ",");
		push(self:optionalWhitespace(), self:unparseExpression(statement.finalValue, tabbing), ",");
		local incrementByCode = statement.incrementBy and self:unparseExpression(statement.incrementBy, tabbing) or "1";
		push(self:optionalWhitespace(), incrementByCode, self:whitespaceIfNeeded2(incrementByCode), "do",
			self:whitespaceIfNeeded(bodyCode, self:newline(true)),
			bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- For In Statement
	elseif(statement.kind == AstKind.ForInStatement) then
		push("for", self:whitespace());
		for i, id in ipairs(statement.ids) do
			if(i ~= 1) then
				push(",", self:optionalWhitespace());
			end
			push(statement.scope:getVariableName(id));
		end
		push(self:whitespace(), "in");
		local exprcode = self:unparseExpression(statement.expressions[1], tabbing);
		push(self:whitespaceIfNeeded(exprcode), exprcode);
		for i = 2, #statement.expressions, 1 do
			exprcode = self:unparseExpression(statement.expressions[i], tabbing);
			push(",", self:optionalWhitespace(), exprcode);
		end
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push(self:whitespaceIfNeeded2(#parts > 0 and parts[#parts] or ""), "do", self:whitespaceIfNeeded(bodyCode, self:newline(true)),
			bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- If Statement
	elseif(statement.kind == AstKind.IfStatement) then
		local exprcode = self:unparseExpression(statement.condition, tabbing);
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push("if", self:whitespaceIfNeeded(exprcode), exprcode, self:whitespaceIfNeeded2(exprcode), "then",
			self:whitespaceIfNeeded(bodyCode, self:newline(true)), bodyCode);

		for i, eif in ipairs(statement.elseifs) do
			exprcode = self:unparseExpression(eif.condition, tabbing);
			bodyCode = self:unparseBlock(eif.body, tabbing);
			local lastPart = #parts > 0 and parts[#parts] or "";
			push(self:newline(false), self:whitespaceIfNeeded2(lastPart, self:tabs(tabbing, true)),
				"elseif", self:whitespaceIfNeeded(exprcode), exprcode, self:whitespaceIfNeeded2(exprcode),
				"then", self:whitespaceIfNeeded(bodyCode, self:newline(true)), bodyCode);
		end

		if(statement.elsebody) then
			bodyCode = self:unparseBlock(statement.elsebody, tabbing);
			local lastPart = #parts > 0 and parts[#parts] or "";
			push(self:newline(false), self:whitespaceIfNeeded2(lastPart, self:tabs(tabbing, true)),
				"else", self:whitespaceIfNeeded(bodyCode, self:newline(true)), bodyCode);
		end

		push(self:newline(false), self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- Function Declaration
	elseif(statement.kind == AstKind.FunctionDeclaration) then
		local funcname = statement.scope:getVariableName(statement.id);
		for _, index in ipairs(statement.indices) do
			funcname = funcname .. "." .. index;
		end
		push("function", self:whitespace(), funcname, "(");
		for i, arg in ipairs(statement.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			if(arg.kind == AstKind.VarargExpression) then
				push("...");
			else
				push(arg.scope:getVariableName(arg.id));
			end
		end
		push(")");
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push(self:newline(false), bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- Local Function Declaration
	elseif(statement.kind == AstKind.LocalFunctionDeclaration) then
		local funcname = statement.scope:getVariableName(statement.id);
		push("local", self:whitespace(), "function", self:whitespace(), funcname, "(");
		for i, arg in ipairs(statement.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			if(arg.kind == AstKind.VarargExpression) then
				push("...");
			else
				push(arg.scope:getVariableName(arg.id));
			end
		end
		push(")");
		local bodyCode = self:unparseBlock(statement.body, tabbing);
		push(self:newline(false), bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");

	-- Local Variable Declaration
	elseif(statement.kind == AstKind.LocalVariableDeclaration) then
		push("local", self:whitespace());
		for i, id in ipairs(statement.ids) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(statement.scope:getVariableName(id));
		end
		if(#statement.expressions > 0) then
			push(self:optionalWhitespace(), "=", self:optionalWhitespace());
			for i, expr in ipairs(statement.expressions) do
				if i > 1 then
					push(",", self:optionalWhitespace());
				end
				push(self:unparseExpression(expr, tabbing + 1));
			end
		end

	-- Function Call Statement
	elseif(statement.kind == AstKind.FunctionCallStatement) then
		if not (statement.base.kind == AstKind.IndexExpression or statement.base.kind == AstKind.VariableExpression) then
			push("(", self:unparseExpression(statement.base, tabbing), ")");
		else
			push(self:unparseExpression(statement.base, tabbing));
		end
		push("(");
		for i, arg in ipairs(statement.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(self:unparseExpression(arg, tabbing));
		end
		push(")");

	-- Pass Self Function Call Statement
	elseif(statement.kind == AstKind.PassSelfFunctionCallStatement) then
		if not (statement.base.kind == AstKind.IndexExpression or statement.base.kind == AstKind.VariableExpression) then
			push("(", self:unparseExpression(statement.base, tabbing), ")");
		else
			push(self:unparseExpression(statement.base, tabbing));
		end
		push(":", statement.passSelfFunctionName, "(");
		for i, arg in ipairs(statement.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(self:unparseExpression(arg, tabbing));
		end
		push(")");

	elseif(statement.kind == AstKind.AssignmentStatement) then
		for i, primary_expr in ipairs(statement.lhs) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(self:unparseExpression(primary_expr, tabbing));
		end
		push(self:optionalWhitespace(), "=", self:optionalWhitespace());
		for i, expr in ipairs(statement.rhs) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(self:unparseExpression(expr, tabbing + 1));
		end

	-- Return Statement
	elseif(statement.kind == AstKind.ReturnStatement) then
		push("return");
		if(#statement.args > 0) then
			local exprcode = self:unparseExpression(statement.args[1], tabbing);
			push(self:whitespaceIfNeeded(exprcode), exprcode);
			for i = 2, #statement.args, 1 do
				exprcode = self:unparseExpression(statement.args[i], tabbing);
				push(",", self:optionalWhitespace(), exprcode);
			end
		end

	elseif self.luaVersion == LuaVersion.LuaU then
		local compoundOperators = {
			[AstKind.CompoundAddStatement] = "+=",
			[AstKind.CompoundSubStatement] = "-=",
			[AstKind.CompoundMulStatement] = "*=",
			[AstKind.CompoundDivStatement] = "/=",
			[AstKind.CompoundModStatement] = "%=",
			[AstKind.CompoundPowStatement] = "^=",
			[AstKind.CompoundConcatStatement] = "..=",
		}

		local operator = compoundOperators[statement.kind]
		if operator then
			push(self:unparseExpression(statement.lhs, tabbing), self:optionalWhitespace(), operator,
				self:optionalWhitespace(), self:unparseExpression(statement.rhs, tabbing));
		else
			logger:error(string.format("\\"%s\\" is not a valid unparseable statement in %s!", statement.kind, self.luaVersion))
		end
	end

	return self:tabs(tabbing, false) .. joinParts(parts);
end

function Unparser:unparseExpression(expression, tabbing)
	if expression.isParenthesizedExpression then
		local unwrapped = {}
		for k, v in pairs(expression) do
			unwrapped[k] = v
		end
		unwrapped.isParenthesizedExpression = nil
		return "(" .. self:unparseExpression(unwrapped, tabbing) .. ")"
	end

	local parts = {};
	local function push(...)
		for i = 1, select('#', ...) do
			parts[#parts + 1] = select(i, ...)
		end
	end

	if(expression.kind == AstKind.BooleanExpression) then
		return expression.value and "true" or "false";
	end

	if(expression.kind == AstKind.NumberExpression) then
		local str = tostring(expression.value);
		if(str == "inf") then
			return "2e1024"
		end
		if(str == "-inf") then
			return "-2e1024"
		end
		if(str:sub(1, 2) == "0.") then
			str = str:sub(2);
		end
		return str;
	end

	if(expression.kind == AstKind.VariableExpression or expression.kind == AstKind.AssignmentVariable) then
		return expression.scope:getVariableName(expression.id);
	end

	if(expression.kind == AstKind.StringExpression) then
		return "\\"" .. escapeString(expression.value) .. "\\"";
	end

	if(expression.kind == AstKind.NilExpression) then
		return "nil";
	end

	if(expression.kind == AstKind.VarargExpression) then
		return "...";
	end

	local k = AstKind.OrExpression;
	if(expression.kind == k) then
		local lhs = self:unparseExpression(expression.lhs, tabbing);
		local rhs = self:unparseExpression(expression.rhs, tabbing);
		return lhs .. self:whitespaceIfNeeded2(lhs) .. "or" .. self:whitespaceIfNeeded(rhs) .. rhs;
	end

	k = AstKind.AndExpression;
	if(expression.kind == k) then
		local lhs = self:unparseExpression(expression.lhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.lhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			lhs = "(" .. lhs .. ")";
		end

		local rhs = self:unparseExpression(expression.rhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			rhs = "(" .. rhs .. ")";
		end

		return lhs .. self:whitespaceIfNeeded2(lhs) .. "and" .. self:whitespaceIfNeeded(rhs) .. rhs;
	end

	local comparisonOps = {
		[AstKind.LessThanExpression] = "<",
		[AstKind.GreaterThanExpression] = ">",
		[AstKind.LessThanOrEqualsExpression] = "<=",
		[AstKind.GreaterThanOrEqualsExpression] = ">=",
		[AstKind.NotEqualsExpression] = "~=",
		[AstKind.EqualsExpression] = "==",
	}

	local op = comparisonOps[expression.kind]
	if op then
		k = expression.kind
		local lhs = self:unparseExpression(expression.lhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.lhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			lhs = "(" .. lhs .. ")";
		end

		local rhs = self:unparseExpression(expression.rhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			rhs = "(" .. rhs .. ")";
		end

		return lhs .. self:optionalWhitespace() .. op .. self:optionalWhitespace() .. rhs;
	end

	k = AstKind.StrCatExpression
	if expression.kind == k then
		local lhs = self:unparseExpression(expression.lhs, tabbing)
		if Ast.astKindExpressionToNumber(expression.lhs.kind) >= Ast.astKindExpressionToNumber(k) then
			lhs = "(" .. lhs .. ")"
		end

		local rhs = self:unparseExpression(expression.rhs, tabbing)
		if Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k) then
			rhs = "(" .. rhs .. ")"
		end

		if self.numberCharsLookup[string.sub(lhs, #lhs, #lhs)] then
			lhs = lhs .. " "
		end

		return lhs .. self:optionalWhitespace() .. (tostring(rhs):sub(1, 1) == "." and ".. " or "..") .. self:optionalWhitespace() .. rhs
	end

	local arithmeticOps = {
		[AstKind.AddExpression] = "+",
		[AstKind.SubExpression] = "-",
		[AstKind.MulExpression] = "*",
		[AstKind.DivExpression] = "/",
		[AstKind.ModExpression] = "%",
		[AstKind.PowExpression] = "^",
	}

	op = arithmeticOps[expression.kind]
	if op then
		k = expression.kind
		local lhs = self:unparseExpression(expression.lhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.lhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			lhs = "(" .. lhs .. ")";
		end

		local rhs = self:unparseExpression(expression.rhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			rhs = "(" .. rhs .. ")";
		end

		if op == "-" and string.sub(rhs, 1, 1) == "-" then
			rhs = "(" .. rhs .. ")";
		end

		return lhs .. self:optionalWhitespace() .. op .. self:optionalWhitespace() .. rhs;
	end

	-- Unary Expressions
	k = AstKind.NotExpression;
	if(expression.kind == k) then
		local rhs = self:unparseExpression(expression.rhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			rhs = "(" .. rhs .. ")";
		end

		return "not" .. self:whitespaceIfNeeded(rhs) .. rhs;
	end

	k = AstKind.NegateExpression;
	if(expression.kind == k) then
		local rhs = self:unparseExpression(expression.rhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			rhs = "(" .. rhs .. ")";
		end

		if string.sub(rhs, 1, 1) == "-" then
			rhs = "(" .. rhs .. ")";
		end

		return "-" .. rhs;
	end

	k = AstKind.LenExpression;
	if(expression.kind == k) then
		local rhs = self:unparseExpression(expression.rhs, tabbing);
		if(Ast.astKindExpressionToNumber(expression.rhs.kind) >= Ast.astKindExpressionToNumber(k)) then
			rhs = "(" .. rhs .. ")";
		end

		return "#" .. rhs;
	end

	k = AstKind.IndexExpression;
	if(expression.kind == k or expression.kind == AstKind.AssignmentIndexing) then
		local base = self:unparseExpression(expression.base, tabbing);
		if(expression.base.kind == AstKind.VarargExpression or Ast.astKindExpressionToNumber(expression.base.kind) > Ast.astKindExpressionToNumber(k) or expression.base.kind == AstKind.StringExpression or expression.base.kind == AstKind.NumberExpression or expression.base.kind == AstKind.NilExpression) then
			base = "(" .. base .. ")";
		end

		-- Identifier Indexing e.g: x.y instead of x["y"];
		if(expression.index.kind == AstKind.StringExpression and self:isValidIdentifier(expression.index.value)) then
			return base .. "." .. expression.index.value;
		end

		-- Index never needs parens
		local index = self:unparseExpression(expression.index, tabbing);
		return base .. "[" .. index .. "]";
	end

	k = AstKind.FunctionCallExpression;
	if(expression.kind == k) then
		if not (expression.base.kind == AstKind.IndexExpression or expression.base.kind == AstKind.VariableExpression) then
			push("(", self:unparseExpression(expression.base, tabbing), ")");
		else
			push(self:unparseExpression(expression.base, tabbing));
		end
		push("(");
		for i, arg in ipairs(expression.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(self:unparseExpression(arg, tabbing));
		end
		push(")");
		return joinParts(parts);
	end

	k = AstKind.PassSelfFunctionCallExpression;
	if(expression.kind == k) then
		if not (expression.base.kind == AstKind.IndexExpression or expression.base.kind == AstKind.VariableExpression) then
			push("(", self:unparseExpression(expression.base, tabbing), ")");
		else
			push(self:unparseExpression(expression.base, tabbing));
		end
		push(":", expression.passSelfFunctionName, "(");
		for i, arg in ipairs(expression.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			push(self:unparseExpression(arg, tabbing));
		end
		push(")");
		return joinParts(parts);
	end

	k = AstKind.FunctionLiteralExpression;
	if(expression.kind == k) then
		push("function", "(");
		for i, arg in ipairs(expression.args) do
			if i > 1 then
				push(",", self:optionalWhitespace());
			end
			if(arg.kind == AstKind.VarargExpression) then
				push("...");
			else
				push(arg.scope:getVariableName(arg.id));
			end
		end
		push(")");
		local bodyCode = self:unparseBlock(expression.body, tabbing);
		push(self:newline(false), bodyCode, self:newline(false),
			self:whitespaceIfNeeded2(bodyCode, self:tabs(tabbing, true)), "end");
		return joinParts(parts);
	end

	k = AstKind.TableConstructorExpression;
	if(expression.kind == k) then
		if(#expression.entries == 0) then return "{}" end;

		local inlineTable = #expression.entries <= 3;
		local tableTabbing = tabbing + 1;

		push("{");
		if inlineTable then
			push(self:optionalWhitespace());
		else
			push(self:optionalWhitespace(self:newline() .. self:tabs(tableTabbing)));
		end

		local p = false;
		for i, entry in ipairs(expression.entries) do
			p = true;
			local sep = self.prettyPrint and "," or (math.random(1, 2) == 1 and "," or ";");
			if i > 1 and not inlineTable then
				push(sep, self:optionalWhitespace(self:newline() .. self:tabs(tableTabbing)));
			elseif i > 1 then
				push(sep, self:optionalWhitespace());
			end
			if(entry.kind == AstKind.KeyedTableEntry) then
				if(entry.key.kind == AstKind.StringExpression and self:isValidIdentifier(entry.key.value)) then
					push(entry.key.value);
				else
					push("[", self:unparseExpression(entry.key, tableTabbing), "]");
				end
				push(self:optionalWhitespace(), "=", self:optionalWhitespace(), self:unparseExpression(entry.value, tableTabbing));
			else
				push(self:unparseExpression(entry.value, tableTabbing));
			end
		end

		if inlineTable then
			return joinParts(parts) .. self:optionalWhitespace() .. "}";
		end

		return joinParts(parts) .. self:optionalWhitespace((p and "," or "") .. self:newline() .. self:tabs(tabbing)) .. "}";
	end

	if (self.luaVersion == LuaVersion.LuaU) then
		k = AstKind.IfElseExpression
		if(expression.kind == k) then
			push("if ");
			push(self:unparseExpression(expression.condition));
			push(" then ");
			push(self:unparseExpression(expression.true_value));
			for _, elseifexp in pairs(expression.elseifs) do
				push(" elseif ");
				push(self:unparseExpression(elseifexp.condition));
				push(" then ");
				push(self:unparseExpression(elseifexp.value));
			end
			push(" else ");
			push(self:unparseExpression(expression.false_value));
			return joinParts(parts);
		end
	end

	logger:error(string.format("\\"%s\\" is not a valid unparseable expression", expression.kind));
end

return Unparser
`,"prometheus.util":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- util.lua
--
-- This Script provides some utility functions for Prometheus.

local function lookupify(tb)
	local tb2 = {};
	for _, v in ipairs(tb) do
		tb2[v] = true
	end
	return tb2
end

local function unlookupify(tb)
	local tb2 = {};
	for v, _ in pairs(tb) do
		table.insert(tb2, v);
	end
	return tb2;
end

local function escape(str)
	return str:gsub(".", function(char)
		local byte = string.byte(char)
		if byte >= 32 and byte <= 126 and char ~= "\\\\" and char ~= "\\"" and char ~= "\\'" then
			return char
		end
		if(char == "\\\\") then
			return "\\\\\\\\";
		end
		if(char == "\\n") then
			return "\\\\n";
		end
		if(char == "\\r") then
			return "\\\\r";
		end
		if(char == "\\"") then
			return "\\\\\\"";
		end
		if(char == "\\'") then
			return "\\\\\\'";
		end
		return string.format("\\\\%03d", byte);
	end)
end

local function chararray(str)
	local tb = {};
	for i = 1, str:len(), 1 do
		table.insert(tb, str:sub(i, i));
	end
	return tb;
end

local function keys(tb)
	local keyset = {}
	local n=0
	for k, _ in pairs(tb) do
		n = n + 1
		keyset[n] = k
	end
	return keyset
end

local utf8char;
do
	local string_char = string.char
	function utf8char(cp)
	  if cp < 128 then
		return string_char(cp)
	  end
	  local suffix = cp % 64
	  local c4 = 128 + suffix
	  cp = (cp - suffix) / 64
	  if cp < 32 then
		return string_char(192 + cp, c4)
	  end
	  suffix = cp % 64
	  local c3 = 128 + suffix
	  cp = (cp - suffix) / 64
	  if cp < 16 then
		return string_char(224 + cp, c3, c4)
	  end
	  suffix = cp % 64
	  cp = (cp - suffix) / 64
	  return string_char(240 + cp, 128 + suffix, c3, c4)
	end
  end

local function shuffle(tb)
	for i = #tb, 2, -1 do
		local j = math.random(i)
		tb[i], tb[j] = tb[j], tb[i]
	end
	return tb
end

local function readonly(obj)
	local r = newproxy(true);
	getmetatable(r).__index = obj;
	return r;
end

return {
	lookupify = lookupify,
	unlookupify = unlookupify,
	escape = escape,
	chararray = chararray,
	keys = keys,
	shuffle = shuffle,
	utf8char = utf8char,
	readonly = readonly
}
`,"prometheus.visitast":`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- visitast.lua
--
-- This Script provides a utility function for visiting each node of an AST.

local Ast = require("prometheus.ast");
local util = require("prometheus.util");

-- Lua 5.3 (including Fengari) no longer exposes unpack globally.
-- Keep the visitor compatible with both Lua 5.1 and Lua 5.2+ without
-- changing the VM's global environment or the semantics of user scripts.
local unpack = table.unpack or unpack;

local AstKind = Ast.AstKind;
local lookupify = util.lookupify;

local visitAst, visitBlock, visitStatement, visitExpression;

function visitAst(ast, previsit, postvisit, data)
	ast.isAst = true;
	data = data or {};
	data.scopeStack = {};
	data.functionData = {
		depth = 0;
		scope = ast.body.scope;
		node = ast;
	};
	data.scope = ast.globalScope;
	data.globalScope = ast.globalScope;
	if(type(previsit) == "function") then
		local node, skip = previsit(ast, data);
		ast = node or ast;
		if skip then
			return ast;
		end
	end

	-- Is Function Block because global scope is treated like a Function
	visitBlock(ast.body, previsit, postvisit, data, true);

	if(type(postvisit) == "function") then
		ast = postvisit(ast, data) or ast;
	end
	return ast;
end

local compundStats = lookupify{
	AstKind.CompoundAddStatement,
	AstKind.CompoundSubStatement,
	AstKind.CompoundMulStatement,
	AstKind.CompoundDivStatement,
	AstKind.CompoundModStatement,
	AstKind.CompoundPowStatement,
	AstKind.CompoundConcatStatement,
}

function visitBlock(block, previsit, postvisit, data, isFunctionBlock)
	block.isBlock = true;
	block.isFunctionBlock = isFunctionBlock or false;
	data.scope = block.scope;
	local parentBlockData = data.blockData;
	data.blockData = {};
	table.insert(data.scopeStack, block.scope);
	if(type(previsit) == "function") then
		local node, skip = previsit(block, data);
		block = node or block;
		if skip then
			data.scope = table.remove(data.scopeStack);
			return block
		end
	end

	local i = 1;
	while i <= #block.statements do
		local statement = table.remove(block.statements, i);
		i = i - 1;
		local returnedStatements = {visitStatement(statement, previsit, postvisit, data)};
		for j, statement in ipairs(returnedStatements) do
			i = i + 1;
			table.insert(block.statements, i, statement);
		end
		i = i + 1;
	end

	if(type(postvisit) == "function") then
		block = postvisit(block, data) or block;
	end
	data.scope = table.remove(data.scopeStack);
	data.blockData = parentBlockData;
	return block;
end

function visitStatement(statement, previsit, postvisit, data)
	statement.isStatement = true;
	if(type(previsit) == "function") then
		local node, skip = previsit(statement, data);
		statement = node or statement;
		if skip then
			return statement;
		end
	end

	-- Visit Child Nodes of Statement
	if(statement.kind == AstKind.ReturnStatement) then
		for i, expression in ipairs(statement.args) do
			statement.args[i] = visitExpression(expression, previsit, postvisit, data);
		end
	elseif(statement.kind == AstKind.PassSelfFunctionCallStatement or statement.kind == AstKind.FunctionCallStatement) then
		statement.base = visitExpression(statement.base, previsit, postvisit, data);
		for i, expression in ipairs(statement.args) do
			statement.args[i] = visitExpression(expression, previsit, postvisit, data);
		end
	elseif(statement.kind == AstKind.AssignmentStatement) then
		for i, primaryExpr in ipairs(statement.lhs) do
			statement.lhs[i] = visitExpression(primaryExpr, previsit, postvisit, data);
		end
		for i, expression in ipairs(statement.rhs) do
			statement.rhs[i] = visitExpression(expression, previsit, postvisit, data);
		end
	elseif(statement.kind == AstKind.FunctionDeclaration or statement.kind == AstKind.LocalFunctionDeclaration) then
		local parentFunctionData = data.functionData;
		data.functionData = {
			depth = parentFunctionData.depth + 1;
			scope = statement.body.scope;
			node = statement;
		};
		statement.body = visitBlock(statement.body, previsit, postvisit, data, true);
		data.functionData = parentFunctionData;
	elseif(statement.kind == AstKind.DoStatement) then
		statement.body = visitBlock(statement.body, previsit, postvisit, data, false);
	elseif(statement.kind == AstKind.WhileStatement) then
		statement.condition = visitExpression(statement.condition, previsit, postvisit, data);
		statement.body = visitBlock(statement.body, previsit, postvisit, data, false);
	elseif(statement.kind == AstKind.RepeatStatement) then
		statement.body = visitBlock(statement.body, previsit, postvisit, data);
		statement.condition = visitExpression(statement.condition, previsit, postvisit, data);
	elseif(statement.kind == AstKind.ForStatement) then
		statement.initialValue = visitExpression(statement.initialValue, previsit, postvisit, data);
		statement.finalValue = visitExpression(statement.finalValue, previsit, postvisit, data);
		statement.incrementBy = visitExpression(statement.incrementBy, previsit, postvisit, data);
		statement.body = visitBlock(statement.body, previsit, postvisit, data, false);
	elseif(statement.kind == AstKind.ForInStatement) then
		for i, expression in ipairs(statement.expressions) do
			statement.expressions[i] = visitExpression(expression, previsit, postvisit, data);
		end
		statement.body = visitBlock(statement.body, previsit, postvisit, data, false);
	elseif(statement.kind == AstKind.IfStatement) then
		statement.condition = visitExpression(statement.condition, previsit, postvisit, data);
		statement.body = visitBlock(statement.body, previsit, postvisit, data, false);
		for i, eif in ipairs(statement.elseifs) do
			eif.condition = visitExpression(eif.condition, previsit, postvisit, data);
			eif.body = visitBlock(eif.body, previsit, postvisit, data, false);
		end
		if(statement.elsebody) then
			statement.elsebody = visitBlock(statement.elsebody, previsit, postvisit, data, false);
		end
	elseif(statement.kind == AstKind.LocalVariableDeclaration) then
		for i, expression in ipairs(statement.expressions) do
			statement.expressions[i] = visitExpression(expression, previsit, postvisit, data);
		end
	elseif compundStats[statement.kind] then
		statement.lhs = visitExpression(statement.lhs, previsit, postvisit, data);
		statement.rhs = visitExpression(statement.rhs, previsit, postvisit, data);
	end

	if(type(postvisit) == "function") then
		local statements = {postvisit(statement, data)};
		if #statements > 0 then
			return unpack(statements);
		end
	end

	return statement;
end

local binaryExpressions = lookupify{
	AstKind.OrExpression,
	AstKind.AndExpression,
	AstKind.LessThanExpression,
	AstKind.GreaterThanExpression,
	AstKind.LessThanOrEqualsExpression,
	AstKind.GreaterThanOrEqualsExpression,
	AstKind.NotEqualsExpression,
	AstKind.EqualsExpression,
	AstKind.StrCatExpression,
	AstKind.AddExpression,
	AstKind.SubExpression,
	AstKind.MulExpression,
	AstKind.DivExpression,
	AstKind.ModExpression,
	AstKind.PowExpression,
}
function visitExpression(expression, previsit, postvisit, data)
	expression.isExpression = true;
	if(type(previsit) == "function") then
		local node, skip = previsit(expression, data);
		expression = node or expression;
		if skip then
			return expression;
		end
	end

	if(binaryExpressions[expression.kind]) then
		expression.lhs = visitExpression(expression.lhs, previsit, postvisit, data);
		expression.rhs = visitExpression(expression.rhs, previsit, postvisit, data);
	end

	if(expression.kind == AstKind.NotExpression or expression.kind == AstKind.NegateExpression or expression.kind == AstKind.LenExpression) then
		expression.rhs = visitExpression(expression.rhs, previsit, postvisit, data);
	end

	if(expression.kind == AstKind.PassSelfFunctionCallExpression or expression.kind == AstKind.FunctionCallExpression) then
		expression.base = visitExpression(expression.base, previsit, postvisit, data);
		for i, arg in ipairs(expression.args) do
			expression.args[i] = visitExpression(arg, previsit, postvisit, data);
		end
	end

	if(expression.kind == AstKind.FunctionLiteralExpression) then
		local parentFunctionData = data.functionData;
		data.functionData = {
			depth = parentFunctionData.depth + 1;
			scope = expression.body.scope;
			node = expression;
		};
		expression.body = visitBlock(expression.body, previsit, postvisit, data, true);
		data.functionData = parentFunctionData;
	end

	if(expression.kind == AstKind.TableConstructorExpression) then
		for i, entry in ipairs(expression.entries) do
			if entry.kind == AstKind.KeyedTableEntry then
				entry.key = visitExpression(entry.key, previsit, postvisit, data);
			end
			entry.value = visitExpression(entry.value, previsit, postvisit, data);
		end
	end

	if(expression.kind == AstKind.IndexExpression or expression.kind == AstKind.AssignmentIndexing) then
		expression.base = visitExpression(expression.base, previsit, postvisit, data);
		expression.index = visitExpression(expression.index, previsit, postvisit, data);
	end
	if(expression.kind == AstKind.IfElseExpression) then
		expression.condition = visitExpression(expression.condition, previsit, postvisit, data);
		expression.true_value = visitExpression(expression.true_value, previsit, postvisit, data);
		for i, elif in pairs(expression.elseifs) do
			elif.condition = visitExpression(elif.condition, previsit, postvisit, data);
			elif.value = visitExpression(elif.value, previsit, postvisit, data);
		end
		expression.false_value = visitExpression(expression.false_value, previsit, postvisit, data);
	end

	if(type(postvisit) == "function") then
		expression = postvisit(expression, data) or expression;
	end
	return expression;
end

return visitAst;
`,prometheus:`
-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- prometheus.lua
--
-- This file is the entrypoint for Prometheus

-- Compatibility boundary for the embedded Prometheus compiler. Prometheus
-- contains legacy Lua 5.1 modules that call global unpack, while Lua 5.2+
-- (including Fengari's Lua 5.3 VM) exposes it as table.unpack.
-- Install the alias before loading any compiler submodule. This affects only
-- the private compiler VM; generated user code keeps normal VM semantics.
if _G.unpack == nil and table.unpack then
    _G.unpack = table.unpack;
end

-- Configure package.path for require
local function script_path()
	local str = debug.getinfo(2, "S").source:sub(2)
	return str:match("(.*[/%\\\\])")
end

local oldPkgPath = package.path;
local resolvedScriptPath = script_path();
if resolvedScriptPath then
	package.path = resolvedScriptPath .. "?.lua;" .. package.path;
end

-- Math.random Fix for Lua5.1
-- Check if fix is needed
if not pcall(function()
    return math.random(1, 2^40);
end) then
    local oldMathRandom = math.random;
    math.random = function(a, b)
        if not a and b then
            return oldMathRandom();
        end
        if not b then
            return math.random(1, a);
        end
        if a > b then
            a, b = b, a;
        end
        local diff = b - a;
        assert(diff >= 0);
        if diff > 2 ^ 31 - 1 then
            return math.floor(oldMathRandom() * diff + a);
        else
            return oldMathRandom(a, b);
        end
    end
end

-- math.log10 polyfill (removed in Lua 5.2+, and Fengari's math lib doesn't provide it)
math.log10 = math.log10 or function(x)
	return math.log(x, 10);
end

-- newproxy polyfill
_G.newproxy = _G.newproxy or function(arg)
    if arg then
        return setmetatable({}, {});
    end
    return {};
end


-- Require Prometheus Submodules
local Pipeline = require("prometheus.pipeline");
local highlight = require("highlightlua");
local colors = require("colors");
local Logger = require("logger");
local Presets = require("presets");
local Config = require("config");
local util = require("prometheus.util");

-- Restore package.path
package.path = oldPkgPath;

-- Export
return {
    Pipeline = Pipeline;
    colors = colors;
    Config = util.readonly(Config); -- Readonly
    Logger = Logger;
    highlight = highlight;
    Presets = Presets;
}
`};var{lua:Me,lauxlib:ed,lualib:hq,to_luastring:hs,to_jsstring:Ii}=dq;function gq(){let e=ed.luaL_newstate();hq.luaL_openlibs(e),Me.lua_pushjsfunction(e,t=>{let n=Me.lua_gettop(t),s=[];for(let r=1;r<=n;r++)Me.lua_getglobal(t,hs("tostring")),Me.lua_pushvalue(t,r),Me.lua_call(t,1,1),s.push(Ii(Me.lua_tostring(t,-1),void 0,void 0,"?")),Me.lua_pop(t,1);return console.log(s.join("	")),0}),Me.lua_setglobal(e,hs("print"));for(let[t,n]of Object.entries(qS)){if(Me.lua_getglobal(e,hs("package")),Me.lua_getfield(e,-1,hs("preload")),ed.luaL_loadbuffer(e,hs(n),hs("="+t))!==Me.LUA_OK){let r=Ii(Me.lua_tostring(e,-1));throw new Error(`Failed to compile embedded module "${t}": ${r}`)}Me.lua_setfield(e,-2,hs(t)),Me.lua_pop(e,2)}return e}function mq(e){return JSON.stringify(e)}var LS=["Minify","Weak","Medium","Strong"];function HS(e,t,{onLog:n=()=>{}}={}){if(!LS.includes(t))throw new Error(`Unknown preset "${t}". Must be one of ${LS.join(", ")}.`);n(`[${t}] Obfuscating...`);let s=gq(),r=`
local Prometheus = require("prometheus")
Prometheus.Logger.logLevel = Prometheus.Logger.LogLevel.Error
local pipeline = Prometheus.Pipeline:fromConfig(Prometheus.Presets["${t}"])
local ok, out = pcall(function() return pipeline:apply(${mq(e)}, "input.lua") end)
if not ok then
  error(out, 0)
end
return out
`;if(ed.luaL_dostring(s,hs(r))!==Me.LUA_OK){let l=Ii(Me.lua_tostring(s,-1),void 0,void 0,"?");return n(`[${t}] Obfuscation failed: ${l}`),{ok:!1,error:l,code:null,warning:`Obfuscation failed: ${l}`}}let a=Ii(Me.lua_tostring(s,-1),void 0,void 0,"?");return n(`[${t}] Done. (${e.length} bytes -> ${a.length} bytes)`),{ok:!0,code:a,warning:null}}self.onmessage=e=>{let{source:t,preset:n}=e.data||{};try{let s=HS(t,n,{onLog:r=>self.postMessage({type:"log",message:r})});self.postMessage({type:"result",result:s})}catch(s){self.postMessage({type:"error",error:s instanceof Error?s.message:String(s)})}};})();
/*! Bundled license information:

luanode-vm/src/fengari.js:
  (**
  @license MIT
  
  Copyright © 2017-2019 Benoit Giannangeli
  Copyright © 2017-2019 Daurnimator
  Copyright © 1994–2017 Lua.org, PUC-Rio.
  *)
*/
