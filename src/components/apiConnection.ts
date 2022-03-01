export const sendData = (date: string, score: number) => {
  fetch("https://matekapi.herokuapp.com", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date: date, score: score }),
  });
};
