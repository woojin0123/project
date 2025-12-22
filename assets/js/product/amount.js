document.querySelectorAll('.amount').forEach(control => {
  const input = control.querySelector('.number');
  const delBtn = control.querySelector('.add');
  const addBtn = control.querySelector('.del');

  delBtn.addEventListener('click', () => {
    let value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
    }
  });

  addBtn.addEventListener('click', () => {
    let value = parseInt(input.value);
    input.value = value + 1;
  });
});
