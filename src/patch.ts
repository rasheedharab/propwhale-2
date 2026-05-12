try {
  if (typeof window !== 'undefined' && window.fetch) {
    const originalFetch = window.fetch;
    const desc = Object.getOwnPropertyDescriptor(window, 'fetch');
    const isConfigurable = desc ? desc.configurable : true;

    // We can only redefine if configurable
    if (isConfigurable && (!desc || !desc.writable)) {
      Object.defineProperty(window, 'fetch', {
        configurable: true,
        writable: true,
        value: originalFetch
      });
    }
  }
} catch (e) {
  console.warn("Could not patch window.fetch", e);
}
