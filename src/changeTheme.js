const refs = {
  body: document.querySelector('body'),
  // switch: document.querySelector('.js-switch-input'),
  switch: document.querySelector('#theme-switch-toggle')
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// refs.switch.addEventListener('click', setClassList);
refs.switch.addEventListener('change', setClassList);
refs.switch.addEventListener('change', setLocalStorage);

function setClassList(e) {
  const check = refs.switch.checked;

  if (check) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  }
}

function setLocalStorage(e) {
  const check = refs.switch.checked;

  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}
