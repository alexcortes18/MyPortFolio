import { createContext, useState } from "react";

const PortfolioContext = createContext({
    portfolio: 0,
    changePorfolioState: (id) => { },
});

export function PortfolioContextProvider({children}) {
    const [portfolioState, setPortfolioState] = useState(0);

    function changePorfolioState(id) {
        setPortfolioState(id);
        console.log(`We set the portfolio state to: ${id}`)
    }

    const portfolioCtx = {
        portfolio : portfolioState,
        changePorfolioState: changePorfolioState
    }

    return <PortfolioContext.Provider value={portfolioCtx}>{children}</PortfolioContext.Provider>
}


export default PortfolioContext;