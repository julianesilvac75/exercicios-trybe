let yes: boolean = true;
let no: boolean = false;

let x: number;
let y: number = 0;
let z: number = 123.456;

let s: string;
let empty: string = '';
let abc: string = 'abc';

// void: ausência de valor
function sayHelloWorld(): void {
  console.log('Hello World!');
}

enum StudentStatus {
  Active,
  Inactive,
  Paused,
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive;
console.log(newStudentStatus);

enum WeekDays {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

enum RainbowColor {
  Red = 'Vermelho',
  Orange = 'Laranja',
  Yellow = 'Amarelo',
  Green = 'Verde',
  Blue = 'Azul',
  Indigo = 'Índigo',
  Purple = 'Violeta'
}

enum Actions {
  Save = 1,
  Print,
  Open,
  View,
  Close
}

enum CardinalPoints {
  North = 'N',
  East = 'E',
  West = 'W',
  South = 'S'
}
