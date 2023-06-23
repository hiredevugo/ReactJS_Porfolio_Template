import developer_activity from '../images/developer_activity.svg';
import projects from '../images/projects.svg';
import project2 from '../images/project2.svg';
import about_me from '../images/about_me.svg';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import HTML_Email_Template from '../images/HTML_Email_Template.svg';
import Support from '../images/Support.svg';
import Web_Academy from '../images/Web_Academy.svg';
import Progressive_Web_App from '../images/Progressive_Web_App.svg';
import Website_Design_Development from '../images/Website_Design_Development.svg';
import Cloud_Hosting from '../images/Cloud_Hosting.svg';
import Landing_Pages from '../images/Landing_Pages.svg';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

ChartJS.register(ArcElement, Tooltip, Legend);

const Content = () => {

    const data = {
        labels: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Bootswatch', 'ReactJS'],
        datasets: [{
            data: [18, 15, 10, 15, 15, 18],
            backgroundColor: ['aqua', 'blue', 'purple', 'orange', 'green', 'orangered']

        }]
    };

    const options = {}

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('insert_user_id_here', 'insert_template_id_here', form.current, 'insert_public_key_here')
      .then((result) => {
          console.log(result.text);
          console.log('Message Sent');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


    return (
        <div>
            <div className='content'>
                <main>
                    <div><br /><br /><br /><br />
                        <h1>Hello</h1>
                        <h1>I'm John Doe</h1>
                        <h1>Front-end Developer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates numquam non quos exercitationem? At vel, enim ratione vero laudantium quasi eos, sunt soluta explicabo cum amet facere minus maiores aspernatur.
                            Delectus accusantium, quos illum id optio laudantium! Quos deleniti libero, iusto repellat aspernatur ab voluptate reprehenderit dignissimos consequatur, quo illum temporibus placeat vitae facilis modi iure animi esse accusantium labore!</p>

                    </div>
                    <div className="d-flex gap-3 btn-media">
                        <button class="btn btn-outline-success" type="submit"><a href="#contact">Hire Me</a></button>
                        <button class="btn btn-outline-success" type="submit"><a href="#projects">Projects</a></button>

                    </div>
                </main>
                <figure><br /><br /><br /><br />
                    <img src={developer_activity} alt="JohnDoe" className="johndoe" width={550} />

                </figure>
            </div>

            <div id="about"><br />
                <div>
                    <h1 className='title'>About Me</h1>
                </div>
                <div className="about-me">
                    <div className='figure'>
                        <img src={about_me} alt="aboutme" className="aboutme" width={550} />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque libero voluptas, neque culpa suscipit? Soluta maxime adipisci perferendis iste alias at sit voluptatem earum, delectus minus! Expedita, earum beatae.
                        Dicta harum fugiat fugit, voluptatum, architecto laboriosam praesentium assumenda labore consectetur, eligendi molestias. Amet molestias aperiam placeat, error et consequuntur sunt vitae, id, quisquam tempore illum aut qui earum necessitatibus!
                        Repellendus debitis mollitia placeat commodi veniam recusandae quo nemo ducimus exercitationem in, ipsum suscipit quis est quisquam esse aliquid dignissimos error maiores cumque. Delectus sunt doloribus, quos animi iure dolor?
                        Sit labore sequi libero ratione non ad cum, sapiente itaque nisi. Voluptatem, eum! Saepe minima tempora tempore quos modi quia delectus totam. Ab ex temporibus iusto a nobis eaque deleniti?</p>
                </div>

            </div>


            <div><br />
                <div id="projects">
                    <h1 className="title">Projects</h1>
                </div>
                <div className="project-group">
                    <div className="project-cards">
                        <div className="cards"><img src={project2} alt="project2" width={400} /></div>
                        <div className="cards"><img src={project2} alt="project1" width={400} /></div>
                        <div className="cards"><img src={project2} alt="project2" width={400} /></div>
                    </div>
                    <div className="project-cards">
                        <div className="cards"><img src={project2} alt="project1" width={400} /></div>
                        <div className="cards"><img src={project2} alt="project2" width={400} /></div>
                        <div className="cards"><img src={project2} alt="project2" width={400} /></div>
                    </div>
                    <div className="projects">
                        <img src={projects} alt="Projects" width={550} />
                    </div>
                </div>

            </div>

            <div id="stack"><br />
                <div>
                    <h1 className="title">Stack</h1>
                </div>
                <div className="stack">
                    <div className="piechart">
                        <Pie data={data}
                            options={options} />
                    </div>
                </div>

            </div>

            <div id="services"><br />
                <div>
                    <h1 className="title">Services</h1>
                </div>
                <div className="services-group">
                    <div><h3>HTML Email Templates</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, praesentium? Hic numquam voluptate iste delectus natus qui illum esse vel eius officiis in, voluptatum, dicta totam illo praesentium, eum repellat!
                        Hic vel commodi sapiente, tempore neque perferendis eos architecto soluta similique exercitationem nemo quis labore dicta saepe voluptatem debitis, iusto aperiam quia? Fugit suscipit iste libero? Excepturi alias explicabo debitis.</p></div>
                    <img src={HTML_Email_Template} width={600} />

                </div><br /><br />
                <div className="services-group">
                    <img src={Support} width={600} />
                    <div><h3>24/7 Client Support</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, praesentium? Hic numquam voluptate iste delectus natus qui illum esse vel eius officiis in, voluptatum, dicta totam illo praesentium, eum repellat!
                        Hic vel commodi sapiente, tempore neque perferendis eos architecto soluta similique exercitationem nemo quis labore dicta saepe voluptatem debitis, iusto aperiam quia? Fugit suscipit iste libero? Excepturi alias explicabo debitis.</p></div>

                </div>

                <div className="services-group">
                    <div><h3>Web Design/Development Academy</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, praesentium? Hic numquam voluptate iste delectus natus qui illum esse vel eius officiis in, voluptatum, dicta totam illo praesentium, eum repellat!
                        Hic vel commodi sapiente, tempore neque perferendis eos architecto soluta similique exercitationem nemo quis labore dicta saepe voluptatem debitis, iusto aperiam quia? Fugit suscipit iste libero? Excepturi alias explicabo debitis.</p></div>
                    <img src={Web_Academy} width={600} />
                </div>

                <div className="services-group">
                    <img src={Progressive_Web_App} width={600} />
                    <div><h3>Progressive Web Apps</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, praesentium? Hic numquam voluptate iste delectus natus qui illum esse vel eius officiis in, voluptatum, dicta totam illo praesentium, eum repellat!
                        Hic vel commodi sapiente, tempore neque perferendis eos architecto soluta similique exercitationem nemo quis labore dicta saepe voluptatem debitis, iusto aperiam quia? Fugit suscipit iste libero? Excepturi alias explicabo debitis.</p></div>

                </div>

                <div className="services-group">
                    <div><h3>Website Design & Development</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, praesentium? Hic numquam voluptate iste delectus natus qui illum esse vel eius officiis in, voluptatum, dicta totam illo praesentium, eum repellat!
                        Hic vel commodi sapiente, tempore neque perferendis eos architecto soluta similique exercitationem nemo quis labore dicta saepe voluptatem debitis, iusto aperiam quia? Fugit suscipit iste libero? Excepturi alias explicabo debitis.</p></div>
                    <img src={Website_Design_Development} width={600} />

                </div><br /><br />

                <div className="services-group">
                    <img src={Cloud_Hosting} width={600} />
                    <div><h3>Cloud Hosting</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, praesentium? Hic numquam voluptate iste delectus natus qui illum esse vel eius officiis in, voluptatum, dicta totam illo praesentium, eum repellat!
                        Hic vel commodi sapiente, tempore neque perferendis eos architecto soluta similique exercitationem nemo quis labore dicta saepe voluptatem debitis, iusto aperiam quia? Fugit suscipit iste libero? Excepturi alias explicabo debitis.</p></div>


                </div>

                <div className="services-group">
                    <div><h3>Landing Pages Design/Development</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, praesentium? Hic numquam voluptate iste delectus natus qui illum esse vel eius officiis in, voluptatum, dicta totam illo praesentium, eum repellat!
                        Hic vel commodi sapiente, tempore neque perferendis eos architecto soluta similique exercitationem nemo quis labore dicta saepe voluptatem debitis, iusto aperiam quia? Fugit suscipit iste libero? Excepturi alias explicabo debitis.</p></div>
                    <img src={Landing_Pages} width={600} />
                </div>
            </div>

            <div id="contact">
                <div>
                    <h1 className="title">Contact Me</h1>
                </div>

                <div className="contactme">
                    <div className="contactme-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5095785503404!2d5.615441275392947!3d6.327950293661608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3445f2f5dfb%3A0x843861bdb16c110d!2sVictor%20Uwaifo%20Creative%20Hub%20%26%20Sound%20Stage!5e0!3m2!1sen!2sng!4v1687493893428!5m2!1sen!2sng" width="700" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                    </div>
                    
                    <div className="contactform">
                        <h5>Send Me A Message</h5>
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Your Name</label>
                            <input type="text" name="user_name" required />
                            <label>Your Email</label>
                            <input type="email" name="user_email" required />
                            <label>Drop Your Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" required />
                        </form>

                    </div>
                    <div className="sicons">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-square-whatsapp"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Content;