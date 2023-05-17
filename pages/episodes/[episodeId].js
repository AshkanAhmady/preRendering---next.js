import axios from "axios";
import { useRouter } from "next/router";

// dynamik SSG page
const SingleEpisode = ({ episode }) => {
  const router = useRouter();

  //if fallback == true => add this loading
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Episode: {episode.episode}</h1>
      <hr />
      <h2>Name: {episode.name}</h2>
      <h2>Date: {episode.air_date}</h2>
    </div>
  );
};

export default SingleEpisode;

// this method is used for (dynamik SSG page)
export async function getStaticPaths() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");

  //paths is all dynamik datas
  const paths = data.results.map((episode) => {
    return { params: { episodeId: `${episode.id}` } };
  });

  return {
    // this is for => fallback: true
    paths: [
        {params: { episodeId: '1'}},
        {params: { episodeId: '2'}},
        {params: { episodeId: '3'}}
    ], 
    // this is for => fallback: false
    // paths,

    // fallback => false | true | blocking
    fallback: true,
  };
}

// to get single episode
export async function getStaticProps(context) {
  //this params most get from (getStaticPaths) method
  const { params } = context;

  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode/${params.episodeId}`
  );
  return {
    props: {
      episode: data,
    },
  };
}
