document.addEventListener("DOMContentLoaded", function () {
    fetch("../navbar/navbar.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to load navbar: ${response.status}`);
            }
            return response.text();
        })
        .then((html) => {
            document.getElementById("navbar").innerHTML = html;

            // Highlight the active link based on the current page
            const currentPage = window.location.pathname.split("/").slice(-2).join("/");

            const navLinks = {
                "home/index.html": "home-link",
                "parking/index.html": "parking-link",
                "community/index.html": "community-link",
                "resources/index.html": "emergency-link"
            };

            // Add the active class to the correct link
            for (const [path, id] of Object.entries(navLinks)) {
                if (currentPage.endsWith(path)) {
                    document.getElementById(id).classList.add("active");
                    break;
                }
            }
        })
        .catch((error) => console.error("Error loading navbar:", error));
});