const multiDigitNumberClasses = [
  {
    name: "thousand class",
    classNumber: 3,
    abbreviation: "K",
  },
  {
    name: "million class",
    classNumber: 6,
    abbreviation: "M",
  },
  {
    name: "billion class",
    classNumber: 9,
    abbreviation: "B",
  },
];
const classAmount = multiDigitNumberClasses.length;
const baseDivider = 10;
const oneClass = 3;

export function roundNumberToLetterAbbreviation(num: number): string {
  const numAsString = num.toString();
  const numAsStringLength = numAsString.length;

  if (numAsStringLength < 4) {
    return numAsString;
  }

  let roundedNumAsString = numAsString;

  for (
    let classIndex = 0,
      currentClass = multiDigitNumberClasses[classIndex].classNumber;
    classIndex < classAmount;
    currentClass += oneClass, classIndex++
  ) {
    if (
      numAsStringLength > currentClass &&
      numAsStringLength <= currentClass + oneClass
    ) {
      roundedNumAsString = (num / Math.pow(baseDivider, currentClass)).toFixed(
        1
      );
      roundedNumAsString += multiDigitNumberClasses[classIndex].abbreviation;
    }
  }

  return roundedNumAsString;
}
