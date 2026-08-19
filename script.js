// VGV-stav — SK / EN / UA

var LANG_KEY = "vgv-lang";
var DEFAULT_LANG = "sk";

var translations = {
  en: {
    "meta.title.home": "Apartment renovations in Bratislava | VGV-stav",
    "meta.title.jadro": "Bathroom core renovation, Bratislava | VGV-stav",
    "meta.title.kupelna": "Bathroom renovation, Bratislava | VGV-stav",
    "meta.title.kuchyna": "Kitchen renovation, Bratislava | VGV-stav",
    "meta.title.fasada": "Facade work, Bratislava | VGV-stav",
    "meta.title.balkon": "Balcony reconstruction, Bratislava | VGV-stav",
    "meta.title.realizacie": "Finished work | VGV-stav, Bratislava",
    "meta.title.odhad": "Price estimate | VGV-stav, Bratislava",
    "meta.title.about": "About us | VGV-stav, Bratislava",
    "meta.title.contact": "Contact | VGV-stav, Bratislava",
    "meta.title.privacy": "Privacy | VGV-stav",
    "meta.desc.home":
      "Bathroom cores, bathrooms, kitchens, facades and balconies in Bratislava panel blocks and brick flats. Site visit at no charge.",
    "meta.desc.jadro":
      "We replace umakart cores in Bratislava panel blocks. Brick-built bathroom and WC, usually 12–14 days.",
    "meta.desc.kupelna":
      "Turnkey bathrooms in Bratislava. Strip-out, waterproofing, tile, sanitary ware.",
    "meta.desc.kuchyna":
      "Kitchen renovations in Bratislava. Services, surfaces and prep for the new run of units.",
    "meta.desc.fasada":
      "Plaster, repairs and smaller insulation jobs in Bratislava. A house or part of a block. Site visit at no charge.",
    "meta.desc.balkon":
      "Waterproofing, tile and railings on balconies in Bratislava. Site visit at no charge.",
    "meta.desc.realizacie":
      "Recent work in Petržalka, Ružinov, Dúbravka and the Old Town.",
    "meta.desc.odhad":
      "A rough price range for a bathroom core, kitchen, facade, balcony or full flat renovation in Bratislava.",
    "meta.desc.about":
      "VGV-stav does residential renovations in Bratislava. Mostly panel blocks, sometimes brick, occasionally a house outside town.",
    "meta.desc.contact":
      "Book a free site visit in Bratislava. Call, WhatsApp or write.",
    "meta.desc.privacy": "How VGV-stav handles personal data from this website.",
    "aria.openMenu": "Open menu",
    "aria.closeMenu": "Close menu",
    "aria.whatsapp": "Message on WhatsApp",
    "nav.home": "Home",
    "nav.jadro": "Bathroom core",
    "nav.kupelna": "Bathroom",
    "nav.kuchyna": "Kitchen",
    "nav.fasada": "Facade",
    "nav.balkon": "Balcony",
    "nav.realizacie": "Work",
    "nav.odhad": "Price",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.privacy": "Privacy",
    "lang.label": "Language",
    "logo.tagline": "construction company",
    "cta.visit": "Free site visit",
    "cta.estimate": "Rough estimate",
    "cta.call": "Call",
    "cta.write": "Write to us",
    "cta.whatsapp": "WhatsApp",
    "footer.rights": "© 2026 VGV-stav s.r.o.",

    "home.hero.title": "Apartment renovations in Bratislava",
    "home.hero.text":
      "Bathroom cores, bathrooms, kitchens, facades, balconies. Usually a panel block, sometimes brick, now and then a house outside town.",
    "home.featured.kicker": "Recent job",
    "home.featured.title": "Petržalka, two-room panel flat",
    "home.featured.text":
      "Umakart out, core rebuilt in blockwork, bathroom and WC in one room. Twelve days.",
    "home.featured.link": "More from this job",
    "home.services.title": "What we do",
    "home.jadro.title": "Bathroom core",
    "home.jadro.text": "The usual job in a Bratislava panel block. Umakart out, a brick bathroom and WC in.",
    "home.bath.title": "Bathroom",
    "home.bath.text": "Tile, waterproofing, sanitary ware. Full strip or a refresh.",
    "home.kitchen.title": "Kitchen",
    "home.kitchen.text": "Services, splashback, floor. Ready for the new run of units.",
    "home.fasada.title": "Facade",
    "home.fasada.text": "Plaster, repairs, a smaller stretch of insulation. A house or part of a block.",
    "home.balkon.title": "Balcony",
    "home.balkon.text": "Waterproofing, tile, railings. So it stops dripping.",
    "home.full.title": "The whole flat",
    "home.full.text": "Floors, doors, electrics, a couple of rooms at once. We say what can wait.",
    "home.house.title": "Houses, out of town",
    "home.house.text": "Lamač, Záhorská, Pezinok, Senec. Smaller jobs inside the house.",
    "home.how.title": "How it goes",
    "home.how.1": "You call or write. We agree a time.",
    "home.how.2": "We come to the flat. No charge for that.",
    "home.how.3": "You get a written price. What is in, what is not.",
    "home.how.4": "We pick a start date and do the work.",
    "home.areas.title": "Where we go",
    "home.areas":
      "Petržalka, Ružinov, Nové Mesto, Staré Mesto, Karlova Ves, Dúbravka, Lamač, Rača, Vrakuňa — and around the city, Pezinok, Senec, Malacky.",

    "jadro.title": "Bathroom cores in Bratislava panel blocks",
    "jadro.lede":
      "Umakart still sitting in a lot of flats from the seventies and eighties. We take it out and build a proper bathroom and WC.",
    "jadro.p1":
      "Most weeks we are in Petržalka, Ružinov or Dúbravka. The cores are similar. The plumbing stacks sit where they sit. You cannot move everything.",
    "jadro.p2":
      "A typical job is twelve to fourteen days. You can stay in the flat if you have to, but you will not have a bathroom or WC for that stretch.",
    "jadro.p3":
      "The building manager usually wants to know. We can talk to them. If a stack or a load-bearing wall is involved, we say so before anyone lifts a hammer.",
    "jadro.in.title": "What's included",
    "jadro.in":
      "Strip-out and waste, blockwork, waterproofing, tile, sanitary ware we agree on, and making good the adjacent walls.",
    "jadro.out.title": "What's not included",
    "jadro.out":
      "Furniture, designer tapware you buy yourself, and surprises in the stack. Those we price when we see them.",
    "jadro.faq.title": "Frequently asked questions",
    "jadro.q1": "What does a core cost in Bratislava?",
    "jadro.a1":
      "A straightforward panel-block core is often somewhere between about €6,500 and €12,000, depending on size and fittings. The estimator on this site gives a range. The real number comes after we see the flat.",
    "jadro.q2": "How long does it take?",
    "jadro.a2":
      "Twelve to fourteen days is typical if the stack behaves. If the waste pipe is a mess, it takes longer. We tell you.",
    "jadro.q3": "Do we need the building manager’s say-so?",
    "jadro.a3":
      "For a core, usually yes — at least a notice. Some buildings want a written agreement. We have done this before.",

    "kupelna.title": "Bathrooms, done properly",
    "kupelna.lede":
      "A new bathroom in a Bratislava flat. Sometimes it is just the bathroom. Sometimes it is the last piece of a bigger job.",
    "kupelna.p1":
      "Waterproofing, falls to the drain, tile that will still look alright in eight years. We would rather do the unglamorous layer once.",
    "kupelna.p2":
      "Walk-in shower or a bath — both are fine. In a small panel bathroom a shower usually makes more sense. We will say if the waste will not play along.",
    "kupelna.faq.title": "Frequently asked questions",
    "kupelna.q1": "What does a bathroom cost in Bratislava?",
    "kupelna.a1":
      "A straightforward panel bathroom is often somewhere between about €5,000 and €10,000, depending on size and fittings. The estimator gives a range. The real number comes after we see the flat.",
    "kupelna.q2": "How long does it take?",
    "kupelna.a2":
      "Eight to twelve days if it is just the bathroom. Tied to a core, count on those twelve to fourteen.",
    "kupelna.q3": "Shower or a bath?",
    "kupelna.a3":
      "Both are fine. In a small panel bathroom a shower usually gives you more room. We say if the waste or the falls will not play along.",

    "kuchyna.title": "Kitchens",
    "kuchyna.lede":
      "The building work behind a new kitchen. Services, splashback, floor, a wall that should not have been there.",
    "kuchyna.p1":
      "Room first — water, waste, electrics, a straight wall. We can also assemble and fit the kitchen unit if you have one from a studio or a shop.",
    "kuchyna.p2":
      "If you already have a kitchen company, we can work to their drawing. If you do not, we can tell you what the room will allow.",
    "kuchyna.faq.title": "Frequently asked questions",
    "kuchyna.q1": "Do you put the kitchen units together as well?",
    "kuchyna.a1":
      "Yes. We can assemble and fit them. We do not build the cabinets from scratch — but if you have a kitchen from a studio or a shop, we put it together.",
    "kuchyna.q2": "What does it cost?",
    "kuchyna.a2":
      "The building work is often somewhere between about €7,000 and €15,000, depending on area and whether walls move. Fitting the units is extra once we know what they are. The estimator gives a range for the room.",
    "kuchyna.q3": "How long does it take?",
    "kuchyna.a3":
      "A week or two of building work. Fitting the units on top of that, if you have them ready — no need to wait for another fitter.",

    "fasada.title": "Facades, not a whole estate",
    "fasada.lede":
      "Plaster, repairs, a smaller stretch of insulation. A house or part of a block. We are not the crew that wraps an entire panel building.",
    "fasada.p1":
      "Usually a house outside town, or one wall or loggia on a block. Scaffolding or a lift is in the price when we need it. Colour and texture we agree first.",
    "fasada.p2":
      "On a block the building manager usually wants to know. If it is a whole wall of the building, we say whether it is still our kind of job or you need a bigger firm.",
    "fasada.in.title": "What's included",
    "fasada.in":
      "Cleaning off, plaster repair, the colour we agree, a smaller stretch of insulation, scaffolding when needed, taking the waste away.",
    "fasada.out.title": "What's not included",
    "fasada.out":
      "Insulating a whole panel block, aluminium cladding, a permit drawing. Those we price separately, or they are not our job.",
    "fasada.faq.title": "Frequently asked questions",
    "fasada.q1": "What does facade work cost?",
    "fasada.a1":
      "A smaller stretch on a house often starts in the low thousands. Wrapping a whole block is a different job and usually not us. The estimator gives a range per m².",
    "fasada.q2": "Do you insulate a whole panel building?",
    "fasada.a2":
      "No. We do a house, one wall, a loggia, a repair. A whole panel block belongs to a bigger firm.",
    "fasada.q3": "Is scaffolding in the price?",
    "fasada.a3":
      "When we need it, yes. A lift as well. It is in the quote, not a surprise in the yard.",

    "balkon.title": "Balconies",
    "balkon.lede":
      "Waterproofing, tile, railings. A balcony that stops dripping on the neighbour.",
    "balkon.p1":
      "Drain and waterproofing first. Then tile or another walking surface we agree. Railings if they are rotten or need replacing.",
    "balkon.p2":
      "You can live in the flat. On a block the manager usually wants a notice. Glazing and aluminium are not a standard line — if you want that, we say after we look.",
    "balkon.in.title": "What's included",
    "balkon.in":
      "Stripping the old layer, waterproofing, falls, tile, railings we agree, taking the waste away.",
    "balkon.out.title": "What's not included",
    "balkon.out":
      "Glazing, a winter garden, the structure if the balcony is ready to fall off. That is a different job.",
    "balkon.faq.title": "Frequently asked questions",
    "balkon.q1": "What does a balcony reconstruction cost?",
    "balkon.a1":
      "A typical panel balcony is often somewhere between about €3,000 and €6,000, depending on size and the railings. Glazing is extra. The estimator gives a range.",
    "balkon.q2": "Do you glaze balconies as well?",
    "balkon.a2":
      "Not as a standard line. If you want that, we say after we look, or we point you somewhere.",
    "balkon.q3": "How long does it take?",
    "balkon.a3":
      "Four to eight days if the waterproofing dries as it should. Rain stretches it.",

    "realizacie.title": "Work we have finished",
    "realizacie.intro":
      "A few recent flats. Names of streets stay with the owners.",
    "realizacie.p1.title": "Bathroom core, two-room panel flat, Petržalka",
    "realizacie.p1.meta": "Umakart out · bathroom and WC combined · 12 days",
    "realizacie.p2.title": "Kitchen, three-room flat, Ružinov",
    "realizacie.p2.meta": "Services, splashback, vinyl · 9 days",
    "realizacie.p3.title": "Bathroom, panel block, Dúbravka",
    "realizacie.p3.meta": "Walk-in shower, new tile · 8 days",
    "realizacie.p4.title": "Brick flat, Old Town",
    "realizacie.p4.meta": "Floors, doors, one wall taken out · 3 weeks",
    "gallery.before": "Before",
    "gallery.after": "After",
    "realizacie.cta":
      "Something like this in your flat? Ask for a visit or run the estimator.",

    "about.title": "About VGV-stav",
    "about.p1":
      "We renovate flats in Bratislava. Bathroom cores, bathrooms, kitchens, facades and balconies.",
    "about.p2":
      "Most weeks we are in panel blocks. The rest is kitchens, facades, balconies and the odd whole-flat job in brick.",
    "about.p3":
      "One person from the site visit to handover. A plumber or electrician comes through us.",
    "about.p4":
      "In a panel block the stack does not move just because it would be convenient. We say that on the visit, not later in the price.",
    "about.areas.title": "Where we go",
    "about.areas":
      "All five Bratislava districts, and the usual towns around the city when the job is a house.",
    "contact.title": "Free site visit",
    "contact.intro":
      "A visit costs nothing. Write a few lines about the place — district, panel or brick, what you want done. We reply on a working day.",
    "contact.form.title": "Message",
    "contact.label.name": "Name and surname *",
    "contact.label.email": "Email *",
    "contact.label.phone": "Phone",
    "contact.label.project": "What kind of job",
    "contact.label.message": "Message *",
    "contact.option.select": "— pick one —",
    "contact.option.jadro": "Bathroom core",
    "contact.option.kitchen": "Kitchen",
    "contact.option.bath": "Bathroom",
    "contact.option.fasada": "Facade",
    "contact.option.balkon": "Balcony",
    "contact.option.full": "Whole flat",
    "contact.option.addition": "House / structural",
    "contact.option.other": "Something else",
    "contact.placeholder.message":
      "District, panel or brick, roughly what you want. A photo later is fine.",
    "contact.submit": "Send enquiry",
    "contact.note":
      "This opens your mail app with the text filled in. You still have to press send.",
    "contact.noemail":
      "Email is not set on the site yet. Call, or use WhatsApp if the number is up.",
    "contact.other.title": "Or just call",
    "contact.phone": "Phone:",
    "contact.email": "Email:",
    "contact.hours": "Hours:",
    "contact.ico": "ID no.:",
    "contact.dic": "Tax ID:",
    "contact.icdph": "VAT ID:",
    "contact.err.required": "Name, email and a message, please.",
    "contact.err.name": "Name needs at least two letters.",
    "contact.err.email": "That does not look like an email.",
    "contact.err.phone": "Use a Slovak number — +421… or 09…",
    "contact.err.message": "A bit more detail, at least a sentence.",
    "contact.ok.sent": "Opening your mail app. If nothing happens, write to us at the address below.",
    "contact.mail.subject": "Website enquiry from {name}",
    "contact.mail.name": "Name",
    "contact.mail.email": "Email",
    "contact.mail.phone": "Phone",
    "contact.mail.project": "Job",
    "contact.mail.message": "Message",
    "contact.mail.notProvided": "(not given)",
    "contact.mail.notSpecified": "(not specified)",

    "privacy.title": "Privacy",
    "privacy.p1":
      "This site does not use analytics cookies. If you send a message, VGV-stav s.r.o. uses your name, email and whatever you wrote only to reply and to price the job.",
    "privacy.p2":
      "We do not sell that information. We keep it as long as the enquiry or the job needs it, then we delete it.",
    "privacy.p3":
      "Questions: use the contact page or the email in the footer, once it is listed.",

    "estimate.title": "A rough price",
    "estimate.intro":
      "This is not a quote. It is a range so you know if we are in the same world. The number after a visit is the one that counts.",
    "estimate.project.label": "What are we doing?",
    "estimate.project.jadro": "Bathroom core",
    "estimate.project.jadro.hint": "Bathroom + WC in a panel block",
    "estimate.project.kitchen": "Kitchen",
    "estimate.project.kitchen.hint": "The room, not the furniture",
    "estimate.project.fasada": "Facade",
    "estimate.project.fasada.hint": "Plaster, smaller insulation",
    "estimate.project.balkon": "Balcony",
    "estimate.project.balkon.hint": "Waterproofing, tile, railings",
    "estimate.project.bathroom": "Bathroom",
    "estimate.project.bathroom.hint": "Just the bathroom",
    "estimate.project.full": "Whole flat / house",
    "estimate.project.full.hint": "Most of the floor area",
    "estimate.project.addition": "House",
    "estimate.property.label": "Apartment or house?",
    "estimate.property.apartment": "Apartment",
    "estimate.property.home": "House",
    "estimate.area.label": "Area",
    "estimate.area.unit": "m²",
    "estimate.area.hint.jadro": "The core — bathroom and WC together, not the whole flat.",
    "estimate.area.hint.kitchen": "The kitchen floor, not the living room.",
    "estimate.area.hint.fasada": "The wall surface, not the floor of the flat.",
    "estimate.area.hint.balkon": "The balcony floor, not the room behind it.",
    "estimate.area.hint.bathroom": "Just the bathroom.",
    "estimate.area.hint.full": "The flat or house you want done, roughly.",
    "estimate.quality.label": "Finish",
    "estimate.quality.standard": "Simple",
    "estimate.quality.standard.hint": "Decent, nothing fancy",
    "estimate.quality.comfort": "Mid",
    "estimate.quality.comfort.hint": "What most people pick",
    "estimate.quality.premium": "Higher end",
    "estimate.quality.premium.hint": "Better tile, better taps",
    "estimate.extras.label": "Anything else?",
    "estimate.extras.layout": "Moving walls",
    "estimate.extras.mep": "New electrics or water pipes beyond the room",
    "estimate.extras.old": "Building from before 1990",
    "estimate.extras.none": "nothing extra",
    "estimate.result.label": "Orientation range",
    "estimate.result.disclaimer":
      "A range, not a contract. Stacks, hidden pipes and what you pick in the showroom move it. We confirm after we stand in the room.",
    "estimate.cta.contact": "I want a real quote",
    "estimate.contact.message":
      "I used the estimator on the site.\n\nJob: {project}\nBuilding: {property}\nArea: {area} m²\nFinish: {quality}\nExtras: {extras}\nRange: {low} – {high}\n\nPlease get in touch about a visit."
  },

  sk: {
    "meta.title.home": "Rekonštrukcie bytov Bratislava | VGV-stav",
    "meta.title.jadro": "Rekonštrukcia bytového jadra Bratislava | VGV-stav",
    "meta.title.kupelna": "Rekonštrukcia kúpeľne Bratislava | VGV-stav",
    "meta.title.kuchyna": "Rekonštrukcia kuchyne Bratislava | VGV-stav",
    "meta.title.fasada": "Fasádne práce Bratislava | VGV-stav",
    "meta.title.balkon": "Rekonštrukcia balkóna Bratislava | VGV-stav",
    "meta.title.realizacie": "Realizácie | VGV-stav, Bratislava",
    "meta.title.odhad": "Odhad ceny | VGV-stav, Bratislava",
    "meta.title.about": "O nás | VGV-stav, Bratislava",
    "meta.title.contact": "Kontakt | VGV-stav, Bratislava",
    "meta.title.privacy": "Ochrana údajov | VGV-stav",
    "meta.desc.home":
      "Bytové jadrá, kúpeľne, kuchyne, fasády a balkóny v bratislavských panelákoch a tehlových bytoch. Obhliadka zdarma.",
    "meta.desc.jadro":
      "Vymieňame umakartové jadrá v bratislavských panelákoch. Murovaná kúpeľňa a WC, zvyčajne 12–14 dní.",
    "meta.desc.kupelna":
      "Kúpeľne na kľúč v Bratislave. Búranie, hydroizolácia, obklad, sanita.",
    "meta.desc.kuchyna":
      "Rekonštrukcie kuchýň v Bratislave. Rozvody, obklad a príprava pre novú linku.",
    "meta.desc.fasada":
      "Omietka, opravy a zateplenie menších plôch v Bratislave. Dom alebo časť bytovky. Obhliadka zdarma.",
    "meta.desc.balkon":
      "Hydroizolácia, dlažba a zábradlie na balkónoch v Bratislave. Obhliadka zdarma.",
    "meta.desc.realizacie":
      "Hotové práce v Petržalke, Ružinove, Dúbravke a Starom Meste.",
    "meta.desc.odhad":
      "Orientačné rozpätie pre jadro, kuchyňu, fasádu, balkón alebo kompletnú rekonštrukciu bytu v Bratislave.",
    "meta.desc.about":
      "VGV-stav robí rekonštrukcie bytov v Bratislave. Väčšinou panelák, občas tehla, raz za čas dom za mestom.",
    "meta.desc.contact":
      "Dohodnite si obhliadku v Bratislave zdarma. Telefón, WhatsApp alebo správa.",
    "meta.desc.privacy": "Ako VGV-stav spracúva osobné údaje z tohto webu.",
    "aria.openMenu": "Otvoriť menu",
    "aria.closeMenu": "Zavrieť menu",
    "aria.whatsapp": "Napísať na WhatsApp",
    "nav.home": "Úvod",
    "nav.jadro": "Jadro",
    "nav.kupelna": "Kúpeľňa",
    "nav.kuchyna": "Kuchyňa",
    "nav.fasada": "Fasáda",
    "nav.balkon": "Balkón",
    "nav.realizacie": "Realizácie",
    "nav.odhad": "Kalkulačka",
    "nav.about": "O nás",
    "nav.contact": "Kontakt",
    "nav.privacy": "Ochrana údajov",
    "lang.label": "Jazyk",
    "logo.tagline": "stavebná spoločnosť",
    "cta.visit": "Obhliadka zdarma",
    "cta.estimate": "Orientačný odhad",
    "cta.call": "Zavolať",
    "cta.write": "Napísať",
    "cta.whatsapp": "WhatsApp",
    "footer.rights": "© 2026 VGV-stav s.r.o.",

    "home.hero.title": "Rekonštrukcie bytov v Bratislave",
    "home.hero.text":
      "Prerábky jadier, kúpeľní, kuchýň, fasád a balkónov. Paneláky v Bratislave, občas tehla, príležitostne rodinný dom.",
    "home.featured.kicker": "Nedávna zákazka",
    "home.featured.title": "Petržalka, 2-izbový panelák",
    "home.featured.text":
      "Umakart von, jadro vymurované, kúpeľňa a WC v jednom. Dvanásť dní.",
    "home.featured.link": "Viac o tejto realizácii",
    "home.services.title": "Čo robíme",
    "home.jadro.title": "Bytové jadro",
    "home.jadro.text": "Bežná prerábka v bratislavskom paneláku. Umakart von, murovaná kúpeľňa a WC.",
    "home.bath.title": "Kúpeľňa",
    "home.bath.text": "Obklad, hydroizolácia, sanita. Komplet na kľúč alebo obnova.",
    "home.kitchen.title": "Kuchyňa",
    "home.kitchen.text": "Rozvody, obklad, podlaha. Miestnosť pripravená na novú linku.",
    "home.fasada.title": "Fasáda",
    "home.fasada.text": "Omietka, opravy, zateplenie menšej plochy. Dom alebo časť bytovky.",
    "home.balkon.title": "Balkón",
    "home.balkon.text": "Hydroizolácia, dlažba, zábradlie. Aby prestal tiecť.",
    "home.full.title": "Celý byt",
    "home.full.text": "Podlahy, dvere, elektro, viac izieb naraz. Povieme, čo môže počkať.",
    "home.house.title": "Domy za mestom",
    "home.house.text": "Lamač, Záhorská Bystrica, Pezinok, Senec. Menšie práce v dome.",
    "home.how.title": "Ako to ide",
    "home.how.1": "Zavoláte alebo napíšete. Dohodneme čas.",
    "home.how.2": "Prídeme do bytu. Za to nič neberieme.",
    "home.how.3": "Dostanete písomnú cenu. Čo je v nej, čo nie.",
    "home.how.4": "Vyberieme termín a ideme na to.",
    "home.areas.title": "Kam chodíme",
    "home.areas":
      "Petržalka, Ružinov, Nové Mesto, Staré Mesto, Karlova Ves, Dúbravka, Lamač, Rača, Vrakuňa — a okolie, Pezinok, Senec, Malacky.",

    "jadro.title": "Rekonštrukcia bytového jadra v Bratislave",
    "jadro.lede":
      "Vymieňame umakartové jadrá v panelákoch zo 70. a 80. rokov. Umakart ide preč, kúpeľňa a WC sa vymurujú.",
    "jadro.p1":
      "Väčšinu týždňov sme v Petržalke, Ružinove alebo Dúbravke. Jadrá sú podobné. Stupačky sú tam, kde sú. Všetko sa posunúť nedá.",
    "jadro.p2":
      "Bežná zákazka je dvanásť až štrnásť dní. V byte sa dá spať, ale kúpeľňu a WC ten čas nemáte.",
    "jadro.p3":
      "Správca o tom zvyčajne chce vedieť. Vieme sa s ním porozprávať. Keď ide o stupačku alebo nosnú stenu, povieme to pred začiatkom prác.",
    "jadro.in.title": "Čo je v cene",
    "jadro.in":
      "Búranie a odvoz sutiny, murovanie, hydroizolácia, obklad, dohodnutá sanita a začistenie okolitých stien.",
    "jadro.out.title": "Čo v cene nie je",
    "jadro.out":
      "Nábytok, dizajnové batérie, ktoré si kúpite sami, a prekvapenia v stupačke. Tie naceníme, keď ich uvidíme.",
    "jadro.faq.title": "Často kladené otázky",
    "jadro.q1": "Koľko stojí jadro v Bratislave?",
    "jadro.a1":
      "Bežné panelákové jadro je často niekde medzi 6 500 a 12 000 €, podľa veľkosti a vybavenia. Kalkulačka na webe dá rozpätie. Skutočné číslo je po obhliadke.",
    "jadro.q2": "Ako dlho to trvá?",
    "jadro.a2":
      "Dvanásť až štrnásť dní, keď sa stupačka správa. Keď je odpad zlý, trvá to dlhšie. Povieme to.",
    "jadro.q3": "Treba súhlas správcu?",
    "jadro.a3":
      "Pri jadre zvyčajne áno — aspoň ohlásenie. Niektoré bytovky chcú písomnú dohodu. Robili sme to.",

    "kupelna.title": "Rekonštrukcia kúpeľne v Bratislave",
    "kupelna.lede":
      "Nová kúpeľňa v byte — samostatne alebo ako súčasť väčšej prerábky.",
    "kupelna.p1":
      "Hydroizolácia, spád k odtoku a obklad. Na tej vrstve, ktorú potom nikto nevidí, nešetríme.",
    "kupelna.p2":
      "Sprcha alebo vaňa — podľa priestoru. V malom panelákovom jadre sprcha zvyčajne dáva väčší zmysel. Keď odpad nesedí, povieme to na obhliadke.",
    "kupelna.faq.title": "Často kladené otázky",
    "kupelna.q1": "Koľko stojí kúpeľňa v Bratislave?",
    "kupelna.a1":
      "Bežná paneláková kúpeľňa je často medzi 5 000 a 10 000 €, podľa veľkosti a vybavenia. Kalkulačka dá rozpätie. Skutočné číslo je po obhliadke.",
    "kupelna.q2": "Ako dlho to trvá?",
    "kupelna.a2":
      "Osem až dvanásť dní, keď ide len o kúpeľňu. Keď sa spája s jadrom, počítajte s tými dvanástimi až štrnástimi.",
    "kupelna.q3": "Sprcha alebo vaňa?",
    "kupelna.a3":
      "Oboje ide. V malom paneláku sprcha zvyčajne dáva viac miesta. Povieme, keď odpad alebo spád nesedí.",

    "kuchyna.title": "Rekonštrukcia kuchyne v Bratislave",
    "kuchyna.lede":
      "Príprava kuchyne na novú linku. Rozvody, obklad, podlaha. Linku vieme aj zložiť a namontovať.",
    "kuchyna.p1":
      "Najprv miestnosť — voda, odpad, elektro, rovná stena. Keď máte linku zo štúdia alebo z obchodu, zložíme ju a namontujeme.",
    "kuchyna.p2":
      "Keď už máte kuchynské štúdio, ideme podľa ich výkresu. Keď nie, povieme, čo miestnosť unesie.",
    "kuchyna.faq.title": "Často kladené otázky",
    "kuchyna.q1": "Robíte aj kuchynskú linku?",
    "kuchyna.a1":
      "Áno, zložíme ju a namontujeme. Linku na mieru nerobíme — keď ju máte zo štúdia alebo z obchodu, poskladáme ju.",
    "kuchyna.q2": "Koľko to stojí?",
    "kuchyna.a2":
      "Stavebná príprava kuchyne je často medzi 7 000 a 15 000 €, podľa plochy a toho, či sa hýbu steny. Montáž linky k tomu, keď vieme aká je. Kalkulačka dá rozpätie na izbu.",
    "kuchyna.q3": "Ako dlho to trvá?",
    "kuchyna.a3":
      "Týždeň až dva stavebná práca. Montáž linky k tomu, keď ju máte pripravenú — nemusíte čakať na iného montážnika.",

    "fasada.title": "Fasády a opravy omietky",
    "fasada.lede":
      "Omietka, opravy a zateplenie menšej plochy. Rodinný dom alebo časť bytovky. Celý panelák nezatepľujeme.",
    "fasada.p1":
      "Väčšinou ide o rodinný dom za mestom, alebo o jednu stenu či lodžiu na bytovke. Lešenie alebo plošina je v cene, keď treba. Farba a štruktúra sa dohodnú vopred.",
    "fasada.p2":
      "Pri bytovke o tom zvyčajne chce vedieť správca. Keď ide o celú stenu domu, povieme, či to ešte patrí k nám, alebo treba väčšiu firmu.",
    "fasada.in.title": "Čo je v cene",
    "fasada.in":
      "Očistenie, oprava omietky, dohodnutá farba, zateplenie menšej plochy, lešenie keď treba, odvoz sutiny.",
    "fasada.out.title": "Čo v cene nie je",
    "fasada.out":
      "Zateplenie celého paneláku, hliníkový obklad, projekt pre úrad. To naceníme zvlášť, alebo to nie je naša zákazka.",
    "fasada.faq.title": "Často kladené otázky",
    "fasada.q1": "Koľko stojí fasáda?",
    "fasada.a1":
      "Menšia plocha na dome je často od niekoľkých tisíc vyššie. Zateplenie celej bytovky nerobíme. Kalkulačka dá rozpätie na m².",
    "fasada.q2": "Robíte zateplenie celého paneláku?",
    "fasada.a2":
      "Nie. Robíme dom, jednu stenu, lodžiu, opravu. Celý panelák patrí väčšej firme.",
    "fasada.q3": "Je lešenie v cene?",
    "fasada.a3":
      "Keď ho treba, áno. Plošina tiež. Povieme to v ponuke, nie ako prekvapenie na dvore.",

    "balkon.title": "Balkóny",
    "balkon.lede":
      "Hydroizolácia, dlažba, zábradlie. Balkón, ktorý prestane tiecť do suseda.",
    "balkon.p1":
      "Najprv odtok a hydroizolácia. Potom dlažba alebo iná dohodnutá nášľapná vrstva. Zábradlie, keď je zhnité alebo ho treba vymeniť.",
    "balkon.p2":
      "V byte sa dá bývať. Pri bytovke správca zvyčajne chce ohlásenie. Zasklenie a hliník nerobíme ako bežnú položku — keď to chcete, povieme po obhliadke.",
    "balkon.in.title": "Čo je v cene",
    "balkon.in":
      "Strhnutie starej vrstvy, hydroizolácia, spád, dlažba, zábradlie podľa dohody, odvoz sutiny.",
    "balkon.out.title": "Čo v cene nie je",
    "balkon.out":
      "Zasklenie, zimná záhrada, nosná konštrukcia, keď je balkón na spadnutie. To je iná zákazka.",
    "balkon.faq.title": "Často kladené otázky",
    "balkon.q1": "Koľko stojí rekonštrukcia balkóna?",
    "balkon.a1":
      "Bežný panelákový balkón je často medzi 3 000 a 6 000 €, podľa veľkosti a zábradlia. Zasklenie je zvlášť. Kalkulačka dá rozpätie.",
    "balkon.q2": "Robíte aj zasklenie?",
    "balkon.a2":
      "Nie ako bežnú položku. Keď to chcete, povieme po obhliadke, alebo vás nasmerujeme.",
    "balkon.q3": "Ako dlho to trvá?",
    "balkon.a3":
      "Štyri až osem dní, keď hydroizolácia schne, ako má. Dážď to predĺži.",

    "realizacie.title": "Realizácie",
    "realizacie.intro":
      "Niekoľko posledných zákaziek. Presné adresy z pochopiteľných dôvodov neuvádzame.",
    "realizacie.p1.title": "Jadro, 2-izbový panelák, Petržalka",
    "realizacie.p1.meta": "Umakart von · kúpeľňa a WC spolu · 12 dní",
    "realizacie.p2.title": "Kuchyňa, 3-izbový byt, Ružinov",
    "realizacie.p2.meta": "Rozvody, obklad, vinyl · 9 dní",
    "realizacie.p3.title": "Kúpeľňa, panelák, Dúbravka",
    "realizacie.p3.meta": "Sprchový kút, nový obklad · 8 dní",
    "realizacie.p4.title": "Tehlový byt, Staré Mesto",
    "realizacie.p4.meta": "Podlahy, dvere, jedna stena preč · 3 týždne",
    "gallery.before": "Pred",
    "gallery.after": "Po",
    "realizacie.cta":
      "Niečo podobné u vás? Obhliadka alebo kalkulačka.",

    "about.title": "O nás",
    "about.p1":
      "Robíme prerábky bytov v Bratislave. Jadrá, kúpeľne, kuchyne, fasády a balkóny.",
    "about.p2":
      "Väčšinu týždňa sme v panelákoch. Zvyšok sú kuchyne, fasády, balkóny a občas celý byt v tehle.",
    "about.p3":
      "Od obhliadky po odovzdanie máte jedného človeka. Inštalatér alebo elektrikár ide cez nás.",
    "about.p4":
      "V paneláku sa stupačka neposunie, len preto, že by sa to hodilo. Povieme to hneď na obhliadke, nie v cene neskôr.",
    "about.areas.title": "Kam chodíme",
    "about.areas":
      "Všetkých päť bratislavských okresov a bežné obce okolo mesta, keď ide o dom.",
    "contact.title": "Nezáväzná obhliadka",
    "contact.intro":
      "Obhliadka je zdarma. Napíšte mestskú časť, či je to panel alebo tehla, a čo chcete prerobiť. Ozveme sa v pracovný deň.",
    "contact.form.title": "Správa",
    "contact.label.name": "Meno a priezvisko *",
    "contact.label.email": "E-mail *",
    "contact.label.phone": "Telefón",
    "contact.label.project": "Typ zákazky",
    "contact.label.message": "Správa *",
    "contact.option.select": "— vyberte —",
    "contact.option.jadro": "Bytové jadro",
    "contact.option.kitchen": "Kuchyňa",
    "contact.option.bath": "Kúpeľňa",
    "contact.option.fasada": "Fasáda",
    "contact.option.balkon": "Balkón",
    "contact.option.full": "Celý byt",
    "contact.option.addition": "Dom / konštrukcia",
    "contact.option.other": "Niečo iné",
    "contact.placeholder.message":
      "Mestská časť, panel alebo tehla, zhruba čo chcete. Foto môže prísť neskôr.",
    "contact.submit": "Odoslať dopyt",
    "contact.note":
      "Otvorí sa mail s predvyplnenou správou. Ešte ju musíte poslať.",
    "contact.noemail":
      "E-mail na webe ešte nie je. Zavolajte, alebo použite WhatsApp, ak je číslo hore.",
    "contact.other.title": "Alebo rovno zavolajte",
    "contact.phone": "Telefón:",
    "contact.email": "E-mail:",
    "contact.hours": "Čas:",
    "contact.ico": "IČO:",
    "contact.dic": "DIČ:",
    "contact.icdph": "IČ DPH:",
    "contact.err.required": "Meno, e-mail a správa, prosím.",
    "contact.err.name": "Meno má mať aspoň dve písmená.",
    "contact.err.email": "Toto nevyzerá ako e-mail.",
    "contact.err.phone": "Slovenské číslo — +421… alebo 09…",
    "contact.err.message": "Ešte veta navyše, aspoň jedna.",
    "contact.ok.sent": "Otvárame mail. Ak sa nič nedeje, napíšte na adresu dolu.",
    "contact.mail.subject": "Dopyt z webu od {name}",
    "contact.mail.name": "Meno",
    "contact.mail.email": "E-mail",
    "contact.mail.phone": "Telefón",
    "contact.mail.project": "Zákazka",
    "contact.mail.message": "Správa",
    "contact.mail.notProvided": "(neuvedené)",
    "contact.mail.notSpecified": "(nešpecifikované)",

    "privacy.title": "Ochrana údajov",
    "privacy.p1":
      "Tento web nepoužíva analytické cookies. Keď napíšete správu, VGV-stav s.r.o. použije meno, e-mail a text len na odpoveď a na nacenenie zákazky.",
    "privacy.p2":
      "Údaje nepredávame. Držíme ich, kým trvá dopyt alebo zákazka, potom ich zmažeme.",
    "privacy.p3":
      "Otázky: kontaktná stránka, alebo e-mail v pätičke, keď tam bude.",

    "estimate.title": "Orientačná cena",
    "estimate.intro":
      "Toto nie je ponuka. Je to rozpätie, aby ste vedeli, či sa bavíme o tých istých peniazoch. Platí číslo po obhliadke.",
    "estimate.project.label": "Čo ideme robiť?",
    "estimate.project.jadro": "Bytové jadro",
    "estimate.project.jadro.hint": "Kúpeľňa + WC v paneláku",
    "estimate.project.kitchen": "Kuchyňa",
    "estimate.project.kitchen.hint": "Miestnosť, nie linka",
    "estimate.project.fasada": "Fasáda",
    "estimate.project.fasada.hint": "Omietka, menšie zateplenie",
    "estimate.project.balkon": "Balkón",
    "estimate.project.balkon.hint": "Hydroizolácia, dlažba, zábradlie",
    "estimate.project.bathroom": "Kúpeľňa",
    "estimate.project.bathroom.hint": "Len kúpeľňa",
    "estimate.project.full": "Celý byt / dom",
    "estimate.project.full.hint": "Väčšina plochy bytu alebo domu",
    "estimate.project.addition": "Rodinný dom",
    "estimate.property.label": "Aký je to byt / dom?",
    "estimate.property.apartment": "Byt",
    "estimate.property.home": "Rodinný dom",
    "estimate.area.label": "Plocha",
    "estimate.area.unit": "m²",
    "estimate.area.hint.jadro": "Jadro — kúpeľňa a WC spolu, nie celý byt.",
    "estimate.area.hint.kitchen": "Podlaha kuchyne, nie obývačka.",
    "estimate.area.hint.fasada": "Plocha steny, nie podlaha bytu.",
    "estimate.area.hint.balkon": "Podlaha balkóna, nie izba za ním.",
    "estimate.area.hint.bathroom": "Len kúpeľňa.",
    "estimate.area.hint.full": "Približne celý byt alebo dom, ktorý sa ide robiť.",
    "estimate.quality.label": "Úroveň",
    "estimate.quality.standard": "Jednoduchá",
    "estimate.quality.standard.hint": "Slušné, nič extra",
    "estimate.quality.comfort": "Stredná",
    "estimate.quality.comfort.hint": "Čo berie väčšina",
    "estimate.quality.premium": "Vyššia",
    "estimate.quality.premium.hint": "Lepší obklad, lepšie batérie",
    "estimate.extras.label": "Platí ešte niečo?",
    "estimate.extras.layout": "Posúvame steny",
    "estimate.extras.mep": "Nové rozvody aj mimo miestnosti",
    "estimate.extras.old": "Stavba pred rokom 1990",
    "estimate.extras.none": "nič navyše",
    "estimate.result.label": "Orientačné rozpätie",
    "estimate.result.disclaimer":
      "Rozpätie, nie zmluva. Stupačky, skryté rúry a to, čo si vyberiete v predajni, ho posunú. Potvrdíme, keď budeme stáť v izbe.",
    "estimate.cta.contact": "Chcem reálnu ponuku",
    "estimate.contact.message":
      "Použil(a) som kalkulačka na webe.\n\nZákazka: {project}\nStavba: {property}\nPlocha: {area} m²\nÚroveň: {quality}\nĎalšie: {extras}\nRozpätie: {low} – {high}\n\nOzvite sa, prosím, kvôli obhliadke."
  },

  uk: {
    "meta.title.home": "Реконструкція квартир Братислава | VGV-stav",
    "meta.title.jadro": "Реконструкція сантехнічного ядра, Братислава | VGV-stav",
    "meta.title.kupelna": "Реконструкція ванної, Братислава | VGV-stav",
    "meta.title.kuchyna": "Реконструкція кухні, Братислава | VGV-stav",
    "meta.title.fasada": "Фасадні роботи, Братислава | VGV-stav",
    "meta.title.balkon": "Реконструкція балкона, Братислава | VGV-stav",
    "meta.title.realizacie": "Роботи | VGV-stav, Братислава",
    "meta.title.odhad": "Орієнтовна ціна | VGV-stav, Братислава",
    "meta.title.about": "Про нас | VGV-stav, Братислава",
    "meta.title.contact": "Контакт | VGV-stav, Братислава",
    "meta.title.privacy": "Захист даних | VGV-stav",
    "meta.desc.home":
      "Ядра, ванні, кухні, фасади й балкони в братиславських панельках і цегляних квартирах. Огляд безкоштовно.",
    "meta.desc.jadro":
      "Міняємо умакартові ядра в братиславських панельках. Цегляна ванна і туалет, зазвичай 12–14 днів.",
    "meta.desc.kupelna":
      "Ванні під ключ у Братиславі. Демонтаж, гідроізоляція, плитка, сантехніка.",
    "meta.desc.kuchyna":
      "Реконструкція кухонь у Братиславі. Комунікації, плитка й підготовка під нову кухню.",
    "meta.desc.fasada":
      "Штукатурка, ремонт і утеплення менших площ у Братиславі. Будинок або частина багатоквартирного. Огляд безкоштовно.",
    "meta.desc.balkon":
      "Гідроізоляція, плитка й огорожа на балконах у Братиславі. Огляд безкоштовно.",
    "meta.desc.realizacie":
      "Нещодавні роботи в Петржалці, Ружинові, Дубравці та Старому Місті.",
    "meta.desc.odhad":
      "Орієнтовний діапазон для ядра, кухні, фасаду, балкона чи повної реконструкції квартири в Братиславі.",
    "meta.desc.about":
      "VGV-stav робить реконструкції квартир у Братиславі. Здебільшого панелька, інколи цегла, час від часу будинок за містом.",
    "meta.desc.contact":
      "Домовтеся про безкоштовний огляд у Братиславі. Телефон, WhatsApp або повідомлення.",
    "meta.desc.privacy": "Як VGV-stav обробляє персональні дані з цього сайту.",
    "aria.openMenu": "Відкрити меню",
    "aria.closeMenu": "Закрити меню",
    "aria.whatsapp": "Написати у WhatsApp",
    "nav.home": "Головна",
    "nav.jadro": "Ядро",
    "nav.kupelna": "Ванна",
    "nav.kuchyna": "Кухня",
    "nav.fasada": "Фасад",
    "nav.balkon": "Балкон",
    "nav.realizacie": "Роботи",
    "nav.odhad": "Калькулятор",
    "nav.about": "Про нас",
    "nav.contact": "Контакт",
    "nav.privacy": "Захист даних",
    "lang.label": "Мова",
    "logo.tagline": "будівельна компанія",
    "cta.visit": "Огляд безкоштовно",
    "cta.estimate": "Орієнтовна ціна",
    "cta.call": "Зателефонувати",
    "cta.write": "Написати",
    "cta.whatsapp": "WhatsApp",
    "footer.rights": "© 2026 VGV-stav s.r.o.",

    "home.hero.title": "Реконструкції квартир у Братиславі",
    "home.hero.text":
      "Ядра, ванні, кухні, фасади, балкони. Здебільшого панелька, інколи цегла, час від часу будинок за містом.",
    "home.featured.kicker": "Нещодавнє замовлення",
    "home.featured.title": "Петржалка, двокімнатна панелька",
    "home.featured.text":
      "Умакарт геть, ядро вимурували, ванна і туалет в одній кімнаті. Дванадцять днів.",
    "home.featured.link": "До цього замовлення",
    "home.services.title": "Що робимо",
    "home.jadro.title": "Сантехнічне ядро",
    "home.jadro.text": "Звичайне замовлення в братиславській панельці. Умакарт геть, нормальна мокра кімната всередину.",
    "home.bath.title": "Ванна",
    "home.bath.text": "Плитка, гідроізоляція, сантехніка. Повністю або оновлення.",
    "home.kitchen.title": "Кухня",
    "home.kitchen.text": "Комунікації, плитка, підлога. Кімната готова під гарнітур.",
    "home.fasada.title": "Фасад",
    "home.fasada.text": "Штукатурка, ремонт, утеплення меншої площі. Будинок або частина багатоквартирного.",
    "home.balkon.title": "Балкон",
    "home.balkon.text": "Гідроізоляція, плитка, огорожа. Щоб перестав текти.",
    "home.full.title": "Уся квартира",
    "home.full.text": "Підлоги, двері, електрика, кілька кімнат одразу. Скажемо, що може почекати.",
    "home.house.title": "Будинки за містом",
    "home.house.text": "Ламач, Загорська, Пезінок, Сенець. Менші роботи в будинку.",
    "home.how.title": "Як це йде",
    "home.how.1": "Телефонуєте або пишете. Домовляємось про час.",
    "home.how.2": "Приїжджаємо в квартиру. За це нічого не беремо.",
    "home.how.3": "Отримуєте письмову ціну. Що в ній є, чого немає.",
    "home.how.4": "Обираємо термін і робимо.",
    "home.areas.title": "Куди їздимо",
    "home.areas":
      "Петржалка, Ружинов, Нове Місто, Старе Місто, Карлова Вес, Дубравка, Ламач, Рача, Вракуня — і околиці, Пезінок, Сенець, Малацки.",

    "jadro.title": "Сантехнічні ядра в братиславських панельках",
    "jadro.lede":
      "Умакарт ще стоїть у купі квартир із сімдесятих і вісімдесятих. Виймемо його і зробимо ванну і туалет нормально.",
    "jadro.p1":
      "Більшість тижнів ми в Петржалці, Ружинові чи Дубравці. Ядра схожі. Стояки там, де вони є. Все зрушити не вийде.",
    "jadro.p2":
      "Звичайне замовлення — дванадцять-чотирнадцять днів. У квартирі можна спати, але ванни і туалету той час немає.",
    "jadro.p3":
      "Управитель про це зазвичай хоче знати. Можемо з ним поговорити. Якщо йдеться про стояк або несучу стіну, скажемо раніше, ніж хтось візьме молоток.",
    "jadro.in.title": "Що в ціні",
    "jadro.in":
      "Демонтаж і вивіз, мурування, гідроізоляція, плитка, узгоджена сантехніка і заведення сусідніх стін.",
    "jadro.out.title": "Чого в ціні немає",
    "jadro.out":
      "Меблі, дизайнерські змішувачі, які купуєте самі, і сюрпризи в стояку. Їх оцінимо, коли побачимо.",
    "jadro.faq.title": "Часті запитання",
    "jadro.q1": "Скільки коштує ядро в Братиславі?",
    "jadro.a1":
      "Звичайне панельне ядро часто десь між 6 500 і 12 000 €, залежно від розміру і комплектації. Калькулятор на сайті дає діапазон. Справжнє число — після огляду.",
    "jadro.q2": "Скільки це триває?",
    "jadro.a2":
      "Дванадцять-чотирнадцять днів, якщо стояк поводиться. Якщо стік поганий, довше. Скажемо.",
    "jadro.q3": "Потрібна згода управителя?",
    "jadro.a3":
      "При ядрі зазвичай так — принаймні повідомлення. Деякі будинки хочуть письмову угоду. Робили це.",

    "kupelna.title": "Ванні, як слід",
    "kupelna.lede":
      "Нова ванна в братиславській квартирі. Іноді лише вона. Іноді останній шмат більшого замовлення.",
    "kupelna.p1":
      "Гідроізоляція, ухил до стоку, плитка, яка виглядатиме пристойно і за вісім років. Краще раз зробити той шар, який ніхто не фотографує.",
    "kupelna.p2":
      "Душ чи ванна — і те, і те нормально. У маленькому панельному ядрі душ зазвичай має більше сенсу. Скажемо, якщо стік не погодиться.",
    "kupelna.faq.title": "Часті запитання",
    "kupelna.q1": "Скільки коштує ванна в Братиславі?",
    "kupelna.a1":
      "Звичайна панельна ванна часто десь між 5 000 і 10 000 €, залежно від розміру і комплектації. Калькулятор дає діапазон. Справжнє число — після огляду.",
    "kupelna.q2": "Скільки це триває?",
    "kupelna.a2":
      "Вісім-дванадцять днів, якщо лише ванна. Разом із ядром рахуйте ті дванадцять-чотирнадцять.",
    "kupelna.q3": "Душ чи ванна?",
    "kupelna.a3":
      "І те, і те нормально. У маленькій панельці душ зазвичай дає більше місця. Скажемо, якщо стік або ухил не зійдеться.",

    "kuchyna.title": "Кухні",
    "kuchyna.lede":
      "Будівельна робота за новим гарнітуром. Комунікації, плитка, підлога, стіна, якої там не мало бути.",
    "kuchyna.p1":
      "Спочатку кімната — вода, стік, електрика, рівна стіна. Гарнітур можемо також зібрати і поставити, якщо він зі студії або з магазину.",
    "kuchyna.p2":
      "Якщо вже є кухонна студія, можемо йти за їхнім кресленням. Якщо ні, скажемо, що кімната витримає.",
    "kuchyna.faq.title": "Часті запитання",
    "kuchyna.q1": "Робите також кухонний гарнітур?",
    "kuchyna.a1":
      "Так. Можемо зібрати і поставити. Шафи з нуля не вирізаємо — але якщо гарнітур зі студії або з магазину, зберемо його.",
    "kuchyna.q2": "Скільки це коштує?",
    "kuchyna.a2":
      "Будівельна підготовка кухні часто десь між 7 000 і 15 000 €, залежно від площі і того, чи рухаються стіни. Монтаж гарнітура до того, коли знатимемо який він. Калькулятор дає діапазон на кімнату.",
    "kuchyna.q3": "Скільки це триває?",
    "kuchyna.a3":
      "Тиждень-два будівельна робота. Монтаж гарнітура до того, якщо він уже є — не треба чекати на іншого монтажника.",

    "fasada.title": "Фасади, не цілий мікрорайон",
    "fasada.lede":
      "Штукатурка, ремонт, утеплення меншої площі. Будинок або частина багатоквартирного. Ми не бригада на утеплення цілої панельки.",
    "fasada.p1":
      "Здебільшого сімейний будинок за містом, або одна стіна чи лоджія на багатоквартирному. Риштування чи підйомник у ціні, коли треба. Колір і фактуру узгоджуємо заздалегідь.",
    "fasada.p2":
      "У багатоквартирному про це зазвичай хоче знати управитель. Якщо йдеться про цілу стіну будинку, скажемо, чи це ще наша робота, чи потрібна більша фірма.",
    "fasada.in.title": "Що в ціні",
    "fasada.in":
      "Очищення, ремонт штукатурки, узгоджений колір, утеплення меншої площі, риштування коли треба, вивіз сміття.",
    "fasada.out.title": "Чого в ціні немає",
    "fasada.out":
      "Утеплення цілої панельки, алюмінієве облицювання, проєкт для установи. Це оцінимо окремо, або це не наше замовлення.",
    "fasada.faq.title": "Часті запитання",
    "fasada.q1": "Скільки коштує фасад?",
    "fasada.a1":
      "Менша площа на будинку часто від кількох тисяч вище. Утеплення цілого багатоквартирного — інша ліга, і зазвичай ми не та бригада. Калькулятор дає діапазон за м².",
    "fasada.q2": "Робите утеплення цілої панельки?",
    "fasada.a2":
      "Ні. Робимо будинок, одну стіну, лоджію, ремонт. Ціла панелька — це більша фірма.",
    "fasada.q3": "Риштування в ціні?",
    "fasada.a3":
      "Якщо треба, так. Підйомник теж. Скажемо в пропозиції, не як сюрприз на подвір’ї.",

    "balkon.title": "Балкони",
    "balkon.lede":
      "Гідроізоляція, плитка, огорожа. Балкон, який перестане текти до сусіда.",
    "balkon.p1":
      "Спочатку стік і гідроізоляція. Потім плитка чи інший узгоджений шар. Огорожа, якщо прогнила або її треба замінити.",
    "balkon.p2":
      "У квартирі можна жити. У багатоквартирному управитель зазвичай хоче повідомлення. Засклення й алюміній не робимо як звичайну позицію — якщо хочете, скажемо після огляду.",
    "balkon.in.title": "Що в ціні",
    "balkon.in":
      "Зняття старого шару, гідроізоляція, ухил, плитка, огорожа за домовленістю, вивіз.",
    "balkon.out.title": "Чого в ціні немає",
    "balkon.out":
      "Засклення, зимовий сад, несуча конструкція, якщо балкон ось-ось відвалиться. Це інше замовлення.",
    "balkon.faq.title": "Часті запитання",
    "balkon.q1": "Скільки коштує реконструкція балкона?",
    "balkon.a1":
      "Звичайний панельний балкон часто десь між 3 000 і 6 000 €, залежно від розміру і огорожі. Засклення окремо. Калькулятор дає діапазон.",
    "balkon.q2": "Робите також засклення?",
    "balkon.a2":
      "Не як звичайну позицію. Якщо хочете, скажемо після огляду або направимо далі.",
    "balkon.q3": "Скільки це триває?",
    "balkon.a3":
      "Чотири-вісім днів, якщо гідроізоляція сохне як треба. Дощ це подовжить.",

    "realizacie.title": "Зроблені роботи",
    "realizacie.intro":
      "Кілька останніх квартир. Вулиці залишаємо власникам.",
    "realizacie.p1.title": "Ядро, двокімнатна панелька, Петржалка",
    "realizacie.p1.meta": "Умакарт геть · ванна і туалет разом · 12 днів",
    "realizacie.p2.title": "Кухня, трикімнатна квартира, Ружинов",
    "realizacie.p2.meta": "Комунікації, плитка, вініл · 9 днів",
    "realizacie.p3.title": "Ванна, панелька, Дубравка",
    "realizacie.p3.meta": "Душова, нова плитка · 8 днів",
    "realizacie.p4.title": "Цегляна квартира, Старе Місто",
    "realizacie.p4.meta": "Підлоги, двері, одна стіна геть · 3 тижні",
    "gallery.before": "До",
    "gallery.after": "Після",
    "realizacie.cta":
      "Щось подібне у вас? Огляд або калькулятор.",

    "about.title": "Про VGV-stav",
    "about.p1":
      "Реконструюємо квартири в Братиславі. Це замовлення. Не нові офіси, не торговий центр.",
    "about.p2":
      "Більшість тижнів — ядра і ванні в панельках. Решта кухні, фасади, балкони і іноді вся квартира в цеглі.",
    "about.p3":
      "Від першого дзвінка до останнього прибирання у вас одна людина. Якщо треба сантехніка чи електрика, він іде через нас.",
    "about.p4":
      "У панельці стояк в інший кут не побажаєш. Краще скажемо у вівторок, ніж сховаємо в ціні в п’ятницю.",
    "about.areas.title": "Куди їздимо",
    "about.areas":
      "Усі п’ять братиславських округів і звичні села довкола міста, коли йдеться про будинок.",
    "contact.title": "Приїдемо подивитися",
    "contact.intro":
      "Огляд нічого не коштує. Напишіть кілька рядків про квартиру — район, панель чи цегла, що хочете. Відповімо в робочий день.",
    "contact.form.title": "Повідомлення",
    "contact.label.name": "Ім’я та прізвище *",
    "contact.label.email": "Електронна пошта *",
    "contact.label.phone": "Телефон",
    "contact.label.project": "Тип замовлення",
    "contact.label.message": "Повідомлення *",
    "contact.option.select": "— оберіть —",
    "contact.option.jadro": "Сантехнічне ядро",
    "contact.option.kitchen": "Кухня",
    "contact.option.bath": "Ванна",
    "contact.option.fasada": "Фасад",
    "contact.option.balkon": "Балкон",
    "contact.option.full": "Уся квартира",
    "contact.option.addition": "Будинок / конструкція",
    "contact.option.other": "Щось інше",
    "contact.placeholder.message":
      "Район, панель чи цегла, приблизно що хочете. Фото можна пізніше.",
    "contact.submit": "Надіслати запит",
    "contact.note":
      "Відкриється пошта з готовим текстом. Його ще треба відправити.",
    "contact.noemail":
      "Пошти на сайті ще немає. Зателефонуйте або напишіть у WhatsApp, якщо номер уже є.",
    "contact.other.title": "Або просто зателефонуйте",
    "contact.phone": "Телефон:",
    "contact.email": "Пошта:",
    "contact.hours": "Години:",
    "contact.ico": "ІЧО:",
    "contact.dic": "ДІЧ:",
    "contact.icdph": "ІЧ DPH:",
    "contact.err.required": "Ім’я, пошта і повідомлення, будь ласка.",
    "contact.err.name": "Ім’я має мати щонайменше дві літери.",
    "contact.err.email": "Це не схоже на електронну пошту.",
    "contact.err.phone": "Словацький номер — +421… або 09…",
    "contact.err.message": "Ще речення, хоча б одне.",
    "contact.ok.sent": "Відкриваємо пошту. Якщо нічого не сталося, напишіть на адресу нижче.",
    "contact.mail.subject": "Запит із сайту від {name}",
    "contact.mail.name": "Ім’я",
    "contact.mail.email": "Пошта",
    "contact.mail.phone": "Телефон",
    "contact.mail.project": "Замовлення",
    "contact.mail.message": "Повідомлення",
    "contact.mail.notProvided": "(не вказано)",
    "contact.mail.notSpecified": "(не зазначено)",

    "privacy.title": "Захист даних",
    "privacy.p1":
      "Цей сайт не використовує аналітичні cookies. Якщо напишете повідомлення, VGV-stav s.r.o. використає ім’я, пошту і текст лише для відповіді і для оцінки замовлення.",
    "privacy.p2":
      "Дані не продаємо. Тримаємо їх, поки триває запит або замовлення, потім видаляємо.",
    "privacy.p3":
      "Питання: сторінка контакту або пошта в підвалі, коли там буде.",

    "estimate.title": "Орієнтовна ціна",
    "estimate.intro":
      "Це не пропозиція. Це діапазон, щоб ви знали, чи говоримо про ті самі гроші. Дійсне число — після огляду.",
    "estimate.project.label": "Що будемо робити?",
    "estimate.project.jadro": "Сантехнічне ядро",
    "estimate.project.jadro.hint": "Ванна + туалет у панельці",
    "estimate.project.kitchen": "Кухня",
    "estimate.project.kitchen.hint": "Кімната, не гарнітур",
    "estimate.project.fasada": "Фасад",
    "estimate.project.fasada.hint": "Штукатурка, менше утеплення",
    "estimate.project.balkon": "Балкон",
    "estimate.project.balkon.hint": "Гідроізоляція, плитка, огорожа",
    "estimate.project.bathroom": "Ванна",
    "estimate.project.bathroom.hint": "Лише ванна",
    "estimate.project.full": "Уся квартира / будинок",
    "estimate.project.full.hint": "Більшість площі квартири або будинку",
    "estimate.project.addition": "Приватний будинок",
    "estimate.property.label": "Квартира чи будинок?",
    "estimate.property.apartment": "Квартира",
    "estimate.property.home": "Приватний будинок",
    "estimate.area.label": "Площа",
    "estimate.area.unit": "м²",
    "estimate.area.hint.jadro": "Ядро — ванна і туалет разом, не вся квартира.",
    "estimate.area.hint.kitchen": "Підлога кухні, не вітальня.",
    "estimate.area.hint.fasada": "Площа стіни, не підлога квартири.",
    "estimate.area.hint.balkon": "Підлога балкона, не кімната за ним.",
    "estimate.area.hint.bathroom": "Лише ванна.",
    "estimate.area.hint.full": "Приблизно вся квартира або будинок, який робимо.",
    "estimate.quality.label": "Рівень",
    "estimate.quality.standard": "Проста",
    "estimate.quality.standard.hint": "Пристойно, нічого зайвого",
    "estimate.quality.comfort": "Середня",
    "estimate.quality.comfort.hint": "Що бере більшість",
    "estimate.quality.premium": "Вищий",
    "estimate.quality.premium.hint": "Краща плитка, кращі змішувачі",
    "estimate.extras.label": "Ще щось?",
    "estimate.extras.layout": "Рухаємо стіни",
    "estimate.extras.mep": "Нові комунікації і поза кімнатою",
    "estimate.extras.old": "Будівля до 1990 року",
    "estimate.extras.none": "нічого додаткового",
    "estimate.result.label": "Орієнтовний діапазон",
    "estimate.result.disclaimer":
      "Діапазон, не договір. Стояки, приховані труби і те, що оберете в магазині, його зрушать. Підтвердимо, коли стоятимемо в кімнаті.",
    "estimate.cta.contact": "Хочу реальну пропозицію",
    "estimate.contact.message":
      "Скористав(лась) калькулятором на сайті.\n\nЗамовлення: {project}\nБудівля: {property}\nПлоща: {area} м²\nРівень: {quality}\nДодатково: {extras}\nДіапазон: {low} – {high}\n\nНапишіть, будь ласка, щодо огляду."
  }
};

