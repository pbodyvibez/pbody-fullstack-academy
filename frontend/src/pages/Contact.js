import "../styles/contact.css";

export default function Contact() {
  return (
    <main className="contactPage">

      <section className="contactHero">

        <span className="contactEyebrow">
          PBODY FULLSTACK ACADEMY SUPPORT
        </span>

        <h1>
          Contact PBody FullStack Academy
        </h1>

        <p>
          Need help with your membership, payments, courses, AI mentorship,
          projects, or anything else on the platform? Our support channels
          are available to help.
        </p>

      </section>

      <section className="contactGrid">

        <div className="contactCard">

          <div className="contactIcon">
            📧
          </div>

          <h2>
            Email Support
          </h2>

          <p>
            pbodyacademy@gmail.com
          </p>

          <span>
            General questions, account support, payments and refunds.
          </span>

          <a
            href="mailto:pbodyacademy@gmail.com?subject=PBody%20FullStack%20Academy%20Support%20Request"
          >
            Send Email
          </a>

        </div>

        <div className="contactCard">

          <div className="contactIcon">
            📱
          </div>

          <h2>
            Phone Support
          </h2>

          <p>
            +234 904 396 3968
          </p>

          <span>
            Direct support for important account and service enquiries.
          </span>

          <a href="tel:+2349043963968">
            Call Now
          </a>

        </div>

        <div className="contactCard">

          <div className="contactIcon">
            💬
          </div>

          <h2>
            WhatsApp
          </h2>

          <p>
            +234 813 255 3031
          </p>

          <span>
            Chat with PBody support for quick questions and assistance.
          </span>

          <a
            href="https://wa.me/2348132553031"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>

        </div>

        <div className="contactCard">

          <div className="contactIcon">
            📘
          </div>

          <h2>
            Facebook
          </h2>

          <p>
            PBody Community
          </p>

          <span>
            Follow PBody updates and connect with the community.
          </span>

          <a
            href="https://www.facebook.com/jeff.bryner.7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Facebook
          </a>

        </div>

        <div className="contactCard">

          <div className="contactIcon">
            𝕏
          </div>

          <h2>
            X / Twitter
          </h2>

          <p>
            @pbodyvibez
          </p>

          <span>
            Follow academy news, engineering content and updates.
          </span>

          <a
            href="https://x.com/pbodyvibez"
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

          <h2>
            Instagram
          </h2>

          <p>
            kennethsampsonprecious
          </p>

          <span>
            Discover PBody content, projects and community updates.
          </span>

          <a
            href="https://www.instagram.com/kennethsampsonprecious/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Instagram
          </a>

        </div>

        <div className="contactCard">

          <div className="contactIcon">
            💻
          </div>

          <h2>
            GitHub
          </h2>

          <p>
            PBody Development
          </p>

          <span>
            Explore PBody development and engineering projects.
          </span>

          <a
            href="https://github.com/pbodyvibez/pbody-vibez"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit GitHub
          </a>

        </div>

        <div className="contactCard">

          <div className="contactIcon">
            🔗
          </div>

          <h2>
            LinkedIn
          </h2>

          <p>
            Professional Network
          </p>

          <span>
            Connect professionally and follow PBody development.
          </span>

          <a
            href="https://www.linkedin.com/profile/view?id=ADoAAFJ0lHcBtvrc8qr8EpjX_5wlQmSFD3XF504&trk=nav_responsive_tab_profile_pic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit LinkedIn
          </a>

        </div>

      </section>

      <section className="contactMessage">

        <span className="contactMessageLabel">
          CUSTOMER SUPPORT
        </span>

        <h2>
          We're Here To Help.
        </h2>

        <p>
          PBody FullStack Academy provides digital software engineering
          education, courses, projects, assessments, AI-assisted learning
          features and related platform services.
        </p>

        <p>
          For membership questions, payment problems, subscription
          cancellations or refund requests, contact us using the support
          details above and include the email address associated with your
          PBody account and your transaction reference when available.
        </p>

        <div className="contactSupportLinks">

          <a href="/terms">
            Terms & Conditions
          </a>

          <a href="/refund">
            Refund Policy
          </a>

          <a href="/privacy">
            Privacy Policy
          </a>

          <a href="/pricing">
            Pricing & Membership
          </a>

        </div>

      </section>

      <section className="contactCompany">

        <h2>
          PBody FullStack Academy
        </h2>

        <p>
          AI-Powered Engineering Education
        </p>

        <p>
          Lagos, Nigeria
        </p>

        <a href="mailto:pbodyacademy@gmail.com">
          pbodyacademy@gmail.com
        </a>

      </section>

    </main>
  );
}