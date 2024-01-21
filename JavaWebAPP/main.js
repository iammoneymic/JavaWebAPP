import { fetchRandomDog, searchDogsByBreed } from './apiService.js';

const dogGallery = document.getElementById('dogGallery');

async function displayRandomDog() {
    try {
        const imageUrl = await fetchRandomDog();
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        dogGallery.appendChild(imgElement);
    } catch (error) {
    }
}

function clearGallery() {
    dogGallery.innerHTML = '';
}

async function searchDogs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm.trim() === '') {
        displayRandomDog();
    } else {
        clearGallery();
        try {
            const imageUrl = await searchDogsByBreed(searchTerm);
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            dogGallery.appendChild(imgElement);
        } catch (error) {
        }
    }
}

displayRandomDog();
