import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import styles from "./style.module.css";

const getPastIterationsImages = () => {
  const demi2023 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const demi2024 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const demi2023_urls = demi2023.map(
    (index) => `./photos/demi-2023/${index}.png`
  );
  const demi2024_urls = demi2024.map(
    (index) => `./photos/demi-2024/${index}.png`
  );

  return [...demi2023_urls, ...demi2024_urls];
};

export default function PastIterationsPage() {
  const images_urls = getPastIterationsImages();
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [items_per_page, set_items_per_page] = useState(6);

  const handle_show_right = () => {
    setVisibleIndex((prev) =>
      Math.min(prev + items_per_page, images_urls.length)
    );
  };
  const handle_show_left = () => {
    setVisibleIndex((prev) => Math.max(0, prev - items_per_page));
  };

  useEffect(() => {
    const handle_items_per_page_on_resize = () => {
      set_items_per_page(() => {
        const width = document.body.clientWidth;

        if (width >= 980) {
          return 6;
        } else {
          return 2;
        }
      });
    };

    handle_items_per_page_on_resize();

    window.addEventListener("resize", handle_items_per_page_on_resize);

    return () =>
      window.removeEventListener("resize", handle_items_per_page_on_resize);
  }, []);

  return (
    <section id="past-iterations">
      <h2>Our Past Iterations</h2>

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

      <h3>Glimpses of Past Events</h3>
      <div className={styles["gallery__wrapper"]}>
        <div
          className={`${styles["gallery__btn"]} ${
            visibleIndex == 0 ? styles["gallery__btn--inactive"] : ""
          }`}
          onClick={handle_show_left}
        >
          <FaChevronLeft />
        </div>
        <div className={styles["gallery"]}>
          {images_urls
            .slice(
              visibleIndex,
              Math.min(visibleIndex + items_per_page, images_urls.length)
            )
            .map((url) => (
              <div key={url} className={styles["gallery__item"]}>
                <img src={url} alt="DEMI workshop images" height="200px"/>
              </div>
            ))}
        </div>
        <div
          className={`${styles["gallery__btn"]} ${
            visibleIndex + items_per_page >= images_urls.length
              ? styles["gallery__btn--inactive"]
              : ""
          }`}
          onClick={handle_show_right}
        >
          <FaChevronRight />
        </div>
      </div>

      <h3>See also</h3>
      <ul>
        <li style={{ marginBottom: "0.25rem" }}>
          <a href="https://demi-workshop.github.io/demi-workshop2024.github.io/">
            DEMI @ MICCAI-2024
          </a>
        </li>
        <li>
          <a href="https://demi-workshop.github.io/demi-workshop2023.github.io/">
            DEMI @ MICCAI-2023
          </a>
        </li>
      </ul>
    </section>
  );
}
