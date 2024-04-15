/* eslint-disable import/prefer-default-export */
const businessHours = [9, 17];

// This function is not pure as there is dependency other than arguements.Date is global!
export function purchase() {
  const currentHour = new Date().getHours();
  const [open, close] = businessHours;

  if (currentHour > open && currentHour < close) return { message: "Success" };

  return { message: "Error" };
}

// We can fix impurity by simply converting
// the hardwired dependency of date into an arguement.
// This turning of a hardwired dependency into an arguement
// is known as dependency injection technique.

export function isPurchaseValid(date) {
  const currentHour = date.getHours();
  const [open, close] = businessHours;

  if (currentHour > open && currentHour < close) return { message: "Success" };

  return { message: "Error" };
}
