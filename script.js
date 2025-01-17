function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Mana bisa bang, coba lagi");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);

    let category = "";
    if (bmi < 18.5) {
        category = "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Berat Badan Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Kelebihan Berat Badan";
    } else {
        category = "Obesitas";
    }

    const resultContainer = document.getElementById("bmi-result-container");
    const resultText = document.getElementById("bmi-result");

    resultText.innerHTML = `BMI Anda: <strong>${bmi}</strong> (${category})`;

    resultContainer.classList.remove("fade-in");
    void resultContainer.offsetWidth;
    resultContainer.classList.add("fade-in");
}

function showBMITable() {
    const bmiTable = document.getElementById("bmi-table");
    bmiTable.classList.add("slide-in");
}

document.addEventListener("DOMContentLoaded", () => {
    showBMITable();
});

function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const target = link.getAttribute("href");
            smoothScroll(target);
        });
    });
});
