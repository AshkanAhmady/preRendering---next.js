import axios from "axios";
import User from "../../components/User";

const UserList = ({ userList }) => {

  return (
    <div>
      <h1>User List</h1>
      <hr />
      {userList.results.map((user) => {
        return (
         <User key={user.id} user={user} />
        );
      })}
    </div>
  );
};

export default UserList;

// this method must have return & the (props) must in the return
export async function getStaticProps(context) {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return {
    props: {
      userList: data,
    },
  };
}
