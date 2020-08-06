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


// Q67
const c67 = [];
for(let n of 'foo'){
    c67.push(n)
}
// console.log(c67)


// Q68
const a68 = ['aaa', 'bbb']
const Iterator68 = a68[Symbol.iterator]();
// console.log(Iterator68.next());
// console.log(Iterator68.next());
// console.log(Iterator68.next());


// Q69
const a69 = [...'foo'];
// console.log(a69)


// Q70
const [index70a, index70b, ...index70z] = 'aiueo';
// console.log(index70a, index70b, index70z)


// Q71
const f71 = (f71a, f71b, ...f71z) => {
    console.log('first', f71a)
    console.log('second', f71b)
    console.log('rest', f71z)
}
// f71(1,2,3,4,5)


// Q72
const b72 = [4, 5, 6]
const a72 = [1, 2, 3, ...b72]
// console.log(a72)


// Q73
// const foo73 = 'foo';
// function foo73(){};
// class Baz73{
//     baz(){}
// }
// export {foo73, bar73, Baz73};

// import {foo73, bar73, Baz73} from './module';
// import {foo73 as poo73} from './module';
// import * as from './moudle';


// Q74
// var obj74 = {foo: foo, bar: bar};
// var obj74 = {foo, bar} //keyとvalueが同じ場合、省略化


// Q75
// 従来の書き方
// var key = 'foo';
// var obj = {};
// obj[key] = 0;
// obj[key + '_bar'] = 1;

// ES2015の書き方
var k75 = 'foo';
var obj75 = {
    [k75]: 0,
    [k75 + '_bar']: 1
}
// console.log(obj75.foo, obj75.foo_bar)


// Q76
const f76 = () => {
    return 'taro'
}
// console.log(`my name is ${f76()}`)


// Q77
let [a77, b77] = [1, 2];
// console.log(a77, b77)


// Q78
// console.log(`line1
// line2`)
// console.log(`\
// line1
// line2\
// `)


// Q79
{
    const long = '30px';
    const weight = '40px';
    const tag = (strings, ...values) => {
        // console.log(strings, values) //[ '身長', 'で体重', 'です' ] [ '30px', '40px' ]
        return `m: ${values[0]}, p: ${values[1]}`;
    }
    let str = tag`身長${long}で体重${weight}です`; 
    // console.log(str);

    const tag2 = (arg) => {
        // console.log(arg);
    }
    tag2`身長${long}で体重${weight}です`; 
}


// Q80
{
    const func = ({a, b}) => {
        return a + b;
    }
    // console.log(func({a: 1, b: 4}))
}


// Q81
{
    let aa = [['a', 'b', 'c'], ['d', 'e', 'f']];
    // console.log(aa);
    aa = aa.map(a => {
        return a.map(e => {
            return `${e} san`;
        })
    })
    // console.log(aa);
}


// Q82
{
    // let aa = [1, 2, 3];
    // let bb = [4, 5, 6];
    // console.log('aa', aa) // aa [ 1, 2, 3 ]
    // console.log('bb', bb) // bb [ 4, 5, 6 ]
    // let cc = aa.forEach((a) => {
    //     return a*2
    // })
    // console.log('aa', aa) // aa [ 1, 2, 3 ]
    // console.log('cc', cc) // cc undefined

    // let dd = bb.map((b) => {
    //     return b*2
    // })
    // console.log('bb', bb) // bb [ 4, 5, 6 ]
    // console.log('dd', dd) // dd [ 8, 10, 12 ]
}


// Q83 + Q84
{
    let obj = [{name: 'a'},{name: 'b'}]
    let result = obj.map(e => `${e.name} san`)
    // console.log(result)

    let result2 = [];
    obj.forEach(ele => {
        // `${e.name} san`
        for (var key in ele){
            result2.push(`${ele[key]} san`)
        }
    })
    // console.log(result2)
}


// Q85
{   
    const atom = {
        value: 1,
        addValue: function(value){
            return atom.value + value;
        }
    }
    // console.log(atom.addValue(atom.value))

    // object-shrothand
    const atom2 = {
        value: 10,
        addValue(value) {
            return atom2.value + value;
        }
    }
    // console.log(atom2.addValue(atom2.value))
}


// Q86
{
    function getKey(k){
        return `a key named ${k}`;
    }

    const obj = {
        id: 5,
        name: 'taro',
        [getKey('foo')]: true
    }
    // console.log(obj)
    obj[getKey('enabled')] = true
    // console.log(obj)
}


// Q87
{
    // let path = location.pathname
    let path = "/ja/docs/Web/API/Location";
    let [first, second, ...other] = path.substring(1).split('/')
    // console.log(first, second, other)
}


// Q88
{
    const name = 'taro'
    const age = 20
    const obj = {
        name: name,
        age,
    }

    // console.log(obj.name, obj.age)
}


// Q89
{
    const arr = ['a', 'b', 'c']
    const copyArr = [...arr]
    // console.log(copyArr)
} 


// Q90
{
    // console.log(window)
    // navigator/location/history/screen/frames/document/parent/top/selfs
}


// Q90
{
    function add (user){
        const name = user.name;
        const id = user.id;
        return `${name} ${id}`;
    }
    // console.log(add({name: 'taro', id: 123}))

    const add2 = user => {
        const {name, id} = user
        return `${name} ${id}`;
    }
    // console.log(add2({name: 'taro', id: 123}))

    const add3 = ({name, id}) => {
        return `${name} ${id}`;
    }
    // console.log(add3({name: 'taro', id: 123}))
}