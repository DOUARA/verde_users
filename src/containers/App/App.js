import { Header, Navigation, Table } from "../../components";
import { Heading } from "../../elements";
import { useUsers } from "../../hooks"

function App() {
  
  const { usersList, loading } = useUsers([]);

  return (
    <>
      <Header />
      <Navigation navList = {["Settings", "Users"]} />
      <Heading text="Users" />
      <Table loading={loading} users={usersList} />
    </>
  );

}

export default App;
