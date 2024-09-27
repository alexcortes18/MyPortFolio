import PortfolioContext from "../store/PortfolioContext";
import { useContext } from "react";

export default function Content(){
    const portfolioCtx = useContext(PortfolioContext);

    let content = <p>Main content. Here will be the CV.</p>;
  
    // In here you should put a different component in each IF, when you are building your different Portfolio
    // components like: 

    if (portfolioCtx.portfolio === 0) {
      content = <p>Main content. Here will be the CV.</p>
    } else if (portfolioCtx.portfolio === 1) {
      content = <p>Cover letter</p>;
    } else if (portfolioCtx.portfolio === 2) {
      content = <p>About Me.</p>;
    } else if (portfolioCtx.portfolio === 3) {
      content = <p>Courses</p>;
    } else if (portfolioCtx.portfolio === 4) {
      content = <p>Life in Taiwan</p>;
    } else if (portfolioCtx.portfolio === 5) {
      content = <p>Contact Info</p>;
    }

    return content;
}