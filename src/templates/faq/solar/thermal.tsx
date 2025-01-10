import { Accordion } from '@/components/common/accordion/accordion';
import { Icon } from '@/components/common/icon/icon';
import { AccordionDetails } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from '../../../../i18n';
import styles from '../faq.module.scss';

export const SolarThermal = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['faq']}>
      <div className={styles['faq__acc-wrapper']}>
        <h4 className={styles['faq__title']}>
          {t('my_property.solar_faq.functionality')}
        </h4>
        <Accordion summary={t('my_property.solar_faq.thermal.summary_1')}>
          <AccordionDetails>
            {t('my_property.solar_faq.thermal.detail_1')}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t('my_property.solar_faq.thermal.summary_2')}>
          <AccordionDetails>
            {t('my_property.solar_faq.thermal.detail_2')}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t('my_property.solar_faq.thermal.summary_3')}>
          <AccordionDetails>
            {t('my_property.solar_faq.thermal.detail_3_1')}{' '}
            <a
              href={t('my_property.solar_faq.thermal.detail_3_link_target_1')}
              target="_blank"
            >
              {t('my_property.solar_faq.thermal.detail_3_link_1')}
            </a>{' '}
            {t('my_property.solar_faq.thermal.detail_3_2')}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t('my_property.solar_faq.thermal.summary_4')}>
          <AccordionDetails>
            {t('my_property.solar_faq.thermal.detail_4_1')}{' '}
            <a
              href={t('my_property.solar_faq.thermal.detail_4_link_target_1')}
              target="_blank"
            >
              {t('my_property.solar_faq.thermal.detail_4_link_1')}
            </a>
            {t('my_property.solar_faq.thermal.detail_4_2')}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t('my_property.solar_faq.thermal.summary_5')}>
          <AccordionDetails>
            {t('my_property.solar_faq.thermal.detail_5')}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles['faq__acc-wrapper']}>
        <h4 className={styles['faq__title']}>
          {t('my_property.solar_faq.permit')}
        </h4>
        <Accordion summary={t('my_property.solar_faq.thermal.summary_6')}>
          <AccordionDetails>
            {t('my_property.solar_faq.thermal.detail_6_1')}{' '}
            <a
              href={t('my_property.solar_faq.thermal.detail_6_link_target_1')}
              target="_blank"
            >
              {t('my_property.solar_faq.thermal.detail_6_link_1')}
            </a>
            {t('my_property.solar_faq.thermal.detail_6_2')}
          </AccordionDetails>
        </Accordion>
        <Accordion summary={t('my_property.solar_faq.thermal.summary_7')}>
          <AccordionDetails>
            {t('my_property.solar_faq.thermal.detail_7_1')}{' '}
            <a
              href={t('my_property.solar_faq.thermal.detail_7_link_target')}
              target="_blank"
            >
              {t('my_property.solar_faq.thermal.detail_7_link')}
            </a>
            {t('my_property.solar_faq.thermal.detail_7_2')}
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <h4 className={styles['faq__title']}>
          {t('my_property.faq.case_studies.title')}
        </h4>
        <Link
          href={t('my_property.faq.case_studies.link_target.solar')}
          className="has-icon"
        >
          {t('my_property.faq.case_studies.link')}
          <Icon icon="arrow-right" />
        </Link>
      </div>
    </div>
  );
};
