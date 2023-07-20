async function getCurrentClient() {
  return (await import("../../../../src/client")).default;
}
export {
  getCurrentClient
};
