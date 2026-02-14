/**
 * VUTALEAD - Main JavaScript
 * Digital Agency Website
 */

// ========================================
// TRANSLATIONS
// ========================================
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.packages': 'Packages',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero
    'hero.badge': 'Digital Agency of Tanzania',
    'hero.title1': 'We Help',
    'hero.title2': 'Businesses Grow',
    'hero.title3': 'Online',
    'hero.description': 'Vutalead is a digital agency providing modern website development, digital systems, and (coming soon) AI automation and social media management. We build systems that attract customers and increase your business credibility.',
    'hero.ourServices': 'Our Services',
    'hero.contactUs': 'Contact Us',
    'hero.stats.projects': 'Projects',
    'hero.stats.clients': 'Clients',
    'hero.stats.satisfaction': 'Satisfaction',
    'hero.comingSoon': 'Coming Soon: AI & Social',
    
    // About
    'about.badge': 'ABOUT US',
    'about.title': 'About Vutalead',
    'about.subtitle': 'We Help Businesses Grow Online',
    'about.description1': 'Vutalead is a digital agency providing modern website development, digital systems, and (coming soon) AI automation and social media management. We work with clients in Tanzania, delivering innovative, secure, and results-driven solutions.',
    'about.description2': 'With our headquarters in Dubai, we bring international standards while understanding the needs, budget, and market environment of Tanzania.',
    'about.experience': 'Years of Experience',
    'about.quote': '"We do not just build websites — we build systems that attract customers and increase your business credibility."',
    'about.team': 'Vutalead Team',
    'about.teamRole': 'Digital Solutions',
    
    // Values
    'values.trust.title': 'Trust',
    'values.trust.desc': 'We prioritize transparency and honesty in every project we undertake.',
    'values.quality.title': 'Quality Work',
    'values.quality.desc': 'We deliver the best results for every client.',
    'values.communication.title': 'Clear Communication',
    'values.communication.desc': 'We communicate openly and directly with our clients.',
    'values.support.title': 'Ongoing Support',
    'values.support.desc': 'We continue to help even after the project is completed.',
    
    // Services
    'services.badge': 'OUR SERVICES',
    'services.title': 'Our Core Services',
    'services.description': 'We are here to help your business grow by providing modern digital solutions.',
    'services.learnMore': 'Learn More',
    'services.customSolution': 'Need a custom solution? Let us discuss your unique requirements.',
    'services.requestCustom': 'Request Custom Solution',
    
    // Service Items
    'services.website.title': 'Website Development',
    'services.website.desc': 'We create professional-looking websites that work well on phones and computers, with speed, security, and basic SEO.',
    'services.website.feature1': 'Business websites',
    'services.website.feature2': 'School websites',
    'services.website.feature3': 'Organization / NGO websites',
    'services.website.feature4': 'Personal & portfolio websites',
    
    'services.maintenance.title': 'Website Maintenance',
    'services.maintenance.desc': 'A website without maintenance is risky. We provide regular updates, content updates, technical support, and website security.',
    'services.maintenance.feature1': 'Regular updates',
    'services.maintenance.feature2': 'Content updates',
    'services.maintenance.feature3': 'Technical support',
    'services.maintenance.feature4': 'Website security',
    
    'services.ai.title': 'AI Automation',
    'services.ai.desc': 'For businesses that want to save time and increase efficiency. WhatsApp auto-replies, chatbots, lead collection, and appointment booking.',
    'services.ai.feature1': 'WhatsApp auto-replies',
    'services.ai.feature2': 'Customer service chatbots',
    'services.ai.feature3': 'Lead collection systems',
    'services.ai.feature4': 'Appointment automation',
    'services.ai.comingSoon': 'Coming Soon',
    
    'services.social.title': 'Social Media Management',
    'services.social.desc': 'Manage your business accounts efficiently. Content creation, captions, posting schedule, and audience engagement.',
    'services.social.feature1': 'Account management',
    'services.social.feature2': 'Content creation',
    'services.social.feature3': 'Captions & posting',
    'services.social.feature4': 'Audience engagement',
    'services.social.comingSoon': 'Coming Soon',
    
    // Packages
    'packages.badge': 'OUR PACKAGES',
    'packages.title': 'Choose Your Perfect Package',
    'packages.description': 'We offer flexible packages to suit different business needs. Choose the one that works best for you.',
    'packages.bestValue': 'Best Value',
    'packages.maintenance': 'maintenance per month',
    'packages.getStarted': 'Get Started',
    'packages.customTitle': 'Need a custom solution?',
    'packages.customDesc': 'If none of our packages meet your needs, we are ready to help you create a custom solution.',
    'packages.requestCustom': 'Request Custom Solution',
    
    // Package Names
    'packages.starter.name': 'Starter',
    'packages.starter.subtitle': 'Personal & Small Business',
    'packages.starter.desc': 'Perfect for individuals and small businesses just starting out.',
    
    'packages.business.name': 'Business / School',
    'packages.business.subtitle': 'Business, School, Organization',
    'packages.business.desc': 'Ideal for businesses, schools, and organizations with advanced needs.',
    
    'packages.premium.name': 'Premium / Corporate',
    'packages.premium.subtitle': 'Large Companies & NGOs',
    'packages.premium.desc': 'Best for large companies and NGOs with custom requirements.',
    
    // Why Choose Us
    'whyChoose.badge': 'WHY CHOOSE VUTALEAD',
    'whyChoose.title': 'Reasons to Choose Vutalead',
    'whyChoose.description': 'We are here to help your business achieve its digital goals.',
    'whyChoose.trust.title': 'Trust & Quality',
    'whyChoose.trust.desc': 'With experience working with Tanzanian clients, we understand your market needs well.',
    
    'whyChoose.reason1.title': 'We Understand the Tanzanian Market',
    'whyChoose.reason1.desc': 'With experience working with Tanzanian clients, we understand well the needs, budget, and market environment.',
    'whyChoose.reason2.title': 'Transparent Service',
    'whyChoose.reason2.desc': 'We prioritize transparency in communication and costs. No hidden fees or surprises.',
    'whyChoose.reason3.title': 'We Focus on Results',
    'whyChoose.reason3.desc': 'Not just appearance — we aim to deliver real, measurable results.',
    'whyChoose.reason4.title': 'Ongoing Support',
    'whyChoose.reason4.desc': 'We support our clients even after the website is completed. You are safe with us.',
    
    // Stats
    'stats.projects': 'Projects Completed',
    'stats.clients': 'Happy Clients',
    'stats.satisfaction': 'Client Satisfaction',
    
    // Testimonials
    'testimonials.badge': 'TESTIMONIALS',
    'testimonials.title': 'What Our Clients Say',
    'testimonials.description': 'Read reviews from our clients who had the opportunity to work with us.',
    
    // FAQ
    'faq.badge': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Here are answers to questions frequently asked about our services.',
    'faq.otherQuestion': 'Have another question?',
    'faq.contactDesc': 'Do not hesitate to contact us for any questions about our services.',
    'faq.contactUs': 'Contact Us',
    
    // FAQ Items
    'faq.q1': 'How long does it take to build a website?',
    'faq.a1': 'The time depends on the type of website and client needs. For the Starter package, it usually takes 2-3 weeks. For the Business package, 3-4 weeks. For the Premium package, it may take 4-6 weeks or more depending on specific requirements.',
    'faq.q2': 'Can I change content after the website is completed?',
    'faq.a2': 'Yes, absolutely! We build websites with an easy-to-use Content Management System (CMS). We will teach you how to change content, and we also provide ongoing support to our clients.',
    'faq.q3': 'Are your websites mobile-friendly?',
    'faq.a3': 'Yes, all our websites work well on phones, computers, and tablets. This is a core part of our quality standards.',
    'faq.q4': 'Do you accept payment in installments?',
    'faq.a4': 'Yes, we accept payment in installments for our clients. The first payment is 50% of the cost before starting work, and the remaining 50% is paid before the website goes live.',
    'faq.q5': 'Do you provide domain and hosting?',
    'faq.a5': 'We can help you purchase a domain and choose the best hosting for your business. We can also manage these for you as part of our maintenance service.',
    'faq.q6': 'What makes you different from others?',
    'faq.a6': 'We understand the Tanzanian market, provide transparent service, focus on results rather than just appearance, and support our clients even after the website is completed.',
    
    // Contact
    'contact.badge': 'CONTACT US',
    'contact.title': 'Ready to Get Started?',
    'contact.description': 'Contact us today to discuss your project. We are here to help your business grow online.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.socialMedia': 'Social Media',
    'contact.tagline': '"Vutalead — We Build Your Strong Digital Foundation."',
    'contact.form.title': 'Send a Message',
    'contact.form.desc': 'Fill out this form and we will get back to you as soon as possible.',
    'contact.form.name': 'Your Name',
    'contact.form.namePlaceholder': 'Your full name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.phonePlaceholder': '+255 XXX XXX XXX',
    'contact.form.service': 'Service You Need',
    'contact.form.selectService': 'Select service...',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Describe your project or question...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success.title': 'Thank You!',
    'contact.form.success.desc': 'Your message has been sent. We will get back to you soon.',
    
    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  sw: {
    // Navigation
    'nav.home': 'Nyumbani',
    'nav.about': 'Kuhusu',
    'nav.services': 'Huduma',
    'nav.packages': 'Vifurushi',
    'nav.contact': 'Wasiliana',
    'nav.getStarted': 'Anza Sasa',
    
    // Hero
    'hero.badge': 'Digital Agency ya Tanzania',
    'hero.title1': 'Tunasaidia',
    'hero.title2': 'Biashara Kukua',
    'hero.title3': 'Mtandaoni',
    'hero.description': 'Vutalead ni digital agency inayotoa huduma za utengenezaji wa website za kisasa, mifumo ya kidigitali, na (hivi karibuni) AI automation na usimamizi wa mitandao ya kijamii. Tunajenga mifumo inayovutia wateja na kuongeza uaminifu wa biashara yako.',
    'hero.ourServices': 'Huduma Zetu',
    'hero.contactUs': 'Wasiliana Nasi',
    'hero.stats.projects': 'Miradi',
    'hero.stats.clients': 'Wateja',
    'hero.stats.satisfaction': 'Kuridhika',
    'hero.comingSoon': 'Hivi Karibuni: AI & Mitandao',
    
    // About
    'about.badge': 'KUHUSU SISI',
    'about.title': 'Kuhusu Vutalead',
    'about.subtitle': 'Tunasaidia Biashara Kukua Mtandaoni',
    'about.description1': 'Vutalead ni digital agency inayotoa huduma za utengenezaji wa website za kisasa, mifumo ya kidigitali, na (hivi karibuni) AI automation na usimamizi wa mitandao ya kijamii. Tunafanya kazi na wateja wa Tanzania, tukitoa suluhisho za kisasa, salama, na zinazolenga matokeo.',
    'about.description2': 'Tukiwa na makao yetu ya kazi Dubai, tunaleta viwango vya kimataifa huku tukielewa mahitaji, bajeti, na mazingira ya soko la Tanzania.',
    'about.experience': 'Miaka ya Uzoefu',
    'about.quote': '"Hatutengenezi website tu — tunajenga mifumo inayovutia wateja na kuongeza uaminifu wa biashara yako."',
    'about.team': 'Timu ya Vutalead',
    'about.teamRole': 'Suluhisho za Kidigitali',
    
    // Values
    'values.trust.title': 'Uaminifu',
    'values.trust.desc': 'Tunazingatia uwazi na uaminifu katika kila mradi tunaufanya.',
    'values.quality.title': 'Ubora wa Kazi',
    'values.quality.desc': 'Tunatoa matokeo bora zaidi kwa kila mteja wetu.',
    'values.communication.title': 'Mawasiliano Wazi',
    'values.communication.desc': 'Tunawasiliana kwa uwazi na moja kwa moja na wateja wetu.',
    'values.support.title': 'Huduma Endelevu',
    'values.support.desc': 'Tunaendelea kusaidia hata baada ya mradi kukamilika.',
    
    // Services
    'services.badge': 'HUDUMA ZETU',
    'services.title': 'Huduma Zetu Kuu',
    'services.description': 'Tuko hapa kusaidia biashara yako kukua kwa kutoa suluhisho za kisasa za kidigitali.',
    'services.learnMore': 'Jifunze Zaidi',
    'services.customSolution': 'Je, unahitaji suluhisho maalum? Tuzungumzie mahitaji yako maalum.',
    'services.requestCustom': 'Omba Suluhisho Maalum',
    
    // Service Items
    'services.website.title': 'Utengenezaji wa Website',
    'services.website.desc': 'Tunatengeneza website zinazoonekana professional, zinazofanya kazi vizuri kwenye simu na kompyuta, zenye kasi, usalama, na SEO ya msingi.',
    'services.website.feature1': 'Website za biashara',
    'services.website.feature2': 'Website za shule',
    'services.website.feature3': 'Website za taasisi / NGOs',
    'services.website.feature4': 'Website za kibinafsi & portfolio',
    
    'services.maintenance.title': 'Matunzo ya Website',
    'services.maintenance.desc': 'Website bila matunzo ni hatari. Tunatoa updates za mara kwa mara, content updates, technical support, na usalama wa website.',
    'services.maintenance.feature1': 'Updates za mara kwa mara',
    'services.maintenance.feature2': 'Content updates',
    'services.maintenance.feature3': 'Technical support',
    'services.maintenance.feature4': 'Usalama wa website',
    
    'services.ai.title': 'AI Automation',
    'services.ai.desc': 'Kwa biashara zinazotaka kuokoa muda na kuongeza ufanisi. WhatsApp auto-replies, chatbots, lead collection, na appointment booking.',
    'services.ai.feature1': 'WhatsApp auto-replies',
    'services.ai.feature2': 'Chatbots za huduma kwa wateja',
    'services.ai.feature3': 'Lead collection systems',
    'services.ai.feature4': 'Appointment automation',
    'services.ai.comingSoon': 'Hivi Karibuni',
    
    'services.social.title': 'Usimamizi wa Mitandao ya Kijamii',
    'services.social.desc': 'Simamia akaunti za biashara yako kwa ufanisi. Content creation, captions, posting schedule, na audience engagement.',
    'services.social.feature1': 'Usimamizi wa akaunti',
    'services.social.feature2': 'Content creation',
    'services.social.feature3': 'Captions & posting',
    'services.social.feature4': 'Audience engagement',
    'services.social.comingSoon': 'Hivi Karibuni',
    
    // Packages
    'packages.badge': 'VIFURUSHI VETU',
    'packages.title': 'Chagua Kifurushi Chako Bora',
    'packages.description': 'Tuko na vifurushi mbalimbali vinavyolenga mahitaji tofauti ya biashara. Chagua kile kinachokufaa zaidi.',
    'packages.bestValue': 'Thamani Bora',
    'packages.maintenance': 'matunzo kila mwezi',
    'packages.getStarted': 'Anza Sasa',
    'packages.customTitle': 'Je, unahitaji suluhisho maalum?',
    'packages.customDesc': 'Kama hakuna kifurushi kinachokidhi mahitaji yako, tuko tayari kukusaidia kutengeneza suluhisho maalum.',
    'packages.requestCustom': 'Omba Suluhisho Maalum',
    
    // Package Names
    'packages.starter.name': 'Starter',
    'packages.starter.subtitle': 'Kibinafsi & Biashara Ndogo',
    'packages.starter.desc': 'Inafaa kwa watu binafsi na biashara ndogo zinazoanza.',
    
    'packages.business.name': 'Business / Shule',
    'packages.business.subtitle': 'Biashara, Shule, Taasisi',
    'packages.business.desc': 'Inafaa kwa biashara, shule, na taasisi zenye mahitaji ya kiwango cha juu.',
    
    'packages.premium.name': 'Premium / Corporate',
    'packages.premium.subtitle': 'Makampuni Makubwa & NGOs',
    'packages.premium.desc': 'Inafaa kwa makampuni makubwa na NGOs zenye mahitaji maalum.',
    
    // Why Choose Us
    'whyChoose.badge': 'KWA NINI VUTALEAD',
    'whyChoose.title': 'Sababu Za Kuchagua Vutalead',
    'whyChoose.description': 'Tuko hapa kusaidia biashara yako kufikia malengo yake ya kidigitali.',
    'whyChoose.trust.title': 'Uaminifu na Ubora',
    'whyChoose.trust.desc': 'Tukiwa na uzoefu wa kazi na wateja wa Tanzania, tunaelewa vizuri mahitaji ya soko lako.',
    
    'whyChoose.reason1.title': 'Tunaelewa Soko la Tanzania',
    'whyChoose.reason1.desc': 'Tukiwa na uzoefu wa kazi na wateja wa Tanzania, tunaelewa vizuri mahitaji, bajeti, na mazingira ya soko.',
    'whyChoose.reason2.title': 'Huduma kwa Uwazi',
    'whyChoose.reason2.desc': 'Tunazingatia uwazi katika mawasiliano na gharama. Hakuna siri au gharama zisizotajwa.',
    'whyChoose.reason3.title': 'Tunazingatia Matokeo',
    'whyChoose.reason3.desc': 'Si muonekano tu — tunalenga kutoa matokeo halisi yanayoweza kuonekana na kupimika.',
    'whyChoose.reason4.title': 'Support Endelevu',
    'whyChoose.reason4.desc': 'Tuna-support wateja wetu hata baada ya website kukamilika. Uko salama nasi.',
    
    // Stats
    'stats.projects': 'Miradi Imekamilika',
    'stats.clients': 'Wateja Wanaofurahia',
    'stats.satisfaction': 'Kuridhika kwa Wateja',
    
    // Testimonials
    'testimonials.badge': 'USHUHUDA',
    'testimonials.title': 'Wasemaje Wateja Wetu',
    'testimonials.description': 'Soma maoni ya wateja wetu waliopata nafasi ya kufanya kazi nasi.',
    
    // FAQ
    'faq.badge': 'MASWALI',
    'faq.title': 'Maswali Yanayoulizwa Mara kwa Mara',
    'faq.description': 'Hapa kuna majibu ya maswali yanayoulizwa mara kwa mara kuhusu huduma zetu.',
    'faq.otherQuestion': 'Je, una swali lingine?',
    'faq.contactDesc': 'Usisite kuwasiliana nasi kwa maswali yoyote kuhusu huduma zetu.',
    'faq.contactUs': 'Wasiliana Nasi',
    
    // FAQ Items
    'faq.q1': 'Ni muda gani hutumika kutengeneza website?',
    'faq.a1': 'Muda hutegemea aina ya website na mahitaji ya mteja. Kwa package ya Starter, kawaida inachukua wiki 2-3. Kwa Business package, wiki 3-4. Kwa Premium package, inaweza kuchukua wiki 4-6 au zaidi kulingana na mahitaji maalum.',
    'faq.q2': 'Je, naweza kubadilisha content baada ya website kukamilika?',
    'faq.a2': 'Ndiyo, kabisa! Tunatengeneza website zilizo na CMS (Content Management System) rahisi kutumia. Tutakufunza jinsi ya kubadilisha content, na pia tunatoa support endelevu kwa wateja wetu.',
    'faq.q3': 'Je, website zenu ni mobile-friendly?',
    'faq.a3': 'Ndiyo, sote tunatengeneza website zinazofanya kazi vizuri kwenye simu, kompyuta, na tablets zote. Hii ni sehemu ya msingi ya kiwango chetu cha kazi.',
    'faq.q4': 'Je, mnapokea malipo kwa awamu?',
    'faq.a4': 'Ndiyo, tunapokea malipo kwa awamu kwa wateja wetu. Mara ya kwanza unalipa 50% ya gharama kabla ya kuanza kazi, na 50% inamalizia kabla ya website kuanza kufanya kazi.',
    'faq.q5': 'Je, mnapatoa domain na hosting?',
    'faq.a5': 'Tunaweza kusaidia kukununua domain na kuchagua hosting bora kwa biashara yako. Pia tunaweza kusimamia haya kwa ajili yako kama sehemu ya huduma yetu ya maintenance.',
    'faq.q6': 'Ni nini kinafanya tofauti na wengine?',
    'faq.a6': 'Tunaelewa soko la Tanzania, tunatoa huduma kwa uwazi, tunazingatia matokeo zaidi ya muonekano tu, na tuna-support wateja wetu hata baada ya website kukamilika.',
    
    // Contact
    'contact.badge': 'WASILIANA NASI',
    'contact.title': 'Je, Uko Tayari Kuanza?',
    'contact.description': 'Wasiliana nasi leo ili kuzungumza kuhusu mradi wako. Tuko hapa kusaidia biashara yako kukua mtandaoni.',
    'contact.phone': 'Simu',
    'contact.email': 'Barua Pepe',
    'contact.location': 'Eneo',
    'contact.socialMedia': 'Mitandao ya Kijamii',
    'contact.tagline': '"Vutalead — Tunakujengea Msingi Imara wa Kidigitali."',
    'contact.form.title': 'Tuma Ujumbe',
    'contact.form.desc': 'Jaza fomu hii tutarudi kwako haraka iwezekanavyo.',
    'contact.form.name': 'Jina Lako',
    'contact.form.namePlaceholder': 'Jina lako kamili',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Simu',
    'contact.form.phonePlaceholder': '+255 XXX XXX XXX',
    'contact.form.service': 'Huduma Unayohitaji',
    'contact.form.selectService': 'Chagua huduma...',
    'contact.form.message': 'Ujumbe',
    'contact.form.messagePlaceholder': 'Eleza kuhusu mradi wako au swali lako...',
    'contact.form.send': 'Tuma Ujumbe',
    'contact.form.sending': 'Inatuma...',
    'contact.form.success.title': 'Asante!',
    'contact.form.success.desc': 'Ujumbe wako umetumwa. Tutarudi kwako hivi karibuni.',
    
    // Footer
    'footer.services': 'Huduma',
    'footer.company': 'Kampuni',
    'footer.support': 'Msaada',
    'footer.contact': 'Wasiliana',
    'footer.rights': 'Haki zote zimehifadhiwa.',
    'footer.privacy': 'Sera ya Faragha',
    'footer.terms': 'Masharti ya Huduma',
  }
};

