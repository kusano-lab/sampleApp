// Q201
{
    // for(var i=0; i<localStorage.length; i++){
    //     console.log(localStorage.key(i))
    // }
}


// Q202
{
    // const dataObj = {
    //     'id': 0010,
    //     'isFavorite': true
    // }

    // if(!window.localStorage){ return false};
    // //safariプライベートモード(ios10など？)でWebStorageが使えない対応

    // try{
    //     localStorage.setItem('dataObj', JSON.stringify(dataObj))
    // }catch(e){
    //     console.log(e)
    // }

    // const getData = JSON.parse(localStorage.getItem('dataObj'))
}


// Q203
{
    //bad
    // function CreateId(id){
    //     this.id = id;
    // }
    // CreateId.prototype.get = function(){
    //    console.log(this.id);
    // }
    // var create = new CreateId(10);
    // create.get()//10
    // setTimeout(create.get, 1000);

    //good
    //1 bind
    // setTimeout(create.get.bind(create), 1000);

    //2 Arrow Function
    // setTimeout(()=> {create.get}, 1000);
}


// Q204
{
    // function Person() {
    //     var self = this;
    //     self.age = 0;
    
    //     setInterval(function() {
    //         // The callback refers to the `self` variable of which
    //         // the value is the expected object.
    //         self.age++;
    //     }, 1000);
    // }
    // var p = new Person();
    // p
    //{age: 1} //1秒ごとに1足される


    // Arrow Function
    // function Person() {
    //     var self = this;
    //     self.age = 0;
    
    //     setInterval(() => {
    //         this.age++;
    //     }, 1000);
    // }
    // var p = new Person();
    // p
    //{age: 1} //1秒ごとに1足される
}


// Q205
{
    // function foo(a, b, c, d){
    //     console.log([a, b, c, d])
    //     //or console.log(arguments);
    // }
    // foo(1,2,3,4,5)
    // //[1, 2, 3, 4]

    // const foo = (...args) => {
    //     console.log(args)
    // }
    // foo(1,2,3,4,5) //[ 1, 2, 3, 4, 5 ]
}


// Q206
{
    //  SomeClass.prototype.someMethod = function (arg1, arg2){

    //  }
    //  SomeClass.prototype.anotherMethod = function (){

    //  }


    // Object.assign(SomeClass.prototype, {
    //     someMethod(arg1, arg2){

    //     },
    //     anotherMethod(){

    //     }
    // })     
}


// Q207
{
    // const proto = Object.defineProperty({}, 'prop', {
    //     writable: false,
    //     configurable: true,
    //     value: 123,
    // });

    // const obj = Object.create(proto)
    // // obj.prop = 789//NG
    // Object.defineProperty(obj, 'prop', {value: 456})
    // console.log(obj.prop) //456 
}


// Q208
{
    // var locationsearch = '?id=12345&category=script&isname=true';
    // var result = {}
    // locationsearch.substring(1).split('&').forEach(function(ele, i){
    //     var key = ele.split('=')
    //     result[key[0]] = decodeURIComponent(key[1])
    // })
}


// Q209
{
    // const arr = [1,1,'a','a']
    // const uniq = arr.filter(function(x, i, arr){
    //     return arr.indexOf(x) === i;
    // })
}


// Q210
{
    // const today = new Date()
    // const Day = today.getTime()
    // const start = new Date(2016, 7, 27, 0, 0, 0)
    // const SDay = start.getTime()
    // const end = new Date(2016, 8, 11, 0, 0, 0)
    // const EDay = end.getTime()

    // const target = document.getElementById('target')

    // SDay <= Day && EDay >= Day target.innerHTML += 'セール中'
}


// Q211
{
    const arr = [[1,2],[],[3]]
    const flatArr = Array.prototype.concat.apply([], arr)
    // console.log(flatArr) //[ 1, 2, 3 ]
    // console.log([...arr[0], ...arr[1], ...arr[2]]) //[ 1, 2, 3 ]
}


// Q212
{
    const arr = [];
    for (var i=0; i < 3; i++) {
        arr.push(() => i);
    }
    for (let i=0; i < 3; i++) {
        arr.push(() => i);
    }
    // console.log( arr.map(x => x()) ); // [ 3, 3, 3, 0, 1, 2 ]
}


// Q213
{
    const entries = [
        ['yes', 'ja'],
        ['no', 'nein'],
        ['perhaps', 'vielleicht'],
    ];

    // const content = document.getElementsByTagName('content')
    // for(let [src, target] of entries){
    //     content.inserAdjacentHTML('beforeend', '<div id=$"{src}">src</div>')
    //     document.getElementById(src).addEventListener(
    //         'click', (event) => {
    //             event.preventDefault();
    //             alert(target)
    //         }
    //     )
    // }
}


