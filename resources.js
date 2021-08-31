var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Boston University's Computer Science Ambassadors" />
        <meta name="keywords" content="BU, BUCSA, BU CSA, BU CS Ambassadors, Boston University, Boston University Computer Science" />
        <title>BU CS Ambassadors | Resources</title>
        <link rel="stylesheet" href="/static/css/main.css" />
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
            <img src="/static/images/reg logo no background small.png" alt="/views/index.html" />
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="mentor.html" className="link">Mentorship</a></li>
              <li><a href="ambassadors.html" className="link">Ambassadors</a></li>
              <li><a href="clubs.html" className="link">Clubs</a></li><li><a href="resources.html" className="link">Resources</a></li>
              <li><a href="contactus.html" className="link">Contact Us</a></li>
            </ul>
          </nav>
        </header>
        <section className="resources-landing">
          <div className="resources-landing-left">
            <h2>Resources</h2>
            <h4>We got all of your BU CS resources right here - a scroll and click away!</h4>
          </div>
          <div className="resources-landing-right">
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/resources-landing.svg" alt="" />
          </div>
        </section>
        <section className="resources-events">
          <div className="events-header">
            <h2>Events</h2>
            <br />
            <p>Pull out your calendars because we got some exciting upcoming events for you!</p>
          </div>
          <div className="resources-calendar">
            {/* 
                googlecalendar.js file retrieves the "CS ambassadors" calendar and display events within 1 year since moment they visit the website
                STILL NEEDS TO BE DONE: import those data and replace the test events with actual events with the following information:
                "Event Name", "Event Time", "Location", "Description", etc.
                also edit "Add Full Calendar" link to be able to add all events to the user's google cal
            */}
            <div className="calendar-event">
              <a target="_blank" href="https://calendar.google.com/calendar/u/2/r/eventedit/copy/MGZwbWRldWxrZDQ2NmxubWhmcjhxb244MGpfMjAyMTA2MTlUMTUwMDAwWiBidWNzYW1iYXNzYWRvcnNAbQ">
                <div className="calendar-event-add-icon">
                  <span className="iconify" data-inline="false" data-icon="mdi:calendar" />
                  <span className="icon-text">
                    <p><b>Add to Calendar</b></p>
                  </span>
                </div>
              </a>
              <div className="event-contents">
                {/* Adjust accordingly based on content [MWAS] */}
                <img src="/static/images/resources-event-resume.svg" alt="Resume Workshop" />
                <br />
                <br />
                <h4>Hacks &amp; Hangouts</h4>
                <br />
                <div className="event-logistics">
                  <p><span className="iconify" data-inline="false" data-icon="mdi:clock-time-eight" />6/2/2021 11:00 AM EST</p>
                  <p><span className="iconify" data-inline="false" data-icon="mdi:map-marker" />Zoom</p>
                </div>
                <br />
                <p>Hacks and Hangout sessions are a place where incoming Freshmen and transfer students have the ability to get to know each other outside of the formal Orientation experience. Get to know possible mentors through interactions with
                  upperclassmen in our program.
                  After answering your questions, and get to know your peers through informal conversation, engage with one another through multiplayer games and activities.</p>
              </div>
            </div>
            <div className="calendar-event">
              <a target="_blank" href="https://calendar.google.com/calendar/u/2/r/eventedit/copy/MGZwbWRldWxrZDQ2NmxubWhmcjhxb244MGpfMjAyMTA2MjZUMTUwMDAwWiBidWNzYW1iYXNzYWRvcnNAbQ">
                <div className="calendar-event-add-icon">
                  <span className="iconify" data-inline="false" data-icon="mdi:calendar" />
                  <span className="icon-text">
                    <p><b>Add to Calendar</b></p>
                  </span>
                </div>
              </a>
              <div className="event-contents">
                {/* Adjust accordingly based on content [MWAS] */}
                <img src="/static/images/resources-event-programming.svg" alt="Resume Workshop" />
                <br />
                <br />
                <h4>Hacks and Hangouts</h4>
                <br />
                <div className="event-logistics">
                  <p><span className="iconify" data-inline="false" data-icon="mdi:clock-time-eight" />6/19/2021 11:00 AM EST</p>
                  <p><span className="iconify" data-inline="false" data-icon="mdi:map-marker" />Zoom</p>
                </div>
                <br />
                <p>Hacks and Hangout sessions are a place where incoming Freshmen and transfer students have the ability to get to know each other outside of the formal Orientation experience. Get to know possible mentors through interactions with
                  upperclassmen in our program.
                  After answering your questions, and get to know your peers through informal conversation, engage with one another through multiplayer games and activities.</p>
              </div>
            </div>
            <div className="calendar-event">
              <a target="_blank" href="https://calendar.google.com/calendar/u/2/r/eventedit/copy/NjA0dGc3NHVtaW5rcmNrOGwwbG81OHU3NDAgYnVjc2FtYmFzc2Fkb3JzQG0">
                <div className="calendar-event-add-icon">
                  <span className="iconify" data-inline="false" data-icon="mdi:calendar" />
                  <span className="icon-text">
                    <p><b>Add to Calendar</b></p>
                  </span>
                </div>
              </a>
              <div className="event-contents">
                {/* Adjust accordingly based on content [MWAS] */}
                <img src="/static/images/resources-event-speaker.svg" alt="Resume Workshop" />
                <br />
                <br />
                <h4>Hacks and Hangouts</h4>
                <br />
                <div className="event-logistics">
                  <p><span className="iconify" data-inline="false" data-icon="mdi:clock-time-eight" />8/21/2021 11:00 AM EST</p>
                  <p><span className="iconify" data-inline="false" data-icon="mdi:map-marker" />Zoom</p>
                </div>
                <br />
                <p>Hacks and Hangout sessions are a place where incoming Freshmen and transfer students have the ability to get to know each other outside of the formal Orientation experience. Get to know possible mentors through interactions with
                  upperclassmen in our program.
                  After answering your questions, and get to know your peers through informal conversation, engage with one another through multiplayer games and activities.</p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="add-whole-calendar-btn">
            {/* Calendar links to embedded version of Google calendar as of now. Probably wanna make it nicer in the future. */}
            <button type="button" className="btn-blktored" onclick="window.open('https://calendar.google.com/calendar/u/2/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America/New_York&src=YnVjc2FtYmFzc2Fkb3JzQGdtYWlsLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043&title=BU+CS+Ambassadors&showPrint=0&showTitle=0&showTz=1&showTabs=0', 'Navigate');">Add Full Calendar</button>
          </div>
        </section>
        <section className="resources-jobs">
          <div className="jobs-text">
            <h2>New Jobs</h2>
            <br />
            {/* <p>Interning, Full-Time, Apply Now!</p> */}
            <p>Coming soon, but feel free to email us for more info!</p>
          </div>
          {/* <div class="jobs-list">
            <h3>Data Science</h3>
            <ul>
                <li>
                    <h5><b><i>Job #</i></b></h5>
                    <p>Description of job.</p>
                    <a href="/"><p><b>Apply Here</b></p></a>
                </li>
                <li>
                    <h5><b><i>Job #</i></b></h5>
                    <p>Description of job.</p>
                    <a href="/"><p><b>Apply Here</b></p></a>
                </li>
                <li>
                    <h5><b><i>Job #</i></b></h5>
                    <p>Description of job.</p>
                    <a href="/"><p><b>Apply Here</b></p></a>
                </li>
            </ul>
            <h3>SWE</h3>
            <ul>
                <li>
                    <h5><b><i>Job #</i></b></h5>
                    <p>Description of job.</p>
                    <a href="/"><p><b>Apply Here</b></p></a>
                </li>
                <li>
                    <h5><b><i>Job #</i></b></h5>
                    <p>Description of job.</p>
                    <a href="/"><p><b>Apply Here</b></p></a>
                </li>
                <li>
                    <h5><b><i>Job #</i></b></h5>
                    <p>Description of job.</p>
                    <a href="/"><p><b>Apply Here</b></p></a>
                </li>
            </ul>
            <h3>UX/UI</h3>
            <ul>
                <li>
                    <h5><b><i>Job #</i></b></h5>
                    <p>Description of job.</p>
                    <a href="/"><p><b>Apply Here</b></p></a>
                </li>
                <li>
                    <h5><b><i>Job #</i></b></h5>
                    <p>Description of job.</p>
                    <a href="/"><p><b>Apply Here</b></p></a>
                </li>
                <li>
                    <h5><b><i>Job #</i></b></h5>
                    <p>Description of job.</p>
                    <a href="/"><p><b>Apply Here</b></p></a>
                </li>
            </ul>
        </div> */}
        </section>
        <section className="resources-links">
          <div className="resources-links-header">
            <h2>Useful Links</h2>
            <br />
            <p>From clubs to BU-related information, we got it all!</p>
          </div>
          <div className="line" />
          <div className="resources-link-section">
            <a href="https://linktr.ee/bucsa" target="_blank">
              <h4>BU CSAmbassadors LinkTree<span className="iconify" data-inline="false" data-icon="mdi:chevron-right" /></h4>
            </a>
          </div>
          <div className="line" />
          <div className="resources-link-section">
            <a href="clubs.html">
              <h4>BU Computer Science Student Organizations<span className="iconify" data-inline="false" data-icon="mdi:chevron-right" /></h4>
            </a>
          </div>
          <div className="line" />
          <div className="resources-link-section">
            <a href="https://www.bu.edu/cs/" target="_blank">
              <h4>BU Computer Science Department<span className="iconify" data-inline="false" data-icon="mdi:chevron-right" /></h4>
            </a>
          </div>
          <div className="line" />
          <div className="resources-link-section">
            <a href="http://www.bu.edu/studentlink" target="_blank">
              <h4>BU Student Link<span className="iconify" data-inline="false" data-icon="mdi:chevron-right" /></h4>
            </a>
          </div>
          <div className="line" />
          <div className="resources-link-section">
            <a href="https://www.bu.edu/hub/" target="_blank">
              <h4>BU HUB<span className="iconify" data-inline="false" data-icon="mdi:chevron-right" /></h4>
            </a>
          </div>
          <div className="line" />
          <div className="resources-link-section">
            <a href="https://www.bu.edu/academics/cas/courses/computer-science/" target="_blank">
              <h4>CS Course Offerings<span className="iconify" data-inline="false" data-icon="mdi:chevron-right" /></h4>
            </a>
          </div>
          <div className="line" />
          <div className="resources-link-section">
            <a href="https://www.instagram.com/bu_cas/" target="_blank">
              <h4>CAS Instagram<span className="iconify" data-inline="false" data-icon="mdi:chevron-right" /></h4>
            </a>
          </div>
          <div className="line" />
          <div className="resources-link-section">
            <a href="https://www.bu.edu/today/" target="_blank">
              <h4>BU Today<span className="iconify" data-inline="false" data-icon="mdi:chevron-right" /></h4>
            </a>
          </div>
          <div className="line" />
          <div className="resources-link-section">
            <a href="https://www.instagram.com/bucsambassadors/" target="_blank">
              <h4>BU CSAmbassadors Instagram<span className="iconify" data-inline="false" data-icon="mdi:chevron-right" /></h4>
            </a>
          </div>
          <div className="line" />
          <div className="resources-link-section">
            <a href="https://www.bu.edu/spark/" target="_blank">
              <h4>BU Spark!<span className="iconify" data-inline="false" data-icon="mdi:chevron-right" /></h4>
            </a>
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
              <img src="/static/images/BU-logo.png" alt="https://www.bu.edu/" />
            </a>
          </div>
          {/* 
         */}
        </footer>
        {/* iconify plugin */}
      </div>
    );
  }
});
