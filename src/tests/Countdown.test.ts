import { startCountdown } from '../components/Countdown';
import '@testing-library/jest-dom';

jest.useFakeTimers();

describe('Countdown Timer', () => {
  let countdownElement: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = `<div id="countdown"></div>`;
    countdownElement = document.getElementById('countdown')!;
    startCountdown('countdown');
  });

  test('Оновлює таймер щосекунди', () => {
    jest.advanceTimersByTime(1000);
    expect(countdownElement.innerHTML).toContain('секунд');
  });

  test('Показує повідомлення після завершення таймера', () => {
    jest.advanceTimersByTime(1000 * 60 * 60 * 24 * 365);
    expect(countdownElement).toHaveTextContent('Час вичерпано!');
  });
});
