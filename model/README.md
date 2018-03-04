model 使用的一些注意事项
---

1. constraint 的加载要优先于 引用constraint 的 model

一般情况定义 constraint 文件夹 和 model 文件夹分别存放.

2. 无法嵌套对象

* Character {id, name, level}
* Game {id, name, server, [Character]}
* User {id, name, gender, age, location, addr, Game}

在一个房间大厅内, User - Game 是一对一的, Game - Character 是一对多的.

直接通过上面的嵌套是不行的, 需要进行如下拆解:

Room {User, Game, [Character]}

3. 更复杂的嵌套对象的解决

* Monster {id, name, pos, level, hp}
* Map {id, name, location, [Monster]}
* Character {id, name, level}
* Game {id, name, server, Character, [Map]}
* User {id, name, gender, age, location, addr, Game}

进入游戏后, User - Game 是一对一的, Game - Character 是一对一的, Game - Map 是一对多的, Map - Monster 是一对多的.

Room {User, Game, Character, [Map]}

Maps {Map, [Monster]}

当玩家选择地图的时候, 从Room中操作, 当选定进入后, 从Maps中选定怪物.

4. 上面的游戏流程

Room {User, Game, [Character]}

-> 选定角色进入游戏

Room {User, Game, Character, [Map]}

-> 在不同地图中行走

Room {User, Game, Character, Map, [Character]}

