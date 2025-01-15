export default {
  logger<T>(key: string, value: string | number | Partial<T>) {
    console.log(key, value);
  },
};
