/* eslint-disable max-len */
export default {
  titles: {
    coupons:
      'Automate Your Vouchers, Savings and Cashback - %mmmm %yyyy - Piggy',
    storeCoupons:
      'Top Online {{ storeName }} Vouchers, Promo Codes and Cashback - %mmmm %yyyy - Piggy',
  },
  header: {
    coupons: 'Vouchers',
    stores: 'Cashback',
    getApp: 'Get the App!',
    signIn: 'Sign in',
    login: 'Login',
    createAccount: 'Register',
    myAccount: 'My Account',
    inviteFriends: 'Invite Friends',
    settings: 'Settings',
    signOut: 'Log out',
    updateAccount: 'Update Account',
    checkEarnings: 'Check Earnings',
    storeFavorites: 'Store Favorites',
    referralBonus: 'Referral Bonus',
    passwordReset: 'Password Reset',
    accountDetails: 'Account Details',
    earningSaving: 'Earnings & Savings',
    favoriteStores: 'Favourite Stores',
    shop: 'Shop {{ storeName }} with {{ cashBack }}',
  },
  auth: {
    social: {
      loginFacebook: 'Login with Facebook',
      loginGoogle: 'Login with Google',
    },
    signUp: {
      title: 'Register to Get Automatic Cashback',
      subTitle: "It's that easy",
      or: 'or',
      emailAddress: 'Email Address',
      button: 'Join Piggy',
      preFooter: {
        label:
          "By joining, I agree to be added to daily mailing list and to Piggy's",
        terms: 'Terms of Service',
        and: 'and',
        privacy: 'Privacy Policy',
        suffix: '',
      },
      footer: {
        text: 'Already A Member?',
        button: 'Login',
      },
      messages: {
        inputEmpty: 'Please fill out this field',
        existAccount: 'Looks like you already have an account. Please login.',
        passwordNotMatch: 'Passwords do not match!',
        shortPassword: 'Password must be 8 characters long!',
        invalidEmail: 'Invalid email format',
        emailNotContainComma:
          "A part followed by '@' should not contain the symbol ','.",
        errorTryAgain: 'There was an error. Please try again.',
      },
      password: 'Password',
      confirmPassword: 'Confirm Password',
    },
    signIn: {
      title: 'Welcome Back',
      subTitle: 'Good to see you again',
      or: 'or',
      emailAddress: 'Email Address',
      password: 'Password',
      button: 'Login with Email',
      forgotPassword: 'Forgot Password?',
      footer: {
        text: 'Not A Member?',
        button: 'Join Piggy',
      },
      messages: {
        emptyEmail: 'Please enter a valid email address',
        noUserExists: 'No user exists with that email',
        incorrectPassword: 'Incorrect Password',
        emailNotContainComma:
          "A part followed by '@' should not contain the symbol ','.",
        emailShouldContain: `Please include an '@' in the email address. {{email}} is missing an '@'.`,
        emailShouldNotContain: `A part following '@' should not contain the symbol '{{specialChar}}'.`,
        emailIsIncomplete: `Please enter a part following '@'. {{email}} is incomplete.`,
        emailIsInvalid: `'.' is used at a wrong position in '{{emailDomain}}'.`,
        inputEmpty: 'Please fill out this field',
      },
    },
    forgotPassword: {
      title: 'Forgot Your Password?',
      subTitle: 'Forgot Your Password',
      emailAddress: 'Email Address',
      button: 'Send Reset Email',
      footer: {
        text: 'You are not a member?',
        button: 'Join Piggy',
      },
      messages: {
        emailNotExist: "Email address doesn't exist in our database.",
        sendPassword:
          'Your password has been sent. Please check your email and log in.',
      },
      mail: {
        message: {
          title: 'We are sorry you lost your password',
          text: 'Please click the button below to reset and continue saving!',
          button: 'Reset Password',
          unsubscribe: {
            text:
              "If you'd like to unsubscribe and stop receiving these emails",
            button: 'click here.',
          },
        },
      },
    },
    resetPassword: {
      title: 'Reset your password',
      formTitle: 'Please enter a new password for your account',
      newPassword: 'New Password',
      confirmPassword: 'Confirm Password',
      button: 'Update',
      messages: {
        shortPassword: 'Password must be 8 characters long!',
      },
    },
  },
  categories: {
    selectCategory: 'Select category...',
    name: 'Categories',
    accessories: 'Accessories',
    automotive: 'Automotive & Car Hire',
    baby: 'Baby & Child',
    beauty: 'Beauty',
    booksMedia: 'Books & Media',
    officeBusiness: 'Office & Business',
    canada: 'Canada',
    cellphones: 'Mobile, TV & Broadband',
    clothing: 'Clothing',
    computers: 'Computers',
    departmentStores: 'Department Stores',
    electronics: 'Electronics',
    diningEntertainment: 'Dining and Entertainment',
    giftFlowers: 'Gifts & Flowers',
    health: 'Health',
    hobbiesCrafts: 'Hobbies and Crafts',
    HomeGarden: 'Home & Garden',
    jewelries: 'Jewelry',
    musicInstruments: 'Music & Instruments',
    partySupplies: 'Party Supplies',
    pets: 'Pets',
    services: 'Utilities & Services',
    shoes: 'Shoes',
    sportsFitness: 'Sports, Fitness & Outdoors',
    toysGames: 'Toys & Games',
    travel: 'Travel & Accommodation',
    luxury: 'Luxury',
  },
  global: {
    activateCashback: 'Activate {{discount}} Cashback',
    invalidDate: 'Invalid Date',
    earnCashBack: 'Earn {{discount}} Cashback!',
    learnMore: 'Learn more',
    get25dollars: 'Get $25',
    amCashBack: '{{discount}} Cashback',
    overOff: 'Over {{discount}} off',
    cashBack: 'Cashback',
    cashBackPrint: '{{print}} Cashback',
    instantSaving: 'Instant Savings',
    noCashBack: 'No Cashback',
    upToCashBack: 'Up to {{discount}} Cashback',
    downloadPiggy:
      "Download Piggy's Automatic Vouchers at Checkout and Never Miss a Deal Again!",
    neverMiss: 'Never miss a voucher with our free app!',
    loadMoreDeals: 'Load More Deals',
    loadMoreCoupons: 'Load More Vouchers',
    loadMoreStores: 'Load More Stores',
    search: 'Search',
    nothingFound: 'Nothing found',
    deals: 'Deals',
    revealCoupon: 'Reveal Voucher',
    newDeal: 'New Deal',
    verifiedToday: 'Verified today · XXX uses today.',
    reviews: 'reviews',
    addToChrome: 'Add to Chrome',
    about: 'About',
  },
  coupons: {
    shopBy: {
      couponSales: 'Voucher & Sales',
      browseByStore: 'Browse by Store',
      newCoupon: 'New Voucher',
      getCoupon: 'Get Voucher',
      exp: 'Exp. 03/21/2019',
      favorite: 'Favorite',
      share: 'Share',
      success: 'Success',
      freeShipping: 'Free Shipping',
      get5dollarOff: 'Get a $5 Off',
    },
    off: ' OFF',
    seeMore: 'See More',
    myAccount: 'My Account',
    earnings: 'Earnings',
    favorites: 'Favorites',
    referrals: 'Referrals',
    preferences: 'Preferences',
    resetPassword: 'Reset Password',
    testimonials: 'Testimonials',
    messages: {
      maxCashBack:
        '- indicates the maximum cashback, reward, or discount a user may earn. Some items may pay lower cashback and some exclusions may exist. Not all stores pay cashback. Cashback not combinable with outside vouchers or offers. Please view Terms or individual store profiles for more info.',
    },
    controls: {
      allDeals: 'All Deals',
      onlyCoupons: 'Only Vouchers',
      favoriteStores: 'Favorite Stores',
    },
    type: {
      free: 'Free',
      shipping: 'Shipping',
      coupon: 'Voucher',
      code: 'Code',
      deal: 'Deal',
    },
    buttons: {
      viewCoupon: 'View Voucher',
      viewDeal: 'View Deal',
      tooltip: 'Click to shop. Use this code at checkout to save!',
    },
    todaysFeatureCoupon: "Today's Featured Voucher From {{storeName}}",
    upToCashback: '+ up to {{discount}} Cashback',
    plusCashBack: '+{{discount}} Cashback',
    noCouponsFound: 'No Vouchers Found',
    noFeaturedCouponsFound: 'No Featured Vouchers Found',
    login: 'Login',
    register: 'Register',
    or: 'or',
    favoriteStoresAndDeals:
      'to make a list of your favourite stores and deals.',
    followAnyStore:
      "Visit any store page and click 'Follow Store' to add to your list",
    activateModal: {
      title: 'NEVER OVERPAY AGAIN AT',
      content: `Save time and money with Piggy's free Google Chrome extension.
                Piggy appears at checkout and automatically applies the best voucher.`,
      couponAbout: 'We find the {{title}} vouchers, you just shop!',
      button: 'Continue',
    },
    installExtension: {
      action: 'Add to Chrome',
      step1: 'Step 1',
      step2: 'Step 2',
      step1text: 'Click the "Add to Chrome" Button',
      step2text: 'Then click "Add extension"',
    },
  },
  cashbackStores: {
    shopBy: {
      couponSales: 'Voucher & Sales',
      browseByStore: 'Browse by Store',
      viewSales: 'View sales and voucher codes',
      instantSaving: 'Instant Cashback',
      shopNow: 'Shop Now',
      browseStore: 'Browse Store Vouchers and Popular Cashback Stores',
      findAmazing: 'Find amazing savings, voucher and Automatic Cashback!',
    },
    seeMore: 'See More',
    myAccount: 'My Account',
    earnings: 'Earnings',
    favorites: 'Favorites',
    referrals: 'Referrals',
    preferences: 'Preferences',
    resetPassword: 'Reset Password',
    testimonials: 'Testimonials',
    browseStores: 'Browse among more than 1000 stores',
    addSaving: 'Need a Voucher?',
    instantlyApplyAll:
      'Instantly apply voucher and cashback in a single click with Piggy’s app',
    activateSavings: 'Continue',
    limitedOffer: 'Limited Offer',
    piggyBonus: 'Piggy Bonus',
  },
  storeCoupons: {
    cashBackCategories: 'Cashback Categories',
    viewLatestCoupons:
      'View the latest Online Vouchers for {{storeName}} below! Never miss a {{ storeName }} voucher or Cashback opportunities from any of our 3,000 other stores with our Free Mobile App and Browser app! Any of {{ storeName }} online vouchers can be combined with Free, Automatic Rebates.Up to 3.0% Cashback! Only from Piggy!Any of these {{ storeName }} voucher codes and promotions can be combined with our Automatic Cashback at {{ storeName }}',
    returnPolicy: 'Return Policy',
    shipping: 'Shipping',
    secrets: 'Secrets',
    codes: 'Voucher Codes',
    codesAndDeals: 'Voucher Codes & Deals',
    followStore: 'Follow Store',
    neverOverlay: 'Never Overpay Again',
    automaticallyAddAll:
      "Automatically add all active vouchers to your order with Piggy's browser extension. When you get to checkout, Piggy will find vouchers and cashback at {{storeName}} and more.",
    automaticCoupons: 'Automatic Vouchers',
    priceCheck: 'Price Check',
    secretRates: 'Secret Rates and Deals',
    noCouponsAndDeal:
      'No Vouchers or Deals found for {{storeName}}. Take a look at our top offers and deals below.',
  },
  sitemap: {
    meta: {
      title: 'Popular Vouchers & Deals by Store | Piggy Sitemap',
      description:
        'Instantly find vouchers, discount codes, cashback offers and deals at your favourite stores with Piggy.',
    },
    popular_stores: 'Browse Most Popular Codes by Store',
    visit_store: 'Visit Store',
    all_stores: 'All stores',
    main_pages: {
      title: 'Main Pages',
      home: 'Home',
      automatic_coupon_apps: 'Automatic Coupon Apps',
      about_cashback: 'About Cashback',
      blog: 'Blog',
      cashback_stores: 'Cashback Stores',
      free_coupons: 'Free Coupons',
      my_account: 'My Account',
    },
    company_info: {
      title: 'Company Info',
      about: 'About',
      contact_us: 'Contact Us',
      privacy_policy: 'Privacy Policy',
      terms_of_use: 'Terms of Use',
      eula: 'EULA',
    },
    shopping_categories: {
      title: 'Shopping Categories',
    },
    account_pages: {
      title: 'Account Pages',
      account_update: 'Account Update',
      change_password: 'Change Password',
      earnings_summary: 'Earnings Summary',
      favorites: 'Favourites',
      referrals: 'Referrals',
      preferences: 'Preferences',
    },
    help_section: {
      title: 'Help Section',
      contact_us: 'Contact Us',
      how_to_install: 'How to Install',
      how_to_uninstall: 'How to Uninstall',
      help: 'Help',
      unsubscribe: 'Unsubscribe',
    },
    misc: {
      title: 'Misc',
      consumer_resources: 'Consumer Resources',
    },
  },
  build: {
    visitStore: 'Visit Store',
    addToFavorites: 'Add to favorites',
    freeShipping: 'Free Shipping',
    freeShippingOver49:
      'FREE Shipping Standard Ground Shipping on Orders over $49!',
    shopBuild: 'Shop Build with 3.0% Cashback',
    returnPolicy: 'Return Policy',
    returnItems30days:
      'You may initiate a return for an item(s) within 30 days of receipt for a refund. Returns requested between 31 - 60 days after receipt will only qualify for store credit. Returns outside of our 30 to 60 day General Return policy will not be accepted. Refunds will be applied to your account (minus return shipping) once the item has been received and inspected through our warehouse.',
    threePercentCashBack: 'Plus get 3.0% Cashback from Build!',
    otherPopularStores: 'Other Popular Stores',
    indicatesMaximumCashBack:
      '- indicates the maximum cashback, reward, or discount a user may earn. Some items may pay lower cashback and some exclusions may exist. Not all stores pay cashback. Cashback not combinable with outside vouchers or offers. Please view Terms or individual store profiles for more info.',
  },
  footer: {
    stopMissingOut: 'Stop missing out. Get the app today!',
    getTheApp: 'Get The App',
    downloadButtons: {
      desktop: 'Download for Desktop',
      android: 'Download for Android',
      ios: 'Download for iOS',
    },
    menu: {
      howToInstall: 'How to Install',
      howToUninstall: 'How to Uninstall',
      aboutCashBack: 'About Cashback',
      aboutOurApp: 'About Our App',
      careers: 'Careers',
      contact: 'Contact',
      consumerResources: 'Consumer Resources',
      referrals: 'Referrals',
      blog: 'Blog',
      aboutUs: 'About Us',
      help: 'Help',
    },
    copyright: {
      menu: {
        termsOfUse: 'Terms of Use',
        privacyPolicy: 'Privacy Policy',
        sitemap: 'Sitemap',
        unsubscribe: 'Unsubscribe',
        eula: 'EULA',
        impressum: 'Impressum',
      },
      text: 'Copyright',
      allRightReserved: 'All Rights Reserved.',
    },
  },
  404: {
    title: 'Page Not Found',
    subtitle: 'UH-OH, NOTHING TO SEE HERE!',
    text: 'The page you requested does not exist.',
    action: 'Go Home',
  },
  homepage: {
    topDeals: "Piggy's Top Deals Today",
    matd: 'More About This Deal',
    seeAllDeals: 'See all {{storeName}} Deals',
    uptoCashback: 'Up to {{cashback}}',
    featuredCashBack: 'Featured Cashback Deals',
    gtdn: 'Get This Deal Now',
    plusCashback: 'Plus {{cashback}} Cashback',
    discover: 'Discover deals by category:',
    all: 'All',
    was: 'Was {{price}}',
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
    worksWithStoresInfo:
      'Wusstest du, dass Piggy-Nutzer bei jedem Online-Einkauf durchschnittlich 24 € sparen? Das liegt daran, dass Piggy mit über 6.000 Shops zusammenarbeitet: von Mode, über Pizza bis hin zu Hotelanbietern.',
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
  },
};
