import { initModal } from '../components/Modal';
import '@testing-library/jest-dom';

describe('Modal Functionality', () => {
  let modal: HTMLElement;
  let registerBtn: HTMLButtonElement;
  let closeModal: HTMLButtonElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="registerBtn">Відкрити модальне вікно</button>
      <div id="modal" aria-hidden="true">
        <button id="closeModal">Закрити</button>
      </div>
    `;

    modal = document.getElementById('modal')!;
    registerBtn = document.getElementById('registerBtn') as HTMLButtonElement;
    closeModal = document.getElementById('closeModal') as HTMLButtonElement;

    initModal();
  });

  test('Відкриває модальне вікно при натисканні кнопки', () => {
    registerBtn.click();
    expect(modal).toHaveAttribute('aria-hidden', 'false');
  });

  test('Закриває модальне вікно при натисканні на хрестик', () => {
    registerBtn.click();
    closeModal.click();
    expect(modal).toHaveAttribute('aria-hidden', 'true');
  });

  test('Закриває модальне вікно при натисканні клавіші Escape', () => {
    registerBtn.click();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(modal).toHaveAttribute('aria-hidden', 'true');
  });
});
