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


// Q171
{
    let flg = true;
    const func = () => {
        console.log('func')
    }
    
    // if(flg){
    //     func();
    // }

    // flg && func();
    
}


// Q172
{
    // for (var i=0; i<5; i++) {
    //     setTimeout(function(){
    //         // console.log('i', i);
    //     }, 1000 * (i+1));
    // }
    // // 5が5回出力される

    // //ok
    // var temp = 0;
    // for (var i=0; i<5; i++) {
    //     setTimeout(function(){
    //         // console.log('temp', temp);
    //         temp++;
    //     }, 1000 * (i+1));
    // }

    // //ok
    // for (let j=0; j<5; j++) {
    //     setTimeout(function(){
    //         // console.log('j', j);
    //     }, 1000 * (j+1));
    // }

    // //ok
    // for (var k=0; k<5; k++) {
    //     (function(num){
    //         setTimeout(function(){
    //             // console.log('num', num);
    //         }, 1000 * (k+1));
    //     })(k);
    // }
}


// Q173
{
    const origin = {name: 'taro', age: 80}
    const obj = origin
    obj.age = '30'
    // console.log(origin) //{ name: 'taro', age: '30' }
    // console.log(obj) //{ name: 'taro', age: '30' }
    // console.log(JSON.stringify(origin)) //{"name":"taro","age":"30"}
    const obj2 = JSON.parse(JSON.stringify(origin))
    obj2.age = '50'
    // console.log(origin) //{ name: 'taro', age: '30' }
    // console.log(obj2) //{ name: 'taro', age: '50' }
}


// Q174
{
    const getKey = (key) => {
        return `a key named ${key}`
    }

    const obj = {
        id: 1,
        name: 'taro',
        [getKey('enabled')]: true
    }

    // console.log(obj) //{ id: 1, name: 'taro', 'a key named enabled': true }
}


// Q175
{
    const name = 'taro';
    const address = 'tokyo';

    const obj = {
        id: 1,
        name : name,
        address: address
    }

    const obj2 = {
        id: 2,
        name,
        address
    }

    // console.log(obj) //{ id: 1, name: 'taro', address: 'tokyo' }
    // console.log(obj2) //{ id: 2, name: 'taro', address: 'tokyo' }
}


// Q176
{
    // const foo = document.querySelector('.foo')
    // const nodes = Array.from(foo)
}


// Q177
{
    // [[0, 1], [2, 3], [4,5]] → [0, 1, 2, 3, 4, 5]
    // let flat = {}
    const arr = [[0, 1], [2, 3], [4,5]]
    const a = arr.reduce((pre, current, index, array) => {
        // console.log('pre', pre)
        // console.log('current', current)
        // console.log('index', index)
        // console.log('array', array)
        return pre.concat(current)
    })

    // console.log(a) //[ 0, 1, 2, 3, 4, 5 ]

    //[...[0, 1], ...[2, 3], ...[4,5]]
}


// Q178
{
    //bad
    const foo = function() {

    }

    //good
    //コールスタックに識別しやすくされている
    //アロー関数が使用できる
    function hoge() {

    }
}


// Q179
{
    const currentUser = true
    if (currentUser) {
        function test() {
        //   console.log('Nope.');
        }
    }

    let test;
    if (currentUser) {
        test = () => {
            // console.log('Yup.');
        };
    }
    //関数宣言はステートメントではない
}


// Q180
{
    function concatenateAll() {
        const args = Array.prototype.slice.call(arguments);
        return args.join('');
    }
    // console.log(concatenateAll('a', 'b', 'c'))

    const concatenateAll2 = (...args) => args.join('')
    // console.log(concatenateAll2('a', 'b', 'c'))
}


// Q181
{
    //NG アンチパターン
    function f1(obj){
        obj.key = 1;
    }

    // パラメータとして渡されたオブジェクトを操作すると、元の呼び出し側で不要な変数副作用を引き起こす可能性があります。
    function f2(obj){
        const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
    }
}


// Q182
{
    // const foo = a ? a : b;
    // const bar = c ? true : false;
    // const baz = c ? false : true;

    // const foo = a || b
    // const bar = !!c
    // const baz = !c
}


// Q183
{
    // NG
    // const foo = {clark: 'kent'};
    // space: eslintのobject-curly-spacing / jscsのrequireSpacesInsideObjectBrackets

    // OK
    const foo = { clark: 'kent' };
}


// Q184
{
    const createAddress = (address, tyoume = address + '-1', banch = tyoume + '-10') => {
        return [address, tyoume, banch]
    }

    // console.log(createAddress('meguro'))
}


// Q185
{
    //f() → 6
    // ObjectDestructuring?
    const f = ([x, y] = [1, 2], {z: z} = {z: 3}) => {
        return x + y + z;
    }
    // console.log( f() ) //6
}


