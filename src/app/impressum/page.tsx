import { Icon } from "@/components/common/icon/icon";
import { Intro } from "@/components/common/intro/intro";
import { FullWidth } from "@/components/common/layout/full-width/full-width";
import { Section } from "@/components/common/section/section";

export default function Impressum() {

  return (
    <main>
      <Intro title="Impressum" variant="dark" />
      <FullWidth>
        <Section title="Kontakt und Verantwortung">
          <p>Verantwortlich für den Inhalt ist die Abteilung Energie und Technik der Stadt Winterthur.</p>
          <address>
            Stadt Winterthur <br />
            Departement Bau und Mobilität <br />
            Amt für Baubewilligungen <br />
            Energie und Technik <br />
            Pionierstrasse 7 <br />
            8403 Winterthur <br />
          </address>
          <a href="tel:+41522675533"><Icon icon="phone" />+41 52 267 55 33</a>
          <a href="mailto:energieportal@win.ch"><Icon icon="mail" />energieportal@win.ch</a>
        </Section>
        <Section title="Realisierungspartner">
          <p>Bei der Erstellung des Energieportals wurde die Stadt Winterthur durch dreipol GmbH unterstützt.</p>
          <address>
            dreipol GmbH <br />
            Langstrasse 94 <br />
            8004 Zürich <br />
          </address>
          <a href="tel:+41433220644"><Icon icon="phone" />+41 43 322 06 44</a>
          <a href="mailto:hello@dreipol.ch"><Icon icon="mail" />hello@dreipol.ch</a>
          <a href="https://www.dreipol.ch" target="_blank">dreipol.ch<Icon icon="link" /></a>
        </Section>
        <Section title="Datenschutz">
          <p>Wir haben die Datenschutzerklärung sowohl am Schweizer Datenschutzgesetz als auch an der Europäischen Datenschutz-Grundverordnung (nachfolgend EU DSGVO) ausgerichtet. Ob und inwieweit die EU DSGVO anwendbar ist, hängt einer Einzelfall Beurteilung ab. Den Umgang mit der Erhebung, Verarbeitung und Löschung von Daten, sowie Ihrer Rechte betreffend dem Datenschutz können Sie der <a href="/pdf/Datenschutzerklaerung.pdf">Datenschutzerklärung</a> entnehmen.</p>
        </Section>
        <Section title="Nutzungsbedingungen">
          <p>Den Nutzungsgegenstand und Umgang mit der Applikation und deren Geodaten können Sie aus den <a href="/pdf/Nutzungsbedingungen.pdf">Nutzungsbedingungen</a> entnehmen.</p>
        </Section>
      </FullWidth>
    </main>
  );
}