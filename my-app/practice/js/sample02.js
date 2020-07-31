// Q51
var a51 = [['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']];

// console.log(a51.entries())

for(const[index, value] of a51.entries()){
    // console.log(index, value)
}


// Q52
var n52 = 'first last';

// console.log(/\w+\s\w+/.exec(n52));


// Q53
const s53 = 'It is an important problem';
const s532 = 'The import duty is not cheap';
let isImport = /.*\bimport\b.*/.test(s53); //false
// console.log(isImport)
isImport = /.*\bimport\b.*/.test(s532); //true
// console.log(isImport)


// Q54
//ひらがな [ぁ-ん]
//カタカナ [ァ-ヶ]
//半角カタカナ /^[\uFF65-\uFF9F]+$/
//半角以外にmatch [^A-Za-z0-9]

let s54 = 'ひらがな';
// console.log(/[ぁ-ん]{4}/.test(s54))
s54 = 'カタカナ';
// console.log(/[ァ-ヶ]{4}/.test(s54))
s54 = 'ｶﾀｶﾅ';
// console.log(/[\uFF65-\uFF9F]{4}/.test(s54))
s54 = '漢字';
// console.log(/[^A-Za-z0-9]{2}/.test(s54))


// Q55
// const s55 = '「ヤッホー！ヤッホー！';
// console.log(/(ヤッホー！)+/.exec(s55))
// const s55 = '「ヤッホー！ヤッホー！ヤッホー！ヤッホー！ヤッホー！ヤッホー！ヤッホー！ヤッホー！」'; //最初のものにマッチ
// console.log(/(ヤッホー！){2,3}/.exec(s55))
const s55 = '「ヤッホー?ヤッホー@」';
// console.log(/(ヤッホー\W)+/.exec(s55))


// Q56
const s56 = '彼はありがとうと言った';
// console.log(/彼は(ありがとう|こんにちは｜さようなら)と言った/.exec(s56)); // [ '彼はありがとうと言った', 'ありがとう', index: 0, input: '彼はありがとうと言った', groups: undefined ]
// console.log(/ありがとう|こんにちは｜さようなら/.exec(s56)); // [ 'ありがとう', index: 2, input: '彼はありがとうと言った', groups: undefined ]


// Q57
const s57 = 'why';
// console.log(/wh(en|ere|o|at|y)|How/.exec(s57));


// Q58
// const x58 = new Boolean(false)
// console.log(x58)
// if(x58){
//     console.log("x58")
// }

// // false
// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(false));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// //true
// console.log(Boolean(1789));
// console.log(Boolean('false'));//'false'という文字列は真偽値プリミティブのfalseとは異なる

// console.log(Boolean(Math));
// console.log(Boolean(Array()));


// Q59
const v59 = new Boolean(false);
// console.log(v59) //[Boolean: false]
const v592 = new Boolean(v59);
// console.log(v592) //[Boolean: true]


// Q60
// console.log(undefined == null); //true
// console.log(undefined === null); //false


// Q61
const ii61 = () => {
    return (value) => {
        console.log(`my: ${value}`)
    }
}

const kk61 = ii61();
// kk61('home');


// Q62
const now = new Date();
const nowtime = `今${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒`;
// console.log(nowtime)


// Q63
const f63 = () => {
    return {
        first63: 1,
        second63: 2,
        third63: 3
    }
}

const {first63, second63, third63} = f63();
// console.log(f63())
// console.log(first63, second63, third63)


// Q65
const s64 = 'abcdefg';
// console.log(s64.includes('cd'));


// Q66
// console.log('repeat'.repeat(2))
