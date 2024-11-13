export async function fetchMeubles(URL) {
  return await fetch(URL)
      .then(response => response.json())
      .then(data => {
          console.log('Meubles récupérés:', data);
          return data;
      })
      .catch(error => {
          console.error('Erreur de récupération:', error);
      });
}