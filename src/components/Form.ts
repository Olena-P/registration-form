export function validateForm(form: HTMLFormElement): void {
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    let valid = true;

    form.querySelectorAll('.error-message').forEach((errorElement) => {
      errorElement.textContent = '';
    });
    form.querySelectorAll('.error').forEach((input) => {
      input.classList.remove('error');
    });

    const phoneInputs = form.querySelectorAll(
      'input[type="tel"]',
    ) as NodeListOf<HTMLInputElement>;

    phoneInputs.forEach((phoneInput) => {
      const errorElement = document.getElementById(
        phoneInput.getAttribute('aria-describedby')!,
      );
      const sanitizedPhone = phoneInput.value.replace(/\D/g, '');

      phoneInput.setCustomValidity(''); // Скидання попередніх помилок

      if (phoneInput.required && !phoneInput.value.trim()) {
        phoneInput.classList.add('error');
        phoneInput.setCustomValidity('Заповніть це поле'); // Додаємо валідацію
        if (errorElement) errorElement.textContent = 'Заповніть це поле';
        valid = false;
      } else if (!/^380\d{9}$/.test(sanitizedPhone)) {
        phoneInput.classList.add('error');
        phoneInput.setCustomValidity('Неправильний формат телефону'); // Додаємо валідацію
        if (errorElement)
          errorElement.textContent =
            'Неправильний формат телефону. Використовуйте формат +380123456789';
        valid = false;
      }
    });

    if (valid) {
      const formData = new FormData(form);
      fetch('https://example.com/register', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            alert('Реєстрація успішна!');
            form.reset();
          } else {
            alert('Помилка при відправленні форми.');
          }
        })
        .catch(() => {
          alert('Помилка з’єднання.');
        });
    }
  });
}

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    const customCheckbox = target.nextElementSibling as HTMLElement;
    if (customCheckbox) {
      customCheckbox.classList.toggle('checked', target.checked);
    }
  });
});
