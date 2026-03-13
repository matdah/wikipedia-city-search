document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#search-button").addEventListener("click", search);
});


async function search() {
    const query = document.getElementById("searchInput").value;
    const resultDiv = document.getElementById("result");

    // Steg 1: Hitta rätt sidtitel via opensearch
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${query}&limit=1&format=json&origin=*`;

    try {
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

        const title = searchData[1][0]; // Första träffens titel
        if (!title) {
            resultDiv.textContent = "Hittade inget.";
            return;
        }

        // Steg 2: Hämta ett kort utdrag om sidan
        const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;

        const summaryResponse = await fetch(summaryUrl);
        const summaryData = await summaryResponse.json();

        resultDiv.innerHTML = `<strong>${summaryData.title}</strong><p>${summaryData.extract}</p>`;

    } catch (error) {
        resultDiv.textContent = "Något gick fel: " + error.message;
    }
}