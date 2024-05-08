export const doesObjContainEmptyProperties = (obj: Object) => {
  return Object.entries(obj).every(
    ([, value]) =>
      Object.is(value, undefined) ||
      Object.is(value, null) ||
      Object.is(value, "")
  );
};