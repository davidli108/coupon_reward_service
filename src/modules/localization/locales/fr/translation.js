/* eslint-disable max-len */
export default {
  titles: {
    coupons:
      'Automatisez vos coupons, vos économies et votre cashback - %mmmm %yyyy - Piggy',
    storeCoupons:
      'Top des bons de réduction, codes promo et remises en ligne de storeName en ligne - %mmmm %yyyy - Piggy',
  },
  header: {
    coupons: 'Codes promo',
    stores: 'Boutiques',
    getApp: "Obtenez l'application !",
    login: 'Se Connecter',
    createAccount: 'Créez un compte',
    myAccount: 'Mon Compte',
    inviteFriends: 'Inviter des amis',
    settings: 'Paramètres',
    signOut: 'Déconnexion',
    updateAccount: 'Mettre le compte à jour',
    checkEarnings: 'Vérifier vos gains',
    storeFavorites: 'Favoris magasin',
    referralBonus: 'Bonus de parrainage',
    passwordReset: 'Réinitialisez votre mot de passe',
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
        terms: "conditions d'utilisation de Piggy.",
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
    jewelry: 'Bijoux',
    musicInstruments: 'Musique et Instruments',
    partySupplies: 'Fournitures de fête',
    pets: 'Animaux domestiques',
    services: 'Services',
    shoes: 'Chaussures',
    sportsFitness: 'Sports & Fitness',
    toysGames: 'Jouets',
    travel: 'Voyage',
  },
  global: {
    learnMore: 'En savoir plus',
    get25dollars: 'Obtenez 25€',
    cashBack: 'Cashback',
    instantSaving: 'Économies instantanées',
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
    todaysFeatureCoupon: "Coupon d'aujourd'hui par",
    upToCashback: "+ jusqu'à {{discount}} de remise en argent",
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
    viewLatestCoupons:
      "voir les derniers coupons en ligne pour storeName ci-dessous ! Ne manquez jamais un coupon de réduction ou un cashback dans l'une de nos 3 000 autres boutiques grâce à notre application gratuite pour mobile et à notre extension de navigateur ! Tous les coupons en ligne de storeName peuvent être combinés avec des réductions automatiques et gratuites. Jusqu'à 3,0 % de cashback ! Chacun de ces coupons et promotions peuvent être combinés avec notre cashback automatique à l'achat d'un produit Piggy !",
    returnPolicy: 'Politique de retour',
    shipping: 'Expédition',
    secrets: 'Secrets',
    codesAndDeals: 'Codes de coupons et offres',
    followStore: 'Suivre la boutique',
    neverOverlay: 'Ne plus jamais trop payer',
    automaticallyAddAll:
      "Ajoutez automatiquement tous les coupons actifs à votre commande avec l'extension de navigateur de Piggy. Lorsque vous passerez à la caisse, Piggy trouvera des coupons et cashback au storeName et plus encore.",
    automaticCoupons: 'Coupons automatiques',
    priceCheck: 'Vérifiez le prix',
    secretRates: 'Tarifs et offres secrets',
    noCouponsAndDeal:
      "Aucun Coupons ou Offre trouvé pour storeName. Jetez un coup d'œil à nos meilleures offres et offres ci-dessous.",
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
  templates: {
    upToCashback: "Jusqu'à %s de remise en argent",
  },
};