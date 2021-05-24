function distanceTravelled(scenario, time) {
  let result;
  let acc = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  let secondaryTime = time - scenario.delay;
  result = 0.5 * acc * primaryTime * primaryTime;

  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime;
  }
  return result;
}

// acc에 값을 2번 할당함 (역할이 2개) -> 쪼개야 함