// ========================================
// LANGUAGE MANAGER
// ========================================
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('vutalead-lang') || 'en';
    this.init();
  }

  init() {
    this.updatePage();
    this.setupEventListeners();
  }

  toggle() {
    this.currentLang = this.currentLang === 'en' ? 'sw' : 'en';
    localStorage.setItem('vutalead-lang', this.currentLang);
    this.updatePage();
  }

  t(key) {
    return translations[this.currentLang][key] || key;
  }

  updatePage() {
    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.querySelector('span').textContent = this.currentLang.toUpperCase();
    }

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      
      if (el.hasAttribute('placeholder')) {
        el.placeholder = translation;
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else {
        el.textContent = translation;
      }
    });

    // Update document title
    document.title = this.currentLang === 'en' 
      ? 'Vutalead - Digital Agency Tanzania'
      : 'Vutalead - Digital Agency Tanzania';
  }

  setupEventListeners() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => this.toggle());
    }
  }
}

// ========================================
// NAVIGATION
// ========================================
class Navigation {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.isOpen = false;
    this.init();
  }

  init() {
    // Scroll handler
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    
    // Mobile menu toggle
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => this.handleAnchorClick(e));
    });
  }

  handleScroll() {
    if (window.scrollY > 100) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
  }

  toggleMobileMenu() {
    this.isOpen = !this.isOpen;
    this.mobileMenu.classList.toggle('open', this.isOpen);
    
    // Update icon
    const icon = this.mobileMenuBtn.querySelector('svg');
    if (this.isOpen) {
      icon.innerHTML = '<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    } else {
      icon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
  }

  handleAnchorClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      
      // Close mobile menu if open
      if (this.isOpen) {
        this.toggleMobileMenu();
      }
    }
  }
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, this.observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      observer.observe(el);
    });
  }
}

