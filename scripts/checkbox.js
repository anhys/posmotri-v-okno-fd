const timeCheckboxes = document.querySelectorAll('.search-form__checkbox[name="time"]');

timeCheckboxes.forEach((current) => {
  current.addEventListener('change', () => {
    if (current.checked) {
      timeCheckboxes.forEach((other) => {
        if (other !== current) {
          other.checked = false;
        }
      });
    }
  });
});