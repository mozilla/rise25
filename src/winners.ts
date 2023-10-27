export type Winner = {
  name: string;
  bio: string;
  image: string;
};

export enum Category {
  ACTIVISTS = 'Activists',
  BUILDERS = 'Builders',
  ARTISTS = 'Artists',
  CREATORS = 'Creators',
  ADVOCATES = 'Advocates',
}

export type Group = {
  title: Category;
  description: string;
  scrollHash: string;
  winners: Winner[];
};

export const groups: Group[] = [
  {
    title: Category.ACTIVISTS,
    scrollHash: 'activists',
    description:
      'Meet the digital activists using technology to amplify voices, effect change, and inspire audiences globally. These pioneers advocate for a better world, on and offline.',
    winners: [
      {
        name: 'Ahmad Hegab',
        bio: '<p>Ahmad Hegab is a passionate advocate for gender justice and digital safety. He actively works to combat technology-facilitated gender-based violence by tackling issues such as internet safety, toxic masculinity, male engagement towards gender justice, and digital harm related to human trafficking. Ahmad continues to speak up about the responsibilities of internet and digital technology corporations to prevent and respond to technology-facilitated violence against women and girls.</p><p>Ahmad is currently serving on the Board of Directors of Harassmap International. He is helping the new Harassmap MENA campaign to establish their work in the region, and he leads the technical support operations for Salam@, a regional program aimed at localizing the concept of digital safety in the MENA to prevent and eliminate technology-facilitated violence. Ahmad helps and mentor various initiatives and groups that work with men to confront violence.</p>',
        image: '/headshots/ahmad-hegab.jpg',
      },
      {
        name: 'Chris Smalls',
        bio: '<p>Chris Smalls is the founder and president of the Amazon Labor Union, an independent, democratic, worker-led labor union at Amazon in Staten Island. He is also the founder of The Congress of Essential Workers (TCOEW), a nationwide collective of essential workers and allies fighting for better working conditions, better wages, and a better world. Smalls was formerly an Amazon warehouse supervisor, helping open three major warehouses in New York, New Jersey, and Connecticut during his five years with the company, but he was fired in 2020 after organizing a protest against the company’s unsafe pandemic conditions. Smalls has been profiled by media outlets worldwide, including The New York Times, USA Today, The Guardian, The Wall Street Journal, CNBC, CBC Radio, Salon, and Jacobin.</p><p>He lives in Hackensack, New Jersey.</p>',
        image: '/headshots/chris-smalls.jpg',
      },
      {
        name: 'Larissa May',
        bio: "<p>Larissa May (Larz) is a digital wellbeing pioneer and the founder of #HalfTheStory (HTS), the first non-profit dedicated to empowering the next generation’s healthy relationship with social media. HTS' evidence-based program, Social Media U teaches key digital metacognition and emotional regulation skills, while empowering young people to understand and advocate for their digital wellbeing. Larz has become the face of the rapidly growing movement towards digital wellness, leading the global narrative around policy and youth-centric advocacy in the US, UK, EU, and UAE. Prior to #HalfTheStory, Larz helped build some of today’s most buzzy D2C brands, including Kin Euphorics and Otherland. Larz has been featured in TIME, Forbes, Refinery29, Good Morning America, Business Insider, and NBC.</p>",
        image: '/headshots/larissa-may.jpg',
      },
      {
        name: 'Daniel Motaung',
        bio: '<p>Daniel Motaung is a former Facebook content moderator turned whistleblower. He was a TIME100 NEXT 2022 awardee, recommended by Facebook whistleblower Frances Haugen, in recognition of organizing workers to fight against unjust practices within the content moderation environment and for putting “a face on the otherwise invisible human cost of moderating social media.” His work focuses on digital content evaluation and performance monitoring.</p>',
        image: '/headshots/daniel-motaung.jpg',
      },
      {
        name: 'Sneha Revanur',
        bio: "<p>Sneha Revanur is the 18-year-old founder and president of Encode Justice, an international 501(c)(4) organization mobilizing youth for human-centered artificial intelligence. It is now the world’s first and largest youth activist group in AI — Sneha is working to build a social, cultural, and political movement to reimagine what technology can do for humanity. Sneha’s work has been covered in CNN, the Washington Post, The Guardian, POLITICO, CNBC, Reuters, MIT Technology Review, Teen Vogue, The Hill, &amp; more. Sneha joined Vice President Harris at a private White House roundtable on AI with civil society leaders as the youngest invitee, and was most recently named the youngest of TIME's list of the 100 most influential voices in artificial intelligence.</p>",
        image: '/headshots/sneha-revanur.jpg',
      },
    ],
  },
  {
    title: Category.BUILDERS,
    scrollHash: 'builders',
    description:
      'Meet the engineers and technical people building the infrastructure of the internet. These builders shape the technical side of the web, making it more secure, accessible to everyone and a tool for knowledge.',
    winners: [
      {
        name: 'Keoni Mahelona',
        bio: '<p>Keoni Mahelona (kanaka maoli) is the driving force behind the development of digital technologies that aim to protect and promote indigenous languages and knowledge. He makes decisions every day to protect the sovereignty of platforms and data, from the digital and machine learning tools deployed for advanced applications to the storage and sharing of data in culturally appropriate and secure ways.</p>',
        image: '/headshots/keoni-mahelona.jpg',
      },
      {
        name: 'Raphael Mimoun',
        bio: '<p>Raphael is a technologist, activist, and digital safety trainer. He is the founder of Horizontal, a non-profit that builds tools for journalists and human rights defenders. Horizontal won the 2021 World Justice Challenge for Tella, an app used to document human rights violations in repressive environments, and recently released Shira, a phishing simulation platform. Raphael is passionate about building decentralized infrastructure—online and offline—that give more agency, autonomy, and power to people and communities. He organizes with Crosswalks Collective LA and strives for a prison-free world.</p>',
        image: '/headshots/raphael-mimoun.jpg',
      },
      {
        name: 'Trisha Prabhu',
        bio: "<p>Trisha Prabhu is the Founder and CEO of ReThink, a patented app that proactively stops cyberbullying. ReThink, which Trisha invented when she was just 13, has been named one of Google Play's Most Innovative Apps and shared with youth in 136 nations. For her efforts, Trisha/ReThink have been featured on the TED stage, at The White House, and on Forbes 30 Under 30. ReThink is also a winner of the Elevate Prize and Harvard's President's Innovation Challenge.</p><p>A summa cum laude graduate of Harvard College, Trisha is now pursuing her postgraduate studies at the University of Oxford as a US Rhodes Scholar.</p>",
        image: '/headshots/trisha-prabhu.jpg',
      },
      {
        name: 'Andy Yen',
        bio: '<p>Andy Yen is the Founder and CEO of Proton, one of the fastest growing consumer tech companies in Europe. Proton offers the world’s first privacy-by-default ecosystem, providing encrypted email, calendar, file storage, VPN, identity management and much more, built on the principle of your data, your rules. Andy launched Proton’s first product, ProtonMail, now the world’s largest encrypted email service, in 2014 while still working as a CERN scientist. Since then, Andy has become a leading voice in the global privacy movement. Today, Proton has more than 100m accounts and a team of more than 400 people worldwide.</p>',
        image: '/headshots/andy-yen.jpg',
      },
      {
        name: 'Rob Morris',
        bio: "<p>Rob Morris, PhD is the co-founder and CEO of Koko, a behavioral health platform that has helped over 2,000,000 people, mostly adolescents. Koko addresses the youth mental health crisis by meeting young people where they are — online — and providing free digital interventions. Rob’s personal mission is to embed mental health services throughout the entire Internet, creating a web of well-being. At Koko, he has worked directly with many major Internet platforms, including Pinterest, TikTok, Tumblr, OpenAI, and Twitch.</p><p>Rob earned his AB in psychology from Princeton University and his master's and PhD in media arts and sciences from the Massachusetts Institute of Technology. He is an award-winning designer and his work has been featured in Wired, NPR, Fast Company, and The New Yorker, among others.</p>",
        image: '/headshots/rob-morris.jpg',
      },
    ],
  },
  {
    title: Category.ARTISTS,
    scrollHash: 'artists',
    description:
      "Meet the creative forces creating innovative and thought-provoking digital artwork. These artists use the internet as their canvas to inspire others and rethink what's possible online.",
    winners: [
      {
        name: 'Dries Depoorter',
        bio: "<p>Belgian artist Dries Depoorter, based in Ghent, combines technology and art to create pieces that highlight modern concerns like privacy, artificial intelligence, surveillance, and social media. With a strong background in electronics, Dries has become a notable figure in the digital art world. His diverse portfolio includes innovative apps, interactive installations, websites and games.</p><p>A standout project of his, “Die With Me”, is a unique chat app that's only accessible when a user's phone battery is below 5%. Another project, “The Flemish Scrollers”, uses AI to automatically tag Belgian politicians when they use their phones during daily livestreams. His projects have gained international attention, solidifying Dries' position in the global art scene.</p><p>He has showcased his work at prestigious venues like the Barbican in London, Art Basel, Mutek Festival in Montreal, and Ars Electronica.</p>",
        image: '/headshots/dries-depoorter.jpg',
      },
      {
        name: 'Julia Janssen',
        bio: '<p>Julia Janssen makes the challenges of our digitalising society tangible in art. Through performative and interactive installations she makes her audience aware of the underlying infrastructures of data-driven technologies, such as informed consent, bias in AI, the right to be forgotten and so on. Her work takes you on a visual journey and explores how to deal with fairness, equality, freedom, autonomy and democracy in a data-driven society. Janssen is an artist and ambassador of the Dutch Data Protection Foundation in lawsuits against Twitter and Amazon. In her practice, she develops a (visual) language that creates consciousness and movement to make the Internet a better place.</p>',
        image: '/headshots/julia-janssen.jpg',
      },
      {
        name: 'Marlena Myles',
        bio: '<p>Marlena Myles is a self-taught Native American (Spirit Lake Dakota/Mohegan/Muscogee) artist located in St. Paul, Minnesota. Her art brings modernity to Indigenous history, languages and oral traditions while using the land as a teacher. Growing up on her traditional Dakota homelands, she enjoys using her artwork to teach Minnesotans the Indigenous history of this place we call home.</p><p>Her professional work includes children’s books, augmented reality, murals, fabrics and animations shown in Minneapolis Institute of Art and The Museum of Russian Art and other galleries. Her first permanent site-specific augmented reality public art installation known as the Dakota Spirit Walk is available on the Revelo AR app.</p><p>In 2021, she opened her own Dakota publishing company called Wíyouŋkihipi (We Are Capable) Productions to create a wider platform that educates and honors the culture, language and history of Dakota people.</p>',
        image: '/headshots/marlena-myles.jpg',
      },
      {
        name: 'Sylvia Grace Borda',
        bio: '<p>Sylvia Grace Borda is an artist, writer, educator, climate innovator and Women4Climate C40 Fellow.  Sylvia is recognised for her pioneering artworks of farmers staged in tableaux scenes embedded in Google Street View for which she won the Lumen Prize (2016). She has since gone on to co-create climate observation earthworks with Indigenous Oromo communities and collaborators in Ethiopia and elsewhere. Globally trackable in Google Earth, these earthworks are a ground-breaking initiative for arts and climate resilience. Sylvia is an arts advocate supporting sustainable built and natural environments and is recognised in Canada and abroad for her exploration of photography, eco-art works and community engagement. Sylvia lives and works on the unceded territories of the xwməθkwəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and Sel̓íl̓witulh (Tsleil-Waututh) Nations in Vancouver, Canada.</p>',
        image: '/headshots/sylvia-grace-borda.jpg',
      },
      {
        name: 'Marek Tuszynski',
        bio: '<p>Marek Tuszynski, Executive Director and co-founder of Tactical Tech (2003), is a filmmaker, producer, curator, teacher and provocateur. For 30 years, he has worked at the intersection of technology and politics, information and activism, and the consequences of living in a quantified society. Before Tactical Tech, he co-founded organizations dedicated to creating a circular economy of electronics, documenting contemporary art in post-communist countries and rapid technology response in crisis.</p><p>He has co-founded Tactical Studios, co-curated the exhibitions Nervous Systems, The Glass Room, and Everything Will Be Fine, and co-authored the books “Visualising Information for Advocacy” and “Efficiency And Madness”. Marek lectures at universities worldwide and has advised on the right to encryption rights at the UN and served on the Technology Advisory Board for the International Criminal Court.</p>',
        image: '/headshots/marek-tuszynski.jpg',
      },
    ],
  },
  {
    title: Category.CREATORS,
    scrollHash: 'creators',
    description:
      'Meet the content creators using storytelling to build community online. These filmmakers, educators, journalists and social media creators inspire their audiences and sparking important conversations.',
    winners: [
      {
        name: 'Kay Lopez',
        bio: "<p>Kay Lopez is a Social Media Consultant and Content Director focused on multicultural storytelling with experience in Houston, NYC and LA, and working on brands like General Mills, L'Oréal, NBCUniversal, Warner Media, and more.</p><p>Latinas Poderosas is a LATINA-empowered social platform that celebrates both past and present Latina accomplishments. Uplifting the modern-day mujer by motivating her to unapologetically embrace her heritage, traditions, and duality.</p>",
        image: '/headshots/kay-lopez.jpg',
      },
      {
        name: 'Rachel Hislop',
        bio: '<p>Rachel Hislop is a writer, editor, strategist and public speaker. As vice president of content at OkayMedia and editor-in-chief of Okayplayer.com and OkayAfrica.com, Rachel spearheaded a dynamic editorial strategy to engage a youthful demographic and propelled both brands to new heights. Rachel led Beyoncé’s digital presence as digital content manager for Parkwood Entertainment and for the star’s self-titled album, “Lemonade,” “The Formation World Tour,” and the “On The Run Tour.” She also managed digital strategies for Chloe x Halle, Ivy Park, and more. She is currently consulting with purpose-driven businesses and brands on the art of storytelling in the digital realm.</p>',
        image: '/headshots/rachel-hislop.jpg',
      },
      {
        name: 'Abbie Richards',
        bio: "<p>Abbie Richards is a TikToker and TikTok misinformation researcher. She specializes in understanding how misinformation, conspiracy theories, and extremism spread on TikTok and she creates educational content that explains these complex issues to a wider audience. She's amassed a multi-platform following of over half a million people who are interested in learning about these issues. Abbie is a senior video producer at Media Matters and is a co-founder of EcoTok, an environmental TikTok collective that specializes in social media-based climate communication. For her work as an online educator, Abbie was included in the Forbes 30 Under 30 2023 cohort and awarded the WIN WIN Youth Award for 2023.</p>",
        image: '/headshots/abbie-richards.jpg',
      },
      {
        name: 'Vitus "V" Spehar',
        bio: "<p>V Spehar (they/them) is a Rochester-based citizen journalist and creator. Spehar launched Under the Desk News on TikTok in April 2020 with the aim to make news media less intimidating and easier to understand. Their one-minute segments (literally delivered from under a desk) have attracted a bipartisan audience of over 3 million people. Their reporting has taken them to the press room of the 2023 State of the Union to hosting the NBC's livestream of the Thanksgiving Day Parade to speaking at UNESCO summits. This year, V received a special achievement Webby for their concise and compassionate reporting.</p>",
        image: '/headshots/vitus-spehar.jpg',
      },
      {
        name: 'Nyamekye Wilson',
        bio: "<p>Nyamekye Wilson, also known as the “Moses of STEM,“ is a visionary driven by the transformational power of intersectionality and human-centered design. With a fervor for justice, Nyamekye's work echoes the spirit of impactful leaders in the civil rights and gender equity movement. Her passion for global STEM progress birthed a 6-figure ed tech company while working at Google. Nyamekye's most notable achievement is her extensive reach across 33 countries, impacting over 200 schools and empowering more than 9,000 Black women through her ed-tech nonprofit Black Sisters in STEM (Black SiS).</p><p>Her dedication to bridging the gender gap in STEM education and careers has garnered widespread recognition, including from Her Highness Sheikha Mozah Bint Marwan Al Maktoum of Dubai and the World Summit on the Information Society (WSIS).</p>",
        image: '/headshots/nyamekye-wilson.jpg',
      },
    ],
  },
  {
    title: Category.ADVOCATES,
    scrollHash: 'advocates',
    description:
      'Meet the people shaping the policies and regulations governing the internet. These policymakers, scientists and advocates fight for an open, free internet.',
    winners: [
      {
        name: 'Finn Lützow-Holm Myrstad',
        bio: '<p>Finn Lützow-Holm Myrstad is the director of digital policy at the Norwegian Consumer Council (NCC), focusing on national and international issues related to privacy, IT security, artificial intelligence, deceptive design, telecommunication and more. He leads the development of more ethical digital policies and advocates for governments and companies to improve theirs. Some of Finn’s projects involve privacy and security challenges posed by internet-connected devices, user terms in apps, tech companies’ use of deceptive design and online tracking.</p><p>He holds an MSc in Politics and Government of the European Union from the London School of Economics (LSE) and an Executive MBA from Hult International Business School.</p>',
        image: '/headshots/finn-myrstad.jpg',
      },
      {
        name: 'Fanny Hidvégi',
        bio: "<p>Fanny Hidvégi (@infofannny) is Access Now’s Europe Policy and Advocacy Director based in Brussels. She develops Access Now's European policy strategy and manages the EU office. Fanny was a member of the European Commission's High Level Expert Group on Artificial Intelligence, she served on the Council of Europe's Committee of Experts on Freedom of Expression and Digital Technologies, and on the board of the Hungarian Civil Liberties Union (HCLU).</p><p>She is a member of the European Parliament STOA Committee’s International Advisory Board. Fanny is an Obama Foundation Europe Leader and a Marshall Memorial Fellow. Fanny was selected to be a member of the POLITICO Tech 28 Class of 2022.</p>",
        image: '/headshots/fanny-hidvegi.jpg',
      },
      {
        name: 'Natalia Domagala',
        bio: '<p>Natalia Domagala is a global digital policy specialist. As the head of data and AI ethics policy at the U.K. Cabinet Office, she led the development of one of the first national standards for algorithmic transparency in the world. She also launched the first national-level public sector data ethicist role in the U.K. She has research experience in anthropology, gender, civic tech and economic development, recently co-editing the book “Situating Open Data: Global Trends in Local Contexts.” In 2022, Natalia received the Excellence in AI Award in the ethical AI category and was named one of the top 10 most prominent female AI experts by the Perspektywy Foundation.</p>',
        image: '/headshots/natalia-domagala.jpg',
      },
      {
        name: 'Charlotte Slaiman',
        bio: '<p>Charlotte is the Vice President at Public Knowledge. Prior to joining Public Knowledge, Charlotte worked in the Anticompetitive Practices Division of the Federal Trade Commission, investigating and litigating antitrust conduct violations, including the 2017 case against 1-800 Contacts for manipulating Google search ad auctions. She previously worked as a Legislative Aide to Senator Al Franken, focusing on Judiciary Committee issues including competition, media, and consumer privacy.</p>',
        image: '/headshots/charlotte-slaiman.jpg',
      },
      {
        name: 'J Nathan Matias',
        bio: "<p>Dr. J. Nathan Matias is a Guatemalan-American scientist and organizer who works for a world where digital power is guided by evidence and accountable to the public. For the last decade, he has championed community/citizen science on digital rights, pioneering rigorous scientific methods that have improved millions of people's lives on online harassment, mis/disinformation, algorithm accountability, and digital inclusion. Matias leads the Citizens and Technology Lab (CAT Lab) at Cornell University, where he is an Assistant Professor in the Department of Communication. Matias is also co-founder of the Coalition for Independent Technology Research, a nonprofit that works to advance and defend the right to ethically study the impact of technology on society.</p>",
        image: '/headshots/j-nathan-matias.jpg',
      },
    ],
  },
];
