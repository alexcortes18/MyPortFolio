export default function Button({children, ...props}) {
    return(
        <button {...props} className="sidebar-button">{children}</button>
    )
}