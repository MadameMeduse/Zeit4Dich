// lib/eventdata.ts

export interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
    shortLocation: string;
    fullDescription: string;
    details: string[];
    contactInfo?: string;
    imageSrc: string;
    imageAlt: string;
  }
  
  export const EVENT_DATA: Event[] = [
    {
      id: 'group-sessions',
      title: 'Atem-Abende in der Gruppe',
      date: '23. Feb, 30. März, 27. Apr, 25. Mai, 29. Juni 2026, jeweils 19:00–21:00 Uhr',
      location: 'Verein Giraffen.Schule, Balgacherstrasse 202, Heerbrugg 9435',
      shortLocation: 'Heerbrugg',
      fullDescription: 'An jedem letzten Montag im Monat treffen wir uns im geschützten Kreis, um gemeinsam zur Ruhe zu kommen, uns auszutauschen und innere Stabilität zu kultivieren.',
      details: [
        'Wir treffen uns einmal im Monat im GfK Seminarraum des Vereins Giraffen.Schule um im geschützten Kreis anzukommen, uns auszutauschen und gemeinsam zur Ruhe zu kommen.',
        'Mit Atemübungen, Entspannungstechniken und Affirmationen stärkst Du deine innere Stabilität und nimmst mehr Ruhe mit in deinen Alltag.',
        'In einer vertrauensvollen Atmosphäre findest Du Raum für Dich selbst – zum Ankommen, zum Loslassen und zum bewussten Durchatmen.',
        'Die Abende sind für alle offen, die mehr Achtsamkeit in ihren Alltag integrieren möchten. Keine Vorkenntnisse erforderlich.'
      ],
      contactInfo: 'Mehr Infos gerne auf Anfrage per E-Mail.',
      imageSrc: 'images/Gruppe_Abende.jpg',
      imageAlt: 'Atem-Abende in der Gruppe - Gruppentreffen für bewusstes Atmen'
    },
    {
      id: 'retreat-2026',
      title: 'Retreat: Finde Dein Glück',
      date: 'Level 1: 14.–17. Feb 2026 | Level 2: 09.–12. April 2026',
      location: 'Château de Marigny, Frankreich (inkl. Unterkunft & Verpflegung)',
      shortLocation: 'Frankreich',
      fullDescription: 'Ein transformatives Retreat im malerischen Château de Marigny. Begleitet von Karl Haag und Tina Christina Tomson tauchst Du ein in eine Reise zur Selbstentdeckung und innerem Glück.',
      details: [
        'Nimm dir eine bewusste Auszeit. In sechs klaren Schritten auf die Suche nach dem Wesentlichen. Seminarleitung: Karl Haag, Tina Christina Tomson.',
        'Level 1: 14.–17. Februar 2026 – Grundlagen der Selbstfindung und bewussten Lebensführung',
        'Level 2: 09.–12. April 2026 – Vertiefung und Integration in den Alltag',
        'In einem neu renovierten malerischen Schloss in Frankreich inklusive Unterkunft im Château, liebevoll zubereiteten Mahlzeiten und allen Retreat-Inhalten.',
        'Mit geführten Atemreisen, Meditationen, kreativen Workshops und Zeit für Selbstreflexion findest Du zurück zu Deiner inneren Mitte.',
        'Die Retreats bauen aufeinander auf, können aber auch einzeln besucht werden.'
      ],
      contactInfo: 'Kontaktiere uns für genauere Infos zu Preisen, Anmeldung und dem vollständigen Programm.',
      imageSrc: 'images/france.webp',
      imageAlt: 'Retreat Finde Dein Glück - Château de Marigny in Frankreich'
    },
    {
      id: 'seminar-2026',
      title: 'Tagesseminar „Innere Kraft"',
      date: 'Sonntag, 03. Mai 2026, 09:30–17:00 (Pause 12:00–13:30)',
      location: 'Verein Giraffen.Schule, Heerbrugg',
      shortLocation: 'Heerbrugg',
      fullDescription: 'Ein intensiver Tag der Selbstentfaltung und des Neubeginns. Erlebe die transformative Kraft der <span style="font-style: italic;">Rebirthing</span>-Atemreise nach dem UR-ATEM© Prozess.',
      details: [
        'Erlebe die <span style="font-style: italic;">Rebirthing</span>-Atemreise nach dem UR-ATEM© Prozess. Selbstentfaltung, Neubeginn und frische Energie in achtsamer Atmosphäre.',
        'Dieses Seminar lädt dich ein zu Selbstentfaltung, Neubeginn, frischer Energie und bewusstem Auftanken.',
        'In einer geschützten, achtsamen Atmosphäre findest Du Raum, dich neu auszurichten, alte Blockaden loszulassen und die eigene innere Kraft zu entfalten.',
        'Der UR-ATEM© Prozess verbindet bewusstes Atmen mit körperlicher Entspannung und emotionaler Öffnung.',
        'Wir arbeiten in Kleingruppen, sodass jede/r Teilnehmer/in individuell begleitet werden kann.',
        'Inkludiert: Alle Seminarunterlagen, Getränke und ein vegetarischer Mittagsimbiss.'
      ],
      contactInfo: 'Anmeldung und weitere Infos per E-Mail. Begrenzte Teilnehmerzahl.',
      imageSrc: 'images/group_breathwork.webp',
      imageAlt: 'Tagesseminar Innere Kraft - <span style="font-style: italic;">Rebirthing</span>-Atemreise nach UR-ATEM© Prozess'
    }
  ];