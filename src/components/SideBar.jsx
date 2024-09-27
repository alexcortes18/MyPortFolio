import Button from "./UI/Button"
import AlexProfilePic from "../assets/Alex.jpg"
import { buttonData } from "../button_data"
import { useContext } from "react"
import PortfolioContext from "../store/PortfolioContext"

export default function SideBar() {
    const portfolioCtx = useContext(PortfolioContext);

    function changePorfolioState(id) {
        portfolioCtx.changePorfolioState(id);
    }

    return (
        <aside className="sidebar">
            <p className="sidebar-title">Alejandro Cortes</p>
            <img className="profile-picture" src={AlexProfilePic} alt="Alex Profile Picture" />
            <div className="button-container">
                {/* <Button id={1}>Curriculum Vitae</Button>  */}
                {buttonData.map((button) => (
                    <Button
                        key={button.id}
                        onClick={() => changePorfolioState(button.id)}
                    >
                        {button.label}
                    </Button>
                ))}
            </div>
        </aside >
    )
}