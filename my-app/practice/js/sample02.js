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
