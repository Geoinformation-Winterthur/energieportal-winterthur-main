'use client';
import { Accordion } from '@/components/common/accordion/accordion';
import { Intro } from '@/components/common/intro/intro';
import { FullWidth } from '@/components/common/layout/full-width/full-width';
import { OneCol } from '@/components/common/layout/one-col/one-col';
import { Section } from '@/components/common/section/section';
import TabList from '@/components/common/tabs/tab-list/tab-list';
import TabPanel from '@/components/common/tabs/tab-panel/tab-panel';
import Tab from '@/components/common/tabs/tab/tab';
import Tabs from '@/components/common/tabs/tabs';
import { Teaser } from '@/components/common/teaser/teaser';
import { TeaserTiles } from '@/components/features/teaser-tiles/teaser-tiles';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useTranslation } from '../../../i18n';

export const CaseStudiesTemplate = () => {
  const { t } = useTranslation();

  const hasTranslations = (type: string) => {
    const translations = t(`case_studies.${type}.items`, {
      returnObjects: true,
    }) as string[];
    return Array.isArray(translations);
  };

  return (
    <>
      <Intro title={t('case_studies.intro.title')} variant="dark" slim />
      <OneCol>
        <Teaser
          title={t('case_studies.teaser_title')}
          description={t('case_studies.teaser_description')}
          image={t('case_studies.teaser_image')}
          image_credits={t('case_studies.teaser_image_credits')}
          link={t('case_studies.teaser_link')}
          link_target={t('case_studies.teaser_link_target')}
          subtitle={t('case_studies.teaser_subtitle')}
          asRow
        />

        <Accordion summary={t('case_studies.accordion_summary')}>
          <AccordionDetails>
            {t('case_studies.accordion_detail')}
          </AccordionDetails>
        </Accordion>
      </OneCol>
      <OneCol noPaddingTop paddingBottomSmall>
        <Section
          title={t('case_studies.examples.title')}
          description={t('case_studies.examples.lead')}
        />
      </OneCol>
      <Tabs name={'tabs'}>
        <TabList>
          {hasTranslations('heating') && <Tab label="Heizung" value={'0'} />}
          {hasTranslations('solar') && <Tab label="Solaranlage" value={'1'} />}
          {hasTranslations('refurbishment') && (
            <Tab label="Sanierung" value={'2'} />
          )}
        </TabList>
        <TabPanel value={'0'}>
          <FullWidth>
            <TeaserTiles type="heating" />
          </FullWidth>
        </TabPanel>
        <TabPanel value={'1'}>
          <FullWidth>
            <TeaserTiles type="solar" />
          </FullWidth>
        </TabPanel>
        <TabPanel value={'2'}>
          <FullWidth>
            <TeaserTiles type="refurbishment" />
          </FullWidth>
        </TabPanel>
      </Tabs>
    </>
  );
};
