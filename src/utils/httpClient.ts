const apiKey = "e036b2a294859f51590o881405683ft3";
const BASE_URL = 'https://api.shecodes.io/weather/v1/';

export function getData(url: string) {
  return fetch(BASE_URL + url + `&key=${apiKey}&units=metric`)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
}