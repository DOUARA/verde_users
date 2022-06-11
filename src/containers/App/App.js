import { Header } from "../../components";
import { Navigation } from "../../components";

function App() {
  return (
    <>
      <Header />
      <Navigation navList = {["Settings", "Users"]} />
    </>
  );
}

export default App;
