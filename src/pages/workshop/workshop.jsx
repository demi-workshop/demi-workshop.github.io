import styles from "./style.module.css";

export default function WorkshopPage() {
  return (
    <section id="workshop-details">
      <h2>Workshop Themes</h2>
      <ul>
        <li>
          <span>
            <span className="u-font-bold u-color-secondary">
              Data Augmentation in the Medical Domain:
            </span>
            This sub theme covers data augmentation through geometric
            transformations, simulated data from phantoms and generative models
            in the medical domain, large language models, and multimodal data.
            It also investigates methods for designing application-aware data
            augmentation policies.
          </span>
        </li>
        <li>
          <span>
            <span className="u-font-bold u-color-secondary">
              Active Learning and Active Synthesis:
            </span>
            This sub theme focuses on methods for identifying the most
            discriminative and diverse subsets of unlabeled unimodal and
            multimodal data to train models for various clinical applications.
            Active synthesis involves generating synthetic data relevant to the
            target application.
          </span>
        </li>

        <li>
          <span>
            <span className="u-font-bold u-color-secondary">
              Self-Supervised Learning:
            </span>
            This sub theme explores methods for designing application-specific
            pretext tasks for pre-training models in a self-supervised manner.
            Generic pretext tasks are often suboptimal for downstream tasks,
            highlighting the need for tailored approaches for both unimodal and
            multimodal datasets.
          </span>
        </li>

        <li>
          <span>
            <span className="u-font-bold u-color-secondary">
              Datasets and Benchmarking for Data Engineering:
            </span>
            This subtheme explores datasets and benchmarks specifically designed
            for developing, assessing, and validating data engineering methods
            in both unimodal and multimodal setups, including validation of
            newly generated samples( e.g newly generated samples). As we know,
            the standard metrics are known to be suboptimal, expert rating is
            highly subjective and depends on the medical application.
          </span>
        </li>
      </ul>

      <h3>Imaging Themes (not limited to)</h3>
      <div className={styles["multicolumn-list"]}>
        <ul>
          <li><span>Optical imaging</span></li>
          <li><span>Endoscopy</span></li>
          <li><span>OCT</span></li>
          <li><span>Histopathology</span></li>
          <li><span>Hyperspectral imaging</span></li>
          <li><span>Opto-acoustics</span></li>
          <li><span>Fundus imaging</span></li>
          <li><span>Synthetic data of various imaging types</span></li>
        </ul>
        <ul>
          <li><span>PET</span></li>
          <li><span>MRI</span></li>
          <li><span>X-ray</span></li>
          <li><span>Ultrasound</span></li>
          <li><span>New imaging biomarkers</span></li>
          <li><span>Multimodal imaging</span></li>
          <li><span>CT</span></li>
        </ul>
      </div>

      <h3 style={{marginTop: "1rem"}}>Organs (not limited to)</h3>
      <div className={styles["multicolumn-list"]}>
        <ul>
          <li><span>Brain</span></li>
          <li><span>Head</span></li>
          <li><span>Neck</span></li>
          <li><span>Liver</span></li>
          <li><span>Gastrointestinal tract</span></li>
          <li><span>Lungs</span></li>
        </ul>
      </div>
    </section>
  );
}