// ========================================
// COUNTER ANIMATION
// ========================================
class CounterAnimation {
  constructor() {
    this.counters = [];
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-counter]').forEach(counter => {
      observer.observe(counter);
    });
  }

  animateCounter(element) {
    const target = parseInt(element.getAttribute('data-counter'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * target);
      
      element.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + suffix;
      }
    };

    requestAnimationFrame(updateCounter);
  }
}

// ========================================
// FAQ ACCORDION
// ========================================
class FAQAccordion {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', (e) => this.toggle(e.currentTarget));
    });
  }

  toggle(question) {
    const item = question.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    
    // Close all items
    document.querySelectorAll('.faq-item').forEach(faqItem => {
      faqItem.classList.remove('open');
    });

    // Open clicked item if it was closed
    if (!isOpen) {
      item.classList.add('open');
    }
  }
}

// ========================================
// TESTIMONIALS CAROUSEL
// ========================================
class TestimonialsCarousel {
  constructor() {
    this.carousel = document.getElementById('testimonials-carousel');
    this.dots = document.querySelectorAll('.testimonials-dot');
    this.prevBtn = document.getElementById('testimonials-prev');
    this.nextBtn = document.getElementById('testimonials-next');
    this.currentIndex = 0;
    this.init();
  }

  init() {
    if (!this.carousel) return;

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.scroll('left'));
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.scroll('right'));
    }

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });

    // Update dots on scroll
    this.carousel.addEventListener('scroll', () => this.updateDots(), { passive: true });
  }

  scroll(direction) {
    const scrollAmount = 400;
    this.carousel.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }

  goToSlide(index) {
    const cardWidth = this.carousel.querySelector('.testimonial-card').offsetWidth + 24;
    this.carousel.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
  }

  updateDots() {
    const scrollLeft = this.carousel.scrollLeft;
    const cardWidth = this.carousel.querySelector('.testimonial-card').offsetWidth + 24;
    const newIndex = Math.round(scrollLeft / cardWidth);

    if (newIndex !== this.currentIndex) {
      this.dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === newIndex);
      });
      this.currentIndex = newIndex;
    }
  }
}

