import { Header, Navigation, Table } from "../../components";
import { Heading } from "../../elements";
import { useUsers } from "../../hooks"
import { useEffect } from "react";


function Home() {
  
  const { usersList, loading, fetchUsers } = useUsers([]);

  useEffect(()=> {
    fetchUsers();
  }, [fetchUsers])

  return (
    <>
      <Header />
      <Navigation navList = {["Settings", "Users"]} />
      <Heading text="Users" />
      <Table loading={loading} users={usersList} />
    </>
  );

}

export default Home;
