import {
    assertEquals,
} from "https://deno.land/std@0.63.0/testing/asserts.ts";
import { crop } from './crop.ts';

const width  = 3456;
const height = 5184;

Deno.test('crop() vertical image / same orientation - returns crop for 1:1 aspect ratio', () => {
  // 3456 × 3456
  let bounds = crop(width, height, '1:1');
  assertEquals(bounds, [ 0, 864, 3456, 3456 ]);
});

Deno.test('crop() vertical image / same orientation - returns crop for 3:2 aspect ratio', () => {
  // 5184 × 3456
  let bounds = crop(width, height, '3:2');
  assertEquals(bounds, [ 0, 0, 3456, 5184 ]);
});

Deno.test('crop() vertical image / same orientation - returns crop for 3:5 aspect ratio', () => {
  // 5184 × 3110
  let bounds = crop(width, height, '3:5');
  assertEquals(bounds, [ 172, 0, 3112, 5184 ]);
});

Deno.test('crop() vertical image / same orientation - returns crop for 4:3 aspect ratio', () => {
  // 4608 × 3456
  let bounds = crop(width, height, '4:3');
  assertEquals(bounds, [ 0, 288, 3456, 4608 ]);
});

Deno.test('crop() vertical image / same orientation - returns crop for 5:7 aspect ratio', () => {
  // 4838 × 3456
  let bounds = crop(width, height, '5:7');
  assertEquals(bounds, [ 0, 172, 3456, 4840 ]);
});

Deno.test('crop() vertical image / same orientation - returns crop for 8:10 aspect ratio', () => {
  // 4320 × 3456
  let bounds = crop(width, height, '8:10');
  assertEquals(bounds, [ 0, 1209, 3456, 2766 ]);
});

Deno.test('crop() vertical image / same orientation - returns crop for 16:9 aspect ratio', () => {
  // 5184 × 2916
  let bounds = crop(width, height, '16:9');
  assertEquals(bounds, [ 270, 0, 2916, 5184 ]);
});

Deno.test('crop() vertical image / horizontal orientation - returns crop for 1:1 aspect ratio', () => {
  // 3456 × 3456
  let bounds = crop(width, height, '1:1!h');
  assertEquals(bounds, [ 0, 864, 3456, 3456 ]);
});

Deno.test('crop() vertical image / horizontal orientation - returns crop for 3:2 aspect ratio', () => {
  // 3456 × 2304
  let bounds = crop(width, height, '3:2!h');
  assertEquals(bounds, [ 0, 1440, 3456, 2304 ]);
});

Deno.test('crop() vertical image / horizontal orientation - returns crop for 3:5 aspect ratio', () => {
  // 3456 × 2074
  let bounds = crop(width, height, '3:5!h');
  assertEquals(bounds, [ 0, 1555, 3456, 2074 ]);
});

Deno.test('crop() vertical image / horizontal orientation - returns crop for 4:3 aspect ratio', () => {
  // 3456 × 2592
  let bounds = crop(width, height, '4:3!h');
  assertEquals(bounds, [ 0, 1296, 3456, 2592 ]);
});

Deno.test('crop() vertical image / horizontal orientation - returns crop for 5:7 aspect ratio', () => {
  // 3456 × 2469
  let bounds = crop(width, height, '5:7!h');
  assertEquals(bounds, [ 0, 1357, 3456, 2470 ]);
});

Deno.test('crop() vertical image / horizontal orientation - returns crop for 8:10 aspect ratio', () => {
  // 3456 × 2765
  let bounds = crop(width, height, '8:10!h');
  assertEquals(bounds, [ 0, 1209, 3456, 2766 ]);
});

Deno.test('crop() vertical image / horizontal orientation - returns crop for 16:9 aspect ratio', () => {
  // 3456 × 1944
  let bounds = crop(width, height, '16:9!h');
  assertEquals(bounds, [ 0, 1620, 3456, 1944 ]);
});