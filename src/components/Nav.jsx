import globalSvg from '../assets/global.svg'

export default function Nav() {
    return (
        <header className="header">
            <nav className="nav">
                <img src={globalSvg} alt="global icon" />
                <h1>my travel jounal</h1>
            </nav>
        </header>
    )
}