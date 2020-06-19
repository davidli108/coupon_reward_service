/* eslint-disable max-len */
export default {
  titles: {
    coupons:
      'Automatisez vos coupons, vos économies et votre cashback - {{month}} {{year}} - Piggy',
    storeCoupons:
      'Top des bons de réduction, codes promo et remises en ligne de {{storeName}} en ligne - {{month}} {{year}} - Piggy',
  },
  description: {
    storeCoupons:
      'Piggy, la seule application à employer automatiquement les coupons et les cashbacks sur tous les appareils. Disponible dans plus de 3 600 magasins - Obtenez Piggy Maintenant !',
    coupons: `Piggy, la seule application à employer automatiquement les coupons et les cashbacks sur tous les appareils. Disponible dans plus de 3 600 magasins - Obtenez Piggy Maintenant !`,
  },
  header: {
    coupons: 'Codes promo',
    stores: 'Boutiques',
    getApp: "Obtenez l'application !",
    signIn: 'Se Connecter',
    login: 'Se Connecter',
    createAccount: 'Enregistrer',
    myAccount: 'Mon Compte',
    inviteFriends: 'Inviter des amis',
    settings: 'Paramètres',
    signOut: 'Déconnexion',
    updateAccount: 'Mettre le compte à jour',
    checkEarnings: 'Vérifier vos gains',
    storeFavorites: 'Favoris magasin',
    referralBonus: 'Bonus de parrainage',
    passwordReset: 'Réinitialisez votre mot de passe',
    accountDetails: 'Details du Compte',
    earningSaving: 'Gains et Économies',
    favoriteStores: 'Boutiques Préférées',
    shop: 'Achetez {{ storeName }} avec {{ cashBack }}',
  },
  auth: {
    social: {
      loginFacebook: 'Se connecter avec Facebook',
      loginGoogle: 'Se connecter avec Google',
    },
    signUp: {
      title: 'Inscrivez-vous pour obtenir une remise en argent automatique',
      subTitle: "C'est aussi simple que ça",
      or: 'ou',
      emailAddress: 'Adresse mail',
      button: 'Rejoignez Piggy',
      preFooter: {
        label:
          "En m'inscrivant, j'accepte d'être ajouté à la liste d'envoi journalière et aux",
        terms: "conditions d'utilisation",
        and: 'et',
        privacy: 'politique de confidentialité',
        suffix: 'de Piggy',
      },
      footer: {
        text: 'Déjà membre ?',
        button: 'Connexion',
      },
      messages: {
        inputEmpty: 'Veuillez remplir ce champ',
        existAccount:
          'On dirait que vous avez déjà un compte. Veuillez vous identifier.',
        passwordNotMatch: 'Les mots de passe ne correspondent pas !',
        shortPassword: 'Le mot de passe doit comporter 8 caractères !',
        invalidEmail: "Format de l'email invalide",
        emailNotContainComma:
          "La partie suivie de'@' ne doit pas contenir le symbole ','.",
        errorTryAgain: 'Il y a eu une erreur. Veuillez réessayer.',
      },
      password: 'Mot de passe',
      confirmPassword: 'Confirmer le mot de passe',
    },
    signIn: {
      title: 'Bon retour parmi nous',
      subTitle: "C'est bon de vous revoir.",
      or: 'ou',
      emailAddress: 'Adresse e-mail',
      password: 'Mot de passe',
      button: "Se connecter avec l'email",
      forgotPassword: 'Mot de passe oublié ?',
      footer: {
        text: "Vous n'êtes pas membre?",
        button: 'Rejoignez Piggy',
      },
      messages: {
        emptyEmail: 'Veuillez entrer une adresse email valide',
        noUserExists: 'Aucun utilisateur existant avec cet email',
        incorrectPassword: 'Mot de passe incorrect',
        emailNotContainComma:
          "La partie suivie de '@' ne doit pas contenir les symboles ','.",
        emailShouldContain: `Veuillez inclure un '@' dans l'adresse e-mail. {{email}} manque un '@'`,
        emailShouldNotContain: `Une partie suivant '@' ne doit pas contenir le symbole '{{specialChar}}'`,
        emailIsIncomplete: `S'il vous plaît entrer une partie suivant '@', {{email}} est incomplète`,
        emailIsInvalid: `'.' est utilisé à une mauvaise position dans '{{emailDomain}}'.`,
        inputEmpty: 'Veuillez remplir ce champ',
      },
    },
    forgotPassword: {
      title: 'Mot de passe oublié ?',
      subTitle: 'Mot de passe oublié',
      emailAddress: 'Adresse email',
      button: 'Envoyer un email de réinitialisation',
      footer: {
        text: "Vous n'êtes pas membre?",
        button: 'Rejoignez Piggy',
      },
      messages: {
        emailNotExist:
          "L'adresse email est inexistante dans notre base de données.",
        sendPassword:
          "Votre mot de passe a été envoyé. S'il vous plaît vérifier votre email et connexion",
      },
      mail: {
        message: {
          title: 'Nous sommes désolés que vous ayez perdu votre mot de passe',
          text:
            'Veuillez cliquer sur le bouton ci-dessous pour réinitialiser et continuer à économiser !',
          button: 'Réinitialiser le mot de passe',
          unsubscribe: {
            text:
              'Si vous souhaitez vous désabonner et ne plus recevoir ces emails,',
            button: 'cliquez ici.',
          },
        },
      },
    },
    resetPassword: {
      title: 'Réinitialiser votre mot de passe',
      formTitle: 'Veuillez entrer un nouveau mot de passe pour votre compte',
      newPassword: 'Nouveau mot de passe',
      confirmPassword: 'Confirmer le mot de passe',
      button: 'Mise à jour',
      messages: {
        shortPassword: 'Le mot de passe doit comporter 8 caractères !',
      },
    },
  },
  categories: {
    selectCategory: 'Sélectionner une catégorie',
    name: 'Catégories',
    accessories: 'Accessoires',
    automotive: 'Automobile',
    baby: 'Bébé',
    beauty: 'Beauté',
    booksMedia: 'Livres et médias',
    officeBusiness: 'Bureau et affaire de travail',
    canada: 'Canada',
    cellphones: 'Téléphones portables',
    clothing: 'Vêtements',
    computers: 'Ordinateurs',
    departmentStores: 'Grand magasin',
    electronics: 'Électronique',
    diningEntertainment: 'Restauration et divertissement',
    giftFlowers: 'Cadeaux et fleurs',
    health: 'Santé',
    hobbiesCrafts: 'Loisirs et artisanat',
    HomeGarden: 'Maison & Jardin',
    jewelries: 'Bijoux',
    musicInstruments: 'Musique et Instruments',
    partySupplies: 'Fournitures de fête',
    pets: 'Animaux domestiques',
    services: 'Services',
    shoes: 'Chaussures',
    sportsFitness: 'Sports & Fitness',
    toysGames: 'Jouets',
    travel: 'Voyage',
    luxury: 'Luxe',
  },
  global: {
    activateCashback: 'Activer {{discount}} Cash back',
    invalidDate: 'Exp: Date invalide',
    earnCashBack: 'Gagnez {{discount}} cash Back!',
    learnMore: 'En savoir plus',
    get25dollars: 'Obtenez 25€',
    amCashBack: '{{discount}} Remise en Argent',
    overOff: 'Plus de {{discount}} de réduction',
    cashBack: 'Remise en Argent',
    cashBackPrint: '{{print}} Cashback',
    instantSaving: 'Économies instantanées',
    noCashBack: 'Pas de remise en argent',
    upToCashBack: "Jusqu'à {{discount}} de remise en argent",
    downloadPiggy:
      "Téléchargez les coupons automatiques de Piggy's à la caisse et ne ratez plus jamais une affaire !",
    neverMiss:
      'Ne manquez plus jamais un coupon avec notre application gratuite !',
    loadMoreDeals: "Charger plus d'offres",
    loadMoreCoupons: "Charger plus d'coupons",
    loadMoreStores: 'Charger plus de magasins',
    search: 'Rechercher',
    nothingFound: 'Aucuns résultats',
    deals: 'Offres',
    revealCoupon: 'Révéler le coupon',
    newDeal: 'Nouvelle offre',
    verifiedToday: "Vérifié aujourd'hui",
    reviews: 'commentaires',
    addToChrome: 'Ajouter à Chrome',
    about: 'À propos de',
  },
  coupons: {
    animateModal: {
      title: 'Piggy est en train de chercher des coupons automatiques',
      hangon: 'Attendez quelques secondes...',
      save: "Economisez du temps et de l'argent !",
    },
    animateModal1: {
      subTitle: 'Piggy a trouvé des coupons automatiques',
      addPiggy:
        'Ne surpayez pas...<br/>Piggy trouve automatiquement les meilleurs coupons.',
      btnFree: "Téléchargez Piggy - C'est gratuit !",
    },
    animateModal2: {
      subTitle: 'Appliquez automatiquement les coupons et économies retrouvés',
      addPiggy:
        "Ajoutez l'extension Chrome de Piggy gratuitement et appliquez les meilleurs économies instanément. ",
      btnFree: "Continuez - C'est gratuit !",
      animatedTitle01: "Piggy est en train d'ajouter votre coupon...",
      animatedTitle02: "Piggy est en train d'appliquer du cashback...",
      animatedTitle03: 'Piggy a appliqué votre cashback.',
      animatedTitle04:
        "Piggy est en train de détécter l'éligibilité de coupons automatiques...",
    },
    shopBy: {
      couponSales: 'Coupon & Ventes',
      browseByStore: 'Voir par boutique',
      newCoupon: 'Voir par boutique',
      getCoupon: 'Nouveau coupon',
      exp: 'Exp. 21/03/2019',
      favorite: 'Favoris',
      share: 'Partager',
      success: 'Succès',
      freeShipping: 'Livraison gratuite',
      get5dollarOff: 'Obtenez 5€ de réduction',
    },
    off: ' de rabais',
    seeMore: 'Voir plus',
    myAccount: 'Mon compte',
    earnings: 'Gains',
    favorites: 'Favoris',
    referrals: 'Parrainages',
    preferences: 'Préférences',
    resetPassword: 'Réinitialiser le mot de passe',
    testimonials: 'Témoignages',
    messages: {
      maxCashBack:
        "- indique le cashback, la récompense ou le rabais maximum qu'un utilisateur peut gagner.Certains articles peuvent donner droit à un cashback moins élevée et il peut y avoir certaines exclusions.Toutes les boutiques n'offrent pas de cashback. Le cashback ne peut pas être combiné avec des coupons ou des offres extérieures. Veuillez consulter les conditions générales ou les profils individuels des boutiques pour plus d'informations.",
    },
    controls: {
      allDeals: 'Toutes les offres',
      onlyCoupons: 'Coupons seulement',
      favoriteStores: 'Boutiques préférées',
    },
    type: {
      free: 'Gratuit',
      shipping: 'Expédition',
      coupon: 'Coupon',
      code: 'Code',
      deal: 'Offre',
    },
    buttons: {
      viewCoupon: 'Voir le coupon',
      viewDeal: "Voir l'offre",
      tooltip:
        'Cliquez pour fair vos achats. Utilisez ce code lorsque vous passez en caisse pour faire des économies!',
    },
    todaysFeatureCoupon: "Coupon d'aujourd'hui par {{storeName}}",
    upToCashback: "+ jusqu'à {{discount}} de remise en argent",
    plusCashBack: '+{{discount}} de remise en argent',
    noCouponsFound: 'Aucun coupon trouvé',
    noFeaturedCouponsFound: 'Aucun coupon en vedette trouvé',
    login: "S'identifier",
    register: 'Registre',
    or: 'ou',
    favoriteStoresAndDeals:
      'pour faire une liste de vos magasins préférés et des offres.',
    followAnyStore:
      "Visitez n'importe quelle page de magasin et cliquez sur 'Suivre le magasin' pour ajouter à votre liste",
    activateModal: {
      title: 'Ne payez plus jamais trop cher',
      content: `Gagnez du temps et de l’argent avec vos bons automatiques. Piggy apparaît quand vous passez à la caisse et met en place automatiquement la meilleure réduction pour vous.`,
      couponAbout:
        'Nous trouvons les {{title}} bons de réduction et vous faites tout simplement vos achats !',
      button: 'Activez les coupons',
    },
    installExtension: {
      action: 'Ajouter à Chrome',
      step1: '1ère étape',
      step2: '2e étape',
      step1text: 'Cliquez sur "Ajouter à Chrome"',
      step2text: 'Ensuite, cliquez sur "ajouter une extension"',
    },
  },
  cashbackStores: {
    shopBy: {
      couponSales: 'Coupon & Ventes',
      browseByStore: 'Voir par boutique',
      viewSales: 'Voir les promotions et les codes promo',
      instantSaving: 'Économies instantanées',
      shopNow: 'Ajouter aux favoris',
      browseStore:
        'Parcourez les coupons et cashback des boutiques les plus connues.',
      findAmazing:
        'Profitez de réductions incroyables, de coupons et de Cashback automatique !',
    },
    seeMore: 'Voir plus',
    myAccount: 'Mon compte',
    earnings: 'Gains',
    favorites: 'Favoris',
    referrals: 'Parrainages',
    preferences: 'Préférences',
    resetPassword: 'Réinitialiser le mot de passe',
    testimonials: 'Témoignages',
    browseStores: 'Parcourez plus de 1000 magasins',
    addSaving: 'Ajouter des économies',
    instantlyApplyAll:
      "Appliquez instantanément tous les coupons et les remises en argent avec l'application Piggy’s.",
    activateSavings: "Activer l'épargne",
    limitedOffer: 'Offre limitée',
    piggyBonus: 'Bonus Piggy',
  },
  storeCoupons: {
    cashBackCategories: 'Catégories de remise en argent',
    viewLatestCoupons:
      "voir les derniers coupons en ligne pour {{ storeName }} ci-dessous ! Ne manquez jamais un coupon de réduction ou un cashback dans l'une de nos 3 000 autres boutiques grâce à notre application gratuite pour mobile et à notre extension de navigateur ! Tous les coupons en ligne de {{ storeName }} peuvent être combinés avec des réductions automatiques et gratuites. Jusqu'à 3,0 % de cashback ! Chacun de ces coupons et promotions peuvent être combinés avec notre cashback automatique à l'achat d'un produit Piggy !",
    returnPolicy: 'Politique de retour',
    shipping: 'Expédition',
    secrets: 'Secrets',
    codes: 'Codes de coupons',
    codesAndDeals: 'Codes de coupons et offres',
    followStore: 'Suivre la boutique',
    neverOverlay: 'Ne plus jamais trop payer',
    automaticallyAddAll:
      "Ajoutez automatiquement tous les coupons actifs à votre commande avec l'extension de navigateur de Piggy. Lorsque vous passerez à la caisse, Piggy trouvera des coupons et cashback au {{storeName}} et plus encore.",
    automaticCoupons: 'Coupons automatiques',
    priceCheck: 'Vérifiez le prix',
    secretRates: 'Tarifs et offres secrets',
    noCouponsAndDeal:
      "Aucun Coupons ou Offre trouvé pour {{ storeName }}. Jetez un coup d'œil à nos meilleures offres et offres ci-dessous.",
    getBestPrice: 'Get the Best Price',
    alertAutomatically:
      'Piggy will automatically alert you of the best price at {{ storeName }}. You can also track the price history on your items and get alerts if the price drops.',
  },
  sitemap: {
    meta: {
      title:
        'Coupons et promotions populaires par magasin | Plan du site Piggy',
      description:
        'Trouvez instantanément des coupons, des codes, des offres cashback et des promotions dans vos magasins préférés avec Piggy.',
    },
    popular_stores: 'Parcourir les coupons les plus populaires par magasin',
    visit_store: 'Visitez la Boutique',
    all_stores: 'Tout les magasins',
    main_pages: {
      title: 'Pages principales',
      home: `Page d'accueil`,
      automatic_coupon_apps: 'Au sujet de notre application',
      about_cashback: 'À propos du cashback',
      blog: 'Blog',
      cashback_stores: 'Boutiques',
      free_coupons: 'Codes promo',
      my_account: 'Mon Compte',
    },
    company_info: {
      title: `Informations sur l'entreprise`,
      about: 'A propos de nous',
      contact_us: 'Contact',
      privacy_policy: 'Politique de confidentialité',
      terms_of_use: `Conditions d'utilisation`,
      eula: 'EULA',
    },
    shopping_categories: {
      title: 'Catégories',
    },
    account_pages: {
      title: 'Compte',
      account_update: 'Détails du compte',
      change_password: 'Changer le mot de passe',
      earnings_summary: 'Gains',
      favorites: 'Favoris',
      referrals: 'Parrainages',
      preferences: 'Préférences',
    },
    help_section: {
      title: 'Aide',
      contact_us: 'Contact',
      how_to_install: 'Comment installer',
      how_to_uninstall: 'Comment désinstaller',
      help: 'Aide',
      unsubscribe: 'Se désabonner',
    },
    misc: {
      title: 'Misc',
      consumer_resources: 'Consumer Resources',
    },
  },
  build: {
    visitStore: 'Visitez la boutique',
    addToFavorites: 'Ajouter aux favoris',
    freeShipping: 'Livraison gratuite',
    freeShippingOver49:
      'Livraison standarde par voie terrestre gratuite  pour les commandes de plus de 49€ !',
    shopBuild:
      "Shop Build avec 3.0% de cashback (shop build doesn't have any meaning in french)",
    returnPolicy: 'Politique de retour',
    returnItems30days:
      "Vous pouvez faire un retour de produit dans les 30 jours suivant la réception de celui-ci pour obtenir un remboursement. Les retours demandés entre 31 et 60 jours après réception ne donneront droit qu'à un crédit magasin.Les retours en dehors de notre politique de retour général de 30 à 60 jours ne seront pas acceptés.Les remboursements seront appliqués à votre compte(moins les frais de retour) une fois que le produit aura été reçu et inspecté par notre atelier.",
    threePercentCashBack:
      "De plus, obtenez 3,0 % de cashback from 'Build' ! (no meaning for build here also)",
    otherPopularStores: 'Autres boutiques populaires',
    indicatesMaximumCashBack:
      "- indique le cashback, la récompense ou le rabais maximum qu'un utilisateur peut gagner.Certains articles peuvent donner droit à un cashback moins élevée et il peut y avoir certaines exclusions.Toutes les boutiques n'offrent pas de cashback. Le cashback ne peut pas être combiné avec des coupons ou des offres extérieures. Veuillez consulter les conditions générales ou les profils individuels des boutiques pour plus d'informations.",
  },
  footer: {
    stopMissingOut:
      "Ne manquez plus rien. Obtenez l'application dès aujourd'hui!",
    getTheApp: "Obtenir l'application",
    downloadButtons: {
      desktop: 'Télécharger sur PC',
      android: 'Télécharger sur Android',
      ios: 'Télécharger sur IOS',
    },
    menu: {
      howToInstall: 'Comment installer',
      howToUninstall: 'Comment désinstaller',
      aboutCashBack: 'À propos du cashback',
      aboutOurApp: 'Au sujet de notre application',
      careers: 'Carrières',
      contact: 'Contact',
      consumerResources: 'Ressources pour les consommateurs',
      referrals: 'Parrainages',
      blog: 'Blog',
      aboutUs: 'À propos de nous',
      help: 'Aide',
    },
    copyright: {
      menu: {
        termsOfUse: "Conditions d'utilisation",
        privacyPolicy: 'Politique de confidentialité',
        sitemap: 'Plan du site',
        unsubscribe: 'Se désabonner',
        eula: 'EULA',
        impressum: 'Impressum',
      },
      text: 'Copyright',
      allRightReserved: 'Tous droits réservés.',
    },
  },
  404: {
    title: 'Page non trouvée',
    subtitle: 'UH-OH, RIEN À VOIR ICI!',
    text: "La page que vous avez demandée n'existe pas.",
    action: "Aller à la page d'accueil",
  },
  homepage: {
    hero: {
      title: "Piggy est le moyen le plus facile d'économiser de l'argent !",
      text: {
        first:
          "Ajoutez Piggy aujourd'hui pour un remboursement de plus de 70 % dans plus de 6 000 magasins.",
        second:
          'Piggy est une extension Chrome gratuite qui ajoute automatiquement des coupons, vérifie les prix et offre du cash back lorsque vous magasinez en ligne.',
      },
      activate_extension: `<strong>Ajoutez à {{browser}}</strong> C'est gratuit`,
      number_users: '1,000,000 utilisateurs',
    },
    howItWorks: {
      title: `Comment ça marche`,
      subHeader1: '2 Cliquez sur Installer',
      subText1:
        'Cliquez sur "Ajouter à Chrome" puis sur "Ajouter une extension" pour installer.',
      subText1Link: 'Aller à la boutique en ligne de Google Chrome',
      subHeader2: 'Vous avez juste à faire vos achats',
      subText2: `Nous trouverons et appliquerons chaque coupon sur Internet et vous obtiendrez jusqu'à 20% de cashback dans des milliers de magasins.`,
      subHeader3: 'Économisez instantanément',
      subText3: `Non seulement Piggy applique le coupon avec le plus d'économies, Piggy vous offre également des tarifs non publiés dans les hôtels.`,
      buttonAll: 'Continuer',
    },
    worksWithStores: 'Piggy travaille avec plus de 6 000 magasins',
    worksWithStoresInfo: `Saviez-vous que les utilisateurs de Piggy économiser une moyenne de 24€ chaque fois qu'ils magasinent en ligne en utilisant Piggy?<br/>
        C'est parce que Piggy travaille avec plus de 6.000 magasins. Tout, des vêtements et des pizzas à la réservation d'un hôtel.`,
    worksWithStoresTop: 'Magasins les plus visités:',
    worksWithStoresActivate: 'Activez les coupons gratuits et les cashbacks',
    quotes: {
      title: "Ce qu'on dit sur Piggy",
      text00: "“Piggy est l'un des meilleurs programmes là-bas“",
      name00: 'Time Magazine',
      text01:
        '“Facile automatique et gratuit, les codes donnent de bonne reduction, c est parfait “',
      name01: 'Hortense G.',
      text02:
        "“C'est automatique et gratuit les codes sont de grosse réduction je suis satisfait !!!!!!”",
      name02: 'NaKy',
      text03: "“parfait! j'aime cela”",
      name03: 'Therese C.',
      text04: "“Application tres utile! J'aime cela“",
      name04: 'Lisa W.',
      text05:
        '“Facile automatique et gratuit, les codes donnent de bonne reduction, c est parfait”',
      name05: 'Rei I.',
      text06:
        '“Facile automatique et gratuit, les codes donnent de bonne reduction, c est parfait “',
      name06: 'Hortense G.',
    },
    page: {
      title:
        'Des coupons automatiques, des offres exceptionelles, et le cash back ! - Piggy',
      description:
        'Piggy, la seule application à employer automatiquement les coupons et les cashbacks sur tous les appareils. Disponible dans plus de 3 600 magasins - Obtenez Piggy Maintenant!',
      h1:
        'Des coupons automatiques, des offres exceptionelles, et le cash back!',
    },
  },
};
