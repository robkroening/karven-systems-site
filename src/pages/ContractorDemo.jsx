import ContractorLeadForm from "../ContractorLeadForm";

export default function ContractorDemo() {
  return (
    <>
      <section className="section">
        <div className="sectionHeader centered">
          <p className="eyebrow">AWS Automation Demo</p>
          <h1>Contractor Lead Automation</h1>
          <p>
            This demo shows how a small business can capture a project request,
            store the lead in AWS, and send an instant email notification
            automatically.
          </p>
        </div>

        <div className="demoVideoBox">
          <video controls playsInline className="demoVideo">
            <source src="/contractor-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <ContractorLeadForm />
    </>
  );
}