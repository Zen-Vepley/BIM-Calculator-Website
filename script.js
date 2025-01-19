function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const resultContainer = document.getElementById('bmi-result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultContainer.innerText = 'Isi yang bener!';
        resultContainer.style.color = 'red';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = '';
    let color = '';

    if (bmi < 18.5) {
        category = 'Kekurangan Berat Badan';
        color = 'orange';
    } else if (bmi < 24.9) {
        category = 'Berat Badan Normal';
        color = 'green';
    } else if (bmi < 29.9) {
        category = 'Kelebihan Berat Badan';
        color = 'darkgoldenrod';
    } else {
        category = 'Obesitas';
        color = 'red';
    }

    animateBMIResult(0, parseFloat(bmi), resultContainer, category, color);
}

function animateBMIResult(start, end, element, category, color) {
    let current = start;
    const increment = (end - start) / 50;
    const interval = setInterval(() => {
        current += increment;
        element.innerHTML = `BMI Anda: <strong>${current.toFixed(1)}</strong>`;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            clearInterval(interval);
            element.innerHTML = `
                <p style="font-size: 1.5rem; color: ${color};">
                    BMI Anda: <strong>${end.toFixed(1)}</strong>
                </p>
                <p>Kategori: <strong>${category}</strong></p>
            `;
        }
    }, 20);
}
