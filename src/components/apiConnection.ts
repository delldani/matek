const URL = "https://matekapi.herokuapp.com";
// const URL = "http://localhost:5000";

export const sendData = (date: string, score: number, failure: number) => {
  fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date: date, score: score, failure: failure }),
  });
};

export const getLatestScores = () => {
  return fetch(URL).then((res) => res.json());
};
