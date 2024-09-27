import Button from "./Button"

export default function SideBar() {
    return (
        <aside className="sidebar">
            <p className="sidebar-title">Alejandro Cortes</p>
            <img />
            <div className="button-container">
                <Button className="sidebar-button">Curriculum Vitae</Button>
                <Button className="sidebar-button">Cover Letter</Button>
                <Button className="sidebar-button">About Me</Button>
                <Button className="sidebar-button">Courses</Button>
                <Button className="sidebar-button">Life in Taiwan</Button>
                <Button className="sidebar-button">Contact Info</Button>
            </div>
        </aside >
    )
}