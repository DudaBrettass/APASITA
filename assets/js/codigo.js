// Defina a data-alvo da contagem regressiva (substitua com a data desejada)
const targetDate = new Date('2023-11-02 00:00:00').getTime();

// Função para atualizar a contagem regressiva
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Atualize a exibição do tempo restante no HTML
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Atualize a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Chame a função inicialmente para evitar atrasos na exibição
updateCountdown();
