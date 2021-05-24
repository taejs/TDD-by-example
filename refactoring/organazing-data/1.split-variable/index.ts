function calculateDistance(acc, time) {
  return 0.5 * acc * Math.pow(time, 2);
}

function distanceTravelled(scenario, time) {
  const primaryAcceleration = scenario.primaryForce / scenario.mass;
  const primaryTime = Math.min(time, scenario.delay);
  const secondaryTime = time - scenario.delay;
  const primaryDistance = calculateDistance(primaryAcceleration, primaryTime);

  if (secondaryTime > 0) {
    const primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;

    return (
      primaryDistance +
      primaryVelocity * secondaryTime +
      calculateDistance(secondaryAcceleration, secondaryTime)
    );
  }

  return primaryDistance;
}

// acc에 값을 2번 할당함 (역할이 2개) -> 쪼개야 함