function getLang() {
  try {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored === "en" || stored === "sk" || stored === "uk") return stored;
  } catch (e) {
    /* private mode */
  }
  return DEFAULT_LANG;
}

function setLang(lang) {
  if (lang !== "en" && lang !== "sk" && lang !== "uk") lang = DEFAULT_LANG;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* private mode */
  }
  applyTranslations(lang);
}

function t(key, lang) {
  lang = lang || getLang();
  var pack = translations[lang] || translations[DEFAULT_LANG];
  if (pack[key] != null) return pack[key];
  if (translations[DEFAULT_LANG][key] != null) return translations[DEFAULT_LANG][key];
  return key;
}

function applyTranslations(lang) {
  lang = lang || getLang();
  document.documentElement.lang = lang;

  var page = document.body.getAttribute("data-page");
  if (page) {
    document.title = t("meta.title." + page, lang);
    var desc = t("meta.desc." + page, lang);
    var meta = document.querySelector('meta[name="description"]');
    if (meta && desc && desc !== "meta.desc." + page) {
      meta.setAttribute("content", desc);
    }
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", document.title);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && desc && desc !== "meta.desc." + page) {
      ogDesc.setAttribute("content", desc);
    }
  }

  var nodes = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"), lang);
  }

  var attrNodes = document.querySelectorAll("[data-i18n-attr]");
  for (var k = 0; k < attrNodes.length; k++) {
    var aEl = attrNodes[k];
    var parts = aEl.getAttribute("data-i18n-attr").split(";");
    for (var p = 0; p < parts.length; p++) {
      var pair = parts[p].split(":");
      if (pair.length < 2) continue;
      aEl.setAttribute(pair[0].trim(), t(pair.slice(1).join(":").trim(), lang));
    }
  }

  var buttons = document.querySelectorAll(".lang-btn");
  for (var b = 0; b < buttons.length; b++) {
    var btn = buttons[b];
    var isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  }

  var toggle = document.querySelector(".menu-toggle");
  var sideNav = document.getElementById("side-nav");
  if (toggle) {
    var open = sideNav && sideNav.classList.contains("is-open");
    toggle.setAttribute(
      "aria-label",
      open ? t("aria.closeMenu", lang) : t("aria.openMenu", lang)
    );
  }

  var closeBtn = document.querySelector(".menu-close");
  if (closeBtn) {
    closeBtn.setAttribute("aria-label", t("aria.closeMenu", lang));
  }

  var hoursEls = document.querySelectorAll("[data-site-hours]");
  for (var h = 0; h < hoursEls.length; h++) {
    hoursEls[h].textContent =
      lang === "en" ? SITE.hoursEn : lang === "uk" ? SITE.hoursUk || SITE.hours : SITE.hours;
  }

  refreshEstimate(lang);
  refreshContactEstimatePrefill(lang);
  refreshWhatsAppFabLabel(lang);
  refreshContactFieldErrors(lang);
}

