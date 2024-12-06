/**
 * Converte para formato de moeda brasileira (BRL)
 */
export const currencyConverter = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
