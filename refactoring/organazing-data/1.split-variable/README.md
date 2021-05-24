# 9.1 변수 쪼개기

```typescript
let temp = 2 * (height + width);
temp = height * width;
```
```typescript
const perimeter = 2 * (height + width);
const area = height * width;
```
역할 하나당 변수 하나를 사용해야한다.<br>
여러 용도로 쓰인 변수는 코드를 읽는 사람에게 큰 혼란을 준다.