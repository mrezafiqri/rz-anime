export const getAnimeResponse = async (resource, query) => {
  let response;
  let anime;

  for (let attemp = 1; attemp <= 10; attemp++) {
    try {
      response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
      );

      if (response.status === 404) {
        anime = await response.json();
        break;
      }

      if (response.ok || response.status === 200) {
        anime = await response.json();
        break;
      } else {
        throw new Error(`API request failed with status ${response.status}, attemp: ${attemp}`);
      }
    } catch (error) {
      console.error(`API request failed: ${error.message}`);
    }
  }

  if (!anime) {
    throw new Error("Api request failed after 5 attempt...");
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
