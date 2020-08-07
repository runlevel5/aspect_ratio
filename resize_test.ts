import {
  assertEquals,
} from "https://deno.land/std@0.63.0/testing/asserts.ts";
import { resize } from './resize.ts';

const vertical = { x: 3456, y: 5184 };
const horizontal = { x: 5184, y: 3456 };

const maxX = 500;
const maxY = 500;

Deno.test('resize() maxX only - returns bounds for horizontal image', () => {
  let bounds = resize(horizontal.x, horizontal.y, maxX);
  assertEquals(bounds, [ 500, 333 ]);
});

Deno.test('resize() maxX only - returns bounds for vertical image', () => {
  let bounds = resize(vertical.x, vertical.y, maxX);
  assertEquals(bounds, [ 500, 750 ]);
});

Deno.test('resize() maxY only - returns bounds for horizontal image', () => {
  let bounds = resize(horizontal.x, horizontal.y, undefined, maxY);
  assertEquals(bounds, [ 750, 500 ]);
});

Deno.test('resize() maxY only - returns bounds for vertical image', () => {
  let bounds = resize(vertical.x, vertical.y, undefined, maxY);
  assertEquals(bounds, [ 333, 500 ]);
});

Deno.test('resize() maxX and maxY - returns bounds for horizontal image', () => {
  let bounds = resize(horizontal.x, horizontal.y, 500, 500);
  assertEquals(bounds, [ 500, 333 ]);
});

Deno.test('resize() maxX and maxY - returns bounds for vertical image', () => {
  let bounds = resize(vertical.x, vertical.y, 500, 500);
  assertEquals(bounds, [ 333, 500 ]);
});

Deno.test('resize() maxX and maxY - properly rounds all edges', () => {
  let bounds = resize(800, 534, 500, 500);
  assertEquals(bounds, [ 500, 334 ]);
});
