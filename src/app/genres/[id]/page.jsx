import GenreList from "./GenreList";

export const metadata = {
  title: "Genre Anime",
};

const Page = ({ params }) => {
  return <GenreList id={params.id} />;
};

export default Page;
