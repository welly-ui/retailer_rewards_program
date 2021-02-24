export const pointCal = (spent) => {
  const isEligible = spent > 100;
  let points = 0;

  if(isEligible) {
    if(spent >= 100) {
      return Math.floor(spent - 100) * 2 + 50;
    }
    else if(spent >= 50) {
      return Math.floor(spent - 50) * 1;
    }
  }

  return points
}