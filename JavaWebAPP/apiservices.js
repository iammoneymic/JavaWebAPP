export async function fetchRandomDog() {
    try {
        const response = await fetch('https://random.dog/woof.json');
        const data = await response.json();
        return data.url;
    } catch (error) {
        console.error('Error fetching random dog:', error);
        throw error;
    }
}

export async function searchDogsByBreed(breed) {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error searching dogs by breed:', error);
        throw error;
    }
}
