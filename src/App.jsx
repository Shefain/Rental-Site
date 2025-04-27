import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
      </div>
    </>
  );
};

export default App;
