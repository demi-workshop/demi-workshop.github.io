import { Link } from "react-router-dom";

export default function CallForPapersPage() {
  return (
    <section id="call-for-papers">
      <h2>Call for Papers</h2>
      <p>
        We invite researchers, practitioners, and enthusiasts to submit original
        contributions aligned with the themes outlined on our&nbsp;
        <Link to="/workshop-details">workshop details page</Link>. Please review
        the submission guidelines and ensure your work adheres to the specified
        format and deadlines listed on the&nbsp;
        <Link to="/important-dates">important dates page</Link>. Join us in
        advancing discussions and innovation in this exciting area!
      </p>
      <h3>How to Submit?</h3>
      <p>
        <strong className="u-color-secondary" style={{ fontWeight: 600 }}>
          CMT submission website:
        </strong>
        &nbsp;
        <a href="https://cmt3.research.microsoft.com/DEMI2025/">CMT DEMI</a>
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
        2024 conference.
      </p>
      <p>
        All papers should be formatted according to the &nbsp;
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
