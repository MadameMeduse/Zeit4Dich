import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Mail } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
type PageType = 'home' | 'about' | 'events' | 'contact' | 'atem' | 'massage' | 'inspiration';
type CategoryType = 'meditationen' | 'lifestyle' | 'blog';
interface ArticleData {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  category: CategoryType;
  categoryLabel: string;
  date: string;
  thumbnail: string;
  heroImage: string;
}
interface ArticlePageProps {
  articleId: string;
  category: CategoryType;
  onNavigate?: (page: PageType) => void;
  onBack?: () => void;
  onArticleClick?: (articleId: string, category: CategoryType) => void;
}

/**
 * ArticlePage - Redesigned to Match Atem/Massage Visual Language
 * 
 * Features:
 * - Brand blue (#4d83a4) accents for links, blockquotes, and CTA buttons
 * - Improved responsive typography with proper mobile/tablet scaling
 * - Enhanced hero padding to prevent navbar overlap
 * - Consistent spacing and visual hierarchy
 * - Professional card styling matching other pages
 */
export default function ArticlePage({
  articleId,
  category,
  onNavigate,
  onBack,
  onArticleClick
}: ArticlePageProps) {
  const [readingProgress, setReadingProgress] = useState(0);

  // Comprehensive article database
  const articleDatabase: {
    [key: string]: ArticleData;
  } = {
    // Meditationen
    'm1': {
      id: 'm1',
      title: 'Lichtfeld-Aktivierung',
      subtitle: 'Diese Meditation ist eine Erinnerung an dein eigenes Licht, nicht etwas, das du herstellst.',
      excerpt: 'Diese Meditation ist eine Erinnerung an dein eigenes Licht – sie führt dich in dein eigenes Lichtfeld, in dem Körper, Bewusstsein und Lebensenergie miteinander schwingen.',
      content: `
        <p>Sie führt dich in dein eigenes Lichtfeld – den feinstofflichen Raum, in dem Körper, Bewusstsein und Lebensenergie miteinander schwingen.</p>

        <p>Während du dich entspannst und dein Atem tiefer wird, öffnet sich dieses Feld und beginnt, sich zu erinnern: an seine ursprüngliche Ordnung, an die Klarheit deines Seins.</p>

        <p>Die Aktivierung geschieht sanft, durch Wahrnehmung und Präsenz.</p>

        <p>Du lernst, das Licht nicht nur zu fühlen, sondern es zu führen – bis jede Zelle deines Körpers mitschwingt.</p>

        <p>Das Lichtfeld bleibt in dir aktiv, während du dich wieder bewegst, sprichst, lebst. Es arbeitet still weiter, integriert, harmonisiert, erinnert dich an das, was du bist: bewusstes Licht in menschlicher Form.</p>

        <p><strong>Erlebe die Aktivierung deines Lichtfeldes noch intensiver in einer persönlichen Atemreise mit mir.</strong> Gemeinsam tauchen wir tiefer in deine Präsenz ein, lösen Blockaden und bringen deine Energie auf Zellebene in Fluss. Spüre, wie Herz, Körper und Bewusstsein sich öffnen und neu verbinden. Lass uns gemeinsam diesen Raum für Heilung, Klarheit und lebendige Kraft erschaffen.</p>
      `,
      category: 'meditationen',
      categoryLabel: 'Meditationen',
      date: '21. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&h=1080&fit=crop'
    },
    'm2': {
      id: 'm2',
      title: 'Feld-Reset',
      subtitle: 'Hier ist eine klare Schritt-für-Schritt-Meditation für einen regelmäßigen Feld-Reset mit Fokus auf Atem, Schutz und bewusste Energieabgrenzung.',
      excerpt: 'Eine klare Schritt-für-Schritt-Meditation für einen regelmäßigen Feld-Reset mit Fokus auf Atem, Schutz und bewusste Energieabgrenzung.',
      content: `
        <h2>Zweck</h2>

        <p>Diese Meditation dient dazu, dein energetisches Feld zu klären, fremde Energien loszulassen und die eigene Präsenz bewusst zu stabilisieren. Sie unterstützt dich dabei, nichts zu tragen, was nicht dir gehört, und stellt sicher, dass du deine Kraft und Klarheit behältst – besonders nach intensiven Begegnungen oder emotional aufgeladenen Situationen.</p>

        <h2>Vorbereitung</h2>

        <ol>
          <li>Suche einen ruhigen, ungestörten Ort.</li>
          <li>Setze dich bequem hin oder lege dich entspannt hin.</li>
          <li>Schließe die Augen und atme ein paar Mal tief durch, um anzukommen.</li>
          <li>Lenke deine Aufmerksamkeit auf deinen Körper, spüre die Auflagepunkte (Sitz, Füße, Hände).</li>
        </ol>

        <h2>Schritt 1 – Zentrieren (1–2 Minuten)</h2>

        <p>Atme tief ein und aus. Spüre, wie dein Atem den Brustkorb, den Bauch und den Rücken bewegt.</p>

        <p>Stelle innerlich die Absicht ein: „Ich komme in meinen Raum, ich bin hier in meiner Präsenz. Alles, was nicht zu mir gehört, bleibt außerhalb.“</p>

        <h2>Schritt 2 – Wahrnehmen der Energie (2–3 Minuten)</h2>

        <p>Nimm wahr, wie dein Feld sich ausbreitet – das Energiefeld um deinen Körper herum. Ohne zu bewerten, spüre, welche Energien in dir sind. Du kannst fühlen: Druck, Schwere, Unruhe oder Fremdes, das du getragen hast.</p>

        <h2>Schritt 3 – Atemfokus: Einatmen (1 Minute)</h2>

        <p>Atme tief ein und stelle dir vor, wie reine, klare Energie deinen Körper füllt. Diese Energie dient ausschließlich dir. Spüre, wie dein Körper, Herzbereich und Kopf innerlich von Licht und Klarheit durchströmt werden.</p>

        <h2>Schritt 4 – Atemfokus: Ausatmen (2–3 Minuten)</h2>

        <p>Atme langsam und bewusst aus, stell dir vor, dass alles, was nicht zu mir gehört, deinen Körper verlässt. Visualisiere, wie diese fremde Energie in die Erde oder ins Licht zurückfließt, ohne dass sie dich berührt.</p>

        <p><strong>Wiederhole den Vorgang:</strong><br>
        Einatmen = aufnehmen, was dir dient.<br>
        Ausatmen = loslassen, was fremd ist.</p>

        <h2>Schritt 5 – Aktivierung von Schutz und Grenzen (1–2 Minuten)</h2>

        <p>Nach 3–5 Atemzyklen stelle dir dein Feld wie eine unsichtbare Kugel um dich herum vor. Sie ist flexibel, aber undurchlässig für fremde Energien.</p>

        <p>Sage innerlich: „Alles, was nicht zu mir gehört, kann nicht in mein Feld treten. Mein Raum bleibt klar, geschützt und stabil.“</p>

        <h2>Schritt 6 – Integration (1 Minute)</h2>

        <p>Atme noch einmal tief ein und aus, fühle die Ruhe und Klarheit in deinem Körper. Spüre, wie dein Feld jetzt stabil und energetisch sauber ist. Öffne langsam die Augen und nimm diese Präsenz bewusst mit in den Alltag.</p>

        <h2>Tipps zur Anwendung</h2>

        <ul>
          <li><strong>Regelmäßig durchführen:</strong> z.B. einmal täglich oder nach jeder zu intensiven Erfahrung.</li>
          <li><strong>Bei Bedarf auch als kurze 5-Minuten-Version möglich:</strong> 3 Atemzyklen mit bewusstem Loslassen und Schutz.</li>
        </ul>

        <h2>Schlusswort</h2>

        <p>Nutze diese Meditation, um deinen energetischen Raum täglich zu klären und deine innere Stabilität zu stärken. Je regelmäßiger du sie praktizierst, desto leichter fällt es dir, bei Begegnungen zentriert, geschützt und kraftvoll zu bleiben. Sie hilft dir, bewusst deine Energie zu steuern, Belastendes loszulassen und mit Klarheit in deinen Alltag zurückzukehren.</p>
      `,
      category: 'meditationen',
      categoryLabel: 'Meditationen',
      date: '18. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=1920&h=1080&fit=crop'
    },
    'm3': {
      id: 'm3',
      title: 'Zurück in die Mitte',
      subtitle: 'Erinnerung an dein schöpferisches Selbst',
      excerpt: 'Erinnerung an dein schöpferisches Selbst – eine kleine Praxis, um in die Stille zurückzukehren und dich zu erinnern, wer du bist.',
      content: `
        <p>Manchmal verlieren wir uns in Gedanken, Erwartungen oder den Strömungen des Alltags.</p>

        <p>Doch es gibt einen Raum in dir, der nie verloren geht – egal, wie stürmisch das Außen wird. Diese kleine Praxis ist ein Weg dorthin: eine Rückkehr in die Stille, in der du dich erinnerst, wer du bist – Bewusstsein in Bewegung, ein schöpferisches Wesen im Wandel der Welt.</p>

        <h2>1. Anhalten</h2>

        <p>Schließe für einen Moment die Augen. Nimm einen Atemzug – langsam und tief – so, als würdest du die Welt umarmen. Beim Ausatmen lass alles los: Druck, Erwartungen, Geschichten. Nur du und dein Atem bleibt.</p>

        <h2>2. Wahrnehmen</h2>

        <p>Spüre einfach, dass du bist. Nicht, wer du bist oder was du tun musst – nur dieses stille, lebendige Sein.</p>

        <p>Sag innerlich: „Ich bin hier. Ich bin Bewusstsein. Ich bin die, die wahrnimmt.“</p>

        <h2>3. Rückkehr in die Weite</h2>

        <p>Lenke deine Aufmerksamkeit vom Denken auf den Raum dahinter, in dem du deine Gedanken beobachtest. Dort, wo es still ist. Dort, wo du dich erinnerst:</p>

        <p>„Ich bin nicht mein Sturm. Ich bin der Himmel, in dem er zieht.“</p>

        <h2>4. Verbinde dich</h2>

        <p>Lege eine Hand auf dein Herz. Atme hinein, bis du Wärme spürst.</p>

        <p>Fühle, dass in dir eine lebendige Intelligenz wirkt – dieselbe, die Sterne bewegt, Meere atmen lässt, Blumen öffnen lässt. Diese Kraft ist nicht außerhalb von dir. Sie ist du.</p>

        <h2>5. Ankern</h2>

        <p>Öffne langsam die Augen. Schau dich um – such ein Objekt in deiner Nähe: ein Stein, eine Kerze, ein Blatt.</p>

        <p>Das wird dein Anker sein. Sag innerlich: „Du erinnerst mich: Ich bin verbunden. Ich bin Schöpferin.“</p>

        <p>Jedes Mal, wenn du dich wieder erinnern willst, berühre deinen Anker, atme und lächle.</p>

        <h2>Abschluss</h2>

        <p>Bleib noch für einen Moment still. Spüre, wie Weite, Ruhe und Vertrauen in dir schwingen. Dann geh in deinen Tag – nicht als jemand, der kämpft, sondern als jemand, der schöpft.</p>
      `,
      category: 'meditationen',
      categoryLabel: 'Meditationen',
      date: '15. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1920&h=1080&fit=crop'
    },
    // lifestyle
    'd1': {
      id: 'd1',
      title: 'Wasser-Detox-Ritual',
      subtitle: 'Ein einfaches, wirkungsvolles Do-It-Yourself-Ritual für zuhause',
      excerpt: 'Ein einfaches, wirkungsvolles Do-It-Yourself-Ritual für zuhause – Detox mit Wasser, Affirmationen und bewusster Intention.',
      content: `
        <p>Detox ist in aller Munde – und das aus gutem Grund. Es verjüngt, entlastet, wirkt oft heilend und schenkt dir neue Energie, Klarheit und Leichtigkeit im Alltag. Viele Detox-Programme sind jedoch kompliziert, zeitaufwendig oder teuer.</p>

        <p>Dabei liegt die Kraft zur Erneuerung direkt vor dir – in deinem Glas Wasser. Wasser ist der zentrale Bestandteil jeder Entgiftungskur, und wir trinken es jeden Tag. Genau hier beginnen wir: mit einem einfachen, kraftvollen Ritual zur Wasser-Programmierung – sanft, bewusst und absolut kostenlos.</p>

        <h2>Warum Wasser programmieren?</h2>

        <p>Wasser besitzt eine kristalline Struktur und ist fähig, Informationen aufzunehmen – wie eindrucksvoll durch die Arbeit des japanischen Forschers Masaru Emoto gezeigt wurde. Seine Wasserkristall-Fotografien belegen, wie stark Worte, Gedanken und Gefühle auf Wasser wirken.</p>

        <p>Da auch dein Körper zu etwa 70% aus Wasser besteht, kannst du durch die bewusste Programmierung deines Trinkwassers eine direkte Botschaft an jede deiner Zellen senden. Du brauchst keinen Schamanen, keine teure Technik – nur dich und deine klare Absicht.</p>

        <h2>💧 So geht's – Dein tägliches Wasser-Ritual</h2>

        <p><strong>1. Nimm dir einen Moment Zeit.</strong><br>
        Halte dein Glas oder deine Karaffe Wasser in beiden Händen. Komm in die Ruhe. Entspanne deine Bauchmuskeln, damit du frei atmen kannst. Nimm ein paar ruhige, entspannende Atemzüge direkt in dein Herz. Sei ganz bei dir – präsent im Moment.</p>

        <p><strong>2. Blicke in das Wasser.</strong><br>
        Verbinde dich mit dem Wasser – atme jetzt bewusst in deine Hände hinein, die dein Glas oder deine Karaffe halten. Du hältst flüssige Wasserkristalle, offen für jede Schwingung und Energie! Spüre die Verbindung. Atme sanft und fokussiert.</p>

        <p><strong>3. Sprich deine Botschaft – laut oder leise.</strong><br>
        Wähle positive, klare, lebensbejahende Worte. Sprich sie mit Überzeugung und Herz. Wiederhole die Affirmation ein paar Mal – so lange, bis du ihre Kraft klar und deutlich in dir spürst. Es ist wichtig, deine Affirmation mit Bedacht und Bedeutung zu formulieren – so kann das Wasser die Botschaft wirklich aufnehmen und ihre Wirkung entfalten.</p>

        <p><strong>4. Trinke bewusst.</strong><br>
        Lass das Wasser in dir wirken – und die positive Botschaft jede Zelle deines Körpers erreichen. Spüre, wie sich die Information in dir ausbreitet, dich durchleuchtet und in Bewegung bringt. Freu dich jetzt schon auf die heilende Wirkung und sei dankbar dafür – schon jetzt und für das, was noch kommen wird.</p>

        <h2>🌸 Vorschläge für deine Wasser-Affirmationen</h2>

        <ul>
          <li>„Reinige meinen Körper von allem, was mir nicht mehr dient."</li>
          <li>„Ich empfange Gesundheit, Licht und neue Kraft."</li>
          <li>„Bringe mich in mein natürliches Gleichgewicht."</li>
          <li>„Ich vertraue dem Reinigungsprozess meines Körpers."</li>
          <li>„Lade jede Zelle mit Lebenskraft und Klarheit."</li>
          <li>„Schenke mir Ruhe, Leichtigkeit und inneren Frieden."</li>
          <li>„Ich bin offen für Heilung auf allen Ebenen."</li>
          <li>„Dieses Wasser nährt mich auf die beste Weise."</li>
          <li>„Ich bin in Harmonie mit mir selbst."</li>
          <li>„Danke für die Reinigung, die jetzt geschieht."</li>
        </ul>

        <p><strong>💡 Tipp:</strong> Vermeide Begriffe wie „Schmerz" oder „Blockade". Statt „Ich will keine Schmerzen mehr", lieber: „Ich öffne mich für Heilung und Wohlgefühl." Je positiver geladen deine Wasser-Affirmation ist, desto wirksamer ist es!</p>

        <h2>Noch kraftvoller: Wasser segnen mit Symbolen und Kreativität</h2>

        <p><strong>Schreibe deine Affirmation auf einen Zettel</strong> und lege ihn unter dein Glas oder deine Karaffe. Das Wasser nimmt die Botschaft auf. Während du deine Worte aufschreibst, richtest du deine volle Aufmerksamkeit und positive Absicht darauf. Durch diesen bewussten Fokus erzeugst du ein energetisches Feld, das das Wasser bereichert und harmonisiert.</p>

        <p><strong>Stelle deinen Wasserkrug auf ein Mandala</strong>, z.B. die Blume des Lebens, ein kraftvolles, harmonisierendes Symbol. Es gibt auch spezielle Aufkleber mit Mandala-Motiven, wie der Blume des Lebens, die du auf Wasserflaschen oder -krüge kleben kannst, damit das Wasser energetisiert und harmonisiert wird. Solche Aufkleber findest du in Bioläden oder online.</p>

        <p><strong>Ideen zum googeln (in Google «Bilder») und ausdrucken:</strong></p>
        <ul>
          <li>Sri Yantra Mandala – Ausrichtung, Fokussierung, innere Ordnung</li>
          <li>Metatrons Würfel – Struktur, Stabilität, Schutz und Klarheit</li>
          <li>Saat des Lebens – Die „kleine sanfte Schwester" der Blume des Lebens. Ruhe und Regeneration.</li>
          <li>Lotus-Mandala – Reinheit, Herzöffnung und Wachstum</li>
          <li>Om-Symbol – Urklang, Einheit und Präsenz</li>
          <li>Triskelion (Dreifachspirale) – Bewegung, Wandel und Lebenskraft</li>
          <li>Keltische Knotenmandalas – Erdung, Kontinuität und innere Stabilität</li>
          <li>Blume des Lebens – Harmonie, Ordnung, Ganzheit</li>
        </ul>

        <p><strong>Male oder schreibe direkt auf die Flasche.</strong><br>
        Nutze Permanentstifte, um deine Flasche mit liebevollen Worten, kraftvollen Affirmationen, Symbolen oder Zeichnungen zu gestalten. Das kann eine schöne, persönliche Gestaltung sein – allein oder gemeinsam mit deinen Kindern. So bringst du deine Absicht sichtbar zum Ausdruck und verbindest dich noch intensiver mit deinem Wasser-Ritual.</p>

        <p>Lass deiner Kreativität freien Lauf! Vielleicht möchtest du Motive wählen, die für dich Heilung, Schutz oder Freude symbolisieren. Jede einzelne Linie oder jedes Wort überträgt positive Energie auf das Wasser und macht dein Ritual zu etwas ganz Besonderem. So eine selbstgestaltete Flasche eignet sich wunderbar als persönliches Geschenk für deine liebsten Freunde.</p>

        <h2>Mach es zu deinem eigenen Ritual</h2>

        <p>Mach dir keinen Druck. Es braucht keine Perfektion – nur deine echte Präsenz. Auch spontane, unzensierte Sätze wirken, solange sie aus dem Herzen kommen.</p>

        <p><strong>🌿 Mach es einfach. Mach es regelmäßig. Mach es zu deinem Moment.</strong></p>
      `,
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      date: '20. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop'
    },
    'd2': {
      id: 'd2',
      title: 'Gesprächs-Magnet',
      subtitle: 'Gelungene Gespräche Vor-Programmieren',
      excerpt: 'Lerne, wie du dein Bewusstseins-Energiefeld nutzt, um wichtige Gespräche vorzuprogrammieren. Erziele dein gewünschtes Outcome durch innere Ruhe und klare Intention.',
      content: `
        <p>Du musst zur „Roten Teppich" – dein aufgeregter Chef will mit dir etwas klären? Du musst deinen Beziehungspartner in Konflikt konfrontieren, um Weiteres zu besprechen? Du solltest einen Vortrag vor dem ganzen Team halten?</p>

        <p>Es gibt einen Weg, wie du in jeglichen Situationen dein gewünschtes Outcome manifestieren kannst, wenn du dir davor etwas Zeit nimmst, das demnächst anstehende Gespräch vorzuprogrammieren. Das geschieht über dein eigenes Bewusstseins-Energiefeld.</p>

        <h2>Effekt</h2>

        <p>Deine Ruhe und Klarheit wirken automatisch auf andere, Konflikte verlieren Schwere. Diese Übung schenkt dir persönliche Gelassenheit und verstärkt dein inneres Vertrauen. Du wirst immer selbstsicherer und positiver auftreten, und mit den Ergebnissen immer mehr zufrieden sein.</p>

        <p><strong>Wann anwenden:</strong> Vor jedem Gespräch, das dir wichtig ist oder potenziell angespannt sein könnte.</p>

        <h2>So machst Du es:</h2>

        <p><strong>1. Zentrum finden – Dein Ruhepol</strong><br>
        Halte kurz inne, bevor du in das Gespräch gehst. Atme 5 – 7 tiefe, bewusste Atemzüge. Spüre deinen Körper, den Boden unter deinen Füßen, deine Wirbelsäule. Finde deinen inneren Ruhepunkt. Dies ist dein Ausgangspunkt – das Zentrum deines Energiefeldes. Vielleicht ist es dein Herzraum.</p>

        <p><strong>2. Intention klar setzen</strong><br>
        Definiere innerlich, welche Energie du senden willst: Ruhe, Klarheit, Leichtigkeit, Respekt und wertschätzendes Miteinander. Formuliere es positiv: Nicht „Ich will, dass der andere sich ändert", sondern: „Ich halte meine Schwingung stabil und ruhig". Visualisiere die gewünschte Energie wie einen inneren Leuchtball, der dich umgibt.</p>

        <p><strong>3. Signal durch Präsenz senden</strong><br>
        Deine Körperhaltung, Stimme, Blick und Atem tragen deine Schwingung. Je entspannter du bist, desto stärker wird dein Signal. Nutze zwischen deinen Sätzen bewusste Atemzüge, um deinen Fokus zu halten oder neu herzustellen. Spüre, wie deine innere Ruhe automatisch auf dein Umfeld wirkt.</p>

        <p><strong>4. Feld beobachten, nicht kontrollieren</strong><br>
        Betrachte die Situation als Informationsfluss. Du führst nicht mit Druck, sondern durch klare Energie. Dein Gegenüber reagiert oft unerwartet offen, weil sein System/sein Feld die neue Frequenz deines Feldes übernimmt.</p>

        <p><strong>5. Korrektur in Echtzeit</strong><br>
        Wenn sich Spannung aufbaut: Atme bewusst ein und aus. Wiederhole innerlich deine Intention: „Nur Information, klare Schwingung." Halte die innere Ruhe. Kein Kampf notwendig – deine innere Klarheit wirkt automatisch. Schaffe noch mehr Raum in deinem Herzen durch offene, ruhige Atemzüge und beobachte das Geschehen von deinem Ruhepunkt aus. So gewinnst du mehr Zeit, bewusst zu agieren, statt impulsiv zu reagieren.</p>

        <p><strong>6. Nachspüren & Stabilisieren</strong><br>
        Nimm dir nach dem Gespräch noch einen Moment für dich, um dein Feld zu stabilisieren und zentrieren – zum Beispiel mit einer kurzen Atemübung oder der Feld-Reset Meditation.</p>

        <h2>Warum es funktioniert</h2>

        <p>Dein eigenes Bewusstseins- und Energiefeld wirkt wie ein Magnet auf dein Umfeld – nicht manipulativ, sondern authentisch und kraftvoll. Deine Schwingung sendet unbewusste Signale aus, die auf anderen wirken. Wenn du bewusst eine stabile, klare und positive Schwingung aufbaust, beeinflusst dies automatisch die Atmosphäre und die Reaktionen anderer Menschen. Starke, fokussierte Schwingungen ziehen gewissermaßen das gewünschte Ergebnis magnetisch an, ohne dass du Druck ausüben musst.</p>

        <h2>Schlusswort</h2>

        <p>Diese kurze Übung kannst du im Privatleben in Konflikten und Unklarheiten zwischen Familienmitgliedern oder auch im beruflichen Atmosphäre jederzeit einsetzen. Wenn du das regularly übst, wird deine Ruhe und Präsenz zum Standard-Signal, das automatisch Einfluss nimmt – ohne dass du kämpfen musst. Konflikte verlieren an Schwere, Flüsse von Energie in dir werden sanft reguliert.</p>
      `,
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      date: '17. Dez 2025',
      thumbnail: 'https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/6f5dc41f-50e9-4e96-a8c9-c58dfed44cfd.png',
      heroImage: 'https://storage.googleapis.com/storage.magicpath.ai/user/351284685155995648/assets/6f5dc41f-50e9-4e96-a8c9-c58dfed44cfd.png'
    },
    // Blog
    'b1': {
      id: 'b1',
      title: 'Die Kunst des Ankommens',
      excerpt: 'Gedanken darüber, wie wir im Hier und Jetzt wirklich ankommen können und präsent sein.',
      content: `
        <p>Liebe Seele,</p>

        <p>heute möchte ich mit dir über etwas sprechen, das mir in letzter Zeit besonders am Herzen liegt: die Kunst des Ankommens. Nicht das physische Ankommen an einem Ort, sondern das tiefe, innere Ankommen im gegenwärtigen Moment.</p>

        <h2>Wo bist du gerade?</h2>

        <p>Ich meine damit nicht deinen geografischen Standort. Ich meine: Wo ist dein Geist gerade? Ist er hier, in diesem Moment, oder schweift er umher – in der Vergangenheit, die du nicht ändern kannst, oder in der Zukunft, die noch nicht existiert?</p>

        <p>Wir verbringen so viel Zeit damit, überall zu sein, nur nicht hier. Wir leben in unseren Gedanken, in unseren Sorgen, in unseren Plänen. Und dabei verpassen wir das Einzige, was wirklich existiert: diesen Moment, genau jetzt.</p>

        <h2>Das Geschenk der Präsenz</h2>

        <p>Wahres Ankommen bedeutet, mit allen Sinnen präsent zu sein. Es bedeutet, den Atem zu spüren, wie er ein- und ausströmt. Die Füße zu fühlen, wie sie den Boden berühren. Die Geräusche wahrzunehmen, ohne sie zu bewerten.</p>

        <p>Es bedeutet, bei dir selbst zu sein – mit allem, was gerade ist. Mit der Freude und mit dem Schmerz. Mit der Klarheit und mit der Verwirrung. Alles darf sein, wenn wir wirklich ankommen.</p>

        <h2>Die Reise nach Hause</h2>

        <p>Das Paradoxe ist: Wir sind bereits da. Wir müssen nirgendwo hingehen, um anzukommen. Wir müssen nur die Reise nach Hause antreten – nach Hause zu uns selbst, in unseren Körper, in diesen Moment.</p>

        <p>Und diese Reise beginnt mit einem einzigen, bewussten Atemzug.</p>

        <p>Mit Liebe,<br>Deine Zeit für Dich</p>
      `,
      category: 'blog',
      categoryLabel: 'Blog',
      date: '19. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1920&h=1080&fit=crop'
    },
    'b2': {
      id: 'b2',
      title: 'Warum Selbstfürsorge kein Luxus ist',
      excerpt: 'Ein persönlicher Brief über die Notwendigkeit, gut für sich selbst zu sorgen und achtsam zu sein.',
      content: `
        <p>Meine Liebe,</p>

        <p>ich weiß, dass du viel gibst. Du kümmerst dich um andere, du bist da, wenn man dich braucht, du stellst deine Bedürfnisse zurück. Das ist eine wundervolle Gabe – aber es kann auch zu einer Last werden.</p>

        <h2>Der Irrtum der Selbstlosigkeit</h2>

        <p>Wir wurden oft gelehrt, dass es egoistisch ist, an sich selbst zu denken. Dass wahre Liebe bedeutet, sich aufzuopfern. Aber das ist ein gefährlicher Irrtum.</p>

        <p>Wahre Liebe beginnt bei dir selbst. Du kannst nicht aus einem leeren Becher gießen. Du kannst nicht Licht sein für andere, wenn deine eigene Flamme erloschen ist.</p>

        <h2>Selbstfürsorge ist keine Verschwendung</h2>

        <p>Die Zeit, die du in dich selbst investierst – in deine Gesundheit, dein Wohlbefinden, deine Freude – ist keine verschwendete Zeit. Es ist die wichtigste Investition, die du machen kannst.</p>

        <p>Wenn du gut für dich sorgst, hast du mehr Energie, mehr Geduld, mehr Liebe zu geben. Du bist kein besserer Mensch, weil du dich vernachlässigst. Du bist ein besserer Mensch, weil du dich liebst.</p>

        <h2>Kleine Schritte, große Wirkung</h2>

        <p>Selbstfürsorge muss nicht aufwendig sein. Es kann so einfach sein wie:</p>

        <ul>
          <li>Zehn Minuten in Ruhe Tee trinken</li>
          <li>Ein Spaziergang in der Natur</li>
          <li>Nein sagen, wenn dein Körper Ruhe braucht</li>
          <li>Dir selbst freundliche Worte zusprechen</li>
        </ul>

        <p>Es sind die kleinen, täglichen Akte der Selbstliebe, die das Größte bewirken.</p>

        <p>Du bist es wert. Du bist es so sehr wert.</p>

        <p>In Liebe,<br>Deine Zeit für Dich</p>
      `,
      category: 'blog',
      categoryLabel: 'Blog',
      date: '16. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop'
    },
    'm4': {
      id: 'm4',
      title: 'Trauerarbeit',
      excerpt: 'Sanfte Begleitung durch den Prozess der Trauer und des Loslassens mit heilender Achtsamkeit.',
      content: `
        <p>Trauer ist eine der tiefsten menschlichen Erfahrungen. Sie zeigt uns, wie sehr wir geliebt haben und wie wertvoll das war, was wir verloren haben. Diese Meditation begleitet dich sanft durch den Prozess der Trauer.</p>

        <h2>Raum für Trauer</h2>

        <p>In unserer Gesellschaft wird Trauer oft unterdrückt. Wir sollen stark sein, weitermachen, nicht zu viel fühlen. Aber Trauer braucht Raum – Raum zu sein, gefühlt werden zu können, ihren Weg zu gehen.</p>

        <p>Diese Meditation gibt dir die Erlaubnis, zu trauern. So lange und so tief, wie du es brauchst.</p>

        <h2>Die Heilungs-Meditation</h2>

        <p>Finde einen sicheren, ruhigen Ort. Wenn möglich, umgib dich mit Dingen, die dir Trost spenden – eine Decke, ein Foto, eine Kerze. Setze oder lege dich bequem hin.</p>

        <p>Lege beide Hände auf dein Herz. Atme langsam und tief. Erlaube den Tränen zu fließen, wenn sie kommen möchten. Tränen sind heilig – sie sind die Sprache der Seele.</p>

        <p>Sprich zu dem, was du verloren hast. Sage alles, was noch gesagt werden möchte. Danke für die gemeinsame Zeit. Bitte um Verzeihung, wenn nötig. Vergib, wenn du kannst.</p>

        <h2>Der Prozess des Loslassens</h2>

        <p>Loslassen bedeutet nicht, zu vergessen. Es bedeutet, die Liebe zu behalten und den Schmerz sanft loszulassen. Es bedeutet, Raum zu schaffen für neue Freude, während die Erinnerungen bleiben.</p>

        <p>Sage: "Ich ehre dich. Ich danke dir. Ich lasse dich los mit Liebe."</p>

        <p>Wiederhole diese Meditation so oft, wie du sie brauchst. Heilung braucht Zeit. Sei geduldig und liebevoll mit dir selbst.</p>
      `,
      category: 'meditationen',
      categoryLabel: 'Meditationen',
      date: '12. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1920&h=1080&fit=crop'
    },
    'm5': {
      id: 'm5',
      title: 'Innere Balance finden',
      excerpt: 'Eine zentrierende Meditation für mehr Gleichgewicht im Alltag und innere Harmonie.',
      content: `
        <p>Balance ist kein Zustand, den wir einmal erreichen und dann für immer haben. Balance ist ein ständiges Austarieren, ein Tanz zwischen den Polen des Lebens. Diese Meditation hilft dir, deine Mitte zu finden.</p>

        <h2>Was ist Balance?</h2>

        <p>Balance bedeutet nicht, dass alles perfekt ist. Es bedeutet, dass du in deiner Mitte ruhst, auch wenn um dich herum Chaos herrscht. Es bedeutet, flexibel zu sein, ohne dich zu verlieren.</p>

        <h2>Die Balance-Meditation</h2>

        <p>Stelle dich aufrecht hin, Füße hüftbreit auseinander. Spüre, wie deine Füße fest auf den Boden stehen. Schließe deine Augen und atme tief.</p>

        <p>Schwanke sanft von einer Seite zur anderen, vorwärts und rückwärts. Finde die Mitte – den Punkt, an dem alles im Gleichgewicht ist. Bleibe dort für einen Moment stehen.</p>

        <p>Atme in diese Mitte hinein. Spüre, wie Stabilität und Flexibilität zugleich existieren können. Du bist fest verankert und gleichzeitig frei zu bewegen.</p>

        <h2>Balance im Alltag</h2>

        <p>Wenn du spürst, dass du aus der Balance gerätst – zu viel Arbeit, zu wenig Ruhe, zu viel Geben, zu wenig Empfangen – kehre zu diesem Gefühl der Mitte zurück.</p>

        <p>Frage dich: Was brauche ich jetzt, um wieder in Balance zu kommen? Höre auf die Antwort und handle entsprechend.</p>
      `,
      category: 'meditationen',
      categoryLabel: 'Meditationen',
      date: '9. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop'
    },
    'm6': {
      id: 'm6',
      title: 'Energie tanken',
      excerpt: 'Lade deine Batterien auf mit dieser vitalisierenden Meditation und finde neue Kraft.',
      content: `
        <p>Fühlst du dich erschöpft, ausgelaugt, energielos? Diese Meditation ist wie ein energetisches Aufladen deiner Batterien. Sie verbindet dich mit der universellen Lebenskraft.</p>

        <h2>Die Quellen der Energie</h2>

        <p>Energie ist überall um uns herum – in der Sonne, in der Erde, in der Luft, im Wasser. Wir müssen nur lernen, uns mit diesen Quellen zu verbinden und sie in uns aufzunehmen.</p>

        <h2>Die Energie-Meditation</h2>

        <p>Setze oder stelle dich aufrecht hin. Stelle dir vor, wie du Wurzeln in die Erde sendest – tief hinab, bis zum Mittelpunkt der Erde. Von dort strömt rote, kraftvolle Erdenergie durch deine Wurzeln nach oben, in deine Beine, in dein Becken, in deinen Bauch.</p>

        <p>Gleichzeitig öffnest du dich nach oben. Goldenes Licht strömt von der Sonne herab, durch dein Kronenchakra, in deinen Kopf, durch deinen Hals, in dein Herz.</p>

        <p>In deinem Herzraum treffen sich beide Energien – Himmel und Erde, Gold und Rot. Sie vermischen sich zu einer kraftvollen, vitalisierenden Energie, die durch deinen ganzen Körper fließt.</p>

        <h2>Tägliche Energie-Praxis</h2>

        <p>Praktiziere diese Meditation jeden Morgen für 5-10 Minuten. Du wirst merken, wie dein Energielevel steigt und du den Tag mit mehr Kraft und Vitalität beginnst.</p>

        <p>Wenn du tagsüber einen Energie-Boost brauchst, verbinde dich kurz mit dieser Visualisierung. Schon wenige Atemzüge können einen großen Unterschied machen.</p>
      `,
      category: 'meditationen',
      categoryLabel: 'Meditationen',
      date: '6. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&h=1080&fit=crop'
    },
    'd3': {
      id: 'd3',
      title: 'Realitätsgestaltung',
      subtitle: 'Die Realität aus der eigenen Mitte gestalten mit Atem & Resonanz',
      excerpt: 'Erfahre, wie du dein Leben als Resonanzfeld gestaltest. Durch die Verbindung von Atemarbeit und schöpferischer Manifestation programmierst du deine Vision direkt in dein Energiefeld.',
      content: `
        <p>Das ist eine feine, ganzheitliche Verbindung von Atemarbeit, Bewusstseinslenkung und schöpferischer Manifestation — eine Praxis, die tief wirkt, weil sie Körper, Energie und Geist vereint.</p>

        <h2>Einführung - Warum das funktioniert</h2>

        <p>Unsere Realität ist kein starres Gebilde, sondern ein lebendiges Resonanzfeld. Alles, was wir denken, fühlen und erwarten, worauf wir unsere Aufmerksamkeit lenken, sendet Schwingungen aus – wie Klangwellen in einem großen, feinen Raum. Diese Wellen treffen auf das Feld um uns und formen unsere Erlebnisse.</p>

        <p>Wenn wir im Einklang mit uns selbst atmen, verbinden wir dieses Feld. Dann beginnt das, was wir innerlich tragen – unsere klarste Schwingung – sich nach außen zu spiegeln.</p>

        <p>Man kann sich das vorstellen wie einen Spiegel aus Licht: Was du innerlich ausstrahlst, wird im Außen reflektiert. Wenn du Liebe, Ruhe und Vertrauen atmest, siehst, riechst, hörst, schmeckst und im Körper spürst – wenn du sie atmest, siehst, riechst, hörst, schmeckst und im Körper spürst – beginnt sie, sich zu verdichten. Wie Tau, der aus Dampf entsteht.</p>

        <p><strong>Warum?</strong><br>
        Weil diese Verkörperung eine Resonanz erschafft zwischen deinem inneren Schwingungsfeld und der äußeren Realität. Das Universum ist voller intelligenteter Energie. Deine Vision (Gefühl + Bild) wirkt wie ein starkes Signal, das diese Energie erreicht, mobilisiert und für dich programmiert. Je klarer und lebendiger deine Wasser-Affirmation ist, desto wirksamer ist es!</p>

        <h2>II. Säule: Ins Handeln kommen</h2>

        <p><strong>Schreibe deine Affirmation auf einen Zettel</strong> und lege ihn unter dein Glas oder deine Karaffe. Das Wasser nimmt die Botschaft auf. Während du deine Worte aufschreibst, richtest du deine volle Aufmerksamkeit und positive Absicht darauf. Durch diesen bewussten Fokus erzeugst du ein energetisches Feld, das das Wasser bereichert und harmonisiert.</p>

        <p><strong>Stelle deinen Wasserkrug auf ein Mandala</strong>, z.B. die Blume des Lebens, ein kraftvolles, harmonisierendes Symbol. Es gibt auch spezielle Aufkleber mit Mandala-Motiven, wie der Blume des Lebens, die du auf Wasserflaschen oder -krüge kleben kannst, damit das Wasser energetisiert und harmonisiert wird. Solche Aufkleber findest du in Bioläden oder online.</p>

        <p><strong>Ideen zum googeln (in Google «Bilder») und ausdrucken:</strong></p>
        <ul>
          <li>Sri Yantra Mandala – Ausrichtung, Fokussierung, innere Ordnung</li>
          <li>Metatrons Würfel – Struktur, Stabilität, Schutz und Klarheit</li>
          <li>Saat des Lebens – Die „kleine sanfte Schwester" der Blume des Lebens. Ruhe und Regeneration.</li>
          <li>Lotus-Mandala – Reinheit, Herzöffnung und Wachstum</li>
          <li>Om-Symbol – Urklang, Einheit und Präsenz</li>
          <li>Triskelion (Dreifachspirale) – Bewegung, Wandel und Lebenskraft</li>
          <li>Keltische Knotenmandalas – Erdung, Kontinuität und innere Stabilität</li>
          <li>Blume des Lebens – Harmonie, Ordnung, Ganzheit</li>
        </ul>

        <p><strong>Male oder schreibe direkt auf die Flasche.</strong><br>
        Nutze Permanentstifte, um deine Flasche mit liebevollen Worten, kraftvollen Affirmationen, Symbolen oder Zeichnungen zu gestalten. Das kann eine schöne, persönliche Gestaltung sein – allein oder gemeinsam mit deinen Kindern. So bringst du deine Absicht sichtbar zum Ausdruck und verbindest dich noch intensiver mit deinem Wasser-Ritual.</p>

        <p>Lass deiner Kreativität freien Lauf! Vielleicht möchtest du Motive wählen, die für dich Heilung, Schutz oder Freude symbolisieren. Jede einzelne Linie oder jedes Wort überträgt positive Energie auf das Wasser und macht dein Ritual zu etwas ganz Besonderem. So eine selbstgestaltete Flasche eignet sich wunderbar als persönliches Geschenk für deine liebsten Freunde.</p>

        <h2>Mach es zu deinem eigenen Ritual</h2>

        <p>Mach dir keinen Druck. Es braucht keine Perfektion – nur deine echte Präsenz. Auch spontane, unzensierte Sätze wirken, solange sie aus dem Herzen kommen.</p>

        <p><strong>🌿 Mach es einfach. Mach es regelmäßig. Mach es zu deinem Moment.</strong></p>
      `,
      category: 'lifestyle',
      categoryLabel: 'lifestyle',
      date: '14. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1512069593355-5b1f2f0ad6af?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1512069593355-5b1f2f0ad6af?w=1920&h=1080&fit=crop'
    },
    'd4': {
      id: 'd4',
      title: 'Heilkräuter-Ritual',
      excerpt: 'Entdecke die Kraft der Heilkräuter für dein Wohlbefinden und natürliche Heilung.',
      content: `
        <p>Die Natur schenkt uns eine Fülle an Heilpflanzen, die Körper, Geist und Seele unterstützen. Dieses Ritual verbindet dich mit der uralten Weisheit der Pflanzenheilkunde.</p>

        <h2>Heilkräuter für den Alltag</h2>

        <p>Jedes Kraut hat seine eigene Medizin, seine eigene Schwingung. Hier sind einige Kräuter und ihre Wirkungen:</p>

        <ul>
          <li><strong>Lavendel:</strong> Beruhigung, Entspannung, besserer Schlaf</li>
          <li><strong>Salbei:</strong> Reinigung, Klärung, Schutz</li>
          <li><strong>Kamille:</strong> Sanfte Heilung, Trost, innerer Frieden</li>
          <li><strong>Rosmarin:</strong> Klarheit, Gedächtnis, Energie</li>
          <li><strong>Minze:</strong> Erfrischung, Verdauung, Erwachen</li>
        </ul>

        <h2>Das Tee-Ritual</h2>

        <p>Wähle ein Kraut, das zu deinem aktuellen Bedürfnis passt. Nimm die Kräuter in deine Hände und halte sie einen Moment. Spüre ihre Energie. Danke der Pflanze für ihre Medizin.</p>

        <p>Bereite den Tee achtsam zu. Während das Wasser kocht, setze eine Intention: "Möge dieses Kraut mich heilen auf allen Ebenen."</p>

        <p>Gieße das heiße Wasser über die Kräuter und beobachte, wie sie ihre Essenz freisetzen. Atme den Duft tief ein. Trinke den Tee langsam und bewusst.</p>

        <h2>Das Räucher-Ritual</h2>

        <p>Getrocknete Kräuter können auch zum Räuchern verwendet werden. Salbei und Lavendel eignen sich besonders gut zur energetischen Reinigung.</p>

        <p>Zünde das Kräuterbündel an und lasse es glimmen. Führe den Rauch mit einer Feder oder deiner Hand durch den Raum. Sage dabei: "Ich reinige diesen Raum von aller negativen Energie."</p>

        <p>Du kannst dich auch selbst räuchern – führe den Rauch um deinen Körper herum, von den Füßen bis zum Kopf.</p>
      `,
      category: 'lifestyle',
      categoryLabel: 'lifestyle',
      date: '11. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1512069593355-5b1f2f0ad6af?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1512069593355-5b1f2f0ad6af?w=1920&h=1080&fit=crop'
    },
    'd5': {
      id: 'd5',
      title: 'Erdungs-Übung',
      excerpt: 'Praktische Techniken, um dich zu erden und zu zentrieren im Hier und Jetzt.',
      content: `
        <p>Erdung ist essentiell für unser Wohlbefinden. Sie verbindet uns mit der stabilisierenden Energie der Erde und hilft uns, präsent und zentriert zu bleiben.</p>

        <h2>Warum Erdung wichtig ist</h2>

        <p>In unserer modernen Welt leben wir oft "in den Wolken" – in unseren Gedanken, in der digitalen Welt, in Plänen und Sorgen. Erdung bringt uns zurück in unseren Körper, in den gegenwärtigen Moment.</p>

        <p>Geerdet zu sein bedeutet, mit beiden Beinen fest im Leben zu stehen, während der Geist frei sein kann.</p>

        <h2>Die Baum-Übung</h2>

        <p>Stelle dich barfuß auf die Erde (oder stelle dir vor, du stehst barfuß auf der Erde). Schließe deine Augen. Spüre, wie deine Füße den Boden berühren.</p>

        <p>Stelle dir vor, wie aus deinen Füßen Wurzeln wachsen – tief hinab in die Erde. Mit jedem Ausatmen wachsen die Wurzeln tiefer. Sie durchdringen Schichten von Erde, Stein, bis sie den Kern der Erde erreichen.</p>

        <p>Spüre, wie die Wurzeln dich halten, stabilisieren, nähren. Du bist verbunden mit der Erde. Du bist sicher. Du bist gehalten.</p>

        <h2>Weitere Erdungs-Techniken</h2>

        <ul>
          <li><strong>Barfuß gehen:</strong> Auf Gras, Sand oder Erde</li>
          <li><strong>Gärtnern:</strong> Mit den Händen in der Erde arbeiten</li>
          <li><strong>Steine tragen:</strong> Ein Erd-Stein (Hämatit, Rauchquarz) in der Tasche</li>
          <li><strong>Rote Farbe:</strong> Erdfarben tragen oder im Raum haben</li>
          <li><strong>Wurzelgemüse essen:</strong> Kartoffeln, Karotten, Rote Beete</li>
        </ul>

        <p>Praktiziere Erdung täglich, besonders wenn du dich überfordert, ängstlich oder "neben dir" fühlst.</p>
      `,
      category: 'lifestyle',
      categoryLabel: 'lifestyle',
      date: '8. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&h=1080&fit=crop'
    },
    'd6': {
      id: 'd6',
      title: 'Morgen-Ritual',
      excerpt: 'Starte deinen Tag mit diesem kraftvollen Morgen-Ritual für mehr Energie und Fokus.',
      content: `
        <p>Wie du deinen Tag beginnst, bestimmt oft, wie der Rest des Tages verläuft. Dieses Morgen-Ritual setzt positive Impulse und bereitet dich optimal auf den kommenden Tag vor.</p>

        <h2>Das 20-Minuten Morgen-Ritual</h2>

        <p>Dieses Ritual braucht nur 20 Minuten, wird aber deinen gesamten Tag transformieren. Stelle deinen Wecker entsprechend früher.</p>

        <h2>Schritt 1: Dankbarkeit (3 Minuten)</h2>

        <p>Bevor du aufstehst, nimm dir einen Moment Zeit. Lege deine Hände auf dein Herz und nenne drei Dinge, für die du dankbar bist. Sie können groß oder klein sein.</p>

        <p>"Ich bin dankbar für diesen neuen Tag. Ich bin dankbar für mein Bett. Ich bin dankbar für meinen Atem."</p>

        <h2>Schritt 2: Bewusstes Atmen (5 Minuten)</h2>

        <p>Setze dich aufrecht hin. Praktiziere bewusstes Atmen: Atme 4 Sekunden ein, halte 4 Sekunden, atme 4 Sekunden aus, halte 4 Sekunden. Wiederhole 10 Runden.</p>

        <h2>Schritt 3: Körper aktivieren (5 Minuten)</h2>

        <p>Sanfte Dehnungen, Yoga-Übungen oder Tanzen zu deiner Lieblingsmusik. Bringe Energie in deinen Körper und wecke ihn liebevoll auf.</p>

        <h2>Schritt 4: Intention setzen (2 Minuten)</h2>

        <p>Frage dich: "Wie möchte ich mich heute fühlen? Was ist meine Intention für diesen Tag?"</p>

        <p>Visualisiere, wie dein perfekter Tag aussieht. Spüre die Gefühle bereits jetzt.</p>

        <h2>Schritt 5: Nähren (5 Minuten)</h2>

        <p>Trinke ein großes Glas Wasser. Bereite dir einen nährenden Tee oder einen Smoothie zu. Tu dies achtsam und liebevoll.</p>

        <p>Dein Morgen-Ritual ist nicht verhandelbar. Es ist deine heilige Zeit, deine Investition in dich selbst.</p>
      `,
      category: 'lifestyle',
      categoryLabel: 'lifestyle',
      date: '5. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=1920&h=1080&fit=crop'
    },
    'b3': {
      id: 'b3',
      title: 'Der Atem als Anker',
      excerpt: 'Wie bewusstes Atmen uns durch herausfordernde Zeiten trägt und stabilisiert.',
      content: `
        <p>Meine Liebe,</p>

        <p> kennst du das Gefühl, wenn die Welt um dich herum zu schnell dreht? Wenn die Gedanken rasen, die Emotionenen überwältigen, und du nicht mehr weißst, wo oben und unten ist?</p>

        <p>In solchen Momenten gibt es einen Anker, der immer verfügbar ist, immer bei dir: dein Atem.</p>

        <h2>Die Weisheit des Atems</h2>

        <p>Der Atem ist die Brücke zwischen Körper und Geist, zwischen dem Bewussten und dem Unbewussten. Er ist das Einzige, was sowohl automatisch geschieht als auch bewusst gesteuert werden kann.</p>

        <p>Wenn du deinen Atem beobachtest, wirst du ruhiger. Wenn du deinen Atem verlangsamst, entspannt sich dein Nervensystem. Wenn du deinen Atem vertiefst, tankst du Energie.</p>

        <h2>Der Atem in schwierigen Momenten</h2>

        <p>Wenn Angst aufsteigt, wird der Atem flach und schnell. Wenn wir gestresst sind, halten wir oft unbewusst den Atem an. Unser Körper geht in den Kampf-oder-Flucht-Modus.</p>

        <p>In diesen Momenten kannst du bewusst eingreifen. Atme tief in deinen Bauch. Mache die Ausatmung länger als die Einatmung. Damit signalisierst du deinem Nervensystem: "Alles ist gut. Ich bin sicher."</p>

        <h2>Eine einfache Praxis</h2>

        <p>Wann immer du dich überwältigt fühlst, kehre zu deinem Atem zurück. Schließe die Augen. Lege eine Hand auf deinen Bauch. Atme 4 Sekunden ein, atme 6 Sekunden aus. Wiederhole dies 5-10 Mal.</p>

        <p>Du wirst merken, wie sich etwas in dir beruhigt. Wie die Gedanken langsamer werden. Wie du wieder bei dir ankommst.</p>

        <p>Dein Atem ist dein Anker. Immer verfügbar. Immer treu. Immer heilend.</p>

        <p>In Liebe,<br>Deine Zeit für Dich</p>
      `,
      category: 'blog',
      categoryLabel: 'Blog',
      date: '13. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&h=1080&fit=crop'
    },
    'b4': {
      id: 'b4',
      title: 'Potenzial entfalten',
      excerpt: 'Impulse, um dein volles Potenzial zu erkennen und zu leben mit Mut und Vertrauen.',
      content: `
        <p>Liebevolle Seele,</p>

        <p>in dir steckt so viel mehr, als du ahnst. Ein riesiges Potenzial, das nur du in die Welt bringen kannst. Aber oft halten uns Ängste, Glaubenssätze und Zweifel davon ab, wirklich zu leuchten.</p>

        <h2>Was ist dein Potenzial?</h2>

        <p>Dein Potenzial ist nicht, was du tust oder leistest. Es ist, wer du wirklich bist – deine einzigartige Essenz, deine Gaben, deine Seele in voller Entfaltung.</p>

        <p>Jeder Mensch hat ein Potenzial, das nur er oder sie in die Welt bringen kann. Es ist wie ein Same in dir, der keimen und wachsen möchte.</p>

        <h2>Was hält uns zurück?</h2>

        <p>Oft sind es nicht die äußeren Umstände, die uns begrenzen, sondern unsere inneren Überzeugungen:</p>

        <ul>
          <li>"Ich bin nicht gut genug."</li>
          <li>"Wer bin ich, dass ich träumen darf?"</li>
          <li>"Andere können das besser als ich."</li>
          <li>"Ich habe nicht die richtige Ausbildung/das richtige Alter/die richtigen Umstände."</li>
        </ul>

        <p>Diese Gedanken sind Lügen. Sie sind nicht die Wahrheit über dich.</p>

        <h2>Der Weg zur Entfaltung</h2>

        <p>Potenzial entfalten bedeutet nicht, jemand anderes zu werden. Es bedeutet, mehr von dem zu werden, was du bereits bist. Es bedeutet, die Schichten abzulegen, die dein wahres Selbst verbergen.</p>

        <p>Beginne mit kleinen Schritten:</p>
        <ul>
          <li>Erlaube dir zu träumen</li>
          <li>Höre auf deine innere Stimme</li>
          <li>Tue Dinge, die dich lebendig fühlen lassen</li>
          <li>Umgib dich mit Menschen, die an dich glauben</li>
          <li>Feiere jeden kleinen Fortschritt</li>
        </ul>

        <p>Du bist hier, um zu leuchten. Die Welt braucht dein Licht.</p>

        <p>In Liebe,<br>Deine Zeit für Dich</p>
      `,
      category: 'blog',
      categoryLabel: 'Blog',
      date: '10. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1920&h=1080&fit=crop'
    },
    'b5': {
      id: 'b5',
      title: 'Bewusst leben im Alltag',
      excerpt: 'Praktische Gedanken für mehr Bewusstheit in deinem täglichen Leben und Handeln.',
      content: `
        <p>Geliebte Seele,</p>

        <p>bewusst leben – das klingt so groß, so spirituell, vielleicht sogar unerreichbar. Aber in Wahrheit ist es ganz einfach. Es ist die Kunst, wach zu sein für das, was ist.</p>

        <h2>Was bedeutet Bewusstsein?</h2>

        <p>Bewusstsein bedeutet, präsent zu sein. Es bedeutet, die Dinge zu sehen, wie sie wirklich sind – nicht wie wir sie uns wünschen oder wie wir sie fürchten. Es bedeutet, das Leben zu erleben, statt nur durch es hindurchzugehen.</p>

        <h2>Bewusstsein im Kleinen</h2>

        <p>Bewusst leben beginnt nicht mit stundenlanger Meditation auf dem Berggipfel. Es beginnt mit den kleinen, alltäglichen Momenten:</p>

        <ul>
          <li>Spüre das Wasser auf deiner Haut, wenn du duscht</li>
          <li>Schmecke wirklich, was du isst</li>
          <li>Höre zu, wenn jemand spricht – wirklich zu</li>
          <li>Nimm wahr, wie sich dein Körper anfühlt</li>
          <li>Bemerke deine Gedanken, ohne sie zu bewerten</li>
        </ul>

        <h2>Die Kraft der Pausen</h2>

        <p>In unserem schnelllebigen Alltag hetzen wir oft von einer Sache zur nächsten. Bewusst leben bedeutet, bewusste Pausen einzulegen.</p>

        <p>Drei tiefe Atemzüge zwischen Meetings. Ein Moment Stille vor dem Essen. Ein Innehalten, bevor du eine Entscheidung triffst.</p>

        <p>Diese kleinen Pausen schaffen Raum für Bewusstsein.</p>

        <h2>Der größte Gewinn</h2>

        <p>Wenn du bewusst lebst, gewinnst du Zeit. Nicht weil die Stunden mehr werden, sondern weil du wirklich anwesend bist für die Zeit, die du hast.</p>

        <p>Du gewinnst Frieden. Du gewinnst Klarheit. Du gewinnst dich selbst.</p>

        <p>In Liebe,<br>Deine Zeit für Dich</p>
      `,
      category: 'blog',
      categoryLabel: 'Blog',
      date: '7. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=1920&h=1080&fit=crop'
    },
    'b6': {
      id: 'b6',
      title: 'Sich selbst spüren',
      excerpt: 'Eine Einladung, wieder in Kontakt mit dir selbst zu kommen und dich wahrzunehmen.',
      content: `
        <p>Meine Liebe,</p>

        <p>wann hast du das letzte Mal wirklich gespürt, wie es dir geht? Nicht gedacht, nicht analysiert, sondern gefühlt? Viele von uns haben verlernt, sich selbst zu spüren. Wir sind so beschäftigt mit dem Außen, dass wir das Innen vergessen.</p>

        <h2>Warum ist Selbst-Spüren wichtig?</h2>

        <p>Dein Körper ist deine Heimat. Er ist das einzige, was dich dein ganzes Leben begleitet. Er ist auch dein weisester Ratgeber – wenn du lernst, auf ihn zu hören.</p>

        <p>Dein Körper sendet ständig Signale – aber hörst du sie?</p>

        <h2>Die Signale des Körpers</h2>

        <p>Verspannung im Nacken – vielleicht trägst du zu viel Verantwortung?<br>
        Enge in der Brust – vielleicht unterdrückst du Emotionen?<br>
        Unruhe im Bauch – vielleicht ist da eine Angst, die gefühlt werden möchte?</p>

        <p>Diese Signale sind nicht deine Feinde. Sie sind Botschafter, die dir helfen wollen.</p>

        <h2>Die Körper-Scan-Übung</h2>

        <p>Nimm dir jeden Tag 5 Minuten Zeit für einen Body-Scan. Lege oder setze dich bequem hin. Schließe die Augen.</p>

        <p>Wandere mit deiner Aufmerksamkeit durch deinen Körper. Beginne bei den Füßen und arbeite dich langsam nach oben. Bei jedem Körperteil frage: "Wie fühlst du dich? Was brauchst du?"</p>

        <p>Bewerte nicht, was du findest. Nimm einfach wahr.</p>

        <h2>Zurück nach Hause</h2>

        <p>Sich selbst zu spüren ist wie nach Hause zu kommen. Du merkst: Du bist hier. Du bist lebendig. Du bist wertvoll.</p>

        <p>Je mehr du übst, desto feiner wird deine Wahrnehmung. Du wirst Signale früher erkennen und besser für dich sorgen können.</p>

        <p>Komm nach Hause zu dir. Dein Körper wartet auf dich.</p>

        <p>In Liebe,<br>Deine Zeit für Dich</p>
      `,
      category: 'blog',
      categoryLabel: 'Blog',
      date: '4. Dez 2025',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop'
    }
  };

  // Get article data or fallback
  const article = articleDatabase[articleId] || articleDatabase['m1'];

  // Related posts - same category, different articles
  const allArticlesInCategory = Object.values(articleDatabase).filter(a => a.category === category && a.id !== articleId);
  const relatedPosts = allArticlesInCategory.slice(0, 2);

  // Get all articles in same category sorted by date
  const articlesInCategory = Object.values(articleDatabase).filter(a => a.category === category).sort((a, b) => {
    // Sort by date (newest first)
    const dateA = new Date(a.date.split(' ').reverse().join('-'));
    const dateB = new Date(b.date.split(' ').reverse().join('-'));
    return dateB.getTime() - dateA.getTime();
  });

  // Get current article index
  const currentIndex = articlesInCategory.findIndex(a => a.id === articleId);

  // Get next article (with looping)
  const nextArticle = articlesInCategory[(currentIndex + 1) % articlesInCategory.length];

  // Watch for article ID changes and scroll to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [articleId]);

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = scrollTop / (documentHeight - windowHeight) * 100;
      setReadingProgress(Math.min(scrollPercentage, 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleShare = (platform: 'whatsapp' | 'email') => {
    const url = window.location.href;
    const text = `${article.title} - ${article.excerpt}`;
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(text + '\n\n' + url)}`;
        break;
    }
  };
  const handleRelatedArticleClick = (postId: string, postCategory: CategoryType) => {
    if (onArticleClick) {
      onArticleClick(postId, postCategory);
    }
  };
  return <div className="min-h-screen bg-gradient-to-b from-[#F5F3EF] to-[#EAE7E0]" style={{
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch'
  }}>
      {/* Reading Progress Bar - Brand Blue */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#4d83a4] origin-left z-50" style={{
      scaleX: readingProgress / 100
    }} initial={{
      scaleX: 0
    }} />

      {/* Hero Section with Increased Padding */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-end overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={article.heroImage} alt={article.title} className="w-full h-full max-h-[70vh] md:max-h-none object-cover" style={{
          filter: 'sepia(0.15) saturate(0.8)'
        }} loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#F5F3EF]/90" />
        </div>

        {/* Navigation Buttons - Relocated to outer edges with glassmorphism */}
        <div className="absolute top-[100px] sm:top-[120px] lg:top-[140px] left-0 right-0 z-20 px-[5%] sm:px-10">
          <div className="w-full flex items-center justify-between">
            {/* Back Button - Left Edge */}
            <button onClick={onBack} className="group flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3
                       bg-white/10 backdrop-blur-md text-white rounded-full
                       hover:bg-white/20 transition-all duration-300 border border-white/30
                       shadow-lg hover:shadow-xl
                       font-['Montserrat'] font-medium text-sm sm:text-base" aria-label="Zurück zur Übersicht" style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="hidden sm:inline">Zurück</span>
            </button>

            {/* Next Article Button - Right Edge */}
            <button onClick={() => onArticleClick?.(nextArticle.id, nextArticle.category)} className="group flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3
                       bg-white/10 backdrop-blur-md text-white rounded-full
                       hover:bg-white/20 transition-all duration-300 border border-white/30
                       shadow-lg hover:shadow-xl
                       font-['Montserrat'] font-medium text-sm sm:text-base" aria-label={`Nächster Artikel: ${nextArticle.title}`} style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
              <span className="hidden sm:inline">Nächster Artikel</span>
              <span className="sm:hidden">Weiter</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          {/* Breadcrumbs with Brand Blue */}
          <motion.nav initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-['Montserrat'] font-light mb-4 sm:mb-6">
            <button onClick={() => onNavigate?.('home')} className="hover:text-[#4d83a4] transition-colors">
              Home
            </button>
            <span>/</span>
            <button onClick={() => onNavigate?.('about')} className="hover:text-[#4d83a4] transition-colors">
              Inspiration
            </button>
            <span>/</span>
            <span className="text-[#4d83a4] font-medium">{article.categoryLabel}</span>
          </motion.nav>

          {/* Title */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.4
        }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-wide font-['Playfair_Display'] leading-tight mb-3 sm:mb-4" style={{
          fontSize: 'clamp(30px, 4.5vw, 48px)',
          lineHeight: '1.3',
          overflowWrap: 'break-word',
          hyphens: 'auto',
          padding: '0 15px'
        }}>
            {article.title}
          </motion.h1>

          {/* Subtitle - if present */}
          {article.subtitle && <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light tracking-wide font-['Playfair_Display'] leading-tight mb-3 sm:mb-4">
              {article.subtitle}
            </motion.h2>}

          {/* Date */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="text-xs sm:text-sm lg:text-lg text-white/80 font-['Montserrat'] font-light">
            {article.date}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Article Content with Brand Blue Accents */}
        <motion.article initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
          <div className="text-[#6B6560] leading-relaxed font-['Playfair_Display']" dangerouslySetInnerHTML={{
          __html: article.content
        }} />
        </motion.article>

        {/* Social Sharing with Brand Blue */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t-2 border-[#4d83a4]/20">
          <p className="text-sm sm:text-base lg:text-lg text-[#6B6560] font-['Montserrat'] font-light mb-4">
            Teile diese Inspiration:
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <button onClick={() => handleShare('whatsapp')} className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#4d83a4]/10 text-[#4d83a4] rounded-full
                         hover:bg-[#4d83a4] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg
                         font-['Montserrat'] font-medium text-xs sm:text-sm" aria-label="Auf WhatsApp teilen">
              <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
              WhatsApp
            </button>
            <button onClick={() => handleShare('email')} className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#4d83a4]/10 text-[#4d83a4] rounded-full
                         hover:bg-[#4d83a4] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg
                         font-['Montserrat'] font-medium text-xs sm:text-sm" aria-label="Per E-Mail teilen">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              E-Mail
            </button>
          </div>
        </motion.div>

        {/* Related Posts Section */}
        <motion.section initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#4A4440] font-light tracking-wide font-['Playfair_Display'] mb-6 sm:mb-8 lg:mb-12">
            Mehr Inspiration
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {relatedPosts.map(post => <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer
                           transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                           border border-[#4d83a4]/10" onClick={() => handleRelatedArticleClick(post.id, post.category)} role="button" tabIndex={0} onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleRelatedArticleClick(post.id, post.category);
            }
          }} aria-label={`Artikel lesen: ${post.title}`}>
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl text-[#4A4440] font-['Playfair_Display'] font-light leading-snug mb-3">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-[#6B6560] font-['Montserrat'] font-light leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <button className="group flex items-center gap-2 text-[#4d83a4] font-['Montserrat'] font-semibold text-sm sm:text-base
                               transition-all duration-300 hover:gap-3" aria-label={`${post.title} weiterlesen`}>
                    Mehr lesen
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>)}
          </div>
        </motion.section>

        {/* Back Button with Brand Blue */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <button onClick={onBack} className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#4d83a4] text-white rounded-full
                       hover:bg-[#3d6a85] transition-all duration-300 shadow-lg hover:shadow-xl
                       font-['Montserrat'] font-semibold text-sm sm:text-base lg:text-lg">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Zurück zur Inspiration
          </button>
        </motion.div>
      </div>

      {/* Custom Styles for Article Content with Brand Blue */}
      <style>{`
        .prose h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: #4A4440;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          border-left: 4px solid #4d83a4;
          padding-left: 1rem;
        }

        .prose p {
          font-family: 'Playfair Display', serif;
          margin-bottom: 1.25rem;
          font-size: 1rem;
          line-height: 1.75;
        }

        .prose ol, .prose ul {
          font-family: 'Playfair Display', serif;
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }

        .prose li {
          margin-bottom: 0.5rem;
        }

        .prose strong {
          font-weight: 600;
          color: #4d83a4;
        }

        .prose a {
          color: #4d83a4;
          text-decoration: underline;
          transition: color 0.3s ease;
        }

        .prose a:hover {
          color: #3d6a85;
        }

        .prose blockquote {
          border-left: 4px solid #4d83a4;
          padding-left: 1.5rem;
          font-style: italic;
          color: #6B6560;
          margin: 1.5rem 0;
        }

        @media (min-width: 640px) {
          .prose h2 {
            font-size: 1.75rem;
            margin-top: 2.5rem;
          }
          
          .prose p {
            font-size: 1.125rem;
            line-height: 1.8;
          }
        }

        @media (min-width: 1024px) {
          .prose h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>;
}