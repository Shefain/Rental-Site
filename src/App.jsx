import Footer from "./components/Footer";
import Header from "./components/Header";
import MoiveList from "./components/MovieList";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <MoiveList />
      </div>
      <Footer />
    </>
  );
};

export default App;
