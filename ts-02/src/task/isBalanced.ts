export function isBalanced(s: string): boolean {
 const stack: string[] = [];
  const map: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let char of s) {
    // Si el carácter es un paréntesis de apertura, corchete o llave, lo apilamos.
    if (map[char]) {
      stack.push(char);
    } else {
      // Si es un carácter de cierre, comprobamos si corresponde con el que está en la cima de la pila.
      const top = stack.pop();
      if (map[top] !== char) {
        return false; // Si no coincide, la cadena no está balanceada.
      }
    }
  }

  // Si la pila está vacía, los paréntesis están balanceados; si no, están desbalanceados.
  return stack.length === 0;
}