// Q214
{
    // const foo = 'outer';
    // function bar(func = x => foo) {
    //     const foo = 'inner';
    //     console.log(func());
    // }
    // bar(); //outer
}


// Q215
{
    class Faa {
        constructor(name){
            this.name = name
        }
        speak(){
            console.log(this.name)
        }
    }

    class Faaaa extends Faa {
        constructor(name){
            super();
            this.name = name
        }
        getSpeak(){
            super.speak()
        }
    }

    const f = new Faa('taro')
    // f.speak() //taro

    const fa = new Faaaa('hiro')
    // fa.speak()    //hiro
    // fa.getSpeak() //hiro
}


// Q216
{
    //NG
    function clone(orig) {
        return Object.assign({}, orig);
    }

    function clone(orig) {
        const origProto = Object.getPrototypeOf(orig)
        return Object.assign(Object.create(origProto), orig)
    }    
}


// Q217
{
    // Generator methods
    // class IterableArgs {
    //     constructor(...args){
    //         this.args = args;
    //     }
    //     * [Symbol.iterator](){
    //         for (const arg of this.args){
    //             yield arg;
    //         }
    //     }
    // }

    // for (const x of new IterableArgs('hello', 'world')) {
    //     console.log(x)
    // }

    //hello
    // world
}


// Q218
{
    // var dimension = function(radius, height){
    //     var d = radius * radius * Math.PI
    //     return d * height / 3
    // }(10, 20)
    
    // console.log(dimension) //2094.3951023931954
}


// Q219
{
    // var obj = {
    //     width: 20
    // }
    // if(!!obj.height){
    //     console.log(obj.height)
    // }else{
    //     console.log('heightが定義されていません')
    // }
    // console.log(!!obj.height) //false
}


// Q220
{
    const add = (x, y) => (x + y)
    const multiply = (x, y) => (x * y)
    // console.log(add(1, 2)) //3
    // console.log(multiply(2, 3)) //6

    const withLoging = (func) => {
        return function(x, y){
            let result = func(x, y)
            // console.log('result', result)
            return result
        }
    }

    var addLog = withLoging(add)
    // addLog(5, 10) //result 15

    var multiplyLog = withLoging(multiply)
    // multiplyLog(2, 6) //result 12
}


// Q221
{
    const arr = [1, 2, 3]
    // console.log(arr) //[1, 2, 3 ]
    const newArr = Array.prototype.slice.call(arr, 1)
    // console.log(newArr) //[ 2, 3 ]

    // const h1s = document.querySelectorAll('h1')
    // const newH1s = Array.prototype.slice.call(h1s, 1)
}


// Q222
{
    const a = 'aabbccdde1e23ffgg'
    const b = 'aabbccddee123ffgg'
    // console.log(a.search(/\d/)) //9
    // console.log(b.search(/\d/)) //10
    // console.log(a.search(/\d/) < b.search(/\d/)) //true
}


// Q223
{
    const div = '<div>about me</div>';
    const textArr = []
    // console.log(/\<div\>(.+)\<\/div\>/.exec(div)[1]) //about me

    textArr.push(/\<div\>(.+)\<\/div\>/.exec(div)[1])
    // console.log(textArr) //[ 'about me' ]
}


// Q224
{
     var i = 0
     var arr = []
    //  do {
    //      arr.push(Math.pow(2, i))
    //      i += 1
    //  } while(i < 10)
    //  console.log(arr)
}


// Q225, Q226, Q227
{
    const d = new Date('1980/8/1 5:55')
    // console.log(d) //1980-07-31T20:55:00.000Z
    // console.log(d.toLocaleString()) //1980-8-1 05:55:00
    // console.log(d.toString()) //Fri Aug 01 1980 05:55:00 GMT+0900 (GMT+09:00)
    // console.log(d.toLocaleTimeString()) //05:55:00
}


// Q228
{
    const arr = ['aaa', 'bbb', 'ccc'];
    arr.unshift('000')
    // console.log(arr) // [ '000', 'aaa', 'bbb', 'ccc' ]
}


// Q229
{
    const arr = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
    const newArr = arr.filter(e => {
        if(e % 3 !== 0 && e % 2 !== 0 ) return e
    })
    // console.log(newArr) // [ 1, 5, 7 ]
}


