import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/profile")
      .then((res) => {
        setLoading(false);
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>user profile</h1>
      <h2>
        name: {userData.name} - email: {userData.email}
      </h2>
    </div>
  );
};

export default Profile;
