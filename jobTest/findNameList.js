// 寻找指定name名称下的list
var arr = [{
  id:"1",
  name:"home",
  list:[
    {
      id:"11",
      name:"one",
      list:[
        {
          id:'111',
          name:'aa',
          list:[]
        }
      ]
    }
  ]
}]

function findList(arr, name) {
  var stack = []

  stack.push(...arr) 

  while(stack.length) {
    var item = stack.shift()
 
    if (item.name == name) {
      console.log('item.list', item.list)
      return item.list
    } 

    item.list && stack.push(...item.list)

  }
}


findList(arr, 'one')