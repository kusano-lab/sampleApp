// Q1
const a = { a: 'a' }
const b = { b: 'b' }
const c = Object.assign(a, b);
// console.log(c);

const d = Object.assign({}, c);
// console.log(d);

const e = Object.assign(c, {a: 'e'});
// console.log(e);

const f = { f: 'f' }
const g = {...c, ...f }
// console.log(g)


// Q2
const array2 = ['aa','bb','cc','dd','ee','ff','gg'];

const newArray2 = array2.slice(3, -1)
// console.log(newArray2);


// Q3, Q4
const array3 = ['a','b'];

// forEachの方が適切そう。mapは、新たな配列を作成する場合や、処理をすっきり記述したいなど。forEachが速い
// array3.map(x => console.log(x))
array3.forEach((ele, i) => {
    // console.log(i, ele)
    // console.log(ele)
    // console.log(ele+i)
});

// Q5
const array5 = [1, 2]; // true
// const array5 = {}; // false
// console.log(Array.isArray(array5));
// console.log(array5 instanceof Array); // ← instanceofは継承しているオブジェクトを判定する

// Q6
// console.log(typeof x6 === 'undefined'); // true
// console.log(x6 === 'undefined'); // not definded エラー

// Q7
let x7;
// console.log(x7 === void 0); // void 0 → undefined / global変数
// console.log(y7 === void 0); // not definded エラー

// Q8
const obj8 = {
    key: 'aa',
    key2: 'bb'
}

for(p in obj8) {
    // console.log(`${p}: ${obj8[p]}`)
}

// Q9
const array9 = ['a', 'b', 'c'];
// console.log(array9.join(''));


// Q10
// const x10 = 10;
// y10 = 101;
// console.log(x10);
// console.log(y10);
// delete x10; // 明示的に宣言しているのでdeleteできない
// delete y10; // 暗黙的に定義されたglobal変数はdeleteできる
// console.log(x10);
// console.log(y10); // definedエラー

// const f10 = () => {
//     var z10 = 102;
//     console.log(z10);
//     delete z10; //deleteできない
//     console.log(z10);
// }
// f10();

// let color10 = ['red', 'blue', 'green'];
// console.log(color10);
// color10[1] = undefined;
// console.log(color10);
// delete color10[0]; //<1 empty item> 配列の要素数は変わらない
// console.log(color10);

// const Foo10 = () => {};
// function Foo10(){}
// Foo10.prototype.bar = 103;
// console.log(Foo10);
// let foo10 = new Foo10(); // [Function: Foo10]
// console.log(foo10); // Foo10 {}
// console.log(foo10.bar); // 103
// delete foo10.bar;
// console.log(foo10.bar); // 103
// delete foo10.prototype.bar;
// console.log(foo10.bar); // undefined or null


// Q11
let arr11 = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 4, name: 'item4' },
    { id: 3, name: 'item3' }
];

// console.log(arr11);
// console.log('----');

arr11.sort((a, b) => {
    return a.id > b.id;
});
// console.log(arr11);


// Q12
// const [a12=5, b12=7] = [1];
// console.log(a12, b12);


// Q13
// const setUp = function(){
//     let count = 0;
//     return function(){
//     return (count += 1);
//     }
// };

// const next = setUp();
// console.log(next());//1
// console.log(next());//2
// console.log(next());//3

function* setUp2() {
    let cnt = 0;
    while(cnt < 3){
        yield cnt;
        cnt++;
    }
}

const func13 = setUp2();

// console.log(func13.next())
// console.log(func13.next())
// console.log(func13.next())


// Q14
// func14(1, 2, 3)

// const func14 = (...arg) => {
//     return arg;
// }

// NG アロー関数は自身でargumentsオブジェクトを持たない
// const func14 = () => {
//     return Array.from(arguments);
// }

// function func14(){
//     return Array.from(arguments);
// }

// console.log(func14(1, 2, 3));


// Q15
const arr15 = ['a1','a2','a3','a4','a5'];
// console.log(arr15.splice(0, 2, 'red', 'green', 'yellow'));
// console.log(arr15);


// Q16
const arr16 = ['a1','a2','a3','a4','a5'];
const newarr16 = arr16.slice(1, 4);
// console.log(newarr16);
// console.log(arr16);


// Q17
const arr17 = ['a1','a2','a3','a4','a5'];
// console.log(arr17.join('/').split('/'));


// Q18
const arr18 = ['おはよう','こんにちは','おやすみなさい'];
const greeting18 = arr18[Math.floor(Math.random() * arr18.length)];
// console.log(greeting18)


// Q19
const obj19 = Object.create({}, {p: {value: 1}})
// console.log(obj19.p)


// Q20
function Who20(name){
    this.name = name;
};
Who20.prototype.getName = function(){
    // console.log('myname is '+ this.name);
}
let o20 = new Who20('taro');
o20.getName();


// Q21
let arr21 = ['e','a','k','B','c'];
// console.log(arr21.sort());


// Q22
// console.log(arr21.sort( (a, b) => a.toUpperCase() > b.toUpperCase() ));


// Q23
const arr23 = [20,100,3,35,0];
// console.log(arr23.sort((a, b) => (b - a)));


// Q24
let a24 = "10";
// console.log(typeof a24);

a24 = parseInt(a24, 10)
// console.log(typeof a24);

a24 = a24.toString();
// console.log(typeof a24);


// Q25
// const func25 = (x, y) => {
//     return x + y;
// }
// const func25 = x => y => x + y

const func25 = (x, y) => {
    if(typeof y === 'undefined') return y => x + y;
    return x + y;
}

// console.log(func25(1, 2));
// console.log(func25(1)(2));