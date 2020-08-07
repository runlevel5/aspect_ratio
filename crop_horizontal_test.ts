import {
    assertEquals,
} from "https://deno.land/std@0.63.0/testing/asserts.ts";
import { crop } from './crop.ts';

// horizontal image
const width  = 5184;
const height = 3456;

Deno.test('crop() horizontal image / same orientation - returns crop for 1:1 aspect ratio', () => {
  let bounds = crop(width, height, '1:1');
  assertEquals(bounds, [ 864, 0, 3456, 3456 ]);
});

Deno.test('crop() horizontal image / same orientation - returns crop for 3:2 aspect ratio', () => {
  // 5184 × 3456
  let bounds = crop(width, height, '3:2');
  assertEquals(bounds, [ 0, 0, 5184, 3456 ]);
});

Deno.test('crop() horizontal image / same orientation - returns crop for 3:5 aspect ratio', () => {
  // 5184 × 3110
  let bounds = crop(width, height, '3:5');
  assertEquals(bounds, [ 0, 172, 5184, 3112 ]);
});

Deno.test('crop() horizontal image / same orientation - returns crop for 4:3 aspect ratio', () => {
  // 4608 × 3456
  let bounds = crop(width, height, '4:3');
  assertEquals(bounds, [ 288, 0, 4608, 3456 ]);
});

Deno.test('crop() horizontal image / same orientation - returns crop for 5:7 aspect ratio', () => {
  // 4838 × 3456
  let bounds = crop(width, height, '5:7');
  assertEquals(bounds, [ 172, 0, 4840, 3456 ]);
});

Deno.test('crop() horizontal image / same orientation - returns crop for 8:10 aspect ratio', () => {
  // 4320 × 3456
  let bounds = crop(width, height, '8:10');
  assertEquals(bounds, [ 1209, 0, 2766, 3456 ]);
});

Deno.test('crop() horizontal image / same orientation - returns crop for 16:9 aspect ratio', () => {
  // 5184 × 2916
  let bounds = crop(width, height, '16:9');
  assertEquals(bounds, [ 0, 270, 5184, 2916 ]);
});

Deno.test('crop() horizontal image / vertical orientation - returns crop for 1:1 aspect ratio', () => {
  // 3456 × 3456
  let bounds = crop(width, height, '1:1!v');
  assertEquals(bounds, [ 864, 0, 3456, 3456 ]);
});

Deno.test('crop() horizontal image / vertical orientation - returns crop for 3:2 aspect ratio', () => {
  // 2304 × 3456
  let bounds = crop(width, height, '3:2!v');
  assertEquals(bounds, [ 1440, 0, 2304, 3456 ]);
});

Deno.test('crop() horizontal image / vertical orientation - returns crop for 3:5 aspect ratio', () => {
  // 2074 × 3456
  let bounds = crop(width, height, '3:5!v');
  assertEquals(bounds, [ 1555, 0, 2074, 3456 ]);
});

Deno.test('crop() horizontal image / vertical orientation - returns crop for 4:3 aspect ratio', () => {
  // 2592 × 3456
  let bounds = crop(width, height, '4:3!v');
  assertEquals(bounds, [ 1296, 0, 2592, 3456 ]);
});

Deno.test('crop() horizontal image / vertical orientation - returns crop for 5:7 aspect ratio', () => {
  // 2469 × 3456
  let bounds = crop(width, height, '5:7!v');
  assertEquals(bounds, [ 1357, 0, 2470, 3456 ]);
});

Deno.test('crop() horizontal image / vertical orientation - returns crop for 8:10 aspect ratio', () => {
  // 2765 × 3456
  let bounds = crop(width, height, '8:10!v');
  assertEquals(bounds, [ 1209, 0, 2766, 3456 ]);
});

Deno.test('crop() horizontal image / vertical orientation - returns crop for 16:9 aspect ratio', () => {
  // 1944 × 3456
  let bounds = crop(width, height, '16:9!v');
  assertEquals(bounds, [ 1620, 0, 1944, 3456 ]);
});
