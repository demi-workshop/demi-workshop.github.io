export default function SubmissionPage() {
  return (
    <section id="submission">
      <h2>Submission</h2>
      <h3>How to Submit?</h3>
      <p>
        <strong className="u-color-secondary" style={{ fontWeight: 600 }}>
          CMT submission website:
        </strong>
        &nbsp;CMT submission link will be coming shortly.
      </p>
      <p style={{ marginBottom: 0 }}>
        We welcome your valuable contributions. Please follow the steps below to
        begin the submission process:
      </p>
      <ul>
        <li style={{ marginBottom: 0 }}>
          <a href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html">
            Create an author account
          </a>
          <span>
            &nbsp;to manage your submission and receive important updates.
          </span>
        </li>
        <li>
          <a href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html">
            How to submit a paper
          </a>
          <span>
            , a step-by-step guide to help you prepare and submit your
            manuscript.
          </span>
        </li>
      </ul>
      <p>
        Accepted papers will be published in a joint proceeding with the MICCAI
        2024 conference. All papers should be formatted according to the &nbsp;
        <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">
          Lecture Notes in Computer Science templates
        </a>
        &nbsp;. We recommend submission up to 8-pages and 2-pages of references
        (same as MICCAI main conference) for a double-blind peer review process
        In addition, since the joint workshop has adhered to the double-blinded
        peer review process, we ask that you please follow the &nbsp;
        <a href="https://conferences.miccai.org/2024/en/PAPER-SUBMISSION-AND-REBUTTAL-GUIDELINES.html">
          MICCAI2024 anonymity guidelines
        </a>
        &nbsp; when preparing your initial submission.
      </p>
      <h3>CMT Acknowledgement</h3>
      <p>
        The &nbsp;
        <a href="https://cmt3.research.microsoft.com/">Microsoft CMT service</a>
        &nbsp;was used for managing the peer-reviewing process for this
        conference. This service was provided for free by Microsoft and they
        bore all expenses, including costs for Azure cloud services as well as
        for software development and support.
      </p>
    </section>
  );
}
