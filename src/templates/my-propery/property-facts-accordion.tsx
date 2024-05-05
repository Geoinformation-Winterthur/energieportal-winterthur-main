import { Accordion } from "@/components/common/accordion/accordion";
import { Icon } from "@/components/common/icon/icon";
import { useTranslation } from "../../../i18n";
import { AccordionSummary, AccordionDetails } from "@mui/material";

export const PropertyFactsAccordion = () => {
  const { t } = useTranslation();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<Icon icon='chevron-down' color="red" />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {t("my_property.property_facts.accordion_summary")}
      </AccordionSummary>
      <AccordionDetails>
        {t("my_property.property_facts.accordion_detail_1")} <a href={t("my_property.property_facts.accordion_link_target_1")} target="_blank">{t("my_property.property_facts.accordion_link_1")}</a> {t("my_property.property_facts.accordion_detail_2")} <a href={t("my_property.property_facts.accordion_link_target_2")} target="_blank">{t("my_property.property_facts.accordion_link_2")}</a> {t("my_property.property_facts.accordion_detail_3")}
      </AccordionDetails>
    </Accordion>
  )
}