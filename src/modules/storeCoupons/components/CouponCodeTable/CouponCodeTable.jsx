// @flow
import React from 'react';

import type {CouponCodeTableProps} from './index';

const CouponCodeTable = ({
	t,
	couponCodeData,
}: CouponCodeTableProps) => {
	return (
		<CouponCodeTable.Wrapper>
			<CouponCodeTable.Content>
				<thead>
					<tr>
						<th>{t('storeCoupons.voucherCodeDescription')}</th>
						<th className="space"></th>
						<th>{t('storeCoupons.discount')}</th>
						<th className="space"></th>
						<th>{t('storeCoupons.expire')}</th>
					</tr>
				</thead>
				<tbody>
					{
						couponCodeData.map((row, index) => (
							<tr key={index}>
								<td>{row.offerName}</td>
								<td className="space"></td>
								<td>{row.offerCode}</td>
								<td className="space"></td>
								<td>{row.expireDate}</td>
							</tr>
						))
					}
				</tbody>
			</CouponCodeTable.Content>
		</CouponCodeTable.Wrapper>
	)
}

export default CouponCodeTable;