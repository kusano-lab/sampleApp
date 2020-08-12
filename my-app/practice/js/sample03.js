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