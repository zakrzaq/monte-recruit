const allObjectKeys = (obj, value) => {
  Object.keys(obj).forEach((v) => (obj[v] = value));
};

export default allObjectKeys;
