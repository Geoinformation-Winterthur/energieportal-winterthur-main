import { Icon } from "@/components/common/icon/icon";
import { Slider } from "@/components/common/slider/slider";
import { SliderSlide } from "@/components/common/slider/slider-slide";
import { Detail } from "@/types/case-study";
import styles from "./detail-view.module.scss";

interface DetailViewProps {
  detail: Detail;
}

export const DetailView = ({ detail }: DetailViewProps) => {
  const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/`;

  const renderLeftCol = () => (
    <div>
      <table className={styles["detail-view__table"]}>
        <tbody>
          {detail.facts.map((fact) => (
            <tr className={styles["detail-view__table-row"]} key={fact.key}>
              <th className={styles["detail-view__table-row-head"]}>
                {fact.key}
              </th>
              <td className={styles["detail-view__table-row-data"]}>
                {fact.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles["detail-view__links"]}>
        {detail.links.map((link) => (
          <a
            key={link.label}
            href={link.src}
            target="_blank"
            className="has-icon"
          >
            {link.label} <Icon icon="arrow-right" />
          </a>
        ))}
      </div>
    </div>
  );

  const renderRightCol = () => (
    <div className={styles["detail-view__text"]}>
      <p>{detail.text.pre}</p>
      {detail.text.quote && (
        <div className={styles["detail-view__quote"]}>
          <p className={styles["detail-view__phrase"]}>
            {detail.text.quote?.phrase}
          </p>
          <p className={styles["detail-view__author"]}>
            {detail.text.quote?.author}
          </p>
        </div>
      )}
      {detail.text.post && <p>{detail.text.post}</p>}
    </div>
  );

  return (
    <div className={styles["detail-view"]}>
      <div className={styles["detail-view__inner"]}>
        <h3 className={styles["detail-view__title"]}>{detail.title}</h3>
        <Slider slimPagination>
          {detail.images.map((image, index) => (
            <SliderSlide key={index}>
              <div className={styles["detail-view__img-container"]}>
                <figure>
                  <img src={imagePath + image.src} alt={image.alt} />
                  <figcaption className={styles["detail-view__copyright"]}>
                    Bildquelle: {image.copyright}
                  </figcaption>
                </figure>
              </div>
            </SliderSlide>
          ))}
        </Slider>
        <div className={styles["detail-view__content"]}>
          {renderLeftCol()}
          {renderRightCol()}
        </div>
      </div>
    </div>
  );
};
