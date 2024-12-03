/**
 * Convertendo Pixels em rem
 * @param pixels - valor de pixel para ser convertidos
 * @returns Retorna o valor em REM
 */

export function pxTorem(pixels: number): string {
  return `${pixels / 16}rem`
}
