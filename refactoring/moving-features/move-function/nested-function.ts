function trackSummary(points) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistances(points);
  return {
    time: totalTime,
    distance: totalDistances(points),
    pace
  };

  function calculateTime() {
    return 0;
  }
}

function totalDistances(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;

  function distance(p1, p2) {
    return radians(0);
  }

  function radians(degrees) {
    return 0;
  }
}
