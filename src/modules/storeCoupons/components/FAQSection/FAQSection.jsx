// @flow
import React, { useState, useMemo } from 'react';

import type { FAQSectionProps } from './index';
import DownArrow from '../../assets/faqs_collapse_arrow_down.svg';
import UpArrow from '../../assets/faqs_collapse_arrow_up.svg';

const FAQSection = ({
	question,
	answer,
}: FAQSectionProps) => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const arrowIcon = useMemo(() => isCollapsed ? DownArrow : UpArrow, [isCollapsed]);

	return (
		<FAQSection.Wrapper>
			<FAQSection.QuestionWrapper onClick={() => setIsCollapsed(!isCollapsed)}>
				<img src={arrowIcon} alt="arrow"/>
				<FAQSection.Question>{question}</FAQSection.Question>
			</FAQSection.QuestionWrapper>
			{
				!isCollapsed ? (
					<FAQSection.Answer dangerouslySetInnerHTML={{__html: answer}}></FAQSection.Answer>
				) : null
			}
		</FAQSection.Wrapper>
	)
}

export default FAQSection;