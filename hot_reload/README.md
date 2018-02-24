---
title: 使用Bearcat进行代码热更新
date: 2018-02-24 21:20:18
category:
- Bearcat
tags:
- Bearcat
- NodeJS
---

今天对Bearcat进行了代码热更新的操作, 根据文档说明, 说有在热更新目录下的对象的prototype方法都可以进行更新, 但是无法更新私有属性.

## 使用时注意的地方

### 必须使用module.exports导出模块

测试的时候, 模块导出使用的是

    Bearcat.module(ChatServer, typeof module !== 'undefined' ? module : {});
    
发现虽然可以触发热更新事件, 但是热更新的内容是没有更新上去的, 只能使用

    module.exports = ChatServer;
    
导出模块的时候, 才能实现热更新.

### BEARCAT_HPATH路径使用Path.join解析

    "BEARCAT_HPATH": Path.join(__dirname, '/hot')

以前加载 `context.json` 的时候, 就需要使用 `require.resolve` 进行解析, 但是 `require.resolve` 只能解析存在的文件, 无法解析目录所以这里使用 `Path.join` 进行解析.

其实以前的 `require.resolve` 完全可以使用 `Path.join` 替代.

<!--more-->


## 瞎搞一下测试

首先看一下, context 中是 scan 了两个目录 `app` 和 `hot` 的, 并且在 app.js 里面设置了 `hot` 为热更新目录.

那么就意味着, 在hot里面的文件是允许热更新的.

### 更改Hot目录下文件

运行起来之后, 进入hot目录, 打开或者关闭文件内 "// Test Point" 处的代码, 观察热更新执行后的日志变动.

### 更改App目录下文件

同样的进入app目录, 打开或者关闭文件内 "// Test Point" 处的代码, 观察更新是否执行.

### 玩儿点刺激的

程序运行时, 将App目录下文件拷贝到Hot目录下, 观察是否执行了热更新.

打开关闭拷贝过来的文件内的 "// Test Point" 处的代码, 观察是否热更新有效.

将代码拷贝回App目录, 再重复该操作, 观察是否热更新仍然游戏.
