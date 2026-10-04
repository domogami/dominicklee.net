export type Angle = 'deg' | 'rad';
export class CalculationError extends Error {}
const fail = (message: string): never => {
  throw new CalculationError(message);
};
const checked = (value: number) =>
  Number.isFinite(value)
    ? Object.is(value, -0)
      ? 0
      : value
    : fail('That result is outside the calculator’s range.');

type Token = { kind: 'number' | 'name' | 'symbol' | 'end'; value: string };
type Node =
  | { kind: 'number'; value: number }
  | { kind: 'constant'; name: string }
  | { kind: 'unary'; op: string; child: Node }
  | { kind: 'postfix'; op: string; child: Node }
  | { kind: 'group'; child: Node }
  | { kind: 'function'; name: string; child: Node }
  | { kind: 'binary'; op: string; left: Node; right: Node };
const functions = new Set([
  'sin',
  'cos',
  'tan',
  'asin',
  'acos',
  'atan',
  'sqrt',
  'ln',
  'log',
  'abs',
  'exp',
]);
const constants = new Set(['pi', 'e', 'ans']);

function tokenize(input: string): Token[] {
  if (input.length > 256) fail('This page has room for 256 characters.');
  const source = input
    .replaceAll('×', '*')
    .replaceAll('÷', '/')
    .replaceAll('−', '-')
    .replaceAll('π', 'pi')
    .replaceAll('√', 'sqrt')
    .replaceAll('²', '^2')
    .trim();
  const tokens: Token[] = [];
  let cursor = 0;
  while (cursor < source.length) {
    const rest = source.slice(cursor);
    const whitespace = rest.match(/^\s+/);
    if (whitespace) {
      cursor += whitespace[0].length;
      continue;
    }
    const number = rest.match(/^(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/);
    if (number) {
      if (tokens.at(-1)?.kind === 'number')
        fail('Put an operator between those numbers.');
      tokens.push({ kind: 'number', value: number[0] });
      cursor += number[0].length;
      continue;
    }
    const name = rest.match(/^[a-zA-Z]+/);
    if (name) {
      tokens.push({ kind: 'name', value: name[0].toLowerCase() });
      cursor += name[0].length;
      continue;
    }
    if ('+-*/^()%!'.includes(rest[0])) {
      tokens.push({ kind: 'symbol', value: rest[0] });
      cursor++;
      continue;
    }
    fail(`“${rest[0]}” isn’t a calculator symbol.`);
  }
  tokens.push({ kind: 'end', value: '' });
  return tokens;
}

class Parser {
  private cursor = 0;
  constructor(private tokens: Token[]) {}
  peek() {
    return this.tokens[this.cursor];
  }
  take() {
    return this.tokens[this.cursor++];
  }
  expression(min = 0): Node {
    const token = this.take();
    let left: Node;
    if (token.kind === 'number')
      left = { kind: 'number', value: checked(Number(token.value)) };
    else if (token.value === '+' || token.value === '-')
      left = { kind: 'unary', op: token.value, child: this.expression(30) };
    else if (token.value === '(') {
      left = { kind: 'group', child: this.expression() };
      this.close();
    } else if (token.kind === 'name' && constants.has(token.value))
      left = { kind: 'constant', name: token.value };
    else if (token.kind === 'name' && functions.has(token.value)) {
      if (this.take().value !== '(')
        fail(`Add parentheses after ${token.value}.`);
      left = { kind: 'function', name: token.value, child: this.expression() };
      this.close();
    } else if (token.kind === 'name')
      fail(`“${token.value}” isn’t a supported function.`);
    else fail('There’s a number or a bracket missing.');
    while (true) {
      const next = this.peek();
      if ((next.value === '%' || next.value === '!') && 50 >= min) {
        this.take();
        left = { kind: 'postfix', op: next.value, child: left! };
        continue;
      }
      const implicit =
        next.value === '(' || next.kind === 'name' || next.kind === 'number';
      const op = implicit ? '*' : next.value;
      const priority =
        op === '+' || op === '-'
          ? 10
          : op === '*' || op === '/'
            ? 20
            : op === '^'
              ? 40
              : -1;
      if (priority < min || priority === -1) break;
      if (!implicit) this.take();
      left = {
        kind: 'binary',
        op,
        left: left!,
        right: this.expression(op === '^' ? priority : priority + 1),
      };
    }
    return left!;
  }
  close() {
    if (this.take().value !== ')') fail('Close the open parenthesis.');
  }
}

function directPercent(node: Node): boolean {
  if (node.kind === 'group' || node.kind === 'unary')
    return directPercent(node.child);
  return node.kind === 'postfix' && node.op === '%';
}
function run(node: Node, angle: Angle, answer: number): number {
  if (node.kind === 'number') return node.value;
  if (node.kind === 'constant')
    return node.name === 'pi'
      ? Math.PI
      : node.name === 'e'
        ? Math.E
        : checked(answer);
  if (node.kind === 'group') return run(node.child, angle, answer);
  if (node.kind === 'binary') {
    const a = run(node.left, angle, answer),
      b = run(node.right, angle, answer);
    const delta = directPercent(node.right) ? a * b : b;
    if (node.op === '+') return checked(a + delta);
    if (node.op === '-') return checked(a - delta);
    if (node.op === '*') return checked(a * b);
    if (node.op === '/')
      return b === 0
        ? fail('Division by zero has no finite answer.')
        : checked(a / b);
    return checked(Math.pow(a, b));
  }
  const x = run(node.child, angle, answer);
  if (node.kind === 'unary') return node.op === '-' ? -x : x;
  if (node.kind === 'postfix') {
    if (node.op === '%') return x / 100;
    if (!Number.isInteger(x) || x < 0)
      fail('Factorials need a nonnegative whole number.');
    if (x > 170)
      fail('Factorials above 170 are outside this calculator’s range.');
    let value = 1;
    for (let i = 2; i <= x; i++) value *= i;
    return checked(value);
  }
  const rad = angle === 'deg' ? (x * Math.PI) / 180 : x;
  const fromRad = (r: number) => (angle === 'deg' ? (r * 180) / Math.PI : r);
  const snap = (n: number) => (Math.abs(n) < 1e-14 ? 0 : n);
  switch (node.name) {
    case 'sin':
      return snap(Math.sin(rad));
    case 'cos':
      return snap(Math.cos(rad));
    case 'tan':
      return Math.abs(Math.cos(rad)) < 1e-14
        ? fail('Tangent is undefined at this angle.')
        : snap(checked(Math.tan(rad)));
    case 'asin':
      return Math.abs(x) > 1
        ? fail('Inverse sine needs a value from −1 to 1.')
        : fromRad(Math.asin(x));
    case 'acos':
      return Math.abs(x) > 1
        ? fail('Inverse cosine needs a value from −1 to 1.')
        : fromRad(Math.acos(x));
    case 'atan':
      return fromRad(Math.atan(x));
    case 'sqrt':
      return x < 0
        ? fail('A real square root needs a nonnegative number.')
        : Math.sqrt(x);
    case 'ln':
      return x <= 0 ? fail('Logarithms need a positive number.') : Math.log(x);
    case 'log':
      return x <= 0
        ? fail('Logarithms need a positive number.')
        : Math.log10(x);
    case 'abs':
      return Math.abs(x);
    case 'exp':
      return checked(Math.exp(x));
    default:
      return fail('This function isn’t available.');
  }
}

export function calculate(
  input: string,
  angle: Angle = 'deg',
  answer = 0
): number {
  if (!input.trim()) fail('Write a little calculation first.');
  const parser = new Parser(tokenize(input));
  const tree = parser.expression();
  if (parser.peek().kind !== 'end')
    fail('There’s an extra closing parenthesis.');
  return checked(run(tree, angle, answer));
}
export function preview(
  input: string,
  angle: Angle,
  answer: number
): { value: number | null; error: string } {
  try {
    return { value: calculate(input, angle, answer), error: '' };
  } catch (error) {
    return {
      value: null,
      error:
        error instanceof CalculationError
          ? error.message
          : 'Check the numbers and brackets.',
    };
  }
}
export const formatNumber = (value: number) =>
  Number(value.toPrecision(14)).toString().replace('e+', 'e');
export const prettyExpression = (value: string) =>
  value
    .replaceAll('*', '×')
    .replaceAll('/', '÷')
    .replaceAll('-', '−')
    .replaceAll('pi', 'π')
    .replaceAll('sqrt', '√')
    .replaceAll('ans', 'Ans');

type Unit = { id: string; label: string; factor: number };
export const conversions: Record<string, { label: string; units: Unit[] }> = {
  length: {
    label: 'Length',
    units: [
      { id: 'cm', label: 'Centimeters', factor: 0.01 },
      { id: 'm', label: 'Meters', factor: 1 },
      { id: 'km', label: 'Kilometers', factor: 1000 },
      { id: 'in', label: 'Inches', factor: 0.0254 },
      { id: 'ft', label: 'Feet', factor: 0.3048 },
      { id: 'yd', label: 'Yards', factor: 0.9144 },
      { id: 'mi', label: 'Miles', factor: 1609.344 },
    ],
  },
  mass: {
    label: 'Weight',
    units: [
      { id: 'g', label: 'Grams', factor: 0.001 },
      { id: 'kg', label: 'Kilograms', factor: 1 },
      { id: 'oz', label: 'Ounces', factor: 0.028349523125 },
      { id: 'lb', label: 'Pounds', factor: 0.45359237 },
    ],
  },
  temperature: {
    label: 'Temperature',
    units: [
      { id: 'c', label: 'Celsius', factor: 1 },
      { id: 'f', label: 'Fahrenheit', factor: 1 },
      { id: 'k', label: 'Kelvin', factor: 1 },
    ],
  },
  area: {
    label: 'Area',
    units: [
      { id: 'm2', label: 'Square meters', factor: 1 },
      { id: 'ft2', label: 'Square feet', factor: 0.09290304 },
      { id: 'acre', label: 'Acres', factor: 4046.8564224 },
      { id: 'ha', label: 'Hectares', factor: 10000 },
    ],
  },
  volume: {
    label: 'Volume',
    units: [
      { id: 'ml', label: 'Milliliters', factor: 0.001 },
      { id: 'l', label: 'Liters', factor: 1 },
      { id: 'cup', label: 'US cups', factor: 0.2365882365 },
      { id: 'floz', label: 'US fluid ounces', factor: 0.0295735295625 },
      { id: 'gal', label: 'US gallons', factor: 3.785411784 },
    ],
  },
  speed: {
    label: 'Speed',
    units: [
      { id: 'kmh', label: 'Kilometers / hour', factor: 1 },
      { id: 'mph', label: 'Miles / hour', factor: 1.609344 },
      { id: 'ms', label: 'Meters / second', factor: 3.6 },
      { id: 'knot', label: 'Knots', factor: 1.852 },
    ],
  },
  time: {
    label: 'Time',
    units: [
      { id: 's', label: 'Seconds', factor: 1 },
      { id: 'min', label: 'Minutes', factor: 60 },
      { id: 'h', label: 'Hours', factor: 3600 },
      { id: 'day', label: 'Days', factor: 86400 },
      { id: 'week', label: 'Weeks', factor: 604800 },
    ],
  },
};
export function convert(
  value: number,
  category: string,
  from: string,
  to: string
) {
  checked(value);
  const units = conversions[category]?.units;
  const a = units?.find((u) => u.id === from),
    b = units?.find((u) => u.id === to);
  if (!a || !b) fail('Choose two supported units.');
  if (category === 'temperature') {
    const c =
      from === 'f'
        ? ((value - 32) * 5) / 9
        : from === 'k'
          ? value - 273.15
          : value;
    if (c < -273.15000001) fail('That temperature is below absolute zero.');
    return checked(to === 'f' ? (c * 9) / 5 + 32 : to === 'k' ? c + 273.15 : c);
  }
  return checked((value * a!.factor) / b!.factor);
}
