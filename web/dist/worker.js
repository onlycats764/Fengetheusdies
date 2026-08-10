(()=>{var RS=Object.create;var na=Object.defineProperty;var yS=Object.getOwnPropertyDescriptor;var NS=Object.getOwnPropertyNames;var OS=Object.getPrototypeOf,CS=Object.prototype.hasOwnProperty;var Wn=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var wS=(e,t)=>()=>(e&&(t=e(e=0)),t);var I=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),VS=(e,t)=>{for(var n in t)na(e,n,{get:t[n],enumerable:!0})},Mf=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of NS(t))!CS.call(e,r)&&r!==n&&na(e,r,{get:()=>t[r],enumerable:!(s=yS(t,r))||s.enumerable});return e};var IS=(e,t,n)=>(n=e!=null?RS(OS(e)):{},Mf(t||!e||!e.__esModule?na(n,"default",{value:e,enumerable:!0}):n,e)),sa=e=>Mf(na({},"__esModule",{value:!0}),e);var je=I((iG,F)=>{"use strict";var ra=typeof process<"u"&&process.env&&process.env.FENGARICONF?JSON.parse(process.env.FENGARICONF):{},{LUA_VERSION_MAJOR:PS,LUA_VERSION_MINOR:US,to_luastring:ws}=ue(),KS=";";F.exports.LUA_PATH_SEP=KS;var FS="?";F.exports.LUA_PATH_MARK=FS;var MS="!";F.exports.LUA_EXEC_DIR=MS;var Vs=PS+"."+US;F.exports.LUA_VDIR=Vs;if(typeof process>"u"){F.exports.LUA_DIRSEP="/";let t="./lua/"+Vs+"/";F.exports.LUA_LDIR=t;let n=t;F.exports.LUA_JSDIR=n;let s=ws(t+"?.lua;"+t+"?/init.lua;./?.lua;./?/init.lua");F.exports.LUA_PATH_DEFAULT=s;let r=ws(n+"?.js;"+n+"loadall.js;./?.js");F.exports.LUA_JSPATH_DEFAULT=r}else if(Wn("os").platform()==="win32"){F.exports.LUA_DIRSEP="\\";let t="!\\lua\\";F.exports.LUA_LDIR=t;let n="!\\";F.exports.LUA_JSDIR=n;let s="!\\..\\share\\lua\\"+Vs+"\\";F.exports.LUA_SHRDIR=s;let r=ws(t+"?.lua;"+t+"?\\init.lua;"+n+"?.lua;"+n+"?\\init.lua;"+s+"?.lua;"+s+"?\\init.lua;.\\?.lua;.\\?\\init.lua");F.exports.LUA_PATH_DEFAULT=r;let o=ws(n+"?.js;"+n+"..\\share\\lua\\"+Vs+"\\?.js;"+n+"loadall.js;.\\?.js");F.exports.LUA_JSPATH_DEFAULT=o}else{F.exports.LUA_DIRSEP="/";let t="/usr/local/";F.exports.LUA_ROOT=t;let n="/usr/",s=t+"share/lua/"+Vs+"/",r=n+"share/lua/"+Vs+"/";F.exports.LUA_LDIR=s;let o=s;F.exports.LUA_JSDIR=o;let a=r,l=ws(s+"?.lua;"+s+"?/init.lua;"+r+"?.lua;"+r+"?/init.lua;./?.lua;./?/init.lua");F.exports.LUA_PATH_DEFAULT=l;let i=ws(o+"?.js;"+o+"loadall.js;"+a+"?.js;"+a+"loadall.js;./?.js");F.exports.LUA_JSPATH_DEFAULT=i}var BS=ra.LUA_COMPAT_FLOATSTRING||!1,DS=2147483647,gi=-2147483648,GS=ra.LUAI_MAXSTACK||1e6,qS=ra.LUA_IDSIZE||59,LS=function(e){return String(e)},HS=function(e){return String(Number(e.toPrecision(14)))},jS=function(e){return e>=gi&&e<-gi?e:!1},Bf="",XS="",WS=`%${Bf}d`,zS="%.14g",JS=function(){return 46},ZS=ra.LUAL_BUFFERSIZE||8192,YS=function(e){if(e===0)return[e,0];var t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e);var n=t.getUint32(0)>>>20&2047;n===0&&(t.setFloat64(0,e*Math.pow(2,64)),n=(t.getUint32(0)>>>20&2047)-64);var s=n-1022,r=Df(e,-s);return[r,s]},Df=function(e,t){for(var n=Math.min(3,Math.ceil(Math.abs(t)/1023)),s=e,r=0;r<n;r++)s*=Math.pow(2,Math.floor((t+r)/n));return s};F.exports.LUAI_MAXSTACK=GS;F.exports.LUA_COMPAT_FLOATSTRING=BS;F.exports.LUA_IDSIZE=qS;F.exports.LUA_INTEGER_FMT=WS;F.exports.LUA_INTEGER_FRMLEN=Bf;F.exports.LUA_MAXINTEGER=DS;F.exports.LUA_MININTEGER=gi;F.exports.LUA_NUMBER_FMT=zS;F.exports.LUA_NUMBER_FRMLEN=XS;F.exports.LUAL_BUFFERSIZE=ZS;F.exports.frexp=YS;F.exports.ldexp=Df;F.exports.lua_getlocaledecpoint=JS;F.exports.lua_integer2str=LS;F.exports.lua_number2str=HS;F.exports.lua_numbertointeger=jS});var ue=I((cG,A)=>{"use strict";var Pr;typeof Uint8Array.from=="function"?Pr=Uint8Array.from.bind(Uint8Array):Pr=function(e){let t=0,n=e.length,s=new Uint8Array(n);for(;n>t;)s[t]=e[t++];return s};var mi;if(typeof new Uint8Array().indexOf=="function")mi=function(e,t,n){return e.indexOf(t,n)};else{let e=[].indexOf;if(e.call(new Uint8Array(1),0)!==0)throw Error("missing .indexOf");mi=function(t,n,s){return e.call(t,n,s)}}var _i;typeof Uint8Array.of=="function"?_i=Uint8Array.of.bind(Uint8Array):_i=function(){return Pr(arguments)};var Ur=function(e){return e instanceof Uint8Array},$S=function(e,t){if(e!==t){let n=e.length;if(n!==t.length)return!1;for(let s=0;s<n;s++)if(e[s]!==t[s])return!1}return!0},Tt="cannot convert invalid utf8 to javascript string",QS=function(e,t,n,s){if(!Ur(e))throw new TypeError("to_jsstring expects a Uint8Array");n===void 0?n=e.length:n=Math.min(e.length,n);let r="";for(let o=t!==void 0?t:0;o<n;){let a=e[o++];if(a<128)r+=String.fromCharCode(a);else if(a<194||a>244){if(!s)throw RangeError(Tt);r+="\uFFFD"}else if(a<=223){if(o>=n){if(!s)throw RangeError(Tt);r+="\uFFFD";continue}let l=e[o++];if((l&192)!==128){if(!s)throw RangeError(Tt);r+="\uFFFD";continue}r+=String.fromCharCode(((a&31)<<6)+(l&63))}else if(a<=239){if(o+1>=n){if(!s)throw RangeError(Tt);r+="\uFFFD";continue}let l=e[o++];if((l&192)!==128){if(!s)throw RangeError(Tt);r+="\uFFFD";continue}let i=e[o++];if((i&192)!==128){if(!s)throw RangeError(Tt);r+="\uFFFD";continue}let u=((a&15)<<12)+((l&63)<<6)+(i&63);if(u<=65535)r+=String.fromCharCode(u);else{u-=65536;let c=(u>>10)+55296,f=u%1024+56320;r+=String.fromCharCode(c,f)}}else{if(o+2>=n){if(!s)throw RangeError(Tt);r+="\uFFFD";continue}let l=e[o++];if((l&192)!==128){if(!s)throw RangeError(Tt);r+="\uFFFD";continue}let i=e[o++];if((i&192)!==128){if(!s)throw RangeError(Tt);r+="\uFFFD";continue}let u=e[o++];if((u&192)!==128){if(!s)throw RangeError(Tt);r+="\uFFFD";continue}let c=((a&7)<<18)+((l&63)<<12)+((i&63)<<6)+(u&63);c-=65536;let f=(c>>10)+55296,K=c%1024+56320;r+=String.fromCharCode(f,K)}}return r},ek=";,/?:@&=+$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,-_.!~*'()#".split("").reduce(function(e,t){return e[t.charCodeAt(0)]=!0,e},{}),tk=function(e){if(!Ur(e))throw new TypeError("to_uristring expects a Uint8Array");let t="";for(let n=0;n<e.length;n++){let s=e[n];ek[s]?t+=String.fromCharCode(s):t+="%"+(s<16?"0":"")+s.toString(16)}return t},Gf={},xi=function(e,t){if(typeof e!="string")throw new TypeError("to_luastring expects a javascript string");if(t){let o=Gf[e];if(Ur(o))return o}let n=e.length,s=Array(n),r=0;for(let o=0;o<n;++o){let a=e.charCodeAt(o);if(a<=127)s[r++]=a;else if(a<=2047)s[r++]=192|a>>6,s[r++]=128|a&63;else{if(a>=55296&&a<=56319&&o+1<n){let l=e.charCodeAt(o+1);l>=56320&&l<=57343&&(o++,a=(a-55296)*1024+l+9216)}a<=65535?(s[r++]=224|a>>12,s[r++]=128|a>>6&63,s[r++]=128|a&63):(s[r++]=240|a>>18,s[r++]=128|a>>12&63,s[r++]=128|a>>6&63,s[r++]=128|a&63)}}return s=Pr(s),t&&(Gf[e]=s),s},nk=function(e){if(!Ur(e))if(typeof e=="string")e=xi(e);else throw new TypeError("expects an array of bytes or javascript string");return e};A.exports.luastring_from=Pr;A.exports.luastring_indexOf=mi;A.exports.luastring_of=_i;A.exports.is_luastring=Ur;A.exports.luastring_eq=$S;A.exports.to_jsstring=QS;A.exports.to_uristring=tk;A.exports.to_luastring=xi;A.exports.from_userstring=nk;var sk=xi("\x1BLua"),qf="5",Lf="3",rk=503,Hf="4",jf="Lua "+qf+"."+Lf,Xf=jf+"."+Hf,ok=Xf+"  Copyright (C) 1994-2017 Lua.org, PUC-Rio",ak="R. Ierusalimschy, L. H. de Figueiredo, W. Celes";A.exports.LUA_SIGNATURE=sk;A.exports.LUA_VERSION_MAJOR=qf;A.exports.LUA_VERSION_MINOR=Lf;A.exports.LUA_VERSION_NUM=rk;A.exports.LUA_VERSION_RELEASE=Hf;A.exports.LUA_VERSION=jf;A.exports.LUA_RELEASE=Xf;A.exports.LUA_COPYRIGHT=ok;A.exports.LUA_AUTHORS=ak;var lk={LUA_OK:0,LUA_YIELD:1,LUA_ERRRUN:2,LUA_ERRSYNTAX:3,LUA_ERRMEM:4,LUA_ERRGCMM:5,LUA_ERRERR:6},Me={LUA_TNONE:-1,LUA_TNIL:0,LUA_TBOOLEAN:1,LUA_TLIGHTUSERDATA:2,LUA_TNUMBER:3,LUA_TSTRING:4,LUA_TTABLE:5,LUA_TFUNCTION:6,LUA_TUSERDATA:7,LUA_TTHREAD:8,LUA_NUMTAGS:9};Me.LUA_TSHRSTR=Me.LUA_TSTRING|0;Me.LUA_TLNGSTR=Me.LUA_TSTRING|16;Me.LUA_TNUMFLT=Me.LUA_TNUMBER|0;Me.LUA_TNUMINT=Me.LUA_TNUMBER|16;Me.LUA_TLCL=Me.LUA_TFUNCTION|0;Me.LUA_TLCF=Me.LUA_TFUNCTION|16;Me.LUA_TCCL=Me.LUA_TFUNCTION|32;var ik=0,ck=1,uk=2,pk=3,fk=4,dk=5,hk=6,gk=7,mk=8,_k=9,bk=10,xk=11,Ak=12,Sk=13,kk=0,Ek=1,vk=2,Tk=20,{LUAI_MAXSTACK:Rk}=je(),Wf=-Rk-1e3,yk=function(e){return Wf-e},Nk=1,zf=2,Ok=zf,bi=class{constructor(){this.event=NaN,this.name=null,this.namewhat=null,this.what=null,this.source=null,this.currentline=NaN,this.linedefined=NaN,this.lastlinedefined=NaN,this.nups=NaN,this.nparams=NaN,this.isvararg=NaN,this.istailcall=NaN,this.short_src=null,this.i_ci=null}},Jf=0,Zf=1,Yf=2,$f=3,Ck=4,wk=1<<Jf,Vk=1<<Zf,Ik=1<<Yf,Pk=1<<$f;A.exports.LUA_HOOKCALL=Jf;A.exports.LUA_HOOKCOUNT=$f;A.exports.LUA_HOOKLINE=Yf;A.exports.LUA_HOOKRET=Zf;A.exports.LUA_HOOKTAILCALL=Ck;A.exports.LUA_MASKCALL=wk;A.exports.LUA_MASKCOUNT=Pk;A.exports.LUA_MASKLINE=Ik;A.exports.LUA_MASKRET=Vk;A.exports.LUA_MINSTACK=Tk;A.exports.LUA_MULTRET=-1;A.exports.LUA_OPADD=ik;A.exports.LUA_OPBAND=gk;A.exports.LUA_OPBNOT=Sk;A.exports.LUA_OPBOR=mk;A.exports.LUA_OPBXOR=_k;A.exports.LUA_OPDIV=dk;A.exports.LUA_OPEQ=kk;A.exports.LUA_OPIDIV=hk;A.exports.LUA_OPLE=vk;A.exports.LUA_OPLT=Ek;A.exports.LUA_OPMOD=pk;A.exports.LUA_OPMUL=uk;A.exports.LUA_OPPOW=fk;A.exports.LUA_OPSHL=bk;A.exports.LUA_OPSHR=xk;A.exports.LUA_OPSUB=ck;A.exports.LUA_OPUNM=Ak;A.exports.LUA_REGISTRYINDEX=Wf;A.exports.LUA_RIDX_GLOBALS=zf;A.exports.LUA_RIDX_LAST=Ok;A.exports.LUA_RIDX_MAINTHREAD=Nk;A.exports.constant_types=Me;A.exports.lua_Debug=bi;A.exports.lua_upvalueindex=yk;A.exports.thread_status=lk});var Xe=I((uG,Ee)=>{var Rt=ue(),Qf="0",ed="1",Uk=1,td="5",nd="Fengari "+Qf+"."+ed,sd=nd+"."+td,rd="B. Giannangeli, Daurnimator",Kk=sd+"  Copyright (C) 2017-2019 "+rd+`
Based on: `+Rt.LUA_COPYRIGHT;Ee.exports.FENGARI_AUTHORS=rd;Ee.exports.FENGARI_COPYRIGHT=Kk;Ee.exports.FENGARI_RELEASE=sd;Ee.exports.FENGARI_VERSION=nd;Ee.exports.FENGARI_VERSION_MAJOR=Qf;Ee.exports.FENGARI_VERSION_MINOR=ed;Ee.exports.FENGARI_VERSION_NUM=Uk;Ee.exports.FENGARI_VERSION_RELEASE=td;Ee.exports.is_luastring=Rt.is_luastring;Ee.exports.luastring_eq=Rt.luastring_eq;Ee.exports.luastring_from=Rt.luastring_from;Ee.exports.luastring_indexOf=Rt.luastring_indexOf;Ee.exports.luastring_of=Rt.luastring_of;Ee.exports.to_jsstring=Rt.to_jsstring;Ee.exports.to_luastring=Rt.to_luastring;Ee.exports.to_uristring=Rt.to_uristring;Ee.exports.from_userstring=Rt.from_userstring});var We=I((pG,bn)=>{"use strict";var Fk=function(e){if(!e)throw Error("assertion failed")};bn.exports.lua_assert=Fk;var Mk=function(e,t,n){if(!t)throw Error(n)};bn.exports.api_check=Mk;var Bk=200;bn.exports.LUAI_MAXCCALLS=Bk;var Dk=32;bn.exports.LUA_MINBUFFER=Dk;var Gk=function(e,t,n){let s=t%n;return s*n<0&&(s+=n),s};bn.exports.luai_nummod=Gk;var qk=2147483647;bn.exports.MAX_INT=qk;var Lk=-2147483648;bn.exports.MIN_INT=Lk});var Ai=I((fG,zn)=>{"use strict";var{luastring_of:Hk}=ue(),Is=Hk(0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,22,22,22,22,22,22,22,22,22,22,4,4,4,4,4,4,4,21,21,21,21,21,21,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,5,4,21,21,21,21,21,21,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),od=0,ad=1,jk=2,Xk=3,Wk=4,zk=function(e){return(Is[e+1]&1<<ad)!==0},Jk=function(e){return(Is[e+1]&1<<Wk)!==0},Zk=function(e){return(Is[e+1]&1<<jk)!==0},Yk=function(e){return(Is[e+1]&1<<Xk)!==0},$k=function(e){return(Is[e+1]&1<<od)!==0},Qk=function(e){return(Is[e+1]&(1<<od|1<<ad))!==0};zn.exports.lisdigit=zk;zn.exports.lislalnum=Qk;zn.exports.lislalpha=$k;zn.exports.lisprint=Zk;zn.exports.lisspace=Yk;zn.exports.lisxdigit=Jk});var yt=I((dG,xn)=>{"use strict";var{is_luastring:eE,luastring_eq:tE,luastring_from:nE,to_luastring:sE}=ue(),{lua_assert:Kr}=We(),Jn=class{constructor(t,n){this.hash=null,this.realstring=n}getstr(){return this.realstring}tsslen(){return this.realstring.length}},rE=function(e,t){return Kr(e instanceof Jn),Kr(t instanceof Jn),e==t||tE(e.realstring,t.realstring)},ld=function(e){Kr(eE(e));let t=e.length,n="|";for(let s=0;s<t;s++)n+=e[s].toString(16);return n},oE=function(e){return Kr(e instanceof Jn),e.hash===null&&(e.hash=ld(e.getstr())),e.hash},Si=function(e,t){return Kr(t instanceof Uint8Array),new Jn(e,t)},aE=function(e,t){return Si(e,nE(t))},lE=function(e,t){return Si(e,sE(t))};xn.exports.luaS_eqlngstr=rE;xn.exports.luaS_hash=ld;xn.exports.luaS_hashlongstr=oE;xn.exports.luaS_bless=Si;xn.exports.luaS_new=aE;xn.exports.luaS_newliteral=lE;xn.exports.TString=Jn});var Nt=I((hG,mt)=>{"use strict";var{constant_types:{LUA_TBOOLEAN:iE,LUA_TCCL:cE,LUA_TLCF:uE,LUA_TLCL:pE,LUA_TLIGHTUSERDATA:fE,LUA_TLNGSTR:dE,LUA_TNIL:ud,LUA_TNUMFLT:hE,LUA_TNUMINT:vi,LUA_TSHRSTR:gE,LUA_TTABLE:mE,LUA_TTHREAD:_E,LUA_TUSERDATA:bE},to_luastring:ki}=ue(),{LUA_MAXINTEGER:xE}=je(),{lua_assert:Mr}=We(),Ei=Wt(),Be=Qe(),{luaS_hashlongstr:pd,TString:AE}=yt(),SE=Xt(),id=new WeakMap,cd=function(e){let t=id.get(e);return t||(t={},id.set(e,t)),t},Ti=function(e,t){switch(t.type){case ud:return Ei.luaG_runerror(e,ki("table index is nil",!0));case hE:if(isNaN(t.value))return Ei.luaG_runerror(e,ki("table index is NaN",!0));case vi:case iE:case mE:case pE:case uE:case cE:case bE:case _E:return t.value;case gE:case dE:return pd(t.tsvalue());case fE:{let n=t.value;switch(typeof n){case"string":return"*"+n;case"number":return"#"+n;case"boolean":return n?"?true":"?false";case"function":return cd(n);case"object":if(n instanceof SE.lua_State&&n.l_G===e.l_G||n instanceof Fr||n instanceof Be.Udata||n instanceof Be.LClosure||n instanceof Be.CClosure)return cd(n);default:return n}}default:throw new Error("unknown key type: "+t.type)}},Fr=class{constructor(t){this.id=t.l_G.id_counter++,this.strong=new Map,this.dead_strong=new Map,this.dead_weak=void 0,this.f=void 0,this.l=void 0,this.metatable=null,this.flags=-1}},kE=function(e){e.flags=0},fd=function(e,t,n,s){e.dead_strong.clear(),e.dead_weak=void 0;let r=null,o={key:n,value:s,p:r=e.l,n:void 0};e.f||(e.f=o),r&&(r.n=o),e.strong.set(t,o),e.l=o},EE=function(e){return typeof e=="object"?e!==null:typeof e=="function"},dd=function(e,t){let n=e.strong.get(t);if(n){n.key.setdeadvalue(),n.value=void 0;let s=n.n,r=n.p;n.p=void 0,r&&(r.n=s),s&&(s.p=r),e.f===n&&(e.f=s),e.l===n&&(e.l=r),e.strong.delete(t),EE(t)?(e.dead_weak||(e.dead_weak=new WeakMap),e.dead_weak.set(t,n)):e.dead_strong.set(t,n)}},vE=function(e){return new Fr(e)},Ri=function(e,t){let n=e.strong.get(t);return n?n.value:Be.luaO_nilobject},oa=function(e,t){return Mr(typeof t=="number"&&(t|0)===t),Ri(e,t)},TE=function(e,t){return Mr(t instanceof AE),Ri(e,pd(t))},RE=function(e,t,n){return Mr(n instanceof Be.TValue),n.ttisnil()||n.ttisfloat()&&isNaN(n.value)?Be.luaO_nilobject:Ri(t,Ti(e,n))},yE=function(e,t,n){Mr(typeof t=="number"&&(t|0)===t&&n instanceof Be.TValue);let s=t;if(n.ttisnil()){dd(e,s);return}let r=e.strong.get(s);if(r)r.value.setfrom(n);else{let o=new Be.TValue(vi,t),a=new Be.TValue(n.type,n.value);fd(e,s,o,a)}},NE=function(e,t,n,s){Mr(n instanceof Be.TValue);let r=Ti(e,n);if(s.ttisnil()){dd(t,r);return}let o=t.strong.get(r);if(o)o.value.setfrom(s);else{let a,l=n.value;n.ttisfloat()&&(l|0)===l?a=new Be.TValue(vi,l):a=new Be.TValue(n.type,l);let i=new Be.TValue(s.type,s.value);fd(t,r,a,i)}},OE=function(e){let t=0,n=e.strong.size+1;for(;!oa(e,n).ttisnil();){if(t=n,n>xE/2){for(t=1;!oa(e,t).ttisnil();)t++;return t-1}n*=2}for(;n-t>1;){let s=Math.floor((t+n)/2);oa(e,s).ttisnil()?n=s:t=s}return t},CE=function(e,t,n){let s=e.stack[n],r;if(s.type===ud){if(r=t.f,!r)return!1}else{let o=Ti(e,s);if(r=t.strong.get(o),r){if(r=r.n,!r)return!1}else{if(r=t.dead_weak&&t.dead_weak.get(o)||t.dead_strong.get(o),!r)return Ei.luaG_runerror(e,ki("invalid key to 'next'"));do if(r=r.n,!r)return!1;while(r.key.ttisdeadkey())}}return Be.setobj2s(e,n,r.key),Be.setobj2s(e,n+1,r.value),!0};mt.exports.invalidateTMcache=kE;mt.exports.luaH_get=RE;mt.exports.luaH_getint=oa;mt.exports.luaH_getn=OE;mt.exports.luaH_getstr=TE;mt.exports.luaH_setfrom=NE;mt.exports.luaH_setint=yE;mt.exports.luaH_new=vE;mt.exports.luaH_next=CE;mt.exports.Table=Fr});var es=I((gG,b)=>{"use strict";var wE=["MOVE","LOADK","LOADKX","LOADBOOL","LOADNIL","GETUPVAL","GETTABUP","GETTABLE","SETTABUP","SETUPVAL","SETTABLE","NEWTABLE","SELF","ADD","SUB","MUL","MOD","POW","DIV","IDIV","BAND","BOR","BXOR","SHL","SHR","UNM","BNOT","NOT","LEN","CONCAT","JMP","EQ","LT","LE","TEST","TESTSET","CALL","TAILCALL","RETURN","FORLOOP","FORPREP","TFORCALL","TFORLOOP","SETLIST","CLOSURE","VARARG","EXTRAARG"],VE={OP_MOVE:0,OP_LOADK:1,OP_LOADKX:2,OP_LOADBOOL:3,OP_LOADNIL:4,OP_GETUPVAL:5,OP_GETTABUP:6,OP_GETTABLE:7,OP_SETTABUP:8,OP_SETUPVAL:9,OP_SETTABLE:10,OP_NEWTABLE:11,OP_SELF:12,OP_ADD:13,OP_SUB:14,OP_MUL:15,OP_MOD:16,OP_POW:17,OP_DIV:18,OP_IDIV:19,OP_BAND:20,OP_BOR:21,OP_BXOR:22,OP_SHL:23,OP_SHR:24,OP_UNM:25,OP_BNOT:26,OP_NOT:27,OP_LEN:28,OP_CONCAT:29,OP_JMP:30,OP_EQ:31,OP_LT:32,OP_LE:33,OP_TEST:34,OP_TESTSET:35,OP_CALL:36,OP_TAILCALL:37,OP_RETURN:38,OP_FORLOOP:39,OP_FORPREP:40,OP_TFORCALL:41,OP_TFORLOOP:42,OP_SETLIST:43,OP_CLOSURE:44,OP_VARARG:45,OP_EXTRAARG:46},ae=0,ee=1,De=2,P=3,V=0,aa=1,Br=2,hd=3,Lr=[64|De<<4|ae<<2|V,64|P<<4|ae<<2|aa,64|ae<<4|ae<<2|aa,64|ee<<4|ee<<2|V,64|ee<<4|ae<<2|V,64|ee<<4|ae<<2|V,64|ee<<4|P<<2|V,64|De<<4|P<<2|V,0|P<<4|P<<2|V,0|ee<<4|ae<<2|V,0|P<<4|P<<2|V,64|ee<<4|ee<<2|V,64|De<<4|P<<2|V,64|P<<4|P<<2|V,64|P<<4|P<<2|V,64|P<<4|P<<2|V,64|P<<4|P<<2|V,64|P<<4|P<<2|V,64|P<<4|P<<2|V,64|P<<4|P<<2|V,64|P<<4|P<<2|V,64|P<<4|P<<2|V,64|P<<4|P<<2|V,64|P<<4|P<<2|V,64|P<<4|P<<2|V,64|De<<4|ae<<2|V,64|De<<4|ae<<2|V,64|De<<4|ae<<2|V,64|De<<4|ae<<2|V,64|De<<4|De<<2|V,0|De<<4|ae<<2|Br,128|P<<4|P<<2|V,128|P<<4|P<<2|V,128|P<<4|P<<2|V,128|ae<<4|ee<<2|V,192|De<<4|ee<<2|V,64|ee<<4|ee<<2|V,64|ee<<4|ee<<2|V,0|ee<<4|ae<<2|V,64|De<<4|ae<<2|Br,64|De<<4|ae<<2|Br,0|ae<<4|ee<<2|V,64|De<<4|ae<<2|Br,0|ee<<4|ee<<2|V,64|ee<<4|ae<<2|aa,64|ee<<4|ae<<2|V,0|ee<<4|ee<<2|hd],IE=function(e){return Lr[e]&3},PE=function(e){return Lr[e]>>4&3},UE=function(e){return Lr[e]>>2&3},KE=function(e){return Lr[e]&64},FE=function(e){return Lr[e]&128},An=9,Sn=9,Zn=An+Sn,$n=8,Dr=An+Sn+$n,Ps=6,Ot=0,kn=Ot+Ps,Qn=kn+$n,Gr=Qn+An,Yn=Qn,qr=kn,gd=(1<<Zn)-1,la=gd>>1,ME=(1<<Dr)-1,md=(1<<$n)-1,BE=(1<<Sn)-1,DE=(1<<An)-1,Hr=1<<Sn-1,GE=Hr-1,qE=md,LE=function(e){return e&Hr},HE=function(e){return e&~Hr},jE=function(e){return e|Hr},Oe=function(e,t){return~(-1<<e)<<t},_d=function(e,t){return~Oe(e,t)},XE=function(e){return e.opcode},WE=function(e,t){return e.code=e.code&_d(Ps,Ot)|t<<Ot&Oe(Ps,Ot),Us(e)},jr=function(e,t,n,s){return e.code=e.code&_d(s,n)|t<<n&Oe(s,n),Us(e)},zE=function(e){return e.A},JE=function(e,t){return jr(e,t,kn,$n)},ZE=function(e){return e.B},YE=function(e,t){return jr(e,t,Gr,Sn)},$E=function(e){return e.C},QE=function(e,t){return jr(e,t,Qn,An)},ev=function(e){return e.Bx},bd=function(e,t){return jr(e,t,Yn,Zn)},tv=function(e){return e.Ax},nv=function(e,t){return jr(e,t,qr,Dr)},sv=function(e){return e.sBx},rv=function(e,t){return bd(e,t+la)},Us=function(e){if(typeof e=="number")return{code:e,opcode:e>>Ot&Oe(Ps,0),A:e>>kn&Oe($n,0),B:e>>Gr&Oe(Sn,0),C:e>>Qn&Oe(An,0),Bx:e>>Yn&Oe(Zn,0),Ax:e>>qr&Oe(Dr,0),sBx:(e>>Yn&Oe(Zn,0))-la};{let t=e.code;return e.opcode=t>>Ot&Oe(Ps,0),e.A=t>>kn&Oe($n,0),e.B=t>>Gr&Oe(Sn,0),e.C=t>>Qn&Oe(An,0),e.Bx=t>>Yn&Oe(Zn,0),e.Ax=t>>qr&Oe(Dr,0),e.sBx=(t>>Yn&Oe(Zn,0))-la,e}},ov=function(e,t,n,s){return Us(e<<Ot|t<<kn|n<<Gr|s<<Qn)},av=function(e,t,n){return Us(e<<Ot|t<<kn|n<<Yn)},lv=function(e,t){return Us(e<<Ot|t<<qr)},iv=50;b.exports.BITRK=Hr;b.exports.CREATE_ABC=ov;b.exports.CREATE_ABx=av;b.exports.CREATE_Ax=lv;b.exports.GET_OPCODE=XE;b.exports.GETARG_A=zE;b.exports.GETARG_B=ZE;b.exports.GETARG_C=$E;b.exports.GETARG_Bx=ev;b.exports.GETARG_Ax=tv;b.exports.GETARG_sBx=sv;b.exports.INDEXK=HE;b.exports.ISK=LE;b.exports.LFIELDS_PER_FLUSH=iv;b.exports.MAXARG_A=md;b.exports.MAXARG_Ax=ME;b.exports.MAXARG_B=BE;b.exports.MAXARG_Bx=gd;b.exports.MAXARG_C=DE;b.exports.MAXARG_sBx=la;b.exports.MAXINDEXRK=GE;b.exports.NO_REG=qE;b.exports.OpArgK=P;b.exports.OpArgN=ae;b.exports.OpArgR=De;b.exports.OpArgU=ee;b.exports.OpCodes=wE;b.exports.OpCodesI=VE;b.exports.POS_A=kn;b.exports.POS_Ax=qr;b.exports.POS_B=Gr;b.exports.POS_Bx=Yn;b.exports.POS_C=Qn;b.exports.POS_OP=Ot;b.exports.RKASK=jE;b.exports.SETARG_A=JE;b.exports.SETARG_Ax=nv;b.exports.SETARG_B=YE;b.exports.SETARG_Bx=bd;b.exports.SETARG_C=QE;b.exports.SETARG_sBx=rv;b.exports.SET_OPCODE=WE;b.exports.SIZE_A=$n;b.exports.SIZE_Ax=Dr;b.exports.SIZE_B=Sn;b.exports.SIZE_Bx=Zn;b.exports.SIZE_C=An;b.exports.SIZE_OP=Ps;b.exports.fullins=Us;b.exports.getBMode=PE;b.exports.getCMode=UE;b.exports.getOpMode=IE;b.exports.iABC=V;b.exports.iABx=aa;b.exports.iAsBx=Br;b.exports.iAx=hd;b.exports.testAMode=KE;b.exports.testTMode=FE});var ns=I((mG,de)=>{"use strict";var{LUA_MASKLINE:cv,LUA_MASKCOUNT:uv,LUA_MULTRET:pv,constant_types:{LUA_TBOOLEAN:fv,LUA_TLCF:dv,LUA_TLIGHTUSERDATA:hv,LUA_TLNGSTR:Ed,LUA_TNIL:gv,LUA_TNUMBER:vd,LUA_TNUMFLT:mv,LUA_TNUMINT:_v,LUA_TSHRSTR:Td,LUA_TTABLE:Rd,LUA_TUSERDATA:bv},to_luastring:Ct}=ue(),{INDEXK:yd,ISK:Nd,LFIELDS_PER_FLUSH:xv,OpCodesI:{OP_ADD:Od,OP_BAND:Cd,OP_BNOT:wd,OP_BOR:Vd,OP_BXOR:Id,OP_CALL:Oi,OP_CLOSURE:Av,OP_CONCAT:Pd,OP_DIV:Ud,OP_EQ:Kd,OP_EXTRAARG:yi,OP_FORLOOP:Sv,OP_FORPREP:kv,OP_GETTABLE:Fd,OP_GETTABUP:Md,OP_GETUPVAL:Ev,OP_IDIV:Bd,OP_JMP:Dd,OP_LE:Ci,OP_LEN:Gd,OP_LOADBOOL:vv,OP_LOADK:Tv,OP_LOADKX:Rv,OP_LOADNIL:yv,OP_LT:qd,OP_MOD:Ld,OP_MOVE:Nv,OP_MUL:Hd,OP_NEWTABLE:Ov,OP_NOT:Cv,OP_POW:jd,OP_RETURN:wv,OP_SELF:Xd,OP_SETLIST:Vv,OP_SETTABLE:Iv,OP_SETTABUP:Pv,OP_SETUPVAL:Uv,OP_SHL:Wd,OP_SHR:zd,OP_SUB:Jd,OP_TAILCALL:Kv,OP_TEST:Fv,OP_TESTSET:Mv,OP_TFORCALL:Zd,OP_TFORLOOP:wi,OP_UNM:Yd,OP_VARARG:Bv}}=es(),{LUA_MAXINTEGER:Dv,LUA_MININTEGER:Gv,lua_numbertointeger:qv}=je(),{lua_assert:bt,luai_nummod:Lv}=We(),X=Qe(),ca=rs(),vn=Xt(),{luaS_bless:Hv,luaS_eqlngstr:jv,luaS_hashlongstr:xd}=yt(),ve=xt(),x=ss(),ts=Nt(),et=Wt(),Xv=function(e){let t=e.ci,n=t.l_base,s=t.l_code[t.l_savedpc-1],r=s.opcode;switch(r){case Od:case Jd:case Hd:case Ud:case Bd:case Cd:case Vd:case Id:case Wd:case zd:case Ld:case jd:case Yd:case wd:case Gd:case Md:case Fd:case Xd:{X.setobjs2s(e,n+s.A,e.top-1),delete e.stack[--e.top];break}case Ci:case qd:case Kd:{let o=!e.stack[e.top-1].l_isfalse();delete e.stack[--e.top],t.callstatus&vn.CIST_LEQ&&(bt(r===Ci),t.callstatus^=vn.CIST_LEQ,o=!o),bt(t.l_code[t.l_savedpc].opcode===Dd),o!==!!s.A&&t.l_savedpc++;break}case Pd:{let o=e.top-1,a=s.B,l=o-1-(n+a);X.setobjs2s(e,o-2,o),l>1&&(e.top=o-1,Fi(e,l)),X.setobjs2s(e,t.l_base+s.A,e.top-1),ve.adjust_top(e,t.top);break}case Zd:{bt(t.l_code[t.l_savedpc].opcode===wi),ve.adjust_top(e,t.top);break}case Oi:{s.C-1>=0&&ve.adjust_top(e,t.top);break}}},Ad=function(e,t,n){return t+n.A},En=function(e,t,n){return t+n.B},Ce=function(e,t,n,s){return Nd(s.B)?n[yd(s.B)]:e.stack[t+s.B]},pe=function(e,t,n,s){return Nd(s.C)?n[yd(s.C)]:e.stack[t+s.C]},Wv=function(e){let t=e.ci;t.callstatus|=vn.CIST_FRESH;e:for(;;){bt(t===e.ci);let n=t.func.value,s=n.p.k,r=t.l_base,o=t.l_code[t.l_savedpc++];e.hookmask&(cv|uv)&&et.luaG_traceexec(e);let a=Ad(e,r,o);switch(o.opcode){case Nv:{X.setobjs2s(e,a,En(e,r,o));break}case Tv:{let i=s[o.Bx];X.setobj2s(e,a,i);break}case Rv:{bt(t.l_code[t.l_savedpc].opcode===yi);let i=s[t.l_code[t.l_savedpc++].Ax];X.setobj2s(e,a,i);break}case vv:{e.stack[a].setbvalue(o.B!==0),o.C!==0&&t.l_savedpc++;break}case yv:{for(let i=0;i<=o.B;i++)e.stack[a+i].setnilvalue();break}case Ev:{let i=o.B;X.setobj2s(e,a,n.upvals[i]);break}case Md:{let i=n.upvals[o.B],u=pe(e,r,s,o);ia(e,i,u,a);break}case Fd:{let i=e.stack[En(e,r,o)],u=pe(e,r,s,o);ia(e,i,u,a);break}case Pv:{let i=n.upvals[o.A],u=Ce(e,r,s,o),c=pe(e,r,s,o);Ii(e,i,u,c);break}case Uv:{n.upvals[o.B].setfrom(e.stack[a]);break}case Iv:{let i=e.stack[a],u=Ce(e,r,s,o),c=pe(e,r,s,o);Ii(e,i,u,c);break}case Ov:{e.stack[a].sethvalue(ts.luaH_new(e));break}case Xd:{let i=En(e,r,o),u=pe(e,r,s,o);X.setobjs2s(e,a+1,i),ia(e,e.stack[i],u,a);break}case Od:{let i=Ce(e,r,s,o),u=pe(e,r,s,o),c,f;i.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(i.value+u.value):(c=fe(i))!==!1&&(f=fe(u))!==!1?e.stack[a].setfltvalue(c+f):x.luaT_trybinTM(e,i,u,e.stack[a],x.TMS.TM_ADD);break}case Jd:{let i=Ce(e,r,s,o),u=pe(e,r,s,o),c,f;i.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(i.value-u.value):(c=fe(i))!==!1&&(f=fe(u))!==!1?e.stack[a].setfltvalue(c-f):x.luaT_trybinTM(e,i,u,e.stack[a],x.TMS.TM_SUB);break}case Hd:{let i=Ce(e,r,s,o),u=pe(e,r,s,o),c,f;i.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(sh(i.value,u.value)):(c=fe(i))!==!1&&(f=fe(u))!==!1?e.stack[a].setfltvalue(c*f):x.luaT_trybinTM(e,i,u,e.stack[a],x.TMS.TM_MUL);break}case Ld:{let i=Ce(e,r,s,o),u=pe(e,r,s,o),c,f;i.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(oh(e,i.value,u.value)):(c=fe(i))!==!1&&(f=fe(u))!==!1?e.stack[a].setfltvalue(Lv(e,c,f)):x.luaT_trybinTM(e,i,u,e.stack[a],x.TMS.TM_MOD);break}case jd:{let i=Ce(e,r,s,o),u=pe(e,r,s,o),c,f;(c=fe(i))!==!1&&(f=fe(u))!==!1?e.stack[a].setfltvalue(Math.pow(c,f)):x.luaT_trybinTM(e,i,u,e.stack[a],x.TMS.TM_POW);break}case Ud:{let i=Ce(e,r,s,o),u=pe(e,r,s,o),c,f;(c=fe(i))!==!1&&(f=fe(u))!==!1?e.stack[a].setfltvalue(c/f):x.luaT_trybinTM(e,i,u,e.stack[a],x.TMS.TM_DIV);break}case Bd:{let i=Ce(e,r,s,o),u=pe(e,r,s,o),c,f;i.ttisinteger()&&u.ttisinteger()?e.stack[a].setivalue(rh(e,i.value,u.value)):(c=fe(i))!==!1&&(f=fe(u))!==!1?e.stack[a].setfltvalue(Math.floor(c/f)):x.luaT_trybinTM(e,i,u,e.stack[a],x.TMS.TM_IDIV);break}case Cd:{let i=Ce(e,r,s,o),u=pe(e,r,s,o),c,f;(c=_t(i))!==!1&&(f=_t(u))!==!1?e.stack[a].setivalue(c&f):x.luaT_trybinTM(e,i,u,e.stack[a],x.TMS.TM_BAND);break}case Vd:{let i=Ce(e,r,s,o),u=pe(e,r,s,o),c,f;(c=_t(i))!==!1&&(f=_t(u))!==!1?e.stack[a].setivalue(c|f):x.luaT_trybinTM(e,i,u,e.stack[a],x.TMS.TM_BOR);break}case Id:{let i=Ce(e,r,s,o),u=pe(e,r,s,o),c,f;(c=_t(i))!==!1&&(f=_t(u))!==!1?e.stack[a].setivalue(c^f):x.luaT_trybinTM(e,i,u,e.stack[a],x.TMS.TM_BXOR);break}case Wd:{let i=Ce(e,r,s,o),u=pe(e,r,s,o),c,f;(c=_t(i))!==!1&&(f=_t(u))!==!1?e.stack[a].setivalue(Vi(c,f)):x.luaT_trybinTM(e,i,u,e.stack[a],x.TMS.TM_SHL);break}case zd:{let i=Ce(e,r,s,o),u=pe(e,r,s,o),c,f;(c=_t(i))!==!1&&(f=_t(u))!==!1?e.stack[a].setivalue(Vi(c,-f)):x.luaT_trybinTM(e,i,u,e.stack[a],x.TMS.TM_SHR);break}case Yd:{let i=e.stack[En(e,r,o)],u;i.ttisinteger()?e.stack[a].setivalue(-i.value):(u=fe(i))!==!1?e.stack[a].setfltvalue(-u):x.luaT_trybinTM(e,i,i,e.stack[a],x.TMS.TM_UNM);break}case wd:{let i=e.stack[En(e,r,o)];i.ttisinteger()?e.stack[a].setivalue(~i.value):x.luaT_trybinTM(e,i,i,e.stack[a],x.TMS.TM_BNOT);break}case Cv:{let i=e.stack[En(e,r,o)];e.stack[a].setbvalue(i.l_isfalse());break}case Gd:{nh(e,e.stack[a],e.stack[En(e,r,o)]);break}case Pd:{let i=o.B,u=o.C;e.top=r+u+1,Fi(e,u-i+1);let c=r+i;X.setobjs2s(e,a,c),ve.adjust_top(e,t.top);break}case Dd:{$d(e,t,o,0);break}case Kd:{Pi(e,Ce(e,r,s,o),pe(e,r,s,o))!==o.A?t.l_savedpc++:Xr(e,t);break}case qd:{Qd(e,Ce(e,r,s,o),pe(e,r,s,o))!==o.A?t.l_savedpc++:Xr(e,t);break}case Ci:{eh(e,Ce(e,r,s,o),pe(e,r,s,o))!==o.A?t.l_savedpc++:Xr(e,t);break}case Fv:{(o.C?e.stack[a].l_isfalse():!e.stack[a].l_isfalse())?t.l_savedpc++:Xr(e,t);break}case Mv:{let i=En(e,r,o),u=e.stack[i];(o.C?u.l_isfalse():!u.l_isfalse())?t.l_savedpc++:(X.setobjs2s(e,a,i),Xr(e,t));break}case Oi:{let i=o.B,u=o.C-1;if(i!==0&&ve.adjust_top(e,a+i),ve.luaD_precall(e,a,u))u>=0&&ve.adjust_top(e,t.top);else{t=e.ci;continue e}break}case Kv:{let i=o.B;if(i!==0&&ve.adjust_top(e,a+i),!ve.luaD_precall(e,a,pv)){let u=e.ci,c=u.previous,f=u.func,K=u.funcOff,Q=c.funcOff,N=u.l_base+f.value.p.numparams;n.p.p.length>0&&ca.luaF_close(e,c.l_base);for(let jt=0;K+jt<N;jt++)X.setobjs2s(e,Q+jt,K+jt);c.l_base=Q+(u.l_base-K),c.top=Q+(e.top-K),ve.adjust_top(e,c.top),c.l_code=u.l_code,c.l_savedpc=u.l_savedpc,c.callstatus|=vn.CIST_TAIL,c.next=null,t=e.ci=c,bt(e.top===c.l_base+e.stack[Q].value.p.maxstacksize);continue e}break}case wv:{n.p.p.length>0&&ca.luaF_close(e,r);let i=ve.luaD_poscall(e,t,a,o.B!==0?o.B-1:e.top-a);if(t.callstatus&vn.CIST_FRESH)return;t=e.ci,i&&ve.adjust_top(e,t.top),bt(t.callstatus&vn.CIST_LUA),bt(t.l_code[t.l_savedpc-1].opcode===Oi);continue e}case Sv:{if(e.stack[a].ttisinteger()){let i=e.stack[a+2].value,u=e.stack[a].value+i|0,c=e.stack[a+1].value;(0<i?u<=c:c<=u)&&(t.l_savedpc+=o.sBx,e.stack[a].chgivalue(u),e.stack[a+3].setivalue(u))}else{let i=e.stack[a+2].value,u=e.stack[a].value+i,c=e.stack[a+1].value;(0<i?u<=c:c<=u)&&(t.l_savedpc+=o.sBx,e.stack[a].chgfltvalue(u),e.stack[a+3].setfltvalue(u))}break}case kv:{let i=e.stack[a],u=e.stack[a+1],c=e.stack[a+2],f;if(i.ttisinteger()&&c.ttisinteger()&&(f=Jv(u,c.value))){let K=f.stopnow?0:i.value;u.value=f.ilimit,i.value=K-c.value|0}else{let K,Q,N;(K=fe(u))===!1&&et.luaG_runerror(e,Ct("'for' limit must be a number",!0)),e.stack[a+1].setfltvalue(K),(Q=fe(c))===!1&&et.luaG_runerror(e,Ct("'for' step must be a number",!0)),e.stack[a+2].setfltvalue(Q),(N=fe(i))===!1&&et.luaG_runerror(e,Ct("'for' initial value must be a number",!0)),e.stack[a].setfltvalue(N-Q)}t.l_savedpc+=o.sBx;break}case Zd:{let i=a+3;X.setobjs2s(e,i+2,a+2),X.setobjs2s(e,i+1,a+1),X.setobjs2s(e,i,a),ve.adjust_top(e,i+3),ve.luaD_call(e,i,o.C),ve.adjust_top(e,t.top),o=t.l_code[t.l_savedpc++],a=Ad(e,r,o),bt(o.opcode===wi)}case wi:{e.stack[a+1].ttisnil()||(X.setobjs2s(e,a,a+1),t.l_savedpc+=o.sBx);break}case Vv:{let i=o.B,u=o.C;i===0&&(i=e.top-a-1),u===0&&(bt(t.l_code[t.l_savedpc].opcode===yi),u=t.l_code[t.l_savedpc++].Ax);let c=e.stack[a].value,f=(u-1)*xv+i;for(;i>0;i--)ts.luaH_setint(c,f--,e.stack[a+i]);ve.adjust_top(e,t.top);break}case Av:{let i=n.p.p[o.Bx],u=$v(i,n.upvals,e.stack,r);u===null?Qv(e,i,n.upvals,r,a):e.stack[a].setclLvalue(u);break}case Bv:{let i=o.B-1,u=r-t.funcOff-n.p.numparams-1,c;for(u<0&&(u=0),i<0&&(i=u,ve.luaD_checkstack(e,u),ve.adjust_top(e,a+u)),c=0;c<i&&c<u;c++)X.setobjs2s(e,a+c,r-u+c);for(;c<i;c++)e.stack[a+c].setnilvalue();break}case yi:throw Error("invalid opcode")}}},$d=function(e,t,n,s){let r=n.A;r!==0&&ca.luaF_close(e,t.l_base+r-1),t.l_savedpc+=n.sBx+s},Xr=function(e,t){$d(e,t,t.l_code[t.l_savedpc],1)},Qd=function(e,t,n){if(t.ttisnumber()&&n.ttisnumber())return Zv(t,n)?1:0;if(t.ttisstring()&&n.ttisstring())return th(t.tsvalue(),n.tsvalue())<0?1:0;{let s=x.luaT_callorderTM(e,t,n,x.TMS.TM_LT);return s===null&&et.luaG_ordererror(e,t,n),s?1:0}},eh=function(e,t,n){let s;return t.ttisnumber()&&n.ttisnumber()?Yv(t,n)?1:0:t.ttisstring()&&n.ttisstring()?th(t.tsvalue(),n.tsvalue())<=0?1:0:(s=x.luaT_callorderTM(e,t,n,x.TMS.TM_LE),s!==null?s?1:0:(e.ci.callstatus|=vn.CIST_LEQ,s=x.luaT_callorderTM(e,n,t,x.TMS.TM_LT),e.ci.callstatus^=vn.CIST_LEQ,s===null&&et.luaG_ordererror(e,t,n),s?0:1))},Pi=function(e,t,n){if(t.ttype()!==n.ttype())return t.ttnov()!==n.ttnov()||t.ttnov()!==vd?0:t.value===n.value?1:0;let s;switch(t.ttype()){case gv:return 1;case fv:return t.value==n.value?1:0;case hv:case _v:case mv:case dv:return t.value===n.value?1:0;case Td:case Ed:return jv(t.tsvalue(),n.tsvalue())?1:0;case bv:case Rd:if(t.value===n.value)return 1;if(e===null)return 0;s=x.fasttm(e,t.value.metatable,x.TMS.TM_EQ),s===null&&(s=x.fasttm(e,n.value.metatable,x.TMS.TM_EQ));break;default:return t.value===n.value?1:0}if(s===null)return 0;let r=new X.TValue;return x.luaT_callTM(e,s,t,n,r,1),r.l_isfalse()?0:1},zv=function(e,t){return Pi(null,e,t)},Jv=function(e,t){let n=!1,s=ua(e,t<0?2:1);if(s===!1){let r=fe(e);if(r===!1)return!1;0<r?(s=Dv,t<0&&(n=!0)):(s=Gv,t>=0&&(n=!0))}return{stopnow:n,ilimit:s}},ua=function(e,t){if(e.ttisfloat()){let n=e.value,s=Math.floor(n);if(n!==s){if(t===0)return!1;t>1&&(s+=1)}return qv(s)}else{if(e.ttisinteger())return e.value;if(Ki(e)){let n=new X.TValue;if(X.luaO_str2num(e.svalue(),n)===e.vslen()+1)return ua(n,t)}}return!1},_t=function(e){return e.ttisinteger()?e.value:ua(e,0)},fe=function(e){if(e.ttnov()===vd)return e.value;if(Ki(e)){let t=new X.TValue;if(X.luaO_str2num(e.svalue(),t)===e.vslen()+1)return t.value}return!1},Zv=function(e,t){return e.value<t.value},Yv=function(e,t){return e.value<=t.value},th=function(e,t){let n=xd(e),s=xd(t);return n===s?0:n<s?-1:1},nh=function(e,t,n){let s;switch(n.ttype()){case Rd:{let r=n.value;if(s=x.fasttm(e,r.metatable,x.TMS.TM_LEN),s!==null)break;t.setivalue(ts.luaH_getn(r));return}case Td:case Ed:t.setivalue(n.vslen());return;default:{s=x.luaT_gettmbyobj(e,n,x.TMS.TM_LEN),s.ttisnil()&&et.luaG_typeerror(e,n,Ct("get length of",!0));break}}x.luaT_callTM(e,s,n,n,t,1)},sh=function(e,t){return e*t},rh=function(e,t,n){return n===0&&et.luaG_runerror(e,Ct("attempt to divide by zero")),Math.floor(t/n)},oh=function(e,t,n){return n===0&&et.luaG_runerror(e,Ct("attempt to perform 'n%%0'")),t-Math.floor(t/n)*n},Sd=32,Vi=function(e,t){return t<0?t<=-Sd?0:e>>>-t:t>=Sd?0:e<<t},$v=function(e,t,n,s){let r=e.cache;if(r!==null){let o=e.upvalues,a=o.length;for(let l=0;l<a;l++){let i=o[l].instack?n[s+o[l].idx]:t[o[l].idx];if(r.upvals[l]!==i)return null}}return r},Qv=function(e,t,n,s,r){let o=t.upvalues.length,a=t.upvalues,l=new X.LClosure(e,o);l.p=t,e.stack[r].setclLvalue(l);for(let i=0;i<o;i++)a[i].instack?l.upvals[i]=ca.luaF_findupval(e,s+a[i].idx):l.upvals[i]=n[a[i].idx];t.cache=l},Ui=function(e){return e.ttisnumber()},Ki=function(e){return e.ttisstring()},Ni=function(e,t){let n=e.stack[t];return n.ttisstring()?!0:Ui(n)?(X.luaO_tostring(e,n),!0):!1},kd=function(e){return e.ttisstring()&&e.vslen()===0},eT=function(e,t,n,s){let r=0;do{let o=e.stack[t-n],a=o.vslen(),l=o.svalue();s.set(l,r),r+=a}while(--n>0)},Fi=function(e,t){bt(t>=2);do{let n=e.top,s=2;if(!(e.stack[n-2].ttisstring()||Ui(e.stack[n-2]))||!Ni(e,n-1))x.luaT_trybinTM(e,e.stack[n-2],e.stack[n-1],e.stack[n-2],x.TMS.TM_CONCAT);else if(kd(e.stack[n-1]))Ni(e,n-2);else if(kd(e.stack[n-2]))X.setobjs2s(e,n-2,n-1);else{let r=e.stack[n-1].vslen();for(s=1;s<t&&Ni(e,n-s-1);s++){let l=e.stack[n-s-1].vslen();r+=l}let o=new Uint8Array(r);eT(e,n,s,o);let a=Hv(e,o);X.setsvalue2s(e,n-s,a)}for(t-=s-1;e.top>n-(s-1);)delete e.stack[--e.top]}while(t>1)},ah=2e3,ia=function(e,t,n,s){for(let r=0;r<ah;r++){let o;if(!t.ttistable())o=x.luaT_gettmbyobj(e,t,x.TMS.TM_INDEX),o.ttisnil()&&et.luaG_typeerror(e,t,Ct("index",!0));else{let a=ts.luaH_get(e,t.value,n);if(a.ttisnil()){if(o=x.fasttm(e,t.value.metatable,x.TMS.TM_INDEX),o===null){e.stack[s].setnilvalue();return}}else{X.setobj2s(e,s,a);return}}if(o.ttisfunction()){x.luaT_callTM(e,o,t,n,e.stack[s],1);return}t=o}et.luaG_runerror(e,Ct("'__index' chain too long; possible loop",!0))},Ii=function(e,t,n,s){for(let r=0;r<ah;r++){let o;if(t.ttistable()){let a=t.value;if(!ts.luaH_get(e,a,n).ttisnil()||(o=x.fasttm(e,a.metatable,x.TMS.TM_NEWINDEX))===null){ts.luaH_setfrom(e,a,n,s),ts.invalidateTMcache(a);return}}else(o=x.luaT_gettmbyobj(e,t,x.TMS.TM_NEWINDEX)).ttisnil()&&et.luaG_typeerror(e,t,Ct("index",!0));if(o.ttisfunction()){x.luaT_callTM(e,o,t,n,s,0);return}t=o}et.luaG_runerror(e,Ct("'__newindex' chain too long; possible loop",!0))};de.exports.cvt2str=Ui;de.exports.cvt2num=Ki;de.exports.luaV_gettable=ia;de.exports.luaV_concat=Fi;de.exports.luaV_div=rh;de.exports.luaV_equalobj=Pi;de.exports.luaV_execute=Wv;de.exports.luaV_finishOp=Xv;de.exports.luaV_imul=sh;de.exports.luaV_lessequal=eh;de.exports.luaV_lessthan=Qd;de.exports.luaV_mod=oh;de.exports.luaV_objlen=nh;de.exports.luaV_rawequalobj=zv;de.exports.luaV_shiftl=Vi;de.exports.luaV_tointeger=ua;de.exports.settable=Ii;de.exports.tointeger=_t;de.exports.tonumber=fe});var ss=I((_G,ft)=>{"use strict";var{constant_types:{LUA_TTABLE:tT,LUA_TUSERDATA:nT},to_luastring:H}=ue(),{lua_assert:sT}=We(),Ks=Qe(),lh=xt(),rT=Xt(),{luaS_bless:oT,luaS_new:Y}=yt(),Bi=Nt(),pa=Wt(),ih=ns(),aT=["no value","nil","boolean","userdata","number","string","table","function","userdata","thread","proto"].map(e=>H(e)),ch=function(e){return aT[e+1]},D={TM_INDEX:0,TM_NEWINDEX:1,TM_GC:2,TM_MODE:3,TM_LEN:4,TM_EQ:5,TM_ADD:6,TM_SUB:7,TM_MUL:8,TM_MOD:9,TM_POW:10,TM_DIV:11,TM_IDIV:12,TM_BAND:13,TM_BOR:14,TM_BXOR:15,TM_SHL:16,TM_SHR:17,TM_UNM:18,TM_BNOT:19,TM_LT:20,TM_LE:21,TM_CONCAT:22,TM_CALL:23,TM_N:24},lT=function(e){e.l_G.tmname[D.TM_INDEX]=new Y(e,H("__index",!0)),e.l_G.tmname[D.TM_NEWINDEX]=new Y(e,H("__newindex",!0)),e.l_G.tmname[D.TM_GC]=new Y(e,H("__gc",!0)),e.l_G.tmname[D.TM_MODE]=new Y(e,H("__mode",!0)),e.l_G.tmname[D.TM_LEN]=new Y(e,H("__len",!0)),e.l_G.tmname[D.TM_EQ]=new Y(e,H("__eq",!0)),e.l_G.tmname[D.TM_ADD]=new Y(e,H("__add",!0)),e.l_G.tmname[D.TM_SUB]=new Y(e,H("__sub",!0)),e.l_G.tmname[D.TM_MUL]=new Y(e,H("__mul",!0)),e.l_G.tmname[D.TM_MOD]=new Y(e,H("__mod",!0)),e.l_G.tmname[D.TM_POW]=new Y(e,H("__pow",!0)),e.l_G.tmname[D.TM_DIV]=new Y(e,H("__div",!0)),e.l_G.tmname[D.TM_IDIV]=new Y(e,H("__idiv",!0)),e.l_G.tmname[D.TM_BAND]=new Y(e,H("__band",!0)),e.l_G.tmname[D.TM_BOR]=new Y(e,H("__bor",!0)),e.l_G.tmname[D.TM_BXOR]=new Y(e,H("__bxor",!0)),e.l_G.tmname[D.TM_SHL]=new Y(e,H("__shl",!0)),e.l_G.tmname[D.TM_SHR]=new Y(e,H("__shr",!0)),e.l_G.tmname[D.TM_UNM]=new Y(e,H("__unm",!0)),e.l_G.tmname[D.TM_BNOT]=new Y(e,H("__bnot",!0)),e.l_G.tmname[D.TM_LT]=new Y(e,H("__lt",!0)),e.l_G.tmname[D.TM_LE]=new Y(e,H("__le",!0)),e.l_G.tmname[D.TM_CONCAT]=new Y(e,H("__concat",!0)),e.l_G.tmname[D.TM_CALL]=new Y(e,H("__call",!0))},iT=H("__name",!0),cT=function(e,t){let n;if(t.ttistable()&&(n=t.value.metatable)!==null||t.ttisfulluserdata()&&(n=t.value.metatable)!==null){let s=Bi.luaH_getstr(n,oT(e,iT));if(s.ttisstring())return s.svalue()}return ch(t.ttnov())},uh=function(e,t,n,s,r,o){let a=e.top;if(Ks.pushobj2s(e,t),Ks.pushobj2s(e,n),Ks.pushobj2s(e,s),o||Ks.pushobj2s(e,r),e.ci.callstatus&rT.CIST_LUA?lh.luaD_call(e,a,o):lh.luaD_callnoyield(e,a,o),o){let l=e.stack[e.top-1];delete e.stack[--e.top],r.setfrom(l)}},Di=function(e,t,n,s,r){let o=Mi(e,t,r);return o.ttisnil()&&(o=Mi(e,n,r)),o.ttisnil()?!1:(uh(e,o,t,n,s,1),!0)},uT=function(e,t,n,s,r){if(!Di(e,t,n,s,r))switch(r){case D.TM_CONCAT:return pa.luaG_concaterror(e,t,n);case D.TM_BAND:case D.TM_BOR:case D.TM_BXOR:case D.TM_SHL:case D.TM_SHR:case D.TM_BNOT:{let o=ih.tonumber(t),a=ih.tonumber(n);return o!==!1&&a!==!1?pa.luaG_tointerror(e,t,n):pa.luaG_opinterror(e,t,n,H("perform bitwise operation on",!0))}default:return pa.luaG_opinterror(e,t,n,H("perform arithmetic on",!0))}},pT=function(e,t,n,s){let r=new Ks.TValue;return Di(e,t,n,r,s)?!r.l_isfalse():null},fT=function(e,t,n){return t===null||t.flags&1<<n?null:ph(t,n,e.l_G.tmname[n])},ph=function(e,t,n){let s=Bi.luaH_getstr(e,n);return sT(t<=D.TM_EQ),s.ttisnil()?(e.flags|=1<<t,null):s},Mi=function(e,t,n){let s;switch(t.ttnov()){case tT:case nT:s=t.value.metatable;break;default:s=e.l_G.mt[t.ttnov()]}return s?Bi.luaH_getstr(s,e.l_G.tmname[n]):Ks.luaO_nilobject};ft.exports.fasttm=fT;ft.exports.TMS=D;ft.exports.luaT_callTM=uh;ft.exports.luaT_callbinTM=Di;ft.exports.luaT_trybinTM=uT;ft.exports.luaT_callorderTM=pT;ft.exports.luaT_gettm=ph;ft.exports.luaT_gettmbyobj=Mi;ft.exports.luaT_init=lT;ft.exports.luaT_objtypename=cT;ft.exports.ttypename=ch});var Xt=I((bG,me)=>{"use strict";var{LUA_MINSTACK:dh,LUA_RIDX_GLOBALS:dT,LUA_RIDX_MAINTHREAD:hT,constant_types:{LUA_NUMTAGS:gT,LUA_TNIL:hh,LUA_TTABLE:mT,LUA_TTHREAD:gh},thread_status:{LUA_OK:mh}}=ue(),Wr=Qe(),_T=xt(),_h=Zr(),fa=Nt(),bh=ss(),xh=5,fh=2*dh,zr=class{constructor(){this.func=null,this.funcOff=NaN,this.top=NaN,this.previous=null,this.next=null,this.l_base=NaN,this.l_code=null,this.l_savedpc=NaN,this.c_k=null,this.c_old_errfunc=null,this.c_ctx=null,this.nresults=NaN,this.callstatus=NaN}},Jr=class{constructor(t){this.id=t.id_counter++,this.base_ci=new zr,this.top=NaN,this.stack_last=NaN,this.oldpc=NaN,this.l_G=t,this.stack=null,this.ci=null,this.errorJmp=null,this.nCcalls=0,this.hook=null,this.hookmask=0,this.basehookcount=0,this.allowhook=1,this.hookcount=this.basehookcount,this.nny=1,this.status=mh,this.errfunc=0}},Gi=class{constructor(){this.id_counter=1,this.ids=new WeakMap,this.mainthread=null,this.l_registry=new Wr.TValue(hh,null),this.panic=null,this.atnativeerror=null,this.version=null,this.tmname=new Array(bh.TMS.TM_N),this.mt=new Array(gT)}},bT=function(e){let t=new zr;return e.ci.next=t,t.previous=e.ci,t.next=null,e.ci=t,t},Ah=function(e){let t=e.ci;t.next=null},Sh=function(e,t){e.stack=new Array(fh),e.top=0,e.stack_last=fh-xh;let n=e.base_ci;n.next=n.previous=null,n.callstatus=0,n.funcOff=e.top,n.func=e.stack[e.top],e.stack[e.top++]=new Wr.TValue(hh,null),n.top=e.top+dh,e.ci=n},kh=function(e){e.ci=e.base_ci,Ah(e),e.stack=null},xT=function(e,t){let n=fa.luaH_new(e);t.l_registry.sethvalue(n),fa.luaH_setint(n,hT,new Wr.TValue(gh,e)),fa.luaH_setint(n,dT,new Wr.TValue(mT,fa.luaH_new(e)))},AT=function(e){let t=e.l_G;Sh(e,e),xT(e,t),bh.luaT_init(e),t.version=_h.lua_version(null)},ST=function(e){let t=e.l_G,n=new Jr(t);return e.stack[e.top]=new Wr.TValue(gh,n),_h.api_incr_top(e),n.hookmask=e.hookmask,n.basehookcount=e.basehookcount,n.hook=e.hook,n.hookcount=n.basehookcount,Sh(n,e),n},kT=function(e,t){kh(t)},ET=function(){let e=new Gi,t=new Jr(e);return e.mainthread=t,_T.luaD_rawrunprotected(t,AT,null)!==mh&&(t=null),t},vT=function(e){kh(e)},TT=function(e){e=e.l_G.mainthread,vT(e)};me.exports.lua_State=Jr;me.exports.CallInfo=zr;me.exports.CIST_OAH=1;me.exports.CIST_LUA=2;me.exports.CIST_HOOKED=4;me.exports.CIST_FRESH=8;me.exports.CIST_YPCALL=16;me.exports.CIST_TAIL=32;me.exports.CIST_HOOKYIELD=64;me.exports.CIST_LEQ=128;me.exports.CIST_FIN=256;me.exports.EXTRA_STACK=xh;me.exports.lua_close=TT;me.exports.lua_newstate=ET;me.exports.lua_newthread=ST;me.exports.luaE_extendCI=bT;me.exports.luaE_freeCI=Ah;me.exports.luaE_freethread=kT});var Qe=I((xG,J)=>{"use strict";var{LUA_OPADD:$i,LUA_OPBAND:Uh,LUA_OPBNOT:Kh,LUA_OPBOR:Fh,LUA_OPBXOR:Mh,LUA_OPDIV:Bh,LUA_OPIDIV:Dh,LUA_OPMOD:Gh,LUA_OPMUL:qh,LUA_OPPOW:Lh,LUA_OPSHL:Hh,LUA_OPSHR:jh,LUA_OPSUB:Xh,LUA_OPUNM:Wh,constant_types:{LUA_NUMTAGS:zh,LUA_TBOOLEAN:Eh,LUA_TCCL:vh,LUA_TFUNCTION:Th,LUA_TLCF:Rh,LUA_TLCL:yh,LUA_TLIGHTUSERDATA:Nh,LUA_TLNGSTR:Xi,LUA_TNIL:Yr,LUA_TNUMBER:RT,LUA_TNUMFLT:qi,LUA_TNUMINT:Li,LUA_TSHRSTR:yT,LUA_TSTRING:NT,LUA_TTABLE:Oh,LUA_TTHREAD:Ch,LUA_TUSERDATA:wh},from_userstring:OT,luastring_indexOf:Wi,luastring_of:CT,to_jsstring:Jh,to_luastring:we}=ue(),{lisdigit:ha,lisprint:wT,lisspace:ga,lisxdigit:Zh}=Ai(),VT=Wt(),da=xt(),IT=Xt(),{luaS_bless:PT,luaS_new:UT}=yt(),KT=Nt(),{LUA_COMPAT_FLOATSTRING:FT,ldexp:MT,lua_integer2str:BT,lua_number2str:DT}=je(),dt=ns(),{MAX_INT:Yh,luai_nummod:GT,lua_assert:os}=We(),Vh=ss(),qT=zh,zi=zh+1,Tn=class{constructor(t,n){this.type=t,this.value=n}ttype(){return this.type&63}ttnov(){return this.type&15}checktag(t){return this.type===t}checktype(t){return this.ttnov()===t}ttisnumber(){return this.checktype(RT)}ttisfloat(){return this.checktag(qi)}ttisinteger(){return this.checktag(Li)}ttisnil(){return this.checktag(Yr)}ttisboolean(){return this.checktag(Eh)}ttislightuserdata(){return this.checktag(Nh)}ttisstring(){return this.checktype(NT)}ttisshrstring(){return this.checktag(yT)}ttislngstring(){return this.checktag(Xi)}ttistable(){return this.checktag(Oh)}ttisfunction(){return this.checktype(Th)}ttisclosure(){return(this.type&31)===Th}ttisCclosure(){return this.checktag(vh)}ttisLclosure(){return this.checktag(yh)}ttislcf(){return this.checktag(Rh)}ttisfulluserdata(){return this.checktag(wh)}ttisthread(){return this.checktag(Ch)}ttisdeadkey(){return this.checktag(zi)}l_isfalse(){return this.ttisnil()||this.ttisboolean()&&this.value===!1}setfltvalue(t){this.type=qi,this.value=t}chgfltvalue(t){os(this.type==qi),this.value=t}setivalue(t){this.type=Li,this.value=t}chgivalue(t){os(this.type==Li),this.value=t}setnilvalue(){this.type=Yr,this.value=null}setfvalue(t){this.type=Rh,this.value=t}setpvalue(t){this.type=Nh,this.value=t}setbvalue(t){this.type=Eh,this.value=t}setsvalue(t){this.type=Xi,this.value=t}setuvalue(t){this.type=wh,this.value=t}setthvalue(t){this.type=Ch,this.value=t}setclLvalue(t){this.type=yh,this.value=t}setclCvalue(t){this.type=vh,this.value=t}sethvalue(t){this.type=Oh,this.value=t}setdeadvalue(){this.type=zi,this.value=null}setfrom(t){this.type=t.type,this.value=t.value}tsvalue(){return os(this.ttisstring()),this.value}svalue(){return this.tsvalue().getstr()}vslen(){return this.tsvalue().tsslen()}jsstring(t,n){return Jh(this.svalue(),t,n,!0)}},LT=function(e,t){e.stack[e.top++]=new Tn(t.type,t.value)},HT=function(e,t){e.stack[e.top++]=new Tn(Xi,t)},jT=function(e,t,n){e.stack[t].setfrom(e.stack[n])},XT=function(e,t,n){e.stack[t].setfrom(n)},$h=function(e,t,n){e.stack[t].setsvalue(n)},Qh=new Tn(Yr,null);Object.freeze(Qh);J.exports.luaO_nilobject=Qh;var ma=class{constructor(t,n){this.id=t.l_G.id_counter++,this.p=null,this.nupvalues=n,this.upvals=new Array(n)}},_a=class{constructor(t,n,s){for(this.id=t.l_G.id_counter++,this.f=n,this.nupvalues=s,this.upvalue=new Array(s);s--;)this.upvalue[s]=new Tn(Yr,null)}},ba=class{constructor(t,n){this.id=t.l_G.id_counter++,this.metatable=null,this.uservalue=new Tn(Yr,null),this.len=n,this.data=Object.create(null)}},Ji=class{constructor(){this.varname=null,this.startpc=NaN,this.endpc=NaN}},Fs=we("..."),Hi=we('[string "'),ji=we('"]'),WT=function(e,t){let n=e.length,s;if(e[0]===61)n<t?(s=new Uint8Array(n-1),s.set(e.subarray(1))):(s=new Uint8Array(t),s.set(e.subarray(1,t+1)));else if(e[0]===64)n<=t?(s=new Uint8Array(n-1),s.set(e.subarray(1))):(s=new Uint8Array(t),s.set(Fs),t-=Fs.length,s.set(e.subarray(n-t),Fs.length));else{s=new Uint8Array(t);let r=Wi(e,10);s.set(Hi);let o=Hi.length;t-=Hi.length+Fs.length+ji.length,n<t&&r===-1?(s.set(e,o),o+=e.length):(r!==-1&&(n=r),n>t&&(n=t),s.set(e.subarray(0,n),o),o+=n,s.set(Fs,o),o+=Fs.length),s.set(ji,o),o+=ji.length,s=s.subarray(0,o)}return s},Qi=function(e){return ha(e)?e-48:(e&223)-55},Ms=8,eg=function(e,t){let n=1;if(os(t<=1114111),t<128)e[Ms-1]=t;else{let s=63;do e[Ms-n++]=128|t&63,t>>=6,s>>=1;while(t>s);e[Ms-n]=~s<<1|t}return n},zT=30,JT=function(e){let t=0,n=0,s=0,r=0,o=0,a,l=!1;for(;ga(e[t]);)t++;if(((a=e[t]===45)||e[t]===43)&&t++,!(e[t]===48&&(e[t+1]===120||e[t+1]===88)))return null;for(t+=2;;t++)if(e[t]===46){if(l)break;l=!0}else if(Zh(e[t]))s===0&&e[t]===48?r++:++s<=zT?n=n*16+Qi(e[t]):o++,l&&o--;else break;if(r+s===0)return null;if(o*=4,e[t]===112||e[t]===80){let i=0,u;if(t++,((u=e[t]===45)||e[t]===43)&&t++,!ha(e[t]))return null;for(;ha(e[t]);)i=i*10+e[t++]-48;u&&(i=-i),o+=i}return a&&(n=-n),{n:MT(n,o),i:t}},ZT=function(e){try{e=Jh(e)}catch{return null}let t=/^[\t\v\f \n\r]*[+-]?(?:[0-9]+\.?[0-9]*|\.[0-9]*)(?:[eE][+-]?[0-9]+)?/.exec(e);if(!t)return null;let n=parseFloat(t[0]);return isNaN(n)?null:{n,i:t[0].length}},YT=function(e,t){let n=t==="x"?JT(e):ZT(e);if(n===null)return null;for(;ga(e[n.i]);)n.i++;return n.i===e.length||e[n.i]===0?n:null},$T=[46,120,88,110,78],QT={46:".",120:"x",88:"x",110:"n",78:"n"},eR=function(e){let t=e.length,n=0;for(let o=0;o<t;o++){let a=e[o];if($T.indexOf(a)!==-1){n=a;break}}let s=QT[n];return s==="n"?null:YT(e,s)},Ih=Math.floor(Yh/10),tR=Yh%10,nR=function(e){let t=0,n=0,s=!0,r;for(;ga(e[t]);)t++;if(((r=e[t]===45)||e[t]===43)&&t++,e[t]===48&&(e[t+1]===120||e[t+1]===88))for(t+=2;t<e.length&&Zh(e[t]);t++)n=n*16+Qi(e[t])|0,s=!1;else for(;t<e.length&&ha(e[t]);t++){let o=e[t]-48;if(n>=Ih&&(n>Ih||o>tR+r))return null;n=n*10+o|0,s=!1}for(;t<e.length&&ga(e[t]);)t++;return s||t!==e.length&&e[t]!==0?null:{n:(r?-n:n)|0,i:t}},sR=function(e,t){let n=nR(e);return n!==null?(t.setivalue(n.n),n.i+1):(n=eR(e),n!==null?(t.setfltvalue(n.n),n.i+1):0)},Zi=function(e,t){let n;if(t.ttisinteger())n=we(BT(t.value));else{let s=DT(t.value);!FT&&/^[-0123456789]+$/.test(s)&&(s+=".0"),n=we(s)}t.setsvalue(PT(e,n))},ze=function(e,t){da.luaD_inctop(e),$h(e,e.top-1,UT(e,t))},tg=function(e,t,n){let s=0,r=0,o=0,a;for(;a=Wi(t,37,r),a!=-1;){switch(ze(e,t.subarray(r,a)),t[a+1]){case 115:{let l=n[o++];if(l===null)l=we("(null)",!0);else{l=OT(l);let i=Wi(l,0);i!==-1&&(l=l.subarray(0,i))}ze(e,l);break}case 99:{let l=n[o++];wT(l)?ze(e,CT(l)):ng(e,we("<\\%d>",!0),l);break}case 100:case 73:da.luaD_inctop(e),e.stack[e.top-1].setivalue(n[o++]),Zi(e,e.stack[e.top-1]);break;case 102:da.luaD_inctop(e),e.stack[e.top-1].setfltvalue(n[o++]),Zi(e,e.stack[e.top-1]);break;case 112:{let l=n[o++];if(l instanceof IT.lua_State||l instanceof KT.Table||l instanceof ba||l instanceof ma||l instanceof _a)ze(e,we("0x"+l.id.toString(16)));else switch(typeof l){case"undefined":ze(e,we("undefined"));break;case"number":ze(e,we("Number("+l+")"));break;case"string":ze(e,we("String("+JSON.stringify(l)+")"));break;case"boolean":ze(e,we(l?"Boolean(true)":"Boolean(false)"));break;case"object":if(l===null){ze(e,we("null"));break}case"function":{let i=e.l_G.ids.get(l);i||(i=e.l_G.id_counter++,e.l_G.ids.set(l,i)),ze(e,we("0x"+i.toString(16)));break}default:ze(e,we("<id NYI>"))}break}case 85:{let l=new Uint8Array(Ms),i=eg(l,n[o++]);ze(e,l.subarray(Ms-i));break}case 37:ze(e,we("%",!0));break;default:VT.luaG_runerror(e,we("invalid option '%%%c' to 'lua_pushfstring'"),t[a+1])}s+=2,r=a+2}return da.luaD_checkstack(e,1),ze(e,t.subarray(r)),s>0&&dt.luaV_concat(e,s+1),e.stack[e.top-1].svalue()},ng=function(e,t,...n){return tg(e,t,n)},rR=function(e){let t=0;if(e<8)return e;for(;e>=128;)e=e+15>>4,t+=4;for(;e>=16;)e=e+1>>1,t++;return t+1<<3|e-8},Ph=function(e,t,n,s){switch(t){case $i:return n+s;case Xh:return n-s;case qh:return dt.luaV_imul(n,s);case Gh:return dt.luaV_mod(e,n,s);case Dh:return dt.luaV_div(e,n,s);case Uh:return n&s;case Fh:return n|s;case Mh:return n^s;case Hh:return dt.luaV_shiftl(n,s);case jh:return dt.luaV_shiftl(n,-s);case Wh:return 0-n;case Kh:return-1^n;default:os(0)}},Yi=function(e,t,n,s){switch(t){case $i:return n+s;case Xh:return n-s;case qh:return n*s;case Bh:return n/s;case Lh:return Math.pow(n,s);case Dh:return Math.floor(n/s);case Wh:return-n;case Gh:return GT(e,n,s);default:os(0)}},oR=function(e,t,n,s,r){let o=typeof r=="number"?e.stack[r]:r;switch(t){case Uh:case Fh:case Mh:case Hh:case jh:case Kh:{let a,l;if((a=dt.tointeger(n))!==!1&&(l=dt.tointeger(s))!==!1){o.setivalue(Ph(e,t,a,l));return}else break}case Bh:case Lh:{let a,l;if((a=dt.tonumber(n))!==!1&&(l=dt.tonumber(s))!==!1){o.setfltvalue(Yi(e,t,a,l));return}else break}default:{let a,l;if(n.ttisinteger()&&s.ttisinteger()){o.setivalue(Ph(e,t,n.value,s.value));return}else if((a=dt.tonumber(n))!==!1&&(l=dt.tonumber(s))!==!1){o.setfltvalue(Yi(e,t,a,l));return}else break}}os(e!==null),Vh.luaT_trybinTM(e,n,s,r,t-$i+Vh.TMS.TM_ADD)};J.exports.CClosure=_a;J.exports.LClosure=ma;J.exports.LUA_TDEADKEY=zi;J.exports.LUA_TPROTO=qT;J.exports.LocVar=Ji;J.exports.TValue=Tn;J.exports.Udata=ba;J.exports.UTF8BUFFSZ=Ms;J.exports.luaO_arith=oR;J.exports.luaO_chunkid=WT;J.exports.luaO_hexavalue=Qi;J.exports.luaO_int2fb=rR;J.exports.luaO_pushfstring=ng;J.exports.luaO_pushvfstring=tg;J.exports.luaO_str2num=sR;J.exports.luaO_tostring=Zi;J.exports.luaO_utf8esc=eg;J.exports.numarith=Yi;J.exports.pushobj2s=LT;J.exports.pushsvalue2s=HT;J.exports.setobjs2s=jT;J.exports.setobj2s=XT;J.exports.setsvalue2s=$h});var rs=I((AG,Rn)=>{"use strict";var{constant_types:{LUA_TNIL:aR}}=ue(),tc=Qe(),ec=class{constructor(t){this.id=t.l_G.id_counter++,this.k=[],this.p=[],this.code=[],this.cache=null,this.lineinfo=[],this.upvalues=[],this.numparams=0,this.is_vararg=!1,this.maxstacksize=0,this.locvars=[],this.linedefined=0,this.lastlinedefined=0,this.source=null}},lR=function(e,t){return new tc.LClosure(e,t)},iR=function(e,t){return e.stack[t]},cR=function(e,t){for(let n=t;n<e.top;n++){let s=e.stack[n];e.stack[n]=new tc.TValue(s.type,s.value)}},uR=function(e,t){for(let n=0;n<t.nupvalues;n++)t.upvals[n]=new tc.TValue(aR,null)},pR=function(e,t,n){for(let s=0;s<e.locvars.length&&e.locvars[s].startpc<=n;s++)if(n<e.locvars[s].endpc&&(t--,t===0))return e.locvars[s].varname.getstr();return null};Rn.exports.MAXUPVAL=255;Rn.exports.Proto=ec;Rn.exports.luaF_findupval=iR;Rn.exports.luaF_close=cR;Rn.exports.luaF_getlocalname=pR;Rn.exports.luaF_initupvals=uR;Rn.exports.luaF_newLclosure=lR});var $r=I((SG,wt)=>{"use strict";var{lua_assert:sg}=We(),nc=class{constructor(){this.buffer=null,this.n=0}},fR=function(e){return e.buffer.subarray(0,e.n)},dR=function(e,t){e.n-=t},hR=function(e){e.n=0},gR=function(e,t,n){let s=new Uint8Array(n);t.buffer&&s.set(t.buffer),t.buffer=s},sc=class{constructor(t,n,s){this.L=t,sg(typeof n=="function","ZIO requires a reader"),this.reader=n,this.data=s,this.n=0,this.buffer=null,this.off=0}zgetc(){return this.n-- >0?this.buffer[this.off++]:rc(this)}},xa=-1,rc=function(e){let t=e.reader(e.L,e.data);if(t===null)return xa;sg(t instanceof Uint8Array,"Should only load binary of array of bytes");let n=t.length;return n===0?xa:(e.buffer=t,e.off=0,e.n=n-1,e.buffer[e.off++])},mR=function(e,t,n,s){for(;s;){if(e.n===0){if(rc(e)===xa)return s;e.n++,e.off--}let r=s<=e.n?s:e.n;for(let o=0;o<r;o++)t[n++]=e.buffer[e.off++];e.n-=r,e.n===0&&(e.buffer=null),s-=r}return 0};wt.exports.EOZ=xa;wt.exports.luaZ_buffer=fR;wt.exports.luaZ_buffremove=dR;wt.exports.luaZ_fill=rc;wt.exports.luaZ_read=mR;wt.exports.luaZ_resetbuffer=hR;wt.exports.luaZ_resizebuffer=gR;wt.exports.MBuffer=nc;wt.exports.ZIO=sc});var Ra=I((kG,nt)=>{"use strict";var{constant_types:{LUA_TBOOLEAN:_R,LUA_TLNGSTR:bR},thread_status:{LUA_ERRSYNTAX:xR},to_luastring:_e}=ue(),{LUA_MINBUFFER:AR,MAX_INT:ag,lua_assert:Ds}=We(),SR=Wt(),kR=xt(),{lisdigit:Ea,lislalnum:ER,lislalpha:vR,lisspace:TR,lisxdigit:cc}=Ai(),tt=Qe(),{luaS_bless:RR,luaS_hash:yR,luaS_hashlongstr:uc,luaS_new:NR}=yt(),OR=Nt(),{EOZ:Gs,luaZ_buffer:pc,luaZ_buffremove:Qr,luaZ_resetbuffer:Aa,luaZ_resizebuffer:lg}=$r(),w=257,ig=_e("_ENV",!0),CR=w,wR=w+1,VR=w+2,IR=w+3,PR=w+4,UR=w+5,KR=w+6,FR=w+7,MR=w+8,BR=w+9,DR=w+10,GR=w+11,qR=w+12,LR=w+13,HR=w+14,jR=w+15,XR=w+16,WR=w+17,zR=w+18,JR=w+19,ZR=w+20,YR=w+21,cg=w+22,ug=w+23,pg=w+24,fg=w+25,dg=w+26,hg=w+27,gg=w+28,mg=w+29,_g=w+30,bg=w+31,zt=w+32,Sa=w+33,fc=w+34,dc=w+35,as=w+36,$R={TK_AND:CR,TK_BREAK:wR,TK_DO:VR,TK_ELSE:IR,TK_ELSEIF:PR,TK_END:UR,TK_FALSE:KR,TK_FOR:FR,TK_FUNCTION:MR,TK_GOTO:BR,TK_IF:DR,TK_IN:GR,TK_LOCAL:qR,TK_NIL:LR,TK_NOT:HR,TK_OR:jR,TK_REPEAT:XR,TK_RETURN:WR,TK_THEN:zR,TK_TRUE:JR,TK_UNTIL:ZR,TK_WHILE:YR,TK_IDIV:cg,TK_CONCAT:ug,TK_DOTS:pg,TK_EQ:fg,TK_GE:dg,TK_LE:hg,TK_NE:gg,TK_SHL:mg,TK_SHR:_g,TK_DBCOLON:bg,TK_EOS:zt,TK_FLT:Sa,TK_INT:fc,TK_NAME:dc,TK_STRING:as},hc=["and","break","do","else","elseif","end","false","for","function","goto","if","in","local","nil","not","or","repeat","return","then","true","until","while","//","..","...","==",">=","<=","~=","<<",">>","::","<eof>","<number>","<integer>","<name>","<string>"].map((e,t)=>_e(e)),eo=class{constructor(){this.r=NaN,this.i=NaN,this.ts=null}},ka=class{constructor(){this.token=NaN,this.seminfo=new eo}},ac=class{constructor(){this.current=NaN,this.linenumber=NaN,this.lastline=NaN,this.t=new ka,this.lookahead=new ka,this.fs=null,this.L=null,this.z=null,this.buff=null,this.h=null,this.dyd=null,this.source=null,this.envn=null}},va=function(e,t){let n=e.buff;if(n.n+1>n.buffer.length){n.buffer.length>=ag/2&&Jt(e,_e("lexical element too long",!0),0);let s=n.buffer.length*2;lg(e.L,n,s)}n.buffer[n.n++]=t<0?255+t+1:t},xg=function(e,t){if(t<w)return tt.luaO_pushfstring(e.L,_e("'%c'",!0),t);{let n=hc[t-w];return t<zt?tt.luaO_pushfstring(e.L,_e("'%s'",!0),n):n}},to=function(e){return e.current===10||e.current===13},he=function(e){e.current=e.z.zgetc()},le=function(e){va(e,e.current),he(e)},QR=new tt.TValue(_R,!0),Ta=function(e,t){let n=e.L,s=NR(n,t),r=e.h.strong.get(uc(s));if(r)s=r.key.tsvalue();else{let o=new tt.TValue(bR,s);OR.luaH_setfrom(n,e.h,o,QR)}return s},no=function(e){let t=e.current;Ds(to(e)),he(e),to(e)&&e.current!==t&&he(e),++e.linenumber>=ag&&Jt(e,_e("chunk has too many lines",!0),0)},e1=function(e,t,n,s,r){t.t={token:0,seminfo:new eo},t.L=e,t.current=r,t.lookahead={token:zt,seminfo:new eo},t.z=n,t.fs=null,t.linenumber=1,t.lastline=1,t.source=s,t.envn=RR(e,ig),lg(e,t.buff,AR)},Vt=function(e,t){return e.current===t?(he(e),!0):!1},oc=function(e,t){return e.current===t[0].charCodeAt(0)||e.current===t[1].charCodeAt(0)?(le(e),!0):!1},rg=function(e,t){let n="Ee",s=e.current;for(Ds(Ea(e.current)),le(e),s===48&&oc(e,"xX")&&(n="Pp");;)if(oc(e,n)&&oc(e,"-+"),cc(e.current))le(e);else if(e.current===46)le(e);else break;let r=new tt.TValue;return tt.luaO_str2num(pc(e.buff),r)===0&&Jt(e,_e("malformed number",!0),Sa),r.ttisinteger()?(t.i=r.value,fc):(Ds(r.ttisfloat()),t.r=r.value,Sa)},t1=function(e,t){switch(t){case dc:case as:case Sa:case fc:return tt.luaO_pushfstring(e.L,_e("'%s'",!0),pc(e.buff));default:return xg(e,t)}},Jt=function(e,t,n){t=SR.luaG_addinfo(e.L,t,e.source,e.linenumber),n&&tt.luaO_pushfstring(e.L,_e("%s near %s"),t,t1(e,n)),kR.luaD_throw(e.L,xR)},n1=function(e,t){Jt(e,t,e.t.token)},lc=function(e){let t=0,n=e.current;for(Ds(n===91||n===93),le(e);e.current===61;)le(e),t++;return e.current===n?t:-t-1},og=function(e,t,n){let s=e.linenumber;le(e),to(e)&&no(e);let r=!1;for(;!r;)switch(e.current){case Gs:{let a=`unfinished long ${t?"string":"comment"} (starting at line ${s})`;Jt(e,_e(a),zt);break}case 93:{lc(e)===n&&(le(e),r=!0);break}case 10:case 13:{va(e,10),no(e),t||Aa(e.buff);break}default:t?le(e):he(e)}t&&(t.ts=Ta(e,e.buff.buffer.subarray(2+n,e.buff.n-(2+n))))},Bs=function(e,t,n){t||(e.current!==Gs&&le(e),Jt(e,n,as))},ic=function(e){return le(e),Bs(e,cc(e.current),_e("hexadecimal digit expected",!0)),tt.luaO_hexavalue(e.current)},s1=function(e){let t=ic(e);return t=(t<<4)+ic(e),Qr(e.buff,2),t},r1=function(e){let t=4;le(e),Bs(e,e.current===123,_e("missing '{'",!0));let n=ic(e);for(le(e);cc(e.current);)t++,n=(n<<4)+tt.luaO_hexavalue(e.current),Bs(e,n<=1114111,_e("UTF-8 value too large",!0)),le(e);return Bs(e,e.current===125,_e("missing '}'",!0)),he(e),Qr(e.buff,t),n},o1=function(e){let t=new Uint8Array(tt.UTF8BUFFSZ),n=tt.luaO_utf8esc(t,r1(e));for(;n>0;n--)va(e,t[tt.UTF8BUFFSZ-n])},a1=function(e){let t=0,n;for(n=0;n<3&&Ea(e.current);n++)t=10*t+e.current-48,le(e);return Bs(e,t<=255,_e("decimal escape too large",!0)),Qr(e.buff,n),t},l1=function(e,t,n){for(le(e);e.current!==t;)switch(e.current){case Gs:Jt(e,_e("unfinished string",!0),zt);break;case 10:case 13:Jt(e,_e("unfinished string",!0),as);break;case 92:{le(e);let s,r;switch(e.current){case 97:r=7,s="read_save";break;case 98:r=8,s="read_save";break;case 102:r=12,s="read_save";break;case 110:r=10,s="read_save";break;case 114:r=13,s="read_save";break;case 116:r=9,s="read_save";break;case 118:r=11,s="read_save";break;case 120:r=s1(e),s="read_save";break;case 117:o1(e),s="no_save";break;case 10:case 13:no(e),r=10,s="only_save";break;case 92:case 34:case 39:r=e.current,s="read_save";break;case Gs:s="no_save";break;case 122:{for(Qr(e.buff,1),he(e);TR(e.current);)to(e)?no(e):he(e);s="no_save";break}default:{Bs(e,Ea(e.current),_e("invalid escape sequence",!0)),r=a1(e),s="only_save";break}}s==="read_save"&&he(e),(s==="read_save"||s==="only_save")&&(Qr(e.buff,1),va(e,r));break}default:le(e)}le(e),n.ts=Ta(e,e.buff.buffer.subarray(1,e.buff.n-1))},gc=Object.create(null);hc.forEach((e,t)=>gc[yR(e)]=t);var i1=function(e){let t=gc[uc(e)];return t!==void 0&&t<=22},Ag=function(e,t){for(Aa(e.buff);;)switch(Ds(typeof e.current=="number"),e.current){case 10:case 13:{no(e);break}case 32:case 12:case 9:case 11:{he(e);break}case 45:{if(he(e),e.current!==45)return 45;if(he(e),e.current===91){let n=lc(e);if(Aa(e.buff),n>=0){og(e,null,n),Aa(e.buff);break}}for(;!to(e)&&e.current!==Gs;)he(e);break}case 91:{let n=lc(e);return n>=0?(og(e,t,n),as):(n!==-1&&Jt(e,_e("invalid long string delimiter",!0),as),91)}case 61:return he(e),Vt(e,61)?fg:61;case 60:return he(e),Vt(e,61)?hg:Vt(e,60)?mg:60;case 62:return he(e),Vt(e,61)?dg:Vt(e,62)?_g:62;case 47:return he(e),Vt(e,47)?cg:47;case 126:return he(e),Vt(e,61)?gg:126;case 58:return he(e),Vt(e,58)?bg:58;case 34:case 39:return l1(e,e.current,t),as;case 46:return le(e),Vt(e,46)?Vt(e,46)?pg:ug:Ea(e.current)?rg(e,t):46;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return rg(e,t);case Gs:return zt;default:if(vR(e.current)){do le(e);while(ER(e.current));let n=Ta(e,pc(e.buff));t.ts=n;let s=gc[uc(n)];return s!==void 0&&s<=22?s+w:dc}else{let n=e.current;return he(e),n}}},c1=function(e){e.lastline=e.linenumber,e.lookahead.token!==zt?(e.t.token=e.lookahead.token,e.t.seminfo.i=e.lookahead.seminfo.i,e.t.seminfo.r=e.lookahead.seminfo.r,e.t.seminfo.ts=e.lookahead.seminfo.ts,e.lookahead.token=zt):e.t.token=Ag(e,e.t.seminfo)},u1=function(e){return Ds(e.lookahead.token===zt),e.lookahead.token=Ag(e,e.lookahead.seminfo),e.lookahead.token};nt.exports.FIRST_RESERVED=w;nt.exports.LUA_ENV=ig;nt.exports.LexState=ac;nt.exports.RESERVED=$R;nt.exports.isreserved=i1;nt.exports.luaX_lookahead=u1;nt.exports.luaX_newstring=Ta;nt.exports.luaX_next=c1;nt.exports.luaX_setinput=e1;nt.exports.luaX_syntaxerror=n1;nt.exports.luaX_token2str=xg;nt.exports.luaX_tokens=hc});var Wg=I((EG,O)=>{"use strict";var{LUA_MULTRET:bc,LUA_OPADD:p1,LUA_OPBAND:f1,LUA_OPBNOT:d1,LUA_OPBOR:h1,LUA_OPBXOR:g1,LUA_OPDIV:m1,LUA_OPIDIV:_1,LUA_OPMOD:b1,LUA_OPSHL:x1,LUA_OPSHR:A1,LUA_OPUNM:S1,constant_types:{LUA_TBOOLEAN:k1,LUA_TLIGHTUSERDATA:E1,LUA_TLNGSTR:v1,LUA_TNIL:T1,LUA_TNUMFLT:Ng,LUA_TNUMINT:xc,LUA_TTABLE:R1},to_luastring:Ac}=ue(),{lua_assert:te}=We(),Sc=Ra(),kc=Qe(),S=es(),j=Nc(),Sg=Nt(),kg=ns(),M=S.OpCodesI,It=kc.TValue,y1=255,W=-1,C={OPR_ADD:0,OPR_SUB:1,OPR_MUL:2,OPR_MOD:3,OPR_POW:4,OPR_DIV:5,OPR_IDIV:6,OPR_BAND:7,OPR_BOR:8,OPR_BXOR:9,OPR_SHL:10,OPR_SHR:11,OPR_CONCAT:12,OPR_EQ:13,OPR_LT:14,OPR_LE:15,OPR_NE:16,OPR_GT:17,OPR_GE:18,OPR_AND:19,OPR_OR:20,OPR_NOBINOPR:21},so={OPR_MINUS:0,OPR_BNOT:1,OPR_NOT:2,OPR_LEN:3,OPR_NOUNOPR:4},Ls=function(e){return e.t!==e.f},mc=function(e,t){let n=j.expkind;if(Ls(e))return!1;switch(e.k){case n.VKINT:return t?new It(xc,e.u.ival):!0;case n.VKFLT:return t?new It(Ng,e.u.nval):!0;default:return!1}},Og=function(e,t,n){let s,r=t+n-1;if(e.pc>e.lasttarget&&(s=e.f.code[e.pc-1],s.opcode===M.OP_LOADNIL)){let o=s.A,a=o+s.B;if(o<=t&&t<=a+1||t<=o&&o<=r+1){o<t&&(t=o),a>r&&(r=a),S.SETARG_A(s,t),S.SETARG_B(s,r-t);return}}Ve(e,M.OP_LOADNIL,t,n-1,0)},Zt=function(e,t){return e.f.code[t.u.info]},qs=function(e,t){let n=e.f.code[t].sBx;return n===W?W:t+1+n},_c=function(e,t,n){let s=e.f.code[t],r=n-(t+1);te(n!==W),Math.abs(r)>S.MAXARG_sBx&&Sc.luaX_syntaxerror(e.ls,Ac("control structure too long",!0)),S.SETARG_sBx(s,r)},yn=function(e,t,n){if(n===W)return t;if(t===W)t=n;else{let s=t,r=qs(e,s);for(;r!==W;)s=r,r=qs(e,s);_c(e,s,n)}return t},Ca=function(e){let t=e.jpc;e.jpc=W;let n=Pg(e,M.OP_JMP,0,W);return n=yn(e,n,t),n},N1=function(e,t){return Ig(e,Ca(e),t)},O1=function(e,t,n){Ve(e,M.OP_RETURN,t,n+1,0)},ro=function(e,t,n,s,r){return Ve(e,t,n,s,r),Ca(e)},wa=function(e){return e.lasttarget=e.pc,e.pc},Cg=function(e,t){return t>=1&&S.testTMode(e.f.code[t-1].opcode)?t-1:t},wg=function(e,t){return e.f.code[Cg(e,t)]},Vg=function(e,t,n){let s=Cg(e,t),r=e.f.code[s];return r.opcode!==M.OP_TESTSET?!1:(n!==S.NO_REG&&n!==r.B?S.SETARG_A(r,n):e.f.code[s]=S.CREATE_ABC(M.OP_TEST,r.B,0,r.C),!0)},Eg=function(e,t){for(;t!==W;t=qs(e,t))Vg(e,t,S.NO_REG)},Na=function(e,t,n,s,r){for(;t!==W;){let o=qs(e,t);Vg(e,t,s)?_c(e,t,n):_c(e,t,r),t=o}},C1=function(e){Na(e,e.jpc,e.pc,S.NO_REG,e.pc),e.jpc=W},oo=function(e,t){wa(e),e.jpc=yn(e,e.jpc,t)},Ig=function(e,t,n){n===e.pc?oo(e,t):(te(n<e.pc),Na(e,t,n,S.NO_REG,n))},w1=function(e,t,n){for(n++;t!==W;t=qs(e,t)){let s=e.f.code[t];te(s.opcode===M.OP_JMP&&(s.A===0||s.A>=n)),S.SETARG_A(s,n)}},Va=function(e,t){let n=e.f;return C1(e),n.code[e.pc]=t,n.lineinfo[e.pc]=e.ls.lastline,e.pc++},Ve=function(e,t,n,s,r){return te(S.getOpMode(t)===S.iABC),te(S.getBMode(t)!==S.OpArgN||s===0),te(S.getCMode(t)!==S.OpArgN||r===0),te(n<=S.MAXARG_A&&s<=S.MAXARG_B&&r<=S.MAXARG_C),Va(e,S.CREATE_ABC(t,n,s,r))},Oa=function(e,t,n,s){return te(S.getOpMode(t)===S.iABx||S.getOpMode(t)===S.iAsBx),te(S.getCMode(t)===S.OpArgN),te(n<=S.MAXARG_A&&s<=S.MAXARG_Bx),Va(e,S.CREATE_ABx(t,n,s))},Pg=function(e,t,n,s){return Oa(e,t,n,s+S.MAXARG_sBx)},Ug=function(e,t){return te(t<=S.MAXARG_Ax),Va(e,S.CREATE_Ax(M.OP_EXTRAARG,t))},ya=function(e,t,n){if(n<=S.MAXARG_Bx)return Oa(e,M.OP_LOADK,t,n);{let s=Oa(e,M.OP_LOADKX,t,0);return Ug(e,n),s}},Kg=function(e,t){let n=e.freereg+t;n>e.f.maxstacksize&&(n>=y1&&Sc.luaX_syntaxerror(e.ls,Ac("function or expression needs too many registers",!0)),e.f.maxstacksize=n)},ao=function(e,t){Kg(e,t),e.freereg+=t},ls=function(e,t){!S.ISK(t)&&t>=e.nactvar&&(e.freereg--,te(t===e.freereg))},Yt=function(e,t){t.k===j.expkind.VNONRELOC&&ls(e,t.u.info)},Fg=function(e,t,n){let s=t.k===j.expkind.VNONRELOC?t.u.info:-1,r=n.k===j.expkind.VNONRELOC?n.u.info:-1;s>r?(ls(e,s),ls(e,r)):(ls(e,r),ls(e,s))},lo=function(e,t,n){let s=e.f,r=Sg.luaH_get(e.L,e.ls.h,t);if(r.ttisinteger()){let a=r.value;if(a<e.nk&&s.k[a].ttype()===n.ttype()&&s.k[a].value===n.value)return a}let o=e.nk;return Sg.luaH_setfrom(e.L,e.ls.h,t,new kc.TValue(xc,o)),s.k[o]=n,e.nk++,o},V1=function(e,t){let n=new It(v1,t);return lo(e,n,n)},Ec=function(e,t){let n=new It(E1,t),s=new It(xc,t);return lo(e,n,s)},vc=function(e,t){let n=new It(Ng,t);return lo(e,n,n)},vg=function(e,t){let n=new It(k1,t);return lo(e,n,n)},I1=function(e){let t=new It(T1,null),n=new It(R1,e.ls.h);return lo(e,n,t)},Mg=function(e,t,n){let s=j.expkind;if(t.k===s.VCALL)S.SETARG_C(Zt(e,t),n+1);else if(t.k===s.VVARARG){let r=Zt(e,t);S.SETARG_B(r,n+1),S.SETARG_A(r,e.freereg),ao(e,1)}else te(n===bc)},P1=function(e,t){Mg(e,t,bc)},Bg=function(e,t){let n=j.expkind;t.k===n.VCALL?(te(Zt(e,t).C===2),t.k=n.VNONRELOC,t.u.info=Zt(e,t).A):t.k===n.VVARARG&&(S.SETARG_B(Zt(e,t),2),t.k=n.VRELOCABLE)},Pt=function(e,t){let n=j.expkind;switch(t.k){case n.VLOCAL:{t.k=n.VNONRELOC;break}case n.VUPVAL:{t.u.info=Ve(e,M.OP_GETUPVAL,0,t.u.info,0),t.k=n.VRELOCABLE;break}case n.VINDEXED:{let s;ls(e,t.u.ind.idx),t.u.ind.vt===n.VLOCAL?(ls(e,t.u.ind.t),s=M.OP_GETTABLE):(te(t.u.ind.vt===n.VUPVAL),s=M.OP_GETTABUP),t.u.info=Ve(e,s,0,t.u.ind.t,t.u.ind.idx),t.k=n.VRELOCABLE;break}case n.VVARARG:case n.VCALL:{Bg(e,t);break}default:break}},Tg=function(e,t,n,s){return wa(e),Ve(e,M.OP_LOADBOOL,t,n,s)},Dg=function(e,t,n){let s=j.expkind;switch(Pt(e,t),t.k){case s.VNIL:{Og(e,n,1);break}case s.VFALSE:case s.VTRUE:{Ve(e,M.OP_LOADBOOL,n,t.k===s.VTRUE,0);break}case s.VK:{ya(e,n,t.u.info);break}case s.VKFLT:{ya(e,n,vc(e,t.u.nval));break}case s.VKINT:{ya(e,n,Ec(e,t.u.ival));break}case s.VRELOCABLE:{let r=Zt(e,t);S.SETARG_A(r,n);break}case s.VNONRELOC:{n!==t.u.info&&Ve(e,M.OP_MOVE,n,t.u.info,0);break}default:{te(t.k===s.VJMP);return}}t.u.info=n,t.k=s.VNONRELOC},Gg=function(e,t){t.k!==j.expkind.VNONRELOC&&(ao(e,1),Dg(e,t,e.freereg-1))},Rg=function(e,t){for(;t!==W;t=qs(e,t))if(wg(e,t).opcode!==M.OP_TESTSET)return!0;return!1},Tc=function(e,t,n){let s=j.expkind;if(Dg(e,t,n),t.k===s.VJMP&&(t.t=yn(e,t.t,t.u.info)),Ls(t)){let r,o=W,a=W;if(Rg(e,t.t)||Rg(e,t.f)){let l=t.k===s.VJMP?W:Ca(e);o=Tg(e,n,0,1),a=Tg(e,n,1,0),oo(e,l)}r=wa(e),Na(e,t.f,r,n,o),Na(e,t.t,r,n,a)}t.f=t.t=W,t.u.info=n,t.k=s.VNONRELOC},Ia=function(e,t){Pt(e,t),Yt(e,t),ao(e,1),Tc(e,t,e.freereg-1)},is=function(e,t){if(Pt(e,t),t.k===j.expkind.VNONRELOC){if(!Ls(t))return t.u.info;if(t.u.info>=e.nactvar)return Tc(e,t,t.u.info),t.u.info}return Ia(e,t),t.u.info},U1=function(e,t){(t.k!==j.expkind.VUPVAL||Ls(t))&&is(e,t)},Rc=function(e,t){Ls(t)?is(e,t):Pt(e,t)},$t=function(e,t){let n=j.expkind,s=!1;switch(Rc(e,t),t.k){case n.VTRUE:t.u.info=vg(e,!0),s=!0;break;case n.VFALSE:t.u.info=vg(e,!1),s=!0;break;case n.VNIL:t.u.info=I1(e),s=!0;break;case n.VKINT:t.u.info=Ec(e,t.u.ival),s=!0;break;case n.VKFLT:t.u.info=vc(e,t.u.nval),s=!0;break;case n.VK:s=!0;break;default:break}return s&&(t.k=n.VK,t.u.info<=S.MAXINDEXRK)?S.RKASK(t.u.info):is(e,t)},K1=function(e,t,n){let s=j.expkind;switch(t.k){case s.VLOCAL:{Yt(e,n),Tc(e,n,t.u.info);return}case s.VUPVAL:{let r=is(e,n);Ve(e,M.OP_SETUPVAL,r,t.u.info,0);break}case s.VINDEXED:{let r=t.u.ind.vt===s.VLOCAL?M.OP_SETTABLE:M.OP_SETTABUP,o=$t(e,n);Ve(e,r,t.u.ind.t,t.u.ind.idx,o);break}}Yt(e,n)},F1=function(e,t,n){is(e,t);let s=t.u.info;Yt(e,t),t.u.info=e.freereg,t.k=j.expkind.VNONRELOC,ao(e,2),Ve(e,M.OP_SELF,t.u.info,s,$t(e,n)),Yt(e,n)},qg=function(e,t){let n=wg(e,t.u.info);te(S.testTMode(n.opcode)&&n.opcode!==M.OP_TESTSET&&n.opcode!==M.OP_TEST),S.SETARG_A(n,!n.A)},Lg=function(e,t,n){if(t.k===j.expkind.VRELOCABLE){let s=Zt(e,t);if(s.opcode===M.OP_NOT)return e.pc--,ro(e,M.OP_TEST,s.B,0,!n)}return Gg(e,t),Yt(e,t),ro(e,M.OP_TESTSET,S.NO_REG,t.u.info,n)},Hg=function(e,t){let n=j.expkind,s;switch(Pt(e,t),t.k){case n.VJMP:{qg(e,t),s=t.u.info;break}case n.VK:case n.VKFLT:case n.VKINT:case n.VTRUE:{s=W;break}default:{s=Lg(e,t,0);break}}t.f=yn(e,t.f,s),oo(e,t.t),t.t=W},jg=function(e,t){let n=j.expkind,s;switch(Pt(e,t),t.k){case n.VJMP:{s=t.u.info;break}case n.VNIL:case n.VFALSE:{s=W;break}default:{s=Lg(e,t,1);break}}t.t=yn(e,t.t,s),oo(e,t.f),t.f=W},M1=function(e,t){let n=j.expkind;switch(Pt(e,t),t.k){case n.VNIL:case n.VFALSE:{t.k=n.VTRUE;break}case n.VK:case n.VKFLT:case n.VKINT:case n.VTRUE:{t.k=n.VFALSE;break}case n.VJMP:{qg(e,t);break}case n.VRELOCABLE:case n.VNONRELOC:{Gg(e,t),Yt(e,t),t.u.info=Ve(e,M.OP_NOT,0,t.u.info,0),t.k=n.VRELOCABLE;break}}{let s=t.f;t.f=t.t,t.t=s}Eg(e,t.f),Eg(e,t.t)},B1=function(e,t,n){let s=j.expkind;te(!Ls(t)&&(j.vkisinreg(t.k)||t.k===s.VUPVAL)),t.u.ind.t=t.u.info,t.u.ind.idx=$t(e,n),t.u.ind.vt=t.k===s.VUPVAL?s.VUPVAL:s.VLOCAL,t.k=s.VINDEXED},D1=function(e,t,n){switch(e){case f1:case h1:case g1:case x1:case A1:case d1:return kg.tointeger(t)!==!1&&kg.tointeger(n)!==!1;case m1:case _1:case b1:return n.value!==0;default:return 1}},Xg=function(e,t,n){let s=j.expkind,r,o;if(!(r=mc(t,!0))||!(o=mc(n,!0))||!D1(e,r,o))return 0;let a=new It;if(kc.luaO_arith(null,e,r,o,a),a.ttisinteger())t.k=s.VKINT,t.u.ival=a.value;else{let l=a.value;if(isNaN(l)||l===0)return!1;t.k=s.VKFLT,t.u.nval=l}return!0},G1=function(e,t,n,s){let r=is(e,n);Yt(e,n),n.u.info=Ve(e,t,0,r,0),n.k=j.expkind.VRELOCABLE,yc(e,s)},yg=function(e,t,n,s,r){let o=$t(e,s),a=$t(e,n);Fg(e,n,s),n.u.info=Ve(e,t,0,a,o),n.k=j.expkind.VRELOCABLE,yc(e,r)},q1=function(e,t,n,s){let r=j.expkind,o;n.k===r.VK?o=S.RKASK(n.u.info):(te(n.k===r.VNONRELOC),o=n.u.info);let a=$t(e,s);switch(Fg(e,n,s),t){case C.OPR_NE:{n.u.info=ro(e,M.OP_EQ,0,o,a);break}case C.OPR_GT:case C.OPR_GE:{let l=t-C.OPR_NE+M.OP_EQ;n.u.info=ro(e,l,1,a,o);break}default:{let l=t-C.OPR_EQ+M.OP_EQ;n.u.info=ro(e,l,1,o,a);break}}n.k=r.VJMP},L1=function(e,t,n,s){let r=new j.expdesc;switch(r.k=j.expkind.VKINT,r.u.ival=r.u.nval=r.u.info=0,r.t=W,r.f=W,t){case so.OPR_MINUS:case so.OPR_BNOT:if(Xg(t+S1,n,r))break;case so.OPR_LEN:G1(e,t+M.OP_UNM,n,s);break;case so.OPR_NOT:M1(e,n);break}},H1=function(e,t,n){switch(t){case C.OPR_AND:{Hg(e,n);break}case C.OPR_OR:{jg(e,n);break}case C.OPR_CONCAT:{Ia(e,n);break}case C.OPR_ADD:case C.OPR_SUB:case C.OPR_MUL:case C.OPR_DIV:case C.OPR_IDIV:case C.OPR_MOD:case C.OPR_POW:case C.OPR_BAND:case C.OPR_BOR:case C.OPR_BXOR:case C.OPR_SHL:case C.OPR_SHR:{mc(n,!1)||$t(e,n);break}default:{$t(e,n);break}}},j1=function(e,t,n,s,r){let o=j.expkind;switch(t){case C.OPR_AND:{te(n.t===W),Pt(e,s),s.f=yn(e,s.f,n.f),n.to(s);break}case C.OPR_OR:{te(n.f===W),Pt(e,s),s.t=yn(e,s.t,n.t),n.to(s);break}case C.OPR_CONCAT:{Rc(e,s);let a=Zt(e,s);s.k===o.VRELOCABLE&&a.opcode===M.OP_CONCAT?(te(n.u.info===a.B-1),Yt(e,n),S.SETARG_B(a,n.u.info),n.k=o.VRELOCABLE,n.u.info=s.u.info):(Ia(e,s),yg(e,M.OP_CONCAT,n,s,r));break}case C.OPR_ADD:case C.OPR_SUB:case C.OPR_MUL:case C.OPR_DIV:case C.OPR_IDIV:case C.OPR_MOD:case C.OPR_POW:case C.OPR_BAND:case C.OPR_BOR:case C.OPR_BXOR:case C.OPR_SHL:case C.OPR_SHR:{Xg(t+p1,n,s)||yg(e,t+M.OP_ADD,n,s,r);break}case C.OPR_EQ:case C.OPR_LT:case C.OPR_LE:case C.OPR_NE:case C.OPR_GT:case C.OPR_GE:{q1(e,t,n,s);break}}return n},yc=function(e,t){e.f.lineinfo[e.pc-1]=t},X1=function(e,t,n,s){let r=(n-1)/S.LFIELDS_PER_FLUSH+1,o=s===bc?0:s;te(s!==0&&s<=S.LFIELDS_PER_FLUSH),r<=S.MAXARG_C?Ve(e,M.OP_SETLIST,t,o,r):r<=S.MAXARG_Ax?(Ve(e,M.OP_SETLIST,t,o,0),Ug(e,r)):Sc.luaX_syntaxerror(e.ls,Ac("constructor too long",!0)),e.freereg=t+1};O.exports.BinOpr=C;O.exports.NO_JUMP=W;O.exports.UnOpr=so;O.exports.getinstruction=Zt;O.exports.luaK_checkstack=Kg;O.exports.luaK_code=Va;O.exports.luaK_codeABC=Ve;O.exports.luaK_codeABx=Oa;O.exports.luaK_codeAsBx=Pg;O.exports.luaK_codek=ya;O.exports.luaK_concat=yn;O.exports.luaK_dischargevars=Pt;O.exports.luaK_exp2RK=$t;O.exports.luaK_exp2anyreg=is;O.exports.luaK_exp2anyregup=U1;O.exports.luaK_exp2nextreg=Ia;O.exports.luaK_exp2val=Rc;O.exports.luaK_fixline=yc;O.exports.luaK_getlabel=wa;O.exports.luaK_goiffalse=jg;O.exports.luaK_goiftrue=Hg;O.exports.luaK_indexed=B1;O.exports.luaK_infix=H1;O.exports.luaK_intK=Ec;O.exports.luaK_jump=Ca;O.exports.luaK_jumpto=N1;O.exports.luaK_nil=Og;O.exports.luaK_numberK=vc;O.exports.luaK_patchclose=w1;O.exports.luaK_patchlist=Ig;O.exports.luaK_patchtohere=oo;O.exports.luaK_posfix=j1;O.exports.luaK_prefix=L1;O.exports.luaK_reserveregs=ao;O.exports.luaK_ret=O1;O.exports.luaK_self=F1;O.exports.luaK_setlist=X1;O.exports.luaK_setmultret=P1;O.exports.luaK_setoneret=Bg;O.exports.luaK_setreturns=Mg;O.exports.luaK_storevar=K1;O.exports.luaK_stringK=V1});var Nc=I((vG,Zs)=>{"use strict";var{LUA_MULTRET:qc,to_luastring:se}=ue(),{BinOpr:{OPR_ADD:W1,OPR_AND:z1,OPR_BAND:J1,OPR_BOR:Z1,OPR_BXOR:Y1,OPR_CONCAT:$1,OPR_DIV:Q1,OPR_EQ:e0,OPR_GE:t0,OPR_GT:n0,OPR_IDIV:s0,OPR_LE:r0,OPR_LT:o0,OPR_MOD:a0,OPR_MUL:l0,OPR_NE:i0,OPR_NOBINOPR:tm,OPR_OR:c0,OPR_POW:u0,OPR_SHL:p0,OPR_SHR:f0,OPR_SUB:d0},UnOpr:{OPR_BNOT:h0,OPR_LEN:g0,OPR_MINUS:m0,OPR_NOT:_0,OPR_NOUNOPR:nm},NO_JUMP:Hs,getinstruction:wc,luaK_checkstack:b0,luaK_codeABC:Ws,luaK_codeABx:x0,luaK_codeAsBx:Oc,luaK_codek:A0,luaK_concat:S0,luaK_dischargevars:k0,luaK_exp2RK:zg,luaK_exp2anyreg:E0,luaK_exp2anyregup:sm,luaK_exp2nextreg:Kt,luaK_exp2val:v0,luaK_fixline:Pa,luaK_getlabel:Lc,luaK_goiffalse:T0,luaK_goiftrue:rm,luaK_indexed:Hc,luaK_infix:R0,luaK_intK:y0,luaK_jump:io,luaK_jumpto:N0,luaK_nil:O0,luaK_patchclose:Ma,luaK_patchlist:jc,luaK_patchtohere:co,luaK_posfix:C0,luaK_prefix:w0,luaK_reserveregs:js,luaK_ret:om,luaK_self:V0,luaK_setlist:Vc,luaK_setmultret:Xc,luaK_setoneret:I0,luaK_setreturns:P0,luaK_storevar:Ic,luaK_stringK:U0}=Wg(),Jg=xt(),Wc=rs(),y=Ra(),{LUAI_MAXCCALLS:am,MAX_INT:lm,lua_assert:Je}=We(),Ut=Qe(),{OpCodesI:{OP_CALL:K0,OP_CLOSURE:F0,OP_FORLOOP:M0,OP_FORPREP:B0,OP_GETUPVAL:D0,OP_MOVE:G0,OP_NEWTABLE:q0,OP_SETTABLE:L0,OP_TAILCALL:H0,OP_TFORCALL:j0,OP_TFORLOOP:X0,OP_VARARG:W0},LFIELDS_PER_FLUSH:z0,SETARG_B:J0,SETARG_C:im,SET_OPCODE:Z0}=es(),{luaS_eqlngstr:Y0,luaS_new:$0,luaS_newliteral:cm}=yt(),Q0=Nt(),um=Wc.Proto,g=y.RESERVED,ey=200,Ba=function(e){return e===T.VCALL||e===T.VVARARG},zs=function(e,t){return Y0(e,t)},At=class{constructor(){this.previous=null,this.firstlabel=NaN,this.firstgoto=NaN,this.nactvar=NaN,this.upval=NaN,this.isloop=NaN}},T={VVOID:0,VNIL:1,VTRUE:2,VFALSE:3,VK:4,VKFLT:5,VKINT:6,VNONRELOC:7,VLOCAL:8,VUPVAL:9,VINDEXED:10,VJMP:11,VRELOCABLE:12,VCALL:13,VVARARG:14},ty=function(e){return T.VLOCAL<=e&&e<=T.VINDEXED},ny=function(e){return e===T.VNONRELOC||e===T.VLOCAL},Z=class{constructor(){this.k=NaN,this.u={ival:NaN,nval:NaN,info:NaN,ind:{idx:NaN,t:NaN,vt:NaN}},this.t=NaN,this.f=NaN}to(t){this.k=t.k,this.u=t.u,this.t=t.t,this.f=t.f}},Ua=class{constructor(){this.f=null,this.prev=null,this.ls=null,this.bl=null,this.pc=NaN,this.lasttarget=NaN,this.jpc=NaN,this.nk=NaN,this.np=NaN,this.firstlocal=NaN,this.nlocvars=NaN,this.nactvar=NaN,this.nups=NaN,this.freereg=NaN}},Pc=class{constructor(){this.idx=NaN}},Uc=class{constructor(){this.name=null,this.pc=NaN,this.line=NaN,this.nactvar=NaN}},Ka=class{constructor(){this.arr=[],this.n=NaN,this.size=NaN}},Kc=class{constructor(){this.actvar={arr:[],n:NaN,size:NaN},this.gt=new Ka,this.label=new Ka}},zc=function(e,t){e.t.token=0,y.luaX_syntaxerror(e,t)},pm=function(e,t){y.luaX_syntaxerror(e,Ut.luaO_pushfstring(e.L,se("%s expected",!0),y.luaX_token2str(e,t)))},sy=function(e,t,n){let s=e.ls.L,r=e.f.linedefined,o=r===0?se("main function",!0):Ut.luaO_pushfstring(s,se("function at line %d",!0),r),a=Ut.luaO_pushfstring(s,se("too many %s (limit is %d) in %s",!0),n,t,o);y.luaX_syntaxerror(e.ls,a)},Js=function(e,t,n,s){t>n&&sy(e,n,s)},Ge=function(e,t){return e.t.token===t?(y.luaX_next(e),!0):!1},Jc=function(e,t){e.t.token!==t&&pm(e,t)},st=function(e,t){Jc(e,t),y.luaX_next(e)},Zc=function(e,t,n){t||y.luaX_syntaxerror(e,n)},nn=function(e,t,n,s){Ge(e,t)||(s===e.linenumber?pm(e,t):y.luaX_syntaxerror(e,Ut.luaO_pushfstring(e.L,se("%s expected (to close %s at line %d)"),y.luaX_token2str(e,t),y.luaX_token2str(e,n),s)))},sn=function(e){Jc(e,g.TK_NAME);let t=e.t.seminfo.ts;return y.luaX_next(e),t},Pe=function(e,t,n){e.f=e.t=Hs,e.k=t,e.u.info=n},Da=function(e,t,n){Pe(t,T.VK,U0(e.fs,n))},Yc=function(e,t){Da(e,t,sn(e))},ry=function(e,t){let n=e.fs,s=n.f;return s.locvars[n.nlocvars]=new Ut.LocVar,s.locvars[n.nlocvars].varname=t,n.nlocvars++},us=function(e,t){let n=e.fs,s=e.dyd,r=ry(e,t);Js(n,s.actvar.n+1-n.firstlocal,ey,se("local variables",!0)),s.actvar.arr[s.actvar.n]=new Pc,s.actvar.arr[s.actvar.n].idx=r,s.actvar.n++},cs=function(e,t){us(e,y.luaX_newstring(e,se(t,!0)))},uo=function(e,t){let n=e.ls.dyd.actvar.arr[e.firstlocal+t].idx;return Je(n<e.nlocvars),e.f.locvars[n]},Xs=function(e,t){let n=e.fs;for(n.nactvar=n.nactvar+t;t;t--)uo(n,n.nactvar-t).startpc=n.pc},oy=function(e,t){for(e.ls.dyd.actvar.n-=e.nactvar-t;e.nactvar>t;)uo(e,--e.nactvar).endpc=e.pc},ay=function(e,t){let n=e.f.upvalues;for(let s=0;s<e.nups;s++)if(zs(n[s].name,t))return s;return-1},fm=function(e,t,n){let s=e.f;return Js(e,e.nups+1,Wc.MAXUPVAL,se("upvalues",!0)),s.upvalues[e.nups]={instack:n.k===T.VLOCAL,idx:n.u.info,name:t},e.nups++},ly=function(e,t){for(let n=e.nactvar-1;n>=0;n--)if(zs(t,uo(e,n).varname))return n;return-1},iy=function(e,t){let n=e.bl;for(;n.nactvar>t;)n=n.previous;n.upval=1},Fc=function(e,t,n,s){if(e===null)Pe(n,T.VVOID,0);else{let r=ly(e,t);if(r>=0)Pe(n,T.VLOCAL,r),s||iy(e,r);else{let o=ay(e,t);if(o<0){if(Fc(e.prev,t,n,0),n.k===T.VVOID)return;o=fm(e,t,n)}Pe(n,T.VUPVAL,o)}}},dm=function(e,t){let n=sn(e),s=e.fs;if(Fc(s,n,t,1),t.k===T.VVOID){let r=new Z;Fc(s,e.envn,t,1),Je(t.k!==T.VVOID),Da(e,r,n),Hc(s,t,r)}},$c=function(e,t,n,s){let r=e.fs,o=t-n;if(Ba(s.k))o++,o<0&&(o=0),P0(r,s,o),o>1&&js(r,o-1);else if(s.k!==T.VVOID&&Kt(r,s),o>0){let a=r.freereg;js(r,o),O0(r,a,o)}n>t&&(e.fs.freereg-=n-t)},hm=function(e){let t=e.L;++t.nCcalls,Js(e.fs,t.nCcalls,am,se("JS levels",!0))},gm=function(e){return e.L.nCcalls--},mm=function(e,t,n){let s=e.fs,r=e.dyd.gt,o=r.arr[t];if(Je(zs(o.name,n.name)),o.nactvar<n.nactvar){let a=uo(s,o.nactvar).varname,l=Ut.luaO_pushfstring(e.L,se("<goto %s> at line %d jumps into the scope of local '%s'"),o.name.getstr(),o.line,a.getstr());zc(e,l)}jc(s,o.pc,n.pc);for(let a=t;a<r.n-1;a++)r.arr[a]=r.arr[a+1];r.n--},_m=function(e,t){let n=e.fs.bl,s=e.dyd,r=s.gt.arr[t];for(let o=n.firstlabel;o<s.label.n;o++){let a=s.label.arr[o];if(zs(a.name,r.name))return r.nactvar>a.nactvar&&(n.upval||s.label.n>n.firstlabel)&&Ma(e.fs,r.pc,a.nactvar),mm(e,t,a),!0}return!1},Qc=function(e,t,n,s,r){let o=t.n;return t.arr[o]=new Uc,t.arr[o].name=n,t.arr[o].line=s,t.arr[o].nactvar=e.fs.nactvar,t.arr[o].pc=r,t.n=o+1,o},bm=function(e,t){let n=e.dyd.gt,s=e.fs.bl.firstgoto;for(;s<n.n;)zs(n.arr[s].name,t.name)?mm(e,s,t):s++},cy=function(e,t){let n=t.firstgoto,s=e.ls.dyd.gt;for(;n<s.n;){let r=s.arr[n];r.nactvar>t.nactvar&&(t.upval&&Ma(e,r.pc,t.nactvar),r.nactvar=t.nactvar),_m(e.ls,n)||n++}},Qt=function(e,t,n){t.isloop=n,t.nactvar=e.nactvar,t.firstlabel=e.ls.dyd.label.n,t.firstgoto=e.ls.dyd.gt.n,t.upval=0,t.previous=e.bl,e.bl=t,Je(e.freereg===e.nactvar)},uy=function(e){let t=cm(e.L,"break"),n=Qc(e,e.dyd.label,t,0,e.fs.pc);bm(e,e.dyd.label.arr[n])},py=function(e,t){let n=y.isreserved(t.name)?"<%s> at line %d not inside a loop":"no visible label '%s' for <goto> at line %d";n=Ut.luaO_pushfstring(e.L,se(n),t.name.getstr(),t.line),zc(e,n)},fy=function(e){let t=e.L,n=new um(t),s=e.fs,r=s.f;return r.p[s.np++]=n,n},dy=function(e,t){let n=e.fs.prev;Pe(t,T.VRELOCABLE,x0(n,F0,0,n.np-1)),Kt(n,t)},xm=function(e,t,n){t.prev=e.fs,t.ls=e,e.fs=t,t.pc=0,t.lasttarget=0,t.jpc=Hs,t.freereg=0,t.nk=0,t.np=0,t.nups=0,t.nlocvars=0,t.nactvar=0,t.firstlocal=e.dyd.actvar.n,t.bl=null;let s=t.f;s.source=e.source,s.maxstacksize=2,Qt(t,n,!1)},en=function(e){let t=e.bl,n=e.ls;if(t.previous&&t.upval){let s=io(e);Ma(e,s,t.nactvar),co(e,s)}t.isloop&&uy(n),e.bl=t.previous,oy(e,t.nactvar),Je(t.nactvar===e.nactvar),e.freereg=e.nactvar,n.dyd.label.n=t.firstlabel,t.previous?cy(e,t):t.firstgoto<n.dyd.gt.n&&py(n,n.dyd.gt.arr[t.firstgoto])},Am=function(e){let t=e.fs;om(t,0,0),en(t),Je(t.bl===null),e.fs=t.prev},Ga=function(e,t){switch(e.t.token){case g.TK_ELSE:case g.TK_ELSEIF:case g.TK_END:case g.TK_EOS:return!0;case g.TK_UNTIL:return t;default:return!1}},po=function(e){for(;!Ga(e,1);){if(e.t.token===g.TK_RETURN){Gc(e);return}Gc(e)}},Mc=function(e,t){let n=e.fs,s=new Z;sm(n,t),y.luaX_next(e),Yc(e,s),Hc(n,t,s)},Sm=function(e,t){y.luaX_next(e),tn(e,t),v0(e.fs,t),st(e,93)},Bc=class{constructor(){this.v=new Z,this.t=new Z,this.nh=NaN,this.na=NaN,this.tostore=NaN}},Zg=function(e,t){let n=e.fs,s=e.fs.freereg,r=new Z,o=new Z;e.t.token===g.TK_NAME?(Js(n,t.nh,lm,se("items in a constructor",!0)),Yc(e,r)):Sm(e,r),t.nh++,st(e,61);let a=zg(n,r);tn(e,o),Ws(n,L0,t.t.u.info,a,zg(n,o)),n.freereg=s},hy=function(e,t){t.v.k!==T.VVOID&&(Kt(e,t.v),t.v.k=T.VVOID,t.tostore===z0&&(Vc(e,t.t.u.info,t.na,t.tostore),t.tostore=0))},gy=function(e,t){t.tostore!==0&&(Ba(t.v.k)?(Xc(e,t.v),Vc(e,t.t.u.info,t.na,qc),t.na--):(t.v.k!==T.VVOID&&Kt(e,t.v),Vc(e,t.t.u.info,t.na,t.tostore)))},Yg=function(e,t){tn(e,t.v),Js(e.fs,t.na,lm,se("items in a constructor",!0)),t.na++,t.tostore++},my=function(e,t){switch(e.t.token){case g.TK_NAME:{y.luaX_lookahead(e)!==61?Yg(e,t):Zg(e,t);break}case 91:{Zg(e,t);break}default:{Yg(e,t);break}}},km=function(e,t){let n=e.fs,s=e.linenumber,r=Ws(n,q0,0,0,0),o=new Bc;o.na=o.nh=o.tostore=0,o.t=t,Pe(t,T.VRELOCABLE,r),Pe(o.v,T.VVOID,0),Kt(e.fs,t),st(e,123);do{if(Je(o.v.k===T.VVOID||o.tostore>0),e.t.token===125)break;hy(n,o),my(e,o)}while(Ge(e,44)||Ge(e,59));nn(e,125,123,s),gy(n,o),J0(n.f.code[r],Ut.luaO_int2fb(o.na)),im(n.f.code[r],Ut.luaO_int2fb(o.nh))},_y=function(e){let t=e.fs,n=t.f,s=0;if(n.is_vararg=!1,e.t.token!==41)do switch(e.t.token){case g.TK_NAME:{us(e,sn(e)),s++;break}case g.TK_DOTS:{y.luaX_next(e),n.is_vararg=!0;break}default:y.luaX_syntaxerror(e,se("<name> or '...' expected",!0))}while(!n.is_vararg&&Ge(e,44));Xs(e,s),n.numparams=t.nactvar,js(t,t.nactvar)},eu=function(e,t,n,s){let r=new Ua,o=new At;r.f=fy(e),r.f.linedefined=s,xm(e,r,o),st(e,40),n&&(cs(e,"self"),Xs(e,1)),_y(e),st(e,41),po(e),r.f.lastlinedefined=e.linenumber,nn(e,g.TK_END,g.TK_FUNCTION,s),dy(e,t),Am(e)},fo=function(e,t){let n=1;for(tn(e,t);Ge(e,44);)Kt(e.fs,t),tn(e,t),n++;return n},$g=function(e,t,n){let s=e.fs,r=new Z;switch(e.t.token){case 40:{y.luaX_next(e),e.t.token===41?r.k=T.VVOID:(fo(e,r),Xc(s,r)),nn(e,41,40,n);break}case 123:{km(e,r);break}case g.TK_STRING:{Da(e,r,e.t.seminfo.ts),y.luaX_next(e);break}default:y.luaX_syntaxerror(e,se("function arguments expected",!0))}Je(t.k===T.VNONRELOC);let o,a=t.u.info;Ba(r.k)?o=qc:(r.k!==T.VVOID&&Kt(s,r),o=s.freereg-(a+1)),Pe(t,T.VCALL,Ws(s,K0,a,o+1,2)),Pa(s,n),s.freereg=a+1},by=function(e,t){switch(e.t.token){case 40:{let n=e.linenumber;y.luaX_next(e),tn(e,t),nn(e,41,40,n),k0(e.fs,t);return}case g.TK_NAME:{dm(e,t);return}default:y.luaX_syntaxerror(e,se("unexpected symbol",!0))}},tu=function(e,t){let n=e.fs,s=e.linenumber;for(by(e,t);;)switch(e.t.token){case 46:{Mc(e,t);break}case 91:{let r=new Z;sm(n,t),Sm(e,r),Hc(n,t,r);break}case 58:{let r=new Z;y.luaX_next(e),Yc(e,r),V0(n,t,r),$g(e,t,s);break}case 40:case g.TK_STRING:case 123:{Kt(n,t),$g(e,t,s);break}default:return}},xy=function(e,t){switch(e.t.token){case g.TK_FLT:{Pe(t,T.VKFLT,0),t.u.nval=e.t.seminfo.r;break}case g.TK_INT:{Pe(t,T.VKINT,0),t.u.ival=e.t.seminfo.i;break}case g.TK_STRING:{Da(e,t,e.t.seminfo.ts);break}case g.TK_NIL:{Pe(t,T.VNIL,0);break}case g.TK_TRUE:{Pe(t,T.VTRUE,0);break}case g.TK_FALSE:{Pe(t,T.VFALSE,0);break}case g.TK_DOTS:{let n=e.fs;Zc(e,n.f.is_vararg,se("cannot use '...' outside a vararg function",!0)),Pe(t,T.VVARARG,Ws(n,W0,0,1,0));break}case 123:{km(e,t);return}case g.TK_FUNCTION:{y.luaX_next(e),eu(e,t,0,e.linenumber);return}default:{tu(e,t);return}}y.luaX_next(e)},Ay=function(e){switch(e){case g.TK_NOT:return _0;case 45:return m0;case 126:return h0;case 35:return g0;default:return nm}},Sy=function(e){switch(e){case 43:return W1;case 45:return d0;case 42:return l0;case 37:return a0;case 94:return u0;case 47:return Q1;case g.TK_IDIV:return s0;case 38:return J1;case 124:return Z1;case 126:return Y1;case g.TK_SHL:return p0;case g.TK_SHR:return f0;case g.TK_CONCAT:return $1;case g.TK_NE:return i0;case g.TK_EQ:return e0;case 60:return o0;case g.TK_LE:return r0;case 62:return n0;case g.TK_GE:return t0;case g.TK_AND:return z1;case g.TK_OR:return c0;default:return tm}},Qg=[{left:10,right:10},{left:10,right:10},{left:11,right:11},{left:11,right:11},{left:14,right:13},{left:11,right:11},{left:11,right:11},{left:6,right:6},{left:4,right:4},{left:5,right:5},{left:7,right:7},{left:7,right:7},{left:9,right:8},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:3,right:3},{left:2,right:2},{left:1,right:1}],ky=12,Dc=function(e,t,n){hm(e);let s=Ay(e.t.token);if(s!==nm){let o=e.linenumber;y.luaX_next(e),Dc(e,t,ky),w0(e.fs,s,t,o)}else xy(e,t);let r=Sy(e.t.token);for(;r!==tm&&Qg[r].left>n;){let o=new Z,a=e.linenumber;y.luaX_next(e),R0(e.fs,r,t);let l=Dc(e,o,Qg[r].right);C0(e.fs,r,t,o,a),r=l}return gm(e),r},tn=function(e,t){Dc(e,t,0)},qa=function(e){let t=e.fs,n=new At;Qt(t,n,0),po(e),en(t)},Fa=class{constructor(){this.prev=null,this.v=new Z}},Ey=function(e,t,n){let s=e.fs,r=s.freereg,o=!1;for(;t;t=t.prev)t.v.k===T.VINDEXED&&(t.v.u.ind.vt===n.k&&t.v.u.ind.t===n.u.info&&(o=!0,t.v.u.ind.vt=T.VLOCAL,t.v.u.ind.t=r),n.k===T.VLOCAL&&t.v.u.ind.idx===n.u.info&&(o=!0,t.v.u.ind.idx=r));if(o){let a=n.k===T.VLOCAL?G0:D0;Ws(s,a,r,n.u.info,0),js(s,1)}},Em=function(e,t,n){let s=new Z;if(Zc(e,ty(t.v.k),se("syntax error",!0)),Ge(e,44)){let r=new Fa;r.prev=t,tu(e,r.v),r.v.k!==T.VINDEXED&&Ey(e,t,r.v),Js(e.fs,n+e.L.nCcalls,am,se("JS levels",!0)),Em(e,r,n+1)}else{st(e,61);let r=fo(e,s);if(r!==n)$c(e,n,r,s);else{I0(e.fs,s),Ic(e.fs,t.v,s);return}}Pe(s,T.VNONRELOC,e.fs.freereg-1),Ic(e.fs,t.v,s)},vm=function(e){let t=new Z;return tn(e,t),t.k===T.VNIL&&(t.k=T.VFALSE),rm(e.fs,t),t.f},Tm=function(e,t){let n=e.linenumber,s;Ge(e,g.TK_GOTO)?s=sn(e):(y.luaX_next(e),s=cm(e.L,"break"));let r=Qc(e,e.dyd.gt,s,n,t);_m(e,r)},vy=function(e,t,n){for(let s=e.bl.firstlabel;s<t.n;s++)if(zs(n,t.arr[s].name)){let r=Ut.luaO_pushfstring(e.ls.L,se("label '%s' already defined on line %d",!0),n.getstr(),t.arr[s].line);zc(e.ls,r)}},Ty=function(e){for(;e.t.token===59||e.t.token===g.TK_DBCOLON;)Gc(e)},Ry=function(e,t,n){let s=e.fs,r=e.dyd.label,o;vy(s,r,t),st(e,g.TK_DBCOLON),o=Qc(e,r,t,n,Lc(s)),Ty(e),Ga(e,0)&&(r.arr[o].nactvar=s.bl.nactvar),bm(e,r.arr[o])},yy=function(e,t){let n=e.fs,s=new At;y.luaX_next(e);let r=Lc(n),o=vm(e);Qt(n,s,1),st(e,g.TK_DO),qa(e),N0(n,r),nn(e,g.TK_END,g.TK_WHILE,t),en(n),co(n,o)},Ny=function(e,t){let n=e.fs,s=Lc(n),r=new At,o=new At;Qt(n,r,1),Qt(n,o,0),y.luaX_next(e),po(e),nn(e,g.TK_UNTIL,g.TK_REPEAT,t);let a=vm(e);o.upval&&Ma(n,a,o.nactvar),en(n),jc(n,a,s),en(n)},Cc=function(e){let t=new Z;return tn(e,t),Kt(e.fs,t),Je(t.k===T.VNONRELOC),t.u.info},Rm=function(e,t,n,s,r){let o=new At,a=e.fs,l;Xs(e,3),st(e,g.TK_DO);let i=r?Oc(a,B0,t,Hs):io(a);Qt(a,o,0),Xs(e,s),js(a,s),qa(e),en(a),co(a,i),r?l=Oc(a,M0,t,Hs):(Ws(a,j0,t,0,s),Pa(a,n),l=Oc(a,X0,t+2,Hs)),jc(a,l,i+1),Pa(a,n)},Oy=function(e,t,n){let s=e.fs,r=s.freereg;cs(e,"(for index)"),cs(e,"(for limit)"),cs(e,"(for step)"),us(e,t),st(e,61),Cc(e),st(e,44),Cc(e),Ge(e,44)?Cc(e):(A0(s,s.freereg,y0(s,1)),js(s,1)),Rm(e,r,n,1,1)},Cy=function(e,t){let n=e.fs,s=new Z,r=4,o=n.freereg;for(cs(e,"(for generator)"),cs(e,"(for state)"),cs(e,"(for control)"),us(e,t);Ge(e,44);)us(e,sn(e)),r++;st(e,g.TK_IN);let a=e.linenumber;$c(e,3,fo(e,s),s),b0(n,3),Rm(e,o,a,r-3,0)},wy=function(e,t){let n=e.fs,s=new At;Qt(n,s,1),y.luaX_next(e);let r=sn(e);switch(e.t.token){case 61:Oy(e,r,t);break;case 44:case g.TK_IN:Cy(e,r);break;default:y.luaX_syntaxerror(e,se("'=' or 'in' expected",!0))}nn(e,g.TK_END,g.TK_FOR,t),en(n)},em=function(e,t){let n=new At,s=e.fs,r=new Z,o;if(y.luaX_next(e),tn(e,r),st(e,g.TK_THEN),e.t.token===g.TK_GOTO||e.t.token===g.TK_BREAK){for(T0(e.fs,r),Qt(s,n,!1),Tm(e,r.t);Ge(e,59););if(Ga(e,0))return en(s),t;o=io(s)}else rm(e.fs,r),Qt(s,n,!1),o=r.f;return po(e),en(s),(e.t.token===g.TK_ELSE||e.t.token===g.TK_ELSEIF)&&(t=S0(s,t,io(s))),co(s,o),t},Vy=function(e,t){let n=e.fs,s=Hs;for(s=em(e,s);e.t.token===g.TK_ELSEIF;)s=em(e,s);Ge(e,g.TK_ELSE)&&qa(e),nn(e,g.TK_END,g.TK_IF,t),co(n,s)},Iy=function(e){let t=new Z,n=e.fs;us(e,sn(e)),Xs(e,1),eu(e,t,0,e.linenumber),uo(n,t.u.info).startpc=n.pc},Py=function(e){let t=0,n,s=new Z;do us(e,sn(e)),t++;while(Ge(e,44));Ge(e,61)?n=fo(e,s):(s.k=T.VVOID,n=0),$c(e,t,n,s),Xs(e,t)},Uy=function(e,t){let n=0;for(dm(e,t);e.t.token===46;)Mc(e,t);return e.t.token===58&&(n=1,Mc(e,t)),n},Ky=function(e,t){let n=new Z,s=new Z;y.luaX_next(e);let r=Uy(e,n);eu(e,s,r,t),Ic(e.fs,n,s),Pa(e.fs,t)},Fy=function(e){let t=e.fs,n=new Fa;tu(e,n.v),e.t.token===61||e.t.token===44?(n.prev=null,Em(e,n,1)):(Zc(e,n.v.k===T.VCALL,se("syntax error",!0)),im(wc(t,n.v),1))},My=function(e){let t=e.fs,n=new Z,s,r;Ga(e,1)||e.t.token===59?s=r=0:(r=fo(e,n),Ba(n.k)?(Xc(t,n),n.k===T.VCALL&&r===1&&(Z0(wc(t,n),H0),Je(wc(t,n).A===t.nactvar)),s=t.nactvar,r=qc):r===1?s=E0(t,n):(Kt(t,n),s=t.nactvar,Je(r===t.freereg-s))),om(t,s,r),Ge(e,59)},Gc=function(e){let t=e.linenumber;switch(hm(e),e.t.token){case 59:{y.luaX_next(e);break}case g.TK_IF:{Vy(e,t);break}case g.TK_WHILE:{yy(e,t);break}case g.TK_DO:{y.luaX_next(e),qa(e),nn(e,g.TK_END,g.TK_DO,t);break}case g.TK_FOR:{wy(e,t);break}case g.TK_REPEAT:{Ny(e,t);break}case g.TK_FUNCTION:{Ky(e,t);break}case g.TK_LOCAL:{y.luaX_next(e),Ge(e,g.TK_FUNCTION)?Iy(e):Py(e);break}case g.TK_DBCOLON:{y.luaX_next(e),Ry(e,sn(e),t);break}case g.TK_RETURN:{y.luaX_next(e),My(e);break}case g.TK_BREAK:case g.TK_GOTO:{Tm(e,io(e.fs));break}default:{Fy(e);break}}Je(e.fs.f.maxstacksize>=e.fs.freereg&&e.fs.freereg>=e.fs.nactvar),e.fs.freereg=e.fs.nactvar,gm(e)},By=function(e,t){let n=new At,s=new Z;xm(e,t,n),t.f.is_vararg=!0,Pe(s,T.VLOCAL,0),fm(t,e.envn,s),y.luaX_next(e),po(e),Jc(e,g.TK_EOS),Am(e)},Dy=function(e,t,n,s,r,o){let a=new y.LexState,l=new Ua,i=Wc.luaF_newLclosure(e,1);return Jg.luaD_inctop(e),e.stack[e.top-1].setclLvalue(i),a.h=Q0.luaH_new(e),Jg.luaD_inctop(e),e.stack[e.top-1].sethvalue(a.h),l.f=i.p=new um(e),l.f.source=$0(e,r),a.buff=n,a.dyd=s,s.actvar.n=s.gt.n=s.label.n=0,y.luaX_setinput(e,a,t,l.f.source,o),By(a,l),Je(!l.prev&&l.nups===1&&!a.fs),Je(s.actvar.n===0&&s.gt.n===0&&s.label.n===0),delete e.stack[--e.top],i};Zs.exports.Dyndata=Kc;Zs.exports.expkind=T;Zs.exports.expdesc=Z;Zs.exports.luaY_parser=Dy;Zs.exports.vkisinreg=ny});var Fm=I((TG,Km)=>{"use strict";var{LUA_SIGNATURE:ym,constant_types:{LUA_TBOOLEAN:Nm,LUA_TLNGSTR:Om,LUA_TNIL:Cm,LUA_TNUMFLT:wm,LUA_TNUMINT:Vm,LUA_TSHRSTR:Gy},thread_status:{LUA_ERRSYNTAX:qy},is_luastring:Ly,luastring_eq:Hy,to_luastring:nu}=ue(),Um=xt(),su=rs(),Ys=Qe(),{MAXARG_sBx:jy,POS_A:Xy,POS_Ax:Wy,POS_B:zy,POS_Bx:Im,POS_C:Jy,POS_OP:Zy,SIZE_A:Yy,SIZE_Ax:$y,SIZE_B:Qy,SIZE_Bx:Pm,SIZE_C:eN,SIZE_OP:tN}=es(),{lua_assert:ru}=We(),{luaS_bless:nN}=yt(),{luaZ_read:$s,ZIO:sN}=$r(),rN=[25,147,13,10,26,10],ou=class e{constructor(t,n,s){this.intSize=4,this.size_tSize=4,this.instructionSize=4,this.integerSize=4,this.numberSize=8,ru(n instanceof sN,"BytecodeParser only operates on a ZIO"),ru(Ly(s)),s[0]===64||s[0]===61?this.name=s.subarray(1):s[0]==ym[0]?this.name=nu("binary string",!0):this.name=s,this.L=t,this.Z=n,this.arraybuffer=new ArrayBuffer(Math.max(this.intSize,this.size_tSize,this.instructionSize,this.integerSize,this.numberSize)),this.dv=new DataView(this.arraybuffer),this.u8=new Uint8Array(this.arraybuffer)}read(t){let n=new Uint8Array(t);return $s(this.Z,n,0,t)!==0&&this.error("truncated"),n}LoadByte(){return $s(this.Z,this.u8,0,1)!==0&&this.error("truncated"),this.u8[0]}LoadInt(){return $s(this.Z,this.u8,0,this.intSize)!==0&&this.error("truncated"),this.dv.getInt32(0,!0)}LoadNumber(){return $s(this.Z,this.u8,0,this.numberSize)!==0&&this.error("truncated"),this.dv.getFloat64(0,!0)}LoadInteger(){return $s(this.Z,this.u8,0,this.integerSize)!==0&&this.error("truncated"),this.dv.getInt32(0,!0)}LoadSize_t(){return this.LoadInteger()}LoadString(){let t=this.LoadByte();return t===255&&(t=this.LoadSize_t()),t===0?null:nN(this.L,this.read(t-1))}static MASK1(t,n){return~(-1<<t)<<n}LoadCode(t){let n=this.LoadInt(),s=e;for(let r=0;r<n;r++){$s(this.Z,this.u8,0,this.instructionSize)!==0&&this.error("truncated");let o=this.dv.getUint32(0,!0);t.code[r]={code:o,opcode:o>>Zy&s.MASK1(tN,0),A:o>>Xy&s.MASK1(Yy,0),B:o>>zy&s.MASK1(Qy,0),C:o>>Jy&s.MASK1(eN,0),Bx:o>>Im&s.MASK1(Pm,0),Ax:o>>Wy&s.MASK1($y,0),sBx:(o>>Im&s.MASK1(Pm,0))-jy}}}LoadConstants(t){let n=this.LoadInt();for(let s=0;s<n;s++){let r=this.LoadByte();switch(r){case Cm:t.k.push(new Ys.TValue(Cm,null));break;case Nm:t.k.push(new Ys.TValue(Nm,this.LoadByte()!==0));break;case wm:t.k.push(new Ys.TValue(wm,this.LoadNumber()));break;case Vm:t.k.push(new Ys.TValue(Vm,this.LoadInteger()));break;case Gy:case Om:t.k.push(new Ys.TValue(Om,this.LoadString()));break;default:this.error(`unrecognized constant '${r}'`)}}}LoadProtos(t){let n=this.LoadInt();for(let s=0;s<n;s++)t.p[s]=new su.Proto(this.L),this.LoadFunction(t.p[s],t.source)}LoadUpvalues(t){let n=this.LoadInt();for(let s=0;s<n;s++)t.upvalues[s]={name:null,instack:this.LoadByte(),idx:this.LoadByte()}}LoadDebug(t){let n=this.LoadInt();for(let s=0;s<n;s++)t.lineinfo[s]=this.LoadInt();n=this.LoadInt();for(let s=0;s<n;s++)t.locvars[s]={varname:this.LoadString(),startpc:this.LoadInt(),endpc:this.LoadInt()};n=this.LoadInt();for(let s=0;s<n;s++)t.upvalues[s].name=this.LoadString()}LoadFunction(t,n){t.source=this.LoadString(),t.source===null&&(t.source=n),t.linedefined=this.LoadInt(),t.lastlinedefined=this.LoadInt(),t.numparams=this.LoadByte(),t.is_vararg=this.LoadByte()!==0,t.maxstacksize=this.LoadByte(),this.LoadCode(t),this.LoadConstants(t),this.LoadUpvalues(t),this.LoadProtos(t),this.LoadDebug(t)}checkliteral(t,n){let s=this.read(t.length);Hy(s,t)||this.error(n)}checkHeader(){this.checkliteral(ym.subarray(1),"not a"),this.LoadByte()!==83&&this.error("version mismatch in"),this.LoadByte()!==0&&this.error("format mismatch in"),this.checkliteral(rN,"corrupted"),this.intSize=this.LoadByte(),this.size_tSize=this.LoadByte(),this.instructionSize=this.LoadByte(),this.integerSize=this.LoadByte(),this.numberSize=this.LoadByte(),this.checksize(this.intSize,4,"int"),this.checksize(this.size_tSize,4,"size_t"),this.checksize(this.instructionSize,4,"instruction"),this.checksize(this.integerSize,4,"integer"),this.checksize(this.numberSize,8,"number"),this.LoadInteger()!==22136&&this.error("endianness mismatch in"),this.LoadNumber()!==370.5&&this.error("float format mismatch in")}error(t){Ys.luaO_pushfstring(this.L,nu("%s: %s precompiled chunk"),this.name,nu(t)),Um.luaD_throw(this.L,qy)}checksize(t,n,s){t!==n&&this.error(`${s} size mismatch in`)}},oN=function(e,t,n){let s=new ou(e,t,n);s.checkHeader();let r=su.luaF_newLclosure(e,s.LoadByte());return Um.luaD_inctop(e),e.stack[e.top-1].setclLvalue(r),r.p=new su.Proto(e),s.LoadFunction(r.p,null),ru(r.nupvalues===r.p.upvalues.length),r};Km.exports.luaU_undump=oN});var xt=I((RG,be)=>{"use strict";var{LUA_HOOKCALL:Hm,LUA_HOOKRET:aN,LUA_HOOKTAILCALL:lN,LUA_MASKCALL:Mm,LUA_MASKLINE:iN,LUA_MASKRET:Bm,LUA_MINSTACK:La,LUA_MULTRET:uu,LUA_SIGNATURE:cN,constant_types:{LUA_TCCL:Dm,LUA_TLCF:uN,LUA_TLCL:pN,LUA_TNIL:er},thread_status:{LUA_ERRMEM:fN,LUA_ERRERR:pu,LUA_ERRRUN:fu,LUA_ERRSYNTAX:dN,LUA_OK:rn,LUA_YIELD:on},lua_Debug:hN,luastring_indexOf:gN,to_luastring:Nn}=ue(),ps=Zr(),go=Wt(),du=rs(),{api_check:jm,lua_assert:rt,LUAI_MAXCCALLS:ho}=We(),re=Qe(),mN=es(),Xm=Nc(),oe=Xt(),{luaS_newliteral:lu}=yt(),Gm=ss(),{LUAI_MAXSTACK:Ft}=je(),_N=Fm(),mo=ns(),{MBuffer:bN}=$r(),hu=function(e,t){if(e.top<t)for(;e.top<t;)e.stack[e.top++]=new re.TValue(er,null);else for(;e.top>t;)delete e.stack[--e.top]},Xa=function(e,t,n){let s=e.top;for(;e.top<n+1;)e.stack[e.top++]=new re.TValue(er,null);switch(t){case fN:{re.setsvalue2s(e,n,lu(e,"not enough memory"));break}case pu:{re.setsvalue2s(e,n,lu(e,"error in error handling"));break}default:re.setobjs2s(e,n,s-1)}for(;e.top>n+1;)delete e.stack[--e.top]},Wm=Ft+200,Ha=function(e,t){rt(t<=Ft||t==Wm),rt(e.stack_last==e.stack.length-oe.EXTRA_STACK),e.stack.length=t,e.stack_last=t-oe.EXTRA_STACK},zm=function(e,t){let n=e.stack.length;if(n>Ft)tr(e,pu);else{let s=e.top+t+oe.EXTRA_STACK,r=2*n;r>Ft&&(r=Ft),r<s&&(r=s),r>Ft?(Ha(e,Wm),go.luaG_runerror(e,Nn("stack overflow",!0))):Ha(e,r)}},Qs=function(e,t){e.stack_last-e.top<=t&&zm(e,t)},xN=function(e){let t=e.top;for(let n=e.ci;n!==null;n=n.previous)t<n.top&&(t=n.top);return rt(t<=e.stack_last),t+1},Jm=function(e){let t=xN(e),n=t+Math.floor(t/8)+2*oe.EXTRA_STACK;n>Ft&&(n=Ft),e.stack.length>Ft&&oe.luaE_freeCI(e),t<=Ft-oe.EXTRA_STACK&&n<e.stack.length&&Ha(e,n)},AN=function(e){Qs(e,1),e.stack[e.top++]=new re.TValue(er,null)},Wa=function(e,t,n){let s=e.stack[t];switch(s.type){case Dm:case uN:{let r=s.type===Dm?s.value.f:s.value;Qs(e,La);let o=oe.luaE_extendCI(e);o.funcOff=t,o.nresults=n,o.func=s,o.top=e.top+La,rt(o.top<=e.stack_last),o.callstatus=0,e.hookmask&Mm&&Ja(e,Hm,-1);let a=r(e);if(typeof a!="number"||a<0||(a|0)!==a)throw Error("invalid return value from JS function (expected integer)");return ps.api_checknelems(e,a),za(e,o,e.top-a,a),!0}case pN:{let r,o=s.value.p,a=e.top-t-1,l=o.maxstacksize;if(Qs(e,l),o.is_vararg)r=EN(e,o,a);else{for(;a<o.numparams;a++)e.stack[e.top++]=new re.TValue(er,null);r=t+1}let i=oe.luaE_extendCI(e);return i.funcOff=t,i.nresults=n,i.func=s,i.l_base=r,i.top=r+l,hu(e,i.top),i.l_code=o.code,i.l_savedpc=0,i.callstatus=oe.CIST_LUA,e.hookmask&Mm&&kN(e,i),!1}default:return Qs(e,1),vN(e,t,s),Wa(e,t,n)}},za=function(e,t,n,s){let r=t.nresults;e.hookmask&(Bm|iN)&&(e.hookmask&Bm&&Ja(e,aN,-1),e.oldpc=t.previous.l_savedpc);let o=t.funcOff;return e.ci=t.previous,e.ci.next=null,SN(e,n,o,s,r)},SN=function(e,t,n,s,r){switch(r){case 0:break;case 1:{s===0?e.stack[n].setnilvalue():re.setobjs2s(e,n,t);break}case uu:{for(let a=0;a<s;a++)re.setobjs2s(e,n+a,t+a);for(let a=e.top;a>=n+s;a--)delete e.stack[a];return e.top=n+s,!1}default:{let a;if(r<=s)for(a=0;a<r;a++)re.setobjs2s(e,n+a,t+a);else{for(a=0;a<s;a++)re.setobjs2s(e,n+a,t+a);for(;a<r;a++)n+a>=e.top?e.stack[n+a]=new re.TValue(er,null):e.stack[n+a].setnilvalue()}break}}let o=n+r;for(let a=e.top;a>=o;a--)delete e.stack[a];return e.top=o,!0},Ja=function(e,t,n){let s=e.hook;if(s&&e.allowhook){let r=e.ci,o=e.top,a=r.top,l=new hN;l.event=t,l.currentline=n,l.i_ci=r,Qs(e,La),r.top=e.top+La,rt(r.top<=e.stack_last),e.allowhook=0,r.callstatus|=oe.CIST_HOOKED,s(e,l),rt(!e.allowhook),e.allowhook=1,r.top=a,hu(e,o),r.callstatus&=~oe.CIST_HOOKED}},kN=function(e,t){let n=Hm;t.l_savedpc++,t.previous.callstatus&oe.CIST_LUA&&t.previous.l_code[t.previous.l_savedpc-1].opcode==mN.OpCodesI.OP_TAILCALL&&(t.callstatus|=oe.CIST_TAIL,n=lN),Ja(e,n,-1),t.l_savedpc--},EN=function(e,t,n){let s=t.numparams,r=e.top-n,o=e.top,a;for(a=0;a<s&&a<n;a++)re.pushobj2s(e,e.stack[r+a]),e.stack[r+a].setnilvalue();for(;a<s;a++)e.stack[e.top++]=new re.TValue(er,null);return o},vN=function(e,t,n){let s=Gm.luaT_gettmbyobj(e,n,Gm.TMS.TM_CALL);s.ttisfunction(s)||go.luaG_typeerror(e,n,Nn("call",!0)),re.pushobj2s(e,e.stack[e.top-1]);for(let r=e.top-2;r>t;r--)re.setobjs2s(e,r,r-1);re.setobj2s(e,t,s)},TN=function(e){e.nCcalls===ho?go.luaG_runerror(e,Nn("JS stack overflow",!0)):e.nCcalls>=ho+(ho>>3)&&tr(e,pu)},Zm=function(e,t,n){++e.nCcalls>=ho&&TN(e),Wa(e,t,n)||mo.luaV_execute(e),e.nCcalls--},tr=function(e,t){if(e.errorJmp)throw e.errorJmp.status=t,e.errorJmp;{let n=e.l_G;if(e.status=t,n.mainthread.errorJmp)n.mainthread.stack[n.mainthread.top++]=e.stack[e.top-1],tr(n.mainthread,t);else{let s=n.panic;throw s&&(Xa(e,t,e.top),e.ci.top<e.top&&(e.ci.top=e.top),s(e)),new Error(`Aborted ${t}`)}}},ja=function(e,t,n){let s=e.nCcalls,r={status:rn,previous:e.errorJmp};e.errorJmp=r;try{t(e,n)}catch(o){if(r.status===rn){let a=e.l_G.atnativeerror;if(a)try{if(r.status=rn,ps.lua_pushcfunction(e,a),ps.lua_pushlightuserdata(e,o),iu(e,e.top-2,1),e.errfunc!==0){let l=e.errfunc;re.pushobj2s(e,e.stack[e.top-1]),re.setobjs2s(e,e.top-2,l),iu(e,e.top-2,1)}r.status=fu}catch{r.status===rn&&(r.status=-1)}else r.status=-1}}return e.errorJmp=r.previous,e.nCcalls=s,r.status},qm=function(e,t){let n=e.ci;rt(n.c_k!==null&&e.nny===0),rt(n.callstatus&oe.CIST_YPCALL||t===on),n.callstatus&oe.CIST_YPCALL&&(n.callstatus&=~oe.CIST_YPCALL,e.errfunc=n.c_old_errfunc),n.nresults===uu&&e.ci.top<e.top&&(e.ci.top=e.top);let s=n.c_k,r=s(e,t,n.c_ctx);ps.api_checknelems(e,r),za(e,n,e.top-r,r)},Ym=function(e,t){for(t!==null&&qm(e,t);e.ci!==e.base_ci;)e.ci.callstatus&oe.CIST_LUA?(mo.luaV_finishOp(e),mo.luaV_execute(e)):qm(e,on)},RN=function(e){for(let t=e.ci;t!==null;t=t.previous)if(t.callstatus&oe.CIST_YPCALL)return t;return null},yN=function(e,t){let n=RN(e);if(n===null)return 0;let s=n.extra;return du.luaF_close(e,s),Xa(e,t,s),e.ci=n,e.allowhook=n.callstatus&oe.CIST_OAH,e.nny=0,Jm(e),e.errfunc=n.c_old_errfunc,1},au=function(e,t,n){let s=lu(e,t);if(n===0)re.pushsvalue2s(e,s),jm(e,e.top<=e.ci.top,"stack overflow");else{for(let r=1;r<n;r++)delete e.stack[--e.top];re.setsvalue2s(e,e.top-1,s)}return fu},NN=function(e,t){let n=e.top-t,s=e.ci;e.status===rn?Wa(e,n-1,uu)||mo.luaV_execute(e):(rt(e.status===on),e.status=rn,s.funcOff=s.extra,s.func=e.stack[s.funcOff],s.callstatus&oe.CIST_LUA?mo.luaV_execute(e):(s.c_k!==null&&(t=s.c_k(e,on,s.c_ctx),ps.api_checknelems(e,t),n=e.top-t),za(e,s,n,t)),Ym(e,null))},ON=function(e,t,n){let s=e.nny;if(e.status===rn){if(e.ci!==e.base_ci)return au(e,"cannot resume non-suspended coroutine",n)}else if(e.status!==on)return au(e,"cannot resume dead coroutine",n);if(e.nCcalls=t?t.nCcalls+1:1,e.nCcalls>=ho)return au(e,"JS stack overflow",n);e.nny=0,ps.api_checknelems(e,e.status===rn?n+1:n);let r=ja(e,NN,n);if(r===-1)r=fu;else{for(;r>on&&yN(e,r);)r=ja(e,Ym,r);r>on?(e.status=r,Xa(e,r,e.top),e.ci.top=e.top):rt(r===e.status)}return e.nny=s,e.nCcalls--,rt(e.nCcalls===(t?t.nCcalls:0)),r},CN=function(e){return e.nny===0},$m=function(e,t,n,s){let r=e.ci;return ps.api_checknelems(e,t),e.nny>0&&(e!==e.l_G.mainthread?go.luaG_runerror(e,Nn("attempt to yield across a JS-call boundary",!0)):go.luaG_runerror(e,Nn("attempt to yield from outside a coroutine",!0))),e.status=on,r.extra=r.funcOff,r.callstatus&oe.CIST_LUA?jm(e,s===null,"hooks cannot continue after yielding"):(r.c_k=s,s!==null&&(r.c_ctx=n),r.funcOff=e.top-t-1,r.func=e.stack[r.funcOff],tr(e,on)),rt(r.callstatus&oe.CIST_HOOKED),0},wN=function(e,t){$m(e,t,0,null)},Qm=function(e,t,n,s,r){let o=e.ci,a=e.allowhook,l=e.nny,i=e.errfunc;e.errfunc=r;let u=ja(e,t,n);return u!==rn&&(du.luaF_close(e,s),Xa(e,u,s),e.ci=o,e.allowhook=a,e.nny=l,Jm(e)),e.errfunc=i,u},iu=function(e,t,n){e.nny++,Zm(e,t,n),e.nny--},cu=class{constructor(t,n,s){this.z=t,this.buff=new bN,this.dyd=new Xm.Dyndata,this.mode=s,this.name=n}},Lm=function(e,t,n){t&&gN(t,n[0])===-1&&(re.luaO_pushfstring(e,Nn("attempt to load a %s chunk (mode is '%s')"),n,t),tr(e,dN))},VN=function(e,t){let n,s=t.z.zgetc();s===cN[0]?(Lm(e,t.mode,Nn("binary",!0)),n=_N.luaU_undump(e,t.z,t.name)):(Lm(e,t.mode,Nn("text",!0)),n=Xm.luaY_parser(e,t.z,t.buff,t.dyd,t.name,s)),rt(n.nupvalues===n.p.upvalues.length),du.luaF_initupvals(e,n)},IN=function(e,t,n,s){let r=new cu(t,n,s);e.nny++;let o=Qm(e,VN,r,e.top,e.errfunc);return e.nny--,o};be.exports.adjust_top=hu;be.exports.luaD_call=Zm;be.exports.luaD_callnoyield=iu;be.exports.luaD_checkstack=Qs;be.exports.luaD_growstack=zm;be.exports.luaD_hook=Ja;be.exports.luaD_inctop=AN;be.exports.luaD_pcall=Qm;be.exports.luaD_poscall=za;be.exports.luaD_precall=Wa;be.exports.luaD_protectedparser=IN;be.exports.luaD_rawrunprotected=ja;be.exports.luaD_reallocstack=Ha;be.exports.luaD_throw=tr;be.exports.lua_isyieldable=CN;be.exports.lua_resume=ON;be.exports.lua_yield=wN;be.exports.lua_yieldk=$m});var Wt=I((yG,Te)=>{"use strict";var{LUA_HOOKCOUNT:PN,LUA_HOOKLINE:UN,LUA_MASKCOUNT:KN,LUA_MASKLINE:e_,constant_types:{LUA_TBOOLEAN:FN,LUA_TNIL:MN,LUA_TTABLE:BN},thread_status:{LUA_ERRRUN:DN,LUA_YIELD:gu},from_userstring:GN,luastring_eq:o_,luastring_indexOf:t_,to_luastring:G}=ue(),{api_check:mu,lua_assert:bu}=We(),{LUA_IDSIZE:a_}=je(),n_=Zr(),_o=xt(),Ya=rs(),qN=Ra(),Ue=Qe(),nr=es(),Ze=Xt(),s_=Nt(),$=ss(),xu=ns(),$a=function(e){return bu(e.callstatus&Ze.CIST_LUA),e.l_savedpc-1},l_=function(e){return e.func.value.p.lineinfo.length!==0?e.func.value.p.lineinfo[$a(e)]:-1},sr=function(e){if(e.status===gu){let t=e.ci,n=t.funcOff;t.func=e.stack[t.extra],t.funcOff=t.extra,t.extra=n}},LN=function(e,t,n,s){(t===null||n===0)&&(n=0,t=null),e.ci.callstatus&Ze.CIST_LUA&&(e.oldpc=e.ci.l_savedpc),e.hook=t,e.basehookcount=s,e.hookcount=e.basehookcount,e.hookmask=n},HN=function(e){return e.hook},jN=function(e){return e.hookmask},XN=function(e){return e.basehookcount},WN=function(e,t,n){let s,r;if(t<0)return 0;for(s=e.ci;t>0&&s!==e.base_ci;s=s.previous)t--;return t===0&&s!==e.base_ci?(r=1,n.i_ci=s):r=0,r},_u=function(e,t){bu(t<e.upvalues.length);let n=e.upvalues[t].name;return n===null?G("?",!0):n.getstr()},zN=function(e,t){let n=e.func.value.p.numparams;return t>=e.l_base-e.funcOff-n?null:{pos:e.funcOff+n+t,name:G("(*vararg)",!0)}},i_=function(e,t,n){let s,r=null;if(t.callstatus&Ze.CIST_LUA){if(n<0)return zN(t,-n);s=t.l_base,r=Ya.luaF_getlocalname(t.func.value.p,n,$a(t))}else s=t.funcOff+1;if(r===null)if((t===e.ci?e.top:t.next.funcOff)-s>=n&&n>0)r=G("(*temporary)",!0);else return null;return{pos:s+(n-1),name:r}},JN=function(e,t,n){let s;if(sr(e),t===null)e.stack[e.top-1].ttisLclosure()?s=Ya.luaF_getlocalname(e.stack[e.top-1].value.p,n,0):s=null;else{let r=i_(e,t.i_ci,n);r?(s=r.name,Ue.pushobj2s(e,e.stack[r.pos]),mu(e,e.top<=e.ci.top,"stack overflow")):s=null}return sr(e),s},ZN=function(e,t,n){let s;sr(e);let r=i_(e,t.i_ci,n);return r?(s=r.name,Ue.setobjs2s(e,r.pos,e.top-1),delete e.stack[--e.top]):s=null,sr(e),s},YN=function(e,t){if(t===null||t instanceof Ue.CClosure)e.source=G("=[JS]",!0),e.linedefined=-1,e.lastlinedefined=-1,e.what=G("J",!0);else{let n=t.p;e.source=n.source?n.source.getstr():G("=?",!0),e.linedefined=n.linedefined,e.lastlinedefined=n.lastlinedefined,e.what=e.linedefined===0?G("main",!0):G("Lua",!0)}e.short_src=Ue.luaO_chunkid(e.source,a_)},$N=function(e,t){if(t===null||t instanceof Ue.CClosure)e.stack[e.top]=new Ue.TValue(MN,null),n_.api_incr_top(e);else{let n=t.p.lineinfo,s=s_.luaH_new(e);e.stack[e.top]=new Ue.TValue(BN,s),n_.api_incr_top(e);let r=new Ue.TValue(FN,!0);for(let o=0;o<n.length;o++)s_.luaH_setint(s,n[o],r)}},QN=function(e,t){let n={name:null,funcname:null};return t===null?null:t.callstatus&Ze.CIST_FIN?(n.name=G("__gc",!0),n.funcname=G("metamethod",!0),n):!(t.callstatus&Ze.CIST_TAIL)&&t.previous.callstatus&Ze.CIST_LUA?sO(e,t.previous):null},eO=function(e,t,n,s,r){let o=1;for(;t.length>0;t=t.subarray(1))switch(t[0]){case 83:{YN(n,s);break}case 108:{n.currentline=r&&r.callstatus&Ze.CIST_LUA?l_(r):-1;break}case 117:{n.nups=s===null?0:s.nupvalues,s===null||s instanceof Ue.CClosure?(n.isvararg=!0,n.nparams=0):(n.isvararg=s.p.is_vararg,n.nparams=s.p.numparams);break}case 116:{n.istailcall=r?r.callstatus&Ze.CIST_TAIL:0;break}case 110:{let a=QN(e,r);a===null?(n.namewhat=G("",!0),n.name=null):(n.namewhat=a.funcname,n.name=a.name);break}case 76:case 102:break;default:o=0}return o},tO=function(e,t,n){t=GN(t);let s,r,o,a;return sr(e),t[0]===62?(o=null,a=e.stack[e.top-1],mu(e,a.ttisfunction(),"function expected"),t=t.subarray(1),e.top--):(o=n.i_ci,a=o.func,bu(o.func.ttisfunction())),r=a.ttisclosure()?a.value:null,s=eO(e,t,n,r,o),t_(t,102)>=0&&(Ue.pushobj2s(e,a),mu(e,e.top<=e.ci.top,"stack overflow")),sr(e),t_(t,76)>=0&&$N(e,r),s},r_=function(e,t,n){let s={name:null,funcname:null};if(nr.ISK(n)){let r=e.k[nr.INDEXK(n)];if(r.ttisstring())return s.name=r.svalue(),s}else{let r=Qa(e,t,n);if(r&&r.funcname[0]===99)return r}return s.name=G("?",!0),s},Za=function(e,t){return e<t?-1:e},nO=function(e,t,n){let s=-1,r=0,o=nr.OpCodesI;for(let a=0;a<t;a++){let l=e.code[a],i=l.A;switch(l.opcode){case o.OP_LOADNIL:{let u=l.B;i<=n&&n<=i+u&&(s=Za(a,r));break}case o.OP_TFORCALL:{n>=i+2&&(s=Za(a,r));break}case o.OP_CALL:case o.OP_TAILCALL:{n>=i&&(s=Za(a,r));break}case o.OP_JMP:{let u=l.sBx,c=a+1+u;a<c&&c<=t&&c>r&&(r=c);break}default:nr.testAMode(l.opcode)&&n===i&&(s=Za(a,r));break}}return s},Qa=function(e,t,n){let s={name:Ya.luaF_getlocalname(e,n+1,t),funcname:null};if(s.name)return s.funcname=G("local",!0),s;let r=nO(e,t,n),o=nr.OpCodesI;if(r!==-1){let a=e.code[r];switch(a.opcode){case o.OP_MOVE:{let l=a.B;if(l<a.A)return Qa(e,r,l);break}case o.OP_GETTABUP:case o.OP_GETTABLE:{let l=a.C,i=a.B,u=a.opcode===o.OP_GETTABLE?Ya.luaF_getlocalname(e,i+1,r):_u(e,i);return s.name=r_(e,r,l).name,s.funcname=u&&o_(u,qN.LUA_ENV)?G("global",!0):G("field",!0),s}case o.OP_GETUPVAL:return s.name=_u(e,a.B),s.funcname=G("upvalue",!0),s;case o.OP_LOADK:case o.OP_LOADKX:{let l=a.opcode===o.OP_LOADK?a.Bx:e.code[r+1].Ax;if(e.k[l].ttisstring())return s.name=e.k[l].svalue(),s.funcname=G("constant",!0),s;break}case o.OP_SELF:{let l=a.C;return s.name=r_(e,r,l).name,s.funcname=G("method",!0),s}default:break}}return null},sO=function(e,t){let n={name:null,funcname:null},s=0,r=t.func.value.p,o=$a(t),a=r.code[o],l=nr.OpCodesI;if(t.callstatus&Ze.CIST_HOOKED)return n.name=G("?",!0),n.funcname=G("hook",!0),n;switch(a.opcode){case l.OP_CALL:case l.OP_TAILCALL:return Qa(r,o,a.A);case l.OP_TFORCALL:return n.name=G("for iterator",!0),n.funcname=G("for iterator",!0),n;case l.OP_SELF:case l.OP_GETTABUP:case l.OP_GETTABLE:s=$.TMS.TM_INDEX;break;case l.OP_SETTABUP:case l.OP_SETTABLE:s=$.TMS.TM_NEWINDEX;break;case l.OP_ADD:s=$.TMS.TM_ADD;break;case l.OP_SUB:s=$.TMS.TM_SUB;break;case l.OP_MUL:s=$.TMS.TM_MUL;break;case l.OP_MOD:s=$.TMS.TM_MOD;break;case l.OP_POW:s=$.TMS.TM_POW;break;case l.OP_DIV:s=$.TMS.TM_DIV;break;case l.OP_IDIV:s=$.TMS.TM_IDIV;break;case l.OP_BAND:s=$.TMS.TM_BAND;break;case l.OP_BOR:s=$.TMS.TM_BOR;break;case l.OP_BXOR:s=$.TMS.TM_BXOR;break;case l.OP_SHL:s=$.TMS.TM_SHL;break;case l.OP_SHR:s=$.TMS.TM_SHR;break;case l.OP_UNM:s=$.TMS.TM_UNM;break;case l.OP_BNOT:s=$.TMS.TM_BNOT;break;case l.OP_LEN:s=$.TMS.TM_LEN;break;case l.OP_CONCAT:s=$.TMS.TM_CONCAT;break;case l.OP_EQ:s=$.TMS.TM_EQ;break;case l.OP_LT:s=$.TMS.TM_LT;break;case l.OP_LE:s=$.TMS.TM_LE;break;default:return null}return n.name=e.l_G.tmname[s].getstr(),n.funcname=G("metamethod",!0),n},rO=function(e,t,n){for(let s=t.l_base;s<t.top;s++)if(e.stack[s]===n)return s;return!1},oO=function(e,t,n){let s=t.func.value;for(let r=0;r<s.nupvalues;r++)if(s.upvals[r]===n)return{name:_u(s.p,r),funcname:G("upvalue",!0)};return null},c_=function(e,t){let n=e.ci,s=null;if(n.callstatus&Ze.CIST_LUA){s=oO(e,n,t);let r=rO(e,n,t);!s&&r&&(s=Qa(n.func.value.p,$a(n),r-n.l_base))}return s?Ue.luaO_pushfstring(e,G(" (%s '%s')",!0),s.funcname,s.name):G("",!0)},Au=function(e,t,n){let s=$.luaT_objtypename(e,t);bo(e,G("attempt to %s a %s value%s",!0),n,s,c_(e,t))},aO=function(e,t,n){(t.ttisstring()||xu.cvt2str(t))&&(t=n),Au(e,t,G("concatenate",!0))},lO=function(e,t,n,s){xu.tonumber(t)===!1&&(n=t),Au(e,n,s)},iO=function(e,t,n){let s=$.luaT_objtypename(e,t),r=$.luaT_objtypename(e,n);o_(s,r)?bo(e,G("attempt to compare two %s values",!0),s):bo(e,G("attempt to compare %s with %s",!0),s,r)},u_=function(e,t,n,s){let r;return n?r=Ue.luaO_chunkid(n.getstr(),a_):r=G("?",!0),Ue.luaO_pushfstring(e,G("%s:%d: %s",!0),r,s,t)},bo=function(e,t,...n){let s=e.ci,r=Ue.luaO_pushvfstring(e,t,n);s.callstatus&Ze.CIST_LUA&&u_(e,r,s.func.value.p.source,l_(s)),p_(e)},p_=function(e){if(e.errfunc!==0){let t=e.errfunc;Ue.pushobj2s(e,e.stack[e.top-1]),Ue.setobjs2s(e,e.top-2,t),_o.luaD_callnoyield(e,e.top-2,1)}_o.luaD_throw(e,DN)},cO=function(e,t,n){xu.tointeger(t)===!1&&(n=t),bo(e,G("number%s has no integer representation",!0),c_(e,n))},uO=function(e){let t=e.ci,n=e.hookmask,s=--e.hookcount===0&&n&KN;if(s)e.hookcount=e.basehookcount;else if(!(n&e_))return;if(t.callstatus&Ze.CIST_HOOKYIELD){t.callstatus&=~Ze.CIST_HOOKYIELD;return}if(s&&_o.luaD_hook(e,PN,-1),n&e_){let r=t.func.value.p,o=t.l_savedpc-1,a=r.lineinfo.length!==0?r.lineinfo[o]:-1;(o===0||t.l_savedpc<=e.oldpc||a!==(r.lineinfo.length!==0?r.lineinfo[e.oldpc-1]:-1))&&_o.luaD_hook(e,UN,a)}e.oldpc=t.l_savedpc,e.status===gu&&(s&&(e.hookcount=1),t.l_savedpc--,t.callstatus|=Ze.CIST_HOOKYIELD,t.funcOff=e.top-1,t.func=e.stack[t.funcOff],_o.luaD_throw(e,gu))};Te.exports.luaG_addinfo=u_;Te.exports.luaG_concaterror=aO;Te.exports.luaG_errormsg=p_;Te.exports.luaG_opinterror=lO;Te.exports.luaG_ordererror=iO;Te.exports.luaG_runerror=bo;Te.exports.luaG_tointerror=cO;Te.exports.luaG_traceexec=uO;Te.exports.luaG_typeerror=Au;Te.exports.lua_gethook=HN;Te.exports.lua_gethookcount=XN;Te.exports.lua_gethookmask=jN;Te.exports.lua_getinfo=tO;Te.exports.lua_getlocal=JN;Te.exports.lua_getstack=WN;Te.exports.lua_sethook=LN;Te.exports.lua_setlocal=ZN});var b_=I((NG,__)=>{"use strict";var{LUA_SIGNATURE:f_,LUA_VERSION_MAJOR:pO,LUA_VERSION_MINOR:fO,constant_types:{LUA_TBOOLEAN:dO,LUA_TLNGSTR:hO,LUA_TNIL:gO,LUA_TNUMFLT:mO,LUA_TNUMINT:_O,LUA_TSHRSTR:bO},luastring_of:h_}=ue(),d_=h_(25,147,13,10,26,10),xO=22136,AO=370.5,SO=Number(pO)*16+Number(fO),kO=0,Su=class{constructor(){this.L=null,this.writer=null,this.data=null,this.strip=NaN,this.status=NaN}},fs=function(e,t,n){n.status===0&&t>0&&(n.status=n.writer(n.L,e,t,n.data))},Re=function(e,t){fs(h_(e),1,t)},ot=function(e,t){let n=new ArrayBuffer(4);new DataView(n).setInt32(0,e,!0);let r=new Uint8Array(n);fs(r,4,t)},ku=function(e,t){let n=new ArrayBuffer(4);new DataView(n).setInt32(0,e,!0);let r=new Uint8Array(n);fs(r,4,t)},g_=function(e,t){let n=new ArrayBuffer(8);new DataView(n).setFloat64(0,e,!0);let r=new Uint8Array(n);fs(r,8,t)},xo=function(e,t){if(e===null)Re(0,t);else{let n=e.tsslen()+1,s=e.getstr();n<255?Re(n,t):(Re(255,t),ku(n,t)),fs(s,n-1,t)}},EO=function(e,t){let n=e.code.map(s=>s.code);ot(n.length,t);for(let s=0;s<n.length;s++)ot(n[s],t)},vO=function(e,t){let n=e.k.length;ot(n,t);for(let s=0;s<n;s++){let r=e.k[s];switch(Re(r.ttype(),t),r.ttype()){case gO:break;case dO:Re(r.value?1:0,t);break;case mO:g_(r.value,t);break;case _O:ku(r.value,t);break;case bO:case hO:xo(r.tsvalue(),t);break}}},TO=function(e,t){let n=e.p.length;ot(n,t);for(let s=0;s<n;s++)m_(e.p[s],e.source,t)},RO=function(e,t){let n=e.upvalues.length;ot(n,t);for(let s=0;s<n;s++)Re(e.upvalues[s].instack?1:0,t),Re(e.upvalues[s].idx,t)},yO=function(e,t){let n=t.strip?0:e.lineinfo.length;ot(n,t);for(let s=0;s<n;s++)ot(e.lineinfo[s],t);n=t.strip?0:e.locvars.length,ot(n,t);for(let s=0;s<n;s++)xo(e.locvars[s].varname,t),ot(e.locvars[s].startpc,t),ot(e.locvars[s].endpc,t);n=t.strip?0:e.upvalues.length,ot(n,t);for(let s=0;s<n;s++)xo(e.upvalues[s].name,t)},m_=function(e,t,n){n.strip||e.source===t?xo(null,n):xo(e.source,n),ot(e.linedefined,n),ot(e.lastlinedefined,n),Re(e.numparams,n),Re(e.is_vararg?1:0,n),Re(e.maxstacksize,n),EO(e,n),vO(e,n),RO(e,n),TO(e,n),yO(e,n)},NO=function(e){fs(f_,f_.length,e),Re(SO,e),Re(kO,e),fs(d_,d_.length,e),Re(4,e),Re(4,e),Re(4,e),Re(4,e),Re(8,e),ku(xO,e),g_(AO,e)},OO=function(e,t,n,s,r){let o=new Su;return o.L=e,o.writer=n,o.data=s,o.strip=r,o.status=0,NO(o),Re(t.upvalues.length,o),m_(t,null,o),o.status};__.exports.luaU_dump=OO});var Zr=I((OG,d)=>{"use strict";var{LUA_MULTRET:Tu,LUA_OPBNOT:CO,LUA_OPEQ:wO,LUA_OPLE:VO,LUA_OPLT:IO,LUA_OPUNM:PO,LUA_REGISTRYINDEX:hs,LUA_RIDX_GLOBALS:tl,LUA_VERSION_NUM:UO,constant_types:{LUA_NUMTAGS:KO,LUA_TBOOLEAN:x_,LUA_TCCL:Ru,LUA_TFUNCTION:FO,LUA_TLCF:A_,LUA_TLCL:yu,LUA_TLIGHTUSERDATA:ar,LUA_TLNGSTR:MO,LUA_TNIL:nl,LUA_TNONE:Nu,LUA_TNUMFLT:BO,LUA_TNUMINT:Ou,LUA_TSHRSTR:DO,LUA_TTABLE:rr,LUA_TTHREAD:Cu,LUA_TUSERDATA:lr},thread_status:{LUA_OK:el},from_userstring:On,to_luastring:Ao}=ue(),{api_check:k}=We(),GO=Wt(),Cn=xt(),{luaU_dump:qO}=b_(),S_=rs(),q=Qe(),ds=Xt(),{luaS_bless:k_,luaS_new:sl,luaS_newliteral:LO}=yt(),HO=ss(),{LUAI_MAXSTACK:jO}=je(),ye=ns(),at=Nt(),{ZIO:XO}=$r(),ge=q.TValue,WO=q.CClosure,Ne=function(e){e.top++,k(e,e.top<=e.ci.top,"stack overflow")},xe=function(e,t){k(e,t<e.top-e.ci.funcOff,"not enough elements in the stack")},rl=function(e){if(!e)throw TypeError("invalid argument")},an=function(e){rl(typeof e=="number"&&(e|0)===e)},or=function(e){return e!==q.luaO_nilobject},zO=function(e){return e===null?UO:e.l_G.version},JO=function(e,t){let n=e.l_G.panic;return e.l_G.panic=t,n},ZO=function(e,t){let n=e.l_G.atnativeerror;return e.l_G.atnativeerror=t,n},E=function(e,t){let n=e.ci;if(t>0){let s=n.funcOff+t;return k(e,t<=n.top-(n.funcOff+1),"unacceptable index"),s>=e.top?q.luaO_nilobject:e.stack[s]}else return t>hs?(k(e,t!==0&&-t<=e.top,"invalid index"),e.stack[e.top+t]):t===hs?e.l_G.l_registry:(t=hs-t,k(e,t<=S_.MAXUPVAL+1,"upvalue index too large"),n.func.ttislcf()?q.luaO_nilobject:t<=n.func.value.nupvalues?n.func.value.upvalue[t-1]:q.luaO_nilobject)},E_=function(e,t){let n=e.ci;if(t>0){let s=n.funcOff+t;return k(e,t<=n.top-(n.funcOff+1),"unacceptable index"),s>=e.top?null:s}else{if(t>hs)return k(e,t!==0&&-t<=e.top,"invalid index"),e.top+t;throw Error("attempt to use pseudo-index")}},YO=function(e,t){let n,s=e.ci;return k(e,t>=0,"negative 'n'"),e.stack_last-e.top>t?n=!0:e.top+ds.EXTRA_STACK>jO-t?n=!1:(Cn.luaD_growstack(e,t),n=!0),n&&s.top<e.top+t&&(s.top=e.top+t),n},$O=function(e,t,n){if(e!==t){xe(e,n),k(e,e.l_G===t.l_G,"moving among independent states"),k(e,t.ci.top-t.top>=n,"stack overflow"),e.top-=n;for(let s=0;s<n;s++)t.stack[t.top]=new q.TValue,q.setobj2s(t,t.top,e.stack[e.top+s]),delete e.stack[e.top+s],t.top++}},QO=function(e,t){return t>0||t<=hs?t:e.top-e.ci.funcOff+t},eC=function(e){return e.top-(e.ci.funcOff+1)},tC=function(e,t){q.pushobj2s(e,E(e,t)),k(e,e.top<=e.ci.top,"stack overflow")},v_=function(e,t){let n=e.ci.funcOff,s;t>=0?(k(e,t<=e.stack_last-(n+1),"new top too large"),s=n+1+t):(k(e,-(t+1)<=e.top-(n+1),"invalid new top"),s=e.top+t+1),Cn.adjust_top(e,s)},wu=function(e,t){v_(e,-t-1)},Eu=function(e,t,n){for(;t<n;t++,n--){let s=e.stack[t],r=new ge(s.type,s.value);q.setobjs2s(e,t,n),q.setobj2s(e,n,r)}},Vu=function(e,t,n){let s=e.top-1,r=E_(e,t),o=e.stack[r];k(e,or(o)&&t>hs,"index not in the stack"),k(e,(n>=0?n:-n)<=s-r+1,"invalid 'n'");let a=n>=0?s-n:r-n-1;Eu(e,r,a),Eu(e,a+1,e.top-1),Eu(e,r,e.top-1)},T_=function(e,t,n){let s=E(e,t);E(e,n).setfrom(s)},nC=function(e,t){Vu(e,t,-1),wu(e,1)},sC=function(e,t){Vu(e,t,1)},rC=function(e,t){T_(e,-1,t),wu(e,1)},oC=function(e){e.stack[e.top]=new ge(nl,null),Ne(e)},aC=function(e,t){rl(typeof t=="number"),e.stack[e.top]=new ge(BO,t),Ne(e)},lC=function(e,t){an(t),e.stack[e.top]=new ge(Ou,t),Ne(e)},iC=function(e,t,n){an(n);let s;return n===0?(t=Ao("",!0),s=k_(e,t)):(t=On(t),k(e,t.length>=n,"invalid length to lua_pushlstring"),s=sl(e,t.subarray(0,n))),q.pushsvalue2s(e,s),k(e,e.top<=e.ci.top,"stack overflow"),s.value},cC=function(e,t){if(t==null)e.stack[e.top]=new ge(nl,null),e.top++;else{let n=sl(e,On(t));q.pushsvalue2s(e,n),t=n.getstr()}return k(e,e.top<=e.ci.top,"stack overflow"),t},uC=function(e,t,n){return t=On(t),q.luaO_pushvfstring(e,t,n)},pC=function(e,t,...n){return t=On(t),q.luaO_pushvfstring(e,t,n)},fC=function(e,t){if(t==null)e.stack[e.top]=new ge(nl,null),e.top++;else{rl(typeof t=="string");let n=LO(e,t);q.pushsvalue2s(e,n),t=n.getstr()}return k(e,e.top<=e.ci.top,"stack overflow"),t},Iu=function(e,t,n){if(rl(typeof t=="function"),an(n),n===0)e.stack[e.top]=new ge(A_,t);else{xe(e,n),k(e,n<=S_.MAXUPVAL,"upvalue index too large");let s=new WO(e,t,n);for(let r=0;r<n;r++)s.upvalue[r].setfrom(e.stack[e.top-n+r]);for(let r=1;r<n;r++)delete e.stack[--e.top];n>0&&--e.top,e.stack[e.top].setclCvalue(s)}Ne(e)},dC=Iu,Pu=function(e,t){Iu(e,t,0)},hC=Pu,gC=function(e,t){e.stack[e.top]=new ge(x_,!!t),Ne(e)},mC=function(e,t){e.stack[e.top]=new ge(ar,t),Ne(e)},_C=function(e){return e.stack[e.top]=new ge(Cu,e),Ne(e),e.l_G.mainthread===e},bC=function(e){O_(e,hs,tl)},R_=function(e,t,n){let s=sl(e,On(n));xe(e,1),q.pushsvalue2s(e,s),k(e,e.top<=e.ci.top,"stack overflow"),ye.settable(e,t,e.stack[e.top-1],e.stack[e.top-2]),delete e.stack[--e.top],delete e.stack[--e.top]},y_=function(e,t){R_(e,at.luaH_getint(e.l_G.l_registry.value,tl),t)},xC=function(e,t){xe(e,1);let n,s=E(e,t);switch(e.stack[e.top-1].ttisnil()?n=null:(k(e,e.stack[e.top-1].ttistable(),"table expected"),n=e.stack[e.top-1].value),s.ttnov()){case lr:case rr:{s.value.metatable=n;break}default:{e.l_G.mt[s.ttnov()]=n;break}}return delete e.stack[--e.top],!0},AC=function(e,t){xe(e,2);let n=E(e,t);ye.settable(e,n,e.stack[e.top-2],e.stack[e.top-1]),delete e.stack[--e.top],delete e.stack[--e.top]},SC=function(e,t,n){R_(e,E(e,t),n)},kC=function(e,t,n){an(n),xe(e,1);let s=E(e,t);e.stack[e.top]=new ge(Ou,n),Ne(e),ye.settable(e,s,e.stack[e.top-1],e.stack[e.top-2]),delete e.stack[--e.top],delete e.stack[--e.top]},EC=function(e,t){xe(e,2);let n=E(e,t);k(e,n.ttistable(),"table expected");let s=e.stack[e.top-2],r=e.stack[e.top-1];at.luaH_setfrom(e,n.value,s,r),at.invalidateTMcache(n.value),delete e.stack[--e.top],delete e.stack[--e.top]},vC=function(e,t,n){an(n),xe(e,1);let s=E(e,t);k(e,s.ttistable(),"table expected"),at.luaH_setint(s.value,n,e.stack[e.top-1]),delete e.stack[--e.top]},TC=function(e,t,n){xe(e,1);let s=E(e,t);k(e,s.ttistable(),"table expected");let r=new ge(ar,n),o=e.stack[e.top-1];at.luaH_setfrom(e,s.value,r,o),delete e.stack[--e.top]},N_=function(e,t,n){let s=sl(e,On(n));return q.pushsvalue2s(e,s),k(e,e.top<=e.ci.top,"stack overflow"),ye.luaV_gettable(e,t,e.stack[e.top-1],e.top-1),e.stack[e.top-1].ttnov()},O_=function(e,t,n){let s=E(e,t);return an(n),k(e,s.ttistable(),"table expected"),q.pushobj2s(e,at.luaH_getint(s.value,n)),k(e,e.top<=e.ci.top,"stack overflow"),e.stack[e.top-1].ttnov()},RC=function(e,t,n){let s=E(e,t);k(e,s.ttistable(),"table expected");let r=new ge(ar,n);return q.pushobj2s(e,at.luaH_get(e,s.value,r)),k(e,e.top<=e.ci.top,"stack overflow"),e.stack[e.top-1].ttnov()},yC=function(e,t){let n=E(e,t);return k(e,n.ttistable(n),"table expected"),q.setobj2s(e,e.top-1,at.luaH_get(e,n.value,e.stack[e.top-1])),e.stack[e.top-1].ttnov()},C_=function(e,t,n){let s=new q.TValue(rr,at.luaH_new(e));e.stack[e.top]=s,Ne(e)},NC=function(e,t){return new q.Udata(e,t)},OC=function(e,t){let n=NC(e,t);return e.stack[e.top]=new q.TValue(lr,n),Ne(e),n.data},w_=function(e,t,n){switch(an(n),t.ttype()){case Ru:{let s=t.value;return 1<=n&&n<=s.nupvalues?{name:Ao("",!0),val:s.upvalue[n-1]}:null}case yu:{let s=t.value,r=s.p;if(!(1<=n&&n<=r.upvalues.length))return null;let o=r.upvalues[n-1].name;return{name:o?o.getstr():Ao("(*no name)",!0),val:s.upvals[n-1]}}default:return null}},CC=function(e,t,n){let s=w_(e,E(e,t),n);if(s){let r=s.name,o=s.val;return q.pushobj2s(e,o),k(e,e.top<=e.ci.top,"stack overflow"),r}return null},wC=function(e,t,n){let s=E(e,t);xe(e,1);let r=w_(e,s,n);if(r){let o=r.name;return r.val.setfrom(e.stack[e.top-1]),delete e.stack[--e.top],o}return null},VC=function(e){C_(e,0,0)},IC=function(e,t,n){Pu(e,n),y_(e,t)},PC=function(e,t){let n=E(e,t),s,r=!1;switch(n.ttnov()){case rr:case lr:s=n.value.metatable;break;default:s=e.l_G.mt[n.ttnov()];break}return s!=null&&(e.stack[e.top]=new ge(rr,s),Ne(e),r=!0),r},UC=function(e,t){let n=E(e,t);k(e,n.ttisfulluserdata(),"full userdata expected");let s=n.value.uservalue;return e.stack[e.top]=new ge(s.type,s.value),Ne(e),e.stack[e.top-1].ttnov()},KC=function(e,t){let n=E(e,t);return ye.luaV_gettable(e,n,e.stack[e.top-1],e.top-1),e.stack[e.top-1].ttnov()},FC=function(e,t,n){return N_(e,E(e,t),n)},MC=function(e,t,n){let s=E(e,t);return an(n),e.stack[e.top]=new ge(Ou,n),Ne(e),ye.luaV_gettable(e,s,e.stack[e.top-1],e.top-1),e.stack[e.top-1].ttnov()},BC=function(e,t){return N_(e,at.luaH_getint(e.l_G.l_registry.value,tl),t)},DC=function(e,t){return!E(e,t).l_isfalse()},Uu=function(e,t){let n=E(e,t);if(!n.ttisstring()){if(!ye.cvt2str(n))return null;q.luaO_tostring(e,n)}return n.svalue()},GC=Uu,qC=function(e,t){let n=E(e,t);if(!n.ttisstring()){if(!ye.cvt2str(n))return null;q.luaO_tostring(e,n)}return n.jsstring()},LC=function(e,t){let n=Uu(e,t);return new DataView(n.buffer,n.byteOffset,n.byteLength)},HC=function(e,t){let n=E(e,t);switch(n.ttype()){case DO:case MO:return n.vslen();case lr:return n.value.len;case rr:return at.luaH_getn(n.value);default:return 0}},jC=function(e,t){let n=E(e,t);return n.ttislcf()||n.ttisCclosure()?n.value:null},XC=function(e,t){let n=V_(e,t);return n===!1?0:n},V_=function(e,t){return ye.tointeger(E(e,t))},WC=function(e,t){let n=I_(e,t);return n===!1?0:n},I_=function(e,t){return ye.tonumber(E(e,t))},zC=function(e,t){let n=E(e,t);switch(n.ttnov()){case lr:return n.value.data;case ar:return n.value;default:return null}},JC=function(e,t){let n=E(e,t);return n.ttisthread()?n.value:null},ZC=function(e,t){let n=E(e,t);switch(n.ttype()){case rr:case yu:case Ru:case A_:case Cu:case lr:case ar:return n.value;default:return null}},P_=new WeakMap,YC=function(e,t){let n=P_.get(e);return n?t===null||t.l_G===n:!1},$C=function(e,t,n){let s=function(r){k(r,r instanceof ds.lua_State&&e===r.l_G,"must be from same global state"),r.stack[r.top]=new ge(t,n),Ne(r)};return P_.set(s,e),s},QC=function(e,t){let n=E(e,t);return $C(e.l_G,n.type,n.value)},ew=function(e,t,n,s){let r=E(e,t),o=E(e,n),a=0;if(or(r)&&or(o))switch(s){case wO:a=ye.luaV_equalobj(e,r,o);break;case IO:a=ye.luaV_lessthan(e,r,o);break;case VO:a=ye.luaV_lessequal(e,r,o);break;default:k(e,!1,"invalid option")}return a},tw=function(e,t){let n=new ge,s=q.luaO_str2num(t,n);return s!==0&&(e.stack[e.top]=n,Ne(e)),s},nw=function(e,t){Cn.luaD_callnoyield(e,t.funcOff,t.nresults)},wn=function(e,t){let n=E(e,t);return or(n)?n.ttnov():Nu},sw=function(e,t){return k(e,Nu<=t&&t<KO,"invalid tag"),HO.ttypename(t)},rw=function(e,t){let n=E(e,t);return n.ttislcf(n)||n.ttisCclosure()},ow=function(e,t){return wn(e,t)===nl},aw=function(e,t){return wn(e,t)===x_},lw=function(e,t){return wn(e,t)===Nu},iw=function(e,t){return wn(e,t)<=0},cw=function(e,t){return E(e,t).ttistable()},uw=function(e,t){return E(e,t).ttisinteger()},pw=function(e,t){return ye.tonumber(E(e,t))!==!1},fw=function(e,t){let n=E(e,t);return n.ttisstring()||ye.cvt2str(n)},dw=function(e,t){let n=E(e,t);return n.ttisfulluserdata(n)||n.ttislightuserdata()},hw=function(e,t){return wn(e,t)===Cu},gw=function(e,t){return wn(e,t)===FO},mw=function(e,t){return wn(e,t)===ar},_w=function(e,t,n){let s=E(e,t),r=E(e,n);return or(s)&&or(r)?ye.luaV_equalobj(null,s,r):0},bw=function(e,t){t!==PO&&t!==CO?xe(e,2):(xe(e,1),q.pushobj2s(e,e.stack[e.top-1]),k(e,e.top<=e.ci.top,"stack overflow")),q.luaO_arith(e,t,e.stack[e.top-2],e.stack[e.top-1],e.stack[e.top-2]),delete e.stack[--e.top]},xw=Ao("?"),Aw=function(e,t,n,s,r){s?s=On(s):s=xw,r!==null&&(r=On(r));let o=new XO(e,t,n),a=Cn.luaD_protectedparser(e,o,s,r);if(a===el){let l=e.stack[e.top-1].value;if(l.nupvalues>=1){let i=at.luaH_getint(e.l_G.l_registry.value,tl);l.upvals[0].setfrom(i)}}return a},Sw=function(e,t,n,s){xe(e,1);let r=e.stack[e.top-1];return r.ttisLclosure()?qO(e,r.value.p,t,n,s):1},kw=function(e){return e.status},Ew=function(e,t){xe(e,1);let n=E(e,t);k(e,n.ttisfulluserdata(),"full userdata expected"),n.value.uservalue.setfrom(e.stack[e.top-1]),delete e.stack[--e.top]},U_=function(e,t,n){k(e,n===Tu||e.ci.top-e.top>=n-t,"results from function overflow current stack size")},K_=function(e,t,n,s,r){k(e,r===null||!(e.ci.callstatus&ds.CIST_LUA),"cannot use continuations inside hooks"),xe(e,t+1),k(e,e.status===el,"cannot do calls on non-normal thread"),U_(e,t,n);let o=e.top-(t+1);r!==null&&e.nny===0?(e.ci.c_k=r,e.ci.c_ctx=s,Cn.luaD_call(e,o,n)):Cn.luaD_callnoyield(e,o,n),n===Tu&&e.ci.top<e.top&&(e.ci.top=e.top)},vw=function(e,t,n){K_(e,t,n,0,null)},F_=function(e,t,n,s,r,o){k(e,o===null||!(e.ci.callstatus&ds.CIST_LUA),"cannot use continuations inside hooks"),xe(e,t+1),k(e,e.status===el,"cannot do calls on non-normal thread"),U_(e,t,n);let a,l;s===0?l=0:l=E_(e,s);let i=e.top-(t+1);if(o===null||e.nny>0){let u={funcOff:i,nresults:n};a=Cn.luaD_pcall(e,nw,u,i,l)}else{let u=e.ci;u.c_k=o,u.c_ctx=r,u.extra=i,u.c_old_errfunc=e.errfunc,e.errfunc=l,u.callstatus&=~ds.CIST_OAH|e.allowhook,u.callstatus|=ds.CIST_YPCALL,Cn.luaD_call(e,i,n),u.callstatus&=~ds.CIST_YPCALL,e.errfunc=u.c_old_errfunc,a=el}return n===Tu&&e.ci.top<e.top&&(e.ci.top=e.top),a},Tw=function(e,t,n,s){return F_(e,t,n,s,0,null)},Rw=function(e){xe(e,1),GO.luaG_errormsg(e)},yw=function(e,t){let n=E(e,t);return k(e,n.ttistable(),"table expected"),e.stack[e.top]=new ge,at.luaH_next(e,n.value,e.top-1)?(Ne(e),1):(delete e.stack[e.top],delete e.stack[--e.top],0)},Nw=function(e,t){xe(e,t),t>=2?ye.luaV_concat(e,t):t===0&&(q.pushsvalue2s(e,k_(e,Ao("",!0))),k(e,e.top<=e.ci.top,"stack overflow"))},Ow=function(e,t){let n=E(e,t),s=new ge;ye.luaV_objlen(e,s,n),e.stack[e.top]=s,Ne(e)},vu=function(e,t,n){let s=E(e,t);k(e,s.ttisLclosure(),"Lua function expected");let r=s.value;return an(n),k(e,1<=n&&n<=r.p.upvalues.length,"invalid upvalue index"),{f:r,i:n-1}},Cw=function(e,t,n){let s=E(e,t);switch(s.ttype()){case yu:{let r=vu(e,t,n);return r.f.upvals[r.i]}case Ru:{let r=s.value;return k(e,(n|0)===n&&n>0&&n<=r.nupvalues,"invalid upvalue index"),r.upvalue[n-1]}default:return k(e,!1,"closure expected"),null}},ww=function(e,t,n,s,r){let o=vu(e,t,n),a=vu(e,s,r),l=a.f.upvals[a.i];o.f.upvals[o.i]=l},Vw=function(){},Iw=function(){return console.warn("lua_getallocf is not available"),0},Pw=function(){return console.warn("lua_setallocf is not available"),0},Uw=function(){return console.warn("lua_getextraspace is not available"),0};d.exports.api_incr_top=Ne;d.exports.api_checknelems=xe;d.exports.lua_absindex=QO;d.exports.lua_arith=bw;d.exports.lua_atpanic=JO;d.exports.lua_atnativeerror=ZO;d.exports.lua_call=vw;d.exports.lua_callk=K_;d.exports.lua_checkstack=YO;d.exports.lua_compare=ew;d.exports.lua_concat=Nw;d.exports.lua_copy=T_;d.exports.lua_createtable=C_;d.exports.lua_dump=Sw;d.exports.lua_error=Rw;d.exports.lua_gc=Vw;d.exports.lua_getallocf=Iw;d.exports.lua_getextraspace=Uw;d.exports.lua_getfield=FC;d.exports.lua_getglobal=BC;d.exports.lua_geti=MC;d.exports.lua_getmetatable=PC;d.exports.lua_gettable=KC;d.exports.lua_gettop=eC;d.exports.lua_getupvalue=CC;d.exports.lua_getuservalue=UC;d.exports.lua_insert=sC;d.exports.lua_isboolean=aw;d.exports.lua_iscfunction=rw;d.exports.lua_isfunction=gw;d.exports.lua_isinteger=uw;d.exports.lua_islightuserdata=mw;d.exports.lua_isnil=ow;d.exports.lua_isnone=lw;d.exports.lua_isnoneornil=iw;d.exports.lua_isnumber=pw;d.exports.lua_isproxy=YC;d.exports.lua_isstring=fw;d.exports.lua_istable=cw;d.exports.lua_isthread=hw;d.exports.lua_isuserdata=dw;d.exports.lua_len=Ow;d.exports.lua_load=Aw;d.exports.lua_newtable=VC;d.exports.lua_newuserdata=OC;d.exports.lua_next=yw;d.exports.lua_pcall=Tw;d.exports.lua_pcallk=F_;d.exports.lua_pop=wu;d.exports.lua_pushboolean=gC;d.exports.lua_pushcclosure=Iu;d.exports.lua_pushcfunction=Pu;d.exports.lua_pushfstring=pC;d.exports.lua_pushglobaltable=bC;d.exports.lua_pushinteger=lC;d.exports.lua_pushjsclosure=dC;d.exports.lua_pushjsfunction=hC;d.exports.lua_pushlightuserdata=mC;d.exports.lua_pushliteral=fC;d.exports.lua_pushlstring=iC;d.exports.lua_pushnil=oC;d.exports.lua_pushnumber=aC;d.exports.lua_pushstring=cC;d.exports.lua_pushthread=_C;d.exports.lua_pushvalue=tC;d.exports.lua_pushvfstring=uC;d.exports.lua_rawequal=_w;d.exports.lua_rawget=yC;d.exports.lua_rawgeti=O_;d.exports.lua_rawgetp=RC;d.exports.lua_rawlen=HC;d.exports.lua_rawset=EC;d.exports.lua_rawseti=vC;d.exports.lua_rawsetp=TC;d.exports.lua_register=IC;d.exports.lua_remove=nC;d.exports.lua_replace=rC;d.exports.lua_rotate=Vu;d.exports.lua_setallocf=Pw;d.exports.lua_setfield=SC;d.exports.lua_setglobal=y_;d.exports.lua_seti=kC;d.exports.lua_setmetatable=xC;d.exports.lua_settable=AC;d.exports.lua_settop=v_;d.exports.lua_setupvalue=wC;d.exports.lua_setuservalue=Ew;d.exports.lua_status=kw;d.exports.lua_stringtonumber=tw;d.exports.lua_toboolean=DC;d.exports.lua_tocfunction=jC;d.exports.lua_todataview=LC;d.exports.lua_tointeger=XC;d.exports.lua_tointegerx=V_;d.exports.lua_tojsstring=qC;d.exports.lua_tolstring=Uu;d.exports.lua_tonumber=WC;d.exports.lua_tonumberx=I_;d.exports.lua_topointer=ZC;d.exports.lua_toproxy=QC;d.exports.lua_tostring=GC;d.exports.lua_tothread=JC;d.exports.lua_touserdata=zC;d.exports.lua_type=wn;d.exports.lua_typename=sw;d.exports.lua_upvalueid=Cw;d.exports.lua_upvaluejoin=ww;d.exports.lua_version=zO;d.exports.lua_xmove=$O});var Ke=I((CG,p)=>{"use strict";var _=ue(),h=Zr(),Vn=Wt(),ol=xt(),Ku=Xt();p.exports.LUA_AUTHORS=_.LUA_AUTHORS;p.exports.LUA_COPYRIGHT=_.LUA_COPYRIGHT;p.exports.LUA_ERRERR=_.thread_status.LUA_ERRERR;p.exports.LUA_ERRGCMM=_.thread_status.LUA_ERRGCMM;p.exports.LUA_ERRMEM=_.thread_status.LUA_ERRMEM;p.exports.LUA_ERRRUN=_.thread_status.LUA_ERRRUN;p.exports.LUA_ERRSYNTAX=_.thread_status.LUA_ERRSYNTAX;p.exports.LUA_HOOKCALL=_.LUA_HOOKCALL;p.exports.LUA_HOOKCOUNT=_.LUA_HOOKCOUNT;p.exports.LUA_HOOKLINE=_.LUA_HOOKLINE;p.exports.LUA_HOOKRET=_.LUA_HOOKRET;p.exports.LUA_HOOKTAILCALL=_.LUA_HOOKTAILCALL;p.exports.LUA_MASKCALL=_.LUA_MASKCALL;p.exports.LUA_MASKCOUNT=_.LUA_MASKCOUNT;p.exports.LUA_MASKLINE=_.LUA_MASKLINE;p.exports.LUA_MASKRET=_.LUA_MASKRET;p.exports.LUA_MINSTACK=_.LUA_MINSTACK;p.exports.LUA_MULTRET=_.LUA_MULTRET;p.exports.LUA_NUMTAGS=_.constant_types.LUA_NUMTAGS;p.exports.LUA_OK=_.thread_status.LUA_OK;p.exports.LUA_OPADD=_.LUA_OPADD;p.exports.LUA_OPBAND=_.LUA_OPBAND;p.exports.LUA_OPBNOT=_.LUA_OPBNOT;p.exports.LUA_OPBOR=_.LUA_OPBOR;p.exports.LUA_OPBXOR=_.LUA_OPBXOR;p.exports.LUA_OPDIV=_.LUA_OPDIV;p.exports.LUA_OPEQ=_.LUA_OPEQ;p.exports.LUA_OPIDIV=_.LUA_OPIDIV;p.exports.LUA_OPLE=_.LUA_OPLE;p.exports.LUA_OPLT=_.LUA_OPLT;p.exports.LUA_OPMOD=_.LUA_OPMOD;p.exports.LUA_OPMUL=_.LUA_OPMUL;p.exports.LUA_OPPOW=_.LUA_OPPOW;p.exports.LUA_OPSHL=_.LUA_OPSHL;p.exports.LUA_OPSHR=_.LUA_OPSHR;p.exports.LUA_OPSUB=_.LUA_OPSUB;p.exports.LUA_OPUNM=_.LUA_OPUNM;p.exports.LUA_REGISTRYINDEX=_.LUA_REGISTRYINDEX;p.exports.LUA_RELEASE=_.LUA_RELEASE;p.exports.LUA_RIDX_GLOBALS=_.LUA_RIDX_GLOBALS;p.exports.LUA_RIDX_LAST=_.LUA_RIDX_LAST;p.exports.LUA_RIDX_MAINTHREAD=_.LUA_RIDX_MAINTHREAD;p.exports.LUA_SIGNATURE=_.LUA_SIGNATURE;p.exports.LUA_TNONE=_.constant_types.LUA_TNONE;p.exports.LUA_TNIL=_.constant_types.LUA_TNIL;p.exports.LUA_TBOOLEAN=_.constant_types.LUA_TBOOLEAN;p.exports.LUA_TLIGHTUSERDATA=_.constant_types.LUA_TLIGHTUSERDATA;p.exports.LUA_TNUMBER=_.constant_types.LUA_TNUMBER;p.exports.LUA_TSTRING=_.constant_types.LUA_TSTRING;p.exports.LUA_TTABLE=_.constant_types.LUA_TTABLE;p.exports.LUA_TFUNCTION=_.constant_types.LUA_TFUNCTION;p.exports.LUA_TUSERDATA=_.constant_types.LUA_TUSERDATA;p.exports.LUA_TTHREAD=_.constant_types.LUA_TTHREAD;p.exports.LUA_VERSION=_.LUA_VERSION;p.exports.LUA_VERSION_MAJOR=_.LUA_VERSION_MAJOR;p.exports.LUA_VERSION_MINOR=_.LUA_VERSION_MINOR;p.exports.LUA_VERSION_NUM=_.LUA_VERSION_NUM;p.exports.LUA_VERSION_RELEASE=_.LUA_VERSION_RELEASE;p.exports.LUA_YIELD=_.thread_status.LUA_YIELD;p.exports.lua_Debug=_.lua_Debug;p.exports.lua_upvalueindex=_.lua_upvalueindex;p.exports.lua_absindex=h.lua_absindex;p.exports.lua_arith=h.lua_arith;p.exports.lua_atpanic=h.lua_atpanic;p.exports.lua_atnativeerror=h.lua_atnativeerror;p.exports.lua_call=h.lua_call;p.exports.lua_callk=h.lua_callk;p.exports.lua_checkstack=h.lua_checkstack;p.exports.lua_close=Ku.lua_close;p.exports.lua_compare=h.lua_compare;p.exports.lua_concat=h.lua_concat;p.exports.lua_copy=h.lua_copy;p.exports.lua_createtable=h.lua_createtable;p.exports.lua_dump=h.lua_dump;p.exports.lua_error=h.lua_error;p.exports.lua_gc=h.lua_gc;p.exports.lua_getallocf=h.lua_getallocf;p.exports.lua_getextraspace=h.lua_getextraspace;p.exports.lua_getfield=h.lua_getfield;p.exports.lua_getglobal=h.lua_getglobal;p.exports.lua_gethook=Vn.lua_gethook;p.exports.lua_gethookcount=Vn.lua_gethookcount;p.exports.lua_gethookmask=Vn.lua_gethookmask;p.exports.lua_geti=h.lua_geti;p.exports.lua_getinfo=Vn.lua_getinfo;p.exports.lua_getlocal=Vn.lua_getlocal;p.exports.lua_getmetatable=h.lua_getmetatable;p.exports.lua_getstack=Vn.lua_getstack;p.exports.lua_gettable=h.lua_gettable;p.exports.lua_gettop=h.lua_gettop;p.exports.lua_getupvalue=h.lua_getupvalue;p.exports.lua_getuservalue=h.lua_getuservalue;p.exports.lua_insert=h.lua_insert;p.exports.lua_isboolean=h.lua_isboolean;p.exports.lua_iscfunction=h.lua_iscfunction;p.exports.lua_isfunction=h.lua_isfunction;p.exports.lua_isinteger=h.lua_isinteger;p.exports.lua_islightuserdata=h.lua_islightuserdata;p.exports.lua_isnil=h.lua_isnil;p.exports.lua_isnone=h.lua_isnone;p.exports.lua_isnoneornil=h.lua_isnoneornil;p.exports.lua_isnumber=h.lua_isnumber;p.exports.lua_isproxy=h.lua_isproxy;p.exports.lua_isstring=h.lua_isstring;p.exports.lua_istable=h.lua_istable;p.exports.lua_isthread=h.lua_isthread;p.exports.lua_isuserdata=h.lua_isuserdata;p.exports.lua_isyieldable=ol.lua_isyieldable;p.exports.lua_len=h.lua_len;p.exports.lua_load=h.lua_load;p.exports.lua_newstate=Ku.lua_newstate;p.exports.lua_newtable=h.lua_newtable;p.exports.lua_newthread=Ku.lua_newthread;p.exports.lua_newuserdata=h.lua_newuserdata;p.exports.lua_next=h.lua_next;p.exports.lua_pcall=h.lua_pcall;p.exports.lua_pcallk=h.lua_pcallk;p.exports.lua_pop=h.lua_pop;p.exports.lua_pushboolean=h.lua_pushboolean;p.exports.lua_pushcclosure=h.lua_pushcclosure;p.exports.lua_pushcfunction=h.lua_pushcfunction;p.exports.lua_pushfstring=h.lua_pushfstring;p.exports.lua_pushglobaltable=h.lua_pushglobaltable;p.exports.lua_pushinteger=h.lua_pushinteger;p.exports.lua_pushjsclosure=h.lua_pushjsclosure;p.exports.lua_pushjsfunction=h.lua_pushjsfunction;p.exports.lua_pushlightuserdata=h.lua_pushlightuserdata;p.exports.lua_pushliteral=h.lua_pushliteral;p.exports.lua_pushlstring=h.lua_pushlstring;p.exports.lua_pushnil=h.lua_pushnil;p.exports.lua_pushnumber=h.lua_pushnumber;p.exports.lua_pushstring=h.lua_pushstring;p.exports.lua_pushthread=h.lua_pushthread;p.exports.lua_pushvalue=h.lua_pushvalue;p.exports.lua_pushvfstring=h.lua_pushvfstring;p.exports.lua_rawequal=h.lua_rawequal;p.exports.lua_rawget=h.lua_rawget;p.exports.lua_rawgeti=h.lua_rawgeti;p.exports.lua_rawgetp=h.lua_rawgetp;p.exports.lua_rawlen=h.lua_rawlen;p.exports.lua_rawset=h.lua_rawset;p.exports.lua_rawseti=h.lua_rawseti;p.exports.lua_rawsetp=h.lua_rawsetp;p.exports.lua_register=h.lua_register;p.exports.lua_remove=h.lua_remove;p.exports.lua_replace=h.lua_replace;p.exports.lua_resume=ol.lua_resume;p.exports.lua_rotate=h.lua_rotate;p.exports.lua_setallocf=h.lua_setallocf;p.exports.lua_setfield=h.lua_setfield;p.exports.lua_setglobal=h.lua_setglobal;p.exports.lua_sethook=Vn.lua_sethook;p.exports.lua_seti=h.lua_seti;p.exports.lua_setlocal=Vn.lua_setlocal;p.exports.lua_setmetatable=h.lua_setmetatable;p.exports.lua_settable=h.lua_settable;p.exports.lua_settop=h.lua_settop;p.exports.lua_setupvalue=h.lua_setupvalue;p.exports.lua_setuservalue=h.lua_setuservalue;p.exports.lua_status=h.lua_status;p.exports.lua_stringtonumber=h.lua_stringtonumber;p.exports.lua_toboolean=h.lua_toboolean;p.exports.lua_todataview=h.lua_todataview;p.exports.lua_tointeger=h.lua_tointeger;p.exports.lua_tointegerx=h.lua_tointegerx;p.exports.lua_tojsstring=h.lua_tojsstring;p.exports.lua_tolstring=h.lua_tolstring;p.exports.lua_tonumber=h.lua_tonumber;p.exports.lua_tonumberx=h.lua_tonumberx;p.exports.lua_topointer=h.lua_topointer;p.exports.lua_toproxy=h.lua_toproxy;p.exports.lua_tostring=h.lua_tostring;p.exports.lua_tothread=h.lua_tothread;p.exports.lua_touserdata=h.lua_touserdata;p.exports.lua_type=h.lua_type;p.exports.lua_typename=h.lua_typename;p.exports.lua_upvalueid=h.lua_upvalueid;p.exports.lua_upvaluejoin=h.lua_upvaluejoin;p.exports.lua_version=h.lua_version;p.exports.lua_xmove=h.lua_xmove;p.exports.lua_yield=ol.lua_yield;p.exports.lua_yieldk=ol.lua_yieldk;p.exports.lua_tocfunction=h.lua_tocfunction});var So={};VS(So,{default:()=>Fw,existsSync:()=>B_,readFileSync:()=>M_});function Kw(e){return()=>{throw new Error(`node-shims/fs: "${e}" is not available in the browser build`)}}var M_,B_,Fw,ko=wS(()=>{M_=Kw("readFileSync"),B_=()=>!1,Fw={readFileSync:M_,existsSync:B_}});var Ye=I((wG,m)=>{"use strict";var{LUAL_BUFFERSIZE:Mw}=je(),{LUA_ERRERR:Bw,LUA_MULTRET:X_,LUA_REGISTRYINDEX:fl,LUA_SIGNATURE:D_,LUA_TBOOLEAN:Dw,LUA_TLIGHTUSERDATA:Gw,LUA_TNIL:cr,LUA_TNONE:qw,LUA_TNUMBER:Gu,LUA_TSTRING:Eo,LUA_TTABLE:Lw,LUA_VERSION_NUM:Hw,lua_Debug:dl,lua_absindex:hl,lua_atpanic:jw,lua_call:W_,lua_checkstack:Xw,lua_concat:ll,lua_copy:Ww,lua_createtable:qu,lua_error:zw,lua_getfield:gl,lua_getinfo:ml,lua_getmetatable:z_,lua_getstack:vo,lua_gettop:ir,lua_insert:Jw,lua_isinteger:Zw,lua_isnil:Yw,lua_isnumber:$w,lua_isstring:Qw,lua_istable:eV,lua_len:tV,lua_load:Fu,lua_newstate:nV,lua_newtable:sV,lua_next:rV,lua_pcall:J_,lua_pop:it,lua_pushboolean:Z_,lua_pushcclosure:oV,lua_pushcfunction:aV,lua_pushfstring:qe,lua_pushinteger:il,lua_pushliteral:lt,lua_pushlstring:lV,lua_pushnil:Lu,lua_pushstring:pr,lua_pushvalue:gs,lua_pushvfstring:iV,lua_rawequal:Y_,lua_rawget:cV,lua_rawgeti:Mu,lua_rawlen:uV,lua_rawseti:cl,lua_remove:ln,lua_setfield:To,lua_setglobal:pV,lua_setmetatable:fV,lua_settop:Bu,lua_toboolean:$_,lua_tointeger:Q_,lua_tointegerx:eb,lua_tojsstring:dV,lua_tolstring:tb,lua_tonumber:hV,lua_tonumberx:gV,lua_topointer:mV,lua_tostring:Mt,lua_touserdata:_V,lua_type:In,lua_typename:nb,lua_version:G_}=Ke(),{from_userstring:Hu,luastring_eq:sb,to_luastring:v,to_uristring:bV}=Xe(),rb=Bw+1,ju=v("_LOADED"),xV=v("_PRELOAD"),AV=v("FILE*"),ob=72,Xu=v("__name"),SV=v("__tostring"),Wu=new Uint8Array(0),ul=class{constructor(){this.L=null,this.b=Wu,this.n=0}},q_=10,L_=11,ab=function(e,t,n){if(n===0||!eV(e,-1))return 0;for(Lu(e);rV(e,-2);){if(In(e,-2)===Eo){if(Y_(e,t,-1))return it(e,1),1;if(ab(e,t,n-1))return ln(e,-2),lt(e,"."),Jw(e,-2),ll(e,3),1}it(e,1)}return 0},lb=function(e,t){let n=ir(e);if(ml(e,v("f"),t),gl(e,fl,ju),ab(e,n+1,2)){let s=Mt(e,-1);return s[0]===95&&s[1]===71&&s[2]===46&&(pr(e,s.subarray(3)),ln(e,-2)),Ww(e,-1,n+1),it(e,2),1}else return Bu(e,n),0},kV=function(e,t){lb(e,t)?(qe(e,v("function '%s'"),Mt(e,-1)),ln(e,-2)):t.namewhat.length!==0?qe(e,v("%s '%s'"),t.namewhat,t.name):t.what&&t.what[0]===109?lt(e,"main chunk"):t.what&&t.what[0]===76?qe(e,v("function <%s:%d>"),t.short_src,t.linedefined):lt(e,"?")},EV=function(e){let t=new dl,n=1,s=1;for(;vo(e,s,t);)n=s,s*=2;for(;n<s;){let r=Math.floor((n+s)/2);vo(e,r,t)?n=r+1:s=r}return s-1},vV=function(e,t,n,s){let r=new dl,o=ir(e),a=EV(t),l=a-s>q_+L_?q_:-1;for(n&&qe(e,v(`%s
`),n),ep(e,10,null),lt(e,"stack traceback:");vo(t,s++,r);)l--===0?(lt(e,`
	...`),s=a-L_+1):(ml(t,v("Slnt",!0),r),qe(e,v(`
	%s:`),r.short_src),r.currentline>0&&lt(e,`${r.currentline}:`),lt(e," in "),kV(e,r),r.istailcall&&lt(e,`
	(...tail calls..)`),ll(e,ir(e)-o));ll(e,ir(e)-o)},TV=function(e){let t="PANIC: unprotected error in call to Lua API ("+dV(e,-1)+")";throw new Error(t)},fr=function(e,t,n){let s=new dl;return vo(e,0,s)?(ml(e,v("n"),s),sb(s.namewhat,v("method"))&&(t--,t===0)?St(e,v("calling '%s' on bad self (%s)"),s.name,n):(s.name===null&&(s.name=lb(e,s)?Mt(e,-1):v("?")),St(e,v("bad argument #%d to '%s' (%s)"),t,s.name,n))):St(e,v("bad argument #%d (%s)"),t,n)},ib=function(e,t,n){let s;Al(e,t,Xu)===Eo?s=Mt(e,-1):In(e,t)===Gw?s=v("light userdata",!0):s=zu(e,t);let r=qe(e,v("%s expected, got %s"),n,s);return fr(e,t,r)},cb=function(e,t){let n=new dl;if(vo(e,t,n)&&(ml(e,v("Sl",!0),n),n.currentline>0)){qe(e,v("%s:%d: "),n.short_src,n.currentline);return}pr(e,v(""))},St=function(e,t,...n){return cb(e,1),iV(e,t,n),ll(e,2),zw(e)},ub=function(e,t,n,s){if(t)return Z_(e,1),1;{Lu(e);let r,o;return s?(r=s.message,o=-s.errno):(r="Success",o=0),n?qe(e,v("%s: %s"),n,v(r)):pr(e,v(r)),il(e,o),3}},RV=function(e,t){let n,s;if(t===null)return Z_(e,1),lt(e,"exit"),il(e,0),3;if(t.status)n="exit",s=t.status;else if(t.signal)n="signal",s=t.signal;else return ub(e,0,null,t);return Lu(e),lt(e,n),il(e,s),3},_l=function(e,t){return gl(e,fl,t)},yV=function(e,t){return _l(e,t)!==cr?0:(it(e,1),qu(e,0,2),pr(e,t),To(e,-2,Xu),gs(e,-1),To(e,fl,t),1)},NV=function(e,t){_l(e,t),fV(e,-2)},pb=function(e,t,n){let s=_V(e,t);return s!==null&&z_(e,t)?(_l(e,n),Y_(e,-1,-2)||(s=null),it(e,2),s):null},OV=function(e,t,n){let s=pb(e,t,n);return s===null&&ib(e,t,n),s},CV=function(e,t,n,s){let r=n!==null?hb(e,t,n):fb(e,t);for(let o=0;s[o];o++)if(sb(s[o],r))return o;return fr(e,t,qe(e,v("invalid option '%s'"),r))},bl=function(e,t,n){ib(e,t,nb(e,n))},wV=function(){let e=nV();return e&&jw(e,TV),e},zu=function(e,t){return nb(e,In(e,t))},VV=function(e,t,n,s){t||fr(e,n,s)},IV=function(e,t){In(e,t)===qw&&fr(e,t,v("value expected",!0))},PV=function(e,t,n){In(e,t)!==n&&bl(e,t,n)},Ju=function(e,t){let n=tb(e,t);return n==null&&bl(e,t,Eo),n},fb=Ju,db=function(e,t,n){return In(e,t)<=0?n===null?null:Hu(n):Ju(e,t)},hb=db,UV=function(e,t){$w(e,t)?fr(e,t,v("number has no integer representation",!0)):bl(e,t,Gu)},gb=function(e,t){let n=gV(e,t);return n===!1&&bl(e,t,Gu),n},KV=function(e,t,n){return Qu(e,gb,t,n)},mb=function(e,t){let n=eb(e,t);return n===!1&&UV(e,t),n},FV=function(e,t,n){return Qu(e,mb,t,n)},Ro=function(e,t){let n=e.n+t;if(e.b.length<n){let s=Math.max(e.b.length*2,n),r=new Uint8Array(s);r.set(e.b),e.b=r}return e.b.subarray(e.n,n)},Zu=function(e,t){t.L=e,t.b=Wu},MV=function(e,t,n){return Zu(e,t),Ro(t,n)},BV=function(e){return Ro(e,Mw)},xl=function(e,t,n){n>0&&(t=Hu(t),Ro(e,n).set(t.subarray(0,n)),$u(e,n))},Du=function(e,t){t=Hu(t),xl(e,t,t.length)},Yu=function(e){lV(e.L,e.b,e.n),e.n=0,e.b=Wu},DV=function(e,t){Ro(e,1),e.b[e.n++]=t},$u=function(e,t){e.n+=t},GV=function(e,t){$u(e,t),Yu(e)},qV=function(e){let t=e.L,n=Mt(t,-1);xl(e,n,n.length),it(t,1)},Qu=function(e,t,n,s){return In(e,n)<=0?s:t(e,n)},LV=function(e,t){let n=t.string;return t.string=null,n},_b=function(e,t,n,s,r){return Fu(e,LV,{string:t},s,r)},bb=function(e,t,n,s){return _b(e,t,n,s,null)},xb=function(e,t){return bb(e,t,t.length,t)},HV=function(e,t){return xb(e,t)||J_(e,0,X_,0)},Al=function(e,t,n){if(z_(e,t)){pr(e,n);let s=cV(e,-2);return s===cr?it(e,2):ln(e,-2),s}else return cr},Ab=function(e,t,n){return t=hl(e,t),Al(e,t,n)===cr?!1:(gs(e,t),W_(e,1,1),!0)},jV=function(e,t){tV(e,t);let n=eb(e,-1);return n===!1&&St(e,v("object length is not an integer",!0)),it(e,1),n},XV=v("%I"),WV=v("%f"),zV=function(e,t){if(Ab(e,t,SV))Qw(e,-1)||St(e,v("'__tostring' must return a string"));else switch(In(e,t)){case Gu:{Zw(e,t)?qe(e,XV,Q_(e,t)):qe(e,WV,hV(e,t));break}case Eo:gs(e,t);break;case Dw:lt(e,$_(e,t)?"true":"false");break;case cr:lt(e,"nil");break;default:{let s=Al(e,t,Xu),r=s===Eo?Mt(e,-1):zu(e,t);qe(e,v("%s: %p"),r,mV(e,t)),s!==cr&&ln(e,-2);break}}return tb(e,-1)},JV=function(e,t,n,s){Sb(e,fl,ju),gl(e,-1,t),$_(e,-1)||(it(e,1),aV(e,n),pr(e,t),W_(e,1,1),gs(e,-1),To(e,-3,t)),ln(e,-2),s&&(gs(e,-1),pV(e,t))},ZV=function(e,t,n){var s=n>>>0,r=t.length,o=e.length+1-r;e:for(;s<o;s++){for(let a=0;a<r;a++)if(e[s+a]!==t[a])continue e;return s}return-1},YV=function(e,t,n,s){let r,o=new ul;for(Zu(e,o);(r=ZV(t,n))>=0;)xl(o,t,r),Du(o,s),t=t.subarray(r+n.length);return Du(o,t),Yu(o),Mt(e,-1)},Sb=function(e,t,n){return gl(e,t,n)===Lw?!0:(it(e,1),t=hl(e,t),sV(e),gs(e,-1),To(e,t,n),!1)},kb=function(e,t,n){ep(e,n,v("too many upvalues",!0));for(let s in t){for(let r=0;r<n;r++)gs(e,-n);oV(e,t[s],n),To(e,-(n+2),v(s))}it(e,n)},ep=function(e,t,n){Xw(e,t)||(n?St(e,v("stack overflow (%s)"),n):St(e,v("stack overflow",!0)))},$V=function(e){qu(e)},QV=function(e,t){qu(e),kb(e,t,0)},eI=-2,Eb=-1,tI=function(e,t){let n;return Yw(e,-1)?(it(e,1),Eb):(t=hl(e,t),Mu(e,t,0),n=Q_(e,-1),it(e,1),n!==0?(Mu(e,t,n),cl(e,t,0)):n=uV(e,t)+1,cl(e,t,n),n)},nI=function(e,t,n){n>=0&&(t=hl(e,t),Mu(e,t,0),cl(e,t,n),il(e,n),cl(e,t,0))},al=function(e,t,n,s){let r=s.message,o=Mt(e,n).subarray(1);return qe(e,v("cannot %s %s: %s"),v(t),o,v(r)),ln(e,n),rb},ur,H_=[239,187,191],sI=function(e){e.n=0;let t,n=0;do{if(t=ur(e),t===null||t!==H_[n])return t;n++,e.buff[e.n++]=t}while(n<H_.length);return e.n=0,ur(e)},j_=function(e){let t=sI(e);if(t===35){do t=ur(e);while(t&&t!==10);return{skipped:!0,c:ur(e)}}else return{skipped:!1,c:t}},pl;if(typeof process>"u"){class e{constructor(){this.n=NaN,this.f=null,this.buff=new Uint8Array(1024),this.pos=0,this.err=void 0}}let t=function(n,s){let r=s;if(r.f!==null&&r.n>0){let a=r.n;return r.n=0,r.f=r.f.subarray(r.pos),r.buff.subarray(0,a)}let o=r.f;return r.f=null,o};ur=function(n){return n.pos<n.f.length?n.f[n.pos++]:null},pl=function(n,s,r){let o=new e,a=ir(n)+1;if(s===null)throw new Error("Can't read stdin in the browser");{qe(n,v("@%s"),s);let c=bV(s),f=new XMLHttpRequest;if(f.open("GET",c,!1),typeof window>"u"&&(f.responseType="arraybuffer"),f.send(),f.status>=200&&f.status<=299)typeof f.response=="string"?o.f=v(f.response):o.f=new Uint8Array(f.response);else return o.err=f.status,al(n,"open",a,{message:`${f.status}: ${f.statusText}`})}let l=j_(o);l.c===D_[0]&&s||l.skipped&&(o.buff[o.n++]=10),l.c!==null&&(o.buff[o.n++]=l.c);let i=Fu(n,t,o,Mt(n,-1),r),u=o.err;return u?(Bu(n,a),al(n,"read",a,u)):(ln(n,a),i)}}else{let e=(ko(),sa(So));class t{constructor(){this.n=NaN,this.f=null,this.buff=Buffer.alloc(1024),this.pos=0,this.err=void 0}}let n=function(s,r){let o=r,a=0;if(o.n>0)a=o.n,o.n=0;else{try{a=e.readSync(o.f,o.buff,0,o.buff.length,o.pos)}catch(l){o.err=l,a=0}o.pos+=a}return a>0?o.buff.subarray(0,a):null};ur=function(s){let r=Buffer.alloc(1),o;try{o=e.readSync(s.f,r,0,1,s.pos)}catch(a){return s.err=a,null}return s.pos+=o,o>0?r.readUInt8():null},pl=function(s,r,o){let a=new t,l=ir(s)+1;if(r===null)lt(s,"=stdin"),a.f=process.stdin.fd;else{qe(s,v("@%s"),r);try{a.f=e.openSync(r,"r")}catch(f){return al(s,"open",l,f)}}let i=j_(a);i.c===D_[0]&&r||i.skipped&&(a.buff[a.n++]=10),i.c!==null&&(a.buff[a.n++]=i.c);let u=Fu(s,n,a,Mt(s,-1),o),c=a.err;if(r)try{e.closeSync(a.f)}catch{}return c?(Bu(s,l),al(s,"read",l,c)):(ln(s,l),u)}}var vb=function(e,t){return pl(e,t,null)},rI=function(e,t){return vb(e,t)||J_(e,0,X_,0)},oI=function(){for(let e=0;e<arguments.length;e++){let t=arguments[e];if(typeof process>"u")do{let n=/([^\n]*)\n?([\d\D]*)/.exec(t);console.error(n[1]),t=n[2]}while(t!=="");else process.stderr.write(t)}},Tb=function(e,t,n){let s=G_(e);n!=ob&&St(e,v("core and library have incompatible numeric types")),s!=G_(null)?St(e,v("multiple Lua VMs detected")):s!==t&&St(e,v("version mismatch: app. needs %f, Lua core provides %f"),t,s)},aI=function(e){Tb(e,Hw,ob)};m.exports.LUA_ERRFILE=rb;m.exports.LUA_FILEHANDLE=AV;m.exports.LUA_LOADED_TABLE=ju;m.exports.LUA_NOREF=eI;m.exports.LUA_PRELOAD_TABLE=xV;m.exports.LUA_REFNIL=Eb;m.exports.luaL_Buffer=ul;m.exports.luaL_addchar=DV;m.exports.luaL_addlstring=xl;m.exports.luaL_addsize=$u;m.exports.luaL_addstring=Du;m.exports.luaL_addvalue=qV;m.exports.luaL_argcheck=VV;m.exports.luaL_argerror=fr;m.exports.luaL_buffinit=Zu;m.exports.luaL_buffinitsize=MV;m.exports.luaL_callmeta=Ab;m.exports.luaL_checkany=IV;m.exports.luaL_checkinteger=mb;m.exports.luaL_checklstring=Ju;m.exports.luaL_checknumber=gb;m.exports.luaL_checkoption=CV;m.exports.luaL_checkstack=ep;m.exports.luaL_checkstring=fb;m.exports.luaL_checktype=PV;m.exports.luaL_checkudata=OV;m.exports.luaL_checkversion=aI;m.exports.luaL_checkversion_=Tb;m.exports.luaL_dofile=rI;m.exports.luaL_dostring=HV;m.exports.luaL_error=St;m.exports.luaL_execresult=RV;m.exports.luaL_fileresult=ub;m.exports.luaL_getmetafield=Al;m.exports.luaL_getmetatable=_l;m.exports.luaL_getsubtable=Sb;m.exports.luaL_gsub=YV;m.exports.luaL_len=jV;m.exports.luaL_loadbuffer=bb;m.exports.luaL_loadbufferx=_b;m.exports.luaL_loadfile=vb;m.exports.luaL_loadfilex=pl;m.exports.luaL_loadstring=xb;m.exports.luaL_newlib=QV;m.exports.luaL_newlibtable=$V;m.exports.luaL_newmetatable=yV;m.exports.luaL_newstate=wV;m.exports.luaL_opt=Qu;m.exports.luaL_optinteger=FV;m.exports.luaL_optlstring=db;m.exports.luaL_optnumber=KV;m.exports.luaL_optstring=hb;m.exports.luaL_prepbuffer=BV;m.exports.luaL_prepbuffsize=Ro;m.exports.luaL_pushresult=Yu;m.exports.luaL_pushresultsize=GV;m.exports.luaL_ref=tI;m.exports.luaL_requiref=JV;m.exports.luaL_setfuncs=kb;m.exports.luaL_setmetatable=NV;m.exports.luaL_testudata=pb;m.exports.luaL_tolstring=zV;m.exports.luaL_traceback=vV;m.exports.luaL_typename=zu;m.exports.luaL_unref=nI;m.exports.luaL_where=cb;m.exports.lua_writestringerror=oI});var ip=I((VG,Db)=>{"use strict";var{LUA_MULTRET:np,LUA_OK:sp,LUA_TFUNCTION:Nb,LUA_TNIL:kl,LUA_TNONE:lI,LUA_TNUMBER:iI,LUA_TSTRING:vl,LUA_TTABLE:hr,LUA_VERSION:cI,LUA_YIELD:uI,lua_call:rp,lua_callk:pI,lua_concat:fI,lua_error:Ob,lua_getglobal:dI,lua_geti:hI,lua_getmetatable:gI,lua_gettop:_s,lua_insert:Cb,lua_isnil:mI,lua_isnone:wb,lua_isstring:_I,lua_load:bI,lua_next:xI,lua_pcallk:Vb,lua_pop:op,lua_pushboolean:Tl,lua_pushcfunction:Ib,lua_pushglobaltable:AI,lua_pushinteger:gr,lua_pushliteral:Pb,lua_pushnil:Oo,lua_pushstring:SI,lua_pushvalue:kt,lua_rawequal:kI,lua_rawget:EI,lua_rawlen:vI,lua_rawset:TI,lua_remove:RI,lua_replace:yI,lua_rotate:NI,lua_setfield:Rb,lua_setmetatable:OI,lua_settop:cn,lua_setupvalue:CI,lua_stringtonumber:wI,lua_toboolean:VI,lua_tolstring:II,lua_tostring:No,lua_type:ms,lua_typename:PI}=Ke(),{luaL_argcheck:Co,luaL_checkany:gt,luaL_checkinteger:ap,luaL_checkoption:UI,luaL_checkstack:KI,luaL_checktype:bs,luaL_error:Rl,luaL_getmetafield:lp,luaL_loadbufferx:FI,luaL_loadfile:MI,luaL_loadfilex:BI,luaL_optinteger:Ub,luaL_optstring:dr,luaL_setfuncs:DI,luaL_tolstring:GI,luaL_where:qI}=Ye(),{to_jsstring:Kb,to_luastring:ht}=Xe(),yo,Sl;if(typeof process>"u")if(typeof TextDecoder=="function"){let e="",t=new TextDecoder("utf-8");yo=function(s){e+=t.decode(s,{stream:!0})};let n=new Uint8Array(0);Sl=function(){e+=t.decode(n),console.log(e),e=""}}else{let e=[];yo=function(t){try{t=Kb(t)}catch{let s=new Uint8Array(t.length);s.set(t),t=s}e.push(t)},Sl=function(){console.log.apply(console.log,e),e=[]}}else yo=function(e){process.stdout.write(Buffer.from(e))},Sl=function(){process.stdout.write(`
`)};var LI=function(e){let t=_s(e);dI(e,ht("tostring",!0));for(let n=1;n<=t;n++){kt(e,-1),kt(e,n),rp(e,1,1);let s=II(e,-1);if(s===null)return Rl(e,ht("'tostring' must return a string to 'print'"));n>1&&yo(ht("	")),yo(s),op(e,1)}return Sl(),0},HI=function(e){return gt(e,1),GI(e,1),1},jI=function(e){return gt(e,1),gI(e,1)?(lp(e,1,ht("__metatable",!0)),1):(Oo(e),1)},XI=function(e){let t=ms(e,2);return bs(e,1,hr),Co(e,t===kl||t===hr,2,"nil or table expected"),lp(e,1,ht("__metatable",!0))!==kl?Rl(e,ht("cannot change a protected metatable")):(cn(e,2),OI(e,1),1)},WI=function(e){return gt(e,1),gt(e,2),Tl(e,kI(e,1,2)),1},zI=function(e){let t=ms(e,1);return Co(e,t===hr||t===vl,1,"table or string expected"),gr(e,vI(e,1)),1},JI=function(e){return bs(e,1,hr),gt(e,2),cn(e,2),EI(e,1),1},ZI=function(e){return bs(e,1,hr),gt(e,2),gt(e,3),cn(e,3),TI(e,1),1},YI=["stop","restart","collect","count","step","setpause","setstepmul","isrunning"].map(e=>ht(e)),$I=function(e){UI(e,1,"collect",YI),Ub(e,2,0),Rl(e,ht("lua_gc not implemented"))},QI=function(e){let t=ms(e,1);return Co(e,t!==lI,1,"value expected"),SI(e,PI(e,t)),1},eP=function(e,t,n,s){return gt(e,1),lp(e,1,t)===kl?(Ib(e,s),kt(e,1),n?gr(e,0):Oo(e)):(kt(e,1),rp(e,1,3)),3},Fb=function(e){return bs(e,1,hr),cn(e,2),xI(e,1)?2:(Oo(e),1)},tP=function(e){return eP(e,ht("__pairs",!0),0,Fb)},nP=function(e){let t=ap(e,2)+1;return gr(e,t),hI(e,1,t)===kl?1:2},sP=function(e){return gt(e,1),Ib(e,nP),kt(e,1),gr(e,0),3},rP=function(e,t){try{e=Kb(e)}catch{return null}let n=/^[\t\v\f \n\r]*([+-]?)0*([0-9A-Za-z]+)[\t\v\f \n\r]*$/.exec(e);if(!n)return null;let s=parseInt(n[1]+n[2],t);return isNaN(s)?null:s|0},oP=function(e){if(ms(e,2)<=0){if(gt(e,1),ms(e,1)===iI)return cn(e,1),1;{let t=No(e,1);if(t!==null&&wI(e,t)===t.length+1)return 1}}else{let t=ap(e,2);bs(e,1,vl);let n=No(e,1);Co(e,2<=t&&t<=36,2,"base out of range");let s=rP(n,t);if(s!==null)return gr(e,s),1}return Oo(e),1},Mb=function(e){let t=Ub(e,2,1);return cn(e,1),ms(e,1)===vl&&t>0&&(qI(e,t),kt(e,1),fI(e,2)),Ob(e)},aP=function(e){return VI(e,1)?_s(e):(gt(e,1),RI(e,1),Pb(e,"assertion failed!"),cn(e,1),Mb(e))},lP=function(e){let t=_s(e);if(ms(e,1)===vl&&No(e,1)[0]===35)return gr(e,t-1),1;{let n=ap(e,1);return n<0?n=t+n:n>t&&(n=t),Co(e,1<=n,1,"index out of range"),t-n}},El=function(e,t,n){return t!==sp&&t!==uI?(Tl(e,0),kt(e,-2),2):_s(e)-n},iP=function(e){gt(e,1),Tl(e,1),Cb(e,1);let t=Vb(e,_s(e)-2,np,0,0,El);return El(e,t,0)},cP=function(e){let t=_s(e);bs(e,2,Nb),Tl(e,1),kt(e,1),NI(e,3,2);let n=Vb(e,t-2,np,2,2,El);return El(e,n,2)},Bb=function(e,t,n){return t===sp?(n!==0&&(kt(e,n),CI(e,-2,1)||op(e,1)),1):(Oo(e),Cb(e,-2),2)},tp=5,uP=function(e,t){return KI(e,2,"too many nested functions"),kt(e,1),rp(e,0,1),mI(e,-1)?(op(e,1),null):(_I(e,-1)||Rl(e,ht("reader function must return a string")),yI(e,tp),No(e,tp))},pP=function(e){let t=No(e,1),n=dr(e,3,"bt"),s=wb(e,4)?0:4,r;if(t!==null){let o=dr(e,2,t);r=FI(e,t,t.length,o,n)}else{let o=dr(e,2,"=(load)");bs(e,1,Nb),cn(e,tp),r=bI(e,uP,null,o,n)}return Bb(e,r,s)},fP=function(e){let t=dr(e,1,null),n=dr(e,2,null),s=wb(e,3)?0:3,r=BI(e,t,n);return Bb(e,r,s)},yb=function(e,t,n){return _s(e)-1},dP=function(e){let t=dr(e,1,null);return cn(e,1),MI(e,t)!==sp?Ob(e):(pI(e,0,np,0,yb),yb(e,0,0))},hP={assert:aP,collectgarbage:$I,dofile:dP,error:Mb,getmetatable:jI,ipairs:sP,load:pP,loadfile:fP,next:Fb,pairs:tP,pcall:iP,print:LI,rawequal:WI,rawget:JI,rawlen:zI,rawset:ZI,select:lP,setmetatable:XI,tonumber:oP,tostring:HI,type:QI,xpcall:cP},gP=function(e){return AI(e),DI(e,hP,0),kt(e,-1),Rb(e,-2,ht("_G")),Pb(e,cI),Rb(e,-2,ht("_VERSION")),1};Db.exports.luaopen_base=gP});var pp=I((IG,zb)=>{"use strict";var{LUA_OK:cp,LUA_TFUNCTION:mP,LUA_TSTRING:_P,LUA_YIELD:qb,lua_Debug:bP,lua_checkstack:Gb,lua_concat:xP,lua_error:AP,lua_getstack:SP,lua_gettop:mr,lua_insert:up,lua_isyieldable:kP,lua_newthread:EP,lua_pop:vP,lua_pushboolean:Nl,lua_pushcclosure:TP,lua_pushliteral:un,lua_pushthread:RP,lua_pushvalue:yP,lua_resume:NP,lua_status:Lb,lua_tothread:Hb,lua_type:OP,lua_upvalueindex:CP,lua_xmove:yl,lua_yield:wP}=Ke(),{luaL_argcheck:VP,luaL_checktype:IP,luaL_newlib:PP,luaL_where:UP}=Ye(),jb=function(e){let t=Hb(e,1);return VP(e,t,1,"thread expected"),t},Xb=function(e,t,n){if(!Gb(t,n))return un(e,"too many arguments to resume"),-1;if(Lb(t)===cp&&mr(t)===0)return un(e,"cannot resume dead coroutine"),-1;yl(e,t,n);let s=NP(t,e,n);if(s===cp||s===qb){let r=mr(t);return Gb(e,r+1)?(yl(t,e,r),r):(vP(t,r),un(e,"too many results to resume"),-1)}else return yl(t,e,1),-1},KP=function(e){let t=jb(e),n=Xb(e,t,mr(e)-1);return n<0?(Nl(e,0),up(e,-2),2):(Nl(e,1),up(e,-(n+1)),n+1)},FP=function(e){let t=Hb(e,CP(1)),n=Xb(e,t,mr(e));return n<0?(OP(e,-1)===_P&&(UP(e,1),up(e,-2),xP(e,2)),AP(e)):n},Wb=function(e){IP(e,1,mP);let t=EP(e);return yP(e,1),yl(e,t,1),1},MP=function(e){return Wb(e),TP(e,FP,1),1},BP=function(e){return wP(e,mr(e))},DP=function(e){let t=jb(e);if(e===t)un(e,"running");else switch(Lb(t)){case qb:un(e,"suspended");break;case cp:{let n=new bP;SP(t,0,n)>0?un(e,"normal"):mr(t)===0?un(e,"dead"):un(e,"suspended");break}default:un(e,"dead");break}return 1},GP=function(e){return Nl(e,kP(e)),1},qP=function(e){return Nl(e,RP(e)),2},LP={create:Wb,isyieldable:GP,resume:KP,running:qP,status:DP,wrap:MP,yield:BP},HP=function(e){return PP(e,LP),1};zb.exports.luaopen_coroutine=HP});var bp=I((PG,sx)=>{"use strict";var{LUA_MAXINTEGER:dp}=je(),{LUA_OPEQ:jP,LUA_OPLT:XP,LUA_TFUNCTION:WP,LUA_TNIL:zP,LUA_TTABLE:Jb,lua_call:JP,lua_checkstack:ZP,lua_compare:Yb,lua_createtable:YP,lua_geti:Ie,lua_getmetatable:$P,lua_gettop:$b,lua_insert:QP,lua_isnil:eU,lua_isnoneornil:Qb,lua_isstring:tU,lua_pop:Pn,lua_pushinteger:nU,lua_pushnil:sU,lua_pushstring:rU,lua_pushvalue:wo,lua_rawget:oU,lua_setfield:aU,lua_seti:pn,lua_settop:lU,lua_toboolean:iU,lua_type:cU}=Ke(),{luaL_Buffer:uU,luaL_addlstring:pU,luaL_addvalue:fU,luaL_argcheck:Po,luaL_buffinit:dU,luaL_checkinteger:Vo,luaL_checktype:ex,luaL_error:Uo,luaL_len:tx,luaL_newlib:hU,luaL_opt:gU,luaL_optinteger:Ol,luaL_optlstring:mU,luaL_pushresult:_U,luaL_typename:bU}=Ye(),xU=Kn(),{to_luastring:Un}=Xe(),Cl=1,mp=2,nx=4,_p=Cl|mp,fp=function(e,t,n){return rU(e,t),oU(e,-n)!==zP},hp=function(e,t,n){if(cU(e,t)!==Jb){let s=1;$P(e,t)&&(!(n&Cl)||fp(e,Un("__index",!0),++s))&&(!(n&mp)||fp(e,Un("__newindex",!0),++s))&&(!(n&nx)||fp(e,Un("__len",!0),++s))?Pn(e,s):ex(e,t,Jb)}},wl=function(e,t,n){return hp(e,t,n|nx),tx(e,t)},Zb=function(e,t,n){Ie(e,1,n),tU(e,-1)||Uo(e,Un("invalid value (%s) at index %d in table for 'concat'"),bU(e,-1),n),fU(t)},AU=function(e){let t=wl(e,1,_p)+1,n;switch($b(e)){case 2:n=t;break;case 3:{n=Vo(e,2),Po(e,1<=n&&n<=t,2,"position out of bounds");for(let s=t;s>n;s--)Ie(e,1,s-1),pn(e,1,s);break}default:return Uo(e,"wrong number of arguments to 'insert'")}return pn(e,1,n),0},SU=function(e){let t=wl(e,1,_p),n=Ol(e,2,t);for(n!==t&&Po(e,1<=n&&n<=t+1,1,"position out of bounds"),Ie(e,1,n);n<t;n++)Ie(e,1,n+1),pn(e,1,n);return sU(e),pn(e,1,n),1},kU=function(e){let t=Vo(e,2),n=Vo(e,3),s=Vo(e,4),r=Qb(e,5)?1:5;if(hp(e,1,Cl),hp(e,r,mp),n>=t){Po(e,t>0||n<dp+t,3,"too many elements to move");let o=n-t+1;if(Po(e,s<=dp-o+1,4,"destination wrap around"),s>n||s<=t||r!==1&&Yb(e,1,r,jP)!==1)for(let a=0;a<o;a++)Ie(e,1,t+a),pn(e,r,s+a);else for(let a=o-1;a>=0;a--)Ie(e,1,t+a),pn(e,r,s+a)}return wo(e,r),1},EU=function(e){let t=wl(e,1,Cl),n=mU(e,2,""),s=n.length,r=Ol(e,3,1);t=Ol(e,4,t);let o=new uU;for(dU(e,o);r<t;r++)Zb(e,o,r),pU(o,n,s);return r===t&&Zb(e,o,r),_U(o),1},vU=function(e){let t=$b(e);YP(e,t,1),QP(e,1);for(let n=t;n>=1;n--)pn(e,1,n);return nU(e,t),aU(e,1,Un("n")),1},TU=function(e){let t=Ol(e,2,1),n=gU(e,Vo,3,tx(e,1));if(t>n)return 0;let s=n-t;if(s>=Number.MAX_SAFE_INTEGER||!ZP(e,++s))return Uo(e,Un("too many results to unpack"));for(;t<n;t++)Ie(e,1,t);return Ie(e,1,n),s},RU=function(){return Math.floor(Math.random()*4294967296)},yU=100,_r=function(e,t,n){pn(e,1,t),pn(e,1,n)},Io=function(e,t,n){if(eU(e,2))return Yb(e,t,n,XP);{wo(e,2),wo(e,t-1),wo(e,n-2),JP(e,2,1);let s=iU(e,-1);return Pn(e,1),s}},NU=function(e,t,n){let s=t,r=n-1;for(;;){for(;Ie(e,1,++s),Io(e,-1,-2);)s==n-1&&Uo(e,Un("invalid order function for sorting")),Pn(e,1);for(;Ie(e,1,--r),Io(e,-3,-1);)r<s&&Uo(e,Un("invalid order function for sorting")),Pn(e,1);if(r<s)return Pn(e,1),_r(e,n-1,s),s;_r(e,s,r)}},OU=function(e,t,n){let s=Math.floor((t-e)/4),r=n%(s*2)+(e+s);return xU.lua_assert(e+s<=r&&r<=t-s),r},gp=function(e,t,n,s){for(;t<n;){if(Ie(e,1,t),Ie(e,1,n),Io(e,-1,-2)?_r(e,t,n):Pn(e,2),n-t==1)return;let r;if(n-t<yU||s===0?r=Math.floor((t+n)/2):r=OU(t,n,s),Ie(e,1,r),Ie(e,1,t),Io(e,-2,-1)?_r(e,r,t):(Pn(e,1),Ie(e,1,n),Io(e,-1,-2)?_r(e,r,n):Pn(e,2)),n-t==2)return;Ie(e,1,r),wo(e,-1),Ie(e,1,n-1),_r(e,r,n-1),r=NU(e,t,n);let o;r-t<n-r?(gp(e,t,r-1,s),o=r-t,t=r+1):(gp(e,r+1,n,s),o=n-r,n=r-1),(n-t)/128>o&&(s=RU())}},CU=function(e){let t=wl(e,1,_p);return t>1&&(Po(e,t<dp,1,"array too big"),Qb(e,2)||ex(e,2,WP),lU(e,2),gp(e,1,t,0)),0},wU={concat:EU,insert:AU,move:kU,pack:vU,remove:SU,sort:CU,unpack:TU},VU=function(e){return hU(e,wU),1};sx.exports.luaopen_table=VU});var vp=I((UG,px)=>{"use strict";var IU=(ko(),sa(So)),{LUA_REGISTRYINDEX:Ko,lua_getfield:Ap,lua_gettop:PU,lua_isnone:UU,lua_isnoneornil:KU,lua_newuserdata:FU,lua_pop:MU,lua_pushliteral:Vl,lua_pushnil:rx,lua_pushstring:BU,lua_pushvalue:Pl,lua_setfield:Il,lua_tostring:DU,lua_touserdata:GU}=Ke(),{LUA_FILEHANDLE:Ul,luaL_checkany:qU,luaL_checklstring:LU,luaL_checkudata:HU,luaL_error:Sp,luaL_fileresult:kp,luaL_newlib:jU,luaL_newmetatable:XU,luaL_setfuncs:WU,luaL_setmetatable:zU,luaL_testudata:JU}=Ye(),ZU=Kn(),{to_luastring:Bt}=Xe(),Ep="_IO_",YU=Ep.length,ox=Bt(Ep+"input"),Fo=Bt(Ep+"output"),Kl=function(e){return HU(e,1,Ul)},Fl=function(e){return e.closef===null},$U=function(e){qU(e,1);let t=JU(e,1,Ul);return t===null?rx(e):Fl(t)?Vl(e,"closed file"):Vl(e,"file"),1},QU=function(e){let t=Kl(e);return Fl(t)?Vl(e,"file (closed)"):BU(e,Bt(`file (${t.f.toString()})`)),1},Ml=function(e){let t=Kl(e);return Fl(t)&&Sp(e,Bt("attempt to use a closed file")),ZU.lua_assert(t.f),t.f},eK=function(e){let t=FU(e);return t.f=null,t.closef=null,zU(e,Ul),t},tK=function(e){let t=Kl(e),n=t.closef;return t.closef=null,n(e)},ax=function(e){return UU(e,1)&&Ap(e,Ko,Fo),Ml(e),tK(e)},lx=function(e,t){Ap(e,Ko,t);let n=GU(e,-1);return Fl(n)&&Sp(e,Bt("standard %s file is closed"),t.subarray(YU)),n.f},ix=function(e,t,n){return KU(e,1)||(DU(e,1)?Sp(e,Bt("opening files not yet implemented")):(Ml(e),Pl(e,1)),Il(e,Ko,t)),Ap(e,Ko,t),1},nK=function(e){return ix(e,ox,"r")},sK=function(e){return ix(e,Fo,"w")},rK=typeof process<"u"&&process.versions.node>6?e=>e:e=>typeof Buffer<"u"?Buffer.from(e.buffer,e.byteOffset,e.byteLength):e,cx=function(e,t,n){let s=PU(e)-n,r=!0,o;for(;s--;n++){let a=LU(e,n);try{r=r&&IU.writeSync(t.fd,rK(a),0,a.length)===a.length}catch(l){r=!1,o=l}}return r?1:kp(e,r,null,o)},oK=function(e){return cx(e,lx(e,Fo),1)},aK=function(e){let t=Ml(e);return Pl(e,1),cx(e,t,2)},lK=function(e){return lx(e,Fo),kp(e,!0,null,null)},iK=function(e){return Ml(e),kp(e,!0,null,null)},cK={close:ax,flush:lK,input:nK,output:sK,type:$U,write:oK},uK={close:ax,flush:iK,write:aK,__tostring:QU},pK=function(e){XU(e,Ul),Pl(e,-1),Il(e,-2,Bt("__index",!0)),WU(e,uK,0),MU(e,1)},ux=function(e){let t=Kl(e);return t.closef=ux,rx(e),Vl(e,"cannot close standard file"),2},xp=function(e,t,n,s){let r=eK(e);r.f=t,r.closef=ux,n!==null&&(Pl(e,-1),Il(e,Ko,n)),Il(e,-2,s)},fK=function(e){jU(e,cK),pK(e);let t={fd:-1,write(){return!0},on(){}},n=typeof process<"u"?process.stdin:t,s=typeof process<"u"?process.stdout:t,r=typeof process<"u"?process.stderr:t;return xp(e,n,ox,Bt("stdin")),xp(e,s,Fo,Bt("stdout")),xp(e,r,null,Bt("stderr")),1};px.exports.luaopen_io=fK});var Np=I((KG,Ex)=>{"use strict";var{LUA_TNIL:dK,LUA_TTABLE:hK,lua_close:gK,lua_createtable:mK,lua_getfield:_K,lua_isboolean:bK,lua_isnoneornil:bx,lua_pop:xK,lua_pushboolean:AK,lua_pushfstring:SK,lua_pushinteger:xx,lua_pushliteral:kK,lua_pushnil:EK,lua_pushnumber:Tp,lua_pushstring:Ax,lua_setfield:vK,lua_settop:TK,lua_toboolean:fx,lua_tointegerx:RK}=Ke(),{luaL_Buffer:yK,luaL_addchar:fn,luaL_addstring:ct,luaL_argerror:NK,luaL_buffinit:OK,luaL_checkinteger:CK,luaL_checkoption:wK,luaL_checkstring:Bl,luaL_checktype:VK,luaL_error:Dl,luaL_execresult:dx,luaL_fileresult:Mo,luaL_newlib:IK,luaL_optinteger:PK,luaL_optlstring:UK,luaL_optstring:Sx,luaL_pushresult:KK}=Ye(),{luastring_eq:Rp,to_jsstring:hx,to_luastring:B}=Xe(),FK=B("aAbBcCdDeFhHIjklmMnpPrRStTuUwWxXyYzZ%"),Fn=function(e,t,n){xx(e,n),vK(e,-2,B(t,!0))},kx=function(e,t,n){Fn(e,"sec",n?t.getUTCSeconds():t.getSeconds()),Fn(e,"min",n?t.getUTCMinutes():t.getMinutes()),Fn(e,"hour",n?t.getUTCHours():t.getHours()),Fn(e,"day",n?t.getUTCDate():t.getDate()),Fn(e,"month",(n?t.getUTCMonth():t.getMonth())+1),Fn(e,"year",n?t.getUTCFullYear():t.getFullYear()),Fn(e,"wday",(n?t.getUTCDay():t.getDay())+1),Fn(e,"yday",Math.floor((t-new Date(t.getFullYear(),0,0))/864e5))},gx=Number.MAX_SAFE_INTEGER/2,br=function(e,t,n,s){let r=_K(e,-1,B(t,!0)),o=RK(e,-1);if(o===!1){if(r!==dK)return Dl(e,B("field '%s' is not an integer"),t);if(n<0)return Dl(e,B("field '%s' missing in date table"),t);o=n}else{if(!(-gx<=o&&o<=gx))return Dl(e,B("field '%s' is out-of-bound"),t);o-=s}return xK(e,1),o},Fe={days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(e=>B(e)),shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(e=>B(e)),months:["January","February","March","April","May","June","July","August","September","October","November","December"].map(e=>B(e)),shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(e=>B(e)),AM:B("AM"),PM:B("PM"),am:B("am"),pm:B("pm"),formats:{c:B("%a %b %e %H:%M:%S %Y"),D:B("%m/%d/%y"),F:B("%Y-%m-%d"),R:B("%H:%M"),r:B("%I:%M:%S %p"),T:B("%H:%M:%S"),X:B("%T"),x:B("%D")}},mx=function(e,t){let n=e.getDay();t==="monday"&&(n===0?n=6:n--);let s=(e-new Date(e.getFullYear(),0,1))/864e5;return Math.floor((s+7-n)/7)},Le=function(e,t,n){t<10&&fn(e,n),ct(e,B(String(t)))},dn=function(e,t,n,s){let r=0;for(;r<n.length;)if(n[r]!==37)fn(t,n[r++]);else{r++;let o=MK(e,n,r);switch(n[r]){case 37:fn(t,37);break;case 65:ct(t,Fe.days[s.getDay()]);break;case 66:ct(t,Fe.months[s.getMonth()]);break;case 67:Le(t,Math.floor(s.getFullYear()/100),48);break;case 68:dn(e,t,Fe.formats.D,s);break;case 70:dn(e,t,Fe.formats.F,s);break;case 72:Le(t,s.getHours(),48);break;case 73:Le(t,(s.getHours()+11)%12+1,48);break;case 77:Le(t,s.getMinutes(),48);break;case 80:ct(t,s.getHours()<12?Fe.am:Fe.pm);break;case 82:dn(e,t,Fe.formats.R,s);break;case 83:Le(t,s.getSeconds(),48);break;case 84:dn(e,t,Fe.formats.T,s);break;case 85:Le(t,mx(s,"sunday"),48);break;case 87:Le(t,mx(s,"monday"),48);break;case 88:dn(e,t,Fe.formats.X,s);break;case 89:ct(t,B(String(s.getFullYear())));break;case 90:{let a=s.toString().match(/\(([\w\s]+)\)/);a&&ct(t,B(a[1]));break}case 97:ct(t,Fe.shortDays[s.getDay()]);break;case 98:case 104:ct(t,Fe.shortMonths[s.getMonth()]);break;case 99:dn(e,t,Fe.formats.c,s);break;case 100:Le(t,s.getDate(),48);break;case 101:Le(t,s.getDate(),32);break;case 106:{let a=Math.floor((s-new Date(s.getFullYear(),0,1))/864e5);a<100&&(a<10&&fn(t,48),fn(t,48)),ct(t,B(String(a)));break}case 107:Le(t,s.getHours(),32);break;case 108:Le(t,(s.getHours()+11)%12+1,32);break;case 109:Le(t,s.getMonth()+1,48);break;case 110:fn(t,10);break;case 112:ct(t,s.getHours()<12?Fe.AM:Fe.PM);break;case 114:dn(e,t,Fe.formats.r,s);break;case 115:ct(t,B(String(Math.floor(s/1e3))));break;case 116:fn(t,8);break;case 117:{let a=s.getDay();ct(t,B(String(a===0?7:a)));break}case 119:ct(t,B(String(s.getDay())));break;case 120:dn(e,t,Fe.formats.x,s);break;case 121:Le(t,s.getFullYear()%100,48);break;case 122:{let a=s.getTimezoneOffset();a>0?fn(t,45):(a=-a,fn(t,43)),Le(t,Math.floor(a/60),48),Le(t,a%60,48);break}}r+=o}},MK=function(e,t,n){let s=FK,r=0,o=1;for(;r<s.length&&o<=t.length-n;r+=o)if(s[r]===124)o++;else if(Rp(t.subarray(n,n+o),s.subarray(r,r+o)))return o;NK(e,1,SK(e,B("invalid conversion specifier '%%%s'"),t))},BK=function(e){let t=UK(e,1,"%c"),n=bx(e,2)?new Date:new Date(yp(e,2)*1e3),s=!1,r=0;if(t[r]===33&&(s=!0,r++),t[r]===42&&t[r+1]===116)mK(e,0,9),kx(e,n,s);else{let o=new Uint8Array(4);o[0]=37;let a=new yK;OK(e,a),dn(e,a,t,n),KK(a)}return 1},DK=function(e){let t;return bx(e,1)?t=new Date:(VK(e,1,hK),TK(e,1),t=new Date(br(e,"year",-1,0),br(e,"month",-1,1),br(e,"day",-1,0),br(e,"hour",12,0),br(e,"min",0,0),br(e,"sec",0,0)),kx(e,t)),xx(e,Math.floor(t/1e3)),1},yp=function(e,t){return CK(e,t)},GK=function(e){let t=yp(e,1),n=yp(e,2);return Tp(e,t-n),1},qK=["all","collate","ctype","monetary","numeric","time"].map(e=>B(e)),_x=B("C"),LK=B("POSIX"),HK=function(e){let t=Sx(e,1,null);return wK(e,2,"all",qK),Ax(e,t===null||t.length==0||Rp(t,_x)||Rp(t,LK)?_x:null),1},hn={date:BK,difftime:GK,setlocale:HK,time:DK};if(typeof process>"u")hn.clock=function(e){return Tp(e,performance.now()/1e3),1};else{let e=(ko(),sa(So)),t=Wn("tmp"),n=Wn("child_process");hn.exit=function(r){let o;return bK(r,1)?o=fx(r,1)?0:1:o=PK(r,1,0),fx(r,2)&&gK(r),r&&process.exit(o),0},hn.getenv=function(r){let o=Bl(r,1);return o=hx(o),Object.prototype.hasOwnProperty.call(process.env,o)?kK(r,process.env[o]):EK(r),1},hn.clock=function(r){return Tp(r,process.uptime()),1};let s=function(){return t.tmpNameSync()};hn.remove=function(r){let o=Bl(r,1);try{e.unlinkSync(o)}catch(a){if(a.code==="EISDIR")try{e.rmdirSync(o)}catch(l){return Mo(r,!1,o,l)}else return Mo(r,!1,o,a)}return Mo(r,!0)},hn.rename=function(r){let o=Bl(r,1),a=Bl(r,2);try{e.renameSync(o,a)}catch(l){return Mo(r,!1,!1,l)}return Mo(r,!0)},hn.tmpname=function(r){let o=s();return o?(Ax(r,B(o)),1):Dl(r,B("unable to generate a unique filename"))},hn.execute=function(r){let o=Sx(r,1,null);if(o!==null){o=hx(o);try{n.execSync(o,{stdio:[process.stdin,process.stdout,process.stderr]})}catch(a){return dx(r,a)}return dx(r,null)}else return AK(r,1),1}}var jK=function(e){return IK(e,hn),1};Ex.exports.luaopen_os=jK});var vx=I(Gl=>{(function(){"use strict";var e={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function t(a){return s(o(a),arguments)}function n(a,l){return t.apply(null,[a].concat(l||[]))}function s(a,l){var i=1,u=a.length,c,f="",K,Q,N,jt,fi,di,hi,Cs;for(K=0;K<u;K++)if(typeof a[K]=="string")f+=a[K];else if(typeof a[K]=="object"){if(N=a[K],N.keys)for(c=l[i],Q=0;Q<N.keys.length;Q++){if(c==null)throw new Error(t('[sprintf] Cannot access property "%s" of undefined value "%s"',N.keys[Q],N.keys[Q-1]));c=c[N.keys[Q]]}else N.param_no?c=l[N.param_no]:c=l[i++];if(e.not_type.test(N.type)&&e.not_primitive.test(N.type)&&c instanceof Function&&(c=c()),e.numeric_arg.test(N.type)&&typeof c!="number"&&isNaN(c))throw new TypeError(t("[sprintf] expecting number but found %T",c));switch(e.number.test(N.type)&&(hi=c>=0),N.type){case"b":c=parseInt(c,10).toString(2);break;case"c":c=String.fromCharCode(parseInt(c,10));break;case"d":case"i":c=parseInt(c,10);break;case"j":c=JSON.stringify(c,null,N.width?parseInt(N.width):0);break;case"e":c=N.precision?parseFloat(c).toExponential(N.precision):parseFloat(c).toExponential();break;case"f":c=N.precision?parseFloat(c).toFixed(N.precision):parseFloat(c);break;case"g":c=N.precision?String(Number(c.toPrecision(N.precision))):parseFloat(c);break;case"o":c=(parseInt(c,10)>>>0).toString(8);break;case"s":c=String(c),c=N.precision?c.substring(0,N.precision):c;break;case"t":c=String(!!c),c=N.precision?c.substring(0,N.precision):c;break;case"T":c=Object.prototype.toString.call(c).slice(8,-1).toLowerCase(),c=N.precision?c.substring(0,N.precision):c;break;case"u":c=parseInt(c,10)>>>0;break;case"v":c=c.valueOf(),c=N.precision?c.substring(0,N.precision):c;break;case"x":c=(parseInt(c,10)>>>0).toString(16);break;case"X":c=(parseInt(c,10)>>>0).toString(16).toUpperCase();break}e.json.test(N.type)?f+=c:(e.number.test(N.type)&&(!hi||N.sign)?(Cs=hi?"+":"-",c=c.toString().replace(e.sign,"")):Cs="",fi=N.pad_char?N.pad_char==="0"?"0":N.pad_char.charAt(1):" ",di=N.width-(Cs+c).length,jt=N.width&&di>0?fi.repeat(di):"",f+=N.align?Cs+c+jt:fi==="0"?Cs+jt+c:jt+Cs+c)}return f}var r=Object.create(null);function o(a){if(r[a])return r[a];for(var l=a,i,u=[],c=0;l;){if((i=e.text.exec(l))!==null)u.push(i[0]);else if((i=e.modulo.exec(l))!==null)u.push("%");else if((i=e.placeholder.exec(l))!==null){if(i[2]){c|=1;var f=[],K=i[2],Q=[];if((Q=e.key.exec(K))!==null)for(f.push(Q[1]);(K=K.substring(Q[0].length))!=="";)if((Q=e.key_access.exec(K))!==null)f.push(Q[1]);else if((Q=e.index_access.exec(K))!==null)f.push(Q[1]);else throw new SyntaxError("[sprintf] failed to parse named argument key");else throw new SyntaxError("[sprintf] failed to parse named argument key");i[2]=f}else c|=2;if(c===3)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");u.push({placeholder:i[0],param_no:i[1],keys:i[2],sign:i[3],pad_char:i[4],align:i[5],width:i[6],precision:i[7],type:i[8]})}else throw new SyntaxError("[sprintf] unexpected placeholder");l=l.substring(i[0].length)}return r[a]=u}typeof Gl<"u"&&(Gl.sprintf=t,Gl.vsprintf=n),typeof window<"u"&&(window.sprintf=t,window.vsprintf=n,typeof define=="function"&&define.amd&&define(function(){return{sprintf:t,vsprintf:n}}))})()});var nf=I((MG,sA)=>{"use strict";var{sprintf:Ar}=vx(),{LUA_INTEGER_FMT:XK,LUA_INTEGER_FRMLEN:Bo,LUA_MININTEGER:WK,LUA_NUMBER_FMT:zK,LUA_NUMBER_FRMLEN:JK,frexp:ZK,lua_getlocaledecpoint:YK}=je(),{LUA_TBOOLEAN:$K,LUA_TFUNCTION:Lp,LUA_TNIL:QK,LUA_TNUMBER:Mx,LUA_TSTRING:Bx,LUA_TTABLE:Dx,lua_call:e2,lua_createtable:t2,lua_dump:n2,lua_gettable:s2,lua_gettop:Gx,lua_isinteger:r2,lua_isstring:o2,lua_pop:Hl,lua_pushcclosure:a2,lua_pushinteger:vt,lua_pushlightuserdata:l2,lua_pushliteral:Hp,lua_pushlstring:Vp,lua_pushnil:Ip,lua_pushnumber:i2,lua_pushstring:xs,lua_pushvalue:Pp,lua_remove:c2,lua_setfield:u2,lua_setmetatable:p2,lua_settop:qx,lua_toboolean:jp,lua_tointeger:f2,lua_tonumber:d2,lua_tostring:Lx,lua_touserdata:h2,lua_type:Hx,lua_upvalueindex:g2}=Ke(),{luaL_Buffer:Tr,luaL_addchar:He,luaL_addlstring:Sr,luaL_addsize:jx,luaL_addstring:xr,luaL_addvalue:Go,luaL_argcheck:Et,luaL_argerror:As,luaL_buffinit:Xl,luaL_buffinitsize:Xx,luaL_checkinteger:Ss,luaL_checknumber:Up,luaL_checkstack:Xp,luaL_checkstring:ie,luaL_checktype:m2,luaL_error:ne,luaL_newlib:_2,luaL_optinteger:kr,luaL_optstring:b2,luaL_prepbuffsize:Wx,luaL_pushresult:Wl,luaL_pushresultsize:zx,luaL_tolstring:Wp,luaL_typename:x2}=Ye(),Jx=Kn(),{luastring_eq:Zx,luastring_indexOf:Gn,to_jsstring:A2,to_luastring:R}=Xe(),S2="%",Gt=S2.charCodeAt(0),k2=32,zp=2147483647,E2=function(e){let t=Gn(e,0);return t>-1?t:e.length},Er=function(e,t){return e>=0?e:0-e>t?0:t+e+1},v2=function(e){let t=ie(e,1),n=t.length,s=Er(Ss(e,2),n),r=Er(kr(e,3,-1),n);return s<1&&(s=1),r>n&&(r=n),s<=r?xs(e,t.subarray(s-1,s-1+(r-s+1))):Hp(e,""),1},T2=function(e){return vt(e,ie(e,1).length),1},R2=function(e){let t=Gx(e),n=new Tr,s=Xx(e,n,t);for(let r=1;r<=t;r++){let o=Ss(e,r);Et(e,o>=0&&o<=255,"value out of range"),s[r-1]=o}return zx(n,t),1},y2=function(e,t,n,s){return Sr(s,t,n),0},N2=function(e){let t=new Tr,n=jp(e,2);return m2(e,1,Lp),qx(e,1),Xl(e,t),n2(e,y2,t,n)!==0?ne(e,R("unable to dump given function")):(Wl(t),1)},Tx=JK.length+1,Rx=1,O2=function(e){if(Object.is(e,1/0))return R("inf");if(Object.is(e,-1/0))return R("-inf");if(Number.isNaN(e))return R("nan");if(e===0){let t=Ar(zK+"x0p+0",e);return Object.is(e,-0)&&(t="-"+t),R(t)}else{let t="",n=ZK(e),s=n[0],r=n[1];return s<0&&(t+="-",s=-s),t+="0x",t+=(s*(1<<Rx)).toString(16),r-=Rx,t+=Ar("p%+d",r),R(t)}},Yx=function(e,t,n){let s=O2(n);if(t[Tx]===65)for(let r=0;r<s.length;r++){let o=s[r];o>=97&&(s[r]=o&223)}else t[Tx]!==97&&ne(e,R("modifiers for format '%%a'/'%%A' not implemented"));return s},yx=R("-+ #0"),Nx=e=>97<=e&&e<=122||65<=e&&e<=90,Dt=e=>48<=e&&e<=57,Kp=e=>0<=e&&e<=31||e===127,Fp=e=>33<=e&&e<=126,Mp=e=>97<=e&&e<=122,Bp=e=>65<=e&&e<=90,Dp=e=>97<=e&&e<=122||65<=e&&e<=90||48<=e&&e<=57,Ox=e=>Fp(e)&&!Dp(e),Cx=e=>e===32||e>=9&&e<=13,wx=e=>48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102,C2=function(e,t,n){He(e,34);let s=0;for(;n--;){if(t[s]===34||t[s]===92||t[s]===10)He(e,92),He(e,t[s]);else if(Kp(t[s])){let r=""+t[s];Dt(t[s+1])&&(r=("000"+r).slice(-3)),xr(e,R("\\"+r))}else He(e,t[s]);s++}He(e,34)},w2=function(e){if(Gn(e,46)<0){let t=YK(),n=Gn(e,t);n&&(e[n]=46)}},V2=function(e,t,n){switch(Hx(e,n)){case Bx:{let s=Lx(e,n);C2(t,s,s.length);break}case Mx:{let s;if(r2(e,n)){let r=f2(e,n),o=r===WK?"0x%"+Bo+"x":XK;s=R(Ar(o,r))}else{let r=d2(e,n);s=Yx(e,R(`%${Bo}a`),r),w2(s)}xr(t,s);break}case QK:case $K:{Wp(e,n),Go(t);break}default:As(e,n,R("value has no literal form"))}},I2=function(e,t,n,s){let r=n;for(;t[r]!==0&&Gn(yx,t[r])>=0;)r++;r-n>=yx.length&&ne(e,R("invalid format (repeated flags)")),Dt(t[r])&&r++,Dt(t[r])&&r++,t[r]===46&&(r++,Dt(t[r])&&r++,Dt(t[r])&&r++),Dt(t[r])&&ne(e,R("invalid format (width or precision too long)")),s[0]=37;for(let o=0;o<r-n+1;o++)s[o+1]=t[n+o];return r},Op=function(e,t){let n=e.length,s=t.length,r=e[n-1];for(let o=0;o<s;o++)e[o+n-1]=t[o];e[n+s-1]=r},P2=function(e){let t=Gx(e),n=1,s=ie(e,n),r=0,o=new Tr;for(Xl(e,o);r<s.length;)if(s[r]!==Gt)He(o,s[r++]);else if(s[++r]===Gt)He(o,s[r++]);else{let a=[];switch(++n>t&&As(e,n,R("no value")),r=I2(e,s,r,a),String.fromCharCode(s[r++])){case"c":{He(o,Ss(e,n));break}case"d":case"i":case"o":case"u":case"x":case"X":{let l=Ss(e,n);Op(a,R(Bo,!0)),xr(o,R(Ar(String.fromCharCode(...a),l)));break}case"a":case"A":{Op(a,R(Bo,!0)),xr(o,Yx(e,a,Up(e,n)));break}case"e":case"E":case"f":case"g":case"G":{let l=Up(e,n);Op(a,R(Bo,!0)),xr(o,R(Ar(String.fromCharCode(...a),l)));break}case"q":{V2(e,o,n);break}case"s":{let l=Wp(e,n);a.length<=2||a[2]===0?Go(o):(Et(e,l.length===E2(l),n,"string contains zeros"),Gn(a,46)<0&&l.length>=100?Go(o):(xr(o,R(Ar(String.fromCharCode(...a),A2(l)))),Hl(e,1)));break}default:return ne(e,R("invalid option '%%%c' to 'format'"),s[r-1])}}return Wl(o),1},Cp=0,Vx=16,Dn=4,vr=8,Ll=(1<<vr)-1,U2=8,qo=class{constructor(t){this.L=t,this.islittle=!0,this.maxalign=1}},Bn=0,Mn=1,Do=2,Lo=3,zl=4,Jl=5,Jp=6,Zl=7,Zp=8,Ix=Dt,$x=function(e,t){if(e.off>=e.s.length||!Ix(e.s[e.off]))return t;{let n=0;do n=n*10+(e.s[e.off++]-48);while(e.off<e.s.length&&Ix(e.s[e.off])&&n<=(zp-9)/10);return n}},ql=function(e,t,n){let s=$x(t,n);return(s>Vx||s<=0)&&ne(e.L,R("integral size (%d) out of limits [1,%d]"),s,Vx),s},Px=function(e,t){let n={opt:t.s[t.off++],size:0};switch(n.opt){case 98:return n.size=1,n.opt=Bn,n;case 66:return n.size=1,n.opt=Mn,n;case 104:return n.size=2,n.opt=Bn,n;case 72:return n.size=2,n.opt=Mn,n;case 108:return n.size=4,n.opt=Bn,n;case 76:return n.size=4,n.opt=Mn,n;case 106:return n.size=4,n.opt=Bn,n;case 74:return n.size=4,n.opt=Mn,n;case 84:return n.size=4,n.opt=Mn,n;case 102:return n.size=4,n.opt=Do,n;case 100:return n.size=8,n.opt=Do,n;case 110:return n.size=8,n.opt=Do,n;case 105:return n.size=ql(e,t,4),n.opt=Bn,n;case 73:return n.size=ql(e,t,4),n.opt=Mn,n;case 115:return n.size=ql(e,t,4),n.opt=zl,n;case 99:return n.size=$x(t,-1),n.size===-1&&ne(e.L,R("missing size for format option 'c'")),n.opt=Lo,n;case 122:return n.opt=Jl,n;case 120:return n.size=1,n.opt=Jp,n;case 88:return n.opt=Zl,n;case 32:break;case 60:e.islittle=!0;break;case 62:e.islittle=!1;break;case 61:e.islittle=!0;break;case 33:e.maxalign=ql(e,t,U2);break;default:ne(e.L,R("invalid format option '%c'"),n.opt)}return n.opt=Zp,n},Yp=function(e,t,n){let s={opt:NaN,size:NaN,ntoalign:NaN},r=Px(e,n);s.size=r.size,s.opt=r.opt;let o=s.size;if(s.opt===Zl)if(n.off>=n.s.length||n.s[n.off]===0)As(e.L,1,R("invalid next option for option 'X'"));else{let a=Px(e,n);o=a.size,a=a.opt,(a===Lo||o===0)&&As(e.L,1,R("invalid next option for option 'X'"))}return o<=1||s.opt===Lo?s.ntoalign=0:(o>e.maxalign&&(o=e.maxalign),(o&o-1)!==0&&As(e.L,1,R("format asks for alignment not power of 2")),s.ntoalign=o-(t&o-1)&o-1),s},wp=function(e,t,n,s,r){let o=Wx(e,s);o[n?0:s-1]=t&Ll;for(let a=1;a<s;a++)t>>=vr,o[n?a:s-1-a]=t&Ll;if(r&&s>Dn)for(let a=Dn;a<s;a++)o[n?a:s-1-a]=Ll;jx(e,s)},K2=function(e){let t=new Tr,n=new qo(e),s={s:ie(e,1),off:0},r=1,o=0;for(Ip(e),Xl(e,t);s.off<s.s.length;){let a=Yp(n,o,s),l=a.opt,i=a.size,u=a.ntoalign;for(o+=u+i;u-- >0;)He(t,Cp);switch(r++,l){case Bn:{let c=Ss(e,r);if(i<Dn){let f=1<<i*8-1;Et(e,-f<=c&&c<f,r,"integer overflow")}wp(t,c,n.islittle,i,c<0);break}case Mn:{let c=Ss(e,r);i<Dn&&Et(e,c>>>0<1<<i*vr,r,"unsigned overflow"),wp(t,c>>>0,n.islittle,i,!1);break}case Do:{let c=Wx(t,i),f=Up(e,r),K=new DataView(c.buffer,c.byteOffset,c.byteLength);i===4?K.setFloat32(0,f,n.islittle):K.setFloat64(0,f,n.islittle),jx(t,i);break}case Lo:{let c=ie(e,r),f=c.length;for(Et(e,f<=i,r,"string longer than given size"),Sr(t,c,f);f++<i;)He(t,Cp);break}case zl:{let c=ie(e,r),f=c.length;Et(e,i>=4||f<1<<i*vr,r,"string length does not fit in given size"),wp(t,f,n.islittle,i,0),Sr(t,c,f),o+=f;break}case Jl:{let c=ie(e,r),f=c.length;Et(e,Gn(c,0)<0,r,"strings contains zeros"),Sr(t,c,f),He(t,0),o+=f+1;break}case Jp:He(t,Cp);case Zl:case Zp:r--;break}}return Wl(t),1},F2=function(e){let t=ie(e,1),n=t.length,s=new Uint8Array(n);for(let r=0;r<n;r++)s[r]=t[n-1-r];return xs(e,s),1},M2=function(e){let t=ie(e,1),n=t.length,s=new Uint8Array(n);for(let r=0;r<n;r++){let o=t[r];Bp(o)&&(o=o|32),s[r]=o}return xs(e,s),1},B2=function(e){let t=ie(e,1),n=t.length,s=new Uint8Array(n);for(let r=0;r<n;r++){let o=t[r];Mp(o)&&(o=o&223),s[r]=o}return xs(e,s),1},D2=function(e){let t=ie(e,1),n=t.length,s=Ss(e,2),r=b2(e,3,""),o=r.length;if(s<=0)Hp(e,"");else{if(n+o<n||n+o>zp/s)return ne(e,R("resulting string too large"));{let a=s*n+(s-1)*o,l=new Tr,i=Xx(e,l,a),u=0;for(;s-- >1;)i.set(t,u),u+=n,o>0&&(i.set(r,u),u+=o);i.set(t,u),zx(l,a)}}return 1},G2=function(e){let t=ie(e,1),n=t.length,s=Er(kr(e,2,1),n),r=Er(kr(e,3,s),n);if(s<1&&(s=1),r>n&&(r=n),s>r)return 0;if(r-s>=Number.MAX_SAFE_INTEGER)return ne(e,"string slice too long");let o=r-s+1;Xp(e,o,"string slice too long");for(let a=0;a<o;a++)vt(e,t[s+a-1]);return o},q2=function(e){let t=new qo(e),n={s:ie(e,1),off:0},s=0;for(;n.off<n.s.length;){let r=Yp(t,s,n),o=r.opt,a=r.size,l=r.ntoalign;switch(a+=l,Et(e,s<=zp-a,1,"format result too large"),s+=a,o){case zl:case Jl:As(e,1,"variable-length format");default:break}}return vt(e,s),1},Ux=function(e,t,n,s,r){let o=0,a=s<=Dn?s:Dn;for(let l=a-1;l>=0;l--)o<<=vr,o|=t[n?l:s-1-l];if(s<Dn){if(r){let l=1<<s*vr-1;o=(o^l)-l}}else if(s>Dn){let l=!r||o>=0?0:Ll;for(let i=a;i<s;i++)t[n?i:s-1-i]!==l&&ne(e,R("%d-byte integer does not fit into Lua Integer"),s)}return o},L2=function(e,t,n,s){Jx.lua_assert(t.length>=s);let r=new DataView(new ArrayBuffer(s));for(let o=0;o<s;o++)r.setUint8(o,t[o]);return s==4?r.getFloat32(0,n):r.getFloat64(0,n)},H2=function(e){let t=new qo(e),n={s:ie(e,1),off:0},s=ie(e,2),r=s.length,o=Er(kr(e,3,1),r)-1,a=0;for(Et(e,o<=r&&o>=0,3,"initial position out of string");n.off<n.s.length;){let l=Yp(t,o,n),i=l.opt,u=l.size,c=l.ntoalign;switch(o+c+u>r&&As(e,2,R("data string too short")),o+=c,Xp(e,2,"too many results"),a++,i){case Bn:case Mn:{let f=Ux(e,s.subarray(o),t.islittle,u,i===Bn);vt(e,f);break}case Do:{let f=L2(e,s.subarray(o),t.islittle,u);i2(e,f);break}case Lo:{xs(e,s.subarray(o,o+u));break}case zl:{let f=Ux(e,s.subarray(o),t.islittle,u,0);Et(e,o+f+u<=r,2,"data string too short"),xs(e,s.subarray(o+u,o+u+f)),o+=f;break}case Jl:{let f=Gn(s,0,o);f===-1&&(f=s.length-o),xs(e,s.subarray(o,f)),o=f+1;break}case Zl:case Jp:case Zp:a--;break}o+=u}return vt(e,o+1),a+1},jo=-1,Qx=-2,eA=200,j2=R("^$*+?.([%-"),Ho=class{constructor(t){this.src=null,this.src_init=null,this.src_end=null,this.p=null,this.p_end=null,this.L=t,this.matchdepth=NaN,this.level=NaN,this.capture=[]}},X2=function(e,t){return t=t-49,t<0||t>=e.level||e.capture[t].len===jo?ne(e.L,R("invalid capture index %%%d"),t+1):t},W2=function(e){let t=e.level;for(t--;t>=0;t--)if(e.capture[t].len===jo)return t;return ne(e.L,R("invalid pattern capture"))},Kx=function(e,t){switch(e.p[t++]){case Gt:return t===e.p_end&&ne(e.L,R("malformed pattern (ends with '%%')")),t+1;case 91:{e.p[t]===94&&t++;do t===e.p_end&&ne(e.L,R("malformed pattern (missing ']')")),e.p[t++]===Gt&&t<e.p_end&&t++;while(e.p[t]!==93);return t+1}default:return t}},tA=function(e,t){switch(t){case 97:return Nx(e);case 65:return!Nx(e);case 99:return Kp(e);case 67:return!Kp(e);case 100:return Dt(e);case 68:return!Dt(e);case 103:return Fp(e);case 71:return!Fp(e);case 108:return Mp(e);case 76:return!Mp(e);case 112:return Ox(e);case 80:return!Ox(e);case 115:return Cx(e);case 83:return!Cx(e);case 117:return Bp(e);case 85:return!Bp(e);case 119:return Dp(e);case 87:return!Dp(e);case 120:return wx(e);case 88:return!wx(e);case 122:return e===0;case 90:return e!==0;default:return t===e}},Gp=function(e,t,n,s){let r=!0;for(e.p[n+1]===94&&(r=!1,n++);++n<s;)if(e.p[n]===Gt){if(n++,tA(t,e.p[n]))return r}else if(e.p[n+1]===45&&n+2<s){if(n+=2,e.p[n-2]<=t&&t<=e.p[n])return r}else if(e.p[n]===t)return r;return!r},$p=function(e,t,n,s){if(t>=e.src_end)return!1;{let r=e.src[t];switch(e.p[n]){case 46:return!0;case Gt:return tA(r,e.p[n+1]);case 91:return Gp(e,r,n,s-1);default:return e.p[n]===r}}},z2=function(e,t,n){if(n>=e.p_end-1&&ne(e.L,R("malformed pattern (missing arguments to '%%b'")),e.src[t]!==e.p[n])return null;{let s=e.p[n],r=e.p[n+1],o=1;for(;++t<e.src_end;)if(e.src[t]===r){if(--o===0)return t+1}else e.src[t]===s&&o++}return null},J2=function(e,t,n,s){let r=0;for(;$p(e,t+r,n,s);)r++;for(;r>=0;){let o=qn(e,t+r,s+1);if(o)return o;r--}return null},Z2=function(e,t,n,s){for(;;){let r=qn(e,t,s+1);if(r!==null)return r;if($p(e,t,n,s))t++;else return null}},Fx=function(e,t,n,s){let r=e.level;r>=k2&&ne(e.L,R("too many captures")),e.capture[r]=e.capture[r]?e.capture[r]:{},e.capture[r].init=t,e.capture[r].len=s,e.level=r+1;let o;return(o=qn(e,t,n))===null&&e.level--,o},Y2=function(e,t,n){let s=W2(e);e.capture[s].len=t-e.capture[s].init;let r;return(r=qn(e,t,n))===null&&(e.capture[s].len=jo),r},$2=function(e,t,n,s,r){return Zx(e.subarray(t,t+r),n.subarray(s,s+r))},Q2=function(e,t,n){n=X2(e,n);let s=e.capture[n].len;return e.src_end-t>=s&&$2(e.src,e.capture[n].init,e.src,t,s)?t+s:null},qn=function(e,t,n){let s=!1,r=!0;for(e.matchdepth--===0&&ne(e.L,R("pattern too complex"));r||s;)if(r=!1,n!==e.p_end)switch(s?void 0:e.p[n]){case 40:{e.p[n+1]===41?t=Fx(e,t,n+2,Qx):t=Fx(e,t,n+1,jo);break}case 41:{t=Y2(e,t,n+1);break}case 36:{if(n+1!==e.p_end){s=!0;break}t=e.src.length-t===0?t:null;break}case Gt:{switch(e.p[n+1]){case 98:{t=z2(e,t,n+2),t!==null&&(n+=4,r=!0);break}case 102:{n+=2,e.p[n]!==91&&ne(e.L,R("missing '[' after '%%f' in pattern"));let o=Kx(e,n),a=t===e.src_init?0:e.src[t-1];if(!Gp(e,a,n,o-1)&&Gp(e,t===e.src_end?0:e.src[t],n,o-1)){n=o,r=!0;break}t=null;break}case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:{t=Q2(e,t,e.p[n+1]),t!==null&&(n+=2,r=!0);break}default:s=!0}break}default:{s=!1;let o=Kx(e,n);if($p(e,t,n,o))switch(e.p[o]){case 63:{let a;(a=qn(e,t+1,o+1))!==null?t=a:(n=o+1,r=!0);break}case 43:t++;case 42:t=J2(e,t,n,o);break;case 45:t=Z2(e,t,n,o);break;default:t++,n=o,r=!0}else if(e.p[o]===42||e.p[o]===63||e.p[o]===45){n=o+1,r=!0;break}else t=null;break}}return e.matchdepth++,t},Qp=function(e,t,n,s){if(t>=e.level)t===0?Vp(e.L,e.src.subarray(n,s),s-n):ne(e.L,R("invalid capture index %%%d"),t+1);else{let r=e.capture[t].len;r===jo&&ne(e.L,R("unfinished capture")),r===Qx?vt(e.L,e.capture[t].init-e.src_init+1):Vp(e.L,e.src.subarray(e.capture[t].init),r)}},jl=function(e,t,n){let s=e.level===0&&t!=null?1:e.level;Xp(e.L,s,"too many captures");for(let r=0;r<s;r++)Qp(e,r,t,n);return s},eF=function(e,t){for(let n=0;n<t;n++)if(Gn(j2,e[n])!==-1)return!1;return!0},ef=function(e,t,n,s,r,o){e.L=t,e.matchdepth=eA,e.src=n,e.src_init=0,e.src_end=s,e.p=r,e.p_end=o},tf=function(e){e.level=0,Jx.lua_assert(e.matchdepth===eA)},tF=function(e,t,n){var s=n>>>0,r=t.length;if(r===0)return s;for(;(s=e.indexOf(t[0],s))!==-1;s++)if(Zx(e.subarray(s,s+r),t))return s;return-1},nA=function(e,t){let n=ie(e,1),s=ie(e,2),r=n.length,o=s.length,a=Er(kr(e,3,1),r);if(a<1)a=1;else if(a>r+1)return Ip(e),1;if(t&&(jp(e,4)||eF(s,o))){let l=tF(n.subarray(a-1),s,0);if(l>-1)return vt(e,a+l),vt(e,a+l+o-1),2}else{let l=new Ho(e),i=a-1,u=s[0]===94;u&&(s=s.subarray(1),o--),ef(l,e,n,r,s,o);do{let c;if(tf(l),(c=qn(l,i,0))!==null)return t?(vt(e,i+1),vt(e,c),jl(l,null,0)+2):jl(l,i,c)}while(i++<l.src_end&&!u)}return Ip(e),1},nF=function(e){return nA(e,1)},sF=function(e){return nA(e,0)},qp=class{constructor(){this.src=NaN,this.p=NaN,this.lastmatch=NaN,this.ms=new Ho}},rF=function(e){let t=h2(e,g2(3));t.ms.L=e;for(let n=t.src;n<=t.ms.src_end;n++){tf(t.ms);let s;if((s=qn(t.ms,n,t.p))!==null&&s!==t.lastmatch)return t.src=t.lastmatch=s,jl(t.ms,n,s)}return 0},oF=function(e){let t=ie(e,1),n=ie(e,2),s=t.length,r=n.length;qx(e,2);let o=new qp;return l2(e,o),ef(o.ms,e,t,s,n,r),o.src=0,o.p=0,o.lastmatch=null,a2(e,rF,3),1},aF=function(e,t,n,s){let r=e.L,o=Lx(r,3),a=o.length;for(let l=0;l<a;l++)o[l]!==Gt?He(t,o[l]):(l++,Dt(o[l])?o[l]===48?Sr(t,e.src.subarray(n,s),s-n):(Qp(e,o[l]-49,n,s),Wp(r,-1),c2(r,-2),Go(t)):(o[l]!==Gt&&ne(r,R("invalid use of '%c' in replacement string"),Gt),He(t,o[l])))},lF=function(e,t,n,s,r){let o=e.L;switch(r){case Lp:{Pp(o,3);let a=jl(e,n,s);e2(o,a,1);break}case Dx:{Qp(e,0,n,s),s2(o,3);break}default:{aF(e,t,n,s);return}}jp(o,-1)?o2(o,-1)||ne(o,R("invalid replacement value (a %s)"),x2(o,-1)):(Hl(o,1),Vp(o,e.src.subarray(n,s),s-n)),Go(t)},iF=function(e){let t=ie(e,1),n=t.length,s=ie(e,2),r=s.length,o=null,a=Hx(e,3),l=kr(e,4,n+1),i=s[0]===94,u=0,c=new Ho(e),f=new Tr;for(Et(e,a===Mx||a===Bx||a===Lp||a===Dx,3,"string/function/table expected"),Xl(e,f),i&&(s=s.subarray(1),r--),ef(c,e,t,n,s,r),t=0,s=0;u<l;){let K;if(tf(c),(K=qn(c,t,s))!==null&&K!==o)u++,lF(c,f,t,K,a),t=o=K;else if(t<c.src_end)He(f,c.src[t++]);else break;if(i)break}return Sr(f,c.src.subarray(t,c.src_end),c.src_end-t),Wl(f),vt(e,u),2},cF={byte:G2,char:R2,dump:N2,find:nF,format:P2,gmatch:oF,gsub:iF,len:T2,lower:M2,match:sF,pack:K2,packsize:q2,rep:D2,reverse:F2,sub:v2,unpack:H2,upper:B2},uF=function(e){t2(e,0,1),Hp(e,""),Pp(e,-2),p2(e,-2),Hl(e,1),Pp(e,-2),u2(e,-2,R("__index",!0)),Hl(e,1)},pF=function(e){return _2(e,cF),uF(e),1};sA.exports.luaopen_string=pF});var of=I((BG,iA)=>{"use strict";var{lua_gettop:fF,lua_pushcfunction:dF,lua_pushfstring:hF,lua_pushinteger:ks,lua_pushnil:oA,lua_pushstring:gF,lua_pushvalue:mF,lua_setfield:_F,lua_tointeger:bF}=Ke(),{luaL_Buffer:xF,luaL_addvalue:AF,luaL_argcheck:yr,luaL_buffinit:SF,luaL_checkinteger:aA,luaL_checkstack:kF,luaL_checkstring:zo,luaL_error:Yl,luaL_newlib:EF,luaL_optinteger:Xo,luaL_pushresult:vF}=Ye(),{luastring_of:TF,to_luastring:sf}=Xe(),lA=1114111,Rr=function(e){return(e&192)===128},Wo=function(e,t){return e>=0?e:0-e>t?0:t+e+1},RF=[255,127,2047,65535],rf=function(e,t){let n=e[t],s=0;if(n<128)s=n;else{let r=0;for(;n&64;){let o=e[t+ ++r];if((o&192)!==128)return null;s=s<<6|o&63,n<<=1}if(s|=(n&127)<<r*5,r>3||s>lA||s<=RF[r])return null;t+=r}return{code:s,pos:t+1}},yF=function(e){let t=0,n=zo(e,1),s=n.length,r=Wo(Xo(e,2,1),s),o=Wo(Xo(e,3,-1),s);for(yr(e,1<=r&&--r<=s,2,"initial position out of string"),yr(e,--o<s,3,"final position out of string");r<=o;){let a=rf(n,r);if(a===null)return oA(e),ks(e,r+1),2;r=a.pos,t++}return ks(e,t),1},NF=sf("%U"),rA=function(e,t){let n=aA(e,t);yr(e,0<=n&&n<=lA,t,"value out of range"),hF(e,NF,n)},OF=function(e){let t=fF(e);if(t===1)rA(e,1);else{let n=new xF;SF(e,n);for(let s=1;s<=t;s++)rA(e,s),AF(n);vF(n)}return 1},CF=function(e){let t=zo(e,1),n=aA(e,2),s=n>=0?1:t.length+1;if(s=Wo(Xo(e,3,s),t.length),yr(e,1<=s&&--s<=t.length,3,"position out of range"),n===0)for(;s>0&&Rr(t[s]);)s--;else if(Rr(t[s])&&Yl(e,"initial position is a continuation byte"),n<0)for(;n<0&&s>0;){do s--;while(s>0&&Rr(t[s]));n++}else for(n--;n>0&&s<t.length;){do s++;while(Rr(t[s]));n--}return n===0?ks(e,s+1):oA(e),1},wF=function(e){let t=zo(e,1),n=Wo(Xo(e,2,1),t.length),s=Wo(Xo(e,3,n),t.length);if(yr(e,n>=1,2,"out of range"),yr(e,s<=t.length,3,"out of range"),n>s)return 0;if(s-n>=Number.MAX_SAFE_INTEGER)return Yl(e,"string slice too long");let r=s-n+1;for(kF(e,r,"string slice too long"),r=0,n-=1;n<s;){let o=rf(t,n);if(o===null)return Yl(e,"invalid UTF-8 code");ks(e,o.code),n=o.pos,r++}return r},VF=function(e){let t=zo(e,1),n=t.length,s=bF(e,2)-1;if(s<0)s=0;else if(s<n)for(s++;Rr(t[s]);)s++;if(s>=n)return 0;{let r=rf(t,s);return r===null||Rr(t[r.pos])?Yl(e,sf("invalid UTF-8 code")):(ks(e,s+1),ks(e,r.code),2)}},IF=function(e){return zo(e,1),dF(e,VF),mF(e,1),ks(e,0),3},PF={char:OF,codepoint:wF,codes:IF,len:yF,offset:CF},UF=TF(91,0,45,127,194,45,244,93,91,128,45,191,93,42),KF=function(e){return EF(e,PF),gF(e,UF),_F(e,-2,sf("charpattern",!0)),1};iA.exports.luaopen_utf8=KF});var pf=I((DG,_A)=>{"use strict";var{LUA_OPLT:uA,LUA_TNUMBER:FF,lua_compare:pA,lua_gettop:lf,lua_isinteger:vs,lua_isnoneornil:MF,lua_pushboolean:BF,lua_pushinteger:Ts,lua_pushliteral:cA,lua_pushnil:fA,lua_pushnumber:Ae,lua_pushvalue:dA,lua_setfield:$l,lua_settop:cf,lua_tointeger:af,lua_tointegerx:DF,lua_type:GF}=Ke(),{luaL_argcheck:ei,luaL_argerror:qF,luaL_checkany:hA,luaL_checkinteger:Jo,luaL_checknumber:Se,luaL_error:LF,luaL_newlib:HF,luaL_optnumber:jF}=Ye(),{LUA_MAXINTEGER:gA,LUA_MININTEGER:XF,lua_numbertointeger:WF}=je(),{to_luastring:Ql}=Xe(),Es,mA=function(){return Es=1103515245*Es+12345&2147483647,Es},zF=function(e){Es=e|0,Es===0&&(Es=1)},JF=function(e){let t,n,s=Es===void 0?Math.random():mA()/2147483648;switch(lf(e)){case 0:return Ae(e,s),1;case 1:{t=1,n=Jo(e,1);break}case 2:{t=Jo(e,1),n=Jo(e,2);break}default:return LF(e,"wrong number of arguments")}return ei(e,t<=n,1,"interval is empty"),ei(e,t>=0||n<=gA+t,1,"interval too large"),s*=n-t+1,Ts(e,Math.floor(s)+t),1},ZF=function(e){return zF(Se(e,1)),mA(),0},YF=function(e){if(vs(e,1)){let t=af(e,1);t<0&&(t=-t|0),Ts(e,t)}else Ae(e,Math.abs(Se(e,1)));return 1},$F=function(e){return Ae(e,Math.sin(Se(e,1))),1},QF=function(e){return Ae(e,Math.cos(Se(e,1))),1},eM=function(e){return Ae(e,Math.tan(Se(e,1))),1},tM=function(e){return Ae(e,Math.asin(Se(e,1))),1},nM=function(e){return Ae(e,Math.acos(Se(e,1))),1},sM=function(e){let t=Se(e,1),n=jF(e,2,1);return Ae(e,Math.atan2(t,n)),1},rM=function(e){let t=DF(e,1);return t!==!1?Ts(e,t):(hA(e,1),fA(e)),1},uf=function(e,t){let n=WF(t);n!==!1?Ts(e,n):Ae(e,t)},oM=function(e){return vs(e,1)?cf(e,1):uf(e,Math.floor(Se(e,1))),1},aM=function(e){return vs(e,1)?cf(e,1):uf(e,Math.ceil(Se(e,1))),1},lM=function(e){return Ae(e,Math.sqrt(Se(e,1))),1},iM=function(e){let t=Jo(e,1),n=Jo(e,2);return BF(e,t>=0?n<0||t<n:n<0&&t<n),1},cM=function(e){let t=Se(e,1),n;if(MF(e,2))n=Math.log(t);else{let s=Se(e,2);s===2?n=Math.log2(t):s===10?n=Math.log10(t):n=Math.log(t)/Math.log(s)}return Ae(e,n),1},uM=function(e){return Ae(e,Math.exp(Se(e,1))),1},pM=function(e){return Ae(e,Se(e,1)*(180/Math.PI)),1},fM=function(e){return Ae(e,Se(e,1)*(Math.PI/180)),1},dM=function(e){let t=lf(e),n=1;ei(e,t>=1,1,"value expected");for(let s=2;s<=t;s++)pA(e,s,n,uA)&&(n=s);return dA(e,n),1},hM=function(e){let t=lf(e),n=1;ei(e,t>=1,1,"value expected");for(let s=2;s<=t;s++)pA(e,n,s,uA)&&(n=s);return dA(e,n),1},gM=function(e){return GF(e,1)===FF?vs(e,1)?cA(e,"integer"):cA(e,"float"):(hA(e,1),fA(e)),1},mM=function(e){if(vs(e,1)&&vs(e,2)){let t=af(e,2);t===0?qF(e,2,"zero"):Ts(e,af(e,1)%t|0)}else{let t=Se(e,1),n=Se(e,2);Ae(e,t%n)}return 1},_M=function(e){if(vs(e,1))cf(e,1),Ae(e,0);else{let t=Se(e,1),n=t<0?Math.ceil(t):Math.floor(t);uf(e,n),Ae(e,t===n?0:t-n)}return 2},bM={abs:YF,acos:nM,asin:tM,atan:sM,ceil:aM,cos:QF,deg:pM,exp:uM,floor:oM,fmod:mM,log:cM,max:hM,min:dM,modf:_M,rad:fM,random:JF,randomseed:ZF,sin:$F,sqrt:lM,tan:eM,tointeger:rM,type:gM,ult:iM},xM=function(e){return HF(e,bM),Ae(e,Math.PI),$l(e,-2,Ql("pi",!0)),Ae(e,1/0),$l(e,-2,Ql("huge",!0)),Ts(e,gA),$l(e,-2,Ql("maxinteger",!0)),Ts(e,XF),$l(e,-2,Ql("mininteger",!0)),1};_A.exports.luaopen_math=xM});var Sf=I((GG,MA)=>{"use strict";var{LUA_MASKCALL:kA,LUA_MASKCOUNT:AM,LUA_MASKLINE:EA,LUA_MASKRET:vA,LUA_REGISTRYINDEX:$o,LUA_TFUNCTION:df,LUA_TNIL:TA,LUA_TTABLE:SM,LUA_TUSERDATA:RA,lua_Debug:hf,lua_call:kM,lua_checkstack:EM,lua_gethook:vM,lua_gethookcount:TM,lua_gethookmask:RM,lua_getinfo:yA,lua_getlocal:bA,lua_getmetatable:yM,lua_getstack:gf,lua_getupvalue:NA,lua_getuservalue:NM,lua_insert:OM,lua_iscfunction:xA,lua_isfunction:OA,lua_isnoneornil:CA,lua_isthread:CM,lua_newtable:wM,lua_pcall:VM,lua_pop:IM,lua_pushboolean:PM,lua_pushfstring:UM,lua_pushinteger:mf,lua_pushlightuserdata:wA,lua_pushliteral:KM,lua_pushnil:Nr,lua_pushstring:Rs,lua_pushvalue:ri,lua_rawgetp:_f,lua_rawsetp:FM,lua_rotate:VA,lua_setfield:oi,lua_sethook:MM,lua_setlocal:BM,lua_setmetatable:DM,lua_settop:Qo,lua_setupvalue:GM,lua_setuservalue:qM,lua_tojsstring:LM,lua_toproxy:HM,lua_tostring:jM,lua_tothread:XM,lua_touserdata:bf,lua_type:IA,lua_upvalueid:WM,lua_upvaluejoin:zM,lua_xmove:ai}=Ke(),{luaL_argcheck:ti,luaL_argerror:xf,luaL_checkany:li,luaL_checkinteger:ys,luaL_checkstring:JM,luaL_checktype:ii,luaL_error:ZM,luaL_loadbuffer:YM,luaL_newlib:$M,luaL_optinteger:PA,luaL_optstring:QM,luaL_traceback:eB,lua_writestringerror:tB}=Ye(),nB=Kn(),{luastring_indexOf:qt,to_luastring:ce}=Xe(),Af=function(e,t,n){e!==t&&!EM(t,n)&&ZM(e,ce("stack overflow",!0))},sB=function(e){return ri(e,$o),1},rB=function(e){return li(e,1),yM(e,1)||Nr(e),1},oB=function(e){let t=IA(e,2);return ti(e,t==TA||t==SM,2,"nil or table expected"),Qo(e,2),DM(e,1),1},aB=function(e){return IA(e,1)!==RA?Nr(e):NM(e,1),1},lB=function(e){return ii(e,1,RA),li(e,2),Qo(e,2),qM(e,1),1},Or=function(e){return CM(e,1)?{arg:1,thread:XM(e,1)}:{arg:0,thread:e}},Zo=function(e,t,n){Rs(e,n),oi(e,-2,t)},Yo=function(e,t,n){mf(e,n),oi(e,-2,t)},AA=function(e,t,n){PM(e,n),oi(e,-2,t)},SA=function(e,t,n){e==t?VA(e,-2,1):ai(t,e,1),oi(e,-2,n)},iB=function(e){let t=new hf,n=Or(e),s=n.arg,r=n.thread,o=QM(e,s+2,"flnStu");if(Af(e,r,3),OA(e,s+1))o=UM(e,ce(">%s"),o),ri(e,s+1),ai(e,r,1);else if(!gf(r,ys(e,s+1),t))return Nr(e),1;return yA(r,o,t)||xf(e,s+2,"invalid option"),wM(e),qt(o,83)>-1&&(Zo(e,ce("source",!0),t.source),Zo(e,ce("short_src",!0),t.short_src),Yo(e,ce("linedefined",!0),t.linedefined),Yo(e,ce("lastlinedefined",!0),t.lastlinedefined),Zo(e,ce("what",!0),t.what)),qt(o,108)>-1&&Yo(e,ce("currentline",!0),t.currentline),qt(o,117)>-1&&(Yo(e,ce("nups",!0),t.nups),Yo(e,ce("nparams",!0),t.nparams),AA(e,ce("isvararg",!0),t.isvararg)),qt(o,110)>-1&&(Zo(e,ce("name",!0),t.name),Zo(e,ce("namewhat",!0),t.namewhat)),qt(o,116)>-1&&AA(e,ce("istailcall",!0),t.istailcall),qt(o,76)>-1&&SA(e,r,ce("activelines",!0)),qt(o,102)>-1&&SA(e,r,ce("func",!0)),1},cB=function(e){let t=Or(e),n=t.thread,s=t.arg,r=new hf,o=ys(e,s+2);if(OA(e,s+1))return ri(e,s+1),Rs(e,bA(e,null,o)),1;{let a=ys(e,s+1);if(!gf(n,a,r))return xf(e,s+1,"level out of range");Af(e,n,1);let l=bA(n,r,o);return l?(ai(n,e,1),Rs(e,l),VA(e,-2,1),2):(Nr(e),1)}},uB=function(e){let t=Or(e),n=t.thread,s=t.arg,r=new hf,o=ys(e,s+1),a=ys(e,s+2);if(!gf(n,o,r))return xf(e,s+1,"level out of range");li(e,s+3),Qo(e,s+3),Af(e,n,1),ai(e,n,1);let l=BM(n,r,a);return l===null&&IM(n,1),Rs(e,l),1},UA=function(e,t){let n=ys(e,2);ii(e,1,df);let s=t?NA(e,1,n):GM(e,1,n);return s===null?0:(Rs(e,s),OM(e,-(t+1)),t+1)},pB=function(e){return UA(e,1)},fB=function(e){return li(e,3),UA(e,0)},ff=function(e,t,n){let s=ys(e,n);return ii(e,t,df),ti(e,NA(e,t,s)!==null,n,"invalid upvalue index"),s},dB=function(e){let t=ff(e,1,2);return wA(e,WM(e,1,t)),1},hB=function(e){let t=ff(e,1,2),n=ff(e,3,4);return ti(e,!xA(e,1),1,"Lua function expected"),ti(e,!xA(e,3),3,"Lua function expected"),zM(e,1,t,3,n),0},ni=ce("__hooks__",!0),gB=["call","return","line","count","tail call"].map(e=>ce(e)),KA=function(e,t){_f(e,$o,ni);let s=bf(e,-1).get(e);s&&(s(e),Rs(e,gB[t.event]),t.currentline>=0?mf(e,t.currentline):Nr(e),nB.lua_assert(yA(e,ce("lS"),t)),kM(e,2,0))},mB=function(e,t){let n=0;return qt(e,99)>-1&&(n|=kA),qt(e,114)>-1&&(n|=vA),qt(e,108)>-1&&(n|=EA),t>0&&(n|=AM),n},_B=function(e,t){let n=0;return e&kA&&(t[n++]=99),e&vA&&(t[n++]=114),e&EA&&(t[n++]=108),t.subarray(0,n)},bB=function(e){let t,n,s,r=Or(e),o=r.thread,a=r.arg;if(CA(e,a+1))Qo(e,a+1),s=null,t=0,n=0;else{let u=JM(e,a+2);ii(e,a+1,df),n=PA(e,a+3,0),s=KA,t=mB(u,n)}let l;_f(e,$o,ni)===TA?(l=new WeakMap,wA(e,l),FM(e,$o,ni)):l=bf(e,-1);let i=HM(e,a+1);return l.set(o,i),MM(o,s,t,n),0},xB=function(e){let n=Or(e).thread,s=new Uint8Array(5),r=RM(n),o=vM(n);return o===null?Nr(e):o!==KA?KM(e,"external hook"):(_f(e,$o,ni),bf(e,-1).get(n)(e)),Rs(e,_B(r,s)),mf(e,TM(n)),3},AB=function(e){let t=Or(e),n=t.thread,s=t.arg,r=jM(e,s+1);if(r===null&&!CA(e,s+1))ri(e,s+1);else{let o=PA(e,s+2,e===n?1:0);eB(e,n,r,o)}return 1},FA={gethook:xB,getinfo:iB,getlocal:cB,getmetatable:rB,getregistry:sB,getupvalue:pB,getuservalue:aB,sethook:bB,setlocal:uB,setmetatable:oB,setupvalue:fB,setuservalue:lB,traceback:AB,upvalueid:dB,upvaluejoin:hB},si;if(typeof process<"u"){let e=Wn("readline-sync");e.setDefaultOptions({prompt:"lua_debug> "}),si=function(){return e.prompt()}}else typeof window<"u"&&(si=function(){let e=prompt("lua_debug>","");return e!==null?e:""});si&&(FA.debug=function(e){for(;;){let t=si();if(t==="cont")return 0;if(t.length===0)continue;let n=ce(t);(YM(e,n,n.length,ce("=(debug command)",!0))||VM(e,0,0,0))&&tB(LM(e,-1),`
`),Qo(e,0)}});var SB=function(e){return $M(e,FA),1};MA.exports.luaopen_debug=SB});var Uf=I((qG,mS)=>{"use strict";var{LUA_DIRSEP:ci,LUA_EXEC_DIR:kB,LUA_JSPATH_DEFAULT:EB,LUA_PATH_DEFAULT:vB,LUA_PATH_MARK:XA,LUA_PATH_SEP:Ns}=je(),{LUA_OK:Cr,LUA_REGISTRYINDEX:Hn,LUA_TNIL:Rf,LUA_TTABLE:TB,lua_callk:WA,lua_createtable:zA,lua_getfield:mn,lua_insert:yf,lua_isfunction:RB,lua_isnil:yB,lua_isstring:NB,lua_newtable:OB,lua_pop:gn,lua_pushboolean:JA,lua_pushcclosure:CB,lua_pushcfunction:wB,lua_pushfstring:wr,lua_pushglobaltable:VB,lua_pushlightuserdata:IB,lua_pushliteral:ZA,lua_pushlstring:Nf,lua_pushnil:YA,lua_pushstring:Lt,lua_pushvalue:ui,lua_rawgeti:PB,lua_rawgetp:$A,lua_rawseti:QA,lua_rawsetp:UB,lua_remove:kf,lua_setfield:Ln,lua_setmetatable:KB,lua_settop:FB,lua_toboolean:eS,lua_tostring:Vr,lua_touserdata:MB,lua_upvalueindex:tS}=Ke(),{LUA_LOADED_TABLE:nS,LUA_PRELOAD_TABLE:sS,luaL_Buffer:rS,luaL_addvalue:oS,luaL_buffinit:aS,luaL_checkstring:_n,luaL_error:pi,luaL_getsubtable:BA,luaL_gsub:ea,luaL_len:BB,luaL_loadfile:DB,luaL_newlib:GB,luaL_optstring:DA,luaL_pushresult:lS,luaL_setfuncs:qB}=Ye(),LB=Kn(),{luastring_indexOf:Of,to_jsstring:Cf,to_luastring:U,to_uristring:iS}=Xe(),HB=Kf(),cS=(function(){return typeof process<"u"?global:typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:(0,eval)("this")})(),wf=U("__JSLIBS__"),jB="LUA_PATH",XB="LUA_JSPATH",uS="-",pS=ci,WB=ci,GA=U("luaopen_"),zB=U("_"),JB="open",qA=U(""),Ef;if(typeof process>"u")Ef=function(e,t,n){t=iS(t);let s=new XMLHttpRequest;if(s.open("GET",t,!1),s.send(),s.status<200||s.status>=300)return Lt(e,U(`${s.status}: ${s.statusText}`)),null;let r=s.response;/\/\/[#@] sourceURL=/.test(r)||(r+=" //# sourceURL="+t);let o;try{o=Function("fengari",r)}catch(l){return Lt(e,U(`${l.name}: ${l.message}`)),null}let a=o(HB);return typeof a=="function"||typeof a=="object"&&a!==null?a:a===void 0?cS:(Lt(e,U(`library returned unexpected type (${typeof a})`)),null)};else{let e=Wn("path");Ef=function(t,n,s){n=Cf(n),n=e.resolve(process.cwd(),n);try{return Wn(n)}catch(r){return Lt(t,U(r.message)),null}}}var ZB=function(e,t,n){let s=t[Cf(n)];return s&&typeof s=="function"?s:(wr(e,U("undefined symbol: %s"),n),null)},YB=function(e){mn(e,Hn,U("LUA_NOENV"));let t=eS(e,-1);return gn(e,1),t},vf;if(typeof process<"u"){let e=(ko(),sa(So));vf=function(t){try{let n=e.openSync(t,"r");e.closeSync(n)}catch{return!1}return!0}}else vf=function(e){e=iS(e);let t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(),t.status>=200&&t.status<=299};var fS=1,Vf=2,Tf=function(e,t,n){let s=QB(e,t);if(s===null){if(s=Ef(e,t,n[0]===42),s===null)return fS;eD(e,t,s)}if(n[0]===42)return JA(e,1),0;{let r=ZB(e,s,n);return r===null?Vf:(wB(e,r),0)}},$B=function(e){let t=_n(e,1),n=_n(e,2),s=Tf(e,t,n);return s===0?1:(YA(e),yf(e,-2),ZA(e,s===fS?JB:"init"),3)},LA=(function(){return typeof process<"u"?process.env:cS})(),HA=function(e,t,n,s){let r=`${n}${LB.LUA_VERSUFFIX}`;Lt(e,U(r));let o=LA[r];o===void 0&&(o=LA[n]),o===void 0||YB(e)?Lt(e,s):(o=ea(e,U(o),U(Ns+Ns,!0),U(Ns+Cf(qA)+Ns,!0)),ea(e,o,qA,s),kf(e,-2)),Ln(e,-3,t),gn(e,1)},QB=function(e,t){$A(e,Hn,wf),mn(e,-1,t);let n=MB(e,-1);return gn(e,2),n},eD=function(e,t,n){$A(e,Hn,wf),IB(e,n),ui(e,-1),Ln(e,-3,t),QA(e,-2,BB(e,-2)+1),gn(e,1)},tD=function(e,t){for(;t[0]===Ns.charCodeAt(0);)t=t.subarray(1);if(t.length===0)return null;let n=Of(t,Ns.charCodeAt(0));return n<0&&(n=t.length),Nf(e,t,n),t.subarray(n)},dS=function(e,t,n,s,r){let o=new rS;for(aS(e,o),s[0]!==0&&(t=ea(e,t,s,r));(n=tD(e,n))!==null;){let a=ea(e,Vr(e,-1),U(XA,!0),t);if(kf(e,-2),vf(a))return a;wr(e,U(`
	no file '%s'`),a),kf(e,-2),oS(o)}return lS(o),null},nD=function(e){return dS(e,_n(e,1),_n(e,2),DA(e,3,"."),DA(e,4,ci))!==null?1:(YA(e),yf(e,-2),2)},If=function(e,t,n,s){mn(e,tS(1),n);let r=Vr(e,-1);return r===null&&pi(e,U("'package.%s' must be a string"),n),dS(e,t,r,U("."),s)},Pf=function(e,t,n){return t?(Lt(e,n),2):pi(e,U(`error loading module '%s' from file '%s':
	%s`),Vr(e,1),n,Vr(e,-1))},sD=function(e){let t=_n(e,1),n=If(e,t,U("path",!0),U(WB,!0));return n===null?1:Pf(e,DB(e,n)===Cr,n)},hS=function(e,t,n){let s;n=ea(e,n,U("."),zB);let r=Of(n,uS.charCodeAt(0));if(r>=0){s=Nf(e,n,r),s=wr(e,U("%s%s"),GA,s);let o=Tf(e,t,s);if(o!==Vf)return o;n=r+1}return s=wr(e,U("%s%s"),GA,n),Tf(e,t,s)},rD=function(e){let t=_n(e,1),n=If(e,t,U("jspath",!0),U(pS,!0));return n===null?1:Pf(e,hS(e,n,t)===0,n)},oD=function(e){let t=_n(e,1),n=Of(t,46),s;if(n<0)return 0;Nf(e,t,n);let r=If(e,Vr(e,-1),U("jspath",!0),U(pS,!0));return r===null?1:(s=hS(e,r,t))!==0?s!=Vf?Pf(e,0,r):(wr(e,U(`
	no module '%s' in file '%s'`),t,r),1):(Lt(e,r),2)},aD=function(e){let t=_n(e,1);return mn(e,Hn,sS),mn(e,-1,t)===Rf&&wr(e,U(`
	no field package.preload['%s']`),t),1},lD=function(e,t,n,s){let r=new rS;return aS(e,r),mn(e,tS(1),U("searchers",!0))!==TB&&pi(e,U("'package.searchers' must be a table")),gS(e,Cr,{name:t,i:1,msg:r,ctx:n,k:s})},gS=function(e,t,n){for(;t===Cr?(PB(e,3,n.i)===Rf&&(gn(e,1),lS(n.msg),pi(e,U("module '%s' not found:%s"),n.name,Vr(e,-1))),Lt(e,n.name),WA(e,1,2,n,gS)):t=Cr,!RB(e,-2);n.i++)NB(e,-2)?(gn(e,1),oS(n.msg)):gn(e,2);return n.k(e,Cr,n.ctx)},iD=function(e){let t=_n(e,1);return FB(e,1),mn(e,Hn,nS),mn(e,2,t),eS(e,-1)?1:(gn(e,1),lD(e,t,t,cD))},cD=function(e,t,n){return Lt(e,n),yf(e,-2),WA(e,2,1,n,jA),jA(e,Cr,n)},jA=function(e,t,n){let s=n;return yB(e,-1)||Ln(e,2,s),mn(e,2,s)==Rf&&(JA(e,1),ui(e,-1),Ln(e,2,s)),1},uD={loadlib:$B,searchpath:nD},pD={require:iD},fD=function(e){let t=[aD,sD,rD,oD,null];zA(e);for(let n=0;t[n];n++)ui(e,-2),CB(e,t[n],1),QA(e,-2,n+1);Ln(e,-2,U("searchers",!0))},dD=function(e){OB(e),zA(e,0,1),KB(e,-2),UB(e,Hn,wf)},hD=function(e){return dD(e),GB(e,uD),fD(e),HA(e,U("path",!0),jB,vB),HA(e,U("jspath",!0),XB,EB),ZA(e,ci+`
`+Ns+`
`+XA+`
`+kB+`
`+uS+`
`),Ln(e,-2,U("config",!0)),BA(e,Hn,nS),Ln(e,-2,U("loaded",!0)),BA(e,Hn,sS),Ln(e,-2,U("preload",!0)),VB(e),ui(e,-2),qB(e,pD,1),gn(e,1),1};mS.exports.luaopen_package=hD});var Ff=I((HG,_S)=>{var{lua_pushinteger:gD,lua_pushliteral:Os,lua_setfield:jn}=Ke(),{luaL_newlib:mD}=Ye(),{FENGARI_AUTHORS:_D,FENGARI_COPYRIGHT:bD,FENGARI_RELEASE:xD,FENGARI_VERSION:AD,FENGARI_VERSION_MAJOR:SD,FENGARI_VERSION_MINOR:kD,FENGARI_VERSION_NUM:ED,FENGARI_VERSION_RELEASE:vD,to_luastring:Xn}=Xe(),TD=function(e){return mD(e,{}),Os(e,_D),jn(e,-2,Xn("AUTHORS")),Os(e,bD),jn(e,-2,Xn("COPYRIGHT")),Os(e,xD),jn(e,-2,Xn("RELEASE")),Os(e,AD),jn(e,-2,Xn("VERSION")),Os(e,SD),jn(e,-2,Xn("VERSION_MAJOR")),Os(e,kD),jn(e,-2,Xn("VERSION_MINOR")),gD(e,ED),jn(e,-2,Xn("VERSION_NUM")),Os(e,vD),jn(e,-2,Xn("VERSION_RELEASE")),1};_S.exports.luaopen_fengari=TD});var xS=I((jG,bS)=>{"use strict";var{lua_pop:RD}=Ke(),{luaL_requiref:yD}=Ye(),{to_luastring:ND}=Xe(),ut={},OD=function(e){for(let t in ut)yD(e,ND(t),ut[t],1),RD(e,1)};bS.exports.luaL_openlibs=OD;var Ht=Kn(),{luaopen_base:CD}=ip(),{luaopen_coroutine:wD}=pp(),{luaopen_debug:VD}=Sf(),{luaopen_math:ID}=pf(),{luaopen_package:PD}=Uf(),{luaopen_os:UD}=Np(),{luaopen_string:KD}=nf(),{luaopen_table:FD}=bp(),{luaopen_utf8:MD}=of();ut._G=CD,ut[Ht.LUA_LOADLIBNAME]=PD;ut[Ht.LUA_COLIBNAME]=wD;ut[Ht.LUA_TABLIBNAME]=FD;ut[Ht.LUA_OSLIBNAME]=UD;ut[Ht.LUA_STRLIBNAME]=KD;ut[Ht.LUA_MATHLIBNAME]=ID;ut[Ht.LUA_UTF8LIBNAME]=MD;ut[Ht.LUA_DBLIBNAME]=VD;typeof process<"u"&&(ut[Ht.LUA_IOLIBNAME]=vp().luaopen_io);var{luaopen_fengari:BD}=Ff();ut[Ht.LUA_FENGARILIBNAME]=BD});var Kn=I((XG,z)=>{"use strict";var{LUA_VERSION_MAJOR:DD,LUA_VERSION_MINOR:GD}=Ke(),qD="_"+DD+"_"+GD;z.exports.LUA_VERSUFFIX=qD;z.exports.lua_assert=function(e){};z.exports.luaopen_base=ip().luaopen_base;var LD="coroutine";z.exports.LUA_COLIBNAME=LD;z.exports.luaopen_coroutine=pp().luaopen_coroutine;var HD="table";z.exports.LUA_TABLIBNAME=HD;z.exports.luaopen_table=bp().luaopen_table;typeof process<"u"&&(z.exports.LUA_IOLIBNAME="io",z.exports.luaopen_io=vp().luaopen_io);var jD="os";z.exports.LUA_OSLIBNAME=jD;z.exports.luaopen_os=Np().luaopen_os;var XD="string";z.exports.LUA_STRLIBNAME=XD;z.exports.luaopen_string=nf().luaopen_string;var WD="utf8";z.exports.LUA_UTF8LIBNAME=WD;z.exports.luaopen_utf8=of().luaopen_utf8;var zD="bit32";z.exports.LUA_BITLIBNAME=zD;var JD="math";z.exports.LUA_MATHLIBNAME=JD;z.exports.luaopen_math=pf().luaopen_math;var ZD="debug";z.exports.LUA_DBLIBNAME=ZD;z.exports.luaopen_debug=Sf().luaopen_debug;var YD="package";z.exports.LUA_LOADLIBNAME=YD;z.exports.luaopen_package=Uf().luaopen_package;var $D="fengari";z.exports.LUA_FENGARILIBNAME=$D;z.exports.luaopen_fengari=Ff().luaopen_fengari;var QD=xS();z.exports.luaL_openlibs=QD.luaL_openlibs});var Kf=I((WG,ke)=>{"use strict";var $e=Xe();ke.exports.FENGARI_AUTHORS=$e.FENGARI_AUTHORS;ke.exports.FENGARI_COPYRIGHT=$e.FENGARI_COPYRIGHT;ke.exports.FENGARI_RELEASE=$e.FENGARI_RELEASE;ke.exports.FENGARI_VERSION=$e.FENGARI_VERSION;ke.exports.FENGARI_VERSION_MAJOR=$e.FENGARI_VERSION_MAJOR;ke.exports.FENGARI_VERSION_MINOR=$e.FENGARI_VERSION_MINOR;ke.exports.FENGARI_VERSION_NUM=$e.FENGARI_VERSION_NUM;ke.exports.FENGARI_VERSION_RELEASE=$e.FENGARI_VERSION_RELEASE;ke.exports.luastring_eq=$e.luastring_eq;ke.exports.luastring_indexOf=$e.luastring_indexOf;ke.exports.luastring_of=$e.luastring_of;ke.exports.to_jsstring=$e.to_jsstring;ke.exports.to_luastring=$e.to_luastring;ke.exports.to_uristring=$e.to_uristring;var eG=je(),tG=Ke(),nG=Ye(),sG=Kn();ke.exports.luaconf=eG;ke.exports.lua=tG;ke.exports.lauxlib=nG;ke.exports.lualib=sG});var rG=IS(Kf(),1);var AS={cli:`-- This Script is Part of the Prometheus Obfuscator by levno-710
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
			{ Name = "Vmify", Settings = {} },
			{
				Name = "ConstantArray",
				Settings = {
					Threshold = 1,
					StringsOnly = true,
					Shuffle = true,
					Rotate = true,
					LocalWrapperThreshold = 0
				},
			},
			{
				Name = "NumbersToExpressions",
				Settings = {
					NumberRepresentationMutation = true
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

function Ast.OrExpression(lhs, rhs, simplify)
	if(simplify and rhs.isConstant and lhs.isConstant) then
		local success, val = pcall(function() return lhs.value or rhs.value end);
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
		if success then
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
            local bound = math.floor((leftId + rightId) / 2);
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
            -- Float-safe split: any bound strictly between adjacent IDs works.
            -- Midpoint avoids integer-only math.random(min, max) behavior.
            local bound = math.floor((leftMaxId + rightMinId) / 2);
            local ifScope = Scope:new(pScope);

            local lBlock = buildElseifChain(tb, l, mid - 1, ifScope);
            local rBlock = buildElseifChain(tb, mid, r, ifScope);

            -- Randomly choose between different condition styles
            local condStyle = math.random(1, 3);
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
                        }, Scope:new(ifScope)))),
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

local unpack = unpack or table.unpack

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

local function generateModuloExpression(n)
	local rhs = n + math.random(1, 2^24)
	local multiplier = math.random(1, 2^8)
	local lhs = n + (multiplier * rhs)
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
			--
			-- There is a second, more subtle hazard that is specific to Fengari
			-- (and was previously undetected): Fengari's own Lua integer type is
			-- only 32 bits wide, not the 64 bits real Lua 5.3/5.4 use (this is a
			-- deliberate, documented upstream Fengari limitation, not something
			-- this obfuscator can change). When a *decimal* integer literal
			-- overflows that 32-bit range, Fengari correctly falls back to
			-- parsing it as a float (matching real Lua's overflow rule), so the
			-- value survives intact. But Fengari's *hexadecimal* literal parser
			-- does not have that fallback: it silently wraps the value modulo
			-- 2^32 using JavaScript's 32-bit "|0" operator instead of erroring
			-- or promoting to float. A hex literal like 0x100049DA2 (which is
			-- well within a 64-bit/double-precision integer and prints fine
			-- under real Lua 5.1) silently becomes a completely different,
			-- wrong number under Fengari with no error raised at all - and
			-- Vmify's generated VM interpreter routinely produces constants in
			-- this range for its bytecode encoding, so this reliably corrupts
			-- double-Vmify ("Strong" preset) output the moment
			-- NumberRepresentationMutation picks "hex" for one of them.
			-- Restrict "hex" to values that fit in a signed 32-bit integer so
			-- the literal round-trips identically on both real Lua and
			-- Fengari; anything larger falls back to a plain (float-safe)
			-- decimal literal instead.
			if val > 0x7FFFFFFF then
				return Ast.NumberExpression(val)
			end
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

			-- Scientific notation (e.g. "1e3") is *always* a float literal in
			-- Lua grammar - Lua 5.1 and 5.3/Fengari agree on that syntax rule.
			-- Under Lua 5.1 that distinction is invisible, since every number
			-- is the same uniform type. But Fengari (like real Lua 5.3+) has
			-- separate integer/float subtypes, and turning an originally
			-- integer-valued constant into a float literal here silently
			-- "infects" every place that value flows through afterwards:
			-- tostring()/print() start appending ".0", and - more importantly
			-- - string concatenation changes its actual output text (e.g.
			-- \`1 .. "x"\` is "1x" but \`1.0 .. "x"\` is "1.0x"). That is an
			-- observable behavior change, not just cosmetic, so exact-integer
			-- values must not be rewritten as scientific notation. This
			-- mirrors the guard the "hex" and "binary" branches above already
			-- have for the same reason.
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
`};var{lua:L,lauxlib:ta,lualib:vS,to_luastring:pt,to_jsstring:Ir}=rG;function oG(){let e=ta.luaL_newstate();vS.luaL_openlibs(e),L.lua_pushjsfunction(e,t=>{let n=L.lua_gettop(t),s=[];for(let r=1;r<=n;r++)L.lua_getglobal(t,pt("tostring")),L.lua_pushvalue(t,r),L.lua_call(t,1,1),s.push(Ir(L.lua_tostring(t,-1),void 0,void 0,"?")),L.lua_pop(t,1);return console.log(s.join("	")),0}),L.lua_setglobal(e,pt("print"));for(let[t,n]of Object.entries(AS)){if(L.lua_getglobal(e,pt("package")),L.lua_getfield(e,-1,pt("preload")),ta.luaL_loadbuffer(e,pt(n),pt("="+t))!==L.LUA_OK){let r=Ir(L.lua_tostring(e,-1));throw new Error(`Failed to compile embedded module "${t}": ${r}`)}L.lua_setfield(e,-2,pt(t)),L.lua_pop(e,2)}return e}function aG(e){return JSON.stringify(e)}var SS=["Minify","Weak","Medium","Strong"];function kS(e,t,n){let s=oG(),o=`
local Prometheus = require("prometheus")
Prometheus.Logger.logLevel = Prometheus.Logger.LogLevel.Error
local pipeline = Prometheus.Pipeline:fromConfig(${n!=null?`(function() local p = {} for k, v in pairs(Prometheus.Presets["${t}"]) do p[k] = v end p.Seed = ${n} return p end)()`:`Prometheus.Presets["${t}"]`})
local ok, out = pcall(function() return pipeline:apply(${aG(e)}, "input.lua") end)
if not ok then
  error(out, 0)
end
return out
`;return ta.luaL_dostring(s,pt(o))!==L.LUA_OK?{ok:!1,error:Ir(L.lua_tostring(s,-1),void 0,void 0,"?")}:{ok:!0,code:Ir(L.lua_tostring(s,-1),void 0,void 0,"?")}}function ES(e){let t=ta.luaL_newstate();vS.luaL_openlibs(t),L.lua_pushnil(t),L.lua_setglobal(t,pt("io")),L.lua_pushnil(t),L.lua_setglobal(t,pt("os"));let n=[];return L.lua_pushjsfunction(t,r=>{let o=L.lua_gettop(r),a=[];for(let l=1;l<=o;l++)L.lua_getglobal(r,pt("tostring")),L.lua_pushvalue(r,l),L.lua_call(r,1,1),a.push(Ir(L.lua_tostring(r,-1),void 0,void 0,"?")),L.lua_pop(r,1);return n.push(a.join("	")),0}),L.lua_setglobal(t,pt("print")),ta.luaL_dostring(t,pt(e))!==L.LUA_OK?{ok:!1,error:Ir(L.lua_tostring(t,-1),void 0,void 0,"?"),printed:n.join(`
`)}:{ok:!0,error:null,printed:n.join(`
`)}}function TS(e,t,{maxAttempts:n=8,onLog:s=()=>{}}={}){if(!SS.includes(t))throw new Error(`Unknown preset "${t}". Must be one of ${SS.join(", ")}.`);let r=t==="Medium"||t==="Strong",o=null;if(r){let u=ES(e);u.ok?(o=u.printed,s(`[${t}] Baseline captured from original script for output comparison.`)):s(`[${t}] Original script doesn't run standalone in a bare sandbox (likely relies on an external environment) \u2014 self-test will only catch crashes, not silent corruption.`)}let a=null,l=r?n:1;for(let u=1;u<=l;u++){s(`[${t}] Obfuscation attempt ${u}${r?`/${n}`:""}...`);let c=r?Date.now()%2147483647+u*104729:null,f=kS(e,t,c);if(!f.ok){a=f.error,s(`[${t}] Obfuscation itself failed: ${f.error}`);continue}if(!r)return s(`[${t}] Done.`),{ok:!0,code:f.code,attempts:u,warning:null};s(`[${t}] Verifying output executes correctly in a sandbox...`);let K=ES(f.code);if(!K.ok){a=K.error,s(`[${t}] Attempt ${u} produced code that fails at runtime (known upstream Vmify/ConstantArray issue): ${K.error}`);continue}if(o!==null&&K.printed!==o){a="obfuscated output behaves differently than the original (silent corruption, not a crash)",s(`[${t}] Attempt ${u} ran without error but its output doesn't match the original's \u2014 silent corruption from the same known Vmify/ConstantArray issue. Retrying.`);continue}return s(`[${t}] Verified OK on attempt ${u}${o!==null?" (output matches original)":""}.`),{ok:!0,code:f.code,attempts:u,warning:null}}s(`[${t}] Could not get a self-verified result after ${n} attempts. Returning best-effort output with a warning.`);let i=kS(e,t,Date.now());return{ok:i.ok,code:i.ok?i.code:null,attempts:n,warning:i.ok?`This script triggered a known upstream Prometheus bug (Vmify + ConstantArray, see prometheus-lua/Prometheus issues #155 and #18) ${n} times in a row \u2014 most recently: ${a}. The code below is best-effort and should be tested before you rely on it. Try the "Weak" preset for a version that is not affected by this bug.`:`Obfuscation failed: ${i.error}`}}self.onmessage=e=>{let{source:t,preset:n,maxAttempts:s}=e.data||{};try{let r=TS(t,n,{maxAttempts:s,onLog:o=>self.postMessage({type:"log",message:o})});self.postMessage({type:"result",result:r})}catch(r){self.postMessage({type:"error",error:r instanceof Error?r.message:String(r)})}};})();
/*! Bundled license information:

fengari/src/fengari.js:
  (**
  @license MIT
  
  Copyright Â© 2017-2019 Benoit Giannangeli
  Copyright Â© 2017-2019 Daurnimator
  Copyright Â© 1994â2017 Lua.org, PUC-Rio.
  *)
*/
