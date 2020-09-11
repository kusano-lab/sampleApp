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