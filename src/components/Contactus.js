import React from 'react';
import 'src/css/main.css'

export default function Contactus() {
return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Boston University's Computer Science Ambassadors" />
      <meta name="keywords" content="BU, BUCSA, BU CSA, BU CS Ambassadors, Boston University, Boston University Computer Science" />
      <title>BU CS Ambassadors | Contact Us</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400&family=Rubik:wght@700&display=swap" rel="stylesheet" /> 
      <link rel="shortcut icon" sizes="32x32" href="/static/images/reg logo no background small.png" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="icon-bar">
        {/* https://css-tricks.com/simple-social-sharing-links/ */}
        {/* assuming link is https://www.bucsambassadors.bu.edu/ */}
        <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.bucsambassadors.bu.edu%2F" target="_blank" className="facebook"><i className="fa fa-facebook" /></a>
        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.bucsambassadors.bu.edu%2F&text=Hey%21+BU+CS+Ambassadors+has+a+new+website%21+Take+a+look%21&hashtags=bostonuniversity,bucsambassadors" target="_blank" className="twitter"><i className="fa fa-twitter" /></a>
        <a href="mailto:?subject=Check out this new website&body=Hey! BU CS Ambassadors has a new website! Take a look at https://www.bucsambassadors.bu.edu." title="Share by Email" className="mail"><i className="fa fa-envelope" /></a>
      </div>
      <header className="header">
        <a href="index.html" className="logo">
          {/* Graphic as link => Alt attribute indicates path [MWAS] */}
          <img src="/public/images/reg logo no background small.png" alt="/views/index.html" />
        </a>
        <nav>
          <nav>
            <ul className="nav-links">
              <li><a href="mentor.html" className="link">Mentorship</a></li>
              <li><a href="ambassadors.html" className="link">Ambassadors</a></li>
              <li><a href="clubs.html" className="link">Clubs</a></li>
              <li><a href="/resources.html" className="link">Resources</a></li>
              <li><a href="/contactus.html" className="link">Contact Us</a></li>
            </ul>
          </nav>
        </nav></header>
      <section className="contact">
        <h3 className="toptext">Have a Question? <span className="redtext">Contact Us</span></h3>
        {/* <h4 class="toptext">{{msg}}</h4> */}
        <div className="contact-wrapper">
          <div className="contact-about">
            <h3 className="contact-about-text">Contact Info</h3>
            <p className="contact-about-text">Fill up the form and an Ambassador will get back to you immediately!</p>
            <ul className="contact-socials contact-about-text">
              <li><span className="iconify" data-inline="false" data-icon="mdi:email-outline" /><a href="mailto:bucsambassadors@gmail.com">bucsambassadors@gmail.com</a></li>
            </ul>
            <div className="contact-icons">
              <a href="https://www.facebook.com/csa.bu.397" className="icon">
                <span className="iconify" data-inline="false" data-icon="mdi:facebook" />
              </a>
              <a href="https://twitter.com/BUCSAmbassadors" className="icon">
                <span className="iconify" data-inline="false" data-icon="mdi:twitter" />
              </a>
              <a href="https://www.instagram.com/bucsambassadors/" className="icon">
                <span className="iconify" data-inline="false" data-icon="mdi:instagram" />
              </a>
            </div>
          </div>
          <div className="contact-form">
            <h3>Email Us</h3>
            <form method="POST" action="send">
              <p>
                <label>Name</label>
                <input type="text" name="name" placeholder="First & Last" />
              </p>
              <p>
                <label>Email</label>
                <input type="email" name="email" placeholder="To reach you" />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea name="message" id="message" placeholder="Write your message..." cols={30} rows={10} defaultValue={""} />
              </p>
              <p className="full">
                <button type="submit" className="contact-submit">Submit</button>
              </p>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div className="social-icons footer-layer">
          <a href="https://www.facebook.com/csa.bu.397" className="icon">
            <span className="iconify" data-inline="false" data-icon="mdi:facebook" />
          </a>
          <a href="https://twitter.com/BUCSAmbassadors" className="icon">
            <span className="iconify" data-inline="false" data-icon="mdi:twitter" />
          </a>
          <a href="https://www.instagram.com/bucsambassadors/" className="icon">
            <span className="iconify" data-inline="false" data-icon="mdi:instagram" />
          </a>
        </div>
        <div className="footer-information footer-layer">
          <div className="info">
            <a href="https://www.bu.edu/cs/" target="_blank">
            </a><p><a href="https://www.bu.edu/cs/" target="_blank"><b>Boston University</b> Arts &amp; Sciences
                <br />
                Department of Computer Science
              </a>
              <br />
              111 Cummington Mall, Boston, MA 02215
              <br />
              phone: (617)353-8919; email: <a href="mailto:cs@bu.edu">cs@bu.edu</a></p>
          </div>
          <div className="info">
            <a href="/index.html">
            </a><p><a href="/index.html"><b>Boston University</b>
                <br />
                Computer Science Ambassadors
              </a>
              <br />
              111 Cummington Mall, Boston, MA 02215
              <br />
              email: <a href="mailto:bucsambassadors@gmail.com">bucsambassadors@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-links footer-layer">
          <div className="footer-indiv-link">
            <a href="https://www.bu.edu/copyright/" target="_blank">
              <p><b>© 2021 Trustees of Boston University</b></p>
            </a>
          </div>
          <div className="footer-indiv-link">
            <a href="https://www.bu.edu/policies/digital-privacy-statement/" target="_blank">
              <p><b>Privacy Statement</b></p>
            </a>
          </div>
          <div className="footer-indiv-link">
            <a href="https://www.bu.edu/disability/" target="_blank">
              <p><b>Accessibility</b></p>
            </a>
          </div>
        </div>
        <div className="footer-bucsa footer-layer">
          <a href="/index.html">
            <p><b>© 2021 Boston University Computer Science Ambassadors</b></p>
          </a>
        </div>
        <div className="footer-bu footer-layer">
          <a href="https://www.bu.edu/" target="_blank">
            {/* Graphic as link => Alt attribute indicates path [MWAS] */}
            <img src="public/images/BU-logo.png" alt="https://www.bu.edu/" />
          </a>
        </div>
      </footer>
      {/* iconify plugin */}
    </div>
  );
}