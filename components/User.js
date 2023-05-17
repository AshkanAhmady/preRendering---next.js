const User = ({ user }) => {
  return (
    <div key={user.id}>
      Name: {user.name} - Status: {user.status}
    </div>
  );
};

export default User;
