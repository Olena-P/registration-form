export function startCountdown(elementId: string) {
  const countdownElement = document.getElementById(elementId);
  const targetDate = new Date('2025-03-01T00:00:00').getTime();

  function formatNumber(value: number, isSeconds: boolean = false): string {
    return `<span class="countdown-number ${isSeconds ? 'green' : ''}">${value
      .toString()
      .padStart(2, '0')}</span>`;
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (countdownElement) {
      countdownElement.innerHTML = `
          <div class="countdown-item">${formatNumber(days)}<span class="label">днів</span></div>
          <span class="colon">:</span>
          <div class="countdown-item">${formatNumber(hours)}<span class="label">годин</span></div>
          <span class="colon">:</span>
          <div class="countdown-item">${formatNumber(minutes)}<span class="label">хвилин</span></div>
          <span class="colon">:</span>
          <div class="countdown-item">${formatNumber(seconds, true)}<span class="label">секунд</span></div>
        `;
    }

    if (distance < 0) {
      clearInterval(interval);
      if (countdownElement) countdownElement.innerHTML = 'Час вичерпано!';
    }
  }

  const interval = setInterval(updateCountdown, 1000);
}