function initLanguageSwitcher() {
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".lang-btn");
    if (!btn) return;
    var lang = btn.getAttribute("data-lang");
    if (!lang) return;
    setLang(lang);
  });
  applyTranslations(getLang());
}

function telHref(phone) {
  return "tel:" + String(phone).replace(/[^\d+]/g, "");
}

function waHref(raw) {
  var num = String(raw || SITE.phone || "").replace(/[^\d]/g, "");
  if (!num) return "";
  return "https://wa.me/" + num;
}

var WA_FAB_SVG =
  '<svg viewBox="0 0 24 24" aria-hidden="true" width="28" height="28">' +
  '<path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>' +
  "</svg>";

function ensureWhatsAppFab(wa) {
  var existing = document.getElementById("wa-fab");
  if (!wa) {
    if (existing) existing.remove();
    return;
  }
  var a = existing;
  if (!a) {
    a = document.createElement("a");
    a.id = "wa-fab";
    a.className = "wa-fab";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = WA_FAB_SVG;
    document.body.appendChild(a);
  }
  a.href = wa;
  a.setAttribute("aria-label", t("aria.whatsapp"));
}

function refreshWhatsAppFabLabel(lang) {
  var fab = document.getElementById("wa-fab");
  if (fab) fab.setAttribute("aria-label", t("aria.whatsapp", lang));
}

