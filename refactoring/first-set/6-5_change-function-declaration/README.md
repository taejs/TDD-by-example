# 6.5 함수 선언 바꾸기 

- **함수의 이름**<br>
꿀팁: 주석을 이용해 목적을 설명하다 보면 좋은 이름이 떠오를 수도 있음 
- **함수의 매개변수**<br>
사용 컨텍스트를 결정<br>
외부와의 결합도를 최대한 낮추고 캡슐화 수준을 높여야 함
  
## 기타
- 함수의 본문을 먼저 리팩토링 하여 추출 단계를 수월하게 할 때도 있다.
- 공개된 API를 리팩토링 할때에는 depreacted 처리를 한 뒤 클라이언트가 모두 이전했을 때 폐기한다.
  (그러나 그 순간이 평생 오지 않을 수도 있다.)

예시: 함수 이름 바꾸기 (간단한 절)
```typescript
function circum(radius) {
  return 2 * Math.PI * radius;
}
```

```typescript
function circumference(radius) {
  return 2 * Math.PI * radius;
}
```


예시: 함수 이름 바꾸기 (마이그레이션 절차)<br>
호출부에 끼치는 영향도를 최소<br>
```typescript
function circum(radius) {
  return 2 * Math.PI * radius;
}
```

```typescript
function circum(radius) {
  return circumference(radius);
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}
```

```typescript
function circumference(radius) {
  return 2 * Math.PI * radius;
}
```

예시: 매개변수 추가하기 <br>

1. 신규함수 추출
```typescript
function addReservation(customer) {
  this.temp_addReservation(customer);
}

function temp_addReservation(customer) {
  this._reservations.push(customer);
}
```

2. 파라미터 추가 
```typescript
function addReservation(customer) {
  this.temp_addReservation(customer, false);
}

function temp_addReservation(customer, isPriority) {
  this._reservations.push(customer, isPriority);
}
```

3. 파라미터 assertion (변경해놓고 사용안하는 경우 방지)
```typescript
function addReservation(customer) {
  this.temp_addReservation(customer, false);
}

function temp_addReservation(customer, isPriority) {
  assert(isPriority === true || isPriority === false);
  this._reservations.push(customer, isPriority);
}
```

4. 기존 함수 변경 

5. 기존 함수 이름으로 변경
```typescript
function addReservation(customer, isPriority) {
  assert(isPriority === true || isPriority === false);
  this._reservations.push(customer, isPriority);
}
```

