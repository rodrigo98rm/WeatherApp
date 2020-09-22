import { getClientLocalization } from "./client-localization.request";
import { RequestProps, FetchResult, ClimateDetails } from "./services.inteface";

export const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

//TODO: Make an unique function?

export async function RequestByName(
  props: RequestProps
): Promise<FetchResult[] | void> {
  const APILink = `http://www.metaweather.com/api/location/search/?query=${props.location}`;
  try {
    const result = await fetch(corsAnywhere + APILink);
    console.log(result);
    try {
      const data: FetchResult[] = await result.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("JSON Error:", error);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function RequestByLattAndLong(): Promise<FetchResult[] | void> {
  try {
    const localization = await getClientLocalization();
    const APILink = `http://www.metaweather.com/api/location/search/?lattlong=${localization}`;
    try {
      const result = await fetch(corsAnywhere + APILink);
      console.log(result);
      try {
        const data: FetchResult[] = await result.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log("JSON Error:", error);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  } catch (error) {
    console.log("Localization not found:", error);
  }
}

export function climateCityDetails(woied: number): Promise<ClimateDetails> {
  const APILink = `https://www.metaweather.com/api/location/${woied}/`;
  return new Promise((res, rej) => {
    fetch(corsAnywhere + APILink)
      .then((result: Response) => {
        const data = result.json();
        res(data);
      })
      .catch((error) => rej(`Fetch failed: ${error}`));
  });
}
