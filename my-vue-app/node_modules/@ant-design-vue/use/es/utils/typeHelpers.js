export function isComponentPublicInstance(instance) {
  return instance.$ !== undefined;
}