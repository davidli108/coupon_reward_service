// @flow
export const validateEmail = (e: Object, t: Function) => {
  const email = e.target.value;
  const { validity } = e.target;

  const pattern = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$', 'i');

  const shouldContainPattern = new RegExp('^[a-z0-9._%+-]+$', 'i');
  const shouldNotContain = new RegExp(
    "^[a-z0-9._%+-]+@([-@.'!#$%&*+-\\/=?^`{|}~]{1})$",
    'i',
  );

  if (!email) {
    e.target.setCustomValidity(t('auth.signIn.messages.emptyEmail'));
    return;
  }

  if (shouldContainPattern.test(email)) {
    e.target.setCustomValidity(
      t('auth.signIn.messages.emailShouldContain', { email }),
    );
    return;
  }

  if (shouldNotContain.test(email)) {
    const specialChar = email.replace(/^[a-z0-9._%+-]+@/, '');
    e.target.setCustomValidity(
      t('auth.signIn.messages.emailShouldNotContain', { specialChar }),
    );
    return;
  }

  if (email && !pattern.test(email)) {
    e.target.setCustomValidity(
      t('auth.signIn.messages.emailIsIncomplete', { email }),
    );
    return;
  }

  if (validity.typeMismatch) {
    const emailDomain = email.split('@').pop();
    e.target.setCustomValidity(
      t('auth.signIn.messages.emailIsInvalid', { emailDomain }),
    );
    return;
  }

  if (pattern.test(email)) {
    e.target.setCustomValidity('');
  }
};
