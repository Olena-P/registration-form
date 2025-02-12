export function initModal() {
  const modal = document.getElementById('modal') as HTMLElement;
  const registerBtn = document.getElementById(
    'registerBtn',
  ) as HTMLButtonElement;
  const closeModal = document.getElementById('closeModal') as HTMLButtonElement;

  registerBtn.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'block';

    const firstInput = modal.querySelector('input') as HTMLInputElement | null;
    if (firstInput) {
      firstInput.focus();
    }
  });

  closeModal.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      modal.setAttribute('aria-hidden', 'true');
      modal.style.display = 'none';
    }
  });
}
