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