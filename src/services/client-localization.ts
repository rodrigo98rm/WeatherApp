export function getClientLocalization(): Promise<string | void> | void {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition((position) => {
      res(position.coords.latitude + "," + position.coords.longitude);
    });
  });
}
