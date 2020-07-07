// 型推論
// let msg = "hello";

// アノテーション（annotation）・・・明示的に型を追加すること

// string型
let str: string = "hello";

// integer型
let num: number = 1;

// boolian型
let bool: boolean = true;

// null型
let n: null = null;

// any型
let some: any = 'test';

// 配列
let array1: boolean[] = [false, true]
let array2: (string | number)[] = [0, 1, 'hello']

// object
interface NAME {
    first: string;
    last: string | null;
    age?: number
}

let nameObj: NAME = {first: 'yamada', last: 'taro'}
let nameObj2: NAME = {first: 'yamada', last: 'taro', age: 1} // ? → 値がなくてもok
let nameObj3: NAME = {first: 'yamada', last: null, age: 1} // | null →　nullを許可する 

// 関数
const func1 = (x: number, y: number): number => {
    return x + y;
}

console.log(func1(1, 3))

/* *** *** *** ***

[memo]
@ts-check ?

yarn add typescript ts-node
../../node_modules/.bin/ts-node sample01.ts 

*** *** *** *** */



// Intersection Types (インターセクション　タイプス) ・・・2つの型を結合する
type PROFILE = {
    age: number;
    city: string;
}

type LOGIN = {
    username: string;
    password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
    age: 30,
    city: 'tokyo',
    username: 'yamada',
    password: 'password'
}


// Union Types ・・・変数が受け取れる型を制限すること
let value: boolean | number;
value = true;
value = 10;

let array3: (number | string)[];
array3 = [0, 1, 3, 'hello'];



// Literal Types ・・・指定した値のみ許可する
// LiteralとUnion Typesの組み合わせ
let str2: 'apple' | 'banana' | 'orange';
str2 = 'apple';

let num2: 123 | 456;
num2 = 123;



// typeof ・・・宣言した型を取得する、継承できる
let msg: string = "hello";
let msg2: typeof msg;
msg2 = "hello world";

let animal = {cat: 'small cat'};
let newAnimal: typeof animal = {cat: "big cat"};



// keyof
type KEYS = {
    value1: string;
    value2: number;
}

let key: keyof KEYS;
key = "value1"



// typeof + keyof
const SPORTS = {
    soccer: 'Soccer',
    baseboll: 'Baseboll'
}



// let keySports: typeof SPORTS;
let keySports: keyof typeof SPORTS;
keySports = 'baseboll'



// enum（列挙型）・・・indexを追加してくれる。ミス防止など
enum ITEM {
    APPLE,
    TOOL,
    BOX,
}

interface item {
    id: number;
    item: ITEM;
}

const item1: item = {
    id: 0,
    item: ITEM.APPLE // ITEM.APPLEをみるとindexがわかる
}



// 型の互換性



// Generics(ジェネリクス)
interface GEN<T, U> {  // T・・・alias
    item: T;
    price?: U;
}
const gen1: GEN<string, number> = {item: 'hello', price: 100};

// デフォルトの型を追加する場合
interface GEN2<T = string> {
    item: T;
}

// 型を制限する場合
interface GEN3<T extends string | number> {
    item: T;
}

const gen2: GEN2<boolean> = {item: true}

//error
// const gen3: GEN3<boolean> = {item: true}


function funcGen<T>(props: T) {
    return { item: props };
}

const funcGen2 = <T>(props: T) => ({ item: props });

const funcGen3= <T>(args: T): T => args;

const gen4 = funcGen<string | null>("hello!"); // 明示的に<string>を記述しなくても良い

const gen5 = funcGen2(100);

const gen6 = funcGen3("hello");


interface Props {
    price: number;
}

function funcGen4<T extends Props>(props: T) {
    return { value: props.price };
}

const funcGen5 = <T extends Props>(props: T) => {
    return { value: props.price };
}



import UER_DATA  = require('./sample.json');

// 以下のimportの記述の場合は、esModuleInteropのオプションを設定する必要がある
// import data from './sample.json';
// compilerOptions: {
//     "esModuleInterop": true
// }

// jsonファイルを読み込む設定を追加
// tsconfig.json
// {
//     "compilerOptions": {
//         "moduleResolution": "node",
//         "resolveJsonModule": true
//     }
// }

console.log(UER_DATA)

type USER02 = typeof UER_DATA;