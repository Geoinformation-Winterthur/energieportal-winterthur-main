import { Icon } from "@/components/common/icon/icon";
import { FullWidth } from "@/components/common/layout/full-width/full-width";
import { TwoCols } from "@/components/common/layout/two-cols/two-cols";
import { Slider } from "@/components/common/slider/slider";
import { SliderSlide } from "@/components/common/slider/slider-slide";
import Image from "next/image";
import { Detail } from "../teaser-tiles/teaser-tiles";
import styles from "./detail-view.module.scss";

interface DetailViewProps {
  detail: Detail;
}

export const DetailView = ({ detail }: DetailViewProps) => {
  const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/`;
  const renderLeftCol = () => (
    <>
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
      <div>
        {detail.links.map((link) => (
          <a href={link.src} target="_blank" className="has-icon">
            {link.label} <Icon icon="arrow-right" />
          </a>
        ))}
      </div>
    </>
  );

  const renderRightCol = () => (
    <>
      <p>{detail.text.post}</p>
      {detail.text.quote && (
        <div>
          <p>{detail.text.quote?.phrase}</p>
          <p>{detail.text.quote?.author}</p>
        </div>
      )}
      {detail.text.post && <p>{detail.text.post}</p>}
    </>
  );

  return (
    <FullWidth variant="white">
      <h3>{detail.title}</h3>
      <Slider>
        {detail.images.map((image, index) => (
          <SliderSlide key={index}>
            <div
              style={{
                position: "relative",
                width: "500px",
                height: "500px",
              }}
            >
              <Image src={imagePath + image.src} alt={image.alt} fill />
            </div>
            <p>{image.copyright}</p>
          </SliderSlide>
        ))}
      </Slider>
      <TwoCols
        contentLeft={renderLeftCol()}
        contentRight={renderRightCol()}
      ></TwoCols>
    </FullWidth>
  );
};
