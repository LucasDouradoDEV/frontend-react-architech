export default async function fetchData <T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Erro ao buscar dados da API');
      }
  
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error('Erro:', error);
      throw error;
    }
}  