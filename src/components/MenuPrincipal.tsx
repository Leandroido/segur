export default function MenuPrincipal(): JSX.Element {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            style={{ height: '40px' }}
            src="/images/SEGUR - 170x170.jpg"
            alt="SEGUR"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#responsive-navbar-nav"
          aria-controls="responsive-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="responsive-navbar-nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                SEGUR
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/detraf">
                DETRAF
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gcm">
                GCM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/comdec">
                COMDEC
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