function applySiteConfig() {
  if (typeof SITE === "undefined") return;

  var phone = SITE.phone;
  var display = SITE.phoneDisplay || phone;
  var email = SITE.email;
  var wa = waHref(SITE.whatsapp || phone);

  document.querySelectorAll("[data-site=\"phone\"]").forEach(function (el) {
    if (!phone) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    if (el.tagName === "A") el.setAttribute("href", telHref(phone));
    if (!el.getAttribute("data-i18n")) el.textContent = display;
  });

  document.querySelectorAll("[data-site=\"email\"]").forEach(function (el) {
    if (!email) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    if (el.tagName === "A") el.setAttribute("href", "mailto:" + email);
    if (!el.getAttribute("data-i18n")) el.textContent = email;
  });

  document.querySelectorAll("[data-site=\"whatsapp\"]").forEach(function (el) {
    if (!wa) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    if (el.tagName === "A") el.setAttribute("href", wa);
  });

  document.querySelectorAll("[data-site=\"city\"]").forEach(function (el) {
    el.textContent = SITE.city;
  });

  document.querySelectorAll("[data-site=\"address\"]").forEach(function (el) {
    if (!SITE.address) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.textContent = SITE.address;
  });

  document.querySelectorAll("[data-site=\"ico-row\"]").forEach(function (el) {
    el.hidden = !SITE.ico;
  });

  document.querySelectorAll("[data-site=\"ico\"]").forEach(function (el) {
    el.textContent = SITE.ico || "";
  });

  document.querySelectorAll("[data-site=\"name\"]").forEach(function (el) {
    el.textContent = SITE.name || SITE.legalName || "";
  });

  document.querySelectorAll("[data-site=\"legal-name\"]").forEach(function (el) {
    el.textContent = SITE.legalName || SITE.name || "";
  });

  document.querySelectorAll("[data-site=\"dic-row\"]").forEach(function (el) {
    el.hidden = !SITE.dic;
  });

  document.querySelectorAll("[data-site=\"dic\"]").forEach(function (el) {
    el.textContent = SITE.dic || "";
  });

  document.querySelectorAll("[data-site=\"icdph-row\"]").forEach(function (el) {
    el.hidden = !SITE.icDph;
  });

  document.querySelectorAll("[data-site=\"icdph\"]").forEach(function (el) {
    el.textContent = SITE.icDph || "";
  });

  document.querySelectorAll("[data-site=\"register\"]").forEach(function (el) {
    if (!SITE.register) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.textContent = SITE.register;
  });

  document.querySelectorAll("[data-needs-phone]").forEach(function (el) {
    el.hidden = !phone;
  });

  document.querySelectorAll("[data-needs-email]").forEach(function (el) {
    el.hidden = !email;
  });

  document.querySelectorAll("[data-fallback-write]").forEach(function (el) {
    el.hidden = !!phone;
  });

  ensureWhatsAppFab(wa);
  applyCanonicalUrls();
  injectJsonLd();
}

