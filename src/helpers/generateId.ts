const generateId = (() => {
  let i = 0;
  return (prefix = "") => {
    i += 1;
    return `${prefix}-${i}`;
  };
})();

export default generateId;
