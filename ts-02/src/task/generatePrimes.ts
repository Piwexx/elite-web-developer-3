export function generatePrimes(n: number): number[] {
  // Función de orden superior para la memoización de los primos.
  const memoize = (fn: Function) => {
    const cache: number[] = [];
    return (limit: number) => {
      if (cache.length >= limit) {
        return cache.slice(0, limit);
      }

      for (let i = cache.length + 1; cache.length < limit; i++) {
        if (isPrime(i)) {
          cache.push(i);
        }
      }

      return cache.slice(0, limit);
    };
  };

  // Función para verificar si un número es primo.
  const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Crear la función memoizada para generar los primos.
  const getPrimes = memoize((limit: number) => {
    return generatePrimes(limit);
  });

  return getPrimes(n);
}


// Memoize (Función de Orden Superior):
// Crea una función de memoización que almacena los números primos previamente calculados en un arreglo cache.
// Si ya hemos calculado suficientes primos, simplemente los devuelve de la caché. Si no, calcula los primos adicionales hasta el límite especificado (n).
// isPrime:

// Esta función verifica si un número dado es primo. Si un número es divisible por cualquier número desde 2 hasta su raíz cuadrada, no es primo.
// Generación de primos:

// La función generatePrimes utiliza la función memoizada para obtener los primeros n números primos, sin tener que volver a calcular los primos ya encontrados en 
// llamadas anteriores.

// Gracias a la memoización, una vez que se han calculado los primos, no necesitamos volver a calcularlos en llamadas sucesivas. La función isPrime realiza una comprobación 
// eficiente solo cuando es necesario.