// Q186
{
    var people = [
        { name: "ken",
          family: {
           mother: "jone Smith"
          },
         age: 24
        },
        { name: "jun",
          family: {
           mother: "jone jun"
          },
         age: 27
    }];

    for(var { name: n, family: {mother: f} } of people){
        // console.log(`name ${n}, mother ${f}`)
    }
    // name ken, mother jone Smith
    // name jun, mother jone jun
}


// Q187
{
    var metadata = {
        title: 'Scratchpad',
        translations: [
         {
           locale: 'de',
           localization_tags: [],
           last_edit: '2016-07-18',
           url: 'kenjimorita.jp',
           title: 'JavaScript'
          }
        ],
         url: 'kenjimorita.jp/JavaScript'
    };

    var {title: englishTitle, translations: [{title: localeTitle}]} = metadata;
    // console.log('englishTitle', englishTitle) //englishTitle Scratchpad
    // console.log('localeTitle', localeTitle) //localeTitle JavaScript
}


// Q188
{
    // old
    // function drawES5Chart(options) {
    //     options = options === undefined ? {} : options;
    //     var size = options.size === undefined ? 'big' : options.size;
    //     var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
    //     var radius = options.radius === undefined ? 25 : options.radius;
    //     console.log(size, cords, radius);
    // }
    // drawES5Chart({
    //     cords: { x: 18, y: 30 },
    //     radius: 30
    // });
    

    //ECMAScript2015
    const drawES6Chart = ({size = 'big', cords = {x: 0, y: 0}, radius = 25} = {}) => {
        // console.log(size, cords, radius)
    }

    drawES6Chart({
        cords: {x: 18, y: 30},
        radius: 30
    })
    // big { x: 18, y: 30 } 30
}


// Q189
{
    // NodeList → Array
    // querySelectorAll('.child')やdocument.getElementsByTagName('div')

    // const nodeList = document.querySelectorAll('.child')

    // Array.from(nodeList)

    // Array.prototype.slice.call(nodeList)

    // [...nodeList]

    // Object.keys(nodeList).forEach(function(key){
    //     console.log(nodeList[key])
    // })
}


// Q190
{
    // const add = () => this.x //NG アロー関数ではうまくいかない
    function add(){ return this.x}
    // console.log( add() ) //undefined

    var obj = {x: 5}
    // console.log( add.apply(obj) ) //5
}


// Q191
{
    function add(y, z){
        console.log(this.x, y+z)
    }

    // add.apply({x: 3}, [5, 6]) //3 11

    // add.call({x: 3}, 5, 6) //3 11
}


// Q192
{
    var int = 8;
    var module = {
     int: 4,
     fn : function(){return this.int;}
    }

    // console.log(module.fn()) //4

    var fnn = module.fn.bind({int: 8}) //8
    // console.log(fnn())
}


// Q193
{
    function list() {
        return Array.prototype.slice.call(arguments)
    }

    // console.log(list(2, 3, 4)) //[ 2, 3, 4 ]

    var bindList = list.bind(null, 1)
    // console.log(bindList(2, 3, 4)) //[ 1, 2, 3, 4 ]
}


// Q194
{
    // var list = document.getElementById('list')
    // var fragment = document.createDocumentFragment()
    // var array = ["Internet Explorer", "Mozilla Firefox", "Safari", "Chrome", "Opera"]
    // var node = array.forEach(function(elem){
    //     var li = document.createElement('li')
    //     li.textContent = elem
    //     fragment.appendChild(li)
    // })

    // list.appendChild(fragment)
    //全てのブラウザで利用可能
    //返り値はDocumentFragmentへの参照。メモリ上に存在
    //DOMツリーに追加するのではないのでリフローが行われない
}


// Q195
{
    // var str = str.replace(/(?:\r\n|\r|\n)/g, '<br>')
    // https://gist.github.com/kenmori/1961ce0140dc3307a0e641c8dde6701d
}


// Q196
{
    const {a, b} = {a: 1, b: 2}
    // console.log('a', a) // a 1
    // console.log('b', b) // b 2
}


// Q197
{
    // ローカルストレージとセッションストレージ
    // ・ローカルストレージ
    // 　→ブラウザに保存される
    // 　→他のタブでも共有される、保存したデータは他のタグで即座に参照可能。ページ更新後も残る

    // ・セッションストレージ
    // 　→異なるタブなら異なるsessionストレージ
    // 　→同一タブ内なら保存は維持される
}


// Q198
{
    // localStorage.foo = 'fooooooooo'
    // // localStorage.foo

    // localStorage.setItem('foo', 'fafa')
    // localStorage.getItem('foo')

    // localStorage.removeItem('foo')
    // localStorage.clear()

    // var key = localStorage.key(0)
    // console.log(`${key}のストレージは${localStorage[key]}`)
}
