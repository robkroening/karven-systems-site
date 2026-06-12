export default function PastWork() {
  return (
    <section id="projects" className="section altSection">
      <div className="sectionHeader centered">
        <p className="eyebrow">Selected Work</p>
        <h1>Custom builds and digital systems.</h1>
        <p>
          Karven Systems combines practical construction experience with modern
          software engineering — building stronger spaces and smarter systems.
        </p>
      </div>

      <div className="projectShowcase">
        <div className="projectBlock">
          <div className="projectCard">
            <div>
              <p className="projectType">Digital System</p>
              <h3>Real Estate Listing Automation</h3>
              <p>
                Built a lightweight workflow where a realtor can submit property
                information through a form and automatically update a live
                listings page without editing website code.
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
  );
}