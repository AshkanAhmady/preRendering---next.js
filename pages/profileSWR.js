import axios from "axios";
import useSWR from "swr";

const fetcher = () =>
  axios.get("http://localhost:4000/profile").then((res) => res.data);

const Profile = () => {
  const { data, error } = useSWR("getUserData", fetcher);

  if (error) return <h2>faild to load!</h2>;
  if (!data) return <h2>loading...</h2>;
  return (
    <div>
      <h1>user profile SWR</h1>
      <h2>
        name: {data.name} - email: {data.email}
      </h2>
    </div>
  );
};

export default Profile;
