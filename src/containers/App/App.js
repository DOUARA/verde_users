import { Header, Navigation, Table } from "../../components";
import { Heading } from "../../elements";

function App() {
  
  return (
    <>
      <Header />
      <Navigation navList = {["Settings", "Users"]} />
      <Heading text="Users" />
      <Table users={[{
        id: "1",
        profileImage: "image url",
        name: "john doe",
        username: "John22",
        email: "contact@test.com"
      }, 
      {
        id: "2",
        profileImage: "image url",
        name: "john doe",
        username: "John22",
        email: "email"
      }
      
      ]} />
    </>
  );

}

export default App;