// ========================================
// CONTACT FORM
// ========================================
class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.successMessage = document.getElementById('form-success');
    this.init();
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<div class="spinner"></div>';

    // Simulate form submission
    setTimeout(() => {
      this.form.style.display = 'none';
      this.successMessage.style.display = 'flex';
      
      // Reset after 3 seconds
      setTimeout(() => {
        this.form.reset();
        this.form.style.display = 'block';
        this.successMessage.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 3000);
    }, 1500);
  }
}

// ========================================
// SCROLL TO TOP
// ========================================
class ScrollToTop {
  constructor() {
    this.button = document.getElementById('scroll-top');
    this.init();
  }

  init() {
    if (!this.button) return;

    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    this.button.addEventListener('click', () => this.scrollToTop());
  }

  handleScroll() {
    if (window.scrollY > 500) {
      this.button.classList.add('visible');
    } else {
      this.button.classList.remove('visible');
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ========================================
// MOUSE PARALLAX (Hero Section)
// ========================================
class MouseParallax {
  constructor() {
    this.hero = document.getElementById('home');
    this.shapes = document.querySelectorAll('.hero-shape');
    this.init();
  }

  init() {
    if (!this.hero || window.matchMedia('(pointer: coarse)').matches) return;

    this.hero.addEventListener('mousemove', (e) => this.handleMouseMove(e), { passive: true });
  }

  handleMouseMove(e) {
    const rect = this.hero.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 50;
    const y = (e.clientY - rect.top - rect.height / 2) / 50;

    this.shapes.forEach((shape, index) => {
      const multiplier = index === 1 ? -2 : 2 - index * 0.5;
      shape.style.transform = `translate(${x * multiplier}px, ${y * multiplier}px)`;
    });
  }
}

// ========================================
// SERVICE CARDS HOVER
// ========================================
class ServiceCards {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        document.querySelectorAll('.service-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
      });
    });
  }
}

// ========================================
// PACKAGE CARDS HOVER
// ========================================
class PackageCards {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('.package-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        document.querySelectorAll('.package-card').forEach(c => {
          c.style.transform = 'scale(1)';
        });
        card.style.transform = 'scale(1.02)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });
  }
}

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  window.langManager = new LanguageManager();
  window.navigation = new Navigation();
  window.scrollAnimations = new ScrollAnimations();
  window.counterAnimation = new CounterAnimation();
  window.faqAccordion = new FAQAccordion();
  window.testimonialsCarousel = new TestimonialsCarousel();
  window.contactForm = new ContactForm();
  window.scrollToTop = new ScrollToTop();
  window.mouseParallax = new MouseParallax();
  window.serviceCards = new ServiceCards();
  window.packageCards = new PackageCards();

  // Add loaded class to hero for initial animations
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal, .hero .reveal-scale').forEach(el => {
      el.classList.add('active');
    });
  }, 100);
});