// Q230, Q231
{
    // 標準オブジェクト
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects
    // 値プロパティ
    // ・Infinity
    // ・NaN
    // ・undefined
    // ・null リテラル

    // 関数プロパティ
    // eval()
    //   ※ uneval() 
    // isFinite()
    // isNaN()
    // parseFloat()
    // parseInt()
    // decodeURI()
    // decodeURIComponent()
    // encodeURI()
    // encodeURIComponent()
    //   bad escape() 
    //   bad unescape() 
}


// Q232
{
    const url = 'https://tools.ietf.org/html/rfc2822#page-14';
    // console.log(encodeURIComponent(url))
    // → https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc2822%23page-14

    // console.log(encodeURI(url))
    // → https://tools.ietf.org/html/rfc2822#page-14
    // (;、 :、 /、 @、？、 &、 %、 $、 #、 =、 + 、 ,)はエンコードしない
}


// Q233
{
    const s = 'aaa,bbb,ccc,ddd';
    const newS = s.replace(/,/g, '/') //aaa/bbb/ccc/ddd
    // console.log(newS)
}


// Q234
{
    const s = 'aaa<div>bbb</div>ccc<div>ddd</div>eee';
    const re = /<div>(.*?)<\/div>/g
    let arr;


    while((arr = re.exec(s)) !== null){
        // console.log(arr[0].replace(/<\/*div>/g, ''))
    }
    // bbb
    // ddd
}


// Q235
{
    let arr = Array(10).fill(0).map((v, i) => i + 1)
    // console.log(arr) //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

    let arr2 = Array(10).fill(0).map((v, i) => Math.pow(2, (i + 1)))
    // console.log(arr2) //[ 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ]
}


// Q236
{
    const temp = new Date();
    temp.setMonth(1, 30)
    temp.setDate(temp.getDate() + 1)

    const arr = []
    // console.log(temp.getMonth())
    // console.log(temp.getDate())
    while(!(temp.getMonth() == 1 && temp.getDate() == 1)){
        let reCnt = arr[temp.getMonth() + 1]
        arr[temp.getMonth() + 1] = temp.getDate()
        if(reCnt === undefined){
            temp.setDate(28)            
        }else{
            temp.setDate(temp.getDate() + 1)
        }
    }
    // console.log(arr) //[ <1 empty item>, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
}


// Q237
{
`
同一制限ポリシー（same origin policy）の制限を受けるもの4つ
・XMLHttpRwquest
・Canvas
・WebStrage
・X-Frame-Options

オリジンの参照
location.origin
document.origin

制限を受けないもの
cookie
HTTP認証
document.domainを書き換えてのinnerHTMLの読み書き

//以下はlocationプロパティ
//例: http://www.google.com:80/search?q=devmo#test
host - www.google.com:80
hostname - www.google.com
href - http://www.google.com:80/search?q=devmo#test
pathname - /search (ホストからの相対)
protocol - http:
search = ?q=devmo
hash - #test

//用語
スキーム : http,https
同一オリジン : スキーム,ホスト,ポートが同じこと
クロスオリジン : 上記がいずれか一つでも違うこと
セッションハイジャック : サーバーから渡されるセッションIDを盗み正規ユーザーになりすますこと
`
}

// Q238
{
`
location.assign　と location.replace　の違い

replaceは画面繊維をwebブラウザの履歴に残さず遷移する

`
}


// Q239
{
    var Person = {
        say: function(){
            console.log('my name is' + this.name + '。' + '職業は' + this.job + 'です');
        }
    }
    
    var taro = Object.create(Person, {name :{value: 'taro' }});
    var copy  = Object.create(taro, {job: {value: 'JavascriptEngneer'}});
    // copy.say() //my name istaro。職業はJavascriptEngneerです
}


// Q240
{
    function Constructor() {}
    // const o = new Constructor();

    // const o = Object.create(Constructor.prototype)
}


// Q241
{
    var o = Object.create({}, {p: {value: 32, writable: true, enumerable: true, configurable: true}})
    // console.log(o) //32

    o.p = 11;
    // console.log(o) //11
}


// Q242
{
`
Object.create
第一引数： 任意のオブジェクトのprototypeを渡す
第二引数： 自身がもつプロパティディスクリプションを定義する
return： 上記で継承したインスタンスを返す

Object.definePropertyes
第一引数： プロパティをsetする対象オブジェクト
第二引数： プロパティ名
return： 定義したいディスクリプタをハッシュオブジェクトとして渡す
※ 既存プロパティは上書き。各種設定のdefaultはfalse

Object.defineProperty
第一引数： プロパティをsetする対象オブジェクト
第二引数： プロパティのキーとしてディスクリプタをもつオブジェクト
※ 既存のプロパティは上書き
`
}