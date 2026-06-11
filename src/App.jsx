import './App.css'

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="brand">
          <img src="/karven-logo.png" alt="Karven Systems logo" />
          <span>Karven Systems</span>
        </div>

        <nav>
          <a href="#services">Services</a>
          <a href="#cloud-demo">Cloud Demo</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="heroContent">
            <p className="eyebrow">Custom Builds • Websites • Cloud Systems</p>
            <h1>Stronger spaces. Smarter systems.</h1>
            <p className="heroText">
              Karven Systems helps small businesses, builders, realtors, and
              service-based brands with custom renovations, websites,
              automation tools, and cloud-backed systems.
            </p>

            <div className="heroActions">
              <a className="primaryButton" href="#contact">Start a Project</a>
              <a className="secondaryButton" href="#projects">View Work</a>
            </div>
          </div>

          <div className="heroCard">
            <h2>Built for better spaces and smarter systems.</h2>
            <ul>
              <li>Custom renovations and finish work</li>
              <li>Business websites and landing pages</li>
              <li>Workflow and admin automation</li>
              <li>Cloud-backed tools and integrations</li>
            </ul>
          </div>
        </section>

        <section id="services" className="section">
          <div className="sectionHeader centered">
            <p className="eyebrow">What Karven Builds</p>
            <h2>Custom spaces and digital systems for real businesses.</h2>
            <p>
              Karven Systems combines hands-on building experience with modern
              software engineering — helping businesses improve the spaces they
              operate in and the systems they rely on every day.
            </p>
          </div>

          <div className="grid three">
            <div className="serviceCard">
              <span className="cardNumber">01</span>
              <h3>Custom Builds & Renovation</h3>
              <p>
                Thoughtful renovation, finish work, and space improvements built
                around cleaner design, stronger function, and better everyday
                use.
              </p>
            </div>

            <div className="serviceCard">
              <span className="cardNumber">02</span>
              <h3>Websites & Brand Pages</h3>
              <p>
                Clean, professional websites for businesses that need to explain
                their work, show credibility, and turn visitors into real leads.
              </p>
            </div>

            <div className="serviceCard">
              <span className="cardNumber">03</span>
              <h3>Automation & Cloud Tools</h3>
              <p>
                Simple systems that reduce repetitive admin work, connect forms
                and spreadsheets, and keep business information moving
                automatically.
              </p>
            </div>
          </div>
        </section>

        <section className="section offerSection">
          <div className="offerGrid">
            <div className="offerContent">
              <p className="eyebrow">Practical Digital Systems</p>
              <h2>What I can build for your business.</h2>
              <p>
                For small service businesses, Karven Systems focuses on simple,
                useful tools that help collect leads, organize requests, and
                reduce manual follow-up.
              </p>
            </div>

            <div className="offerList">
              <span>Quote request forms</span>
              <span>Contact forms</span>
              <span>Customer intake workflows</span>
              <span>Google Sheets lead tracking</span>
              <span>Email notifications</span>
              <span>Follow-up reminders</span>
              <span>Simple websites and landing pages</span>
              <span>AWS/cloud-hosted tools</span>
            </div>
          </div>
        </section>

        <section id="cloud-demo" className="section cloudSection">
          <div className="sectionHeader centered">
            <p className="eyebrow">AWS Cloud Automation Demo</p>
            <h2>Cloud-based lead intake for service businesses.</h2>
            <p>
              A practical automation system that helps businesses collect
              customer requests, organize leads, send notifications, and make
              follow-up easier.
            </p>
          </div>

          <div className="cloudDemoGrid">
            <div className="cloudDemoContent">
              <p className="projectType">Cloud System</p>
              <h3>Lead Intake & Follow-Up System</h3>
              <p>
                This demo shows how a small business can replace scattered
                texts, emails, phone notes, and manual spreadsheets with one
                simple quote request workflow.
              </p>
              <p>
                A customer submits a request through a website form. The system
                processes the submission, stores the lead, notifies the business
                owner, and keeps the request organized for follow-up.
              </p>

              <div className="cloudFeatureList">
                <span>Quote request form</span>
                <span>Email notifications</span>
                <span>Lead tracking</span>
                <span>Customer confirmation</span>
                <span>Follow-up workflow</span>
                <span>Serverless backend</span>
              </div>
            </div>

            <div className="cloudWorkflowCard">
              <h3>How it works</h3>

              <div className="workflowItem">
                <span>01</span>
                <p>Customer submits a quote or contact request.</p>
              </div>

              <div className="workflowItem">
                <span>02</span>
                <p>The request is processed automatically in the cloud.</p>
              </div>

              <div className="workflowItem">
                <span>03</span>
                <p>The business owner receives an email notification.</p>
              </div>

              <div className="workflowItem">
                <span>04</span>
                <p>The lead is stored so follow-up is easier to manage.</p>
              </div>

              <div className="cloudTechStack">
                <p>Example AWS stack</p>
                <strong>
                  S3 • CloudFront • API Gateway • Lambda • DynamoDB • SES •
                  CloudWatch
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section starterSection">
          <div className="starterBox">
            <div>
              <p className="eyebrow">Starter Project Offer</p>
              <h2>No upfront service fee for a small starter project.</h2>
            </div>

            <div>
              <p>
                Karven Systems is currently taking on a few small starter
                projects with no upfront service fee. If the finished work is
                helpful and you are satisfied with it, you can pay whatever you
                think is fair.
              </p>
              <p>
                This is a simple way to test a website, quote form, intake
                workflow, automation, or small digital system before committing
                to a larger project.
              </p>
              <a className="primaryButton" href="#contact">Start a Starter Project</a>
            </div>
          </div>
        </section>

        <section id="projects" className="section altSection">
          <div className="sectionHeader centered">
            <p className="eyebrow">Selected Work</p>
            <h2>Custom builds and digital systems.</h2>
            <p>
              Karven Systems combines practical construction experience with
              modern software engineering — building stronger spaces and smarter
              systems.
            </p>
          </div>

          <div className="projectShowcase">
            <div className="projectBlock">
              <div className="projectCard">
                <div>
                  <p className="projectType">Digital System</p>
                  <h3>Real Estate Listing Automation</h3>
                  <p>
                    Built a lightweight workflow where a realtor can submit
                    property information through a form and automatically update
                    a live listings page without editing website code.
                  </p>
                </div>

                <div className="projectDetails">
                  <span>Google Forms</span>
                  <span>Google Sheets</span>
                  <span>Website Integration</span>
                  <span>Live Updates</span>
                </div>
              </div>

              <div className="projectImages">
                <div className="projectImage large">
                  <img
                    src="/boone-automation-flow.png"
                    alt="Listing automation workflow diagram"
                  />
                </div>

                <div className="projectImageGrid">
                  <div className="projectImage">
                    <img
                      src="/boone-properties-listings-page.png"
                      alt="Automated real estate listings page"
                    />
                  </div>

                  <div className="projectImage">
                    <img
                      src="/listing-form-1.png"
                      alt="Google Form listing intake"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="projectBlock constructionProject">
              <div className="projectCard remodelProjectCard">
                <div>
                  <p className="projectType">Custom Build</p>
                  <h3>Complete Home Remodel</h3>
                  <p>
                    Completed a full home renovation focused on cleaner design,
                    stronger functionality, and polished finished spaces. This
                    project reflects the craftsmanship side of Karven Systems.
                  </p>
                </div>

                <div className="projectDetails remodelDetails">
                  <span>Renovation</span>
                  <span>Finish Work</span>
                  <span>Interior Updates</span>
                  <span>Project Execution</span>
                </div>
              </div>

              <div className="remodelGallery focalGallery">
                <div className="projectImage remodelFocal">
                  <img
                    src="/kistler-remodel-2.JPG"
                    alt="Completed home remodel kitchen"
                  />
                </div>

                <div className="projectImage remodelFocal">
                  <img
                    src="/kistler-remodel-3.JPG"
                    alt="Completed home remodel living room"
                  />
                </div>
              </div>

              <div className="remodelSecondaryGrid">
                <div className="projectImage">
                  <img
                    src="/kistler-remodel-4.JPG"
                    alt="Completed home remodel open living space"
                  />
                </div>

                <div className="projectImage">
                  <img
                    src="/kistler-remodel-1.JPG"
                    alt="Completed home remodel bedroom"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section processSection">
          <div className="sectionHeader centered">
            <p className="eyebrow">How It Works</p>
            <h2>A simple process from idea to working system.</h2>
            <p>
              Karven Systems keeps the build process clear and practical, so you
              know exactly what is being built, why it matters, and how it will
              help your business.
            </p>
          </div>

          <div className="processGrid">
            <div className="processStep">
              <span>01</span>
              <h3>Understand the workflow</h3>
              <p>
                We look at the current process, what is taking too much time,
                and where a website, automation, renovation, or custom tool
                could help.
              </p>
            </div>

            <div className="processStep">
              <span>02</span>
              <h3>Design the simplest system</h3>
              <p>
                The goal is not to overbuild. The goal is to create a clean,
                reliable solution that solves the actual business problem.
              </p>
            </div>

            <div className="processStep">
              <span>03</span>
              <h3>Build, test, and refine</h3>
              <p>
                The system is built, tested with real use cases, and adjusted so
                it feels easy to use before it becomes part of the business.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="about">
            <div>
              <p className="eyebrow">Why Karven</p>
              <h2>Built with a mix of craftsmanship and software engineering.</h2>
            </div>

            <div>
              <p>
                Karven Systems is run by Robert Kroening, a Charlotte-based
                software engineer and AWS Solutions Architect Certified
                professional with hands-on experience building and renovating
                real spaces.
              </p>
              <p>
                Karven Systems is built around a simple idea: good systems should
                be strong, useful, and easy to maintain. Whether it is a
                renovation, a website, an automation workflow, or a cloud-backed
                tool, the goal is to create something that looks sharp and works
                reliably.
              </p>
              <p>
                The focus is not overcomplicated software or overbuilt spaces.
                It is practical work that helps small businesses save time, stay
                organized, improve their spaces, and present themselves
                professionally.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <div className="contactBox">
            <p className="eyebrow">Start a Project</p>
            <h2>Have a space, website, workflow, or business system you want built?</h2>
            <p>
              Send a message with what you currently do manually, what type of
              customers you serve, and what you would like to make easier.
              Karven Systems will help map out the simplest solution.
            </p>

            <div className="contactActions">
              <a className="primaryButton" href="mailto:karvensystems@gmail.com">
                Email Karven Systems
              </a>
              <a
                className="secondaryButton"
                href="https://www.linkedin.com/in/robert-kroening-02066615b/"
                target="_blank"
                rel="noreferrer"
              >
                View LinkedIn
              </a>
            </div>

            <div className="contactLinks">
              <a href="mailto:karvensystems@gmail.com">karvensystems@gmail.com</a>
              <a
                href="https://www.instagram.com/builtbykarven"
                target="_blank"
                rel="noreferrer"
              >
                Instagram: @builtbykarven
              </a>
              <a
                href="https://www.linkedin.com/in/robert-kroening-02066615b/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn: Robert Kroening
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App