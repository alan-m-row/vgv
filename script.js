// VGV-stav. SK / EN / UA

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
    "cta.estimate": "Rough price",
    "cta.call": "Call us",
    "cta.write": "Write to us",
    "cta.whatsapp": "WhatsApp",
    "footer.rights": "© 2026 VGV-stav s.r.o.",

    "home.hero.title": "Apartment renovations in Bratislava",
    "home.hero.text":
      "We focus on bathroom cores, bathrooms, kitchens, facades and balconies. Mostly brick and panel flats, sometimes a house.",
    "home.featured.kicker": "Recent job",
    "home.featured.title": "Ružinov, bathroom",
    "home.featured.text":
      "Bathroom renovation in Ružinov. A walk-in shower with large-format tile.",
    "home.featured.link": "Tell me more",
    "home.services.title": "What we do",
    "home.jadro.title": "Bathroom core",
    "home.jadro.text": "A standard core renovation. Umakart comes out.",
    "home.bath.title": "Bathroom",
    "home.bath.text": "Tile, waterproofing, sanitary ware.",
    "home.kitchen.title": "Kitchen",
    "home.kitchen.text": "Services, tile, floor. Preparation for a new kitchen.",
    "home.fasada.title": "Facade",
    "home.fasada.text": "Plaster, repairs, insulation of a smaller area. Houses only.",
    "home.balkon.title": "Balcony",
    "home.balkon.text": "Waterproofing, tile, railings.",
    "home.full.title": "Full flat renovation",
    "home.full.text": "A full turnkey renovation.",
    "home.house.title": "Houses",
    "home.house.text": "Lamač, Záhorská Bystrica, Pezinok or Senec. Smaller renovations on your house.",
    "home.how.title": "How it works",
    "home.how.1": "Call us or write.",
    "home.how.2": "We arrange a free visit.",
    "home.how.3": "We prepare a price.",
    "home.how.4": "We agree a start date and get going.",
    "home.areas.title": "Where we work",
    "home.areas":
      "Petržalka, Ružinov, Nové Mesto, Staré Mesto, Karlova Ves, Dúbravka, Lamač, Rača, Vrakuňa and the surroundings, Pezinok, Senec, Malacky.",

    "jadro.title": "Bathroom cores in Bratislava panel blocks",
    "jadro.lede":
      "Umakart still sitting in a lot of flats from the seventies and eighties. We take it out and build a proper bathroom and WC.",
    "jadro.p1":
      "Most weeks we are in Petržalka, Ružinov or Dúbravka. The cores are much the same, the stacks stay put, and you cannot move everything.",
    "jadro.p2":
      "A typical job is twelve to fourteen days. You can stay in the flat if you have to, but you will not have a bathroom or WC for that stretch.",
    "jadro.p3":
      "The building manager usually wants to know. We can talk to them. If a stack or a load-bearing wall is involved, we say so before anyone lifts a hammer.",
    "jadro.in.title": "What's included",
    "jadro.in":
      "Strip-out and waste, blockwork, waterproofing, tile, sanitary ware we agree on, and making good the adjacent walls.",
    "jadro.out.title": "What's not included",
    "jadro.out":
      "Furniture and other fittings.",
    "jadro.faq.title": "Questions",
    "jadro.q1": "What does a core renovation cost in Bratislava?",
    "jadro.a1":
      "A normal panel-block core is often between €6,500 and €12,000, depending on size and fittings.",
    "jadro.q2": "How long does it take?",
    "jadro.a2":
      "12 to 14 days. Complicated cases can take longer.",
    "jadro.q3": "Do we need the building manager’s say-so?",
    "jadro.a3":
      "A core usually needs at least a notice. In other cases a written agreement is required.",

    "kupelna.title": "Bathroom renovation in Bratislava",
    "kupelna.lede":
      "We do a bathroom on its own, and also as part of a larger renovation.",
    "kupelna.p1":
      "Waterproofing, falls to the drain, tile that will still look alright in eight years. We would rather do the unglamorous layer once.",
    "kupelna.p2":
      "Shower or bath depends on the space. In a small panel core a shower leaves more room. If the waste does not fit, we say so before the work starts.",
    "kupelna.faq.title": "Questions",
    "kupelna.q1": "What does a bathroom cost in Bratislava?",
    "kupelna.a1":
      "A bathroom renovation often costs between €5,000 and €10,000, depending on size and fittings.",
    "kupelna.q2": "How long does it take?",
    "kupelna.a2":
      "8 to 12 days if it is only the bathroom. With a core renovation, 12 to 14 days.",
    "kupelna.q3": "Shower or a bath?",
    "kupelna.a3":
      "It depends on what the owner prefers, the free space, and where the pipes are.",

    "kuchyna.title": "Kitchens",
    "kuchyna.lede":
      "The building work behind a new kitchen. Services, splashback, floor, a wall that should not have been there.",
    "kuchyna.p1":
      "We sort the room first: water, waste, electrics, and a straight wall. If you have a kitchen from a studio or a shop, we can assemble and fit it.",
    "kuchyna.p2":
      "If you already have a kitchen company, we can work to their drawing. If you do not, we can tell you what the room will allow.",
    "kuchyna.faq.title": "Questions",
    "kuchyna.q1": "Do you put the kitchen units together as well?",
    "kuchyna.a1":
      "Yes. We assemble and fit it. We do not build a kitchen to measure. If you have one from a studio or a shop, we put it together.",
    "kuchyna.q2": "What does it cost?",
    "kuchyna.a2":
      "Preparing the kitchen comes out at €7,000 to €15,000. It goes up if walls come out. We price the fitting once we know which units you have.",
    "kuchyna.q3": "How long does it take?",
    "kuchyna.a3":
      "The building work takes a week or two. If the units are ready, we fit them in the same job. You do not need a second fitter for the kitchen.",

    "fasada.title": "Facades and plaster repairs",
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
    "fasada.faq.title": "Questions",
    "fasada.q1": "What does facade work cost?",
    "fasada.a1":
      "A smaller area on a house starts at a few thousand euro. We do not insulate a whole block.",
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
      "You can live in the flat. On a block the manager usually wants a notice. Glazing and aluminium are not a standard item. We add a price for them once we have seen the balcony.",
    "balkon.in.title": "What's included",
    "balkon.in":
      "Stripping the old layer, waterproofing, falls, tile, railings we agree, taking the waste away.",
    "balkon.out.title": "What's not included",
    "balkon.out":
      "Glazing, a winter garden, the structure if the balcony is ready to fall off. That is a different job.",
    "balkon.faq.title": "Questions",
    "balkon.q1": "What does a balcony reconstruction cost?",
    "balkon.a1":
      "A panel balcony comes out at €3,000 to €6,000. The railings move the sum. Glazing is extra.",
    "balkon.q2": "Do you glaze balconies as well?",
    "balkon.a2":
      "Not as a standard item. If you want it, we add it to the job, or we send you to a firm that glazes balconies.",
    "balkon.q3": "How long does it take?",
    "balkon.a3":
      "Four to eight days if the waterproofing dries as it should. Rain stretches it.",

    "realizacie.title": "Work we have finished",
    "realizacie.intro":
      "Some of our recent jobs.",
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
      "If you want a site visit, get in touch.",
    "contact.form.title": "Message",
    "contact.label.name": "Name and surname *",
    "contact.label.email": "Email *",
    "contact.label.phone": "Phone",
    "contact.label.project": "What kind of job",
    "contact.label.message": "Message *",
    "contact.option.select": "Pick one",
    "contact.option.jadro": "Bathroom core",
    "contact.option.kitchen": "Kitchen",
    "contact.option.bath": "Bathroom",
    "contact.option.fasada": "Facade",
    "contact.option.balkon": "Balcony",
    "contact.option.full": "Whole flat",
    "contact.option.addition": "House / structural",
    "contact.option.other": "Something else",
    "contact.placeholder.message":
      "A short description of the building and the scope.",
    "contact.submit": "Send",
    "contact.note":
      "After you press the button you go to your email. Remember to send the message.",
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
    "contact.err.phone": "Use a Slovak number, +421 or 09.",
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
      "You get the final price after a visit from our specialist.",
    "estimate.project.label": "What do I need?",
    "estimate.project.jadro": "Bathroom core",
    "estimate.project.jadro.hint": "Bathroom + WC",
    "estimate.project.kitchen": "Kitchen",
    "estimate.project.kitchen.hint": "Not including the kitchen units",
    "estimate.project.fasada": "Facade",
    "estimate.project.fasada.hint": "Plaster or smaller insulation jobs",
    "estimate.project.balkon": "Balcony",
    "estimate.project.balkon.hint": "Waterproofing, tile, railings, glazing",
    "estimate.project.bathroom": "Bathroom",
    "estimate.project.bathroom.hint": "Wall and floor tile",
    "estimate.project.full": "Whole flat / house",
    "estimate.project.full.hint": "A large renovation of a flat or a house",
    "estimate.project.addition": "House",
    "estimate.property.label": "I have",
    "estimate.property.apartment": "Apartment",
    "estimate.property.home": "House",
    "estimate.area.label": "Area",
    "estimate.area.unit": "m²",
    "estimate.area.hint.jadro": "The core is the bathroom and WC together.",
    "estimate.area.hint.kitchen": "The kitchen, not the living room if they are joined.",
    "estimate.area.hint.fasada": "The outside wall area.",
    "estimate.area.hint.balkon": "The balcony area.",
    "estimate.area.hint.bathroom": "The bathroom area.",
    "estimate.area.hint.full": "The floor area of the flat.",
    "estimate.quality.label": "Finish",
    "estimate.quality.standard": "Basic",
    "estimate.quality.standard.hint": "The plain base",
    "estimate.quality.comfort": "Mid",
    "estimate.quality.comfort.hint": "The usual choice",
    "estimate.quality.premium": "Higher end",
    "estimate.quality.premium.hint": "Better materials",
    "estimate.extras.label": "More detail",
    "estimate.extras.layout": "Layout change",
    "estimate.extras.mep": "New services",
    "estimate.extras.old": "Last renovation more than 15 years ago?",
    "estimate.extras.none": "nothing extra",
    "estimate.result.label": "Rough price",
    "estimate.result.disclaimer":
      "The final price can differ.",
    "estimate.cta.contact": "I want to know more",
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
    "cta.estimate": "Orientačná cena",
    "cta.call": "Zavolaje nám",
    "cta.write": "Napísať",
    "cta.whatsapp": "WhatsApp",
    "footer.rights": "© 2026 VGV-stav s.r.o.",

    "home.hero.title": "Rekonštrukcie bytov v Bratislave",
    "home.hero.text":
      "Zameriavame sa na jadrá, kúpeľne, kuchyne, fasády a balkóny. Hlavne tehlové/panelové byty avšak občasne aj rodinné domy.",
    "home.featured.kicker": "Nedávna zákazka",
    "home.featured.title": "Ružinov, kúpeľňa",
    "home.featured.text":
      "Rekonštrukcia kúpeľne v Ružinove. Sprchový kút s veľkoformátovým obkladom. ",
    "home.featured.link": "Chcem vedieť viac",
    "home.services.title": "Čo robíme",
    "home.jadro.title": "Bytové jadro",
    "home.jadro.text": "Klasická prerábka jadra, odstránenie umakartu.",
    "home.bath.title": "Kúpeľňa",
    "home.bath.text": "Obklad, hydroizolácia, sanita.",
    "home.kitchen.title": "Kuchyňa",
    "home.kitchen.text": "Rozvody, obklad, podlaha. Príprava na novú kuchynskú linku.",
    "home.fasada.title": "Fasáda",
    "home.fasada.text": "Omietka, opravy, zateplenie menšej plochy (Len rodinné domy)",
    "home.balkon.title": "Balkón",
    "home.balkon.text": "Hydroizolácia, dlažba, zábradlie.",
    "home.full.title": "Kompletná prerábka bytov",
    "home.full.text": "Kompletná prerábka na kľúč.",
    "home.house.title": "Domy",
    "home.house.text": "Lamač, Záhorská Bystrica, Pezinok či Senec. Menšie rekonštrukcie na vašom dome.",
    "home.how.title": "Ako na to?",
    "home.how.1": "Zavolajte nám alebo napíšte.",
    "home.how.2": "Dohodneme si ohliadku zadarmo.",
    "home.how.3": "Vypracujeme cenovú ponuku.",
    "home.how.4": "Dohodneme sa na termíne a môžeme ísť na to!",
    "home.areas.title": "Kde všade pracujeme?",
    "home.areas":
      "Petržalka, Ružinov, Nové Mesto, Staré Mesto, Karlova Ves, Dúbravka, Lamač, Rača, Vrakuňa a okolie, Pezinok, Senec, Malacky.",

    "jadro.title": "Rekonštrukcia bytového jadra v Bratislave",
    "jadro.lede":
      "Vymieňame umakartové jadrá v panelákoch zo 70. a 80. rokov. Umakart ide preč, kúpeľňa a WC sa vymurujú.",
    "jadro.p1":
      "Väčšinu týždňov sme v Petržalke, Ružinove alebo Dúbravke. Jadrá sa podobajú, stupačky ostanú na mieste a všetko sa posunúť nedá.",
    "jadro.p2":
      "Bežná zákazka je dvanásť až štrnásť dní. V byte sa dá spať, ale kúpeľňu a WC ten čas nemáte.",
    "jadro.p3":
      "Správca o tom zvyčajne chce vedieť. Vieme sa s ním porozprávať. Keď ide o stupačku alebo nosnú stenu, povieme to pred začiatkom prác.",
    "jadro.in.title": "Čo je v cene",
    "jadro.in":
      "Búranie a odvoz sutiny, murovanie, hydroizolácia, obklad, dohodnutá sanita a začistenie okolitých stien.",
    "jadro.out.title": "Čo v cene nie je",
    "jadro.out":
      "Nábytok a iné vybavenie",
    "jadro.faq.title": "Otázky",
    "jadro.q1": "Koľko stojí prerábka jadra v Bratislave?",
    "jadro.a1":
      "Bežné panelákové jadro je často niekde medzi 6 500 a 12 000 €, podľa veľkosti a vybavenia.",
    "jadro.q2": "Ako dlho to trvá?",
    "jadro.a2":
      "12 až 14 dní. Pri komplikovaných prípadoch sa doba môže predĺžiť. ",
    "jadro.q3": "Treba súhlas správcu?",
    "jadro.a3":
      "Pri jadre je zvyčajne potrebné aspoň ohlásenie. V iných prípadoch je potrebná písomná dohoda",

    "kupelna.title": "Rekonštrukcia kúpeľne v Bratislave",
    "kupelna.lede":
      "Kúpeľňu robíme samostatne aj ako súčasť väčšej prerábky.",
    "kupelna.p1":
      "Hydroizolácia, spád k odtoku a obklad. Na tej vrstve, ktorú potom nikto nevidí, nešetríme.",
    "kupelna.p2":
      "Sprchu alebo vaňu vyberieme podľa priestoru. V malom panelákovom jadre sprcha nechá viac miesta. Ak odpad nesedí, povieme to pred začatím prác.",
    "kupelna.faq.title": "Otázky",
    "kupelna.q1": "Koľko stojí kúpeľňa v Bratislave?",
    "kupelna.a1":
      "Bežná cena prerábky kúpeľne je často medzi 5 000 a 10 000 €, podľa veľkosti a vybavenia.",
    "kupelna.q2": "Ako dlho to trvá?",
    "kupelna.a2":
      "8 až 12 dní, ak ide len o kúpeľňu. Pri prerábke jadra 12 až 14 dní.",
    "kupelna.q3": "Sprcha alebo vaňa?",
    "kupelna.a3":
      "Záleží od preferencie majiteľa, voľného priestoru a umiestnenia rozvodov.",

    "kuchyna.title": "Rekonštrukcia kuchyne v Bratislave",
    "kuchyna.lede":
      "Príprava kuchyne na novú linku. Rozvody, obklad, podlaha. Linku vieme aj zložiť a namontovať.",
    "kuchyna.p1":
      "Najprv upravíme miestnosť: voda, odpad, elektro a rovná stena. Linku zo štúdia alebo z obchodu vieme zložiť a namontovať.",
    "kuchyna.p2":
      "Keď už máte kuchynské štúdio, ideme podľa ich výkresu. Keď nie, povieme, čo miestnosť unesie.",
    "kuchyna.faq.title": "Otázky",
    "kuchyna.q1": "Robíte aj kuchynskú linku?",
    "kuchyna.a1":
      "Áno, zložíme ju a namontujeme. Linku na mieru nerobíme. Keď ju máte zo štúdia alebo z obchodu, poskladáme ju.",
    "kuchyna.q2": "Koľko to stojí?",
    "kuchyna.a2":
      "Stavebná príprava kuchyne vychádza na 7 000 až 15 000 €. Pribúda, keď sa búrajú steny. Montáž linky naceníme, keď vieme, aká je.",
    "kuchyna.q3": "Ako dlho to trvá?",
    "kuchyna.a3":
      "Týždeň až dva trvá stavebná práca. Montáž linky stihneme v tom istom termíne, keď ju máte pripravenú. Ďalšieho montážnika na linku netreba.",

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
    "fasada.faq.title": "Otázky",
    "fasada.q1": "Koľko stojí fasáda?",
    "fasada.a1":
      "Menšia plocha na dome začína na niekoľkých tisícoch. Celú bytovku nezatepľujeme.",
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
      "V byte sa dá bývať. Pri bytovke správca zvyčajne chce ohlásenie. Zasklenie a hliník nie sú bežná položka. Cenu k nim doplníme, až keď balkón uvidíme.",
    "balkon.in.title": "Čo je v cene",
    "balkon.in":
      "Strhnutie starej vrstvy, hydroizolácia, spád, dlažba, zábradlie podľa dohody, odvoz sutiny.",
    "balkon.out.title": "Čo v cene nie je",
    "balkon.out":
      "Zasklenie, zimná záhrada, nosná konštrukcia, keď je balkón na spadnutie. To je iná zákazka.",
    "balkon.faq.title": "Otázky",
    "balkon.q1": "Koľko stojí rekonštrukcia balkóna?",
    "balkon.a1":
      "Panelákový balkón vychádza na 3 000 až 6 000 €. Zábradlie sumu posúva. Zasklenie je zvlášť.",
    "balkon.q2": "Robíte aj zasklenie?",
    "balkon.a2":
      "Nie ako bežnú položku. Ak ho chcete, dopočítame ho k zákazke, alebo vás pošleme za firmou, ktorá zasklieva.",
    "balkon.q3": "Ako dlho to trvá?",
    "balkon.a3":
      "Štyri až osem dní, keď hydroizolácia schne, ako má. Dážď to predĺži.",

    "realizacie.title": "Realizácie",
    "realizacie.intro":
      "Niektoré z naších posledných zákaziek.",
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
      "Ak máte záujem o ohliadku, nezabudnite nás kontaktovať",
    "contact.form.title": "Správa",
    "contact.label.name": "Meno a priezvisko *",
    "contact.label.email": "E-mail *",
    "contact.label.phone": "Telefón",
    "contact.label.project": "Typ zákazky",
    "contact.label.message": "Správa *",
    "contact.option.select": "Vyberte",
    "contact.option.jadro": "Bytové jadro",
    "contact.option.kitchen": "Kuchyňa",
    "contact.option.bath": "Kúpeľňa",
    "contact.option.fasada": "Fasáda",
    "contact.option.balkon": "Balkón",
    "contact.option.full": "Celý byt",
    "contact.option.addition": "Dom / konštrukcia",
    "contact.option.other": "Niečo iné",
    "contact.placeholder.message":
      "Krátky popis stavby a rozsahu.",
    "contact.submit": "Odoslať",
    "contact.note":
      "Po stlačení tlačidla budete presmerovaný na Váš email. Nezabudnite vašu správu odoslať!",
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
    "contact.err.phone": "Slovenské číslo, +421 alebo 09.",
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
      "Finálnu cenu sa dozviete až po obhiadke náším expertom. ",
    "estimate.project.label": "Čo potrebujem?",
    "estimate.project.jadro": "Bytové jadro",
    "estimate.project.jadro.hint": "Kúpeľňa + WC",
    "estimate.project.kitchen": "Kuchyňa",
    "estimate.project.kitchen.hint": "Okrem kuchynskej linky",
    "estimate.project.fasada": "Fasáda",
    "estimate.project.fasada.hint": "Omietky alebo menšie zateplenia",
    "estimate.project.balkon": "Balkón",
    "estimate.project.balkon.hint": "Hydroizolácia, dlažba, zábradlie, zasklenie",
    "estimate.project.bathroom": "Kúpeľňa",
    "estimate.project.bathroom.hint": "Obklady, dlažby",
    "estimate.project.full": "Celý byt / dom",
    "estimate.project.full.hint": "Rozsiahla prerábka bytu alebo domu",
    "estimate.project.addition": "Dom",
    "estimate.property.label": "Mám",
    "estimate.property.apartment": "Byt",
    "estimate.property.home": "Rodinný dom",
    "estimate.area.label": "Plocha",
    "estimate.area.unit": "m²",
    "estimate.area.hint.jadro": "Jadro — kúpeľňa a WC spolu.",
    "estimate.area.hint.kitchen": "Kuchyňa (Bez obyvačky ak sú spojené)",
    "estimate.area.hint.fasada": "Plocha vonkajších stien.",
    "estimate.area.hint.balkon": "Plocha balkóna",
    "estimate.area.hint.bathroom": "Plocha kúpeľne.",
    "estimate.area.hint.full": "Rozhloha bytu",
    "estimate.quality.label": "Úroveň",
    "estimate.quality.standard": "Základná",
    "estimate.quality.standard.hint": "Úplný základ",
    "estimate.quality.comfort": "Stredná",
    "estimate.quality.comfort.hint": "Najobľúbenejšie",
    "estimate.quality.premium": "Vyššia",
    "estimate.quality.premium.hint": "Kvalitnejšie materiály",
    "estimate.extras.label": "Ďalšie informácie",
    "estimate.extras.layout": "Zmena rozpoloženia",
    "estimate.extras.mep": "Nové rozvody",
    "estimate.extras.old": "Posledná rekonštrukcia pred 15 rokmi?", 
    "estimate.extras.none": "nič navyše",
    "estimate.result.label": "Orientačná cena",
    "estimate.result.disclaimer":
      "Výsledná cena sa môže líšiť!",
    "estimate.cta.contact": "Chcem vedieť viac",
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
    "cta.call": "Зателефонуйте нам",
    "cta.write": "Написати",
    "cta.whatsapp": "WhatsApp",
    "footer.rights": "© 2026 VGV-stav s.r.o.",

    "home.hero.title": "Реконструкції квартир у Братиславі",
    "home.hero.text":
      "Беремося за ядра, ванні, кухні, фасади й балкони. Здебільшого цегляні й панельні квартири, іноді будинки.",
    "home.featured.kicker": "Нещодавнє замовлення",
    "home.featured.title": "Ружинов, ванна",
    "home.featured.text":
      "Реконструкція ванної в Ружинові. Душова з великоформатною плиткою.",
    "home.featured.link": "Хочу дізнатися більше",
    "home.services.title": "Що робимо",
    "home.jadro.title": "Сантехнічне ядро",
    "home.jadro.text": "Звичайна реконструкція ядра, умакарт знімаємо.",
    "home.bath.title": "Ванна",
    "home.bath.text": "Плитка, гідроізоляція, сантехніка.",
    "home.kitchen.title": "Кухня",
    "home.kitchen.text": "Комунікації, плитка, підлога. Підготовка під новий гарнітур.",
    "home.fasada.title": "Фасад",
    "home.fasada.text": "Штукатурка, ремонт, утеплення меншої площі. Лише будинки.",
    "home.balkon.title": "Балкон",
    "home.balkon.text": "Гідроізоляція, плитка, огорожа.",
    "home.full.title": "Повна реконструкція квартир",
    "home.full.text": "Повна реконструкція під ключ.",
    "home.house.title": "Будинки",
    "home.house.text": "Ламач, Загорська Бистриця, Пезінок чи Сенець. Менші реконструкції у вашому будинку.",
    "home.how.title": "Як це працює?",
    "home.how.1": "Зателефонуйте або напишіть.",
    "home.how.2": "Домовимось про безкоштовний огляд.",
    "home.how.3": "Підготуємо ціну.",
    "home.how.4": "Домовимось про термін і беремось до роботи.",
    "home.areas.title": "Де працюємо?",
    "home.areas":
      "Петржалка, Ружинов, Нове Місто, Старе Місто, Карлова Вес, Дубравка, Ламач, Рача, Вракуня і околиці, Пезінок, Сенець, Малацки.",

    "jadro.title": "Сантехнічні ядра в братиславських панельках",
    "jadro.lede":
      "Умакарт ще стоїть у купі квартир із сімдесятих і вісімдесятих. Виймемо його і зробимо ванну і туалет нормально.",
    "jadro.p1":
      "Більшість тижнів ми в Петржалці, Ружинові чи Дубравці. Ядра схожі, стояки лишаються на місці, і все зрушити не вийде.",
    "jadro.p2":
      "Звичайне замовлення триває дванадцять-чотирнадцять днів. У квартирі можна спати, але ванни і туалету той час немає.",
    "jadro.p3":
      "Управитель про це зазвичай хоче знати. Можемо з ним поговорити. Якщо йдеться про стояк або несучу стіну, скажемо раніше, ніж хтось візьме молоток.",
    "jadro.in.title": "Що в ціні",
    "jadro.in":
      "Демонтаж і вивіз, мурування, гідроізоляція, плитка, узгоджена сантехніка і заведення сусідніх стін.",
    "jadro.out.title": "Чого в ціні немає",
    "jadro.out":
      "Меблі та інше обладнання.",
    "jadro.faq.title": "Питання",
    "jadro.q1": "Скільки коштує реконструкція ядра в Братиславі?",
    "jadro.a1":
      "Звичайне панельне ядро часто коштує від 6 500 до 12 000 €, залежно від розміру і комплектації.",
    "jadro.q2": "Скільки це триває?",
    "jadro.a2":
      "12–14 днів. Складні випадки можуть тривати довше.",
    "jadro.q3": "Потрібна згода управителя?",
    "jadro.a3":
      "Для ядра зазвичай потрібне хоча б повідомлення. В інших випадках потрібна письмова угода.",

    "kupelna.title": "Реконструкція ванної в Братиславі",
    "kupelna.lede":
      "Ванну робимо окремо і як частину більшої реконструкції.",
    "kupelna.p1":
      "Гідроізоляція, ухил до стоку, плитка, яка виглядатиме пристойно і за вісім років. Краще раз зробити той шар, який ніхто не фотографує.",
    "kupelna.p2":
      "Душ чи ванна залежить від місця. У маленькому панельному ядрі душ лишає більше простору. Якщо стік не підходить, скажемо до початку робіт.",
    "kupelna.faq.title": "Питання",
    "kupelna.q1": "Скільки коштує ванна в Братиславі?",
    "kupelna.a1":
      "Реконструкція ванної часто коштує від 5 000 до 10 000 €, залежно від розміру і комплектації.",
    "kupelna.q2": "Скільки це триває?",
    "kupelna.a2":
      "8–12 днів, якщо лише ванна. Разом із ядром 12–14 днів.",
    "kupelna.q3": "Душ чи ванна?",
    "kupelna.a3":
      "Залежить від того, чого хоче власник, від вільного місця і від того, де стоять труби.",

    "kuchyna.title": "Кухні",
    "kuchyna.lede":
      "Будівельна робота за новим гарнітуром. Комунікації, плитка, підлога, стіна, якої там не мало бути.",
    "kuchyna.p1":
      "Спочатку ладнаємо кімнату: вода, стік, електрика і рівна стіна. Гарнітур зі студії або з магазину можемо зібрати і поставити.",
    "kuchyna.p2":
      "Якщо вже є кухонна студія, можемо йти за їхнім кресленням. Якщо ні, скажемо, що кімната витримає.",
    "kuchyna.faq.title": "Питання",
    "kuchyna.q1": "Робите також кухонний гарнітур?",
    "kuchyna.a1":
      "Так, зберемо і поставимо. Гарнітур на замовлення не виготовляємо. Якщо він зі студії або з магазину, складемо його.",
    "kuchyna.q2": "Скільки це коштує?",
    "kuchyna.a2":
      "Підготовка кухні виходить на 7 000 до 15 000 €. Додається, якщо зносимо стіни. Монтаж гарнітура оцінимо, коли знатимемо, який він.",
    "kuchyna.q3": "Скільки це триває?",
    "kuchyna.a3":
      "Будівельна робота триває тиждень або два. Якщо гарнітур уже є, ставимо його в той самий термін. Окремого монтажника на кухню не треба.",

    "fasada.title": "Фасади та ремонт штукатурки",
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
    "fasada.faq.title": "Питання",
    "fasada.q1": "Скільки коштує фасад?",
    "fasada.a1":
      "Менша площа на будинку починається від кількох тисяч. Цілу панельку не утеплюємо.",
    "fasada.q2": "Робите утеплення цілої панельки?",
    "fasada.a2":
      "Ні. Робимо будинок, одну стіну, лоджію чи ремонт. Цілу панельку бере більша фірма.",
    "fasada.q3": "Риштування в ціні?",
    "fasada.a3":
      "Якщо треба, так. Підйомник теж. Скажемо в пропозиції, не як сюрприз на подвір’ї.",

    "balkon.title": "Балкони",
    "balkon.lede":
      "Гідроізоляція, плитка, огорожа. Балкон, який перестане текти до сусіда.",
    "balkon.p1":
      "Спочатку стік і гідроізоляція. Потім плитка чи інший узгоджений шар. Огорожа, якщо прогнила або її треба замінити.",
    "balkon.p2":
      "У квартирі можна жити. У багатоквартирному управитель зазвичай хоче повідомлення. Засклення й алюміній не є звичайною позицією. Ціну на них додамо, коли побачимо балкон.",
    "balkon.in.title": "Що в ціні",
    "balkon.in":
      "Зняття старого шару, гідроізоляція, ухил, плитка, огорожа за домовленістю, вивіз.",
    "balkon.out.title": "Чого в ціні немає",
    "balkon.out":
      "Засклення, зимовий сад, несуча конструкція, якщо балкон ось-ось відвалиться. Це інше замовлення.",
    "balkon.faq.title": "Питання",
    "balkon.q1": "Скільки коштує реконструкція балкона?",
    "balkon.a1":
      "Панельний балкон виходить на 3 000 до 6 000 €. Огорожа суму змінює. Засклення окремо.",
    "balkon.q2": "Робите також засклення?",
    "balkon.a2":
      "Не як звичайна позиція. Якщо хочете, додамо це до замовлення або відправимо до фірми, яка склить балкони.",
    "balkon.q3": "Скільки це триває?",
    "balkon.a3":
      "Чотири-вісім днів, якщо гідроізоляція сохне як треба. Дощ це подовжить.",

    "realizacie.title": "Зроблені роботи",
    "realizacie.intro":
      "Деякі з наших останніх замовлень.",
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
      "Робимо реконструкції квартир у Братиславі. Ядра, ванні, кухні, фасади й балкони.",
    "about.p2":
      "Більшість тижня ми в панельках. Решта: кухні, фасади, балкони й іноді ціла квартира в цеглі.",
    "about.p3":
      "Від першого дзвінка до останнього прибирання у вас одна людина. Якщо треба сантехніка чи електрика, він іде через нас.",
    "about.p4":
      "У панельці стояк не зрушиш лише тому, що так зручніше. Скажемо це на огляді, а не пізніше в ціні.",
    "about.areas.title": "Куди їздимо",
    "about.areas":
      "Усі п’ять братиславських округів і звичні села довкола міста, коли йдеться про будинок.",
    "contact.title": "Приїдемо подивитися",
    "contact.intro":
      "Якщо хочете огляд, напишіть або зателефонуйте.",
    "contact.form.title": "Повідомлення",
    "contact.label.name": "Ім’я та прізвище *",
    "contact.label.email": "Електронна пошта *",
    "contact.label.phone": "Телефон",
    "contact.label.project": "Тип замовлення",
    "contact.label.message": "Повідомлення *",
    "contact.option.select": "Оберіть",
    "contact.option.jadro": "Сантехнічне ядро",
    "contact.option.kitchen": "Кухня",
    "contact.option.bath": "Ванна",
    "contact.option.fasada": "Фасад",
    "contact.option.balkon": "Балкон",
    "contact.option.full": "Уся квартира",
    "contact.option.addition": "Будинок / конструкція",
    "contact.option.other": "Щось інше",
    "contact.placeholder.message":
      "Короткий опис будівлі і обсягу робіт.",
    "contact.submit": "Надіслати",
    "contact.note":
      "Після кнопки відкриється ваша пошта. Не забудьте надіслати повідомлення.",
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
    "contact.err.phone": "Словацький номер, +421 або 09.",
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
      "Остаточну ціну отримаєте після огляду нашим спеціалістом.",
    "estimate.project.label": "Що мені потрібно?",
    "estimate.project.jadro": "Сантехнічне ядро",
    "estimate.project.jadro.hint": "Ванна + туалет",
    "estimate.project.kitchen": "Кухня",
    "estimate.project.kitchen.hint": "Без кухонного гарнітура",
    "estimate.project.fasada": "Фасад",
    "estimate.project.fasada.hint": "Штукатурка або менше утеплення",
    "estimate.project.balkon": "Балкон",
    "estimate.project.balkon.hint": "Гідроізоляція, плитка, огорожа, скління",
    "estimate.project.bathroom": "Ванна",
    "estimate.project.bathroom.hint": "Плитка на стіни і підлогу",
    "estimate.project.full": "Уся квартира / будинок",
    "estimate.project.full.hint": "Велика реконструкція квартири або будинку",
    "estimate.project.addition": "Будинок",
    "estimate.property.label": "Маю",
    "estimate.property.apartment": "Квартира",
    "estimate.property.home": "Приватний будинок",
    "estimate.area.label": "Площа",
    "estimate.area.unit": "м²",
    "estimate.area.hint.jadro": "Ядро: ванна і туалет разом.",
    "estimate.area.hint.kitchen": "Кухня, без вітальні, якщо вони з’єднані.",
    "estimate.area.hint.fasada": "Площа зовнішніх стін.",
    "estimate.area.hint.balkon": "Площа балкона.",
    "estimate.area.hint.bathroom": "Площа ванної.",
    "estimate.area.hint.full": "Площа квартири.",
    "estimate.quality.label": "Рівень",
    "estimate.quality.standard": "Базова",
    "estimate.quality.standard.hint": "Сама основа",
    "estimate.quality.comfort": "Середня",
    "estimate.quality.comfort.hint": "Найзвичніший вибір",
    "estimate.quality.premium": "Вищий",
    "estimate.quality.premium.hint": "Кращі матеріали",
    "estimate.extras.label": "Додаткові дані",
    "estimate.extras.layout": "Зміна планування",
    "estimate.extras.mep": "Нові комунікації",
    "estimate.extras.old": "Остання реконструкція понад 15 років тому?",
    "estimate.extras.none": "нічого додаткового",
    "estimate.result.label": "Орієнтовна ціна",
    "estimate.result.disclaimer":
      "Кінцева ціна може відрізнятися.",
    "estimate.cta.contact": "Хочу дізнатися більше",
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
    if (rangeEl) rangeEl.textContent = "…";
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
    .replace("{low}", isFinite(low) ? formatMoney(low, lang) : "…")
    .replace("{high}", isFinite(high) ? formatMoney(high, lang) : "…");
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
