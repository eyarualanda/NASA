// URL de la API de Astronomy Picture of the Day de la NASA
const apiKey = 'kGzAMEgbkujEQ7Pl3QkIoZiJ30n6wPSRW9SwFxx4'; 
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

// Función para obtener y mostrar la imagen del día
function fetchAPOD() {
  fetch(apiURL)
    .then(response => response.json())
    .then(data => displayAPOD(data))
    .catch(error => console.error('Error al obtener datos:', error));
}

// Función para mostrar la información de la imagen
function displayAPOD(data) {
  const titleElement = document.getElementById('title');
  const dateElement = document.getElementById('date');
  const imageElement = document.getElementById('image');
  const explanationElement = document.getElementById('explanation');

  titleElement.textContent = data.title;
  dateElement.textContent = `Fecha: ${data.date}`;
  explanationElement.textContent = data.explanation;

  // Verifica si es una imagen o un video
  if (data.media_type === 'image') {
    imageElement.src = data.url;
    imageElement.style.display = 'block';
  } else if (data.media_type === 'video') {
    imageElement.style.display = 'none';
    explanationElement.insertAdjacentHTML('beforeend', `<br><a href="${data.url}" target="_blank">Ver video aquí</a>`);
  }
}

// Llama a la función al cargar la página
fetchAPOD();
