export function errorLog(error: string) {
  if (import.meta.env.DEV) {
    console.error(error);
  }
}

export function debugLog(label: string, info: string) {
  if (import.meta.env.DEV) {
    console.log(label, info);
  }
}
