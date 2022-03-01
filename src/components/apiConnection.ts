export const sendData = (date: string, score: number) => {
  fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date: date, score: score }),
  });
};
