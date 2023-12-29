enum Key {
  View = "view",
}
const storage = () => {
  const version = "1.0.0";

  function get(key: Key) {
    return localStorage.getItem(`${version}-${key}`);
  }
  function set(key: Key, value: string) {
    return localStorage.setItem(`${version}-${key}`, value);
  }

  return {
    get,
    set,
  };
};

export default storage();
export { Key as storageKey };
