import { Header, Navigation } from "../../components";
import { Heading } from "../../elements";

function App() {
  return (
    <>
      <Header />
      <Navigation navList = {["Settings", "Users"]} />
      <Heading text="Users" />
    </>
  );
}

export default App;
