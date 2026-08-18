
import "../styles/contact.css";

export default function Contact() {

  return(

      <div className="contactPage">

        <section className="contactHero">

          <h1>
            📞 Contact PBody FullStack Academy
          </h1>

          <p>
            Have questions about courses, mentorship, partnerships or technology?
            Connect with us through any channel below.
          </p>

        </section>

        <div className="contactGrid">

          <div className="contactCard">

            <div className="contactIcon">
              📧
            </div>

            <h2>Email</h2>

            <p>
              pbodyacademy@gmail.com
            </p>

            <a href="mailto:pbodyacademy@gmail.com?subject=PBody%20FullStack%20Academy%20Inquiry">
              Send Email
            </a>

          </div>

          <div className="contactCard">

            <div className="contactIcon">
              📱
            </div>

            <h2>Phone</h2>

            <p>
              +234 904 396 3968
            </p>

            <a href="tel:+2349043963968">
              Call Now
            </a>

          </div>

          <div className="contactCard">

            <div className="contactIcon">
              💬
            </div>

            <h2>WhatsApp</h2>

            <p>
              +234 813 255 3031
            </p>

            <a
              href="https://wa.me/2348132553031"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat WhatsApp
            </a>

          </div>

          <div className="contactCard">

            <div className="contactIcon">
              📘
            </div>

            <h2>Facebook</h2>

            <p>
              PBody Community
            </p>

            <a
              href="https://www.facebook.com/jeff.bryner.7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

          </div>

          <div className="contactCard">

            <div className="contactIcon">
              𝕏
            </div>

            <h2>X / Twitter</h2>

            <p>
              @pbodyvibez
            </p>

            <a
              href="https://x.com/pbodyvibez?s"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit X
            </a>

          </div>

          <div className="contactCard">

            <div className="contactIcon">
              📸
            </div>

            <h2>Instagram</h2>

            <p>
              kennethsampsonprecious
            </p>

            <a
              href="https://www.instagram.com/kennethsampsonprecious?igsh=MWFmd2gya2FtOHEzZw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

          </div>

          <div className="contactCard">

            <div className="contactIcon">
              💻
            </div>

            <h2>GitHub</h2>

            <p>
              PBody Development
            </p>

            <a
              href="https://github.com/pbodyvibez/pbody-vibez"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

          </div>

          <div className="contactCard">

            <div className="contactIcon">
              🔗
            </div>

            <h2>LinkedIn</h2>

            <p>
              Professional Network
            </p>

            <a
              href="https://www.linkedin.com/profile/view?id=ADoAAFJ0lHcBtvrc8qr8EpjX_5wlQmSFD3XF504&trk=nav_responsive_tab_profile_pic"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <section className="contactMessage">

          <h2>
            Build The Future With Us 🚀
          </h2>

          <p>
            PBody FullStack Academy helps people develop practical engineering
            skills and create technology solutions for real-world problems.
          </p>

        </section>

      </div>

  );

}