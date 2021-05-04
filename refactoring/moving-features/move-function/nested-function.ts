function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace
  };

  function calculateDistance() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1, p2) {
    return radians(0);
  }

  function radians(degrees) {
    return 0;
  }

  function calculateTime() {
    return 0;
  }
}

function temp_calculateDistance(points) {
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
