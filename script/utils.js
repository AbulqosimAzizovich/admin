// -------- SELECTORS ----------------

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

// ------- Dynamic elements -----------



/// ------- T JSON ---------------------------

function TO_JSON(obj) {
  return JSON.stringify(obj);
}

function TO_OBJECT(json) {
  return JSON.parse(json);
}

/// -------- SAVE LOCALSTORAGE -----------------

function saveStorage(key, value) {
  if (value) {
    localStorage.setItem(key, value);
  }
}

function getStorage(key) {
  return localStorage.getItem(key);
}
