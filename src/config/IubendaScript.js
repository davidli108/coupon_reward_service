// @flow
export const renderIubendaScripts = () => {
  const domain = document.location.hostname.split('.');
  const location = domain[domain.length - 1];
  const iubendaConfig = document.createElement('script');
  const languageMap = {
    fr: 'fr',
    de: 'de',
  };
  const cookiePolicyId = {
    de: 62071698,
    fr: 89416678,
    en: 22654027,
  };

  iubendaConfig.type = 'text/javascript';
  iubendaConfig.innerHTML = `
    var _iub = _iub || [];
    _iub.csConfiguration = {
      lang: '${languageMap[location] || 'en'}',
      siteId: 1297147,
      cookiePolicyId: ${cookiePolicyId[location] || 22654027},
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

  document.body && document.body.appendChild(iubendaConfig);
  document.body && document.body.appendChild(scriptUrl);
};
