import PortfolioContext from "../store/PortfolioContext";
import { useContext } from "react";
import PDFViewer from "./PDFViewer";

export default function Content() {
  const portfolioCtx = useContext(PortfolioContext);

  let content;

  // In here you should put a different component in each IF, when you are building your different Portfolio
  // components like: 
  if (portfolioCtx.portfolio === 0) {
    content = (
      <>
        <h2>Main content. Here will be the CV.</h2>
        <PDFViewer></PDFViewer>
      </>
    );
  } else if (portfolioCtx.portfolio === 1) {
    content = <h2>Cover letter</h2>;
  } else if (portfolioCtx.portfolio === 2) {
    content = <h2>About Me.</h2>;
  } else if (portfolioCtx.portfolio === 3) {
    content = <h2>Courses</h2>;
  } else if (portfolioCtx.portfolio === 4) {
    content = <h2>Life in Taiwan</h2>;
  } else if (portfolioCtx.portfolio === 5) {
    content = <h2>Contact Info</h2>;
  }

  return content;
}