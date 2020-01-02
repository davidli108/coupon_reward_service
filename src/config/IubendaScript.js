export const renderIubendaScripts = () => {
  const iubendaConfig = document.createElement('script');
  iubendaConfig.type = 'text/javascript';
  iubendaConfig.innerHTML = `
    var _iub = _iub || [];
    _iub.csConfiguration = {
      lang: 'en',
      siteId: 1297147,
      cookiePolicyId: 22654027,
      consentOnScroll: false,
      banner: {
        slideDown: false,
        applyStyles: false,
        textColor: 'white',
        backgroundColor: 'black'
      }
    };
  `;

  const scriptUrl = document.createElement('script');
  scriptUrl.type = 'text/javascript';
  scriptUrl.async = true;
  scriptUrl.src = '//cdn.iubenda.com/cs/stable/iubenda_cs.js';

  document.body.appendChild(iubendaConfig);
  document.body.appendChild(scriptUrl);
};
