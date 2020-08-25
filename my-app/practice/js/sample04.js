// Q151
{
    // const key = 'greeting';
    // var objA = {};
    // objA[key] = 'おはよう';
    // objA.greeting
    // //'おはよう'

    const key = 'greeting';
    const objA = {
        [key]: 'おはよう'
    };
    // console.log(objA.greeting) //おはよう
}


// Q152
{
    // var objA = {
    //     add: function(a,b){
    //         return a + b;
    //     }
    // }
    // objA.add(2,5);
    // //7

    var objA = {
        add(a, b){
            return a + b;
        }
    }
    // console.log(objA.add(2, 5)) //7

}


// Q153
{
    var objA = {
        add: (a, b) => (a + b)
    }
    // console.log(objA.add(2, 5)) //7
}


// Q154
{
    var arr = ['shibuya','shinjuku','ebisu','shinagawa','tokyo','ueno','ikebukuro'];
    var [,a,,,,,b] = arr
    // console.log('a', a) // a shinjuku
    // console.log('b', b) // b ikebukuro
}


// Q155
{
    var obj = {
        name : 'taro',
        twon: 'shibuya'
    }

    const {name, twon} = obj
    // console.log('name', name) // name taro
    // console.log('twon', twon) // twon shibuya
}


// Q156
{
    const name = 'Taro'
    const [a,,,b] = name;
    // console.log('a', a) // a T
    // console.log('b', b) // b o
}


// Q157,Q158
{
    let a = 1;
    let b = 'goodby';
    // console.log(a, b); // 1 'goodby'

    b = [a, a = b][0]
    // console.log(a, b) // goodby 1

    // [a, b] = [b, a];
    // console.log(a, b); // goodby 1
}


// Q159
{
    const input = [0,[1,2,3],4,5,[6]];
    const inputB = [input[0], ...input[1], input[2], input[3], ...input[4]];
    // console.log(inputB) // [ 0, 1, 2, 3, 4, 5, 6 ]
}


// Q160
{
    // document.addEventListener('DOMContentload', function(){
    //     const target = document.getElementById('target')
    //     target.textContent('change text')
    // }, false)

    //window.onload（load）は全てのloadが終わったタイミングで発火する
    //DOMContentloadはDOM解析が終わってDOMに触れれるようになったら発火する　→ 画像読み込み前に実行可能。画像の幅などの処理にはloadを使用する
}