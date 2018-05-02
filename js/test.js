let reg=/[abc]/g;//匹配abc中任意字符
let reg2=/[abc.]/g;
let reg4=/[^abc]/g;

let str="a1b2c3";
let str2="a1b2c3d.";
let str3="abcdefgh";
let res=str.replace(reg,"X");//x1x2x3
let res2=str2.replace(reg2,"X");//x1x2x3dx
let res4=str3.replace(reg4,"Z");
let str_that="That's hot Hat";/* 后面的Hat不会被匹配，因为H是大写了,但是g后面跟i则会输出*/
let reg_that=/h.t/g;
let match_that=str_that.match(reg_that);//得到匹配的结果
console.log(res);//x1x2x3
console.log(res2);//x1x2x3dx
console.log(res4);
console.log(match_that);