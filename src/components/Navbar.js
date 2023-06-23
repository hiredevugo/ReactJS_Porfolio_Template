const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-success fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">John<span className="bar">Doe</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li class="nav-item me-5">
                                <a className="nav-link" aria-current="page" href="localhost:3000">Home</a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item me-5">
                                <a class="nav-link" href="#stack">Stack</a>
                            </li>
                        </ul>
                        <div className="d-flex gap-3">
                            <button class="btn btn-light" type="submit"><a href="#services">Services</a></button>
                            <button class="btn btn-light" type="submit"><a href="#contact">Contact</a></button>
                            <button class="btn btn-light" type="submit"><a href="https://drive.google.com/file/d/1QcP22U4GYydBx9kP1ASKOM1TeO4ufd52/view?usp=drive_link" target={"_blank"} rel="noreferrer">Resume</a></button>
                        </div>

                    </div>
                </div>
            </nav>
            <hr />

        </div>
    );
}

export default Navbar;