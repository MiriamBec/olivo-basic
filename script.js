const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const icon = document.getElementById("icon");

// countdown
// Fecha futura para la cuenta regresiva
const countdownDate = new Date("Feb 08, 2025 20:00:00").getTime();

// Actualizar la cuenta regresiva cada segundo
const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calcular días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance >= 0) {
    // Actualizar el contenido de cada elemento en el HTML mientras el tiempo no se acaba
    document.getElementById("days").innerText = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerText = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerText = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerText = seconds
      .toString()
      .padStart(2, "0");
  } else {
    // Mostrar ceros cuando el tiempo se acabe
    clearInterval(interval);
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }
}, 1000);

// Animación
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach((element) => observer.observe(element));
});

// Actualización automática del año
document.getElementById("year").textContent = new Date().getFullYear();
