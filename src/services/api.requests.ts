import { RequestFunctionsParams, PlacesList, ClimateDetails } from './services.inteface';

export const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

function makeRequest(link: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(corsAnywhere + link)
      .then((result: Response) => {
        result.ok ? resolve(result.json()) : console.log('makeRequst says:', result.statusText);
      })
      .catch(reject);
  });
}

export function requestByName(props: RequestFunctionsParams): Promise<PlacesList[]> {
  const APILink = `http://www.metaweather.com/api/location/search/?query=${props.name}`;
  return new Promise((resolve, reject) => {
    makeRequest(APILink).then(resolve).catch(reject);
  });
}

export async function requestByLattAndLong(): Promise<PlacesList[]> {
  try {
    const localization = await getClientLocalization();
    const APILink = `http://www.metaweather.com/api/location/search/?lattlong=${localization}`;
    return new Promise((resolve, reject) => {
      makeRequest(APILink).then(resolve).catch(reject);
    });
  } catch (error) {
    alert(`Localization not found: ${error}`);
    return [];
  }
}

export async function requestByDay(param: RequestFunctionsParams): Promise<ClimateDetails[]> {
  const APILink = `https://www.metaweather.com/api/location/${param.day?.woied}/${param.day?.date}`;
  return new Promise((resolve, reject) => {
    makeRequest(APILink).then(resolve).catch(reject);
  });
}

export async function climateCityDetails(woied: number): Promise<ClimateDetails> {
  const APILink = `https://www.metaweather.com/api/location/${woied}`;
  return new Promise((resolve, reject) => {
    makeRequest(APILink).then(resolve).catch(reject);
  });
}

export function getClientLocalization(): Promise<string> | void {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords.latitude + ',' + position.coords.longitude);
      },
      (error) => reject(error.message),
    );
  });
} /*    how to get this reject?
        TODO: Try to resolve this!*/
