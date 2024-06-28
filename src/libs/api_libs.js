export const getAnimeRespons = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = response.json();
  return anime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeRespons(resource);
  return response?.data?.flatMap((item) => item[objectProperty]);
};

export const reproduce = (responData, gapNumber) => {
  const firstNumber = ~~(Math.random() * (responData?.length - gapNumber) + 1);
  const lastNumber = firstNumber + gapNumber;

  const replaceroPertyAnime = {
    data: responData?.slice(firstNumber, lastNumber),
  };

  return replaceroPertyAnime;
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
  const filterAnime = await getAnimeRespons(resource);
  const response = await filterAnime.data?.filter(
    (anime) => anime[objectProperty] === targetValue
  );
  return response;
};