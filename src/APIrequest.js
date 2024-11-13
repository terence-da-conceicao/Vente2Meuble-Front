export async function fetchMeubles() {
  return fetch('http://localhost:8000/meubles')
      .then(response => response.json())
      .then(data => {
          console.log('Meubles récupérés:', data);
          return data;
      })
      .catch(error => {
          console.error('Erreur de récupération:', error);
      });
}