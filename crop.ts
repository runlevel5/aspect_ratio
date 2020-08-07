export function crop(x: number, y: number, r: string): number[] {
  let orient = r.split('!')[1];
  let ratio  = r.split('!')[0].split(':').sort();

  let vertical = y > x;
  let rotate = y > x && orient === 'h' || x > y && orient === 'v';

  if ((vertical || rotate) && !(vertical && rotate)) {
    x = x + y;
    y = x - y;
    x = x - y;
  }

  let xʹ = x;
  let yʹ = x * (+ratio[1] / +ratio[0]);

  if (yʹ > y || rotate && yʹ > x) {
    yʹ = y;
    xʹ = y * (+ratio[1] / +ratio[0]);

    if (xʹ > x) {
      xʹ = x;
      yʹ = x * (+ratio[0] / +ratio[1]);
    }
  }

  let Δx = Math.floor((x - xʹ) / 2);
  let Δy = Math.floor((y - yʹ) / 2);

  if ((vertical || rotate) && !(vertical && rotate)) {
    return [
      Δy,         // crop top left x
      Δx,         // crop top left y
      y - Δy * 2, // crop width
      x - Δx * 2  // crop height
    ];
  } else {
    return [
      Δx,         // crop top left x
      Δy,         // crop top left y
      x - Δx * 2, // crop width
      y - Δy * 2  // crop height
    ];
  }
};