export const isValueDefined = (value: any) => {
  return (
    !Object.is(value, undefined) &&
    !Object.is(value, null) &&
    !Object.is(String(value).trim(), "")
  );
};