function pageCanonicalUrl() {
  if (typeof SITE === "undefined" || !SITE.url) return "";
  var base = String(SITE.url).replace(/\/+$/, "");
  var page = window.location.pathname.split("/").pop() || "index.html";
  if (page === "index.html" || page === "") return base + "/";
  return base + "/" + page;
}

function applyCanonicalUrls() {
  var href = pageCanonicalUrl();
  if (!href) return;

  var canon = document.querySelector('link[rel="canonical"]');
  if (!canon) {
    canon = document.createElement("link");
    canon.rel = "canonical";
    document.head.appendChild(canon);
  }
  canon.setAttribute("href", href);

  var og = document.querySelector('meta[property="og:url"]');
  if (!og) {
    og = document.createElement("meta");
    og.setAttribute("property", "og:url");
    document.head.appendChild(og);
  }
  og.setAttribute("content", href);
}

function injectJsonLd() {
  if (typeof SITE === "undefined") return;
  var existing = document.getElementById("local-business-jsonld");
  if (existing) existing.remove();

  var data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.legalName || SITE.name,
    description:
      "Rekonštrukcie bytov v Bratislave. Bytové jadrá, kúpeľne, kuchyne, fasády, balkóny.",
    areaServed: SITE.areas.map(function (name) {
      return { "@type": "City", name: name };
    })
  };
  if (SITE.url) data.url = SITE.url;
  if (SITE.phone) data.telephone = SITE.phone;
  if (SITE.email) data.email = SITE.email;
  if (SITE.address || SITE.city) {
    data.address = {
      "@type": "PostalAddress",
      addressLocality: SITE.city || "Bratislava",
      addressCountry: "SK"
    };
    if (SITE.address) data.address.streetAddress = SITE.address;
  }
  if (SITE.icDph || SITE.ico) data.vatID = SITE.icDph || SITE.ico;

  var el = document.createElement("script");
  el.type = "application/ld+json";
  el.id = "local-business-jsonld";
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
}

