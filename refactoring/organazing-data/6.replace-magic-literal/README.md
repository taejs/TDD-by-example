# 9.6 매직 리터럴 바꾸기

```typescript
function potentialEnergy(mass, height) {
  return mass * 9.81 * height;
}
```

```typescript
const STANDARD_GRAVITY = 9.81;
function potentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}
```

소스코드에 반복해서 등장하는 일반적인 리터럴 값을 상수로 전환 