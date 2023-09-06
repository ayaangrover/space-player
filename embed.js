document.addEventListener("DOMContentLoaded", function () {
    const playlistForm = document.getElementById("playlistForm");
    const embedCodeDiv = document.getElementById("embedCode");

    playlistForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const playlistUrl = document.getElementById("playlistUrl").value;

        // Validate the URL (you can add more validation as needed)
        if (isValidSpotifyUrl(playlistUrl)) {
            const playlistId = getPlaylistIdFromUrl(playlistUrl);
            const embedCode = generateEmbedCode(playlistId);

            // Hide the form and display the embed code
            playlistForm.style.display = "none";
            embedCodeDiv.innerHTML = embedCode;
        } else {
            embedCodeDiv.innerHTML = "Invalid Spotify playlist URL.";
        }
    });

    // Function to validate Spotify URL
    function isValidSpotifyUrl(url) {
        return /^https:\/\/open\.spotify\.com\/playlist\/[a-zA-Z0-9]+/.test(url);
    }

    // Function to extract playlist ID from Spotify URL
    function getPlaylistIdFromUrl(url) {
        return url.split("/").pop();
    }

    // Function to generate Spotify embed code
    function generateEmbedCode(playlistId) {
        return `<iframe style="border-radius: 12px" src="https://open.spotify.com/embed/playlist/${playlistId}" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    }
});