function setActiveNav() {
  var path = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".side-nav nav a, .desk-nav a");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href === path) links[i].classList.add("active");
    else links[i].classList.remove("active");
  }
}

function initSideNav() {
  var toggle = document.querySelector(".menu-toggle");
  var closeBtn = document.querySelector(".menu-close");
  var sideNav = document.getElementById("side-nav");
  var overlay = document.getElementById("nav-overlay");
  var scrollY = 0;
  if (!toggle || !sideNav || !overlay) return;

  function openNav() {
    scrollY = window.scrollY || 0;
    sideNav.classList.add("is-open");
    sideNav.setAttribute("aria-hidden", "false");
    overlay.hidden = false;
    void overlay.offsetWidth;
    overlay.classList.add("is-visible");
    document.body.classList.add("nav-open");
    document.body.style.top = "-" + scrollY + "px";
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", t("aria.closeMenu"));
    if (closeBtn) closeBtn.focus();
  }

  function closeNav() {
    sideNav.classList.remove("is-open");
    sideNav.setAttribute("aria-hidden", "true");
    overlay.classList.remove("is-visible");
    document.body.classList.remove("nav-open");
    document.body.style.top = "";
    window.scrollTo(0, scrollY);
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", t("aria.openMenu"));
    toggle.focus();
    function onOverlayEnd() {
      if (!overlay.classList.contains("is-visible")) overlay.hidden = true;
      overlay.removeEventListener("transitionend", onOverlayEnd);
    }
    overlay.addEventListener("transitionend", onOverlayEnd);
  }

  toggle.addEventListener("click", function () {
    if (sideNav.classList.contains("is-open")) closeNav();
    else openNav();
  });
  if (closeBtn) closeBtn.addEventListener("click", closeNav);
  overlay.addEventListener("click", closeNav);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sideNav.classList.contains("is-open")) closeNav();
  });
}

