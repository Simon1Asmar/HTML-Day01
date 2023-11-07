function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function(){
  return this.a === this.b && this.b === this.c && this.c === this.d
}

const s1 = new Square(5,5,5,5);
console.log('s1', s1)
console.log('s1.isSquare()', s1.isSquare())
const s2 = new Square(4,3,4,4);
console.log('s2', s2)
console.log('s2.isSquare()', s2.isSquare())
