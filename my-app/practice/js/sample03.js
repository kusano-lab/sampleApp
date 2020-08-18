// Q101
{
    let s = '-9'
    // console.log(typeof s, s)
    // s = s - 0
    s = +s
    // console.log(typeof s, s)
}


// Q102
{
 let s = 'あいうえお'
 
//  console.log(s.slice(0, 2)) //あい
//  console.log(s.substring(0, 2)) //あい

//  console.log(s.slice(0, -2)) //あいう
//  console.log(s.substring(0, -2)) // 

//  console.log(s.slice(1, 1)) // 
//  console.log(s.substring(1, 1)) // 
 
//  console.log(s.slice(1, -3)) // い
//  console.log(s.substring(1, -3)) // あ

//  console.log(s.substring(2, 4)) // うえ
//  console.log(s.substring(4, 2)) // うえ

// substringの場合、小さい方を開始位置に解釈する
}


// Q103
{
  let s = 'abcdefee'
  s = s.replace(/[ce]/g, function(char){
    return char.toUpperCase();
  })
//   console.log(s) // abCdEfEE
}


// Q104
{
    let greeting = 'hello '
    let name = 'taro. '
    let msg = greeting.concat(name, 'いい天気ですね')
    // console.log(msg)
    // 代入演算子（+や+=）の方がパフォーマンスがいい
}


// Q105
{
    let target
    // console.log(target) //undefined
    // console.log(target == null) //true
    // target = null
    // console.log(target == null) //true
    // target = ''
    // console.log(target == null) //false
    // target = 0
    // console.log(target == null) //false
}


// Q106
{
    let value = 0
    let target = value || 10
    // console.log(target) //10

    let target2 = (value !== undefined) ? value : 10;
    // console.log(target2) //0
}


// Q107
{
    let arr = []
    // console.log(arr.length !== 0) //true
}


// Q108
{
    let obj = {}
    // console.log(obj ? true: false) //true
    // console.log(Object.keys(obj).length != 0 ? true: false) //false
}


// Q109
{
    // forとforEachの処理の違い
    // for →　returnで返り値を返し、処理を終える
    // forEach　→　受け取った関数の全ての要素を処理するまで終わらない。retrunした場合、次の要素処理が実行される

    //配列のどれか1つに条件を満たす評価をしたい場合はArray.someを使用する
    const lessThan10 = (n) => n < 10;
    // console.log(lessThan10(5)) //true
    // console.log(lessThan10(11)) //false
    // console.log([1, 2, 3, 4, 5].some(lessThan10)) //true
    // console.log([1, 2, 3, 4, 5, 12].some(lessThan10)) //true
    // console.log([12, 13, 15].some(lessThan10)) //false
}


// Q110
{
    const arr = ['a', 'b', 'c']
    // console.log(Object.getOwnPropertyNames(arr)) //[ '0', '1', '2', 'length' ]

    const obj = {'a': 1, 'b': 3, 'c': 5}
    // console.log(Object.getOwnPropertyNames(obj)) //[ 'a', 'b', 'c' ]
}


// Q111
{
    let o = {}
    Object.defineProperty(o, 'name', {
        value: 'taro',
        writable: false, //書き換え可能か
        configurable: false, //削除可能か
        enumerable: false //列強可能か
    });
    // console.log(o.name) //taro
    // o.name = 'hana'
    // console.log(o.name) //taro
    // console.log(Object.keys(o)) // [] 　not→['name']
    // delete(o.name)
    // console.log(o.name) //taro
}


// Q112
{
    // import * as math from 'math'
    // import {sum, pi} from 'math'
    // console.log(math.sum(1, 3))
    // console.log(math.pi)

    // https://qiita.com/s-yoshida/items/af23897e096e3e18e765
    // https://qiita.com/hagevvashi/items/8b4a7d3061bddd3b340e
}


// Q113
{
    const index = ['a', 'bb', 'ccc'].findIndex(x => x == 'ccc')
    // console.log(index) //2
    const objIndex = [{name: "aa"}, {name: "bb"}, {name: "cc"}].findIndex(x => x.name == "bb")
    // console.log(objIndex) //0
}


// Q114
{
    const r = ['A','B','C'].map(x => Array.of(x))
    // console.log(r) //[ [ 'A' ], [ 'B' ], [ 'C' ] ]
    const r2 = ['A','B','C'].map(x => [x])
    // console.log(r2) //[ [ 'A' ], [ 'B' ], [ 'C' ] ]
}


// Q115
{
 const r = ['a', 'b', 'c'].fill('target', 1, 3)
//  console.log(r) //[ 'a', 'target', 'target' ]
}