var ESTIMATE_CONFIG = {
  projects: {
    jadro: {
      rate: 1600,
      minCost: 6500,
      areaMin: 3,
      areaMax: 12,
      areaDefault: 5,
      contactValue: "Bathroom core"
    },
    kitchen: {
      rate: 950,
      minCost: 7000,
      areaMin: 6,
      areaMax: 25,
      areaDefault: 10,
      contactValue: "Kitchen remodel"
    },
    bathroom: {
      rate: 1400,
      minCost: 5000,
      areaMin: 3,
      areaMax: 12,
      areaDefault: 5,
      contactValue: "Bathroom renovation"
    },
    fasada: {
      rate: 180,
      minCost: 4500,
      areaMin: 20,
      areaMax: 200,
      areaDefault: 40,
      contactValue: "Facade"
    },
    balkon: {
      rate: 950,
      minCost: 3500,
      areaMin: 2,
      areaMax: 12,
      areaDefault: 4,
      contactValue: "Balcony reconstruction"
    },
    full: {
      rate: 950,
      minCost: 28000,
      areaMin: 30,
      areaMax: 120,
      areaDefault: 64,
      contactValue: "Full reconstruction"
    },
    addition: {
      rate: 1200,
      minCost: 22000,
      areaMin: 10,
      areaMax: 80,
      areaDefault: 20,
      contactValue: "Addition / structural"
    }
  },
  quality: { standard: 0.85, comfort: 1, premium: 1.28 },
  property: { apartment: 1, home: 1.12 },
  extras: { layout: 1.15, mep: 1.18, old: 1.12 },
  lowFactor: 0.82,
  highFactor: 1.22
};

var contactEstimateTouched = false;

function roundToHundred(n) {
  return Math.round(n / 100) * 100;
}

function formatMoney(n, lang) {
  var locale = lang === "en" ? "en-US" : lang === "uk" ? "uk-UA" : "sk-SK";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(n);
}

function resolveProjectKey(state) {
  if (state.project === "full" && state.property === "home") return "addition";
  return state.project;
}

function readEstimateState(form) {
  var project = (form.querySelector('input[name="project"]:checked') || {}).value;
  var property = (form.querySelector('input[name="property"]:checked') || {}).value;
  var quality = (form.querySelector('input[name="quality"]:checked') || {}).value || "comfort";
  var areaInput = form.querySelector("#area-num");
  return {
    project: project,
    property: property,
    quality: quality,
    area: areaInput ? parseFloat(areaInput.value, 10) : NaN,
    layout: !!(form.querySelector("#extra-layout") || {}).checked,
    mep: !!(form.querySelector("#extra-mep") || {}).checked,
    old: !!(form.querySelector("#extra-old") || {}).checked
  };
}

function computeEstimate(state) {
  var proj = ESTIMATE_CONFIG.projects[resolveProjectKey(state)];
  if (!proj || !isFinite(state.area) || state.area <= 0) return null;
  if (!ESTIMATE_CONFIG.quality[state.quality]) return null;
  if (!ESTIMATE_CONFIG.property[state.property]) return null;

  var extras = 1;
  if (state.layout) extras *= ESTIMATE_CONFIG.extras.layout;
  if (state.mep) extras *= ESTIMATE_CONFIG.extras.mep;
  if (state.old) extras *= ESTIMATE_CONFIG.extras.old;

  var mid =
    state.area *
    proj.rate *
    ESTIMATE_CONFIG.quality[state.quality] *
    ESTIMATE_CONFIG.property[state.property] *
    extras;
  if (mid < proj.minCost) mid = proj.minCost;

  return {
    mid: mid,
    low: roundToHundred(mid * ESTIMATE_CONFIG.lowFactor),
    high: roundToHundred(mid * ESTIMATE_CONFIG.highFactor)
  };
}

function extraLabels(state, lang) {
  var parts = [];
  if (state.layout) parts.push(t("estimate.extras.layout", lang));
  if (state.mep) parts.push(t("estimate.extras.mep", lang));
  if (state.old) parts.push(t("estimate.extras.old", lang));
  return parts.length ? parts.join(", ") : t("estimate.extras.none", lang);
}

