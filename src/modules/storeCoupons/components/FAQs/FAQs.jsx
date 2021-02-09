// @flow
import React, { useMemo } from 'react';

import AppConfig from '@config/AppConfig';
import FAQSection from '../FAQSection';
import type { FAQsProps } from './index';

const FAQs = ({
	t,
	i18n,
  store,
}: FAQsProps) => {
	const storeName = useMemo(() => store.store_name, [store.store_name]);
	const averageSaving = useMemo(() => parseInt(store.store_average_savings, 10) || 0, [store.store_average_savings]);
	const couponCount = useMemo(() => parseInt(store.stores_code_count, 10) || 0, [store.stores_code_count]);
	const dealsCount = useMemo(() => parseInt(store.stores_sale_count, 10) || 0, [store.stores_sale_count]);
	const chromeLink = `${AppConfig.extension.url}?hl=${i18n.language}`;

	const QAs = [
		{
			question: t('storeCoupons.faqsSections.question1', { storeName }),
			answer: t('storeCoupons.faqsSections.answer1', { storeName, chromeLink }),
		},

		couponCount ? {
			question: t('storeCoupons.faqsSections.question2', { storeName }),
			answer: couponCount === 1
				? t('storeCoupons.faqsSections.answer2.subAnswer1_only', { storeName })
				: t('storeCoupons.faqsSections.answer2.subAnswer1', { storeName, couponCount }),
		} : null,

		couponCount ? {
			question: t('storeCoupons.faqsSections.question3', { storeName }),
			answer: couponCount === 1
				? t('storeCoupons.faqsSections.answer3_only', { storeName })
				: t('storeCoupons.faqsSections.answer3', { storeName, couponCount }),
		} : null,

		{
			question: t('storeCoupons.faqsSections.question4', { storeName }),
			answer: t('storeCoupons.faqsSections.answer4', { storeName, chromeLink }),
		},

		{
			question: t('storeCoupons.faqsSections.question5', { storeName }),
			answer: t('storeCoupons.faqsSections.answer5', { storeName }),
		},

		averageSaving ? {
			question: t('storeCoupons.faqsSections.question6', { storeName }),
			answer: t('storeCoupons.faqsSections.answer6', { storeName, averageSaving }),
		} : null,

		dealsCount ? {
			question: t('storeCoupons.faqsSections.question7', { storeName }),
			answer: dealsCount === 1
				? t('storeCoupons.faqsSections.answer7.subAnswer1_only')
				: t('storeCoupons.faqsSections.answer7.subAnswer1', { dealsCount }),
		} : null,
	];

	return (
		<FAQs.Wrapper>
			<FAQs.Title>{t('storeCoupons.offersMenu.faqs')}</FAQs.Title>
			{
				QAs.map((qa, index) => (
					qa ? <FAQSection question={qa.question} answer={qa.answer} key={index} /> : null
				))
			}
		</FAQs.Wrapper>
	)
}

export default FAQs;