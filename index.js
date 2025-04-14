// Global variable to store the current mode
let pwd = "";

// Redirect to Google Classroom when '=' key is pressed
document.addEventListener("keydown", function (event) {
    if (event.key === "=") {
        window.location.href = "https://classroom.google.com/";
    }
});

// Function to dynamically load content or redirect based on `pwd` value
function run() {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("allowFullScreen", "");
    iframe.style = "position: absolute; top: 0; left: 0; height: 100%; width: 100%; border: none; overflow: auto;";

    let baseUrl = window.location.href;
    // Ensure the base URL ends with a '/'
    if (!baseUrl.endsWith("/")) {
        baseUrl = baseUrl.substring(0, baseUrl.lastIndexOf("/") + 1);
    }

    // Handle specific `pwd` cases
    switch (pwd) {
        case "0.2":
            iframe.src = decodeBase64("aHR0cHM6Ly9haHIwY2htNmx5OTFkM3Z3YjJ4NWRoamh5MnN1ZG0udmVyY2VsLmFwcA==") + "/0.2/";
            break;
        case "0.3":
            iframe.src = decodeBase64("aHR0cHM6Ly9haHIwY2htNmx5OTFkM3Z3YjJ4NWRoamh5MnN1ZG0udmVyY2VsLmFwcA==") + "/0.3/";
            break;
        case "0.4":
            iframe.src = decodeBase64("aHR0cHM6Ly9haHIwY2htNmx5OTFkM3Z3YjJ4NWRoamh5MnN1ZG0udmVyY2VsLmFwcA==") + "/pt4/";
            break;
        case "cc":
            window.location.href = baseUrl + "specialVideos/cookie/";
            return;
        case "icedodo":
            window.location.href = baseUrl + "specialVideos/icedoddo/";
            return;
        case "mc":
            window.location.href = baseUrl + "mc/index.html";
            return;
        case "celest":
            window.location.href = "/celeste-wasm/home.html";
            return;
        case "ts3":
            iframe.src = baseUrl + "ts3/index.html";
            break;
        case "selenite":
            iframe.src = "https://peletiaek.netlify.app/";
            break;
        default:
            alert("Invalid selection. Please choose a valid option.");
            return;
    }

    // Clear the body content and add the iframe
    document.body.innerHTML = "";
    document.body.appendChild(iframe);
}

// Helper function to decode Base64 strings
function decodeBase64(encodedStr) {
    return atob(encodedStr);
}
