---
title: 测试IOC容器和DI, 附带使用占位符
date: 2018-02-20 21:01:20
category:
- Bearcat
tags:
- Bearcat
- NodeJS
---

## 目录

[容器的实例化配置](#容器的实例化配置)
[依赖注入的两种方式](#依赖注入的两种方式)
[占位符的应用](#占位符的应用)

<!--more-->

## 容器的实例化配置

容器实例化配置分为几个部分:

1. context.json进行上下文的配置, 其中包括scan目录最为重要.
2. app.js中的代码加载环境变量; 通过环境变量中scan目录, 扫描代码; 然后进行相应的实例化, 创建容器; 在创建好的容器中, 编写相应的代码逻辑.

### 参考文档

1. [容器概览](http://bearcatjs.cn/guide/dependency-injection.html#容器概览)
2. [初始化容器](http://bearcatjs.cn/guide/dependency-injection.html#初始化容器)
3. [如何使用容器](http://bearcatjs.cn/guide/dependency-injection.html#如何使用容器)



## 依赖注入的两种方式

### 基于构造函数的依赖注入

首先测试一下 [基于构造函数的依赖注入](http://bearcatjs.cn/guide/dependency-injection.html#基于构造函数的依赖注入)

代码在 constructor-base 目录下, 修改context.json里面的scan目录之后, 通过运行app.js开启测试.

```json
{
  "name": "room-manager",
  "scan": "constructor-base",
  "//scan": "object-base",
  "namespace": "di"
}
```


### 基于对象属性的依赖注入

然后测试一下 [基于对象属性的依赖注入](http://bearcatjs.cn/guide/dependency-injection.html#基于对象属性的依赖注入)

代码在 object-base 目录下, 修改context.json里面的scan目录之后, 通过运行app.js开启测试.

```json
{
  "name": "room-manager",
  "//scan": "constructor-base",
  "scan": "object-base",
  "namespace": "di"
}
```

### 两种注入方法的整理说明

基于构造函数依赖注入 - args配置

通过参数中 $ 符号注入, args ref注入, args type注入

    // app/Car.js : 参数中 $ 符号注入, 普通的value以参数形式传入
    function Car($engine, licence) {
        this.$id = "car";
        this.$scope = "prototype";
    
        this.engine = $engine;
        this.licence = licence;
    }
    module.exports = Car;
    
    // app/Moto.js : args ref注入, args type注入
    function Moto(engine, licence) {
        this.engine = engine;
        this.licence = licence;
    }
    module.exports = {
        "id": "moto",
        "func": Moto,
        "args": [{
            "name": "engine",
            "ref": "engine"
        }, {
            "name": "licence",
            "type": "String"
        }]
    };

    // 调用
    let car = Bearcat.getBean('car', "辽A863273");
    let moto = Bearcat.getBean('moto', "辽BMW1100");
    

基于属性依赖注入 - props配置

通过带有 $ 的变量名注入, props ref注入, props value注入

    // app/Bus.js : 带有 $ 的变量名注入
    function Bus() {
        this.$id = "bus";
        this.$scope = "prototype";
    
        this.$engine = null;
        this.licence = "${default.licence}";
    }
    module.exports = Bus;
    
    // config/dev/bus.json
    {"default.licence":"军V100009"}
    
    // app/Truck.js : props ref注入, props value注入
    function Truck() {
        this.engine = null;
        this.licence = null;
    }
    module.exports = {
        "id": "truck",
        "func": Truck,
        "props": [{
            "name": "engine",
            "ref": "engine"
        }, {
            "name": "licence",
            "value": "${default.licence}"
        }]
    };
    
    // config/dev/truck.json
    {"default.licence":"警B184312"}
    
    // 调用
    let bus = Bearcat.getBean('bus');
    let truck = Bearcat.getBean('truck');


### 关于两种方法

两种方法都可以注入bean对象, 注入value属性, 注入variable属性.

1. 但是bean对象的注入, 推荐使用基于构造函数的方式, 这样属性名可以更灵活, 而无需必须是 `$+依赖的对象id`
2. 注入value属性, 推荐使用基于对象属性的方式, 使用不同环境下的配置文件取值, 这样无需在context.json中定义beans部分.
3. 不推荐使用注入variable属性的方法, 这样必须在需要更改传入值的时候, 改动调用函数所在的文件.

这样, 除了魔法语法糖配置属性使用$前缀, 其他所有正常的属性均无$前缀.

```js
// $engine 基于构造函数, 这样this.engine可以命名成其他变量名, 而无需必须是 this.$engine
// wheels 基于对象属性, 也就是基于占位符, 无需更改本文件代码, 也无需更改调用处文件的代码(基于variable必须更改调用处的代码)
let Car = function Car($engine) {
    // 魔法语法糖配置, 带有$前缀
    this.$id = "car";
    this.$scope = "prototype";
    
    // 正常属性, 均没有$前缀
    this.engine = $engine;
    this.wheels = "${default.wheels}";
};
```




## 占位符的应用

### 占位符的路径

在启动脚本所在目录当成是 ~ 目录, 那么配置文件路径为 ~/config

配置文件路径下的文件夹均代表不同的环境, dev(测试服), prod(正式服), test(本地测试)... 然后占位符文件就放在不同的环境目录下.

就是调用占位符的类唯一id(即$id值)即为占位符文件的名字, 例如 Car.js 中使用的占位符, 由于Car对象的$id为 'car' , 所以占位符文件名为 'car.json'.

### 使用占位符

占位符配置好后, 根据不同环境启动脚本, 即可调用不同环境下的占位符.

例如在 `~/config/prod/car.json` 中的占位符, 需要使用启动脚本来指定环境才能正常调用

```bash
node app.js env=prod
```


### 参考文档

1. [占位符概览](http://bearcatjs.cn/guide/consistent-configuration.html#概览)
2. [如何切换环境](http://bearcatjs.cn/guide/consistent-configuration.html#切换环境)



