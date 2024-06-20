import { Icon } from "@/components/common/icon/icon";
import { Intro } from "@/components/common/intro/intro";
import { OneCol } from "@/components/common/layout/one-col/one-col";
import { Section } from "@/components/common/section/section";

export default function Impressum() {

  return (
    <main>
      <Intro title="Impressum" variant="dark" slim />
      <OneCol>
        <Section title="Hauptverantwortung">
          <p>Verantwortlich für den Inhalt des Portals ist die Abteilung Energie und Technik der Stadt Winterthur.</p>
          <address>
            Stadt Winterthur <br />
            Departement Bau und Mobilität <br />
            Amt für Baubewilligungen <br />
            Energie und Technik <br />
            Pionierstrasse 7 <br />
            8403 Winterthur <br />
          </address>
          <a href="mailto:energiefachstelle@win.ch" className="has-icon"><Icon icon="mail" />energiefachstelle@win.ch</a>
        </Section>
        <Section title="Realisierungspartner">
          <p>Bei der Erstellung des Energieportales wurde die Stadt Winterthur durch dreipol GmbH unterstützt.</p>
          <address>
            dreipol GmbH <br />
            Langstrasse 94 <br />
            8004 Zürich <br />
          </address>
          <a href="mailto:hello@dreipol.ch" className="has-icon"><Icon icon="mail" />hello@dreipol.ch</a>
          <a href="https://www.dreipol.ch" className="has-icon" target="_blank">dreipol.ch<Icon icon="link" /></a>
        </Section>
        <Section title="Datenschutz">
          <p>Den Umgang mit der Erhebung, Verarbeitung und Löschung von Daten, sowie Ihrer Rechte betreffend dem Datenschutz können Sie aus der <a href="/energieportal/pdf/Datenschutzerklaerung.pdf" target="_blank">Datenschutzerklärung</a> entnehmen.</p>
        </Section>
        <Section title="Nutzungsbedingungen">
          <p>Den Nutzungsgegenstand und Umgang mit der Applikation und deren Geodaten können Sie aus den <a href="/energieportal/pdf/Nutzungsbedingungen.pdf" target="_blank">Nutzungsbedingungen</a> entnehmen.</p>
        </Section>
      </OneCol>
    </main>
  );
}