var lastFreeProperty = "apartment";

function syncPropertyForProject(form) {
  var project = (form.querySelector('input[name="project"]:checked') || {}).value;
  var apt = form.querySelector('input[name="property"][value="apartment"]');
  var home = form.querySelector('input[name="property"][value="home"]');
  if (!apt || !home) return;

  if (project === "fasada") {
    if (!apt.disabled) lastFreeProperty = apt.checked ? "apartment" : "home";
    home.checked = true;
    apt.checked = false;
    apt.disabled = true;
    return;
  }

  var wasLocked = apt.disabled;
  apt.disabled = false;
  if (wasLocked) {
    home.checked = lastFreeProperty === "home";
    apt.checked = lastFreeProperty !== "home";
  }
}

function applyAreaBounds(form, projectKey, keepValue) {
  var property = (form.querySelector('input[name="property"]:checked') || {}).value;
  var proj = ESTIMATE_CONFIG.projects[resolveProjectKey({ project: projectKey, property: property })];
  if (!proj) return;
  var slider = form.querySelector("#area");
  var number = form.querySelector("#area-num");
  if (!slider || !number) return;
  slider.min = proj.areaMin;
  slider.max = proj.areaMax;
  number.min = proj.areaMin;
  number.max = proj.areaMax;
  var current = parseFloat(number.value, 10);
  var next = keepValue && isFinite(current) ? current : proj.areaDefault;
  if (next < proj.areaMin) next = proj.areaMin;
  if (next > proj.areaMax) next = proj.areaMax;
  slider.value = next;
  number.value = next;
}

function buildEstimateContactHref(state, result) {
  var params = new URLSearchParams();
  params.set("from", "estimate");
  params.set("project", resolveProjectKey(state));
  params.set("property", state.property);
  params.set("quality", state.quality);
  params.set("area", String(state.area));
  params.set("low", String(result.low));
  params.set("high", String(result.high));
  var extras = [];
  if (state.layout) extras.push("layout");
  if (state.mep) extras.push("mep");
  if (state.old) extras.push("old");
  if (extras.length) params.set("extras", extras.join(","));
  return "kontakt.html?" + params.toString();
}

function refreshEstimate(lang) {
  var form = document.getElementById("estimate-form");
  if (!form) return;
  lang = lang || getLang();

  var state = readEstimateState(form);
  var hint = document.getElementById("area-hint");
  if (hint && state.project) {
    hint.textContent = t("estimate.area.hint." + state.project, lang);
  }

  var result = computeEstimate(state);
  var rangeEl = document.getElementById("estimate-range");
  var summaryEl = document.getElementById("estimate-summary");
  var cta = document.getElementById("estimate-contact");

  if (!result) {
    if (rangeEl) rangeEl.textContent = "—";
    if (summaryEl) summaryEl.textContent = "";
    if (cta) cta.setAttribute("href", "kontakt.html");
    return;
  }

  if (rangeEl) {
    rangeEl.textContent =
      formatMoney(result.low, lang) + " – " + formatMoney(result.high, lang);
  }
  if (summaryEl) {
    var bits = [
      state.area + " m²",
      t("estimate.project." + state.project, lang),
      t("estimate.quality." + state.quality, lang),
      t("estimate.property." + state.property, lang)
    ];
    summaryEl.textContent = bits.join(" · ");
  }
  if (cta) cta.setAttribute("href", buildEstimateContactHref(state, result));
}

function syncAreaInputs(source) {
  var form = document.getElementById("estimate-form");
  if (!form) return;
  var slider = form.querySelector("#area");
  var number = form.querySelector("#area-num");
  if (!slider || !number) return;
  var value = parseFloat(source.value, 10);
  var proj = ESTIMATE_CONFIG.projects[resolveProjectKey(readEstimateState(form))];
  if (proj && isFinite(value)) {
    if (value < proj.areaMin) value = proj.areaMin;
    if (value > proj.areaMax) value = proj.areaMax;
  }
  if (!isFinite(value)) return;
  slider.value = value;
  number.value = value;
}

function initEstimate() {
  var form = document.getElementById("estimate-form");
  if (!form) return;
  syncPropertyForProject(form);
  applyAreaBounds(form, readEstimateState(form).project || "jadro", true);

  form.addEventListener("change", function (e) {
    if (e.target && e.target.name === "property" && e.target.value && !e.target.disabled) {
      lastFreeProperty = e.target.value;
    }
    if (e.target && e.target.name === "project") {
      syncPropertyForProject(form);
    }
    if (e.target && (e.target.name === "project" || e.target.name === "property")) {
      applyAreaBounds(form, readEstimateState(form).project || "jadro", true);
    }
    refreshEstimate();
  });
  form.addEventListener("input", function (e) {
    if (e.target && (e.target.id === "area" || e.target.id === "area-num")) {
      syncAreaInputs(e.target);
      refreshEstimate();
    }
  });
  refreshEstimate();
}

function estimateParamsFromUrl() {
  var params = new URLSearchParams(window.location.search);
  if (params.get("from") !== "estimate") return null;
  return params;
}

function buildEstimateContactMessage(params, lang) {
  var extrasRaw = (params.get("extras") || "").split(",");
  var extraState = {
    layout: extrasRaw.indexOf("layout") !== -1,
    mep: extrasRaw.indexOf("mep") !== -1,
    old: extrasRaw.indexOf("old") !== -1
  };
  var low = parseInt(params.get("low"), 10);
  var high = parseInt(params.get("high"), 10);
  return t("estimate.contact.message", lang)
    .replace("{project}", t("estimate.project." + (params.get("project") || ""), lang))
    .replace("{property}", t("estimate.property." + (params.get("property") || ""), lang))
    .replace("{quality}", t("estimate.quality." + (params.get("quality") || ""), lang))
    .replace("{area}", params.get("area") || "")
    .replace("{extras}", extraLabels(extraState, lang))
    .replace("{low}", isFinite(low) ? formatMoney(low, lang) : "—")
    .replace("{high}", isFinite(high) ? formatMoney(high, lang) : "—");
}

function refreshContactEstimatePrefill(lang) {
  var form = document.getElementById("contact-form");
  var params = estimateParamsFromUrl();
  if (!form || !params) return;
  lang = lang || getLang();
  var projectKey = params.get("project");
  var proj = ESTIMATE_CONFIG.projects[projectKey];
  if (form.project && proj) form.project.value = proj.contactValue;
  if (form.message && !contactEstimateTouched) {
    form.message.value = buildEstimateContactMessage(params, lang);
  }
}

function initContactEstimatePrefill() {
  var form = document.getElementById("contact-form");
  if (!form || !estimateParamsFromUrl()) return;
  if (form.message) {
    form.message.addEventListener("input", function () {
      contactEstimateTouched = true;
    });
  }
  refreshContactEstimatePrefill();
}

var CONTACT_RE = {
  name: /^[\p{L}][\p{L}\s'\-]{1,79}$/u,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  phone: /^(?:\+|00)?421[1-9]\d{8}$|^0[1-9]\d{8}$/
};

function contactDigits(value) {
  return String(value || "").replace(/[\s().\-/]/g, "");
}

function contactFieldError(field, value) {
  var v = String(value || "").trim();
  if (field === "name") {
    if (!v || !CONTACT_RE.name.test(v)) return "contact.err.name";
    return "";
  }
  if (field === "email") {
    if (!v || !CONTACT_RE.email.test(v)) return "contact.err.email";
    return "";
  }
  if (field === "phone") {
    if (!v) return "";
    if (!CONTACT_RE.phone.test(contactDigits(v))) return "contact.err.phone";
    return "";
  }
  if (field === "message") {
    if (v.length < 10) return "contact.err.message";
    return "";
  }
  return "";
}

function setContactFieldState(input, errorKey, lang) {
  var field = input.closest(".field");
  if (!field) return;
  var err = field.querySelector(".field-error");
  if (errorKey) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    input.setAttribute("aria-invalid", "true");
    if (err) {
      err.hidden = false;
      err.textContent = t(errorKey, lang);
    }
  } else {
    field.classList.remove("is-invalid");
    var filled = String(input.value || "").trim() !== "";
    field.classList.toggle("is-valid", filled);
    input.setAttribute("aria-invalid", "false");
    if (err) {
      err.hidden = true;
      err.textContent = "";
    }
  }
}

function refreshContactFieldErrors(lang) {
  var form = document.getElementById("contact-form");
  if (!form) return;
  lang = lang || getLang();
  ["name", "email", "phone", "message"].forEach(function (name) {
    var input = form.elements[name];
    if (!input) return;
    var field = input.closest(".field");
    if (!field || (!field.classList.contains("is-invalid") && !input.dataset.touched)) return;
    setContactFieldState(input, contactFieldError(name, input.value), lang);
  });
}

function initContactValidation(form) {
  ["name", "email", "phone", "message"].forEach(function (name) {
    var input = form.elements[name];
    if (!input) return;
    function run() {
      input.dataset.touched = "1";
      setContactFieldState(input, contactFieldError(name, input.value));
    }
    input.addEventListener("blur", run);
    input.addEventListener("input", function () {
      if (input.dataset.touched || String(input.value || "").trim()) run();
    });
  });
}

function handleContactForm(e) {
  e.preventDefault();
  var form = e.target;
  var msg = document.getElementById("form-msg");
  var name = form.name.value.trim();
  var email = form.email.value.trim();
  var phone = form.phone.value.trim();
  var project = form.project.value;
  var message = form.message.value.trim();
  var lang = getLang();

  var errors = {
    name: contactFieldError("name", name),
    email: contactFieldError("email", email),
    phone: contactFieldError("phone", phone),
    message: contactFieldError("message", message)
  };
  var firstInvalid = null;
  ["name", "email", "phone", "message"].forEach(function (key) {
    var input = form.elements[key];
    if (!input) return;
    input.dataset.touched = "1";
    setContactFieldState(input, errors[key], lang);
    if (errors[key] && !firstInvalid) firstInvalid = input;
  });

  if (firstInvalid) {
    msg.className = "form-msg show err";
    msg.textContent = t("contact.err.required", lang);
    firstInvalid.focus();
    return;
  }

  if (!SITE.email) {
    msg.className = "form-msg show err";
    msg.textContent = t("contact.noemail", lang);
    return;
  }

  var subject = t("contact.mail.subject", lang).replace("{name}", name);
  var body =
    t("contact.mail.name", lang) + ": " + name + "\n" +
    t("contact.mail.email", lang) + ": " + email + "\n" +
    t("contact.mail.phone", lang) + ": " +
      (phone || t("contact.mail.notProvided", lang)) + "\n" +
    t("contact.mail.project", lang) + ": " +
      (project || t("contact.mail.notSpecified", lang)) + "\n\n" +
    t("contact.mail.message", lang) + ":\n" + message;

  window.location.href =
    "mailto:" + SITE.email +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  msg.className = "form-msg show ok";
  msg.textContent = t("contact.ok.sent", lang);
}

document.addEventListener("DOMContentLoaded", function () {
  applySiteConfig();
  initLanguageSwitcher();
  setActiveNav();
  initSideNav();

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", handleContactForm);
    initContactValidation(form);
    initContactEstimatePrefill();
  }
  initEstimate();
});
