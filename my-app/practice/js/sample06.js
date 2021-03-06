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


// Q254
{
    var obj = { foo: 'bar', baz: 42 }; 
    var map = new Map(Object.entries(obj))
    // console.log(map) //Map { 'foo' => 'bar', 'baz' => 42 }
}


// Q256
{
    let color = 'black'

    const printBlack = () => (console.log('black'))
    const printRed = () => (console.log('red'))
    const printBlue = () => (console.log('blue'))
    const printYellow = () => (console.log('yellow'))
    
    const colorObj = {
        'black': printBlack,
        'red': printRed,
        'blue': printBlue,
        'yellow': printYellow
    }

    // if(color in colorObj) colorObj[color]() //black
}


// Q257 
{
    // ['a','b','c'] → {0: 'a', 1: 'b', 2: 'c'}
    const toObj = (arr) => {
        const obj = {};
        for(var i = 0; i < arr.length; i++){
            obj[i] = arr[i]
        }
        return obj
    }

    // console.log(toObj(['a','b','c'])) //{ '0': 'a', '1': 'b', '2': 'c' }
}


// Q258
{
    let html = []
    const count = 10;
    for(var i=0; i<count; i++){
        html.push('hei!!')
        // html += 'hei!!' こちらより配列でjoinした方が高速になる
    }
    // document.querySelector('#hoge').innerHTML = html.join('')
    //'hei!!hei!!hei!!hei!!hei!!hei!!hei!!hei!!hei!!hei!!'
}


// Q259
{
    function iterateTimerOver(){
        const funcTimer = Timer; //参照を代入
        const length = 100;
        for (let i = 0; i < length; i++){
          // Timer();//グローバル関数を実行するより高速
          funcTimer()
        }
    }

    // for (var i=0; i<list.length; i++){
    // }

    // 高速
    // const num = list.length;
    // for (var i=0; i<num; i++){
    // }
    
    // this.props → {name, sex, age, live}
    // const {name, sex, age, live} = this.props
    // name
}


// Q260
{
    const myObj  = {1: ['e', 'ee', 'eee'], 2: ['f', 'ff','fff']};
    // console.log(myObj)

    const newArr = Object.keys(myObj).map(ele => {
        return myObj[ele]
    })
    // console.log(newArr) //[ [ 'e', 'ee', 'eee' ], [ 'f', 'ff', 'fff' ] ]
   

    const newArr2 = Object.values(myObj)
    // console.log(newArr2) //[ [ 'e', 'ee', 'eee' ], [ 'f', 'ff', 'fff' ] ]
    // ECMAScript2017 → polifill
}


// Q261
{
    const arr = ['a', 'b', 'c']
    const obj = arr.reduce((o, v, i) => {
        o[i] = v
        return o
        // return o, v, i
    }, {})

    // console.log(obj) //{ '0': 'a', '1': 'b', '2': 'c' }
}
