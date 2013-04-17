/*
    Copyright 2008,2009
        Matthias Ehmann,
        Michael Gerhaeuser,
        Carsten Miller,
        Bianca Valentin,
        Alfred Wassermann,
        Peter Wilfahrt

    This file is part of JSXGraph.

    JSXGraph is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    JSXGraph is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with JSXGraph.  If not, see <http://www.gnu.org/licenses/>.
*/
define([], function () {
    JXG={};JXG.decompress=function(a){return unescape((new JXG.Util.Unzip(JXG.Util.Base64.decodeAsArray(a))).unzip()[0][0])};JXG.Util={};JXG.Util.Unzip=function(Q){var m=[],D="",B=false,y,E=0,N=[],q,h=new Array(32768),V=0,I=false,S,F,U=[0,128,64,192,32,160,96,224,16,144,80,208,48,176,112,240,8,136,72,200,40,168,104,232,24,152,88,216,56,184,120,248,4,132,68,196,36,164,100,228,20,148,84,212,52,180,116,244,12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,3,131,67,195,35,163,99,227,19,147,83,211,51,179,115,243,11,139,75,203,43,171,107,235,27,155,91,219,59,187,123,251,7,135,71,199,39,167,103,231,23,151,87,215,55,183,119,247,15,143,79,207,47,175,111,239,31,159,95,223,63,191,127,255],Y=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,99,99],J=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],x=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],n=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],u=Q,b=0,g=0,Z=1,a=0,X=256,f=[],j;function d(){a+=8;if(b<u.length){return u[b++]}else{return -1}}function o(){Z=1}function T(){var ab;a++;ab=(Z&1);Z>>=1;if(Z==0){Z=d();ab=(Z&1);Z=(Z>>1)|128}return ab}function R(ab){var ad=0,ac=ab;while(ac--){ad=(ad<<1)|T()}if(ab){ad=U[ad]>>(8-ab)}return ad}function c(){V=0}function v(ab){F++;h[V++]=ab;m.push(String.fromCharCode(ab));if(V==32768){V=0}}function l(){this.b0=0;this.b1=0;this.jump=null;this.jumppos=-1}var e=288;var t=new Array(e);var L=new Array(32);var G=0;var W=null;var p=null;var K=new Array(64);var H=new Array(64);var w=0;var A=new Array(17);A[0]=0;var M;var s;function i(){while(1){if(A[w]>=s){return -1}if(M[A[w]]==w){return A[w]++}A[w]++}}function C(){var ac=W[G];var ab;if(B){document.write("<br>len:"+w+" treepos:"+G)}if(w==17){return -1}G++;w++;ab=i();if(B){document.write("<br>IsPat "+ab)}if(ab>=0){ac.b0=ab;if(B){document.write("<br>b0 "+ac.b0)}}else{ac.b0=32768;if(B){document.write("<br>b0 "+ac.b0)}if(C()){return -1}}ab=i();if(ab>=0){ac.b1=ab;if(B){document.write("<br>b1 "+ac.b1)}ac.jump=null}else{ac.b1=32768;if(B){document.write("<br>b1 "+ac.b1)}ac.jump=W[G];ac.jumppos=G;if(C()){return -1}}w--;return 0}function k(af,ad,ag,ac){var ae;if(B){document.write("currentTree "+af+" numval "+ad+" lengths "+ag+" show "+ac)}W=af;G=0;M=ag;s=ad;for(ae=0;ae<17;ae++){A[ae]=0}w=0;if(C()){if(B){alert("invalid huffman tree\n")}return -1}if(B){document.write("<br>Tree: "+W.length);for(var ab=0;ab<32;ab++){document.write("Places["+ab+"].b0="+W[ab].b0+"<br>");document.write("Places["+ab+"].b1="+W[ab].b1+"<br>")}}return 0}function z(ae){var ac,ad,ag=0,af=ae[ag],ab;while(1){ab=T();if(B){document.write("b="+ab)}if(ab){if(!(af.b1&32768)){if(B){document.write("ret1")}return af.b1}af=af.jump;ac=ae.length;for(ad=0;ad<ac;ad++){if(ae[ad]===af){ag=ad;break}}}else{if(!(af.b0&32768)){if(B){document.write("ret2")}return af.b0}ag++;af=ae[ag]}}if(B){document.write("ret3")}return -1}function aa(){var af,ar,ac,ap,aq;do{af=T();ac=R(2);switch(ac){case 0:if(B){alert("Stored\n")}break;case 1:if(B){alert("Fixed Huffman codes\n")}break;case 2:if(B){alert("Dynamic Huffman codes\n")}break;case 3:if(B){alert("Reserved block type!!\n")}break;default:if(B){alert("Unexpected value %d!\n",ac)}break}if(ac==0){var an,ab;o();an=d();an|=(d()<<8);ab=d();ab|=(d()<<8);if(((an^~ab)&65535)){document.write("BlockLen checksum mismatch\n")}while(an--){ar=d();v(ar)}}else{if(ac==1){var ao;while(1){ao=(U[R(7)]>>1);if(ao>23){ao=(ao<<1)|T();if(ao>199){ao-=128;ao=(ao<<1)|T()}else{ao-=48;if(ao>143){ao=ao+136}}}else{ao+=256}if(ao<256){v(ao)}else{if(ao==256){break}else{var aq,ak;ao-=256+1;aq=R(P[ao])+Y[ao];ao=U[R(5)]>>3;if(x[ao]>8){ak=R(8);ak|=(R(x[ao]-8)<<8)}else{ak=R(x[ao])}ak+=J[ao];for(ao=0;ao<aq;ao++){var ar=h[(V-ak)&32767];v(ar)}}}}}else{if(ac==2){var ao,al,ad,ai,aj;var ah=new Array(288+32);ad=257+R(5);ai=1+R(5);aj=4+R(4);for(ao=0;ao<19;ao++){ah[ao]=0}for(ao=0;ao<aj;ao++){ah[n[ao]]=R(3)}aq=L.length;for(ap=0;ap<aq;ap++){L[ap]=new l()}if(k(L,19,ah,0)){c();return 1}if(B){document.write("<br>distanceTree");for(var at=0;at<L.length;at++){document.write("<br>"+L[at].b0+" "+L[at].b1+" "+L[at].jump+" "+L[at].jumppos)}}al=ad+ai;ap=0;var ae=-1;if(B){document.write("<br>n="+al+" bits: "+a+"<br>")}while(ap<al){ae++;ao=z(L);if(B){document.write("<br>"+ae+" i:"+ap+" decode: "+ao+"    bits "+a+"<br>")}if(ao<16){ah[ap++]=ao}else{if(ao==16){var am;ao=3+R(2);if(ap+ao>al){c();return 1}am=ap?ah[ap-1]:0;while(ao--){ah[ap++]=am}}else{if(ao==17){ao=3+R(3)}else{ao=11+R(7)}if(ap+ao>al){c();return 1}while(ao--){ah[ap++]=0}}}}aq=t.length;for(ap=0;ap<aq;ap++){t[ap]=new l()}if(k(t,ad,ah,0)){c();return 1}aq=t.length;for(ap=0;ap<aq;ap++){L[ap]=new l()}var ag=new Array();for(ap=ad;ap<ah.length;ap++){ag[ap-ad]=ah[ap]}if(k(L,ai,ag,0)){c();return 1}if(B){document.write("<br>literalTree")}while(1){ao=z(t);if(ao>=256){var aq,ak;ao-=256;if(ao==0){break}ao--;aq=R(P[ao])+Y[ao];ao=z(L);if(x[ao]>8){ak=R(8);ak|=(R(x[ao]-8)<<8)}else{ak=R(x[ao])}ak+=J[ao];while(aq--){var ar=h[(V-ak)&32767];v(ar)}}else{v(ao)}}}}}}while(!af);c();o();return 0}JXG.Util.Unzip.prototype.unzipFile=function(ab){var ac;this.unzip();for(ac=0;ac<N.length;ac++){if(N[ac][1]==ab){return N[ac][0]}}};JXG.Util.Unzip.prototype.unzip=function(){if(B){alert(u)}r();return N};function r(){if(B){alert("NEXTFILE")}m=[];var af=[];I=false;af[0]=d();af[1]=d();if(B){alert("type: "+af[0]+" "+af[1])}if(af[0]==parseInt("78",16)&&af[1]==parseInt("da",16)){if(B){alert("GEONExT-GZIP")}aa();if(B){alert(m.join(""))}N[E]=new Array(2);N[E][0]=m.join("");N[E][1]="geonext.gxt";E++}if(af[0]==parseInt("1f",16)&&af[1]==parseInt("8b",16)){if(B){alert("GZIP")}O();if(B){alert(m.join(""))}N[E]=new Array(2);N[E][0]=m.join("");N[E][1]="file";E++}if(af[0]==parseInt("50",16)&&af[1]==parseInt("4b",16)){I=true;af[2]=d();af[3]=d();if(af[2]==parseInt("3",16)&&af[3]==parseInt("4",16)){af[0]=d();af[1]=d();if(B){alert("ZIP-Version: "+af[1]+" "+af[0]/10+"."+af[0]%10)}y=d();y|=(d()<<8);if(B){alert("gpflags: "+y)}var ab=d();ab|=(d()<<8);if(B){alert("method: "+ab)}d();d();d();d();var ag=d();ag|=(d()<<8);ag|=(d()<<16);ag|=(d()<<24);var ae=d();ae|=(d()<<8);ae|=(d()<<16);ae|=(d()<<24);var aj=d();aj|=(d()<<8);aj|=(d()<<16);aj|=(d()<<24);if(B){alert("local CRC: "+ag+"\nlocal Size: "+aj+"\nlocal CompSize: "+ae)}var ac=d();ac|=(d()<<8);var ai=d();ai|=(d()<<8);if(B){alert("filelen "+ac)}ad=0;f=[];while(ac--){var ah=d();if(ah=="/"|ah==":"){ad=0}else{if(ad<X-1){f[ad++]=String.fromCharCode(ah)}}}if(B){alert("nameBuf: "+f)}if(!j){j=f}var ad=0;while(ad<ai){ah=d();ad++}S=4294967295;F=0;if(aj=0&&fileOut.charAt(j.length-1)=="/"){if(B){alert("skipdir")}}if(ab==8){aa();if(B){alert(m.join(""))}N[E]=new Array(2);N[E][0]=m.join("");N[E][1]=f.join("");E++}O()}}}function O(){var ag,ad=[],ae,ac,af,ab,ah;if((y&8)){ad[0]=d();ad[1]=d();ad[2]=d();ad[3]=d();if(ad[0]==parseInt("50",16)&&ad[1]==parseInt("4b",16)&&ad[2]==parseInt("07",16)&&ad[3]==parseInt("08",16)){ag=d();ag|=(d()<<8);ag|=(d()<<16);ag|=(d()<<24)}else{ag=ad[0]|(ad[1]<<8)|(ad[2]<<16)|(ad[3]<<24)}ae=d();ae|=(d()<<8);ae|=(d()<<16);ae|=(d()<<24);ac=d();ac|=(d()<<8);ac|=(d()<<16);ac|=(d()<<24);if(B){alert("CRC:")}}if(I){r()}ad[0]=d();if(ad[0]!=8){if(B){alert("Unknown compression method!")}return 0}y=d();if(B){if((y&~(parseInt("1f",16)))){alert("Unknown flags set!")}}d();d();d();d();d();af=d();if((y&4)){ad[0]=d();ad[2]=d();w=ad[0]+256*ad[1];if(B){alert("Extra field size: "+w)}for(ab=0;ab<w;ab++){d()}}if((y&8)){ab=0;f=[];while(ah=d()){if(ah=="7"||ah==":"){ab=0}if(ab<X-1){f[ab++]=ah}}if(B){alert("original file name: "+f)}}if((y&16)){while(ah=d()){}}if((y&2)){d();d()}aa();ag=d();ag|=(d()<<8);ag|=(d()<<16);ag|=(d()<<24);ac=d();ac|=(d()<<8);ac|=(d()<<16);ac|=(d()<<24);if(I){r()}}};JXG.Util.Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(c){var a=[],k,h,f,j,g,e,d,b=0;c=JXG.Util.Base64._utf8_encode(c);while(b<c.length){k=c.charCodeAt(b++);h=c.charCodeAt(b++);f=c.charCodeAt(b++);j=k>>2;g=((k&3)<<4)|(h>>4);e=((h&15)<<2)|(f>>6);d=f&63;if(isNaN(h)){e=d=64}else{if(isNaN(f)){d=64}}a.push([this._keyStr.charAt(j),this._keyStr.charAt(g),this._keyStr.charAt(e),this._keyStr.charAt(d)].join(""))}return a.join("")},decode:function(d,c){var a=[],l,j,g,k,h,f,e,b=0;d=d.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(b<d.length){k=this._keyStr.indexOf(d.charAt(b++));h=this._keyStr.indexOf(d.charAt(b++));f=this._keyStr.indexOf(d.charAt(b++));e=this._keyStr.indexOf(d.charAt(b++));l=(k<<2)|(h>>4);j=((h&15)<<4)|(f>>2);g=((f&3)<<6)|e;a.push(String.fromCharCode(l));if(f!=64){a.push(String.fromCharCode(j))}if(e!=64){a.push(String.fromCharCode(g))}}a=a.join("");if(c){a=JXG.Util.Base64._utf8_decode(a)}return a},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");var a="";for(var e=0;e<b.length;e++){var d=b.charCodeAt(e);if(d<128){a+=String.fromCharCode(d)}else{if((d>127)&&(d<2048)){a+=String.fromCharCode((d>>6)|192);a+=String.fromCharCode((d&63)|128)}else{a+=String.fromCharCode((d>>12)|224);a+=String.fromCharCode(((d>>6)&63)|128);a+=String.fromCharCode((d&63)|128)}}}return a},_utf8_decode:function(a){var d=[],f=0,g=0,e=0,b=0;while(f<a.length){g=a.charCodeAt(f);if(g<128){d.push(String.fromCharCode(g));f++}else{if((g>191)&&(g<224)){e=a.charCodeAt(f+1);d.push(String.fromCharCode(((g&31)<<6)|(e&63)));f+=2}else{e=a.charCodeAt(f+1);b=a.charCodeAt(f+2);d.push(String.fromCharCode(((g&15)<<12)|((e&63)<<6)|(b&63)));f+=3}}}return d.join("")},_destrip:function(f,d){var b=[],e,c,a=[];if(d==null){d=76}f.replace(/ /g,"");e=f.length/d;for(c=0;c<e;c++){b[c]=f.substr(c*d,d)}if(e!=f.length/d){b[b.length]=f.substr(e*d,f.length-(e*d))}for(c=0;c<b.length;c++){a.push(b[c])}return a.join("\n")},decodeAsArray:function(b){var d=this.decode(b),a=[],c;for(c=0;c<d.length;c++){a[c]=d.charCodeAt(c)}return a},decodeGEONExT:function(a){return decodeAsArray(destrip(a),false)}};JXG.Util.asciiCharCodeAt=function(b,a){var d=b.charCodeAt(a);if(d>255){switch(d){case 8364:d=128;break;case 8218:d=130;break;case 402:d=131;break;case 8222:d=132;break;case 8230:d=133;break;case 8224:d=134;break;case 8225:d=135;break;case 710:d=136;break;case 8240:d=137;break;case 352:d=138;break;case 8249:d=139;break;case 338:d=140;break;case 381:d=142;break;case 8216:d=145;break;case 8217:d=146;break;case 8220:d=147;break;case 8221:d=148;break;case 8226:d=149;break;case 8211:d=150;break;case 8212:d=151;break;case 732:d=152;break;case 8482:d=153;break;case 353:d=154;break;case 8250:d=155;break;case 339:d=156;break;case 382:d=158;break;case 376:d=159;break;default:break}}return d};JXG.Util.utf8Decode=function(a){var b=[];var e=0;var g=0,f=0,d=0;while(e<a.length){g=a.charCodeAt(e);if(g<128){b.push(String.fromCharCode(g));e++}else{if((g>191)&&(g<224)){d=a.charCodeAt(e+1);b.push(String.fromCharCode(((g&31)<<6)|(d&63)));e+=2}else{d=a.charCodeAt(e+1);c3=a.charCodeAt(e+2);b.push(String.fromCharCode(((g&15)<<12)|((d&63)<<6)|(c3&63)));e+=3}}}return b.join("")};
    return JXG;
});
