let _initialized = false;

export function initialize() {
  if (_initialized) {
    return;
  }
  console.log("Initialize!");
  _initialized = true;
}