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
                    <a className="navbar-brand" href="/"><strong>TextUtils</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact us</a>
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