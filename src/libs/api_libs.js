export const getAnimeResponse = async (resource, query) => {
  let response;
  let anime;

  for (let attemp = 1; attemp <= 5; attemp++) {
    try {
      response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
      );

      if (response.status === 404) {
        anime = await response.json();
        break;
      }

      if (response.ok) {
        anime = await response.json();
        break;
      } else if (response.status === 429) {
        // Delay meningkat secara eksponensial
        const delay = Math.min(5000, 1000 * Math.pow(2, attemp - 1)); 

        console.warn(`API rate limit reached. Retrying in ${delay}ms...`);

        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw new Error(
          `Fetch Api request failed with status ${response.status}`
        );
      }
    } catch (error) {
      console.log(`Api request failed ${error.message}`);
    }
  }

  if (!anime) {
    throw new Error("Failed to fetch data after 5 attempts...");
  }
  return anime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  const data = await response.data?.flatMap((item) => item[objectProperty]);
  return data;
};

export const reproduce = (responData, gapNumber) => {
  const firstNumber = ~~(Math.random() * (responData.length - gapNumber) + 1);
  const lastNumber = firstNumber + gapNumber;

  const replacePropertyAnime = {
    data: responData.slice(firstNumber, lastNumber),
  };

  return replacePropertyAnime;
};

export const getObjectNestedAnime = async (objectAnime) => {
  let newObjectAnime = await [];

  for (const obj in objectAnime) {
    newObjectAnime.push(objectAnime[obj]);
  }
  return newObjectAnime;
};

export const getFilteredAnime = async (
  resource,
  objectProperty,
  targetValue
) => {
  const filterAnime = await getAnimeResponse(resource);
  const response = await filterAnime.data?.filter(
    (anime) => anime[objectProperty] === targetValue
  );
  return response;
};
