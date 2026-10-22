import { test, expect } from '@playwright/test';
import {
  calculate,
  calculateWithRepeat,
  CalculationError,
  convert,
  formatNumber,
  preview,
  repeatCalculation,
  isRepeatOperation,
} from '../app/calculator/math';

test('repeated equals freezes the final binary operation, including compound operands and relative percentages', () => {
  const cases: [string, number, number, number][] = [
    ['5+2', 7, 9, 11],
    ['20-3', 17, 14, 11],
    ['3*2', 6, 12, 24],
    ['100/2', 50, 25, 12.5],
    ['2^2', 4, 16, 256],
    ['2+3*4', 14, 26, 38],
    ['(2*(3+4))', 14, 98, 686],
    ['200+10%', 220, 242, 266.2],
    ['200-10%', 180, 162, 145.8],
    ['200*10%', 20, 2, 0.2],
    ['200+10%*2', 200.2, 200.4, 200.6],
    ['10+-2', 8, 6, 4],
    ['ans+sin(30)', 7.5, 8, 8.5],
  ];
  for (const [expression, first, second, third] of cases) {
    const calculation = calculateWithRepeat(expression, 'deg', 7);
    expect(calculation.value, expression).toBeCloseTo(first, 10);
    expect(calculation.repeat, expression).not.toBeNull();
    const again = repeatCalculation(calculation.value, calculation.repeat!);
    expect(again.value, expression).toBeCloseTo(second, 10);
    expect(calculate(again.expression), expression).toBeCloseTo(second, 10);
    expect(
      repeatCalculation(again.value, calculation.repeat!).value,
      expression
    ).toBeCloseTo(third, 10);
  }
  for (const expression of ['42', 'sqrt(9)', 'sin(30)', '50%', '-(2+3)'])
    expect(calculateWithRepeat(expression).repeat, expression).toBeNull();
  expect(
    isRepeatOperation({ operator: 'eval', operand: 1, percent: false })
  ).toBe(false);
  expect(
    isRepeatOperation({ operator: '+', operand: Infinity, percent: false })
  ).toBe(false);
  expect(
    isRepeatOperation({ operator: '+', operand: 1e308, percent: true })
  ).toBe(false);
  expect(() =>
    repeatCalculation(1e308, { operator: '*', operand: 10, percent: false })
  ).toThrow(CalculationError);
  expect(() =>
    repeatCalculation(1, { operator: '/', operand: 0, percent: false })
  ).toThrow('Division by zero');
});

test('arithmetic honors grouping, precedence, right-associative powers and implicit multiplication', () => {
  const cases: [string, number][] = [
    ['24*(3+2)', 120],
    ['2+3*4', 14],
    ['(2+3)*4', 20],
    ['2^3^2', 512],
    ['-2^2', -4],
    ['(-2)^2', 4],
    ['2^-3', 0.125],
    ['8/2(2+2)', 16],
    ['(2+3)(4+1)', 25],
    ['2π', 2 * Math.PI],
    ['2sqrt(9)', 6],
    ['3² + √(16)', 13],
    ['0.5e-3*2', 0.001],
    ['2 × 3 − 4 ÷ 2', 4],
    ['ans*3', 21],
    ['5! + 0!', 121],
  ];
  for (const [input, expected] of cases)
    expect(calculate(input, 'deg', 7), input).toBeCloseTo(expected, 12);
});

test('percentages behave like a pocket calculator and explicit products remain literal', () => {
  for (const [input, expected] of [
    ['200+10%', 220],
    ['200-10%', 180],
    ['200*10%', 20],
    ['200/10%', 2000],
    ['200+(10%)', 220],
    ['200+-10%', 180],
    ['200+10%+10%', 242],
    ['200+10%*2', 200.2],
    ['50%', 0.5],
    ['(200+10)%', 2.1],
  ] as [string, number][])
    expect(calculate(input), input).toBeCloseTo(expected, 12);
});

test('scientific functions use the chosen angle mode and inverse functions reverse it', () => {
  expect(calculate('sin(30)')).toBeCloseTo(0.5, 12);
  expect(calculate('cos(90)')).toBe(0);
  expect(calculate('tan(45)')).toBeCloseTo(1, 12);
  expect(calculate('sin(pi/6)', 'rad')).toBeCloseTo(0.5, 12);
  expect(calculate('asin(0.5)')).toBeCloseTo(30, 12);
  expect(calculate('acos(0)', 'rad')).toBeCloseTo(Math.PI / 2, 12);
  expect(calculate('atan(1)')).toBeCloseTo(45, 12);
  expect(calculate('ln(e)+log(100)+sqrt(81)+abs(-3)+exp(0)')).toBeCloseTo(
    16,
    12
  );
  expect(formatNumber(calculate('0.1+0.2'))).toBe('0.3');
  expect(formatNumber(calculate('1/3'))).toBe('0.33333333333333');
});

test('invalid syntax, unsafe input, undefined operations and overflow have useful errors', () => {
  for (const input of [
    '',
    '(',
    '(2',
    '2)',
    '2+',
    'sin',
    'sin(',
    'sin 30',
    '()',
    '2..3',
    '2 3',
    'alert(1)',
    'window.location',
    '[1]',
    '1;2',
    '1/0',
    '0^-1',
    'sqrt(-1)',
    'ln(0)',
    'log(-1)',
    'asin(2)',
    'acos(-2)',
    'tan(90)',
    '(-2)!',
    '1.5!',
    '171!',
    '1e309',
    '2^1024',
    'exp(1000)',
    '1'.repeat(257),
  ]) {
    expect(() => calculate(input), input).toThrow(CalculationError);
    expect(preview(input, 'deg', 0).value, input).toBeNull();
    expect(preview(input, 'deg', 0).error, input).not.toBe('');
  }
  expect(() => calculate('1/0')).toThrow('Division by zero');
  expect(() => calculate('(2+3')).toThrow('Close the open parenthesis');
});

test('unit conversion handles scale, temperature offsets, inverse conversion and physical bounds', () => {
  expect(convert(1, 'length', 'mi', 'km')).toBe(1.609344);
  expect(convert(12, 'length', 'in', 'ft')).toBeCloseTo(1, 12);
  expect(convert(1, 'mass', 'lb', 'kg')).toBe(0.45359237);
  expect(convert(0, 'temperature', 'c', 'f')).toBe(32);
  expect(convert(32, 'temperature', 'f', 'k')).toBe(273.15);
  expect(convert(0, 'temperature', 'k', 'c')).toBe(-273.15);
  expect(convert(1, 'area', 'ha', 'm2')).toBe(10000);
  expect(convert(1, 'volume', 'gal', 'cup')).toBe(16);
  expect(convert(1, 'speed', 'ms', 'kmh')).toBe(3.6);
  expect(convert(2, 'time', 'h', 'min')).toBe(120);
  expect(
    convert(convert(10, 'length', 'cm', 'in'), 'length', 'in', 'cm')
  ).toBeCloseTo(10, 12);
  expect(() => convert(-1, 'temperature', 'k', 'c')).toThrow('absolute zero');
  expect(() => convert(Infinity, 'length', 'cm', 'in')).toThrow(
    CalculationError
  );
  expect(() => convert(1, 'length', 'lb', 'ft')).toThrow('supported units');
});
