export function getHostDocument(): Document {
  if (typeof document === 'undefined') {
    throw new Error('document is not available');
  }
  try {
    if (typeof parent !== 'undefined' && parent && parent !== window && parent.document) {
      return parent.document;
    }
  } catch {}
  return document;
}

export function getHostWindow(): Window | typeof globalThis {
  try {
    if (typeof parent !== 'undefined' && parent && parent !== window) {
      return parent as Window;
    }
  } catch {}
  return globalThis;
}
