// @flow
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const styles = (CouponCodeTable: Object) => {
  CouponCodeTable.Wrapper = styled.div`
    overflow: auto;
  `;
  CouponCodeTable.Content = styled.table`
    width: 100%;
    ${breakpoint('xs')`
			width: 605px;
		`}

    ${breakpoint('sm')`
			width: 100%;
		`}
    th {
      font-weight: bold;
      text-align: left;
      border-bottom: 1px solid #ddd;
      padding-bottom: 16px;
    }

    td {
      border-bottom: 1px solid #ddd;
      text-align: left;
      padding: 16px 0;
    }

    tr:last-child {
      td {
        border: none;
      }
    }

    .space {
      border: none;
      width: 32px;
    }
  `;
};

export default styles;