// Q116
{
    const r = [3, 0, 6, -1].find(x => x > 0)
    // console.log(r) //3

    const r2 = [3, 0, 6, -1].find(x => x < 0)
    // console.log(r2) //-1
}


// Q117
{
    function* idMaker(){
        let i = 0;
        while(true)
            yield i++;
    }

    const g = idMaker();
    // console.log(g.next().value); //0 ← { value: 0, done: false }
    // console.log(g.next().value); //1
    // console.log(g.next().value); //2
}


// Q118
{
 let s = new String('foo')
//  console.log(s.length); //3 → オブジェクトが持つプロパティにアクセス
 let s2 = 'foo'
//  console.log(s2.length); //3 → 文字列プリミティブをオブジェクトとしてアクセス。内部に一時的にラッパーオブジェクトを呼び、オブジェクトにアクセス。その後破棄。
 //プリミティブ値・・・文字列、数字、真偽値などtypeofの評価でobjectを返さないもの
}


// Q119
{
    //null → プロパティは設定しているものの、値の初期値として値が入っていないことを明示する際にnullを入れる。
    //undefined → 存在自体がない
}


// Q120
{
    let v = null;
    // console.log(typeof v) //object
    // console.log(v == undefined) //true
    // console.log(v === undefined) //false
    // console.log(v === null) //true
}


// Q121
{
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
    // 等価演算子は、2 つのオペランドが同じ型でないならばオペランドを変換して、それから厳密な比較を行います。
    // 両方のオペランドがオブジェクトならば、 JavaScript は内部参照を比較するので、オペランドがメモリ内の同じオブジェクトを参照するときに等しくなります。

    let o1 = {'key': 'value'}
    let o2 = {'key': 'value'}
    let o3 = o1
    // console.log(o1 == o2) //false
    // console.log(o1 == o3) //true
    // console.log('o1', o1, 'o2', o2, 'o3', o3) //o1 { key: 'value' } o2 { key: 'value' } o3 { key: 'value' }
    // o3.key = 'value2'
    // console.log(o1 == o3) //true
    // console.log('o1', o1, 'o2', o2, 'o3', o3) //o1 { key: 'value2' } o2 { key: 'value' } o3 { key: 'value2' }
}


// Q122
{
    // let fragment = document.createDocumentFragment();
    // for(let i=0; i<10; i++){
    //     let child = document.createElement('div')
    //     fragment.appendChild(child)
    // }

    // document.getElementById('parent').appendChild(fragment);

    // https://developer.mozilla.org/ja/docs/Web/API/Document/createDocumentFragment
    // https://developer.mozilla.org/ja/docs/Web/API/DocumentFragment
}


// Q123
{
    // XHTMLにscriptタグを記述する際のCDATAタグの書き方
    // <script>
    // <![CDATA[
    //    //something・・・ 
    // ]]>
    // </script>

    // h2タグ
    // &lt;h2&gt;

    // '
    // &quot;

    // &
    // &amp;
}


// Q124
{
    let dom = '&lt;h2&gt; This is an H2 &lt;/h2&gt;'
    let dom2 = dom.replace(/&(.*?);/g, (e)=>{
        switch(e){
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
        }
    })
    // console.log(dom2) //<h2> This is an H2 </h2>
}


// Q125
{
    let s = 'My name is Taro Suzuki and I am a researcher at ABC.';
    // console.log(s.match(/\ba\w*\b/g))
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions
}


// Q126
{
    const s = '<img src="sample.com">'
    const s2 = '<p>'

    const r = /<(?:\S+)(?:\s+.+)?>/ // :?でキャプチャしないようにできる
    // console.log(s.match(r))
}


// Q127
{
    let re = /apple*/g
    let s = 'bbappleccddappleee'

    // let array = re.exec(s)
    let array
    // console.log(re.exec(s))
    while( (array = re.exec(s)) !== null ){
        // console.log(array)
        let msg = `${array[0]} を見つけました。`
        msg += `次のマッチは ${re.lastIndex}からです`
        // console.log(msg)
    }
}


// Q128
{
    const s = 'washable reasonable accessible assemble answerable';
    // console.log(s.match(/\b\w+(?=able\b)/g))
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions#special-lookahead
}


// Q129
{
    const s = 'ケンジは昭和55年生まれの35歳であり、ケンジの母は昭和22年生まれの64歳である'
    // console.log(s.match(/\d+(?![年\d])/g))
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions#special-negated-look-ahead
}


// Q130
{
    const s = 'わたしの名前は「もりた」です。あだなは「もりけん」です';
    const re = /(「(.*?)」)/ig;
    // console.log(s.match(re))
}