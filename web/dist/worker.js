(()=>{var _E=Object.create;var La=Object.defineProperty;var bE=Object.getOwnPropertyDescriptor;var xE=Object.getOwnPropertyNames;var AE=Object.getPrototypeOf,SE=Object.prototype.hasOwnProperty;var vs=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var kE=(e,t)=>()=>(e&&(t=e(e=0)),t);var K=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),EE=(e,t)=>{for(var n in t)La(e,n,{get:t[n],enumerable:!0})},rh=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of xE(t))!SE.call(e,r)&&r!==n&&La(e,r,{get:()=>t[r],enumerable:!(s=bE(t,r))||s.enumerable});return e};var vE=(e,t,n)=>(n=e!=null?_E(AE(e)):{},rh(t||!e||!e.__esModule?La(n,"default",{value:e,enumerable:!0}):n,e)),ja=e=>rh(La({},"__esModule",{value:!0}),e);var at=K((z4,lh)=>{"use strict";var ur=9223372036854775807n,dn=-9223372036854775808n,So=0x10000000000000000n,ko=Number.MAX_SAFE_INTEGER,Eo=Number.MIN_SAFE_INTEGER,TE=function(e){return typeof e=="bigint"?!0:typeof e=="number"&&Number.isInteger(e)},RE=function(e){return typeof e=="number"&&Number.isInteger(e)&&e>=Eo&&e<=ko},he=function(e){return typeof e=="bigint"?e:BigInt(e)},Hn=function(e){return e>=Eo&&e<=ko?Number(e):e},yE=function(e){return typeof e=="bigint"?e<dn||e>ur?null:Hn(e):typeof e=="number"&&Number.isInteger(e)?e>=Eo&&e<=ko?e:Hn(BigInt(e.toFixed(0))):null},At=function(e){let t=e%So;return t<dn?t+=So:t>ur&&(t-=So),Hn(t)},NE=function(e,t){if(Number.isSafeInteger(e)&&Number.isSafeInteger(t)){let n=e+t;if(Number.isSafeInteger(n))return n}return At(he(e)+he(t))},OE=function(e,t){if(Number.isSafeInteger(e)&&Number.isSafeInteger(t)){let n=e-t;if(Number.isSafeInteger(n))return n}return At(he(e)-he(t))},wE=function(e,t){if(Number.isSafeInteger(e)&&Number.isSafeInteger(t)){let n=e<0?-e:e,s=t<0?-t:t;if(n<=2097152&&s<=2097152)return e*t;let r=e*t;if(Number.isSafeInteger(r))return r}return At(he(e)*he(t))},CE=function(e){if(Number.isSafeInteger(e)){let t=-e;if(Number.isSafeInteger(t))return t}return At(-he(e))},IE=function(e,t){let n=he(e),s=he(t);if(s===0n)return"divzero";if(n===dn&&s===-1n)return dn;let r=n/s;return n<0n!=s<0n&&r*s!==n&&(r-=1n),At(r)},VE=function(e,t){let n=he(e),s=he(t);if(s===0n)return"divzero";if(n===dn&&s===-1n)return 0;let r=n%s;return r!==0n&&r<0n!=s<0n&&(r+=s),Hn(r)},X4=So-1n,wt=function(e){return BigInt.asUintN(64,he(e))},PE=function(e,t){return At(BigInt.asIntN(64,wt(e)&wt(t)))},UE=function(e,t){return At(BigInt.asIntN(64,wt(e)|wt(t)))},KE=function(e,t){return At(BigInt.asIntN(64,wt(e)^wt(t)))},FE=function(e){return At(BigInt.asIntN(64,~wt(e)))},oh=function(e,t){let n=he(t);return n<0n?ah(e,-n):n>=64n?0:At(BigInt.asIntN(64,wt(e)<<n))},ah=function(e,t){let n=he(t);return n<0n?oh(e,-n):n>=64n?0:At(BigInt.asIntN(64,wt(e)>>n))},ME=function(e,t){return wt(e)<wt(t)},BE=function(e,t){return typeof e=="bigint"||typeof t=="bigint"?he(e)===he(t):e===t},DE=function(e,t){return typeof e=="bigint"||typeof t=="bigint"?he(e)<he(t):e<t},GE=function(e,t){return typeof e=="bigint"||typeof t=="bigint"?he(e)<=he(t):e<=t},qE=function(e,t){if(typeof e!="number"||!isFinite(e))return null;let n=Math.floor(e);if(e!==n){if(t===0)return null;t>1&&(n+=1)}if(n>=Eo&&n<=ko)return n;if(n<-9223372036854776e3||n>9223372036854776e3)return null;let s=BigInt(n.toFixed(0));return s<dn||s>ur?null:Hn(s)},HE=function(e){return typeof e=="bigint"?Number(e):e},LE=function(e){return typeof e=="bigint"?e.toString():String(e)},jE=function(e){try{let t=BigInt(e);return t<dn||t>ur?null:Hn(t)}catch{return null}},XE=function(e,t){try{let n=BigInt("0x"+e);return t&&(n=-n),n<dn||n>ur?null:Hn(n)}catch{return null}},zE=function(e){let t=wt(e),n=new ArrayBuffer(8),s=new DataView(n);return s.setUint32(0,Number(t&0xFFFFFFFFn),!0),s.setUint32(4,Number(t>>32n),!0),new Uint8Array(n)},WE=function(e){let t=new DataView(e.buffer,e.byteOffset,8),n=BigInt(t.getUint32(0,!0)),r=BigInt(t.getUint32(4,!0))<<32n|n;return At(BigInt.asIntN(64,r))};lh.exports={MAX_INT64:ur,MIN_INT64:dn,MODULO:So,MAX_SAFE:ko,MIN_SAFE:Eo,isIntRep:TE,isSafeNumber:RE,toBigInt:he,toFloat:HE,toDecimalString:LE,toBytesLE:zE,fromBytesLE:WE,normalize:yE,shrink:Hn,wrap:At,add:NE,sub:OE,mul:wE,neg:CE,idiv:IE,imod:VE,band:PE,bor:UE,bxor:KE,bnot:FE,shiftl:oh,shiftr:ah,ult:ME,eq:BE,lt:DE,le:GE,fromFloat:qE,fromDecimalString:jE,fromHexString:XE}});var lt=K((W4,q)=>{"use strict";var Xa=typeof process<"u"&&process.env&&process.env.FENGARICONF?JSON.parse(process.env.FENGARICONF):{},{LUA_VERSION_MAJOR:ZE,LUA_VERSION_MINOR:JE,to_luastring:pr}=Ae(),YE=";";q.exports.LUA_PATH_SEP=YE;var $E="?";q.exports.LUA_PATH_MARK=$E;var QE="!";q.exports.LUA_EXEC_DIR=QE;var fr=ZE+"."+JE;q.exports.LUA_VDIR=fr;if(typeof process>"u"){q.exports.LUA_DIRSEP="/";let t="./lua/"+fr+"/";q.exports.LUA_LDIR=t;let n=t;q.exports.LUA_JSDIR=n;let s=pr(t+"?.lua;"+t+"?/init.lua;./?.lua;./?/init.lua");q.exports.LUA_PATH_DEFAULT=s;let r=pr(n+"?.js;"+n+"loadall.js;./?.js");q.exports.LUA_JSPATH_DEFAULT=r}else if(vs("os").platform()==="win32"){q.exports.LUA_DIRSEP="\\";let t="!\\lua\\";q.exports.LUA_LDIR=t;let n="!\\";q.exports.LUA_JSDIR=n;let s="!\\..\\share\\lua\\"+fr+"\\";q.exports.LUA_SHRDIR=s;let r=pr(t+"?.lua;"+t+"?\\init.lua;"+n+"?.lua;"+n+"?\\init.lua;"+s+"?.lua;"+s+"?\\init.lua;.\\?.lua;.\\?\\init.lua");q.exports.LUA_PATH_DEFAULT=r;let o=pr(n+"?.js;"+n+"..\\share\\lua\\"+fr+"\\?.js;"+n+"loadall.js;.\\?.js");q.exports.LUA_JSPATH_DEFAULT=o}else{q.exports.LUA_DIRSEP="/";let t="/usr/local/";q.exports.LUA_ROOT=t;let n="/usr/",s=t+"share/lua/"+fr+"/",r=n+"share/lua/"+fr+"/";q.exports.LUA_LDIR=s;let o=s;q.exports.LUA_JSDIR=o;let a=r,l=pr(s+"?.lua;"+s+"?/init.lua;"+r+"?.lua;"+r+"?/init.lua;./?.lua;./?/init.lua");q.exports.LUA_PATH_DEFAULT=l;let i=pr(o+"?.js;"+o+"loadall.js;"+a+"?.js;"+a+"loadall.js;./?.js");q.exports.LUA_JSPATH_DEFAULT=i}var ev=Xa.LUA_COMPAT_FLOATSTRING||!1,{MAX_INT64:tv,MIN_INT64:nv,shrink:ch}=at(),sv=ch(tv),rv=ch(nv),ov=Xa.LUAI_MAXSTACK||1e6,av=Xa.LUA_IDSIZE||59,{toDecimalString:lv,fromFloat:iv}=at(),cv=function(e){return lv(e)},uv=function(e){if(e===1/0)return"inf";if(e===-1/0)return"-inf";if(Number.isNaN(e))return"nan";if(e===0)return Object.is(e,-0)?"-0":"0";let t=e<0,n=Math.abs(e),s=Math.floor(Math.log10(n)),r=14;if(s<-4||s>=r){let a=(n/Math.pow(10,s)).toPrecision(r);a=ih(a);let l;return s>=0?l=s<10?"+0"+s:"+"+s:l=s>-10?"-0"+Math.abs(s):String(s),(t?"-":"")+a+"e"+l}else{let o=n.toPrecision(r);return o=ih(o),(t?"-":"")+o}},ih=function(e){return e.indexOf(".")>=0&&(e=e.replace(/0+$/,"").replace(/\.$/,"")),e},pv=function(e){let t=iv(e,0);return t===null?!1:t},uh="",fv="",dv=`%${uh}d`,hv="%.14g",gv=function(){return 46},mv=Xa.LUAL_BUFFERSIZE||8192,_v=function(e){if(e===0)return[e,0];let t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e);let n=t.getUint32(0)>>>20&2047;n===0&&(t.setFloat64(0,e*Math.pow(2,64)),n=(t.getUint32(0)>>>20&2047)-64);let s=n-1022;return[ph(e,-s),s]},ph=function(e,t){if(e===0||!isFinite(e))return e;let n=Math.min(3,Math.ceil(Math.abs(t)/1023)),s=e;for(let r=0;r<n;r++)s*=Math.pow(2,Math.floor((t+r)/n));return s};q.exports.LUAI_MAXSTACK=ov;q.exports.LUA_COMPAT_FLOATSTRING=ev;q.exports.LUA_IDSIZE=av;q.exports.LUA_INTEGER_FMT=dv;q.exports.LUA_INTEGER_FRMLEN=uh;q.exports.LUA_MAXINTEGER=sv;q.exports.LUA_MININTEGER=rv;q.exports.LUA_NUMBER_FMT=hv;q.exports.LUA_NUMBER_FRMLEN=fv;q.exports.LUAL_BUFFERSIZE=mv;q.exports.frexp=_v;q.exports.ldexp=ph;q.exports.lua_getlocaledecpoint=gv;q.exports.lua_integer2str=cv;q.exports.lua_number2str=uv;q.exports.lua_numbertointeger=pv});var Ae=K((Z4,E)=>{"use strict";var dh=Uint8Array.from.bind(Uint8Array),bv=function(e,t,n){return e.indexOf(t,n)},xv=Uint8Array.of.bind(Uint8Array),vo=function(e){return e instanceof Uint8Array},Av=function(e,t){if(e!==t){let n=e.length;if(n!==t.length)return!1;for(let s=0;s<n;s++)if(e[s]!==t[s])return!1}return!0},Lt="cannot convert invalid utf8 to javascript string",Sv=function(e,t,n,s){if(!vo(e))throw new TypeError("to_jsstring expects a Uint8Array");n===void 0?n=e.length:n=Math.min(e.length,n);let r="",o=t!==void 0?t:0,a=!0;for(let l=o;l<n;l++)if(e[l]>=128){a=!1;break}if(a){if(n-o<=32768)return String.fromCharCode.apply(null,e.subarray(o,n));let i="";for(let u=o;u<n;u+=32768)i+=String.fromCharCode.apply(null,e.subarray(u,Math.min(u+32768,n)));return i}for(let l=o;l<n;){let i=e[l++];if(i<128)r+=String.fromCharCode(i);else if(i<194||i>244){if(!s)throw RangeError(Lt);r+="\xEF\xBF\xBD"}else if(i<=223){if(l>=n){if(!s)throw RangeError(Lt);r+="\xEF\xBF\xBD";continue}let u=e[l++];if((u&192)!==128){if(!s)throw RangeError(Lt);r+="\xEF\xBF\xBD";continue}r+=String.fromCharCode(((i&31)<<6)+(u&63))}else if(i<=239){if(l+1>=n){if(!s)throw RangeError(Lt);r+="\xEF\xBF\xBD";continue}let u=e[l++];if((u&192)!==128){if(!s)throw RangeError(Lt);r+="\xEF\xBF\xBD";continue}let c=e[l++];if((c&192)!==128){if(!s)throw RangeError(Lt);r+="\xEF\xBF\xBD";continue}let f=((i&15)<<12)+((u&63)<<6)+(c&63);if(f<=65535)r+=String.fromCharCode(f);else{f-=65536;let _=(f>>10)+55296,U=f%1024+56320;r+=String.fromCharCode(_,U)}}else{if(l+2>=n){if(!s)throw RangeError(Lt);r+="\xEF\xBF\xBD";continue}let u=e[l++];if((u&192)!==128){if(!s)throw RangeError(Lt);r+="\xEF\xBF\xBD";continue}let c=e[l++];if((c&192)!==128){if(!s)throw RangeError(Lt);r+="\xEF\xBF\xBD";continue}let f=e[l++];if((f&192)!==128){if(!s)throw RangeError(Lt);r+="\xEF\xBF\xBD";continue}let _=((i&7)<<18)+((u&63)<<12)+((c&63)<<6)+(f&63);_-=65536;let U=(_>>10)+55296,g=_%1024+56320;r+=String.fromCharCode(U,g)}}return r},kv=(function(){let e=";,/?:@&=+$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,-_.!~*'()#",t=new Uint8Array(256);for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=1;return t})(),Ev=function(e){if(!vo(e))throw new TypeError("to_uristring expects a Uint8Array");let t=e.length,n=[],s="";for(let r=0;r<t;r++){let o=e[r];kv[o]?s+=String.fromCharCode(o):(s.length&&(n.push(s),s=""),n.push("%"+(o<16?"0":"")+o.toString(16)))}return s.length&&n.push(s),n.length<=1?n[0]||"":n.join("")},fh={},fc=function(e,t){if(typeof e!="string")throw new TypeError("to_luastring expects a javascript string");if(t){let o=fh[e];if(vo(o))return o}let n=e.length,s=Array(n),r=0;for(let o=0;o<n;++o){let a=e.charCodeAt(o);if(a<=127)s[r++]=a;else if(a<=2047)s[r++]=192|a>>6,s[r++]=128|a&63;else{if(a>=55296&&a<=56319&&o+1<n){let l=e.charCodeAt(o+1);l>=56320&&l<=57343&&(o++,a=(a-55296)*1024+l+9216)}a<=65535?(s[r++]=224|a>>12,s[r++]=128|a>>6&63,s[r++]=128|a&63):(s[r++]=240|a>>18,s[r++]=128|a>>12&63,s[r++]=128|a>>6&63,s[r++]=128|a&63)}}return s=dh(s),t&&(fh[e]=s),s},vv=function(e){if(!vo(e))if(typeof e=="string")e=fc(e);else throw new TypeError("expects an array of bytes or javascript string");return e};E.exports.luastring_from=dh;E.exports.luastring_indexOf=bv;E.exports.luastring_of=xv;E.exports.is_luastring=vo;E.exports.luastring_eq=Av;E.exports.to_jsstring=Sv;E.exports.to_uristring=Ev;E.exports.to_luastring=fc;E.exports.from_userstring=vv;var Tv=fc("\x1BLua"),hh="5",gh="3",Rv=503,mh="4",_h="Lua "+hh+"."+gh,bh=_h+"."+mh,yv=bh+"  Copyright (C) 1994-2017 Lua.org, PUC-Rio",Nv="R. Ierusalimschy, L. H. de Figueiredo, W. Celes";E.exports.LUA_SIGNATURE=Tv;E.exports.LUA_VERSION_MAJOR=hh;E.exports.LUA_VERSION_MINOR=gh;E.exports.LUA_VERSION_NUM=Rv;E.exports.LUA_VERSION_RELEASE=mh;E.exports.LUA_VERSION=_h;E.exports.LUA_RELEASE=bh;E.exports.LUA_COPYRIGHT=yv;E.exports.LUA_AUTHORS=Nv;var Ov={LUA_OK:0,LUA_YIELD:1,LUA_ERRRUN:2,LUA_ERRSYNTAX:3,LUA_ERRMEM:4,LUA_ERRGCMM:5,LUA_ERRERR:6},Ye={LUA_TNONE:-1,LUA_TNIL:0,LUA_TBOOLEAN:1,LUA_TLIGHTUSERDATA:2,LUA_TNUMBER:3,LUA_TSTRING:4,LUA_TTABLE:5,LUA_TFUNCTION:6,LUA_TUSERDATA:7,LUA_TTHREAD:8,LUA_NUMTAGS:9};Ye.LUA_TSHRSTR=Ye.LUA_TSTRING|0;Ye.LUA_TLNGSTR=Ye.LUA_TSTRING|16;Ye.LUA_TNUMFLT=Ye.LUA_TNUMBER|0;Ye.LUA_TNUMINT=Ye.LUA_TNUMBER|16;Ye.LUA_TLCL=Ye.LUA_TFUNCTION|0;Ye.LUA_TLCF=Ye.LUA_TFUNCTION|16;Ye.LUA_TCCL=Ye.LUA_TFUNCTION|32;var wv=0,Cv=1,Iv=2,Vv=3,Pv=4,Uv=5,Kv=6,Fv=7,Mv=8,Bv=9,Dv=10,Gv=11,qv=12,Hv=13,Lv=0,jv=1,Xv=2,zv=20,{LUAI_MAXSTACK:Wv}=lt(),xh=-Wv-1e3,Zv=function(e){return xh-e},Jv=1,Ah=2,Yv=Ah,pc=class{constructor(){this.event=NaN,this.name=null,this.namewhat=null,this.what=null,this.source=null,this.currentline=NaN,this.linedefined=NaN,this.lastlinedefined=NaN,this.nups=NaN,this.nparams=NaN,this.isvararg=NaN,this.istailcall=NaN,this.short_src=null,this.i_ci=null}},Sh=0,kh=1,Eh=2,vh=3,$v=4,Qv=1<<Sh,e1=1<<kh,t1=1<<Eh,n1=1<<vh;E.exports.LUA_HOOKCALL=Sh;E.exports.LUA_HOOKCOUNT=vh;E.exports.LUA_HOOKLINE=Eh;E.exports.LUA_HOOKRET=kh;E.exports.LUA_HOOKTAILCALL=$v;E.exports.LUA_MASKCALL=Qv;E.exports.LUA_MASKCOUNT=n1;E.exports.LUA_MASKLINE=t1;E.exports.LUA_MASKRET=e1;E.exports.LUA_MINSTACK=zv;E.exports.LUA_MULTRET=-1;E.exports.LUA_OPADD=wv;E.exports.LUA_OPBAND=Fv;E.exports.LUA_OPBNOT=Hv;E.exports.LUA_OPBOR=Mv;E.exports.LUA_OPBXOR=Bv;E.exports.LUA_OPDIV=Uv;E.exports.LUA_OPEQ=Lv;E.exports.LUA_OPIDIV=Kv;E.exports.LUA_OPLE=Xv;E.exports.LUA_OPLT=jv;E.exports.LUA_OPMOD=Vv;E.exports.LUA_OPMUL=Iv;E.exports.LUA_OPPOW=Pv;E.exports.LUA_OPSHL=Dv;E.exports.LUA_OPSHR=Gv;E.exports.LUA_OPSUB=Cv;E.exports.LUA_OPUNM=qv;E.exports.LUA_REGISTRYINDEX=xh;E.exports.LUA_RIDX_GLOBALS=Ah;E.exports.LUA_RIDX_LAST=Yv;E.exports.LUA_RIDX_MAINTHREAD=Jv;E.exports.constant_types=Ye;E.exports.lua_Debug=pc;E.exports.lua_upvalueindex=Zv;E.exports.thread_status=Ov});var it=K((J4,Ve)=>{var jt=Ae(),Th="0",Rh="1",s1=1,yh="5",Nh="Fengari "+Th+"."+Rh,Oh=Nh+"."+yh,wh="B. Giannangeli, Daurnimator",r1=Oh+"  Copyright (C) 2017-2019 "+wh+`
Based on: `+jt.LUA_COPYRIGHT;Ve.exports.FENGARI_AUTHORS=wh;Ve.exports.FENGARI_COPYRIGHT=r1;Ve.exports.FENGARI_RELEASE=Oh;Ve.exports.FENGARI_VERSION=Nh;Ve.exports.FENGARI_VERSION_MAJOR=Th;Ve.exports.FENGARI_VERSION_MINOR=Rh;Ve.exports.FENGARI_VERSION_NUM=s1;Ve.exports.FENGARI_VERSION_RELEASE=yh;Ve.exports.is_luastring=jt.is_luastring;Ve.exports.luastring_eq=jt.luastring_eq;Ve.exports.luastring_from=jt.luastring_from;Ve.exports.luastring_indexOf=jt.luastring_indexOf;Ve.exports.luastring_of=jt.luastring_of;Ve.exports.to_jsstring=jt.to_jsstring;Ve.exports.to_luastring=jt.to_luastring;Ve.exports.to_uristring=jt.to_uristring;Ve.exports.from_userstring=jt.from_userstring});var ct=K((Y4,Ln)=>{"use strict";var o1=function(e){if(!e)throw Error("assertion failed")};Ln.exports.lua_assert=o1;var a1=function(e,t,n){if(!t)throw Error(n)};Ln.exports.api_check=a1;var l1=200;Ln.exports.LUAI_MAXCCALLS=l1;var i1=32;Ln.exports.LUA_MINBUFFER=i1;var c1=function(e,t,n){let s=t%n;return s*n<0&&(s+=n),s};Ln.exports.luai_nummod=c1;var{MAX_INT64:u1,MIN_INT64:p1,shrink:Ch}=at(),f1=Ch(u1);Ln.exports.MAX_INT=f1;var d1=Ch(p1);Ln.exports.MIN_INT=d1});var dc=K(($4,Ts)=>{"use strict";var{luastring_of:h1}=Ae(),dr=h1(0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,22,22,22,22,22,22,22,22,22,22,4,4,4,4,4,4,4,21,21,21,21,21,21,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,5,4,21,21,21,21,21,21,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),Ih=0,Vh=1,g1=2,m1=3,_1=4,b1=function(e){return(dr[e+1]&1<<Vh)!==0},x1=function(e){return(dr[e+1]&1<<_1)!==0},A1=function(e){return(dr[e+1]&1<<g1)!==0},S1=function(e){return(dr[e+1]&1<<m1)!==0},k1=function(e){return(dr[e+1]&1<<Ih)!==0},E1=function(e){return(dr[e+1]&(1<<Ih|1<<Vh))!==0};Ts.exports.lisdigit=b1;Ts.exports.lislalnum=E1;Ts.exports.lislalpha=k1;Ts.exports.lisprint=A1;Ts.exports.lisspace=S1;Ts.exports.lisxdigit=x1});var Xt=K((Q4,jn)=>{"use strict";var{is_luastring:v1,luastring_eq:T1,luastring_from:R1,to_luastring:y1}=Ae(),{lua_assert:To}=ct(),Rs=class{constructor(t,n){this.hash=null,this.realstring=n}getstr(){return this.realstring}tsslen(){return this.realstring.length}},N1=(e,t)=>(To(e instanceof Rs),To(t instanceof Rs),e===t||T1(e.realstring,t.realstring)),Ph="|",hc=32768,Uh=e=>{To(v1(e));let t=e.length;if(t<=hc)return Ph+String.fromCharCode.apply(null,e);let n=Ph;for(let s=0;s<t;s+=hc)n+=String.fromCharCode.apply(null,e.subarray(s,s+hc));return n},O1=function(e){return To(e instanceof Rs),e.hash===null&&(e.hash=Uh(e.getstr())),e.hash},gc=function(e,t){return To(t instanceof Uint8Array),new Rs(e,t)},w1=function(e,t){return gc(e,R1(t))},C1=function(e,t){return gc(e,y1(t))};jn.exports.luaS_eqlngstr=N1;jn.exports.luaS_hash=Uh;jn.exports.luaS_hashlongstr=O1;jn.exports.luaS_bless=gc;jn.exports.luaS_new=w1;jn.exports.luaS_newliteral=C1;jn.exports.TString=Rs});var Ct=K((tH,Xe)=>{var{constant_types:{LUA_TBOOLEAN:I1,LUA_TCCL:_c,LUA_TLCF:V1,LUA_TLCL:za,LUA_TLIGHTUSERDATA:P1,LUA_TLNGSTR:U1,LUA_TNIL:Za,LUA_TNUMFLT:K1,LUA_TNUMINT:kc,LUA_TSHRSTR:F1,LUA_TTABLE:ys,LUA_TTHREAD:hr,LUA_TUSERDATA:bc},to_jsstring:M1,to_luastring:yo}=Ae(),{LUA_MAXINTEGER:eH}=lt(),{lua_assert:Oo}=ct(),mc=at(),Xn=new Set,xc=0,Ac=0,Ec=1,vc=!0,Ro=!1,Sc=gn(),ge=$e(),{luaS_bless:Mh,luaS_hashlongstr:Bh,TString:Dh}=Xt(),Gh=hn(),Kh=new WeakMap,Fh=function(e){let t=Kh.get(e);return t||(t={},Kh.set(e,t)),t},qh=function(e){let t=mc.fromFloat(e,0);return t!==null?t:e===Math.pow(2,63)?mc.MAX_INT64:e===-Math.pow(2,63)?mc.MIN_INT64:null},Ya=function(e,t){switch(t.type){case Za:return Sc.luaG_runerror(e,yo("table index is nil",!0));case K1:{if(isNaN(t.value))return Sc.luaG_runerror(e,yo("table index is NaN",!0));let n=qh(t.value);return n===null?t.value:n}case kc:case I1:case ys:case za:case V1:case _c:case bc:case hr:return t.value;case F1:case U1:return Bh(t.tsvalue());case P1:{let n=t.value;switch(typeof n){case"string":return"*"+n;case"number":return"#"+n;case"boolean":return n?"?true":"?false";case"function":return Fh(n);case"object":if(n instanceof Gh.lua_State&&n.l_G===e.l_G||n instanceof No||n instanceof ge.Udata||n instanceof ge.LClosure||n instanceof ge.CClosure)return Fh(n);default:return n}}default:throw new Error("unknown key type: "+t.type)}},No=class{constructor(t){this.id=t.l_G.id_counter++,this.strong=new Map,this.weakKeys=new WeakMap,this.dead_strong=new Map,this.dead_weak=void 0,this.f=void 0,this.l=void 0,this.metatable=null,this.weakMode="",this.finalized=!1,this.finalizerPending=!1,this.flags=-1,Xn.add(this)}},B1=function(e){e.flags=0},Hh=function(e,t,n,s){e.dead_strong.clear(),e.dead_weak=void 0;let r=null,o={key:n,value:s,hash:t,keyRef:void 0,valueRef:void 0,weakKey:!1,weakValue:!1,p:r=e.l,n:void 0,live:!0};e.f||(e.f=o),r&&(r.n=o),e.l=o,Lh(e,o)},Tc=function(e){return typeof e=="object"?e!==null:typeof e=="function"},Ja=function(e){return Tc(e)&&!(e instanceof Dh)},D1=function(e,t){let n=t.n,s=t.p;s&&(s.n=n),n&&(n.p=s),e.f===t&&(e.f=n),e.l===t&&(e.l=s),t.p=void 0,t.n=void 0,t.live=!1},gr=function(e,t){if(t.live){if(t.weakKey){let n=t.keyRef?t.keyRef.deref():t.key.value;n!=null&&e.weakKeys.delete(n)}else e.strong.delete(t.hash);D1(e,t)}},zn=function(e){if(e.keyRef){let t=e.keyRef.deref();if(t===void 0)return null;e.key.value=t}return e.key},Wn=function(e){if(e.valueRef){let t=e.valueRef.deref();if(t===void 0)return null;e.value.value=t}return e.value},G1=function(e,t){if(!t)return"";let n=yc(t,Mh(e,yo("__mode",!0)));return n.ttisstring()?M1(n.svalue()):""},Lh=function(e,t){let n=t.key.value,s=t.value.value;t.weakKey=e.weakMode.indexOf("k")!==-1&&Ja(n),t.weakValue=e.weakMode.indexOf("v")!==-1&&Ja(s),t.keyRef=void 0,t.valueRef=void 0,t.weakKey?(t.hash=void 0,e.weakKeys.set(n,t)):e.strong.set(t.hash,t),t.weakValue&&(t.valueRef=void 0)},jh=function(e,t){let n=G1(e,t.metatable);if(n===t.weakMode)return;t.weakMode=n;let s=[];for(let r=t.f;r;){let o=r.n,a=zn(r),l=Wn(r);a===null||l===null?gr(t,r):(r.keyRef=void 0,r.valueRef=void 0,r.key.value=a.value,r.value.value=l.value,s.push(r)),r=o}t.strong.clear(),t.weakKeys=new WeakMap;for(let r of s)r.hash=Ya(e,r.key),Lh(t,r)},wo=function(e,t){let n;return Tc(t)&&(n=e.weakKeys.get(t)),n||(n=e.strong.get(t)),n?zn(n)===null||Wn(n)===null?(gr(e,n),null):n:null},Rc=function(e,t){let n=wo(e,t);return n?n.value:ge.luaO_nilobject},Wa=function(e,t){return Oo(typeof t=="number"&&Number.isInteger(t)),Rc(e,t)},yc=function(e,t){return Oo(t instanceof Dh),Rc(e,Bh(t))},q1=function(e,t,n){return Oo(n instanceof ge.TValue),n.ttisnil()||n.ttisfloat()&&isNaN(n.value)?ge.luaO_nilobject:Rc(t,Ya(e,n))},H1=function(e,t,n){Oo(typeof t=="number"&&Number.isInteger(t)&&n instanceof ge.TValue);let s=t;if(n.ttisnil()){Xh(e,s);return}let r=wo(e,s);if(r)r.valueRef=void 0,r.weakValue=!1,r.value.setfrom(n),e.weakMode.indexOf("v")!==-1&&Ja(n.value)&&(r.weakValue=!0);else{let o=new ge.TValue(kc,t),a=new ge.TValue(n.type,n.value);Hh(e,s,o,a)}},L1=function(e,t,n,s){Oo(n instanceof ge.TValue),jh(e,t);let r=Ya(e,n);if(s.ttisnil()){Xh(t,r);return}let o=wo(t,r);if(o)o.valueRef=void 0,o.weakValue=!1,o.value.setfrom(s),t.weakMode.indexOf("v")!==-1&&Ja(s.value)&&(o.weakValue=!0);else{let a,l=n.value;if(n.ttisfloat()){let u=qh(l);u!==null?a=new ge.TValue(kc,u):a=new ge.TValue(n.type,l)}else a=new ge.TValue(n.type,l);let i=new ge.TValue(s.type,s.value);Hh(t,r,a,i)}},j1=function(e,t,n){t.metatable=n,jh(e,t)},Xh=function(e,t){let n=wo(e,t);if(!n)return;if(n.weakKey){gr(e,n);return}n.key.setdeadvalue(),n.value.setnilvalue(),n.valueRef=void 0,n.weakValue=!1;let s=n.n,r=n.p;n.p=void 0,r&&(r.n=s),s&&(s.p=r),e.f===n&&(e.f=s),e.l===n&&(e.l=r),n.live=!1,e.strong.delete(t),Tc(t)?(e.dead_weak||(e.dead_weak=new WeakMap),e.dead_weak.set(t,n)):e.dead_strong.set(t,n)},X1=function(e){for(let t=e.f;t;t=t.n)if(t.key&&t.key.type===hr||t.value&&t.value.type===hr)return!0;return!1},z1=function(e){vc=!!e},W1=function(){return Ec},Z1=function(e){Ro||!vc||(Ac++,Ac>=1e4&&Nc(e))},Nc=function(e){if(Ro)return;Ro=!0;let t=new Set,n=new Set,s=null;try{typeof console<"u"&&typeof process<"u"&&process.env.LUANODE_GC_DEBUG&&console.error("GC_START",Xn.size);let r=[],o=0,a=function(g,m){if(m!=null)switch(g){case ys:case hr:case za:case _c:case bc:if(t.has(m))return;t.add(m),r.push({type:g,value:m});break;default:break}},l=function(g){g&&g.type!==Za&&!g.ttisdeadkey()&&a(g.type,g.value)},i=function(){for(;o<r.length;){let g=r[o++];switch(g.type){case ys:{let m=g.value;n.add(m),m.finalizerPending=!1,m.metatable&&a(ys,m.metatable);for(let C=m.f;C;C=C.n){let T=zn(C),W=Wn(C);T&&!C.weakKey&&l(T),W&&!C.weakValue&&T&&(!C.weakKey||t.has(T.value))&&l(W)}break}case hr:{let m=g.value;if(m.stack){let C=Number.isFinite(m.top)?m.top:m.stack.length;for(let T=0;T<C;T++)l(m.stack[T])}m.ci&&m.ci.func&&l(m.ci.func);break}case za:{let m=g.value;m.upvals&&m.upvals.forEach(l),m.p&&(m.p.k&&m.p.k.forEach(l),m.p.cache&&a(za,m.p.cache));break}case _c:{let m=g.value;m.upvalue&&m.upvalue.forEach(l);break}case bc:{let m=g.value;m.metatable&&a(ys,m.metatable),m.uservalue&&l(m.uservalue);break}default:break}}};a(hr,e),e.l_G&&e.l_G.l_registry&&l(e.l_G.l_registry),e.l_G&&e.l_G.mt&&e.l_G.mt.forEach(g=>{g&&a(ys,g)}),i();let u=!0;for(;u;){let g=t.size;for(let m of n)for(let C=m.f;C;C=C.n){let T=zn(C),W=Wn(C);W&&!C.weakValue&&T&&(!C.weakKey||t.has(T.value))&&l(W)}i(),u=t.size!==g}for(let g of Xn)for(let m=g.f;m;){let C=m.n,T=zn(m),W=Wn(m),de=t.has(g),pn=m.weakKey&&T&&(!de||!t.has(T.value));(m.weakValue&&W&&(!de||!t.has(W.value))||pn&&!de)&&gr(g,m),m=C}let c=Mh(e,yo("__gc",!0)),f=mr(),_=It(),U=Array.from(Xn).reverse();for(let g of U){if(t.has(g)||g.finalized||!g.metatable)continue;let m=yc(g.metatable,c);if(!m.ttisfunction()||g.metatable.weakMode.indexOf("v")!==-1&&!t.has(m.value))continue;if(X1(g)&&!g.finalizerPending){g.finalizerPending=!0;continue}g.finalized=!0,g.finalizerPending=!1;let C=e.top;if(ge.pushobj2s(e,m),ge.pushobj2s(e,new ge.TValue(ys,g)),e.ci.callstatus&Gh.CIST_LUA)try{_.luaD_callnoyield(e,C,0)}catch{e.top=C,e.status=0}else if(f.lua_pcall(e,1,0,0)!==0){if(!s){let W=e.stack[e.top-1];s=W?new ge.TValue(W.type,W.value):new ge.TValue(Za,null)}e.top=C}}for(let g of Xn)for(let m=g.f;m;){let C=m.n,T=zn(m),W=Wn(m),de=m.weakKey&&T&&!t.has(T.value),pn=m.weakValue&&W&&!t.has(W.value);(de||pn)&&gr(g,m),m=C}for(let g of Xn)!t.has(g)&&!g.finalizerPending&&Xn.delete(g);return Ec=Math.max(1,n.size),s}finally{xc=0,Ac=0,Ro=!1,typeof console<"u"&&typeof process<"u"&&process.env.LUANODE_GC_DEBUG&&console.error("GC_END",Xn.size,n.size)}},J1=function(e){let t=0,n=e.strong.size+1;for(;!Wa(e,n).ttisnil();){if(t=n,n>4611686018427388e3){for(t=1;!Wa(e,t).ttisnil();)t++;return t-1}n*=2}for(;n-t>1;){let s=Math.floor((t+n)/2);Wa(e,s).ttisnil()?n=s:t=s}return t},Y1=function(e,t,n){let s=e.stack[n],r;if(s.type===Za)r=t.f;else{let o=Ya(e,s);if(r=wo(t,o),r)r=r.n;else{if(r=t.dead_weak&&t.dead_weak.get(o)||t.dead_strong.get(o),!r)return Sc.luaG_runerror(e,yo("invalid key to 'next'"));do if(r=r.n,!r)return!1;while(r.key.ttisdeadkey())}}for(;r;){let o=r.n,a=zn(r),l=Wn(r);if(a!==null&&l!==null)break;gr(t,r),r=o}return r?(ge.setobj2s(e,n,zn(r)),ge.setobj2s(e,n+1,Wn(r)),!0):!1};Xe.exports.invalidateTMcache=B1;Xe.exports.luaH_get=q1;Xe.exports.luaH_getint=Wa;Xe.exports.luaH_getn=J1;Xe.exports.luaH_getstr=yc;Xe.exports.luaH_collectgarbage=Nc;Xe.exports.luaH_maybe_gc=Z1;Xe.exports.luaH_setrunning=z1;Xe.exports.luaH_memory=W1;Xe.exports.luaH_setfrom=L1;Xe.exports.luaH_setint=H1;Xe.exports.luaH_setmeta=j1;Xe.exports.luaH_new=function(e){let t=new No(e);if(Ec++,xc++,!Ro&&vc&&xc>=100)try{Nc(e)}catch(n){throw typeof console<"u"&&console.error("LuaNode automatic GC exception",n&&n.stack||n),n}return t};Xe.exports.luaH_next=Y1;Xe.exports.Table=No});var $n=K((nH,S)=>{"use strict";var $1=["MOVE","LOADK","LOADKX","LOADBOOL","LOADNIL","GETUPVAL","GETTABUP","GETTABLE","SETTABUP","SETUPVAL","SETTABLE","NEWTABLE","SELF","ADD","SUB","MUL","MOD","POW","DIV","IDIV","BAND","BOR","BXOR","SHL","SHR","UNM","BNOT","NOT","LEN","CONCAT","JMP","EQ","LT","LE","TEST","TESTSET","CALL","TAILCALL","RETURN","FORLOOP","FORPREP","TFORCALL","TFORLOOP","SETLIST","CLOSURE","VARARG","EXTRAARG"],Q1={OP_MOVE:0,OP_LOADK:1,OP_LOADKX:2,OP_LOADBOOL:3,OP_LOADNIL:4,OP_GETUPVAL:5,OP_GETTABUP:6,OP_GETTABLE:7,OP_SETTABUP:8,OP_SETUPVAL:9,OP_SETTABLE:10,OP_NEWTABLE:11,OP_SELF:12,OP_ADD:13,OP_SUB:14,OP_MUL:15,OP_MOD:16,OP_POW:17,OP_DIV:18,OP_IDIV:19,OP_BAND:20,OP_BOR:21,OP_BXOR:22,OP_SHL:23,OP_SHR:24,OP_UNM:25,OP_BNOT:26,OP_NOT:27,OP_LEN:28,OP_CONCAT:29,OP_JMP:30,OP_EQ:31,OP_LT:32,OP_LE:33,OP_TEST:34,OP_TESTSET:35,OP_CALL:36,OP_TAILCALL:37,OP_RETURN:38,OP_FORLOOP:39,OP_FORPREP:40,OP_TFORCALL:41,OP_TFORLOOP:42,OP_SETLIST:43,OP_CLOSURE:44,OP_VARARG:45,OP_EXTRAARG:46},me=0,le=1,Qe=2,G=3,B=0,$a=1,Co=2,zh=3,Uo=[64|Qe<<4|me<<2|B,64|G<<4|me<<2|$a,64|me<<4|me<<2|$a,64|le<<4|le<<2|B,64|le<<4|me<<2|B,64|le<<4|me<<2|B,64|le<<4|G<<2|B,64|Qe<<4|G<<2|B,0|G<<4|G<<2|B,0|le<<4|me<<2|B,0|G<<4|G<<2|B,64|le<<4|le<<2|B,64|Qe<<4|G<<2|B,64|G<<4|G<<2|B,64|G<<4|G<<2|B,64|G<<4|G<<2|B,64|G<<4|G<<2|B,64|G<<4|G<<2|B,64|G<<4|G<<2|B,64|G<<4|G<<2|B,64|G<<4|G<<2|B,64|G<<4|G<<2|B,64|G<<4|G<<2|B,64|G<<4|G<<2|B,64|G<<4|G<<2|B,64|Qe<<4|me<<2|B,64|Qe<<4|me<<2|B,64|Qe<<4|me<<2|B,64|Qe<<4|me<<2|B,64|Qe<<4|Qe<<2|B,0|Qe<<4|me<<2|Co,128|G<<4|G<<2|B,128|G<<4|G<<2|B,128|G<<4|G<<2|B,128|me<<4|le<<2|B,192|Qe<<4|le<<2|B,64|le<<4|le<<2|B,64|le<<4|le<<2|B,0|le<<4|me<<2|B,64|Qe<<4|me<<2|Co,64|Qe<<4|me<<2|Co,0|me<<4|le<<2|B,64|Qe<<4|me<<2|Co,0|le<<4|le<<2|B,64|le<<4|me<<2|$a,64|le<<4|me<<2|B,0|le<<4|le<<2|zh],eT=function(e){return Uo[e]&3},tT=function(e){return Uo[e]>>4&3},nT=function(e){return Uo[e]>>2&3},sT=function(e){return Uo[e]&64},rT=function(e){return Uo[e]&128},Zn=9,Jn=9,Ns=Zn+Jn,ws=8,Io=Zn+Jn+ws,_r=6,zt=0,Yn=zt+_r,Cs=Yn+ws,Vo=Cs+Zn,Os=Cs,Po=Yn,Wh=(1<<Ns)-1,Qa=Wh>>1,oT=(1<<Io)-1,Zh=(1<<ws)-1,aT=(1<<Jn)-1,lT=(1<<Zn)-1,Ko=1<<Jn-1,iT=Ko-1,cT=Zh,uT=function(e){return e&Ko},pT=function(e){return e&~Ko},fT=function(e){return e|Ko},De=function(e,t){return~(-1<<e)<<t},Jh=function(e,t){return~De(e,t)},dT=function(e){return e.opcode},hT=function(e,t){return e.code=e.code&Jh(_r,zt)|t<<zt&De(_r,zt),br(e)},Fo=function(e,t,n,s){return e.code=e.code&Jh(s,n)|t<<n&De(s,n),br(e)},gT=function(e){return e.A},mT=function(e,t){return Fo(e,t,Yn,ws)},_T=function(e){return e.B},bT=function(e,t){return Fo(e,t,Vo,Jn)},xT=function(e){return e.C},AT=function(e,t){return Fo(e,t,Cs,Zn)},ST=function(e){return e.Bx},Yh=function(e,t){return Fo(e,t,Os,Ns)},kT=function(e){return e.Ax},ET=function(e,t){return Fo(e,t,Po,Io)},vT=function(e){return e.sBx},TT=function(e,t){return Yh(e,t+Qa)},br=function(e){if(typeof e=="number")return{code:e,opcode:e>>zt&De(_r,0),A:e>>Yn&De(ws,0),B:e>>Vo&De(Jn,0),C:e>>Cs&De(Zn,0),Bx:e>>Os&De(Ns,0),Ax:e>>Po&De(Io,0),sBx:(e>>Os&De(Ns,0))-Qa};{let t=e.code;return e.opcode=t>>zt&De(_r,0),e.A=t>>Yn&De(ws,0),e.B=t>>Vo&De(Jn,0),e.C=t>>Cs&De(Zn,0),e.Bx=t>>Os&De(Ns,0),e.Ax=t>>Po&De(Io,0),e.sBx=(t>>Os&De(Ns,0))-Qa,e}},RT=function(e,t,n,s){return br(e<<zt|t<<Yn|n<<Vo|s<<Cs)},yT=function(e,t,n){return br(e<<zt|t<<Yn|n<<Os)},NT=function(e,t){return br(e<<zt|t<<Po)},OT=50;S.exports.BITRK=Ko;S.exports.CREATE_ABC=RT;S.exports.CREATE_ABx=yT;S.exports.CREATE_Ax=NT;S.exports.GET_OPCODE=dT;S.exports.GETARG_A=gT;S.exports.GETARG_B=_T;S.exports.GETARG_C=xT;S.exports.GETARG_Bx=ST;S.exports.GETARG_Ax=kT;S.exports.GETARG_sBx=vT;S.exports.INDEXK=pT;S.exports.ISK=uT;S.exports.LFIELDS_PER_FLUSH=OT;S.exports.MAXARG_A=Zh;S.exports.MAXARG_Ax=oT;S.exports.MAXARG_B=aT;S.exports.MAXARG_Bx=Wh;S.exports.MAXARG_C=lT;S.exports.MAXARG_sBx=Qa;S.exports.MAXINDEXRK=iT;S.exports.NO_REG=cT;S.exports.OpArgK=G;S.exports.OpArgN=me;S.exports.OpArgR=Qe;S.exports.OpArgU=le;S.exports.OpCodes=$1;S.exports.OpCodesI=Q1;S.exports.POS_A=Yn;S.exports.POS_Ax=Po;S.exports.POS_B=Vo;S.exports.POS_Bx=Os;S.exports.POS_C=Cs;S.exports.POS_OP=zt;S.exports.RKASK=fT;S.exports.SETARG_A=mT;S.exports.SETARG_Ax=ET;S.exports.SETARG_B=bT;S.exports.SETARG_Bx=Yh;S.exports.SETARG_C=AT;S.exports.SETARG_sBx=TT;S.exports.SET_OPCODE=hT;S.exports.SIZE_A=ws;S.exports.SIZE_Ax=Io;S.exports.SIZE_B=Jn;S.exports.SIZE_Bx=Ns;S.exports.SIZE_C=Zn;S.exports.SIZE_OP=_r;S.exports.fullins=br;S.exports.getBMode=tT;S.exports.getCMode=nT;S.exports.getOpMode=eT;S.exports.iABC=B;S.exports.iABx=$a;S.exports.iAsBx=Co;S.exports.iAx=zh;S.exports.testAMode=sT;S.exports.testTMode=rT});var Is=K((sH,ne)=>{"use strict";var{LUA_MASKLINE:wT,LUA_MASKCOUNT:CT,LUA_MULTRET:IT,constant_types:{LUA_TBOOLEAN:VT,LUA_TLCF:PT,LUA_TLIGHTUSERDATA:UT,LUA_TLNGSTR:tg,LUA_TNIL:KT,LUA_TNUMBER:ng,LUA_TNUMFLT:FT,LUA_TNUMINT:MT,LUA_TSHRSTR:sg,LUA_TTABLE:rg,LUA_TUSERDATA:BT},to_luastring:ut}=Ae(),{INDEXK:og,ISK:ag,LFIELDS_PER_FLUSH:DT,OpCodesI:{OP_ADD:lg,OP_BAND:ig,OP_BNOT:cg,OP_BOR:ug,OP_BXOR:pg,OP_CALL:Cc,OP_CLOSURE:GT,OP_CONCAT:fg,OP_DIV:dg,OP_EQ:hg,OP_EXTRAARG:Oc,OP_FORLOOP:qT,OP_FORPREP:HT,OP_GETTABLE:gg,OP_GETTABUP:mg,OP_GETUPVAL:LT,OP_IDIV:_g,OP_JMP:bg,OP_LE:Ic,OP_LEN:xg,OP_LOADBOOL:jT,OP_LOADK:XT,OP_LOADKX:zT,OP_LOADNIL:WT,OP_LT:Ag,OP_MOD:Sg,OP_MOVE:ZT,OP_MUL:kg,OP_NEWTABLE:JT,OP_NOT:YT,OP_POW:Eg,OP_RETURN:$T,OP_SELF:vg,OP_SETLIST:QT,OP_SETTABLE:e0,OP_SETTABUP:t0,OP_SETUPVAL:n0,OP_SHL:Tg,OP_SHR:Rg,OP_SUB:yg,OP_TAILCALL:s0,OP_TEST:r0,OP_TESTSET:o0,OP_TFORCALL:Ng,OP_TFORLOOP:Vc,OP_UNM:Og,OP_VARARG:a0}}=$n(),{LUA_MAXINTEGER:l0,LUA_MININTEGER:i0,lua_numbertointeger:c0}=lt(),{lua_assert:Mt,luai_nummod:u0}=ct(),X=at(),Q=$e(),tl=Ps(),es=hn(),{luaS_bless:p0,luaS_eqlngstr:f0,luaS_hashlongstr:$h}=Xt(),Pe=It(),k=Vs(),ts=Ct(),qe=gn(),d0=function(e){let t=e.ci,n=t.l_base,s=t.l_code[t.l_savedpc-1],r=s.opcode;switch(r){case lg:case yg:case kg:case dg:case _g:case ig:case ug:case pg:case Tg:case Rg:case Sg:case Eg:case Og:case cg:case xg:case mg:case gg:case vg:{Q.setobjs2s(e,n+s.A,e.top-1),delete e.stack[--e.top];break}case Ic:case Ag:case hg:{let o=!e.stack[e.top-1].l_isfalse();delete e.stack[--e.top],t.callstatus&es.CIST_LEQ&&(Mt(r===Ic),t.callstatus^=es.CIST_LEQ,o=!o),Mt(t.l_code[t.l_savedpc].opcode===bg),o!==!!s.A&&t.l_savedpc++;break}case fg:{let o=e.top-1,a=s.B,l=o-1-(n+a);Q.setobjs2s(e,o-2,o),l>1&&(e.top=o-1,Mc(e,l)),Q.setobjs2s(e,t.l_base+s.A,e.top-1),Pe.adjust_top(e,t.top);break}case Ng:{Mt(t.l_code[t.l_savedpc].opcode===Vc),Pe.adjust_top(e,t.top);break}case Cc:{s.C-1>=0&&Pe.adjust_top(e,t.top);break}}},Qh=function(e,t,n){return t+n.A},Qn=function(e,t,n){return t+n.B},Ge=function(e,t,n,s){return ag(s.B)?n[og(s.B)]:e.stack[t+s.B]},Se=function(e,t,n,s){return ag(s.C)?n[og(s.C)]:e.stack[t+s.C]},h0=function(e){let t=e.ci;t.callstatus|=es.CIST_FRESH;e:for(;;){ts.luaH_maybe_gc(e),Mt(t===e.ci);let n=t.func.value,s=n.p.k,r=t.l_base,o=t.l_code[t.l_savedpc++];e.hookmask&(wT|CT)&&qe.luaG_traceexec(e);let a=Qh(e,r,o);switch(o.opcode){case ZT:{Q.setobjs2s(e,a,Qn(e,r,o));break}case XT:{let i=s[o.Bx];Q.setobj2s(e,a,i);break}case zT:{Mt(t.l_code[t.l_savedpc].opcode===Oc);let i=s[t.l_code[t.l_savedpc++].Ax];Q.setobj2s(e,a,i);break}case jT:{e.stack[a].setbvalue(o.B!==0),o.C!==0&&t.l_savedpc++;break}case WT:{for(let i=0;i<=o.B;i++)e.stack[a+i].setnilvalue();break}case LT:{let i=o.B;Q.setobj2s(e,a,n.upvals[i]);break}case mg:{let i=n.upvals[o.B],u=Se(e,r,s,o);el(e,i,u,a);break}case gg:{let i=e.stack[Qn(e,r,o)],u=Se(e,r,s,o);el(e,i,u,a);break}case t0:{let i=n.upvals[o.A],u=Ge(e,r,s,o),c=Se(e,r,s,o);Pc(e,i,u,c);break}case n0:{n.upvals[o.B].setfrom(e.stack[a]);break}case e0:{let i=e.stack[a],u=Ge(e,r,s,o),c=Se(e,r,s,o);Pc(e,i,u,c);break}case JT:{e.stack[a].sethvalue(ts.luaH_new(e));break}case vg:{let i=Qn(e,r,o),u=Se(e,r,s,o);Q.setobjs2s(e,a+1,i),el(e,e.stack[i],u,a);break}case lg:{let i=Ge(e,r,s,o),u=Se(e,r,s,o),c,f;i.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(X.add(i.value,u.value)):(c=ke(i))!==!1&&(f=ke(u))!==!1?e.stack[a].setfltvalue(c+f):k.luaT_trybinTM(e,i,u,e.stack[a],k.TMS.TM_ADD);break}case yg:{let i=Ge(e,r,s,o),u=Se(e,r,s,o),c,f;i.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(X.sub(i.value,u.value)):(c=ke(i))!==!1&&(f=ke(u))!==!1?e.stack[a].setfltvalue(c-f):k.luaT_trybinTM(e,i,u,e.stack[a],k.TMS.TM_SUB);break}case kg:{let i=Ge(e,r,s,o),u=Se(e,r,s,o),c,f;i.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(X.mul(i.value,u.value)):(c=ke(i))!==!1&&(f=ke(u))!==!1?e.stack[a].setfltvalue(c*f):k.luaT_trybinTM(e,i,u,e.stack[a],k.TMS.TM_MUL);break}case Sg:{let i=Ge(e,r,s,o),u=Se(e,r,s,o),c,f;if(i.ttisinteger()&&u.ttisinteger()){let _=X.imod(i.value,u.value);_==="divzero"&&qe.luaG_runerror(e,ut("attempt to perform 'n%%0'")),e.stack[a].setivalue(_)}else(c=ke(i))!==!1&&(f=ke(u))!==!1?e.stack[a].setfltvalue(u0(e,c,f)):k.luaT_trybinTM(e,i,u,e.stack[a],k.TMS.TM_MOD);break}case Eg:{let i=Ge(e,r,s,o),u=Se(e,r,s,o),c,f;(c=ke(i))!==!1&&(f=ke(u))!==!1?e.stack[a].setfltvalue(Math.pow(c,f)):k.luaT_trybinTM(e,i,u,e.stack[a],k.TMS.TM_POW);break}case dg:{let i=Ge(e,r,s,o),u=Se(e,r,s,o),c,f;(c=ke(i))!==!1&&(f=ke(u))!==!1?e.stack[a].setfltvalue(c/f):k.luaT_trybinTM(e,i,u,e.stack[a],k.TMS.TM_DIV);break}case _g:{let i=Ge(e,r,s,o),u=Se(e,r,s,o),c,f;if(i.ttisinteger()&&u.ttisinteger()){let _=X.idiv(i.value,u.value);_==="divzero"?qe.luaG_runerror(e,ut("attempt to divide by zero")):_==="overflow"&&qe.luaG_runerror(e,ut("integer overflow")),e.stack[a].setivalue(_)}else(c=ke(i))!==!1&&(f=ke(u))!==!1?e.stack[a].setfltvalue(Math.floor(c/f)):k.luaT_trybinTM(e,i,u,e.stack[a],k.TMS.TM_IDIV);break}case ig:{let i=Ge(e,r,s,o),u=Se(e,r,s,o),c,f;(c=Ft(i))!==!1&&(f=Ft(u))!==!1?e.stack[a].setivalue(X.band(c,f)):k.luaT_trybinTM(e,i,u,e.stack[a],k.TMS.TM_BAND);break}case ug:{let i=Ge(e,r,s,o),u=Se(e,r,s,o),c,f;(c=Ft(i))!==!1&&(f=Ft(u))!==!1?e.stack[a].setivalue(X.bor(c,f)):k.luaT_trybinTM(e,i,u,e.stack[a],k.TMS.TM_BOR);break}case pg:{let i=Ge(e,r,s,o),u=Se(e,r,s,o),c,f;(c=Ft(i))!==!1&&(f=Ft(u))!==!1?e.stack[a].setivalue(X.bxor(c,f)):k.luaT_trybinTM(e,i,u,e.stack[a],k.TMS.TM_BXOR);break}case Tg:{let i=Ge(e,r,s,o),u=Se(e,r,s,o),c,f;(c=Ft(i))!==!1&&(f=Ft(u))!==!1?e.stack[a].setivalue(X.shiftl(c,f)):k.luaT_trybinTM(e,i,u,e.stack[a],k.TMS.TM_SHL);break}case Rg:{let i=Ge(e,r,s,o),u=Se(e,r,s,o),c,f;(c=Ft(i))!==!1&&(f=Ft(u))!==!1?e.stack[a].setivalue(X.shiftr(c,f)):k.luaT_trybinTM(e,i,u,e.stack[a],k.TMS.TM_SHR);break}case Og:{let i=e.stack[Qn(e,r,o)],u;i.ttisinteger()?e.stack[a].setivalue(X.neg(i.value)):(u=ke(i))!==!1?e.stack[a].setfltvalue(-u):k.luaT_trybinTM(e,i,i,e.stack[a],k.TMS.TM_UNM);break}case cg:{let i=e.stack[Qn(e,r,o)];i.ttisinteger()?e.stack[a].setivalue(X.bnot(i.value)):k.luaT_trybinTM(e,i,i,e.stack[a],k.TMS.TM_BNOT);break}case YT:{let i=e.stack[Qn(e,r,o)];e.stack[a].setbvalue(i.l_isfalse());break}case xg:{Pg(e,e.stack[a],e.stack[Qn(e,r,o)]);break}case fg:{let i=o.B,u=o.C;e.top=r+u+1,Mc(e,u-i+1);let c=r+i;Q.setobjs2s(e,a,c),Pe.adjust_top(e,t.top);break}case bg:{wg(e,t,o,0);break}case hg:{Uc(e,Ge(e,r,s,o),Se(e,r,s,o))!==o.A?t.l_savedpc++:Mo(e,t);break}case Ag:{Cg(e,Ge(e,r,s,o),Se(e,r,s,o))!==o.A?t.l_savedpc++:Mo(e,t);break}case Ic:{Ig(e,Ge(e,r,s,o),Se(e,r,s,o))!==o.A?t.l_savedpc++:Mo(e,t);break}case r0:{(o.C?e.stack[a].l_isfalse():!e.stack[a].l_isfalse())?t.l_savedpc++:Mo(e,t);break}case o0:{let i=Qn(e,r,o),u=e.stack[i];(o.C?u.l_isfalse():!u.l_isfalse())?t.l_savedpc++:(Q.setobjs2s(e,a,i),Mo(e,t));break}case Cc:{let i=o.B,u=o.C-1;if(i!==0&&Pe.adjust_top(e,a+i),Pe.luaD_precall(e,a,u))u>=0&&Pe.adjust_top(e,t.top);else{t=e.ci;continue e}break}case s0:{let i=o.B;if(i!==0&&Pe.adjust_top(e,a+i),!Pe.luaD_precall(e,a,IT)){let u=e.ci,c=u.previous,f=u.func,_=u.funcOff,U=c.funcOff,g=u.l_base+f.value.p.numparams;n.p.p.length>0&&tl.luaF_close(e,c.l_base);for(let m=0;_+m<g;m++)Q.setobjs2s(e,U+m,_+m);c.l_base=U+(u.l_base-_),c.top=U+(e.top-_),Pe.adjust_top(e,c.top),c.l_code=u.l_code,c.l_savedpc=u.l_savedpc,c.callstatus|=es.CIST_TAIL,c.next=null,t=e.ci=c,Mt(e.top===c.l_base+e.stack[U].value.p.maxstacksize);continue e}break}case $T:{n.p.p.length>0&&tl.luaF_close(e,r);let i=Pe.luaD_poscall(e,t,a,o.B!==0?o.B-1:e.top-a);if(t.callstatus&es.CIST_FRESH)return;t=e.ci,i&&Pe.adjust_top(e,t.top),Mt(t.callstatus&es.CIST_LUA),Mt(t.l_code[t.l_savedpc-1].opcode===Cc);continue e}case qT:{if(e.stack[a].ttisinteger()){let i=e.stack[a+2].value,u=X.add(e.stack[a].value,i),c=e.stack[a+1].value;(X.lt(0,i)?X.le(u,c):X.le(c,u))&&(t.l_savedpc+=o.sBx,e.stack[a].chgivalue(u),e.stack[a+3].setivalue(u))}else{let i=e.stack[a+2].value,u=e.stack[a].value+i,c=e.stack[a+1].value;(0<i?u<=c:c<=u)&&(t.l_savedpc+=o.sBx,e.stack[a].chgfltvalue(u),e.stack[a+3].setfltvalue(u))}break}case HT:{let i=e.stack[a],u=e.stack[a+1],c=e.stack[a+2],f;if(i.ttisinteger()&&c.ttisinteger()&&(f=m0(u,c.value))){let _=f.stopnow?0:i.value;u.value=f.ilimit,i.value=X.sub(_,c.value)}else{let _,U,g;(_=ke(u))===!1&&qe.luaG_runerror(e,ut("'for' limit must be a number",!0)),e.stack[a+1].setfltvalue(_),(U=ke(c))===!1&&qe.luaG_runerror(e,ut("'for' step must be a number",!0)),e.stack[a+2].setfltvalue(U),(g=ke(i))===!1&&qe.luaG_runerror(e,ut("'for' initial value must be a number",!0)),e.stack[a].setfltvalue(g-U)}t.l_savedpc+=o.sBx;break}case Ng:{let i=a+3;Q.setobjs2s(e,i+2,a+2),Q.setobjs2s(e,i+1,a+1),Q.setobjs2s(e,i,a),Pe.adjust_top(e,i+3),Pe.luaD_call(e,i,o.C),Pe.adjust_top(e,t.top),o=t.l_code[t.l_savedpc++],a=Qh(e,r,o),Mt(o.opcode===Vc)}case Vc:{e.stack[a+1].ttisnil()||(Q.setobjs2s(e,a,a+1),t.l_savedpc+=o.sBx);break}case QT:{let i=o.B,u=o.C;i===0&&(i=e.top-a-1),u===0&&(Mt(t.l_code[t.l_savedpc].opcode===Oc),u=t.l_code[t.l_savedpc++].Ax);let c=e.stack[a].value,f=(u-1)*DT+i;for(;i>0;i--)ts.luaH_setint(c,f--,e.stack[a+i]);Pe.adjust_top(e,t.top);break}case GT:{let i=n.p.p[o.Bx],u=N0(i,n.upvals,e.stack,r);u===null?O0(e,i,n.upvals,r,a):e.stack[a].setclLvalue(u);break}case a0:{let i=o.B-1,u=r-t.funcOff-n.p.numparams-1,c;for(u<0&&(u=0),i<0&&(i=u,Pe.luaD_checkstack(e,u),Pe.adjust_top(e,a+u)),c=0;c<i&&c<u;c++)Q.setobjs2s(e,a+c,r-u+c);for(;c<i;c++)e.stack[a+c].setnilvalue();break}case Oc:throw Error("invalid opcode")}}},wg=function(e,t,n,s){let r=n.A;r!==0&&tl.luaF_close(e,t.l_base+r-1),t.l_savedpc+=n.sBx+s},Mo=function(e,t){wg(e,t,t.l_code[t.l_savedpc],1)},Cg=function(e,t,n){if(t.ttisnumber()&&n.ttisnumber())return _0(t,n)?1:0;if(t.ttisstring()&&n.ttisstring())return Vg(t.tsvalue(),n.tsvalue())<0?1:0;{let s=k.luaT_callorderTM(e,t,n,k.TMS.TM_LT);return s===null&&qe.luaG_ordererror(e,t,n),s?1:0}},Ig=function(e,t,n){let s;return t.ttisnumber()&&n.ttisnumber()?b0(t,n)?1:0:t.ttisstring()&&n.ttisstring()?Vg(t.tsvalue(),n.tsvalue())<=0?1:0:(s=k.luaT_callorderTM(e,t,n,k.TMS.TM_LE),s!==null?s?1:0:(e.ci.callstatus|=es.CIST_LEQ,s=k.luaT_callorderTM(e,n,t,k.TMS.TM_LT),e.ci.callstatus^=es.CIST_LEQ,s===null&&qe.luaG_ordererror(e,t,n),s?0:1))},Uc=function(e,t,n){if(t.ttype()!==n.ttype())return t.ttnov()!==n.ttnov()||t.ttnov()!==ng?0:(t.ttisinteger()?X.toFloat(t.value)===n.value:t.value===X.toFloat(n.value))?1:0;let s;switch(t.ttype()){case KT:return 1;case VT:return t.value==n.value?1:0;case UT:case MT:return X.eq(t.value,n.value)?1:0;case FT:case PT:return t.value===n.value?1:0;case sg:case tg:return f0(t.tsvalue(),n.tsvalue())?1:0;case BT:case rg:if(t.value===n.value)return 1;if(e===null)return 0;s=k.fasttm(e,t.value.metatable,k.TMS.TM_EQ),s===null&&(s=k.fasttm(e,n.value.metatable,k.TMS.TM_EQ));break;default:return t.value===n.value?1:0}if(s===null)return 0;let r=new Q.TValue;return k.luaT_callTM(e,s,t,n,r,1),r.l_isfalse()?0:1},g0=function(e,t){return Uc(null,e,t)},m0=function(e,t){let n=!1,s=nl(e,t<0?2:1);if(s===!1){let r=ke(e);if(r===!1)return!1;0<r?(s=l0,t<0&&(n=!0)):(s=i0,t>=0&&(n=!0))}return{stopnow:n,ilimit:s}},nl=function(e,t){if(e.ttisfloat()){let n=e.value,s=Math.floor(n);if(n!==s){if(t===0)return!1;t>1&&(s+=1)}return c0(s)}else{if(e.ttisinteger())return e.value;if(Fc(e)){let n=new Q.TValue;if(Q.luaO_str2num(e.svalue(),n)===e.vslen()+1)return nl(n,t)}}return!1},Ft=function(e){return e.ttisinteger()?e.value:nl(e,0)},ke=function(e){if(e.ttnov()===ng)return e.ttisinteger()?X.toFloat(e.value):e.value;if(Fc(e)){let t=new Q.TValue;if(Q.luaO_str2num(e.svalue(),t)===e.vslen()+1)return t.ttisinteger()?X.toFloat(t.value):t.value}return!1},_0=function(e,t){return typeof e.value=="bigint"||typeof t.value=="bigint"?X.lt(e.value,t.value):e.value<t.value},b0=function(e,t){return e.ttisinteger()&&t.ttisfloat()?X.toFloat(e.value)<=t.value:e.ttisfloat()&&t.ttisinteger()?e.value<=X.toFloat(t.value):typeof e.value=="bigint"||typeof t.value=="bigint"?X.le(e.value,t.value):e.value<=t.value},Vg=function(e,t){let n=$h(e),s=$h(t);return n===s?0:n<s?-1:1},Pg=function(e,t,n){let s;switch(n.ttype()){case rg:{let r=n.value;if(s=k.fasttm(e,r.metatable,k.TMS.TM_LEN),s!==null)break;t.setivalue(ts.luaH_getn(r));return}case sg:case tg:t.setivalue(n.vslen());return;default:{s=k.luaT_gettmbyobj(e,n,k.TMS.TM_LEN),s.ttisnil()&&qe.luaG_typeerror(e,n,ut("get length of",!0));break}}k.luaT_callTM(e,s,n,n,t,1)},x0=function(e,t){return X.mul(e,t)},A0=function(e,t,n){let s=X.idiv(t,n);return s==="divzero"?qe.luaG_runerror(e,ut("attempt to divide by zero")):s==="overflow"&&qe.luaG_runerror(e,ut("integer overflow")),s},S0=function(e,t,n){let s=X.imod(t,n);return s==="divzero"&&qe.luaG_runerror(e,ut("attempt to perform 'n%%0'")),s},k0=function(e,t){return X.band(e,t)},E0=function(e,t){return X.bor(e,t)},v0=function(e,t){return X.bxor(e,t)},T0=function(e){return X.bnot(e)},R0=function(e,t){return X.shiftl(e,t)},y0=function(e,t){return X.shiftr(e,t)},N0=function(e,t,n,s){let r=e.cache;if(r!==null){let o=e.upvalues,a=o.length;for(let l=0;l<a;l++){let i=o[l].instack?n[s+o[l].idx]:t[o[l].idx];if(r.upvals[l]!==i)return null}}return r},O0=function(e,t,n,s,r){let o=t.upvalues.length,a=t.upvalues,l=new Q.LClosure(e,o);l.p=t,e.stack[r].setclLvalue(l);for(let i=0;i<o;i++)a[i].instack?l.upvals[i]=tl.luaF_findupval(e,s+a[i].idx):l.upvals[i]=n[a[i].idx];t.cache=l},Kc=function(e){return e.ttisnumber()},Fc=function(e){return e.ttisstring()},wc=function(e,t){let n=e.stack[t];return n.ttisstring()?!0:Kc(n)?(Q.luaO_tostring(e,n),!0):!1},eg=function(e){return e.ttisstring()&&e.vslen()===0},w0=function(e,t,n,s){let r=0;do{let o=e.stack[t-n],a=o.vslen(),l=o.svalue();s.set(l,r),r+=a}while(--n>0)},Mc=function(e,t){Mt(t>=2);do{let n=e.top,s=2;if(!(e.stack[n-2].ttisstring()||Kc(e.stack[n-2]))||!wc(e,n-1))k.luaT_trybinTM(e,e.stack[n-2],e.stack[n-1],e.stack[n-2],k.TMS.TM_CONCAT);else if(eg(e.stack[n-1]))wc(e,n-2);else if(eg(e.stack[n-2]))Q.setobjs2s(e,n-2,n-1);else{let r=e.stack[n-1].vslen();for(s=1;s<t&&wc(e,n-s-1);s++){let l=e.stack[n-s-1].vslen();r+=l}let o=new Uint8Array(r);w0(e,n,s,o);let a=p0(e,o);Q.setsvalue2s(e,n-s,a)}for(t-=s-1;e.top>n-(s-1);)delete e.stack[--e.top]}while(t>1)},Ug=2e3,el=function(e,t,n,s){for(let r=0;r<Ug;r++){let o;if(!t.ttistable())o=k.luaT_gettmbyobj(e,t,k.TMS.TM_INDEX),o.ttisnil()&&qe.luaG_typeerror(e,t,ut("index",!0));else{let a=ts.luaH_get(e,t.value,n);if(a.ttisnil()){if(o=k.fasttm(e,t.value.metatable,k.TMS.TM_INDEX),o===null){e.stack[s].setnilvalue();return}}else{Q.setobj2s(e,s,a);return}}if(o.ttisfunction()){k.luaT_callTM(e,o,t,n,e.stack[s],1);return}t=o}qe.luaG_runerror(e,ut("'__index' chain too long; possible loop",!0))},Pc=function(e,t,n,s){for(let r=0;r<Ug;r++){let o;if(t.ttistable()){let a=t.value;if(!ts.luaH_get(e,a,n).ttisnil()||(o=k.fasttm(e,a.metatable,k.TMS.TM_NEWINDEX))===null){ts.luaH_setfrom(e,a,n,s),ts.invalidateTMcache(a);return}}else(o=k.luaT_gettmbyobj(e,t,k.TMS.TM_NEWINDEX)).ttisnil()&&qe.luaG_typeerror(e,t,ut("index",!0));if(o.ttisfunction()){k.luaT_callTM(e,o,t,n,s,0);return}t=o}qe.luaG_runerror(e,ut("'__newindex' chain too long; possible loop",!0))};ne.exports.cvt2str=Kc;ne.exports.cvt2num=Fc;ne.exports.luaV_gettable=el;ne.exports.luaV_concat=Mc;ne.exports.luaV_div=A0;ne.exports.luaV_equalobj=Uc;ne.exports.luaV_execute=h0;ne.exports.luaV_finishOp=d0;ne.exports.luaV_imul=x0;ne.exports.luaV_lessequal=Ig;ne.exports.luaV_lessthan=Cg;ne.exports.luaV_mod=S0;ne.exports.luaV_objlen=Pg;ne.exports.luaV_rawequalobj=g0;ne.exports.luaV_shiftl=R0;ne.exports.luaV_shiftr=y0;ne.exports.luaV_band=k0;ne.exports.luaV_bor=E0;ne.exports.luaV_bxor=v0;ne.exports.luaV_bnot=T0;ne.exports.luaV_tointeger=nl;ne.exports.settable=Pc;ne.exports.tointeger=Ft;ne.exports.tonumber=ke});var Vs=K((rH,Vt)=>{"use strict";var{constant_types:{LUA_TTABLE:C0,LUA_TUSERDATA:I0},to_luastring:Y}=Ae(),{lua_assert:V0}=ct(),xr=$e(),Kg=It(),P0=hn(),{luaS_bless:U0,luaS_new:oe}=Xt(),Dc=Ct(),sl=gn(),Fg=Is(),K0=["no value","nil","boolean","userdata","number","string","table","function","userdata","thread","proto"].map(e=>Y(e)),Mg=function(e){return K0[e+1]},Z={TM_INDEX:0,TM_NEWINDEX:1,TM_GC:2,TM_MODE:3,TM_LEN:4,TM_EQ:5,TM_ADD:6,TM_SUB:7,TM_MUL:8,TM_MOD:9,TM_POW:10,TM_DIV:11,TM_IDIV:12,TM_BAND:13,TM_BOR:14,TM_BXOR:15,TM_SHL:16,TM_SHR:17,TM_UNM:18,TM_BNOT:19,TM_LT:20,TM_LE:21,TM_CONCAT:22,TM_CALL:23,TM_N:24},F0=function(e){e.l_G.tmname[Z.TM_INDEX]=new oe(e,Y("__index",!0)),e.l_G.tmname[Z.TM_NEWINDEX]=new oe(e,Y("__newindex",!0)),e.l_G.tmname[Z.TM_GC]=new oe(e,Y("__gc",!0)),e.l_G.tmname[Z.TM_MODE]=new oe(e,Y("__mode",!0)),e.l_G.tmname[Z.TM_LEN]=new oe(e,Y("__len",!0)),e.l_G.tmname[Z.TM_EQ]=new oe(e,Y("__eq",!0)),e.l_G.tmname[Z.TM_ADD]=new oe(e,Y("__add",!0)),e.l_G.tmname[Z.TM_SUB]=new oe(e,Y("__sub",!0)),e.l_G.tmname[Z.TM_MUL]=new oe(e,Y("__mul",!0)),e.l_G.tmname[Z.TM_MOD]=new oe(e,Y("__mod",!0)),e.l_G.tmname[Z.TM_POW]=new oe(e,Y("__pow",!0)),e.l_G.tmname[Z.TM_DIV]=new oe(e,Y("__div",!0)),e.l_G.tmname[Z.TM_IDIV]=new oe(e,Y("__idiv",!0)),e.l_G.tmname[Z.TM_BAND]=new oe(e,Y("__band",!0)),e.l_G.tmname[Z.TM_BOR]=new oe(e,Y("__bor",!0)),e.l_G.tmname[Z.TM_BXOR]=new oe(e,Y("__bxor",!0)),e.l_G.tmname[Z.TM_SHL]=new oe(e,Y("__shl",!0)),e.l_G.tmname[Z.TM_SHR]=new oe(e,Y("__shr",!0)),e.l_G.tmname[Z.TM_UNM]=new oe(e,Y("__unm",!0)),e.l_G.tmname[Z.TM_BNOT]=new oe(e,Y("__bnot",!0)),e.l_G.tmname[Z.TM_LT]=new oe(e,Y("__lt",!0)),e.l_G.tmname[Z.TM_LE]=new oe(e,Y("__le",!0)),e.l_G.tmname[Z.TM_CONCAT]=new oe(e,Y("__concat",!0)),e.l_G.tmname[Z.TM_CALL]=new oe(e,Y("__call",!0))},M0=Y("__name",!0),B0=function(e,t){let n;if(t.ttistable()&&(n=t.value.metatable)!==null||t.ttisfulluserdata()&&(n=t.value.metatable)!==null){let s=Dc.luaH_getstr(n,U0(e,M0));if(s.ttisstring())return s.svalue()}return Mg(t.ttnov())},Bg=function(e,t,n,s,r,o){let a=e.top;if(xr.pushobj2s(e,t),xr.pushobj2s(e,n),xr.pushobj2s(e,s),o||xr.pushobj2s(e,r),e.ci.callstatus&P0.CIST_LUA?Kg.luaD_call(e,a,o):Kg.luaD_callnoyield(e,a,o),o){let l=e.stack[e.top-1];delete e.stack[--e.top],r.setfrom(l)}},Gc=function(e,t,n,s,r){let o=Bc(e,t,r);return o.ttisnil()&&(o=Bc(e,n,r)),o.ttisnil()?!1:(Bg(e,o,t,n,s,1),!0)},D0=function(e,t,n,s,r){if(!Gc(e,t,n,s,r))switch(r){case Z.TM_CONCAT:return sl.luaG_concaterror(e,t,n);case Z.TM_BAND:case Z.TM_BOR:case Z.TM_BXOR:case Z.TM_SHL:case Z.TM_SHR:case Z.TM_BNOT:{let o=Fg.tonumber(t),a=Fg.tonumber(n);return o!==!1&&a!==!1?sl.luaG_tointerror(e,t,n):sl.luaG_opinterror(e,t,n,Y("perform bitwise operation on",!0))}default:return sl.luaG_opinterror(e,t,n,Y("perform arithmetic on",!0))}},G0=function(e,t,n,s){let r=new xr.TValue;return Gc(e,t,n,r,s)?!r.l_isfalse():null},q0=function(e,t,n){return t===null||t.flags&1<<n?null:Dg(t,n,e.l_G.tmname[n])},Dg=function(e,t,n){let s=Dc.luaH_getstr(e,n);return V0(t<=Z.TM_EQ),s.ttisnil()?(e.flags|=1<<t,null):s},Bc=function(e,t,n){let s;switch(t.ttnov()){case C0:case I0:s=t.value.metatable;break;default:s=e.l_G.mt[t.ttnov()]}return s?Dc.luaH_getstr(s,e.l_G.tmname[n]):xr.luaO_nilobject};Vt.exports.fasttm=q0;Vt.exports.TMS=Z;Vt.exports.luaT_callTM=Bg;Vt.exports.luaT_callbinTM=Gc;Vt.exports.luaT_trybinTM=D0;Vt.exports.luaT_callorderTM=G0;Vt.exports.luaT_gettm=Dg;Vt.exports.luaT_gettmbyobj=Bc;Vt.exports.luaT_init=F0;Vt.exports.luaT_objtypename=B0;Vt.exports.ttypename=Mg});var hn=K((oH,Re)=>{"use strict";var{LUA_MINSTACK:qg,LUA_RIDX_GLOBALS:H0,LUA_RIDX_MAINTHREAD:L0,constant_types:{LUA_NUMTAGS:j0,LUA_TNIL:Hg,LUA_TTABLE:X0,LUA_TTHREAD:Lg},thread_status:{LUA_OK:jg}}=Ae(),Bo=$e(),z0=It(),Xg=mr(),rl=Ct(),zg=Vs(),Wg=5,Gg=2*qg,Do=class{constructor(){this.func=null,this.funcOff=NaN,this.top=NaN,this.previous=null,this.next=null,this.l_base=NaN,this.l_code=null,this.l_savedpc=NaN,this.c_k=null,this.c_old_errfunc=null,this.c_ctx=null,this.nresults=NaN,this.callstatus=NaN}},Go=class{constructor(t){this.id=t.id_counter++,this.base_ci=new Do,this.top=NaN,this.stack_last=NaN,this.oldpc=NaN,this.l_G=t,this.stack=null,this.ci=null,this.errorJmp=null,this.nCcalls=0,this.hook=null,this.hookmask=0,this.basehookcount=0,this.allowhook=1,this.hookcount=this.basehookcount,this.nny=1,this.status=jg,this.errfunc=0}},qc=class{constructor(){this.id_counter=1,this.ids=new WeakMap,this.mainthread=null,this.l_registry=new Bo.TValue(Hg,null),this.panic=null,this.atnativeerror=null,this.version=null,this.tmname=new Array(zg.TMS.TM_N),this.mt=new Array(j0)}},W0=function(e){let t=new Do;return e.ci.next=t,t.previous=e.ci,t.next=null,e.ci=t,t},Zg=function(e){let t=e.ci;t.next=null},Jg=function(e,t){e.stack=new Array(Gg),e.top=0,e.stack_last=Gg-Wg;let n=e.base_ci;n.next=n.previous=null,n.callstatus=0,n.funcOff=e.top,n.func=e.stack[e.top],e.stack[e.top++]=new Bo.TValue(Hg,null),n.top=e.top+qg,e.ci=n},Yg=function(e){e.ci=e.base_ci,Zg(e),e.stack=null},Z0=function(e,t){let n=rl.luaH_new(e);t.l_registry.sethvalue(n),rl.luaH_setint(n,L0,new Bo.TValue(Lg,e)),rl.luaH_setint(n,H0,new Bo.TValue(X0,rl.luaH_new(e)))},J0=function(e){let t=e.l_G;Jg(e,e),Z0(e,t),zg.luaT_init(e),t.version=Xg.lua_version(null)},Y0=function(e){let t=e.l_G,n=new Go(t);return e.stack[e.top]=new Bo.TValue(Lg,n),Xg.api_incr_top(e),n.hookmask=e.hookmask,n.basehookcount=e.basehookcount,n.hook=e.hook,n.hookcount=n.basehookcount,Jg(n,e),n},$0=function(e,t){Yg(t)},Q0=function(){let e=new qc,t=new Go(e);return e.mainthread=t,z0.luaD_rawrunprotected(t,J0,null)!==jg&&(t=null),t},eR=function(e){Yg(e)},tR=function(e){e=e.l_G.mainthread,eR(e)};Re.exports.lua_State=Go;Re.exports.CallInfo=Do;Re.exports.CIST_OAH=1;Re.exports.CIST_LUA=2;Re.exports.CIST_HOOKED=4;Re.exports.CIST_FRESH=8;Re.exports.CIST_YPCALL=16;Re.exports.CIST_TAIL=32;Re.exports.CIST_HOOKYIELD=64;Re.exports.CIST_LEQ=128;Re.exports.CIST_FIN=256;Re.exports.EXTRA_STACK=Wg;Re.exports.lua_close=tR;Re.exports.lua_newstate=Q0;Re.exports.lua_newthread=Y0;Re.exports.luaE_extendCI=W0;Re.exports.luaE_freeCI=Zg;Re.exports.luaE_freethread=$0});var $e=K((iH,se)=>{"use strict";var{LUA_OPADD:Qc,LUA_OPBAND:cm,LUA_OPBNOT:um,LUA_OPBOR:pm,LUA_OPBXOR:fm,LUA_OPDIV:dm,LUA_OPIDIV:hm,LUA_OPMOD:gm,LUA_OPMUL:mm,LUA_OPPOW:_m,LUA_OPSHL:bm,LUA_OPSHR:xm,LUA_OPSUB:Am,LUA_OPUNM:Sm,constant_types:{LUA_NUMTAGS:km,LUA_TBOOLEAN:$g,LUA_TCCL:Qg,LUA_TFUNCTION:em,LUA_TLCF:tm,LUA_TLCL:nm,LUA_TLIGHTUSERDATA:sm,LUA_TLNGSTR:zc,LUA_TNIL:qo,LUA_TNUMBER:nR,LUA_TNUMFLT:Hc,LUA_TNUMINT:Lc,LUA_TSHRSTR:sR,LUA_TSTRING:rR,LUA_TTABLE:rm,LUA_TTHREAD:om,LUA_TUSERDATA:am},from_userstring:oR,luastring_indexOf:Wc,luastring_of:aR,to_jsstring:Em,to_luastring:Ee}=Ae(),{lisdigit:ll,lisprint:lR,lisspace:il,lisxdigit:vm}=dc(),ol=gn(),al=It(),iR=hn(),{luaS_bless:cR,luaS_new:uR}=Xt(),pR=Ct(),{LUA_COMPAT_FLOATSTRING:fR,LUA_MAXINTEGER:aH,ldexp:dR,lua_integer2str:hR,lua_number2str:gR}=lt(),Us=Is(),{MAX_INT:lH,luai_nummod:mR,lua_assert:Ks}=ct(),et=at(),lm=Vs(),_R=km,Zc=km+1,ns=class{constructor(t,n){this.type=t,this.value=n}ttype(){return this.type&63}ttnov(){return this.type&15}checktag(t){return this.type===t}checktype(t){return this.ttnov()===t}ttisnumber(){return this.checktype(nR)}ttisfloat(){return this.checktag(Hc)}ttisinteger(){return this.checktag(Lc)}ttisnil(){return this.checktag(qo)}ttisboolean(){return this.checktag($g)}ttislightuserdata(){return this.checktag(sm)}ttisstring(){return this.checktype(rR)}ttisshrstring(){return this.checktag(sR)}ttislngstring(){return this.checktag(zc)}ttistable(){return this.checktag(rm)}ttisfunction(){return this.checktype(em)}ttisclosure(){return(this.type&31)===em}ttisCclosure(){return this.checktag(Qg)}ttisLclosure(){return this.checktag(nm)}ttislcf(){return this.checktag(tm)}ttisfulluserdata(){return this.checktag(am)}ttisthread(){return this.checktag(om)}ttisdeadkey(){return this.checktag(Zc)}l_isfalse(){return this.ttisnil()||this.ttisboolean()&&this.value===!1}setfltvalue(t){this.type=Hc,this.value=t}chgfltvalue(t){Ks(this.type==Hc),this.value=t}setivalue(t){this.type=Lc,this.value=t}chgivalue(t){Ks(this.type==Lc),this.value=t}setnilvalue(){this.type=qo,this.value=null}setfvalue(t){this.type=tm,this.value=t}setpvalue(t){this.type=sm,this.value=t}setbvalue(t){this.type=$g,this.value=t}setsvalue(t){this.type=zc,this.value=t}setuvalue(t){this.type=am,this.value=t}setthvalue(t){this.type=om,this.value=t}setclLvalue(t){this.type=nm,this.value=t}setclCvalue(t){this.type=Qg,this.value=t}sethvalue(t){this.type=rm,this.value=t}setdeadvalue(){this.type=Zc,this.value=null}setfrom(t){this.type=t.type,this.value=t.value}tsvalue(){return Ks(this.ttisstring()),this.value}svalue(){return this.tsvalue().getstr()}vslen(){return this.tsvalue().tsslen()}jsstring(t,n){return Em(this.svalue(),t,n,!0)}},bR=function(e,t){e.stack[e.top++]=new ns(t.type,t.value)},xR=function(e,t){e.stack[e.top++]=new ns(zc,t)},AR=function(e,t,n){e.stack[t].setfrom(e.stack[n])},SR=function(e,t,n){e.stack[t].setfrom(n)},Tm=function(e,t,n){e.stack[t].setsvalue(n)},Rm=new ns(qo,null);Object.freeze(Rm);se.exports.luaO_nilobject=Rm;var cl=class{constructor(t,n){this.id=t.l_G.id_counter++,this.p=null,this.nupvalues=n,this.upvals=new Array(n)}},ul=class{constructor(t,n,s){for(this.id=t.l_G.id_counter++,this.f=n,this.nupvalues=s,this.upvalue=new Array(s);s--;)this.upvalue[s]=new ns(qo,null)}},pl=class{constructor(t,n){this.id=t.l_G.id_counter++,this.metatable=null,this.uservalue=new ns(qo,null),this.len=n,this.data=Object.create(null)}},Jc=class{constructor(){this.varname=null,this.startpc=NaN,this.endpc=NaN}},Ar=Ee("..."),jc=Ee('[string "'),Xc=Ee('"]'),kR=function(e,t){let n=e.length,s;if(e[0]===61)n<t?(s=new Uint8Array(n-1),s.set(e.subarray(1))):(s=new Uint8Array(t),s.set(e.subarray(1,t+1)));else if(e[0]===64)n<=t?(s=new Uint8Array(n-1),s.set(e.subarray(1))):(s=new Uint8Array(t),s.set(Ar),t-=Ar.length,s.set(e.subarray(n-t),Ar.length));else{s=new Uint8Array(t);let r=Wc(e,10);s.set(jc);let o=jc.length;t-=jc.length+Ar.length+Xc.length,n<t&&r===-1?(s.set(e,o),o+=e.length):(r!==-1&&(n=r),n>t&&(n=t),s.set(e.subarray(0,n),o),o+=n,s.set(Ar,o),o+=Ar.length),s.set(Xc,o),o+=Xc.length,s=s.subarray(0,o)}return s},eu=function(e){return ll(e)?e-48:(e&223)-55},Sr=8,ym=function(e,t){let n=1;if(Ks(t<=1114111),t<128)e[Sr-1]=t;else{let s=63;do e[Sr-n++]=128|t&63,t>>=6,s>>=1;while(t>s);e[Sr-n]=~s<<1|t}return n},ER=30,vR=function(e){let t=0,n=0,s=0,r=0,o=0,a,l=!1;for(;il(e[t]);)t++;if(((a=e[t]===45)||e[t]===43)&&t++,!(e[t]===48&&(e[t+1]===120||e[t+1]===88)))return null;for(t+=2;;t++)if(e[t]===46){if(l)break;l=!0}else if(vm(e[t]))s===0&&e[t]===48?r++:++s<=ER?n=n*16+eu(e[t]):o++,l&&o--;else break;if(r+s===0)return null;if(o*=4,e[t]===112||e[t]===80){let i=0,u;if(t++,((u=e[t]===45)||e[t]===43)&&t++,!ll(e[t]))return null;for(;ll(e[t]);)i=i*10+e[t++]-48;u&&(i=-i),o+=i}return a&&(n=-n),{n:dR(n,o),i:t}},TR=function(e){try{e=Em(e)}catch{return null}let t=/^[\t\v\f \n\r]*[+-]?(?:[0-9]+\.?[0-9]*|\.[0-9]*)(?:[eE][+-]?[0-9]+)?/.exec(e);if(!t)return null;let n=parseFloat(t[0]);return isNaN(n)?null:{n,i:t[0].length}},RR=function(e,t){let n=t==="x"?vR(e):TR(e);if(n===null)return null;for(;il(e[n.i]);)n.i++;return n.i===e.length||e[n.i]===0?n:null},yR=[46,120,88,110,78],NR={46:".",120:"x",88:"x",110:"n",78:"n"},OR=function(e){let t=e.length,n=0;for(let o=0;o<t;o++){let a=e[o];if(yR.indexOf(a)!==-1){n=a;break}}let s=NR[n];return s==="n"?null:RR(e,s)},wR=function(e){let t=0,n=!0,s;for(;il(e[t]);)t++;((s=e[t]===45)||e[t]===43)&&t++;let r=0n,o=!1;if(e[t]===48&&(e[t+1]===120||e[t+1]===88))for(o=!0,t+=2;t<e.length&&vm(e[t]);t++)r=BigInt.asUintN(64,r*16n+BigInt(eu(e[t]))),n=!1;else for(;t<e.length&&ll(e[t]);t++)r=r*10n+BigInt(e[t]-48),n=!1;if(s&&(r=-r),o)r=BigInt.asIntN(64,r);else if(r>et.MAX_INT64||r<et.MIN_INT64)return null;for(;t<e.length&&il(e[t]);)t++;return n||t!==e.length&&e[t]!==0?null:{n:et.shrink(r),i:t}},CR=function(e,t){let n=wR(e);return n!==null?(t.setivalue(n.n),n.i+1):(n=OR(e),n!==null?(t.setfltvalue(n.n),n.i+1):0)},Yc=function(e,t){let n;if(t.ttisinteger())n=Ee(hR(t.value));else{let s=gR(t.value);!fR&&/^[-0123456789]+$/.test(s)&&(s+=".0"),n=Ee(s)}t.setsvalue(cR(e,n))},pt=function(e,t){al.luaD_inctop(e),Tm(e,e.top-1,uR(e,t))},Nm=function(e,t,n){let s=0,r=0,o=0,a;for(;a=Wc(t,37,r),a!=-1;){switch(pt(e,t.subarray(r,a)),t[a+1]){case 115:{let l=n[o++];if(l===null)l=Ee("(null)",!0);else{l=oR(l);let i=Wc(l,0);i!==-1&&(l=l.subarray(0,i))}pt(e,l);break}case 99:{let l=n[o++];lR(l)?pt(e,aR(l)):Om(e,Ee("<\\%d>",!0),l);break}case 100:case 73:al.luaD_inctop(e),e.stack[e.top-1].setivalue(n[o++]),Yc(e,e.stack[e.top-1]);break;case 102:al.luaD_inctop(e),e.stack[e.top-1].setfltvalue(n[o++]),Yc(e,e.stack[e.top-1]);break;case 112:{let l=n[o++];if(l instanceof iR.lua_State||l instanceof pR.Table||l instanceof pl||l instanceof cl||l instanceof ul)pt(e,Ee("0x"+l.id.toString(16)));else switch(typeof l){case"undefined":pt(e,Ee("undefined"));break;case"number":pt(e,Ee("Number("+l+")"));break;case"string":pt(e,Ee("String("+JSON.stringify(l)+")"));break;case"boolean":pt(e,Ee(l?"Boolean(true)":"Boolean(false)"));break;case"object":if(l===null){pt(e,Ee("null"));break}case"function":{let i=e.l_G.ids.get(l);i||(i=e.l_G.id_counter++,e.l_G.ids.set(l,i)),pt(e,Ee("0x"+i.toString(16)));break}default:pt(e,Ee("<id NYI>"))}break}case 85:{let l=new Uint8Array(Sr),i=ym(l,n[o++]);pt(e,l.subarray(Sr-i));break}case 37:pt(e,Ee("%",!0));break;default:ol.luaG_runerror(e,Ee("invalid option '%%%c' to 'lua_pushfstring'"),t[a+1])}s+=2,r=a+2}return al.luaD_checkstack(e,1),pt(e,t.subarray(r)),s>0&&Us.luaV_concat(e,s+1),e.stack[e.top-1].svalue()},Om=function(e,t,...n){return Nm(e,t,n)},IR=function(e){let t=0;if(e<8)return e;for(;e>=128;)e=e+15>>4,t+=4;for(;e>=16;)e=e+1>>1,t++;return t+1<<3|e-8},im=function(e,t,n,s){switch(t){case Qc:return et.add(n,s);case Am:return et.sub(n,s);case mm:return et.mul(n,s);case gm:{let r=et.imod(n,s);return r==="divzero"&&ol.luaG_runerror(e,Ee("attempt to perform 'n%%0'")),r}case hm:{let r=et.idiv(n,s);return r==="divzero"?ol.luaG_runerror(e,Ee("attempt to divide by zero")):r==="overflow"&&ol.luaG_runerror(e,Ee("integer overflow")),r}case cm:return et.band(n,s);case pm:return et.bor(n,s);case fm:return et.bxor(n,s);case bm:return et.shiftl(n,s);case xm:return et.shiftr(n,s);case Sm:return et.neg(n);case um:return et.bnot(n);default:Ks(0)}},$c=function(e,t,n,s){switch(t){case Qc:return n+s;case Am:return n-s;case mm:return n*s;case dm:return n/s;case _m:return Math.pow(n,s);case hm:return Math.floor(n/s);case Sm:return-n;case gm:return mR(e,n,s);default:Ks(0)}},VR=function(e,t,n,s,r){let o=typeof r=="number"?e.stack[r]:r;switch(t){case cm:case pm:case fm:case bm:case xm:case um:{let a,l;if((a=Us.tointeger(n))!==!1&&(l=Us.tointeger(s))!==!1){o.setivalue(im(e,t,a,l));return}else break}case dm:case _m:{let a,l;if((a=Us.tonumber(n))!==!1&&(l=Us.tonumber(s))!==!1){o.setfltvalue($c(e,t,a,l));return}else break}default:{let a,l;if(n.ttisinteger()&&s.ttisinteger()){o.setivalue(im(e,t,n.value,s.value));return}else if((a=Us.tonumber(n))!==!1&&(l=Us.tonumber(s))!==!1){o.setfltvalue($c(e,t,a,l));return}else break}}Ks(e!==null),lm.luaT_trybinTM(e,n,s,r,t-Qc+lm.TMS.TM_ADD)};se.exports.CClosure=ul;se.exports.LClosure=cl;se.exports.LUA_TDEADKEY=Zc;se.exports.LUA_TPROTO=_R;se.exports.LocVar=Jc;se.exports.TValue=ns;se.exports.Udata=pl;se.exports.UTF8BUFFSZ=Sr;se.exports.luaO_arith=VR;se.exports.luaO_chunkid=kR;se.exports.luaO_hexavalue=eu;se.exports.luaO_int2fb=IR;se.exports.luaO_pushfstring=Om;se.exports.luaO_pushvfstring=Nm;se.exports.luaO_str2num=CR;se.exports.luaO_tostring=Yc;se.exports.luaO_utf8esc=ym;se.exports.numarith=$c;se.exports.pushobj2s=bR;se.exports.pushsvalue2s=xR;se.exports.setobjs2s=AR;se.exports.setobj2s=SR;se.exports.setsvalue2s=Tm});var Ps=K((cH,ss)=>{"use strict";var{constant_types:{LUA_TNIL:PR}}=Ae(),nu=$e(),tu=class{constructor(t){this.id=t.l_G.id_counter++,this.k=[],this.p=[],this.code=[],this.cache=null,this.lineinfo=[],this.upvalues=[],this.numparams=0,this.is_vararg=!1,this.maxstacksize=0,this.locvars=[],this.linedefined=0,this.lastlinedefined=0,this.source=null}},UR=function(e,t){return new nu.LClosure(e,t)},KR=function(e,t){return e.stack[t]},FR=function(e,t){for(let n=t;n<e.top;n++){let s=e.stack[n];e.stack[n]=new nu.TValue(s.type,s.value)}},MR=function(e,t){for(let n=0;n<t.nupvalues;n++)t.upvals[n]=new nu.TValue(PR,null)},BR=function(e,t,n){for(let s=0;s<e.locvars.length&&e.locvars[s].startpc<=n;s++)if(n<e.locvars[s].endpc&&(t--,t===0))return e.locvars[s].varname.getstr();return null};ss.exports.MAXUPVAL=255;ss.exports.Proto=tu;ss.exports.luaF_findupval=KR;ss.exports.luaF_close=FR;ss.exports.luaF_getlocalname=BR;ss.exports.luaF_initupvals=MR;ss.exports.luaF_newLclosure=UR});var Ho=K((uH,Wt)=>{"use strict";var{lua_assert:wm}=ct(),su=class{constructor(){this.buffer=null,this.n=0}},DR=function(e){return e.buffer.subarray(0,e.n)},GR=function(e,t){e.n-=t},qR=function(e){e.n=0},HR=function(e,t,n){let s=new Uint8Array(n);if(t.buffer){let r=t.n<n?t.n:n;r>0&&s.set(t.buffer.subarray(0,r))}t.buffer=s},ru=class{constructor(t,n,s){this.L=t,wm(typeof n=="function","ZIO requires a reader"),this.reader=n,this.data=s,this.n=0,this.buffer=null,this.off=0}zgetc(){return this.n-- >0?this.buffer[this.off++]:ou(this)}},fl=-1,ou=function(e){let t=e.reader(e.L,e.data);if(t===null)return fl;wm(t instanceof Uint8Array,"Should only load binary of array of bytes");let n=t.length;return n===0?fl:(e.buffer=t,e.off=0,e.n=n-1,e.buffer[e.off++])},LR=function(e,t,n,s){for(;s;){if(e.n===0){if(ou(e)===fl)return s;e.n++,e.off--}let r=s<=e.n?s:e.n;for(let o=0;o<r;o++)t[n++]=e.buffer[e.off++];e.n-=r,e.n===0&&(e.buffer=null),s-=r}return 0};Wt.exports.EOZ=fl;Wt.exports.luaZ_buffer=DR;Wt.exports.luaZ_buffremove=GR;Wt.exports.luaZ_fill=ou;Wt.exports.luaZ_read=LR;Wt.exports.luaZ_resetbuffer=qR;Wt.exports.luaZ_resizebuffer=HR;Wt.exports.MBuffer=su;Wt.exports.ZIO=ru});var xl=K((pH,kt)=>{"use strict";var{constant_types:{LUA_TBOOLEAN:jR,LUA_TLNGSTR:XR},thread_status:{LUA_ERRSYNTAX:zR},to_luastring:ye}=Ae(),{LUA_MINBUFFER:WR,MAX_INT:Vm,lua_assert:Er}=ct(),ZR=gn(),JR=It(),{lisdigit:ml,lislalnum:YR,lislalpha:$R,lisspace:QR,lisxdigit:uu}=dc(),St=$e(),{luaS_bless:ey,luaS_hash:ty,luaS_hashlongstr:pu,luaS_new:ny}=Xt(),sy=Ct(),{EOZ:vr,luaZ_buffer:fu,luaZ_buffremove:Lo,luaZ_resetbuffer:dl,luaZ_resizebuffer:Pm}=Ho(),F=257,Um=ye("_ENV",!0),ry=F,oy=F+1,ay=F+2,ly=F+3,iy=F+4,cy=F+5,uy=F+6,py=F+7,fy=F+8,dy=F+9,hy=F+10,gy=F+11,my=F+12,_y=F+13,by=F+14,xy=F+15,Ay=F+16,Sy=F+17,ky=F+18,Ey=F+19,vy=F+20,Ty=F+21,Km=F+22,Fm=F+23,Mm=F+24,Bm=F+25,Dm=F+26,Gm=F+27,qm=F+28,Hm=F+29,Lm=F+30,jm=F+31,mn=F+32,hl=F+33,du=F+34,hu=F+35,Fs=F+36,Ry={TK_AND:ry,TK_BREAK:oy,TK_DO:ay,TK_ELSE:ly,TK_ELSEIF:iy,TK_END:cy,TK_FALSE:uy,TK_FOR:py,TK_FUNCTION:fy,TK_GOTO:dy,TK_IF:hy,TK_IN:gy,TK_LOCAL:my,TK_NIL:_y,TK_NOT:by,TK_OR:xy,TK_REPEAT:Ay,TK_RETURN:Sy,TK_THEN:ky,TK_TRUE:Ey,TK_UNTIL:vy,TK_WHILE:Ty,TK_IDIV:Km,TK_CONCAT:Fm,TK_DOTS:Mm,TK_EQ:Bm,TK_GE:Dm,TK_LE:Gm,TK_NE:qm,TK_SHL:Hm,TK_SHR:Lm,TK_DBCOLON:jm,TK_EOS:mn,TK_FLT:hl,TK_INT:du,TK_NAME:hu,TK_STRING:Fs},gu=["and","break","do","else","elseif","end","false","for","function","goto","if","in","local","nil","not","or","repeat","return","then","true","until","while","//","..","...","==",">=","<=","~=","<<",">>","::","<eof>","<number>","<integer>","<name>","<string>"].map((e,t)=>ye(e)),jo=class{constructor(){this.r=NaN,this.i=NaN,this.ts=null}},gl=class{constructor(){this.token=NaN,this.seminfo=new jo}},lu=class{constructor(){this.current=NaN,this.linenumber=NaN,this.lastline=NaN,this.t=new gl,this.lookahead=new gl,this.fs=null,this.L=null,this.z=null,this.buff=null,this.h=null,this.dyd=null,this.source=null,this.envn=null}},_l=function(e,t){let n=e.buff;if(n.n+1>n.buffer.length){BigInt(n.buffer.length)>=Vm/2n&&_n(e,ye("lexical element too long",!0),0);let s=n.buffer.length*2;Pm(e.L,n,s)}n.buffer[n.n++]=t<0?255+t+1:t},Xm=function(e,t){if(t<F)return St.luaO_pushfstring(e.L,ye("'%c'",!0),t);{let n=gu[t-F];return t<mn?St.luaO_pushfstring(e.L,ye("'%s'",!0),n):n}},Xo=function(e){return e.current===10||e.current===13},ve=function(e){e.current=e.z.zgetc()},_e=function(e){_l(e,e.current),ve(e)},yy=new St.TValue(jR,!0),bl=function(e,t){let n=e.L,s=ny(n,t),r=e.h.strong.get(pu(s));if(r)s=r.key.tsvalue();else{let o=new St.TValue(XR,s);sy.luaH_setfrom(n,e.h,o,yy)}return s},zo=function(e){let t=e.current;Er(Xo(e)),ve(e),Xo(e)&&e.current!==t&&ve(e),++e.linenumber>=Vm&&_n(e,ye("chunk has too many lines",!0),0)},Ny=function(e,t,n,s,r){t.t={token:0,seminfo:new jo},t.L=e,t.current=r,t.lookahead={token:mn,seminfo:new jo},t.z=n,t.fs=null,t.linenumber=1,t.lastline=1,t.source=s,t.envn=ey(e,Um),Pm(e,t.buff,WR)},Zt=function(e,t){return e.current===t?(ve(e),!0):!1},au=function(e,t){return e.current===t[0].charCodeAt(0)||e.current===t[1].charCodeAt(0)?(_e(e),!0):!1},Cm=function(e,t){let n="Ee",s=e.current;for(Er(ml(e.current)),_e(e),s===48&&au(e,"xX")&&(n="Pp");;)if(au(e,n)&&au(e,"-+"),uu(e.current))_e(e);else if(e.current===46)_e(e);else break;let r=new St.TValue;return St.luaO_str2num(fu(e.buff),r)===0&&_n(e,ye("malformed number",!0),hl),r.ttisinteger()?(t.i=r.value,du):(Er(r.ttisfloat()),t.r=r.value,hl)},Oy=function(e,t){switch(t){case hu:case Fs:case hl:case du:return St.luaO_pushfstring(e.L,ye("'%s'",!0),fu(e.buff));default:return Xm(e,t)}},_n=function(e,t,n){t=ZR.luaG_addinfo(e.L,t,e.source,e.linenumber),n&&St.luaO_pushfstring(e.L,ye("%s near %s"),t,Oy(e,n)),JR.luaD_throw(e.L,zR)},wy=function(e,t){_n(e,t,e.t.token)},iu=function(e){let t=0,n=e.current;for(Er(n===91||n===93),_e(e);e.current===61;)_e(e),t++;return e.current===n?t:-t-1},Im=function(e,t,n){let s=e.linenumber;_e(e),Xo(e)&&zo(e);let r=!1;for(;!r;)switch(e.current){case vr:{let a=`unfinished long ${t?"string":"comment"} (starting at line ${s})`;_n(e,ye(a),mn);break}case 93:{iu(e)===n&&(_e(e),r=!0);break}case 10:case 13:{_l(e,10),zo(e),t||dl(e.buff);break}default:t?_e(e):ve(e)}t&&(t.ts=bl(e,e.buff.buffer.subarray(2+n,e.buff.n-(2+n))))},kr=function(e,t,n){t||(e.current!==vr&&_e(e),_n(e,n,Fs))},cu=function(e){return _e(e),kr(e,uu(e.current),ye("hexadecimal digit expected",!0)),St.luaO_hexavalue(e.current)},Cy=function(e){let t=cu(e);return t=(t<<4)+cu(e),Lo(e.buff,2),t},Iy=function(e){let t=4;_e(e),kr(e,e.current===123,ye("missing '{'",!0));let n=cu(e);for(_e(e);uu(e.current);)t++,n=(n<<4)+St.luaO_hexavalue(e.current),kr(e,n<=1114111,ye("UTF-8 value too large",!0)),_e(e);return kr(e,e.current===125,ye("missing '}'",!0)),ve(e),Lo(e.buff,t),n},Vy=function(e){let t=new Uint8Array(St.UTF8BUFFSZ),n=St.luaO_utf8esc(t,Iy(e));for(;n>0;n--)_l(e,t[St.UTF8BUFFSZ-n])},Py=function(e){let t=0,n;for(n=0;n<3&&ml(e.current);n++)t=10*t+e.current-48,_e(e);return kr(e,t<=255,ye("decimal escape too large",!0)),Lo(e.buff,n),t},Uy=function(e,t,n){for(_e(e);e.current!==t;)switch(e.current){case vr:_n(e,ye("unfinished string",!0),mn);break;case 10:case 13:_n(e,ye("unfinished string",!0),Fs);break;case 92:{_e(e);let s,r;switch(e.current){case 97:r=7,s="read_save";break;case 98:r=8,s="read_save";break;case 102:r=12,s="read_save";break;case 110:r=10,s="read_save";break;case 114:r=13,s="read_save";break;case 116:r=9,s="read_save";break;case 118:r=11,s="read_save";break;case 120:r=Cy(e),s="read_save";break;case 117:Vy(e),s="no_save";break;case 10:case 13:zo(e),r=10,s="only_save";break;case 92:case 34:case 39:r=e.current,s="read_save";break;case vr:s="no_save";break;case 122:{for(Lo(e.buff,1),ve(e);QR(e.current);)Xo(e)?zo(e):ve(e);s="no_save";break}default:{kr(e,ml(e.current),ye("invalid escape sequence",!0)),r=Py(e),s="only_save";break}}s==="read_save"&&ve(e),(s==="read_save"||s==="only_save")&&(Lo(e.buff,1),_l(e,r));break}default:_e(e)}_e(e),n.ts=bl(e,e.buff.buffer.subarray(1,e.buff.n-1))},mu=Object.create(null);gu.forEach((e,t)=>mu[ty(e)]=t);var Ky=function(e){let t=mu[pu(e)];return t!==void 0&&t<=22},zm=function(e,t){for(dl(e.buff);;)switch(Er(typeof e.current=="number"),e.current){case 10:case 13:{zo(e);break}case 32:case 12:case 9:case 11:{ve(e);break}case 45:{if(ve(e),e.current!==45)return 45;if(ve(e),e.current===91){let n=iu(e);if(dl(e.buff),n>=0){Im(e,null,n),dl(e.buff);break}}for(;!Xo(e)&&e.current!==vr;)ve(e);break}case 91:{let n=iu(e);return n>=0?(Im(e,t,n),Fs):(n!==-1&&_n(e,ye("invalid long string delimiter",!0),Fs),91)}case 61:return ve(e),Zt(e,61)?Bm:61;case 60:return ve(e),Zt(e,61)?Gm:Zt(e,60)?Hm:60;case 62:return ve(e),Zt(e,61)?Dm:Zt(e,62)?Lm:62;case 47:return ve(e),Zt(e,47)?Km:47;case 126:return ve(e),Zt(e,61)?qm:126;case 58:return ve(e),Zt(e,58)?jm:58;case 34:case 39:return Uy(e,e.current,t),Fs;case 46:return _e(e),Zt(e,46)?Zt(e,46)?Mm:Fm:ml(e.current)?Cm(e,t):46;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return Cm(e,t);case vr:return mn;default:if($R(e.current)){do _e(e);while(YR(e.current));let n=bl(e,fu(e.buff));t.ts=n;let s=mu[pu(n)];return s!==void 0&&s<=22?s+F:hu}else{let n=e.current;return ve(e),n}}},Fy=function(e){e.lastline=e.linenumber,e.lookahead.token!==mn?(e.t.token=e.lookahead.token,e.t.seminfo.i=e.lookahead.seminfo.i,e.t.seminfo.r=e.lookahead.seminfo.r,e.t.seminfo.ts=e.lookahead.seminfo.ts,e.lookahead.token=mn):e.t.token=zm(e,e.t.seminfo)},My=function(e){return Er(e.lookahead.token===mn),e.lookahead.token=zm(e,e.lookahead.seminfo),e.lookahead.token};kt.exports.FIRST_RESERVED=F;kt.exports.LUA_ENV=Um;kt.exports.LexState=lu;kt.exports.RESERVED=Ry;kt.exports.isreserved=Ky;kt.exports.luaX_lookahead=My;kt.exports.luaX_newstring=bl;kt.exports.luaX_next=Fy;kt.exports.luaX_setinput=Ny;kt.exports.luaX_syntaxerror=wy;kt.exports.luaX_token2str=Xm;kt.exports.luaX_tokens=gu});var A_=K((fH,V)=>{"use strict";var{LUA_MULTRET:xu,LUA_OPADD:By,LUA_OPBAND:Dy,LUA_OPBNOT:Gy,LUA_OPBOR:qy,LUA_OPBXOR:Hy,LUA_OPDIV:Ly,LUA_OPIDIV:jy,LUA_OPMOD:Xy,LUA_OPSHL:zy,LUA_OPSHR:Wy,LUA_OPUNM:Zy,constant_types:{LUA_TBOOLEAN:Jy,LUA_TLIGHTUSERDATA:Yy,LUA_TLNGSTR:$y,LUA_TNIL:Qy,LUA_TNUMFLT:t_,LUA_TNUMINT:Au,LUA_TTABLE:eN},to_luastring:Su}=Ae(),{lua_assert:ie}=ct(),ku=xl(),Eu=$e(),v=$n(),$=Ou(),Wm=Ct(),Zm=Is(),L=v.OpCodesI,Jt=Eu.TValue,tN=255,ee=-1,P={OPR_ADD:0,OPR_SUB:1,OPR_MUL:2,OPR_MOD:3,OPR_POW:4,OPR_DIV:5,OPR_IDIV:6,OPR_BAND:7,OPR_BOR:8,OPR_BXOR:9,OPR_SHL:10,OPR_SHR:11,OPR_CONCAT:12,OPR_EQ:13,OPR_LT:14,OPR_LE:15,OPR_NE:16,OPR_GT:17,OPR_GE:18,OPR_AND:19,OPR_OR:20,OPR_NOBINOPR:21},Wo={OPR_MINUS:0,OPR_BNOT:1,OPR_NOT:2,OPR_LEN:3,OPR_NOUNOPR:4},Rr=function(e){return e.t!==e.f},_u=function(e,t){let n=$.expkind;if(Rr(e))return!1;switch(e.k){case n.VKINT:return t?new Jt(Au,e.u.ival):!0;case n.VKFLT:return t?new Jt(t_,e.u.nval):!0;default:return!1}},n_=function(e,t,n){let s,r=t+n-1;if(e.pc>e.lasttarget&&(s=e.f.code[e.pc-1],s.opcode===L.OP_LOADNIL)){let o=s.A,a=o+s.B;if(o<=t&&t<=a+1||t<=o&&o<=r+1){o<t&&(t=o),a>r&&(r=a),v.SETARG_A(s,t),v.SETARG_B(s,r-t);return}}He(e,L.OP_LOADNIL,t,n-1,0)},bn=function(e,t){return e.f.code[t.u.info]},Tr=function(e,t){let n=e.f.code[t].sBx;return n===ee?ee:t+1+n},bu=function(e,t,n){let s=e.f.code[t],r=n-(t+1);ie(n!==ee),Math.abs(r)>v.MAXARG_sBx&&ku.luaX_syntaxerror(e.ls,Su("control structure too long",!0)),v.SETARG_sBx(s,r)},rs=function(e,t,n){if(n===ee)return t;if(t===ee)t=n;else{let s=t,r=Tr(e,s);for(;r!==ee;)s=r,r=Tr(e,s);bu(e,s,n)}return t},El=function(e){let t=e.jpc;e.jpc=ee;let n=l_(e,L.OP_JMP,0,ee);return n=rs(e,n,t),n},nN=function(e,t){return a_(e,El(e),t)},sN=function(e,t,n){He(e,L.OP_RETURN,t,n+1,0)},Zo=function(e,t,n,s,r){return He(e,t,n,s,r),El(e)},vl=function(e){return e.lasttarget=e.pc,e.pc},s_=function(e,t){return t>=1&&v.testTMode(e.f.code[t-1].opcode)?t-1:t},r_=function(e,t){return e.f.code[s_(e,t)]},o_=function(e,t,n){let s=s_(e,t),r=e.f.code[s];return r.opcode!==L.OP_TESTSET?!1:(n!==v.NO_REG&&n!==r.B?v.SETARG_A(r,n):e.f.code[s]=v.CREATE_ABC(L.OP_TEST,r.B,0,r.C),!0)},Jm=function(e,t){for(;t!==ee;t=Tr(e,t))o_(e,t,v.NO_REG)},Sl=function(e,t,n,s,r){for(;t!==ee;){let o=Tr(e,t);o_(e,t,s)?bu(e,t,n):bu(e,t,r),t=o}},rN=function(e){Sl(e,e.jpc,e.pc,v.NO_REG,e.pc),e.jpc=ee},Jo=function(e,t){vl(e),e.jpc=rs(e,e.jpc,t)},a_=function(e,t,n){n===e.pc?Jo(e,t):(ie(n<e.pc),Sl(e,t,n,v.NO_REG,n))},oN=function(e,t,n){for(n++;t!==ee;t=Tr(e,t)){let s=e.f.code[t];ie(s.opcode===L.OP_JMP&&(s.A===0||s.A>=n)),v.SETARG_A(s,n)}},Tl=function(e,t){let n=e.f;return rN(e),n.code[e.pc]=t,n.lineinfo[e.pc]=e.ls.lastline,e.pc++},He=function(e,t,n,s,r){return ie(v.getOpMode(t)===v.iABC),ie(v.getBMode(t)!==v.OpArgN||s===0),ie(v.getCMode(t)!==v.OpArgN||r===0),ie(n<=v.MAXARG_A&&s<=v.MAXARG_B&&r<=v.MAXARG_C),Tl(e,v.CREATE_ABC(t,n,s,r))},kl=function(e,t,n,s){return ie(v.getOpMode(t)===v.iABx||v.getOpMode(t)===v.iAsBx),ie(v.getCMode(t)===v.OpArgN),ie(n<=v.MAXARG_A&&s<=v.MAXARG_Bx),Tl(e,v.CREATE_ABx(t,n,s))},l_=function(e,t,n,s){return kl(e,t,n,s+v.MAXARG_sBx)},i_=function(e,t){return ie(t<=v.MAXARG_Ax),Tl(e,v.CREATE_Ax(L.OP_EXTRAARG,t))},Al=function(e,t,n){if(n<=v.MAXARG_Bx)return kl(e,L.OP_LOADK,t,n);{let s=kl(e,L.OP_LOADKX,t,0);return i_(e,n),s}},c_=function(e,t){let n=e.freereg+t;n>e.f.maxstacksize&&(n>=tN&&ku.luaX_syntaxerror(e.ls,Su("expression too complex",!0)),e.f.maxstacksize=n)},Yo=function(e,t){c_(e,t),e.freereg+=t},Ms=function(e,t){!v.ISK(t)&&t>=e.nactvar&&(e.freereg--,ie(t===e.freereg))},xn=function(e,t){t.k===$.expkind.VNONRELOC&&Ms(e,t.u.info)},u_=function(e,t,n){let s=t.k===$.expkind.VNONRELOC?t.u.info:-1,r=n.k===$.expkind.VNONRELOC?n.u.info:-1;s>r?(Ms(e,s),Ms(e,r)):(Ms(e,r),Ms(e,s))},$o=function(e,t,n){let s=e.f,r=Wm.luaH_get(e.L,e.ls.h,t);if(r.ttisinteger()){let a=r.value;if(a<e.nk&&s.k[a].ttype()===n.ttype()&&s.k[a].value===n.value)return a}let o=e.nk;return Wm.luaH_setfrom(e.L,e.ls.h,t,new Eu.TValue(Au,o)),s.k[o]=n,e.nk++,o},aN=function(e,t){let n=new Jt($y,t);return $o(e,n,n)},vu=function(e,t){let n=new Jt(Yy,t),s=new Jt(Au,t);return $o(e,n,s)},Tu=function(e,t){let n=new Jt(t_,t);return $o(e,n,n)},Ym=function(e,t){let n=new Jt(Jy,t);return $o(e,n,n)},lN=function(e){let t=new Jt(Qy,null),n=new Jt(eN,e.ls.h);return $o(e,n,t)},p_=function(e,t,n){let s=$.expkind;if(t.k===s.VCALL)v.SETARG_C(bn(e,t),n+1);else if(t.k===s.VVARARG){let r=bn(e,t);v.SETARG_B(r,n+1),v.SETARG_A(r,e.freereg),Yo(e,1)}else ie(n===xu)},iN=function(e,t){p_(e,t,xu)},f_=function(e,t){let n=$.expkind;t.k===n.VCALL?(ie(bn(e,t).C===2),t.k=n.VNONRELOC,t.u.info=bn(e,t).A):t.k===n.VVARARG&&(v.SETARG_B(bn(e,t),2),t.k=n.VRELOCABLE)},Yt=function(e,t){let n=$.expkind;switch(t.k){case n.VLOCAL:{t.k=n.VNONRELOC;break}case n.VUPVAL:{t.u.info=He(e,L.OP_GETUPVAL,0,t.u.info,0),t.k=n.VRELOCABLE;break}case n.VINDEXED:{let s;Ms(e,t.u.ind.idx),t.u.ind.vt===n.VLOCAL?(Ms(e,t.u.ind.t),s=L.OP_GETTABLE):(ie(t.u.ind.vt===n.VUPVAL),s=L.OP_GETTABUP),t.u.info=He(e,s,0,t.u.ind.t,t.u.ind.idx),t.k=n.VRELOCABLE;break}case n.VVARARG:case n.VCALL:{f_(e,t);break}default:break}},$m=function(e,t,n,s){return vl(e),He(e,L.OP_LOADBOOL,t,n,s)},d_=function(e,t,n){let s=$.expkind;switch(Yt(e,t),t.k){case s.VNIL:{n_(e,n,1);break}case s.VFALSE:case s.VTRUE:{He(e,L.OP_LOADBOOL,n,t.k===s.VTRUE,0);break}case s.VK:{Al(e,n,t.u.info);break}case s.VKFLT:{Al(e,n,Tu(e,t.u.nval));break}case s.VKINT:{Al(e,n,vu(e,t.u.ival));break}case s.VRELOCABLE:{let r=bn(e,t);v.SETARG_A(r,n);break}case s.VNONRELOC:{n!==t.u.info&&He(e,L.OP_MOVE,n,t.u.info,0);break}default:{ie(t.k===s.VJMP);return}}t.u.info=n,t.k=s.VNONRELOC},h_=function(e,t){t.k!==$.expkind.VNONRELOC&&(Yo(e,1),d_(e,t,e.freereg-1))},Qm=function(e,t){for(;t!==ee;t=Tr(e,t))if(r_(e,t).opcode!==L.OP_TESTSET)return!0;return!1},Ru=function(e,t,n){let s=$.expkind;if(d_(e,t,n),t.k===s.VJMP&&(t.t=rs(e,t.t,t.u.info)),Rr(t)){let r,o=ee,a=ee;if(Qm(e,t.t)||Qm(e,t.f)){let l=t.k===s.VJMP?ee:El(e);o=$m(e,n,0,1),a=$m(e,n,1,0),Jo(e,l)}r=vl(e),Sl(e,t.f,r,n,o),Sl(e,t.t,r,n,a)}t.f=t.t=ee,t.u.info=n,t.k=s.VNONRELOC},Rl=function(e,t){Yt(e,t),xn(e,t),Yo(e,1),Ru(e,t,e.freereg-1)},Bs=function(e,t){if(Yt(e,t),t.k===$.expkind.VNONRELOC){if(!Rr(t))return t.u.info;if(t.u.info>=e.nactvar)return Ru(e,t,t.u.info),t.u.info}return Rl(e,t),t.u.info},cN=function(e,t){(t.k!==$.expkind.VUPVAL||Rr(t))&&Bs(e,t)},yu=function(e,t){Rr(t)?Bs(e,t):Yt(e,t)},An=function(e,t){let n=$.expkind,s=!1;switch(yu(e,t),t.k){case n.VTRUE:t.u.info=Ym(e,!0),s=!0;break;case n.VFALSE:t.u.info=Ym(e,!1),s=!0;break;case n.VNIL:t.u.info=lN(e),s=!0;break;case n.VKINT:t.u.info=vu(e,t.u.ival),s=!0;break;case n.VKFLT:t.u.info=Tu(e,t.u.nval),s=!0;break;case n.VK:s=!0;break;default:break}return s&&(t.k=n.VK,t.u.info<=v.MAXINDEXRK)?v.RKASK(t.u.info):Bs(e,t)},uN=function(e,t,n){let s=$.expkind;switch(t.k){case s.VLOCAL:{xn(e,n),Ru(e,n,t.u.info);return}case s.VUPVAL:{let r=Bs(e,n);He(e,L.OP_SETUPVAL,r,t.u.info,0);break}case s.VINDEXED:{let r=t.u.ind.vt===s.VLOCAL?L.OP_SETTABLE:L.OP_SETTABUP,o=An(e,n);He(e,r,t.u.ind.t,t.u.ind.idx,o);break}}xn(e,n)},pN=function(e,t,n){Bs(e,t);let s=t.u.info;xn(e,t),t.u.info=e.freereg,t.k=$.expkind.VNONRELOC,Yo(e,2),He(e,L.OP_SELF,t.u.info,s,An(e,n)),xn(e,n)},g_=function(e,t){let n=r_(e,t.u.info);ie(v.testTMode(n.opcode)&&n.opcode!==L.OP_TESTSET&&n.opcode!==L.OP_TEST),v.SETARG_A(n,!n.A)},m_=function(e,t,n){if(t.k===$.expkind.VRELOCABLE){let s=bn(e,t);if(s.opcode===L.OP_NOT)return e.pc--,Zo(e,L.OP_TEST,s.B,0,!n)}return h_(e,t),xn(e,t),Zo(e,L.OP_TESTSET,v.NO_REG,t.u.info,n)},__=function(e,t){let n=$.expkind,s;switch(Yt(e,t),t.k){case n.VJMP:{g_(e,t),s=t.u.info;break}case n.VK:case n.VKFLT:case n.VKINT:case n.VTRUE:{s=ee;break}default:{s=m_(e,t,0);break}}t.f=rs(e,t.f,s),Jo(e,t.t),t.t=ee},b_=function(e,t){let n=$.expkind,s;switch(Yt(e,t),t.k){case n.VJMP:{s=t.u.info;break}case n.VNIL:case n.VFALSE:{s=ee;break}default:{s=m_(e,t,1);break}}t.t=rs(e,t.t,s),Jo(e,t.f),t.f=ee},fN=function(e,t){let n=$.expkind;switch(Yt(e,t),t.k){case n.VNIL:case n.VFALSE:{t.k=n.VTRUE;break}case n.VK:case n.VKFLT:case n.VKINT:case n.VTRUE:{t.k=n.VFALSE;break}case n.VJMP:{g_(e,t);break}case n.VRELOCABLE:case n.VNONRELOC:{h_(e,t),xn(e,t),t.u.info=He(e,L.OP_NOT,0,t.u.info,0),t.k=n.VRELOCABLE;break}}{let s=t.f;t.f=t.t,t.t=s}Jm(e,t.f),Jm(e,t.t)},dN=function(e,t,n){let s=$.expkind;ie(!Rr(t)&&($.vkisinreg(t.k)||t.k===s.VUPVAL)),t.u.ind.t=t.u.info,t.u.ind.idx=An(e,n),t.u.ind.vt=t.k===s.VUPVAL?s.VUPVAL:s.VLOCAL,t.k=s.VINDEXED},hN=function(e,t,n){switch(e){case Dy:case qy:case Hy:case zy:case Wy:case Gy:return Zm.tointeger(t)!==!1&&Zm.tointeger(n)!==!1;case Ly:case jy:case Xy:return n.value!==0;default:return 1}},x_=function(e,t,n){let s=$.expkind,r,o;if(!(r=_u(t,!0))||!(o=_u(n,!0))||!hN(e,r,o))return 0;let a=new Jt;if(Eu.luaO_arith(null,e,r,o,a),a.ttisinteger())t.k=s.VKINT,t.u.ival=a.value;else{let l=a.value;if(isNaN(l)||l===0)return!1;t.k=s.VKFLT,t.u.nval=l}return!0},gN=function(e,t,n,s){let r=Bs(e,n);xn(e,n),n.u.info=He(e,t,0,r,0),n.k=$.expkind.VRELOCABLE,Nu(e,s)},e_=function(e,t,n,s,r){let o=An(e,s),a=An(e,n);u_(e,n,s),n.u.info=He(e,t,0,a,o),n.k=$.expkind.VRELOCABLE,Nu(e,r)},mN=function(e,t,n,s){let r=$.expkind,o;n.k===r.VK?o=v.RKASK(n.u.info):(ie(n.k===r.VNONRELOC),o=n.u.info);let a=An(e,s);switch(u_(e,n,s),t){case P.OPR_NE:{n.u.info=Zo(e,L.OP_EQ,0,o,a);break}case P.OPR_GT:case P.OPR_GE:{let l=t-P.OPR_NE+L.OP_EQ;n.u.info=Zo(e,l,1,a,o);break}default:{let l=t-P.OPR_EQ+L.OP_EQ;n.u.info=Zo(e,l,1,o,a);break}}n.k=r.VJMP},_N=function(e,t,n,s){let r=new $.expdesc;switch(r.k=$.expkind.VKINT,r.u.ival=r.u.nval=r.u.info=0,r.t=ee,r.f=ee,t){case Wo.OPR_MINUS:case Wo.OPR_BNOT:if(x_(t+Zy,n,r))break;case Wo.OPR_LEN:gN(e,t+L.OP_UNM,n,s);break;case Wo.OPR_NOT:fN(e,n);break}},bN=function(e,t,n){switch(t){case P.OPR_AND:{__(e,n);break}case P.OPR_OR:{b_(e,n);break}case P.OPR_CONCAT:{Rl(e,n);break}case P.OPR_ADD:case P.OPR_SUB:case P.OPR_MUL:case P.OPR_DIV:case P.OPR_IDIV:case P.OPR_MOD:case P.OPR_POW:case P.OPR_BAND:case P.OPR_BOR:case P.OPR_BXOR:case P.OPR_SHL:case P.OPR_SHR:{_u(n,!1)||An(e,n);break}default:{An(e,n);break}}},xN=function(e,t,n,s,r){let o=$.expkind;switch(t){case P.OPR_AND:{ie(n.t===ee),Yt(e,s),s.f=rs(e,s.f,n.f),n.to(s);break}case P.OPR_OR:{ie(n.f===ee),Yt(e,s),s.t=rs(e,s.t,n.t),n.to(s);break}case P.OPR_CONCAT:{yu(e,s);let a=bn(e,s);s.k===o.VRELOCABLE&&a.opcode===L.OP_CONCAT?(ie(n.u.info===a.B-1),xn(e,n),v.SETARG_B(a,n.u.info),n.k=o.VRELOCABLE,n.u.info=s.u.info):(Rl(e,s),e_(e,L.OP_CONCAT,n,s,r));break}case P.OPR_ADD:case P.OPR_SUB:case P.OPR_MUL:case P.OPR_DIV:case P.OPR_IDIV:case P.OPR_MOD:case P.OPR_POW:case P.OPR_BAND:case P.OPR_BOR:case P.OPR_BXOR:case P.OPR_SHL:case P.OPR_SHR:{x_(t+By,n,s)||e_(e,t+L.OP_ADD,n,s,r);break}case P.OPR_EQ:case P.OPR_LT:case P.OPR_LE:case P.OPR_NE:case P.OPR_GT:case P.OPR_GE:{mN(e,t,n,s);break}}return n},Nu=function(e,t){e.f.lineinfo[e.pc-1]=t},AN=function(e,t,n,s){let r=(n-1)/v.LFIELDS_PER_FLUSH+1,o=s===xu?0:s;ie(s!==0&&s<=v.LFIELDS_PER_FLUSH),r<=v.MAXARG_C?He(e,L.OP_SETLIST,t,o,r):r<=v.MAXARG_Ax?(He(e,L.OP_SETLIST,t,o,0),i_(e,r)):ku.luaX_syntaxerror(e.ls,Su("constructor too long",!0)),e.freereg=t+1};V.exports.BinOpr=P;V.exports.NO_JUMP=ee;V.exports.UnOpr=Wo;V.exports.getinstruction=bn;V.exports.luaK_checkstack=c_;V.exports.luaK_code=Tl;V.exports.luaK_codeABC=He;V.exports.luaK_codeABx=kl;V.exports.luaK_codeAsBx=l_;V.exports.luaK_codek=Al;V.exports.luaK_concat=rs;V.exports.luaK_dischargevars=Yt;V.exports.luaK_exp2RK=An;V.exports.luaK_exp2anyreg=Bs;V.exports.luaK_exp2anyregup=cN;V.exports.luaK_exp2nextreg=Rl;V.exports.luaK_exp2val=yu;V.exports.luaK_fixline=Nu;V.exports.luaK_getlabel=vl;V.exports.luaK_goiffalse=b_;V.exports.luaK_goiftrue=__;V.exports.luaK_indexed=dN;V.exports.luaK_infix=bN;V.exports.luaK_intK=vu;V.exports.luaK_jump=El;V.exports.luaK_jumpto=nN;V.exports.luaK_nil=n_;V.exports.luaK_numberK=Tu;V.exports.luaK_patchclose=oN;V.exports.luaK_patchlist=a_;V.exports.luaK_patchtohere=Jo;V.exports.luaK_posfix=xN;V.exports.luaK_prefix=_N;V.exports.luaK_reserveregs=Yo;V.exports.luaK_ret=sN;V.exports.luaK_self=pN;V.exports.luaK_setlist=AN;V.exports.luaK_setmultret=iN;V.exports.luaK_setoneret=f_;V.exports.luaK_setreturns=p_;V.exports.luaK_storevar=uN;V.exports.luaK_stringK=aN});var Ou=K((dH,Vr)=>{"use strict";var{LUA_MULTRET:Hu,to_luastring:ue}=Ae(),{BinOpr:{OPR_ADD:SN,OPR_AND:kN,OPR_BAND:EN,OPR_BOR:vN,OPR_BXOR:TN,OPR_CONCAT:RN,OPR_DIV:yN,OPR_EQ:NN,OPR_GE:ON,OPR_GT:wN,OPR_IDIV:CN,OPR_LE:IN,OPR_LT:VN,OPR_MOD:PN,OPR_MUL:UN,OPR_NE:KN,OPR_NOBINOPR:N_,OPR_OR:FN,OPR_POW:MN,OPR_SHL:BN,OPR_SHR:DN,OPR_SUB:GN},UnOpr:{OPR_BNOT:qN,OPR_LEN:HN,OPR_MINUS:LN,OPR_NOT:jN,OPR_NOUNOPR:O_},NO_JUMP:yr,getinstruction:Iu,luaK_checkstack:XN,luaK_codeABC:wr,luaK_codeABx:zN,luaK_codeAsBx:wu,luaK_codek:WN,luaK_concat:ZN,luaK_dischargevars:JN,luaK_exp2RK:S_,luaK_exp2anyreg:YN,luaK_exp2anyregup:w_,luaK_exp2nextreg:Qt,luaK_exp2val:$N,luaK_fixline:yl,luaK_getlabel:Lu,luaK_goiffalse:QN,luaK_goiftrue:C_,luaK_indexed:ju,luaK_infix:eO,luaK_intK:tO,luaK_jump:Qo,luaK_jumpto:nO,luaK_nil:sO,luaK_patchclose:Cl,luaK_patchlist:Xu,luaK_patchtohere:ea,luaK_posfix:rO,luaK_prefix:oO,luaK_reserveregs:Nr,luaK_ret:I_,luaK_self:aO,luaK_setlist:Vu,luaK_setmultret:zu,luaK_setoneret:lO,luaK_setreturns:iO,luaK_storevar:Pu,luaK_stringK:cO}=A_(),k_=It(),Wu=Ps(),I=xl(),{LUAI_MAXCCALLS:V_,MAX_INT:P_,lua_assert:ft}=ct(),$t=$e(),{OpCodesI:{OP_CALL:uO,OP_CLOSURE:pO,OP_FORLOOP:fO,OP_FORPREP:dO,OP_GETUPVAL:hO,OP_MOVE:gO,OP_NEWTABLE:mO,OP_SETTABLE:_O,OP_TAILCALL:bO,OP_TFORCALL:xO,OP_TFORLOOP:AO,OP_VARARG:SO},LFIELDS_PER_FLUSH:kO,SETARG_B:EO,SETARG_C:U_,SET_OPCODE:vO}=$n(),{luaS_eqlngstr:TO,luaS_new:RO,luaS_newliteral:K_}=Xt(),yO=Ct(),F_=Wu.Proto,b=I.RESERVED,NO=200,Il=function(e){return e===w.VCALL||e===w.VVARARG},Cr=function(e,t){return TO(e,t)},Bt=class{constructor(){this.previous=null,this.firstlabel=NaN,this.firstgoto=NaN,this.nactvar=NaN,this.upval=NaN,this.isloop=NaN}},w={VVOID:0,VNIL:1,VTRUE:2,VFALSE:3,VK:4,VKFLT:5,VKINT:6,VNONRELOC:7,VLOCAL:8,VUPVAL:9,VINDEXED:10,VJMP:11,VRELOCABLE:12,VCALL:13,VVARARG:14},OO=function(e){return w.VLOCAL<=e&&e<=w.VINDEXED},wO=function(e){return e===w.VNONRELOC||e===w.VLOCAL},re=class{constructor(){this.k=NaN,this.u={ival:NaN,nval:NaN,info:NaN,ind:{idx:NaN,t:NaN,vt:NaN}},this.t=NaN,this.f=NaN}to(t){this.k=t.k,this.u=t.u,this.t=t.t,this.f=t.f}},Nl=class{constructor(){this.f=null,this.prev=null,this.ls=null,this.bl=null,this.pc=NaN,this.lasttarget=NaN,this.jpc=NaN,this.nk=NaN,this.np=NaN,this.firstlocal=NaN,this.nlocvars=NaN,this.nactvar=NaN,this.nups=NaN,this.freereg=NaN}},Uu=class{constructor(){this.idx=NaN}},Ku=class{constructor(){this.name=null,this.pc=NaN,this.line=NaN,this.nactvar=NaN}},Ol=class{constructor(){this.arr=[],this.n=NaN,this.size=NaN}},Fu=class{constructor(){this.actvar={arr:[],n:NaN,size:NaN},this.gt=new Ol,this.label=new Ol}},Zu=function(e,t){e.t.token=0,I.luaX_syntaxerror(e,t)},M_=function(e,t){I.luaX_syntaxerror(e,$t.luaO_pushfstring(e.L,ue("%s expected",!0),I.luaX_token2str(e,t)))},CO=function(e,t,n){let s=e.ls.L,r=e.f.linedefined,o=r===0?ue("main function",!0):$t.luaO_pushfstring(s,ue("function at line %d",!0),r),a=$t.luaO_pushfstring(s,ue("too many %s (limit is %d) in %s",!0),n,t,o);I.luaX_syntaxerror(e.ls,a)},Ir=function(e,t,n,s){t>n&&CO(e,n,s)},tt=function(e,t){return e.t.token===t?(I.luaX_next(e),!0):!1},Ju=function(e,t){e.t.token!==t&&M_(e,t)},Et=function(e,t){Ju(e,t),I.luaX_next(e)},Yu=function(e,t,n){t||I.luaX_syntaxerror(e,n)},vn=function(e,t,n,s){tt(e,t)||(s===e.linenumber?M_(e,t):I.luaX_syntaxerror(e,$t.luaO_pushfstring(e.L,ue("%s expected (to close %s at line %d)"),I.luaX_token2str(e,t),I.luaX_token2str(e,n),s)))},Tn=function(e){Ju(e,b.TK_NAME);let t=e.t.seminfo.ts;return I.luaX_next(e),t},ze=function(e,t,n){e.f=e.t=yr,e.k=t,e.u.info=n},Vl=function(e,t,n){ze(t,w.VK,cO(e.fs,n))},$u=function(e,t){Vl(e,t,Tn(e))},IO=function(e,t){let n=e.fs,s=n.f;return s.locvars[n.nlocvars]=new $t.LocVar,s.locvars[n.nlocvars].varname=t,n.nlocvars++},Gs=function(e,t){let n=e.fs,s=e.dyd,r=IO(e,t);Ir(n,s.actvar.n+1-n.firstlocal,NO,ue("local variables",!0)),s.actvar.arr[s.actvar.n]=new Uu,s.actvar.arr[s.actvar.n].idx=r,s.actvar.n++},Ds=function(e,t){Gs(e,I.luaX_newstring(e,ue(t,!0)))},ta=function(e,t){let n=e.ls.dyd.actvar.arr[e.firstlocal+t].idx;return ft(n<e.nlocvars),e.f.locvars[n]},Or=function(e,t){let n=e.fs;for(n.nactvar=n.nactvar+t;t;t--)ta(n,n.nactvar-t).startpc=n.pc},VO=function(e,t){for(e.ls.dyd.actvar.n-=e.nactvar-t;e.nactvar>t;)ta(e,--e.nactvar).endpc=e.pc},PO=function(e,t){let n=e.f.upvalues;for(let s=0;s<e.nups;s++)if(Cr(n[s].name,t))return s;return-1},B_=function(e,t,n){let s=e.f;return Ir(e,e.nups+1,Wu.MAXUPVAL,ue("upvalues",!0)),s.upvalues[e.nups]={instack:n.k===w.VLOCAL,idx:n.u.info,name:t},e.nups++},UO=function(e,t){for(let n=e.nactvar-1;n>=0;n--)if(Cr(t,ta(e,n).varname))return n;return-1},KO=function(e,t){let n=e.bl;for(;n.nactvar>t;)n=n.previous;n.upval=1},Mu=function(e,t,n,s){if(e===null)ze(n,w.VVOID,0);else{let r=UO(e,t);if(r>=0)ze(n,w.VLOCAL,r),s||KO(e,r);else{let o=PO(e,t);if(o<0){if(Mu(e.prev,t,n,0),n.k===w.VVOID)return;o=B_(e,t,n)}ze(n,w.VUPVAL,o)}}},D_=function(e,t){let n=Tn(e),s=e.fs;if(Mu(s,n,t,1),t.k===w.VVOID){let r=new re;Mu(s,e.envn,t,1),ft(t.k!==w.VVOID),Vl(e,r,n),ju(s,t,r)}},Qu=function(e,t,n,s){let r=e.fs,o=t-n;if(Il(s.k))o++,o<0&&(o=0),iO(r,s,o),o>1&&Nr(r,o-1);else if(s.k!==w.VVOID&&Qt(r,s),o>0){let a=r.freereg;Nr(r,o),sO(r,a,o)}n>t&&(e.fs.freereg-=n-t)},G_=function(e){let t=e.L;++t.nCcalls,Ir(e.fs,t.nCcalls,V_,ue("C levels",!0))},q_=function(e){return e.L.nCcalls--},H_=function(e,t,n){let s=e.fs,r=e.dyd.gt,o=r.arr[t];if(ft(Cr(o.name,n.name)),o.nactvar<n.nactvar){let a=ta(s,o.nactvar).varname,l=$t.luaO_pushfstring(e.L,ue("<goto %s> at line %d jumps into the scope of local '%s'"),o.name.getstr(),o.line,a.getstr());Zu(e,l)}Xu(s,o.pc,n.pc);for(let a=t;a<r.n-1;a++)r.arr[a]=r.arr[a+1];r.n--},L_=function(e,t){let n=e.fs.bl,s=e.dyd,r=s.gt.arr[t];for(let o=n.firstlabel;o<s.label.n;o++){let a=s.label.arr[o];if(Cr(a.name,r.name))return r.nactvar>a.nactvar&&(n.upval||s.label.n>n.firstlabel)&&Cl(e.fs,r.pc,a.nactvar),H_(e,t,a),!0}return!1},ep=function(e,t,n,s,r){let o=t.n;return t.arr[o]=new Ku,t.arr[o].name=n,t.arr[o].line=s,t.arr[o].nactvar=e.fs.nactvar,t.arr[o].pc=r,t.n=o+1,o},j_=function(e,t){let n=e.dyd.gt,s=e.fs.bl.firstgoto;for(;s<n.n;)Cr(n.arr[s].name,t.name)?H_(e,s,t):s++},FO=function(e,t){let n=t.firstgoto,s=e.ls.dyd.gt;for(;n<s.n;){let r=s.arr[n];r.nactvar>t.nactvar&&(t.upval&&Cl(e,r.pc,t.nactvar),r.nactvar=t.nactvar),L_(e.ls,n)||n++}},Sn=function(e,t,n){t.isloop=n,t.nactvar=e.nactvar,t.firstlabel=e.ls.dyd.label.n,t.firstgoto=e.ls.dyd.gt.n,t.upval=0,t.previous=e.bl,e.bl=t,ft(e.freereg===e.nactvar)},MO=function(e){let t=K_(e.L,"break"),n=ep(e,e.dyd.label,t,0,e.fs.pc);j_(e,e.dyd.label.arr[n])},BO=function(e,t){let n=I.isreserved(t.name)?"<%s> at line %d not inside a loop":"no visible label '%s' for <goto> at line %d";n=$t.luaO_pushfstring(e.L,ue(n),t.name.getstr(),t.line),Zu(e,n)},DO=function(e){let t=e.L,n=new F_(t),s=e.fs,r=s.f;return r.p[s.np++]=n,n},GO=function(e,t){let n=e.fs.prev;ze(t,w.VRELOCABLE,zN(n,pO,0,n.np-1)),Qt(n,t)},X_=function(e,t,n){t.prev=e.fs,t.ls=e,e.fs=t,t.pc=0,t.lasttarget=0,t.jpc=yr,t.freereg=0,t.nk=0,t.np=0,t.nups=0,t.nlocvars=0,t.nactvar=0,t.firstlocal=e.dyd.actvar.n,t.bl=null;let s=t.f;s.source=e.source,s.maxstacksize=2,Sn(t,n,!1)},kn=function(e){let t=e.bl,n=e.ls;if(t.previous&&t.upval){let s=Qo(e);Cl(e,s,t.nactvar),ea(e,s)}t.isloop&&MO(n),e.bl=t.previous,VO(e,t.nactvar),ft(t.nactvar===e.nactvar),e.freereg=e.nactvar,n.dyd.label.n=t.firstlabel,t.previous?FO(e,t):t.firstgoto<n.dyd.gt.n&&BO(n,n.dyd.gt.arr[t.firstgoto])},z_=function(e){let t=e.fs;I_(t,0,0),kn(t),ft(t.bl===null),e.fs=t.prev},Pl=function(e,t){switch(e.t.token){case b.TK_ELSE:case b.TK_ELSEIF:case b.TK_END:case b.TK_EOS:return!0;case b.TK_UNTIL:return t;default:return!1}},na=function(e){for(;!Pl(e,1);){if(e.t.token===b.TK_RETURN){qu(e);return}qu(e)}},Bu=function(e,t){let n=e.fs,s=new re;w_(n,t),I.luaX_next(e),$u(e,s),ju(n,t,s)},W_=function(e,t){I.luaX_next(e),En(e,t),$N(e.fs,t),Et(e,93)},Du=class{constructor(){this.v=new re,this.t=new re,this.nh=NaN,this.na=NaN,this.tostore=NaN}},E_=function(e,t){let n=e.fs,s=e.fs.freereg,r=new re,o=new re;e.t.token===b.TK_NAME?(Ir(n,t.nh,P_,ue("items in a constructor",!0)),$u(e,r)):W_(e,r),t.nh++,Et(e,61);let a=S_(n,r);En(e,o),wr(n,_O,t.t.u.info,a,S_(n,o)),n.freereg=s},qO=function(e,t){t.v.k!==w.VVOID&&(Qt(e,t.v),t.v.k=w.VVOID,t.tostore===kO&&(Vu(e,t.t.u.info,t.na,t.tostore),t.tostore=0))},HO=function(e,t){t.tostore!==0&&(Il(t.v.k)?(zu(e,t.v),Vu(e,t.t.u.info,t.na,Hu),t.na--):(t.v.k!==w.VVOID&&Qt(e,t.v),Vu(e,t.t.u.info,t.na,t.tostore)))},v_=function(e,t){En(e,t.v),Ir(e.fs,t.na,P_,ue("items in a constructor",!0)),t.na++,t.tostore++},LO=function(e,t){switch(e.t.token){case b.TK_NAME:{I.luaX_lookahead(e)!==61?v_(e,t):E_(e,t);break}case 91:{E_(e,t);break}default:{v_(e,t);break}}},Z_=function(e,t){let n=e.fs,s=e.linenumber,r=wr(n,mO,0,0,0),o=new Du;o.na=o.nh=o.tostore=0,o.t=t,ze(t,w.VRELOCABLE,r),ze(o.v,w.VVOID,0),Qt(e.fs,t),Et(e,123);do{if(ft(o.v.k===w.VVOID||o.tostore>0),e.t.token===125)break;qO(n,o),LO(e,o)}while(tt(e,44)||tt(e,59));vn(e,125,123,s),HO(n,o),EO(n.f.code[r],$t.luaO_int2fb(o.na)),U_(n.f.code[r],$t.luaO_int2fb(o.nh))},jO=function(e){let t=e.fs,n=t.f,s=0;if(n.is_vararg=!1,e.t.token!==41)do switch(e.t.token){case b.TK_NAME:{Gs(e,Tn(e)),s++;break}case b.TK_DOTS:{I.luaX_next(e),n.is_vararg=!0;break}default:I.luaX_syntaxerror(e,ue("<name> or '...' expected",!0))}while(!n.is_vararg&&tt(e,44));Or(e,s),n.numparams=t.nactvar,Nr(t,t.nactvar)},tp=function(e,t,n,s){let r=new Nl,o=new Bt;r.f=DO(e),r.f.linedefined=s,X_(e,r,o),Et(e,40),n&&(Ds(e,"self"),Or(e,1)),jO(e),Et(e,41),na(e),r.f.lastlinedefined=e.linenumber,vn(e,b.TK_END,b.TK_FUNCTION,s),GO(e,t),z_(e)},sa=function(e,t){let n=1;for(En(e,t);tt(e,44);)Qt(e.fs,t),En(e,t),n++;return n},T_=function(e,t,n){let s=e.fs,r=new re;switch(e.t.token){case 40:{I.luaX_next(e),e.t.token===41?r.k=w.VVOID:(sa(e,r),zu(s,r)),vn(e,41,40,n);break}case 123:{Z_(e,r);break}case b.TK_STRING:{Vl(e,r,e.t.seminfo.ts),I.luaX_next(e);break}default:I.luaX_syntaxerror(e,ue("function arguments expected",!0))}ft(t.k===w.VNONRELOC);let o,a=t.u.info;Il(r.k)?o=Hu:(r.k!==w.VVOID&&Qt(s,r),o=s.freereg-(a+1)),ze(t,w.VCALL,wr(s,uO,a,o+1,2)),yl(s,n),s.freereg=a+1},XO=function(e,t){switch(e.t.token){case 40:{let n=e.linenumber;I.luaX_next(e),En(e,t),vn(e,41,40,n),JN(e.fs,t);return}case b.TK_NAME:{D_(e,t);return}default:I.luaX_syntaxerror(e,ue("unexpected symbol",!0))}},np=function(e,t){let n=e.fs,s=e.linenumber;for(XO(e,t);;)switch(e.t.token){case 46:{Bu(e,t);break}case 91:{let r=new re;w_(n,t),W_(e,r),ju(n,t,r);break}case 58:{let r=new re;I.luaX_next(e),$u(e,r),aO(n,t,r),T_(e,t,s);break}case 40:case b.TK_STRING:case 123:{Qt(n,t),T_(e,t,s);break}default:return}},zO=function(e,t){switch(e.t.token){case b.TK_FLT:{ze(t,w.VKFLT,0),t.u.nval=e.t.seminfo.r;break}case b.TK_INT:{ze(t,w.VKINT,0),t.u.ival=e.t.seminfo.i;break}case b.TK_STRING:{Vl(e,t,e.t.seminfo.ts);break}case b.TK_NIL:{ze(t,w.VNIL,0);break}case b.TK_TRUE:{ze(t,w.VTRUE,0);break}case b.TK_FALSE:{ze(t,w.VFALSE,0);break}case b.TK_DOTS:{let n=e.fs;Yu(e,n.f.is_vararg,ue("cannot use '...' outside a vararg function",!0)),ze(t,w.VVARARG,wr(n,SO,0,1,0));break}case 123:{Z_(e,t);return}case b.TK_FUNCTION:{I.luaX_next(e),tp(e,t,0,e.linenumber);return}default:{np(e,t);return}}I.luaX_next(e)},WO=function(e){switch(e){case b.TK_NOT:return jN;case 45:return LN;case 126:return qN;case 35:return HN;default:return O_}},ZO=function(e){switch(e){case 43:return SN;case 45:return GN;case 42:return UN;case 37:return PN;case 94:return MN;case 47:return yN;case b.TK_IDIV:return CN;case 38:return EN;case 124:return vN;case 126:return TN;case b.TK_SHL:return BN;case b.TK_SHR:return DN;case b.TK_CONCAT:return RN;case b.TK_NE:return KN;case b.TK_EQ:return NN;case 60:return VN;case b.TK_LE:return IN;case 62:return wN;case b.TK_GE:return ON;case b.TK_AND:return kN;case b.TK_OR:return FN;default:return N_}},R_=[{left:10,right:10},{left:10,right:10},{left:11,right:11},{left:11,right:11},{left:14,right:13},{left:11,right:11},{left:11,right:11},{left:6,right:6},{left:4,right:4},{left:5,right:5},{left:7,right:7},{left:7,right:7},{left:9,right:8},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:2,right:2},{left:1,right:1}],JO=12,Gu=function(e,t,n){G_(e);let s=WO(e.t.token);if(s!==O_){let o=e.linenumber;I.luaX_next(e),Gu(e,t,JO),oO(e.fs,s,t,o)}else zO(e,t);let r=ZO(e.t.token);for(;r!==N_&&R_[r].left>n;){let o=new re,a=e.linenumber;I.luaX_next(e),eO(e.fs,r,t);let l=Gu(e,o,R_[r].right);rO(e.fs,r,t,o,a),r=l}return q_(e),r},En=function(e,t){Gu(e,t,0)},Ul=function(e){let t=e.fs,n=new Bt;Sn(t,n,0),na(e),kn(t)},wl=class{constructor(){this.prev=null,this.v=new re}},YO=function(e,t,n){let s=e.fs,r=s.freereg,o=!1;for(;t;t=t.prev)t.v.k===w.VINDEXED&&(t.v.u.ind.vt===n.k&&t.v.u.ind.t===n.u.info&&(o=!0,t.v.u.ind.vt=w.VLOCAL,t.v.u.ind.t=r),n.k===w.VLOCAL&&t.v.u.ind.idx===n.u.info&&(o=!0,t.v.u.ind.idx=r));if(o){let a=n.k===w.VLOCAL?gO:hO;wr(s,a,r,n.u.info,0),Nr(s,1)}},J_=function(e,t,n){let s=new re;if(Yu(e,OO(t.v.k),ue("syntax error",!0)),tt(e,44)){let r=new wl;r.prev=t,np(e,r.v),r.v.k!==w.VINDEXED&&YO(e,t,r.v),Ir(e.fs,n+e.L.nCcalls,V_,ue("C levels",!0)),J_(e,r,n+1)}else{Et(e,61);let r=sa(e,s);if(r!==n)Qu(e,n,r,s);else{lO(e.fs,s),Pu(e.fs,t.v,s);return}}ze(s,w.VNONRELOC,e.fs.freereg-1),Pu(e.fs,t.v,s)},Y_=function(e){let t=new re;return En(e,t),t.k===w.VNIL&&(t.k=w.VFALSE),C_(e.fs,t),t.f},$_=function(e,t){let n=e.linenumber,s;tt(e,b.TK_GOTO)?s=Tn(e):(I.luaX_next(e),s=K_(e.L,"break"));let r=ep(e,e.dyd.gt,s,n,t);L_(e,r)},$O=function(e,t,n){for(let s=e.bl.firstlabel;s<t.n;s++)if(Cr(n,t.arr[s].name)){let r=$t.luaO_pushfstring(e.ls.L,ue("label '%s' already defined on line %d",!0),n.getstr(),t.arr[s].line);Zu(e.ls,r)}},QO=function(e){for(;e.t.token===59||e.t.token===b.TK_DBCOLON;)qu(e)},ew=function(e,t,n){let s=e.fs,r=e.dyd.label,o;$O(s,r,t),Et(e,b.TK_DBCOLON),o=ep(e,r,t,n,Lu(s)),QO(e),Pl(e,0)&&(r.arr[o].nactvar=s.bl.nactvar),j_(e,r.arr[o])},tw=function(e,t){let n=e.fs,s=new Bt;I.luaX_next(e);let r=Lu(n),o=Y_(e);Sn(n,s,1),Et(e,b.TK_DO),Ul(e),nO(n,r),vn(e,b.TK_END,b.TK_WHILE,t),kn(n),ea(n,o)},nw=function(e,t){let n=e.fs,s=Lu(n),r=new Bt,o=new Bt;Sn(n,r,1),Sn(n,o,0),I.luaX_next(e),na(e),vn(e,b.TK_UNTIL,b.TK_REPEAT,t);let a=Y_(e);o.upval&&Cl(n,a,o.nactvar),kn(n),Xu(n,a,s),kn(n)},Cu=function(e){let t=new re;return En(e,t),Qt(e.fs,t),ft(t.k===w.VNONRELOC),t.u.info},Q_=function(e,t,n,s,r){let o=new Bt,a=e.fs,l;Or(e,3),Et(e,b.TK_DO);let i=r?wu(a,dO,t,yr):Qo(a);Sn(a,o,0),Or(e,s),Nr(a,s),Ul(e),kn(a),ea(a,i),r?l=wu(a,fO,t,yr):(wr(a,xO,t,0,s),yl(a,n),l=wu(a,AO,t+2,yr)),Xu(a,l,i+1),yl(a,n)},sw=function(e,t,n){let s=e.fs,r=s.freereg;Ds(e,"(for index)"),Ds(e,"(for limit)"),Ds(e,"(for step)"),Gs(e,t),Et(e,61),Cu(e),Et(e,44),Cu(e),tt(e,44)?Cu(e):(WN(s,s.freereg,tO(s,1)),Nr(s,1)),Q_(e,r,n,1,1)},rw=function(e,t){let n=e.fs,s=new re,r=4,o=n.freereg;for(Ds(e,"(for generator)"),Ds(e,"(for state)"),Ds(e,"(for control)"),Gs(e,t);tt(e,44);)Gs(e,Tn(e)),r++;Et(e,b.TK_IN);let a=e.linenumber;Qu(e,3,sa(e,s),s),XN(n,3),Q_(e,o,a,r-3,0)},ow=function(e,t){let n=e.fs,s=new Bt;Sn(n,s,1),I.luaX_next(e);let r=Tn(e);switch(e.t.token){case 61:sw(e,r,t);break;case 44:case b.TK_IN:rw(e,r);break;default:I.luaX_syntaxerror(e,ue("'=' or 'in' expected",!0))}vn(e,b.TK_END,b.TK_FOR,t),kn(n)},y_=function(e,t){let n=new Bt,s=e.fs,r=new re,o;if(I.luaX_next(e),En(e,r),Et(e,b.TK_THEN),e.t.token===b.TK_GOTO||e.t.token===b.TK_BREAK){for(QN(e.fs,r),Sn(s,n,!1),$_(e,r.t);tt(e,59););if(Pl(e,0))return kn(s),t;o=Qo(s)}else C_(e.fs,r),Sn(s,n,!1),o=r.f;return na(e),kn(s),(e.t.token===b.TK_ELSE||e.t.token===b.TK_ELSEIF)&&(t=ZN(s,t,Qo(s))),ea(s,o),t},aw=function(e,t){let n=e.fs,s=yr;for(s=y_(e,s);e.t.token===b.TK_ELSEIF;)s=y_(e,s);tt(e,b.TK_ELSE)&&Ul(e),vn(e,b.TK_END,b.TK_IF,t),ea(n,s)},lw=function(e){let t=new re,n=e.fs;Gs(e,Tn(e)),Or(e,1),tp(e,t,0,e.linenumber),ta(n,t.u.info).startpc=n.pc},iw=function(e){let t=0,n,s=new re;do Gs(e,Tn(e)),t++;while(tt(e,44));tt(e,61)?n=sa(e,s):(s.k=w.VVOID,n=0),Qu(e,t,n,s),Or(e,t)},cw=function(e,t){let n=0;for(D_(e,t);e.t.token===46;)Bu(e,t);return e.t.token===58&&(n=1,Bu(e,t)),n},uw=function(e,t){let n=new re,s=new re;I.luaX_next(e);let r=cw(e,n);tp(e,s,r,t),Pu(e.fs,n,s),yl(e.fs,t)},pw=function(e){let t=e.fs,n=new wl;np(e,n.v),e.t.token===61||e.t.token===44?(n.prev=null,J_(e,n,1)):(Yu(e,n.v.k===w.VCALL,ue("syntax error",!0)),U_(Iu(t,n.v),1))},fw=function(e){let t=e.fs,n=new re,s,r;Pl(e,1)||e.t.token===59?s=r=0:(r=sa(e,n),Il(n.k)?(zu(t,n),n.k===w.VCALL&&r===1&&(vO(Iu(t,n),bO),ft(Iu(t,n).A===t.nactvar)),s=t.nactvar,r=Hu):r===1?s=YN(t,n):(Qt(t,n),s=t.nactvar,ft(r===t.freereg-s))),I_(t,s,r),tt(e,59)},qu=function(e){let t=e.linenumber;switch(G_(e),e.t.token){case 59:{I.luaX_next(e);break}case b.TK_IF:{aw(e,t);break}case b.TK_WHILE:{tw(e,t);break}case b.TK_DO:{I.luaX_next(e),Ul(e),vn(e,b.TK_END,b.TK_DO,t);break}case b.TK_FOR:{ow(e,t);break}case b.TK_REPEAT:{nw(e,t);break}case b.TK_FUNCTION:{uw(e,t);break}case b.TK_LOCAL:{I.luaX_next(e),tt(e,b.TK_FUNCTION)?lw(e):iw(e);break}case b.TK_DBCOLON:{I.luaX_next(e),ew(e,Tn(e),t);break}case b.TK_RETURN:{I.luaX_next(e),fw(e);break}case b.TK_BREAK:case b.TK_GOTO:{$_(e,Qo(e.fs));break}default:{pw(e);break}}ft(e.fs.f.maxstacksize>=e.fs.freereg&&e.fs.freereg>=e.fs.nactvar),e.fs.freereg=e.fs.nactvar,q_(e)},dw=function(e,t){let n=new Bt,s=new re;X_(e,t,n),t.f.is_vararg=!0,ze(s,w.VLOCAL,0),B_(t,e.envn,s),I.luaX_next(e),na(e),Ju(e,b.TK_EOS),z_(e)},hw=function(e,t,n,s,r,o){let a=new I.LexState,l=new Nl,i=Wu.luaF_newLclosure(e,1);return k_.luaD_inctop(e),e.stack[e.top-1].setclLvalue(i),a.h=yO.luaH_new(e),k_.luaD_inctop(e),e.stack[e.top-1].sethvalue(a.h),l.f=i.p=new F_(e),l.f.source=RO(e,r),a.buff=n,a.dyd=s,s.actvar.n=s.gt.n=s.label.n=0,I.luaX_setinput(e,a,t,l.f.source,o),dw(a,l),ft(!l.prev&&l.nups===1&&!a.fs),ft(s.actvar.n===0&&s.gt.n===0&&s.label.n===0),delete e.stack[--e.top],i};Vr.exports.Dyndata=Fu;Vr.exports.expkind=w;Vr.exports.expdesc=re;Vr.exports.luaY_parser=hw;Vr.exports.vkisinreg=wO});var ub=K((hH,cb)=>{"use strict";var{LUA_SIGNATURE:eb,constant_types:{LUA_TBOOLEAN:tb,LUA_TLNGSTR:nb,LUA_TNIL:sb,LUA_TNUMFLT:rb,LUA_TNUMINT:ob,LUA_TSHRSTR:gw},thread_status:{LUA_ERRSYNTAX:mw},is_luastring:_w,luastring_eq:bw,to_luastring:sp}=Ae(),xw=at(),ib=It(),rp=Ps(),Pr=$e(),{MAXARG_sBx:Aw,POS_A:Sw,POS_Ax:kw,POS_B:Ew,POS_Bx:ab,POS_C:vw,POS_OP:Tw,SIZE_A:Rw,SIZE_Ax:yw,SIZE_B:Nw,SIZE_Bx:lb,SIZE_C:Ow,SIZE_OP:ww}=$n(),{lua_assert:op}=ct(),{luaS_bless:Cw}=Xt(),{luaZ_read:Ur,ZIO:Iw}=Ho(),Vw=[25,147,13,10,26,10],ap=class e{constructor(t,n,s){this.intSize=4,this.size_tSize=4,this.instructionSize=4,this.integerSize=8,this.numberSize=8,op(n instanceof Iw,"BytecodeParser only operates on a ZIO"),op(_w(s)),s[0]===64||s[0]===61?this.name=s.subarray(1):s[0]==eb[0]?this.name=sp("binary string",!0):this.name=s,this.L=t,this.Z=n,this.arraybuffer=new ArrayBuffer(Math.max(this.intSize,this.size_tSize,this.instructionSize,this.integerSize,this.numberSize)),this.dv=new DataView(this.arraybuffer),this.u8=new Uint8Array(this.arraybuffer)}read(t){let n=new Uint8Array(t);return Ur(this.Z,n,0,t)!==0&&this.error("truncated"),n}LoadByte(){return Ur(this.Z,this.u8,0,1)!==0&&this.error("truncated"),this.u8[0]}LoadInt(){return Ur(this.Z,this.u8,0,this.intSize)!==0&&this.error("truncated"),this.dv.getInt32(0,!0)}LoadNumber(){return Ur(this.Z,this.u8,0,this.numberSize)!==0&&this.error("truncated"),this.dv.getFloat64(0,!0)}LoadInteger(){return Ur(this.Z,this.u8,0,this.integerSize)!==0&&this.error("truncated"),xw.fromBytesLE(this.u8)}LoadSize_t(){return this.LoadInteger()}LoadString(){let t=this.LoadByte();return t===255&&(t=this.LoadSize_t()),t===0?null:Cw(this.L,this.read(t-1))}static MASK1(t,n){return~(-1<<t)<<n}LoadCode(t){let n=this.LoadInt(),s=e;for(let r=0;r<n;r++){Ur(this.Z,this.u8,0,this.instructionSize)!==0&&this.error("truncated");let o=this.dv.getUint32(0,!0);t.code[r]={code:o,opcode:o>>Tw&s.MASK1(ww,0),A:o>>Sw&s.MASK1(Rw,0),B:o>>Ew&s.MASK1(Nw,0),C:o>>vw&s.MASK1(Ow,0),Bx:o>>ab&s.MASK1(lb,0),Ax:o>>kw&s.MASK1(yw,0),sBx:(o>>ab&s.MASK1(lb,0))-Aw}}}LoadConstants(t){let n=this.LoadInt();for(let s=0;s<n;s++){let r=this.LoadByte();switch(r){case sb:t.k.push(new Pr.TValue(sb,null));break;case tb:t.k.push(new Pr.TValue(tb,this.LoadByte()!==0));break;case rb:t.k.push(new Pr.TValue(rb,this.LoadNumber()));break;case ob:t.k.push(new Pr.TValue(ob,this.LoadInteger()));break;case gw:case nb:t.k.push(new Pr.TValue(nb,this.LoadString()));break;default:this.error(`unrecognized constant '${r}'`)}}}LoadProtos(t){let n=this.LoadInt();for(let s=0;s<n;s++)t.p[s]=new rp.Proto(this.L),this.LoadFunction(t.p[s],t.source)}LoadUpvalues(t){let n=this.LoadInt();for(let s=0;s<n;s++)t.upvalues[s]={name:null,instack:this.LoadByte(),idx:this.LoadByte()}}LoadDebug(t){let n=this.LoadInt();for(let s=0;s<n;s++)t.lineinfo[s]=this.LoadInt();n=this.LoadInt();for(let s=0;s<n;s++)t.locvars[s]={varname:this.LoadString(),startpc:this.LoadInt(),endpc:this.LoadInt()};n=this.LoadInt();for(let s=0;s<n;s++)t.upvalues[s].name=this.LoadString()}LoadFunction(t,n){t.source=this.LoadString(),t.source===null&&(t.source=n),t.linedefined=this.LoadInt(),t.lastlinedefined=this.LoadInt(),t.numparams=this.LoadByte(),t.is_vararg=this.LoadByte()!==0,t.maxstacksize=this.LoadByte(),this.LoadCode(t),this.LoadConstants(t),this.LoadUpvalues(t),this.LoadProtos(t),this.LoadDebug(t)}checkliteral(t,n){let s=this.read(t.length);bw(s,t)||this.error(n)}checkHeader(){this.checkliteral(eb.subarray(1),"not a"),this.LoadByte()!==83&&this.error("version mismatch in"),this.LoadByte()!==0&&this.error("format mismatch in"),this.checkliteral(Vw,"corrupted"),this.intSize=this.LoadByte(),this.size_tSize=this.LoadByte(),this.instructionSize=this.LoadByte(),this.integerSize=this.LoadByte(),this.numberSize=this.LoadByte(),this.checksize(this.intSize,4,"int"),this.checksize(this.size_tSize,4,"size_t"),this.checksize(this.instructionSize,4,"instruction"),this.checksize(this.integerSize,8,"integer"),this.checksize(this.numberSize,8,"number"),this.LoadInteger()!==22136&&this.error("endianness mismatch in"),this.LoadNumber()!==370.5&&this.error("float format mismatch in")}error(t){Pr.luaO_pushfstring(this.L,sp("%s: %s precompiled chunk"),this.name,sp(t)),ib.luaD_throw(this.L,mw)}checksize(t,n,s){t!==n&&this.error(`${s} size mismatch in`)}},Pw=function(e,t,n){let s=new ap(e,t,n);s.checkHeader();let r=rp.luaF_newLclosure(e,s.LoadByte());return ib.luaD_inctop(e),e.stack[e.top-1].setclLvalue(r),r.p=new rp.Proto(e),s.LoadFunction(r.p,null),op(r.nupvalues===r.p.upvalues.length),r};cb.exports.luaU_undump=Pw});var It=K((gH,Ne)=>{"use strict";var{LUA_HOOKCALL:_b,LUA_HOOKRET:Uw,LUA_HOOKTAILCALL:Kw,LUA_MASKCALL:pb,LUA_MASKLINE:Fw,LUA_MASKRET:fb,LUA_MINSTACK:Kl,LUA_MULTRET:pp,LUA_SIGNATURE:Mw,constant_types:{LUA_TCCL:db,LUA_TLCF:Bw,LUA_TLCL:Dw,LUA_TNIL:Fr},thread_status:{LUA_ERRMEM:Gw,LUA_ERRERR:fp,LUA_ERRRUN:dp,LUA_ERRSYNTAX:qw,LUA_OK:Rn,LUA_YIELD:yn},lua_Debug:Hw,luastring_indexOf:Lw,to_luastring:os}=Ae(),qs=mr(),oa=gn(),hp=Ps(),{api_check:bb,lua_assert:vt,LUAI_MAXCCALLS:ra}=ct(),pe=$e(),jw=$n(),xb=Ou(),fe=hn(),{luaS_newliteral:ip}=Xt(),hb=Vs(),{LUAI_MAXSTACK:en}=lt(),Xw=ub(),aa=Is(),{MBuffer:zw}=Ho(),gp=function(e,t){if(e.top<t)for(;e.top<t;)e.stack[e.top++]=new pe.TValue(Fr,null);else for(;e.top>t;)delete e.stack[--e.top]},Bl=function(e,t,n){let s=e.top;for(;e.top<n+1;)e.stack[e.top++]=new pe.TValue(Fr,null);switch(t){case Gw:{pe.setsvalue2s(e,n,ip(e,"not enough memory"));break}case fp:{pe.setsvalue2s(e,n,ip(e,"error in error handling"));break}default:pe.setobjs2s(e,n,s-1)}for(;e.top>n+1;)delete e.stack[--e.top]},Ab=en+200,Fl=function(e,t){vt(t<=en||t==Ab),vt(e.stack_last==e.stack.length-fe.EXTRA_STACK),e.stack.length=t,e.stack_last=t-fe.EXTRA_STACK},Sb=function(e,t){let n=e.stack.length;if(n>en)Mr(e,fp);else{let s=e.top+t+fe.EXTRA_STACK,r=2*n;r>en&&(r=en),r<s&&(r=s),r>en?(Fl(e,Ab),oa.luaG_runerror(e,os("stack overflow",!0))):Fl(e,r)}},Kr=function(e,t){e.stack_last-e.top<=t&&Sb(e,t)},Ww=function(e){let t=e.top;for(let n=e.ci;n!==null;n=n.previous)t<n.top&&(t=n.top);return vt(t<=e.stack_last),t+1},kb=function(e){let t=Ww(e),n=t+Math.floor(t/8)+2*fe.EXTRA_STACK;n>en&&(n=en),e.stack.length>en&&fe.luaE_freeCI(e),t<=en-fe.EXTRA_STACK&&n<e.stack.length&&Fl(e,n)},Zw=function(e){Kr(e,1),e.stack[e.top++]=new pe.TValue(Fr,null)},Dl=function(e,t,n){let s=e.stack[t];switch(s.type){case db:case Bw:{let r=s.type===db?s.value.f:s.value;Kr(e,Kl);let o=fe.luaE_extendCI(e);o.funcOff=t,o.nresults=n,o.func=s,o.top=e.top+Kl,vt(o.top<=e.stack_last),o.callstatus=0,e.hookmask&pb&&ql(e,_b,-1);let a=r(e);if(typeof a!="number"||a<0||(a|0)!==a)throw Error("invalid return value from JS function (expected integer)");return qs.api_checknelems(e,a),Gl(e,o,e.top-a,a),!0}case Dw:{let r,o=s.value.p,a=e.top-t-1,l=o.maxstacksize;if(Kr(e,l),o.is_vararg)r=$w(e,o,a);else{for(;a<o.numparams;a++)e.stack[e.top++]=new pe.TValue(Fr,null);r=t+1}let i=fe.luaE_extendCI(e);return i.funcOff=t,i.nresults=n,i.func=s,i.l_base=r,i.top=r+l,gp(e,i.top),i.l_code=o.code,i.l_savedpc=0,i.callstatus=fe.CIST_LUA,e.hookmask&pb&&Yw(e,i),!1}default:return Kr(e,1),Qw(e,t,s),Dl(e,t,n)}},Gl=function(e,t,n,s){let r=t.nresults;e.hookmask&(fb|Fw)&&(e.hookmask&fb&&ql(e,Uw,-1),e.oldpc=t.previous.l_savedpc);let o=t.funcOff;return e.ci=t.previous,e.ci.next=null,Jw(e,n,o,s,r)},Jw=function(e,t,n,s,r){switch(r){case 0:break;case 1:{s===0?e.stack[n].setnilvalue():pe.setobjs2s(e,n,t);break}case pp:{for(let a=0;a<s;a++)pe.setobjs2s(e,n+a,t+a);for(let a=e.top;a>=n+s;a--)delete e.stack[a];return e.top=n+s,!1}default:{let a;if(r<=s)for(a=0;a<r;a++)pe.setobjs2s(e,n+a,t+a);else{for(a=0;a<s;a++)pe.setobjs2s(e,n+a,t+a);for(;a<r;a++)n+a>=e.top?e.stack[n+a]=new pe.TValue(Fr,null):e.stack[n+a].setnilvalue()}break}}let o=n+r;for(let a=e.top;a>=o;a--)delete e.stack[a];return e.top=o,!0},ql=function(e,t,n){let s=e.hook;if(s&&e.allowhook){let r=e.ci,o=e.top,a=r.top,l=new Hw;l.event=t,l.currentline=n,l.i_ci=r,Kr(e,Kl),r.top=e.top+Kl,vt(r.top<=e.stack_last),e.allowhook=0,r.callstatus|=fe.CIST_HOOKED,s(e,l),vt(!e.allowhook),e.allowhook=1,r.top=a,gp(e,o),r.callstatus&=~fe.CIST_HOOKED}},Yw=function(e,t){let n=_b;t.l_savedpc++,t.previous.callstatus&fe.CIST_LUA&&t.previous.l_code[t.previous.l_savedpc-1].opcode==jw.OpCodesI.OP_TAILCALL&&(t.callstatus|=fe.CIST_TAIL,n=Kw),ql(e,n,-1),t.l_savedpc--},$w=function(e,t,n){let s=t.numparams,r=e.top-n,o=e.top,a;for(a=0;a<s&&a<n;a++)pe.pushobj2s(e,e.stack[r+a]),e.stack[r+a].setnilvalue();for(;a<s;a++)e.stack[e.top++]=new pe.TValue(Fr,null);return o},Qw=function(e,t,n){let s=hb.luaT_gettmbyobj(e,n,hb.TMS.TM_CALL);s.ttisfunction(s)||oa.luaG_typeerror(e,n,os("call",!0)),pe.pushobj2s(e,e.stack[e.top-1]);for(let r=e.top-2;r>t;r--)pe.setobjs2s(e,r,r-1);pe.setobj2s(e,t,s)},eC=function(e){e.nCcalls===ra?oa.luaG_runerror(e,os("C stack overflow",!0)):e.nCcalls>=ra+(ra>>3)&&Mr(e,fp)},Eb=function(e,t,n){++e.nCcalls>=ra&&eC(e),Dl(e,t,n)||aa.luaV_execute(e),e.nCcalls--},Mr=function(e,t){if(e.errorJmp)throw e.errorJmp.status=t,e.errorJmp;{let n=e.l_G;if(e.status=t,n.mainthread.errorJmp)n.mainthread.stack[n.mainthread.top++]=e.stack[e.top-1],Mr(n.mainthread,t);else{let s=n.panic;throw s&&(Bl(e,t,e.top),e.ci.top<e.top&&(e.ci.top=e.top),s(e)),new Error(`Aborted ${t}`)}}},Ml=function(e,t,n){let s=e.nCcalls,r={status:Rn,previous:e.errorJmp};e.errorJmp=r;try{t(e,n)}catch(o){if(r.status===Rn){let a=e.l_G.atnativeerror;if(a)try{if(r.status=Rn,qs.lua_pushcfunction(e,a),qs.lua_pushlightuserdata(e,o),cp(e,e.top-2,1),e.errfunc!==0){let l=e.errfunc;pe.pushobj2s(e,e.stack[e.top-1]),pe.setobjs2s(e,e.top-2,l),cp(e,e.top-2,1)}r.status=dp}catch{r.status===Rn&&(r.status=-1)}else r.status=-1}}return e.errorJmp=r.previous,e.nCcalls=s,r.status},gb=function(e,t){let n=e.ci;vt(n.c_k!==null&&e.nny===0),vt(n.callstatus&fe.CIST_YPCALL||t===yn),n.callstatus&fe.CIST_YPCALL&&(n.callstatus&=~fe.CIST_YPCALL,e.errfunc=n.c_old_errfunc),n.nresults===pp&&e.ci.top<e.top&&(e.ci.top=e.top);let s=n.c_k,r=s(e,t,n.c_ctx);qs.api_checknelems(e,r),Gl(e,n,e.top-r,r)},vb=function(e,t){for(t!==null&&gb(e,t);e.ci!==e.base_ci;)e.ci.callstatus&fe.CIST_LUA?(aa.luaV_finishOp(e),aa.luaV_execute(e)):gb(e,yn)},tC=function(e){for(let t=e.ci;t!==null;t=t.previous)if(t.callstatus&fe.CIST_YPCALL)return t;return null},nC=function(e,t){let n=tC(e);if(n===null)return 0;let s=n.extra;return hp.luaF_close(e,s),Bl(e,t,s),e.ci=n,e.allowhook=n.callstatus&fe.CIST_OAH,e.nny=0,kb(e),e.errfunc=n.c_old_errfunc,1},lp=function(e,t,n){let s=ip(e,t);if(n===0)pe.pushsvalue2s(e,s),bb(e,e.top<=e.ci.top,"stack overflow");else{for(let r=1;r<n;r++)delete e.stack[--e.top];pe.setsvalue2s(e,e.top-1,s)}return dp},sC=function(e,t){let n=e.top-t,s=e.ci;e.status===Rn?Dl(e,n-1,pp)||aa.luaV_execute(e):(vt(e.status===yn),e.status=Rn,s.funcOff=s.extra,s.func=e.stack[s.funcOff],s.callstatus&fe.CIST_LUA?aa.luaV_execute(e):(s.c_k!==null&&(t=s.c_k(e,yn,s.c_ctx),qs.api_checknelems(e,t),n=e.top-t),Gl(e,s,n,t)),vb(e,null))},rC=function(e,t,n){let s=e.nny;if(e.status===Rn){if(e.ci!==e.base_ci)return lp(e,"cannot resume non-suspended coroutine",n)}else if(e.status!==yn)return lp(e,"cannot resume dead coroutine",n);if(e.nCcalls=t?t.nCcalls+1:1,e.nCcalls>=ra)return lp(e,"C stack overflow",n);e.nny=0,qs.api_checknelems(e,e.status===Rn?n+1:n);let r=Ml(e,sC,n);if(r===-1)r=dp;else{for(;r>yn&&nC(e,r);)r=Ml(e,vb,r);r>yn?(e.status=r,Bl(e,r,e.top),e.ci.top=e.top):vt(r===e.status)}return e.nny=s,e.nCcalls--,vt(e.nCcalls===(t?t.nCcalls:0)),r},oC=function(e){return e.nny===0},Tb=function(e,t,n,s){let r=e.ci;return qs.api_checknelems(e,t),e.nny>0&&(e!==e.l_G.mainthread?oa.luaG_runerror(e,os("attempt to yield across a JS-call boundary",!0)):oa.luaG_runerror(e,os("attempt to yield from outside a coroutine",!0))),e.status=yn,r.extra=r.funcOff,r.callstatus&fe.CIST_LUA?bb(e,s===null,"hooks cannot continue after yielding"):(r.c_k=s,s!==null&&(r.c_ctx=n),r.funcOff=e.top-t-1,r.func=e.stack[r.funcOff],Mr(e,yn)),vt(r.callstatus&fe.CIST_HOOKED),0},aC=function(e,t){Tb(e,t,0,null)},Rb=function(e,t,n,s,r){let o=e.ci,a=e.allowhook,l=e.nny,i=e.errfunc;e.errfunc=r;let u=Ml(e,t,n);return u!==Rn&&(hp.luaF_close(e,s),Bl(e,u,s),e.ci=o,e.allowhook=a,e.nny=l,kb(e)),e.errfunc=i,u},cp=function(e,t,n){e.nny++,Eb(e,t,n),e.nny--},up=class{constructor(t,n,s){this.z=t,this.buff=new zw,this.dyd=new xb.Dyndata,this.mode=s,this.name=n}},mb=function(e,t,n){t&&Lw(t,n[0])===-1&&(pe.luaO_pushfstring(e,os("attempt to load a %s chunk (mode is '%s')"),n,t),Mr(e,qw))},lC=function(e,t){let n,s=t.z.zgetc();s===Mw[0]?(mb(e,t.mode,os("binary",!0)),n=Xw.luaU_undump(e,t.z,t.name)):(mb(e,t.mode,os("text",!0)),n=xb.luaY_parser(e,t.z,t.buff,t.dyd,t.name,s)),vt(n.nupvalues===n.p.upvalues.length),hp.luaF_initupvals(e,n)},iC=function(e,t,n,s){let r=new up(t,n,s);e.nny++;let o=Rb(e,lC,r,e.top,e.errfunc);return e.nny--,o};Ne.exports.adjust_top=gp;Ne.exports.luaD_call=Eb;Ne.exports.luaD_callnoyield=cp;Ne.exports.luaD_checkstack=Kr;Ne.exports.luaD_growstack=Sb;Ne.exports.luaD_hook=ql;Ne.exports.luaD_inctop=Zw;Ne.exports.luaD_pcall=Rb;Ne.exports.luaD_poscall=Gl;Ne.exports.luaD_precall=Dl;Ne.exports.luaD_protectedparser=iC;Ne.exports.luaD_rawrunprotected=Ml;Ne.exports.luaD_reallocstack=Fl;Ne.exports.luaD_throw=Mr;Ne.exports.lua_isyieldable=oC;Ne.exports.lua_resume=rC;Ne.exports.lua_yield=aC;Ne.exports.lua_yieldk=Tb});var gn=K((mH,Ue)=>{"use strict";var{LUA_HOOKCOUNT:cC,LUA_HOOKLINE:uC,LUA_MASKCOUNT:pC,LUA_MASKLINE:yb,constant_types:{LUA_TBOOLEAN:fC,LUA_TNIL:dC,LUA_TTABLE:hC},thread_status:{LUA_ERRRUN:gC,LUA_YIELD:mp},from_userstring:mC,luastring_eq:xp,luastring_indexOf:Nb,to_luastring:z}=Ae(),{api_check:_p,lua_assert:Ap}=ct(),{LUA_IDSIZE:Ib}=lt(),Ob=mr(),la=It(),Ll=Ps(),_C=xl(),We=$e(),jl=$n(),dt=hn(),wb=Ct(),ae=Vs(),Sp=Is(),M=jl.OpCodesI,Xl=e=>(Ap(e.callstatus&dt.CIST_LUA),e.l_savedpc-1),Vb=e=>{let t=e.func.value.p.lineinfo;return t.length!==0?t[Xl(e)]:-1},Br=e=>{if(e.status===mp){let t=e.ci,n=t.funcOff;t.func=e.stack[t.extra],t.funcOff=t.extra,t.extra=n}},bC=(e,t,n,s)=>{(t===null||n===0)&&(n=0,t=null),e.ci.callstatus&dt.CIST_LUA&&(e.oldpc=e.ci.l_savedpc),e.hook=t,e.basehookcount=s,e.hookcount=e.basehookcount,e.hookmask=n},xC=e=>e.hook,AC=e=>e.hookmask,SC=e=>e.basehookcount,kC=(e,t,n)=>{if(t<0)return 0;let s;for(s=e.ci;t>0&&s!==e.base_ci;s=s.previous)t--;return t===0&&s!==e.base_ci?(n.i_ci=s,1):0},bp=(e,t)=>{Ap(t<e.upvalues.length);let n=e.upvalues[t].name;return n===null?z("?",!0):n.getstr()},EC=(e,t)=>{let n=e.func.value.p.numparams;return t>=e.l_base-e.funcOff-n?null:{pos:e.funcOff+n+t,name:z("(*vararg)",!0)}},Pb=(e,t,n)=>{let s,r=null;if(t.callstatus&dt.CIST_LUA){if(n<0)return EC(t,-n);s=t.l_base,r=Ll.luaF_getlocalname(t.func.value.p,n,Xl(t))}else s=t.funcOff+1;if(r===null)if((t===e.ci?e.top:t.next.funcOff)-s>=n&&n>0)r=z("(*temporary)",!0);else return null;return{pos:s+(n-1),name:r}},vC=(e,t,n)=>{let s;if(Br(e),t===null)e.stack[e.top-1].ttisLclosure()?s=Ll.luaF_getlocalname(e.stack[e.top-1].value.p,n,0):s=null;else{let r=Pb(e,t.i_ci,n);r?(s=r.name,We.pushobj2s(e,e.stack[r.pos]),_p(e,e.top<=e.ci.top,"stack overflow")):s=null}return Br(e),s},TC=(e,t,n)=>{let s;Br(e);let r=Pb(e,t.i_ci,n);return r?(s=r.name,We.setobjs2s(e,r.pos,e.top-1),delete e.stack[--e.top]):s=null,Br(e),s},RC=(e,t)=>{if(t===null||t instanceof We.CClosure)e.source=z("=[C]",!0),e.linedefined=-1,e.lastlinedefined=-1,e.what=z("C",!0);else{let n=t.p;e.source=n.source?n.source.getstr():z("=?",!0),e.linedefined=n.linedefined,e.lastlinedefined=n.lastlinedefined,e.what=e.linedefined===0?z("main",!0):z("Lua",!0)}e.short_src=We.luaO_chunkid(e.source,Ib)},yC=(e,t)=>{if(t===null||t instanceof We.CClosure)e.stack[e.top]=new We.TValue(dC,null),Ob.api_incr_top(e);else{let n=t.p.lineinfo,s=wb.luaH_new(e);e.stack[e.top]=new We.TValue(hC,s),Ob.api_incr_top(e);let r=new We.TValue(fC,!0);for(let o=0;o<n.length;o++)wb.luaH_setint(s,n[o],r)}},NC=(e,t)=>t===null?null:t.callstatus&dt.CIST_FIN?{name:z("__gc",!0),funcname:z("metamethod",!0)}:!(t.callstatus&dt.CIST_TAIL)&&t.previous.callstatus&dt.CIST_LUA?IC(e,t.previous):null,OC=(e,t,n,s,r)=>{let o=1;for(;t.length>0;t=t.subarray(1))switch(t[0]){case 83:RC(n,s);break;case 108:n.currentline=r&&r.callstatus&dt.CIST_LUA?Vb(r):-1;break;case 117:n.nups=s===null?0:s.nupvalues,s===null||s instanceof We.CClosure?(n.isvararg=!0,n.nparams=0):(n.isvararg=s.p.is_vararg,n.nparams=s.p.numparams);break;case 116:n.istailcall=r?r.callstatus&dt.CIST_TAIL:0;break;case 110:{let a=NC(e,r);a===null?(n.namewhat=z("",!0),n.name=null):(n.namewhat=a.funcname,n.name=a.name);break}case 76:case 102:break;default:o=0}return o},wC=(e,t,n)=>{t=mC(t);let s,r,o,a;return Br(e),t[0]===62?(o=null,a=e.stack[e.top-1],_p(e,a.ttisfunction(),"function expected"),t=t.subarray(1),e.top--):(o=n.i_ci,a=o.func,Ap(o.func.ttisfunction())),r=a.ttisclosure()?a.value:null,s=OC(e,t,n,r,o),Nb(t,102)>=0&&(We.pushobj2s(e,a),_p(e,e.top<=e.ci.top,"stack overflow")),Br(e),Nb(t,76)>=0&&yC(e,r),s},Cb=(e,t,n)=>{let s={name:null,funcname:null};if(jl.ISK(n)){let r=e.k[jl.INDEXK(n)];if(r.ttisstring())return s.name=r.svalue(),s}else{let r=zl(e,t,n);if(r&&r.funcname[0]===99)return r}return s.name=z("?",!0),s},Hl=(e,t)=>e<t?-1:e,CC=(e,t,n)=>{let s=-1,r=0;for(let o=0;o<t;o++){let a=e.code[o],l=a.A;switch(a.opcode){case M.OP_LOADNIL:{let i=a.B;l<=n&&n<=l+i&&(s=Hl(o,r));break}case M.OP_TFORCALL:n>=l+2&&(s=Hl(o,r));break;case M.OP_CALL:case M.OP_TAILCALL:n>=l&&(s=Hl(o,r));break;case M.OP_JMP:{let i=a.sBx,u=o+1+i;o<u&&u<=t&&u>r&&(r=u);break}default:jl.testAMode(a.opcode)&&n===l&&(s=Hl(o,r));break}}return s},zl=(e,t,n)=>{let s={name:Ll.luaF_getlocalname(e,n+1,t),funcname:null};if(s.name)return s.funcname=z("local",!0),s;let r=CC(e,t,n);if(r!==-1){let o=e.code[r];switch(o.opcode){case M.OP_MOVE:{let a=o.B;if(a<o.A)return zl(e,r,a);break}case M.OP_GETTABUP:case M.OP_GETTABLE:{let a=o.C,l=o.B,i=o.opcode===M.OP_GETTABLE?Ll.luaF_getlocalname(e,l+1,r):bp(e,l);return s.name=Cb(e,r,a).name,s.funcname=i&&xp(i,_C.LUA_ENV)?z("global",!0):z("field",!0),s}case M.OP_GETUPVAL:return s.name=bp(e,o.B),s.funcname=z("upvalue",!0),s;case M.OP_LOADK:case M.OP_LOADKX:{let a=o.opcode===M.OP_LOADK?o.Bx:e.code[r+1].Ax;if(e.k[a].ttisstring())return s.name=e.k[a].svalue(),s.funcname=z("constant",!0),s;break}case M.OP_SELF:return s.name=Cb(e,r,o.C).name,s.funcname=z("method",!0),s;default:break}}return null},IC=(e,t)=>{let n={name:null,funcname:null},s=0,r=t.func.value.p,o=Xl(t),a=r.code[o];if(t.callstatus&dt.CIST_HOOKED)return n.name=z("?",!0),n.funcname=z("hook",!0),n;switch(a.opcode){case M.OP_CALL:case M.OP_TAILCALL:return zl(r,o,a.A);case M.OP_TFORCALL:return n.name=z("for iterator",!0),n.funcname=z("for iterator",!0),n;case M.OP_SELF:case M.OP_GETTABUP:case M.OP_GETTABLE:s=ae.TMS.TM_INDEX;break;case M.OP_SETTABUP:case M.OP_SETTABLE:s=ae.TMS.TM_NEWINDEX;break;case M.OP_ADD:s=ae.TMS.TM_ADD;break;case M.OP_SUB:s=ae.TMS.TM_SUB;break;case M.OP_MUL:s=ae.TMS.TM_MUL;break;case M.OP_MOD:s=ae.TMS.TM_MOD;break;case M.OP_POW:s=ae.TMS.TM_POW;break;case M.OP_DIV:s=ae.TMS.TM_DIV;break;case M.OP_IDIV:s=ae.TMS.TM_IDIV;break;case M.OP_BAND:s=ae.TMS.TM_BAND;break;case M.OP_BOR:s=ae.TMS.TM_BOR;break;case M.OP_BXOR:s=ae.TMS.TM_BXOR;break;case M.OP_SHL:s=ae.TMS.TM_SHL;break;case M.OP_SHR:s=ae.TMS.TM_SHR;break;case M.OP_UNM:s=ae.TMS.TM_UNM;break;case M.OP_BNOT:s=ae.TMS.TM_BNOT;break;case M.OP_LEN:s=ae.TMS.TM_LEN;break;case M.OP_CONCAT:s=ae.TMS.TM_CONCAT;break;case M.OP_EQ:s=ae.TMS.TM_EQ;break;case M.OP_LT:s=ae.TMS.TM_LT;break;case M.OP_LE:s=ae.TMS.TM_LE;break;default:return null}return n.name=e.l_G.tmname[s].getstr(),n.funcname=z("metamethod",!0),n},VC=(e,t,n)=>{for(let s=t.l_base;s<t.top;s++)if(e.stack[s]===n)return s;return!1},PC=(e,t,n)=>{let s=t.func.value;for(let r=0;r<s.nupvalues;r++)if(s.upvals[r]===n)return{name:bp(s.p,r),funcname:z("upvalue",!0)};return null},Ub=(e,t)=>{let n=e.ci,s=null;if(n.callstatus&dt.CIST_LUA){s=PC(e,n,t);let r=VC(e,n,t);!s&&r&&(s=zl(n.func.value.p,Xl(n),r-n.l_base))}return s?We.luaO_pushfstring(e,z(" (%s '%s')",!0),s.funcname,s.name):z("",!0)},kp=(e,t,n)=>{let s=ae.luaT_objtypename(e,t),r=Ub(e,t);xp(n,z("call",!0))&&t.ttisnil()?Dr(e,z("attempt to call a nil value%s (no value)",!0),r):Dr(e,z("attempt to %s a %s value%s",!0),n,s,r)},UC=(e,t,n)=>{(t.ttisstring()||Sp.cvt2str(t))&&(t=n),kp(e,t,z("concatenate",!0))},KC=(e,t,n,s)=>{Sp.tonumber(t)===!1&&(n=t),kp(e,n,s)},FC=(e,t,n)=>{let s=ae.luaT_objtypename(e,t),r=ae.luaT_objtypename(e,n);xp(s,r)?Dr(e,z("attempt to compare two %s values",!0),s):Dr(e,z("attempt to compare %s with %s",!0),s,r)},Kb=(e,t,n,s)=>{let r;return n?r=We.luaO_chunkid(n.getstr(),Ib):r=z("?",!0),We.luaO_pushfstring(e,z("%s:%d: %s",!0),r,s,t)},Dr=(e,t,...n)=>{let s=e.ci,r=We.luaO_pushvfstring(e,t,n);s.callstatus&dt.CIST_LUA&&Kb(e,r,s.func.value.p.source,Vb(s)),Fb(e)},Fb=e=>{if(e.errfunc!==0){let t=e.errfunc;We.pushobj2s(e,e.stack[e.top-1]),We.setobjs2s(e,e.top-2,t),la.luaD_callnoyield(e,e.top-2,1)}la.luaD_throw(e,gC)},MC=(e,t,n)=>{Sp.tointeger(t)===!1&&(n=t),Dr(e,z("number%s has no integer representation",!0),Ub(e,n))},BC=e=>{let t=e.ci,n=e.hookmask,s=--e.hookcount===0&&n&pC;if(s)e.hookcount=e.basehookcount;else if(!(n&yb))return;if(t.callstatus&dt.CIST_HOOKYIELD){t.callstatus&=~dt.CIST_HOOKYIELD;return}if(s&&la.luaD_hook(e,cC,-1),n&yb){let r=t.func.value.p,o=t.l_savedpc-1,a=r.lineinfo.length!==0?r.lineinfo[o]:-1;(o===0||t.l_savedpc<=e.oldpc||a!==(r.lineinfo.length!==0?r.lineinfo[e.oldpc-1]:-1))&&la.luaD_hook(e,uC,a)}e.oldpc=t.l_savedpc,e.status===mp&&(s&&(e.hookcount=1),t.l_savedpc--,t.callstatus|=dt.CIST_HOOKYIELD,t.funcOff=e.top-1,t.func=e.stack[t.funcOff],la.luaD_throw(e,mp))};Ue.exports.luaG_addinfo=Kb;Ue.exports.luaG_concaterror=UC;Ue.exports.luaG_errormsg=Fb;Ue.exports.luaG_opinterror=KC;Ue.exports.luaG_ordererror=FC;Ue.exports.luaG_runerror=Dr;Ue.exports.luaG_tointerror=MC;Ue.exports.luaG_traceexec=BC;Ue.exports.luaG_typeerror=kp;Ue.exports.lua_gethook=xC;Ue.exports.lua_gethookcount=SC;Ue.exports.lua_gethookmask=AC;Ue.exports.lua_getinfo=wC;Ue.exports.lua_getlocal=vC;Ue.exports.lua_getstack=kC;Ue.exports.lua_sethook=bC;Ue.exports.lua_setlocal=TC});var Lb=K((_H,Hb)=>{"use strict";var{LUA_SIGNATURE:Mb,LUA_VERSION_MAJOR:DC,LUA_VERSION_MINOR:GC,constant_types:{LUA_TBOOLEAN:qC,LUA_TLNGSTR:HC,LUA_TNIL:LC,LUA_TNUMFLT:jC,LUA_TNUMINT:XC,LUA_TSHRSTR:zC},luastring_of:Db}=Ae(),WC=at(),Bb=Db(25,147,13,10,26,10),ZC=22136,JC=370.5,YC=Number(DC)*16+Number(GC),$C=0,Ep=class{constructor(){this.L=null,this.writer=null,this.data=null,this.strip=NaN,this.status=NaN}},Hs=function(e,t,n){n.status===0&&t>0&&(n.status=n.writer(n.L,e,t,n.data))},Ke=function(e,t){Hs(Db(e),1,t)},Tt=function(e,t){let n=new ArrayBuffer(4);new DataView(n).setInt32(0,e,!0);let r=new Uint8Array(n);Hs(r,4,t)},vp=function(e,t){Hs(WC.toBytesLE(e),8,t)},Gb=function(e,t){let n=new ArrayBuffer(8);new DataView(n).setFloat64(0,e,!0);let r=new Uint8Array(n);Hs(r,8,t)},ia=function(e,t){if(e===null)Ke(0,t);else{let n=e.tsslen()+1,s=e.getstr();n<255?Ke(n,t):(Ke(255,t),vp(n,t)),Hs(s,n-1,t)}},QC=function(e,t){let n=e.code.map(s=>s.code);Tt(n.length,t);for(let s=0;s<n.length;s++)Tt(n[s],t)},eI=function(e,t){let n=e.k.length;Tt(n,t);for(let s=0;s<n;s++){let r=e.k[s];switch(Ke(r.ttype(),t),r.ttype()){case LC:break;case qC:Ke(r.value?1:0,t);break;case jC:Gb(r.value,t);break;case XC:vp(r.value,t);break;case zC:case HC:ia(r.tsvalue(),t);break}}},tI=function(e,t){let n=e.p.length;Tt(n,t);for(let s=0;s<n;s++)qb(e.p[s],e.source,t)},nI=function(e,t){let n=e.upvalues.length;Tt(n,t);for(let s=0;s<n;s++)Ke(e.upvalues[s].instack?1:0,t),Ke(e.upvalues[s].idx,t)},sI=function(e,t){let n=t.strip?0:e.lineinfo.length;Tt(n,t);for(let s=0;s<n;s++)Tt(e.lineinfo[s],t);n=t.strip?0:e.locvars.length,Tt(n,t);for(let s=0;s<n;s++)ia(e.locvars[s].varname,t),Tt(e.locvars[s].startpc,t),Tt(e.locvars[s].endpc,t);n=t.strip?0:e.upvalues.length,Tt(n,t);for(let s=0;s<n;s++)ia(e.upvalues[s].name,t)},qb=function(e,t,n){n.strip||e.source===t?ia(null,n):ia(e.source,n),Tt(e.linedefined,n),Tt(e.lastlinedefined,n),Ke(e.numparams,n),Ke(e.is_vararg?1:0,n),Ke(e.maxstacksize,n),QC(e,n),eI(e,n),nI(e,n),tI(e,n),sI(e,n)},rI=function(e){Hs(Mb,Mb.length,e),Ke(YC,e),Ke($C,e),Hs(Bb,Bb.length,e),Ke(4,e),Ke(4,e),Ke(4,e),Ke(8,e),Ke(8,e),vp(ZC,e),Gb(JC,e)},oI=function(e,t,n,s,r){let o=new Ep;return o.L=e,o.writer=n,o.data=s,o.strip=r,o.status=0,rI(o),Ke(t.upvalues.length,o),qb(t,null,o),o.status};Hb.exports.luaU_dump=oI});var mr=K((bH,d)=>{"use strict";var{LUA_MULTRET:yp,LUA_OPBNOT:aI,LUA_OPEQ:lI,LUA_OPLE:iI,LUA_OPLT:cI,LUA_OPUNM:uI,LUA_REGISTRYINDEX:js,LUA_RIDX_GLOBALS:Zl,LUA_VERSION_NUM:pI,constant_types:{LUA_NUMTAGS:fI,LUA_TBOOLEAN:jb,LUA_TCCL:Np,LUA_TFUNCTION:dI,LUA_TLCF:Xb,LUA_TLCL:Op,LUA_TLIGHTUSERDATA:Hr,LUA_TLNGSTR:hI,LUA_TNIL:Jl,LUA_TNONE:wp,LUA_TNUMFLT:gI,LUA_TNUMINT:Cp,LUA_TSHRSTR:mI,LUA_TTABLE:Gr,LUA_TTHREAD:Ip,LUA_TUSERDATA:Lr},thread_status:{LUA_OK:Wl},from_userstring:as,to_luastring:ca}=Ae(),{api_check:R}=ct(),_I=gn(),ls=It(),{luaU_dump:bI}=Lb(),zb=Ps(),J=$e(),Ls=hn(),{luaS_bless:Wb,luaS_new:Yl,luaS_newliteral:xI}=Xt(),AI=Vs(),{LUAI_MAXSTACK:SI}=lt(),Fe=Is(),ht=Ct(),{ZIO:kI}=Ho(),Te=J.TValue,EI=J.CClosure,Me=function(e){e.top++,R(e,e.top<=e.ci.top,"stack overflow")},Oe=function(e,t){R(e,t<e.top-e.ci.funcOff,"not enough elements in the stack")},$l=function(e){if(!e)throw TypeError("invalid argument")},Nn=function(e){let{isIntRep:t}=at();$l(t(e))},qr=function(e){return e!==J.luaO_nilobject},vI=function(e){return e===null?pI:e.l_G.version},TI=function(e,t){let n=e.l_G.panic;return e.l_G.panic=t,n},RI=function(e,t){let n=e.l_G.atnativeerror;return e.l_G.atnativeerror=t,n},N=function(e,t){let n=e.ci;if(t>0){let s=n.funcOff+t;return R(e,t<=n.top-(n.funcOff+1),"unacceptable index"),s>=e.top?J.luaO_nilobject:e.stack[s]}else return t>js?(R(e,t!==0&&-t<=e.top,"invalid index"),e.stack[e.top+t]):t===js?e.l_G.l_registry:(t=js-t,R(e,t<=zb.MAXUPVAL+1,"upvalue index too large"),n.func.ttislcf()?J.luaO_nilobject:t<=n.func.value.nupvalues?n.func.value.upvalue[t-1]:J.luaO_nilobject)},Zb=function(e,t){let n=e.ci;if(t>0){let s=n.funcOff+t;return R(e,t<=n.top-(n.funcOff+1),"unacceptable index"),s>=e.top?null:s}else{if(t>js)return R(e,t!==0&&-t<=e.top,"invalid index"),e.top+t;throw Error("attempt to use pseudo-index")}},yI=function(e,t){let n,s=e.ci;return R(e,t>=0,"negative 'n'"),e.stack_last-e.top>t?n=!0:e.top+Ls.EXTRA_STACK>SI-t?n=!1:(ls.luaD_growstack(e,t),n=!0),n&&s.top<e.top+t&&(s.top=e.top+t),n},NI=function(e,t,n){if(e!==t){Oe(e,n),R(e,e.l_G===t.l_G,"moving among independent states"),R(e,t.ci.top-t.top>=n,"stack overflow"),e.top-=n;for(let s=0;s<n;s++)t.stack[t.top]=new J.TValue,J.setobj2s(t,t.top,e.stack[e.top+s]),delete e.stack[e.top+s],t.top++}},OI=function(e,t){return t>0||t<=js?t:e.top-e.ci.funcOff+t},wI=function(e){return e.top-(e.ci.funcOff+1)},CI=function(e,t){J.pushobj2s(e,N(e,t)),R(e,e.top<=e.ci.top,"stack overflow")},Jb=function(e,t){let n=e.ci.funcOff,s;t>=0?(R(e,t<=e.stack_last-(n+1),"new top too large"),s=n+1+t):(R(e,-(t+1)<=e.top-(n+1),"invalid new top"),s=e.top+t+1),ls.adjust_top(e,s)},Vp=function(e,t){Jb(e,-t-1)},Tp=function(e,t,n){for(;t<n;t++,n--){let s=e.stack[t],r=new Te(s.type,s.value);J.setobjs2s(e,t,n),J.setobj2s(e,n,r)}},Pp=function(e,t,n){let s=e.top-1,r=Zb(e,t),o=e.stack[r];R(e,qr(o)&&t>js,"index not in the stack"),R(e,(n>=0?n:-n)<=s-r+1,"invalid 'n'");let a=n>=0?s-n:r-n-1;Tp(e,r,a),Tp(e,a+1,e.top-1),Tp(e,r,e.top-1)},Yb=function(e,t,n){let s=N(e,t);N(e,n).setfrom(s)},II=function(e,t){Pp(e,t,-1),Vp(e,1)},VI=function(e,t){Pp(e,t,1)},PI=function(e,t){Yb(e,-1,t),Vp(e,1)},UI=function(e){e.stack[e.top]=new Te(Jl,null),Me(e)},KI=function(e,t){$l(typeof t=="number"),e.stack[e.top]=new Te(gI,t),Me(e)},FI=function(e,t){Nn(t),e.stack[e.top]=new Te(Cp,t),Me(e)},MI=function(e,t,n){Nn(n);let s;return n===0?(t=ca("",!0),s=Wb(e,t)):(t=as(t),R(e,t.length>=n,"invalid length to lua_pushlstring"),s=Yl(e,t.subarray(0,n))),J.pushsvalue2s(e,s),R(e,e.top<=e.ci.top,"stack overflow"),s.value},BI=function(e,t){if(t==null)e.stack[e.top]=new Te(Jl,null),e.top++;else{let n=Yl(e,as(t));J.pushsvalue2s(e,n),t=n.getstr()}return R(e,e.top<=e.ci.top,"stack overflow"),t},DI=function(e,t,n){return t=as(t),J.luaO_pushvfstring(e,t,n)},GI=function(e,t,...n){return t=as(t),J.luaO_pushvfstring(e,t,n)},qI=function(e,t){if(t==null)e.stack[e.top]=new Te(Jl,null),e.top++;else{$l(typeof t=="string");let n=xI(e,t);J.pushsvalue2s(e,n),t=n.getstr()}return R(e,e.top<=e.ci.top,"stack overflow"),t},Up=function(e,t,n){if($l(typeof t=="function"),Nn(n),n===0)e.stack[e.top]=new Te(Xb,t);else{Oe(e,n),R(e,n<=zb.MAXUPVAL,"upvalue index too large");let s=new EI(e,t,n);for(let r=0;r<n;r++)s.upvalue[r].setfrom(e.stack[e.top-n+r]);for(let r=1;r<n;r++)delete e.stack[--e.top];n>0&&--e.top,e.stack[e.top].setclCvalue(s)}Me(e)},HI=Up,Kp=function(e,t){Up(e,t,0)},LI=Kp,jI=function(e,t){e.stack[e.top]=new Te(jb,!!t),Me(e)},XI=function(e,t){e.stack[e.top]=new Te(Hr,t),Me(e)},zI=function(e){return e.stack[e.top]=new Te(Ip,e),Me(e),e.l_G.mainthread===e},WI=function(e){tx(e,js,Zl)},$b=function(e,t,n){let s=Yl(e,as(n));Oe(e,1),J.pushsvalue2s(e,s),R(e,e.top<=e.ci.top,"stack overflow"),Fe.settable(e,t,e.stack[e.top-1],e.stack[e.top-2]),delete e.stack[--e.top],delete e.stack[--e.top]},Qb=function(e,t){$b(e,ht.luaH_getint(e.l_G.l_registry.value,Zl),t)},ZI=function(e,t){Oe(e,1);let n,s=N(e,t);switch(e.stack[e.top-1].ttisnil()?n=null:(R(e,e.stack[e.top-1].ttistable(),"table expected"),n=e.stack[e.top-1].value),s.ttnov()){case Lr:case Gr:{s.ttistable()?ht.luaH_setmeta(e,s.value,n):s.value.metatable=n;break}default:{e.l_G.mt[s.ttnov()]=n;break}}return delete e.stack[--e.top],!0},JI=function(e,t){Oe(e,2);let n=N(e,t);Fe.settable(e,n,e.stack[e.top-2],e.stack[e.top-1]),delete e.stack[--e.top],delete e.stack[--e.top]},YI=function(e,t,n){$b(e,N(e,t),n)},$I=function(e,t,n){Nn(n),Oe(e,1);let s=N(e,t);e.stack[e.top]=new Te(Cp,n),Me(e),Fe.settable(e,s,e.stack[e.top-1],e.stack[e.top-2]),delete e.stack[--e.top],delete e.stack[--e.top]},QI=function(e,t){Oe(e,2);let n=N(e,t);R(e,n.ttistable(),"table expected");let s=e.stack[e.top-2],r=e.stack[e.top-1];ht.luaH_setfrom(e,n.value,s,r),ht.invalidateTMcache(n.value),delete e.stack[--e.top],delete e.stack[--e.top]},eV=function(e,t,n){Nn(n),Oe(e,1);let s=N(e,t);R(e,s.ttistable(),"table expected"),ht.luaH_setint(s.value,n,e.stack[e.top-1]),delete e.stack[--e.top]},tV=function(e,t,n){Oe(e,1);let s=N(e,t);R(e,s.ttistable(),"table expected");let r=new Te(Hr,n),o=e.stack[e.top-1];ht.luaH_setfrom(e,s.value,r,o),delete e.stack[--e.top]},ex=function(e,t,n){let s=Yl(e,as(n));return J.pushsvalue2s(e,s),R(e,e.top<=e.ci.top,"stack overflow"),Fe.luaV_gettable(e,t,e.stack[e.top-1],e.top-1),e.stack[e.top-1].ttnov()},tx=function(e,t,n){let s=N(e,t);return Nn(n),R(e,s.ttistable(),"table expected"),J.pushobj2s(e,ht.luaH_getint(s.value,n)),R(e,e.top<=e.ci.top,"stack overflow"),e.stack[e.top-1].ttnov()},nV=function(e,t,n){let s=N(e,t);R(e,s.ttistable(),"table expected");let r=new Te(Hr,n);return J.pushobj2s(e,ht.luaH_get(e,s.value,r)),R(e,e.top<=e.ci.top,"stack overflow"),e.stack[e.top-1].ttnov()},sV=function(e,t){let n=N(e,t);return R(e,n.ttistable(n),"table expected"),J.setobj2s(e,e.top-1,ht.luaH_get(e,n.value,e.stack[e.top-1])),e.stack[e.top-1].ttnov()},nx=function(e,t,n){let s=new J.TValue(Gr,ht.luaH_new(e));e.stack[e.top]=s,Me(e)},rV=function(e,t){return new J.Udata(e,t)},oV=function(e,t){let n=rV(e,t);return e.stack[e.top]=new J.TValue(Lr,n),Me(e),n.data},sx=function(e,t,n){switch(Nn(n),t.ttype()){case Np:{let s=t.value;return 1<=n&&n<=s.nupvalues?{name:ca("",!0),val:s.upvalue[n-1]}:null}case Op:{let s=t.value,r=s.p;if(!(1<=n&&n<=r.upvalues.length))return null;let o=r.upvalues[n-1].name;return{name:o?o.getstr():ca("(*no name)",!0),val:s.upvals[n-1]}}default:return null}},aV=function(e,t,n){let s=sx(e,N(e,t),n);if(s){let r=s.name,o=s.val;return J.pushobj2s(e,o),R(e,e.top<=e.ci.top,"stack overflow"),r}return null},lV=function(e,t,n){let s=N(e,t);Oe(e,1);let r=sx(e,s,n);if(r){let o=r.name;return r.val.setfrom(e.stack[e.top-1]),delete e.stack[--e.top],o}return null},iV=function(e){nx(e,0,0)},cV=function(e,t,n){Kp(e,n),Qb(e,t)},uV=function(e,t){let n=N(e,t),s,r=!1;switch(n.ttnov()){case Gr:case Lr:s=n.value.metatable;break;default:s=e.l_G.mt[n.ttnov()];break}return s!=null&&(e.stack[e.top]=new Te(Gr,s),Me(e),r=!0),r},pV=function(e,t){let n=N(e,t);R(e,n.ttisfulluserdata(),"full userdata expected");let s=n.value.uservalue;return e.stack[e.top]=new Te(s.type,s.value),Me(e),e.stack[e.top-1].ttnov()},fV=function(e,t){let n=N(e,t);return Fe.luaV_gettable(e,n,e.stack[e.top-1],e.top-1),e.stack[e.top-1].ttnov()},dV=function(e,t,n){return ex(e,N(e,t),n)},hV=function(e,t,n){let s=N(e,t);return Nn(n),e.stack[e.top]=new Te(Cp,n),Me(e),Fe.luaV_gettable(e,s,e.stack[e.top-1],e.top-1),e.stack[e.top-1].ttnov()},gV=function(e,t){return ex(e,ht.luaH_getint(e.l_G.l_registry.value,Zl),t)},mV=function(e,t){return!N(e,t).l_isfalse()},Fp=function(e,t){let n=N(e,t);if(!n.ttisstring()){if(!Fe.cvt2str(n))return null;J.luaO_tostring(e,n)}return n.svalue()},_V=Fp,bV=function(e,t){let n=N(e,t);if(!n.ttisstring()){if(!Fe.cvt2str(n))return null;J.luaO_tostring(e,n)}return n.jsstring()},xV=function(e,t){let n=Fp(e,t);return new DataView(n.buffer,n.byteOffset,n.byteLength)},AV=function(e,t){let n=N(e,t);switch(n.ttype()){case mI:case hI:return n.vslen();case Lr:return n.value.len;case Gr:return ht.luaH_getn(n.value);default:return 0}},SV=function(e,t){let n=N(e,t);return n.ttislcf()||n.ttisCclosure()?n.value:null},kV=function(e,t){let n=rx(e,t);return n===!1?0:n},rx=function(e,t){return Fe.tointeger(N(e,t))},EV=function(e,t){let n=ox(e,t);return n===!1?0:n},ox=function(e,t){return Fe.tonumber(N(e,t))},vV=function(e,t){let n=N(e,t);switch(n.ttnov()){case Lr:return n.value.data;case Hr:return n.value;default:return null}},TV=function(e,t){let n=N(e,t);return n.ttisthread()?n.value:null},RV=function(e,t){let n=N(e,t);switch(n.ttype()){case Gr:case Op:case Np:case Xb:case Ip:case Lr:case Hr:return n.value;default:return null}},ax=new WeakMap,yV=function(e,t){let n=ax.get(e);return n?t===null||t.l_G===n:!1},NV=function(e,t,n){let s=function(r){R(r,r instanceof Ls.lua_State&&e===r.l_G,"must be from same global state"),r.stack[r.top]=new Te(t,n),Me(r)};return ax.set(s,e),s},OV=function(e,t){let n=N(e,t);return NV(e.l_G,n.type,n.value)},wV=function(e,t,n,s){let r=N(e,t),o=N(e,n),a=0;if(qr(r)&&qr(o))switch(s){case lI:a=Fe.luaV_equalobj(e,r,o);break;case cI:a=Fe.luaV_lessthan(e,r,o);break;case iI:a=Fe.luaV_lessequal(e,r,o);break;default:R(e,!1,"invalid option")}return a},CV=function(e,t){let n=new Te,s=J.luaO_str2num(t,n);return s!==0&&(e.stack[e.top]=n,Me(e)),s},IV=function(e,t){ls.luaD_callnoyield(e,t.funcOff,t.nresults)},is=function(e,t){let n=N(e,t);return qr(n)?n.ttnov():wp},VV=function(e,t){return R(e,wp<=t&&t<fI,"invalid tag"),AI.ttypename(t)},PV=function(e,t){let n=N(e,t);return n.ttislcf(n)||n.ttisCclosure()},UV=function(e,t){return is(e,t)===Jl},KV=function(e,t){return is(e,t)===jb},FV=function(e,t){return is(e,t)===wp},MV=function(e,t){return is(e,t)<=0},BV=function(e,t){return N(e,t).ttistable()},DV=function(e,t){return N(e,t).ttisinteger()},GV=function(e,t){return Fe.tonumber(N(e,t))!==!1},qV=function(e,t){let n=N(e,t);return n.ttisstring()||Fe.cvt2str(n)},HV=function(e,t){let n=N(e,t);return n.ttisfulluserdata(n)||n.ttislightuserdata()},LV=function(e,t){return is(e,t)===Ip},jV=function(e,t){return is(e,t)===dI},XV=function(e,t){return is(e,t)===Hr},zV=function(e,t,n){let s=N(e,t),r=N(e,n);return qr(s)&&qr(r)?Fe.luaV_equalobj(null,s,r):0},WV=function(e,t){t!==uI&&t!==aI?Oe(e,2):(Oe(e,1),J.pushobj2s(e,e.stack[e.top-1]),R(e,e.top<=e.ci.top,"stack overflow")),J.luaO_arith(e,t,e.stack[e.top-2],e.stack[e.top-1],e.stack[e.top-2]),delete e.stack[--e.top]},ZV=ca("?"),JV=function(e,t,n,s,r){s?s=as(s):s=ZV,r!==null&&(r=as(r));let o=new kI(e,t,n),a=ls.luaD_protectedparser(e,o,s,r);if(a===Wl){let l=e.stack[e.top-1].value;if(l.nupvalues>=1){let i=ht.luaH_getint(e.l_G.l_registry.value,Zl);l.upvals[0].setfrom(i)}}return a},YV=function(e,t,n,s){Oe(e,1);let r=e.stack[e.top-1];return r.ttisLclosure()?bI(e,r.value.p,t,n,s):1},$V=function(e){return e.status},QV=function(e,t){Oe(e,1);let n=N(e,t);R(e,n.ttisfulluserdata(),"full userdata expected"),n.value.uservalue.setfrom(e.stack[e.top-1]),delete e.stack[--e.top]},lx=function(e,t,n){R(e,n===yp||e.ci.top-e.top>=n-t,"results from function overflow current stack size")},ix=function(e,t,n,s,r){R(e,r===null||!(e.ci.callstatus&Ls.CIST_LUA),"cannot use continuations inside hooks"),Oe(e,t+1),R(e,e.status===Wl,"cannot do calls on non-normal thread"),lx(e,t,n);let o=e.top-(t+1);r!==null&&e.nny===0?(e.ci.c_k=r,e.ci.c_ctx=s,ls.luaD_call(e,o,n)):ls.luaD_callnoyield(e,o,n),n===yp&&e.ci.top<e.top&&(e.ci.top=e.top)},eP=function(e,t,n){ix(e,t,n,0,null)},cx=function(e,t,n,s,r,o){R(e,o===null||!(e.ci.callstatus&Ls.CIST_LUA),"cannot use continuations inside hooks"),Oe(e,t+1),R(e,e.status===Wl,"cannot do calls on non-normal thread"),lx(e,t,n);let a,l;s===0?l=0:l=Zb(e,s);let i=e.top-(t+1);if(o===null||e.nny>0){let u={funcOff:i,nresults:n};a=ls.luaD_pcall(e,IV,u,i,l)}else{let u=e.ci;u.c_k=o,u.c_ctx=r,u.extra=i,u.c_old_errfunc=e.errfunc,e.errfunc=l,u.callstatus&=~Ls.CIST_OAH|e.allowhook,u.callstatus|=Ls.CIST_YPCALL,ls.luaD_call(e,i,n),u.callstatus&=~Ls.CIST_YPCALL,e.errfunc=u.c_old_errfunc,a=Wl}return n===yp&&e.ci.top<e.top&&(e.ci.top=e.top),a},tP=function(e,t,n,s){return cx(e,t,n,s,0,null)},nP=function(e){Oe(e,1),_I.luaG_errormsg(e)},sP=function(e,t){let n=N(e,t);return R(e,n.ttistable(),"table expected"),e.stack[e.top]=new Te,ht.luaH_next(e,n.value,e.top-1)?(Me(e),1):(delete e.stack[e.top],delete e.stack[--e.top],0)},rP=function(e,t){Oe(e,t),t>=2?Fe.luaV_concat(e,t):t===0&&(J.pushsvalue2s(e,Wb(e,ca("",!0))),R(e,e.top<=e.ci.top,"stack overflow"))},oP=function(e,t){let n=N(e,t),s=new Te;Fe.luaV_objlen(e,s,n),e.stack[e.top]=s,Me(e)},Rp=function(e,t,n){let s=N(e,t);R(e,s.ttisLclosure(),"Lua function expected");let r=s.value;return Nn(n),R(e,1<=n&&n<=r.p.upvalues.length,"invalid upvalue index"),{f:r,i:n-1}},aP=function(e,t,n){let s=N(e,t);switch(s.ttype()){case Op:{let r=Rp(e,t,n);return r.f.upvals[r.i]}case Np:{let r=s.value;return R(e,Number.isInteger(n)&&n>0&&n<=r.nupvalues,"invalid upvalue index"),r.upvalue[n-1]}default:return R(e,!1,"closure expected"),null}},lP=function(e,t,n,s,r){let o=Rp(e,t,n),a=Rp(e,s,r),l=a.f.upvals[a.i];o.f.upvals[o.i]=l},iP=function(){},cP=function(){return console.warn("lua_getallocf is not available"),0},uP=function(){return console.warn("lua_setallocf is not available"),0},pP=function(){return console.warn("lua_getextraspace is not available"),0};d.exports.api_incr_top=Me;d.exports.api_checknelems=Oe;d.exports.lua_absindex=OI;d.exports.lua_arith=WV;d.exports.lua_atpanic=TI;d.exports.lua_atnativeerror=RI;d.exports.lua_call=eP;d.exports.lua_callk=ix;d.exports.lua_checkstack=yI;d.exports.lua_compare=wV;d.exports.lua_concat=rP;d.exports.lua_copy=Yb;d.exports.lua_createtable=nx;d.exports.lua_dump=YV;d.exports.lua_error=nP;d.exports.lua_gc=iP;d.exports.lua_getallocf=cP;d.exports.lua_getextraspace=pP;d.exports.lua_getfield=dV;d.exports.lua_getglobal=gV;d.exports.lua_geti=hV;d.exports.lua_getmetatable=uV;d.exports.lua_gettable=fV;d.exports.lua_gettop=wI;d.exports.lua_getupvalue=aV;d.exports.lua_getuservalue=pV;d.exports.lua_insert=VI;d.exports.lua_isboolean=KV;d.exports.lua_iscfunction=PV;d.exports.lua_isfunction=jV;d.exports.lua_isinteger=DV;d.exports.lua_islightuserdata=XV;d.exports.lua_isnil=UV;d.exports.lua_isnone=FV;d.exports.lua_isnoneornil=MV;d.exports.lua_isnumber=GV;d.exports.lua_isproxy=yV;d.exports.lua_isstring=qV;d.exports.lua_istable=BV;d.exports.lua_isthread=LV;d.exports.lua_isuserdata=HV;d.exports.lua_len=oP;d.exports.lua_load=JV;d.exports.lua_newtable=iV;d.exports.lua_newuserdata=oV;d.exports.lua_next=sP;d.exports.lua_pcall=tP;d.exports.lua_pcallk=cx;d.exports.lua_pop=Vp;d.exports.lua_pushboolean=jI;d.exports.lua_pushcclosure=Up;d.exports.lua_pushcfunction=Kp;d.exports.lua_pushfstring=GI;d.exports.lua_pushglobaltable=WI;d.exports.lua_pushinteger=FI;d.exports.lua_pushjsclosure=HI;d.exports.lua_pushjsfunction=LI;d.exports.lua_pushlightuserdata=XI;d.exports.lua_pushliteral=qI;d.exports.lua_pushlstring=MI;d.exports.lua_pushnil=UI;d.exports.lua_pushnumber=KI;d.exports.lua_pushstring=BI;d.exports.lua_pushthread=zI;d.exports.lua_pushvalue=CI;d.exports.lua_pushvfstring=DI;d.exports.lua_rawequal=zV;d.exports.lua_rawget=sV;d.exports.lua_rawgeti=tx;d.exports.lua_rawgetp=nV;d.exports.lua_rawlen=AV;d.exports.lua_rawset=QI;d.exports.lua_rawseti=eV;d.exports.lua_rawsetp=tV;d.exports.lua_register=cV;d.exports.lua_remove=II;d.exports.lua_replace=PI;d.exports.lua_rotate=Pp;d.exports.lua_setallocf=uP;d.exports.lua_setfield=YI;d.exports.lua_setglobal=Qb;d.exports.lua_seti=$I;d.exports.lua_setmetatable=ZI;d.exports.lua_settable=JI;d.exports.lua_settop=Jb;d.exports.lua_setupvalue=lV;d.exports.lua_setuservalue=QV;d.exports.lua_status=$V;d.exports.lua_stringtonumber=CV;d.exports.lua_toboolean=mV;d.exports.lua_tocfunction=SV;d.exports.lua_todataview=xV;d.exports.lua_tointeger=kV;d.exports.lua_tointegerx=rx;d.exports.lua_tojsstring=bV;d.exports.lua_tolstring=Fp;d.exports.lua_tonumber=EV;d.exports.lua_tonumberx=ox;d.exports.lua_topointer=RV;d.exports.lua_toproxy=OV;d.exports.lua_tostring=_V;d.exports.lua_tothread=TV;d.exports.lua_touserdata=vV;d.exports.lua_type=is;d.exports.lua_typename=VV;d.exports.lua_upvalueid=aP;d.exports.lua_upvaluejoin=lP;d.exports.lua_version=vI;d.exports.lua_xmove=NI});var Le=K((xH,p)=>{"use strict";var A=Ae(),h=mr(),cs=gn(),Ql=It(),Mp=hn();p.exports.LUA_AUTHORS=A.LUA_AUTHORS;p.exports.LUA_COPYRIGHT=A.LUA_COPYRIGHT;p.exports.LUA_ERRERR=A.thread_status.LUA_ERRERR;p.exports.LUA_ERRGCMM=A.thread_status.LUA_ERRGCMM;p.exports.LUA_ERRMEM=A.thread_status.LUA_ERRMEM;p.exports.LUA_ERRRUN=A.thread_status.LUA_ERRRUN;p.exports.LUA_ERRSYNTAX=A.thread_status.LUA_ERRSYNTAX;p.exports.LUA_HOOKCALL=A.LUA_HOOKCALL;p.exports.LUA_HOOKCOUNT=A.LUA_HOOKCOUNT;p.exports.LUA_HOOKLINE=A.LUA_HOOKLINE;p.exports.LUA_HOOKRET=A.LUA_HOOKRET;p.exports.LUA_HOOKTAILCALL=A.LUA_HOOKTAILCALL;p.exports.LUA_MASKCALL=A.LUA_MASKCALL;p.exports.LUA_MASKCOUNT=A.LUA_MASKCOUNT;p.exports.LUA_MASKLINE=A.LUA_MASKLINE;p.exports.LUA_MASKRET=A.LUA_MASKRET;p.exports.LUA_MINSTACK=A.LUA_MINSTACK;p.exports.LUA_MULTRET=A.LUA_MULTRET;p.exports.LUA_NUMTAGS=A.constant_types.LUA_NUMTAGS;p.exports.LUA_OK=A.thread_status.LUA_OK;p.exports.LUA_OPADD=A.LUA_OPADD;p.exports.LUA_OPBAND=A.LUA_OPBAND;p.exports.LUA_OPBNOT=A.LUA_OPBNOT;p.exports.LUA_OPBOR=A.LUA_OPBOR;p.exports.LUA_OPBXOR=A.LUA_OPBXOR;p.exports.LUA_OPDIV=A.LUA_OPDIV;p.exports.LUA_OPEQ=A.LUA_OPEQ;p.exports.LUA_OPIDIV=A.LUA_OPIDIV;p.exports.LUA_OPLE=A.LUA_OPLE;p.exports.LUA_OPLT=A.LUA_OPLT;p.exports.LUA_OPMOD=A.LUA_OPMOD;p.exports.LUA_OPMUL=A.LUA_OPMUL;p.exports.LUA_OPPOW=A.LUA_OPPOW;p.exports.LUA_OPSHL=A.LUA_OPSHL;p.exports.LUA_OPSHR=A.LUA_OPSHR;p.exports.LUA_OPSUB=A.LUA_OPSUB;p.exports.LUA_OPUNM=A.LUA_OPUNM;p.exports.LUA_REGISTRYINDEX=A.LUA_REGISTRYINDEX;p.exports.LUA_RELEASE=A.LUA_RELEASE;p.exports.LUA_RIDX_GLOBALS=A.LUA_RIDX_GLOBALS;p.exports.LUA_RIDX_LAST=A.LUA_RIDX_LAST;p.exports.LUA_RIDX_MAINTHREAD=A.LUA_RIDX_MAINTHREAD;p.exports.LUA_SIGNATURE=A.LUA_SIGNATURE;p.exports.LUA_TNONE=A.constant_types.LUA_TNONE;p.exports.LUA_TNIL=A.constant_types.LUA_TNIL;p.exports.LUA_TBOOLEAN=A.constant_types.LUA_TBOOLEAN;p.exports.LUA_TLIGHTUSERDATA=A.constant_types.LUA_TLIGHTUSERDATA;p.exports.LUA_TNUMBER=A.constant_types.LUA_TNUMBER;p.exports.LUA_TSTRING=A.constant_types.LUA_TSTRING;p.exports.LUA_TTABLE=A.constant_types.LUA_TTABLE;p.exports.LUA_TFUNCTION=A.constant_types.LUA_TFUNCTION;p.exports.LUA_TUSERDATA=A.constant_types.LUA_TUSERDATA;p.exports.LUA_TTHREAD=A.constant_types.LUA_TTHREAD;p.exports.LUA_VERSION=A.LUA_VERSION;p.exports.LUA_VERSION_MAJOR=A.LUA_VERSION_MAJOR;p.exports.LUA_VERSION_MINOR=A.LUA_VERSION_MINOR;p.exports.LUA_VERSION_NUM=A.LUA_VERSION_NUM;p.exports.LUA_VERSION_RELEASE=A.LUA_VERSION_RELEASE;p.exports.LUA_YIELD=A.thread_status.LUA_YIELD;p.exports.lua_Debug=A.lua_Debug;p.exports.lua_upvalueindex=A.lua_upvalueindex;p.exports.lua_absindex=h.lua_absindex;p.exports.lua_arith=h.lua_arith;p.exports.lua_atpanic=h.lua_atpanic;p.exports.lua_atnativeerror=h.lua_atnativeerror;p.exports.lua_call=h.lua_call;p.exports.lua_callk=h.lua_callk;p.exports.lua_checkstack=h.lua_checkstack;p.exports.lua_close=Mp.lua_close;p.exports.lua_compare=h.lua_compare;p.exports.lua_concat=h.lua_concat;p.exports.lua_copy=h.lua_copy;p.exports.lua_createtable=h.lua_createtable;p.exports.lua_dump=h.lua_dump;p.exports.lua_error=h.lua_error;p.exports.lua_gc=h.lua_gc;p.exports.lua_getallocf=h.lua_getallocf;p.exports.lua_getextraspace=h.lua_getextraspace;p.exports.lua_getfield=h.lua_getfield;p.exports.lua_getglobal=h.lua_getglobal;p.exports.lua_gethook=cs.lua_gethook;p.exports.lua_gethookcount=cs.lua_gethookcount;p.exports.lua_gethookmask=cs.lua_gethookmask;p.exports.lua_geti=h.lua_geti;p.exports.lua_getinfo=cs.lua_getinfo;p.exports.lua_getlocal=cs.lua_getlocal;p.exports.lua_getmetatable=h.lua_getmetatable;p.exports.lua_getstack=cs.lua_getstack;p.exports.lua_gettable=h.lua_gettable;p.exports.lua_gettop=h.lua_gettop;p.exports.lua_getupvalue=h.lua_getupvalue;p.exports.lua_getuservalue=h.lua_getuservalue;p.exports.lua_insert=h.lua_insert;p.exports.lua_isboolean=h.lua_isboolean;p.exports.lua_iscfunction=h.lua_iscfunction;p.exports.lua_isfunction=h.lua_isfunction;p.exports.lua_isinteger=h.lua_isinteger;p.exports.lua_islightuserdata=h.lua_islightuserdata;p.exports.lua_isnil=h.lua_isnil;p.exports.lua_isnone=h.lua_isnone;p.exports.lua_isnoneornil=h.lua_isnoneornil;p.exports.lua_isnumber=h.lua_isnumber;p.exports.lua_isproxy=h.lua_isproxy;p.exports.lua_isstring=h.lua_isstring;p.exports.lua_istable=h.lua_istable;p.exports.lua_isthread=h.lua_isthread;p.exports.lua_isuserdata=h.lua_isuserdata;p.exports.lua_isyieldable=Ql.lua_isyieldable;p.exports.lua_len=h.lua_len;p.exports.lua_load=h.lua_load;p.exports.lua_newstate=Mp.lua_newstate;p.exports.lua_newtable=h.lua_newtable;p.exports.lua_newthread=Mp.lua_newthread;p.exports.lua_newuserdata=h.lua_newuserdata;p.exports.lua_next=h.lua_next;p.exports.lua_pcall=h.lua_pcall;p.exports.lua_pcallk=h.lua_pcallk;p.exports.lua_pop=h.lua_pop;p.exports.lua_pushboolean=h.lua_pushboolean;p.exports.lua_pushcclosure=h.lua_pushcclosure;p.exports.lua_pushcfunction=h.lua_pushcfunction;p.exports.lua_pushfstring=h.lua_pushfstring;p.exports.lua_pushglobaltable=h.lua_pushglobaltable;p.exports.lua_pushinteger=h.lua_pushinteger;p.exports.lua_pushjsclosure=h.lua_pushjsclosure;p.exports.lua_pushjsfunction=h.lua_pushjsfunction;p.exports.lua_pushlightuserdata=h.lua_pushlightuserdata;p.exports.lua_pushliteral=h.lua_pushliteral;p.exports.lua_pushlstring=h.lua_pushlstring;p.exports.lua_pushnil=h.lua_pushnil;p.exports.lua_pushnumber=h.lua_pushnumber;p.exports.lua_pushstring=h.lua_pushstring;p.exports.lua_pushthread=h.lua_pushthread;p.exports.lua_pushvalue=h.lua_pushvalue;p.exports.lua_pushvfstring=h.lua_pushvfstring;p.exports.lua_rawequal=h.lua_rawequal;p.exports.lua_rawget=h.lua_rawget;p.exports.lua_rawgeti=h.lua_rawgeti;p.exports.lua_rawgetp=h.lua_rawgetp;p.exports.lua_rawlen=h.lua_rawlen;p.exports.lua_rawset=h.lua_rawset;p.exports.lua_rawseti=h.lua_rawseti;p.exports.lua_rawsetp=h.lua_rawsetp;p.exports.lua_register=h.lua_register;p.exports.lua_remove=h.lua_remove;p.exports.lua_replace=h.lua_replace;p.exports.lua_resume=Ql.lua_resume;p.exports.lua_rotate=h.lua_rotate;p.exports.lua_setallocf=h.lua_setallocf;p.exports.lua_setfield=h.lua_setfield;p.exports.lua_setglobal=h.lua_setglobal;p.exports.lua_sethook=cs.lua_sethook;p.exports.lua_seti=h.lua_seti;p.exports.lua_setlocal=cs.lua_setlocal;p.exports.lua_setmetatable=h.lua_setmetatable;p.exports.lua_settable=h.lua_settable;p.exports.lua_settop=h.lua_settop;p.exports.lua_setupvalue=h.lua_setupvalue;p.exports.lua_setuservalue=h.lua_setuservalue;p.exports.lua_status=h.lua_status;p.exports.lua_stringtonumber=h.lua_stringtonumber;p.exports.lua_toboolean=h.lua_toboolean;p.exports.lua_todataview=h.lua_todataview;p.exports.lua_tointeger=h.lua_tointeger;p.exports.lua_tointegerx=h.lua_tointegerx;p.exports.lua_tojsstring=h.lua_tojsstring;p.exports.lua_tolstring=h.lua_tolstring;p.exports.lua_tonumber=h.lua_tonumber;p.exports.lua_tonumberx=h.lua_tonumberx;p.exports.lua_topointer=h.lua_topointer;p.exports.lua_toproxy=h.lua_toproxy;p.exports.lua_tostring=h.lua_tostring;p.exports.lua_tothread=h.lua_tothread;p.exports.lua_touserdata=h.lua_touserdata;p.exports.lua_type=h.lua_type;p.exports.lua_typename=h.lua_typename;p.exports.lua_upvalueid=h.lua_upvalueid;p.exports.lua_upvaluejoin=h.lua_upvaluejoin;p.exports.lua_version=h.lua_version;p.exports.lua_xmove=h.lua_xmove;p.exports.lua_yield=Ql.lua_yield;p.exports.lua_yieldk=Ql.lua_yieldk;p.exports.lua_tocfunction=h.lua_tocfunction});var ua={};EE(ua,{default:()=>dP,existsSync:()=>px,readFileSync:()=>ux});function fP(e){return()=>{throw new Error(`node-shims/fs: "${e}" is not available in the browser build`)}}var ux,px,dP,pa=kE(()=>{ux=fP("readFileSync"),px=()=>!1,dP={readFileSync:ux,existsSync:px}});var gt=K((AH,x)=>{"use strict";var{LUAL_BUFFERSIZE:hP}=lt(),{LUA_ERRERR:gP,LUA_MULTRET:bx,LUA_REGISTRYINDEX:ai,LUA_SIGNATURE:fx,LUA_TBOOLEAN:mP,LUA_TLIGHTUSERDATA:_P,LUA_TNIL:Xr,LUA_TNONE:bP,LUA_TNUMBER:Hp,LUA_TSTRING:fa,LUA_TTABLE:xP,LUA_VERSION_NUM:AP,lua_Debug:li,lua_absindex:ii,lua_atpanic:SP,lua_call:xx,lua_checkstack:kP,lua_concat:ti,lua_copy:EP,lua_createtable:Lp,lua_error:vP,lua_getfield:ci,lua_getinfo:ui,lua_getmetatable:Ax,lua_getstack:da,lua_gettop:jr,lua_insert:TP,lua_isinteger:RP,lua_isnil:yP,lua_isnumber:NP,lua_isstring:OP,lua_istable:wP,lua_len:CP,lua_load:Bp,lua_newstate:IP,lua_newtable:VP,lua_next:PP,lua_pcall:Sx,lua_pop:yt,lua_pushboolean:kx,lua_pushcclosure:UP,lua_pushcfunction:KP,lua_pushfstring:nt,lua_pushinteger:ni,lua_pushliteral:Rt,lua_pushlstring:FP,lua_pushnil:jp,lua_pushstring:Wr,lua_pushvalue:Xs,lua_pushvfstring:MP,lua_rawequal:Ex,lua_rawget:BP,lua_rawgeti:Dp,lua_rawlen:DP,lua_rawseti:si,lua_remove:On,lua_setfield:ha,lua_setglobal:GP,lua_setmetatable:qP,lua_settop:Gp,lua_toboolean:vx,lua_tointeger:Tx,lua_tointegerx:Rx,lua_tojsstring:HP,lua_tolstring:yx,lua_tonumber:LP,lua_tonumberx:jP,lua_topointer:XP,lua_tostring:tn,lua_touserdata:zP,lua_type:us,lua_typename:Nx,lua_version:dx}=Le(),{from_userstring:Xp,luastring_eq:Ox,to_luastring:O,to_uristring:WP}=it(),wx=gP+1,zp=O("_LOADED"),ZP=O("_PRELOAD"),JP=O("FILE*"),Cx=72,Wp=O("__name"),YP=O("__tostring"),Zp=new Uint8Array(0),ri=class{constructor(){this.L=null,this.b=Zp,this.n=0}},hx=10,gx=11,Ix=function(e,t,n){if(n===0||!wP(e,-1))return 0;for(jp(e);PP(e,-2);){if(us(e,-2)===fa){if(Ex(e,t,-1))return yt(e,1),1;if(Ix(e,t,n-1))return On(e,-2),Rt(e,"."),TP(e,-2),ti(e,3),1}yt(e,1)}return 0},Vx=function(e,t){let n=jr(e);if(ui(e,O("f"),t),ci(e,ai,zp),Ix(e,n+1,2)){let s=tn(e,-1);return s[0]===95&&s[1]===71&&s[2]===46&&(Wr(e,s.subarray(3)),On(e,-2)),EP(e,-1,n+1),yt(e,2),1}else return Gp(e,n),0},$P=function(e,t){Vx(e,t)?(nt(e,O("function '%s'"),tn(e,-1)),On(e,-2)):t.namewhat.length!==0?nt(e,O("%s '%s'"),t.namewhat,t.name):t.what&&t.what[0]===109?Rt(e,"main chunk"):t.what&&t.what[0]===76?nt(e,O("function <%s:%d>"),t.short_src,t.linedefined):Rt(e,"?")},QP=function(e){let t=new li,n=1,s=1;for(;da(e,s,t);)n=s,s*=2;for(;n<s;){let r=Math.floor((n+s)/2);da(e,r,t)?n=r+1:s=r}return s-1},eU=function(e,t,n,s){let r=new li,o=jr(e),a=QP(t),l=a-s>hx+gx?hx:-1;for(n&&nt(e,O(`%s
`),n),nf(e,10,null),Rt(e,"stack traceback:");da(t,s++,r);)l--===0?(Rt(e,`
	...`),s=a-gx+1):(ui(t,O("Slnt",!0),r),nt(e,O(`
	%s:`),r.short_src),r.currentline>0&&Rt(e,`${r.currentline}:`),Rt(e," in "),$P(e,r),r.istailcall&&Rt(e,`
	(...tail calls..)`),ti(e,jr(e)-o));ti(e,jr(e)-o)},tU=function(e){let t="PANIC: unprotected error in call to Lua API ("+HP(e,-1)+")";throw new Error(t)},Zr=function(e,t,n){let s=new li;return da(e,0,s)?(ui(e,O("n"),s),Ox(s.namewhat,O("method"))&&(t--,t===0)?Dt(e,O("calling '%s' on bad self (%s)"),s.name,n):(s.name===null&&(s.name=Vx(e,s)?tn(e,-1):O("?")),Dt(e,O("bad argument #%d to '%s' (%s)"),t,s.name,n))):Dt(e,O("bad argument #%d (%s)"),t,n)},Px=function(e,t,n){let s;hi(e,t,Wp)===fa?s=tn(e,-1):us(e,t)===_P?s=O("light userdata",!0):s=Jp(e,t);let r=nt(e,O("%s expected, got %s"),n,s);return Zr(e,t,r)},Ux=function(e,t){let n=new li;if(da(e,t,n)&&(ui(e,O("Sl",!0),n),n.currentline>0)){nt(e,O("%s:%d: "),n.short_src,n.currentline);return}Wr(e,O(""))},Dt=function(e,t,...n){return Ux(e,1),MP(e,t,n),ti(e,2),vP(e)},Kx=function(e,t,n,s){if(t)return kx(e,1),1;{jp(e);let r,o;return s?(r=s.message,o=-s.errno):(r="Success",o=0),n?nt(e,O("%s: %s"),n,O(r)):Wr(e,O(r)),ni(e,o),3}},nU=function(e,t){let n,s;if(t===null)return kx(e,1),Rt(e,"exit"),ni(e,0),3;if(t.status)n="exit",s=t.status;else if(t.signal)n="signal",s=t.signal;else return Kx(e,0,null,t);return jp(e),Rt(e,n),ni(e,s),3},pi=function(e,t){return ci(e,ai,t)},sU=function(e,t){return pi(e,t)!==Xr?0:(yt(e,1),Lp(e,0,2),Wr(e,t),ha(e,-2,Wp),Xs(e,-1),ha(e,ai,t),1)},rU=function(e,t){pi(e,t),qP(e,-2)},Fx=function(e,t,n){let s=zP(e,t);return s!==null&&Ax(e,t)?(pi(e,n),Ex(e,-1,-2)||(s=null),yt(e,2),s):null},oU=function(e,t,n){let s=Fx(e,t,n);return s===null&&Px(e,t,n),s},aU=function(e,t,n,s){let r=n!==null?Dx(e,t,n):Mx(e,t);for(let o=0;s[o];o++)if(Ox(s[o],r))return o;return Zr(e,t,nt(e,O("invalid option '%s'"),r))},fi=function(e,t,n){Px(e,t,Nx(e,n))},lU=function(){let e=IP();return e&&SP(e,tU),e},Jp=function(e,t){return Nx(e,us(e,t))},iU=function(e,t,n,s){t||Zr(e,n,s)},cU=function(e,t){us(e,t)===bP&&Zr(e,t,O("value expected",!0))},uU=function(e,t,n){us(e,t)!==n&&fi(e,t,n)},Yp=function(e,t){let n=yx(e,t);return n==null&&fi(e,t,fa),n},Mx=Yp,Bx=function(e,t,n){return us(e,t)<=0?n===null?null:Xp(n):Yp(e,t)},Dx=Bx,pU=function(e,t){NP(e,t)?Zr(e,t,O("number has no integer representation",!0)):fi(e,t,Hp)},Gx=function(e,t){let n=jP(e,t);return n===!1&&fi(e,t,Hp),n},fU=function(e,t,n){return tf(e,Gx,t,n)},qx=function(e,t){let n=Rx(e,t);return n===!1&&pU(e,t),n},dU=function(e,t,n){return tf(e,qx,t,n)},ga=function(e,t){let n=e.n+t;if(e.b.length<n){let s=Math.max(e.b.length*2,n),r=new Uint8Array(s);r.set(e.b),e.b=r}return e.b.subarray(e.n,n)},$p=function(e,t){t.L=e,t.b=Zp},hU=function(e,t,n){return $p(e,t),ga(t,n)},gU=function(e){return ga(e,hP)},di=function(e,t,n){n>0&&(t=Xp(t),ga(e,n).set(t.subarray(0,n)),ef(e,n))},qp=function(e,t){t=Xp(t),di(e,t,t.length)},Qp=function(e){FP(e.L,e.b,e.n),e.n=0,e.b=Zp},mU=function(e,t){ga(e,1),e.b[e.n++]=t},ef=function(e,t){e.n+=t},_U=function(e,t){ef(e,t),Qp(e)},bU=function(e){let t=e.L,n=tn(t,-1);di(e,n,n.length),yt(t,1)},tf=function(e,t,n,s){return us(e,n)<=0?s:t(e,n)},xU=function(e,t){let n=t.string;return t.string=null,n},Hx=function(e,t,n,s,r){return Bp(e,xU,{string:t},s,r)},Lx=function(e,t,n,s){return Hx(e,t,n,s,null)},jx=function(e,t){return Lx(e,t,t.length,t)},AU=function(e,t){return jx(e,t)||Sx(e,0,bx,0)},hi=function(e,t,n){if(Ax(e,t)){Wr(e,n);let s=BP(e,-2);return s===Xr?yt(e,2):On(e,-2),s}else return Xr},Xx=function(e,t,n){return t=ii(e,t),hi(e,t,n)===Xr?!1:(Xs(e,t),xx(e,1,1),!0)},SU=function(e,t){CP(e,t);let n=Rx(e,-1);return n===!1&&Dt(e,O("object length is not an integer",!0)),yt(e,1),n},kU=O("%I"),EU=O("%f"),vU=function(e,t){if(Xx(e,t,YP))OP(e,-1)||Dt(e,O("'__tostring' must return a string"));else switch(us(e,t)){case Hp:{RP(e,t)?nt(e,kU,Tx(e,t)):nt(e,EU,LP(e,t));break}case fa:Xs(e,t);break;case mP:Rt(e,vx(e,t)?"true":"false");break;case Xr:Rt(e,"nil");break;default:{let s=hi(e,t,Wp),r=s===fa?tn(e,-1):Jp(e,t);nt(e,O("%s: %p"),r,XP(e,t)),s!==Xr&&On(e,-2);break}}return yx(e,-1)},TU=function(e,t,n,s){zx(e,ai,zp),ci(e,-1,t),vx(e,-1)||(yt(e,1),KP(e,n),Wr(e,t),xx(e,1,1),Xs(e,-1),ha(e,-3,t)),On(e,-2),s&&(Xs(e,-1),GP(e,t))},RU=function(e,t,n){let s=n>>>0,r=t.length,o=e.length+1-r;e:for(;s<o;s++){for(let a=0;a<r;a++)if(e[s+a]!==t[a])continue e;return s}return-1},yU=function(e,t,n,s){let r,o=new ri;for($p(e,o);(r=RU(t,n))>=0;)di(o,t,r),qp(o,s),t=t.subarray(r+n.length);return qp(o,t),Qp(o),tn(e,-1)},zx=function(e,t,n){return ci(e,t,n)===xP?!0:(yt(e,1),t=ii(e,t),VP(e),Xs(e,-1),ha(e,t,n),!1)},Wx=function(e,t,n){nf(e,n,O("too many upvalues",!0));for(let s in t){for(let r=0;r<n;r++)Xs(e,-n);UP(e,t[s],n),ha(e,-(n+2),O(s))}yt(e,n)},nf=function(e,t,n){kP(e,t)||(n?Dt(e,O("stack overflow (%s)"),n):Dt(e,O("stack overflow",!0)))},NU=function(e){Lp(e)},OU=function(e,t){Lp(e),Wx(e,t,0)},wU=-2,Zx=-1,CU=function(e,t){let n;return yP(e,-1)?(yt(e,1),Zx):(t=ii(e,t),Dp(e,t,0),n=Tx(e,-1),yt(e,1),n!==0?(Dp(e,t,n),si(e,t,0)):n=DP(e,t)+1,si(e,t,n),n)},IU=function(e,t,n){n>=0&&(t=ii(e,t),Dp(e,t,0),si(e,t,n),ni(e,n),si(e,t,0))},ei=function(e,t,n,s){let r=s.message,o=tn(e,n).subarray(1);return nt(e,O("cannot %s %s: %s"),O(t),o,O(r)),On(e,n),wx},zr,mx=[239,187,191],VU=function(e){e.n=0;let t,n=0;do{if(t=zr(e),t===null||t!==mx[n])return t;n++,e.buff[e.n++]=t}while(n<mx.length);return e.n=0,zr(e)},_x=function(e){let t=VU(e);if(t===35){do t=zr(e);while(t!==null&&t!==10);return{skipped:!0,c:zr(e)}}else return{skipped:!1,c:t}},oi;if(typeof process>"u"){class e{constructor(){this.n=NaN,this.f=null,this.buff=new Uint8Array(1024),this.pos=0,this.err=void 0}}let t=function(n,s){let r=s;if(r.f!==null&&r.n>0){let a=r.n;return r.n=0,r.f=r.f.subarray(r.pos),r.buff.subarray(0,a)}let o=r.f;return r.f=null,o};zr=function(n){return n.pos<n.f.length?n.f[n.pos++]:null},oi=function(n,s,r){let o=new e,a=jr(n)+1;if(s===null)throw new Error("Can't read stdin in the browser");{nt(n,O("@%s"),s);let c=WP(s),f=new XMLHttpRequest;if(f.open("GET",c,!1),typeof window>"u"&&(f.responseType="arraybuffer"),f.send(),f.status>=200&&f.status<=299)typeof f.response=="string"?o.f=O(f.response):o.f=new Uint8Array(f.response);else return o.err=f.status,ei(n,"open",a,{message:`${f.status}: ${f.statusText}`})}let l=_x(o);l.c===fx[0]&&s||l.skipped&&(o.buff[o.n++]=10),l.c!==null&&(o.buff[o.n++]=l.c);let i=Bp(n,t,o,tn(n,-1),r),u=o.err;return u?(Gp(n,a),ei(n,"read",a,u)):(On(n,a),i)}}else{let e=(pa(),ja(ua));class t{constructor(){this.n=NaN,this.f=null,this.buff=Buffer.alloc(1024),this.pos=0,this.err=void 0}}let n=function(s,r){let o=r,a=0;if(o.n>0)a=o.n,o.n=0;else{try{a=e.readSync(o.f,o.buff,0,o.buff.length,o.pos)}catch(l){o.err=l,a=0}o.pos+=a}return a>0?o.buff.subarray(0,a):null};zr=function(s){let r=Buffer.alloc(1),o;try{o=e.readSync(s.f,r,0,1,s.pos)}catch(a){return s.err=a,null}return s.pos+=o,o>0?r.readUInt8():null},oi=function(s,r,o){let a=new t,l=jr(s)+1;if(r===null)Rt(s,"=stdin"),a.f=process.stdin.fd;else{nt(s,O("@%s"),r);try{a.f=e.openSync(r,"r")}catch(f){return ei(s,"open",l,f)}}let i=_x(a);i.c===fx[0]&&r||i.skipped&&(a.buff[a.n++]=10),i.c!==null&&(a.buff[a.n++]=i.c);let u=Bp(s,n,a,tn(s,-1),o),c=a.err;if(r)try{e.closeSync(a.f)}catch{}return c?(Gp(s,l),ei(s,"read",l,c)):(On(s,l),u)}}var Jx=function(e,t){return oi(e,t,null)},PU=function(e,t){return Jx(e,t)||Sx(e,0,bx,0)},UU=function(){for(let e=0;e<arguments.length;e++){let t=arguments[e];if(typeof process>"u")do{let n=/([^\n]*)\n?([\d\D]*)/.exec(t);console.error(n[1]),t=n[2]}while(t!=="");else process.stderr.write(t)}},Yx=function(e,t,n){let s=dx(e);n!=Cx&&Dt(e,O("core and library have incompatible numeric types")),s!=dx(null)?Dt(e,O("multiple Lua VMs detected")):s!==t&&Dt(e,O("version mismatch: app. needs %f, Lua core provides %f"),t,s)},KU=function(e){Yx(e,AP,Cx)};x.exports.LUA_ERRFILE=wx;x.exports.LUA_FILEHANDLE=JP;x.exports.LUA_LOADED_TABLE=zp;x.exports.LUA_NOREF=wU;x.exports.LUA_PRELOAD_TABLE=ZP;x.exports.LUA_REFNIL=Zx;x.exports.luaL_Buffer=ri;x.exports.luaL_addchar=mU;x.exports.luaL_addlstring=di;x.exports.luaL_addsize=ef;x.exports.luaL_addstring=qp;x.exports.luaL_addvalue=bU;x.exports.luaL_argcheck=iU;x.exports.luaL_argerror=Zr;x.exports.luaL_buffinit=$p;x.exports.luaL_buffinitsize=hU;x.exports.luaL_callmeta=Xx;x.exports.luaL_checkany=cU;x.exports.luaL_checkinteger=qx;x.exports.luaL_checklstring=Yp;x.exports.luaL_checknumber=Gx;x.exports.luaL_checkoption=aU;x.exports.luaL_checkstack=nf;x.exports.luaL_checkstring=Mx;x.exports.luaL_checktype=uU;x.exports.luaL_checkudata=oU;x.exports.luaL_checkversion=KU;x.exports.luaL_checkversion_=Yx;x.exports.luaL_dofile=PU;x.exports.luaL_dostring=AU;x.exports.luaL_error=Dt;x.exports.luaL_execresult=nU;x.exports.luaL_fileresult=Kx;x.exports.luaL_getmetafield=hi;x.exports.luaL_getmetatable=pi;x.exports.luaL_getsubtable=zx;x.exports.luaL_gsub=yU;x.exports.luaL_len=SU;x.exports.luaL_loadbuffer=Lx;x.exports.luaL_loadbufferx=Hx;x.exports.luaL_loadfile=Jx;x.exports.luaL_loadfilex=oi;x.exports.luaL_loadstring=jx;x.exports.luaL_newlib=OU;x.exports.luaL_newlibtable=NU;x.exports.luaL_newmetatable=sU;x.exports.luaL_newstate=lU;x.exports.luaL_opt=tf;x.exports.luaL_optinteger=dU;x.exports.luaL_optlstring=Bx;x.exports.luaL_optnumber=fU;x.exports.luaL_optstring=Dx;x.exports.luaL_prepbuffer=gU;x.exports.luaL_prepbuffsize=ga;x.exports.luaL_pushresult=Qp;x.exports.luaL_pushresultsize=_U;x.exports.luaL_ref=CU;x.exports.luaL_requiref=TU;x.exports.luaL_setfuncs=Wx;x.exports.luaL_setmetatable=rU;x.exports.luaL_testudata=Fx;x.exports.luaL_tolstring=vU;x.exports.luaL_traceback=eU;x.exports.luaL_typename=Jp;x.exports.luaL_unref=IU;x.exports.luaL_where=Ux;x.exports.lua_writestringerror=UU});var df=K((SH,fA)=>{"use strict";var{LUA_MULTRET:of,LUA_OK:af,LUA_TFUNCTION:tA,LUA_TNIL:bi,LUA_TNONE:FU,LUA_TNUMBER:MU,LUA_TSTRING:Si,LUA_TTABLE:Yr,LUA_VERSION:BU,LUA_YIELD:DU,lua_call:lf,lua_callk:GU,lua_concat:qU,lua_error:xi,lua_getglobal:HU,lua_geti:LU,lua_getmetatable:jU,lua_gettop:Ws,lua_insert:nA,lua_isnil:XU,lua_isnone:sA,lua_isstring:zU,lua_load:WU,lua_next:ZU,lua_pcallk:rA,lua_pop:cf,lua_pushboolean:$r,lua_pushcfunction:oA,lua_pushglobaltable:JU,lua_pushinteger:nn,lua_pushliteral:aA,lua_pushnil:xa,lua_pushnumber:YU,lua_pushstring:sf,lua_pushvalue:Gt,lua_rawequal:$U,lua_rawget:QU,lua_rawlen:eK,lua_rawset:tK,lua_remove:nK,lua_replace:sK,lua_rotate:rK,lua_setfield:$x,lua_setmetatable:oK,lua_settop:wn,lua_setupvalue:aK,lua_stringtonumber:lK,lua_toboolean:iK,lua_tolstring:cK,lua_tostring:ba,lua_type:zs,lua_typename:uK}=Le(),{luaL_argcheck:Aa,luaL_checkany:Pt,luaL_checkinteger:uf,luaL_checkoption:pK,luaL_checkstack:fK,luaL_checktype:Zs,luaL_callmeta:dK,luaL_error:pf,luaL_getmetafield:ff,luaL_loadbufferx:hK,luaL_loadfile:gK,luaL_loadfilex:mK,luaL_optinteger:lA,luaL_optstring:Jr,luaL_setfuncs:_K,luaL_tolstring:bK,luaL_where:xK}=gt(),{to_jsstring:iA,to_luastring:mt}=it(),ma=Ct(),Qx=$e(),_a,_i;if(typeof process>"u")if(typeof TextDecoder=="function"){let e="",t=new TextDecoder("utf-8");_a=function(s){e+=t.decode(s,{stream:!0})};let n=new Uint8Array(0);_i=function(){e+=t.decode(n),console.log(e),e=""}}else{let e=[];_a=function(t){try{t=iA(t)}catch{let s=new Uint8Array(t.length);s.set(t),t=s}e.push(t)},_i=function(){console.log.apply(console.log,e),e=[]}}else _a=function(e){process.stdout.write(Buffer.from(e))},_i=function(){process.stdout.write(`
`)};var AK=function(e){let t=Ws(e);HU(e,mt("tostring",!0));for(let n=1;n<=t;n++){Gt(e,-1),Gt(e,n),lf(e,1,1);let s=cK(e,-1);if(s===null)return pf(e,mt("'tostring' must return a string to 'print'"));n>1&&_a(mt("	")),_a(s),cf(e,1)}return _i(),0},SK=function(e){return Pt(e,1),dK(e,1,mt("__tostring",!0))||bK(e,1),1},kK=function(e){return Pt(e,1),jU(e,1)?(ff(e,1,mt("__metatable",!0)),1):(xa(e),1)},EK=function(e){let t=zs(e,2);return Zs(e,1,Yr),Aa(e,t===bi||t===Yr,2,"nil or table expected"),ff(e,1,mt("__metatable",!0))!==bi?pf(e,mt("cannot change a protected metatable")):(wn(e,2),oK(e,1),1)},vK=function(e){return Pt(e,1),Pt(e,2),$r(e,$U(e,1,2)),1},TK=function(e){let t=zs(e,1);return Aa(e,t===Yr||t===Si,1,"table or string expected"),nn(e,eK(e,1)),1},RK=function(e){return Zs(e,1,Yr),Pt(e,2),wn(e,2),QU(e,1),1},yK=function(e){return Zs(e,1,Yr),Pt(e,2),Pt(e,3),wn(e,3),tK(e,1),1},gi=!0,mi=typeof globalThis<"u"&&typeof globalThis.gc=="function"?globalThis.gc.bind(globalThis):null,NK=["stop","restart","collect","count","countb","step","setpause","setstepmul","isrunning"].map(e=>mt(e)),OK=function(e){switch(pK(e,1,"collect",NK)){case 0:return gi=!1,ma.luaH_setrunning(!1),0;case 1:return gi=!0,ma.luaH_setrunning(!0),0;case 2:let n=ma.luaH_collectgarbage(e);return n?(n.ttisstring()?Qx.pushobj2s(e,n):sf(e,mt("error in __gc",!0)),xi(e)):(mi&&mi(),nn(e,0),1);case 3:return YU(e,mi?ma.luaH_memory():0),1;case 4:return nn(e,0),1;case 5:let s=lA(e,2,0);if(!gi&&s>0){let r=ma.luaH_collectgarbage(e);if(r)return r.ttisstring()?Qx.pushobj2s(e,r):sf(e,mt("error in __gc",!0)),xi(e)}return $r(e,1),1;case 6:return nn(e,0),1;case 7:return nn(e,0),1;case 8:return $r(e,gi),1;default:return 0}},wK=function(e){let t=zs(e,1);return Aa(e,t!==FU,1,"value expected"),sf(e,uK(e,t)),1},CK=function(e,t,n,s){return Pt(e,1),ff(e,1,t)===bi?(oA(e,s),Gt(e,1),n?nn(e,0):xa(e)):(Gt(e,1),lf(e,1,3)),3},cA=function(e){return Zs(e,1,Yr),wn(e,2),ZU(e,1)?2:(xa(e),1)},IK=function(e){return CK(e,mt("__pairs",!0),0,cA)},VK=function(e){let t=uf(e,2)+1;return nn(e,t),LU(e,1,t)===bi?1:2},PK=function(e){return Pt(e,1),oA(e,VK),Gt(e,1),nn(e,0),3},UK=function(e,t){try{e=iA(e)}catch{return null}let n=/^[\t\v\f \n\r]*([+-]?)([0-9A-Za-z]+)[\t\v\f \n\r]*$/.exec(e);if(!n)return null;let s=BigInt(t),r=0n;for(let o=0;o<n[2].length;o++){let a=n[2].charCodeAt(o),l=a>=48&&a<=57?a-48:a>=65&&a<=90?a-65+10:a-97+10;if(l>=Number(s))return null;r=r*s+BigInt(l)}return BigInt.asIntN(64,n[1]==="-"?-r:r)},KK=function(e){if(zs(e,2)<=0){if(Pt(e,1),zs(e,1)===MU)return wn(e,1),1;{let t=ba(e,1);if(t!==null&&lK(e,t)===t.length+1)return 1}}else{let t=uf(e,2);Zs(e,1,Si);let n=ba(e,1);Aa(e,2<=t&&t<=36,2,"base out of range");let s=UK(n,t);if(s!==null)return nn(e,s),1}return xa(e),1},uA=function(e){let t=lA(e,2,1);return wn(e,1),zs(e,1)===Si&&t>0&&(xK(e,t),Gt(e,1),qU(e,2)),xi(e)},FK=function(e){return iK(e,1)?Ws(e):(Pt(e,1),nK(e,1),aA(e,"assertion failed!"),wn(e,1),uA(e))},MK=function(e){let t=Ws(e);if(zs(e,1)===Si&&ba(e,1)[0]===35)return nn(e,t-1),1;{let n=uf(e,1);return n<0?n=t+n:n>t&&(n=t),Aa(e,1<=n,1,"index out of range"),t-n}},Ai=function(e,t,n){return t!==af&&t!==DU?($r(e,0),Gt(e,-2),2):Ws(e)-n},BK=function(e){Pt(e,1),$r(e,1),nA(e,1);let t=rA(e,Ws(e)-2,of,0,0,Ai);return Ai(e,t,0)},DK=function(e){let t=Ws(e);Zs(e,2,tA),$r(e,1),Gt(e,1),rK(e,3,2);let n=rA(e,t-2,of,2,2,Ai);return Ai(e,n,2)},pA=function(e,t,n){return t===af?(n!==0&&(Gt(e,n),aK(e,-2,1)||cf(e,1)),1):(xa(e),nA(e,-2),2)},rf=5,GK=function(e,t){return fK(e,2,"too many nested functions"),Gt(e,1),lf(e,0,1),XU(e,-1)?(cf(e,1),null):(zU(e,-1)||pf(e,mt("reader function must return a string")),sK(e,rf),ba(e,rf))},qK=function(e){let t=ba(e,1),n=Jr(e,3,"bt"),s=sA(e,4)?0:4,r;if(t!==null){let o=Jr(e,2,t);r=hK(e,t,t.length,o,n)}else{let o=Jr(e,2,"=(load)");Zs(e,1,tA),wn(e,rf),r=WU(e,GK,null,o,n)}return pA(e,r,s)},HK=function(e){let t=Jr(e,1,null),n=Jr(e,2,null),s=sA(e,3)?0:3,r=mK(e,t,n);return pA(e,r,s)},eA=function(e,t,n){return Ws(e)-1},LK=function(e){let t=Jr(e,1,null);return wn(e,1),gK(e,t)!==af?xi(e):(GU(e,0,of,0,eA),eA(e,0,0))},jK={assert:FK,collectgarbage:OK,dofile:LK,error:uA,getmetatable:kK,ipairs:PK,load:qK,loadfile:HK,next:cA,pairs:IK,pcall:BK,print:AK,rawequal:vK,rawget:RK,rawlen:TK,rawset:yK,select:MK,setmetatable:EK,tonumber:KK,tostring:SK,type:wK,xpcall:DK},XK=function(e){return JU(e),_K(e,jK,0),Gt(e,-1),$x(e,-2,mt("_G")),aA(e,BU),$x(e,-2,mt("_VERSION")),1};fA.exports.luaopen_base=XK});var mf=K((kH,AA)=>{"use strict";var{LUA_OK:hf,LUA_TFUNCTION:zK,LUA_TSTRING:WK,LUA_YIELD:hA,lua_Debug:ZK,lua_checkstack:dA,lua_concat:JK,lua_error:YK,lua_getstack:$K,lua_gettop:Qr,lua_insert:gf,lua_isyieldable:QK,lua_newthread:e2,lua_pop:t2,lua_pushboolean:Ei,lua_pushcclosure:n2,lua_pushliteral:Cn,lua_pushthread:s2,lua_pushvalue:r2,lua_resume:o2,lua_status:gA,lua_tothread:mA,lua_type:a2,lua_upvalueindex:l2,lua_xmove:ki,lua_yield:i2}=Le(),{luaL_argcheck:c2,luaL_checktype:u2,luaL_newlib:p2,luaL_where:f2}=gt(),_A=e=>{let t=mA(e,1);return c2(e,t,1,"thread expected"),t},bA=(e,t,n)=>{if(!dA(t,n))return Cn(e,"too many arguments to resume"),-1;if(gA(t)===hf&&Qr(t)===0)return Cn(e,"cannot resume dead coroutine"),-1;ki(e,t,n);let s=o2(t,e,n);if(s===hf||s===hA){let r=Qr(t);return dA(e,r+1)?(ki(t,e,r),r):(t2(t,r),Cn(e,"too many results to resume"),-1)}else return ki(t,e,1),-1},d2=e=>{let t=_A(e),n=bA(e,t,Qr(e)-1);return n<0?(Ei(e,0),gf(e,-2),2):(Ei(e,1),gf(e,-(n+1)),n+1)},h2=e=>{let t=mA(e,l2(1)),n=bA(e,t,Qr(e));return n<0?(a2(e,-1)===WK&&(f2(e,1),gf(e,-2),JK(e,2)),YK(e)):n},xA=e=>{u2(e,1,zK);let t=e2(e);return r2(e,1),ki(e,t,1),1},g2=e=>(xA(e),n2(e,h2,1),1),m2=e=>i2(e,Qr(e)),_2=e=>{let t=_A(e);if(e===t)Cn(e,"running");else switch(gA(t)){case hA:Cn(e,"suspended");break;case hf:{let n=new ZK;$K(t,0,n)>0?Cn(e,"normal"):Qr(t)===0?Cn(e,"dead"):Cn(e,"suspended");break}default:Cn(e,"dead");break}return 1},b2=e=>(Ei(e,QK(e)),1),x2=e=>(Ei(e,s2(e)),2),A2={create:xA,isyieldable:b2,resume:d2,running:x2,status:_2,wrap:g2,yield:m2},S2=e=>(p2(e,A2),1);AA.exports.luaopen_coroutine=S2});var Nf=K((EH,UA)=>{"use strict";var{LUA_MAXINTEGER:bf}=lt(),Ze=at(),{LUA_OPEQ:k2,LUA_OPLT:E2,LUA_TFUNCTION:v2,LUA_TNIL:xf,LUA_TTABLE:Af,lua_call:T2,lua_checkstack:R2,lua_compare:vA,lua_createtable:y2,lua_geti:Vn,lua_getmetatable:TA,lua_gettop:Tf,lua_insert:N2,lua_isnil:RA,lua_isnoneornil:yA,lua_isstring:O2,lua_pop:sn,lua_pushinteger:w2,lua_pushnil:C2,lua_pushstring:Sf,lua_pushvalue:Sa,lua_rawget:kf,lua_rawgeti:NA,lua_rawseti:vi,lua_setfield:I2,lua_seti:Pn,lua_settop:OA,lua_toboolean:V2,lua_type:wA}=Le(),{luaL_Buffer:P2,luaL_addlstring:U2,luaL_addvalue:K2,luaL_argcheck:no,luaL_buffinit:F2,luaL_checkinteger:ka,luaL_checktype:CA,luaL_error:so,luaL_len:IA,luaL_newlib:M2,luaL_opt:B2,luaL_optinteger:Ti,luaL_optlstring:D2,luaL_pushresult:G2,luaL_typename:q2}=gt(),H2=ps(),L2=$e(),SA=Ct(),{OpCodesI:eo}=$n(),{to_luastring:qt}=it(),Ri=1,Rf=2,VA=4,yf=Ri|Rf,_f=function(e,t,n){return Sf(e,t),kf(e,-n)!==xf},Ef=function(e,t,n){if(wA(e,t)!==Af){let s=1;TA(e,t)&&(!(n&Ri)||_f(e,qt("__index",!0),++s))&&(!(n&Rf)||_f(e,qt("__newindex",!0),++s))&&(!(n&VA)||_f(e,qt("__len",!0),++s))?sn(e,s):CA(e,t,Af)}},yi=function(e,t,n){return Ef(e,t,n|VA),IA(e,t)},PA=function(e,t){if(wA(e,t)!==Af)return!1;let n=Tf(e),s=!0;return TA(e,t)&&(Sf(e,qt("__index",!0)),kf(e,-2)!==xf&&(s=!1),sn(e,1),Sf(e,qt("__newindex",!0)),kf(e,-2)!==xf&&(s=!1),sn(e,1)),OA(e,n),s},kA=function(e,t,n){Vn(e,1,n),O2(e,-1)||so(e,qt("invalid value (%s) at index %d in table for 'concat'"),q2(e,-1),n),K2(t)},j2=function(e){let t=PA(e,1),n=yi(e,1,yf)+1,s;switch(Tf(e)){case 2:s=n;break;case 3:{s=ka(e,2),no(e,1<=s&&s<=n,2,"position out of bounds");for(let r=n;r>s;r--)t?NA(e,1,r-1):Vn(e,1,r-1),t?vi(e,1,r):Pn(e,1,r);break}default:return so(e,"wrong number of arguments to 'insert'")}return t?vi(e,1,s):Pn(e,1,s),0},X2=function(e){let t=yi(e,1,yf),n=Ti(e,2,t);for(n!==t&&no(e,1<=n&&n<=t+1,1,"position out of bounds"),Vn(e,1,n);n<t;n++)Vn(e,1,n+1),Pn(e,1,n);return C2(e),Pn(e,1,n),1},z2=function(e){let t=ka(e,2),n=ka(e,3),s=ka(e,4),r=yA(e,5)?1:5;if(Ef(e,1,Ri),Ef(e,r,Rf),no(e,Ze.lt(0,t),2,"must be positive"),n>=t){no(e,Ze.lt(0,t)||Ze.lt(n,Ze.add(bf,t)),3,"too many elements to move");let o=Ze.sub(Ze.add(n,1),t);if(no(e,Ze.le(s,Ze.add(Ze.sub(bf,o),1)),4,"destination wrap around"),s>n||s<=t||r!==1&&vA(e,1,r,k2)!==1)for(let a=0;a<o;a++)Vn(e,1,Ze.add(t,a)),Pn(e,r,Ze.add(s,a));else for(let a=o-1;a>=0;a--)Vn(e,1,t+a),Pn(e,r,s+a)}return Sa(e,r),1},W2=function(e){let t=yi(e,1,Ri),n=D2(e,2,""),s=n.length,r=Ti(e,3,1);t=Ti(e,4,t);let o=new P2;for(F2(e,o);r<t;r++)kA(e,o,r),U2(o,n,s);return r===t&&kA(e,o,r),G2(o),1},Z2=function(e){let t=Tf(e);y2(e,t,1),N2(e,1);for(let n=t;n>=1;n--)Pn(e,1,n);return w2(e,t),I2(e,1,qt("n")),1},J2=function(e){let t=BigInt(Ti(e,2,1)),n=BigInt(B2(e,ka,3,IA(e,1)));if(t>n)return 0;let s=n-t;if(s>=BigInt(Number.MAX_SAFE_INTEGER))return so(e,qt("too many results to unpack"));let r=Number(s+1n);if(!R2(e,r))return so(e,qt("too many results to unpack"));for(;t<n;t++)Vn(e,1,Ze.normalize(t));return Vn(e,1,Ze.normalize(n)),r},Y2=function(){return Math.floor(Math.random()*4294967296)},$2=100,In=function(e,t,n){return t?NA(e,1,n):Vn(e,1,n)},to=function(e,t,n,s){s?(vi(e,1,t),vi(e,1,n)):(Pn(e,1,t),Pn(e,1,n))},Ea=function(e,t,n){if(RA(e,2))return vA(e,t,n,E2);{Sa(e,2),Sa(e,t-1),Sa(e,n-2),T2(e,2,1);let s=V2(e,-1);return sn(e,1),s}},Q2=function(e,t,n,s){let r=t,o=n-1;for(;;){for(;In(e,s,++r),Ea(e,-1,-2);)r==n-1&&so(e,qt("invalid order function for sorting")),sn(e,1);for(;In(e,s,--o),Ea(e,-3,-1);)o<r&&so(e,qt("invalid order function for sorting")),sn(e,1);if(o<r)return sn(e,1),to(e,n-1,r,s),r;to(e,r,o,s)}},eF=function(e,t,n){let s=Math.floor((t-e)/4),r=n%(s*2)+(e+s);return H2.lua_assert(e+s<=r&&r<=t-s),r},vf=function(e,t,n,s,r){for(;t<n;){if(In(e,r,t),In(e,r,n),Ea(e,-1,-2)?to(e,t,n,r):sn(e,2),n-t==1)return;let o;if(n-t<$2||s===0?o=Math.floor((t+n)/2):o=eF(t,n,s),In(e,r,o),In(e,r,t),Ea(e,-2,-1)?to(e,o,t,r):(sn(e,1),In(e,r,n),Ea(e,-1,-2)?to(e,o,n,r):sn(e,2)),n-t==2)return;In(e,r,o),Sa(e,-1),In(e,r,n-1),to(e,o,n-1,r),o=Q2(e,t,n,r);let a;o-t<n-o?(vf(e,t,o-1,s,r),a=o-t,t=o+1):(vf(e,o+1,n,s,r),a=n-o,n=o-1),(n-t)/128>a&&(s=Y2())}},tF=function(e){let t=e.ci.funcOff+2,n=e.stack[t];if(!n||!n.ttisLclosure())return!1;let s=n.value,r=s.p;if(!r||s.nupvalues!==0||r.numparams!==2||r.is_vararg||r.code.length!==6)return!1;let o=r.code;return o[0].opcode===eo.OP_LT&&o[0].A===1&&o[0].B===0&&o[0].C===1&&o[1].opcode===eo.OP_JMP&&o[1].sBx===1&&o[2].opcode===eo.OP_LOADBOOL&&o[2].A===2&&o[2].B===0&&o[2].C===1&&o[3].opcode===eo.OP_LOADBOOL&&o[3].A===2&&o[3].B===1&&o[3].C===0&&o[4].opcode===eo.OP_RETURN&&o[4].A===2&&o[4].B===2&&o[5].opcode===eo.OP_RETURN&&o[5].A===0&&o[5].B===1},EA=function(e,t){return e.ttisinteger()&&t.ttisinteger()?Ze.lt(e.value,t.value):e.ttisfloat()&&t.ttisfloat()?e.value<t.value:e.ttisinteger()?Ze.toFloat(e.value)<t.value:e.value<Ze.toFloat(t.value)},nF=function(e,t,n){if(!n||typeof t!="number"||!Number.isSafeInteger(t))return!1;let s=e.stack[e.ci.funcOff+1];if(!s||!s.ttistable())return!1;let r=s.value,o=new Array(t);for(let a=1;a<=t;a++){let l=SA.luaH_getint(r,a);if(!l||!l.ttisnumber())return!1;o[a-1]=new L2.TValue(l.type,l.value)}o.sort((a,l)=>EA(a,l)?-1:EA(l,a)?1:0);for(let a=1;a<=t;a++)SA.luaH_setint(r,a,o[a-1]);return!0},sF=function(e){let t=PA(e,1),n=yi(e,1,yf);if(n>1){if(no(e,n<bf,1,"array too big"),yA(e,2)||CA(e,2,v2),OA(e,2),(RA(e,2)||tF(e))&&t&&nF(e,n,!0))return 0;vf(e,1,n,0,t)}return 0},rF={concat:W2,insert:j2,move:z2,pack:Z2,remove:X2,sort:sF,unpack:J2},oF=function(e){return M2(e,rF),1};UA.exports.luaopen_table=oF});var Hf=K((RH,QA)=>{"use strict";var st=(pa(),ja(ua)),{LUA_REGISTRYINDEX:Js,LUA_TNUMBER:FA,lua_getfield:Ci,lua_gettop:ro,lua_insert:aF,lua_isinteger:lF,lua_isnone:iF,lua_isnoneornil:Vf,lua_newuserdata:cF,lua_pop:oo,lua_pushcclosure:MA,lua_pushinteger:uF,lua_pushlightuserdata:BA,lua_pushliteral:Ni,lua_pushlstring:Of,lua_pushnil:Un,lua_pushnumber:vH,lua_pushstring:Pf,lua_pushvalue:Ii,lua_remove:KA,lua_setfield:va,lua_settop:DA,lua_tointeger:pF,lua_tonumber:fF,lua_tostring:dF,lua_type:GA,lua_touserdata:Oi,lua_upvalueindex:hF}=Le(),{LUA_FILEHANDLE:Ys,luaL_argcheck:qA,luaL_checkany:gF,luaL_checkinteger:TH,luaL_checklstring:Ta,luaL_checkoption:HA,luaL_checkudata:LA,luaL_error:Be,luaL_fileresult:_t,luaL_newlib:mF,luaL_newmetatable:_F,luaL_optinteger:jA,luaL_setfuncs:bF,luaL_setmetatable:xF,luaL_testudata:Uf}=gt(),AF=ps(),{to_jsstring:Cf,to_luastring:H}=it(),XA=at(),Kf="_IO_",SF=Kf.length,Vi=H(Kf+"input"),Ra=H(Kf+"output"),rn=function(e){return LA(e,1,Ys)},bt=function(e){return e.closef===null},kF=function(e){gF(e,1);let t=Uf(e,1,Ys);return t===null?Un(e):bt(t)?Ni(e,"closed file"):Ni(e,"file"),1},EF=function(e){let t=rn(e);return bt(t)?Ni(e,"file (closed)"):Pf(e,H(`file (${t.f.toString()})`)),1},zA=function(e){let t=rn(e);return bt(t)&&Be(e,H("attempt to use a closed file")),AF.lua_assert(t.f),t.f},Ff=function(e){let t=cF(e);return t.f=null,t.closef=null,xF(e,Ys),t},Mf=function(e){if(!e||e.closef===null)return!1;let t=e.f;try{t&&$s(t),t&&typeof t.fd=="number"&&t.fd>=0&&st.closeSync(t.fd)}finally{if(t&&t.temporary&&t.path){try{st.unlinkSync(t.path)}catch{}if(t.directory)try{st.rmdirSync(t.directory)}catch{}}e.closef=null,e.f=null}return!0},Pi=function(e){let t=rn(e);return bt(t)?Be(e,H("file is already closed")):t.closef===wi?wi(e):(Mf(t),_t(e,!0,null,null))},vF=function(e){let t=rn(e);return bt(t)||Mf(t),0},$s=function(e){if(!e||!e.buffer||e.buffer.length===0)return!0;let t=Buffer.concat(e.buffer),n=e.append?null:e.positionable?e.position:null,s=st.writeSync(e.fd,t,0,t.length,n);if(s!==t.length)throw new Error("short write");return e.positionable&&(e.append?e.position=st.fstatSync(e.fd).size:e.position+=s),e.buffer=[],e.bufferLength=0,!0},TF=function(e,t){if(!e.bufferMode||e.bufferMode==="no"){let n=e.append?null:e.positionable?e.position:null,s=st.writeSync(e.fd,t,0,t.length,n);return e.positionable&&(e.append?e.position=st.fstatSync(e.fd).size:e.position+=s),s===t.length}return e.buffer.push(Buffer.from(t)),e.bufferLength+=t.length,(e.bufferMode==="line"&&t.includes(10)||e.bufferMode==="full"&&e.bufferLength>=e.bufferSize)&&$s(e),!0},RF=function(e){let t=e[0],n=e.indexOf("+")>=0;return t==="r"?n?"r+":"r":t==="w"?n?"w+":"w":n?"a+":"a"},yF=function(e,t,n){let s=/^[rwa]\+?b*$/.test(t);qA(e,s,n,H("invalid mode",!0))},Bf=function(e){let t=Ta(e,1),n=Vf(e,2)?H("r",!0):Ta(e,2),s=Cf(n);yF(e,s,2);let r=Ff(e);try{let o=st.openSync(Cf(t),RF(s)),a=st.fstatSync(o);return r.f={fd:o,position:s[0]==="a"?a.size:0,positionable:!0,append:s[0]==="a",bufferMode:"no",bufferSize:8192,buffer:[],bufferLength:0},r.closef=Pi,1}catch(o){return r.closef=null,r.f=null,_t(e,!1,t,o)}},Df=function(e,t){if(t<=0)return new Uint8Array(0);let n=Buffer.alloc(t),s=0;for(;s<t;){let r=st.readSync(e.fd,n,s,t-s,e.positionable?e.position:null);if(r===0)break;s+=r,e.positionable&&(e.position+=r)}return new Uint8Array(n.buffer,n.byteOffset,s)},If=function(e){if(e.positionable){let o=st.fstatSync(e.fd).size,a=Math.max(0,o-e.position),l=e.position,i=Df(e,a);return e.position=l,i}let t=[];for(;;){let o=Buffer.alloc(4096),a=st.readSync(e.fd,o,0,o.length,null);if(a===0)break;t.push(new Uint8Array(o.buffer,o.byteOffset,a))}let n=0;for(let o of t)n+=o.length;let s=new Uint8Array(n),r=0;for(let o of t)s.set(o,r),r+=o.length;return s},NF=function(e,t){let n=[];for(;;){let s=Df(e,1);if(s.length===0||(n.push(s[0]),s[0]===10))break}return n.length===0?null:(!t&&n[n.length-1]===10&&n.pop(),!t&&n.length&&n[n.length-1]===13&&n.pop(),Uint8Array.from(n))},OF=function(e){let t=0;for(;t<e.length&&`	\v\f 
\r`.indexOf(e[t])>=0;)t++;(e[t]==="+"||e[t]==="-")&&t++;let n=0,s=!1;e[t]==="0"&&(t++,n=1,(e[t]==="x"||e[t]==="X")&&(t++,s=!0,n=0));let r=a=>s?/^[0-9A-Fa-f]$/.test(a):/^[0-9]$/.test(a);for(;t<e.length&&r(e[t]);)t++,n++;if(e[t]===".")for(t++;t<e.length&&r(e[t]);)t++,n++;let o=s?e[t]==="p"||e[t]==="P":e[t]==="e"||e[t]==="E";if(n>0&&o)for(t++,(e[t]==="+"||e[t]==="-")&&t++;t<e.length&&/^[0-9]$/.test(e[t]);)t++;return t},wF=function(e,t){let n=If(t),s=Buffer.from(n).toString("utf8"),o=/^[\t\v\f \n\r]*([+-]?(?:0[xX](?:[0-9A-Fa-f]+(?:\.[0-9A-Fa-f]*)?|\.[0-9A-Fa-f]+)(?:[pP][+-]?\d*)?|(?!0[xX])(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d*)?))/.exec(s);if(!o){let u=OF(s);return t.positionable&&(t.position+=u),Un(e),!1}let a=Buffer.byteLength(o[0]);if(a>200)return t.positionable&&(t.position+=200),Un(e),!1;t.positionable&&(t.position+=a);let l=H(o[1],!0),i=Le().lua_stringtonumber(e,l);return i===0||!Number.isFinite(fF(e,-1))?(i!==0&&oo(e,1),Un(e),!1):!0},WA=function(e,t,n){if(typeof n=="string"&&(n=n[0]),typeof n=="number"){n<0&&Be(e,H("invalid format",!0));let s=Df(t,n);return Of(e,s,s.length),s.length>0||n===0&&If(t).length>0}if(n==="l"||n==="L"){let s=NF(t,n==="L");return s===null?(Un(e),!1):(Of(e,s,s.length),!0)}if(n==="a"){let s=If(t);return t.positionable&&(t.position+=s.length),Of(e,s,s.length),!0}return n==="n"?wF(e,t):(Be(e,H("invalid format",!0)),!1)},Gf=function(e,t){let n=[];for(let s=t;s<=ro(e);s++)if(GA(e,s)===FA&&lF(e,s))n.push(Number(pF(e,s)));else{let r=Ta(e,s),o=Cf(r);o[0]==="*"?n.push(o.slice(1)):n.push(o)}return n.length===0&&n.push("l"),n},ZA=function(e,t,n){if(!t||typeof t.fd!="number")return Be(e,H("attempt to use a closed file",!0));let s=Gf(e,n),r=ro(e),o=0;for(let a of s){let l;try{l=WA(e,t,a)}catch(i){if(!(i instanceof Error))throw i;return _t(e,!1,null,i)}if(o++,!l){if(o===1)return DA(e,r),0;oo(e,1),Un(e);break}}return o===0?(Un(e),1):ro(e)-r},CF=function(e){let t=rn(e);return bt(t)?Be(e,H("file is already closed",!0)):ZA(e,t.f,2)},IF=function(e){let t=rn(e);if(bt(t))return Be(e,H("file is already closed",!0));let n=[H("set",!0),H("cur",!0),H("end",!0),null],s=HA(e,2,"cur",n),r=XA.toBigInt(jA(e,3,0));if(!t.f.positionable)return _t(e,!1,null,new Error("Illegal seek"));try{$s(t.f)}catch(a){return _t(e,!1,null,a)}let o;return s===0?o=r:s===1?o=BigInt(t.f.position)+r:o=BigInt(st.fstatSync(t.f.fd).size)+r,o<0n||o>BigInt(Number.MAX_SAFE_INTEGER)?_t(e,!1,null,new Error("Invalid argument")):(t.f.position=Number(o),uF(e,t.f.position),1)},VF=function(e){let t=rn(e);if(bt(t))return Be(e,H("file is already closed",!0));let n={p:t,formats:Gf(e,2),closeOnEnd:!1};return BA(e,n),MA(e,JA,1),1},JA=function(e){let t=Oi(e,hF(1));if(!t||!t.p||bt(t.p))return Be(e,H("file is already closed",!0));let n=ro(e),s=0;for(let r of t.formats){let o;try{o=WA(e,t.p.f,r)}catch(a){if(!(a instanceof Error))throw a;return Be(e,H("%s",!0),H(a.message,!0))}if(s++,!o){if(s===1)return DA(e,n),t.closeOnEnd&&Mf(t.p),0;oo(e,1),Un(e);break}}return ro(e)-n},PF=function(e){let t,n=!1;if(Vf(e,1))Ci(e,Js,Vi),t=Oi(e,-1),oo(e,1);else if(GA(e,1)===FA||Uf(e,1,Ys))t=LA(e,1,Ys);else{let r=Ta(e,1);Pf(e,H("r",!0)),aF(e,2);let o=Bf(e);if(KA(e,2),o!==1)return Be(e,H("cannot open file"));t=Oi(e,-1),n=!0,KA(e,-1)}if(!t||bt(t))return Be(e,H("file is already closed"));let s={p:t,formats:Gf(e,2),closeOnEnd:n};return BA(e,s),MA(e,JA,1),1},UF=function(e){iF(e,1)&&Ci(e,Js,Ra);let t=Uf(e,1,Ys);return t&&bt(t)?Be(e,H("attempt to use a closed file",!0)):Pi(e)},qf=function(e,t){Ci(e,Js,t);let n=Oi(e,-1);return bt(n)&&Be(e,H("standard %s file is closed"),t.subarray(SF)),n.f},YA=function(e,t,n){if(!Vf(e,1)){let s=dF(e,1);if(s){if(Pf(e,H(n,!0)),Bf(e)!==1)return Be(e,H("cannot open file '%s'"),s);va(e,Js,t)}else zA(e),Ii(e,1),va(e,Js,t)}return Ci(e,Js,t),1},KF=function(e){return YA(e,Vi,"r")},FF=function(e){return YA(e,Ra,"w")},MF=function(e){let t=qf(e,Vi);return oo(e,1),ZA(e,t,1)},BF=typeof process<"u"&&process.versions.node>6?e=>e:e=>typeof Buffer<"u"?Buffer.from(e.buffer,e.byteOffset,e.byteLength):e,$A=function(e,t,n){if(!t||typeof t.fd!="number")return Be(e,H("file is already closed",!0));let s=ro(e)-n,r=!0,o;for(;s--;n++){let a=Ta(e,n);try{let l=BF(a),i=Buffer.from(l.buffer,l.byteOffset,l.byteLength);r=r&&TF(t,i)}catch(l){r=!1,o=l}}return r?1:_t(e,r,null,o)},DF=function(e){return $A(e,qf(e,Ra),1)},GF=function(e){let t=zA(e);return Ii(e,1),$A(e,t,2)},qF=function(e){let t=qf(e,Ra);try{$s(t)}catch(n){return _t(e,!1,null,n)}return _t(e,!0,null,null)},HF=function(e){let t=rn(e);if(bt(t))return Be(e,H("file is already closed",!0));try{$s(t.f)}catch(n){return _t(e,!1,null,n)}return _t(e,!0,null,null)},LF=function(e){let t=rn(e);if(bt(t))return Be(e,H("file is already closed",!0));let n=[H("no",!0),H("full",!0),H("line",!0),null],s=HA(e,2,null,n),r=jA(e,3,8192),o=Number(XA.toBigInt(r));qA(e,o>0,3,H("invalid size",!0));try{$s(t.f)}catch(a){return _t(e,!1,null,a)}return t.f.bufferMode=["no","full","line"][s],t.f.bufferSize=o,_t(e,!0,null,null)},jF=function(e){let t;try{t=st.mkdtempSync("/tmp/luanode-");let n=t+"/tmpfile",s=st.openSync(n,"w+"),r=Ff(e);return r.f={fd:s,path:n,directory:t,temporary:!0,position:0,positionable:!0,append:!1,bufferMode:"no",bufferSize:8192,buffer:[],bufferLength:0},r.closef=Pi,1}catch(n){return _t(e,!1,null,n)}},XF={close:UF,flush:qF,input:KF,lines:PF,open:Bf,output:FF,tmpfile:jF,read:MF,type:kF,write:DF},zF={close:Pi,flush:HF,lines:VF,read:CF,seek:IF,setvbuf:LF,write:GF,__gc:vF,__tostring:EF},WF=function(e){_F(e,Ys),Ii(e,-1),va(e,-2,H("__index",!0)),bF(e,zF,0),oo(e,1)},wi=function(e){let t=rn(e);return t.closef=wi,Un(e),Ni(e,"cannot close standard file"),2},wf=function(e,t,n,s){let r=Ff(e);r.f=t,r.closef=wi,n!==null&&(Ii(e,-1),va(e,Js,n)),va(e,-2,s)},ZF=function(e){mF(e,XF),WF(e);let t={fd:-1,write(){return!0},on(){}},n=typeof process<"u"?process.stdin:t,s=typeof process<"u"?process.stdout:t,r=typeof process<"u"?process.stderr:t;return wf(e,n,Vi,H("stdin")),wf(e,s,Ra,H("stdout")),wf(e,r,null,H("stderr")),1};QA.exports.luaopen_io=ZF});var zf=K((yH,dS)=>{"use strict";var{LUA_TNIL:JF,LUA_TTABLE:YF,lua_close:$F,lua_createtable:QF,lua_getfield:eM,lua_isboolean:tM,lua_isnoneornil:aS,lua_pop:nM,lua_pushboolean:lS,lua_pushfstring:sM,lua_pushinteger:iS,lua_pushliteral:rM,lua_pushnil:oM,lua_pushnumber:Lf,lua_pushstring:cS,lua_setfield:uS,lua_settop:aM,lua_toboolean:eS,lua_tointegerx:lM}=Le(),{luaL_Buffer:iM,luaL_addchar:Kn,luaL_addstring:Nt,luaL_argerror:cM,luaL_buffinit:uM,luaL_checkinteger:pM,luaL_checkoption:fM,luaL_checkstring:Ui,luaL_checktype:dM,luaL_error:Ki,luaL_execresult:tS,luaL_fileresult:ya,luaL_newlib:hM,luaL_optinteger:gM,luaL_optlstring:mM,luaL_optstring:pS,luaL_pushresult:_M}=gt(),{luastring_eq:jf,to_jsstring:nS,to_luastring:j}=it(),bM=j("aAbBcCdDeFhHIjklmMnpPrRStTuUwWxXyYzZ%"),fs=function(e,t,n){iS(e,n),uS(e,-2,j(t,!0))},fS=function(e,t,n){fs(e,"sec",n?t.getUTCSeconds():t.getSeconds()),fs(e,"min",n?t.getUTCMinutes():t.getMinutes()),fs(e,"hour",n?t.getUTCHours():t.getHours()),fs(e,"day",n?t.getUTCDate():t.getDate()),fs(e,"month",(n?t.getUTCMonth():t.getMonth())+1),fs(e,"year",n?t.getUTCFullYear():t.getFullYear()),fs(e,"wday",(n?t.getUTCDay():t.getDay())+1),fs(e,"yday",Math.floor((t-(n?new Date(Date.UTC(t.getUTCFullYear(),0,0)):new Date(t.getFullYear(),0,0)))/864e5));let s=n?t.getUTCFullYear():t.getFullYear(),r=new Date(s,0,1).getTimezoneOffset(),o=new Date(s,6,1).getTimezoneOffset(),a=Math.max(r,o);lS(e,!n&&t.getTimezoneOffset()<a),uS(e,-2,j("isdst",!0))},sS=Number.MAX_SAFE_INTEGER/2,ao=function(e,t,n,s){let r=eM(e,-1,j(t,!0)),o=lM(e,-1);if(o===!1){if(r!==JF)return Ki(e,j("field '%s' is not an integer"),t);if(n<0)return Ki(e,j("field '%s' missing in date table"),t);o=n}else{if(!(-sS<=o&&o<=sS))return Ki(e,j("field '%s' is out-of-bound"),t);o-=s}return nM(e,1),o},Je={days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(e=>j(e)),shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(e=>j(e)),months:["January","February","March","April","May","June","July","August","September","October","November","December"].map(e=>j(e)),shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(e=>j(e)),AM:j("AM"),PM:j("PM"),am:j("am"),pm:j("pm"),formats:{c:j("%a %b %e %H:%M:%S %Y"),D:j("%m/%d/%y"),F:j("%Y-%m-%d"),R:j("%H:%M"),r:j("%I:%M:%S %p"),T:j("%H:%M:%S"),X:j("%T"),x:j("%D")}},rS=function(e,t){let n=e.getDay();t==="monday"&&(n===0?n=6:n--);let s=(e-new Date(e.getFullYear(),0,1))/864e5;return Math.floor((s+7-n)/7)},rt=function(e,t,n){t<10&&Kn(e,n),Nt(e,j(String(t)))},Fn=function(e,t,n,s){let r=0;for(;r<n.length;)if(n[r]!==37)Kn(t,n[r++]);else{r++;let o=xM(e,n,r);switch(n[r]){case 37:Kn(t,37);break;case 65:Nt(t,Je.days[s.getDay()]);break;case 66:Nt(t,Je.months[s.getMonth()]);break;case 67:rt(t,Math.floor(s.getFullYear()/100),48);break;case 68:Fn(e,t,Je.formats.D,s);break;case 70:Fn(e,t,Je.formats.F,s);break;case 72:rt(t,s.getHours(),48);break;case 73:rt(t,(s.getHours()+11)%12+1,48);break;case 77:rt(t,s.getMinutes(),48);break;case 80:Nt(t,s.getHours()<12?Je.am:Je.pm);break;case 82:Fn(e,t,Je.formats.R,s);break;case 83:rt(t,s.getSeconds(),48);break;case 84:Fn(e,t,Je.formats.T,s);break;case 85:rt(t,rS(s,"sunday"),48);break;case 87:rt(t,rS(s,"monday"),48);break;case 88:Fn(e,t,Je.formats.X,s);break;case 89:Nt(t,j(String(s.getFullYear())));break;case 90:{let a=s.toString().match(/\(([\w\s]+)\)/);a&&Nt(t,j(a[1]));break}case 97:Nt(t,Je.shortDays[s.getDay()]);break;case 98:case 104:Nt(t,Je.shortMonths[s.getMonth()]);break;case 99:Fn(e,t,Je.formats.c,s);break;case 100:rt(t,s.getDate(),48);break;case 101:rt(t,s.getDate(),32);break;case 106:{let a=Math.floor((s-new Date(s.getFullYear(),0,0))/864e5);a<100&&(a<10&&Kn(t,48),Kn(t,48)),Nt(t,j(String(a)));break}case 107:rt(t,s.getHours(),32);break;case 108:rt(t,(s.getHours()+11)%12+1,32);break;case 109:rt(t,s.getMonth()+1,48);break;case 110:Kn(t,10);break;case 112:Nt(t,s.getHours()<12?Je.AM:Je.PM);break;case 114:Fn(e,t,Je.formats.r,s);break;case 115:Nt(t,j(String(Math.floor(s/1e3))));break;case 116:Kn(t,9);break;case 117:{let a=s.getDay();Nt(t,j(String(a===0?7:a)));break}case 119:Nt(t,j(String(s.getDay())));break;case 120:Fn(e,t,Je.formats.x,s);break;case 121:rt(t,s.getFullYear()%100,48);break;case 122:{let a=s.getTimezoneOffset();a>0?Kn(t,45):(a=-a,Kn(t,43)),rt(t,Math.floor(a/60),48),rt(t,a%60,48);break}}r+=o}},xM=function(e,t,n){let s=bM,r=0,o=1;for(;r<s.length&&o<=t.length-n;r+=o)if(s[r]===124)o++;else if(jf(t.subarray(n,n+o),s.subarray(r,r+o)))return o;cM(e,1,sM(e,j("invalid conversion specifier '%%%s'"),t))},AM=function(e){let t=mM(e,1,"%c"),n=aS(e,2)?new Date:new Date(Xf(e,2)*1e3),s=!1,r=0;if(t[r]===33&&(s=!0,r++),t[r]===42&&t[r+1]===116)QF(e,0,9),fS(e,n,s);else{let o=new iM;uM(e,o),Fn(e,o,t.subarray(r),n),_M(o)}return 1},SM=function(e){let t;return aS(e,1)?t=new Date:(dM(e,1,YF),aM(e,1),t=new Date(ao(e,"year",-1,0),ao(e,"month",-1,1),ao(e,"day",-1,0),ao(e,"hour",12,0),ao(e,"min",0,0),ao(e,"sec",0,0)),fS(e,t)),iS(e,Math.floor(t/1e3)),1},Xf=function(e,t){return pM(e,t)},kM=function(e){let t=Xf(e,1),n=Xf(e,2);return Lf(e,t-n),1},EM=["all","collate","ctype","monetary","numeric","time"].map(e=>j(e)),oS=j("C"),vM=j("POSIX"),TM=function(e){let t=pS(e,1,null);return fM(e,2,"all",EM),cS(e,t===null||t.length==0||jf(t,oS)||jf(t,vM)?oS:null),1},Mn={date:AM,difftime:kM,setlocale:TM,time:SM};if(typeof process>"u")Mn.clock=function(e){return Lf(e,performance.now()/1e3),1};else{let e=(pa(),ja(ua)),t=vs("tmp"),n=vs("child_process");Mn.exit=function(r){let o;return tM(r,1)?o=eS(r,1)?0:1:o=gM(r,1,0),eS(r,2)&&$F(r),r&&process.exit(o),0},Mn.getenv=function(r){let o=Ui(r,1);return o=nS(o),Object.prototype.hasOwnProperty.call(process.env,o)?rM(r,process.env[o]):oM(r),1},Mn.clock=function(r){return Lf(r,process.uptime()),1};let s=function(){return t.tmpNameSync()};Mn.remove=function(r){let o=Ui(r,1);try{e.unlinkSync(o)}catch(a){if(a.code==="EISDIR")try{e.rmdirSync(o)}catch(l){return ya(r,!1,o,l)}else return ya(r,!1,o,a)}return ya(r,!0)},Mn.rename=function(r){let o=Ui(r,1),a=Ui(r,2);try{e.renameSync(o,a)}catch(l){return ya(r,!1,!1,l)}return ya(r,!0)},Mn.tmpname=function(r){let o=s();return o?(cS(r,j(o)),1):Ki(r,j("unable to generate a unique filename"))},Mn.execute=function(r){let o=pS(r,1,null);if(o!==null){o=nS(o);try{n.execSync(o,{stdio:[process.stdin,process.stdout,process.stderr]})}catch(a){return tS(r,a)}return tS(r,null)}else return lS(r,1),1}}var RM=function(e){return hM(e,Mn),1};dS.exports.luaopen_os=RM});var hS=K(Fi=>{(function(){"use strict";var e={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function t(a){return s(o(a),arguments)}function n(a,l){return t.apply(null,[a].concat(l||[]))}function s(a,l){var i=1,u=a.length,c,f="",_,U,g,m,C,T,W,de;for(_=0;_<u;_++)if(typeof a[_]=="string")f+=a[_];else if(typeof a[_]=="object"){if(g=a[_],g.keys)for(c=l[i],U=0;U<g.keys.length;U++){if(c==null)throw new Error(t('[sprintf] Cannot access property "%s" of undefined value "%s"',g.keys[U],g.keys[U-1]));c=c[g.keys[U]]}else g.param_no?c=l[g.param_no]:c=l[i++];if(e.not_type.test(g.type)&&e.not_primitive.test(g.type)&&c instanceof Function&&(c=c()),e.numeric_arg.test(g.type)&&typeof c!="number"&&isNaN(c))throw new TypeError(t("[sprintf] expecting number but found %T",c));switch(e.number.test(g.type)&&(W=c>=0),g.type){case"b":c=parseInt(c,10).toString(2);break;case"c":c=String.fromCharCode(parseInt(c,10));break;case"d":case"i":c=parseInt(c,10);break;case"j":c=JSON.stringify(c,null,g.width?parseInt(g.width):0);break;case"e":c=g.precision?parseFloat(c).toExponential(g.precision):parseFloat(c).toExponential();break;case"f":c=g.precision?parseFloat(c).toFixed(g.precision):parseFloat(c);break;case"g":c=g.precision?String(Number(c.toPrecision(g.precision))):parseFloat(c);break;case"o":c=(parseInt(c,10)>>>0).toString(8);break;case"s":c=String(c),c=g.precision?c.substring(0,g.precision):c;break;case"t":c=String(!!c),c=g.precision?c.substring(0,g.precision):c;break;case"T":c=Object.prototype.toString.call(c).slice(8,-1).toLowerCase(),c=g.precision?c.substring(0,g.precision):c;break;case"u":c=parseInt(c,10)>>>0;break;case"v":c=c.valueOf(),c=g.precision?c.substring(0,g.precision):c;break;case"x":c=(parseInt(c,10)>>>0).toString(16);break;case"X":c=(parseInt(c,10)>>>0).toString(16).toUpperCase();break}e.json.test(g.type)?f+=c:(e.number.test(g.type)&&(!W||g.sign)?(de=W?"+":"-",c=c.toString().replace(e.sign,"")):de="",C=g.pad_char?g.pad_char==="0"?"0":g.pad_char.charAt(1):" ",T=g.width-(de+c).length,m=g.width&&T>0?C.repeat(T):"",f+=g.align?de+c+m:C==="0"?de+m+c:m+de+c)}return f}var r=Object.create(null);function o(a){if(r[a])return r[a];for(var l=a,i,u=[],c=0;l;){if((i=e.text.exec(l))!==null)u.push(i[0]);else if((i=e.modulo.exec(l))!==null)u.push("%");else if((i=e.placeholder.exec(l))!==null){if(i[2]){c|=1;var f=[],_=i[2],U=[];if((U=e.key.exec(_))!==null)for(f.push(U[1]);(_=_.substring(U[0].length))!=="";)if((U=e.key_access.exec(_))!==null)f.push(U[1]);else if((U=e.index_access.exec(_))!==null)f.push(U[1]);else throw new SyntaxError("[sprintf] failed to parse named argument key");else throw new SyntaxError("[sprintf] failed to parse named argument key");i[2]=f}else c|=2;if(c===3)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");u.push({placeholder:i[0],param_no:i[1],keys:i[2],sign:i[3],pad_char:i[4],align:i[5],width:i[6],precision:i[7],type:i[8]})}else throw new SyntaxError("[sprintf] unexpected placeholder");l=l.substring(i[0].length)}return r[a]=u}typeof Fi<"u"&&(Fi.sprintf=t,Fi.vsprintf=n),typeof window<"u"&&(window.sprintf=t,window.vsprintf=n,typeof define=="function"&&define.amd&&define(function(){return{sprintf:t,vsprintf:n}}))})()});var Sd=K((wH,ZS)=>{"use strict";var{sprintf:Di}=hS(),co=at(),yM=function(e){return e.replace(/([eE])([-+]?)(\d+)$/,function(t,n,s,r){return r.length<2&&(r="0"+r),s||(s="+"),n+s+r})},yS=function(e,t){let n=String.fromCharCode(...e),s=n[n.length-1],r=n.slice(1,-1),o=!1,a=!1,l=!1,i=!1,u=!1,c=0,f=-1,_=0;for(;_<r.length&&"-+ 0#".indexOf(r[_])>=0;){switch(r[_]){case"-":o=!0;break;case"+":a=!0;break;case" ":l=!0;break;case"0":i=!0;break;case"#":u=!0;break}_++}let U="";for(;_<r.length&&r[_]>="0"&&r[_]<="9";)U+=r[_],_++;if(U&&(c=parseInt(U,10)),_<r.length&&r[_]==="."){_++;let fn="";for(;_<r.length&&r[_]>="0"&&r[_]<="9";)fn+=r[_],_++;f=fn?parseInt(fn,10):0}let g=!1,m,C=co.toBigInt(t);if(s==="d"||s==="i"?(g=C<0n,m=(g?-C:C).toString(10)):s==="u"?m=BigInt.asUintN(64,C).toString(10):s==="x"||s==="X"?(m=BigInt.asUintN(64,C).toString(16),s==="X"&&(m=m.toUpperCase())):s==="o"?m=BigInt.asUintN(64,C).toString(8):(m=co.toDecimalString(t),g=C<0n),f>=0){if(f===0&&m==="0")m="";else for(;m.length<f;)m="0"+m;i=!1}let T="";u&&(s==="o"?m[0]!=="0"&&(T="0"):s==="x"?m!==""&&m!=="0"&&(T="0x"):s==="X"&&m!==""&&m!=="0"&&(T="0X"));let W="";(s==="d"||s==="i")&&(g?W="-":a?W="+":l&&(W=" "));let de=T+m,pn=W.length+de.length,Es;if(pn>=c)Es=W+de;else if(o)Es=W+de+" ".repeat(c-pn);else if(i)if(T){let fn=c-pn;Es=W+T+"0".repeat(fn)+m}else Es=W+"0".repeat(c-pn)+de;else Es=" ".repeat(c-pn)+W+de;return Es},{LUA_INTEGER_FMT:NM,LUA_INTEGER_FRMLEN:Bi,LUA_MININTEGER:OM,LUA_NUMBER_FMT:wM,LUA_NUMBER_FRMLEN:CM,frexp:IM,lua_getlocaledecpoint:VM}=lt(),{LUA_TBOOLEAN:PM,LUA_TFUNCTION:id,LUA_TNIL:UM,LUA_TNUMBER:NS,LUA_TSTRING:OS,LUA_TTABLE:wS,lua_call:KM,lua_createtable:FM,lua_dump:MM,lua_gettable:BM,lua_gettop:CS,lua_isinteger:DM,lua_isstring:GM,lua_pop:Gi,lua_pushcclosure:qM,lua_pushinteger:Ht,lua_pushlightuserdata:HM,lua_pushliteral:cd,lua_pushlstring:Yf,lua_pushnil:$f,lua_pushnumber:LM,lua_pushstring:er,lua_pushvalue:Qf,lua_remove:jM,lua_setfield:XM,lua_setmetatable:zM,lua_settop:IS,lua_toboolean:ud,lua_tointeger:WM,lua_tonumber:ZM,lua_tostring:VS,lua_touserdata:JM,lua_type:PS,lua_upvalueindex:YM}=Le(),{luaL_Buffer:fo,luaL_addchar:ot,luaL_addlstring:io,luaL_addsize:US,luaL_addstring:lo,luaL_addvalue:Oa,luaL_argcheck:Ut,luaL_argerror:tr,luaL_buffinit:Hi,luaL_buffinitsize:KS,luaL_checkinteger:nr,luaL_checknumber:ed,luaL_checkstack:pd,luaL_checkstring:be,luaL_checktype:$M,luaL_error:ce,luaL_newlib:QM,luaL_optinteger:uo,luaL_optstring:eB,luaL_prepbuffsize:FS,luaL_pushresult:Li,luaL_pushresultsize:MS,luaL_tolstring:fd,luaL_typename:tB}=gt(),BS=ps(),{luastring_eq:DS,luastring_indexOf:gs,to_jsstring:GS,to_luastring:y}=it(),nB="%",an=nB.charCodeAt(0),sB=32,dd=2147483647,rB=function(e){let t=gs(e,0);return t>-1?t:e.length},po=function(e,t){if(typeof e=="bigint"){let n=BigInt(t);return e>=0n?e>BigInt(Number.MAX_SAFE_INTEGER)?Number.MAX_SAFE_INTEGER:Number(e):-e>n?0:t+Number(e)+1}return e>=0?e:0-e>t?0:t+e+1},oB=function(e){let t=be(e,1),n=t.length,s=po(nr(e,2),n),r=po(uo(e,3,-1),n);return s<1&&(s=1),r>n&&(r=n),s<=r?er(e,t.subarray(s-1,s-1+(r-s+1))):cd(e,""),1},aB=function(e){return Ht(e,be(e,1).length),1},lB=function(e){let t=CS(e),n=new fo,s=KS(e,n,t);for(let r=1;r<=t;r++){let o=nr(e,r);Ut(e,o>=0&&o<=255,"value out of range"),s[r-1]=o}return MS(n,t),1},iB=function(e,t,n,s){return io(s,t,n),0},cB=function(e){let t=new fo,n=ud(e,2);return $M(e,1,id),IS(e,1),Hi(e,t),MM(e,iB,t,n)!==0?ce(e,y("unable to dump given function")):(Li(t),1)},OH=CM.length+1,gS=1,uB=function(e){if(Object.is(e,1/0))return y("inf");if(Object.is(e,-1/0))return y("-inf");if(Number.isNaN(e))return y("nan");if(e===0){let t=Di(wM+"x0p+0",e);return Object.is(e,-0)&&(t="-"+t),y(t)}else{let t="",n=IM(e),s=n[0],r=n[1];return s<0&&(t+="-",s=-s),t+="0x",t+=(s*(1<<gS)).toString(16),r-=gS,t+=Di("p%+d",r),y(t)}},qS=function(e,t,n){let s=t[t.length-1];s!==97&&s!==65&&ce(e,y("modifiers for format '%%a'/'%%A' not implemented"));let r=GS(uB(n)),o=String.fromCharCode(...t).match(/\.([0-9]+)/);if(o&&Number.isFinite(n)){let a=Number(o[1]),l=r.search(/[pP]/);if(l>=0){let i=r.slice(0,l),u=r.slice(l),c=i.indexOf("."),f=c>=0?i.slice(0,c):i,_=c>=0?i.slice(c+1):"";r=f+"."+(_+"0".repeat(a)).slice(0,a)+u}}return s===65&&(r=r.toUpperCase()),y(r)},mS=y("-+ #0"),_S=e=>97<=e&&e<=122||65<=e&&e<=90,on=e=>48<=e&&e<=57,td=e=>0<=e&&e<=31||e===127,nd=e=>33<=e&&e<=126,sd=e=>97<=e&&e<=122,rd=e=>65<=e&&e<=90,od=e=>97<=e&&e<=122||65<=e&&e<=90||48<=e&&e<=57,bS=e=>nd(e)&&!od(e),xS=e=>e===32||e>=9&&e<=13,AS=e=>48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102,pB=function(e,t,n){ot(e,34);let s=0;for(;n--;){if(t[s]===34||t[s]===92||t[s]===10)ot(e,92),ot(e,t[s]);else if(td(t[s])){let r=""+t[s];on(t[s+1])&&(r=("000"+r).slice(-3)),lo(e,y("\\"+r))}else ot(e,t[s]);s++}ot(e,34)},fB=function(e){if(gs(e,46)<0){let t=VM(),n=gs(e,t);n&&(e[n]=46)}},dB=function(e,t,n){switch(PS(e,n)){case OS:{let s=VS(e,n);pB(t,s,s.length);break}case NS:{let s;if(DM(e,n)){let r=WM(e,n);if(co.eq(r,OM)){let o=BigInt.asUintN(64,co.toBigInt(r));s=y("0x"+o.toString(16))}else{let o=y(NM,!0);s=y(yS(o,r))}}else{let r=ZM(e,n);s=qS(e,y(`%${Bi}a`),r),fB(s)}lo(t,s);break}case UM:case PM:{fd(e,n),Oa(t);break}default:tr(e,n,y("value has no literal form"))}},hB=function(e,t,n,s){let r=n;for(;t[r]!==0&&gs(mS,t[r])>=0;)r++;r-n>=mS.length&&ce(e,y("invalid format (repeated flags)")),on(t[r])&&r++,on(t[r])&&r++,t[r]===46&&(r++,on(t[r])&&r++,on(t[r])&&r++),on(t[r])&&ce(e,y("invalid format (width or precision too long)")),s[0]=37;for(let o=0;o<r-n+1;o++)s[o+1]=t[n+o];return r},Wf=function(e,t){let n=e.length,s=t.length,r=e[n-1];for(let o=0;o<s;o++)e[o+n-1]=t[o];e[n+s-1]=r},gB=function(e,t){let n=String.fromCharCode(...e),s=n.match(/^%([-+ #0]*)([0-9]*)(?:\.([0-9]+))?f$/i);if(typeof process<"u"&&process.env.LUANODE_FORMAT_DEBUG&&console.error("FORMAT_DEBUG",JSON.stringify(n),t,!!s),!s||!Number.isFinite(t)||Math.abs(t)<1e21)return null;let r=s[1],o=s[2]?Number(s[2]):0,a=s[3]?Number(s[3]):6,l=t<0,u=Math.abs(t).toString().toLowerCase().split("e"),c=u[0],f=u.length===2?Number(u[1]):0,_=c.indexOf("."),U=c.replace(".",""),g=(_<0?U.length:_)+f,m,C;g<=0?(m="0",C="0".repeat(-g)+U):g>=U.length?(m=U+"0".repeat(g-U.length),C=""):(m=U.slice(0,g),C=U.slice(g)),C=(C+"0".repeat(a)).slice(0,a);let T=(l?"-":"")+m+(a>0?"."+C:"");if(t>=0&&r.indexOf("+")!==-1?T="+"+T:t>=0&&r.indexOf(" ")!==-1&&(T=" "+T),T.length<o){let W=o-T.length;if(r.indexOf("-")!==-1)T+=" ".repeat(W);else if(r.indexOf("0")!==-1){let de=T[0]==="+"||T[0]==="-"||T[0]===" "?T[0]:"";de?T=de+"0".repeat(W)+T.slice(1):T="0".repeat(W)+T}else T=" ".repeat(W)+T}return T},mB=function(e){let t=CS(e),n=1,s=be(e,n),r=0,o=new fo;for(Hi(e,o);r<s.length;)if(s[r]!==an)ot(o,s[r++]);else if(s[++r]===an)ot(o,s[r++]);else{let a=[];switch(++n>t&&tr(e,n,y("no value")),r=hB(e,s,r,a),String.fromCharCode(s[r++])){case"c":{let l=nr(e,n),i=typeof l=="bigint"?Number(l):l;ot(o,i&255);break}case"d":case"i":case"o":case"u":case"x":case"X":{let l=nr(e,n);Wf(a,y(Bi,!0)),lo(o,y(yS(a,l)));break}case"a":case"A":{Wf(a,y(Bi,!0)),lo(o,qS(e,a,ed(e,n)));break}case"e":case"E":case"f":case"g":case"G":{let l=ed(e,n);Wf(a,y(Bi,!0));let i=gB(a,l);lo(o,y(i===null?yM(Di(String.fromCharCode(...a),l)):i));break}case"q":{dB(e,o,n);break}case"s":{let l=fd(e,n);a.length<=2||a[2]===0?Oa(o):(Ut(e,l.length===rB(l),n,"string contains zeros"),gs(a,46)<0&&l.length>=100?Oa(o):(lo(o,y(Di(String.fromCharCode(...a),GS(l)))),Gi(e,1)));break}default:return ce(e,y("invalid option '%%%c' to 'format'"),s[r-1])}}return Li(o),1},Zf=0,SS=16,Bn=8,Qs=8,HS=(1<<Qs)-1,_B=8,wa=class{constructor(t){this.L=t,this.islittle=!0,this.maxalign=1}},hs=0,ds=1,Na=2,Ca=3,ji=4,Xi=5,hd=6,zi=7,gd=8,kS=on,LS=function(e,t){if(e.off>=e.s.length||!kS(e.s[e.off]))return t;{let n=0;do n=n*10+(e.s[e.off++]-48);while(e.off<e.s.length&&kS(e.s[e.off])&&n<=(dd-9)/10);return n}},Mi=function(e,t,n){let s=LS(t,n);return(s>SS||s<=0)&&ce(e.L,y("integral size (%d) out of limits [1,%d]"),s,SS),s},ES=function(e,t){let n={opt:t.s[t.off++],size:0};switch(n.opt){case 98:return n.size=1,n.opt=hs,n;case 66:return n.size=1,n.opt=ds,n;case 104:return n.size=2,n.opt=hs,n;case 72:return n.size=2,n.opt=ds,n;case 108:return n.size=4,n.opt=hs,n;case 76:return n.size=4,n.opt=ds,n;case 106:return n.size=Bn,n.opt=hs,n;case 74:return n.size=Bn,n.opt=ds,n;case 84:return n.size=4,n.opt=ds,n;case 102:return n.size=4,n.opt=Na,n;case 100:return n.size=8,n.opt=Na,n;case 110:return n.size=8,n.opt=Na,n;case 105:return n.size=Mi(e,t,4),n.opt=hs,n;case 73:return n.size=Mi(e,t,4),n.opt=ds,n;case 115:return n.size=Mi(e,t,4),n.opt=ji,n;case 99:return n.size=LS(t,-1),n.size===-1&&ce(e.L,y("missing size for format option 'c'")),n.opt=Ca,n;case 122:return n.opt=Xi,n;case 120:return n.size=1,n.opt=hd,n;case 88:return n.opt=zi,n;case 32:break;case 60:e.islittle=!0;break;case 62:e.islittle=!1;break;case 61:e.islittle=!0;break;case 33:e.maxalign=Mi(e,t,_B);break;default:ce(e.L,y("invalid format option '%c'"),n.opt)}return n.opt=gd,n},md=function(e,t,n){let s={opt:NaN,size:NaN,ntoalign:NaN},r=ES(e,n);s.size=r.size,s.opt=r.opt;let o=s.size;if(s.opt===zi)if(n.off>=n.s.length||n.s[n.off]===0)tr(e.L,1,y("invalid next option for option 'X'"));else{let a=ES(e,n);o=a.size,a=a.opt,(a===Ca||o===0)&&tr(e.L,1,y("invalid next option for option 'X'"))}return o<=1||s.opt===Ca?s.ntoalign=0:(o>e.maxalign&&(o=e.maxalign),(o&o-1)!==0&&tr(e.L,1,y("format asks for alignment not power of 2")),s.ntoalign=o-(t&o-1)&o-1),s},Jf=function(e,t,n,s,r){let o=FS(e,s),a=co.toBigInt(t);for(let l=0;l<s;l++){let i;l<8?i=Number(BigInt.asUintN(8,a>>BigInt(l*Qs))):i=r?HS:0,o[n?l:s-1-l]=i}US(e,s)},bB=function(e){let t=new fo,n=new wa(e),s={s:be(e,1),off:0},r=1,o=0;for($f(e),Hi(e,t);s.off<s.s.length;){let a=md(n,o,s),l=a.opt,i=a.size,u=a.ntoalign;for(o+=u+i;u-- >0;)ot(t,Zf);switch(r++,l){case hs:{let c=nr(e,r);if(i<Bn){let f=i*8-1,_=f<31?1<<f:Math.pow(2,f);Ut(e,-_<=c&&c<_,r,"integer overflow")}Jf(t,c,n.islittle,i,c<0);break}case ds:{let c=nr(e,r);if(i<Bn){let f=i*8,_=f<31?1<<f:Math.pow(2,f);Ut(e,0<=c&&c<_,r,"unsigned overflow")}Jf(t,c,n.islittle,i,!1);break}case Na:{let c=FS(t,i),f=ed(e,r),_=new DataView(c.buffer,c.byteOffset,c.byteLength);i===4?_.setFloat32(0,f,n.islittle):_.setFloat64(0,f,n.islittle),US(t,i);break}case Ca:{let c=be(e,r),f=c.length;for(Ut(e,f<=i,r,"string longer than given size"),Ut(e,f>=i,r,"wrong length"),io(t,c,f);f++<i;)ot(t,Zf);break}case ji:{let c=be(e,r),f=c.length;Ut(e,i>=4||f<1<<i*Qs,r,"string length does not fit in given size"),Jf(t,f,n.islittle,i,0),io(t,c,f),o+=f;break}case Xi:{let c=be(e,r),f=c.length;Ut(e,gs(c,0)<0,r,"strings contains zeros"),io(t,c,f),ot(t,0),o+=f+1;break}case hd:ot(t,Zf);case zi:case gd:r--;break}}return Li(t),1},xB=function(e){let t=be(e,1),n=t.length,s=new Uint8Array(n);for(let r=0;r<n;r++)s[r]=t[n-1-r];return er(e,s),1},AB=function(e){let t=be(e,1),n=t.length,s=new Uint8Array(n);for(let r=0;r<n;r++){let o=t[r];rd(o)&&(o=o|32),s[r]=o}return er(e,s),1},SB=function(e){let t=be(e,1),n=t.length,s=new Uint8Array(n);for(let r=0;r<n;r++){let o=t[r];sd(o)&&(o=o&223),s[r]=o}return er(e,s),1},kB=function(e){let t=be(e,1),n=t.length,s=nr(e,2),r=eB(e,3,""),o=r.length;if(s<=0)cd(e,"");else{if(n+o<n||n+o>dd/s)return ce(e,y("resulting string too large"));{let a=s*n+(s-1)*o,l=new fo,i=KS(e,l,a),u=0;for(;s-- >1;)i.set(t,u),u+=n,o>0&&(i.set(r,u),u+=o);i.set(t,u),MS(l,a)}}return 1},EB=function(e){let t=be(e,1),n=t.length,s=po(uo(e,2,1),n),r=po(uo(e,3,s),n);if(s<1&&(s=1),r>n&&(r=n),s>r)return 0;if(r-s>=Number.MAX_SAFE_INTEGER)return ce(e,"string slice too long");let o=r-s+1;pd(e,o,"string slice too long");for(let a=0;a<o;a++)Ht(e,t[s+a-1]);return o},vB=function(e){let t=new wa(e),n={s:be(e,1),off:0},s=0;for(;n.off<n.s.length;){let r=md(t,s,n),o=r.opt,a=r.size,l=r.ntoalign;switch(a+=l,Ut(e,s<=dd-a,1,"format result too large"),s+=a,o){case ji:case Xi:tr(e,1,"variable-length format");default:break}}return Ht(e,s),1},vS=function(e,t,n,s,r){if(s<=4){let a=0;for(let l=s-1;l>=0;l--)a=a*256+t[n?l:s-1-l];if(r){let l=s*Qs,i=Math.pow(2,l-1);a>=i&&(a-=Math.pow(2,l))}return a}let o=0n;for(let a=s-1;a>=0;a--){let l=t[n?a:s-1-a];o=o<<BigInt(Qs)|BigInt(l)}if(s>Bn){let a=t[n?Bn-1:s-Bn],i=r&&(a&128)!==0?HS:0;for(let u=Bn;u<s;u++)t[n?u:s-1-u]!==i&&ce(e,y("%d-byte integer does not fit into Lua Integer"),s);o=BigInt.asIntN(64,o)}else r?o=BigInt.asIntN(s*Qs,o):o=BigInt.asIntN(Bn*Qs,o);return co.shrink(o)},TB=function(e,t,n,s){BS.lua_assert(t.length>=s);let r=new DataView(new ArrayBuffer(s));for(let o=0;o<s;o++)r.setUint8(o,t[o]);return s==4?r.getFloat32(0,n):r.getFloat64(0,n)},RB=function(e){let t=new wa(e),n={s:be(e,1),off:0},s=be(e,2),r=s.length,o=po(uo(e,3,1),r)-1,a=0;for(Ut(e,o<=r&&o>=0,3,"initial position out of string");n.off<n.s.length;){let l=md(t,o,n),i=l.opt,u=l.size,c=l.ntoalign;switch(o+c+u>r&&tr(e,2,y("data string too short")),o+=c,pd(e,2,"too many results"),a++,i){case hs:case ds:{let f=vS(e,s.subarray(o),t.islittle,u,i===hs);Ht(e,f);break}case Na:{let f=TB(e,s.subarray(o),t.islittle,u);LM(e,f);break}case Ca:{er(e,s.subarray(o,o+u));break}case ji:{let f=vS(e,s.subarray(o),t.islittle,u,0);Ut(e,o+f+u<=r,2,"data string too short"),er(e,s.subarray(o+u,o+u+f)),o+=f;break}case Xi:{let f=gs(s,0,o);f===-1&&(f=s.length-o),er(e,s.subarray(o,f)),o=f+1;break}case zi:case hd:case gd:a--;break}o+=u}return Ht(e,o+1),a+1},Va=-1,jS=-2,XS=200,yB=y("^$*+?.([%-"),Ia=class{constructor(t){this.src=null,this.src_init=null,this.src_end=null,this.p=null,this.p_end=null,this.L=t,this.matchdepth=NaN,this.level=NaN,this.capture=[]}},NB=function(e,t){return t=t-49,t<0||t>=e.level||e.capture[t].len===Va?ce(e.L,y("invalid capture index %%%d"),t+1):t},OB=function(e){let t=e.level;for(t--;t>=0;t--)if(e.capture[t].len===Va)return t;return ce(e.L,y("invalid pattern capture"))},TS=function(e,t){switch(e.p[t++]){case an:return t===e.p_end&&ce(e.L,y("malformed pattern (ends with '%%')")),t+1;case 91:{e.p[t]===94&&t++;do t===e.p_end&&ce(e.L,y("malformed pattern (missing ']')")),e.p[t++]===an&&t<e.p_end&&t++;while(e.p[t]!==93);return t+1}default:return t}},zS=function(e,t){switch(t){case 97:return _S(e);case 65:return!_S(e);case 99:return td(e);case 67:return!td(e);case 100:return on(e);case 68:return!on(e);case 103:return nd(e);case 71:return!nd(e);case 108:return sd(e);case 76:return!sd(e);case 112:return bS(e);case 80:return!bS(e);case 115:return xS(e);case 83:return!xS(e);case 117:return rd(e);case 85:return!rd(e);case 119:return od(e);case 87:return!od(e);case 120:return AS(e);case 88:return!AS(e);case 122:return e===0;case 90:return e!==0;default:return t===e}},ad=function(e,t,n,s){let r=!0;for(e.p[n+1]===94&&(r=!1,n++);++n<s;)if(e.p[n]===an){if(n++,zS(t,e.p[n]))return r}else if(e.p[n+1]===45&&n+2<s){if(n+=2,e.p[n-2]<=t&&t<=e.p[n])return r}else if(e.p[n]===t)return r;return!r},_d=function(e,t,n,s){if(t>=e.src_end)return!1;{let r=e.src[t];switch(e.p[n]){case 46:return!0;case an:return zS(r,e.p[n+1]);case 91:return ad(e,r,n,s-1);default:return e.p[n]===r}}},wB=function(e,t,n){if(n>=e.p_end-1&&ce(e.L,y("malformed pattern (missing arguments to '%%b'")),e.src[t]!==e.p[n])return null;{let s=e.p[n],r=e.p[n+1],o=1;for(;++t<e.src_end;)if(e.src[t]===r){if(--o===0)return t+1}else e.src[t]===s&&o++}return null},CB=function(e,t,n,s){let r=0;for(;_d(e,t+r,n,s);)r++;for(;r>=0;){let o=ms(e,t+r,s+1);if(o)return o;r--}return null},IB=function(e,t,n,s){for(;;){let r=ms(e,t,s+1);if(r!==null)return r;if(_d(e,t,n,s))t++;else return null}},RS=function(e,t,n,s){let r=e.level;r>=sB&&ce(e.L,y("too many captures")),e.capture[r]=e.capture[r]?e.capture[r]:{},e.capture[r].init=t,e.capture[r].len=s,e.level=r+1;let o;return(o=ms(e,t,n))===null&&e.level--,o},VB=function(e,t,n){let s=OB(e);e.capture[s].len=t-e.capture[s].init;let r;return(r=ms(e,t,n))===null&&(e.capture[s].len=Va),r},PB=function(e,t,n,s,r){return DS(e.subarray(t,t+r),n.subarray(s,s+r))},UB=function(e,t,n){n=NB(e,n);let s=e.capture[n].len;return e.src_end-t>=s&&PB(e.src,e.capture[n].init,e.src,t,s)?t+s:null},ms=function(e,t,n){let s=!1,r=!0;for(e.matchdepth--===0&&ce(e.L,y("pattern too complex"));r||s;)if(r=!1,n!==e.p_end)switch(s?void 0:e.p[n]){case 40:{e.p[n+1]===41?t=RS(e,t,n+2,jS):t=RS(e,t,n+1,Va);break}case 41:{t=VB(e,t,n+1);break}case 36:{if(n+1!==e.p_end){s=!0;break}t=e.src.length-t===0?t:null;break}case an:{switch(e.p[n+1]){case 98:{t=wB(e,t,n+2),t!==null&&(n+=4,r=!0);break}case 102:{n+=2,e.p[n]!==91&&ce(e.L,y("missing '[' after '%%f' in pattern"));let o=TS(e,n),a=t===e.src_init?0:e.src[t-1];if(!ad(e,a,n,o-1)&&ad(e,t===e.src_end?0:e.src[t],n,o-1)){n=o,r=!0;break}t=null;break}case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:{t=UB(e,t,e.p[n+1]),t!==null&&(n+=2,r=!0);break}default:s=!0}break}default:{s=!1;let o=TS(e,n);if(_d(e,t,n,o))switch(e.p[o]){case 63:{let a;(a=ms(e,t+1,o+1))!==null?t=a:(n=o+1,r=!0);break}case 43:t++;case 42:t=CB(e,t,n,o);break;case 45:t=IB(e,t,n,o);break;default:t++,n=o,r=!0}else if(e.p[o]===42||e.p[o]===63||e.p[o]===45){n=o+1,r=!0;break}else t=null;break}}return e.matchdepth++,t},bd=function(e,t,n,s){if(t>=e.level)t===0?Yf(e.L,e.src.subarray(n,s),s-n):ce(e.L,y("invalid capture index %%%d"),t+1);else{let r=e.capture[t].len;r===Va&&ce(e.L,y("unfinished capture")),r===jS?Ht(e.L,e.capture[t].init-e.src_init+1):Yf(e.L,e.src.subarray(e.capture[t].init),r)}},qi=function(e,t,n){let s=e.level===0&&t!=null?1:e.level;pd(e.L,s,"too many captures");for(let r=0;r<s;r++)bd(e,r,t,n);return s},KB=function(e,t){for(let n=0;n<t;n++)if(gs(yB,e[n])!==-1)return!1;return!0},xd=function(e,t,n,s,r,o){e.L=t,e.matchdepth=XS,e.src=n,e.src_init=0,e.src_end=s,e.p=r,e.p_end=o},Ad=function(e){e.level=0,BS.lua_assert(e.matchdepth===XS)},FB=function(e,t,n){let s=n>>>0,r=t.length;if(r===0)return s;for(;(s=e.indexOf(t[0],s))!==-1;s++)if(DS(e.subarray(s,s+r),t))return s;return-1},WS=function(e,t){let n=be(e,1),s=be(e,2),r=n.length,o=s.length,a=po(uo(e,3,1),r);if(a<1)a=1;else if(a>r+1)return $f(e),1;if(t&&(ud(e,4)||KB(s,o))){let l=FB(n.subarray(a-1),s,0);if(l>-1)return Ht(e,a+l),Ht(e,a+l+o-1),2}else{let l=new Ia(e),i=a-1,u=s[0]===94;u&&(s=s.subarray(1),o--),xd(l,e,n,r,s,o);do{let c;if(Ad(l),(c=ms(l,i,0))!==null)return t?(Ht(e,i+1),Ht(e,c),qi(l,null,0)+2):qi(l,i,c)}while(i++<l.src_end&&!u)}return $f(e),1},MB=function(e){return WS(e,1)},BB=function(e){return WS(e,0)},ld=class{constructor(){this.src=NaN,this.p=NaN,this.lastmatch=NaN,this.ms=new Ia}},DB=function(e){let t=JM(e,YM(3));t.ms.L=e;for(let n=t.src;n<=t.ms.src_end;n++){Ad(t.ms);let s;if((s=ms(t.ms,n,t.p))!==null&&s!==t.lastmatch)return t.src=t.lastmatch=s,qi(t.ms,n,s)}return 0},GB=function(e){let t=be(e,1),n=be(e,2),s=t.length,r=n.length;IS(e,2);let o=new ld;return HM(e,o),xd(o.ms,e,t,s,n,r),o.src=0,o.p=0,o.lastmatch=null,qM(e,DB,3),1},qB=function(e,t,n,s){let r=e.L,o=VS(r,3),a=o.length;for(let l=0;l<a;l++)o[l]!==an?ot(t,o[l]):(l++,on(o[l])?o[l]===48?io(t,e.src.subarray(n,s),s-n):(bd(e,o[l]-49,n,s),fd(r,-1),jM(r,-2),Oa(t)):(o[l]!==an&&ce(r,y("invalid use of '%c' in replacement string"),an),ot(t,o[l])))},HB=function(e,t,n,s,r){let o=e.L;switch(r){case id:{Qf(o,3);let a=qi(e,n,s);KM(o,a,1);break}case wS:{bd(e,0,n,s),BM(o,3);break}default:{qB(e,t,n,s);return}}ud(o,-1)?GM(o,-1)||ce(o,y("invalid replacement value (a %s)"),tB(o,-1)):(Gi(o,1),Yf(o,e.src.subarray(n,s),s-n)),Oa(t)},LB=function(e){let t=be(e,1),n=t.length,s=be(e,2),r=s.length,o=null,a=PS(e,3),l=uo(e,4,n+1),i=s[0]===94,u=0,c=new Ia(e),f=new fo;for(Ut(e,a===NS||a===OS||a===id||a===wS,3,"string/function/table expected"),Hi(e,f),i&&(s=s.subarray(1),r--),xd(c,e,t,n,s,r),t=0,s=0;u<l;){let _;if(Ad(c),(_=ms(c,t,s))!==null&&_!==o)u++,HB(c,f,t,_,a),t=o=_;else if(t<c.src_end)ot(f,c.src[t++]);else break;if(i)break}return io(f,c.src.subarray(t,c.src_end),c.src_end-t),Li(f),Ht(e,u),2},jB={byte:EB,char:lB,dump:cB,find:MB,format:mB,gmatch:GB,gsub:LB,len:aB,lower:AB,match:BB,pack:bB,packsize:vB,rep:kB,reverse:xB,sub:oB,unpack:RB,upper:SB},XB=function(e){FM(e,0,1),cd(e,""),Qf(e,-2),zM(e,-2),Gi(e,1),Qf(e,-2),XM(e,-2,y("__index",!0)),Gi(e,1)},zB=function(e){return QM(e,jB),XB(e),1};ZS.exports.luaopen_string=zB});var vd=K((CH,ek)=>{"use strict";var{lua_gettop:WB,lua_pushcfunction:ZB,lua_pushfstring:JB,lua_pushinteger:sr,lua_pushnil:YS,lua_pushstring:YB,lua_pushvalue:$B,lua_setfield:QB,lua_tointeger:eD}=Le(),{luaL_Buffer:tD,luaL_addvalue:nD,luaL_argcheck:go,luaL_buffinit:sD,luaL_checkinteger:$S,luaL_checkstack:rD,luaL_checkstring:Ka,luaL_error:Wi,luaL_newlib:oD,luaL_optinteger:Pa,luaL_pushresult:aD}=gt(),{luastring_of:lD,to_luastring:kd}=it(),QS=1114111,ho=function(e){return(e&192)===128},Ua=function(e,t){return e>=0?e:0-e>t?0:t+e+1},iD=[255,127,2047,65535],Ed=function(e,t){let n=e[t],s=0;if(n<128)s=n;else{let r=0;for(;n&64;){let o=e[t+ ++r];if((o&192)!==128)return null;s=s<<6|o&63,n<<=1}if(s|=(n&127)<<r*5,r>3||s>QS||s<=iD[r])return null;t+=r}return{code:s,pos:t+1}},cD=function(e){let t=0,n=Ka(e,1),s=n.length,r=Ua(Pa(e,2,1),s),o=Ua(Pa(e,3,-1),s);for(go(e,1<=r&&--r<=s,2,"initial position out of string"),go(e,--o<s,3,"final position out of string");r<=o;){let a=Ed(n,r);if(a===null)return YS(e),sr(e,r+1),2;r=a.pos,t++}return sr(e,t),1},uD=kd("%U"),JS=function(e,t){let n=$S(e,t);go(e,0<=n&&n<=QS,t,"value out of range"),JB(e,uD,n)},pD=function(e){let t=WB(e);if(t===1)JS(e,1);else{let n=new tD;sD(e,n);for(let s=1;s<=t;s++)JS(e,s),nD(n);aD(n)}return 1},fD=function(e){let t=Ka(e,1),n=$S(e,2),s=n>=0?1:t.length+1;if(s=Ua(Pa(e,3,s),t.length),go(e,1<=s&&--s<=t.length,3,"position out of range"),n===0)for(;s>0&&ho(t[s]);)s--;else if(ho(t[s])&&Wi(e,"initial position is a continuation byte"),n<0)for(;n<0&&s>0;){do s--;while(s>0&&ho(t[s]));n++}else for(n--;n>0&&s<t.length;){do s++;while(ho(t[s]));n--}return n===0?sr(e,s+1):YS(e),1},dD=function(e){let t=Ka(e,1),n=Ua(Pa(e,2,1),t.length),s=Ua(Pa(e,3,n),t.length);if(go(e,n>=1,2,"out of range"),go(e,s<=t.length,3,"out of range"),n>s)return 0;if(s-n>=Number.MAX_SAFE_INTEGER)return Wi(e,"string slice too long");let r=s-n+1;for(rD(e,r,"string slice too long"),r=0,n-=1;n<s;){let o=Ed(t,n);if(o===null)return Wi(e,"invalid UTF-8 code");sr(e,o.code),n=o.pos,r++}return r},hD=function(e){let t=Ka(e,1),n=t.length,s=eD(e,2)-1;if(s<0)s=0;else if(s<n)for(s++;ho(t[s]);)s++;if(s>=n)return 0;{let r=Ed(t,s);return r===null||ho(t[r.pos])?Wi(e,kd("invalid UTF-8 code")):(sr(e,s+1),sr(e,r.code),2)}},gD=function(e){return Ka(e,1),ZB(e,hD),$B(e,1),sr(e,0),3},mD={char:pD,codepoint:dD,codes:gD,len:cD,offset:fD},_D=lD(91,0,45,127,194,45,244,93,91,128,45,191,93,42),bD=function(e){return oD(e,mD),YB(e,_D),QB(e,-2,kd("charpattern",!0)),1};ek.exports.luaopen_utf8=bD});var Od=K((IH,ck)=>{"use strict";var{LUA_OPLT:sk,LUA_TNUMBER:xD,lua_compare:rk,lua_gettop:Rd,lua_isinteger:rr,lua_isnoneornil:AD,lua_pushboolean:SD,lua_pushinteger:or,lua_pushliteral:tk,lua_pushnil:ok,lua_pushnumber:we,lua_pushvalue:ak,lua_setfield:Zi,lua_settop:yd,lua_tointeger:Td,lua_tointegerx:kD,lua_type:ED}=Le(),{luaL_argcheck:$i,luaL_argerror:vD,luaL_checkany:lk,luaL_checkinteger:Fa,luaL_checknumber:Ce,luaL_error:TD,luaL_newlib:RD,luaL_optnumber:yD}=gt(),{LUA_MAXINTEGER:ND,LUA_MININTEGER:OD,lua_numbertointeger:wD}=lt(),{to_luastring:Ji}=it(),Kt=at(),_s,nk=(e,t)=>(e<<t|e>>>32-t)>>>0,ik=function(e){let t=e>>>0||1,n=new Array(4);for(let s=0;s<4;s++){t=t+2654435769>>>0;let r=t;r=Math.imul(r^r>>>16,2246822507),r=Math.imul(r^r>>>13,3266489909),n[s]=(r^r>>>16)>>>0}return n},Ma=null,Yi=function(){Ma===null&&(Ma=ik(_s===void 0?Math.random()*4294967296>>>0:_s>>>0||1));let e=Ma,t=Math.imul(nk(e[1]*5,7),9)>>>0,n=e[1]<<9>>>0;return e[2]^=e[0],e[3]^=e[1],e[1]^=e[2],e[0]^=e[3],e[2]^=n,e[3]=nk(e[3],11),t},CD=function(e){_s=e|0||1,_s<0&&(_s=_s+4294967296>>>0),Ma=ik(_s)},ID=function(e){let t,n,s=Ma===null&&_s===void 0?Math.random():Yi()/4294967296;switch(Rd(e)){case 0:return we(e,s),1;case 1:{t=1,n=Fa(e,1);break}case 2:{t=Fa(e,1),n=Fa(e,2);break}default:return TD(e,"wrong number of arguments")}$i(e,Kt.le(t,n),1,"interval is empty");let r=Kt.toBigInt(t),o=Kt.toBigInt(n),a=r>=0n||o<=Kt.MAX_INT64+r;$i(e,a,1,"interval too large");let l=o-r+1n,i=1n<<64n,u=i-i%l,c;do c=BigInt(Yi())<<32n|BigInt(Yi());while(c>=u);return or(e,Kt.normalize(r+c%l)),1},VD=function(e){return CD(Ce(e,1)),Yi(),0},PD=function(e){if(rr(e,1)){let t=Td(e,1);Kt.lt(t,0)&&(t=Kt.neg(t)),or(e,t)}else we(e,Math.abs(Ce(e,1)));return 1},UD=function(e){return we(e,Math.sin(Ce(e,1))),1},KD=function(e){return we(e,Math.cos(Ce(e,1))),1},FD=function(e){return we(e,Math.tan(Ce(e,1))),1},MD=function(e){return we(e,Math.asin(Ce(e,1))),1},BD=function(e){return we(e,Math.acos(Ce(e,1))),1},DD=function(e){let t=Ce(e,1),n=yD(e,2,1);return we(e,Math.atan2(t,n)),1},GD=function(e){let t=kD(e,1);return t!==!1?or(e,t):(lk(e,1),ok(e)),1},Nd=function(e,t){let n=wD(t);n!==!1?or(e,n):we(e,t)},qD=function(e){return rr(e,1)?yd(e,1):Nd(e,Math.floor(Ce(e,1))),1},HD=function(e){return rr(e,1)?yd(e,1):Nd(e,Math.ceil(Ce(e,1))),1},LD=function(e){return we(e,Math.sqrt(Ce(e,1))),1},jD=function(e){let t=Fa(e,1),n=Fa(e,2);return SD(e,Kt.ult(t,n)),1},XD=function(e){let t=Ce(e,1),n;if(AD(e,2))n=Math.log(t);else{let s=Ce(e,2);s===2?n=Math.log2(t):s===10?n=Math.log10(t):n=Math.log(t)/Math.log(s)}return we(e,n),1},zD=function(e){return we(e,Math.exp(Ce(e,1))),1},WD=function(e){return we(e,Ce(e,1)*(180/Math.PI)),1},ZD=function(e){return we(e,Ce(e,1)*(Math.PI/180)),1},JD=function(e){let t=Rd(e),n=1;$i(e,t>=1,1,"value expected");for(let s=2;s<=t;s++)rk(e,s,n,sk)&&(n=s);return ak(e,n),1},YD=function(e){let t=Rd(e),n=1;$i(e,t>=1,1,"value expected");for(let s=2;s<=t;s++)rk(e,n,s,sk)&&(n=s);return ak(e,n),1},$D=function(e){return ED(e,1)===xD?rr(e,1)?tk(e,"integer"):tk(e,"float"):(lk(e,1),ok(e)),1},QD=function(e){if(rr(e,1)&&rr(e,2)){let t=Td(e,1),n=Td(e,2);Kt.eq(n,0)?vD(e,2,"zero"):or(e,Kt.shrink(Kt.toBigInt(t)%Kt.toBigInt(n)))}else{let t=Ce(e,1),n=Ce(e,2);we(e,t%n)}return 1},eG=function(e){if(rr(e,1))yd(e,1),we(e,0);else{let t=Ce(e,1),n=t<0?Math.ceil(t):Math.floor(t);Nd(e,n),we(e,t===n?0:t-n)}return 2},tG={abs:PD,acos:BD,asin:MD,atan:DD,ceil:HD,cos:KD,deg:WD,exp:zD,floor:qD,fmod:QD,log:XD,max:YD,min:JD,modf:eG,rad:ZD,random:ID,randomseed:VD,sin:UD,sqrt:LD,tan:FD,tointeger:GD,type:$D,ult:jD},nG=function(e){return RD(e,tG),we(e,Math.PI),Zi(e,-2,Ji("pi",!0)),we(e,1/0),Zi(e,-2,Ji("huge",!0)),or(e,ND),Zi(e,-2,Ji("maxinteger",!0)),or(e,OD),Zi(e,-2,Ji("mininteger",!0)),1};ck.exports.luaopen_math=nG});var Bd=K((VH,wk)=>{"use strict";var{LUA_MASKCALL:hk,LUA_MASKCOUNT:sG,LUA_MASKLINE:gk,LUA_MASKRET:mk,LUA_REGISTRYINDEX:Ga,LUA_TFUNCTION:Cd,LUA_TNIL:_k,LUA_TTABLE:rG,LUA_TUSERDATA:bk,lua_Debug:Id,lua_call:oG,lua_checkstack:aG,lua_gethook:lG,lua_gethookcount:iG,lua_gethookmask:cG,lua_getinfo:xk,lua_getlocal:uk,lua_getmetatable:uG,lua_getstack:Vd,lua_getupvalue:Ak,lua_getuservalue:pG,lua_insert:fG,lua_iscfunction:pk,lua_isfunction:Sk,lua_isnoneornil:kk,lua_isthread:dG,lua_newtable:hG,lua_pcall:gG,lua_pop:mG,lua_pushboolean:_G,lua_pushfstring:bG,lua_pushinteger:Pd,lua_pushlightuserdata:Ek,lua_pushliteral:xG,lua_pushnil:mo,lua_pushstring:ar,lua_pushvalue:nc,lua_rawgetp:Ud,lua_rawsetp:AG,lua_rotate:vk,lua_setfield:sc,lua_sethook:SG,lua_setlocal:kG,lua_setmetatable:EG,lua_settop:qa,lua_setupvalue:vG,lua_setuservalue:TG,lua_tojsstring:RG,lua_toproxy:yG,lua_tostring:NG,lua_tothread:OG,lua_touserdata:Kd,lua_type:Tk,lua_upvalueid:wG,lua_upvaluejoin:CG,lua_xmove:rc}=Le(),{luaL_argcheck:Qi,luaL_argerror:Fd,luaL_checkany:oc,luaL_checkinteger:lr,luaL_checkstring:IG,luaL_checktype:ac,luaL_error:VG,luaL_loadbuffer:PG,luaL_newlib:UG,luaL_optinteger:Rk,luaL_optstring:KG,luaL_traceback:FG,lua_writestringerror:MG}=gt(),BG=ps(),{luastring_indexOf:ln,to_luastring:xe}=it(),Md=(e,t,n)=>{e!==t&&!aG(t,n)&&VG(e,xe("stack overflow",!0))},DG=e=>(nc(e,Ga),1),GG=e=>(oc(e,1),uG(e,1)||mo(e),1),qG=e=>{let t=Tk(e,2);return Qi(e,t==_k||t==rG,2,"nil or table expected"),qa(e,2),EG(e,1),1},HG=e=>(Tk(e,1)!==bk?mo(e):pG(e,1),1),LG=e=>(ac(e,1,bk),oc(e,2),qa(e,2),TG(e,1),1),_o=e=>dG(e,1)?{arg:1,thread:OG(e,1)}:{arg:0,thread:e},Ba=(e,t,n)=>{ar(e,n),sc(e,-2,t)},Da=(e,t,n)=>{Pd(e,n),sc(e,-2,t)},fk=(e,t,n)=>{_G(e,n),sc(e,-2,t)},dk=(e,t,n)=>{e==t?vk(e,-2,1):rc(t,e,1),sc(e,-2,n)},jG=e=>{let t=new Id,n=_o(e),s=n.arg,r=n.thread,o=KG(e,s+2,"flnStu");if(Md(e,r,3),Sk(e,s+1))o=bG(e,xe(">%s"),o),nc(e,s+1),rc(e,r,1);else if(!Vd(r,lr(e,s+1),t))return mo(e),1;return xk(r,o,t)||Fd(e,s+2,"invalid option"),hG(e),ln(o,83)>-1&&(Ba(e,xe("source",!0),t.source),Ba(e,xe("short_src",!0),t.short_src),Da(e,xe("linedefined",!0),t.linedefined),Da(e,xe("lastlinedefined",!0),t.lastlinedefined),Ba(e,xe("what",!0),t.what)),ln(o,108)>-1&&Da(e,xe("currentline",!0),t.currentline),ln(o,117)>-1&&(Da(e,xe("nups",!0),t.nups),Da(e,xe("nparams",!0),t.nparams),fk(e,xe("isvararg",!0),t.isvararg)),ln(o,110)>-1&&(Ba(e,xe("name",!0),t.name),Ba(e,xe("namewhat",!0),t.namewhat)),ln(o,116)>-1&&fk(e,xe("istailcall",!0),t.istailcall),ln(o,76)>-1&&dk(e,r,xe("activelines",!0)),ln(o,102)>-1&&dk(e,r,xe("func",!0)),1},XG=e=>{let t=_o(e),n=t.thread,s=t.arg,r=new Id,o=lr(e,s+2);if(Sk(e,s+1))return nc(e,s+1),ar(e,uk(e,null,o)),1;{let a=lr(e,s+1);if(!Vd(n,a,r))return Fd(e,s+1,"level out of range");Md(e,n,1);let l=uk(n,r,o);return l?(rc(n,e,1),ar(e,l),vk(e,-2,1),2):(mo(e),1)}},zG=e=>{let t=_o(e),n=t.thread,s=t.arg,r=new Id,o=lr(e,s+1),a=lr(e,s+2);if(!Vd(n,o,r))return Fd(e,s+1,"level out of range");oc(e,s+3),qa(e,s+3),Md(e,n,1),rc(e,n,1);let l=kG(n,r,a);return l===null&&mG(n,1),ar(e,l),1},yk=(e,t)=>{let n=lr(e,2);ac(e,1,Cd);let s=t?Ak(e,1,n):vG(e,1,n);return s===null?0:(ar(e,s),fG(e,-(t+1)),t+1)},WG=e=>yk(e,1),ZG=e=>(oc(e,3),yk(e,0)),wd=(e,t,n)=>{let s=lr(e,n);return ac(e,t,Cd),Qi(e,Ak(e,t,s)!==null,n,"invalid upvalue index"),s},JG=e=>{let t=wd(e,1,2);return Ek(e,wG(e,1,t)),1},YG=e=>{let t=wd(e,1,2),n=wd(e,3,4);return Qi(e,!pk(e,1),1,"Lua function expected"),Qi(e,!pk(e,3),3,"Lua function expected"),CG(e,1,t,3,n),0},ec=xe("__hooks__",!0),$G=["call","return","line","count","tail call"].map(e=>xe(e)),Nk=(e,t)=>{Ud(e,Ga,ec);let s=Kd(e,-1).get(e);s&&(s(e),ar(e,$G[t.event]),t.currentline>=0?Pd(e,t.currentline):mo(e),BG.lua_assert(xk(e,xe("lS"),t)),oG(e,2,0))},QG=(e,t)=>{let n=0;return ln(e,99)>-1&&(n|=hk),ln(e,114)>-1&&(n|=mk),ln(e,108)>-1&&(n|=gk),t>0&&(n|=sG),n},eq=(e,t)=>{let n=0;return e&hk&&(t[n++]=99),e&mk&&(t[n++]=114),e&gk&&(t[n++]=108),t.subarray(0,n)},tq=e=>{let t,n,s,r=_o(e),o=r.thread,a=r.arg;if(kk(e,a+1))qa(e,a+1),s=null,t=0,n=0;else{let u=IG(e,a+2);ac(e,a+1,Cd),n=Rk(e,a+3,0),s=Nk,t=QG(u,n)}let l;Ud(e,Ga,ec)===_k?(l=new WeakMap,Ek(e,l),AG(e,Ga,ec)):l=Kd(e,-1);let i=yG(e,a+1);return l.set(o,i),SG(o,s,t,n),0},nq=e=>{let n=_o(e).thread,s=new Uint8Array(5),r=cG(n),o=lG(n);return o===null?mo(e):o!==Nk?xG(e,"external hook"):(Ud(e,Ga,ec),Kd(e,-1).get(n)(e)),ar(e,eq(r,s)),Pd(e,iG(n)),3},sq=e=>{let t=_o(e),n=t.thread,s=t.arg,r=NG(e,s+1);if(r===null&&!kk(e,s+1))nc(e,s+1);else{let o=Rk(e,s+2,e===n?1:0);FG(e,n,r,o)}return 1},Ok={gethook:nq,getinfo:jG,getlocal:XG,getmetatable:GG,getregistry:DG,getupvalue:WG,getuservalue:HG,sethook:tq,setlocal:zG,setmetatable:qG,setupvalue:ZG,setuservalue:LG,traceback:sq,upvalueid:JG,upvaluejoin:YG},tc;if(typeof process<"u"){let e=vs("readline-sync");e.setDefaultOptions({prompt:"lua_debug> "}),tc=()=>e.prompt()}else typeof window<"u"&&(tc=()=>{let e=prompt("lua_debug>","");return e!==null?e:""});tc&&(Ok.debug=e=>{for(;;){let t=tc();if(t==="cont")return 0;if(t.length===0)continue;let n=xe(t);(PG(e,n,n.length,xe("=(debug command)",!0))||gG(e,0,0,0))&&MG(RG(e,-1),`
`),qa(e,0)}});var rq=e=>(UG(e,Ok),1);wk.exports.luaopen_debug=rq});var eh=K((PH,iE)=>{"use strict";var{LUA_DIRSEP:lc,LUA_EXEC_DIR:oq,LUA_JSPATH_DEFAULT:Ck,LUA_PATH_DEFAULT:aq,LUA_PATH_MARK:Mk,LUA_PATH_SEP:ir}=lt(),{LUA_OK:bo,LUA_REGISTRYINDEX:xs,LUA_TNIL:jd,LUA_TTABLE:lq,lua_callk:Bk,lua_createtable:Dk,lua_getfield:Gn,lua_insert:Xd,lua_isfunction:iq,lua_isnil:cq,lua_isstring:uq,lua_newtable:pq,lua_pop:Dn,lua_pushboolean:Gk,lua_pushcclosure:fq,lua_pushcfunction:dq,lua_pushfstring:xo,lua_pushglobaltable:hq,lua_pushlightuserdata:gq,lua_pushliteral:qk,lua_pushlstring:zd,lua_pushnil:Hk,lua_pushstring:cn,lua_pushvalue:ic,lua_rawgeti:mq,lua_rawgetp:Lk,lua_rawseti:jk,lua_rawsetp:_q,lua_remove:Gd,lua_setfield:bs,lua_setmetatable:bq,lua_settop:xq,lua_toboolean:Xk,lua_tostring:Ao,lua_touserdata:Aq,lua_upvalueindex:zk}=Le(),{LUA_LOADED_TABLE:Wk,LUA_PRELOAD_TABLE:Zk,luaL_Buffer:Jk,luaL_addvalue:Yk,luaL_buffinit:$k,luaL_checkstring:qn,luaL_error:cc,luaL_getsubtable:Ik,luaL_gsub:Ha,luaL_len:Sq,luaL_loadfile:kq,luaL_newlib:Eq,luaL_optstring:Vk,luaL_pushresult:Qk,luaL_setfuncs:vq}=gt(),Tq=ps(),{luastring_indexOf:Wd,to_jsstring:Zd,to_luastring:D,to_uristring:eE}=it(),Rq=th(),tE=(function(){return typeof process<"u"?global:typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:(0,eval)("this")})(),Jd=D("__JSLIBS__"),yq="LUA_PATH",Nq="LUA_JSPATH",Oq="LUA_CPATH",nE="-",sE=lc,wq=lc,Pk=D("luaopen_"),Cq=D("_"),Iq="open",Uk=D(""),qd;if(typeof process>"u")qd=function(e,t,n){t=eE(t);let s=new XMLHttpRequest;if(s.open("GET",t,!1),s.send(),s.status<200||s.status>=300)return cn(e,D(`${s.status}: ${s.statusText}`)),null;let r=s.response;/\/\/[#@] sourceURL=/.test(r)||(r+=" //# sourceURL="+t);let o;try{o=Function("fengari",r)}catch(l){return cn(e,D(`${l.name}: ${l.message}`)),null}let a=o(Rq);return typeof a=="function"||typeof a=="object"&&a!==null?a:a===void 0?tE:(cn(e,D(`library returned unexpected type (${typeof a})`)),null)};else{let e=vs("path");qd=function(t,n,s){n=Zd(n),n=e.resolve(process.cwd(),n);try{return vs(n)}catch(r){return cn(t,D(r.message)),null}}}var Vq=function(e,t,n){let s=t[Zd(n)];return s&&typeof s=="function"?s:(xo(e,D("undefined symbol: %s"),n),null)},Pq=function(e){Gn(e,xs,D("LUA_NOENV"));let t=Xk(e,-1);return Dn(e,1),t},Hd;if(typeof process<"u"){let e=(pa(),ja(ua));Hd=function(t){try{let n=e.openSync(t,"r");e.closeSync(n)}catch{return!1}return!0}}else Hd=function(e){e=eE(e);let t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(),t.status>=200&&t.status<=299};var rE=1,Yd=2,Ld=function(e,t,n){let s=Kq(e,t);if(s===null){if(s=qd(e,t,n[0]===42),s===null)return rE;Fq(e,t,s)}if(n[0]===42)return Gk(e,1),0;{let r=Vq(e,s,n);return r===null?Yd:(dq(e,r),0)}},Uq=function(e){let t=qn(e,1),n=qn(e,2),s=Ld(e,t,n);return s===0?1:(Hk(e),Xd(e,-2),qk(e,s===rE?Iq:"init"),3)},Kk=(function(){return typeof process<"u"?process.env:tE})(),Dd=function(e,t,n,s){let r=`${n}${Tq.LUA_VERSUFFIX}`;cn(e,D(r));let o=Kk[r];o===void 0&&(o=Kk[n]),o===void 0||Pq(e)?cn(e,s):(o=Ha(e,D(o),D(ir+ir,!0),D(ir+Zd(Uk)+ir,!0)),Ha(e,o,Uk,s),Gd(e,-2)),bs(e,-3,t),Dn(e,1)},Kq=function(e,t){Lk(e,xs,Jd),Gn(e,-1,t);let n=Aq(e,-1);return Dn(e,2),n},Fq=function(e,t,n){Lk(e,xs,Jd),gq(e,n),ic(e,-1),bs(e,-3,t),jk(e,-2,Sq(e,-2)+1),Dn(e,1)},Mq=function(e,t){for(;t[0]===ir.charCodeAt(0);)t=t.subarray(1);if(t.length===0)return null;let n=Wd(t,ir.charCodeAt(0));return n<0&&(n=t.length),zd(e,t,n),t.subarray(n)},oE=function(e,t,n,s,r){let o=new Jk;for($k(e,o),s[0]!==0&&(t=Ha(e,t,s,r));(n=Mq(e,n))!==null;){let a=Ha(e,Ao(e,-1),D(Mk,!0),t);if(Gd(e,-2),Hd(a))return a;xo(e,D(`
	no file '%s'`),a),Gd(e,-2),Yk(o)}return Qk(o),null},Bq=function(e){return oE(e,qn(e,1),qn(e,2),Vk(e,3,"."),Vk(e,4,lc))!==null?1:(Hk(e),Xd(e,-2),2)},$d=function(e,t,n,s){Gn(e,zk(1),n);let r=Ao(e,-1);return r===null&&cc(e,D("'package.%s' must be a string"),n),oE(e,t,r,D("."),s)},Qd=function(e,t,n){return t?(cn(e,n),2):cc(e,D(`error loading module '%s' from file '%s':
	%s`),Ao(e,1),n,Ao(e,-1))},Dq=function(e){let t=qn(e,1),n=$d(e,t,D("path",!0),D(wq,!0));return n===null?1:Qd(e,kq(e,n)===bo,n)},aE=function(e,t,n){let s;n=Ha(e,n,D("."),Cq);let r=Wd(n,nE.charCodeAt(0));if(r>=0){s=zd(e,n,r),s=xo(e,D("%s%s"),Pk,s);let o=Ld(e,t,s);if(o!==Yd)return o;n=r+1}return s=xo(e,D("%s%s"),Pk,n),Ld(e,t,s)},Gq=function(e){let t=qn(e,1),n=$d(e,t,D("jspath",!0),D(sE,!0));return n===null?1:Qd(e,aE(e,n,t)===0,n)},qq=function(e){let t=qn(e,1),n=Wd(t,46),s;if(n<0)return 0;zd(e,t,n);let r=$d(e,Ao(e,-1),D("jspath",!0),D(sE,!0));return r===null?1:(s=aE(e,r,t))!==0?s!=Yd?Qd(e,0,r):(xo(e,D(`
	no module '%s' in file '%s'`),t,r),1):(cn(e,r),2)},Hq=function(e){let t=qn(e,1);return Gn(e,xs,Zk),Gn(e,-1,t)===jd&&xo(e,D(`
	no field package.preload['%s']`),t),1},Lq=function(e,t,n,s){let r=new Jk;return $k(e,r),Gn(e,zk(1),D("searchers",!0))!==lq&&cc(e,D("'package.searchers' must be a table")),lE(e,bo,{name:t,i:1,msg:r,ctx:n,k:s})},lE=function(e,t,n){for(;t===bo?(mq(e,3,n.i)===jd&&(Dn(e,1),Qk(n.msg),cc(e,D("module '%s' not found:%s"),n.name,Ao(e,-1))),cn(e,n.name),Bk(e,1,2,n,lE)):t=bo,!iq(e,-2);n.i++)uq(e,-2)?(Dn(e,1),Yk(n.msg)):Dn(e,2);return n.k(e,bo,n.ctx)},jq=function(e){let t=qn(e,1);return xq(e,1),Gn(e,xs,Wk),Gn(e,2,t),Xk(e,-1)?1:(Dn(e,1),Lq(e,t,t,Xq))},Xq=function(e,t,n){return cn(e,n),Xd(e,-2),Bk(e,2,1,n,Fk),Fk(e,bo,n)},Fk=function(e,t,n){let s=n;return cq(e,-1)||bs(e,2,s),Gn(e,2,s)==jd&&(Gk(e,1),ic(e,-1),bs(e,2,s)),1},zq={loadlib:Uq,searchpath:Bq},Wq={require:jq},Zq=function(e){let t=[Hq,Dq,Gq,qq,null];Dk(e);for(let n=0;t[n];n++)ic(e,-2),fq(e,t[n],1),jk(e,-2,n+1);bs(e,-2,D("searchers",!0))},Jq=function(e){pq(e),Dk(e,0,1),bq(e,-2),_q(e,xs,Jd)},Yq=function(e){return Jq(e),Eq(e,zq),Zq(e),Dd(e,D("path",!0),yq,aq),Dd(e,D("jspath",!0),Nq,Ck),Dd(e,D("cpath",!0),Oq,Ck),qk(e,lc+`
`+ir+`
`+Mk+`
`+oq+`
`+nE+`
`),bs(e,-2,D("config",!0)),Ik(e,xs,Wk),bs(e,-2,D("loaded",!0)),Ik(e,xs,Zk),bs(e,-2,D("preload",!0)),hq(e),ic(e,-2),vq(e,Wq,1),Dn(e,1),1};iE.exports.luaopen_package=Yq});var nh=K((KH,cE)=>{var{lua_pushinteger:$q,lua_pushliteral:cr,lua_setfield:As}=Le(),{luaL_newlib:Qq}=gt(),{FENGARI_AUTHORS:e4,FENGARI_COPYRIGHT:t4,FENGARI_RELEASE:n4,FENGARI_VERSION:s4,FENGARI_VERSION_MAJOR:r4,FENGARI_VERSION_MINOR:o4,FENGARI_VERSION_NUM:a4,FENGARI_VERSION_RELEASE:l4,to_luastring:Ss}=it(),i4=function(e){return Qq(e,{}),cr(e,e4),As(e,-2,Ss("AUTHORS")),cr(e,t4),As(e,-2,Ss("COPYRIGHT")),cr(e,n4),As(e,-2,Ss("RELEASE")),cr(e,s4),As(e,-2,Ss("VERSION")),cr(e,r4),As(e,-2,Ss("VERSION_MAJOR")),cr(e,o4),As(e,-2,Ss("VERSION_MINOR")),$q(e,a4),As(e,-2,Ss("VERSION_NUM")),cr(e,l4),As(e,-2,Ss("VERSION_RELEASE")),1};cE.exports.luaopen_fengari=i4});var pE=K((FH,uE)=>{"use strict";var{lua_pop:c4}=Le(),{luaL_requiref:u4}=gt(),{to_luastring:p4}=it(),Ot={},f4=function(e){for(let t in Ot)u4(e,p4(t),Ot[t],1),c4(e,1)};uE.exports.luaL_openlibs=f4;var un=ps(),{luaopen_base:d4}=df(),{luaopen_coroutine:h4}=mf(),{luaopen_debug:g4}=Bd(),{luaopen_math:m4}=Od(),{luaopen_package:_4}=eh(),{luaopen_os:b4}=zf(),{luaopen_string:x4}=Sd(),{luaopen_table:A4}=Nf(),{luaopen_utf8:S4}=vd();Ot._G=d4,Ot[un.LUA_LOADLIBNAME]=_4;Ot[un.LUA_COLIBNAME]=h4;Ot[un.LUA_TABLIBNAME]=A4;Ot[un.LUA_OSLIBNAME]=b4;Ot[un.LUA_STRLIBNAME]=x4;Ot[un.LUA_MATHLIBNAME]=m4;Ot[un.LUA_UTF8LIBNAME]=S4;Ot[un.LUA_DBLIBNAME]=g4;typeof process<"u"&&(Ot[un.LUA_IOLIBNAME]=Hf().luaopen_io);var{luaopen_fengari:k4}=nh();Ot[un.LUA_FENGARILIBNAME]=k4});var ps=K((MH,te)=>{"use strict";var{LUA_VERSION_MAJOR:E4,LUA_VERSION_MINOR:v4}=Le(),T4="_"+E4+"_"+v4;te.exports.LUA_VERSUFFIX=T4;te.exports.lua_assert=function(e){};te.exports.luaopen_base=df().luaopen_base;var R4="coroutine";te.exports.LUA_COLIBNAME=R4;te.exports.luaopen_coroutine=mf().luaopen_coroutine;var y4="table";te.exports.LUA_TABLIBNAME=y4;te.exports.luaopen_table=Nf().luaopen_table;typeof process<"u"&&(te.exports.LUA_IOLIBNAME="io",te.exports.luaopen_io=Hf().luaopen_io);var N4="os";te.exports.LUA_OSLIBNAME=N4;te.exports.luaopen_os=zf().luaopen_os;var O4="string";te.exports.LUA_STRLIBNAME=O4;te.exports.luaopen_string=Sd().luaopen_string;var w4="utf8";te.exports.LUA_UTF8LIBNAME=w4;te.exports.luaopen_utf8=vd().luaopen_utf8;var C4="bit32";te.exports.LUA_BITLIBNAME=C4;var I4="math";te.exports.LUA_MATHLIBNAME=I4;te.exports.luaopen_math=Od().luaopen_math;var V4="debug";te.exports.LUA_DBLIBNAME=V4;te.exports.luaopen_debug=Bd().luaopen_debug;var P4="package";te.exports.LUA_LOADLIBNAME=P4;te.exports.luaopen_package=eh().luaopen_package;var U4="fengari";te.exports.LUA_FENGARILIBNAME=U4;te.exports.luaopen_fengari=nh().luaopen_fengari;var K4=pE();te.exports.luaL_openlibs=K4.luaL_openlibs});var th=K((BH,Ie)=>{"use strict";var xt=it();Ie.exports.FENGARI_AUTHORS=xt.FENGARI_AUTHORS;Ie.exports.FENGARI_COPYRIGHT=xt.FENGARI_COPYRIGHT;Ie.exports.FENGARI_RELEASE=xt.FENGARI_RELEASE;Ie.exports.FENGARI_VERSION=xt.FENGARI_VERSION;Ie.exports.FENGARI_VERSION_MAJOR=xt.FENGARI_VERSION_MAJOR;Ie.exports.FENGARI_VERSION_MINOR=xt.FENGARI_VERSION_MINOR;Ie.exports.FENGARI_VERSION_NUM=xt.FENGARI_VERSION_NUM;Ie.exports.FENGARI_VERSION_RELEASE=xt.FENGARI_VERSION_RELEASE;Ie.exports.luastring_eq=xt.luastring_eq;Ie.exports.luastring_indexOf=xt.luastring_indexOf;Ie.exports.luastring_of=xt.luastring_of;Ie.exports.to_jsstring=xt.to_jsstring;Ie.exports.to_luastring=xt.to_luastring;Ie.exports.to_uristring=xt.to_uristring;var F4=lt(),M4=Le(),B4=gt(),D4=ps();Ie.exports.luaconf=F4;Ie.exports.lua=M4;Ie.exports.lauxlib=B4;Ie.exports.lualib=D4});var dE=K((DH,fE)=>{"use strict";fE.exports=th()});var G4=vE(dE(),1);var hE={cli:`-- This Script is Part of the Prometheus Obfuscator by levno-710
--
-- cli.lua
--
-- This Script contains the Code for the Prometheus CLI.

-- Configure package.path for requiring Prometheus.
local function script_path()
	local source = debug.getinfo(2, "S").source
	if type(source) == "string" and source:sub(1, 1) == "@" then
		local path = source:sub(2):match("(.*[/%\\\\])")
		if path then
			return path
		end
	end

	-- LuaNode-VM deliberately runs scripts from a buffer. Some host builds do
	-- not preserve that buffer's chunk name in debug.getinfo, so fall back to
	-- the PUC-Rio-compatible arg[0] supplied by the CLI runner.
	local invoked = type(arg) == "table" and arg[0]
	if type(invoked) == "string" then
		return invoked:match("(.*[/%\\\\])")
	end
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
	-- strings-only) with shuffle/rotate, NumbersToExpressions with representation
	-- mutation, and WrapInFunction.
	--
	-- Do not enable ConstantArray local wrappers here. This pass runs after
	-- Vmify and ProxifyLocals, where the AST already contains the generated VM
	-- runtime and many function scopes. Decorating every such scope multiplies
	-- the generated AST and makes Strong take minutes even for tiny inputs. The
	-- non-wrapper ConstantArray path retains array indirection, shuffled/rotated
	-- lookup layout and string encoding while keeping completion bounded.
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
					LocalWrapperThreshold = 0,
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
			-- Browser hosts usually do not provide io.popen. Combine wall-clock
			-- time with the monotonic process clock so two builds started within
			-- the same second still receive different polymorphic layouts.
			logger:warn("OpenSSL is unavailable. Falling back to time and clock entropy.");
			local wallClock = (os and os.time and os.time()) or 0;
			local processClock = (os and os.clock and os.clock()) or 0;
			local seed = (wallClock * 1000000 + math.floor(processClock * 1000000)) % 9007199254740991;
			if seed <= 0 then
				seed = 1;
			end
			math.randomseed(seed)
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
		if not data.skipConstantArrayReference then
			data.scope:addReferenceToHigherScope(self.rootScope, self.wrapperId);
		end
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

-- Preserve the identity of an AST node while replacing its contents. This is
-- used by Strong, whose ConstantArray passes deliberately have no local
-- wrappers. It lets us collect the nodes during the first walk and avoid a
-- second full walk over the very large VM AST after the constants are shuffled.
local function replaceNodeInPlace(target, replacement)
	for key in pairs(target) do
		target[key] = nil;
	end
	for key, value in pairs(replacement) do
		target[key] = value;
	end
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
	self.replacements = {};
	self.replacementScopeReferences = {};

	-- Extract Constants. Strong has no local wrappers, so remember the exact
	-- node and scope while we already have them in hand. The replacement can be
	-- performed in-place after shuffle/rotate, avoiding another full AST walk.
	visitast(ast, nil, function(node, data)
		-- Apply only to some nodes
		if math.random() <= self.Threshold then
			node.__apply_constant_array = true;
			local value;
			if node.kind == AstKind.StringExpression then
				value = node.value;
			elseif not self.StringsOnly and node.isConstant then
				value = node.value;
			end
			if value ~= nil then
				self:addConstant(value);
				if self.LocalWrapperCount == 0 then
					table.insert(self.replacements, {
						node = node,
						value = value,
						scope = data.scope,
					});
					self.replacementScopeReferences[data.scope] = (self.replacementScopeReferences[data.scope] or 0) + 1;
				end
			else
				node.__apply_constant_array = nil;
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

	if self.LocalWrapperCount == 0 then
		-- Scope bookkeeping is additive, so update each scope once instead of
		-- walking its parent chain for every literal occurrence.
		for scope, count in pairs(self.replacementScopeReferences) do
			scope:addReferenceToHigherScope(self.rootScope, self.wrapperId, count);
		end
		for _, replacement in ipairs(self.replacements) do
			local replacementNode = self:getConstant(replacement.value, {
				scope = replacement.scope,
				functionData = {},
				skipConstantArrayReference = true,
			});
			replaceNodeInPlace(replacement.node, replacementNode);
		end
	else
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
	end

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
	self.replacements = nil;
	self.replacementScopeReferences = nil;
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

	-- Visiting used to remove and reinsert every statement at its current
	-- position. That is quadratic for the large function blocks generated by
	-- Vmify, and every later Strong step paid that cost again. Build the next
	-- statement list linearly instead. A visitor may still return zero, one, or
	-- several statements, and postvisitors may still insert declarations into
	-- \`block.statements\` exactly as before.
	local originalStatements = block.statements;
	local visitedStatements = {};
	block.statements = visitedStatements;
	for _, statement in ipairs(originalStatements) do
		local returnedStatements = {visitStatement(statement, previsit, postvisit, data)};
		for j, returnedStatement in ipairs(returnedStatements) do
			visitedStatements[#visitedStatements + 1] = returnedStatement;
		end
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
`};var{lua:je,lauxlib:sh,lualib:q4,to_luastring:ks,to_jsstring:uc}=G4;function H4(e){let t=sh.luaL_newstate();q4.luaL_openlibs(t),je.lua_pushjsfunction(t,n=>{let s=je.lua_gettop(n),r=[];for(let o=1;o<=s;o++)je.lua_getglobal(n,ks("tostring")),je.lua_pushvalue(n,o),je.lua_call(n,1,1),r.push(uc(je.lua_tostring(n,-1),void 0,void 0,"?")),je.lua_pop(n,1);return e(r.join("	")),0}),je.lua_setglobal(t,ks("print"));for(let[n,s]of Object.entries(hE)){if(je.lua_getglobal(t,ks("package")),je.lua_getfield(t,-1,ks("preload")),sh.luaL_loadbuffer(t,ks(s),ks("="+n))!==je.LUA_OK){let o=uc(je.lua_tostring(t,-1));throw new Error(`Failed to compile embedded module "${n}": ${o}`)}je.lua_setfield(t,-2,ks(n)),je.lua_pop(t,2)}return t}function L4(e){return JSON.stringify(e)}var gE=["Minify","Weak","Medium","Strong"];function mE(e,t,{onLog:n=()=>{}}={}){if(!gE.includes(t))throw new Error(`Unknown preset "${t}". Must be one of ${gE.join(", ")}.`);n(`[${t}] Obfuscating...`);let s=H4(n),r=`
local Prometheus = require("prometheus")
	-- Surface parser, transform, rename and emit progress through the host print
	-- callback. This keeps a long-running input diagnosable in the browser
	-- rather than leaving the user with only a generic busy state.
	Prometheus.Logger.logLevel = Prometheus.Logger.LogLevel.Info
	Prometheus.colors.enabled = false
	local pipeline = Prometheus.Pipeline:fromConfig(Prometheus.Presets["${t}"])

local ok, out = pcall(function() return pipeline:apply(${L4(e)}, "input.lua") end)
if not ok then
  error(out, 0)
end
return out
`;if(sh.luaL_dostring(s,ks(r))!==je.LUA_OK){let l=uc(je.lua_tostring(s,-1),void 0,void 0,"?");return n(`[${t}] Obfuscation failed: ${l}`),{ok:!1,error:l,code:null,warning:`Obfuscation failed: ${l}`}}let a=uc(je.lua_tostring(s,-1),void 0,void 0,"?");return n(`[${t}] Done. (${e.length} bytes -> ${a.length} bytes)`),{ok:!0,code:a,warning:null}}self.onmessage=e=>{let{source:t,preset:n}=e.data||{};try{let s=mE(t,n,{onLog:r=>self.postMessage({type:"log",message:r})});self.postMessage({type:"result",result:s})}catch(s){self.postMessage({type:"error",error:s instanceof Error?s.message:String(s)})}};})();
/*! Bundled license information:

luanode-vm/src/fengari.js:
  (**
  @license MIT
  
  Copyright © 2017-2019 Benoit Giannangeli
  Copyright © 2017-2019 Daurnimator
  Copyright © 1994–2017 Lua.org, PUC-Rio.
  *)
*/
