export const dateValidation = (date: string): boolean => {
  const dateRegex = /(\d{4})[-\/](\d{2})[-\/](\d{2})/;
  const matches = dateRegex.exec(date);
  if (matches !== null) {
    const [year, month, day] = [Number(matches[1]), Number(matches[2]) - 1, Number(matches[3])];
    const composedDate = new Date(year, month, day);
    if (composedDate.getDate() === day && composedDate.getMonth() === month && composedDate.getFullYear() === year) {
      return true;
    } else {
      alert('Invalid date');
    }
  }
  return false;
};

export const nameValidation = (name: string): boolean => {
  const nameRegex = /[0-9]|\W|_/;
  if (nameRegex.test(name)) {
    return true;
  } else {
    alert('Invalid name');
    return false;
  }
};
