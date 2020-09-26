// Q251
{
    const o = {}
    const arr = ['one', 'two', 'three', o];
    // console.log(arr)

    // Object.freeze(o)[ 'one', 'two', 'three', {} ]
    Object.freeze(arr)

//   arr.sort() //Cannot assign to read only property '1' of object '[object Array]'
    arr[3].a = 'aa'
    // console.log(arr) //[ 'one', 'two', 'three', { a: 'aa' } ]

    arr[0] = '11'
    // console.log(arr) //[ 'one', 'two', 'three', { a: 'aa' } ]
}


// Q252
{
    var obj = {
        'prop1': 'value1',
        'prop2': 'value2',
        'prop3': 'value3'
    }

    // console.log(obj) //{ prop1: 'value1', prop2: 'value2', prop3: 'value3' }
    // console.log(typeof obj) //object

    // console.log(JSON.stringify(obj)) //{"prop1":"value1","prop2":"value2","prop3":"value3"}
    // console.log(typeof JSON.stringify(obj)) //string

    // console.log(JSON.stringify(obj, ['prop1'])) //{"prop1":"value1"}
    // console.log(JSON.stringify(obj, ['prop1'], '\t'))
    // {
    //     "prop1": "value1"
    // }
}


// Q253
{
`
this呼び出し4つとthisの参照の参照先オブジェクト

・コンストラクタ呼び出し
 → コンストラクタが生成したオブジェクト

・メソッド呼び出し
 → レシーバオブジェクト

・apply, call呼び出し
 → apply, callの引数で指定したオブジェクト

・それ以外の呼び出し
 → グローバルオブジェクト
`
}