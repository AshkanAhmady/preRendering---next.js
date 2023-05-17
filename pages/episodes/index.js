import axios from "axios";
import Link from "next/link";
import User from "../../components/User";

const EpisodeList = ({ episodeList }) => {
  return (
    <div>
      <h1>User List</h1>
      <hr />
      {episodeList.results.map((episode) => {
        return (
          <div key={episode.id}>
            <h1>
              <Link href={`/episodes/${episode.id}`}>
                episode: {episode.episode} - name {episode.name}
              </Link>
            </h1>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default EpisodeList;

export async function getStaticProps(context) {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
  return {
    props: {
      episodeList: data,
    },
  };
}
