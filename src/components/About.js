import React from 'react';

export default function About() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Boston University's Computer Science Ambassadors"
      />
      <meta
        name="keywords"
        content="BU, BUCSA, BU CSA, BU CS Ambassadors, Boston University, Boston University Computer Science"
      />
      <title>BU CS Ambassadors | About Us</title>
      <link rel="stylesheet" href="/static/css/main.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400&family=Rubik:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        sizes="32x32"
        href="/static/images/reg logo no background small.png"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="icon-bar">
        {/* https://css-tricks.com/simple-social-sharing-links/ */}
        {/* assuming link is https://www.bucsambassadors.bu.edu/ */}
        <a
          href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.bucsambassadors.bu.edu%2F"
          target="_blank"
          className="facebook"
        >
          <i className="fa fa-facebook" />
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.bucsambassadors.bu.edu%2F&text=Hey%21+BU+CS+Ambassadors+has+a+new+website%21+Take+a+look%21&hashtags=bostonuniversity,bucsambassadors"
          target="_blank"
          className="twitter"
        >
          <i className="fa fa-twitter" />
        </a>
        <a
          href="mailto:?subject=Check out this new website&body=Hey! BU CS Ambassadors has a new website! Take a look at https://www.bucsambassadors.bu.edu."
          title="Share by Email"
          className="mail"
        >
          <i className="fa fa-envelope" />
        </a>
      </div>
      <header className="header">
        <a href="index.html" className="logo">
          {/* Graphic as link => Alt attribute indicates path [MWAS] */}
          <img
            src="/static/images/reg logo no background small.png"
            alt="/views/index.html"
          />
        </a>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="mentor.html" className="link">
                Mentorship
              </a>
            </li>
            <li>
              <a href="ambassadors.html" className="link">
                Ambassadors
              </a>
            </li>
            <li>
              <a href="clubs.html" className="link">
                Clubs
              </a>
            </li>
            <li>
              <a href="resources.html" className="link">
                Resources
              </a>
            </li>
            <li>
              <a href="contactus.html" className="link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="about-hero">
        <h1>Get to Know Us!</h1>
      </section>
      <section className="about-aboutus">
        <div className="about-aboutus-mission">
          <h2>About Us</h2>
          <h5>
            As Ambassadors, our mission is to serve as a platform for a more
            collaborative, inclusive, and unified computer science community. We
            achieve this by encouraging and fostering a diverse community of
            students through peer mentorship, community-building events, and
            support from the computer science student-led organizations.
            Ultimately, we want to foster and encourage a diverse community,
            serving as a social network to qualify the BU CS experience as a
            whole.
          </h5>
        </div>
        <div className="about-aboutus-stats">
          <div className="about-stat">
            <h3>2020</h3>
            <p>BU CS Ambassadors was founded</p>
          </div>
          <div className="about-stat">
            <h3>14+ Ambassadors</h3>
            <p>From all backgrounds and expertises</p>
          </div>
          <div className="about-stat">
            <h3>
              <span className="redtext">100%</span>
            </h3>
            <p>Support, success, and smiles</p>
          </div>
        </div>
      </section>
      <section className="about-ours">
        <div className="about-ours-quarter">
          <a href="/mentor.html">
            <h2>Our culture</h2>
          </a>
          <h5>
            Ambassadors is all about helping you write your Computer Science
            story as a student here at Boston University.
          </h5>
        </div>
        <div className="about-ours-quarter">
          <a href="https://github.com/andyyvo/bucsawebdesign" target="_blank">
            <h2>Our code</h2>
          </a>
          <h5>It’s all online. It’s all open-source. It’s all on GitHub.</h5>
        </div>
        <div className="about-ours-quarter">
          <a href="/ambassadors.html">
            <h2>Our team</h2>
          </a>
          <h5>
            Ambassadors are a team that’s diverse, inclusive, and empowered.
          </h5>
        </div>
        <div className="about-ours-quarter">
          <a href="/resources.html">
            <h2>Our vibe</h2>
          </a>
          <h5>
            We love coding as much as the next developer, but that doesn’t mean
            you can’t have a social life.
          </h5>
        </div>
      </section>
      <section className="about-events">
        {/* <h2>We Get Involved...</h2>
  <div class="about-events-series">
      <div class="series-event">
          <div class="event-img">
              <!-- Adjust accordingly based on content [MWAS] */}
        <img
          src="/static/images/about-event-splash2019.jpg"
          alt="BU CS SPLASH 2019"
        />
        <div className="event-descriptions">
          <h4>CS SPLASH 2019</h4>
          <p>
            Hosted at the Center of Integrated Life Sciences, CS SPLASH 2019 was
            a fun opportunity us to connect with CS students as they explored
            related clubs!
          </p>
        </div>
        <div className="series-event">
          <div className="event-img">
            {/* Adjust accordingly based on content [MWAS] */}
            <img
              src="/static/images/about-event-splash2019.jpg"
              alt="BU CS SPLASH 2019"
            />
          </div>
          <div className="event-descriptions">
            <h4>CS SPLASH 2019</h4>
            <p>
              Hosted at the Center of Integrated Life Sciences, CS SPLASH 2019
              was a fun opportunity us to connect with CS students as they
              explored related clubs!
            </p>
          </div>
        </div>
        <div className="series-event">
          <div className="event-img">
            {/* Adjust accordingly based on content [MWAS] */}
            <img
              src="/static/images/about-event-splash2019.jpg"
              alt="BU CS SPLASH 2019"
            />
          </div>
          <div className="event-descriptions">
            <h4>CS SPLASH 2019</h4>
            <p>
              Hosted at the Center of Integrated Life Sciences, CS SPLASH 2019
              was a fun opportunity us to connect with CS students as they
              explored related clubs!
            </p>
          </div>
        </div>
        <h2 className="rightaligned">...On and Off Campus</h2> --&gt;
      </section>
      <footer>
        <div className="social-icons footer-layer">
          <a href="https://www.facebook.com/csa.bu.397" className="icon">
            <span
              className="iconify"
              data-inline="false"
              data-icon="mdi:facebook"
            />
          </a>
          <a href="https://twitter.com/BUCSAmbassadors" className="icon">
            <span
              className="iconify"
              data-inline="false"
              data-icon="mdi:twitter"
            />
          </a>
          <a href="https://www.instagram.com/bucsambassadors/" className="icon">
            <span
              className="iconify"
              data-inline="false"
              data-icon="mdi:instagram"
            />
          </a>
        </div>
        <div className="footer-information footer-layer">
          <div className="info">
            <a href="https://www.bu.edu/cs/" target="_blank"></a>
            <p>
              <a href="https://www.bu.edu/cs/" target="_blank">
                <b>Boston University</b> Arts &amp; Sciences
                <br />
                Department of Computer Science
              </a>
              <br />
              111 Cummington Mall, Boston, MA 02215
              <br />
              phone: (617)353-8919; email:{' '}
              <a href="mailto:cs@bu.edu">cs@bu.edu</a>
            </p>
          </div>
          <div className="info">
            <a href="/index.html"></a>
            <p>
              <a href="/index.html">
                <b>Boston University</b>
                <br />
                Computer Science Ambassadors
              </a>
              <br />
              111 Cummington Mall, Boston, MA 02215
              <br />
              email:{' '}
              <a href="mailto:bucsambassadors@gmail.com">
                bucsambassadors@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-links footer-layer">
          <div className="footer-indiv-link">
            <a href="https://www.bu.edu/copyright/" target="_blank">
              <p>
                <b>© 2021 Trustees of Boston University</b>
              </p>
            </a>
          </div>
          <div className="footer-indiv-link">
            <a
              href="https://www.bu.edu/policies/digital-privacy-statement/"
              target="_blank"
            >
              <p>
                <b>Privacy Statement</b>
              </p>
            </a>
          </div>
          <div className="footer-indiv-link">
            <a href="https://www.bu.edu/disability/" target="_blank">
              <p>
                <b>Accessibility</b>
              </p>
            </a>
          </div>
        </div>
        <div className="footer-bucsa footer-layer">
          <a href="/index.html">
            <p>
              <b>© 2021 Boston University Computer Science Ambassadors</b>
            </p>
          </a>
        </div>
        <div className="footer-bu footer-layer">
          <a href="https://www.bu.edu/" target="_blank">
            {/* Graphic as link => Alt attribute indicates path [MWAS] */}
            <img src="/static/images/BU-logo.png" alt="https://www.bu.edu/" />
          </a>
        </div>
      </footer>
      {/* iconify plugin */}
    </div>
  );
}
