import { validateForm } from '../components/Form';
import '@testing-library/jest-dom';

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ message: 'Success' }),
    }),
  ) as jest.Mock;

  global.alert = jest.fn();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('Form Validation', () => {
  let form: HTMLFormElement;
  let phoneInput: HTMLInputElement;
  let checkbox: HTMLInputElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <form id="testForm">
        <label for="phone">Номер телефону</label>
        <input type="tel" id="phone" required aria-describedby="phoneError" />
        <p id="phoneError" class="error-message" aria-live="assertive"></p>

        <label>
          <input type="checkbox" id="agreement" required />
          <span class="custom-checkbox"></span>
          <span>Погоджуюсь з умовами</span>
        </label>

        <button type="submit">Відправити</button>
      </form>
    `;

    form = document.getElementById('testForm') as HTMLFormElement;
    phoneInput = form.querySelector('#phone')!;
    checkbox = form.querySelector('#agreement')!;

    validateForm(form);
  });

  test('Показує помилку для порожнього поля телефону', () => {
    phoneInput.value = '';
    form.dispatchEvent(new Event('submit', { bubbles: true }));
    expect(phoneInput).toHaveClass('error');

    const phoneError = document.getElementById('phoneError');
    expect(phoneError).toHaveTextContent('Заповніть це поле');
  });

  test('Валідація телефону з некоректним форматом', () => {
    phoneInput.value = '12345';
    form.dispatchEvent(new Event('submit', { bubbles: true }));
    expect(phoneInput.validationMessage).toBe('Неправильний формат телефону');
  });

  test('Форма валідна з правильними даними', async () => {
    phoneInput.value = '380951234567';
    checkbox.checked = true;

    form.dispatchEvent(new Event('submit', { bubbles: true }));

    await new Promise(process.nextTick);

    expect(global.fetch).toHaveBeenCalledWith(
      'https://example.com/register',
      expect.any(Object),
    );

    expect(window.alert).toHaveBeenCalledWith('Реєстрація успішна!');
    expect(phoneInput).not.toHaveClass('error');
    expect(checkbox).not.toHaveClass('error');
  });
});
