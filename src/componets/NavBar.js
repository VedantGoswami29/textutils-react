import { Link } from 'react-router-dom';

function NavBar() {
    const toggleStyle = () => {
        var style = document.body.dataset['bsTheme'];
        var btn = document.getElementById("styleSwitcher");
        if (style === 'light') {
            document.body.dataset['bsTheme'] = 'dark';
            btn.innerText = "Light mode🌤️";
            btn.className = "btn btn-light";
        } else {
            document.body.dataset['bsTheme'] = 'light';
            btn.innerText = "Dark mode🌙";
            btn.className = "btn btn-dark";
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><strong>TextUtils</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact us</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button type="button" id="styleSwitcher" className="btn btn-dark" onClick={toggleStyle}>Dark Mode🌙</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar