let websites = [];

// Open and Close Admin Panel
document.getElementById("admin-btn").addEventListener("click", function () {
    document.getElementById("admin-panel").style.display = "flex";
});

document.getElementById("close-admin").addEventListener("click", function () {
    document.getElementById("admin-panel").style.display = "none";
});

// Verify Password Before Showing Admin Controls
function verifyPassword() {
    const password = document.getElementById("admin-password").value;
    if (password === "Sushil@Zuzu") { // Change this password as needed
        document.getElementById("admin-controls").classList.remove("hidden");
        loadAdminPanel();
    } else {
        alert("Incorrect Password");
    }
}

// Add a New Website
function addWebsite() {
    const name = document.getElementById("website-name").value;
    const logo = document.getElementById("website-logo").value;
    const desc = document.getElementById("website-desc").value;
    const link = document.getElementById("website-link").value;

    if (name && logo && desc && link) {
        websites.push({ name, logo, desc, link });
        saveWebsites();
        renderWebsites();
        loadAdminPanel();
        clearForm();
    } else {
        alert("Please fill all fields");
    }
}

// Delete a Website
function deleteWebsite(index) {
    websites.splice(index, 1);
    saveWebsites();
    renderWebsites();
    loadAdminPanel();
}

// Save Websites to Local Storage
function saveWebsites() {
    localStorage.setItem("websites", JSON.stringify(websites));
}

// Load Websites from Storage
function loadWebsites() {
    const saved = localStorage.getItem("websites");
    if (saved) {
        websites = JSON.parse(saved);
    }
    renderWebsites();
}

// Render Websites on the Main Page
function renderWebsites() {
    const list = document.getElementById("website-list");
    list.innerHTML = "";
    websites.forEach((site) => {
        const siteElement = document.createElement("div");
        siteElement.classList.add("website");
        siteElement.innerHTML = `
            <img src="${site.logo}" alt="Logo">
            <div>
                <h3>${site.name}</h3>
                <p>${site.desc}</p>
                <a href="${site.link}" target="_blank">Visit</a>
            </div>
        `;
        list.appendChild(siteElement);
    });
}

// Load Admin Panel Website List
function loadAdminPanel() {
    const adminList = document.getElementById("website-list-admin");
    adminList.innerHTML = "";
    websites.forEach((site, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${site.name} 
            <button onclick="deleteWebsite(${index})">❌ Delete</button>
        `;
        adminList.appendChild(listItem);
    });
}

// Clear Input Fields After Adding a Website
function clearForm() {
    document.getElementById("website-name").value = "";
    document.getElementById("website-logo").value = "";
    document.getElementById("website-desc").value = "";
    document.getElementById("website-link").value = "";
}

// Load Websites on Page Load
loadWebsites();
