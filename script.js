// Typing animation
new Typed("#typing", {
    strings: [
        "Akash",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});
// "React Native Developer",
// "Mobile App Engineer",
// "JavaScript Developer"


// Dark mode
document
    .getElementById("modeToggle")
    .onclick = function () {
        document.body.classList.toggle("dark")
    }


// GitHub Projects Auto Load
const username = "Akash562"

fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("projectsContainer")
        data.slice(0, 6).forEach(repo => {
            const card = document.createElement("div")
            card.className = "projectCard"
            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description"}</p>
                <a href="${repo.html_url}" target="_blank">
                View Project
                </a>
                `
            container.appendChild(card)
        })
    })

// GitHub contribution graph
GitHubCalendar(".calendar", username)

// Particles background
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        color: { value: "#0ea5e9" },
        shape: { type: "circle" },
        opacity: { value: 0.4 },
        size: { value: 4 },
        move: { enable: true, speed: 2 }
    }
})