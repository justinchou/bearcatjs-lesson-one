
**关于执行顺序与order的使用**

before早于around早于after, 但是无论哪一种advice, 都是order小的在order大的前面执行.


**关于advice的使用**

只允许 before, after, around 三种.

```js
// 非runtime 
// 一般是next(); 或者 next(null); 虽然可以传入异常err, 但是体验不是很好, 尽量不用next(err).
function before(next) {
    let $pointcut = "before:.*?XXX";
    // ...
    next(null);
}

// runtime情况, 一般情况参数与被切的方法参数列表一致, 因为用户调用时是按照被切函数调用的
// 如果参数是基础类型, 对参数的变动不会影响到被切函数, 如果是Object/Array会改变被切函数的参数值.
function beforeWithArgs(arg1, ..., next) {
    let $pointcut = "before:.*?XXX";
    let $runtime = true;
    // ... do sth with args list
    next(null);
}
```

调用顺序: caller -> aop:before -> target -> caller.cb

传值顺序:        -> aop:before
         caller -> target     -> caller.cb


```js
// 参数与被切的方法回调方法参数一致, 而且后面多一个next.
// 同样, 如果参数是基础类型, 在回调函数中对参数的操作不会影响到advice函数, 但是如果是Object/Array类型, advice函数中得到的值将是回调函数中运算操作之后的值.
function after(err, data1, ..., next) {
    let $pointcut = "after:.*?XXX";
    // runtime default is true when point cut is 'after'.
    // let $runtime = true;
    // ... with args list
    next();
}
```

调用顺序: caller -> target -> caller:cb -> aop:after

传值顺序: caller -> target -> caller:cb
                          -> aop:after

```js
// 虽然runtime可以为false, 不接收传给被切函数的参数, 但是这样就无法通过target[method](...)正常调用被切函数, 所以正式上线情况一般使用runtime
// 测试情况, 使用非runtime情况, 可以在around内进行mock值, 方便测试.
function around(target, method, args1, ..., next) {
    let $pointcut = "around:.*?XXX";
    let $runtime = true;
    // ... do before logic
    // handle args1 to args_1
    target[method](args_1, ..., function(err, data1, ...) {
        // ... do after logic
        // handle data1 to data_1
        next(err, data_1, ...);
    });
}
```

调用顺序: caller -> aop:around:before -> target -> aop:around:after -> caller:cb

传值顺序:        -> aop:around:before   -> aop:around:after
         caller -> target              -> caller:cb


**总结**

before 和 after 都允许有多个, 并且使用order来控制执行先后顺序, order越大执行越靠后.

around 一般只有一个, 如果有多个匹配, 则按照order最小的执行一次, 更大的order不再执行, 如果多个匹配的order也相同, 则执行最先被框架发现的方法.