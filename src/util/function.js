export function formatDate(inputDateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(inputDateString);
  const monthName = months[date.getMonth()]; //getMonth() gives number of a month eg jan - 0,feb - 1
  const day = date.getDate();
  const year = date.getFullYear();

  //function to add original suffix to day
  function getOriginalSuffix(day) {
    if (day >= 11 && day <= 13) return day + "th";
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  }
  const formatDate = `${monthName} ${getOriginalSuffix(day)}, ${year}`;
  return formatDate;
}
