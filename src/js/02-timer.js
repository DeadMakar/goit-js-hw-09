// main.js
import { initializeDateTimePicker } from './exports_for_task2/flatpickr';
import {
  showSuccessNotification,
  showFailureNotification,
} from './exports_for_task2/notiflix';
import * as timer from './exports_for_task2/timer';
import { selectors } from './exports_for_task2/refs';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
};

const onCloseCallback = selectedDates => {
  const selectedDate = selectedDates[0];

  if (selectedDate < new Date()) {
    showFailureNotification('Please choose a date in the future');
    timer.resetTimerDisplay();
    selectors.startBtnRef.disabled = true;
  } else {
    showSuccessNotification('You selected a valid future date');
    selectors.startBtnRef.disabled = false;
  }
};

initializeDateTimePicker('#datetime-picker', options, onCloseCallback);

selectors.startBtnRef.disabled = true;

selectors.startBtnRef.addEventListener('click', () => {
  timer.startTimer(updateTimerDisplay);
});

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  selectors.daysRef.textContent = timer.addLeadingZero(days);
  selectors.hoursRef.textContent = timer.addLeadingZero(hours);
  selectors.minutesRef.textContent = timer.addLeadingZero(minutes);
  selectors.secondsRef.textContent = timer.addLeadingZero(seconds);
}
