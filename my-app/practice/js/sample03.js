// Q101
{
    let s = '-9'
    // console.log(typeof s, s)
    // s = s - 0
    s = +s
    // console.log(typeof s, s)
}


// Q102
{
 let s = 'あいうえお'
 
//  console.log(s.slice(0, 2)) //あい
//  console.log(s.substring(0, 2)) //あい

//  console.log(s.slice(0, -2)) //あいう
//  console.log(s.substring(0, -2)) // 

//  console.log(s.slice(1, 1)) // 
//  console.log(s.substring(1, 1)) // 
 
//  console.log(s.slice(1, -3)) // い
//  console.log(s.substring(1, -3)) // あ

//  console.log(s.substring(2, 4)) // うえ
//  console.log(s.substring(4, 2)) // うえ

// substringの場合、小さい方を開始位置に解釈する
}


// Q103
{
  let s = 'abcdefee'
  s = s.replace(/[ce]/g, function(char){
    return char.toUpperCase();
  })
//   console.log(s) // abCdEfEE
}


// Q104
{
    let greeting = 'hello '
    let name = 'taro. '
    let msg = greeting.concat(name, 'いい天気ですね')
    // console.log(msg)
    // 代入演算子（+や+=）の方がパフォーマンスがいい
}


// Q105
{
    let target
    // console.log(target) //undefined
    // console.log(target == null) //true
    // target = null
    // console.log(target == null) //true
    // target = ''
    // console.log(target == null) //false
    // target = 0
    // console.log(target == null) //false
}


// Q106
{
    let value = 0
    let target = value || 10
    // console.log(target) //10

    let target2 = (value !== undefined) ? value : 10;
    // console.log(target2) //0
}


// Q107
{
    let arr = []
    // console.log(arr.length !== 0) //true
}


// Q108
{
    let obj = {}
    // console.log(obj ? true: false) //true
    // console.log(Object.keys(obj).length != 0 ? true: false) //false
}


// Q109
{
    // forとforEachの処理の違い
    // for →　returnで返り値を返し、処理を終える
    // forEach　→　受け取った関数の全ての要素を処理するまで終わらない。retrunした場合、次の要素処理が実行される

    //配列のどれか1つに条件を満たす評価をしたい場合はArray.someを使用する
    const lessThan10 = (n) => n < 10;
    // console.log(lessThan10(5)) //true
    // console.log(lessThan10(11)) //false
    // console.log([1, 2, 3, 4, 5].some(lessThan10)) //true
    // console.log([1, 2, 3, 4, 5, 12].some(lessThan10)) //true
    // console.log([12, 13, 15].some(lessThan10)) //false
}


// Q110
{
    const arr = ['a', 'b', 'c']
    // console.log(Object.getOwnPropertyNames(arr)) //[ '0', '1', '2', 'length' ]

    const obj = {'a': 1, 'b': 3, 'c': 5}
    // console.log(Object.getOwnPropertyNames(obj)) //[ 'a', 'b', 'c' ]
}


// Q111
{
    let o = {}
    Object.defineProperty(o, 'name', {
        value: 'taro',
        writable: false, //書き換え可能か
        configurable: false, //削除可能か
        enumerable: false //列強可能か
    });
    // console.log(o.name) //taro
    // o.name = 'hana'
    // console.log(o.name) //taro
    // console.log(Object.keys(o)) // [] 　not→['name']
    // delete(o.name)
    // console.log(o.name) //taro
}


// Q112
{
    // import * as math from 'math'
    // import {sum, pi} from 'math'
    // console.log(math.sum(1, 3))
    // console.log(math.pi)

    // https://qiita.com/s-yoshida/items/af23897e096e3e18e765
    // https://qiita.com/hagevvashi/items/8b4a7d3061bddd3b340e
}


// Q113
{
    const index = ['a', 'bb', 'ccc'].findIndex(x => x == 'ccc')
    // console.log(index) //2
    const objIndex = [{name: "aa"}, {name: "bb"}, {name: "cc"}].findIndex(x => x.name == "bb")
    // console.log(objIndex) //0
}


// Q114
{
    const r = ['A','B','C'].map(x => Array.of(x))
    // console.log(r) //[ [ 'A' ], [ 'B' ], [ 'C' ] ]
    const r2 = ['A','B','C'].map(x => [x])
    // console.log(r2) //[ [ 'A' ], [ 'B' ], [ 'C' ] ]
}


// Q115
{
 const r = ['a', 'b', 'c'].fill('target', 1, 3)
//  console.log(r) //[ 'a', 'target', 'target' ]
}