/* eslint-disable max-len */
export default {
  titles: {
    coupons:
      'Automate Your Coupons, Savings and Cashback - {{month}} {{year}} - Piggy',
    storeCoupons: '{{storeName}} Coupons & Deals | Piggy',
  },
  description: {
    storeCoupons:
      'Browse {{nrOfOffers}}{{storeName}} coupons, promo codes, deals, and discounts now. Start saving money and earning cash back online shopping with Piggy!',
    coupons: `Join Piggy’s quest to never overpay for anything online ever again. Piggy automatically finds and applies the internet's best coupon codes & cash back in cart.`,
  },
  header: {
    coupons: 'Coupons',
    stores: 'Stores',
    getApp: 'Get the App!',
    signIn: 'Sign in',
    login: 'Login',
    createAccount: 'Join Now',
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
    favoriteStores: 'Favorite Stores',
    shop: 'Shop {{ storeName }} with {{ cashBack }}',
  },
  auth: {
    social: {
      loginFacebook: 'Login with Facebook',
      loginGoogle: 'Login with Google',
    },
    signUp: {
      title: 'Register to Get Automatic Cash Back',
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
    automotive: 'Automotive',
    baby: 'Baby',
    beauty: 'Beauty',
    booksMedia: 'Books & Media',
    officeBusiness: 'Business & Office',
    canada: 'Canada',
    cellphones: 'Cell Phones',
    clothing: 'Clothing',
    computers: 'Computers',
    departmentStores: 'Department Stores',
    electronics: 'Electronics',
    diningEntertainment: 'Food & Entertainment',
    giftFlowers: 'Gifts & Flowers',
    health: 'Health',
    hobbiesCrafts: 'Hobbies and Crafts',
    HomeGarden: 'Home & Garden',
    jewelries: 'Jewelry',
    musicInstruments: 'Music & Instruments',
    partySupplies: 'Party Supplies',
    pets: 'Pets',
    services: 'Services',
    shoes: 'Shoes',
    sportsFitness: 'Sports & Outdoors',
    toysGames: 'Toys',
    travel: 'Travel',
    luxury: 'Luxury',
  },
  global: {
    activateCashback: 'Up to {{discount}} Cash Back',
    howCashBackWorks: 'How Cash Back works',
    invalidDate: 'Exp. Invalid Date',
    earnCashBack: 'Earn {{discount}} Cash Back!',
    learnMore: 'Learn more',
    get25dollars: 'Get $25',
    amCashBack: '{{discount}} Cash Back',
    overOff: 'Over {{discount}} off',
    cashBack: 'Cash back',
    cashBackPrint: '{{print}} Cash back',
    instantSaving: 'Instant Savings',
    noCashBack: 'No Cash Back',
    upToCashBack: 'Up to {{discount}} Cash Back',
    downloadPiggy:
      "Download Piggy's Automatic Coupons at Checkout and Never Miss a Deal Again!",
    neverMiss: 'Never miss a coupon with our free app!',
    loadMoreDeals: 'Load More Deals',
    loadMoreCoupons: 'Load More Coupons',
    loadMoreStores: 'Load More Stores',
    search: 'Search at Piggy',
    nothingFound: 'Nothing found',
    deals: 'Deals',
    revealCoupon: 'Reveal Coupon',
    newDeal: 'New Deal',
    verifiedToday: 'Verified today · XXX uses today.',
    reviews: 'reviews',
    addToChrome: 'Install Chrome Extension',
    about: 'About',
    overview: 'Overview',
  },
  coupons: {
    animateModal: {
      hangon: 'Please hang on for a second...',
      title: 'Piggy is Searching for Automatic Coupons',
      save: 'You save time and money!',
    },
    animateModal1: {
      subTitle: 'Piggy Found Automatic Coupons',
      addPiggy:
        "Don't overpay...<br/>Piggy automatically finds the best coupons.",
      btnFree: 'Get Piggy - It´s Free',
    },
    animateModal2: {
      subTitle: 'Automatically Apply Coupons & Savings Found',
      addPiggy:
        "Add Piggy's free Google Extension to apply the best savings instantly.",
      btnFree: 'Continue - It´s Free',
      animatedTitle01: 'Piggy is clipping your coupon...',
      animatedTitle02: 'Piggy is applying for cash back...',
      animatedTitle03: 'Piggy applied cash back.',
      animatedTitle04:
        'Piggy is detecting eligibility for automatic coupons...',
    },

    shopBy: {
      couponSales: 'Coupon & Sales',
      browseByStore: 'Browse by Store',
      newCoupon: 'New Coupon',
      getCoupon: 'Get Coupon',
      exp: 'Exp. 03/21/2019',
      favorite: 'Favorite',
      share: 'Share',
      success: 'Success',
      freeShipping: 'Free Shipping',
      freeGift: 'Free Gift',
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
        '- indicates the maximum cash back, reward, or discount a user may earn. Some items may pay lower cash back and some exclusions may exist. Not all stores pay cashback. Cash back not combinable with outside coupons or offers. Please view Terms or individual store profiles for more info.',
    },
    controls: {
      allDeals: 'All Deals',
      onlyCoupons: 'Only Coupons',
      favoriteStores: 'Favorite Stores',
    },
    type: {
      free: 'Free',
      shipping: 'Shipping',
      coupon: 'Coupon',
      code: 'Code',
      deal: 'Deal',
    },
    buttons: {
      viewCoupon: 'View Coupon',
      viewDeal: 'Get This Deal',
      tooltip: 'Click to shop. Use this code at checkout to save!',
    },
    todaysFeatureCoupon: "Today's Featured Coupon From {{storeName}}",
    upToCashback: '+ up to {{discount}} Cash Back',
    plusCashBack: '+{{discount}} Cash Back',
    noCouponsFound: 'No Coupons Found',
    noFeaturedCouponsFound: 'No Featured Coupons Found',
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
                Piggy appears at checkout and automatically applies the best coupon.`,
      couponAbout: 'We find the {{title}} coupons, you just shop!',
      button: 'Continue',
    },
    installExtension: {
      action: 'Add to Chrome',
      step1: 'Step 1',
      step2: 'Step 2',
      step1text: 'Click the "Add to Chrome" Button',
      step2text: 'Then click "Add extension"',
    },
    freeShipping: 'Free Shipping',
    cashBack: 'Cash Back',
    currentStoreTitle: 'Coupon - {{discount}} Off',
    otherStoreTitle: '{{store_name}} Coupon - {{discount}} Off',
    expiry_date: 'Expiry date',
  },
  cashbackStores: {
    shopBy: {
      couponSales: 'Coupon & Sales',
      browseByStore: 'Browse by Store',
      viewSales: 'View sales and coupon codes',
      instantSaving: 'Instant Cash back',
      shopNow: 'Shop Now',
      browseStore: 'Browse Store Coupons and Popular Cash Back Stores',
      findAmazing: 'Find amazing savings, coupon and Automatic Cash Back!',
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
    addSaving: 'Need a Coupon?',
    instantlyApplyAll:
      'Instantly apply coupons and cash back in a single click with Piggy’s app.',
    activateSavings: 'Continue',
    limitedOffer: 'Limited Offer',
    piggyBonus: 'Piggy Bonus',
  },
  storeCoupons: {
    cashBackCategories: 'Cash Back Categories',
    viewLatestCoupons:
      'View the latest Online Coupons for {{storeName}} below! Never miss a {{ storeName }} coupon or Cash Back opportunities from any of our 3,000 other stores with our Free Mobile App and Browser app! Any of {{ storeName }} online coupons can be combined with Free, Automatic Rebates.Up to 3.0% Cash Back! Only from Piggy!Any of these {{ storeName }} coupon codes and promotions can be combined with our Automatic Cash Back at {{ storeName }}',
    returnPolicy: 'Return Policy',
    shipping: 'Shipping',
    popularDiscountCode: 'Top {{storeName}} Coupons',
    voucherCodeDescription: 'Offer Description',
    discount: 'Coupon Code',
    expire: 'Expiration Date',
    secrets: 'Additional Information',
    codes: 'Coupon Codes',
    codesAndDeals: '{{storeName}} Coupons, Promo Codes & Deals',
    followStore: 'Follow Store',
    neverOverlay: 'Never Overpay Again',
    automaticallyAddAll:
      "Automatically add all active coupons to your order with Piggy's browser extension. When you get to checkout, Piggy will find coupons and cash back at {{storeName}} and more.",
    automaticCoupons: 'Automatic Coupons',
    priceCheck: 'Price Check',
    secretRates: 'Secret Rates and Deals',
    noCouponsAndDeal:
      'No Coupons or Deals found for {{storeName}}. Take a look at our top offers and deals below.',
    applyAllCouponsWithNumber:
      'Apply All {{couponsNumber}} Coupons Using Piggy Extension',
    applyAllCoupons: 'Apply All Coupons Using Piggy Extension',
    counterList: {
      totalCoupons: 'Total Coupons',
      averageSavings: 'Average Savings',
      totalSavings: 'Total Savings',
      totalStoreSaves: 'Total Store Saves',
      totalCouponsUses: 'Total Coupon Uses',
    },
    offersMenu: {
      browse: 'Browse {{storeName}}',
      coupons: 'Coupons',
      deals: 'Deals',
      cashback: 'Cashback',
      overview: 'Overview',
      faqs: 'FAQs',
    },
    faqsSections: {
      question1: 'How can I get {{storeName}} coupons?',
      answer1:
        'Don’t worry we did all the hard work for you! Once you’ve downloaded the <a href={{chromeLink}} target="_blank" rel="noopener noreferrer">Piggy Chrome Extension</a> just shop on {{storeName}}’s website and add to your cart like you normally do. Then before you check out click the Piggy icon in your browser to apply our best {{storeName}} coupons to your cart!',
      question2: 'Are there any {{storeName}} coupons?',
      answer2: {
        subAnswer1: 'Yes! There are {{couponCount}} {{storeName}} coupons.',
        subAnswer1_only: 'Yes! There is 1 {{storeName}} coupon.',
        subAnswer2:
          'Not yet! But we’re working on adding more {{storeName}} coupons soon.',
      },
      question3: 'How many {{storeName}} coupons are there?',
      answer3:
        '{{storeName}} has {{couponCount}} coupons available on Piggy right now.',
      answer3_only: '{{storeName}} has 1 coupon available on Piggy right now.',
      question4: 'How can I save money at {{storeName}}?',
      answer4:
        'Be sure you have the <a href={{chromeLink}} target="_blank" rel="noopener noreferrer">Piggy Extension</a> downloaded, and then shop on {{storeName}}’s website like you usually would. Once  your cart is full, just click on the Piggy icon and we’ll apply all the eligible {{storeName}} coupons straight to your shopping cart!',
      question5: 'How to find the best deal at {{storeName}}?',
      answer5:
        'Just browse {{storeName}} deals on Piggy to find the best deal!',
      question6: 'What is the average savings with {{storeName}} coupons?',
      answer6:
        '{{storeName}}’s average savings for a Piggy User is {{averageSaving}}.',
      question7: 'How many deals does {{storeName}} have?',
      answer7: {
        subAnswer1: 'There are {{dealsCount}} deals available right now.',
        subAnswer1_only: 'There is 1 deal available right now.',
        subAnswer2:
          'There aren’t any {{storeName}} deals available right now, but we’re working on it.',
      },
    },
    noCoupons:
      'No Coupons found for {{storeName}}. Take a look at our top coupons below.',
    noDeals:
      'No Deals found for {{storeName}}. Take a look at our top offers and deals below.',
    noCashback: 'No Cashback found for {{storeName}}',
    filterByCategory: 'Filter By Category',
    clear: 'Clear',
    editFilter: 'Edit Filters',
    apply: 'Apply',
    categories: 'Categories',
    hide: 'Hide',
    show: 'Show more',
    ourCouponExperts: {
      title:
        'Our coupon experts literally work around the clock (Three shifts, 365 days a year)',
      addedToday: 'Added today',
      addedYesterday: 'Added yesterday',
      addedThisWeek: 'Added this week',
      addedThisMonth: 'Added this month',
    },
    sortPromoCodesBy: 'Sort {{storeName}} Promo Codes by',
    codesFilter: {
      trending: 'Trending',
      expiration: 'Expiring Soon',
      recent: 'Recently Added',
    },
    terms: 'Terms',
    getBestPrice: 'Get the Best Price',
    alertAutomatically:
      'Piggy will automatically alert you of the best price at {{ storeName }}. You can also track the price history on your items and get alerts if the price drops.',
  },
  sitemap: {
    meta: {
      title: 'Popular Coupons & Deals by Store | Piggy Sitemap',
      description:
        'Instantly find coupons, codes, cash back offers and deals at your favorite stores with Piggy.',
    },
    popular_stores: 'Browse Most Popular Coupons by Store',
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
      favorites: 'Favorites',
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
    shopBuild: 'Shop Build with 3.0% Cash Back',
    returnPolicy: 'Return Policy',
    returnItems30days:
      'You may initiate a return for an item(s) within 30 days of receipt for a refund. Returns requested between 31 - 60 days after receipt will only qualify for store credit. Returns outside of our 30 to 60 day General Return policy will not be accepted. Refunds will be applied to your account (minus return shipping) once the item has been received and inspected through our warehouse.',
    threePercentCashBack: 'Plus get 3.0% Cash Back from Build!',
    otherPopularStores: 'Other Popular Stores',
    indicatesMaximumCashBack:
      '- indicates the maximum cash back, reward, or discount a user may earn. Some items may pay lower cash back and some exclusions may exist. Not all stores pay cashback. Cash back not combinable with outside coupons or offers. Please view Terms or individual store profiles for more info.',
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
      aboutCashBack: 'About Cash Back',
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
    featuredCashBack: 'Featured Cash Back Deals',
    gtdn: 'Get This Deal Now',
    plusCashback: 'Plus {{cashback}} Cash Back',
    discover: 'Discover deals by category:',
    all: 'All',
    was: 'Was',
    now: 'Now',
    hero: {
      title: 'Piggy is the easiest way to save money!',
      text: {
        first:
          'Add Piggy today for automatic coupons up to 70% off at over 6,000 stores!',
        second:
          'Piggy is a free Chrome extension that automatically adds coupons, checks prices and offers cash back when you shop online.',
      },
      activate_extension: `<strong>Add to {{browser}}</strong> It's free!`,
      number_users: '1,000,000 users',
    },
    howItWorks: {
      title: `How It Works`,
      subHeader1: '2 Click Install',
      subText1: 'Click "Add to Chrome" then click "Add extension" to install.',
      subText1Link: `Go to Google Chrome's Web Store.`,
      subHeader2: 'You just shop',
      subText2: `We'll find and apply every coupon on the internet and you'll earn up to 20% cash back at thousands of stores.`,
      subHeader3: 'Save Instantly',
      subText3:
        'Not only does Piggy apply the coupon with the most savings, Piggy also gets you unpublished rates at hotels.',
      buttonAll: 'Continue',
    },
    worksWithStores: 'Piggy works with over 6,000 stores',
    worksWithStoresInfo: `Did you know Piggy's users save an average of $24 each time they shop online using Piggy?<br/>
      That's because Piggy works with over 6,000 stores. Everything from clothes and pizza to booking a hotel.`,
    worksWithStoresTop: `{{today}}'s Top Visited Stores:`,
    worksWithStoresActivate: 'Activate Free Coupons & Cash back',
    quotes: {
      title: `What's being said about Piggy`,
      text00: '“Piggy is one of the best programs out there“',
      name00: 'Time Magazine',
      text01: '“This is amazingly simple to use.“',
      name01: 'Thomas P.',
      text02:
        '“Really....this is the most useful extension that I have installed in my computer. Thanks for your help to save money.”',
      name02: 'Joel G.',
      text03:
        '“I really like this because im not tech savvy so this automatic pop up is great for people like me”',
      name03: 'Metrell M.',
      text04:
        '“The first time I used it I was scared that I had put something in my computer that I might regret. Piggy was the best thing that could of happened to me. Piggy started saving me money on almost every thing I purchased on line. Thanks Piggy!“',
      name04: 'Beverly B.',
      text05:
        '“Just need to click on code and it automatically is subtracted from my total. What could be any easier?”',
      name05: 'Angelika L.',
      text06:
        '“Love it! Do not have to go around finding discount codes. It automatically comes up when you are shopping online. Very simple”',
      name06: 'Tonya T.',
    },
    page: {
      title: 'Coupons, Promo Codes, Deals, & Cash Back | Piggy',
      description:
        'Browse coupons, promo codes, and cash back deals now. Start saving money and earning cash back online shopping with the Piggy Chrome Extension!',
      h1: 'Coupons, Promo Codes, Deals, & Cash Back',
    },
  },
  user_review: {
    page: {
      title: 'User Reviews & Ratings | Piggy',
      description: `Looking for real Piggy reviews from real users? Don't just take our word for it. Find out what users are saying about Piggy’s money saving power for yourself.`,
    },
    hero: {
      title: 'Over 47,000 users reviewed & rated piggy with 5 stars.',
      content: `Are you looking for real reviews from real users? Don't take our word for it. Find out what users are saying about Piggy right now on Google's Chrome Web Store.`,
      contentLink: `Click below to view all of Piggy's Reviews.`,
      btn: 'View reviews',
    },
    firstblock: {
      name: 'Gloria Stevens',
      description: 'Savings as Easy as 1, 2, 3!',
      content:
        'Savings are literally as easy as 1 click, and 1 second of your time. Make sure to leave us a review when we save you money!',
    },
    secondblock: {
      name: 'Mark Harrington',
      description: 'Piggy found me a better price on Amazon',
      content:
        'Piggy finds you the best price when you shop on Amazon. Never miss a deal again with Piggy!',
    },
    review: {
      btn: `+ Add Extension to Chrome`,
      text00:
        'I love Piggy. I  Do not have to go around finding discount codes. It automatically comes up when you are shopping online. So convenient.',
      name00: 'Jess C',
      text01:
        'Piggy is Great !!! I love that Piggy automatically finds coupon codes and savings with just a click within your same shopping site. I love the convenience. Thank you',
      name01: 'Tj Jjay',
      text02:
        'Piggy is always there to make the shopping experience great, love it and thanks for all the savings, Piggy helps me save so much money, Im so grateful',
      name02: 'Gigi Castillero',
      text03: `So easy to use and it saves me money. If you're not using Piggy, you're missing out.`,
      name03: 'Carol Kuzniar',
      text04:
        'Really....this is the most useful extension that I have installed in my computer. Thanks for your help to save money.',
      name04: 'Joel Gorrín Monzón',
      text05:
        'Just need to click on code and it automatically is subtracted from my total.  What could be any easier?',
      name05: 'Michael Snyder',
      rate: 'Review',
    },
  },
  mortgage: {
    lender: {
      view_rate: 'View Rates',
      best_overall: 'Best Overall',
    },
    lender_found: 'We have found lenders in your area',
    view_rate: 'View My Rates',
    modal: {
      text:
        'By Clicking on the above button, I hereby consent, acknowledge and agree to the Piggy privacy policy and agree to receive notices and other communication electronically. I consent to receive email, text messages from relevant marketing and lending parties on behalf of Piggy and its participating lenders or authorized third parties, and that they may contact me at the telephone number provided here, including my wireless number, if applicable, even if that telephone number is on a corporate, state, or national Do Not Call Registry. I understand that I can elect to not receive such calls or messages at any time, and that consent is not a condition of purchase. You agree that we can share your personal data with third parties, such as our mortgage partners, service providers and other affiliates, and that we can use this data for marketing and analytics, and to make your experience easier.',
    },
    government_announces:
      'Government Announces FHA Refinancing to Get Less Expensive',
    fha_text:
      'FHA to reduce annual mortgage insurance premiums by $900 per year for the average first-time homebuyer. Mortgage insurance savings applies  for new home purchase or existing home refinance FHA loans. More than 800,000 FHA borrowers are projected to take advantage of these lower rates this year. Lowered premiums will create opportunities for 250,000 new homeowners to purchase a home in the next 3 years.',
  },

  price_tracker: {
    extend: 'Price Watch Successfully Extended for 30 Days More',
    extend_done: 'Oops, Something went wrong...',
    extend_try: 'Please try again later.',

    unsubscribe_title:
      'You are no longer subscribed for email notifications on this product price tracking.',
    unsubscribe_title_all:
      "You won't receive price tracking email notifications on these products anymore.",

    delete_title: 'Your price tracker for this product is permanently deleted.',
    delete_title_all:
      'You are no longer tracking the price of any of these products ↓',

    done_unsubscribe:
      "You've already unsubscribed for mail notification on this product price track.",
    done_unsubscribe_all:
      "You've already deleted the price tracker for these products.",

    done_delete: "You've already deleted the price tracker for this product.",
    done_delete_all:
      "You've already deleted the price tracker for these products.",

    dismiss: 'Dismiss',
  },

  country_names: {
    us: 'United States',
    uk: 'United Kingdom',
    de: 'Germany',
    fr: 'France',
  },
};
