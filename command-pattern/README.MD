[Command Pattern in Depth](https://blogs.oracle.com/javamagazine/the-command-pattern-in-depth)
요청, 메시지가 어떤 형태로든 감싸져서 보내지는 패턴
호출자체를 나타내기 위한 객체를 만든다.

복잡한 계산에 대한 기능의 책임을 각 객체에 위임함으로써 객체간 디커플링

- Java의 runnable

https://en.wikipedia.org/wiki/Command_pattern


https://dev.to/shikaan/design-patterns-in-web-development---1-command-2jf



## COMMAND vs MEMENTO
[Multilevel Undo and Redo Implementation in C# - Part II (Using Command Pattern)](https://www.codeproject.com/Articles/33384/Multilevel-Undo-and-Redo-Implementation-in-Cshar-2)
[Undo/Redo Implementation of the Sample Application Using Memento Pattern](https://www.codeproject.com/Articles/33397/Multilevel-Undo-and-Redo-Implementation-in-Csharp)

command : invoker(excutor)는 실행만 할뿐
undo/redo를 구현한다면 Command에서 undo, redo를 구현 

memento : state를 스냅샷 형식으로 관리 / memento는 상태만 가지고 있을뿐 / originator가 상태를 제공 
undo/redo에 맞춤형 디자인 패턴
구현한다면 originator에서 해당 스냅샷으로 이동하도록 구현

https://eyegochild.medium.com/design-pattern-memento-pattern-a21db11bb790

## 이벤트 리스너
https://sourcemaking.com/design_patterns/command

## redux
https://medium.com/ableneo/decoupling-software-design-patterns-commonly-used-with-react-71ac2cac548b

https://redux.js.org/recipes/implementing-undo-history
redux의 time travel 기능
Command object “redux action” encapsulate a parameterized request as an object. Most well-known use of the command pattern is to change things using a command object, from where it is a small step to undo them. Redux dev tools use this pattern for time travel feature.


https://abhiaiyer.medium.com/the-command-pattern-c51292e22ea7
Dispatch = Executor
The Action = The Command
The Store = The Receiver


## function의 apply?