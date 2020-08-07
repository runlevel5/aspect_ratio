export function resize(x: number, y: number, xMax?: number, yMax?: number): number[] {
  if (xMax && yMax) {
    // Maximum values of height and width given, aspect ratio preserved.
    if (y > x) {
      return [Math.round(yMax * x / y), yMax];
    } else {
      return [xMax, Math.round(xMax * y / x)];
    }
  } else if (xMax) {
    // Width given, height automagically selected to preserve aspect ratio.
    return [xMax, Math.round(xMax * y / x)];
  } else if (yMax) {
    // Height given, width automagically selected to preserve aspect ratio.
    return [Math.round(yMax * x / y), yMax];
  } else {
    throw "Missing xMax and/or yMax"
  }
};
