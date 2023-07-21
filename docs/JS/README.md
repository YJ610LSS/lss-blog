## js

### 变量的声明

- 语法 1. let 变量名

- let 不允许多次声明一个变量

- 2.常量

- 当某个变量永远不会改变的时候，就可以使用 const 来声明，而不是 let。
- 规范和变量一样
- 常量不允许重新赋值,声明的时候必须赋值（初始化）
- 不需要重新赋值的数据使用 const 变量的赋 赋值 =
- 注意：是通过变量名来获得变量里面的数据
- 声明变量的时候直接完成赋值操作
- 不提倡声明多个变量， 可读性不好

### 数据类型

#### 1 基本数据类型

#### 2 数字类型 Number

加、减、乘、除、取余（求模）%
​ 求模% 取余数 开发中经常作为某个数字是否被整除

#### 3 字串符类型 string

- 通过单引号（ ''） 、双引号（ ""）或反引号( ` ) 包裹的数据都叫字符串 单双没有本质区别 推荐单引号使用

- 无论单引号或是双引号必须成对使用
- 单引号/双引号可以互相嵌套，但是不以自已嵌套自已（口诀：外双内单，或者外单内双）
- 必要时可以使用转义符 \，输出单引号或双引号
- 模板字符串
- `` (反引号)
- 内容拼接变量时，用 ${ } 包住变量

#### 4 布尔类型 boolean

两个固定的值 true 和 false，表示肯定的数据用 true（真），表示否定的数据用 false（假）。

#### 5 未定义类型 undefined

特殊类型 只有一个值 undefined
​ 工作中用来检测数据是否传送过来

#### 6 空类型 null

undefined 表示没有赋值
​ null 表示赋值了，但是内容为空

#### 7 引用数据类型

object 对象
​ 检测数据类型
​ 通过 typeof 关键字检测
​ 作为运算符： typeof x （常用的写法）
​ 类型转换
​ 隐式

    		+ 号两边只要有一个是字符串，都会把另外一个转成字符串
    		除了+以外的算术运算符 比如 - * / 等都会把数据转成数字类型
    		+号作为正号解析可以转换成数字型
     任何数据和字符串相加结果都是字符串
    	显示转换
    		数字
    			parseFloat(数据) 可以保留小数
    			parseInt(数据)
     只保留整数
    			Number(数据)
    		转换为字符型
    			String(数据)
    			变量.toString(进制)

### 数组

- 元素：数组中每一个数据

- 索引：是元素对应的编号 编号从 0 开始

- 长度 length 就是元素的长度

- 数组的操作

- 查 arr[i]

- 改 arr[i] =新的赋值

- 增

- arr.push 往数组最后添加一个或者多个元素 返回新数组的长度

- arr.unshift 往数组最前面添加一个或者多个元素 返回新数组的长度

- arr.splice(2,0,'add') 在数组索引为 2 的前面插入 add 元素

- 删

- arr.pop() 删除的是数组中的最后一个元素 返回的是被删除的这个元素

- arr.shift() 删除的是数组中的最后一个元素 返回的是被删除的这个元素

- arr.splice(1,1) 删除的是 索引为 1 的元素 删除 1 个

- 遍历数组

- 数组的中每一项是 数组名[i]

- 数组的其余方法:

  map(), filter(), find(), reduce(), includes(), join(), reverse(), indexOf(), some(), every()这些方法都是些比较常用的方法

### 字符串方法

```js
const str = "12345";
// 截取字符串方法 slice(从第几位开始截取,到第几位前结束)
console.log("str.slice(1,4) ===> ", str.slice(1, 4)); //234

// 该方法对数组用法一样
const arr = [1, 2, 3, 4, 5];
console.log("arr.slice(1,4) ===> ", arr.slice(1, 4)); //[2, 3, 4]

// 判断字符串是否是当前值开始或当前值结束
console.log("str.startsWith(1) ===> ", str.startsWith(1)); //true
console.log("str.endsWith(5) ===> ", str.endsWith(5)); //true

// 检索是否包含此字符
console.log("str.indexOf(1) ===> ", str.indexOf(1)); //0  返回的是索引,没有则返回-1
console.log("str.includes(3 ===> ", str.includes(3)); //true  返回的是布尔值

// 字符串截取为数组
const str1 = "123-456-789";
str1.split("");
console.log("str1.split() ===> ", str1.split("-")); //['123', '456', '789']
```

### 对象

- 访问对象的值

- obj.属性名
- 对象名.['属性名']
- 查
- 对象名.属性名
- 改
- 对象名.属性名 = 重新赋的值
- 增
- 对象名. (增加的属性名)= 增加属性的值
- 删
- deleter 对象名.属性名

- 遍历对象

- for in
- for（let i in obj）{
- i 是键 对应就是 name age sing
- obj[i] 是值 对应就是 'zhangsan' 18 function
- k 在这里是变量
- obj[i] === obj.name
- obj.age
- obj.sing
- }
- 遍历数组 for of
- for （let [i,e] of arr.entries()）{
- i 就是 arr 数组的索引
- e arr 数组中的每一个元素
- }
- 遍历数组对象
- let arr = [{},{},{}]
- for(let i=0;i<arr.length;i++){
- arr[i] 表示的是数组 arr 里面的每一条对象
- arr[i].key 表示的是每一条对象里面对应 key 的属性值
- }

### js 内置对象

- Math 对象
- Math.floor() 向下取整
- Math.ceil()向上取整
- Math.max 找最大值
- Math.min 找最小值
- Math.random()获取 0-1 的随机数 可以取到 0
- 获取 n-m 的随机数
- let num =Math.floor(Math.random()\*(m-n+1))+n
- 获取 0-数组长度的随机数
- let random =Math.floor(Math.random()\*arr.length)

### 作用域

- 作用域的作用 解决变量命名冲突

- 全局作用域

- 整个 script 标签中声明的变量 在函数内 没有关键字声明的变量

- 局部作用域

- 函数作用域

- 函数内用关键字声明的变量 形参

- 在函数内声明的变量就是函数作用域

- 只能在函数内部访问 外部无法直接访问

- 块级作用域

- 在大括号内声明的变量就是块级作用域

- let const 声明的变量会产生块作用域

- name 特殊：因为全局都是基于 window，而刚好 window 下面有一个叫 name 的属性而已，打印出来刚好是空

  ```js
  //函数作用域
  function fun() {
    const a = 1; //函数作用域,函数外部不能访问此变量
  }
  console.log(a); //报错:a is not defined

  // 块级作用域
  function count() {
    {
      function fun() {
        counter++;
      }
      let counter = 0;
      fun();
      console.log(counter); // 输出1
    }
    // fun只在块级作用域中存在，无法访问
    fun(); // 抛出ReferenceError
  }
  ```

### 作用域链

- 当没有你需要的这个位置 他的查询机制就是作用域链

- 自已有 用自已的
- 如果没有 向上一级查询 直至全局
- JS 垃圾回收机制 GC
- 需要的数据 变量需要指向数据 垃圾回收机制 把没有用的数据干掉 提供浏览器性能 浏览器在做
- 引用计数---清除数据（老师）----主要是看数据（老师）
- 标记清除---清除数据（老师）----主要是看变量（学生）
- 生命周期：
- 全局：打开浏览器生、关闭浏览器死（基本一直都在）
- 局部：运行函数生，关闭函数死 比如函数执行完
- 引用计数：垃圾回收机制只看 数据，数据有变量引入则说明数据有用，如果没有变量引入则说数据没用，就回收
- 如果数据之间相互吸引，也会导致数据被标记，让浏览器误认为他们都拥有则保留
- 总结：
- 垃圾回收机制：提高浏览器的性能
- 浏览器在做事：
- 引用计数---清除数据---关注数据
- 标记清除---清除数据---关注变量
- 内层泄漏：数据太多，已经溢出内存了

### 闭包

- 内层函数 + 外层函数的变量

- 外层也可以使用内部的变量 跨作用于访问变量 延长了作用域的范围

- 场景 封装框架

- 优点： 随时提供了私有的数据 私有的方法

- 缺点 ：大量的闭包会导致内存泄露

- 变量提升

- 一般都不会在使用 var 声明变量 因为 var 存在提升问题

- 1. 提升 提升关键字 var 和变量名，但是不提升赋值！！！

     ```js
     function fun() {
       let money = 0;
       // 闭包  里层函数调用外层函数的变量  延申块级作用域
       // 返回一个对象,里面有一些方法
       return {
         // 查询变量方法
         get() {
           console.log("你的money为" + money + "元");
         },
         // 修改变量方法 增加变量值
         set(num) {
           money += num;
         },
         // 修改变量方法 减少变量值
         no(num) {
           money -= num;
         },
       };
     }
     // 此时wc 为一个对象  因为fun函数返回的是一个对象
     // console.log(wc)  闭包可以让函数里面的变量在外面被访问得到
     const wc = fun();
     ```

2.  执行

### 函数进阶

函数提升
​ 1. 提升 提升函数体，但是不调用、不执行！！！！

2. 执行

   函数参数

#### 动态参数 灵活

arguments 普通函数内部 内置了一个专门收集所有形参的变量（集合）
​ 是一个 伪数组 没有真实数据的方法 return 把决定权交给外面

#### 剩余参数 更加灵活 且是真数组

- 用... 加变量 ...是固定写法 变量参数是自定义的

- 功能相当于 arguments 都是收集所有参数 区别 是真数组 可以用真数组的方法
- 剩余参数 可以除前面有变量的参数 获取后面所有的参数值
- 剩余参数法，获取剩下的参数，前面的参数可以一一对应，那么剩下的所有都被 ...变量接收 ，使用的时候不带...

### 拓展运算符

在一般情况下,把数组拆分开，变成一个个零散的，以逗号为分割的元素
​ 其他功能 1 合并数据 2 转为真数组 ...arguments

### 箭头函数

- 用来简化代码的

- 1 当参数有且只有一个的时候 可以省略前面的小括号
- 2 当函数执行体有且只有一句话的时候 可以省略后面的大括号 也可以省略 return
- 箭头函数没有 this 如果箭头函数也出现了 this this 是外层的

### 解构赋值

- 数组解构
- 数组 有顺序的集合 解构 将数组中的数据 释放出来 像普通变量一样使用
- 是将数组的单元值快速批量赋值给一系列变量的简洁语法
- Js 中立即执行函数 和数组解构 需要加分号
- 防止有 undefined 传递单元值的情况，可以设置默认值： 对象解构
- 对象解构是将对象属性和方法快速批量赋值给一系列变量的简洁语法
- 无序的数据集合 在解构的时候按照属性名 对象解构是没有顺序的 如果需要解构 需要把名字搞清楚 指定名字
- 多级对象解构
  遍历数组
- forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数

1 new 在内存中开辟一个空间
2 把属性都放在空对象中
3 把 this 的指向 指向到刚刚开辟的空间中
4 将已经赋值的空间返回给外面的实例
![图片](/jsimg/1.png)

实例成员 静态成员

1.  实例成员 this 指向 实例对象 也就是 new 出来的 实例在调用方法
2.  构造函数的属性和方法称为静态成员 静态成员 this 指向 构造函数本身

### 内置构造函数

#### Object

基本数据类型字符串、数值、布尔、undefined、null
引用数据类型 Object，Array，RegExp，Date 等
Object 是内置的构造函数，用于创建普通对象。

三个常用的静态方法 静态方法就是只有构造函数 Object 可以调用的

```js
//作用: 0bject.keys 静态方法获取对象中所有属性(键)语法:
const o = [ name: 佩奇 ，age: 6 // 获得对象的所有键，并且返回是一个数组const arr = Object.keys(oconsole.log(arr) // [ 'name ', 'age ']
注意: 返回的是一个数组
```

```js
//作用: 0bject.values 静态方法获取对象中所有属性值语法:
const o = [ name: 佩奇 ，age: 6 ]// 获得对象的所有值，并且返回是一个数组const arr = Object.values(o)console.log(arr) // [ 佩奇'，6]
couzoTe
注意: 返回的是一个数组
```

Object.entries(obj) 拿到对象中['键'，'值']
合并对象

```js
//作用: 0bject. assign语法:
// 拷贝对象 把 o  obj
const o = [ name: 佩奇 ，age: 6 }
const obj = {}
Object.assign(obj, o)
console.log(obj) // [name:佩奇，age: 61
```

#### Array

Array 是内置的构造函数，用于创建数组
创建数组建议使用字面量创建，不用 Array 构造函数创建

| 方法    | 作用     | 说明                                                         |
| ------- | -------- | ------------------------------------------------------------ |
| forEach | 遍历数组 | 不返回，用于不改变值，经常用于查找打印输出值                 |
| filter  | 过滤数组 | 筛选数组元素，并生成新数组                                   |
| map     | 迭代数组 | 返回新数组，新数组里面的元素是处理之后的值，经常用于处理数据 |
| reduce  | 累计器   | 返回函数累计处理的结果，经常用于求和等                       |

reduce 返回函数累计处理的结果，经常用于求和等 起始值 可以省略 如给写作为第一次累计的起始值

- Array.from 伪数组转真数组 并且处理每一项返回
- 判断是否为数组 Array.isArray(5)
- map 遍历 处理数据
- filter 遍历 筛选 过滤 把不符合的去掉
- some 遍历 判断数组是否包含
- every 遍历 判断数组是否全是

#### String

- 字符串拼接 Object.values(spec).join('/')|
- 把字符串切割数组 split
- 数组截取 开始截取索引能取到 技术截取索引取不到 splice,slice
- 字符串截取
- substring,substr,slice
- 字符串截取 substring（开始的索引 ，结束的索引）
- startsWith 判断是不是某个字符开头 返回布尔值
- includes 判断某个字符是不是包含在字符里面 区分大小写
- indexOf 返回索引 includes 返回布尔值 检测是否包含

### 补充

```js
使用 indexOf()
以下例子使用 indexof() 方法确定多个值在数组中的位置
const array =[2，9，9];
array.index0f(2);
array.index0f(7);
//@
//-1
index0f(9，2); // 2array.
array.index0f(2，-1); // -1
array.index0f(2，-3); // 0
```

### Es6 模块化与 Promise

```js
//默认导出
export default {
    b, fun
}
// 默认导入  整体  abc为自定义名   导入自定义文件要带后缀  不能解构
import abc from './默认导出.js'


// 按需导出导入可以解构
 let wc = 666
 export{
 wc
}
// 按需导入可以解构  只导入需要的
import { wc } from './按需导出.js'

//直接导入
- 如果只想单纯地执行某个模块中的代码，并不需要得到模块中向外共享的成员。此时，可以直接导入并执行模 块代码  import ('路径')
- 按需导入和默认导入可以一起使用     import www, { wc } from './按需默认导出.js'
```

### Promise

- 解决回调地狱问题,使代码可读性更强,更易维护

- 三种状态 pending fulfilled rejected

  ```js
  const myPromise = new Promise((resolve, reject) => {
    // 异步操作
    // 如果操作成功，调用 resolve 并传递结果
    // 如果操作失败，调用 reject 并传递错误信息
  });

  myPromise
    .then((result) => {
      // 在此处理异步操作成功的结果
    })
    .catch((error) => {
      // 在此处理异步操作失败的原因
    });

  //Promise静态方法
  const promise1 = Promise.resolve("Hello");
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "World");
  });

  //当所有promise实例都返回成功状态时  Promise.all才会返回由一个数组组成的结果   有一个返回错误就返回错误
  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // 输出：["Hello", 42, "World"]
  });

  // 等待任意一个promise对象完成,不论错误与否
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value); // 输出：Promise 1
  });
  ```

### async 和 await

- 异步解决方案语法糖,以同步的方式运行异步代码,可以控制异步代码执行顺序

  ```js
  // 异步函数
  async function fetchData() {
    try {
      // 使用 await 关键字等待异步操作的结果
      const res = await fetch("https://api.example.com/data"); // 假设这是一个异步请求
      // 处理响应数据
      console.log(res);
    } catch (error) {
      // 捕获和处理错误
      console.error("Error:", error);
    }
  }

  // 调用异步函数
  fetchData();
  ```

### 同步与异步

- 先执行同步栈里的代码,同步都放在主执行栈里执行,然后碰到异步代码,把异步放到宿主环境里,,宿主环境里要执行的代码会被放到异步任务栈里排队执行,等同步代码全部执行完毕后,主执行栈会一直查看异步栈有没有代码要执行,有的话会把要执行的异步代码放到主执行栈里执行,就这样会一直循环,一直查看异步栈有没有要执行的代码,这也叫事件循环

### 宏任务和微任务

- js 里 ajax 请求,定时器,文件操纵等是宏任务,promise 里的.then 是微任务

### 原型

- 只要是构造函数 就会有 prototype 的对象 原型对象 共享对象 共享区域

- 提供 new 出来的实例对象 本身只携带构造函数内部的内容
- 如果调用了本身没有的对象 都会去原型中查找 并使用
- 造函数和原型里面的 this 指向实例化的对象
- 写在构造含函数身上的方法是独立的 不共享的浪费内存 每一个构造函数自带原型对象 prototype
- 原型的好处 场景 可以为函数的实例对象 添加的方法

构造器
![图片](/jsimg/1.png)
constructor  
 添加一个 constructor 指向原来的构造函数 指向该原型对象的构造函数

```js
function star(name){
    this.name = name
}
Star.prototype = {
    sing: function () { console.log('唱歌) }dance: function () [ console.log("跳舞')
 }
console.log(star.prototype.constructor) // 折 Object
```

#### 对象原型

1.对象都会有一个属性 **proto** 指向构造函数的 prototype 原型对象，之所以我们对象可以使用构造函数 prototype 原型对象的属性和方法，就是因为对象有 **proto** 原型的存在。

2. **proto** 是 JS 非标准属性 [[prototype]]和**proto**意义相同
   用来表明当前实例对象指向哪个原型对象 prototype
   **proto**对象原型里面也有一个 constructor 属性，指向创建该实例对象的构造函数

#### 原型继承

封装-抽取公共部分

```js
// 人类
const People = {
head:
eyes :2
legs: 2,
say: function(){}
eat:function (){ }
}
// 男人
function Man() {}
// 女人
function Woman() {
this.baby = function (){}
}

function Man() {}
// 把公共的属性和方法给原型，这样就可以共享了
Man.prototype = People// 注意让原型里面的constructor从新指回Man龙自己的爸爸
Man.prototype.constructor = Manconst pink = new Man()
console.log(pink)
```

![图片](/jsimg/4.png)

#### 原型链

找父级的过程 自已没有的东西 找父级 如果父级没有 在找上一级

```js
function Person(){
let yj = new Person()
console.log(Person.prototype);
console.log(yj.__proto_-__proto_-__proto_)
console.log(Person.prototype._ proto == bject.prototype)
console.log(object.prototype);
}
```

### Class

![图片](/jsimg/2.png)

![图片](/jsimg/3.png)

### 递归

```js
function addProperty(obj, propertyName, propertyValue) {
  // 如果对象存在 children 属性，并且第一个元素是数组
  if (obj.children && Array.isArray(obj.children[0])) {
    // 获取 children 的第一个元素
    var firstChild = obj.children[0][0];

    // 如果第一个元素仍然具有 children 属性
    if (firstChild.children) {
      // 递归调用 addProperty 函数，将属性添加到第一个元素中
      addProperty(firstChild, propertyName, propertyValue);
    } else {
      // 否则，往第一个元素中添加属性
      firstChild[propertyName] = propertyValue;
    }
  }
}
addProperty(obj) {
      if (obj.children && Array.isArray(obj.children) && obj.name!=="神南产业发展有限公司") {
        var firstChild = obj.children[0];
        if (firstChild.children) {
          this.addProperty(firstChild);
        } else {
          this.$set(firstChild, "showImage", true);
          this.showImagea = firstChild
        }
      }else{
        this.showImagea =obj
        this.$set(obj, "showImage", true);
      }
    }
```

### 深浅拷贝

#### 1.浅拷贝

简单数据类型
![图片](/jsimg/5.png)
复杂数据类型 真正数据放在堆中 栈里面放的是地址 是一个指向堆数据的地址

![图片](/jsimg/6.png)
浅拷贝 只拷贝了地址 相当于 cv 缺陷 拷贝了地址之后 如果修改某一个数据 那么会影响另一个数据 数组和对象都是引用类型 复杂数据类型 都存储在堆中

#### 2.深拷贝

拷贝的是对象 不是地址
通过递归实现深拷贝  
 1 .函数递归 自已调用自已
![图片](/jsimg/7.png)
![图片](/jsimg/8.png)

![图片](/jsimg/9.png)
2.js 库 lodash 插件里面 cloneDeep 内部实现深拷贝

![图片](/jsimg/10.png) 3.通过 JSON.stringify 实现 字符串转换
![图片](/jsimg/11.png)

### 异常处理

1.throw 抛异常

- ​ throw 抛出异常信息，程序也会终止执行
- ​ throw 后面跟的是错误提示信息
- ​ Error 对象配合 throw 使用，能够设置更详细的错误信息

  2.try/catch 捕获异常

- ​ try...catch 用于捕获错误信息

- ​ 将预估可能发生错误的代码写在 try 代码段中

- ​ 如果 try 代码段中出现错误后 会执行 catch 代码段并截获到错误信息

- ​ finally 不管是否有错误 都会执行

  ```js
  // 断点
  //debugger
  let data = null;
  // 抛出错误
  try {
    // 里面写可能报错的代码
    // 没有报错则正常指行
    console.log(data.toString());
  } catch (err) {
    console.log("err ===> ", err); //错误的提示信息
    // 模拟浏览器报错,抛出报错信息  报错后面的代码不会执行
    throw err.message;
    console.log(1111); //不会执行
  } finally {
    console.log("无论报不报错,都会执行");
  }
  ```

  ### 改变 this

  ​ call()
  ​ fun.call(thisArg, arg1, arg2, ...)
  ​ apply()
  ​ fun.apply(thisArg, [argsArray])
  ​ bind()
  ​ fun.bind(thisArg, arg1, arg2, ...)
  ​ bind() 方法不会调用函数。但是能改变函数内部 this 指向

  ```js
  let obj = {
    name: "DJT",
    fun: function () {
      console.log(`我是obj里的方法${this.name}`);
    },
  };
  let obj2 = {
    name: "WC",
    fun2: function () {
      console.log(this.name);
    },
  };
  // 被借用的方法.call(调用者,参数,参数,参数)
  // 可以借用别人的方法,改变this
  obj.fun.call(obj2);
  function fun() {
    // 借用数组的方法,向伪数组里添加元素
    [].push.call(arguments, 100);
    console.log("arguments ===> ", arguments);
  }
  fun(1, 2, 3);

  //call和apply 都是调用函数，都能改变this指向   参数不一样，apply传递的参数必须是数组
  const arr = [1, 2, 3, 4, 5];
  let sum = Math.max(...arr);
  // 借用求最大值的方法给obj,并且调用此函数
  let obj = {}; //这个obj是随便定的,只是把this给它
  Math.max.apply(obj, arr);
  console.log(" Math.max.apply(obj, arr) ===> ", Math.max.apply(obj, arr)); //5

  // bind,不会调用函数,但是可以改变this的指向
  function fun3() {
    console.log("我是fun3函数中的this" + this.name);
  }
  let a = {
    name: "DJT",
  };
  // 使用bind克隆函数,然后创建新函数  复制fun3的this指向a
  // 就是把别人的方法保存下来,随调随用
  let bind = fun3.bind(a);
  // 调用新函数
  bind();

  // 改变定时器的this指向
  let fun = setInterval(
    function () {
      console.log(this.name);
    }.bind(obj),
    1000
  );
  //备注:箭头函数没有this,不能改变箭头函数的this
  ```

  ### 性能优化

  #### 节流 throttle

  ​ 开发使用场景-小米轮播图点击效果 鼠标移动 页面尺寸缩放 resize 滚动条滚动 就可以加节流
  ​ 指连续触发事件但是在 n 秒中只执行一次函数

  ```js
  // 自己封装
  let i = 0;
  function move() {
    box.innerHTML = ++i;
  }
  let my = {
    // 移动后的时间减移动前的时间   才执行函数,节流思路
    fun: function (callback, time) {
      // 鼠标移入的起始时间
      let t = Date.now();
      //  console.log('调用一次,并返回一个函数');
      return function () {
        //console.log('这里频繁触发 ,可以不断做判断');记录鼠标移动后最新的时间
        let now = Date.now();
        // 当鼠标移动的最新时间  减去  鼠标刚移入的时间   大于我传进去的参数才执行
        if (now - t >= time) {
          // 判断我传入的参数是不是回调函数  并且调用这个回调函数
          typeof callback === "function" && callback();
          // 调用完函数后把最新时间赋值给鼠标移入的时间
          t = now;
        }
      };
    },
  };
  //  my.fun(move, 200)为调用函数,当调用函数时,这个函数会有一个返回值,返回值刚好是个函数,所以可以当事件程序用
  box.addEventListener("mousemove", my.fun(move, 200));
  ```

  #### 防抖 debounce

  ​ 开发场景 -搜索框输入 设定每次输入完毕 n 秒后发送请求 如果期间输入 则重新计算时间
  ​ 指触发事件后在 n 秒内函数只执行一次 如果在 n 秒内又触发了事件 则会重新计算函数执行时间

  ```js
  // 自己封装
  let my = {
    debounce(callback, time) {
      let timer = null;
      return function () {
        // 当鼠标移动就清除定时器   如果开启了定时器就关闭
        if (timer) clearTimeout(timer);
        // 鼠标移入后等待1s执行
        timer = setTimeout(callback, time);
      };
    },
  };
  // 调用防抖函数
  box.addEventListener("mousemove", my.debounce(mouseMove, 1000));
  ```
