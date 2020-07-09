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

