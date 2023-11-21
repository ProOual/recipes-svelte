import type { PageLoad } from './$types';

export const load: PageLoad = async  ({fetch,params}) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.slug}`);
    
        if (!res.ok) {
          // Gestion des erreurs HTTP (par exemple, statut 404)
          throw new Error(`Failed to fetch item with slug ${params.slug}. Status: ${res.status}`);
        }
    
        const item = await res.json();
        return { item };
      } catch (error: any) {
        // Gestion des erreurs pendant la requête
        console.error('Error fetching item:', error.message);
        return { status: 500, error: 'Internal Server Error' };
      }
};
export const ssr = false