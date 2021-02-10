/* eslint-disable max-len */
export default {
  titles: {
    coupons:
      'Automatisieren Sie Ihre Gutscheine, Einsparungen und Cashback - {{month}} {{year}} - Piggy',
    storeCoupons:
      'Top Online {{storeName}} Gutscheine, Gutscheincodes und Cashback | Piggy',
  },
  description: {
    storeCoupons:
      'Piggy, die einzige App, die automatisch Gutscheine und Cashback auf allen Geräten anwendet. Verfügbar bei 3600+ Stores - Holen Sie sich Piggy jetzt!',
    coupons: `Piggy, die einzige App, die automatisch Gutscheine und Cashback auf allen Geräten anwendet. Verfügbar bei 3600+ Stores - Holen Sie sich Piggy jetzt!`,
  },
  header: {
    coupons: 'Gutscheine',
    stores: 'Shops',
    getApp: 'Holen Sie sich die App!',
    signIn: 'Anmelden',
    login: 'Anmelden',
    createAccount: 'Jetzt registrieren',
    myAccount: 'Mein Konto',
    inviteFriends: 'Freunde einladen',
    settings: 'Einstellungen',
    signOut: 'Abmelden',
    updateAccount: 'Konto aktualisieren',
    checkEarnings: 'Einnahme Überprüfen',
    storeFavorites: 'Shop-Favoriten',
    referralBonus: 'Empfehlungsbonus',
    passwordReset: 'Passwort ändern',
    accountDetails: 'Kontodetails',
    earningSaving: 'Einnahmen und Ersparnisse',
    favoriteStores: 'Lieblingsgeschäfte',
    shop: 'Kaufen Sie {{ storeName }} mit {{ cashBack }} ein',
    with: 'mit',
    hotels: 'Hotels',
    personal_finance: 'Persönliche Finanzen',
    amazon_price_tracking: 'Amazon Preisverfolgung',
  },
  auth: {
    social: {
      loginFacebook: 'Mit Facebook anmelden',
      loginGoogle: 'Mit Google anmelden',
    },
    signUp: {
      title: 'Registrieren Sie, um automatisches Cashback zubekommen',
      subTitle: 'So einfach ist das',
      or: 'oder',
      emailAddress: 'E-Mail Adresse',
      button: 'Piggy Beitreten',
      preFooter: {
        label:
          'Mit dem Beitritt stimme ich zu, in die tägliche Mailingliste aufgenommen zu werden und die',
        terms: 'Nutzungsbedingungen',
        and: 'und',
        privacy: 'Datenschutzerklärung',
        suffix: 'von Piggy',
      },
      footer: {
        text: 'Bereits ein Mitglied?',
        button: 'Einloggen',
      },
      messages: {
        inputEmpty: 'Bitte füllen Sie dieses Feld aus',
        existAccount: 'Sieht aus, als hätten Sie bereits ein Konto. Einloggen.',
        passwordNotMatch: 'Passwörter stimmen nicht überein',
        shortPassword: 'Passwort muss 8 Zeichen lang sein!',
        invalidEmail: 'Ungültiges Email-Format',
        emailNotContainComma:
          "Ein Teil gefolgt von '@' sollte nicht das Symbol ',' enthalten.",
        errorTryAgain: 'Es gab einen Fehler. Bitte versuche es erneut.',
      },
      password: 'Passwort',
      confirmPassword: 'Passwort bestätigen',
    },
    signIn: {
      title: 'Willkommen zurück',
      subTitle: 'Schön Sie wiederzusehen',
      or: 'oder',
      emailAddress: 'E-Mail Adresse',
      password: 'Passwort',
      button: 'Mit E-Mail anmelden',
      forgotPassword: 'Passwort vergessen?',
      footer: {
        text: 'Kein Mitglied?',
        button: 'Piggy Beitreten',
      },
      messages: {
        emptyEmail: 'Bitte geben Sie eine gültig E-Mail Adresse',
        noUserExists: 'Mit dieser E-Mail existiert kein Benutzer',
        incorrectPassword: 'Falsches Passwort',
        emailNotContainComma:
          "Ein Teil gefolgt durch '@' sollte nicht das Symbol ',' enthalten.",
        emailShouldContain: `Bitte geben Sie in der E-Mail Adresse '@' ein. {{email}} fehlt ein '@'`,
        emailShouldNotContain: `Ein Teil, der auf '@' folgt, sollte nicht das Symbol '{{specialChar}}' enthalten.`,
        emailIsIncomplete: `Bitte geben Sie einen Teil nach '@' ein, {{email}} ist unvollständig`,
        emailIsInvalid: `'.' ich habe an einer falschen Position verwendet in '{{emailDomain}}'.`,
        inputEmpty: 'Bitte dieses Feld ausfüllen',
      },
    },
    forgotPassword: {
      title: 'Haben Sie Ihr Passwort vergessen?',
      subTitle: 'Passwort vergessen',
      emailAddress: 'E-Mail Adresse',
      button: 'E-Mail zum Zurücksetzen senden',
      footer: {
        text: 'Sie sind noch kein Mitglied?',
        button: 'Piggy beitreten',
      },
      messages: {
        emailNotExist: 'E-Mail-Adresse existiert nicht in unserer Datenbank.',
        sendPassword:
          'Dein Passwort wurde gesendet. Bitte überprüfen Sie Ihre E-Mail und melden Sie sich an',
      },
      mail: {
        message: {
          title: 'Es tut uns Leid, dass SIe Ihr Passwort verloren haben',
          text:
            'Bitte klicken Sie auf die Schaltfläche unten, um die Einstellungen zurückzusetzen und fahren Sie mit dem Speichern fort!',
          button: 'Passwort zurücksetzen',
          unsubscribe: {
            text:
              'Wenn Sie den Newsletter abbestellen möchten und diese E- Mails nicht mehr erhalten möchten,',
            button: 'klicken Sie hier.',
          },
        },
      },
    },
    resetPassword: {
      title: 'Setzen Sir Ihr Passwort zurück',
      formTitle: 'Bitte geben Sie ein neues Passwort für Ihr Konto ein',
      newPassword: 'Neues Passwort',
      confirmPassword: 'Passwort bestätigen',
      button: 'Aktualisieren',
      messages: {
        shortPassword: 'Passwort muss 8 Zeichen lang sein!',
      },
    },
  },
  categories: {
    selectCategory: 'Kategorie wählen',
    name: 'Kategorien',
    accessories: 'Zubehör',
    automotive: 'Automotive',
    baby: 'Baby',
    beauty: 'Beauty',
    booksMedia: 'Bücher & Medien',
    officeBusiness: 'Büro & Geschäft',
    canada: 'Kanada',
    cellphones: 'Handys',
    clothing: 'Kleidung',
    computers: 'Computers',
    departmentStores: 'Warenhäuser',
    electronics: 'Elektronik',
    diningEntertainment: 'Essen und Unterhaltung',
    giftFlowers: 'Geschenk & Blumen',
    health: 'Gesundheit',
    hobbiesCrafts: 'Hobbies & Handwerk',
    HomeGarden: 'Haus & Garten',
    jewelries: 'Schmuck',
    musicInstruments: 'Musikinstrumente',
    partySupplies: 'Partybedarf',
    pets: 'Haustiere',
    services: 'Dienstleistungen',
    shoes: 'Schuhe',
    sportsFitness: 'Sport & Fitness',
    toysGames: 'Spielzeug',
    travel: 'Reise',
    luxury: 'Luxus',
  },
  global: {
    activateCashback: 'Bis zu {{discount}} Cashback',
    howCashBackWorks: 'Wie Cashback funktioniert',
    invalidDate: 'Ablauf: Ungültiges Datum',
    earnCashBack: '{{discount}} Cashback verdienen!',
    learnMore: 'Mehr erfahren',
    get25dollars: '25 € erhalten',
    amCashBack: '{{discount}} Cashback',
    overOff: 'Über {{discount}} Rabatt',
    cashBack: 'Cashback',
    cashBackPrint: '{{print}} Cashback',
    instantSaving: 'Sofortige Ersparnisse',
    noCashBack: 'Kein Cashback',
    upToCashBack: 'Bis zu {{discount}} Cashback',
    downloadPiggy:
      "Laden Sie die automatischen Coupons von Piggy's bei Checkout herunter und verpassen Sie nie wieder einen Deal!",
    neverMiss: 'Verpassen Sie niemals ein Coupon mit unserer kostenlosen App!',
    loadMoreDeals: 'Lade mehr Angebote',
    loadMoreCoupons: 'Lade mehr Gutscheine',
    loadMoreStores: 'Weitere Shops laden',
    search: 'Suchen',
    nothingFound: 'Nicht gefunden',
    deals: 'Angebote',
    revealCoupon: 'Gutschein einblenden',
    newDeal: 'Neues Angebot',
    verifiedToday: 'Heute bestätigt',
    reviews: 'Überprüft',
    addToChrome: 'Chrome-Erweiterung installieren',
    about: 'Über',
    overview: 'Übersicht',
  },
  coupons: {
    animateModal: {
      title: 'Piggy sucht nach automatischen Coupons',
      hangon: 'Warten Sie bitte einen Moment...',
      save: 'Sie sparen Zeit und Geld!',
    },
    animateModal1: {
      subTitle: 'Piggy fand automatische Coupons',
      addPiggy:
        'Bezahlen Sie nicht zu viel...<br/>Piggy findet automatisch die besten Coupons.',
      btnFree: 'Holen Sie sich Piggy - Es ist kostenlos',
    },
    animateModal2: {
      subTitle: 'Coupons und Ersparnisse automatisch anwenden & sichern',
      addPiggy:
        "Fügen Sie Piggy's kostenlose Google-Erweiterung hinzu, um die besten Coupons sofort anzuwenden.",
      btnFree: 'Fortfahren - Es ist kostenlos',
      animatedTitle01: 'Piggy schneidet Ihren Coupon aus...',
      animatedTitle02: 'Piggy beantragt Cashback...',
      animatedTitle03: 'Piggy hat Cashback beantragt.',
      animatedTitle04:
        'Piggy schaut ob die automatischen Coupons noch gültig sind...',
    },
    shopBy: {
      couponSales: 'Gutschein & Verkauf',
      browseByStore: 'Nach Geschäft durchsuchen',
      newCoupon: 'Neuer Gutschein',
      getCoupon: 'Gutschein anwenden',
      exp: 'Exp. 21.03.2014',
      favorite: 'Favorisieren',
      share: 'Teilen',
      success: 'Erfolg',
      freeShipping: 'Kostenloser Versand',
      freeGift: 'Kostenloses Geschenk',
      get5dollarOff: 'Holen Sie sich 5 € Rabatt',
    },
    off: ' Rabatt',
    seeMore: 'Mehr sehen',
    myAccount: 'Mein Konto',
    earnings: 'Einnahmen',
    favorites: 'Favoriten',
    referrals: 'Verweise',
    preferences: 'Vorlieben',
    resetPassword: 'Passwort zurücksetzen',
    testimonials: 'Referenzen',
    messages: {
      maxCashBack:
        '- gibt den maximalen Cashback, die maximale Prämie oder den Rabatt an, den ein Benutzer verdienen kann. Einige Artikel können einen niedrigeren Cashback-Betrag ausweisen und einige Ausschlüsse bestehen. Nicht alle Geschäfte zahlen Cashback. Cashback nicht mit externen Gutscheinen oder Angeboten kombinierbar. Weitere Informationen finden Sie in den Nutzungsbedingungen oder in den einzelnen Shop-Profilen.',
    },
    controls: {
      allDeals: 'Alle Angebote',
      onlyCoupons: 'Nur Gutscheine',
      favoriteStores: 'Lieblingsshops',
    },
    type: {
      free: 'Kostenloser',
      shipping: 'Versand',
      coupon: 'Gutschein',
      code: 'Code',
      deal: 'Angebote',
    },
    buttons: {
      viewCoupon: 'Gutschein anzeigen',
      viewDeal: 'Angebot holen',
      tooltip:
        'Klicken Sie um einzukaufen. Verwenden Sie diesen Code an der Kasse, um zu sparen.',
    },
    todaysFeatureCoupon: 'Heutige Gutschein von {{storeName}}',
    upToCashback: '+ bis zu {{discount}} Cashback',
    plusCashBack: '+{{discount}} Cashback',
    noCouponsFound: 'Keine Gutscheine gefunden',
    noFeaturedCouponsFound: 'Keine vorgestellten Gutscheine gefunden',
    login: 'Anmeldung',
    register: 'Registrieren',
    or: 'oder',
    favoriteStoresAndDeals:
      'um eine Liste Ihrer Lieblingsgeschäfte und -geschäfte zu erstellen.',
    followAnyStore:
      "Besuchen Sie eine Store-Seite und klicken Sie auf 'Store folgen', um sie Ihrer Liste hinzuzufügen",
    activateModal: {
      title: 'Nie wieder zu viel bezahlen bei',
      content: `Sparen Sie Zeit und Geld mit automatischer Gutscheine. Piggy erscheint an der Kasse und wendet automatisch die besten Angebote.`,
      couponAbout:
        'Wir finden die {{title}} - Gutscheine, die Sie einfach weiter shoppen!',
      button: 'Gutscheine jetzt aktivieren',
    },
    installExtension: {
      action: 'Zu Chrome hinzufügen',
      step1: 'Schritt 1',
      step2: 'Schritt 2',
      step1text: 'Klicken Sie auf "Zu Chrome hinzufügen".',
      step2text: 'Dann wählen Sie "Zu Erweiterungen zufügen"',
    },
    freeShipping: 'Kostenloser Versand',
    cashBack: 'Cashback',
    currentStoreTitle: 'Gutschein {{discount}} Rabatt',
    otherStoreTitle: '{{store_name}} Gutschein - {{discount}} Rabatt',
    expiry_date: 'Verfallsdatum',
  },
  cashbackStores: {
    shopBy: {
      couponSales: 'Gutschein & Verkauf',
      browseByStore: 'Nach Geschäft durchsuchen',
      viewSales: 'Verkaufs- und Gutscheincodes anzeigen',
      instantSaving: 'Sofortige Ersparnisse',
      shopNow: 'Jetzt einkaufen',
      browseStore:
        'Durchsuchen Sie Store-Gutscheine und beliebte Cash-Back-Stores',
      findAmazing:
        'Finden Sie erstaunliche Einsparungen, Coupons und automatisches Cashback!',
    },
    seeMore: 'Mehr sehen',
    myAccount: 'Mein Konto',
    earnings: 'Einnahmen',
    favorites: 'Favoriten',
    referrals: 'Verweise',
    preferences: 'Vorlieben',
    resetPassword: 'Passwort zurücksetzen',
    testimonials: 'Referenzen',
    browseStores: 'Stöbere in über 1.000 Shops',
    addSaving: 'Sparen hinzufügen',
    instantlyApplyAll:
      'Alle Gutscheine und Cashback sofort mit der App von Piggy anwenden',
    activateSavings: 'Einsparungen aktivieren',
    limitedOffer: 'Limitiertes Angebot',
    piggyBonus: 'Piggy Bonus',
  },
  storeCoupons: {
    cashBackCategories: 'Cash-Back-Kategorien',
    viewLatestCoupons:
      'Sehen Sie sich die neuesten Online-Gutscheine für {{ storeName }} unten an! Verpassen Sie niemals einen Coupon oder Cashback aus einem unserer 3.000 anderen Stores mit unserer kostenlosen App für mobile Apps und Browser! Alle Online-Gutscheine von {{ storeName }} können mit kostenlosen automatischen Rabatten kombiniert werden. Bis zu 3,0 % Cashback! Nur von Piggy! Jeder dieser {{ storeName }}-Gutscheincodes und Promotion kann mit unserem automatischen Cashback-{{ storeName }} kombiniert werden',
    returnPolicy: 'Rückgaberecht',
    shipping: 'Lieferung',
    popularDiscountCode: 'Top {{storeName}} Gutscheine',
    voucherCodeDescription: 'Angebots Beschreibung',
    discount: 'Gutschein Code',
    expire: 'Verfallsdatum',
    secrets: 'Geheimnis',
    codes: 'Gutschein Code',
    codesAndDeals: '{{storeName}} Gutscheine, Rabatt-Codes und Angebote',
    followStore: 'Shops folgen',
    neverOverlay: 'Nie wieder zu viel bezahlen',
    automaticallyAddAll:
      'Alle aktiven Gutscheine automatisch zur ihrem Bestellung mit Piggy´s  Browser-  Erweiterung hinzugfügt. Wenn Sie zur Kasse gehen, wird Piggy Gutscheine und Cashback bei {{storeName}} und viel mehr.',
    automaticCoupons: 'Automatische Gutscheine ',
    priceCheck: 'Preischeck',
    secretRates: 'Geheime Tarife und Angebote',
    noCouponsAndDeal:
      'Für {{ storeName }} wurden keine Gutscheine oder Angebote gefunden. Werfen Sie einen Blick auf unsere Top-Angebote und Deals.',
    getBestPrice: 'Holen Sie sich den besten Preis',
    alertAutomatically:
      'Piggy benachrichtigt Sie automatisch über den besten Preis bei {{ storeName }}. Sie können auch den Preisverlauf Ihrer Artikel verfolgen und Benachrichtigungen erhalten, wenn der Preis fällt.',
    applyAllCouponsWithNumber:
      'Alle {{couponsNumber}} Coupons mit der Piggy-Erweiterung anwenden',
    applyAllCoupons: 'Wenden Sie alle Gutscheine mit Piggy Extension an',
    counterList: {
      totalCoupons: 'Gutscheine ingesamt',
      averageSavings: 'Durchschnittliche Ersparnis',
      totalSavings: 'Gesamteinsparungen',
      totalStoreSaves: 'Gesamteinsparungen im Shop',
      totalCouponsUses: 'Coupons insgesamt verwenden',
    },
    offersMenu: {
      browse: '{{storeName}}',
      coupons: 'Gutscheine',
      deals: 'Angebote',
      cashback: 'Cashback',
      overview: 'Übersicht',
      faqs: 'FAQs',
    },
    faqsSections: {
      question1: 'Wie kann ich {{storeName}}-Gutscheine bekommen?',
      answer1:
        'Keine Sorge, wir haben die harte Arbeit bereits für Sie erledigt! Sobald Sie die <a href={{chromeLink}} target="_blank" rel="noopener noreferrer">Piggy-Erweiterung für Chrome</a> heruntergeladen haben, shoppen Sie einfach wie gewohnt auf der {{storeName}}-Website und fügen die gewünschten Artikel dem Warenkorb hinzu. Bevor Sie zur Kasse gehen, klicken Sie dann auf das Piggy-Symbol in Ihrem Browser, um unsere besten {{storeName}}-Gutschein auf Ihren Warenkorb anzuwenden!',
      question2: 'Gibt es irgendwelche {{storeName}}-Gutscheine?',
      answer2: {
        subAnswer1: 'Ja! Es gibt {{couponCount}} {{storeName}}-Gutscheine.',
        subAnswer1_only: 'Ja! Es gibt 1 {{storeName}}-Gutschein.',
        subAnswer2:
          'Noch nicht! Wir arbeiten aber daran, bald weitere {{storeName}}-Gutscheine hinzuzufügen.',
      },
      question3: 'Wie viele {{storeName}}-Gutscheine gibt es?',
      answer3:
        'Bei Piggy gibt es momentan {{couponCount}} verfügbare {{storeName}}-Gutscheine.',
      answer3_only:
        'Bei Piggy gibt es momentan 1 verfügbare {{storeName}}-Gutschein.',
      question4: 'Wie kann ich bei {{StoreName}} Geld sparen?',
      answer4:
        'Laden Sie sich unbedingt die <a href={{chromeLink}} target="_blank" rel="noopener noreferrer">Browsererweiterung von Piggy</a> herunter und kaufen Sie dann wie gewohnt auf der Website von {{storeName}} ein. Sobald Ihr Einkaufswagen voll ist, klicken Sie einfach auf das Piggy-Symbol und schon werden alle gültigen {{storeName}}-Gutscheine direkt auf Ihren Warenkorb angewendet!',
      question5: 'Wie finde ich das beste Angebot bei {{StoreName}}?',
      answer5:
        'Durchstöbern Sie einfach die {{storeName}}-Angebote auf Piggy, um das beste Angebot zu finden!',
      question6:
        'Wie hoch ist die durchschnittliche Ersparnis mit {{storeName}}-Gutscheinen?',
      answer6:
        'Bei {{storeName}} beträgt die durchschnittliche Ersparnis für einen Piggy-Benutzer {{averageSaving}}.',
      question7: 'Wie viele Angebote gibt es bei {{storeName}}?',
      answer7: {
        subAnswer1: 'Aktuell sind {{dealsCount}} Angebote verfügbar.',
        subAnswer1_only: 'Aktuell sind 1 Angebot verfügbar.',
        subAnswer2:
          'Im Moment sind noch keine {{storeName}} Angebote verfügbar, wir arbeiten aber daran.',
      },
    },
    noCoupons:
      'Für {{ storeName }} wurden keine Gutscheine gefunden. Werfen Sie einen Blick auf unsere Top-Gutscheine.',
    noDeals:
      'Für {{ storeName }} wurden keine Angebote gefunden. Werfen Sie einen Blick auf unsere Top-Angebote und Deals.',
    noCashback: 'Für {{ storeName }} wurden keine Cashback gefunden.',
    filterByCategory: 'Nach Kategorie filtern',
    clear: 'Klar',
    editFilter: 'Filter bearbeiten',
    apply: 'Anwenden',
    categories: 'Kategorien',
    hide: 'Verstecken',
    show: 'Mehr anzeigen',
    ourCouponExperts: {
      title:
        'Unsere Coupon-Experten arbeiten wortwörtlich rund um die Uhr (drei Schichten, 365 Tage im Jahr)',
      addedToday: 'Heute hinzugefügt',
      addedYesterday: 'Gestern hinzugefügt',
      addedThisWeek: 'Diese Woche hinzugefügt',
      addedThisMonth: 'Diesen Monat hinzugefügt',
    },
    sortPromoCodesBy: '{{storeName}} Rabatt-Gutscheine sortieren nach',
    codesFilter: {
      trending: 'Aktuell beliebt',
      expiration: 'Bald ablaufend',
      recent: 'Kürzlich hinzugefügt',
    },
    terms: 'Cashback-Bedingungen',
  },
  sitemap: {
    meta: {
      title:
        'Beliebte Gutscheine & Angebote bei Geschäft / Shop | Piggy Sitemap',
      description:
        'Finden Sie sofort Gutscheine, Codes, Cash-Back-Angebote und Angebote bei Piggy in Ihren bevorzugten Geschäften.',
    },
    popular_stores: 'Durchsuchen Sie die beliebtesten Gutscheine nach Shop',
    visit_store: 'Shop Besuchen',
    all_stores: 'Alle Geschäfte',
    main_pages: {
      title: 'Hauptseiten',
      home: 'Startseite',
      automatic_coupon_apps: 'Über unsere App',
      about_cashback: 'Über Cashback',
      blog: 'Blog',
      cashback_stores: 'Geschäfte',
      free_coupons: 'Gutscheine',
      my_account: 'Mein Konto',
    },
    company_info: {
      title: 'Firmeninformation',
      about: 'Über Uns',
      contact_us: 'Kontakt',
      privacy_policy: 'Datenschutzerklärung',
      terms_of_use: 'Nutzungsbedingungen',
      eula: 'Lizenzvereinbarung',
    },
    shopping_categories: {
      title: 'Kategorien',
    },
    account_pages: {
      title: 'Konto',
      account_update: 'Kontoinformation',
      change_password: 'Passwort ändern',
      earnings_summary: 'Einnahmen',
      favorites: 'Favoriten',
      referrals: 'Verweise',
      preferences: 'Präferenzen',
    },
    help_section: {
      title: 'Hilfe',
      contact_us: 'Kontakt',
      how_to_install: 'Wie deinstalliert man',
      how_to_uninstall: 'Wie deinstalliert man',
      help: 'Hilfe',
      unsubscribe: 'Abbestellen',
    },
    misc: {
      title: 'Misc',
      consumer_resources: 'Consumer Resources',
    },
  },
  build: {
    visitStore: 'Shop besuchen',
    addToFavorites: 'Zu den Favoriten hinzufügen',
    freeShipping: 'Kostenloser Versand',
    freeShippingOver49:
      'KOSTENLOSER Versand Standard Bodenversand für Bestellungen über 49 € !',
    shopBuild: 'Shop Build mit 3,0 % Cashback',
    returnPolicy: 'Rücknahmegarantie',
    returnItems30days:
      'Sie können eine Rückgabe für einen Artikel innerhalb von 30 Tagen nach Erhalt für eine Rückerstattung veranlassen. Rücksendungen, die zwischen 31 und 60 Tagen nach Erhalt angefordert werden, sind nur für die Gutschrift im Geschäft berechtigt. Rücksendungen außerhalb unserer 30 bis 60-tägigen allgemeinen Rückgabebedingungen werden nicht akzeptiert. Rückerstattungen werden Ihrem Konto gutgeschrieben (abzüglich Rücksendung), sobald der Artikel bei uns eingegangen und durch unser Lager geprüft wurde.',
    threePercentCashBack: 'Plus erhalten Sie 3,0% Cashback von Build!',
    otherPopularStores: 'Andere beliebte Geschäfte',
    indicatesMaximumCashBack:
      '- gibt den maximalen Cashback, die maximale Prämie oder den Rabatt an, den ein Benutzer verdienen kann. Einige Artikel können einen niedrigeren Cash-Back-Betrag ausweisen und einige Ausschlüsse bestehen. Nicht alle Geschäfte zahlen Cashback. Cashback nicht mit externen Gutscheinen oder Angeboten kombinierbar. Weitere Informationen finden Sie in den Nutzungsbedingungen oder in den einzelnen Shop-Profilen.',
  },
  footer: {
    stopMissingOut:
      'Verpassen Sie es nicht. Holen Sie sich die App noch heute!',
    getTheApp: 'Holen Sie sich die App',
    downloadButtons: {
      desktop: 'Download für Desktop',
      android: 'Für Android Herunterladen',
      ios: 'Für IOS Herunterladen',
    },
    menu: {
      howToInstall: 'Piggy installieren',
      howToUninstall: 'Piggy deinstallieren',
      aboutCashBack: 'Über CashBack',
      aboutOurApp: 'Über unsere App',
      careers: 'Karriere',
      contact: 'Kontakt',
      consumerResources: 'Verbraucherressourcen',
      referrals: 'Verweise',
      blog: 'Blog',
      aboutUs: 'Über Uns',
      help: 'Hilfe',
    },
    copyright: {
      menu: {
        termsOfUse: 'Nutzungsbedingungen',
        privacyPolicy: 'Datenschutzerklärung',
        sitemap: 'Seitenverzeichnis',
        unsubscribe: 'Abbestellen',
        eula: 'Lizenzvereinbarung',
        impressum: 'Impressum',
      },
      text: 'Copyright',
      allRightReserved: 'Alle Rechte vorbehalten.',
    },
  },
  404: {
    title: 'Seite nicht gefunden',
    subtitle: 'UH-OH, HIER GIBT ES NICHTS ZU SEHEN!',
    text: 'Die angeforderte Seite ist nicht vorhanden.',
    action: 'Gehen Sie zur Startseite.',
  },
  homepage: {
    was: 'Es waren',
    now: 'Jetzt',
    topDeals: 'Piggys Top-Angebote des Tages',
    matd: 'Mehr zu diesem Angebot',
    seeAllDeals: 'Alle {{storeName}}-Angebote anzeigen',
    uptoCashback: 'Bis zu {{cashback}} Cashback',
    featuredCashBack: 'Die besten Cashback-Aktionen',
    gtdn: 'Dieses Angebot jetzt sichern',
    plusCashback: 'Plus {{cashback}} Cashback',
    discover: 'Angebote nach Kategorien entdecken:',
    all: 'Alle',
    hero: {
      title: 'Piggy ist der einfachste Weg, um Geld zu sparen!',
      text: {
        first:
          'Installiere Piggy noch heute und erhalte automatisch Gutscheine mit bis zu 70 % Rabatt in über 6.000 Shops!',
        second:
          'Piggy ist eine kostenlose Chrome-Erweiterung, die bei einem Online-Einkauf automatisch Gutscheine anwendet, Preise vergleicht und Cashback bietet.',
      },
      activate_extension:
        '<strong>Zu {{browser}} hinzufügen</strong> Es kostet nichts',
      number_users: '1,000,000 Benutzer',
    },
    howItWorks: {
      title: `So funktioniert’s`,
      subHeader1: '2 Klicks zum Installieren',
      subText1:
        'Klicke auf „Zu Chrome hinzufügen“ und dann auf „Erweiterung hinzufügen“ und schon beginnt die Installation.',
      subText1Link: 'Google Chrome Web Store besuchen.',
      subHeader2: 'Ganz normal einkaufen',
      subText2:
        'Wir suchen und wenden jeden verfügbaren Online-Gutschein an und du verdienst in Tausenden von Shops bis zu 20 % Cashback.',
      subHeader3: 'Sofort sparen',
      subText3:
        'Piggy wendet nicht nur die besten Rabattcodes an, es bietet dir auch unveröffentlichte Hoteltarife.',
      buttonAll: 'Fortfahren',
    },
    worksWithStores: 'Piggy arbeitet mit über 6.000 Shops zusammen',
    worksWithStoresInfo: `Wusstest du, dass Piggy-Nutzer bei jedem Online-Einkauf durchschnittlich 24€ sparen?<br/>
        Das liegt daran, dass Piggy mit über 6.000 Shops zusammenarbeitet: von Mode, über Pizza bis hin zu Hotelanbietern.`,
    worksWithStoresTop: 'Die heute am häufigsten besuchten Online-Shops:',
    worksWithStoresActivate: 'Kostenlos Gutscheine und Cashback aktivieren',
    quotes: {
      title: 'Was über Piggy gesagt wird',
      text00: '“Piggy ist eines der besten Programme auf dem Markt.“',
      name00: 'Time Magazine',
      text01: '“Das ist prima, eine gute Ersparnis“',
      name01: 'Udo G.',
      text02:
        '“super tolle sache wenn man geld sparen kann,und denn noch darauf hingewiesen wird”',
      name02: 'Andrea G.',
      text03: '“Mit Otto bin ich immer sehr zufrieden”',
      name03: 'Heinz D.',
      text04: '“immer gut meine Katzen sind auch zufrieden danke“',
      name04: 'Gabriele E.',
      text05:
        '“bin sehr zufrieden mit den Ersparnissen. Gerne werde ich dies weiterempfehlen”',
      name05: 'Angelika L.',
      text06: '“Spannende Aktion”',
      name06: 'Petra Q.',
    },
    page: {
      title:
        'Automatische Gutscheine, gewaltige Sonderverkäufe und Cashback! - Piggy',
      description:
        'Piggy, die einzige App, die automatisch Gutscheine und Cashback auf allen Geräten anwendet. Verfügbar bei 3600+ Stores - Holen Sie sich Piggy jetzt!',
      h1: 'Automatische Gutscheine, gewaltige Sonderverkäufe und Cashback!',
    },
  },
  user_review: {
    page: {
      title: 'Nutzer-Rezensionen & Bewertungen | Piggy',
      description: `Suchen Sie nach echten Piggy-Bewertungen von echten Nutzern? Glauben Sie uns nicht einfach so. Finden Sie selbst heraus, was Nutzer über Piggy sagen und wie sie damit Geld sparen.`,
    },
    hero: {
      title:
        'Mehr als 47.000 Benutzer haben eine Rezension geschrieben und Piggy mit 5 Sternen bewertet',
      content: `Suchen Sie nach echten Bewertungen von echten Nutzern? Verlassen Sie sich nicht einfach darauf, was wir sagen. Finden Sie jetzt im Chrome Web Store von Google heraus, was Benutzer über Piggy sagen. Klicken Sie unten, um alle Rezensionen von Piggy anzuzeigen.`,
      contentLink: `Klicken Sie unten, um alle Rezensionen von Piggy anzuzeigen.`,
      btn: 'Rezensionen ansehen',
    },
    firstblock: {
      name: 'Gloria Stevens',
      description: 'Sparen leicht gemacht!',
      content:
        'Sparen sie buchstäblich in Sekundenschnelle mit nur einem einzigen Klick. Vergessen Sie nicht, uns zu bewerten, wenn Sie Geld mit uns sparen!',
    },
    secondblock: {
      name: 'Mark Harrington',
      description:
        'Piggy hat bei Amazon einen besseren Preis für mich gefunden',
      content:
        'Piggy findet für Sie den besten Preis, wenn Sie bei Amazon einkaufen. Verpassen Sie mit Piggy nie wieder ein Angebot!',
    },
    review: {
      btn: `+ Erweiterung zu Chrome hinzufügen`,
      text00:
        'heute 21,64 EUR bei meinem Einkauf gespart, ohne das ich was machen musste, nur den Gutschein Code eingeben! So macht Einkaufen Spaß :)',
      name00: 'Christian Haller',
      text01:
        'Bis jetzt immer gespart,hatte auch noch nie Probleme das mal kein Code funktioniert hat. Kann ich nur weiter empfehlen.',
      name01: 'DheZahnfee _',
      text02:
        'Immer wieder eine nette Überraschung!!! Und sparen kann man.... Wer will da nicht dabei sein!',
      name02: 'Ein Google-Nutzer',
      text03: `Schön wenn man spar kann,funktioniert zwar nicht immer und in jedem shop,macht gute laune`,
      name03: 'Eva-Maria Piel',
      text04: `Ich liebe Piggy, kein Online-Shopping ohne Piggy. Hin und wieder sind es kleine euro's die man spart aber man spart :)`,
      name04: 'Jenny Neumann',
      text05:
        'Coole Sache. Man hat ja nicht immer gleich einen Gutschein zur Hand. Und nun muss man das auch nicht mehr haben.',
      name05: 'Kerstin Wehrmann',
      rate: 'Rezension',
    },
  },

  price_tracker: {
    extend: 'Price Watch erfolgreich um 30 Tage verlängert mehr.',
    extend_done: 'Oops, Irgendetwas ist schief gelaufen...',
    extend_try: 'Bitte versuchen Sie es später erneut',

    unsubscribe_title:
      'Sie sind nicht mehr für E-Mail-Benachrichtigungen zur Preisverfolgung dieses Produkts abonniert.',
    unsubscribe_title_all:
      'Sie erhalten für diese Produkte keine Email Benachrichtigungen zur Preisverfolgung mehr.',

    delete_title:
      'Ihr Preisverfolger für dieses Produkt wird dauerhaft gelöscht.',
    delete_title_all: 'Sie verfolgen den Preis dieser Produkte nicht mehr. ↓',

    done_unsubscribe:
      'Sie haben sich bereits für die E-Mail-Benachrichtigung über diese Produktpreisspur abgemeldet.',
    done_unsubscribe_all:
      'Sie haben den Preisverfolger für diese Produkte bereits gelöscht',

    done_delete:
      'Sie haben den Preis-Tracker für dieses Produkt bereits gelöscht.',
    done_delete_all:
      'Sie haben den Preis-Tracker für diese Produkte bereits gelöscht.',

    dismiss: 'Schließen',
  },

  country_names: {
    us: 'Vereinigte Staaten',
    uk: 'Vereinigtes Königreich',
    de: 'Deutschland',
    fr: 'Frankreich',
  },
};
