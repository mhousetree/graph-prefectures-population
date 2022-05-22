export function errorLog(error) {
  if (import.meta.env.DEV) {
    console.error(error);
  }
}

export function debugLog(label, info) {
  if (import.meta.env.DEV) {
    console.log(label, info);
  }
}
