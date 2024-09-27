import SideBar from "./components/SideBar";
import {PortfolioContextProvider} from "./store/PortfolioContext";
import Content from "./components/Content";

function App() {
  return (
    <>
      <PortfolioContextProvider>
        <main className="main-page">
          <SideBar></SideBar>
          <div className="main-content">
            <Content/>
          </div>
        </main>
      </PortfolioContextProvider>
    </>
  )
}
export default App;
