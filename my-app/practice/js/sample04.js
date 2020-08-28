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


// Q161
{
    // addEventListener('DOMcontentLoad', function(){something}, 第三引数true/false)
    // https://qiita.com/hosomichi/items/49500fea5fdf43f59c58

    // useCapture（デフォルトfalse）
    //trueの場合、内側要素（子）をクリックした時、実行順番が異なる
}


// Q162
{
    // <div class='classA'>
    //     <div>some1</div>
    //     <p><div>some2</div></p>
    //     <div>some3</div>
    // </div>

    // const classA = document.getElementsByClassName('classA')
    // const result = Array.prototype.filter.call(classA, function(classA){
    //     return classA.nodeName === 'DIV'
    // });

    // result instanceof Array
}


// Q163
{
    // <div class="fafa"><span></span></div>
    // <div class="fafa"><span></span></div>
    // <div class="fafa"><span></span></div>
    // <div class="fafa"><span></span></div>

    //for文でNodeListを使うのを避ける方法
    // const tag = document.getElementsByTagName('span')
    // const array = Array.prototype.slice.call(tag)
    // console.log(array instanceof Array)
}


// Q164
{
    // <div id="main">
    //     <p class="content">
    //         <a class="link" href="http://kenjimorita.jp">
    //         1st Link
    //     </a>
    //         <p class="dummy"></p>
    //         <p class="content">
    //         <a href="http://example.com/">2link</a>
    //         </p>
    //         <p class="content">
    //         <a href="http://example.com/">3link</a>
    //         </p>
    //         <a href="http://example.com/">5th</a>
    //     </div>

    // const result = document.evaluate(
    //     '//div[@id="main"]/p[contains(@class,"content")][3]/a[starts-with(@href,"http://example.com")]',
    //     document,
    //     null,
    //     XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    //     null
    // );
    
    // console.log(result.snapshotLength) //1
    // var elem = result.snapshotItem(0);
    // console.log(elem.innerHTML);
}


// Q165
{
    // <div id="target" class="foo-after" onClick="toggleStyle()">click here!</div>
    // const target = document.getElementById('target');
    // target.onclick = function toggleStyle(){
    //     this.classList.toggle('foo-after')
    //     this.classList.toggle('foo-before')
    // }
}


// Q166
{
    const s = " fafa fafa eee ";
    // console.log(s.trim().split(' ')) //[ 'fafa', 'fafa', 'eee' ]
}


// Q167
{
    const s = "abcdefg"
    const obj = Object.prototype.valueOf.call(s)
    // console.log(obj)
}


// Q168
{
    const s = 'abcdefg';
    // console.log([...s]) //[ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
    // console.log(Array.prototype.slice.call(s)) //[ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
}


// Q169
{
    const s = "apple banana orenge";
    const arrayed = s.split(" ")

    const obj = {}
    arrayed.forEach(function(e, i){
        obj[i] = e
    })

    // console.log(obj) //{ '0': 'apple', '1': 'banana', '2': 'orenge' }

    const map = new Map();
    const obj2 = {}
    arrayed.forEach((e, i) => {
       return map.set(i, e)
    })

    // console.log(map) //Map { 0 => 'apple', 1 => 'banana', 2 => 'orenge' }

    const arr = []
    for(value of arrayed.entries()){
        arr.push(value)
    }
    const map2 = new Map(arr)
    // console.log(map2) //Map { 0 => 'apple', 1 => 'banana', 2 => 'orenge' }
}


// Q170
{
    const add = (a = 1, b = 2) => (a + b)

    // console.log(add()) //3
    // console.log(add(2)) // 4
    // console.log(add(2, 3)) //5
}