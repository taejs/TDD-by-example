https://martinfowler.com/bliki/ValueObject.html
value objects should be immutable

객체의 identity가 아닌 equality를 구현해주는 것

마틴파울러옹은 기하학적 모양들, 숫자와 함께 그단위가 따라다니는 단위값, 기호대수학 등 대수학 같아보이는 상황이라면 값 객체를 사용
코드 읽기와 디버깅을 쉽게 해준다.

https://medium.com/@nicolopigna/value-objects-like-a-pro-f1bfc1548c72
값 객체 체크리스트
-[] it is immutable and no setters defined;
-[] it reflects the semantics of the domain;
-[] it shows how information flows and is transformed during runtime;
-[] it hasn’t default or useless getter methods;
-[] it can be compared to other Value Objects of the same class by reading private properties directly.
