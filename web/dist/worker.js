(()=>{var zS=Object.create;var Ea=Object.defineProperty;var JS=Object.getOwnPropertyDescriptor;var ZS=Object.getOwnPropertyNames;var YS=Object.getPrototypeOf,$S=Object.prototype.hasOwnProperty;var ds=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var QS=(e,t)=>()=>(e&&(t=e(e=0)),t);var P=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),eE=(e,t)=>{for(var n in t)Ea(e,n,{get:t[n],enumerable:!0})},td=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ZS(t))!$S.call(e,r)&&r!==n&&Ea(e,r,{get:()=>t[r],enumerable:!(s=JS(t,r))||s.enumerable});return e};var tE=(e,t,n)=>(n=e!=null?zS(YS(e)):{},td(t||!e||!e.__esModule?Ea(n,"default",{value:e,enumerable:!0}):n,e)),ka=e=>td(Ea({},"__esModule",{value:!0}),e);var ct=P((Aq,rd)=>{"use strict";var Ys=9223372036854775807n,Fn=-9223372036854775808n,eo=0x10000000000000000n,ln=Number.MAX_SAFE_INTEGER,cn=Number.MIN_SAFE_INTEGER,nE=function(e){return typeof e=="bigint"?!0:typeof e=="number"&&Number.isInteger(e)},Un=function(e){return typeof e=="number"&&Number.isInteger(e)&&e>=cn&&e<=ln},ue=function(e){return typeof e=="bigint"?e:BigInt(e)},Kn=function(e){return e>=cn&&e<=ln?Number(e):e},sE=function(e){return typeof e=="bigint"?e<Fn||e>Ys?null:Kn(e):typeof e=="number"&&Number.isInteger(e)?e>=cn&&e<=ln?e:Kn(BigInt(e.toFixed(0))):null},it=function(e){let t=e%eo;return t<Fn?t+=eo:t>Ys&&(t-=eo),Kn(t)},rE=function(e,t){if(Un(e)&&Un(t)){let n=e+t;if(n>=cn&&n<=ln)return n}return it(ue(e)+ue(t))},oE=function(e,t){if(Un(e)&&Un(t)){let n=e-t;if(n>=cn&&n<=ln)return n}return it(ue(e)-ue(t))},aE=function(e,t){if(Un(e)&&Un(t)){let n=e<0?-e:e,s=t<0?-t:t;if(n<=2097152&&s<=2097152)return e*t;let r=e*t;if(Number.isInteger(r)&&r>=cn&&r<=ln)return r}return it(ue(e)*ue(t))},lE=function(e){if(Un(e)){let t=-e;if(t>=cn&&t<=ln)return t}return it(-ue(e))},iE=function(e,t){let n=ue(e),s=ue(t);if(s===0n)return"divzero";if(n===Fn&&s===-1n)return"overflow";let r=n/s;return n<0n!=s<0n&&r*s!==n&&(r-=1n),it(r)},cE=function(e,t){let n=ue(e),s=ue(t);if(s===0n)return"divzero";if(n===Fn&&s===-1n)return 0;let r=n%s;return r<0n!=s<0n&&(r+=s),Kn(r)},xq=eo-1n,kt=function(e){return BigInt.asUintN(64,ue(e))},uE=function(e,t){return it(BigInt.asIntN(64,kt(e)&kt(t)))},pE=function(e,t){return it(BigInt.asIntN(64,kt(e)|kt(t)))},fE=function(e,t){return it(BigInt.asIntN(64,kt(e)^kt(t)))},dE=function(e){return it(BigInt.asIntN(64,~kt(e)))},nd=function(e,t){let n=ue(t);return n<0n?sd(e,-n):n>=64n?0:it(BigInt.asIntN(64,kt(e)<<n))},sd=function(e,t){let n=ue(t);return n<0n?nd(e,-n):n>=64n?0:it(BigInt.asIntN(64,kt(e)>>n))},hE=function(e,t){return kt(e)<kt(t)},gE=function(e,t){return typeof e=="bigint"||typeof t=="bigint"?ue(e)===ue(t):e===t},mE=function(e,t){return typeof e=="bigint"||typeof t=="bigint"?ue(e)<ue(t):e<t},_E=function(e,t){return typeof e=="bigint"||typeof t=="bigint"?ue(e)<=ue(t):e<=t},bE=function(e,t){if(typeof e!="number"||!isFinite(e))return null;let n=Math.floor(e);if(e!==n){if(t===0)return null;t>1&&(n+=1)}if(n>=cn&&n<=ln)return n;if(n<-9223372036854776e3||n>9223372036854776e3)return null;let s=BigInt(n.toFixed(0));return s<Fn||s>Ys?null:Kn(s)},xE=function(e){return typeof e=="bigint"?Number(e):e},AE=function(e){return typeof e=="bigint"?e.toString():String(e)},SE=function(e){try{let t=BigInt(e);return t<Fn||t>Ys?null:Kn(t)}catch{return null}},EE=function(e,t){try{let n=BigInt("0x"+e);return t&&(n=-n),n<Fn||n>Ys?null:Kn(n)}catch{return null}},kE=function(e){let t=kt(e),n=new ArrayBuffer(8),s=new DataView(n);return s.setUint32(0,Number(t&0xFFFFFFFFn),!0),s.setUint32(4,Number(t>>32n),!0),new Uint8Array(n)},vE=function(e){let t=new DataView(e.buffer,e.byteOffset,8),n=BigInt(t.getUint32(0,!0)),r=BigInt(t.getUint32(4,!0))<<32n|n;return it(BigInt.asIntN(64,r))};rd.exports={MAX_INT64:Ys,MIN_INT64:Fn,MODULO:eo,MAX_SAFE:ln,MIN_SAFE:cn,isIntRep:nE,isSafeNumber:Un,toBigInt:ue,toFloat:xE,toDecimalString:AE,toBytesLE:kE,fromBytesLE:vE,normalize:sE,shrink:Kn,wrap:it,add:rE,sub:oE,mul:aE,neg:lE,idiv:iE,imod:cE,band:uE,bor:pE,bxor:fE,bnot:dE,shiftl:nd,shiftr:sd,ult:hE,eq:gE,lt:mE,le:_E,fromFloat:bE,fromDecimalString:SE,fromHexString:EE}});var Ye=P((Sq,M)=>{"use strict";var va=typeof process<"u"&&process.env&&process.env.FENGARICONF?JSON.parse(process.env.FENGARICONF):{},{LUA_VERSION_MAJOR:TE,LUA_VERSION_MINOR:RE,to_luastring:$s}=ge(),yE=";";M.exports.LUA_PATH_SEP=yE;var NE="?";M.exports.LUA_PATH_MARK=NE;var OE="!";M.exports.LUA_EXEC_DIR=OE;var Qs=TE+"."+RE;M.exports.LUA_VDIR=Qs;if(typeof process>"u"){M.exports.LUA_DIRSEP="/";let t="./lua/"+Qs+"/";M.exports.LUA_LDIR=t;let n=t;M.exports.LUA_JSDIR=n;let s=$s(t+"?.lua;"+t+"?/init.lua;./?.lua;./?/init.lua");M.exports.LUA_PATH_DEFAULT=s;let r=$s(n+"?.js;"+n+"loadall.js;./?.js");M.exports.LUA_JSPATH_DEFAULT=r}else if(ds("os").platform()==="win32"){M.exports.LUA_DIRSEP="\\";let t="!\\lua\\";M.exports.LUA_LDIR=t;let n="!\\";M.exports.LUA_JSDIR=n;let s="!\\..\\share\\lua\\"+Qs+"\\";M.exports.LUA_SHRDIR=s;let r=$s(t+"?.lua;"+t+"?\\init.lua;"+n+"?.lua;"+n+"?\\init.lua;"+s+"?.lua;"+s+"?\\init.lua;.\\?.lua;.\\?\\init.lua");M.exports.LUA_PATH_DEFAULT=r;let o=$s(n+"?.js;"+n+"..\\share\\lua\\"+Qs+"\\?.js;"+n+"loadall.js;.\\?.js");M.exports.LUA_JSPATH_DEFAULT=o}else{M.exports.LUA_DIRSEP="/";let t="/usr/local/";M.exports.LUA_ROOT=t;let n="/usr/",s=t+"share/lua/"+Qs+"/",r=n+"share/lua/"+Qs+"/";M.exports.LUA_LDIR=s;let o=s;M.exports.LUA_JSDIR=o;let a=r,i=$s(s+"?.lua;"+s+"?/init.lua;"+r+"?.lua;"+r+"?/init.lua;./?.lua;./?/init.lua");M.exports.LUA_PATH_DEFAULT=i;let l=$s(o+"?.js;"+o+"loadall.js;"+a+"?.js;"+a+"loadall.js;./?.js");M.exports.LUA_JSPATH_DEFAULT=l}var CE=va.LUA_COMPAT_FLOATSTRING||!1,{MAX_INT64:IE,MIN_INT64:wE,shrink:ad}=ct(),VE=ad(IE),PE=ad(wE),UE=va.LUAI_MAXSTACK||1e6,KE=va.LUA_IDSIZE||59,{toDecimalString:FE,fromFloat:ME}=ct(),BE=function(e){return FE(e)},DE=function(e){if(e===1/0)return"inf";if(e===-1/0)return"-inf";if(Number.isNaN(e))return"nan";if(e===0)return Object.is(e,-0)?"-0":"0";let t=e<0,n=Math.abs(e),s=Math.floor(Math.log10(n)),r=14;if(s<-4||s>=r){let a=(n/Math.pow(10,s)).toPrecision(r);a=od(a);let i;return s>=0?i=s<10?"+0"+s:"+"+s:i=s>-10?"-0"+Math.abs(s):String(s),(t?"-":"")+a+"e"+i}else{let o=n.toPrecision(r);return o=od(o),(t?"-":"")+o}},od=function(e){return e.indexOf(".")>=0&&(e=e.replace(/0+$/,"").replace(/\.$/,"")),e},GE=function(e){let t=ME(e,0);return t===null?!1:t},ld="",qE="",LE=`%${ld}d`,HE="%.14g",jE=function(){return 46},XE=va.LUAL_BUFFERSIZE||8192,WE=function(e){if(e===0)return[e,0];let t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e);let n=t.getUint32(0)>>>20&2047;n===0&&(t.setFloat64(0,e*Math.pow(2,64)),n=(t.getUint32(0)>>>20&2047)-64);let s=n-1022;return[id(e,-s),s]},id=function(e,t){if(e===0||!isFinite(e))return e;let n=Math.min(3,Math.ceil(Math.abs(t)/1023)),s=e;for(let r=0;r<n;r++)s*=Math.pow(2,Math.floor((t+r)/n));return s};M.exports.LUAI_MAXSTACK=UE;M.exports.LUA_COMPAT_FLOATSTRING=CE;M.exports.LUA_IDSIZE=KE;M.exports.LUA_INTEGER_FMT=LE;M.exports.LUA_INTEGER_FRMLEN=ld;M.exports.LUA_MAXINTEGER=VE;M.exports.LUA_MININTEGER=PE;M.exports.LUA_NUMBER_FMT=HE;M.exports.LUA_NUMBER_FRMLEN=qE;M.exports.LUAL_BUFFERSIZE=XE;M.exports.frexp=WE;M.exports.ldexp=id;M.exports.lua_getlocaledecpoint=jE;M.exports.lua_integer2str=BE;M.exports.lua_number2str=DE;M.exports.lua_numbertointeger=GE});var ge=P((Eq,S)=>{"use strict";var ud=Uint8Array.from.bind(Uint8Array),zE=function(e,t,n){return e.indexOf(t,n)},JE=Uint8Array.of.bind(Uint8Array),to=function(e){return e instanceof Uint8Array},ZE=function(e,t){if(e!==t){let n=e.length;if(n!==t.length)return!1;for(let s=0;s<n;s++)if(e[s]!==t[s])return!1}return!0},Mt="cannot convert invalid utf8 to javascript string",YE=function(e,t,n,s){if(!to(e))throw new TypeError("to_jsstring expects a Uint8Array");n===void 0?n=e.length:n=Math.min(e.length,n);let r="",o=t!==void 0?t:0,a=!0;for(let i=o;i<n;i++)if(e[i]>=128){a=!1;break}if(a){if(n-o<=32768)return String.fromCharCode.apply(null,e.subarray(o,n));let l="";for(let u=o;u<n;u+=32768)l+=String.fromCharCode.apply(null,e.subarray(u,Math.min(u+32768,n)));return l}for(let i=o;i<n;){let l=e[i++];if(l<128)r+=String.fromCharCode(l);else if(l<194||l>244){if(!s)throw RangeError(Mt);r+="\xEF\xBF\xBD"}else if(l<=223){if(i>=n){if(!s)throw RangeError(Mt);r+="\xEF\xBF\xBD";continue}let u=e[i++];if((u&192)!==128){if(!s)throw RangeError(Mt);r+="\xEF\xBF\xBD";continue}r+=String.fromCharCode(((l&31)<<6)+(u&63))}else if(l<=239){if(i+1>=n){if(!s)throw RangeError(Mt);r+="\xEF\xBF\xBD";continue}let u=e[i++];if((u&192)!==128){if(!s)throw RangeError(Mt);r+="\xEF\xBF\xBD";continue}let c=e[i++];if((c&192)!==128){if(!s)throw RangeError(Mt);r+="\xEF\xBF\xBD";continue}let f=((l&15)<<12)+((u&63)<<6)+(c&63);if(f<=65535)r+=String.fromCharCode(f);else{f-=65536;let g=(f>>10)+55296,H=f%1024+56320;r+=String.fromCharCode(g,H)}}else{if(i+2>=n){if(!s)throw RangeError(Mt);r+="\xEF\xBF\xBD";continue}let u=e[i++];if((u&192)!==128){if(!s)throw RangeError(Mt);r+="\xEF\xBF\xBD";continue}let c=e[i++];if((c&192)!==128){if(!s)throw RangeError(Mt);r+="\xEF\xBF\xBD";continue}let f=e[i++];if((f&192)!==128){if(!s)throw RangeError(Mt);r+="\xEF\xBF\xBD";continue}let g=((l&7)<<18)+((u&63)<<12)+((c&63)<<6)+(f&63);g-=65536;let H=(g>>10)+55296,k=g%1024+56320;r+=String.fromCharCode(H,k)}}return r},$E=(function(){let e=";,/?:@&=+$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,-_.!~*'()#",t=new Uint8Array(256);for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=1;return t})(),QE=function(e){if(!to(e))throw new TypeError("to_uristring expects a Uint8Array");let t=e.length,n=[],s="";for(let r=0;r<t;r++){let o=e[r];$E[o]?s+=String.fromCharCode(o):(s.length&&(n.push(s),s=""),n.push("%"+(o<16?"0":"")+o.toString(16)))}return s.length&&n.push(s),n.length<=1?n[0]||"":n.join("")},cd={},Ki=function(e,t){if(typeof e!="string")throw new TypeError("to_luastring expects a javascript string");if(t){let o=cd[e];if(to(o))return o}let n=e.length,s=Array(n),r=0;for(let o=0;o<n;++o){let a=e.charCodeAt(o);if(a<=127)s[r++]=a;else if(a<=2047)s[r++]=192|a>>6,s[r++]=128|a&63;else{if(a>=55296&&a<=56319&&o+1<n){let i=e.charCodeAt(o+1);i>=56320&&i<=57343&&(o++,a=(a-55296)*1024+i+9216)}a<=65535?(s[r++]=224|a>>12,s[r++]=128|a>>6&63,s[r++]=128|a&63):(s[r++]=240|a>>18,s[r++]=128|a>>12&63,s[r++]=128|a>>6&63,s[r++]=128|a&63)}}return s=ud(s),t&&(cd[e]=s),s},ek=function(e){if(!to(e))if(typeof e=="string")e=Ki(e);else throw new TypeError("expects an array of bytes or javascript string");return e};S.exports.luastring_from=ud;S.exports.luastring_indexOf=zE;S.exports.luastring_of=JE;S.exports.is_luastring=to;S.exports.luastring_eq=ZE;S.exports.to_jsstring=YE;S.exports.to_uristring=QE;S.exports.to_luastring=Ki;S.exports.from_userstring=ek;var tk=Ki("\x1BLua"),pd="5",fd="3",nk=503,dd="4",hd="Lua "+pd+"."+fd,gd=hd+"."+dd,sk=gd+"  Copyright (C) 1994-2017 Lua.org, PUC-Rio",rk="R. Ierusalimschy, L. H. de Figueiredo, W. Celes";S.exports.LUA_SIGNATURE=tk;S.exports.LUA_VERSION_MAJOR=pd;S.exports.LUA_VERSION_MINOR=fd;S.exports.LUA_VERSION_NUM=nk;S.exports.LUA_VERSION_RELEASE=dd;S.exports.LUA_VERSION=hd;S.exports.LUA_RELEASE=gd;S.exports.LUA_COPYRIGHT=sk;S.exports.LUA_AUTHORS=rk;var ok={LUA_OK:0,LUA_YIELD:1,LUA_ERRRUN:2,LUA_ERRSYNTAX:3,LUA_ERRMEM:4,LUA_ERRGCMM:5,LUA_ERRERR:6},He={LUA_TNONE:-1,LUA_TNIL:0,LUA_TBOOLEAN:1,LUA_TLIGHTUSERDATA:2,LUA_TNUMBER:3,LUA_TSTRING:4,LUA_TTABLE:5,LUA_TFUNCTION:6,LUA_TUSERDATA:7,LUA_TTHREAD:8,LUA_NUMTAGS:9};He.LUA_TSHRSTR=He.LUA_TSTRING|0;He.LUA_TLNGSTR=He.LUA_TSTRING|16;He.LUA_TNUMFLT=He.LUA_TNUMBER|0;He.LUA_TNUMINT=He.LUA_TNUMBER|16;He.LUA_TLCL=He.LUA_TFUNCTION|0;He.LUA_TLCF=He.LUA_TFUNCTION|16;He.LUA_TCCL=He.LUA_TFUNCTION|32;var ak=0,lk=1,ik=2,ck=3,uk=4,pk=5,fk=6,dk=7,hk=8,gk=9,mk=10,_k=11,bk=12,xk=13,Ak=0,Sk=1,Ek=2,kk=20,{LUAI_MAXSTACK:vk}=Ye(),md=-vk-1e3,Tk=function(e){return md-e},Rk=1,_d=2,yk=_d,Ui=class{constructor(){this.event=NaN,this.name=null,this.namewhat=null,this.what=null,this.source=null,this.currentline=NaN,this.linedefined=NaN,this.lastlinedefined=NaN,this.nups=NaN,this.nparams=NaN,this.isvararg=NaN,this.istailcall=NaN,this.short_src=null,this.i_ci=null}},bd=0,xd=1,Ad=2,Sd=3,Nk=4,Ok=1<<bd,Ck=1<<xd,Ik=1<<Ad,wk=1<<Sd;S.exports.LUA_HOOKCALL=bd;S.exports.LUA_HOOKCOUNT=Sd;S.exports.LUA_HOOKLINE=Ad;S.exports.LUA_HOOKRET=xd;S.exports.LUA_HOOKTAILCALL=Nk;S.exports.LUA_MASKCALL=Ok;S.exports.LUA_MASKCOUNT=wk;S.exports.LUA_MASKLINE=Ik;S.exports.LUA_MASKRET=Ck;S.exports.LUA_MINSTACK=kk;S.exports.LUA_MULTRET=-1;S.exports.LUA_OPADD=ak;S.exports.LUA_OPBAND=dk;S.exports.LUA_OPBNOT=xk;S.exports.LUA_OPBOR=hk;S.exports.LUA_OPBXOR=gk;S.exports.LUA_OPDIV=pk;S.exports.LUA_OPEQ=Ak;S.exports.LUA_OPIDIV=fk;S.exports.LUA_OPLE=Ek;S.exports.LUA_OPLT=Sk;S.exports.LUA_OPMOD=ck;S.exports.LUA_OPMUL=ik;S.exports.LUA_OPPOW=uk;S.exports.LUA_OPSHL=mk;S.exports.LUA_OPSHR=_k;S.exports.LUA_OPSUB=lk;S.exports.LUA_OPUNM=bk;S.exports.LUA_REGISTRYINDEX=md;S.exports.LUA_RIDX_GLOBALS=_d;S.exports.LUA_RIDX_LAST=yk;S.exports.LUA_RIDX_MAINTHREAD=Rk;S.exports.constant_types=He;S.exports.lua_Debug=Ui;S.exports.lua_upvalueindex=Tk;S.exports.thread_status=ok});var $e=P((kq,Ne)=>{var Bt=ge(),Ed="0",kd="1",Vk=1,vd="5",Td="Fengari "+Ed+"."+kd,Rd=Td+"."+vd,yd="B. Giannangeli, Daurnimator",Pk=Rd+"  Copyright (C) 2017-2019 "+yd+`
Based on: `+Bt.LUA_COPYRIGHT;Ne.exports.FENGARI_AUTHORS=yd;Ne.exports.FENGARI_COPYRIGHT=Pk;Ne.exports.FENGARI_RELEASE=Rd;Ne.exports.FENGARI_VERSION=Td;Ne.exports.FENGARI_VERSION_MAJOR=Ed;Ne.exports.FENGARI_VERSION_MINOR=kd;Ne.exports.FENGARI_VERSION_NUM=Vk;Ne.exports.FENGARI_VERSION_RELEASE=vd;Ne.exports.is_luastring=Bt.is_luastring;Ne.exports.luastring_eq=Bt.luastring_eq;Ne.exports.luastring_from=Bt.luastring_from;Ne.exports.luastring_indexOf=Bt.luastring_indexOf;Ne.exports.luastring_of=Bt.luastring_of;Ne.exports.to_jsstring=Bt.to_jsstring;Ne.exports.to_luastring=Bt.to_luastring;Ne.exports.to_uristring=Bt.to_uristring;Ne.exports.from_userstring=Bt.from_userstring});var Qe=P((vq,Dt)=>{"use strict";var Uk=function(e){if(!e)throw Error("assertion failed")};Dt.exports.lua_assert=Uk;var Kk=function(e,t,n){if(!t)throw Error(n)};Dt.exports.api_check=Kk;var Fk=200;Dt.exports.LUAI_MAXCCALLS=Fk;var Mk=32;Dt.exports.LUA_MINBUFFER=Mk;var Bk=function(e,t,n){let s=t%n;return s*n<0&&(s+=n),s};Dt.exports.luai_nummod=Bk;var{MAX_INT64:Dk,MIN_INT64:Gk}=ct(),qk=Number.MAX_SAFE_INTEGER;Dt.exports.MAX_INT=qk;var Lk=-Number.MAX_SAFE_INTEGER;Dt.exports.MIN_INT=Lk;Dt.exports.MAX_INT64=Dk;Dt.exports.MIN_INT64=Gk});var Fi=P((Tq,hs)=>{"use strict";var{luastring_of:Hk}=ge(),er=Hk(0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,22,22,22,22,22,22,22,22,22,22,4,4,4,4,4,4,4,21,21,21,21,21,21,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,5,4,21,21,21,21,21,21,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),Nd=0,Od=1,jk=2,Xk=3,Wk=4,zk=function(e){return(er[e+1]&1<<Od)!==0},Jk=function(e){return(er[e+1]&1<<Wk)!==0},Zk=function(e){return(er[e+1]&1<<jk)!==0},Yk=function(e){return(er[e+1]&1<<Xk)!==0},$k=function(e){return(er[e+1]&1<<Nd)!==0},Qk=function(e){return(er[e+1]&(1<<Nd|1<<Od))!==0};hs.exports.lisdigit=zk;hs.exports.lislalnum=Qk;hs.exports.lislalpha=$k;hs.exports.lisprint=Zk;hs.exports.lisspace=Yk;hs.exports.lisxdigit=Jk});var Gt=P((Rq,Mn)=>{"use strict";var{is_luastring:ev,luastring_eq:tv,luastring_from:nv,to_luastring:sv}=ge(),{lua_assert:no}=Qe(),gs=class{constructor(t,n){this.hash=null,this.realstring=n}getstr(){return this.realstring}tsslen(){return this.realstring.length}},rv=(e,t)=>(no(e instanceof gs),no(t instanceof gs),e===t||tv(e.realstring,t.realstring)),Cd="|",Mi=32768,Id=e=>{no(ev(e));let t=e.length;if(t<=Mi)return Cd+String.fromCharCode.apply(null,e);let n=Cd;for(let s=0;s<t;s+=Mi)n+=String.fromCharCode.apply(null,e.subarray(s,s+Mi));return n},ov=function(e){return no(e instanceof gs),e.hash===null&&(e.hash=Id(e.getstr())),e.hash},Bi=function(e,t){return no(t instanceof Uint8Array),new gs(e,t)},av=function(e,t){return Bi(e,nv(t))},lv=function(e,t){return Bi(e,sv(t))};Mn.exports.luaS_eqlngstr=rv;Mn.exports.luaS_hash=Id;Mn.exports.luaS_hashlongstr=ov;Mn.exports.luaS_bless=Bi;Mn.exports.luaS_new=av;Mn.exports.luaS_newliteral=lv;Mn.exports.TString=gs});var qt=P((Nq,Nt)=>{"use strict";var{constant_types:{LUA_TBOOLEAN:iv,LUA_TCCL:cv,LUA_TLCF:uv,LUA_TLCL:pv,LUA_TLIGHTUSERDATA:fv,LUA_TLNGSTR:dv,LUA_TNIL:Pd,LUA_TNUMFLT:hv,LUA_TNUMINT:qi,LUA_TSHRSTR:gv,LUA_TTABLE:mv,LUA_TTHREAD:_v,LUA_TUSERDATA:bv},to_luastring:Di}=ge(),{LUA_MAXINTEGER:yq}=Ye(),{lua_assert:ro}=Qe(),xv=ct(),Gi=pn(),Be=ut(),{luaS_hashlongstr:Ud,TString:Av}=Gt(),Sv=un(),wd=new WeakMap,Vd=function(e){let t=wd.get(e);return t||(t={},wd.set(e,t)),t},Li=function(e,t){switch(t.type){case Pd:return Gi.luaG_runerror(e,Di("table index is nil",!0));case hv:if(isNaN(t.value))return Gi.luaG_runerror(e,Di("table index is NaN",!0));case qi:case iv:case mv:case pv:case uv:case cv:case bv:case _v:return t.value;case gv:case dv:return Ud(t.tsvalue());case fv:{let n=t.value;switch(typeof n){case"string":return"*"+n;case"number":return"#"+n;case"boolean":return n?"?true":"?false";case"function":return Vd(n);case"object":if(n instanceof Sv.lua_State&&n.l_G===e.l_G||n instanceof so||n instanceof Be.Udata||n instanceof Be.LClosure||n instanceof Be.CClosure)return Vd(n);default:return n}}default:throw new Error("unknown key type: "+t.type)}},so=class{constructor(t){this.id=t.l_G.id_counter++,this.strong=new Map,this.dead_strong=new Map,this.dead_weak=void 0,this.f=void 0,this.l=void 0,this.metatable=null,this.flags=-1}},Ev=function(e){e.flags=0},Kd=function(e,t,n,s){e.dead_strong.clear(),e.dead_weak=void 0;let r=null,o={key:n,value:s,p:r=e.l,n:void 0};e.f||(e.f=o),r&&(r.n=o),e.strong.set(t,o),e.l=o},kv=function(e){return typeof e=="object"?e!==null:typeof e=="function"},Fd=function(e,t){let n=e.strong.get(t);if(n){n.key.setdeadvalue(),n.value=void 0;let s=n.n,r=n.p;n.p=void 0,r&&(r.n=s),s&&(s.p=r),e.f===n&&(e.f=s),e.l===n&&(e.l=r),e.strong.delete(t),kv(t)?(e.dead_weak||(e.dead_weak=new WeakMap),e.dead_weak.set(t,n)):e.dead_strong.set(t,n)}},vv=function(e){return new so(e)},Hi=function(e,t){let n=e.strong.get(t);return n?n.value:Be.luaO_nilobject},Ta=function(e,t){return ro(typeof t=="number"&&Number.isInteger(t)),Hi(e,t)},Tv=function(e,t){return ro(t instanceof Av),Hi(e,Ud(t))},Rv=function(e,t,n){return ro(n instanceof Be.TValue),n.ttisnil()||n.ttisfloat()&&isNaN(n.value)?Be.luaO_nilobject:Hi(t,Li(e,n))},yv=function(e,t,n){ro(typeof t=="number"&&Number.isInteger(t)&&n instanceof Be.TValue);let s=t;if(n.ttisnil()){Fd(e,s);return}let r=e.strong.get(s);if(r)r.value.setfrom(n);else{let o=new Be.TValue(qi,t),a=new Be.TValue(n.type,n.value);Kd(e,s,o,a)}},Nv=function(e,t,n,s){ro(n instanceof Be.TValue);let r=Li(e,n);if(s.ttisnil()){Fd(t,r);return}let o=t.strong.get(r);if(o)o.value.setfrom(s);else{let a,i=n.value;if(n.ttisfloat()){let u=xv.fromFloat(i,0);u!==null?a=new Be.TValue(qi,u):a=new Be.TValue(n.type,i)}else a=new Be.TValue(n.type,i);let l=new Be.TValue(s.type,s.value);Kd(t,r,a,l)}},Ov=function(e){let t=0,n=e.strong.size+1;for(;!Ta(e,n).ttisnil();){if(t=n,n>4611686018427388e3){for(t=1;!Ta(e,t).ttisnil();)t++;return t-1}n*=2}for(;n-t>1;){let s=Math.floor((t+n)/2);Ta(e,s).ttisnil()?n=s:t=s}return t},Cv=function(e,t,n){let s=e.stack[n],r;if(s.type===Pd){if(r=t.f,!r)return!1}else{let o=Li(e,s);if(r=t.strong.get(o),r){if(r=r.n,!r)return!1}else{if(r=t.dead_weak&&t.dead_weak.get(o)||t.dead_strong.get(o),!r)return Gi.luaG_runerror(e,Di("invalid key to 'next'"));do if(r=r.n,!r)return!1;while(r.key.ttisdeadkey())}}return Be.setobj2s(e,n,r.key),Be.setobj2s(e,n+1,r.value),!0};Nt.exports.invalidateTMcache=Ev;Nt.exports.luaH_get=Rv;Nt.exports.luaH_getint=Ta;Nt.exports.luaH_getn=Ov;Nt.exports.luaH_getstr=Tv;Nt.exports.luaH_setfrom=Nv;Nt.exports.luaH_setint=yv;Nt.exports.luaH_new=vv;Nt.exports.luaH_next=Cv;Nt.exports.Table=so});var As=P((Oq,x)=>{"use strict";var Iv=["MOVE","LOADK","LOADKX","LOADBOOL","LOADNIL","GETUPVAL","GETTABUP","GETTABLE","SETTABUP","SETUPVAL","SETTABLE","NEWTABLE","SELF","ADD","SUB","MUL","MOD","POW","DIV","IDIV","BAND","BOR","BXOR","SHL","SHR","UNM","BNOT","NOT","LEN","CONCAT","JMP","EQ","LT","LE","TEST","TESTSET","CALL","TAILCALL","RETURN","FORLOOP","FORPREP","TFORCALL","TFORLOOP","SETLIST","CLOSURE","VARARG","EXTRAARG"],wv={OP_MOVE:0,OP_LOADK:1,OP_LOADKX:2,OP_LOADBOOL:3,OP_LOADNIL:4,OP_GETUPVAL:5,OP_GETTABUP:6,OP_GETTABLE:7,OP_SETTABUP:8,OP_SETUPVAL:9,OP_SETTABLE:10,OP_NEWTABLE:11,OP_SELF:12,OP_ADD:13,OP_SUB:14,OP_MUL:15,OP_MOD:16,OP_POW:17,OP_DIV:18,OP_IDIV:19,OP_BAND:20,OP_BOR:21,OP_BXOR:22,OP_SHL:23,OP_SHR:24,OP_UNM:25,OP_BNOT:26,OP_NOT:27,OP_LEN:28,OP_CONCAT:29,OP_JMP:30,OP_EQ:31,OP_LT:32,OP_LE:33,OP_TEST:34,OP_TESTSET:35,OP_CALL:36,OP_TAILCALL:37,OP_RETURN:38,OP_FORLOOP:39,OP_FORPREP:40,OP_TFORCALL:41,OP_TFORLOOP:42,OP_SETLIST:43,OP_CLOSURE:44,OP_VARARG:45,OP_EXTRAARG:46},pe=0,re=1,je=2,K=3,U=0,Ra=1,oo=2,Md=3,co=[64|je<<4|pe<<2|U,64|K<<4|pe<<2|Ra,64|pe<<4|pe<<2|Ra,64|re<<4|re<<2|U,64|re<<4|pe<<2|U,64|re<<4|pe<<2|U,64|re<<4|K<<2|U,64|je<<4|K<<2|U,0|K<<4|K<<2|U,0|re<<4|pe<<2|U,0|K<<4|K<<2|U,64|re<<4|re<<2|U,64|je<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|K<<4|K<<2|U,64|je<<4|pe<<2|U,64|je<<4|pe<<2|U,64|je<<4|pe<<2|U,64|je<<4|pe<<2|U,64|je<<4|je<<2|U,0|je<<4|pe<<2|oo,128|K<<4|K<<2|U,128|K<<4|K<<2|U,128|K<<4|K<<2|U,128|pe<<4|re<<2|U,192|je<<4|re<<2|U,64|re<<4|re<<2|U,64|re<<4|re<<2|U,0|re<<4|pe<<2|U,64|je<<4|pe<<2|oo,64|je<<4|pe<<2|oo,0|pe<<4|re<<2|U,64|je<<4|pe<<2|oo,0|re<<4|re<<2|U,64|re<<4|pe<<2|Ra,64|re<<4|pe<<2|U,0|re<<4|re<<2|Md],Vv=function(e){return co[e]&3},Pv=function(e){return co[e]>>4&3},Uv=function(e){return co[e]>>2&3},Kv=function(e){return co[e]&64},Fv=function(e){return co[e]&128},Bn=9,Dn=9,ms=Bn+Dn,bs=8,ao=Bn+Dn+bs,tr=6,Lt=0,Gn=Lt+tr,xs=Gn+bs,lo=xs+Bn,_s=xs,io=Gn,Bd=(1<<ms)-1,ya=Bd>>1,Mv=(1<<ao)-1,Dd=(1<<bs)-1,Bv=(1<<Dn)-1,Dv=(1<<Bn)-1,uo=1<<Dn-1,Gv=uo-1,qv=Dd,Lv=function(e){return e&uo},Hv=function(e){return e&~uo},jv=function(e){return e|uo},Pe=function(e,t){return~(-1<<e)<<t},Gd=function(e,t){return~Pe(e,t)},Xv=function(e){return e.opcode},Wv=function(e,t){return e.code=e.code&Gd(tr,Lt)|t<<Lt&Pe(tr,Lt),nr(e)},po=function(e,t,n,s){return e.code=e.code&Gd(s,n)|t<<n&Pe(s,n),nr(e)},zv=function(e){return e.A},Jv=function(e,t){return po(e,t,Gn,bs)},Zv=function(e){return e.B},Yv=function(e,t){return po(e,t,lo,Dn)},$v=function(e){return e.C},Qv=function(e,t){return po(e,t,xs,Bn)},eT=function(e){return e.Bx},qd=function(e,t){return po(e,t,_s,ms)},tT=function(e){return e.Ax},nT=function(e,t){return po(e,t,io,ao)},sT=function(e){return e.sBx},rT=function(e,t){return qd(e,t+ya)},nr=function(e){if(typeof e=="number")return{code:e,opcode:e>>Lt&Pe(tr,0),A:e>>Gn&Pe(bs,0),B:e>>lo&Pe(Dn,0),C:e>>xs&Pe(Bn,0),Bx:e>>_s&Pe(ms,0),Ax:e>>io&Pe(ao,0),sBx:(e>>_s&Pe(ms,0))-ya};{let t=e.code;return e.opcode=t>>Lt&Pe(tr,0),e.A=t>>Gn&Pe(bs,0),e.B=t>>lo&Pe(Dn,0),e.C=t>>xs&Pe(Bn,0),e.Bx=t>>_s&Pe(ms,0),e.Ax=t>>io&Pe(ao,0),e.sBx=(t>>_s&Pe(ms,0))-ya,e}},oT=function(e,t,n,s){return nr(e<<Lt|t<<Gn|n<<lo|s<<xs)},aT=function(e,t,n){return nr(e<<Lt|t<<Gn|n<<_s)},lT=function(e,t){return nr(e<<Lt|t<<io)},iT=50;x.exports.BITRK=uo;x.exports.CREATE_ABC=oT;x.exports.CREATE_ABx=aT;x.exports.CREATE_Ax=lT;x.exports.GET_OPCODE=Xv;x.exports.GETARG_A=zv;x.exports.GETARG_B=Zv;x.exports.GETARG_C=$v;x.exports.GETARG_Bx=eT;x.exports.GETARG_Ax=tT;x.exports.GETARG_sBx=sT;x.exports.INDEXK=Hv;x.exports.ISK=Lv;x.exports.LFIELDS_PER_FLUSH=iT;x.exports.MAXARG_A=Dd;x.exports.MAXARG_Ax=Mv;x.exports.MAXARG_B=Bv;x.exports.MAXARG_Bx=Bd;x.exports.MAXARG_C=Dv;x.exports.MAXARG_sBx=ya;x.exports.MAXINDEXRK=Gv;x.exports.NO_REG=qv;x.exports.OpArgK=K;x.exports.OpArgN=pe;x.exports.OpArgR=je;x.exports.OpArgU=re;x.exports.OpCodes=Iv;x.exports.OpCodesI=wv;x.exports.POS_A=Gn;x.exports.POS_Ax=io;x.exports.POS_B=lo;x.exports.POS_Bx=_s;x.exports.POS_C=xs;x.exports.POS_OP=Lt;x.exports.RKASK=jv;x.exports.SETARG_A=Jv;x.exports.SETARG_Ax=nT;x.exports.SETARG_B=Yv;x.exports.SETARG_Bx=qd;x.exports.SETARG_C=Qv;x.exports.SETARG_sBx=rT;x.exports.SET_OPCODE=Wv;x.exports.SIZE_A=bs;x.exports.SIZE_Ax=ao;x.exports.SIZE_B=Dn;x.exports.SIZE_Bx=ms;x.exports.SIZE_C=Bn;x.exports.SIZE_OP=tr;x.exports.fullins=nr;x.exports.getBMode=Pv;x.exports.getCMode=Uv;x.exports.getOpMode=Vv;x.exports.iABC=U;x.exports.iABx=Ra;x.exports.iAsBx=oo;x.exports.iAx=Md;x.exports.testAMode=Kv;x.exports.testTMode=Fv});var Es=P((Cq,Q)=>{"use strict";var{LUA_MASKLINE:cT,LUA_MASKCOUNT:uT,LUA_MULTRET:pT,constant_types:{LUA_TBOOLEAN:fT,LUA_TLCF:dT,LUA_TLIGHTUSERDATA:hT,LUA_TLNGSTR:Xd,LUA_TNIL:gT,LUA_TNUMBER:Wd,LUA_TNUMFLT:mT,LUA_TNUMINT:_T,LUA_TSHRSTR:zd,LUA_TTABLE:Jd,LUA_TUSERDATA:bT},to_luastring:et}=ge(),{INDEXK:Zd,ISK:Yd,LFIELDS_PER_FLUSH:xT,OpCodesI:{OP_ADD:$d,OP_BAND:Qd,OP_BNOT:eh,OP_BOR:th,OP_BXOR:nh,OP_CALL:Wi,OP_CLOSURE:AT,OP_CONCAT:sh,OP_DIV:rh,OP_EQ:oh,OP_EXTRAARG:ji,OP_FORLOOP:ST,OP_FORPREP:ET,OP_GETTABLE:ah,OP_GETTABUP:lh,OP_GETUPVAL:kT,OP_IDIV:ih,OP_JMP:ch,OP_LE:zi,OP_LEN:uh,OP_LOADBOOL:vT,OP_LOADK:TT,OP_LOADKX:RT,OP_LOADNIL:yT,OP_LT:ph,OP_MOD:fh,OP_MOVE:NT,OP_MUL:dh,OP_NEWTABLE:OT,OP_NOT:CT,OP_POW:hh,OP_RETURN:IT,OP_SELF:gh,OP_SETLIST:wT,OP_SETTABLE:VT,OP_SETTABUP:PT,OP_SETUPVAL:UT,OP_SHL:mh,OP_SHR:_h,OP_SUB:bh,OP_TAILCALL:KT,OP_TEST:FT,OP_TESTSET:MT,OP_TFORCALL:xh,OP_TFORLOOP:Ji,OP_UNM:Ah,OP_VARARG:BT}}=As(),{LUA_MAXINTEGER:DT,LUA_MININTEGER:GT,lua_numbertointeger:qT}=Ye(),{lua_assert:Ct,luai_nummod:LT}=Qe(),L=ct(),Z=ut(),Oa=vs(),Ln=un(),{luaS_bless:HT,luaS_eqlngstr:jT,luaS_hashlongstr:Ld}=Gt(),Oe=It(),A=ks(),Ss=qt(),Ke=pn(),XT=function(e){let t=e.ci,n=t.l_base,s=t.l_code[t.l_savedpc-1],r=s.opcode;switch(r){case $d:case bh:case dh:case rh:case ih:case Qd:case th:case nh:case mh:case _h:case fh:case hh:case Ah:case eh:case uh:case lh:case ah:case gh:{Z.setobjs2s(e,n+s.A,e.top-1),delete e.stack[--e.top];break}case zi:case ph:case oh:{let o=!e.stack[e.top-1].l_isfalse();delete e.stack[--e.top],t.callstatus&Ln.CIST_LEQ&&(Ct(r===zi),t.callstatus^=Ln.CIST_LEQ,o=!o),Ct(t.l_code[t.l_savedpc].opcode===ch),o!==!!s.A&&t.l_savedpc++;break}case sh:{let o=e.top-1,a=s.B,i=o-1-(n+a);Z.setobjs2s(e,o-2,o),i>1&&(e.top=o-1,ec(e,i)),Z.setobjs2s(e,t.l_base+s.A,e.top-1),Oe.adjust_top(e,t.top);break}case xh:{Ct(t.l_code[t.l_savedpc].opcode===Ji),Oe.adjust_top(e,t.top);break}case Wi:{s.C-1>=0&&Oe.adjust_top(e,t.top);break}}},Hd=function(e,t,n){return t+n.A},qn=function(e,t,n){return t+n.B},Ue=function(e,t,n,s){return Yd(s.B)?n[Zd(s.B)]:e.stack[t+s.B]},me=function(e,t,n,s){return Yd(s.C)?n[Zd(s.C)]:e.stack[t+s.C]},WT=function(e){let t=e.ci;t.callstatus|=Ln.CIST_FRESH;e:for(;;){Ct(t===e.ci);let n=t.func.value,s=n.p.k,r=t.l_base,o=t.l_code[t.l_savedpc++];e.hookmask&(cT|uT)&&Ke.luaG_traceexec(e);let a=Hd(e,r,o);switch(o.opcode){case NT:{Z.setobjs2s(e,a,qn(e,r,o));break}case TT:{let l=s[o.Bx];Z.setobj2s(e,a,l);break}case RT:{Ct(t.l_code[t.l_savedpc].opcode===ji);let l=s[t.l_code[t.l_savedpc++].Ax];Z.setobj2s(e,a,l);break}case vT:{e.stack[a].setbvalue(o.B!==0),o.C!==0&&t.l_savedpc++;break}case yT:{for(let l=0;l<=o.B;l++)e.stack[a+l].setnilvalue();break}case kT:{let l=o.B;Z.setobj2s(e,a,n.upvals[l]);break}case lh:{let l=n.upvals[o.B],u=me(e,r,s,o);Na(e,l,u,a);break}case ah:{let l=e.stack[qn(e,r,o)],u=me(e,r,s,o);Na(e,l,u,a);break}case PT:{let l=n.upvals[o.A],u=Ue(e,r,s,o),c=me(e,r,s,o);Zi(e,l,u,c);break}case UT:{n.upvals[o.B].setfrom(e.stack[a]);break}case VT:{let l=e.stack[a],u=Ue(e,r,s,o),c=me(e,r,s,o);Zi(e,l,u,c);break}case OT:{e.stack[a].sethvalue(Ss.luaH_new(e));break}case gh:{let l=qn(e,r,o),u=me(e,r,s,o);Z.setobjs2s(e,a+1,l),Na(e,e.stack[l],u,a);break}case $d:{let l=Ue(e,r,s,o),u=me(e,r,s,o),c,f;l.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(L.add(l.value,u.value)):(c=_e(l))!==!1&&(f=_e(u))!==!1?e.stack[a].setfltvalue(c+f):A.luaT_trybinTM(e,l,u,e.stack[a],A.TMS.TM_ADD);break}case bh:{let l=Ue(e,r,s,o),u=me(e,r,s,o),c,f;l.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(L.sub(l.value,u.value)):(c=_e(l))!==!1&&(f=_e(u))!==!1?e.stack[a].setfltvalue(c-f):A.luaT_trybinTM(e,l,u,e.stack[a],A.TMS.TM_SUB);break}case dh:{let l=Ue(e,r,s,o),u=me(e,r,s,o),c,f;l.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(L.mul(l.value,u.value)):(c=_e(l))!==!1&&(f=_e(u))!==!1?e.stack[a].setfltvalue(c*f):A.luaT_trybinTM(e,l,u,e.stack[a],A.TMS.TM_MUL);break}case fh:{let l=Ue(e,r,s,o),u=me(e,r,s,o),c,f;if(l.ttisinteger()&&u.ttisinteger()){let g=L.imod(l.value,u.value);g==="divzero"&&Ke.luaG_runerror(e,et("attempt to perform 'n%%0'")),e.stack[a].setivalue(g)}else(c=_e(l))!==!1&&(f=_e(u))!==!1?e.stack[a].setfltvalue(LT(e,c,f)):A.luaT_trybinTM(e,l,u,e.stack[a],A.TMS.TM_MOD);break}case hh:{let l=Ue(e,r,s,o),u=me(e,r,s,o),c,f;(c=_e(l))!==!1&&(f=_e(u))!==!1?e.stack[a].setfltvalue(Math.pow(c,f)):A.luaT_trybinTM(e,l,u,e.stack[a],A.TMS.TM_POW);break}case rh:{let l=Ue(e,r,s,o),u=me(e,r,s,o),c,f;(c=_e(l))!==!1&&(f=_e(u))!==!1?e.stack[a].setfltvalue(c/f):A.luaT_trybinTM(e,l,u,e.stack[a],A.TMS.TM_DIV);break}case ih:{let l=Ue(e,r,s,o),u=me(e,r,s,o),c,f;if(l.ttisinteger()&&u.ttisinteger()){let g=L.idiv(l.value,u.value);g==="divzero"?Ke.luaG_runerror(e,et("attempt to divide by zero")):g==="overflow"&&Ke.luaG_runerror(e,et("integer overflow")),e.stack[a].setivalue(g)}else(c=_e(l))!==!1&&(f=_e(u))!==!1?e.stack[a].setfltvalue(Math.floor(c/f)):A.luaT_trybinTM(e,l,u,e.stack[a],A.TMS.TM_IDIV);break}case Qd:{let l=Ue(e,r,s,o),u=me(e,r,s,o),c,f;(c=Ot(l))!==!1&&(f=Ot(u))!==!1?e.stack[a].setivalue(L.band(c,f)):A.luaT_trybinTM(e,l,u,e.stack[a],A.TMS.TM_BAND);break}case th:{let l=Ue(e,r,s,o),u=me(e,r,s,o),c,f;(c=Ot(l))!==!1&&(f=Ot(u))!==!1?e.stack[a].setivalue(L.bor(c,f)):A.luaT_trybinTM(e,l,u,e.stack[a],A.TMS.TM_BOR);break}case nh:{let l=Ue(e,r,s,o),u=me(e,r,s,o),c,f;(c=Ot(l))!==!1&&(f=Ot(u))!==!1?e.stack[a].setivalue(L.bxor(c,f)):A.luaT_trybinTM(e,l,u,e.stack[a],A.TMS.TM_BXOR);break}case mh:{let l=Ue(e,r,s,o),u=me(e,r,s,o),c,f;(c=Ot(l))!==!1&&(f=Ot(u))!==!1?e.stack[a].setivalue(L.shiftl(c,f)):A.luaT_trybinTM(e,l,u,e.stack[a],A.TMS.TM_SHL);break}case _h:{let l=Ue(e,r,s,o),u=me(e,r,s,o),c,f;(c=Ot(l))!==!1&&(f=Ot(u))!==!1?e.stack[a].setivalue(L.shiftr(c,f)):A.luaT_trybinTM(e,l,u,e.stack[a],A.TMS.TM_SHR);break}case Ah:{let l=e.stack[qn(e,r,o)],u;l.ttisinteger()?e.stack[a].setivalue(L.neg(l.value)):(u=_e(l))!==!1?e.stack[a].setfltvalue(-u):A.luaT_trybinTM(e,l,l,e.stack[a],A.TMS.TM_UNM);break}case eh:{let l=e.stack[qn(e,r,o)];l.ttisinteger()?e.stack[a].setivalue(L.bnot(l.value)):A.luaT_trybinTM(e,l,l,e.stack[a],A.TMS.TM_BNOT);break}case CT:{let l=e.stack[qn(e,r,o)];e.stack[a].setbvalue(l.l_isfalse());break}case uh:{Th(e,e.stack[a],e.stack[qn(e,r,o)]);break}case sh:{let l=o.B,u=o.C;e.top=r+u+1,ec(e,u-l+1);let c=r+l;Z.setobjs2s(e,a,c),Oe.adjust_top(e,t.top);break}case ch:{Sh(e,t,o,0);break}case oh:{Yi(e,Ue(e,r,s,o),me(e,r,s,o))!==o.A?t.l_savedpc++:fo(e,t);break}case ph:{Eh(e,Ue(e,r,s,o),me(e,r,s,o))!==o.A?t.l_savedpc++:fo(e,t);break}case zi:{kh(e,Ue(e,r,s,o),me(e,r,s,o))!==o.A?t.l_savedpc++:fo(e,t);break}case FT:{(o.C?e.stack[a].l_isfalse():!e.stack[a].l_isfalse())?t.l_savedpc++:fo(e,t);break}case MT:{let l=qn(e,r,o),u=e.stack[l];(o.C?u.l_isfalse():!u.l_isfalse())?t.l_savedpc++:(Z.setobjs2s(e,a,l),fo(e,t));break}case Wi:{let l=o.B,u=o.C-1;if(l!==0&&Oe.adjust_top(e,a+l),Oe.luaD_precall(e,a,u))u>=0&&Oe.adjust_top(e,t.top);else{t=e.ci;continue e}break}case KT:{let l=o.B;if(l!==0&&Oe.adjust_top(e,a+l),!Oe.luaD_precall(e,a,pT)){let u=e.ci,c=u.previous,f=u.func,g=u.funcOff,H=c.funcOff,k=u.l_base+f.value.p.numparams;n.p.p.length>0&&Oa.luaF_close(e,c.l_base);for(let W=0;g+W<k;W++)Z.setobjs2s(e,H+W,g+W);c.l_base=H+(u.l_base-g),c.top=H+(e.top-g),Oe.adjust_top(e,c.top),c.l_code=u.l_code,c.l_savedpc=u.l_savedpc,c.callstatus|=Ln.CIST_TAIL,c.next=null,t=e.ci=c,Ct(e.top===c.l_base+e.stack[H].value.p.maxstacksize);continue e}break}case IT:{n.p.p.length>0&&Oa.luaF_close(e,r);let l=Oe.luaD_poscall(e,t,a,o.B!==0?o.B-1:e.top-a);if(t.callstatus&Ln.CIST_FRESH)return;t=e.ci,l&&Oe.adjust_top(e,t.top),Ct(t.callstatus&Ln.CIST_LUA),Ct(t.l_code[t.l_savedpc-1].opcode===Wi);continue e}case ST:{if(e.stack[a].ttisinteger()){let l=e.stack[a+2].value,u=L.add(e.stack[a].value,l),c=e.stack[a+1].value;(L.lt(0,l)?L.le(u,c):L.le(c,u))&&(t.l_savedpc+=o.sBx,e.stack[a].chgivalue(u),e.stack[a+3].setivalue(u))}else{let l=e.stack[a+2].value,u=e.stack[a].value+l,c=e.stack[a+1].value;(0<l?u<=c:c<=u)&&(t.l_savedpc+=o.sBx,e.stack[a].chgfltvalue(u),e.stack[a+3].setfltvalue(u))}break}case ET:{let l=e.stack[a],u=e.stack[a+1],c=e.stack[a+2],f;if(l.ttisinteger()&&c.ttisinteger()&&(f=JT(u,c.value))){let g=f.stopnow?0:l.value;u.value=f.ilimit,l.value=L.sub(g,c.value)}else{let g,H,k;(g=_e(u))===!1&&Ke.luaG_runerror(e,et("'for' limit must be a number",!0)),e.stack[a+1].setfltvalue(g),(H=_e(c))===!1&&Ke.luaG_runerror(e,et("'for' step must be a number",!0)),e.stack[a+2].setfltvalue(H),(k=_e(l))===!1&&Ke.luaG_runerror(e,et("'for' initial value must be a number",!0)),e.stack[a].setfltvalue(k-H)}t.l_savedpc+=o.sBx;break}case xh:{let l=a+3;Z.setobjs2s(e,l+2,a+2),Z.setobjs2s(e,l+1,a+1),Z.setobjs2s(e,l,a),Oe.adjust_top(e,l+3),Oe.luaD_call(e,l,o.C),Oe.adjust_top(e,t.top),o=t.l_code[t.l_savedpc++],a=Hd(e,r,o),Ct(o.opcode===Ji)}case Ji:{e.stack[a+1].ttisnil()||(Z.setobjs2s(e,a,a+1),t.l_savedpc+=o.sBx);break}case wT:{let l=o.B,u=o.C;l===0&&(l=e.top-a-1),u===0&&(Ct(t.l_code[t.l_savedpc].opcode===ji),u=t.l_code[t.l_savedpc++].Ax);let c=e.stack[a].value,f=(u-1)*xT+l;for(;l>0;l--)Ss.luaH_setint(c,f--,e.stack[a+l]);Oe.adjust_top(e,t.top);break}case AT:{let l=n.p.p[o.Bx],u=l1(l,n.upvals,e.stack,r);u===null?i1(e,l,n.upvals,r,a):e.stack[a].setclLvalue(u);break}case BT:{let l=o.B-1,u=r-t.funcOff-n.p.numparams-1,c;for(u<0&&(u=0),l<0&&(l=u,Oe.luaD_checkstack(e,u),Oe.adjust_top(e,a+u)),c=0;c<l&&c<u;c++)Z.setobjs2s(e,a+c,r-u+c);for(;c<l;c++)e.stack[a+c].setnilvalue();break}case ji:throw Error("invalid opcode")}}},Sh=function(e,t,n,s){let r=n.A;r!==0&&Oa.luaF_close(e,t.l_base+r-1),t.l_savedpc+=n.sBx+s},fo=function(e,t){Sh(e,t,t.l_code[t.l_savedpc],1)},Eh=function(e,t,n){if(t.ttisnumber()&&n.ttisnumber())return ZT(t,n)?1:0;if(t.ttisstring()&&n.ttisstring())return vh(t.tsvalue(),n.tsvalue())<0?1:0;{let s=A.luaT_callorderTM(e,t,n,A.TMS.TM_LT);return s===null&&Ke.luaG_ordererror(e,t,n),s?1:0}},kh=function(e,t,n){let s;return t.ttisnumber()&&n.ttisnumber()?YT(t,n)?1:0:t.ttisstring()&&n.ttisstring()?vh(t.tsvalue(),n.tsvalue())<=0?1:0:(s=A.luaT_callorderTM(e,t,n,A.TMS.TM_LE),s!==null?s?1:0:(e.ci.callstatus|=Ln.CIST_LEQ,s=A.luaT_callorderTM(e,n,t,A.TMS.TM_LT),e.ci.callstatus^=Ln.CIST_LEQ,s===null&&Ke.luaG_ordererror(e,t,n),s?0:1))},Yi=function(e,t,n){if(t.ttype()!==n.ttype())return t.ttnov()!==n.ttnov()||t.ttnov()!==Wd?0:L.eq(t.value,n.value)?1:0;let s;switch(t.ttype()){case gT:return 1;case fT:return t.value==n.value?1:0;case hT:case _T:return L.eq(t.value,n.value)?1:0;case mT:case dT:return t.value===n.value?1:0;case zd:case Xd:return jT(t.tsvalue(),n.tsvalue())?1:0;case bT:case Jd:if(t.value===n.value)return 1;if(e===null)return 0;s=A.fasttm(e,t.value.metatable,A.TMS.TM_EQ),s===null&&(s=A.fasttm(e,n.value.metatable,A.TMS.TM_EQ));break;default:return t.value===n.value?1:0}if(s===null)return 0;let r=new Z.TValue;return A.luaT_callTM(e,s,t,n,r,1),r.l_isfalse()?0:1},zT=function(e,t){return Yi(null,e,t)},JT=function(e,t){let n=!1,s=Ca(e,t<0?2:1);if(s===!1){let r=_e(e);if(r===!1)return!1;0<r?(s=DT,t<0&&(n=!0)):(s=GT,t>=0&&(n=!0))}return{stopnow:n,ilimit:s}},Ca=function(e,t){if(e.ttisfloat()){let n=e.value,s=Math.floor(n);if(n!==s){if(t===0)return!1;t>1&&(s+=1)}return qT(s)}else{if(e.ttisinteger())return e.value;if(Qi(e)){let n=new Z.TValue;if(Z.luaO_str2num(e.svalue(),n)===e.vslen()+1)return Ca(n,t)}}return!1},Ot=function(e){return e.ttisinteger()?e.value:Ca(e,0)},_e=function(e){if(e.ttnov()===Wd)return e.ttisinteger()?L.toFloat(e.value):e.value;if(Qi(e)){let t=new Z.TValue;if(Z.luaO_str2num(e.svalue(),t)===e.vslen()+1)return t.ttisinteger()?L.toFloat(t.value):t.value}return!1},ZT=function(e,t){return typeof e.value=="bigint"||typeof t.value=="bigint"?L.lt(e.value,t.value):e.value<t.value},YT=function(e,t){return typeof e.value=="bigint"||typeof t.value=="bigint"?L.le(e.value,t.value):e.value<=t.value},vh=function(e,t){let n=Ld(e),s=Ld(t);return n===s?0:n<s?-1:1},Th=function(e,t,n){let s;switch(n.ttype()){case Jd:{let r=n.value;if(s=A.fasttm(e,r.metatable,A.TMS.TM_LEN),s!==null)break;t.setivalue(Ss.luaH_getn(r));return}case zd:case Xd:t.setivalue(n.vslen());return;default:{s=A.luaT_gettmbyobj(e,n,A.TMS.TM_LEN),s.ttisnil()&&Ke.luaG_typeerror(e,n,et("get length of",!0));break}}A.luaT_callTM(e,s,n,n,t,1)},$T=function(e,t){return L.mul(e,t)},QT=function(e,t,n){let s=L.idiv(t,n);return s==="divzero"?Ke.luaG_runerror(e,et("attempt to divide by zero")):s==="overflow"&&Ke.luaG_runerror(e,et("integer overflow")),s},e1=function(e,t,n){let s=L.imod(t,n);return s==="divzero"&&Ke.luaG_runerror(e,et("attempt to perform 'n%%0'")),s},t1=function(e,t){return L.band(e,t)},n1=function(e,t){return L.bor(e,t)},s1=function(e,t){return L.bxor(e,t)},r1=function(e){return L.bnot(e)},o1=function(e,t){return L.shiftl(e,t)},a1=function(e,t){return L.shiftr(e,t)},l1=function(e,t,n,s){let r=e.cache;if(r!==null){let o=e.upvalues,a=o.length;for(let i=0;i<a;i++){let l=o[i].instack?n[s+o[i].idx]:t[o[i].idx];if(r.upvals[i]!==l)return null}}return r},i1=function(e,t,n,s,r){let o=t.upvalues.length,a=t.upvalues,i=new Z.LClosure(e,o);i.p=t,e.stack[r].setclLvalue(i);for(let l=0;l<o;l++)a[l].instack?i.upvals[l]=Oa.luaF_findupval(e,s+a[l].idx):i.upvals[l]=n[a[l].idx];t.cache=i},$i=function(e){return e.ttisnumber()},Qi=function(e){return e.ttisstring()},Xi=function(e,t){let n=e.stack[t];return n.ttisstring()?!0:$i(n)?(Z.luaO_tostring(e,n),!0):!1},jd=function(e){return e.ttisstring()&&e.vslen()===0},c1=function(e,t,n,s){let r=0;do{let o=e.stack[t-n],a=o.vslen(),i=o.svalue();s.set(i,r),r+=a}while(--n>0)},ec=function(e,t){Ct(t>=2);do{let n=e.top,s=2;if(!(e.stack[n-2].ttisstring()||$i(e.stack[n-2]))||!Xi(e,n-1))A.luaT_trybinTM(e,e.stack[n-2],e.stack[n-1],e.stack[n-2],A.TMS.TM_CONCAT);else if(jd(e.stack[n-1]))Xi(e,n-2);else if(jd(e.stack[n-2]))Z.setobjs2s(e,n-2,n-1);else{let r=e.stack[n-1].vslen();for(s=1;s<t&&Xi(e,n-s-1);s++){let i=e.stack[n-s-1].vslen();r+=i}let o=new Uint8Array(r);c1(e,n,s,o);let a=HT(e,o);Z.setsvalue2s(e,n-s,a)}for(t-=s-1;e.top>n-(s-1);)delete e.stack[--e.top]}while(t>1)},Rh=2e3,Na=function(e,t,n,s){for(let r=0;r<Rh;r++){let o;if(!t.ttistable())o=A.luaT_gettmbyobj(e,t,A.TMS.TM_INDEX),o.ttisnil()&&Ke.luaG_typeerror(e,t,et("index",!0));else{let a=Ss.luaH_get(e,t.value,n);if(a.ttisnil()){if(o=A.fasttm(e,t.value.metatable,A.TMS.TM_INDEX),o===null){e.stack[s].setnilvalue();return}}else{Z.setobj2s(e,s,a);return}}if(o.ttisfunction()){A.luaT_callTM(e,o,t,n,e.stack[s],1);return}t=o}Ke.luaG_runerror(e,et("'__index' chain too long; possible loop",!0))},Zi=function(e,t,n,s){for(let r=0;r<Rh;r++){let o;if(t.ttistable()){let a=t.value;if(!Ss.luaH_get(e,a,n).ttisnil()||(o=A.fasttm(e,a.metatable,A.TMS.TM_NEWINDEX))===null){Ss.luaH_setfrom(e,a,n,s),Ss.invalidateTMcache(a);return}}else(o=A.luaT_gettmbyobj(e,t,A.TMS.TM_NEWINDEX)).ttisnil()&&Ke.luaG_typeerror(e,t,et("index",!0));if(o.ttisfunction()){A.luaT_callTM(e,o,t,n,s,0);return}t=o}Ke.luaG_runerror(e,et("'__newindex' chain too long; possible loop",!0))};Q.exports.cvt2str=$i;Q.exports.cvt2num=Qi;Q.exports.luaV_gettable=Na;Q.exports.luaV_concat=ec;Q.exports.luaV_div=QT;Q.exports.luaV_equalobj=Yi;Q.exports.luaV_execute=WT;Q.exports.luaV_finishOp=XT;Q.exports.luaV_imul=$T;Q.exports.luaV_lessequal=kh;Q.exports.luaV_lessthan=Eh;Q.exports.luaV_mod=e1;Q.exports.luaV_objlen=Th;Q.exports.luaV_rawequalobj=zT;Q.exports.luaV_shiftl=o1;Q.exports.luaV_shiftr=a1;Q.exports.luaV_band=t1;Q.exports.luaV_bor=n1;Q.exports.luaV_bxor=s1;Q.exports.luaV_bnot=r1;Q.exports.luaV_tointeger=Ca;Q.exports.settable=Zi;Q.exports.tointeger=Ot;Q.exports.tonumber=_e});var ks=P((Iq,vt)=>{"use strict";var{constant_types:{LUA_TTABLE:u1,LUA_TUSERDATA:p1},to_luastring:z}=ge(),{lua_assert:f1}=Qe(),sr=ut(),yh=It(),d1=un(),{luaS_bless:h1,luaS_new:ne}=Gt(),nc=qt(),Ia=pn(),Nh=Es(),g1=["no value","nil","boolean","userdata","number","string","table","function","userdata","thread","proto"].map(e=>z(e)),Oh=function(e){return g1[e+1]},G={TM_INDEX:0,TM_NEWINDEX:1,TM_GC:2,TM_MODE:3,TM_LEN:4,TM_EQ:5,TM_ADD:6,TM_SUB:7,TM_MUL:8,TM_MOD:9,TM_POW:10,TM_DIV:11,TM_IDIV:12,TM_BAND:13,TM_BOR:14,TM_BXOR:15,TM_SHL:16,TM_SHR:17,TM_UNM:18,TM_BNOT:19,TM_LT:20,TM_LE:21,TM_CONCAT:22,TM_CALL:23,TM_N:24},m1=function(e){e.l_G.tmname[G.TM_INDEX]=new ne(e,z("__index",!0)),e.l_G.tmname[G.TM_NEWINDEX]=new ne(e,z("__newindex",!0)),e.l_G.tmname[G.TM_GC]=new ne(e,z("__gc",!0)),e.l_G.tmname[G.TM_MODE]=new ne(e,z("__mode",!0)),e.l_G.tmname[G.TM_LEN]=new ne(e,z("__len",!0)),e.l_G.tmname[G.TM_EQ]=new ne(e,z("__eq",!0)),e.l_G.tmname[G.TM_ADD]=new ne(e,z("__add",!0)),e.l_G.tmname[G.TM_SUB]=new ne(e,z("__sub",!0)),e.l_G.tmname[G.TM_MUL]=new ne(e,z("__mul",!0)),e.l_G.tmname[G.TM_MOD]=new ne(e,z("__mod",!0)),e.l_G.tmname[G.TM_POW]=new ne(e,z("__pow",!0)),e.l_G.tmname[G.TM_DIV]=new ne(e,z("__div",!0)),e.l_G.tmname[G.TM_IDIV]=new ne(e,z("__idiv",!0)),e.l_G.tmname[G.TM_BAND]=new ne(e,z("__band",!0)),e.l_G.tmname[G.TM_BOR]=new ne(e,z("__bor",!0)),e.l_G.tmname[G.TM_BXOR]=new ne(e,z("__bxor",!0)),e.l_G.tmname[G.TM_SHL]=new ne(e,z("__shl",!0)),e.l_G.tmname[G.TM_SHR]=new ne(e,z("__shr",!0)),e.l_G.tmname[G.TM_UNM]=new ne(e,z("__unm",!0)),e.l_G.tmname[G.TM_BNOT]=new ne(e,z("__bnot",!0)),e.l_G.tmname[G.TM_LT]=new ne(e,z("__lt",!0)),e.l_G.tmname[G.TM_LE]=new ne(e,z("__le",!0)),e.l_G.tmname[G.TM_CONCAT]=new ne(e,z("__concat",!0)),e.l_G.tmname[G.TM_CALL]=new ne(e,z("__call",!0))},_1=z("__name",!0),b1=function(e,t){let n;if(t.ttistable()&&(n=t.value.metatable)!==null||t.ttisfulluserdata()&&(n=t.value.metatable)!==null){let s=nc.luaH_getstr(n,h1(e,_1));if(s.ttisstring())return s.svalue()}return Oh(t.ttnov())},Ch=function(e,t,n,s,r,o){let a=e.top;if(sr.pushobj2s(e,t),sr.pushobj2s(e,n),sr.pushobj2s(e,s),o||sr.pushobj2s(e,r),e.ci.callstatus&d1.CIST_LUA?yh.luaD_call(e,a,o):yh.luaD_callnoyield(e,a,o),o){let i=e.stack[e.top-1];delete e.stack[--e.top],r.setfrom(i)}},sc=function(e,t,n,s,r){let o=tc(e,t,r);return o.ttisnil()&&(o=tc(e,n,r)),o.ttisnil()?!1:(Ch(e,o,t,n,s,1),!0)},x1=function(e,t,n,s,r){if(!sc(e,t,n,s,r))switch(r){case G.TM_CONCAT:return Ia.luaG_concaterror(e,t,n);case G.TM_BAND:case G.TM_BOR:case G.TM_BXOR:case G.TM_SHL:case G.TM_SHR:case G.TM_BNOT:{let o=Nh.tonumber(t),a=Nh.tonumber(n);return o!==!1&&a!==!1?Ia.luaG_tointerror(e,t,n):Ia.luaG_opinterror(e,t,n,z("perform bitwise operation on",!0))}default:return Ia.luaG_opinterror(e,t,n,z("perform arithmetic on",!0))}},A1=function(e,t,n,s){let r=new sr.TValue;return sc(e,t,n,r,s)?!r.l_isfalse():null},S1=function(e,t,n){return t===null||t.flags&1<<n?null:Ih(t,n,e.l_G.tmname[n])},Ih=function(e,t,n){let s=nc.luaH_getstr(e,n);return f1(t<=G.TM_EQ),s.ttisnil()?(e.flags|=1<<t,null):s},tc=function(e,t,n){let s;switch(t.ttnov()){case u1:case p1:s=t.value.metatable;break;default:s=e.l_G.mt[t.ttnov()]}return s?nc.luaH_getstr(s,e.l_G.tmname[n]):sr.luaO_nilobject};vt.exports.fasttm=S1;vt.exports.TMS=G;vt.exports.luaT_callTM=Ch;vt.exports.luaT_callbinTM=sc;vt.exports.luaT_trybinTM=x1;vt.exports.luaT_callorderTM=A1;vt.exports.luaT_gettm=Ih;vt.exports.luaT_gettmbyobj=tc;vt.exports.luaT_init=m1;vt.exports.luaT_objtypename=b1;vt.exports.ttypename=Oh});var un=P((wq,Se)=>{"use strict";var{LUA_MINSTACK:Vh,LUA_RIDX_GLOBALS:E1,LUA_RIDX_MAINTHREAD:k1,constant_types:{LUA_NUMTAGS:v1,LUA_TNIL:Ph,LUA_TTABLE:T1,LUA_TTHREAD:Uh},thread_status:{LUA_OK:Kh}}=ge(),ho=ut(),R1=It(),Fh=_o(),wa=qt(),Mh=ks(),Bh=5,wh=2*Vh,go=class{constructor(){this.func=null,this.funcOff=NaN,this.top=NaN,this.previous=null,this.next=null,this.l_base=NaN,this.l_code=null,this.l_savedpc=NaN,this.c_k=null,this.c_old_errfunc=null,this.c_ctx=null,this.nresults=NaN,this.callstatus=NaN}},mo=class{constructor(t){this.id=t.id_counter++,this.base_ci=new go,this.top=NaN,this.stack_last=NaN,this.oldpc=NaN,this.l_G=t,this.stack=null,this.ci=null,this.errorJmp=null,this.nCcalls=0,this.hook=null,this.hookmask=0,this.basehookcount=0,this.allowhook=1,this.hookcount=this.basehookcount,this.nny=1,this.status=Kh,this.errfunc=0}},rc=class{constructor(){this.id_counter=1,this.ids=new WeakMap,this.mainthread=null,this.l_registry=new ho.TValue(Ph,null),this.panic=null,this.atnativeerror=null,this.version=null,this.tmname=new Array(Mh.TMS.TM_N),this.mt=new Array(v1)}},y1=function(e){let t=new go;return e.ci.next=t,t.previous=e.ci,t.next=null,e.ci=t,t},Dh=function(e){let t=e.ci;t.next=null},Gh=function(e,t){e.stack=new Array(wh),e.top=0,e.stack_last=wh-Bh;let n=e.base_ci;n.next=n.previous=null,n.callstatus=0,n.funcOff=e.top,n.func=e.stack[e.top],e.stack[e.top++]=new ho.TValue(Ph,null),n.top=e.top+Vh,e.ci=n},qh=function(e){e.ci=e.base_ci,Dh(e),e.stack=null},N1=function(e,t){let n=wa.luaH_new(e);t.l_registry.sethvalue(n),wa.luaH_setint(n,k1,new ho.TValue(Uh,e)),wa.luaH_setint(n,E1,new ho.TValue(T1,wa.luaH_new(e)))},O1=function(e){let t=e.l_G;Gh(e,e),N1(e,t),Mh.luaT_init(e),t.version=Fh.lua_version(null)},C1=function(e){let t=e.l_G,n=new mo(t);return e.stack[e.top]=new ho.TValue(Uh,n),Fh.api_incr_top(e),n.hookmask=e.hookmask,n.basehookcount=e.basehookcount,n.hook=e.hook,n.hookcount=n.basehookcount,Gh(n,e),n},I1=function(e,t){qh(t)},w1=function(){let e=new rc,t=new mo(e);return e.mainthread=t,R1.luaD_rawrunprotected(t,O1,null)!==Kh&&(t=null),t},V1=function(e){qh(e)},P1=function(e){e=e.l_G.mainthread,V1(e)};Se.exports.lua_State=mo;Se.exports.CallInfo=go;Se.exports.CIST_OAH=1;Se.exports.CIST_LUA=2;Se.exports.CIST_HOOKED=4;Se.exports.CIST_FRESH=8;Se.exports.CIST_YPCALL=16;Se.exports.CIST_TAIL=32;Se.exports.CIST_HOOKYIELD=64;Se.exports.CIST_LEQ=128;Se.exports.CIST_FIN=256;Se.exports.EXTRA_STACK=Bh;Se.exports.lua_close=P1;Se.exports.lua_newstate=w1;Se.exports.lua_newthread=C1;Se.exports.luaE_extendCI=y1;Se.exports.luaE_freeCI=Dh;Se.exports.luaE_freethread=I1});var ut=P((Uq,ee)=>{"use strict";var{LUA_OPADD:gc,LUA_OPBAND:eg,LUA_OPBNOT:tg,LUA_OPBOR:ng,LUA_OPBXOR:sg,LUA_OPDIV:rg,LUA_OPIDIV:og,LUA_OPMOD:ag,LUA_OPMUL:lg,LUA_OPPOW:ig,LUA_OPSHL:cg,LUA_OPSHR:ug,LUA_OPSUB:pg,LUA_OPUNM:fg,constant_types:{LUA_NUMTAGS:dg,LUA_TBOOLEAN:Lh,LUA_TCCL:Hh,LUA_TFUNCTION:jh,LUA_TLCF:Xh,LUA_TLCL:Wh,LUA_TLIGHTUSERDATA:zh,LUA_TLNGSTR:cc,LUA_TNIL:bo,LUA_TNUMBER:U1,LUA_TNUMFLT:oc,LUA_TNUMINT:ac,LUA_TSHRSTR:K1,LUA_TSTRING:F1,LUA_TTABLE:Jh,LUA_TTHREAD:Zh,LUA_TUSERDATA:Yh},from_userstring:M1,luastring_indexOf:uc,luastring_of:B1,to_jsstring:hg,to_luastring:be}=ge(),{lisdigit:Ua,lisprint:D1,lisspace:Ka,lisxdigit:gg}=Fi(),Va=pn(),Pa=It(),G1=un(),{luaS_bless:q1,luaS_new:L1}=Gt(),H1=qt(),{LUA_COMPAT_FLOATSTRING:j1,LUA_MAXINTEGER:Vq,ldexp:X1,lua_integer2str:W1,lua_number2str:z1}=Ye(),Ts=Es(),{MAX_INT:Pq,luai_nummod:J1,lua_assert:Rs}=Qe(),Xe=ct(),$h=ks(),Z1=dg,pc=dg+1,Hn=class{constructor(t,n){this.type=t,this.value=n}ttype(){return this.type&63}ttnov(){return this.type&15}checktag(t){return this.type===t}checktype(t){return this.ttnov()===t}ttisnumber(){return this.checktype(U1)}ttisfloat(){return this.checktag(oc)}ttisinteger(){return this.checktag(ac)}ttisnil(){return this.checktag(bo)}ttisboolean(){return this.checktag(Lh)}ttislightuserdata(){return this.checktag(zh)}ttisstring(){return this.checktype(F1)}ttisshrstring(){return this.checktag(K1)}ttislngstring(){return this.checktag(cc)}ttistable(){return this.checktag(Jh)}ttisfunction(){return this.checktype(jh)}ttisclosure(){return(this.type&31)===jh}ttisCclosure(){return this.checktag(Hh)}ttisLclosure(){return this.checktag(Wh)}ttislcf(){return this.checktag(Xh)}ttisfulluserdata(){return this.checktag(Yh)}ttisthread(){return this.checktag(Zh)}ttisdeadkey(){return this.checktag(pc)}l_isfalse(){return this.ttisnil()||this.ttisboolean()&&this.value===!1}setfltvalue(t){this.type=oc,this.value=t}chgfltvalue(t){Rs(this.type==oc),this.value=t}setivalue(t){this.type=ac,this.value=t}chgivalue(t){Rs(this.type==ac),this.value=t}setnilvalue(){this.type=bo,this.value=null}setfvalue(t){this.type=Xh,this.value=t}setpvalue(t){this.type=zh,this.value=t}setbvalue(t){this.type=Lh,this.value=t}setsvalue(t){this.type=cc,this.value=t}setuvalue(t){this.type=Yh,this.value=t}setthvalue(t){this.type=Zh,this.value=t}setclLvalue(t){this.type=Wh,this.value=t}setclCvalue(t){this.type=Hh,this.value=t}sethvalue(t){this.type=Jh,this.value=t}setdeadvalue(){this.type=pc,this.value=null}setfrom(t){this.type=t.type,this.value=t.value}tsvalue(){return Rs(this.ttisstring()),this.value}svalue(){return this.tsvalue().getstr()}vslen(){return this.tsvalue().tsslen()}jsstring(t,n){return hg(this.svalue(),t,n,!0)}},Y1=function(e,t){e.stack[e.top++]=new Hn(t.type,t.value)},$1=function(e,t){e.stack[e.top++]=new Hn(cc,t)},Q1=function(e,t,n){e.stack[t].setfrom(e.stack[n])},eR=function(e,t,n){e.stack[t].setfrom(n)},mg=function(e,t,n){e.stack[t].setsvalue(n)},_g=new Hn(bo,null);Object.freeze(_g);ee.exports.luaO_nilobject=_g;var Fa=class{constructor(t,n){this.id=t.l_G.id_counter++,this.p=null,this.nupvalues=n,this.upvals=new Array(n)}},Ma=class{constructor(t,n,s){for(this.id=t.l_G.id_counter++,this.f=n,this.nupvalues=s,this.upvalue=new Array(s);s--;)this.upvalue[s]=new Hn(bo,null)}},Ba=class{constructor(t,n){this.id=t.l_G.id_counter++,this.metatable=null,this.uservalue=new Hn(bo,null),this.len=n,this.data=Object.create(null)}},fc=class{constructor(){this.varname=null,this.startpc=NaN,this.endpc=NaN}},rr=be("..."),lc=be('[string "'),ic=be('"]'),tR=function(e,t){let n=e.length,s;if(e[0]===61)n<t?(s=new Uint8Array(n-1),s.set(e.subarray(1))):(s=new Uint8Array(t),s.set(e.subarray(1,t+1)));else if(e[0]===64)n<=t?(s=new Uint8Array(n-1),s.set(e.subarray(1))):(s=new Uint8Array(t),s.set(rr),t-=rr.length,s.set(e.subarray(n-t),rr.length));else{s=new Uint8Array(t);let r=uc(e,10);s.set(lc);let o=lc.length;t-=lc.length+rr.length+ic.length,n<t&&r===-1?(s.set(e,o),o+=e.length):(r!==-1&&(n=r),n>t&&(n=t),s.set(e.subarray(0,n),o),o+=n,s.set(rr,o),o+=rr.length),s.set(ic,o),o+=ic.length,s=s.subarray(0,o)}return s},mc=function(e){return Ua(e)?e-48:(e&223)-55},or=8,bg=function(e,t){let n=1;if(Rs(t<=1114111),t<128)e[or-1]=t;else{let s=63;do e[or-n++]=128|t&63,t>>=6,s>>=1;while(t>s);e[or-n]=~s<<1|t}return n},nR=30,sR=function(e){let t=0,n=0,s=0,r=0,o=0,a,i=!1;for(;Ka(e[t]);)t++;if(((a=e[t]===45)||e[t]===43)&&t++,!(e[t]===48&&(e[t+1]===120||e[t+1]===88)))return null;for(t+=2;;t++)if(e[t]===46){if(i)break;i=!0}else if(gg(e[t]))s===0&&e[t]===48?r++:++s<=nR?n=n*16+mc(e[t]):o++,i&&o--;else break;if(r+s===0)return null;if(o*=4,e[t]===112||e[t]===80){let l=0,u;if(t++,((u=e[t]===45)||e[t]===43)&&t++,!Ua(e[t]))return null;for(;Ua(e[t]);)l=l*10+e[t++]-48;u&&(l=-l),o+=l}return a&&(n=-n),{n:X1(n,o),i:t}},rR=function(e){try{e=hg(e)}catch{return null}let t=/^[\t\v\f \n\r]*[+-]?(?:[0-9]+\.?[0-9]*|\.[0-9]*)(?:[eE][+-]?[0-9]+)?/.exec(e);if(!t)return null;let n=parseFloat(t[0]);return isNaN(n)?null:{n,i:t[0].length}},oR=function(e,t){let n=t==="x"?sR(e):rR(e);if(n===null)return null;for(;Ka(e[n.i]);)n.i++;return n.i===e.length||e[n.i]===0?n:null},aR=[46,120,88,110,78],lR={46:".",120:"x",88:"x",110:"n",78:"n"},iR=function(e){let t=e.length,n=0;for(let o=0;o<t;o++){let a=e[o];if(aR.indexOf(a)!==-1){n=a;break}}let s=lR[n];return s==="n"?null:oR(e,s)},cR=function(e){let t=0,n=!0,s;for(;Ka(e[t]);)t++;((s=e[t]===45)||e[t]===43)&&t++;let r=0n;if(e[t]===48&&(e[t+1]===120||e[t+1]===88))for(t+=2;t<e.length&&gg(e[t]);t++)r=r*16n+BigInt(mc(e[t])),n=!1;else for(;t<e.length&&Ua(e[t]);t++)r=r*10n+BigInt(e[t]-48),n=!1;if(s&&(r=-r),r>Xe.MAX_INT64||r<Xe.MIN_INT64)return null;for(;t<e.length&&Ka(e[t]);)t++;return n||t!==e.length&&e[t]!==0?null:{n:Xe.shrink(r),i:t}},uR=function(e,t){let n=cR(e);return n!==null?(t.setivalue(n.n),n.i+1):(n=iR(e),n!==null?(t.setfltvalue(n.n),n.i+1):0)},dc=function(e,t){let n;if(t.ttisinteger())n=be(W1(t.value));else{let s=z1(t.value);!j1&&/^[-0123456789]+$/.test(s)&&(s+=".0"),n=be(s)}t.setsvalue(q1(e,n))},tt=function(e,t){Pa.luaD_inctop(e),mg(e,e.top-1,L1(e,t))},xg=function(e,t,n){let s=0,r=0,o=0,a;for(;a=uc(t,37,r),a!=-1;){switch(tt(e,t.subarray(r,a)),t[a+1]){case 115:{let i=n[o++];if(i===null)i=be("(null)",!0);else{i=M1(i);let l=uc(i,0);l!==-1&&(i=i.subarray(0,l))}tt(e,i);break}case 99:{let i=n[o++];D1(i)?tt(e,B1(i)):Ag(e,be("<\\%d>",!0),i);break}case 100:case 73:Pa.luaD_inctop(e),e.stack[e.top-1].setivalue(n[o++]),dc(e,e.stack[e.top-1]);break;case 102:Pa.luaD_inctop(e),e.stack[e.top-1].setfltvalue(n[o++]),dc(e,e.stack[e.top-1]);break;case 112:{let i=n[o++];if(i instanceof G1.lua_State||i instanceof H1.Table||i instanceof Ba||i instanceof Fa||i instanceof Ma)tt(e,be("0x"+i.id.toString(16)));else switch(typeof i){case"undefined":tt(e,be("undefined"));break;case"number":tt(e,be("Number("+i+")"));break;case"string":tt(e,be("String("+JSON.stringify(i)+")"));break;case"boolean":tt(e,be(i?"Boolean(true)":"Boolean(false)"));break;case"object":if(i===null){tt(e,be("null"));break}case"function":{let l=e.l_G.ids.get(i);l||(l=e.l_G.id_counter++,e.l_G.ids.set(i,l)),tt(e,be("0x"+l.toString(16)));break}default:tt(e,be("<id NYI>"))}break}case 85:{let i=new Uint8Array(or),l=bg(i,n[o++]);tt(e,i.subarray(or-l));break}case 37:tt(e,be("%",!0));break;default:Va.luaG_runerror(e,be("invalid option '%%%c' to 'lua_pushfstring'"),t[a+1])}s+=2,r=a+2}return Pa.luaD_checkstack(e,1),tt(e,t.subarray(r)),s>0&&Ts.luaV_concat(e,s+1),e.stack[e.top-1].svalue()},Ag=function(e,t,...n){return xg(e,t,n)},pR=function(e){let t=0;if(e<8)return e;for(;e>=128;)e=e+15>>4,t+=4;for(;e>=16;)e=e+1>>1,t++;return t+1<<3|e-8},Qh=function(e,t,n,s){switch(t){case gc:return Xe.add(n,s);case pg:return Xe.sub(n,s);case lg:return Xe.mul(n,s);case ag:{let r=Xe.imod(n,s);return r==="divzero"&&Va.luaG_runerror(e,be("attempt to perform 'n%%0'")),r}case og:{let r=Xe.idiv(n,s);return r==="divzero"?Va.luaG_runerror(e,be("attempt to divide by zero")):r==="overflow"&&Va.luaG_runerror(e,be("integer overflow")),r}case eg:return Xe.band(n,s);case ng:return Xe.bor(n,s);case sg:return Xe.bxor(n,s);case cg:return Xe.shiftl(n,s);case ug:return Xe.shiftr(n,s);case fg:return Xe.neg(n);case tg:return Xe.bnot(n);default:Rs(0)}},hc=function(e,t,n,s){switch(t){case gc:return n+s;case pg:return n-s;case lg:return n*s;case rg:return n/s;case ig:return Math.pow(n,s);case og:return Math.floor(n/s);case fg:return-n;case ag:return J1(e,n,s);default:Rs(0)}},fR=function(e,t,n,s,r){let o=typeof r=="number"?e.stack[r]:r;switch(t){case eg:case ng:case sg:case cg:case ug:case tg:{let a,i;if((a=Ts.tointeger(n))!==!1&&(i=Ts.tointeger(s))!==!1){o.setivalue(Qh(e,t,a,i));return}else break}case rg:case ig:{let a,i;if((a=Ts.tonumber(n))!==!1&&(i=Ts.tonumber(s))!==!1){o.setfltvalue(hc(e,t,a,i));return}else break}default:{let a,i;if(n.ttisinteger()&&s.ttisinteger()){o.setivalue(Qh(e,t,n.value,s.value));return}else if((a=Ts.tonumber(n))!==!1&&(i=Ts.tonumber(s))!==!1){o.setfltvalue(hc(e,t,a,i));return}else break}}Rs(e!==null),$h.luaT_trybinTM(e,n,s,r,t-gc+$h.TMS.TM_ADD)};ee.exports.CClosure=Ma;ee.exports.LClosure=Fa;ee.exports.LUA_TDEADKEY=pc;ee.exports.LUA_TPROTO=Z1;ee.exports.LocVar=fc;ee.exports.TValue=Hn;ee.exports.Udata=Ba;ee.exports.UTF8BUFFSZ=or;ee.exports.luaO_arith=fR;ee.exports.luaO_chunkid=tR;ee.exports.luaO_hexavalue=mc;ee.exports.luaO_int2fb=pR;ee.exports.luaO_pushfstring=Ag;ee.exports.luaO_pushvfstring=xg;ee.exports.luaO_str2num=uR;ee.exports.luaO_tostring=dc;ee.exports.luaO_utf8esc=bg;ee.exports.numarith=hc;ee.exports.pushobj2s=Y1;ee.exports.pushsvalue2s=$1;ee.exports.setobjs2s=Q1;ee.exports.setobj2s=eR;ee.exports.setsvalue2s=mg});var vs=P((Kq,jn)=>{"use strict";var{constant_types:{LUA_TNIL:dR}}=ge(),bc=ut(),_c=class{constructor(t){this.id=t.l_G.id_counter++,this.k=[],this.p=[],this.code=[],this.cache=null,this.lineinfo=[],this.upvalues=[],this.numparams=0,this.is_vararg=!1,this.maxstacksize=0,this.locvars=[],this.linedefined=0,this.lastlinedefined=0,this.source=null}},hR=function(e,t){return new bc.LClosure(e,t)},gR=function(e,t){return e.stack[t]},mR=function(e,t){for(let n=t;n<e.top;n++){let s=e.stack[n];e.stack[n]=new bc.TValue(s.type,s.value)}},_R=function(e,t){for(let n=0;n<t.nupvalues;n++)t.upvals[n]=new bc.TValue(dR,null)},bR=function(e,t,n){for(let s=0;s<e.locvars.length&&e.locvars[s].startpc<=n;s++)if(n<e.locvars[s].endpc&&(t--,t===0))return e.locvars[s].varname.getstr();return null};jn.exports.MAXUPVAL=255;jn.exports.Proto=_c;jn.exports.luaF_findupval=gR;jn.exports.luaF_close=mR;jn.exports.luaF_getlocalname=bR;jn.exports.luaF_initupvals=_R;jn.exports.luaF_newLclosure=hR});var xo=P((Fq,Ht)=>{"use strict";var{lua_assert:Sg}=Qe(),xc=class{constructor(){this.buffer=null,this.n=0}},xR=function(e){return e.buffer.subarray(0,e.n)},AR=function(e,t){e.n-=t},SR=function(e){e.n=0},ER=function(e,t,n){let s=new Uint8Array(n);t.buffer&&s.set(t.buffer),t.buffer=s},Ac=class{constructor(t,n,s){this.L=t,Sg(typeof n=="function","ZIO requires a reader"),this.reader=n,this.data=s,this.n=0,this.buffer=null,this.off=0}zgetc(){return this.n-- >0?this.buffer[this.off++]:Sc(this)}},Da=-1,Sc=function(e){let t=e.reader(e.L,e.data);if(t===null)return Da;Sg(t instanceof Uint8Array,"Should only load binary of array of bytes");let n=t.length;return n===0?Da:(e.buffer=t,e.off=0,e.n=n-1,e.buffer[e.off++])},kR=function(e,t,n,s){for(;s;){if(e.n===0){if(Sc(e)===Da)return s;e.n++,e.off--}let r=s<=e.n?s:e.n;for(let o=0;o<r;o++)t[n++]=e.buffer[e.off++];e.n-=r,e.n===0&&(e.buffer=null),s-=r}return 0};Ht.exports.EOZ=Da;Ht.exports.luaZ_buffer=xR;Ht.exports.luaZ_buffremove=AR;Ht.exports.luaZ_fill=Sc;Ht.exports.luaZ_read=kR;Ht.exports.luaZ_resetbuffer=SR;Ht.exports.luaZ_resizebuffer=ER;Ht.exports.MBuffer=xc;Ht.exports.ZIO=Ac});var Wa=P((Mq,ft)=>{"use strict";var{constant_types:{LUA_TBOOLEAN:vR,LUA_TLNGSTR:TR},thread_status:{LUA_ERRSYNTAX:RR},to_luastring:Ee}=ge(),{LUA_MINBUFFER:yR,MAX_INT:vg,lua_assert:lr}=Qe(),NR=pn(),OR=It(),{lisdigit:Ha,lislalnum:CR,lislalpha:IR,lisspace:wR,lisxdigit:Rc}=Fi(),pt=ut(),{luaS_bless:VR,luaS_hash:PR,luaS_hashlongstr:yc,luaS_new:UR}=Gt(),KR=qt(),{EOZ:ir,luaZ_buffer:Nc,luaZ_buffremove:Ao,luaZ_resetbuffer:Ga,luaZ_resizebuffer:Tg}=xo(),w=257,Rg=Ee("_ENV",!0),FR=w,MR=w+1,BR=w+2,DR=w+3,GR=w+4,qR=w+5,LR=w+6,HR=w+7,jR=w+8,XR=w+9,WR=w+10,zR=w+11,JR=w+12,ZR=w+13,YR=w+14,$R=w+15,QR=w+16,e0=w+17,t0=w+18,n0=w+19,s0=w+20,r0=w+21,yg=w+22,Ng=w+23,Og=w+24,Cg=w+25,Ig=w+26,wg=w+27,Vg=w+28,Pg=w+29,Ug=w+30,Kg=w+31,fn=w+32,qa=w+33,Oc=w+34,Cc=w+35,ys=w+36,o0={TK_AND:FR,TK_BREAK:MR,TK_DO:BR,TK_ELSE:DR,TK_ELSEIF:GR,TK_END:qR,TK_FALSE:LR,TK_FOR:HR,TK_FUNCTION:jR,TK_GOTO:XR,TK_IF:WR,TK_IN:zR,TK_LOCAL:JR,TK_NIL:ZR,TK_NOT:YR,TK_OR:$R,TK_REPEAT:QR,TK_RETURN:e0,TK_THEN:t0,TK_TRUE:n0,TK_UNTIL:s0,TK_WHILE:r0,TK_IDIV:yg,TK_CONCAT:Ng,TK_DOTS:Og,TK_EQ:Cg,TK_GE:Ig,TK_LE:wg,TK_NE:Vg,TK_SHL:Pg,TK_SHR:Ug,TK_DBCOLON:Kg,TK_EOS:fn,TK_FLT:qa,TK_INT:Oc,TK_NAME:Cc,TK_STRING:ys},Ic=["and","break","do","else","elseif","end","false","for","function","goto","if","in","local","nil","not","or","repeat","return","then","true","until","while","//","..","...","==",">=","<=","~=","<<",">>","::","<eof>","<number>","<integer>","<name>","<string>"].map((e,t)=>Ee(e)),So=class{constructor(){this.r=NaN,this.i=NaN,this.ts=null}},La=class{constructor(){this.token=NaN,this.seminfo=new So}},kc=class{constructor(){this.current=NaN,this.linenumber=NaN,this.lastline=NaN,this.t=new La,this.lookahead=new La,this.fs=null,this.L=null,this.z=null,this.buff=null,this.h=null,this.dyd=null,this.source=null,this.envn=null}},ja=function(e,t){let n=e.buff;if(n.n+1>n.buffer.length){n.buffer.length>=vg/2&&dn(e,Ee("lexical element too long",!0),0);let s=n.buffer.length*2;Tg(e.L,n,s)}n.buffer[n.n++]=t<0?255+t+1:t},Fg=function(e,t){if(t<w)return pt.luaO_pushfstring(e.L,Ee("'%c'",!0),t);{let n=Ic[t-w];return t<fn?pt.luaO_pushfstring(e.L,Ee("'%s'",!0),n):n}},Eo=function(e){return e.current===10||e.current===13},xe=function(e){e.current=e.z.zgetc()},fe=function(e){ja(e,e.current),xe(e)},a0=new pt.TValue(vR,!0),Xa=function(e,t){let n=e.L,s=UR(n,t),r=e.h.strong.get(yc(s));if(r)s=r.key.tsvalue();else{let o=new pt.TValue(TR,s);KR.luaH_setfrom(n,e.h,o,a0)}return s},ko=function(e){let t=e.current;lr(Eo(e)),xe(e),Eo(e)&&e.current!==t&&xe(e),++e.linenumber>=vg&&dn(e,Ee("chunk has too many lines",!0),0)},l0=function(e,t,n,s,r){t.t={token:0,seminfo:new So},t.L=e,t.current=r,t.lookahead={token:fn,seminfo:new So},t.z=n,t.fs=null,t.linenumber=1,t.lastline=1,t.source=s,t.envn=VR(e,Rg),Tg(e,t.buff,yR)},jt=function(e,t){return e.current===t?(xe(e),!0):!1},Ec=function(e,t){return e.current===t[0].charCodeAt(0)||e.current===t[1].charCodeAt(0)?(fe(e),!0):!1},Eg=function(e,t){let n="Ee",s=e.current;for(lr(Ha(e.current)),fe(e),s===48&&Ec(e,"xX")&&(n="Pp");;)if(Ec(e,n)&&Ec(e,"-+"),Rc(e.current))fe(e);else if(e.current===46)fe(e);else break;let r=new pt.TValue;return pt.luaO_str2num(Nc(e.buff),r)===0&&dn(e,Ee("malformed number",!0),qa),r.ttisinteger()?(t.i=r.value,Oc):(lr(r.ttisfloat()),t.r=r.value,qa)},i0=function(e,t){switch(t){case Cc:case ys:case qa:case Oc:return pt.luaO_pushfstring(e.L,Ee("'%s'",!0),Nc(e.buff));default:return Fg(e,t)}},dn=function(e,t,n){t=NR.luaG_addinfo(e.L,t,e.source,e.linenumber),n&&pt.luaO_pushfstring(e.L,Ee("%s near %s"),t,i0(e,n)),OR.luaD_throw(e.L,RR)},c0=function(e,t){dn(e,t,e.t.token)},vc=function(e){let t=0,n=e.current;for(lr(n===91||n===93),fe(e);e.current===61;)fe(e),t++;return e.current===n?t:-t-1},kg=function(e,t,n){let s=e.linenumber;fe(e),Eo(e)&&ko(e);let r=!1;for(;!r;)switch(e.current){case ir:{let a=`unfinished long ${t?"string":"comment"} (starting at line ${s})`;dn(e,Ee(a),fn);break}case 93:{vc(e)===n&&(fe(e),r=!0);break}case 10:case 13:{ja(e,10),ko(e),t||Ga(e.buff);break}default:t?fe(e):xe(e)}t&&(t.ts=Xa(e,e.buff.buffer.subarray(2+n,e.buff.n-(2+n))))},ar=function(e,t,n){t||(e.current!==ir&&fe(e),dn(e,n,ys))},Tc=function(e){return fe(e),ar(e,Rc(e.current),Ee("hexadecimal digit expected",!0)),pt.luaO_hexavalue(e.current)},u0=function(e){let t=Tc(e);return t=(t<<4)+Tc(e),Ao(e.buff,2),t},p0=function(e){let t=4;fe(e),ar(e,e.current===123,Ee("missing '{'",!0));let n=Tc(e);for(fe(e);Rc(e.current);)t++,n=(n<<4)+pt.luaO_hexavalue(e.current),ar(e,n<=1114111,Ee("UTF-8 value too large",!0)),fe(e);return ar(e,e.current===125,Ee("missing '}'",!0)),xe(e),Ao(e.buff,t),n},f0=function(e){let t=new Uint8Array(pt.UTF8BUFFSZ),n=pt.luaO_utf8esc(t,p0(e));for(;n>0;n--)ja(e,t[pt.UTF8BUFFSZ-n])},d0=function(e){let t=0,n;for(n=0;n<3&&Ha(e.current);n++)t=10*t+e.current-48,fe(e);return ar(e,t<=255,Ee("decimal escape too large",!0)),Ao(e.buff,n),t},h0=function(e,t,n){for(fe(e);e.current!==t;)switch(e.current){case ir:dn(e,Ee("unfinished string",!0),fn);break;case 10:case 13:dn(e,Ee("unfinished string",!0),ys);break;case 92:{fe(e);let s,r;switch(e.current){case 97:r=7,s="read_save";break;case 98:r=8,s="read_save";break;case 102:r=12,s="read_save";break;case 110:r=10,s="read_save";break;case 114:r=13,s="read_save";break;case 116:r=9,s="read_save";break;case 118:r=11,s="read_save";break;case 120:r=u0(e),s="read_save";break;case 117:f0(e),s="no_save";break;case 10:case 13:ko(e),r=10,s="only_save";break;case 92:case 34:case 39:r=e.current,s="read_save";break;case ir:s="no_save";break;case 122:{for(Ao(e.buff,1),xe(e);wR(e.current);)Eo(e)?ko(e):xe(e);s="no_save";break}default:{ar(e,Ha(e.current),Ee("invalid escape sequence",!0)),r=d0(e),s="only_save";break}}s==="read_save"&&xe(e),(s==="read_save"||s==="only_save")&&(Ao(e.buff,1),ja(e,r));break}default:fe(e)}fe(e),n.ts=Xa(e,e.buff.buffer.subarray(1,e.buff.n-1))},wc=Object.create(null);Ic.forEach((e,t)=>wc[PR(e)]=t);var g0=function(e){let t=wc[yc(e)];return t!==void 0&&t<=22},Mg=function(e,t){for(Ga(e.buff);;)switch(lr(typeof e.current=="number"),e.current){case 10:case 13:{ko(e);break}case 32:case 12:case 9:case 11:{xe(e);break}case 45:{if(xe(e),e.current!==45)return 45;if(xe(e),e.current===91){let n=vc(e);if(Ga(e.buff),n>=0){kg(e,null,n),Ga(e.buff);break}}for(;!Eo(e)&&e.current!==ir;)xe(e);break}case 91:{let n=vc(e);return n>=0?(kg(e,t,n),ys):(n!==-1&&dn(e,Ee("invalid long string delimiter",!0),ys),91)}case 61:return xe(e),jt(e,61)?Cg:61;case 60:return xe(e),jt(e,61)?wg:jt(e,60)?Pg:60;case 62:return xe(e),jt(e,61)?Ig:jt(e,62)?Ug:62;case 47:return xe(e),jt(e,47)?yg:47;case 126:return xe(e),jt(e,61)?Vg:126;case 58:return xe(e),jt(e,58)?Kg:58;case 34:case 39:return h0(e,e.current,t),ys;case 46:return fe(e),jt(e,46)?jt(e,46)?Og:Ng:Ha(e.current)?Eg(e,t):46;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return Eg(e,t);case ir:return fn;default:if(IR(e.current)){do fe(e);while(CR(e.current));let n=Xa(e,Nc(e.buff));t.ts=n;let s=wc[yc(n)];return s!==void 0&&s<=22?s+w:Cc}else{let n=e.current;return xe(e),n}}},m0=function(e){e.lastline=e.linenumber,e.lookahead.token!==fn?(e.t.token=e.lookahead.token,e.t.seminfo.i=e.lookahead.seminfo.i,e.t.seminfo.r=e.lookahead.seminfo.r,e.t.seminfo.ts=e.lookahead.seminfo.ts,e.lookahead.token=fn):e.t.token=Mg(e,e.t.seminfo)},_0=function(e){return lr(e.lookahead.token===fn),e.lookahead.token=Mg(e,e.lookahead.seminfo),e.lookahead.token};ft.exports.FIRST_RESERVED=w;ft.exports.LUA_ENV=Rg;ft.exports.LexState=kc;ft.exports.RESERVED=o0;ft.exports.isreserved=g0;ft.exports.luaX_lookahead=_0;ft.exports.luaX_newstring=Xa;ft.exports.luaX_next=m0;ft.exports.luaX_setinput=l0;ft.exports.luaX_syntaxerror=c0;ft.exports.luaX_token2str=Fg;ft.exports.luaX_tokens=Ic});var pm=P((Bq,C)=>{"use strict";var{LUA_MULTRET:Uc,LUA_OPADD:b0,LUA_OPBAND:x0,LUA_OPBNOT:A0,LUA_OPBOR:S0,LUA_OPBXOR:E0,LUA_OPDIV:k0,LUA_OPIDIV:v0,LUA_OPMOD:T0,LUA_OPSHL:R0,LUA_OPSHR:y0,LUA_OPUNM:N0,constant_types:{LUA_TBOOLEAN:O0,LUA_TLIGHTUSERDATA:C0,LUA_TLNGSTR:I0,LUA_TNIL:w0,LUA_TNUMFLT:Xg,LUA_TNUMINT:Kc,LUA_TTABLE:V0},to_luastring:Fc}=ge(),{lua_assert:oe}=Qe(),Mc=Wa(),Bc=ut(),E=As(),J=jc(),Bg=qt(),Dg=Es(),B=E.OpCodesI,Xt=Bc.TValue,P0=255,Y=-1,I={OPR_ADD:0,OPR_SUB:1,OPR_MUL:2,OPR_MOD:3,OPR_POW:4,OPR_DIV:5,OPR_IDIV:6,OPR_BAND:7,OPR_BOR:8,OPR_BXOR:9,OPR_SHL:10,OPR_SHR:11,OPR_CONCAT:12,OPR_EQ:13,OPR_LT:14,OPR_LE:15,OPR_NE:16,OPR_GT:17,OPR_GE:18,OPR_AND:19,OPR_OR:20,OPR_NOBINOPR:21},vo={OPR_MINUS:0,OPR_BNOT:1,OPR_NOT:2,OPR_LEN:3,OPR_NOUNOPR:4},ur=function(e){return e.t!==e.f},Vc=function(e,t){let n=J.expkind;if(ur(e))return!1;switch(e.k){case n.VKINT:return t?new Xt(Kc,e.u.ival):!0;case n.VKFLT:return t?new Xt(Xg,e.u.nval):!0;default:return!1}},Wg=function(e,t,n){let s,r=t+n-1;if(e.pc>e.lasttarget&&(s=e.f.code[e.pc-1],s.opcode===B.OP_LOADNIL)){let o=s.A,a=o+s.B;if(o<=t&&t<=a+1||t<=o&&o<=r+1){o<t&&(t=o),a>r&&(r=a),E.SETARG_A(s,t),E.SETARG_B(s,r-t);return}}Fe(e,B.OP_LOADNIL,t,n-1,0)},hn=function(e,t){return e.f.code[t.u.info]},cr=function(e,t){let n=e.f.code[t].sBx;return n===Y?Y:t+1+n},Pc=function(e,t,n){let s=e.f.code[t],r=n-(t+1);oe(n!==Y),Math.abs(r)>E.MAXARG_sBx&&Mc.luaX_syntaxerror(e.ls,Fc("control structure too long",!0)),E.SETARG_sBx(s,r)},Xn=function(e,t,n){if(n===Y)return t;if(t===Y)t=n;else{let s=t,r=cr(e,s);for(;r!==Y;)s=r,r=cr(e,s);Pc(e,s,n)}return t},Ya=function(e){let t=e.jpc;e.jpc=Y;let n=$g(e,B.OP_JMP,0,Y);return n=Xn(e,n,t),n},U0=function(e,t){return Yg(e,Ya(e),t)},K0=function(e,t,n){Fe(e,B.OP_RETURN,t,n+1,0)},To=function(e,t,n,s,r){return Fe(e,t,n,s,r),Ya(e)},$a=function(e){return e.lasttarget=e.pc,e.pc},zg=function(e,t){return t>=1&&E.testTMode(e.f.code[t-1].opcode)?t-1:t},Jg=function(e,t){return e.f.code[zg(e,t)]},Zg=function(e,t,n){let s=zg(e,t),r=e.f.code[s];return r.opcode!==B.OP_TESTSET?!1:(n!==E.NO_REG&&n!==r.B?E.SETARG_A(r,n):e.f.code[s]=E.CREATE_ABC(B.OP_TEST,r.B,0,r.C),!0)},Gg=function(e,t){for(;t!==Y;t=cr(e,t))Zg(e,t,E.NO_REG)},Ja=function(e,t,n,s,r){for(;t!==Y;){let o=cr(e,t);Zg(e,t,s)?Pc(e,t,n):Pc(e,t,r),t=o}},F0=function(e){Ja(e,e.jpc,e.pc,E.NO_REG,e.pc),e.jpc=Y},Ro=function(e,t){$a(e),e.jpc=Xn(e,e.jpc,t)},Yg=function(e,t,n){n===e.pc?Ro(e,t):(oe(n<e.pc),Ja(e,t,n,E.NO_REG,n))},M0=function(e,t,n){for(n++;t!==Y;t=cr(e,t)){let s=e.f.code[t];oe(s.opcode===B.OP_JMP&&(s.A===0||s.A>=n)),E.SETARG_A(s,n)}},Qa=function(e,t){let n=e.f;return F0(e),n.code[e.pc]=t,n.lineinfo[e.pc]=e.ls.lastline,e.pc++},Fe=function(e,t,n,s,r){return oe(E.getOpMode(t)===E.iABC),oe(E.getBMode(t)!==E.OpArgN||s===0),oe(E.getCMode(t)!==E.OpArgN||r===0),oe(n<=E.MAXARG_A&&s<=E.MAXARG_B&&r<=E.MAXARG_C),Qa(e,E.CREATE_ABC(t,n,s,r))},Za=function(e,t,n,s){return oe(E.getOpMode(t)===E.iABx||E.getOpMode(t)===E.iAsBx),oe(E.getCMode(t)===E.OpArgN),oe(n<=E.MAXARG_A&&s<=E.MAXARG_Bx),Qa(e,E.CREATE_ABx(t,n,s))},$g=function(e,t,n,s){return Za(e,t,n,s+E.MAXARG_sBx)},Qg=function(e,t){return oe(t<=E.MAXARG_Ax),Qa(e,E.CREATE_Ax(B.OP_EXTRAARG,t))},za=function(e,t,n){if(n<=E.MAXARG_Bx)return Za(e,B.OP_LOADK,t,n);{let s=Za(e,B.OP_LOADKX,t,0);return Qg(e,n),s}},em=function(e,t){let n=e.freereg+t;n>e.f.maxstacksize&&(n>=P0&&Mc.luaX_syntaxerror(e.ls,Fc("function or expression needs too many registers",!0)),e.f.maxstacksize=n)},yo=function(e,t){em(e,t),e.freereg+=t},Ns=function(e,t){!E.ISK(t)&&t>=e.nactvar&&(e.freereg--,oe(t===e.freereg))},gn=function(e,t){t.k===J.expkind.VNONRELOC&&Ns(e,t.u.info)},tm=function(e,t,n){let s=t.k===J.expkind.VNONRELOC?t.u.info:-1,r=n.k===J.expkind.VNONRELOC?n.u.info:-1;s>r?(Ns(e,s),Ns(e,r)):(Ns(e,r),Ns(e,s))},No=function(e,t,n){let s=e.f,r=Bg.luaH_get(e.L,e.ls.h,t);if(r.ttisinteger()){let a=r.value;if(a<e.nk&&s.k[a].ttype()===n.ttype()&&s.k[a].value===n.value)return a}let o=e.nk;return Bg.luaH_setfrom(e.L,e.ls.h,t,new Bc.TValue(Kc,o)),s.k[o]=n,e.nk++,o},B0=function(e,t){let n=new Xt(I0,t);return No(e,n,n)},Dc=function(e,t){let n=new Xt(C0,t),s=new Xt(Kc,t);return No(e,n,s)},Gc=function(e,t){let n=new Xt(Xg,t);return No(e,n,n)},qg=function(e,t){let n=new Xt(O0,t);return No(e,n,n)},D0=function(e){let t=new Xt(w0,null),n=new Xt(V0,e.ls.h);return No(e,n,t)},nm=function(e,t,n){let s=J.expkind;if(t.k===s.VCALL)E.SETARG_C(hn(e,t),n+1);else if(t.k===s.VVARARG){let r=hn(e,t);E.SETARG_B(r,n+1),E.SETARG_A(r,e.freereg),yo(e,1)}else oe(n===Uc)},G0=function(e,t){nm(e,t,Uc)},sm=function(e,t){let n=J.expkind;t.k===n.VCALL?(oe(hn(e,t).C===2),t.k=n.VNONRELOC,t.u.info=hn(e,t).A):t.k===n.VVARARG&&(E.SETARG_B(hn(e,t),2),t.k=n.VRELOCABLE)},Wt=function(e,t){let n=J.expkind;switch(t.k){case n.VLOCAL:{t.k=n.VNONRELOC;break}case n.VUPVAL:{t.u.info=Fe(e,B.OP_GETUPVAL,0,t.u.info,0),t.k=n.VRELOCABLE;break}case n.VINDEXED:{let s;Ns(e,t.u.ind.idx),t.u.ind.vt===n.VLOCAL?(Ns(e,t.u.ind.t),s=B.OP_GETTABLE):(oe(t.u.ind.vt===n.VUPVAL),s=B.OP_GETTABUP),t.u.info=Fe(e,s,0,t.u.ind.t,t.u.ind.idx),t.k=n.VRELOCABLE;break}case n.VVARARG:case n.VCALL:{sm(e,t);break}default:break}},Lg=function(e,t,n,s){return $a(e),Fe(e,B.OP_LOADBOOL,t,n,s)},rm=function(e,t,n){let s=J.expkind;switch(Wt(e,t),t.k){case s.VNIL:{Wg(e,n,1);break}case s.VFALSE:case s.VTRUE:{Fe(e,B.OP_LOADBOOL,n,t.k===s.VTRUE,0);break}case s.VK:{za(e,n,t.u.info);break}case s.VKFLT:{za(e,n,Gc(e,t.u.nval));break}case s.VKINT:{za(e,n,Dc(e,t.u.ival));break}case s.VRELOCABLE:{let r=hn(e,t);E.SETARG_A(r,n);break}case s.VNONRELOC:{n!==t.u.info&&Fe(e,B.OP_MOVE,n,t.u.info,0);break}default:{oe(t.k===s.VJMP);return}}t.u.info=n,t.k=s.VNONRELOC},om=function(e,t){t.k!==J.expkind.VNONRELOC&&(yo(e,1),rm(e,t,e.freereg-1))},Hg=function(e,t){for(;t!==Y;t=cr(e,t))if(Jg(e,t).opcode!==B.OP_TESTSET)return!0;return!1},qc=function(e,t,n){let s=J.expkind;if(rm(e,t,n),t.k===s.VJMP&&(t.t=Xn(e,t.t,t.u.info)),ur(t)){let r,o=Y,a=Y;if(Hg(e,t.t)||Hg(e,t.f)){let i=t.k===s.VJMP?Y:Ya(e);o=Lg(e,n,0,1),a=Lg(e,n,1,0),Ro(e,i)}r=$a(e),Ja(e,t.f,r,n,o),Ja(e,t.t,r,n,a)}t.f=t.t=Y,t.u.info=n,t.k=s.VNONRELOC},el=function(e,t){Wt(e,t),gn(e,t),yo(e,1),qc(e,t,e.freereg-1)},Os=function(e,t){if(Wt(e,t),t.k===J.expkind.VNONRELOC){if(!ur(t))return t.u.info;if(t.u.info>=e.nactvar)return qc(e,t,t.u.info),t.u.info}return el(e,t),t.u.info},q0=function(e,t){(t.k!==J.expkind.VUPVAL||ur(t))&&Os(e,t)},Lc=function(e,t){ur(t)?Os(e,t):Wt(e,t)},mn=function(e,t){let n=J.expkind,s=!1;switch(Lc(e,t),t.k){case n.VTRUE:t.u.info=qg(e,!0),s=!0;break;case n.VFALSE:t.u.info=qg(e,!1),s=!0;break;case n.VNIL:t.u.info=D0(e),s=!0;break;case n.VKINT:t.u.info=Dc(e,t.u.ival),s=!0;break;case n.VKFLT:t.u.info=Gc(e,t.u.nval),s=!0;break;case n.VK:s=!0;break;default:break}return s&&(t.k=n.VK,t.u.info<=E.MAXINDEXRK)?E.RKASK(t.u.info):Os(e,t)},L0=function(e,t,n){let s=J.expkind;switch(t.k){case s.VLOCAL:{gn(e,n),qc(e,n,t.u.info);return}case s.VUPVAL:{let r=Os(e,n);Fe(e,B.OP_SETUPVAL,r,t.u.info,0);break}case s.VINDEXED:{let r=t.u.ind.vt===s.VLOCAL?B.OP_SETTABLE:B.OP_SETTABUP,o=mn(e,n);Fe(e,r,t.u.ind.t,t.u.ind.idx,o);break}}gn(e,n)},H0=function(e,t,n){Os(e,t);let s=t.u.info;gn(e,t),t.u.info=e.freereg,t.k=J.expkind.VNONRELOC,yo(e,2),Fe(e,B.OP_SELF,t.u.info,s,mn(e,n)),gn(e,n)},am=function(e,t){let n=Jg(e,t.u.info);oe(E.testTMode(n.opcode)&&n.opcode!==B.OP_TESTSET&&n.opcode!==B.OP_TEST),E.SETARG_A(n,!n.A)},lm=function(e,t,n){if(t.k===J.expkind.VRELOCABLE){let s=hn(e,t);if(s.opcode===B.OP_NOT)return e.pc--,To(e,B.OP_TEST,s.B,0,!n)}return om(e,t),gn(e,t),To(e,B.OP_TESTSET,E.NO_REG,t.u.info,n)},im=function(e,t){let n=J.expkind,s;switch(Wt(e,t),t.k){case n.VJMP:{am(e,t),s=t.u.info;break}case n.VK:case n.VKFLT:case n.VKINT:case n.VTRUE:{s=Y;break}default:{s=lm(e,t,0);break}}t.f=Xn(e,t.f,s),Ro(e,t.t),t.t=Y},cm=function(e,t){let n=J.expkind,s;switch(Wt(e,t),t.k){case n.VJMP:{s=t.u.info;break}case n.VNIL:case n.VFALSE:{s=Y;break}default:{s=lm(e,t,1);break}}t.t=Xn(e,t.t,s),Ro(e,t.f),t.f=Y},j0=function(e,t){let n=J.expkind;switch(Wt(e,t),t.k){case n.VNIL:case n.VFALSE:{t.k=n.VTRUE;break}case n.VK:case n.VKFLT:case n.VKINT:case n.VTRUE:{t.k=n.VFALSE;break}case n.VJMP:{am(e,t);break}case n.VRELOCABLE:case n.VNONRELOC:{om(e,t),gn(e,t),t.u.info=Fe(e,B.OP_NOT,0,t.u.info,0),t.k=n.VRELOCABLE;break}}{let s=t.f;t.f=t.t,t.t=s}Gg(e,t.f),Gg(e,t.t)},X0=function(e,t,n){let s=J.expkind;oe(!ur(t)&&(J.vkisinreg(t.k)||t.k===s.VUPVAL)),t.u.ind.t=t.u.info,t.u.ind.idx=mn(e,n),t.u.ind.vt=t.k===s.VUPVAL?s.VUPVAL:s.VLOCAL,t.k=s.VINDEXED},W0=function(e,t,n){switch(e){case x0:case S0:case E0:case R0:case y0:case A0:return Dg.tointeger(t)!==!1&&Dg.tointeger(n)!==!1;case k0:case v0:case T0:return n.value!==0;default:return 1}},um=function(e,t,n){let s=J.expkind,r,o;if(!(r=Vc(t,!0))||!(o=Vc(n,!0))||!W0(e,r,o))return 0;let a=new Xt;if(Bc.luaO_arith(null,e,r,o,a),a.ttisinteger())t.k=s.VKINT,t.u.ival=a.value;else{let i=a.value;if(isNaN(i)||i===0)return!1;t.k=s.VKFLT,t.u.nval=i}return!0},z0=function(e,t,n,s){let r=Os(e,n);gn(e,n),n.u.info=Fe(e,t,0,r,0),n.k=J.expkind.VRELOCABLE,Hc(e,s)},jg=function(e,t,n,s,r){let o=mn(e,s),a=mn(e,n);tm(e,n,s),n.u.info=Fe(e,t,0,a,o),n.k=J.expkind.VRELOCABLE,Hc(e,r)},J0=function(e,t,n,s){let r=J.expkind,o;n.k===r.VK?o=E.RKASK(n.u.info):(oe(n.k===r.VNONRELOC),o=n.u.info);let a=mn(e,s);switch(tm(e,n,s),t){case I.OPR_NE:{n.u.info=To(e,B.OP_EQ,0,o,a);break}case I.OPR_GT:case I.OPR_GE:{let i=t-I.OPR_NE+B.OP_EQ;n.u.info=To(e,i,1,a,o);break}default:{let i=t-I.OPR_EQ+B.OP_EQ;n.u.info=To(e,i,1,o,a);break}}n.k=r.VJMP},Z0=function(e,t,n,s){let r=new J.expdesc;switch(r.k=J.expkind.VKINT,r.u.ival=r.u.nval=r.u.info=0,r.t=Y,r.f=Y,t){case vo.OPR_MINUS:case vo.OPR_BNOT:if(um(t+N0,n,r))break;case vo.OPR_LEN:z0(e,t+B.OP_UNM,n,s);break;case vo.OPR_NOT:j0(e,n);break}},Y0=function(e,t,n){switch(t){case I.OPR_AND:{im(e,n);break}case I.OPR_OR:{cm(e,n);break}case I.OPR_CONCAT:{el(e,n);break}case I.OPR_ADD:case I.OPR_SUB:case I.OPR_MUL:case I.OPR_DIV:case I.OPR_IDIV:case I.OPR_MOD:case I.OPR_POW:case I.OPR_BAND:case I.OPR_BOR:case I.OPR_BXOR:case I.OPR_SHL:case I.OPR_SHR:{Vc(n,!1)||mn(e,n);break}default:{mn(e,n);break}}},$0=function(e,t,n,s,r){let o=J.expkind;switch(t){case I.OPR_AND:{oe(n.t===Y),Wt(e,s),s.f=Xn(e,s.f,n.f),n.to(s);break}case I.OPR_OR:{oe(n.f===Y),Wt(e,s),s.t=Xn(e,s.t,n.t),n.to(s);break}case I.OPR_CONCAT:{Lc(e,s);let a=hn(e,s);s.k===o.VRELOCABLE&&a.opcode===B.OP_CONCAT?(oe(n.u.info===a.B-1),gn(e,n),E.SETARG_B(a,n.u.info),n.k=o.VRELOCABLE,n.u.info=s.u.info):(el(e,s),jg(e,B.OP_CONCAT,n,s,r));break}case I.OPR_ADD:case I.OPR_SUB:case I.OPR_MUL:case I.OPR_DIV:case I.OPR_IDIV:case I.OPR_MOD:case I.OPR_POW:case I.OPR_BAND:case I.OPR_BOR:case I.OPR_BXOR:case I.OPR_SHL:case I.OPR_SHR:{um(t+b0,n,s)||jg(e,t+B.OP_ADD,n,s,r);break}case I.OPR_EQ:case I.OPR_LT:case I.OPR_LE:case I.OPR_NE:case I.OPR_GT:case I.OPR_GE:{J0(e,t,n,s);break}}return n},Hc=function(e,t){e.f.lineinfo[e.pc-1]=t},Q0=function(e,t,n,s){let r=(n-1)/E.LFIELDS_PER_FLUSH+1,o=s===Uc?0:s;oe(s!==0&&s<=E.LFIELDS_PER_FLUSH),r<=E.MAXARG_C?Fe(e,B.OP_SETLIST,t,o,r):r<=E.MAXARG_Ax?(Fe(e,B.OP_SETLIST,t,o,0),Qg(e,r)):Mc.luaX_syntaxerror(e.ls,Fc("constructor too long",!0)),e.freereg=t+1};C.exports.BinOpr=I;C.exports.NO_JUMP=Y;C.exports.UnOpr=vo;C.exports.getinstruction=hn;C.exports.luaK_checkstack=em;C.exports.luaK_code=Qa;C.exports.luaK_codeABC=Fe;C.exports.luaK_codeABx=Za;C.exports.luaK_codeAsBx=$g;C.exports.luaK_codek=za;C.exports.luaK_concat=Xn;C.exports.luaK_dischargevars=Wt;C.exports.luaK_exp2RK=mn;C.exports.luaK_exp2anyreg=Os;C.exports.luaK_exp2anyregup=q0;C.exports.luaK_exp2nextreg=el;C.exports.luaK_exp2val=Lc;C.exports.luaK_fixline=Hc;C.exports.luaK_getlabel=$a;C.exports.luaK_goiffalse=cm;C.exports.luaK_goiftrue=im;C.exports.luaK_indexed=X0;C.exports.luaK_infix=Y0;C.exports.luaK_intK=Dc;C.exports.luaK_jump=Ya;C.exports.luaK_jumpto=U0;C.exports.luaK_nil=Wg;C.exports.luaK_numberK=Gc;C.exports.luaK_patchclose=M0;C.exports.luaK_patchlist=Yg;C.exports.luaK_patchtohere=Ro;C.exports.luaK_posfix=$0;C.exports.luaK_prefix=Z0;C.exports.luaK_reserveregs=yo;C.exports.luaK_ret=K0;C.exports.luaK_self=H0;C.exports.luaK_setlist=Q0;C.exports.luaK_setmultret=G0;C.exports.luaK_setoneret=sm;C.exports.luaK_setreturns=nm;C.exports.luaK_storevar=L0;C.exports.luaK_stringK=B0});var jc=P((Dq,_r)=>{"use strict";var{LUA_MULTRET:ou,to_luastring:le}=ge(),{BinOpr:{OPR_ADD:ey,OPR_AND:ty,OPR_BAND:ny,OPR_BOR:sy,OPR_BXOR:ry,OPR_CONCAT:oy,OPR_DIV:ay,OPR_EQ:ly,OPR_GE:iy,OPR_GT:cy,OPR_IDIV:uy,OPR_LE:py,OPR_LT:fy,OPR_MOD:dy,OPR_MUL:hy,OPR_NE:gy,OPR_NOBINOPR:xm,OPR_OR:my,OPR_POW:_y,OPR_SHL:by,OPR_SHR:xy,OPR_SUB:Ay},UnOpr:{OPR_BNOT:Sy,OPR_LEN:Ey,OPR_MINUS:ky,OPR_NOT:vy,OPR_NOUNOPR:Am},NO_JUMP:pr,getinstruction:zc,luaK_checkstack:Ty,luaK_codeABC:hr,luaK_codeABx:Ry,luaK_codeAsBx:Xc,luaK_codek:yy,luaK_concat:Ny,luaK_dischargevars:Oy,luaK_exp2RK:fm,luaK_exp2anyreg:Cy,luaK_exp2anyregup:Sm,luaK_exp2nextreg:Jt,luaK_exp2val:Iy,luaK_fixline:tl,luaK_getlabel:au,luaK_goiffalse:wy,luaK_goiftrue:Em,luaK_indexed:lu,luaK_infix:Vy,luaK_intK:Py,luaK_jump:Oo,luaK_jumpto:Uy,luaK_nil:Ky,luaK_patchclose:ol,luaK_patchlist:iu,luaK_patchtohere:Co,luaK_posfix:Fy,luaK_prefix:My,luaK_reserveregs:fr,luaK_ret:km,luaK_self:By,luaK_setlist:Jc,luaK_setmultret:cu,luaK_setoneret:Dy,luaK_setreturns:Gy,luaK_storevar:Zc,luaK_stringK:qy}=pm(),dm=It(),uu=vs(),O=Wa(),{LUAI_MAXCCALLS:vm,MAX_INT:Tm,lua_assert:nt}=Qe(),zt=ut(),{OpCodesI:{OP_CALL:Ly,OP_CLOSURE:Hy,OP_FORLOOP:jy,OP_FORPREP:Xy,OP_GETUPVAL:Wy,OP_MOVE:zy,OP_NEWTABLE:Jy,OP_SETTABLE:Zy,OP_TAILCALL:Yy,OP_TFORCALL:$y,OP_TFORLOOP:Qy,OP_VARARG:eN},LFIELDS_PER_FLUSH:tN,SETARG_B:nN,SETARG_C:Rm,SET_OPCODE:sN}=As(),{luaS_eqlngstr:rN,luaS_new:oN,luaS_newliteral:ym}=Gt(),aN=qt(),Nm=uu.Proto,m=O.RESERVED,lN=200,al=function(e){return e===N.VCALL||e===N.VVARARG},gr=function(e,t){return rN(e,t)},wt=class{constructor(){this.previous=null,this.firstlabel=NaN,this.firstgoto=NaN,this.nactvar=NaN,this.upval=NaN,this.isloop=NaN}},N={VVOID:0,VNIL:1,VTRUE:2,VFALSE:3,VK:4,VKFLT:5,VKINT:6,VNONRELOC:7,VLOCAL:8,VUPVAL:9,VINDEXED:10,VJMP:11,VRELOCABLE:12,VCALL:13,VVARARG:14},iN=function(e){return N.VLOCAL<=e&&e<=N.VINDEXED},cN=function(e){return e===N.VNONRELOC||e===N.VLOCAL},te=class{constructor(){this.k=NaN,this.u={ival:NaN,nval:NaN,info:NaN,ind:{idx:NaN,t:NaN,vt:NaN}},this.t=NaN,this.f=NaN}to(t){this.k=t.k,this.u=t.u,this.t=t.t,this.f=t.f}},nl=class{constructor(){this.f=null,this.prev=null,this.ls=null,this.bl=null,this.pc=NaN,this.lasttarget=NaN,this.jpc=NaN,this.nk=NaN,this.np=NaN,this.firstlocal=NaN,this.nlocvars=NaN,this.nactvar=NaN,this.nups=NaN,this.freereg=NaN}},Yc=class{constructor(){this.idx=NaN}},$c=class{constructor(){this.name=null,this.pc=NaN,this.line=NaN,this.nactvar=NaN}},sl=class{constructor(){this.arr=[],this.n=NaN,this.size=NaN}},Qc=class{constructor(){this.actvar={arr:[],n:NaN,size:NaN},this.gt=new sl,this.label=new sl}},pu=function(e,t){e.t.token=0,O.luaX_syntaxerror(e,t)},Om=function(e,t){O.luaX_syntaxerror(e,zt.luaO_pushfstring(e.L,le("%s expected",!0),O.luaX_token2str(e,t)))},uN=function(e,t,n){let s=e.ls.L,r=e.f.linedefined,o=r===0?le("main function",!0):zt.luaO_pushfstring(s,le("function at line %d",!0),r),a=zt.luaO_pushfstring(s,le("too many %s (limit is %d) in %s",!0),n,t,o);O.luaX_syntaxerror(e.ls,a)},mr=function(e,t,n,s){t>n&&uN(e,n,s)},We=function(e,t){return e.t.token===t?(O.luaX_next(e),!0):!1},fu=function(e,t){e.t.token!==t&&Om(e,t)},dt=function(e,t){fu(e,t),O.luaX_next(e)},du=function(e,t,n){t||O.luaX_syntaxerror(e,n)},An=function(e,t,n,s){We(e,t)||(s===e.linenumber?Om(e,t):O.luaX_syntaxerror(e,zt.luaO_pushfstring(e.L,le("%s expected (to close %s at line %d)"),O.luaX_token2str(e,t),O.luaX_token2str(e,n),s)))},Sn=function(e){fu(e,m.TK_NAME);let t=e.t.seminfo.ts;return O.luaX_next(e),t},De=function(e,t,n){e.f=e.t=pr,e.k=t,e.u.info=n},ll=function(e,t,n){De(t,N.VK,qy(e.fs,n))},hu=function(e,t){ll(e,t,Sn(e))},pN=function(e,t){let n=e.fs,s=n.f;return s.locvars[n.nlocvars]=new zt.LocVar,s.locvars[n.nlocvars].varname=t,n.nlocvars++},Is=function(e,t){let n=e.fs,s=e.dyd,r=pN(e,t);mr(n,s.actvar.n+1-n.firstlocal,lN,le("local variables",!0)),s.actvar.arr[s.actvar.n]=new Yc,s.actvar.arr[s.actvar.n].idx=r,s.actvar.n++},Cs=function(e,t){Is(e,O.luaX_newstring(e,le(t,!0)))},Io=function(e,t){let n=e.ls.dyd.actvar.arr[e.firstlocal+t].idx;return nt(n<e.nlocvars),e.f.locvars[n]},dr=function(e,t){let n=e.fs;for(n.nactvar=n.nactvar+t;t;t--)Io(n,n.nactvar-t).startpc=n.pc},fN=function(e,t){for(e.ls.dyd.actvar.n-=e.nactvar-t;e.nactvar>t;)Io(e,--e.nactvar).endpc=e.pc},dN=function(e,t){let n=e.f.upvalues;for(let s=0;s<e.nups;s++)if(gr(n[s].name,t))return s;return-1},Cm=function(e,t,n){let s=e.f;return mr(e,e.nups+1,uu.MAXUPVAL,le("upvalues",!0)),s.upvalues[e.nups]={instack:n.k===N.VLOCAL,idx:n.u.info,name:t},e.nups++},hN=function(e,t){for(let n=e.nactvar-1;n>=0;n--)if(gr(t,Io(e,n).varname))return n;return-1},gN=function(e,t){let n=e.bl;for(;n.nactvar>t;)n=n.previous;n.upval=1},eu=function(e,t,n,s){if(e===null)De(n,N.VVOID,0);else{let r=hN(e,t);if(r>=0)De(n,N.VLOCAL,r),s||gN(e,r);else{let o=dN(e,t);if(o<0){if(eu(e.prev,t,n,0),n.k===N.VVOID)return;o=Cm(e,t,n)}De(n,N.VUPVAL,o)}}},Im=function(e,t){let n=Sn(e),s=e.fs;if(eu(s,n,t,1),t.k===N.VVOID){let r=new te;eu(s,e.envn,t,1),nt(t.k!==N.VVOID),ll(e,r,n),lu(s,t,r)}},gu=function(e,t,n,s){let r=e.fs,o=t-n;if(al(s.k))o++,o<0&&(o=0),Gy(r,s,o),o>1&&fr(r,o-1);else if(s.k!==N.VVOID&&Jt(r,s),o>0){let a=r.freereg;fr(r,o),Ky(r,a,o)}n>t&&(e.fs.freereg-=n-t)},wm=function(e){let t=e.L;++t.nCcalls,mr(e.fs,t.nCcalls,vm,le("JS levels",!0))},Vm=function(e){return e.L.nCcalls--},Pm=function(e,t,n){let s=e.fs,r=e.dyd.gt,o=r.arr[t];if(nt(gr(o.name,n.name)),o.nactvar<n.nactvar){let a=Io(s,o.nactvar).varname,i=zt.luaO_pushfstring(e.L,le("<goto %s> at line %d jumps into the scope of local '%s'"),o.name.getstr(),o.line,a.getstr());pu(e,i)}iu(s,o.pc,n.pc);for(let a=t;a<r.n-1;a++)r.arr[a]=r.arr[a+1];r.n--},Um=function(e,t){let n=e.fs.bl,s=e.dyd,r=s.gt.arr[t];for(let o=n.firstlabel;o<s.label.n;o++){let a=s.label.arr[o];if(gr(a.name,r.name))return r.nactvar>a.nactvar&&(n.upval||s.label.n>n.firstlabel)&&ol(e.fs,r.pc,a.nactvar),Pm(e,t,a),!0}return!1},mu=function(e,t,n,s,r){let o=t.n;return t.arr[o]=new $c,t.arr[o].name=n,t.arr[o].line=s,t.arr[o].nactvar=e.fs.nactvar,t.arr[o].pc=r,t.n=o+1,o},Km=function(e,t){let n=e.dyd.gt,s=e.fs.bl.firstgoto;for(;s<n.n;)gr(n.arr[s].name,t.name)?Pm(e,s,t):s++},mN=function(e,t){let n=t.firstgoto,s=e.ls.dyd.gt;for(;n<s.n;){let r=s.arr[n];r.nactvar>t.nactvar&&(t.upval&&ol(e,r.pc,t.nactvar),r.nactvar=t.nactvar),Um(e.ls,n)||n++}},_n=function(e,t,n){t.isloop=n,t.nactvar=e.nactvar,t.firstlabel=e.ls.dyd.label.n,t.firstgoto=e.ls.dyd.gt.n,t.upval=0,t.previous=e.bl,e.bl=t,nt(e.freereg===e.nactvar)},_N=function(e){let t=ym(e.L,"break"),n=mu(e,e.dyd.label,t,0,e.fs.pc);Km(e,e.dyd.label.arr[n])},bN=function(e,t){let n=O.isreserved(t.name)?"<%s> at line %d not inside a loop":"no visible label '%s' for <goto> at line %d";n=zt.luaO_pushfstring(e.L,le(n),t.name.getstr(),t.line),pu(e,n)},xN=function(e){let t=e.L,n=new Nm(t),s=e.fs,r=s.f;return r.p[s.np++]=n,n},AN=function(e,t){let n=e.fs.prev;De(t,N.VRELOCABLE,Ry(n,Hy,0,n.np-1)),Jt(n,t)},Fm=function(e,t,n){t.prev=e.fs,t.ls=e,e.fs=t,t.pc=0,t.lasttarget=0,t.jpc=pr,t.freereg=0,t.nk=0,t.np=0,t.nups=0,t.nlocvars=0,t.nactvar=0,t.firstlocal=e.dyd.actvar.n,t.bl=null;let s=t.f;s.source=e.source,s.maxstacksize=2,_n(t,n,!1)},bn=function(e){let t=e.bl,n=e.ls;if(t.previous&&t.upval){let s=Oo(e);ol(e,s,t.nactvar),Co(e,s)}t.isloop&&_N(n),e.bl=t.previous,fN(e,t.nactvar),nt(t.nactvar===e.nactvar),e.freereg=e.nactvar,n.dyd.label.n=t.firstlabel,t.previous?mN(e,t):t.firstgoto<n.dyd.gt.n&&bN(n,n.dyd.gt.arr[t.firstgoto])},Mm=function(e){let t=e.fs;km(t,0,0),bn(t),nt(t.bl===null),e.fs=t.prev},il=function(e,t){switch(e.t.token){case m.TK_ELSE:case m.TK_ELSEIF:case m.TK_END:case m.TK_EOS:return!0;case m.TK_UNTIL:return t;default:return!1}},wo=function(e){for(;!il(e,1);){if(e.t.token===m.TK_RETURN){ru(e);return}ru(e)}},tu=function(e,t){let n=e.fs,s=new te;Sm(n,t),O.luaX_next(e),hu(e,s),lu(n,t,s)},Bm=function(e,t){O.luaX_next(e),xn(e,t),Iy(e.fs,t),dt(e,93)},nu=class{constructor(){this.v=new te,this.t=new te,this.nh=NaN,this.na=NaN,this.tostore=NaN}},hm=function(e,t){let n=e.fs,s=e.fs.freereg,r=new te,o=new te;e.t.token===m.TK_NAME?(mr(n,t.nh,Tm,le("items in a constructor",!0)),hu(e,r)):Bm(e,r),t.nh++,dt(e,61);let a=fm(n,r);xn(e,o),hr(n,Zy,t.t.u.info,a,fm(n,o)),n.freereg=s},SN=function(e,t){t.v.k!==N.VVOID&&(Jt(e,t.v),t.v.k=N.VVOID,t.tostore===tN&&(Jc(e,t.t.u.info,t.na,t.tostore),t.tostore=0))},EN=function(e,t){t.tostore!==0&&(al(t.v.k)?(cu(e,t.v),Jc(e,t.t.u.info,t.na,ou),t.na--):(t.v.k!==N.VVOID&&Jt(e,t.v),Jc(e,t.t.u.info,t.na,t.tostore)))},gm=function(e,t){xn(e,t.v),mr(e.fs,t.na,Tm,le("items in a constructor",!0)),t.na++,t.tostore++},kN=function(e,t){switch(e.t.token){case m.TK_NAME:{O.luaX_lookahead(e)!==61?gm(e,t):hm(e,t);break}case 91:{hm(e,t);break}default:{gm(e,t);break}}},Dm=function(e,t){let n=e.fs,s=e.linenumber,r=hr(n,Jy,0,0,0),o=new nu;o.na=o.nh=o.tostore=0,o.t=t,De(t,N.VRELOCABLE,r),De(o.v,N.VVOID,0),Jt(e.fs,t),dt(e,123);do{if(nt(o.v.k===N.VVOID||o.tostore>0),e.t.token===125)break;SN(n,o),kN(e,o)}while(We(e,44)||We(e,59));An(e,125,123,s),EN(n,o),nN(n.f.code[r],zt.luaO_int2fb(o.na)),Rm(n.f.code[r],zt.luaO_int2fb(o.nh))},vN=function(e){let t=e.fs,n=t.f,s=0;if(n.is_vararg=!1,e.t.token!==41)do switch(e.t.token){case m.TK_NAME:{Is(e,Sn(e)),s++;break}case m.TK_DOTS:{O.luaX_next(e),n.is_vararg=!0;break}default:O.luaX_syntaxerror(e,le("<name> or '...' expected",!0))}while(!n.is_vararg&&We(e,44));dr(e,s),n.numparams=t.nactvar,fr(t,t.nactvar)},_u=function(e,t,n,s){let r=new nl,o=new wt;r.f=xN(e),r.f.linedefined=s,Fm(e,r,o),dt(e,40),n&&(Cs(e,"self"),dr(e,1)),vN(e),dt(e,41),wo(e),r.f.lastlinedefined=e.linenumber,An(e,m.TK_END,m.TK_FUNCTION,s),AN(e,t),Mm(e)},Vo=function(e,t){let n=1;for(xn(e,t);We(e,44);)Jt(e.fs,t),xn(e,t),n++;return n},mm=function(e,t,n){let s=e.fs,r=new te;switch(e.t.token){case 40:{O.luaX_next(e),e.t.token===41?r.k=N.VVOID:(Vo(e,r),cu(s,r)),An(e,41,40,n);break}case 123:{Dm(e,r);break}case m.TK_STRING:{ll(e,r,e.t.seminfo.ts),O.luaX_next(e);break}default:O.luaX_syntaxerror(e,le("function arguments expected",!0))}nt(t.k===N.VNONRELOC);let o,a=t.u.info;al(r.k)?o=ou:(r.k!==N.VVOID&&Jt(s,r),o=s.freereg-(a+1)),De(t,N.VCALL,hr(s,Ly,a,o+1,2)),tl(s,n),s.freereg=a+1},TN=function(e,t){switch(e.t.token){case 40:{let n=e.linenumber;O.luaX_next(e),xn(e,t),An(e,41,40,n),Oy(e.fs,t);return}case m.TK_NAME:{Im(e,t);return}default:O.luaX_syntaxerror(e,le("unexpected symbol",!0))}},bu=function(e,t){let n=e.fs,s=e.linenumber;for(TN(e,t);;)switch(e.t.token){case 46:{tu(e,t);break}case 91:{let r=new te;Sm(n,t),Bm(e,r),lu(n,t,r);break}case 58:{let r=new te;O.luaX_next(e),hu(e,r),By(n,t,r),mm(e,t,s);break}case 40:case m.TK_STRING:case 123:{Jt(n,t),mm(e,t,s);break}default:return}},RN=function(e,t){switch(e.t.token){case m.TK_FLT:{De(t,N.VKFLT,0),t.u.nval=e.t.seminfo.r;break}case m.TK_INT:{De(t,N.VKINT,0),t.u.ival=e.t.seminfo.i;break}case m.TK_STRING:{ll(e,t,e.t.seminfo.ts);break}case m.TK_NIL:{De(t,N.VNIL,0);break}case m.TK_TRUE:{De(t,N.VTRUE,0);break}case m.TK_FALSE:{De(t,N.VFALSE,0);break}case m.TK_DOTS:{let n=e.fs;du(e,n.f.is_vararg,le("cannot use '...' outside a vararg function",!0)),De(t,N.VVARARG,hr(n,eN,0,1,0));break}case 123:{Dm(e,t);return}case m.TK_FUNCTION:{O.luaX_next(e),_u(e,t,0,e.linenumber);return}default:{bu(e,t);return}}O.luaX_next(e)},yN=function(e){switch(e){case m.TK_NOT:return vy;case 45:return ky;case 126:return Sy;case 35:return Ey;default:return Am}},NN=function(e){switch(e){case 43:return ey;case 45:return Ay;case 42:return hy;case 37:return dy;case 94:return _y;case 47:return ay;case m.TK_IDIV:return uy;case 38:return ny;case 124:return sy;case 126:return ry;case m.TK_SHL:return by;case m.TK_SHR:return xy;case m.TK_CONCAT:return oy;case m.TK_NE:return gy;case m.TK_EQ:return ly;case 60:return fy;case m.TK_LE:return py;case 62:return cy;case m.TK_GE:return iy;case m.TK_AND:return ty;case m.TK_OR:return my;default:return xm}},_m=[{left:10,right:10},{left:10,right:10},{left:11,right:11},{left:11,right:11},{left:14,right:13},{left:11,right:11},{left:11,right:11},{left:6,right:6},{left:4,right:4},{left:5,right:5},{left:7,right:7},{left:7,right:7},{left:9,right:8},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:2,right:2},{left:1,right:1}],ON=12,su=function(e,t,n){wm(e);let s=yN(e.t.token);if(s!==Am){let o=e.linenumber;O.luaX_next(e),su(e,t,ON),My(e.fs,s,t,o)}else RN(e,t);let r=NN(e.t.token);for(;r!==xm&&_m[r].left>n;){let o=new te,a=e.linenumber;O.luaX_next(e),Vy(e.fs,r,t);let i=su(e,o,_m[r].right);Fy(e.fs,r,t,o,a),r=i}return Vm(e),r},xn=function(e,t){su(e,t,0)},cl=function(e){let t=e.fs,n=new wt;_n(t,n,0),wo(e),bn(t)},rl=class{constructor(){this.prev=null,this.v=new te}},CN=function(e,t,n){let s=e.fs,r=s.freereg,o=!1;for(;t;t=t.prev)t.v.k===N.VINDEXED&&(t.v.u.ind.vt===n.k&&t.v.u.ind.t===n.u.info&&(o=!0,t.v.u.ind.vt=N.VLOCAL,t.v.u.ind.t=r),n.k===N.VLOCAL&&t.v.u.ind.idx===n.u.info&&(o=!0,t.v.u.ind.idx=r));if(o){let a=n.k===N.VLOCAL?zy:Wy;hr(s,a,r,n.u.info,0),fr(s,1)}},Gm=function(e,t,n){let s=new te;if(du(e,iN(t.v.k),le("syntax error",!0)),We(e,44)){let r=new rl;r.prev=t,bu(e,r.v),r.v.k!==N.VINDEXED&&CN(e,t,r.v),mr(e.fs,n+e.L.nCcalls,vm,le("JS levels",!0)),Gm(e,r,n+1)}else{dt(e,61);let r=Vo(e,s);if(r!==n)gu(e,n,r,s);else{Dy(e.fs,s),Zc(e.fs,t.v,s);return}}De(s,N.VNONRELOC,e.fs.freereg-1),Zc(e.fs,t.v,s)},qm=function(e){let t=new te;return xn(e,t),t.k===N.VNIL&&(t.k=N.VFALSE),Em(e.fs,t),t.f},Lm=function(e,t){let n=e.linenumber,s;We(e,m.TK_GOTO)?s=Sn(e):(O.luaX_next(e),s=ym(e.L,"break"));let r=mu(e,e.dyd.gt,s,n,t);Um(e,r)},IN=function(e,t,n){for(let s=e.bl.firstlabel;s<t.n;s++)if(gr(n,t.arr[s].name)){let r=zt.luaO_pushfstring(e.ls.L,le("label '%s' already defined on line %d",!0),n.getstr(),t.arr[s].line);pu(e.ls,r)}},wN=function(e){for(;e.t.token===59||e.t.token===m.TK_DBCOLON;)ru(e)},VN=function(e,t,n){let s=e.fs,r=e.dyd.label,o;IN(s,r,t),dt(e,m.TK_DBCOLON),o=mu(e,r,t,n,au(s)),wN(e),il(e,0)&&(r.arr[o].nactvar=s.bl.nactvar),Km(e,r.arr[o])},PN=function(e,t){let n=e.fs,s=new wt;O.luaX_next(e);let r=au(n),o=qm(e);_n(n,s,1),dt(e,m.TK_DO),cl(e),Uy(n,r),An(e,m.TK_END,m.TK_WHILE,t),bn(n),Co(n,o)},UN=function(e,t){let n=e.fs,s=au(n),r=new wt,o=new wt;_n(n,r,1),_n(n,o,0),O.luaX_next(e),wo(e),An(e,m.TK_UNTIL,m.TK_REPEAT,t);let a=qm(e);o.upval&&ol(n,a,o.nactvar),bn(n),iu(n,a,s),bn(n)},Wc=function(e){let t=new te;return xn(e,t),Jt(e.fs,t),nt(t.k===N.VNONRELOC),t.u.info},Hm=function(e,t,n,s,r){let o=new wt,a=e.fs,i;dr(e,3),dt(e,m.TK_DO);let l=r?Xc(a,Xy,t,pr):Oo(a);_n(a,o,0),dr(e,s),fr(a,s),cl(e),bn(a),Co(a,l),r?i=Xc(a,jy,t,pr):(hr(a,$y,t,0,s),tl(a,n),i=Xc(a,Qy,t+2,pr)),iu(a,i,l+1),tl(a,n)},KN=function(e,t,n){let s=e.fs,r=s.freereg;Cs(e,"(for index)"),Cs(e,"(for limit)"),Cs(e,"(for step)"),Is(e,t),dt(e,61),Wc(e),dt(e,44),Wc(e),We(e,44)?Wc(e):(yy(s,s.freereg,Py(s,1)),fr(s,1)),Hm(e,r,n,1,1)},FN=function(e,t){let n=e.fs,s=new te,r=4,o=n.freereg;for(Cs(e,"(for generator)"),Cs(e,"(for state)"),Cs(e,"(for control)"),Is(e,t);We(e,44);)Is(e,Sn(e)),r++;dt(e,m.TK_IN);let a=e.linenumber;gu(e,3,Vo(e,s),s),Ty(n,3),Hm(e,o,a,r-3,0)},MN=function(e,t){let n=e.fs,s=new wt;_n(n,s,1),O.luaX_next(e);let r=Sn(e);switch(e.t.token){case 61:KN(e,r,t);break;case 44:case m.TK_IN:FN(e,r);break;default:O.luaX_syntaxerror(e,le("'=' or 'in' expected",!0))}An(e,m.TK_END,m.TK_FOR,t),bn(n)},bm=function(e,t){let n=new wt,s=e.fs,r=new te,o;if(O.luaX_next(e),xn(e,r),dt(e,m.TK_THEN),e.t.token===m.TK_GOTO||e.t.token===m.TK_BREAK){for(wy(e.fs,r),_n(s,n,!1),Lm(e,r.t);We(e,59););if(il(e,0))return bn(s),t;o=Oo(s)}else Em(e.fs,r),_n(s,n,!1),o=r.f;return wo(e),bn(s),(e.t.token===m.TK_ELSE||e.t.token===m.TK_ELSEIF)&&(t=Ny(s,t,Oo(s))),Co(s,o),t},BN=function(e,t){let n=e.fs,s=pr;for(s=bm(e,s);e.t.token===m.TK_ELSEIF;)s=bm(e,s);We(e,m.TK_ELSE)&&cl(e),An(e,m.TK_END,m.TK_IF,t),Co(n,s)},DN=function(e){let t=new te,n=e.fs;Is(e,Sn(e)),dr(e,1),_u(e,t,0,e.linenumber),Io(n,t.u.info).startpc=n.pc},GN=function(e){let t=0,n,s=new te;do Is(e,Sn(e)),t++;while(We(e,44));We(e,61)?n=Vo(e,s):(s.k=N.VVOID,n=0),gu(e,t,n,s),dr(e,t)},qN=function(e,t){let n=0;for(Im(e,t);e.t.token===46;)tu(e,t);return e.t.token===58&&(n=1,tu(e,t)),n},LN=function(e,t){let n=new te,s=new te;O.luaX_next(e);let r=qN(e,n);_u(e,s,r,t),Zc(e.fs,n,s),tl(e.fs,t)},HN=function(e){let t=e.fs,n=new rl;bu(e,n.v),e.t.token===61||e.t.token===44?(n.prev=null,Gm(e,n,1)):(du(e,n.v.k===N.VCALL,le("syntax error",!0)),Rm(zc(t,n.v),1))},jN=function(e){let t=e.fs,n=new te,s,r;il(e,1)||e.t.token===59?s=r=0:(r=Vo(e,n),al(n.k)?(cu(t,n),n.k===N.VCALL&&r===1&&(sN(zc(t,n),Yy),nt(zc(t,n).A===t.nactvar)),s=t.nactvar,r=ou):r===1?s=Cy(t,n):(Jt(t,n),s=t.nactvar,nt(r===t.freereg-s))),km(t,s,r),We(e,59)},ru=function(e){let t=e.linenumber;switch(wm(e),e.t.token){case 59:{O.luaX_next(e);break}case m.TK_IF:{BN(e,t);break}case m.TK_WHILE:{PN(e,t);break}case m.TK_DO:{O.luaX_next(e),cl(e),An(e,m.TK_END,m.TK_DO,t);break}case m.TK_FOR:{MN(e,t);break}case m.TK_REPEAT:{UN(e,t);break}case m.TK_FUNCTION:{LN(e,t);break}case m.TK_LOCAL:{O.luaX_next(e),We(e,m.TK_FUNCTION)?DN(e):GN(e);break}case m.TK_DBCOLON:{O.luaX_next(e),VN(e,Sn(e),t);break}case m.TK_RETURN:{O.luaX_next(e),jN(e);break}case m.TK_BREAK:case m.TK_GOTO:{Lm(e,Oo(e.fs));break}default:{HN(e);break}}nt(e.fs.f.maxstacksize>=e.fs.freereg&&e.fs.freereg>=e.fs.nactvar),e.fs.freereg=e.fs.nactvar,Vm(e)},XN=function(e,t){let n=new wt,s=new te;Fm(e,t,n),t.f.is_vararg=!0,De(s,N.VLOCAL,0),Cm(t,e.envn,s),O.luaX_next(e),wo(e),fu(e,m.TK_EOS),Mm(e)},WN=function(e,t,n,s,r,o){let a=new O.LexState,i=new nl,l=uu.luaF_newLclosure(e,1);return dm.luaD_inctop(e),e.stack[e.top-1].setclLvalue(l),a.h=aN.luaH_new(e),dm.luaD_inctop(e),e.stack[e.top-1].sethvalue(a.h),i.f=l.p=new Nm(e),i.f.source=oN(e,r),a.buff=n,a.dyd=s,s.actvar.n=s.gt.n=s.label.n=0,O.luaX_setinput(e,a,t,i.f.source,o),XN(a,i),nt(!i.prev&&i.nups===1&&!a.fs),nt(s.actvar.n===0&&s.gt.n===0&&s.label.n===0),delete e.stack[--e.top],l};_r.exports.Dyndata=Qc;_r.exports.expkind=N;_r.exports.expdesc=te;_r.exports.luaY_parser=WN;_r.exports.vkisinreg=cN});var t_=P((Gq,e_)=>{"use strict";var{LUA_SIGNATURE:jm,constant_types:{LUA_TBOOLEAN:Xm,LUA_TLNGSTR:Wm,LUA_TNIL:zm,LUA_TNUMFLT:Jm,LUA_TNUMINT:Zm,LUA_TSHRSTR:zN},thread_status:{LUA_ERRSYNTAX:JN},is_luastring:ZN,luastring_eq:YN,to_luastring:xu}=ge(),$N=ct(),Qm=It(),Au=vs(),br=ut(),{MAXARG_sBx:QN,POS_A:eO,POS_Ax:tO,POS_B:nO,POS_Bx:Ym,POS_C:sO,POS_OP:rO,SIZE_A:oO,SIZE_Ax:aO,SIZE_B:lO,SIZE_Bx:$m,SIZE_C:iO,SIZE_OP:cO}=As(),{lua_assert:Su}=Qe(),{luaS_bless:uO}=Gt(),{luaZ_read:xr,ZIO:pO}=xo(),fO=[25,147,13,10,26,10],Eu=class e{constructor(t,n,s){this.intSize=4,this.size_tSize=4,this.instructionSize=4,this.integerSize=8,this.numberSize=8,Su(n instanceof pO,"BytecodeParser only operates on a ZIO"),Su(ZN(s)),s[0]===64||s[0]===61?this.name=s.subarray(1):s[0]==jm[0]?this.name=xu("binary string",!0):this.name=s,this.L=t,this.Z=n,this.arraybuffer=new ArrayBuffer(Math.max(this.intSize,this.size_tSize,this.instructionSize,this.integerSize,this.numberSize)),this.dv=new DataView(this.arraybuffer),this.u8=new Uint8Array(this.arraybuffer)}read(t){let n=new Uint8Array(t);return xr(this.Z,n,0,t)!==0&&this.error("truncated"),n}LoadByte(){return xr(this.Z,this.u8,0,1)!==0&&this.error("truncated"),this.u8[0]}LoadInt(){return xr(this.Z,this.u8,0,this.intSize)!==0&&this.error("truncated"),this.dv.getInt32(0,!0)}LoadNumber(){return xr(this.Z,this.u8,0,this.numberSize)!==0&&this.error("truncated"),this.dv.getFloat64(0,!0)}LoadInteger(){return xr(this.Z,this.u8,0,this.integerSize)!==0&&this.error("truncated"),$N.fromBytesLE(this.u8)}LoadSize_t(){return this.LoadInteger()}LoadString(){let t=this.LoadByte();return t===255&&(t=this.LoadSize_t()),t===0?null:uO(this.L,this.read(t-1))}static MASK1(t,n){return~(-1<<t)<<n}LoadCode(t){let n=this.LoadInt(),s=e;for(let r=0;r<n;r++){xr(this.Z,this.u8,0,this.instructionSize)!==0&&this.error("truncated");let o=this.dv.getUint32(0,!0);t.code[r]={code:o,opcode:o>>rO&s.MASK1(cO,0),A:o>>eO&s.MASK1(oO,0),B:o>>nO&s.MASK1(lO,0),C:o>>sO&s.MASK1(iO,0),Bx:o>>Ym&s.MASK1($m,0),Ax:o>>tO&s.MASK1(aO,0),sBx:(o>>Ym&s.MASK1($m,0))-QN}}}LoadConstants(t){let n=this.LoadInt();for(let s=0;s<n;s++){let r=this.LoadByte();switch(r){case zm:t.k.push(new br.TValue(zm,null));break;case Xm:t.k.push(new br.TValue(Xm,this.LoadByte()!==0));break;case Jm:t.k.push(new br.TValue(Jm,this.LoadNumber()));break;case Zm:t.k.push(new br.TValue(Zm,this.LoadInteger()));break;case zN:case Wm:t.k.push(new br.TValue(Wm,this.LoadString()));break;default:this.error(`unrecognized constant '${r}'`)}}}LoadProtos(t){let n=this.LoadInt();for(let s=0;s<n;s++)t.p[s]=new Au.Proto(this.L),this.LoadFunction(t.p[s],t.source)}LoadUpvalues(t){let n=this.LoadInt();for(let s=0;s<n;s++)t.upvalues[s]={name:null,instack:this.LoadByte(),idx:this.LoadByte()}}LoadDebug(t){let n=this.LoadInt();for(let s=0;s<n;s++)t.lineinfo[s]=this.LoadInt();n=this.LoadInt();for(let s=0;s<n;s++)t.locvars[s]={varname:this.LoadString(),startpc:this.LoadInt(),endpc:this.LoadInt()};n=this.LoadInt();for(let s=0;s<n;s++)t.upvalues[s].name=this.LoadString()}LoadFunction(t,n){t.source=this.LoadString(),t.source===null&&(t.source=n),t.linedefined=this.LoadInt(),t.lastlinedefined=this.LoadInt(),t.numparams=this.LoadByte(),t.is_vararg=this.LoadByte()!==0,t.maxstacksize=this.LoadByte(),this.LoadCode(t),this.LoadConstants(t),this.LoadUpvalues(t),this.LoadProtos(t),this.LoadDebug(t)}checkliteral(t,n){let s=this.read(t.length);YN(s,t)||this.error(n)}checkHeader(){this.checkliteral(jm.subarray(1),"not a"),this.LoadByte()!==83&&this.error("version mismatch in"),this.LoadByte()!==0&&this.error("format mismatch in"),this.checkliteral(fO,"corrupted"),this.intSize=this.LoadByte(),this.size_tSize=this.LoadByte(),this.instructionSize=this.LoadByte(),this.integerSize=this.LoadByte(),this.numberSize=this.LoadByte(),this.checksize(this.intSize,4,"int"),this.checksize(this.size_tSize,4,"size_t"),this.checksize(this.instructionSize,4,"instruction"),this.checksize(this.integerSize,8,"integer"),this.checksize(this.numberSize,8,"number"),this.LoadInteger()!==22136&&this.error("endianness mismatch in"),this.LoadNumber()!==370.5&&this.error("float format mismatch in")}error(t){br.luaO_pushfstring(this.L,xu("%s: %s precompiled chunk"),this.name,xu(t)),Qm.luaD_throw(this.L,JN)}checksize(t,n,s){t!==n&&this.error(`${s} size mismatch in`)}},dO=function(e,t,n){let s=new Eu(e,t,n);s.checkHeader();let r=Au.luaF_newLclosure(e,s.LoadByte());return Qm.luaD_inctop(e),e.stack[e.top-1].setclLvalue(r),r.p=new Au.Proto(e),s.LoadFunction(r.p,null),Su(r.nupvalues===r.p.upvalues.length),r};e_.exports.luaU_undump=dO});var It=P((qq,ke)=>{"use strict";var{LUA_HOOKCALL:i_,LUA_HOOKRET:hO,LUA_HOOKTAILCALL:gO,LUA_MASKCALL:n_,LUA_MASKLINE:mO,LUA_MASKRET:s_,LUA_MINSTACK:ul,LUA_MULTRET:yu,LUA_SIGNATURE:_O,constant_types:{LUA_TCCL:r_,LUA_TLCF:bO,LUA_TLCL:xO,LUA_TNIL:Sr},thread_status:{LUA_ERRMEM:AO,LUA_ERRERR:Nu,LUA_ERRRUN:Ou,LUA_ERRSYNTAX:SO,LUA_OK:En,LUA_YIELD:kn},lua_Debug:EO,luastring_indexOf:kO,to_luastring:Wn}=ge(),ws=_o(),Uo=pn(),Cu=vs(),{api_check:c_,lua_assert:ht,LUAI_MAXCCALLS:Po}=Qe(),ie=ut(),vO=As(),u_=jc(),ce=un(),{luaS_newliteral:vu}=Gt(),o_=ks(),{LUAI_MAXSTACK:Zt}=Ye(),TO=t_(),Ko=Es(),{MBuffer:RO}=xo(),Iu=function(e,t){if(e.top<t)for(;e.top<t;)e.stack[e.top++]=new ie.TValue(Sr,null);else for(;e.top>t;)delete e.stack[--e.top]},dl=function(e,t,n){let s=e.top;for(;e.top<n+1;)e.stack[e.top++]=new ie.TValue(Sr,null);switch(t){case AO:{ie.setsvalue2s(e,n,vu(e,"not enough memory"));break}case Nu:{ie.setsvalue2s(e,n,vu(e,"error in error handling"));break}default:ie.setobjs2s(e,n,s-1)}for(;e.top>n+1;)delete e.stack[--e.top]},p_=Zt+200,pl=function(e,t){ht(t<=Zt||t==p_),ht(e.stack_last==e.stack.length-ce.EXTRA_STACK),e.stack.length=t,e.stack_last=t-ce.EXTRA_STACK},f_=function(e,t){let n=e.stack.length;if(n>Zt)Er(e,Nu);else{let s=e.top+t+ce.EXTRA_STACK,r=2*n;r>Zt&&(r=Zt),r<s&&(r=s),r>Zt?(pl(e,p_),Uo.luaG_runerror(e,Wn("stack overflow",!0))):pl(e,r)}},Ar=function(e,t){e.stack_last-e.top<=t&&f_(e,t)},yO=function(e){let t=e.top;for(let n=e.ci;n!==null;n=n.previous)t<n.top&&(t=n.top);return ht(t<=e.stack_last),t+1},d_=function(e){let t=yO(e),n=t+Math.floor(t/8)+2*ce.EXTRA_STACK;n>Zt&&(n=Zt),e.stack.length>Zt&&ce.luaE_freeCI(e),t<=Zt-ce.EXTRA_STACK&&n<e.stack.length&&pl(e,n)},NO=function(e){Ar(e,1),e.stack[e.top++]=new ie.TValue(Sr,null)},hl=function(e,t,n){let s=e.stack[t];switch(s.type){case r_:case bO:{let r=s.type===r_?s.value.f:s.value;Ar(e,ul);let o=ce.luaE_extendCI(e);o.funcOff=t,o.nresults=n,o.func=s,o.top=e.top+ul,ht(o.top<=e.stack_last),o.callstatus=0,e.hookmask&n_&&ml(e,i_,-1);let a=r(e);if(typeof a!="number"||a<0||(a|0)!==a)throw Error("invalid return value from JS function (expected integer)");return ws.api_checknelems(e,a),gl(e,o,e.top-a,a),!0}case xO:{let r,o=s.value.p,a=e.top-t-1,i=o.maxstacksize;if(Ar(e,i),o.is_vararg)r=IO(e,o,a);else{for(;a<o.numparams;a++)e.stack[e.top++]=new ie.TValue(Sr,null);r=t+1}let l=ce.luaE_extendCI(e);return l.funcOff=t,l.nresults=n,l.func=s,l.l_base=r,l.top=r+i,Iu(e,l.top),l.l_code=o.code,l.l_savedpc=0,l.callstatus=ce.CIST_LUA,e.hookmask&n_&&CO(e,l),!1}default:return Ar(e,1),wO(e,t,s),hl(e,t,n)}},gl=function(e,t,n,s){let r=t.nresults;e.hookmask&(s_|mO)&&(e.hookmask&s_&&ml(e,hO,-1),e.oldpc=t.previous.l_savedpc);let o=t.funcOff;return e.ci=t.previous,e.ci.next=null,OO(e,n,o,s,r)},OO=function(e,t,n,s,r){switch(r){case 0:break;case 1:{s===0?e.stack[n].setnilvalue():ie.setobjs2s(e,n,t);break}case yu:{for(let a=0;a<s;a++)ie.setobjs2s(e,n+a,t+a);for(let a=e.top;a>=n+s;a--)delete e.stack[a];return e.top=n+s,!1}default:{let a;if(r<=s)for(a=0;a<r;a++)ie.setobjs2s(e,n+a,t+a);else{for(a=0;a<s;a++)ie.setobjs2s(e,n+a,t+a);for(;a<r;a++)n+a>=e.top?e.stack[n+a]=new ie.TValue(Sr,null):e.stack[n+a].setnilvalue()}break}}let o=n+r;for(let a=e.top;a>=o;a--)delete e.stack[a];return e.top=o,!0},ml=function(e,t,n){let s=e.hook;if(s&&e.allowhook){let r=e.ci,o=e.top,a=r.top,i=new EO;i.event=t,i.currentline=n,i.i_ci=r,Ar(e,ul),r.top=e.top+ul,ht(r.top<=e.stack_last),e.allowhook=0,r.callstatus|=ce.CIST_HOOKED,s(e,i),ht(!e.allowhook),e.allowhook=1,r.top=a,Iu(e,o),r.callstatus&=~ce.CIST_HOOKED}},CO=function(e,t){let n=i_;t.l_savedpc++,t.previous.callstatus&ce.CIST_LUA&&t.previous.l_code[t.previous.l_savedpc-1].opcode==vO.OpCodesI.OP_TAILCALL&&(t.callstatus|=ce.CIST_TAIL,n=gO),ml(e,n,-1),t.l_savedpc--},IO=function(e,t,n){let s=t.numparams,r=e.top-n,o=e.top,a;for(a=0;a<s&&a<n;a++)ie.pushobj2s(e,e.stack[r+a]),e.stack[r+a].setnilvalue();for(;a<s;a++)e.stack[e.top++]=new ie.TValue(Sr,null);return o},wO=function(e,t,n){let s=o_.luaT_gettmbyobj(e,n,o_.TMS.TM_CALL);s.ttisfunction(s)||Uo.luaG_typeerror(e,n,Wn("call",!0)),ie.pushobj2s(e,e.stack[e.top-1]);for(let r=e.top-2;r>t;r--)ie.setobjs2s(e,r,r-1);ie.setobj2s(e,t,s)},VO=function(e){e.nCcalls===Po?Uo.luaG_runerror(e,Wn("JS stack overflow",!0)):e.nCcalls>=Po+(Po>>3)&&Er(e,Nu)},h_=function(e,t,n){++e.nCcalls>=Po&&VO(e),hl(e,t,n)||Ko.luaV_execute(e),e.nCcalls--},Er=function(e,t){if(e.errorJmp)throw e.errorJmp.status=t,e.errorJmp;{let n=e.l_G;if(e.status=t,n.mainthread.errorJmp)n.mainthread.stack[n.mainthread.top++]=e.stack[e.top-1],Er(n.mainthread,t);else{let s=n.panic;throw s&&(dl(e,t,e.top),e.ci.top<e.top&&(e.ci.top=e.top),s(e)),new Error(`Aborted ${t}`)}}},fl=function(e,t,n){let s=e.nCcalls,r={status:En,previous:e.errorJmp};e.errorJmp=r;try{t(e,n)}catch(o){if(r.status===En){let a=e.l_G.atnativeerror;if(a)try{if(r.status=En,ws.lua_pushcfunction(e,a),ws.lua_pushlightuserdata(e,o),Tu(e,e.top-2,1),e.errfunc!==0){let i=e.errfunc;ie.pushobj2s(e,e.stack[e.top-1]),ie.setobjs2s(e,e.top-2,i),Tu(e,e.top-2,1)}r.status=Ou}catch{r.status===En&&(r.status=-1)}else r.status=-1}}return e.errorJmp=r.previous,e.nCcalls=s,r.status},a_=function(e,t){let n=e.ci;ht(n.c_k!==null&&e.nny===0),ht(n.callstatus&ce.CIST_YPCALL||t===kn),n.callstatus&ce.CIST_YPCALL&&(n.callstatus&=~ce.CIST_YPCALL,e.errfunc=n.c_old_errfunc),n.nresults===yu&&e.ci.top<e.top&&(e.ci.top=e.top);let s=n.c_k,r=s(e,t,n.c_ctx);ws.api_checknelems(e,r),gl(e,n,e.top-r,r)},g_=function(e,t){for(t!==null&&a_(e,t);e.ci!==e.base_ci;)e.ci.callstatus&ce.CIST_LUA?(Ko.luaV_finishOp(e),Ko.luaV_execute(e)):a_(e,kn)},PO=function(e){for(let t=e.ci;t!==null;t=t.previous)if(t.callstatus&ce.CIST_YPCALL)return t;return null},UO=function(e,t){let n=PO(e);if(n===null)return 0;let s=n.extra;return Cu.luaF_close(e,s),dl(e,t,s),e.ci=n,e.allowhook=n.callstatus&ce.CIST_OAH,e.nny=0,d_(e),e.errfunc=n.c_old_errfunc,1},ku=function(e,t,n){let s=vu(e,t);if(n===0)ie.pushsvalue2s(e,s),c_(e,e.top<=e.ci.top,"stack overflow");else{for(let r=1;r<n;r++)delete e.stack[--e.top];ie.setsvalue2s(e,e.top-1,s)}return Ou},KO=function(e,t){let n=e.top-t,s=e.ci;e.status===En?hl(e,n-1,yu)||Ko.luaV_execute(e):(ht(e.status===kn),e.status=En,s.funcOff=s.extra,s.func=e.stack[s.funcOff],s.callstatus&ce.CIST_LUA?Ko.luaV_execute(e):(s.c_k!==null&&(t=s.c_k(e,kn,s.c_ctx),ws.api_checknelems(e,t),n=e.top-t),gl(e,s,n,t)),g_(e,null))},FO=function(e,t,n){let s=e.nny;if(e.status===En){if(e.ci!==e.base_ci)return ku(e,"cannot resume non-suspended coroutine",n)}else if(e.status!==kn)return ku(e,"cannot resume dead coroutine",n);if(e.nCcalls=t?t.nCcalls+1:1,e.nCcalls>=Po)return ku(e,"JS stack overflow",n);e.nny=0,ws.api_checknelems(e,e.status===En?n+1:n);let r=fl(e,KO,n);if(r===-1)r=Ou;else{for(;r>kn&&UO(e,r);)r=fl(e,g_,r);r>kn?(e.status=r,dl(e,r,e.top),e.ci.top=e.top):ht(r===e.status)}return e.nny=s,e.nCcalls--,ht(e.nCcalls===(t?t.nCcalls:0)),r},MO=function(e){return e.nny===0},m_=function(e,t,n,s){let r=e.ci;return ws.api_checknelems(e,t),e.nny>0&&(e!==e.l_G.mainthread?Uo.luaG_runerror(e,Wn("attempt to yield across a JS-call boundary",!0)):Uo.luaG_runerror(e,Wn("attempt to yield from outside a coroutine",!0))),e.status=kn,r.extra=r.funcOff,r.callstatus&ce.CIST_LUA?c_(e,s===null,"hooks cannot continue after yielding"):(r.c_k=s,s!==null&&(r.c_ctx=n),r.funcOff=e.top-t-1,r.func=e.stack[r.funcOff],Er(e,kn)),ht(r.callstatus&ce.CIST_HOOKED),0},BO=function(e,t){m_(e,t,0,null)},__=function(e,t,n,s,r){let o=e.ci,a=e.allowhook,i=e.nny,l=e.errfunc;e.errfunc=r;let u=fl(e,t,n);return u!==En&&(Cu.luaF_close(e,s),dl(e,u,s),e.ci=o,e.allowhook=a,e.nny=i,d_(e)),e.errfunc=l,u},Tu=function(e,t,n){e.nny++,h_(e,t,n),e.nny--},Ru=class{constructor(t,n,s){this.z=t,this.buff=new RO,this.dyd=new u_.Dyndata,this.mode=s,this.name=n}},l_=function(e,t,n){t&&kO(t,n[0])===-1&&(ie.luaO_pushfstring(e,Wn("attempt to load a %s chunk (mode is '%s')"),n,t),Er(e,SO))},DO=function(e,t){let n,s=t.z.zgetc();s===_O[0]?(l_(e,t.mode,Wn("binary",!0)),n=TO.luaU_undump(e,t.z,t.name)):(l_(e,t.mode,Wn("text",!0)),n=u_.luaY_parser(e,t.z,t.buff,t.dyd,t.name,s)),ht(n.nupvalues===n.p.upvalues.length),Cu.luaF_initupvals(e,n)},GO=function(e,t,n,s){let r=new Ru(t,n,s);e.nny++;let o=__(e,DO,r,e.top,e.errfunc);return e.nny--,o};ke.exports.adjust_top=Iu;ke.exports.luaD_call=h_;ke.exports.luaD_callnoyield=Tu;ke.exports.luaD_checkstack=Ar;ke.exports.luaD_growstack=f_;ke.exports.luaD_hook=ml;ke.exports.luaD_inctop=NO;ke.exports.luaD_pcall=__;ke.exports.luaD_poscall=gl;ke.exports.luaD_precall=hl;ke.exports.luaD_protectedparser=GO;ke.exports.luaD_rawrunprotected=fl;ke.exports.luaD_reallocstack=pl;ke.exports.luaD_throw=Er;ke.exports.lua_isyieldable=MO;ke.exports.lua_resume=FO;ke.exports.lua_yield=BO;ke.exports.lua_yieldk=m_});var pn=P((Lq,Ce)=>{"use strict";var{LUA_HOOKCOUNT:qO,LUA_HOOKLINE:LO,LUA_MASKCOUNT:HO,LUA_MASKLINE:b_,constant_types:{LUA_TBOOLEAN:jO,LUA_TNIL:XO,LUA_TTABLE:WO},thread_status:{LUA_ERRRUN:zO,LUA_YIELD:wu},from_userstring:JO,luastring_eq:k_,luastring_indexOf:x_,to_luastring:q}=ge(),{api_check:Vu,lua_assert:Uu}=Qe(),{LUA_IDSIZE:v_}=Ye(),A_=_o(),Fo=It(),bl=vs(),ZO=Wa(),Ge=ut(),xl=As(),st=un(),S_=qt(),se=ks(),Ku=Es(),V=xl.OpCodesI,Al=e=>(Uu(e.callstatus&st.CIST_LUA),e.l_savedpc-1),T_=e=>{let t=e.func.value.p.lineinfo;return t.length!==0?t[Al(e)]:-1},kr=e=>{if(e.status===wu){let t=e.ci,n=t.funcOff;t.func=e.stack[t.extra],t.funcOff=t.extra,t.extra=n}},YO=(e,t,n,s)=>{(t===null||n===0)&&(n=0,t=null),e.ci.callstatus&st.CIST_LUA&&(e.oldpc=e.ci.l_savedpc),e.hook=t,e.basehookcount=s,e.hookcount=e.basehookcount,e.hookmask=n},$O=e=>e.hook,QO=e=>e.hookmask,eC=e=>e.basehookcount,tC=(e,t,n)=>{if(t<0)return 0;let s;for(s=e.ci;t>0&&s!==e.base_ci;s=s.previous)t--;return t===0&&s!==e.base_ci?(n.i_ci=s,1):0},Pu=(e,t)=>{Uu(t<e.upvalues.length);let n=e.upvalues[t].name;return n===null?q("?",!0):n.getstr()},nC=(e,t)=>{let n=e.func.value.p.numparams;return t>=e.l_base-e.funcOff-n?null:{pos:e.funcOff+n+t,name:q("(*vararg)",!0)}},R_=(e,t,n)=>{let s,r=null;if(t.callstatus&st.CIST_LUA){if(n<0)return nC(t,-n);s=t.l_base,r=bl.luaF_getlocalname(t.func.value.p,n,Al(t))}else s=t.funcOff+1;if(r===null)if((t===e.ci?e.top:t.next.funcOff)-s>=n&&n>0)r=q("(*temporary)",!0);else return null;return{pos:s+(n-1),name:r}},sC=(e,t,n)=>{let s;if(kr(e),t===null)e.stack[e.top-1].ttisLclosure()?s=bl.luaF_getlocalname(e.stack[e.top-1].value.p,n,0):s=null;else{let r=R_(e,t.i_ci,n);r?(s=r.name,Ge.pushobj2s(e,e.stack[r.pos]),Vu(e,e.top<=e.ci.top,"stack overflow")):s=null}return kr(e),s},rC=(e,t,n)=>{let s;kr(e);let r=R_(e,t.i_ci,n);return r?(s=r.name,Ge.setobjs2s(e,r.pos,e.top-1),delete e.stack[--e.top]):s=null,kr(e),s},oC=(e,t)=>{if(t===null||t instanceof Ge.CClosure)e.source=q("=[JS]",!0),e.linedefined=-1,e.lastlinedefined=-1,e.what=q("J",!0);else{let n=t.p;e.source=n.source?n.source.getstr():q("=?",!0),e.linedefined=n.linedefined,e.lastlinedefined=n.lastlinedefined,e.what=e.linedefined===0?q("main",!0):q("Lua",!0)}e.short_src=Ge.luaO_chunkid(e.source,v_)},aC=(e,t)=>{if(t===null||t instanceof Ge.CClosure)e.stack[e.top]=new Ge.TValue(XO,null),A_.api_incr_top(e);else{let n=t.p.lineinfo,s=S_.luaH_new(e);e.stack[e.top]=new Ge.TValue(WO,s),A_.api_incr_top(e);let r=new Ge.TValue(jO,!0);for(let o=0;o<n.length;o++)S_.luaH_setint(s,n[o],r)}},lC=(e,t)=>t===null?null:t.callstatus&st.CIST_FIN?{name:q("__gc",!0),funcname:q("metamethod",!0)}:!(t.callstatus&st.CIST_TAIL)&&t.previous.callstatus&st.CIST_LUA?pC(e,t.previous):null,iC=(e,t,n,s,r)=>{let o=1;for(;t.length>0;t=t.subarray(1))switch(t[0]){case 83:oC(n,s);break;case 108:n.currentline=r&&r.callstatus&st.CIST_LUA?T_(r):-1;break;case 117:n.nups=s===null?0:s.nupvalues,s===null||s instanceof Ge.CClosure?(n.isvararg=!0,n.nparams=0):(n.isvararg=s.p.is_vararg,n.nparams=s.p.numparams);break;case 116:n.istailcall=r?r.callstatus&st.CIST_TAIL:0;break;case 110:{let a=lC(e,r);a===null?(n.namewhat=q("",!0),n.name=null):(n.namewhat=a.funcname,n.name=a.name);break}case 76:case 102:break;default:o=0}return o},cC=(e,t,n)=>{t=JO(t);let s,r,o,a;return kr(e),t[0]===62?(o=null,a=e.stack[e.top-1],Vu(e,a.ttisfunction(),"function expected"),t=t.subarray(1),e.top--):(o=n.i_ci,a=o.func,Uu(o.func.ttisfunction())),r=a.ttisclosure()?a.value:null,s=iC(e,t,n,r,o),x_(t,102)>=0&&(Ge.pushobj2s(e,a),Vu(e,e.top<=e.ci.top,"stack overflow")),kr(e),x_(t,76)>=0&&aC(e,r),s},E_=(e,t,n)=>{let s={name:null,funcname:null};if(xl.ISK(n)){let r=e.k[xl.INDEXK(n)];if(r.ttisstring())return s.name=r.svalue(),s}else{let r=Sl(e,t,n);if(r&&r.funcname[0]===99)return r}return s.name=q("?",!0),s},_l=(e,t)=>e<t?-1:e,uC=(e,t,n)=>{let s=-1,r=0;for(let o=0;o<t;o++){let a=e.code[o],i=a.A;switch(a.opcode){case V.OP_LOADNIL:{let l=a.B;i<=n&&n<=i+l&&(s=_l(o,r));break}case V.OP_TFORCALL:n>=i+2&&(s=_l(o,r));break;case V.OP_CALL:case V.OP_TAILCALL:n>=i&&(s=_l(o,r));break;case V.OP_JMP:{let l=a.sBx,u=o+1+l;o<u&&u<=t&&u>r&&(r=u);break}default:xl.testAMode(a.opcode)&&n===i&&(s=_l(o,r));break}}return s},Sl=(e,t,n)=>{let s={name:bl.luaF_getlocalname(e,n+1,t),funcname:null};if(s.name)return s.funcname=q("local",!0),s;let r=uC(e,t,n);if(r!==-1){let o=e.code[r];switch(o.opcode){case V.OP_MOVE:{let a=o.B;if(a<o.A)return Sl(e,r,a);break}case V.OP_GETTABUP:case V.OP_GETTABLE:{let a=o.C,i=o.B,l=o.opcode===V.OP_GETTABLE?bl.luaF_getlocalname(e,i+1,r):Pu(e,i);return s.name=E_(e,r,a).name,s.funcname=l&&k_(l,ZO.LUA_ENV)?q("global",!0):q("field",!0),s}case V.OP_GETUPVAL:return s.name=Pu(e,o.B),s.funcname=q("upvalue",!0),s;case V.OP_LOADK:case V.OP_LOADKX:{let a=o.opcode===V.OP_LOADK?o.Bx:e.code[r+1].Ax;if(e.k[a].ttisstring())return s.name=e.k[a].svalue(),s.funcname=q("constant",!0),s;break}case V.OP_SELF:return s.name=E_(e,r,o.C).name,s.funcname=q("method",!0),s;default:break}}return null},pC=(e,t)=>{let n={name:null,funcname:null},s=0,r=t.func.value.p,o=Al(t),a=r.code[o];if(t.callstatus&st.CIST_HOOKED)return n.name=q("?",!0),n.funcname=q("hook",!0),n;switch(a.opcode){case V.OP_CALL:case V.OP_TAILCALL:return Sl(r,o,a.A);case V.OP_TFORCALL:return n.name=q("for iterator",!0),n.funcname=q("for iterator",!0),n;case V.OP_SELF:case V.OP_GETTABUP:case V.OP_GETTABLE:s=se.TMS.TM_INDEX;break;case V.OP_SETTABUP:case V.OP_SETTABLE:s=se.TMS.TM_NEWINDEX;break;case V.OP_ADD:s=se.TMS.TM_ADD;break;case V.OP_SUB:s=se.TMS.TM_SUB;break;case V.OP_MUL:s=se.TMS.TM_MUL;break;case V.OP_MOD:s=se.TMS.TM_MOD;break;case V.OP_POW:s=se.TMS.TM_POW;break;case V.OP_DIV:s=se.TMS.TM_DIV;break;case V.OP_IDIV:s=se.TMS.TM_IDIV;break;case V.OP_BAND:s=se.TMS.TM_BAND;break;case V.OP_BOR:s=se.TMS.TM_BOR;break;case V.OP_BXOR:s=se.TMS.TM_BXOR;break;case V.OP_SHL:s=se.TMS.TM_SHL;break;case V.OP_SHR:s=se.TMS.TM_SHR;break;case V.OP_UNM:s=se.TMS.TM_UNM;break;case V.OP_BNOT:s=se.TMS.TM_BNOT;break;case V.OP_LEN:s=se.TMS.TM_LEN;break;case V.OP_CONCAT:s=se.TMS.TM_CONCAT;break;case V.OP_EQ:s=se.TMS.TM_EQ;break;case V.OP_LT:s=se.TMS.TM_LT;break;case V.OP_LE:s=se.TMS.TM_LE;break;default:return null}return n.name=e.l_G.tmname[s].getstr(),n.funcname=q("metamethod",!0),n},fC=(e,t,n)=>{for(let s=t.l_base;s<t.top;s++)if(e.stack[s]===n)return s;return!1},dC=(e,t,n)=>{let s=t.func.value;for(let r=0;r<s.nupvalues;r++)if(s.upvals[r]===n)return{name:Pu(s.p,r),funcname:q("upvalue",!0)};return null},y_=(e,t)=>{let n=e.ci,s=null;if(n.callstatus&st.CIST_LUA){s=dC(e,n,t);let r=fC(e,n,t);!s&&r&&(s=Sl(n.func.value.p,Al(n),r-n.l_base))}return s?Ge.luaO_pushfstring(e,q(" (%s '%s')",!0),s.funcname,s.name):q("",!0)},Fu=(e,t,n)=>{let s=se.luaT_objtypename(e,t);Mo(e,q("attempt to %s a %s value%s",!0),n,s,y_(e,t))},hC=(e,t,n)=>{(t.ttisstring()||Ku.cvt2str(t))&&(t=n),Fu(e,t,q("concatenate",!0))},gC=(e,t,n,s)=>{Ku.tonumber(t)===!1&&(n=t),Fu(e,n,s)},mC=(e,t,n)=>{let s=se.luaT_objtypename(e,t),r=se.luaT_objtypename(e,n);k_(s,r)?Mo(e,q("attempt to compare two %s values",!0),s):Mo(e,q("attempt to compare %s with %s",!0),s,r)},N_=(e,t,n,s)=>{let r;return n?r=Ge.luaO_chunkid(n.getstr(),v_):r=q("?",!0),Ge.luaO_pushfstring(e,q("%s:%d: %s",!0),r,s,t)},Mo=(e,t,...n)=>{let s=e.ci,r=Ge.luaO_pushvfstring(e,t,n);s.callstatus&st.CIST_LUA&&N_(e,r,s.func.value.p.source,T_(s)),O_(e)},O_=e=>{if(e.errfunc!==0){let t=e.errfunc;Ge.pushobj2s(e,e.stack[e.top-1]),Ge.setobjs2s(e,e.top-2,t),Fo.luaD_callnoyield(e,e.top-2,1)}Fo.luaD_throw(e,zO)},_C=(e,t,n)=>{Ku.tointeger(t)===!1&&(n=t),Mo(e,q("number%s has no integer representation",!0),y_(e,n))},bC=e=>{let t=e.ci,n=e.hookmask,s=--e.hookcount===0&&n&HO;if(s)e.hookcount=e.basehookcount;else if(!(n&b_))return;if(t.callstatus&st.CIST_HOOKYIELD){t.callstatus&=~st.CIST_HOOKYIELD;return}if(s&&Fo.luaD_hook(e,qO,-1),n&b_){let r=t.func.value.p,o=t.l_savedpc-1,a=r.lineinfo.length!==0?r.lineinfo[o]:-1;(o===0||t.l_savedpc<=e.oldpc||a!==(r.lineinfo.length!==0?r.lineinfo[e.oldpc-1]:-1))&&Fo.luaD_hook(e,LO,a)}e.oldpc=t.l_savedpc,e.status===wu&&(s&&(e.hookcount=1),t.l_savedpc--,t.callstatus|=st.CIST_HOOKYIELD,t.funcOff=e.top-1,t.func=e.stack[t.funcOff],Fo.luaD_throw(e,wu))};Ce.exports.luaG_addinfo=N_;Ce.exports.luaG_concaterror=hC;Ce.exports.luaG_errormsg=O_;Ce.exports.luaG_opinterror=gC;Ce.exports.luaG_ordererror=mC;Ce.exports.luaG_runerror=Mo;Ce.exports.luaG_tointerror=_C;Ce.exports.luaG_traceexec=bC;Ce.exports.luaG_typeerror=Fu;Ce.exports.lua_gethook=$O;Ce.exports.lua_gethookcount=eC;Ce.exports.lua_gethookmask=QO;Ce.exports.lua_getinfo=cC;Ce.exports.lua_getlocal=sC;Ce.exports.lua_getstack=tC;Ce.exports.lua_sethook=YO;Ce.exports.lua_setlocal=rC});var K_=P((Hq,U_)=>{"use strict";var{LUA_SIGNATURE:C_,LUA_VERSION_MAJOR:xC,LUA_VERSION_MINOR:AC,constant_types:{LUA_TBOOLEAN:SC,LUA_TLNGSTR:EC,LUA_TNIL:kC,LUA_TNUMFLT:vC,LUA_TNUMINT:TC,LUA_TSHRSTR:RC},luastring_of:w_}=ge(),yC=ct(),I_=w_(25,147,13,10,26,10),NC=22136,OC=370.5,CC=Number(xC)*16+Number(AC),IC=0,Mu=class{constructor(){this.L=null,this.writer=null,this.data=null,this.strip=NaN,this.status=NaN}},Vs=function(e,t,n){n.status===0&&t>0&&(n.status=n.writer(n.L,e,t,n.data))},Ie=function(e,t){Vs(w_(e),1,t)},gt=function(e,t){let n=new ArrayBuffer(4);new DataView(n).setInt32(0,e,!0);let r=new Uint8Array(n);Vs(r,4,t)},Bu=function(e,t){Vs(yC.toBytesLE(e),8,t)},V_=function(e,t){let n=new ArrayBuffer(8);new DataView(n).setFloat64(0,e,!0);let r=new Uint8Array(n);Vs(r,8,t)},Bo=function(e,t){if(e===null)Ie(0,t);else{let n=e.tsslen()+1,s=e.getstr();n<255?Ie(n,t):(Ie(255,t),Bu(n,t)),Vs(s,n-1,t)}},wC=function(e,t){let n=e.code.map(s=>s.code);gt(n.length,t);for(let s=0;s<n.length;s++)gt(n[s],t)},VC=function(e,t){let n=e.k.length;gt(n,t);for(let s=0;s<n;s++){let r=e.k[s];switch(Ie(r.ttype(),t),r.ttype()){case kC:break;case SC:Ie(r.value?1:0,t);break;case vC:V_(r.value,t);break;case TC:Bu(r.value,t);break;case RC:case EC:Bo(r.tsvalue(),t);break}}},PC=function(e,t){let n=e.p.length;gt(n,t);for(let s=0;s<n;s++)P_(e.p[s],e.source,t)},UC=function(e,t){let n=e.upvalues.length;gt(n,t);for(let s=0;s<n;s++)Ie(e.upvalues[s].instack?1:0,t),Ie(e.upvalues[s].idx,t)},KC=function(e,t){let n=t.strip?0:e.lineinfo.length;gt(n,t);for(let s=0;s<n;s++)gt(e.lineinfo[s],t);n=t.strip?0:e.locvars.length,gt(n,t);for(let s=0;s<n;s++)Bo(e.locvars[s].varname,t),gt(e.locvars[s].startpc,t),gt(e.locvars[s].endpc,t);n=t.strip?0:e.upvalues.length,gt(n,t);for(let s=0;s<n;s++)Bo(e.upvalues[s].name,t)},P_=function(e,t,n){n.strip||e.source===t?Bo(null,n):Bo(e.source,n),gt(e.linedefined,n),gt(e.lastlinedefined,n),Ie(e.numparams,n),Ie(e.is_vararg?1:0,n),Ie(e.maxstacksize,n),wC(e,n),VC(e,n),UC(e,n),PC(e,n),KC(e,n)},FC=function(e){Vs(C_,C_.length,e),Ie(CC,e),Ie(IC,e),Vs(I_,I_.length,e),Ie(4,e),Ie(4,e),Ie(4,e),Ie(8,e),Ie(8,e),Bu(NC,e),V_(OC,e)},MC=function(e,t,n,s,r){let o=new Mu;return o.L=e,o.writer=n,o.data=s,o.strip=r,o.status=0,FC(o),Ie(t.upvalues.length,o),P_(t,null,o),o.status};U_.exports.luaU_dump=MC});var _o=P((jq,d)=>{"use strict";var{LUA_MULTRET:qu,LUA_OPBNOT:BC,LUA_OPEQ:DC,LUA_OPLE:GC,LUA_OPLT:qC,LUA_OPUNM:LC,LUA_REGISTRYINDEX:Us,LUA_RIDX_GLOBALS:kl,LUA_VERSION_NUM:HC,constant_types:{LUA_NUMTAGS:jC,LUA_TBOOLEAN:F_,LUA_TCCL:Lu,LUA_TFUNCTION:XC,LUA_TLCF:M_,LUA_TLCL:Hu,LUA_TLIGHTUSERDATA:Rr,LUA_TLNGSTR:WC,LUA_TNIL:vl,LUA_TNONE:ju,LUA_TNUMFLT:zC,LUA_TNUMINT:Xu,LUA_TSHRSTR:JC,LUA_TTABLE:vr,LUA_TTHREAD:Wu,LUA_TUSERDATA:yr},thread_status:{LUA_OK:El},from_userstring:zn,to_luastring:Do}=ge(),{api_check:v}=Qe(),ZC=pn(),Jn=It(),{luaU_dump:YC}=K_(),B_=vs(),j=ut(),Ps=un(),{luaS_bless:D_,luaS_new:Tl,luaS_newliteral:$C}=Gt(),QC=ks(),{LUAI_MAXSTACK:eI}=Ye(),we=Es(),mt=qt(),{ZIO:tI}=xo(),Ae=j.TValue,nI=j.CClosure,Ve=function(e){e.top++,v(e,e.top<=e.ci.top,"stack overflow")},ve=function(e,t){v(e,t<e.top-e.ci.funcOff,"not enough elements in the stack")},Rl=function(e){if(!e)throw TypeError("invalid argument")},vn=function(e){let{isIntRep:t}=ct();Rl(t(e))},Tr=function(e){return e!==j.luaO_nilobject},sI=function(e){return e===null?HC:e.l_G.version},rI=function(e,t){let n=e.l_G.panic;return e.l_G.panic=t,n},oI=function(e,t){let n=e.l_G.atnativeerror;return e.l_G.atnativeerror=t,n},T=function(e,t){let n=e.ci;if(t>0){let s=n.funcOff+t;return v(e,t<=n.top-(n.funcOff+1),"unacceptable index"),s>=e.top?j.luaO_nilobject:e.stack[s]}else return t>Us?(v(e,t!==0&&-t<=e.top,"invalid index"),e.stack[e.top+t]):t===Us?e.l_G.l_registry:(t=Us-t,v(e,t<=B_.MAXUPVAL+1,"upvalue index too large"),n.func.ttislcf()?j.luaO_nilobject:t<=n.func.value.nupvalues?n.func.value.upvalue[t-1]:j.luaO_nilobject)},G_=function(e,t){let n=e.ci;if(t>0){let s=n.funcOff+t;return v(e,t<=n.top-(n.funcOff+1),"unacceptable index"),s>=e.top?null:s}else{if(t>Us)return v(e,t!==0&&-t<=e.top,"invalid index"),e.top+t;throw Error("attempt to use pseudo-index")}},aI=function(e,t){let n,s=e.ci;return v(e,t>=0,"negative 'n'"),e.stack_last-e.top>t?n=!0:e.top+Ps.EXTRA_STACK>eI-t?n=!1:(Jn.luaD_growstack(e,t),n=!0),n&&s.top<e.top+t&&(s.top=e.top+t),n},lI=function(e,t,n){if(e!==t){ve(e,n),v(e,e.l_G===t.l_G,"moving among independent states"),v(e,t.ci.top-t.top>=n,"stack overflow"),e.top-=n;for(let s=0;s<n;s++)t.stack[t.top]=new j.TValue,j.setobj2s(t,t.top,e.stack[e.top+s]),delete e.stack[e.top+s],t.top++}},iI=function(e,t){return t>0||t<=Us?t:e.top-e.ci.funcOff+t},cI=function(e){return e.top-(e.ci.funcOff+1)},uI=function(e,t){j.pushobj2s(e,T(e,t)),v(e,e.top<=e.ci.top,"stack overflow")},q_=function(e,t){let n=e.ci.funcOff,s;t>=0?(v(e,t<=e.stack_last-(n+1),"new top too large"),s=n+1+t):(v(e,-(t+1)<=e.top-(n+1),"invalid new top"),s=e.top+t+1),Jn.adjust_top(e,s)},zu=function(e,t){q_(e,-t-1)},Du=function(e,t,n){for(;t<n;t++,n--){let s=e.stack[t],r=new Ae(s.type,s.value);j.setobjs2s(e,t,n),j.setobj2s(e,n,r)}},Ju=function(e,t,n){let s=e.top-1,r=G_(e,t),o=e.stack[r];v(e,Tr(o)&&t>Us,"index not in the stack"),v(e,(n>=0?n:-n)<=s-r+1,"invalid 'n'");let a=n>=0?s-n:r-n-1;Du(e,r,a),Du(e,a+1,e.top-1),Du(e,r,e.top-1)},L_=function(e,t,n){let s=T(e,t);T(e,n).setfrom(s)},pI=function(e,t){Ju(e,t,-1),zu(e,1)},fI=function(e,t){Ju(e,t,1)},dI=function(e,t){L_(e,-1,t),zu(e,1)},hI=function(e){e.stack[e.top]=new Ae(vl,null),Ve(e)},gI=function(e,t){Rl(typeof t=="number"),e.stack[e.top]=new Ae(zC,t),Ve(e)},mI=function(e,t){vn(t),e.stack[e.top]=new Ae(Xu,t),Ve(e)},_I=function(e,t,n){vn(n);let s;return n===0?(t=Do("",!0),s=D_(e,t)):(t=zn(t),v(e,t.length>=n,"invalid length to lua_pushlstring"),s=Tl(e,t.subarray(0,n))),j.pushsvalue2s(e,s),v(e,e.top<=e.ci.top,"stack overflow"),s.value},bI=function(e,t){if(t==null)e.stack[e.top]=new Ae(vl,null),e.top++;else{let n=Tl(e,zn(t));j.pushsvalue2s(e,n),t=n.getstr()}return v(e,e.top<=e.ci.top,"stack overflow"),t},xI=function(e,t,n){return t=zn(t),j.luaO_pushvfstring(e,t,n)},AI=function(e,t,...n){return t=zn(t),j.luaO_pushvfstring(e,t,n)},SI=function(e,t){if(t==null)e.stack[e.top]=new Ae(vl,null),e.top++;else{Rl(typeof t=="string");let n=$C(e,t);j.pushsvalue2s(e,n),t=n.getstr()}return v(e,e.top<=e.ci.top,"stack overflow"),t},Zu=function(e,t,n){if(Rl(typeof t=="function"),vn(n),n===0)e.stack[e.top]=new Ae(M_,t);else{ve(e,n),v(e,n<=B_.MAXUPVAL,"upvalue index too large");let s=new nI(e,t,n);for(let r=0;r<n;r++)s.upvalue[r].setfrom(e.stack[e.top-n+r]);for(let r=1;r<n;r++)delete e.stack[--e.top];n>0&&--e.top,e.stack[e.top].setclCvalue(s)}Ve(e)},EI=Zu,Yu=function(e,t){Zu(e,t,0)},kI=Yu,vI=function(e,t){e.stack[e.top]=new Ae(F_,!!t),Ve(e)},TI=function(e,t){e.stack[e.top]=new Ae(Rr,t),Ve(e)},RI=function(e){return e.stack[e.top]=new Ae(Wu,e),Ve(e),e.l_G.mainthread===e},yI=function(e){W_(e,Us,kl)},H_=function(e,t,n){let s=Tl(e,zn(n));ve(e,1),j.pushsvalue2s(e,s),v(e,e.top<=e.ci.top,"stack overflow"),we.settable(e,t,e.stack[e.top-1],e.stack[e.top-2]),delete e.stack[--e.top],delete e.stack[--e.top]},j_=function(e,t){H_(e,mt.luaH_getint(e.l_G.l_registry.value,kl),t)},NI=function(e,t){ve(e,1);let n,s=T(e,t);switch(e.stack[e.top-1].ttisnil()?n=null:(v(e,e.stack[e.top-1].ttistable(),"table expected"),n=e.stack[e.top-1].value),s.ttnov()){case yr:case vr:{s.value.metatable=n;break}default:{e.l_G.mt[s.ttnov()]=n;break}}return delete e.stack[--e.top],!0},OI=function(e,t){ve(e,2);let n=T(e,t);we.settable(e,n,e.stack[e.top-2],e.stack[e.top-1]),delete e.stack[--e.top],delete e.stack[--e.top]},CI=function(e,t,n){H_(e,T(e,t),n)},II=function(e,t,n){vn(n),ve(e,1);let s=T(e,t);e.stack[e.top]=new Ae(Xu,n),Ve(e),we.settable(e,s,e.stack[e.top-1],e.stack[e.top-2]),delete e.stack[--e.top],delete e.stack[--e.top]},wI=function(e,t){ve(e,2);let n=T(e,t);v(e,n.ttistable(),"table expected");let s=e.stack[e.top-2],r=e.stack[e.top-1];mt.luaH_setfrom(e,n.value,s,r),mt.invalidateTMcache(n.value),delete e.stack[--e.top],delete e.stack[--e.top]},VI=function(e,t,n){vn(n),ve(e,1);let s=T(e,t);v(e,s.ttistable(),"table expected"),mt.luaH_setint(s.value,n,e.stack[e.top-1]),delete e.stack[--e.top]},PI=function(e,t,n){ve(e,1);let s=T(e,t);v(e,s.ttistable(),"table expected");let r=new Ae(Rr,n),o=e.stack[e.top-1];mt.luaH_setfrom(e,s.value,r,o),delete e.stack[--e.top]},X_=function(e,t,n){let s=Tl(e,zn(n));return j.pushsvalue2s(e,s),v(e,e.top<=e.ci.top,"stack overflow"),we.luaV_gettable(e,t,e.stack[e.top-1],e.top-1),e.stack[e.top-1].ttnov()},W_=function(e,t,n){let s=T(e,t);return vn(n),v(e,s.ttistable(),"table expected"),j.pushobj2s(e,mt.luaH_getint(s.value,n)),v(e,e.top<=e.ci.top,"stack overflow"),e.stack[e.top-1].ttnov()},UI=function(e,t,n){let s=T(e,t);v(e,s.ttistable(),"table expected");let r=new Ae(Rr,n);return j.pushobj2s(e,mt.luaH_get(e,s.value,r)),v(e,e.top<=e.ci.top,"stack overflow"),e.stack[e.top-1].ttnov()},KI=function(e,t){let n=T(e,t);return v(e,n.ttistable(n),"table expected"),j.setobj2s(e,e.top-1,mt.luaH_get(e,n.value,e.stack[e.top-1])),e.stack[e.top-1].ttnov()},z_=function(e,t,n){let s=new j.TValue(vr,mt.luaH_new(e));e.stack[e.top]=s,Ve(e)},FI=function(e,t){return new j.Udata(e,t)},MI=function(e,t){let n=FI(e,t);return e.stack[e.top]=new j.TValue(yr,n),Ve(e),n.data},J_=function(e,t,n){switch(vn(n),t.ttype()){case Lu:{let s=t.value;return 1<=n&&n<=s.nupvalues?{name:Do("",!0),val:s.upvalue[n-1]}:null}case Hu:{let s=t.value,r=s.p;if(!(1<=n&&n<=r.upvalues.length))return null;let o=r.upvalues[n-1].name;return{name:o?o.getstr():Do("(*no name)",!0),val:s.upvals[n-1]}}default:return null}},BI=function(e,t,n){let s=J_(e,T(e,t),n);if(s){let r=s.name,o=s.val;return j.pushobj2s(e,o),v(e,e.top<=e.ci.top,"stack overflow"),r}return null},DI=function(e,t,n){let s=T(e,t);ve(e,1);let r=J_(e,s,n);if(r){let o=r.name;return r.val.setfrom(e.stack[e.top-1]),delete e.stack[--e.top],o}return null},GI=function(e){z_(e,0,0)},qI=function(e,t,n){Yu(e,n),j_(e,t)},LI=function(e,t){let n=T(e,t),s,r=!1;switch(n.ttnov()){case vr:case yr:s=n.value.metatable;break;default:s=e.l_G.mt[n.ttnov()];break}return s!=null&&(e.stack[e.top]=new Ae(vr,s),Ve(e),r=!0),r},HI=function(e,t){let n=T(e,t);v(e,n.ttisfulluserdata(),"full userdata expected");let s=n.value.uservalue;return e.stack[e.top]=new Ae(s.type,s.value),Ve(e),e.stack[e.top-1].ttnov()},jI=function(e,t){let n=T(e,t);return we.luaV_gettable(e,n,e.stack[e.top-1],e.top-1),e.stack[e.top-1].ttnov()},XI=function(e,t,n){return X_(e,T(e,t),n)},WI=function(e,t,n){let s=T(e,t);return vn(n),e.stack[e.top]=new Ae(Xu,n),Ve(e),we.luaV_gettable(e,s,e.stack[e.top-1],e.top-1),e.stack[e.top-1].ttnov()},zI=function(e,t){return X_(e,mt.luaH_getint(e.l_G.l_registry.value,kl),t)},JI=function(e,t){return!T(e,t).l_isfalse()},$u=function(e,t){let n=T(e,t);if(!n.ttisstring()){if(!we.cvt2str(n))return null;j.luaO_tostring(e,n)}return n.svalue()},ZI=$u,YI=function(e,t){let n=T(e,t);if(!n.ttisstring()){if(!we.cvt2str(n))return null;j.luaO_tostring(e,n)}return n.jsstring()},$I=function(e,t){let n=$u(e,t);return new DataView(n.buffer,n.byteOffset,n.byteLength)},QI=function(e,t){let n=T(e,t);switch(n.ttype()){case JC:case WC:return n.vslen();case yr:return n.value.len;case vr:return mt.luaH_getn(n.value);default:return 0}},ew=function(e,t){let n=T(e,t);return n.ttislcf()||n.ttisCclosure()?n.value:null},tw=function(e,t){let n=Z_(e,t);return n===!1?0:n},Z_=function(e,t){return we.tointeger(T(e,t))},nw=function(e,t){let n=Y_(e,t);return n===!1?0:n},Y_=function(e,t){return we.tonumber(T(e,t))},sw=function(e,t){let n=T(e,t);switch(n.ttnov()){case yr:return n.value.data;case Rr:return n.value;default:return null}},rw=function(e,t){let n=T(e,t);return n.ttisthread()?n.value:null},ow=function(e,t){let n=T(e,t);switch(n.ttype()){case vr:case Hu:case Lu:case M_:case Wu:case yr:case Rr:return n.value;default:return null}},$_=new WeakMap,aw=function(e,t){let n=$_.get(e);return n?t===null||t.l_G===n:!1},lw=function(e,t,n){let s=function(r){v(r,r instanceof Ps.lua_State&&e===r.l_G,"must be from same global state"),r.stack[r.top]=new Ae(t,n),Ve(r)};return $_.set(s,e),s},iw=function(e,t){let n=T(e,t);return lw(e.l_G,n.type,n.value)},cw=function(e,t,n,s){let r=T(e,t),o=T(e,n),a=0;if(Tr(r)&&Tr(o))switch(s){case DC:a=we.luaV_equalobj(e,r,o);break;case qC:a=we.luaV_lessthan(e,r,o);break;case GC:a=we.luaV_lessequal(e,r,o);break;default:v(e,!1,"invalid option")}return a},uw=function(e,t){let n=new Ae,s=j.luaO_str2num(t,n);return s!==0&&(e.stack[e.top]=n,Ve(e)),s},pw=function(e,t){Jn.luaD_callnoyield(e,t.funcOff,t.nresults)},Zn=function(e,t){let n=T(e,t);return Tr(n)?n.ttnov():ju},fw=function(e,t){return v(e,ju<=t&&t<jC,"invalid tag"),QC.ttypename(t)},dw=function(e,t){let n=T(e,t);return n.ttislcf(n)||n.ttisCclosure()},hw=function(e,t){return Zn(e,t)===vl},gw=function(e,t){return Zn(e,t)===F_},mw=function(e,t){return Zn(e,t)===ju},_w=function(e,t){return Zn(e,t)<=0},bw=function(e,t){return T(e,t).ttistable()},xw=function(e,t){return T(e,t).ttisinteger()},Aw=function(e,t){return we.tonumber(T(e,t))!==!1},Sw=function(e,t){let n=T(e,t);return n.ttisstring()||we.cvt2str(n)},Ew=function(e,t){let n=T(e,t);return n.ttisfulluserdata(n)||n.ttislightuserdata()},kw=function(e,t){return Zn(e,t)===Wu},vw=function(e,t){return Zn(e,t)===XC},Tw=function(e,t){return Zn(e,t)===Rr},Rw=function(e,t,n){let s=T(e,t),r=T(e,n);return Tr(s)&&Tr(r)?we.luaV_equalobj(null,s,r):0},yw=function(e,t){t!==LC&&t!==BC?ve(e,2):(ve(e,1),j.pushobj2s(e,e.stack[e.top-1]),v(e,e.top<=e.ci.top,"stack overflow")),j.luaO_arith(e,t,e.stack[e.top-2],e.stack[e.top-1],e.stack[e.top-2]),delete e.stack[--e.top]},Nw=Do("?"),Ow=function(e,t,n,s,r){s?s=zn(s):s=Nw,r!==null&&(r=zn(r));let o=new tI(e,t,n),a=Jn.luaD_protectedparser(e,o,s,r);if(a===El){let i=e.stack[e.top-1].value;if(i.nupvalues>=1){let l=mt.luaH_getint(e.l_G.l_registry.value,kl);i.upvals[0].setfrom(l)}}return a},Cw=function(e,t,n,s){ve(e,1);let r=e.stack[e.top-1];return r.ttisLclosure()?YC(e,r.value.p,t,n,s):1},Iw=function(e){return e.status},ww=function(e,t){ve(e,1);let n=T(e,t);v(e,n.ttisfulluserdata(),"full userdata expected"),n.value.uservalue.setfrom(e.stack[e.top-1]),delete e.stack[--e.top]},Q_=function(e,t,n){v(e,n===qu||e.ci.top-e.top>=n-t,"results from function overflow current stack size")},eb=function(e,t,n,s,r){v(e,r===null||!(e.ci.callstatus&Ps.CIST_LUA),"cannot use continuations inside hooks"),ve(e,t+1),v(e,e.status===El,"cannot do calls on non-normal thread"),Q_(e,t,n);let o=e.top-(t+1);r!==null&&e.nny===0?(e.ci.c_k=r,e.ci.c_ctx=s,Jn.luaD_call(e,o,n)):Jn.luaD_callnoyield(e,o,n),n===qu&&e.ci.top<e.top&&(e.ci.top=e.top)},Vw=function(e,t,n){eb(e,t,n,0,null)},tb=function(e,t,n,s,r,o){v(e,o===null||!(e.ci.callstatus&Ps.CIST_LUA),"cannot use continuations inside hooks"),ve(e,t+1),v(e,e.status===El,"cannot do calls on non-normal thread"),Q_(e,t,n);let a,i;s===0?i=0:i=G_(e,s);let l=e.top-(t+1);if(o===null||e.nny>0){let u={funcOff:l,nresults:n};a=Jn.luaD_pcall(e,pw,u,l,i)}else{let u=e.ci;u.c_k=o,u.c_ctx=r,u.extra=l,u.c_old_errfunc=e.errfunc,e.errfunc=i,u.callstatus&=~Ps.CIST_OAH|e.allowhook,u.callstatus|=Ps.CIST_YPCALL,Jn.luaD_call(e,l,n),u.callstatus&=~Ps.CIST_YPCALL,e.errfunc=u.c_old_errfunc,a=El}return n===qu&&e.ci.top<e.top&&(e.ci.top=e.top),a},Pw=function(e,t,n,s){return tb(e,t,n,s,0,null)},Uw=function(e){ve(e,1),ZC.luaG_errormsg(e)},Kw=function(e,t){let n=T(e,t);return v(e,n.ttistable(),"table expected"),e.stack[e.top]=new Ae,mt.luaH_next(e,n.value,e.top-1)?(Ve(e),1):(delete e.stack[e.top],delete e.stack[--e.top],0)},Fw=function(e,t){ve(e,t),t>=2?we.luaV_concat(e,t):t===0&&(j.pushsvalue2s(e,D_(e,Do("",!0))),v(e,e.top<=e.ci.top,"stack overflow"))},Mw=function(e,t){let n=T(e,t),s=new Ae;we.luaV_objlen(e,s,n),e.stack[e.top]=s,Ve(e)},Gu=function(e,t,n){let s=T(e,t);v(e,s.ttisLclosure(),"Lua function expected");let r=s.value;return vn(n),v(e,1<=n&&n<=r.p.upvalues.length,"invalid upvalue index"),{f:r,i:n-1}},Bw=function(e,t,n){let s=T(e,t);switch(s.ttype()){case Hu:{let r=Gu(e,t,n);return r.f.upvals[r.i]}case Lu:{let r=s.value;return v(e,Number.isInteger(n)&&n>0&&n<=r.nupvalues,"invalid upvalue index"),r.upvalue[n-1]}default:return v(e,!1,"closure expected"),null}},Dw=function(e,t,n,s,r){let o=Gu(e,t,n),a=Gu(e,s,r),i=a.f.upvals[a.i];o.f.upvals[o.i]=i},Gw=function(){},qw=function(){return console.warn("lua_getallocf is not available"),0},Lw=function(){return console.warn("lua_setallocf is not available"),0},Hw=function(){return console.warn("lua_getextraspace is not available"),0};d.exports.api_incr_top=Ve;d.exports.api_checknelems=ve;d.exports.lua_absindex=iI;d.exports.lua_arith=yw;d.exports.lua_atpanic=rI;d.exports.lua_atnativeerror=oI;d.exports.lua_call=Vw;d.exports.lua_callk=eb;d.exports.lua_checkstack=aI;d.exports.lua_compare=cw;d.exports.lua_concat=Fw;d.exports.lua_copy=L_;d.exports.lua_createtable=z_;d.exports.lua_dump=Cw;d.exports.lua_error=Uw;d.exports.lua_gc=Gw;d.exports.lua_getallocf=qw;d.exports.lua_getextraspace=Hw;d.exports.lua_getfield=XI;d.exports.lua_getglobal=zI;d.exports.lua_geti=WI;d.exports.lua_getmetatable=LI;d.exports.lua_gettable=jI;d.exports.lua_gettop=cI;d.exports.lua_getupvalue=BI;d.exports.lua_getuservalue=HI;d.exports.lua_insert=fI;d.exports.lua_isboolean=gw;d.exports.lua_iscfunction=dw;d.exports.lua_isfunction=vw;d.exports.lua_isinteger=xw;d.exports.lua_islightuserdata=Tw;d.exports.lua_isnil=hw;d.exports.lua_isnone=mw;d.exports.lua_isnoneornil=_w;d.exports.lua_isnumber=Aw;d.exports.lua_isproxy=aw;d.exports.lua_isstring=Sw;d.exports.lua_istable=bw;d.exports.lua_isthread=kw;d.exports.lua_isuserdata=Ew;d.exports.lua_len=Mw;d.exports.lua_load=Ow;d.exports.lua_newtable=GI;d.exports.lua_newuserdata=MI;d.exports.lua_next=Kw;d.exports.lua_pcall=Pw;d.exports.lua_pcallk=tb;d.exports.lua_pop=zu;d.exports.lua_pushboolean=vI;d.exports.lua_pushcclosure=Zu;d.exports.lua_pushcfunction=Yu;d.exports.lua_pushfstring=AI;d.exports.lua_pushglobaltable=yI;d.exports.lua_pushinteger=mI;d.exports.lua_pushjsclosure=EI;d.exports.lua_pushjsfunction=kI;d.exports.lua_pushlightuserdata=TI;d.exports.lua_pushliteral=SI;d.exports.lua_pushlstring=_I;d.exports.lua_pushnil=hI;d.exports.lua_pushnumber=gI;d.exports.lua_pushstring=bI;d.exports.lua_pushthread=RI;d.exports.lua_pushvalue=uI;d.exports.lua_pushvfstring=xI;d.exports.lua_rawequal=Rw;d.exports.lua_rawget=KI;d.exports.lua_rawgeti=W_;d.exports.lua_rawgetp=UI;d.exports.lua_rawlen=QI;d.exports.lua_rawset=wI;d.exports.lua_rawseti=VI;d.exports.lua_rawsetp=PI;d.exports.lua_register=qI;d.exports.lua_remove=pI;d.exports.lua_replace=dI;d.exports.lua_rotate=Ju;d.exports.lua_setallocf=Lw;d.exports.lua_setfield=CI;d.exports.lua_setglobal=j_;d.exports.lua_seti=II;d.exports.lua_setmetatable=NI;d.exports.lua_settable=OI;d.exports.lua_settop=q_;d.exports.lua_setupvalue=DI;d.exports.lua_setuservalue=ww;d.exports.lua_status=Iw;d.exports.lua_stringtonumber=uw;d.exports.lua_toboolean=JI;d.exports.lua_tocfunction=ew;d.exports.lua_todataview=$I;d.exports.lua_tointeger=tw;d.exports.lua_tointegerx=Z_;d.exports.lua_tojsstring=YI;d.exports.lua_tolstring=$u;d.exports.lua_tonumber=nw;d.exports.lua_tonumberx=Y_;d.exports.lua_topointer=ow;d.exports.lua_toproxy=iw;d.exports.lua_tostring=ZI;d.exports.lua_tothread=rw;d.exports.lua_touserdata=sw;d.exports.lua_type=Zn;d.exports.lua_typename=fw;d.exports.lua_upvalueid=Bw;d.exports.lua_upvaluejoin=Dw;d.exports.lua_version=sI;d.exports.lua_xmove=lI});var qe=P((Xq,p)=>{"use strict";var b=ge(),h=_o(),Yn=pn(),yl=It(),Qu=un();p.exports.LUA_AUTHORS=b.LUA_AUTHORS;p.exports.LUA_COPYRIGHT=b.LUA_COPYRIGHT;p.exports.LUA_ERRERR=b.thread_status.LUA_ERRERR;p.exports.LUA_ERRGCMM=b.thread_status.LUA_ERRGCMM;p.exports.LUA_ERRMEM=b.thread_status.LUA_ERRMEM;p.exports.LUA_ERRRUN=b.thread_status.LUA_ERRRUN;p.exports.LUA_ERRSYNTAX=b.thread_status.LUA_ERRSYNTAX;p.exports.LUA_HOOKCALL=b.LUA_HOOKCALL;p.exports.LUA_HOOKCOUNT=b.LUA_HOOKCOUNT;p.exports.LUA_HOOKLINE=b.LUA_HOOKLINE;p.exports.LUA_HOOKRET=b.LUA_HOOKRET;p.exports.LUA_HOOKTAILCALL=b.LUA_HOOKTAILCALL;p.exports.LUA_MASKCALL=b.LUA_MASKCALL;p.exports.LUA_MASKCOUNT=b.LUA_MASKCOUNT;p.exports.LUA_MASKLINE=b.LUA_MASKLINE;p.exports.LUA_MASKRET=b.LUA_MASKRET;p.exports.LUA_MINSTACK=b.LUA_MINSTACK;p.exports.LUA_MULTRET=b.LUA_MULTRET;p.exports.LUA_NUMTAGS=b.constant_types.LUA_NUMTAGS;p.exports.LUA_OK=b.thread_status.LUA_OK;p.exports.LUA_OPADD=b.LUA_OPADD;p.exports.LUA_OPBAND=b.LUA_OPBAND;p.exports.LUA_OPBNOT=b.LUA_OPBNOT;p.exports.LUA_OPBOR=b.LUA_OPBOR;p.exports.LUA_OPBXOR=b.LUA_OPBXOR;p.exports.LUA_OPDIV=b.LUA_OPDIV;p.exports.LUA_OPEQ=b.LUA_OPEQ;p.exports.LUA_OPIDIV=b.LUA_OPIDIV;p.exports.LUA_OPLE=b.LUA_OPLE;p.exports.LUA_OPLT=b.LUA_OPLT;p.exports.LUA_OPMOD=b.LUA_OPMOD;p.exports.LUA_OPMUL=b.LUA_OPMUL;p.exports.LUA_OPPOW=b.LUA_OPPOW;p.exports.LUA_OPSHL=b.LUA_OPSHL;p.exports.LUA_OPSHR=b.LUA_OPSHR;p.exports.LUA_OPSUB=b.LUA_OPSUB;p.exports.LUA_OPUNM=b.LUA_OPUNM;p.exports.LUA_REGISTRYINDEX=b.LUA_REGISTRYINDEX;p.exports.LUA_RELEASE=b.LUA_RELEASE;p.exports.LUA_RIDX_GLOBALS=b.LUA_RIDX_GLOBALS;p.exports.LUA_RIDX_LAST=b.LUA_RIDX_LAST;p.exports.LUA_RIDX_MAINTHREAD=b.LUA_RIDX_MAINTHREAD;p.exports.LUA_SIGNATURE=b.LUA_SIGNATURE;p.exports.LUA_TNONE=b.constant_types.LUA_TNONE;p.exports.LUA_TNIL=b.constant_types.LUA_TNIL;p.exports.LUA_TBOOLEAN=b.constant_types.LUA_TBOOLEAN;p.exports.LUA_TLIGHTUSERDATA=b.constant_types.LUA_TLIGHTUSERDATA;p.exports.LUA_TNUMBER=b.constant_types.LUA_TNUMBER;p.exports.LUA_TSTRING=b.constant_types.LUA_TSTRING;p.exports.LUA_TTABLE=b.constant_types.LUA_TTABLE;p.exports.LUA_TFUNCTION=b.constant_types.LUA_TFUNCTION;p.exports.LUA_TUSERDATA=b.constant_types.LUA_TUSERDATA;p.exports.LUA_TTHREAD=b.constant_types.LUA_TTHREAD;p.exports.LUA_VERSION=b.LUA_VERSION;p.exports.LUA_VERSION_MAJOR=b.LUA_VERSION_MAJOR;p.exports.LUA_VERSION_MINOR=b.LUA_VERSION_MINOR;p.exports.LUA_VERSION_NUM=b.LUA_VERSION_NUM;p.exports.LUA_VERSION_RELEASE=b.LUA_VERSION_RELEASE;p.exports.LUA_YIELD=b.thread_status.LUA_YIELD;p.exports.lua_Debug=b.lua_Debug;p.exports.lua_upvalueindex=b.lua_upvalueindex;p.exports.lua_absindex=h.lua_absindex;p.exports.lua_arith=h.lua_arith;p.exports.lua_atpanic=h.lua_atpanic;p.exports.lua_atnativeerror=h.lua_atnativeerror;p.exports.lua_call=h.lua_call;p.exports.lua_callk=h.lua_callk;p.exports.lua_checkstack=h.lua_checkstack;p.exports.lua_close=Qu.lua_close;p.exports.lua_compare=h.lua_compare;p.exports.lua_concat=h.lua_concat;p.exports.lua_copy=h.lua_copy;p.exports.lua_createtable=h.lua_createtable;p.exports.lua_dump=h.lua_dump;p.exports.lua_error=h.lua_error;p.exports.lua_gc=h.lua_gc;p.exports.lua_getallocf=h.lua_getallocf;p.exports.lua_getextraspace=h.lua_getextraspace;p.exports.lua_getfield=h.lua_getfield;p.exports.lua_getglobal=h.lua_getglobal;p.exports.lua_gethook=Yn.lua_gethook;p.exports.lua_gethookcount=Yn.lua_gethookcount;p.exports.lua_gethookmask=Yn.lua_gethookmask;p.exports.lua_geti=h.lua_geti;p.exports.lua_getinfo=Yn.lua_getinfo;p.exports.lua_getlocal=Yn.lua_getlocal;p.exports.lua_getmetatable=h.lua_getmetatable;p.exports.lua_getstack=Yn.lua_getstack;p.exports.lua_gettable=h.lua_gettable;p.exports.lua_gettop=h.lua_gettop;p.exports.lua_getupvalue=h.lua_getupvalue;p.exports.lua_getuservalue=h.lua_getuservalue;p.exports.lua_insert=h.lua_insert;p.exports.lua_isboolean=h.lua_isboolean;p.exports.lua_iscfunction=h.lua_iscfunction;p.exports.lua_isfunction=h.lua_isfunction;p.exports.lua_isinteger=h.lua_isinteger;p.exports.lua_islightuserdata=h.lua_islightuserdata;p.exports.lua_isnil=h.lua_isnil;p.exports.lua_isnone=h.lua_isnone;p.exports.lua_isnoneornil=h.lua_isnoneornil;p.exports.lua_isnumber=h.lua_isnumber;p.exports.lua_isproxy=h.lua_isproxy;p.exports.lua_isstring=h.lua_isstring;p.exports.lua_istable=h.lua_istable;p.exports.lua_isthread=h.lua_isthread;p.exports.lua_isuserdata=h.lua_isuserdata;p.exports.lua_isyieldable=yl.lua_isyieldable;p.exports.lua_len=h.lua_len;p.exports.lua_load=h.lua_load;p.exports.lua_newstate=Qu.lua_newstate;p.exports.lua_newtable=h.lua_newtable;p.exports.lua_newthread=Qu.lua_newthread;p.exports.lua_newuserdata=h.lua_newuserdata;p.exports.lua_next=h.lua_next;p.exports.lua_pcall=h.lua_pcall;p.exports.lua_pcallk=h.lua_pcallk;p.exports.lua_pop=h.lua_pop;p.exports.lua_pushboolean=h.lua_pushboolean;p.exports.lua_pushcclosure=h.lua_pushcclosure;p.exports.lua_pushcfunction=h.lua_pushcfunction;p.exports.lua_pushfstring=h.lua_pushfstring;p.exports.lua_pushglobaltable=h.lua_pushglobaltable;p.exports.lua_pushinteger=h.lua_pushinteger;p.exports.lua_pushjsclosure=h.lua_pushjsclosure;p.exports.lua_pushjsfunction=h.lua_pushjsfunction;p.exports.lua_pushlightuserdata=h.lua_pushlightuserdata;p.exports.lua_pushliteral=h.lua_pushliteral;p.exports.lua_pushlstring=h.lua_pushlstring;p.exports.lua_pushnil=h.lua_pushnil;p.exports.lua_pushnumber=h.lua_pushnumber;p.exports.lua_pushstring=h.lua_pushstring;p.exports.lua_pushthread=h.lua_pushthread;p.exports.lua_pushvalue=h.lua_pushvalue;p.exports.lua_pushvfstring=h.lua_pushvfstring;p.exports.lua_rawequal=h.lua_rawequal;p.exports.lua_rawget=h.lua_rawget;p.exports.lua_rawgeti=h.lua_rawgeti;p.exports.lua_rawgetp=h.lua_rawgetp;p.exports.lua_rawlen=h.lua_rawlen;p.exports.lua_rawset=h.lua_rawset;p.exports.lua_rawseti=h.lua_rawseti;p.exports.lua_rawsetp=h.lua_rawsetp;p.exports.lua_register=h.lua_register;p.exports.lua_remove=h.lua_remove;p.exports.lua_replace=h.lua_replace;p.exports.lua_resume=yl.lua_resume;p.exports.lua_rotate=h.lua_rotate;p.exports.lua_setallocf=h.lua_setallocf;p.exports.lua_setfield=h.lua_setfield;p.exports.lua_setglobal=h.lua_setglobal;p.exports.lua_sethook=Yn.lua_sethook;p.exports.lua_seti=h.lua_seti;p.exports.lua_setlocal=Yn.lua_setlocal;p.exports.lua_setmetatable=h.lua_setmetatable;p.exports.lua_settable=h.lua_settable;p.exports.lua_settop=h.lua_settop;p.exports.lua_setupvalue=h.lua_setupvalue;p.exports.lua_setuservalue=h.lua_setuservalue;p.exports.lua_status=h.lua_status;p.exports.lua_stringtonumber=h.lua_stringtonumber;p.exports.lua_toboolean=h.lua_toboolean;p.exports.lua_todataview=h.lua_todataview;p.exports.lua_tointeger=h.lua_tointeger;p.exports.lua_tointegerx=h.lua_tointegerx;p.exports.lua_tojsstring=h.lua_tojsstring;p.exports.lua_tolstring=h.lua_tolstring;p.exports.lua_tonumber=h.lua_tonumber;p.exports.lua_tonumberx=h.lua_tonumberx;p.exports.lua_topointer=h.lua_topointer;p.exports.lua_toproxy=h.lua_toproxy;p.exports.lua_tostring=h.lua_tostring;p.exports.lua_tothread=h.lua_tothread;p.exports.lua_touserdata=h.lua_touserdata;p.exports.lua_type=h.lua_type;p.exports.lua_typename=h.lua_typename;p.exports.lua_upvalueid=h.lua_upvalueid;p.exports.lua_upvaluejoin=h.lua_upvaluejoin;p.exports.lua_version=h.lua_version;p.exports.lua_xmove=h.lua_xmove;p.exports.lua_yield=yl.lua_yield;p.exports.lua_yieldk=yl.lua_yieldk;p.exports.lua_tocfunction=h.lua_tocfunction});var Go={};eE(Go,{default:()=>Xw,existsSync:()=>sb,readFileSync:()=>nb});function jw(e){return()=>{throw new Error(`node-shims/fs: "${e}" is not available in the browser build`)}}var nb,sb,Xw,qo=QS(()=>{nb=jw("readFileSync"),sb=()=>!1,Xw={readFileSync:nb,existsSync:sb}});var rt=P((Wq,_)=>{"use strict";var{LUAL_BUFFERSIZE:Ww}=Ye(),{LUA_ERRERR:zw,LUA_MULTRET:ub,LUA_REGISTRYINDEX:Pl,LUA_SIGNATURE:rb,LUA_TBOOLEAN:Jw,LUA_TLIGHTUSERDATA:Zw,LUA_TNIL:Or,LUA_TNONE:Yw,LUA_TNUMBER:rp,LUA_TSTRING:Lo,LUA_TTABLE:$w,LUA_VERSION_NUM:Qw,lua_Debug:Ul,lua_absindex:Kl,lua_atpanic:eV,lua_call:pb,lua_checkstack:tV,lua_concat:Ol,lua_copy:nV,lua_createtable:op,lua_error:sV,lua_getfield:Fl,lua_getinfo:Ml,lua_getmetatable:fb,lua_getstack:Ho,lua_gettop:Nr,lua_insert:rV,lua_isinteger:oV,lua_isnil:aV,lua_isnumber:lV,lua_isstring:iV,lua_istable:cV,lua_len:uV,lua_load:ep,lua_newstate:pV,lua_newtable:fV,lua_next:dV,lua_pcall:db,lua_pop:bt,lua_pushboolean:hb,lua_pushcclosure:hV,lua_pushcfunction:gV,lua_pushfstring:ze,lua_pushinteger:Cl,lua_pushliteral:_t,lua_pushlstring:mV,lua_pushnil:ap,lua_pushstring:Ir,lua_pushvalue:Ks,lua_pushvfstring:_V,lua_rawequal:gb,lua_rawget:bV,lua_rawgeti:tp,lua_rawlen:xV,lua_rawseti:Il,lua_remove:Tn,lua_setfield:jo,lua_setglobal:AV,lua_setmetatable:SV,lua_settop:np,lua_toboolean:mb,lua_tointeger:_b,lua_tointegerx:bb,lua_tojsstring:EV,lua_tolstring:xb,lua_tonumber:kV,lua_tonumberx:vV,lua_topointer:TV,lua_tostring:Yt,lua_touserdata:RV,lua_type:$n,lua_typename:Ab,lua_version:ob}=qe(),{from_userstring:lp,luastring_eq:Sb,to_luastring:R,to_uristring:yV}=$e(),Eb=zw+1,ip=R("_LOADED"),NV=R("_PRELOAD"),OV=R("FILE*"),kb=72,cp=R("__name"),CV=R("__tostring"),up=new Uint8Array(0),wl=class{constructor(){this.L=null,this.b=up,this.n=0}},ab=10,lb=11,vb=function(e,t,n){if(n===0||!cV(e,-1))return 0;for(ap(e);dV(e,-2);){if($n(e,-2)===Lo){if(gb(e,t,-1))return bt(e,1),1;if(vb(e,t,n-1))return Tn(e,-2),_t(e,"."),rV(e,-2),Ol(e,3),1}bt(e,1)}return 0},Tb=function(e,t){let n=Nr(e);if(Ml(e,R("f"),t),Fl(e,Pl,ip),vb(e,n+1,2)){let s=Yt(e,-1);return s[0]===95&&s[1]===71&&s[2]===46&&(Ir(e,s.subarray(3)),Tn(e,-2)),nV(e,-1,n+1),bt(e,2),1}else return np(e,n),0},IV=function(e,t){Tb(e,t)?(ze(e,R("function '%s'"),Yt(e,-1)),Tn(e,-2)):t.namewhat.length!==0?ze(e,R("%s '%s'"),t.namewhat,t.name):t.what&&t.what[0]===109?_t(e,"main chunk"):t.what&&t.what[0]===76?ze(e,R("function <%s:%d>"),t.short_src,t.linedefined):_t(e,"?")},wV=function(e){let t=new Ul,n=1,s=1;for(;Ho(e,s,t);)n=s,s*=2;for(;n<s;){let r=Math.floor((n+s)/2);Ho(e,r,t)?n=r+1:s=r}return s-1},VV=function(e,t,n,s){let r=new Ul,o=Nr(e),a=wV(t),i=a-s>ab+lb?ab:-1;for(n&&ze(e,R(`%s
`),n),_p(e,10,null),_t(e,"stack traceback:");Ho(t,s++,r);)i--===0?(_t(e,`
	...`),s=a-lb+1):(Ml(t,R("Slnt",!0),r),ze(e,R(`
	%s:`),r.short_src),r.currentline>0&&_t(e,`${r.currentline}:`),_t(e," in "),IV(e,r),r.istailcall&&_t(e,`
	(...tail calls..)`),Ol(e,Nr(e)-o));Ol(e,Nr(e)-o)},PV=function(e){let t="PANIC: unprotected error in call to Lua API ("+EV(e,-1)+")";throw new Error(t)},wr=function(e,t,n){let s=new Ul;return Ho(e,0,s)?(Ml(e,R("n"),s),Sb(s.namewhat,R("method"))&&(t--,t===0)?Vt(e,R("calling '%s' on bad self (%s)"),s.name,n):(s.name===null&&(s.name=Tb(e,s)?Yt(e,-1):R("?")),Vt(e,R("bad argument #%d to '%s' (%s)"),t,s.name,n))):Vt(e,R("bad argument #%d (%s)"),t,n)},Rb=function(e,t,n){let s;ql(e,t,cp)===Lo?s=Yt(e,-1):$n(e,t)===Zw?s=R("light userdata",!0):s=pp(e,t);let r=ze(e,R("%s expected, got %s"),n,s);return wr(e,t,r)},yb=function(e,t){let n=new Ul;if(Ho(e,t,n)&&(Ml(e,R("Sl",!0),n),n.currentline>0)){ze(e,R("%s:%d: "),n.short_src,n.currentline);return}Ir(e,R(""))},Vt=function(e,t,...n){return yb(e,1),_V(e,t,n),Ol(e,2),sV(e)},Nb=function(e,t,n,s){if(t)return hb(e,1),1;{ap(e);let r,o;return s?(r=s.message,o=-s.errno):(r="Success",o=0),n?ze(e,R("%s: %s"),n,R(r)):Ir(e,R(r)),Cl(e,o),3}},UV=function(e,t){let n,s;if(t===null)return hb(e,1),_t(e,"exit"),Cl(e,0),3;if(t.status)n="exit",s=t.status;else if(t.signal)n="signal",s=t.signal;else return Nb(e,0,null,t);return ap(e),_t(e,n),Cl(e,s),3},Bl=function(e,t){return Fl(e,Pl,t)},KV=function(e,t){return Bl(e,t)!==Or?0:(bt(e,1),op(e,0,2),Ir(e,t),jo(e,-2,cp),Ks(e,-1),jo(e,Pl,t),1)},FV=function(e,t){Bl(e,t),SV(e,-2)},Ob=function(e,t,n){let s=RV(e,t);return s!==null&&fb(e,t)?(Bl(e,n),gb(e,-1,-2)||(s=null),bt(e,2),s):null},MV=function(e,t,n){let s=Ob(e,t,n);return s===null&&Rb(e,t,n),s},BV=function(e,t,n,s){let r=n!==null?wb(e,t,n):Cb(e,t);for(let o=0;s[o];o++)if(Sb(s[o],r))return o;return wr(e,t,ze(e,R("invalid option '%s'"),r))},Dl=function(e,t,n){Rb(e,t,Ab(e,n))},DV=function(){let e=pV();return e&&eV(e,PV),e},pp=function(e,t){return Ab(e,$n(e,t))},GV=function(e,t,n,s){t||wr(e,n,s)},qV=function(e,t){$n(e,t)===Yw&&wr(e,t,R("value expected",!0))},LV=function(e,t,n){$n(e,t)!==n&&Dl(e,t,n)},fp=function(e,t){let n=xb(e,t);return n==null&&Dl(e,t,Lo),n},Cb=fp,Ib=function(e,t,n){return $n(e,t)<=0?n===null?null:lp(n):fp(e,t)},wb=Ib,HV=function(e,t){lV(e,t)?wr(e,t,R("number has no integer representation",!0)):Dl(e,t,rp)},Vb=function(e,t){let n=vV(e,t);return n===!1&&Dl(e,t,rp),n},jV=function(e,t,n){return mp(e,Vb,t,n)},Pb=function(e,t){let n=bb(e,t);return n===!1&&HV(e,t),n},XV=function(e,t,n){return mp(e,Pb,t,n)},Xo=function(e,t){let n=e.n+t;if(e.b.length<n){let s=Math.max(e.b.length*2,n),r=new Uint8Array(s);r.set(e.b),e.b=r}return e.b.subarray(e.n,n)},dp=function(e,t){t.L=e,t.b=up},WV=function(e,t,n){return dp(e,t),Xo(t,n)},zV=function(e){return Xo(e,Ww)},Gl=function(e,t,n){n>0&&(t=lp(t),Xo(e,n).set(t.subarray(0,n)),gp(e,n))},sp=function(e,t){t=lp(t),Gl(e,t,t.length)},hp=function(e){mV(e.L,e.b,e.n),e.n=0,e.b=up},JV=function(e,t){Xo(e,1),e.b[e.n++]=t},gp=function(e,t){e.n+=t},ZV=function(e,t){gp(e,t),hp(e)},YV=function(e){let t=e.L,n=Yt(t,-1);Gl(e,n,n.length),bt(t,1)},mp=function(e,t,n,s){return $n(e,n)<=0?s:t(e,n)},$V=function(e,t){let n=t.string;return t.string=null,n},Ub=function(e,t,n,s,r){return ep(e,$V,{string:t},s,r)},Kb=function(e,t,n,s){return Ub(e,t,n,s,null)},Fb=function(e,t){return Kb(e,t,t.length,t)},QV=function(e,t){return Fb(e,t)||db(e,0,ub,0)},ql=function(e,t,n){if(fb(e,t)){Ir(e,n);let s=bV(e,-2);return s===Or?bt(e,2):Tn(e,-2),s}else return Or},Mb=function(e,t,n){return t=Kl(e,t),ql(e,t,n)===Or?!1:(Ks(e,t),pb(e,1,1),!0)},eP=function(e,t){uV(e,t);let n=bb(e,-1);return n===!1&&Vt(e,R("object length is not an integer",!0)),bt(e,1),n},tP=R("%I"),nP=R("%f"),sP=function(e,t){if(Mb(e,t,CV))iV(e,-1)||Vt(e,R("'__tostring' must return a string"));else switch($n(e,t)){case rp:{oV(e,t)?ze(e,tP,_b(e,t)):ze(e,nP,kV(e,t));break}case Lo:Ks(e,t);break;case Jw:_t(e,mb(e,t)?"true":"false");break;case Or:_t(e,"nil");break;default:{let s=ql(e,t,cp),r=s===Lo?Yt(e,-1):pp(e,t);ze(e,R("%s: %p"),r,TV(e,t)),s!==Or&&Tn(e,-2);break}}return xb(e,-1)},rP=function(e,t,n,s){Bb(e,Pl,ip),Fl(e,-1,t),mb(e,-1)||(bt(e,1),gV(e,n),Ir(e,t),pb(e,1,1),Ks(e,-1),jo(e,-3,t)),Tn(e,-2),s&&(Ks(e,-1),AV(e,t))},oP=function(e,t,n){let s=n>>>0,r=t.length,o=e.length+1-r;e:for(;s<o;s++){for(let a=0;a<r;a++)if(e[s+a]!==t[a])continue e;return s}return-1},aP=function(e,t,n,s){let r,o=new wl;for(dp(e,o);(r=oP(t,n))>=0;)Gl(o,t,r),sp(o,s),t=t.subarray(r+n.length);return sp(o,t),hp(o),Yt(e,-1)},Bb=function(e,t,n){return Fl(e,t,n)===$w?!0:(bt(e,1),t=Kl(e,t),fV(e),Ks(e,-1),jo(e,t,n),!1)},Db=function(e,t,n){_p(e,n,R("too many upvalues",!0));for(let s in t){for(let r=0;r<n;r++)Ks(e,-n);hV(e,t[s],n),jo(e,-(n+2),R(s))}bt(e,n)},_p=function(e,t,n){tV(e,t)||(n?Vt(e,R("stack overflow (%s)"),n):Vt(e,R("stack overflow",!0)))},lP=function(e){op(e)},iP=function(e,t){op(e),Db(e,t,0)},cP=-2,Gb=-1,uP=function(e,t){let n;return aV(e,-1)?(bt(e,1),Gb):(t=Kl(e,t),tp(e,t,0),n=_b(e,-1),bt(e,1),n!==0?(tp(e,t,n),Il(e,t,0)):n=xV(e,t)+1,Il(e,t,n),n)},pP=function(e,t,n){n>=0&&(t=Kl(e,t),tp(e,t,0),Il(e,t,n),Cl(e,n),Il(e,t,0))},Nl=function(e,t,n,s){let r=s.message,o=Yt(e,n).subarray(1);return ze(e,R("cannot %s %s: %s"),R(t),o,R(r)),Tn(e,n),Eb},Cr,ib=[239,187,191],fP=function(e){e.n=0;let t,n=0;do{if(t=Cr(e),t===null||t!==ib[n])return t;n++,e.buff[e.n++]=t}while(n<ib.length);return e.n=0,Cr(e)},cb=function(e){let t=fP(e);if(t===35){do t=Cr(e);while(t&&t!==10);return{skipped:!0,c:Cr(e)}}else return{skipped:!1,c:t}},Vl;if(typeof process>"u"){class e{constructor(){this.n=NaN,this.f=null,this.buff=new Uint8Array(1024),this.pos=0,this.err=void 0}}let t=function(n,s){let r=s;if(r.f!==null&&r.n>0){let a=r.n;return r.n=0,r.f=r.f.subarray(r.pos),r.buff.subarray(0,a)}let o=r.f;return r.f=null,o};Cr=function(n){return n.pos<n.f.length?n.f[n.pos++]:null},Vl=function(n,s,r){let o=new e,a=Nr(n)+1;if(s===null)throw new Error("Can't read stdin in the browser");{ze(n,R("@%s"),s);let c=yV(s),f=new XMLHttpRequest;if(f.open("GET",c,!1),typeof window>"u"&&(f.responseType="arraybuffer"),f.send(),f.status>=200&&f.status<=299)typeof f.response=="string"?o.f=R(f.response):o.f=new Uint8Array(f.response);else return o.err=f.status,Nl(n,"open",a,{message:`${f.status}: ${f.statusText}`})}let i=cb(o);i.c===rb[0]&&s||i.skipped&&(o.buff[o.n++]=10),i.c!==null&&(o.buff[o.n++]=i.c);let l=ep(n,t,o,Yt(n,-1),r),u=o.err;return u?(np(n,a),Nl(n,"read",a,u)):(Tn(n,a),l)}}else{let e=(qo(),ka(Go));class t{constructor(){this.n=NaN,this.f=null,this.buff=Buffer.alloc(1024),this.pos=0,this.err=void 0}}let n=function(s,r){let o=r,a=0;if(o.n>0)a=o.n,o.n=0;else{try{a=e.readSync(o.f,o.buff,0,o.buff.length,o.pos)}catch(i){o.err=i,a=0}o.pos+=a}return a>0?o.buff.subarray(0,a):null};Cr=function(s){let r=Buffer.alloc(1),o;try{o=e.readSync(s.f,r,0,1,s.pos)}catch(a){return s.err=a,null}return s.pos+=o,o>0?r.readUInt8():null},Vl=function(s,r,o){let a=new t,i=Nr(s)+1;if(r===null)_t(s,"=stdin"),a.f=process.stdin.fd;else{ze(s,R("@%s"),r);try{a.f=e.openSync(r,"r")}catch(f){return Nl(s,"open",i,f)}}let l=cb(a);l.c===rb[0]&&r||l.skipped&&(a.buff[a.n++]=10),l.c!==null&&(a.buff[a.n++]=l.c);let u=ep(s,n,a,Yt(s,-1),o),c=a.err;if(r)try{e.closeSync(a.f)}catch{}return c?(np(s,i),Nl(s,"read",i,c)):(Tn(s,i),u)}}var qb=function(e,t){return Vl(e,t,null)},dP=function(e,t){return qb(e,t)||db(e,0,ub,0)},hP=function(){for(let e=0;e<arguments.length;e++){let t=arguments[e];if(typeof process>"u")do{let n=/([^\n]*)\n?([\d\D]*)/.exec(t);console.error(n[1]),t=n[2]}while(t!=="");else process.stderr.write(t)}},Lb=function(e,t,n){let s=ob(e);n!=kb&&Vt(e,R("core and library have incompatible numeric types")),s!=ob(null)?Vt(e,R("multiple Lua VMs detected")):s!==t&&Vt(e,R("version mismatch: app. needs %f, Lua core provides %f"),t,s)},gP=function(e){Lb(e,Qw,kb)};_.exports.LUA_ERRFILE=Eb;_.exports.LUA_FILEHANDLE=OV;_.exports.LUA_LOADED_TABLE=ip;_.exports.LUA_NOREF=cP;_.exports.LUA_PRELOAD_TABLE=NV;_.exports.LUA_REFNIL=Gb;_.exports.luaL_Buffer=wl;_.exports.luaL_addchar=JV;_.exports.luaL_addlstring=Gl;_.exports.luaL_addsize=gp;_.exports.luaL_addstring=sp;_.exports.luaL_addvalue=YV;_.exports.luaL_argcheck=GV;_.exports.luaL_argerror=wr;_.exports.luaL_buffinit=dp;_.exports.luaL_buffinitsize=WV;_.exports.luaL_callmeta=Mb;_.exports.luaL_checkany=qV;_.exports.luaL_checkinteger=Pb;_.exports.luaL_checklstring=fp;_.exports.luaL_checknumber=Vb;_.exports.luaL_checkoption=BV;_.exports.luaL_checkstack=_p;_.exports.luaL_checkstring=Cb;_.exports.luaL_checktype=LV;_.exports.luaL_checkudata=MV;_.exports.luaL_checkversion=gP;_.exports.luaL_checkversion_=Lb;_.exports.luaL_dofile=dP;_.exports.luaL_dostring=QV;_.exports.luaL_error=Vt;_.exports.luaL_execresult=UV;_.exports.luaL_fileresult=Nb;_.exports.luaL_getmetafield=ql;_.exports.luaL_getmetatable=Bl;_.exports.luaL_getsubtable=Bb;_.exports.luaL_gsub=aP;_.exports.luaL_len=eP;_.exports.luaL_loadbuffer=Kb;_.exports.luaL_loadbufferx=Ub;_.exports.luaL_loadfile=qb;_.exports.luaL_loadfilex=Vl;_.exports.luaL_loadstring=Fb;_.exports.luaL_newlib=iP;_.exports.luaL_newlibtable=lP;_.exports.luaL_newmetatable=KV;_.exports.luaL_newstate=DV;_.exports.luaL_opt=mp;_.exports.luaL_optinteger=XV;_.exports.luaL_optlstring=Ib;_.exports.luaL_optnumber=jV;_.exports.luaL_optstring=wb;_.exports.luaL_prepbuffer=zV;_.exports.luaL_prepbuffsize=Xo;_.exports.luaL_pushresult=hp;_.exports.luaL_pushresultsize=ZV;_.exports.luaL_ref=uP;_.exports.luaL_requiref=rP;_.exports.luaL_setfuncs=Db;_.exports.luaL_setmetatable=FV;_.exports.luaL_testudata=Ob;_.exports.luaL_tolstring=sP;_.exports.luaL_traceback=VV;_.exports.luaL_typename=pp;_.exports.luaL_unref=pP;_.exports.luaL_where=yb;_.exports.lua_writestringerror=hP});var Tp=P((zq,rx)=>{"use strict";var{LUA_MULTRET:xp,LUA_OK:Ap,LUA_TFUNCTION:Xb,LUA_TNIL:Hl,LUA_TNONE:mP,LUA_TNUMBER:_P,LUA_TSTRING:Xl,LUA_TTABLE:Pr,LUA_VERSION:bP,LUA_YIELD:xP,lua_call:Sp,lua_callk:AP,lua_concat:SP,lua_error:Wb,lua_getglobal:EP,lua_geti:kP,lua_getmetatable:vP,lua_gettop:Ms,lua_insert:zb,lua_isnil:TP,lua_isnone:Jb,lua_isstring:RP,lua_load:yP,lua_next:NP,lua_pcallk:Zb,lua_pop:Ep,lua_pushboolean:Wl,lua_pushcfunction:Yb,lua_pushglobaltable:OP,lua_pushinteger:Ur,lua_pushliteral:$b,lua_pushnil:Jo,lua_pushstring:CP,lua_pushvalue:Pt,lua_rawequal:IP,lua_rawget:wP,lua_rawlen:VP,lua_rawset:PP,lua_remove:UP,lua_replace:KP,lua_rotate:FP,lua_setfield:Hb,lua_setmetatable:MP,lua_settop:Rn,lua_setupvalue:BP,lua_stringtonumber:DP,lua_toboolean:GP,lua_tolstring:qP,lua_tostring:zo,lua_type:Fs,lua_typename:LP}=qe(),{luaL_argcheck:Zo,luaL_checkany:Rt,luaL_checkinteger:kp,luaL_checkoption:HP,luaL_checkstack:jP,luaL_checktype:Bs,luaL_error:zl,luaL_getmetafield:vp,luaL_loadbufferx:XP,luaL_loadfile:WP,luaL_loadfilex:zP,luaL_optinteger:Qb,luaL_optstring:Vr,luaL_setfuncs:JP,luaL_tolstring:ZP,luaL_where:YP}=rt(),{to_jsstring:ex,to_luastring:Tt}=$e(),Wo,Ll;if(typeof process>"u")if(typeof TextDecoder=="function"){let e="",t=new TextDecoder("utf-8");Wo=function(s){e+=t.decode(s,{stream:!0})};let n=new Uint8Array(0);Ll=function(){e+=t.decode(n),console.log(e),e=""}}else{let e=[];Wo=function(t){try{t=ex(t)}catch{let s=new Uint8Array(t.length);s.set(t),t=s}e.push(t)},Ll=function(){console.log.apply(console.log,e),e=[]}}else Wo=function(e){process.stdout.write(Buffer.from(e))},Ll=function(){process.stdout.write(`
`)};var $P=function(e){let t=Ms(e);EP(e,Tt("tostring",!0));for(let n=1;n<=t;n++){Pt(e,-1),Pt(e,n),Sp(e,1,1);let s=qP(e,-1);if(s===null)return zl(e,Tt("'tostring' must return a string to 'print'"));n>1&&Wo(Tt("	")),Wo(s),Ep(e,1)}return Ll(),0},QP=function(e){return Rt(e,1),ZP(e,1),1},eU=function(e){return Rt(e,1),vP(e,1)?(vp(e,1,Tt("__metatable",!0)),1):(Jo(e),1)},tU=function(e){let t=Fs(e,2);return Bs(e,1,Pr),Zo(e,t===Hl||t===Pr,2,"nil or table expected"),vp(e,1,Tt("__metatable",!0))!==Hl?zl(e,Tt("cannot change a protected metatable")):(Rn(e,2),MP(e,1),1)},nU=function(e){return Rt(e,1),Rt(e,2),Wl(e,IP(e,1,2)),1},sU=function(e){let t=Fs(e,1);return Zo(e,t===Pr||t===Xl,1,"table or string expected"),Ur(e,VP(e,1)),1},rU=function(e){return Bs(e,1,Pr),Rt(e,2),Rn(e,2),wP(e,1),1},oU=function(e){return Bs(e,1,Pr),Rt(e,2),Rt(e,3),Rn(e,3),PP(e,1),1},aU=["stop","restart","collect","count","step","setpause","setstepmul","isrunning"].map(e=>Tt(e)),lU=function(e){HP(e,1,"collect",aU),Qb(e,2,0),zl(e,Tt("lua_gc not implemented"))},iU=function(e){let t=Fs(e,1);return Zo(e,t!==mP,1,"value expected"),CP(e,LP(e,t)),1},cU=function(e,t,n,s){return Rt(e,1),vp(e,1,t)===Hl?(Yb(e,s),Pt(e,1),n?Ur(e,0):Jo(e)):(Pt(e,1),Sp(e,1,3)),3},tx=function(e){return Bs(e,1,Pr),Rn(e,2),NP(e,1)?2:(Jo(e),1)},uU=function(e){return cU(e,Tt("__pairs",!0),0,tx)},pU=function(e){let t=kp(e,2)+1;return Ur(e,t),kP(e,1,t)===Hl?1:2},fU=function(e){return Rt(e,1),Yb(e,pU),Pt(e,1),Ur(e,0),3},dU=function(e,t){try{e=ex(e)}catch{return null}let n=/^[\t\v\f \n\r]*([+-]?)0*([0-9A-Za-z]+)[\t\v\f \n\r]*$/.exec(e);if(!n)return null;let s=parseInt(n[1]+n[2],t);return isNaN(s)?null:s|0},hU=function(e){if(Fs(e,2)<=0){if(Rt(e,1),Fs(e,1)===_P)return Rn(e,1),1;{let t=zo(e,1);if(t!==null&&DP(e,t)===t.length+1)return 1}}else{let t=kp(e,2);Bs(e,1,Xl);let n=zo(e,1);Zo(e,2<=t&&t<=36,2,"base out of range");let s=dU(n,t);if(s!==null)return Ur(e,s),1}return Jo(e),1},nx=function(e){let t=Qb(e,2,1);return Rn(e,1),Fs(e,1)===Xl&&t>0&&(YP(e,t),Pt(e,1),SP(e,2)),Wb(e)},gU=function(e){return GP(e,1)?Ms(e):(Rt(e,1),UP(e,1),$b(e,"assertion failed!"),Rn(e,1),nx(e))},mU=function(e){let t=Ms(e);if(Fs(e,1)===Xl&&zo(e,1)[0]===35)return Ur(e,t-1),1;{let n=kp(e,1);return n<0?n=t+n:n>t&&(n=t),Zo(e,1<=n,1,"index out of range"),t-n}},jl=function(e,t,n){return t!==Ap&&t!==xP?(Wl(e,0),Pt(e,-2),2):Ms(e)-n},_U=function(e){Rt(e,1),Wl(e,1),zb(e,1);let t=Zb(e,Ms(e)-2,xp,0,0,jl);return jl(e,t,0)},bU=function(e){let t=Ms(e);Bs(e,2,Xb),Wl(e,1),Pt(e,1),FP(e,3,2);let n=Zb(e,t-2,xp,2,2,jl);return jl(e,n,2)},sx=function(e,t,n){return t===Ap?(n!==0&&(Pt(e,n),BP(e,-2,1)||Ep(e,1)),1):(Jo(e),zb(e,-2),2)},bp=5,xU=function(e,t){return jP(e,2,"too many nested functions"),Pt(e,1),Sp(e,0,1),TP(e,-1)?(Ep(e,1),null):(RP(e,-1)||zl(e,Tt("reader function must return a string")),KP(e,bp),zo(e,bp))},AU=function(e){let t=zo(e,1),n=Vr(e,3,"bt"),s=Jb(e,4)?0:4,r;if(t!==null){let o=Vr(e,2,t);r=XP(e,t,t.length,o,n)}else{let o=Vr(e,2,"=(load)");Bs(e,1,Xb),Rn(e,bp),r=yP(e,xU,null,o,n)}return sx(e,r,s)},SU=function(e){let t=Vr(e,1,null),n=Vr(e,2,null),s=Jb(e,3)?0:3,r=zP(e,t,n);return sx(e,r,s)},jb=function(e,t,n){return Ms(e)-1},EU=function(e){let t=Vr(e,1,null);return Rn(e,1),WP(e,t)!==Ap?Wb(e):(AP(e,0,xp,0,jb),jb(e,0,0))},kU={assert:gU,collectgarbage:lU,dofile:EU,error:nx,getmetatable:eU,ipairs:fU,load:AU,loadfile:SU,next:tx,pairs:uU,pcall:_U,print:$P,rawequal:nU,rawget:rU,rawlen:sU,rawset:oU,select:mU,setmetatable:tU,tonumber:hU,tostring:QP,type:iU,xpcall:bU},vU=function(e){return OP(e),JP(e,kU,0),Pt(e,-1),Hb(e,-2,Tt("_G")),$b(e,bP),Hb(e,-2,Tt("_VERSION")),1};rx.exports.luaopen_base=vU});var Np=P((Jq,fx)=>{"use strict";var{LUA_OK:Rp,LUA_TFUNCTION:TU,LUA_TSTRING:RU,LUA_YIELD:ax,lua_Debug:yU,lua_checkstack:ox,lua_concat:NU,lua_error:OU,lua_getstack:CU,lua_gettop:Kr,lua_insert:yp,lua_isyieldable:IU,lua_newthread:wU,lua_pop:VU,lua_pushboolean:Zl,lua_pushcclosure:PU,lua_pushliteral:yn,lua_pushthread:UU,lua_pushvalue:KU,lua_resume:FU,lua_status:lx,lua_tothread:ix,lua_type:MU,lua_upvalueindex:BU,lua_xmove:Jl,lua_yield:DU}=qe(),{luaL_argcheck:GU,luaL_checktype:qU,luaL_newlib:LU,luaL_where:HU}=rt(),cx=e=>{let t=ix(e,1);return GU(e,t,1,"thread expected"),t},ux=(e,t,n)=>{if(!ox(t,n))return yn(e,"too many arguments to resume"),-1;if(lx(t)===Rp&&Kr(t)===0)return yn(e,"cannot resume dead coroutine"),-1;Jl(e,t,n);let s=FU(t,e,n);if(s===Rp||s===ax){let r=Kr(t);return ox(e,r+1)?(Jl(t,e,r),r):(VU(t,r),yn(e,"too many results to resume"),-1)}else return Jl(t,e,1),-1},jU=e=>{let t=cx(e),n=ux(e,t,Kr(e)-1);return n<0?(Zl(e,0),yp(e,-2),2):(Zl(e,1),yp(e,-(n+1)),n+1)},XU=e=>{let t=ix(e,BU(1)),n=ux(e,t,Kr(e));return n<0?(MU(e,-1)===RU&&(HU(e,1),yp(e,-2),NU(e,2)),OU(e)):n},px=e=>{qU(e,1,TU);let t=wU(e);return KU(e,1),Jl(e,t,1),1},WU=e=>(px(e),PU(e,XU,1),1),zU=e=>DU(e,Kr(e)),JU=e=>{let t=cx(e);if(e===t)yn(e,"running");else switch(lx(t)){case ax:yn(e,"suspended");break;case Rp:{let n=new yU;CU(t,0,n)>0?yn(e,"normal"):Kr(t)===0?yn(e,"dead"):yn(e,"suspended");break}default:yn(e,"dead");break}return 1},ZU=e=>(Zl(e,IU(e)),1),YU=e=>(Zl(e,UU(e)),2),$U={create:px,isyieldable:ZU,resume:jU,running:YU,status:JU,wrap:WU,yield:zU},QU=e=>(LU(e,$U),1);fx.exports.luaopen_coroutine=QU});var Up=P((Zq,Sx)=>{"use strict";var{LUA_MAXINTEGER:Cp}=Ye(),$t=ct(),{LUA_OPEQ:eK,LUA_OPLT:tK,LUA_TFUNCTION:nK,LUA_TNIL:sK,LUA_TTABLE:dx,lua_call:rK,lua_checkstack:oK,lua_compare:gx,lua_createtable:aK,lua_geti:Me,lua_getmetatable:lK,lua_gettop:mx,lua_insert:iK,lua_isnil:cK,lua_isnoneornil:_x,lua_isstring:uK,lua_pop:Qn,lua_pushinteger:pK,lua_pushnil:fK,lua_pushstring:dK,lua_pushvalue:Yo,lua_rawget:hK,lua_setfield:gK,lua_seti:Nn,lua_settop:mK,lua_toboolean:_K,lua_type:bK}=qe(),{luaL_Buffer:xK,luaL_addlstring:AK,luaL_addvalue:SK,luaL_argcheck:ea,luaL_buffinit:EK,luaL_checkinteger:$o,luaL_checktype:bx,luaL_error:ta,luaL_len:xx,luaL_newlib:kK,luaL_opt:vK,luaL_optinteger:Yl,luaL_optlstring:TK,luaL_pushresult:RK,luaL_typename:yK}=rt(),NK=ts(),{to_luastring:es}=$e(),$l=1,Vp=2,Ax=4,Pp=$l|Vp,Op=function(e,t,n){return dK(e,t),hK(e,-n)!==sK},Ip=function(e,t,n){if(bK(e,t)!==dx){let s=1;lK(e,t)&&(!(n&$l)||Op(e,es("__index",!0),++s))&&(!(n&Vp)||Op(e,es("__newindex",!0),++s))&&(!(n&Ax)||Op(e,es("__len",!0),++s))?Qn(e,s):bx(e,t,dx)}},Ql=function(e,t,n){return Ip(e,t,n|Ax),xx(e,t)},hx=function(e,t,n){Me(e,1,n),uK(e,-1)||ta(e,es("invalid value (%s) at index %d in table for 'concat'"),yK(e,-1),n),SK(t)},OK=function(e){let t=Ql(e,1,Pp)+1,n;switch(mx(e)){case 2:n=t;break;case 3:{n=$o(e,2),ea(e,1<=n&&n<=t,2,"position out of bounds");for(let s=t;s>n;s--)Me(e,1,s-1),Nn(e,1,s);break}default:return ta(e,"wrong number of arguments to 'insert'")}return Nn(e,1,n),0},CK=function(e){let t=Ql(e,1,Pp),n=Yl(e,2,t);for(n!==t&&ea(e,1<=n&&n<=t+1,1,"position out of bounds"),Me(e,1,n);n<t;n++)Me(e,1,n+1),Nn(e,1,n);return fK(e),Nn(e,1,n),1},IK=function(e){let t=$o(e,2),n=$o(e,3),s=$o(e,4),r=_x(e,5)?1:5;if(Ip(e,1,$l),Ip(e,r,Vp),n>=t){ea(e,$t.lt(0,t)||$t.lt(n,$t.add(Cp,t)),3,"too many elements to move");let o=$t.sub($t.add(n,1),t);if(ea(e,$t.le(s,$t.add($t.sub(Cp,o),1)),4,"destination wrap around"),s>n||s<=t||r!==1&&gx(e,1,r,eK)!==1)for(let a=0;a<o;a++)Me(e,1,$t.add(t,a)),Nn(e,r,$t.add(s,a));else for(let a=o-1;a>=0;a--)Me(e,1,t+a),Nn(e,r,s+a)}return Yo(e,r),1},wK=function(e){let t=Ql(e,1,$l),n=TK(e,2,""),s=n.length,r=Yl(e,3,1);t=Yl(e,4,t);let o=new xK;for(EK(e,o);r<t;r++)hx(e,o,r),AK(o,n,s);return r===t&&hx(e,o,r),RK(o),1},VK=function(e){let t=mx(e);aK(e,t,1),iK(e,1);for(let n=t;n>=1;n--)Nn(e,1,n);return pK(e,t),gK(e,1,es("n")),1},PK=function(e){let t=Yl(e,2,1),n=vK(e,$o,3,xx(e,1));if(t>n)return 0;let s=n-t;if(s>=Number.MAX_SAFE_INTEGER||!oK(e,++s))return ta(e,es("too many results to unpack"));for(;t<n;t++)Me(e,1,t);return Me(e,1,n),s},UK=function(){return Math.floor(Math.random()*4294967296)},KK=100,Fr=function(e,t,n){Nn(e,1,t),Nn(e,1,n)},Qo=function(e,t,n){if(cK(e,2))return gx(e,t,n,tK);{Yo(e,2),Yo(e,t-1),Yo(e,n-2),rK(e,2,1);let s=_K(e,-1);return Qn(e,1),s}},FK=function(e,t,n){let s=t,r=n-1;for(;;){for(;Me(e,1,++s),Qo(e,-1,-2);)s==n-1&&ta(e,es("invalid order function for sorting")),Qn(e,1);for(;Me(e,1,--r),Qo(e,-3,-1);)r<s&&ta(e,es("invalid order function for sorting")),Qn(e,1);if(r<s)return Qn(e,1),Fr(e,n-1,s),s;Fr(e,s,r)}},MK=function(e,t,n){let s=Math.floor((t-e)/4),r=n%(s*2)+(e+s);return NK.lua_assert(e+s<=r&&r<=t-s),r},wp=function(e,t,n,s){for(;t<n;){if(Me(e,1,t),Me(e,1,n),Qo(e,-1,-2)?Fr(e,t,n):Qn(e,2),n-t==1)return;let r;if(n-t<KK||s===0?r=Math.floor((t+n)/2):r=MK(t,n,s),Me(e,1,r),Me(e,1,t),Qo(e,-2,-1)?Fr(e,r,t):(Qn(e,1),Me(e,1,n),Qo(e,-1,-2)?Fr(e,r,n):Qn(e,2)),n-t==2)return;Me(e,1,r),Yo(e,-1),Me(e,1,n-1),Fr(e,r,n-1),r=FK(e,t,n);let o;r-t<n-r?(wp(e,t,r-1,s),o=r-t,t=r+1):(wp(e,r+1,n,s),o=n-r,n=r-1),(n-t)/128>o&&(s=UK())}},BK=function(e){let t=Ql(e,1,Pp);return t>1&&(ea(e,t<Cp,1,"array too big"),_x(e,2)||bx(e,2,nK),mK(e,2),wp(e,1,t,0)),0},DK={concat:wK,insert:OK,move:IK,pack:VK,remove:CK,sort:BK,unpack:PK},GK=function(e){return kK(e,DK),1};Sx.exports.luaopen_table=GK});var Gp=P((Yq,Ox)=>{"use strict";var qK=(qo(),ka(Go)),{LUA_REGISTRYINDEX:na,lua_getfield:Fp,lua_gettop:LK,lua_isnone:HK,lua_isnoneornil:jK,lua_newuserdata:XK,lua_pop:WK,lua_pushliteral:ei,lua_pushnil:Ex,lua_pushstring:zK,lua_pushvalue:ni,lua_setfield:ti,lua_tostring:JK,lua_touserdata:ZK}=qe(),{LUA_FILEHANDLE:si,luaL_checkany:YK,luaL_checklstring:$K,luaL_checkudata:QK,luaL_error:Mp,luaL_fileresult:Bp,luaL_newlib:e2,luaL_newmetatable:t2,luaL_setfuncs:n2,luaL_setmetatable:s2,luaL_testudata:r2}=rt(),o2=ts(),{to_luastring:Qt}=$e(),Dp="_IO_",a2=Dp.length,kx=Qt(Dp+"input"),sa=Qt(Dp+"output"),ri=function(e){return QK(e,1,si)},oi=function(e){return e.closef===null},l2=function(e){YK(e,1);let t=r2(e,1,si);return t===null?Ex(e):oi(t)?ei(e,"closed file"):ei(e,"file"),1},i2=function(e){let t=ri(e);return oi(t)?ei(e,"file (closed)"):zK(e,Qt(`file (${t.f.toString()})`)),1},ai=function(e){let t=ri(e);return oi(t)&&Mp(e,Qt("attempt to use a closed file")),o2.lua_assert(t.f),t.f},c2=function(e){let t=XK(e);return t.f=null,t.closef=null,s2(e,si),t},u2=function(e){let t=ri(e),n=t.closef;return t.closef=null,n(e)},vx=function(e){return HK(e,1)&&Fp(e,na,sa),ai(e),u2(e)},Tx=function(e,t){Fp(e,na,t);let n=ZK(e,-1);return oi(n)&&Mp(e,Qt("standard %s file is closed"),t.subarray(a2)),n.f},Rx=function(e,t,n){return jK(e,1)||(JK(e,1)?Mp(e,Qt("opening files not yet implemented")):(ai(e),ni(e,1)),ti(e,na,t)),Fp(e,na,t),1},p2=function(e){return Rx(e,kx,"r")},f2=function(e){return Rx(e,sa,"w")},d2=typeof process<"u"&&process.versions.node>6?e=>e:e=>typeof Buffer<"u"?Buffer.from(e.buffer,e.byteOffset,e.byteLength):e,yx=function(e,t,n){let s=LK(e)-n,r=!0,o;for(;s--;n++){let a=$K(e,n);try{r=r&&qK.writeSync(t.fd,d2(a),0,a.length)===a.length}catch(i){r=!1,o=i}}return r?1:Bp(e,r,null,o)},h2=function(e){return yx(e,Tx(e,sa),1)},g2=function(e){let t=ai(e);return ni(e,1),yx(e,t,2)},m2=function(e){return Tx(e,sa),Bp(e,!0,null,null)},_2=function(e){return ai(e),Bp(e,!0,null,null)},b2={close:vx,flush:m2,input:p2,output:f2,type:l2,write:h2},x2={close:vx,flush:_2,write:g2,__tostring:i2},A2=function(e){t2(e,si),ni(e,-1),ti(e,-2,Qt("__index",!0)),n2(e,x2,0),WK(e,1)},Nx=function(e){let t=ri(e);return t.closef=Nx,Ex(e),ei(e,"cannot close standard file"),2},Kp=function(e,t,n,s){let r=c2(e);r.f=t,r.closef=Nx,n!==null&&(ni(e,-1),ti(e,na,n)),ti(e,-2,s)},S2=function(e){e2(e,b2),A2(e);let t={fd:-1,write(){return!0},on(){}},n=typeof process<"u"?process.stdin:t,s=typeof process<"u"?process.stdout:t,r=typeof process<"u"?process.stderr:t;return Kp(e,n,kx,Qt("stdin")),Kp(e,s,sa,Qt("stdout")),Kp(e,r,null,Qt("stderr")),1};Ox.exports.luaopen_io=S2});var jp=P(($q,Gx)=>{"use strict";var{LUA_TNIL:E2,LUA_TTABLE:k2,lua_close:v2,lua_createtable:T2,lua_getfield:R2,lua_isboolean:y2,lua_isnoneornil:Kx,lua_pop:N2,lua_pushboolean:O2,lua_pushfstring:C2,lua_pushinteger:Fx,lua_pushliteral:I2,lua_pushnil:w2,lua_pushnumber:qp,lua_pushstring:Mx,lua_setfield:V2,lua_settop:P2,lua_toboolean:Cx,lua_tointegerx:U2}=qe(),{luaL_Buffer:K2,luaL_addchar:On,luaL_addstring:xt,luaL_argerror:F2,luaL_buffinit:M2,luaL_checkinteger:B2,luaL_checkoption:D2,luaL_checkstring:li,luaL_checktype:G2,luaL_error:ii,luaL_execresult:Ix,luaL_fileresult:ra,luaL_newlib:q2,luaL_optinteger:L2,luaL_optlstring:H2,luaL_optstring:Bx,luaL_pushresult:j2}=rt(),{luastring_eq:Lp,to_jsstring:wx,to_luastring:D}=$e(),X2=D("aAbBcCdDeFhHIjklmMnpPrRStTuUwWxXyYzZ%"),ns=function(e,t,n){Fx(e,n),V2(e,-2,D(t,!0))},Dx=function(e,t,n){ns(e,"sec",n?t.getUTCSeconds():t.getSeconds()),ns(e,"min",n?t.getUTCMinutes():t.getMinutes()),ns(e,"hour",n?t.getUTCHours():t.getHours()),ns(e,"day",n?t.getUTCDate():t.getDate()),ns(e,"month",(n?t.getUTCMonth():t.getMonth())+1),ns(e,"year",n?t.getUTCFullYear():t.getFullYear()),ns(e,"wday",(n?t.getUTCDay():t.getDay())+1),ns(e,"yday",Math.floor((t-new Date(t.getFullYear(),0,0))/864e5))},Vx=Number.MAX_SAFE_INTEGER/2,Mr=function(e,t,n,s){let r=R2(e,-1,D(t,!0)),o=U2(e,-1);if(o===!1){if(r!==E2)return ii(e,D("field '%s' is not an integer"),t);if(n<0)return ii(e,D("field '%s' missing in date table"),t);o=n}else{if(!(-Vx<=o&&o<=Vx))return ii(e,D("field '%s' is out-of-bound"),t);o-=s}return N2(e,1),o},Le={days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(e=>D(e)),shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(e=>D(e)),months:["January","February","March","April","May","June","July","August","September","October","November","December"].map(e=>D(e)),shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(e=>D(e)),AM:D("AM"),PM:D("PM"),am:D("am"),pm:D("pm"),formats:{c:D("%a %b %e %H:%M:%S %Y"),D:D("%m/%d/%y"),F:D("%Y-%m-%d"),R:D("%H:%M"),r:D("%I:%M:%S %p"),T:D("%H:%M:%S"),X:D("%T"),x:D("%D")}},Px=function(e,t){let n=e.getDay();t==="monday"&&(n===0?n=6:n--);let s=(e-new Date(e.getFullYear(),0,1))/864e5;return Math.floor((s+7-n)/7)},Je=function(e,t,n){t<10&&On(e,n),xt(e,D(String(t)))},Cn=function(e,t,n,s){let r=0;for(;r<n.length;)if(n[r]!==37)On(t,n[r++]);else{r++;let o=W2(e,n,r);switch(n[r]){case 37:On(t,37);break;case 65:xt(t,Le.days[s.getDay()]);break;case 66:xt(t,Le.months[s.getMonth()]);break;case 67:Je(t,Math.floor(s.getFullYear()/100),48);break;case 68:Cn(e,t,Le.formats.D,s);break;case 70:Cn(e,t,Le.formats.F,s);break;case 72:Je(t,s.getHours(),48);break;case 73:Je(t,(s.getHours()+11)%12+1,48);break;case 77:Je(t,s.getMinutes(),48);break;case 80:xt(t,s.getHours()<12?Le.am:Le.pm);break;case 82:Cn(e,t,Le.formats.R,s);break;case 83:Je(t,s.getSeconds(),48);break;case 84:Cn(e,t,Le.formats.T,s);break;case 85:Je(t,Px(s,"sunday"),48);break;case 87:Je(t,Px(s,"monday"),48);break;case 88:Cn(e,t,Le.formats.X,s);break;case 89:xt(t,D(String(s.getFullYear())));break;case 90:{let a=s.toString().match(/\(([\w\s]+)\)/);a&&xt(t,D(a[1]));break}case 97:xt(t,Le.shortDays[s.getDay()]);break;case 98:case 104:xt(t,Le.shortMonths[s.getMonth()]);break;case 99:Cn(e,t,Le.formats.c,s);break;case 100:Je(t,s.getDate(),48);break;case 101:Je(t,s.getDate(),32);break;case 106:{let a=Math.floor((s-new Date(s.getFullYear(),0,1))/864e5);a<100&&(a<10&&On(t,48),On(t,48)),xt(t,D(String(a)));break}case 107:Je(t,s.getHours(),32);break;case 108:Je(t,(s.getHours()+11)%12+1,32);break;case 109:Je(t,s.getMonth()+1,48);break;case 110:On(t,10);break;case 112:xt(t,s.getHours()<12?Le.AM:Le.PM);break;case 114:Cn(e,t,Le.formats.r,s);break;case 115:xt(t,D(String(Math.floor(s/1e3))));break;case 116:On(t,9);break;case 117:{let a=s.getDay();xt(t,D(String(a===0?7:a)));break}case 119:xt(t,D(String(s.getDay())));break;case 120:Cn(e,t,Le.formats.x,s);break;case 121:Je(t,s.getFullYear()%100,48);break;case 122:{let a=s.getTimezoneOffset();a>0?On(t,45):(a=-a,On(t,43)),Je(t,Math.floor(a/60),48),Je(t,a%60,48);break}}r+=o}},W2=function(e,t,n){let s=X2,r=0,o=1;for(;r<s.length&&o<=t.length-n;r+=o)if(s[r]===124)o++;else if(Lp(t.subarray(n,n+o),s.subarray(r,r+o)))return o;F2(e,1,C2(e,D("invalid conversion specifier '%%%s'"),t))},z2=function(e){let t=H2(e,1,"%c"),n=Kx(e,2)?new Date:new Date(Hp(e,2)*1e3),s=!1,r=0;if(t[r]===33&&(s=!0,r++),t[r]===42&&t[r+1]===116)T2(e,0,9),Dx(e,n,s);else{let o=new K2;M2(e,o),Cn(e,o,t,n),j2(o)}return 1},J2=function(e){let t;return Kx(e,1)?t=new Date:(G2(e,1,k2),P2(e,1),t=new Date(Mr(e,"year",-1,0),Mr(e,"month",-1,1),Mr(e,"day",-1,0),Mr(e,"hour",12,0),Mr(e,"min",0,0),Mr(e,"sec",0,0)),Dx(e,t)),Fx(e,Math.floor(t/1e3)),1},Hp=function(e,t){return B2(e,t)},Z2=function(e){let t=Hp(e,1),n=Hp(e,2);return qp(e,t-n),1},Y2=["all","collate","ctype","monetary","numeric","time"].map(e=>D(e)),Ux=D("C"),$2=D("POSIX"),Q2=function(e){let t=Bx(e,1,null);return D2(e,2,"all",Y2),Mx(e,t===null||t.length==0||Lp(t,Ux)||Lp(t,$2)?Ux:null),1},In={date:z2,difftime:Z2,setlocale:Q2,time:J2};if(typeof process>"u")In.clock=function(e){return qp(e,performance.now()/1e3),1};else{let e=(qo(),ka(Go)),t=ds("tmp"),n=ds("child_process");In.exit=function(r){let o;return y2(r,1)?o=Cx(r,1)?0:1:o=L2(r,1,0),Cx(r,2)&&v2(r),r&&process.exit(o),0},In.getenv=function(r){let o=li(r,1);return o=wx(o),Object.prototype.hasOwnProperty.call(process.env,o)?I2(r,process.env[o]):w2(r),1},In.clock=function(r){return qp(r,process.uptime()),1};let s=function(){return t.tmpNameSync()};In.remove=function(r){let o=li(r,1);try{e.unlinkSync(o)}catch(a){if(a.code==="EISDIR")try{e.rmdirSync(o)}catch(i){return ra(r,!1,o,i)}else return ra(r,!1,o,a)}return ra(r,!0)},In.rename=function(r){let o=li(r,1),a=li(r,2);try{e.renameSync(o,a)}catch(i){return ra(r,!1,!1,i)}return ra(r,!0)},In.tmpname=function(r){let o=s();return o?(Mx(r,D(o)),1):ii(r,D("unable to generate a unique filename"))},In.execute=function(r){let o=Bx(r,1,null);if(o!==null){o=wx(o);try{n.execSync(o,{stdio:[process.stdin,process.stdout,process.stderr]})}catch(a){return Ix(r,a)}return Ix(r,null)}else return O2(r,1),1}}var eF=function(e){return q2(e,In),1};Gx.exports.luaopen_os=eF});var qx=P(ci=>{(function(){"use strict";var e={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function t(a){return s(o(a),arguments)}function n(a,i){return t.apply(null,[a].concat(i||[]))}function s(a,i){var l=1,u=a.length,c,f="",g,H,k,W,yt,Ft,lt,Et;for(g=0;g<u;g++)if(typeof a[g]=="string")f+=a[g];else if(typeof a[g]=="object"){if(k=a[g],k.keys)for(c=i[l],H=0;H<k.keys.length;H++){if(c==null)throw new Error(t('[sprintf] Cannot access property "%s" of undefined value "%s"',k.keys[H],k.keys[H-1]));c=c[k.keys[H]]}else k.param_no?c=i[k.param_no]:c=i[l++];if(e.not_type.test(k.type)&&e.not_primitive.test(k.type)&&c instanceof Function&&(c=c()),e.numeric_arg.test(k.type)&&typeof c!="number"&&isNaN(c))throw new TypeError(t("[sprintf] expecting number but found %T",c));switch(e.number.test(k.type)&&(lt=c>=0),k.type){case"b":c=parseInt(c,10).toString(2);break;case"c":c=String.fromCharCode(parseInt(c,10));break;case"d":case"i":c=parseInt(c,10);break;case"j":c=JSON.stringify(c,null,k.width?parseInt(k.width):0);break;case"e":c=k.precision?parseFloat(c).toExponential(k.precision):parseFloat(c).toExponential();break;case"f":c=k.precision?parseFloat(c).toFixed(k.precision):parseFloat(c);break;case"g":c=k.precision?String(Number(c.toPrecision(k.precision))):parseFloat(c);break;case"o":c=(parseInt(c,10)>>>0).toString(8);break;case"s":c=String(c),c=k.precision?c.substring(0,k.precision):c;break;case"t":c=String(!!c),c=k.precision?c.substring(0,k.precision):c;break;case"T":c=Object.prototype.toString.call(c).slice(8,-1).toLowerCase(),c=k.precision?c.substring(0,k.precision):c;break;case"u":c=parseInt(c,10)>>>0;break;case"v":c=c.valueOf(),c=k.precision?c.substring(0,k.precision):c;break;case"x":c=(parseInt(c,10)>>>0).toString(16);break;case"X":c=(parseInt(c,10)>>>0).toString(16).toUpperCase();break}e.json.test(k.type)?f+=c:(e.number.test(k.type)&&(!lt||k.sign)?(Et=lt?"+":"-",c=c.toString().replace(e.sign,"")):Et="",yt=k.pad_char?k.pad_char==="0"?"0":k.pad_char.charAt(1):" ",Ft=k.width-(Et+c).length,W=k.width&&Ft>0?yt.repeat(Ft):"",f+=k.align?Et+c+W:yt==="0"?Et+W+c:W+Et+c)}return f}var r=Object.create(null);function o(a){if(r[a])return r[a];for(var i=a,l,u=[],c=0;i;){if((l=e.text.exec(i))!==null)u.push(l[0]);else if((l=e.modulo.exec(i))!==null)u.push("%");else if((l=e.placeholder.exec(i))!==null){if(l[2]){c|=1;var f=[],g=l[2],H=[];if((H=e.key.exec(g))!==null)for(f.push(H[1]);(g=g.substring(H[0].length))!=="";)if((H=e.key_access.exec(g))!==null)f.push(H[1]);else if((H=e.index_access.exec(g))!==null)f.push(H[1]);else throw new SyntaxError("[sprintf] failed to parse named argument key");else throw new SyntaxError("[sprintf] failed to parse named argument key");l[2]=f}else c|=2;if(c===3)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");u.push({placeholder:l[0],param_no:l[1],keys:l[2],sign:l[3],pad_char:l[4],align:l[5],width:l[6],precision:l[7],type:l[8]})}else throw new SyntaxError("[sprintf] unexpected placeholder");i=i.substring(l[0].length)}return r[a]=u}typeof ci<"u"&&(ci.sprintf=t,ci.vsprintf=n),typeof window<"u"&&(window.sprintf=t,window.vsprintf=n,typeof define=="function"&&define.amd&&define(function(){return{sprintf:t,vsprintf:n}}))})()});var Af=P((e4,kA)=>{"use strict";var{sprintf:fi}=qx(),Gr=ct(),tF=function(e){return e.replace(/([eE])([-+]?)(\d+)$/,function(t,n,s,r){return r.length<2&&(r="0"+r),s||(s="+"),n+s+r})},nA=function(e,t){let n=String.fromCharCode(...e),s=n[n.length-1],r=n.slice(1,-1),o=!1,a=!1,i=!1,l=!1,u=!1,c=0,f=-1,g=0;for(;g<r.length&&"-+ 0#".indexOf(r[g])>=0;){switch(r[g]){case"-":o=!0;break;case"+":a=!0;break;case" ":i=!0;break;case"0":l=!0;break;case"#":u=!0;break}g++}let H="";for(;g<r.length&&r[g]>="0"&&r[g]<="9";)H+=r[g],g++;if(H&&(c=parseInt(H,10)),g<r.length&&r[g]==="."){g++;let an="";for(;g<r.length&&r[g]>="0"&&r[g]<="9";)an+=r[g],g++;f=an?parseInt(an,10):0}let k=!1,W,yt=Gr.toBigInt(t);if(s==="d"||s==="i"?(k=yt<0n,W=(k?-yt:yt).toString(10)):s==="u"?W=BigInt.asUintN(64,yt).toString(10):s==="x"||s==="X"?(W=BigInt.asUintN(64,yt).toString(16),s==="X"&&(W=W.toUpperCase())):s==="o"?W=BigInt.asUintN(64,yt).toString(8):(W=Gr.toDecimalString(t),k=yt<0n),f>=0){if(f===0&&W==="0")W="";else for(;W.length<f;)W="0"+W;l=!1}let Ft="";u&&(s==="o"?W[0]!=="0"&&(Ft="0"):s==="x"?W!==""&&W!=="0"&&(Ft="0x"):s==="X"&&W!==""&&W!=="0"&&(Ft="0X"));let lt="";(s==="d"||s==="i")&&(k?lt="-":a?lt="+":i&&(lt=" "));let Et=Ft+W,Qr=lt.length+Et.length,Zs;if(Qr>=c)Zs=lt+Et;else if(o)Zs=lt+Et+" ".repeat(c-Qr);else if(l)if(Ft){let an=c-Qr;Zs=lt+Ft+"0".repeat(an)+W}else Zs=lt+"0".repeat(c-Qr)+Et;else Zs=" ".repeat(c-Qr)+lt+Et;return Zs},{LUA_INTEGER_FMT:nF,LUA_INTEGER_FRMLEN:pi,LUA_MININTEGER:sF,LUA_NUMBER_FMT:rF,LUA_NUMBER_FRMLEN:oF,frexp:aF,lua_getlocaledecpoint:lF}=Ye(),{LUA_TBOOLEAN:iF,LUA_TFUNCTION:af,LUA_TNIL:cF,LUA_TNUMBER:sA,LUA_TSTRING:rA,LUA_TTABLE:oA,lua_call:uF,lua_createtable:pF,lua_dump:fF,lua_gettable:dF,lua_gettop:aA,lua_isinteger:hF,lua_isstring:gF,lua_pop:di,lua_pushcclosure:mF,lua_pushinteger:Kt,lua_pushlightuserdata:_F,lua_pushliteral:lf,lua_pushlstring:Jp,lua_pushnil:Zp,lua_pushnumber:bF,lua_pushstring:Ds,lua_pushvalue:Yp,lua_remove:xF,lua_setfield:AF,lua_setmetatable:SF,lua_settop:lA,lua_toboolean:cf,lua_tointeger:EF,lua_tonumber:kF,lua_tostring:iA,lua_touserdata:vF,lua_type:cA,lua_upvalueindex:TF}=qe(),{luaL_Buffer:Hr,luaL_addchar:Ze,luaL_addlstring:Dr,luaL_addsize:uA,luaL_addstring:Br,luaL_addvalue:aa,luaL_argcheck:Ut,luaL_argerror:Gs,luaL_buffinit:gi,luaL_buffinitsize:pA,luaL_checkinteger:qs,luaL_checknumber:$p,luaL_checkstack:uf,luaL_checkstring:de,luaL_checktype:RF,luaL_error:ae,luaL_newlib:yF,luaL_optinteger:qr,luaL_optstring:NF,luaL_prepbuffsize:fA,luaL_pushresult:mi,luaL_pushresultsize:dA,luaL_tolstring:pf,luaL_typename:OF}=rt(),hA=ts(),{luastring_eq:gA,luastring_indexOf:as,to_jsstring:CF,to_luastring:y}=$e(),IF="%",nn=IF.charCodeAt(0),wF=32,ff=2147483647,VF=function(e){let t=as(e,0);return t>-1?t:e.length},Lr=function(e,t){return e>=0?e:0-e>t?0:t+e+1},PF=function(e){let t=de(e,1),n=t.length,s=Lr(qs(e,2),n),r=Lr(qr(e,3,-1),n);return s<1&&(s=1),r>n&&(r=n),s<=r?Ds(e,t.subarray(s-1,s-1+(r-s+1))):lf(e,""),1},UF=function(e){return Kt(e,de(e,1).length),1},KF=function(e){let t=aA(e),n=new Hr,s=pA(e,n,t);for(let r=1;r<=t;r++){let o=qs(e,r);Ut(e,o>=0&&o<=255,"value out of range"),s[r-1]=o}return dA(n,t),1},FF=function(e,t,n,s){return Dr(s,t,n),0},MF=function(e){let t=new Hr,n=cf(e,2);return RF(e,1,af),lA(e,1),gi(e,t),fF(e,FF,t,n)!==0?ae(e,y("unable to dump given function")):(mi(t),1)},Lx=oF.length+1,Hx=1,BF=function(e){if(Object.is(e,1/0))return y("inf");if(Object.is(e,-1/0))return y("-inf");if(Number.isNaN(e))return y("nan");if(e===0){let t=fi(rF+"x0p+0",e);return Object.is(e,-0)&&(t="-"+t),y(t)}else{let t="",n=aF(e),s=n[0],r=n[1];return s<0&&(t+="-",s=-s),t+="0x",t+=(s*(1<<Hx)).toString(16),r-=Hx,t+=fi("p%+d",r),y(t)}},mA=function(e,t,n){let s=BF(n);if(t[Lx]===65)for(let r=0;r<s.length;r++){let o=s[r];o>=97&&(s[r]=o&223)}else t[Lx]!==97&&ae(e,y("modifiers for format '%%a'/'%%A' not implemented"));return s},jx=y("-+ #0"),Xx=e=>97<=e&&e<=122||65<=e&&e<=90,tn=e=>48<=e&&e<=57,Qp=e=>0<=e&&e<=31||e===127,ef=e=>33<=e&&e<=126,tf=e=>97<=e&&e<=122,nf=e=>65<=e&&e<=90,sf=e=>97<=e&&e<=122||65<=e&&e<=90||48<=e&&e<=57,Wx=e=>ef(e)&&!sf(e),zx=e=>e===32||e>=9&&e<=13,Jx=e=>48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102,DF=function(e,t,n){Ze(e,34);let s=0;for(;n--;){if(t[s]===34||t[s]===92||t[s]===10)Ze(e,92),Ze(e,t[s]);else if(Qp(t[s])){let r=""+t[s];tn(t[s+1])&&(r=("000"+r).slice(-3)),Br(e,y("\\"+r))}else Ze(e,t[s]);s++}Ze(e,34)},GF=function(e){if(as(e,46)<0){let t=lF(),n=as(e,t);n&&(e[n]=46)}},qF=function(e,t,n){switch(cA(e,n)){case rA:{let s=iA(e,n);DF(t,s,s.length);break}case sA:{let s;if(hF(e,n)){let r=EF(e,n);if(Gr.eq(r,sF)){let o=BigInt.asUintN(64,Gr.toBigInt(r));s=y("0x"+o.toString(16))}else{let o=y(nF,!0);s=y(nA(o,r))}}else{let r=kF(e,n);s=mA(e,y(`%${pi}a`),r),GF(s)}Br(t,s);break}case cF:case iF:{pf(e,n),aa(t);break}default:Gs(e,n,y("value has no literal form"))}},LF=function(e,t,n,s){let r=n;for(;t[r]!==0&&as(jx,t[r])>=0;)r++;r-n>=jx.length&&ae(e,y("invalid format (repeated flags)")),tn(t[r])&&r++,tn(t[r])&&r++,t[r]===46&&(r++,tn(t[r])&&r++,tn(t[r])&&r++),tn(t[r])&&ae(e,y("invalid format (width or precision too long)")),s[0]=37;for(let o=0;o<r-n+1;o++)s[o+1]=t[n+o];return r},Xp=function(e,t){let n=e.length,s=t.length,r=e[n-1];for(let o=0;o<s;o++)e[o+n-1]=t[o];e[n+s-1]=r},HF=function(e){let t=aA(e),n=1,s=de(e,n),r=0,o=new Hr;for(gi(e,o);r<s.length;)if(s[r]!==nn)Ze(o,s[r++]);else if(s[++r]===nn)Ze(o,s[r++]);else{let a=[];switch(++n>t&&Gs(e,n,y("no value")),r=LF(e,s,r,a),String.fromCharCode(s[r++])){case"c":{let i=qs(e,n),l=typeof i=="bigint"?Number(i):i;Ze(o,l&255);break}case"d":case"i":case"o":case"u":case"x":case"X":{let i=qs(e,n);Xp(a,y(pi,!0)),Br(o,y(nA(a,i)));break}case"a":case"A":{Xp(a,y(pi,!0)),Br(o,mA(e,a,$p(e,n)));break}case"e":case"E":case"f":case"g":case"G":{let i=$p(e,n);Xp(a,y(pi,!0)),Br(o,y(tF(fi(String.fromCharCode(...a),i))));break}case"q":{qF(e,o,n);break}case"s":{let i=pf(e,n);a.length<=2||a[2]===0?aa(o):(Ut(e,i.length===VF(i),n,"string contains zeros"),as(a,46)<0&&i.length>=100?aa(o):(Br(o,y(fi(String.fromCharCode(...a),CF(i)))),di(e,1)));break}default:return ae(e,y("invalid option '%%%c' to 'format'"),s[r-1])}}return mi(o),1},Wp=0,Zx=16,en=8,rs=8,_A=(1<<rs)-1,jF=8,la=class{constructor(t){this.L=t,this.islittle=!0,this.maxalign=1}},os=0,ss=1,oa=2,ia=3,_i=4,bi=5,df=6,xi=7,hf=8,Yx=tn,bA=function(e,t){if(e.off>=e.s.length||!Yx(e.s[e.off]))return t;{let n=0;do n=n*10+(e.s[e.off++]-48);while(e.off<e.s.length&&Yx(e.s[e.off])&&n<=(ff-9)/10);return n}},ui=function(e,t,n){let s=bA(t,n);return(s>Zx||s<=0)&&ae(e.L,y("integral size (%d) out of limits [1,%d]"),s,Zx),s},$x=function(e,t){let n={opt:t.s[t.off++],size:0};switch(n.opt){case 98:return n.size=1,n.opt=os,n;case 66:return n.size=1,n.opt=ss,n;case 104:return n.size=2,n.opt=os,n;case 72:return n.size=2,n.opt=ss,n;case 108:return n.size=4,n.opt=os,n;case 76:return n.size=4,n.opt=ss,n;case 106:return n.size=en,n.opt=os,n;case 74:return n.size=en,n.opt=ss,n;case 84:return n.size=4,n.opt=ss,n;case 102:return n.size=4,n.opt=oa,n;case 100:return n.size=8,n.opt=oa,n;case 110:return n.size=8,n.opt=oa,n;case 105:return n.size=ui(e,t,4),n.opt=os,n;case 73:return n.size=ui(e,t,4),n.opt=ss,n;case 115:return n.size=ui(e,t,4),n.opt=_i,n;case 99:return n.size=bA(t,-1),n.size===-1&&ae(e.L,y("missing size for format option 'c'")),n.opt=ia,n;case 122:return n.opt=bi,n;case 120:return n.size=1,n.opt=df,n;case 88:return n.opt=xi,n;case 32:break;case 60:e.islittle=!0;break;case 62:e.islittle=!1;break;case 61:e.islittle=!0;break;case 33:e.maxalign=ui(e,t,jF);break;default:ae(e.L,y("invalid format option '%c'"),n.opt)}return n.opt=hf,n},gf=function(e,t,n){let s={opt:NaN,size:NaN,ntoalign:NaN},r=$x(e,n);s.size=r.size,s.opt=r.opt;let o=s.size;if(s.opt===xi)if(n.off>=n.s.length||n.s[n.off]===0)Gs(e.L,1,y("invalid next option for option 'X'"));else{let a=$x(e,n);o=a.size,a=a.opt,(a===ia||o===0)&&Gs(e.L,1,y("invalid next option for option 'X'"))}return o<=1||s.opt===ia?s.ntoalign=0:(o>e.maxalign&&(o=e.maxalign),(o&o-1)!==0&&Gs(e.L,1,y("format asks for alignment not power of 2")),s.ntoalign=o-(t&o-1)&o-1),s},zp=function(e,t,n,s,r){let o=fA(e,s),a=Gr.toBigInt(t);for(let i=0;i<s;i++){let l;i<8?l=Number(BigInt.asUintN(8,a>>BigInt(i*rs))):l=r?_A:0,o[n?i:s-1-i]=l}uA(e,s)},XF=function(e){let t=new Hr,n=new la(e),s={s:de(e,1),off:0},r=1,o=0;for(Zp(e),gi(e,t);s.off<s.s.length;){let a=gf(n,o,s),i=a.opt,l=a.size,u=a.ntoalign;for(o+=u+l;u-- >0;)Ze(t,Wp);switch(r++,i){case os:{let c=qs(e,r);if(l<en){let f=l*8-1,g=f<31?1<<f:Math.pow(2,f);Ut(e,-g<=c&&c<g,r,"integer overflow")}zp(t,c,n.islittle,l,c<0);break}case ss:{let c=qs(e,r);if(l<en){let f=l*8,g=f<31?1<<f:Math.pow(2,f);Ut(e,0<=c&&c<g,r,"unsigned overflow")}zp(t,c,n.islittle,l,!1);break}case oa:{let c=fA(t,l),f=$p(e,r),g=new DataView(c.buffer,c.byteOffset,c.byteLength);l===4?g.setFloat32(0,f,n.islittle):g.setFloat64(0,f,n.islittle),uA(t,l);break}case ia:{let c=de(e,r),f=c.length;for(Ut(e,f<=l,r,"string longer than given size"),Dr(t,c,f);f++<l;)Ze(t,Wp);break}case _i:{let c=de(e,r),f=c.length;Ut(e,l>=4||f<1<<l*rs,r,"string length does not fit in given size"),zp(t,f,n.islittle,l,0),Dr(t,c,f),o+=f;break}case bi:{let c=de(e,r),f=c.length;Ut(e,as(c,0)<0,r,"strings contains zeros"),Dr(t,c,f),Ze(t,0),o+=f+1;break}case df:Ze(t,Wp);case xi:case hf:r--;break}}return mi(t),1},WF=function(e){let t=de(e,1),n=t.length,s=new Uint8Array(n);for(let r=0;r<n;r++)s[r]=t[n-1-r];return Ds(e,s),1},zF=function(e){let t=de(e,1),n=t.length,s=new Uint8Array(n);for(let r=0;r<n;r++){let o=t[r];nf(o)&&(o=o|32),s[r]=o}return Ds(e,s),1},JF=function(e){let t=de(e,1),n=t.length,s=new Uint8Array(n);for(let r=0;r<n;r++){let o=t[r];tf(o)&&(o=o&223),s[r]=o}return Ds(e,s),1},ZF=function(e){let t=de(e,1),n=t.length,s=qs(e,2),r=NF(e,3,""),o=r.length;if(s<=0)lf(e,"");else{if(n+o<n||n+o>ff/s)return ae(e,y("resulting string too large"));{let a=s*n+(s-1)*o,i=new Hr,l=pA(e,i,a),u=0;for(;s-- >1;)l.set(t,u),u+=n,o>0&&(l.set(r,u),u+=o);l.set(t,u),dA(i,a)}}return 1},YF=function(e){let t=de(e,1),n=t.length,s=Lr(qr(e,2,1),n),r=Lr(qr(e,3,s),n);if(s<1&&(s=1),r>n&&(r=n),s>r)return 0;if(r-s>=Number.MAX_SAFE_INTEGER)return ae(e,"string slice too long");let o=r-s+1;uf(e,o,"string slice too long");for(let a=0;a<o;a++)Kt(e,t[s+a-1]);return o},$F=function(e){let t=new la(e),n={s:de(e,1),off:0},s=0;for(;n.off<n.s.length;){let r=gf(t,s,n),o=r.opt,a=r.size,i=r.ntoalign;switch(a+=i,Ut(e,s<=ff-a,1,"format result too large"),s+=a,o){case _i:case bi:Gs(e,1,"variable-length format");default:break}}return Kt(e,s),1},Qx=function(e,t,n,s,r){if(s<=4){let a=0;for(let i=s-1;i>=0;i--)a<<=rs,a|=t[n?i:s-1-i];if(r){let i=1<<s*rs-1;a=(a^i)-i}else a=a>>>0;return a}let o=0n;for(let a=s-1;a>=0;a--){let i=t[n?a:s-1-a];o=o<<BigInt(rs)|BigInt(i)}if(s>en){let a=t[n?en-1:s-en],l=r&&(a&128)!==0?_A:0;for(let u=en;u<s;u++)t[n?u:s-1-u]!==l&&ae(e,y("%d-byte integer does not fit into Lua Integer"),s);o=BigInt.asIntN(64,o)}else o=BigInt.asIntN(en*rs,o);return Gr.shrink(o)},QF=function(e,t,n,s){hA.lua_assert(t.length>=s);let r=new DataView(new ArrayBuffer(s));for(let o=0;o<s;o++)r.setUint8(o,t[o]);return s==4?r.getFloat32(0,n):r.getFloat64(0,n)},eM=function(e){let t=new la(e),n={s:de(e,1),off:0},s=de(e,2),r=s.length,o=Lr(qr(e,3,1),r)-1,a=0;for(Ut(e,o<=r&&o>=0,3,"initial position out of string");n.off<n.s.length;){let i=gf(t,o,n),l=i.opt,u=i.size,c=i.ntoalign;switch(o+c+u>r&&Gs(e,2,y("data string too short")),o+=c,uf(e,2,"too many results"),a++,l){case os:case ss:{let f=Qx(e,s.subarray(o),t.islittle,u,l===os);Kt(e,f);break}case oa:{let f=QF(e,s.subarray(o),t.islittle,u);bF(e,f);break}case ia:{Ds(e,s.subarray(o,o+u));break}case _i:{let f=Qx(e,s.subarray(o),t.islittle,u,0);Ut(e,o+f+u<=r,2,"data string too short"),Ds(e,s.subarray(o+u,o+u+f)),o+=f;break}case bi:{let f=as(s,0,o);f===-1&&(f=s.length-o),Ds(e,s.subarray(o,f)),o=f+1;break}case xi:case df:case hf:a--;break}o+=u}return Kt(e,o+1),a+1},ua=-1,xA=-2,AA=200,tM=y("^$*+?.([%-"),ca=class{constructor(t){this.src=null,this.src_init=null,this.src_end=null,this.p=null,this.p_end=null,this.L=t,this.matchdepth=NaN,this.level=NaN,this.capture=[]}},nM=function(e,t){return t=t-49,t<0||t>=e.level||e.capture[t].len===ua?ae(e.L,y("invalid capture index %%%d"),t+1):t},sM=function(e){let t=e.level;for(t--;t>=0;t--)if(e.capture[t].len===ua)return t;return ae(e.L,y("invalid pattern capture"))},eA=function(e,t){switch(e.p[t++]){case nn:return t===e.p_end&&ae(e.L,y("malformed pattern (ends with '%%')")),t+1;case 91:{e.p[t]===94&&t++;do t===e.p_end&&ae(e.L,y("malformed pattern (missing ']')")),e.p[t++]===nn&&t<e.p_end&&t++;while(e.p[t]!==93);return t+1}default:return t}},SA=function(e,t){switch(t){case 97:return Xx(e);case 65:return!Xx(e);case 99:return Qp(e);case 67:return!Qp(e);case 100:return tn(e);case 68:return!tn(e);case 103:return ef(e);case 71:return!ef(e);case 108:return tf(e);case 76:return!tf(e);case 112:return Wx(e);case 80:return!Wx(e);case 115:return zx(e);case 83:return!zx(e);case 117:return nf(e);case 85:return!nf(e);case 119:return sf(e);case 87:return!sf(e);case 120:return Jx(e);case 88:return!Jx(e);case 122:return e===0;case 90:return e!==0;default:return t===e}},rf=function(e,t,n,s){let r=!0;for(e.p[n+1]===94&&(r=!1,n++);++n<s;)if(e.p[n]===nn){if(n++,SA(t,e.p[n]))return r}else if(e.p[n+1]===45&&n+2<s){if(n+=2,e.p[n-2]<=t&&t<=e.p[n])return r}else if(e.p[n]===t)return r;return!r},mf=function(e,t,n,s){if(t>=e.src_end)return!1;{let r=e.src[t];switch(e.p[n]){case 46:return!0;case nn:return SA(r,e.p[n+1]);case 91:return rf(e,r,n,s-1);default:return e.p[n]===r}}},rM=function(e,t,n){if(n>=e.p_end-1&&ae(e.L,y("malformed pattern (missing arguments to '%%b'")),e.src[t]!==e.p[n])return null;{let s=e.p[n],r=e.p[n+1],o=1;for(;++t<e.src_end;)if(e.src[t]===r){if(--o===0)return t+1}else e.src[t]===s&&o++}return null},oM=function(e,t,n,s){let r=0;for(;mf(e,t+r,n,s);)r++;for(;r>=0;){let o=ls(e,t+r,s+1);if(o)return o;r--}return null},aM=function(e,t,n,s){for(;;){let r=ls(e,t,s+1);if(r!==null)return r;if(mf(e,t,n,s))t++;else return null}},tA=function(e,t,n,s){let r=e.level;r>=wF&&ae(e.L,y("too many captures")),e.capture[r]=e.capture[r]?e.capture[r]:{},e.capture[r].init=t,e.capture[r].len=s,e.level=r+1;let o;return(o=ls(e,t,n))===null&&e.level--,o},lM=function(e,t,n){let s=sM(e);e.capture[s].len=t-e.capture[s].init;let r;return(r=ls(e,t,n))===null&&(e.capture[s].len=ua),r},iM=function(e,t,n,s,r){return gA(e.subarray(t,t+r),n.subarray(s,s+r))},cM=function(e,t,n){n=nM(e,n);let s=e.capture[n].len;return e.src_end-t>=s&&iM(e.src,e.capture[n].init,e.src,t,s)?t+s:null},ls=function(e,t,n){let s=!1,r=!0;for(e.matchdepth--===0&&ae(e.L,y("pattern too complex"));r||s;)if(r=!1,n!==e.p_end)switch(s?void 0:e.p[n]){case 40:{e.p[n+1]===41?t=tA(e,t,n+2,xA):t=tA(e,t,n+1,ua);break}case 41:{t=lM(e,t,n+1);break}case 36:{if(n+1!==e.p_end){s=!0;break}t=e.src.length-t===0?t:null;break}case nn:{switch(e.p[n+1]){case 98:{t=rM(e,t,n+2),t!==null&&(n+=4,r=!0);break}case 102:{n+=2,e.p[n]!==91&&ae(e.L,y("missing '[' after '%%f' in pattern"));let o=eA(e,n),a=t===e.src_init?0:e.src[t-1];if(!rf(e,a,n,o-1)&&rf(e,t===e.src_end?0:e.src[t],n,o-1)){n=o,r=!0;break}t=null;break}case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:{t=cM(e,t,e.p[n+1]),t!==null&&(n+=2,r=!0);break}default:s=!0}break}default:{s=!1;let o=eA(e,n);if(mf(e,t,n,o))switch(e.p[o]){case 63:{let a;(a=ls(e,t+1,o+1))!==null?t=a:(n=o+1,r=!0);break}case 43:t++;case 42:t=oM(e,t,n,o);break;case 45:t=aM(e,t,n,o);break;default:t++,n=o,r=!0}else if(e.p[o]===42||e.p[o]===63||e.p[o]===45){n=o+1,r=!0;break}else t=null;break}}return e.matchdepth++,t},_f=function(e,t,n,s){if(t>=e.level)t===0?Jp(e.L,e.src.subarray(n,s),s-n):ae(e.L,y("invalid capture index %%%d"),t+1);else{let r=e.capture[t].len;r===ua&&ae(e.L,y("unfinished capture")),r===xA?Kt(e.L,e.capture[t].init-e.src_init+1):Jp(e.L,e.src.subarray(e.capture[t].init),r)}},hi=function(e,t,n){let s=e.level===0&&t!=null?1:e.level;uf(e.L,s,"too many captures");for(let r=0;r<s;r++)_f(e,r,t,n);return s},uM=function(e,t){for(let n=0;n<t;n++)if(as(tM,e[n])!==-1)return!1;return!0},bf=function(e,t,n,s,r,o){e.L=t,e.matchdepth=AA,e.src=n,e.src_init=0,e.src_end=s,e.p=r,e.p_end=o},xf=function(e){e.level=0,hA.lua_assert(e.matchdepth===AA)},pM=function(e,t,n){let s=n>>>0,r=t.length;if(r===0)return s;for(;(s=e.indexOf(t[0],s))!==-1;s++)if(gA(e.subarray(s,s+r),t))return s;return-1},EA=function(e,t){let n=de(e,1),s=de(e,2),r=n.length,o=s.length,a=Lr(qr(e,3,1),r);if(a<1)a=1;else if(a>r+1)return Zp(e),1;if(t&&(cf(e,4)||uM(s,o))){let i=pM(n.subarray(a-1),s,0);if(i>-1)return Kt(e,a+i),Kt(e,a+i+o-1),2}else{let i=new ca(e),l=a-1,u=s[0]===94;u&&(s=s.subarray(1),o--),bf(i,e,n,r,s,o);do{let c;if(xf(i),(c=ls(i,l,0))!==null)return t?(Kt(e,l+1),Kt(e,c),hi(i,null,0)+2):hi(i,l,c)}while(l++<i.src_end&&!u)}return Zp(e),1},fM=function(e){return EA(e,1)},dM=function(e){return EA(e,0)},of=class{constructor(){this.src=NaN,this.p=NaN,this.lastmatch=NaN,this.ms=new ca}},hM=function(e){let t=vF(e,TF(3));t.ms.L=e;for(let n=t.src;n<=t.ms.src_end;n++){xf(t.ms);let s;if((s=ls(t.ms,n,t.p))!==null&&s!==t.lastmatch)return t.src=t.lastmatch=s,hi(t.ms,n,s)}return 0},gM=function(e){let t=de(e,1),n=de(e,2),s=t.length,r=n.length;lA(e,2);let o=new of;return _F(e,o),bf(o.ms,e,t,s,n,r),o.src=0,o.p=0,o.lastmatch=null,mF(e,hM,3),1},mM=function(e,t,n,s){let r=e.L,o=iA(r,3),a=o.length;for(let i=0;i<a;i++)o[i]!==nn?Ze(t,o[i]):(i++,tn(o[i])?o[i]===48?Dr(t,e.src.subarray(n,s),s-n):(_f(e,o[i]-49,n,s),pf(r,-1),xF(r,-2),aa(t)):(o[i]!==nn&&ae(r,y("invalid use of '%c' in replacement string"),nn),Ze(t,o[i])))},_M=function(e,t,n,s,r){let o=e.L;switch(r){case af:{Yp(o,3);let a=hi(e,n,s);uF(o,a,1);break}case oA:{_f(e,0,n,s),dF(o,3);break}default:{mM(e,t,n,s);return}}cf(o,-1)?gF(o,-1)||ae(o,y("invalid replacement value (a %s)"),OF(o,-1)):(di(o,1),Jp(o,e.src.subarray(n,s),s-n)),aa(t)},bM=function(e){let t=de(e,1),n=t.length,s=de(e,2),r=s.length,o=null,a=cA(e,3),i=qr(e,4,n+1),l=s[0]===94,u=0,c=new ca(e),f=new Hr;for(Ut(e,a===sA||a===rA||a===af||a===oA,3,"string/function/table expected"),gi(e,f),l&&(s=s.subarray(1),r--),bf(c,e,t,n,s,r),t=0,s=0;u<i;){let g;if(xf(c),(g=ls(c,t,s))!==null&&g!==o)u++,_M(c,f,t,g,a),t=o=g;else if(t<c.src_end)Ze(f,c.src[t++]);else break;if(l)break}return Dr(f,c.src.subarray(t,c.src_end),c.src_end-t),mi(f),Kt(e,u),2},xM={byte:YF,char:KF,dump:MF,find:fM,format:HF,gmatch:gM,gsub:bM,len:UF,lower:zF,match:dM,pack:XF,packsize:$F,rep:ZF,reverse:WF,sub:PF,unpack:eM,upper:JF},AM=function(e){pF(e,0,1),lf(e,""),Yp(e,-2),SF(e,-2),di(e,1),Yp(e,-2),AF(e,-2,y("__index",!0)),di(e,1)},SM=function(e){return yF(e,xM),AM(e),1};kA.exports.luaopen_string=SM});var kf=P((t4,NA)=>{"use strict";var{lua_gettop:EM,lua_pushcfunction:kM,lua_pushfstring:vM,lua_pushinteger:Ls,lua_pushnil:TA,lua_pushstring:TM,lua_pushvalue:RM,lua_setfield:yM,lua_tointeger:NM}=qe(),{luaL_Buffer:OM,luaL_addvalue:CM,luaL_argcheck:Xr,luaL_buffinit:IM,luaL_checkinteger:RA,luaL_checkstack:wM,luaL_checkstring:da,luaL_error:Ai,luaL_newlib:VM,luaL_optinteger:pa,luaL_pushresult:PM}=rt(),{luastring_of:UM,to_luastring:Sf}=$e(),yA=1114111,jr=function(e){return(e&192)===128},fa=function(e,t){return e>=0?e:0-e>t?0:t+e+1},KM=[255,127,2047,65535],Ef=function(e,t){let n=e[t],s=0;if(n<128)s=n;else{let r=0;for(;n&64;){let o=e[t+ ++r];if((o&192)!==128)return null;s=s<<6|o&63,n<<=1}if(s|=(n&127)<<r*5,r>3||s>yA||s<=KM[r])return null;t+=r}return{code:s,pos:t+1}},FM=function(e){let t=0,n=da(e,1),s=n.length,r=fa(pa(e,2,1),s),o=fa(pa(e,3,-1),s);for(Xr(e,1<=r&&--r<=s,2,"initial position out of string"),Xr(e,--o<s,3,"final position out of string");r<=o;){let a=Ef(n,r);if(a===null)return TA(e),Ls(e,r+1),2;r=a.pos,t++}return Ls(e,t),1},MM=Sf("%U"),vA=function(e,t){let n=RA(e,t);Xr(e,0<=n&&n<=yA,t,"value out of range"),vM(e,MM,n)},BM=function(e){let t=EM(e);if(t===1)vA(e,1);else{let n=new OM;IM(e,n);for(let s=1;s<=t;s++)vA(e,s),CM(n);PM(n)}return 1},DM=function(e){let t=da(e,1),n=RA(e,2),s=n>=0?1:t.length+1;if(s=fa(pa(e,3,s),t.length),Xr(e,1<=s&&--s<=t.length,3,"position out of range"),n===0)for(;s>0&&jr(t[s]);)s--;else if(jr(t[s])&&Ai(e,"initial position is a continuation byte"),n<0)for(;n<0&&s>0;){do s--;while(s>0&&jr(t[s]));n++}else for(n--;n>0&&s<t.length;){do s++;while(jr(t[s]));n--}return n===0?Ls(e,s+1):TA(e),1},GM=function(e){let t=da(e,1),n=fa(pa(e,2,1),t.length),s=fa(pa(e,3,n),t.length);if(Xr(e,n>=1,2,"out of range"),Xr(e,s<=t.length,3,"out of range"),n>s)return 0;if(s-n>=Number.MAX_SAFE_INTEGER)return Ai(e,"string slice too long");let r=s-n+1;for(wM(e,r,"string slice too long"),r=0,n-=1;n<s;){let o=Ef(t,n);if(o===null)return Ai(e,"invalid UTF-8 code");Ls(e,o.code),n=o.pos,r++}return r},qM=function(e){let t=da(e,1),n=t.length,s=NM(e,2)-1;if(s<0)s=0;else if(s<n)for(s++;jr(t[s]);)s++;if(s>=n)return 0;{let r=Ef(t,s);return r===null||jr(t[r.pos])?Ai(e,Sf("invalid UTF-8 code")):(Ls(e,s+1),Ls(e,r.code),2)}},LM=function(e){return da(e,1),kM(e,qM),RM(e,1),Ls(e,0),3},HM={char:BM,codepoint:GM,codes:LM,len:FM,offset:DM},jM=UM(91,0,45,127,194,45,244,93,91,128,45,191,93,42),XM=function(e){return VM(e,HM),TM(e,jM),yM(e,-2,Sf("charpattern",!0)),1};NA.exports.luaopen_utf8=XM});var Nf=P((n4,BA)=>{"use strict";var{LUA_OPLT:IA,LUA_TNUMBER:WM,lua_compare:wA,lua_gettop:Tf,lua_isinteger:Hs,lua_isnoneornil:zM,lua_pushboolean:JM,lua_pushinteger:js,lua_pushliteral:OA,lua_pushnil:VA,lua_pushnumber:Te,lua_pushvalue:PA,lua_setfield:Si,lua_settop:Rf,lua_tointeger:vf,lua_tointegerx:ZM,lua_type:YM}=qe(),{luaL_argcheck:ki,luaL_argerror:$M,luaL_checkany:UA,luaL_checkinteger:ha,luaL_checknumber:Re,luaL_error:QM,luaL_newlib:eB,luaL_optnumber:tB}=rt(),{LUA_MAXINTEGER:KA,LUA_MININTEGER:nB,lua_numbertointeger:sB}=Ye(),{to_luastring:Ei}=$e(),ot=ct(),is,CA=(e,t)=>(e<<t|e>>>32-t)>>>0,FA=function(e){let t=e>>>0||1,n=new Array(4);for(let s=0;s<4;s++){t=t+2654435769>>>0;let r=t;r=Math.imul(r^r>>>16,2246822507),r=Math.imul(r^r>>>13,3266489909),n[s]=(r^r>>>16)>>>0}return n},ga=null,MA=function(){ga===null&&(ga=FA(is===void 0?Math.random()*4294967296>>>0:is>>>0||1));let e=ga,t=Math.imul(CA(e[1]*5,7),9)>>>0,n=e[1]<<9>>>0;return e[2]^=e[0],e[3]^=e[1],e[1]^=e[2],e[0]^=e[3],e[2]^=n,e[3]=CA(e[3],11),t},rB=function(e){is=e|0||1,is<0&&(is=is+4294967296>>>0),ga=FA(is)},oB=function(e){let t,n,s=ga===null&&is===void 0?Math.random():MA()/4294967296;switch(Tf(e)){case 0:return Te(e,s),1;case 1:{t=1,n=ha(e,1);break}case 2:{t=ha(e,1),n=ha(e,2);break}default:return QM(e,"wrong number of arguments")}ki(e,ot.le(t,n),1,"interval is empty");{let i=ot.le(0,t)||ot.le(n,ot.add(KA,t));ki(e,i,1,"interval too large")}let r=ot.toFloat(t),o=ot.toFloat(n);s*=o-r+1;let a=Math.floor(s)+r;return js(e,ot.normalize(a)),1},aB=function(e){return rB(Re(e,1)),MA(),0},lB=function(e){if(Hs(e,1)){let t=vf(e,1);ot.lt(t,0)&&(t=ot.neg(t)),js(e,t)}else Te(e,Math.abs(Re(e,1)));return 1},iB=function(e){return Te(e,Math.sin(Re(e,1))),1},cB=function(e){return Te(e,Math.cos(Re(e,1))),1},uB=function(e){return Te(e,Math.tan(Re(e,1))),1},pB=function(e){return Te(e,Math.asin(Re(e,1))),1},fB=function(e){return Te(e,Math.acos(Re(e,1))),1},dB=function(e){let t=Re(e,1),n=tB(e,2,1);return Te(e,Math.atan2(t,n)),1},hB=function(e){let t=ZM(e,1);return t!==!1?js(e,t):(UA(e,1),VA(e)),1},yf=function(e,t){let n=sB(t);n!==!1?js(e,n):Te(e,t)},gB=function(e){return Hs(e,1)?Rf(e,1):yf(e,Math.floor(Re(e,1))),1},mB=function(e){return Hs(e,1)?Rf(e,1):yf(e,Math.ceil(Re(e,1))),1},_B=function(e){return Te(e,Math.sqrt(Re(e,1))),1},bB=function(e){let t=ha(e,1),n=ha(e,2);return JM(e,ot.ult(t,n)),1},xB=function(e){let t=Re(e,1),n;if(zM(e,2))n=Math.log(t);else{let s=Re(e,2);s===2?n=Math.log2(t):s===10?n=Math.log10(t):n=Math.log(t)/Math.log(s)}return Te(e,n),1},AB=function(e){return Te(e,Math.exp(Re(e,1))),1},SB=function(e){return Te(e,Re(e,1)*(180/Math.PI)),1},EB=function(e){return Te(e,Re(e,1)*(Math.PI/180)),1},kB=function(e){let t=Tf(e),n=1;ki(e,t>=1,1,"value expected");for(let s=2;s<=t;s++)wA(e,s,n,IA)&&(n=s);return PA(e,n),1},vB=function(e){let t=Tf(e),n=1;ki(e,t>=1,1,"value expected");for(let s=2;s<=t;s++)wA(e,n,s,IA)&&(n=s);return PA(e,n),1},TB=function(e){return YM(e,1)===WM?Hs(e,1)?OA(e,"integer"):OA(e,"float"):(UA(e,1),VA(e)),1},RB=function(e){if(Hs(e,1)&&Hs(e,2)){let t=vf(e,1),n=vf(e,2);ot.eq(n,0)?$M(e,2,"zero"):js(e,ot.shrink(ot.toBigInt(t)%ot.toBigInt(n)))}else{let t=Re(e,1),n=Re(e,2);Te(e,t%n)}return 1},yB=function(e){if(Hs(e,1))Rf(e,1),Te(e,0);else{let t=Re(e,1),n=t<0?Math.ceil(t):Math.floor(t);yf(e,n),Te(e,t===n?0:t-n)}return 2},NB={abs:lB,acos:fB,asin:pB,atan:dB,ceil:mB,cos:cB,deg:SB,exp:AB,floor:gB,fmod:RB,log:xB,max:vB,min:kB,modf:yB,rad:EB,random:oB,randomseed:aB,sin:iB,sqrt:_B,tan:uB,tointeger:hB,type:TB,ult:bB},OB=function(e){return eB(e,NB),Te(e,Math.PI),Si(e,-2,Ei("pi",!0)),Te(e,1/0),Si(e,-2,Ei("huge",!0)),js(e,KA),Si(e,-2,Ei("maxinteger",!0)),js(e,nB),Si(e,-2,Ei("mininteger",!0)),1};BA.exports.luaopen_math=OB});var Mf=P((s4,aS)=>{"use strict";var{LUA_MASKCALL:HA,LUA_MASKCOUNT:CB,LUA_MASKLINE:jA,LUA_MASKRET:XA,LUA_REGISTRYINDEX:ba,LUA_TFUNCTION:Cf,LUA_TNIL:WA,LUA_TTABLE:IB,LUA_TUSERDATA:zA,lua_Debug:If,lua_call:wB,lua_checkstack:VB,lua_gethook:PB,lua_gethookcount:UB,lua_gethookmask:KB,lua_getinfo:JA,lua_getlocal:DA,lua_getmetatable:FB,lua_getstack:wf,lua_getupvalue:ZA,lua_getuservalue:MB,lua_insert:BB,lua_iscfunction:GA,lua_isfunction:YA,lua_isnoneornil:$A,lua_isthread:DB,lua_newtable:GB,lua_pcall:qB,lua_pop:LB,lua_pushboolean:HB,lua_pushfstring:jB,lua_pushinteger:Vf,lua_pushlightuserdata:QA,lua_pushliteral:XB,lua_pushnil:Wr,lua_pushstring:Xs,lua_pushvalue:yi,lua_rawgetp:Pf,lua_rawsetp:WB,lua_rotate:eS,lua_setfield:Ni,lua_sethook:zB,lua_setlocal:JB,lua_setmetatable:ZB,lua_settop:xa,lua_setupvalue:YB,lua_setuservalue:$B,lua_tojsstring:QB,lua_toproxy:eD,lua_tostring:tD,lua_tothread:nD,lua_touserdata:Uf,lua_type:tS,lua_upvalueid:sD,lua_upvaluejoin:rD,lua_xmove:Oi}=qe(),{luaL_argcheck:vi,luaL_argerror:Kf,luaL_checkany:Ci,luaL_checkinteger:Ws,luaL_checkstring:oD,luaL_checktype:Ii,luaL_error:aD,luaL_loadbuffer:lD,luaL_newlib:iD,luaL_optinteger:nS,luaL_optstring:cD,luaL_traceback:uD,lua_writestringerror:pD}=rt(),fD=ts(),{luastring_indexOf:sn,to_luastring:he}=$e(),Ff=(e,t,n)=>{e!==t&&!VB(t,n)&&aD(e,he("stack overflow",!0))},dD=e=>(yi(e,ba),1),hD=e=>(Ci(e,1),FB(e,1)||Wr(e),1),gD=e=>{let t=tS(e,2);return vi(e,t==WA||t==IB,2,"nil or table expected"),xa(e,2),ZB(e,1),1},mD=e=>(tS(e,1)!==zA?Wr(e):MB(e,1),1),_D=e=>(Ii(e,1,zA),Ci(e,2),xa(e,2),$B(e,1),1),zr=e=>DB(e,1)?{arg:1,thread:nD(e,1)}:{arg:0,thread:e},ma=(e,t,n)=>{Xs(e,n),Ni(e,-2,t)},_a=(e,t,n)=>{Vf(e,n),Ni(e,-2,t)},qA=(e,t,n)=>{HB(e,n),Ni(e,-2,t)},LA=(e,t,n)=>{e==t?eS(e,-2,1):Oi(t,e,1),Ni(e,-2,n)},bD=e=>{let t=new If,n=zr(e),s=n.arg,r=n.thread,o=cD(e,s+2,"flnStu");if(Ff(e,r,3),YA(e,s+1))o=jB(e,he(">%s"),o),yi(e,s+1),Oi(e,r,1);else if(!wf(r,Ws(e,s+1),t))return Wr(e),1;return JA(r,o,t)||Kf(e,s+2,"invalid option"),GB(e),sn(o,83)>-1&&(ma(e,he("source",!0),t.source),ma(e,he("short_src",!0),t.short_src),_a(e,he("linedefined",!0),t.linedefined),_a(e,he("lastlinedefined",!0),t.lastlinedefined),ma(e,he("what",!0),t.what)),sn(o,108)>-1&&_a(e,he("currentline",!0),t.currentline),sn(o,117)>-1&&(_a(e,he("nups",!0),t.nups),_a(e,he("nparams",!0),t.nparams),qA(e,he("isvararg",!0),t.isvararg)),sn(o,110)>-1&&(ma(e,he("name",!0),t.name),ma(e,he("namewhat",!0),t.namewhat)),sn(o,116)>-1&&qA(e,he("istailcall",!0),t.istailcall),sn(o,76)>-1&&LA(e,r,he("activelines",!0)),sn(o,102)>-1&&LA(e,r,he("func",!0)),1},xD=e=>{let t=zr(e),n=t.thread,s=t.arg,r=new If,o=Ws(e,s+2);if(YA(e,s+1))return yi(e,s+1),Xs(e,DA(e,null,o)),1;{let a=Ws(e,s+1);if(!wf(n,a,r))return Kf(e,s+1,"level out of range");Ff(e,n,1);let i=DA(n,r,o);return i?(Oi(n,e,1),Xs(e,i),eS(e,-2,1),2):(Wr(e),1)}},AD=e=>{let t=zr(e),n=t.thread,s=t.arg,r=new If,o=Ws(e,s+1),a=Ws(e,s+2);if(!wf(n,o,r))return Kf(e,s+1,"level out of range");Ci(e,s+3),xa(e,s+3),Ff(e,n,1),Oi(e,n,1);let i=JB(n,r,a);return i===null&&LB(n,1),Xs(e,i),1},sS=(e,t)=>{let n=Ws(e,2);Ii(e,1,Cf);let s=t?ZA(e,1,n):YB(e,1,n);return s===null?0:(Xs(e,s),BB(e,-(t+1)),t+1)},SD=e=>sS(e,1),ED=e=>(Ci(e,3),sS(e,0)),Of=(e,t,n)=>{let s=Ws(e,n);return Ii(e,t,Cf),vi(e,ZA(e,t,s)!==null,n,"invalid upvalue index"),s},kD=e=>{let t=Of(e,1,2);return QA(e,sD(e,1,t)),1},vD=e=>{let t=Of(e,1,2),n=Of(e,3,4);return vi(e,!GA(e,1),1,"Lua function expected"),vi(e,!GA(e,3),3,"Lua function expected"),rD(e,1,t,3,n),0},Ti=he("__hooks__",!0),TD=["call","return","line","count","tail call"].map(e=>he(e)),rS=(e,t)=>{Pf(e,ba,Ti);let s=Uf(e,-1).get(e);s&&(s(e),Xs(e,TD[t.event]),t.currentline>=0?Vf(e,t.currentline):Wr(e),fD.lua_assert(JA(e,he("lS"),t)),wB(e,2,0))},RD=(e,t)=>{let n=0;return sn(e,99)>-1&&(n|=HA),sn(e,114)>-1&&(n|=XA),sn(e,108)>-1&&(n|=jA),t>0&&(n|=CB),n},yD=(e,t)=>{let n=0;return e&HA&&(t[n++]=99),e&XA&&(t[n++]=114),e&jA&&(t[n++]=108),t.subarray(0,n)},ND=e=>{let t,n,s,r=zr(e),o=r.thread,a=r.arg;if($A(e,a+1))xa(e,a+1),s=null,t=0,n=0;else{let u=oD(e,a+2);Ii(e,a+1,Cf),n=nS(e,a+3,0),s=rS,t=RD(u,n)}let i;Pf(e,ba,Ti)===WA?(i=new WeakMap,QA(e,i),WB(e,ba,Ti)):i=Uf(e,-1);let l=eD(e,a+1);return i.set(o,l),zB(o,s,t,n),0},OD=e=>{let n=zr(e).thread,s=new Uint8Array(5),r=KB(n),o=PB(n);return o===null?Wr(e):o!==rS?XB(e,"external hook"):(Pf(e,ba,Ti),Uf(e,-1).get(n)(e)),Xs(e,yD(r,s)),Vf(e,UB(n)),3},CD=e=>{let t=zr(e),n=t.thread,s=t.arg,r=tD(e,s+1);if(r===null&&!$A(e,s+1))yi(e,s+1);else{let o=nS(e,s+2,e===n?1:0);uD(e,n,r,o)}return 1},oS={gethook:OD,getinfo:bD,getlocal:xD,getmetatable:hD,getregistry:dD,getupvalue:SD,getuservalue:mD,sethook:ND,setlocal:AD,setmetatable:gD,setupvalue:ED,setuservalue:_D,traceback:CD,upvalueid:kD,upvaluejoin:vD},Ri;if(typeof process<"u"){let e=ds("readline-sync");e.setDefaultOptions({prompt:"lua_debug> "}),Ri=()=>e.prompt()}else typeof window<"u"&&(Ri=()=>{let e=prompt("lua_debug>","");return e!==null?e:""});Ri&&(oS.debug=e=>{for(;;){let t=Ri();if(t==="cont")return 0;if(t.length===0)continue;let n=he(t);(lD(e,n,n.length,he("=(debug command)",!0))||qB(e,0,0,0))&&pD(QB(e,-1),`
`),xa(e,0)}});var ID=e=>(iD(e,oS),1);aS.exports.luaopen_debug=ID});var $f=P((r4,MS)=>{"use strict";var{LUA_DIRSEP:wi,LUA_EXEC_DIR:wD,LUA_JSPATH_DEFAULT:VD,LUA_PATH_DEFAULT:PD,LUA_PATH_MARK:hS,LUA_PATH_SEP:zs}=Ye(),{LUA_OK:Jr,LUA_REGISTRYINDEX:us,LUA_TNIL:Lf,LUA_TTABLE:UD,lua_callk:gS,lua_createtable:mS,lua_getfield:Vn,lua_insert:Hf,lua_isfunction:KD,lua_isnil:FD,lua_isstring:MD,lua_newtable:BD,lua_pop:wn,lua_pushboolean:_S,lua_pushcclosure:DD,lua_pushcfunction:GD,lua_pushfstring:Zr,lua_pushglobaltable:qD,lua_pushlightuserdata:LD,lua_pushliteral:bS,lua_pushlstring:jf,lua_pushnil:xS,lua_pushstring:rn,lua_pushvalue:Vi,lua_rawgeti:HD,lua_rawgetp:AS,lua_rawseti:SS,lua_rawsetp:jD,lua_remove:Bf,lua_setfield:cs,lua_setmetatable:XD,lua_settop:WD,lua_toboolean:ES,lua_tostring:Yr,lua_touserdata:zD,lua_upvalueindex:kS}=qe(),{LUA_LOADED_TABLE:vS,LUA_PRELOAD_TABLE:TS,luaL_Buffer:RS,luaL_addvalue:yS,luaL_buffinit:NS,luaL_checkstring:Pn,luaL_error:Pi,luaL_getsubtable:lS,luaL_gsub:Aa,luaL_len:JD,luaL_loadfile:ZD,luaL_newlib:YD,luaL_optstring:iS,luaL_pushresult:OS,luaL_setfuncs:$D}=rt(),QD=ts(),{luastring_indexOf:Xf,to_jsstring:Wf,to_luastring:F,to_uristring:CS}=$e(),eG=Qf(),IS=(function(){return typeof process<"u"?global:typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:(0,eval)("this")})(),zf=F("__JSLIBS__"),tG="LUA_PATH",nG="LUA_JSPATH",wS="-",VS=wi,sG=wi,cS=F("luaopen_"),rG=F("_"),oG="open",uS=F(""),Df;if(typeof process>"u")Df=function(e,t,n){t=CS(t);let s=new XMLHttpRequest;if(s.open("GET",t,!1),s.send(),s.status<200||s.status>=300)return rn(e,F(`${s.status}: ${s.statusText}`)),null;let r=s.response;/\/\/[#@] sourceURL=/.test(r)||(r+=" //# sourceURL="+t);let o;try{o=Function("fengari",r)}catch(i){return rn(e,F(`${i.name}: ${i.message}`)),null}let a=o(eG);return typeof a=="function"||typeof a=="object"&&a!==null?a:a===void 0?IS:(rn(e,F(`library returned unexpected type (${typeof a})`)),null)};else{let e=ds("path");Df=function(t,n,s){n=Wf(n),n=e.resolve(process.cwd(),n);try{return ds(n)}catch(r){return rn(t,F(r.message)),null}}}var aG=function(e,t,n){let s=t[Wf(n)];return s&&typeof s=="function"?s:(Zr(e,F("undefined symbol: %s"),n),null)},lG=function(e){Vn(e,us,F("LUA_NOENV"));let t=ES(e,-1);return wn(e,1),t},Gf;if(typeof process<"u"){let e=(qo(),ka(Go));Gf=function(t){try{let n=e.openSync(t,"r");e.closeSync(n)}catch{return!1}return!0}}else Gf=function(e){e=CS(e);let t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(),t.status>=200&&t.status<=299};var PS=1,Jf=2,qf=function(e,t,n){let s=cG(e,t);if(s===null){if(s=Df(e,t,n[0]===42),s===null)return PS;uG(e,t,s)}if(n[0]===42)return _S(e,1),0;{let r=aG(e,s,n);return r===null?Jf:(GD(e,r),0)}},iG=function(e){let t=Pn(e,1),n=Pn(e,2),s=qf(e,t,n);return s===0?1:(xS(e),Hf(e,-2),bS(e,s===PS?oG:"init"),3)},pS=(function(){return typeof process<"u"?process.env:IS})(),fS=function(e,t,n,s){let r=`${n}${QD.LUA_VERSUFFIX}`;rn(e,F(r));let o=pS[r];o===void 0&&(o=pS[n]),o===void 0||lG(e)?rn(e,s):(o=Aa(e,F(o),F(zs+zs,!0),F(zs+Wf(uS)+zs,!0)),Aa(e,o,uS,s),Bf(e,-2)),cs(e,-3,t),wn(e,1)},cG=function(e,t){AS(e,us,zf),Vn(e,-1,t);let n=zD(e,-1);return wn(e,2),n},uG=function(e,t,n){AS(e,us,zf),LD(e,n),Vi(e,-1),cs(e,-3,t),SS(e,-2,JD(e,-2)+1),wn(e,1)},pG=function(e,t){for(;t[0]===zs.charCodeAt(0);)t=t.subarray(1);if(t.length===0)return null;let n=Xf(t,zs.charCodeAt(0));return n<0&&(n=t.length),jf(e,t,n),t.subarray(n)},US=function(e,t,n,s,r){let o=new RS;for(NS(e,o),s[0]!==0&&(t=Aa(e,t,s,r));(n=pG(e,n))!==null;){let a=Aa(e,Yr(e,-1),F(hS,!0),t);if(Bf(e,-2),Gf(a))return a;Zr(e,F(`
	no file '%s'`),a),Bf(e,-2),yS(o)}return OS(o),null},fG=function(e){return US(e,Pn(e,1),Pn(e,2),iS(e,3,"."),iS(e,4,wi))!==null?1:(xS(e),Hf(e,-2),2)},Zf=function(e,t,n,s){Vn(e,kS(1),n);let r=Yr(e,-1);return r===null&&Pi(e,F("'package.%s' must be a string"),n),US(e,t,r,F("."),s)},Yf=function(e,t,n){return t?(rn(e,n),2):Pi(e,F(`error loading module '%s' from file '%s':
	%s`),Yr(e,1),n,Yr(e,-1))},dG=function(e){let t=Pn(e,1),n=Zf(e,t,F("path",!0),F(sG,!0));return n===null?1:Yf(e,ZD(e,n)===Jr,n)},KS=function(e,t,n){let s;n=Aa(e,n,F("."),rG);let r=Xf(n,wS.charCodeAt(0));if(r>=0){s=jf(e,n,r),s=Zr(e,F("%s%s"),cS,s);let o=qf(e,t,s);if(o!==Jf)return o;n=r+1}return s=Zr(e,F("%s%s"),cS,n),qf(e,t,s)},hG=function(e){let t=Pn(e,1),n=Zf(e,t,F("jspath",!0),F(VS,!0));return n===null?1:Yf(e,KS(e,n,t)===0,n)},gG=function(e){let t=Pn(e,1),n=Xf(t,46),s;if(n<0)return 0;jf(e,t,n);let r=Zf(e,Yr(e,-1),F("jspath",!0),F(VS,!0));return r===null?1:(s=KS(e,r,t))!==0?s!=Jf?Yf(e,0,r):(Zr(e,F(`
	no module '%s' in file '%s'`),t,r),1):(rn(e,r),2)},mG=function(e){let t=Pn(e,1);return Vn(e,us,TS),Vn(e,-1,t)===Lf&&Zr(e,F(`
	no field package.preload['%s']`),t),1},_G=function(e,t,n,s){let r=new RS;return NS(e,r),Vn(e,kS(1),F("searchers",!0))!==UD&&Pi(e,F("'package.searchers' must be a table")),FS(e,Jr,{name:t,i:1,msg:r,ctx:n,k:s})},FS=function(e,t,n){for(;t===Jr?(HD(e,3,n.i)===Lf&&(wn(e,1),OS(n.msg),Pi(e,F("module '%s' not found:%s"),n.name,Yr(e,-1))),rn(e,n.name),gS(e,1,2,n,FS)):t=Jr,!KD(e,-2);n.i++)MD(e,-2)?(wn(e,1),yS(n.msg)):wn(e,2);return n.k(e,Jr,n.ctx)},bG=function(e){let t=Pn(e,1);return WD(e,1),Vn(e,us,vS),Vn(e,2,t),ES(e,-1)?1:(wn(e,1),_G(e,t,t,xG))},xG=function(e,t,n){return rn(e,n),Hf(e,-2),gS(e,2,1,n,dS),dS(e,Jr,n)},dS=function(e,t,n){let s=n;return FD(e,-1)||cs(e,2,s),Vn(e,2,s)==Lf&&(_S(e,1),Vi(e,-1),cs(e,2,s)),1},AG={loadlib:iG,searchpath:fG},SG={require:bG},EG=function(e){let t=[mG,dG,hG,gG,null];mS(e);for(let n=0;t[n];n++)Vi(e,-2),DD(e,t[n],1),SS(e,-2,n+1);cs(e,-2,F("searchers",!0))},kG=function(e){BD(e),mS(e,0,1),XD(e,-2),jD(e,us,zf)},vG=function(e){return kG(e),YD(e,AG),EG(e),fS(e,F("path",!0),tG,PD),fS(e,F("jspath",!0),nG,VD),bS(e,wi+`
`+zs+`
`+hS+`
`+wD+`
`+wS+`
`),cs(e,-2,F("config",!0)),lS(e,us,vS),cs(e,-2,F("loaded",!0)),lS(e,us,TS),cs(e,-2,F("preload",!0)),qD(e),Vi(e,-2),$D(e,SG,1),wn(e,1),1};MS.exports.luaopen_package=vG});var ed=P((a4,BS)=>{var{lua_pushinteger:TG,lua_pushliteral:Js,lua_setfield:ps}=qe(),{luaL_newlib:RG}=rt(),{FENGARI_AUTHORS:yG,FENGARI_COPYRIGHT:NG,FENGARI_RELEASE:OG,FENGARI_VERSION:CG,FENGARI_VERSION_MAJOR:IG,FENGARI_VERSION_MINOR:wG,FENGARI_VERSION_NUM:VG,FENGARI_VERSION_RELEASE:PG,to_luastring:fs}=$e(),UG=function(e){return RG(e,{}),Js(e,yG),ps(e,-2,fs("AUTHORS")),Js(e,NG),ps(e,-2,fs("COPYRIGHT")),Js(e,OG),ps(e,-2,fs("RELEASE")),Js(e,CG),ps(e,-2,fs("VERSION")),Js(e,IG),ps(e,-2,fs("VERSION_MAJOR")),Js(e,wG),ps(e,-2,fs("VERSION_MINOR")),TG(e,VG),ps(e,-2,fs("VERSION_NUM")),Js(e,PG),ps(e,-2,fs("VERSION_RELEASE")),1};BS.exports.luaopen_fengari=UG});var GS=P((l4,DS)=>{"use strict";var{lua_pop:KG}=qe(),{luaL_requiref:FG}=rt(),{to_luastring:MG}=$e(),At={},BG=function(e){for(let t in At)FG(e,MG(t),At[t],1),KG(e,1)};DS.exports.luaL_openlibs=BG;var on=ts(),{luaopen_base:DG}=Tp(),{luaopen_coroutine:GG}=Np(),{luaopen_debug:qG}=Mf(),{luaopen_math:LG}=Nf(),{luaopen_package:HG}=$f(),{luaopen_os:jG}=jp(),{luaopen_string:XG}=Af(),{luaopen_table:WG}=Up(),{luaopen_utf8:zG}=kf();At._G=DG,At[on.LUA_LOADLIBNAME]=HG;At[on.LUA_COLIBNAME]=GG;At[on.LUA_TABLIBNAME]=WG;At[on.LUA_OSLIBNAME]=jG;At[on.LUA_STRLIBNAME]=XG;At[on.LUA_MATHLIBNAME]=LG;At[on.LUA_UTF8LIBNAME]=zG;At[on.LUA_DBLIBNAME]=qG;typeof process<"u"&&(At[on.LUA_IOLIBNAME]=Gp().luaopen_io);var{luaopen_fengari:JG}=ed();At[on.LUA_FENGARILIBNAME]=JG});var ts=P((i4,$)=>{"use strict";var{LUA_VERSION_MAJOR:ZG,LUA_VERSION_MINOR:YG}=qe(),$G="_"+ZG+"_"+YG;$.exports.LUA_VERSUFFIX=$G;$.exports.lua_assert=function(e){};$.exports.luaopen_base=Tp().luaopen_base;var QG="coroutine";$.exports.LUA_COLIBNAME=QG;$.exports.luaopen_coroutine=Np().luaopen_coroutine;var eq="table";$.exports.LUA_TABLIBNAME=eq;$.exports.luaopen_table=Up().luaopen_table;typeof process<"u"&&($.exports.LUA_IOLIBNAME="io",$.exports.luaopen_io=Gp().luaopen_io);var tq="os";$.exports.LUA_OSLIBNAME=tq;$.exports.luaopen_os=jp().luaopen_os;var nq="string";$.exports.LUA_STRLIBNAME=nq;$.exports.luaopen_string=Af().luaopen_string;var sq="utf8";$.exports.LUA_UTF8LIBNAME=sq;$.exports.luaopen_utf8=kf().luaopen_utf8;var rq="bit32";$.exports.LUA_BITLIBNAME=rq;var oq="math";$.exports.LUA_MATHLIBNAME=oq;$.exports.luaopen_math=Nf().luaopen_math;var aq="debug";$.exports.LUA_DBLIBNAME=aq;$.exports.luaopen_debug=Mf().luaopen_debug;var lq="package";$.exports.LUA_LOADLIBNAME=lq;$.exports.luaopen_package=$f().luaopen_package;var iq="fengari";$.exports.LUA_FENGARILIBNAME=iq;$.exports.luaopen_fengari=ed().luaopen_fengari;var cq=GS();$.exports.luaL_openlibs=cq.luaL_openlibs});var Qf=P((c4,ye)=>{"use strict";var at=$e();ye.exports.FENGARI_AUTHORS=at.FENGARI_AUTHORS;ye.exports.FENGARI_COPYRIGHT=at.FENGARI_COPYRIGHT;ye.exports.FENGARI_RELEASE=at.FENGARI_RELEASE;ye.exports.FENGARI_VERSION=at.FENGARI_VERSION;ye.exports.FENGARI_VERSION_MAJOR=at.FENGARI_VERSION_MAJOR;ye.exports.FENGARI_VERSION_MINOR=at.FENGARI_VERSION_MINOR;ye.exports.FENGARI_VERSION_NUM=at.FENGARI_VERSION_NUM;ye.exports.FENGARI_VERSION_RELEASE=at.FENGARI_VERSION_RELEASE;ye.exports.luastring_eq=at.luastring_eq;ye.exports.luastring_indexOf=at.luastring_indexOf;ye.exports.luastring_of=at.luastring_of;ye.exports.to_jsstring=at.to_jsstring;ye.exports.to_luastring=at.to_luastring;ye.exports.to_uristring=at.to_uristring;var uq=Ye(),pq=qe(),fq=rt(),dq=ts();ye.exports.luaconf=uq;ye.exports.lua=pq;ye.exports.lauxlib=fq;ye.exports.lualib=dq});var hq=tE(Qf(),1);var qS={cli:`-- This Script is Part of the Prometheus Obfuscator by levno-710
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
					StringsOnly = true
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
	["Medium"] = {
		LuaVersion = "Lua51",
		VarNamePrefix = "",
		NameGenerator = "MangledShuffled",
		PrettyPrint = false,
		Seed = 0,
		Steps = {
			{ Name = "EncryptStrings", Settings = {} },
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
					LocalWrapperThreshold = 0,
				},
			},
			{ Name = "NumbersToExpressions", Settings = {} },
			{ Name = "WrapInFunction", Settings = {} },
		},
	},

	-- Strong obfuscation, high performance loss.
	-- NOTE: The second Vmify pass was replaced with ProxifyLocals + a full
	-- ConstantArray pass. The original double-Vmify triggered a genuine
	-- upstream compiler bug (Prometheus issue #71, open since 2022, never
	-- fixed): the Vmify compiler cannot correctly compile its own VM-
	-- interpreter output -- an upvalue slot ends up nil in the generated
	-- dispatch code, producing "attempt to index a nil value" at runtime
	-- on 100% of inputs. Replacing the second Vmify with ProxifyLocals
	-- (wraps every local in a proxy object) plus a full ConstantArray
	-- (hoists ALL constants, not just strings) eliminates the crash while
	-- preserving -- and in fact increasing -- obfuscation strength (output
	-- is ~35-56% larger than the original broken preset). See CHANGELOG.md.
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
`};var{lua:X,lauxlib:Sa,lualib:XS,to_luastring:St,to_jsstring:$r}=hq;function gq(){let e=Sa.luaL_newstate();XS.luaL_openlibs(e),X.lua_pushjsfunction(e,t=>{let n=X.lua_gettop(t),s=[];for(let r=1;r<=n;r++)X.lua_getglobal(t,St("tostring")),X.lua_pushvalue(t,r),X.lua_call(t,1,1),s.push($r(X.lua_tostring(t,-1),void 0,void 0,"?")),X.lua_pop(t,1);return console.log(s.join("	")),0}),X.lua_setglobal(e,St("print"));for(let[t,n]of Object.entries(qS)){if(X.lua_getglobal(e,St("package")),X.lua_getfield(e,-1,St("preload")),Sa.luaL_loadbuffer(e,St(n),St("="+t))!==X.LUA_OK){let r=$r(X.lua_tostring(e,-1));throw new Error(`Failed to compile embedded module "${t}": ${r}`)}X.lua_setfield(e,-2,St(t)),X.lua_pop(e,2)}return e}function mq(e){return JSON.stringify(e)}var LS=["Minify","Weak","Medium","Strong"];function HS(e,t,n){let s=gq(),o=`
local Prometheus = require("prometheus")
Prometheus.Logger.logLevel = Prometheus.Logger.LogLevel.Error
local pipeline = Prometheus.Pipeline:fromConfig(${n!=null?`(function() local p = {} for k, v in pairs(Prometheus.Presets["${t}"]) do p[k] = v end p.Seed = ${n} return p end)()`:`Prometheus.Presets["${t}"]`})
local ok, out = pcall(function() return pipeline:apply(${mq(e)}, "input.lua") end)
if not ok then
  error(out, 0)
end
return out
`;return Sa.luaL_dostring(s,St(o))!==X.LUA_OK?{ok:!1,error:$r(X.lua_tostring(s,-1),void 0,void 0,"?")}:{ok:!0,code:$r(X.lua_tostring(s,-1),void 0,void 0,"?")}}function _q(e,t){if(e===t)return!0;let n=e.split(/\s+/),s=t.split(/\s+/);if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++){let o=n[r],a=s[r];if(o===a)continue;let i=Number(o),l=Number(a),u=o!==""&&!Number.isNaN(i)&&/^[-+]?\d/.test(o),c=a!==""&&!Number.isNaN(l)&&/^[-+]?\d/.test(a);if(u&&c){if(i===l)continue;return!1}return!1}return!0}function jS(e){let t=Sa.luaL_newstate();XS.luaL_openlibs(t),X.lua_pushnil(t),X.lua_setglobal(t,St("io")),X.lua_pushnil(t),X.lua_setglobal(t,St("os"));let n=[];return X.lua_pushjsfunction(t,r=>{let o=X.lua_gettop(r),a=[];for(let i=1;i<=o;i++)X.lua_getglobal(r,St("tostring")),X.lua_pushvalue(r,i),X.lua_call(r,1,1),a.push($r(X.lua_tostring(r,-1),void 0,void 0,"?")),X.lua_pop(r,1);return n.push(a.join("	")),0}),X.lua_setglobal(t,St("print")),Sa.luaL_dostring(t,St(e))!==X.LUA_OK?{ok:!1,error:$r(X.lua_tostring(t,-1),void 0,void 0,"?"),printed:n.join(`
`)}:{ok:!0,error:null,printed:n.join(`
`)}}function WS(e,t,{maxAttempts:n=8,onLog:s=()=>{}}={}){if(!LS.includes(t))throw new Error(`Unknown preset "${t}". Must be one of ${LS.join(", ")}.`);let r=t==="Medium"||t==="Strong",o=null;if(r){let u=jS(e);u.ok?(o=u.printed,s(`[${t}] Baseline captured from original script for output comparison.`)):s(`[${t}] Original script doesn't run standalone in a bare sandbox (likely relies on an external environment) \u2014 self-test will only catch crashes, not silent corruption.`)}let a=null,i=r?n:1;for(let u=1;u<=i;u++){s(`[${t}] Obfuscation attempt ${u}${r?`/${n}`:""}...`);let c=r?Date.now()%2147483647+u*104729:null,f=HS(e,t,c);if(!f.ok){a=f.error,s(`[${t}] Obfuscation itself failed: ${f.error}`);continue}if(!r)return s(`[${t}] Done.`),{ok:!0,code:f.code,attempts:u,warning:null};s(`[${t}] Verifying output executes correctly in a sandbox...`);let g=jS(f.code);if(!g.ok){a=g.error,s(`[${t}] Attempt ${u} produced code that fails at runtime during sandbox verification: ${g.error}`);continue}if(o!==null&&!_q(g.printed,o)){a="obfuscated output behaves differently than the original (silent corruption, not a crash)",s(`[${t}] Attempt ${u} ran without error but its output doesn't match the original's \u2014 possible silent corruption. Retrying.`);continue}return s(`[${t}] Verified OK on attempt ${u}${o!==null?" (output matches original)":""}.`),{ok:!0,code:f.code,attempts:u,warning:null}}s(`[${t}] Could not get a self-verified result after ${n} attempts. Returning best-effort output with a warning.`);let l=HS(e,t,Date.now());return{ok:l.ok,code:l.ok?l.code:null,attempts:n,warning:l.ok?`This script could not be self-verified after ${n} attempts \u2014 most recently: ${a}. The code below is best-effort and should be tested in your target runtime before you rely on it. Try the "Weak" or "Medium" preset for lighter-weight alternatives.`:`Obfuscation failed: ${l.error}`}}self.onmessage=e=>{let{source:t,preset:n,maxAttempts:s}=e.data||{};try{let r=WS(t,n,{maxAttempts:s,onLog:o=>self.postMessage({type:"log",message:o})});self.postMessage({type:"result",result:r})}catch(r){self.postMessage({type:"error",error:r instanceof Error?r.message:String(r)})}};})();
/**
@license MIT

Copyright © 2017-2019 Benoit Giannangeli
Copyright © 2017-2019 Daurnimator
Copyright © 1994–2017 Lua.org, PUC-Rio.
*/
