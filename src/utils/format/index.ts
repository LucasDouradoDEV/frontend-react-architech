export const formatDate = (date: string | Date): string => {
    const d = new Date(date);
    return d.toLocaleDateString('pt-BR');
}
  
export const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
}