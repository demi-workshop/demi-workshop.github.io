import styles from "./style.module.css";

export default function AboutPage() {
  return (
    <section id="about-demi">
      <h2>About DEMI</h2>
      <p>
        The overall goal of this workshop is to bring researchers, academicians,
        professionals and policymakers under a single umbrella to innovate data
        engineering methods that make the best of the limited data in the
        medical domain. In our past two editions, we focused on addressing
        several key issues in data engineering, including:
      </p>
      <ul>
        <li>
          <span>
            Generating task-specific biomedical synthetic data and augmenting it
            with real data.
          </span>
        </li>
        <li>
          <span>
            Developing principled methods to identify diverse and discriminative
            subsets of training examples to label for downstream tasks,
            minimizing annotation budget and time without compromising
            performance.
          </span>
        </li>
        <li>
          <span>
            Designing image-specific augmentation policies instead of relying on
            random policies. For instance, vertically flipping lungs in medical
            images could mislabel the right lung as the left, a common issue in
            X-rays.
          </span>
        </li>
        <li>
          <span>
            Designing suitable pretext tasks for specific downstream medical
            tasks, learning from noisy data, and learning from distributed data
            without sharing raw content.
          </span>
        </li>
      </ul>

      <h3>Our Past Iterations</h3>

      <p>
        Our contributions are compiled and published in the proceedings. Some of
        the contributions from the earlier editions, such as Khanal et al.
        (2023), proposed training models using self-supervised learning,
        followed by employing methods to learn from noisy labels. Similarly,
        Poudel et al. (2024) and Thrasher et al. (2024) proposed a task-aware
        active learning method to sample the most informative unlabeled data,
        reducing the need for training examples by 50%. Contributions from Dener
        et al. (2023), Reyes-Amezcua et al. (2024), and Rau et al. (2023)
        focused on curating both task-aware and task-unaware synthetic data and
        addressing biases in synthetic data. Babu et al. (2024) and Pokhrel et
        al. (2024) highlighted biases in data augmentation and their use in
        out-of-distribution detection, respectively.
      </p>
      <p>
        These contributions have developed innovative and principled methods to
        integrate different aspects of data engineering, maximizing the benefits
        of available data—central to this workshop's theme. As Ilya Sutskever
        remarked in his speech at NeurIPS 2024, "Computers are advancing with
        better hardware, algorithms, and clusters." However, data—the "fossil
        fuel" of AI—has reached its growth limit. His statement underscores the
        growing importance of AI tools and techniques for effectively utilizing
        limited data.
      </p>
      <p>
        Data-driven deep learning architectures such as UNet, VGGNet, ResNet,
        V-Net, DenseNet, and Vision Transformers are widely used in downstream
        tasks such as detection, classification, and 3D reconstruction. These
        architectures require large volumes of annotated data to train their
        millions of parameters, which is difficult and expensive to collect and
        annotate. In medical image analysis, standard sensors are often
        unsuitable for in vivo use. When they are suitable, data collection
        requires patient consent, lengthy acquisition procedures, and the large
        inter-rater variability in medical image analysis which makes it even
        harder to have high-quality labels.
      </p>
      <p>
        To address these challenges, data engineering methods such as geometric
        transformations (e.g., rotation, flipping, cropping), MixUp, and Cutout
        —though limited to single modality—have been introduced to expand
        training datasets over the past decade. However, the frequency of such
        contributions remains low compared to architectural engineering.
        Although infrequent, these methods have proven effective in improving
        model generalization.
      </p>
      <p>
        In recent years, there has been a growing trend in leveraging multimodal
        data. Large Language Models, Vision-Language Models, and multimodal
        generative models have been used to synthesize multimodal content,
        expanding training datasets. Despite the ability to generate large
        volumes of synthetic data, the fidelity and quality of this data are
        often insufficient, leading to either modest improvements or even
        deterioration in model generalization. Existing data engineering methods
        are predominantly designed for unimodal datasets, emphasizing the need
        to extend them to handle multimodal data effectively.
      </p>

      <h3>See also</h3>
      <ul>
        <li style={{marginBottom: "0.25rem"}}><a href="https://demi-workshop.github.io/demi-workshop2024.github.io/">DEMI @ MICCAI-2024</a></li>
        <li><a href="https://demi-workshop.github.io/demi-workshop2023.github.io/">DEMI @ MICCAI-2023</a></li>
      </ul>
    </section>
  );
}
