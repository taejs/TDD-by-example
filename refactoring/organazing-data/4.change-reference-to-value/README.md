# 9.4 참조를 값으로 바꾸기
내부 객체의 속성을 갱신하는 방식이 극명하게 다름

참조 
```typescript
class Product {
  applyDiscount(arg) {
    this._price.amount -= arg;
  }  
}
```
내부 객체는 그대로 둔 채 그 객체의 속성만 갱신

값
```typescript
class Product {
  applyDiscount(arg) {
    this._price = new Money(this._price.amount - arg, this._price.currency);
  }  
}
```
새로운 속성을 담은 객체로 기존 내부 객체를 통째로 대체<br>
참조를 관리할 필요가 없어, 분산 시스템과 동시성 시스템에서 특히 유용

1. 후보 클래스가 불변인지, 혹은 불변이 될 수 있는지 확인한다.
2. 각각의 세터를 하나씩 제거한다.
3. 이 값 객체의 필드들을 사용하는 동치성 비교 메서드를 만든다.

# 9.5 값을 참조로 바꾸기

```typescript
let customer = new Customer(customerData);
```
```typescript
let customer = customerRepository.get(customerData.id);
```
데이터 구조 내부에 같은 값을 참조하는 레코드가 여러개 있는 경우, 해당 값을 모든 사용처에서 업데이트하기 위해서는 참조로 다루는 것이 좋다.

1. 같은 부류에 속하는 객체들을 보관할 저장소를 만든다.
2. 생성자에서 이 부류의 객체들 중 특정 객체를 정확히 찾아내는 방법이 있는지 확인한다.
3. 호스트 객체의 생성자들을 수정하여 필요한 객체를 이 저장소에서 찾도록 한다. 하나 수정할 때 마다 테스트한다.