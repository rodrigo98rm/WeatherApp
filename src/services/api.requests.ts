import { RequestProps, FetchResult, ClimateDetails } from './services.inteface';

export const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

function makeRequest(link: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(corsAnywhere + link)
      .then((result: Response) => {
        result.ok ? resolve(result.json()) : alert(result.statusText);
      })
      .catch(reject);
  });
}

export function requestByName(props: RequestProps): Promise<FetchResult[] | void> {
  const APILink = `http://www.metaweather.com/api/location/search/?query=${props.location}`;
  return new Promise((resolve, reject) => {
    makeRequest(APILink).then(resolve).catch(reject);
  });
}

export async function requestByLattAndLong(): Promise<FetchResult[] | void> {
  try {
    const localization = await getClientLocalization();
    const APILink = `http://www.metaweather.com/api/location/search/?lattlong=${localization}`;
    return new Promise((resolve, reject) => {
      makeRequest(APILink).then(resolve).catch(reject);
    });
  } catch (error) {
    console.log('Localization not found:', error);
  }
}

export async function requestByDay(woied: number, day: string): Promise<ClimateDetails | void> {
  const APILink = `https://www.metaweather.com/api/location/${woied}/${day}`;
  return new Promise((resolve, reject) => {
    makeRequest(APILink).then(resolve).catch(reject);
  });
}

export async function climateCityDetails(woied: number): Promise<ClimateDetails | void> {
  const APILink = `https://www.metaweather.com/api/location/${woied}`;
  return new Promise((resolve, reject) => {
    makeRequest(APILink).then(resolve).catch(reject);
  });
}

export function getClientLocalization(): Promise<string | void> | void {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve(position.coords.latitude + ',' + position.coords.longitude);
    });
  });
}
