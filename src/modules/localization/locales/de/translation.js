/* eslint-disable max-len */
export default {
  titles: {
    coupons:
      'Automatisieren Sie Ihre Gutscheine, Einsparungen und Cashback - %mmmm %yyyy - Piggy',
    storeCoupons:
      'Top Online {{ storeName }} Gutscheine, Gutscheincodes und Cashback - %mmmm %yyyy - Piggy',
  },
  header: {
    coupons: 'Gutscheine',
    stores: 'Shops',
    getApp: 'Holen Sie sich die App!',
    login: 'Anmelden',
    createAccount: 'Registrieren',
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
    activateCashback: 'Aktivieren Sie {{discount}} Cash back',
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
    search: 'Suche',
    nothingFound: 'Nicht gefunden',
    deals: 'Angebote',
    revealCoupon: 'Gutschein einblenden',
    newDeal: 'Neues Angebot',
    verifiedToday: 'Heute bestätigt',
    reviews: 'Überprüft',
    addToChrome: 'zu Chrome hinzufügen',
    about: 'Über',
  },
  coupons: {
    shopBy: {
      couponSales: 'Gutschein & Verkauf',
      browseByStore: 'Nach Geschäft durchsuchen',
      newCoupon: 'Neuer Gutschein',
      getCoupon: 'Gutschein erhalten',
      exp: 'Exp. 21.03.2014',
      favorite: 'Favorisieren',
      share: 'Teilen',
      success: 'Erfolg',
      freeShipping: 'Kostenloser Versand',
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
      viewDeal: 'Angebot anzeigen',
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
    secrets: 'Geheimnis',
    codes: 'Gutschein Code',
    codesAndDeals: 'Gutschein Code & Angebote',
    followStore: 'Shops folgen',
    neverOverlay: 'Nie wieder zu viel bezahlen',
    automaticallyAddAll:
      'Alle aktiven Gutscheine automatisch zur ihrem Bestellung mit Piggy´s  Browser-  Erweiterung hinzugfügt. Wenn Sie zur Kasse gehen, wird Piggy Gutscheine und Cashback bei {{storeName}} und viel mehr.',
    automaticCoupons: 'Automatische Gutscheine ',
    priceCheck: 'Preischeck',
    secretRates: 'Geheime Tarife und Angebote',
    noCouponsAndDeal:
      'Für {{ storeName }} wurden keine Gutscheine oder Angebote gefunden. Werfen Sie einen Blick auf unsere Top-Angebote und Deals.',
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
      desktop: 'Für Desktop Herunterladen',
      android: 'Für Android Herunterladen',
      ios: 'Für IOS Herunterladen',
    },
    menu: {
      howToInstall: 'Wie installiert man',
      howToUninstall: 'Wie deinstalliert man',
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
};
