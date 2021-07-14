const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

//
// Пример входного параметра: 2021-06-17T16:51:35.216Z
//
const getVerboseDate = (dateString) => {
  const aDate = new Date(dateString);
  const verboseDate = `${MONTH_NAMES[aDate.getMonth()]} ${aDate.getFullYear()}`;

  return dateString || verboseDate;
};

export default getVerboseDate;
