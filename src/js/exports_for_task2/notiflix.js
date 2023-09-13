import Notiflix from 'notiflix';

export function showSuccessNotification(message) {
  Notiflix.Notify.success(message);
}

export function showFailureNotification(message) {
  Notiflix.Notify.failure(message);
}
