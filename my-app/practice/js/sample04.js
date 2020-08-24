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