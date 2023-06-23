const Footer = () => {
    return ( 
        <div className="footer">
        
            <div className="footer-div"><h3 className="footer-title">John<span className="bar">Doe</span></h3></div>
            <div className="footer-links">
                <a href="localhost:3000">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
            </div>
            <div className="footer-links">
                <a href="#stack">Stack</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
                <a href="https://drive.google.com/file/d/1QcP22U4GYydBx9kP1ASKOM1TeO4ufd52/view?usp=drive_link" target={"_blank"}rel="noreferrer">Resume</a>
            </div>
            <div className="footer-icons">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-square-whatsapp"></i>
                        <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="footer-date" style={{color:"grey"}}>&copy; This template is made with &hearts; by <a href="hiredevugo.netlify.app" target={"_blank"} style={{marginLeft: 4 + "px"}}>hiredevugo</a></div>
        </div>
     );
}
 
export default Footer;