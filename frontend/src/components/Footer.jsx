export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-light border-top py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <span className="text-muted small">© {year} Taweesak Numma</span>
          </div>

          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://github.com/vactuzx-dot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="bi bi-github fs-5"></i>
              </a>
              <a
                href="https://facebook.com/vactuz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="mailto:taweesaknumma@gmail.com" className="text-dark">
                <i className="bi bi-envelope fs-5"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <a
              href="mailto:taweesaknumma@gmail.com"
              className="text-muted small text-decoration-none"
            >
              taweesaknumma@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
