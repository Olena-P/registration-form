import './style.css';
import { startCountdown } from './components/Countdown';
import { initModal } from './components/Modal';
import { validateForm } from './components/Form';

startCountdown('countdown');
startCountdown('modal-countdown');

initModal();

validateForm(document.getElementById('registrationForm') as HTMLFormElement);
validateForm(document.getElementById('modalForm') as HTMLFormElement);
