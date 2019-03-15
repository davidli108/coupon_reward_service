//@flow
import * as R from 'ramda';
import * as React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {
  MdSearch,
  MdFavorite,
  MdFavoriteBorder,
  MdKeyboardArrowUp,
  MdStar,
  MdStarBorder,
  MdStarHalf,
} from 'react-icons/md';

type Content = {
  title?: string,
  body: string,
  bonus?: string,
};

type AdditionalInfo = {
  title: string,
  content: Content[],
};

type Extension = {
  reviewsCount: string,
  stars: number,
};

type StoreInformation = {
  title?: string,
  body?: string,
};

type Store = {
  name: string,
  isFollowed: boolean,
  info: StoreInformation[],
};

type Offer = {
  title: string,
  value?: string,
  expDate?: string,
  discountPercent?: number,
  cashbackPercent?: number,
  usesToday?: number,
  isCoupon?: boolean,
  isDeal?: boolean,
  isBonus?: boolean,
  isLimited?: boolean,
  isNew?: boolean,
};

type StorePageProps = {
  store: Store,
  offers: Offer[],
  extension: Extension,
  additionalInfo: AdditionalInfo[],
};

const getCoupons = offers => offers.filter(x => x.isCoupon);
const getDeals = offers => offers.filter(x => x.isDeal);
const getHighestCashback = offers =>
  offers.reduce((acc, val) => {
    if (val.cashbackPercent && val.cashbackPercent > acc) {
      acc = val.cashbackPercent;
    }
    return acc;
  }, 0);

const renderStarsReview = rating => {
  const fullStarsCount = R.repeat('full', Math.floor(rating));
  const halfStarsCount = R.repeat('half', Math.ceil(rating % 1));
  const emptyStarsCount = R.repeat(
    'empty',
    5 - (fullStarsCount.length + halfStarsCount.length),
  );

  if (rating > 5) {
    return (
      <>
        {R.repeat('empty', 5).map((_, index) => (
          <MdStar key={`empty_${index}`} />
        ))}
      </>
    );
  }

  // since i need at least one source of dynamic information to create keys
  // and we are not allowed to use for loops - i looped it like this

  return (
    <>
      {fullStarsCount.map((x, index) => (
        <MdStar key={`${x}_${index}`} />
      ))}
      {halfStarsCount.map((x, index) => (
        <MdStarHalf key={`${x}_${index}`} />
      ))}
      {emptyStarsCount.map((x, index) => (
        <MdStarBorder key={`${x}_${index}`} />
      ))}
    </>
  );
};

const formatNumberByThousands = value => {
  const thousands = Math.floor(Number(value) / 1000);
  const rest = Number(value) % 1000;
  const shortRest = String(rest).split('')[0];

  if (thousands === 0) {
    return value;
  }

  return `${thousands}.${shortRest}k`;
};

const formatWithZeroPadding = value => String(value).padStart(2, '0');

const renderOffers = offers =>
  offers.map(
    ({
      title,
      expDate,
      discountPercent,
      cashbackPercent,
      usesToday,
      isCoupon,
      isDeal,
      isNew,
      isBonus,
      isLimited,
      value,
    }) => (
      <React.Fragment key={`${title}_${usesToday || ''}`}>
        {/* temp key, i guess server will return ids*/}
        {(isDeal || isCoupon) && (
          <StorePage.Offer>
            {isNew && (
              <StorePage.NewDeal>
                <p>New Deal</p>
              </StorePage.NewDeal>
            )}
            <StorePage.Content>
              <p>
                <span>{formatWithZeroPadding(discountPercent)}%</span>
                <span>O f f</span>
              </p>
              <p>{title}</p>
            </StorePage.Content>
            <StorePage.ViewDeal>
              {isDeal && (
                <StorePage.ViewDealButton
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Deal
                </StorePage.ViewDealButton>
              )}
              {isCoupon && (
                <StorePage.RevealCouponButton
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reveal Coupon
                </StorePage.RevealCouponButton>
              )}
              <p>Exp. {expDate}</p>
            </StorePage.ViewDeal>
            <StorePage.Info>
              <p>
                Verified today · {formatNumberByThousands(usesToday)} uses
                today.
              </p>
              <p>+{cashbackPercent}% Cash Back</p>
            </StorePage.Info>
          </StorePage.Offer>
        )}
        {isBonus && (
          <StorePage.PiggyOffer>
            <StorePage.PiggyBonus>PiggyBonus</StorePage.PiggyBonus>
            <StorePage.PiggyContent>
              <h2>{value}</h2>
              <p>{title}</p>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Piggy
              </a>
            </StorePage.PiggyContent>
          </StorePage.PiggyOffer>
        )}
      </React.Fragment>
    ),
  );

const renderAdditionalInfo = info => (
  <StorePage.AdditionalInfoWrapper>
    {info.map(section => (
      <StorePage.AdditionalInfoSection key={`section_${section.title}`}>
        <h2>{section.title}</h2>
        {section.content.map(content => (
          <StorePage.AdditionalInfoContent
            key={`section_content_${content.title || 'title'}_${content.bonus ||
              'bonus'}`}
          >
            {content.title && <h3>{content.title}</h3>}
            {content.body && <p>{content.body}</p>}
            {content.bonus && <h4>{content.bonus}</h4>}
          </StorePage.AdditionalInfoContent>
        ))}
      </StorePage.AdditionalInfoSection>
    ))}
  </StorePage.AdditionalInfoWrapper>
);

const renderStoreInformation = info => (
  <StorePage.StoreInformationWrapper>
    {info.map(section => (
      <StorePage.StoreInformationSection
        key={`store_information_${section.title || 'title'}`}
      >
        <h2>{section.title}</h2>
        <p>{section.body}</p>
      </StorePage.StoreInformationSection>
    ))}
  </StorePage.StoreInformationWrapper>
);

const StorePage = ({
  store,
  offers,
  extension,
  additionalInfo,
}: StorePageProps) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [isStoreFollowed, setStoreFollowed] = React.useState(store.isFollowed);
  const [isCovered, setCovered] = React.useState(true);

  const handleSearchChange = ({ target: { value } }) => setSearchValue(value);
  const handleStoreFollowToggler = () => setStoreFollowed(!isStoreFollowed);
  const handleCoveredToggler = () => setCovered(!isCovered);

  return (
    <StorePage.Wrapper>
      <StorePage.SearchBar>
        <input
          type="text"
          name="searchBar"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search Stores"
        />
        <MdSearch />
      </StorePage.SearchBar>
      <StorePage.Brand>
        <StorePage.BrandImageWrapper>
          <img
            src="http://www.legacypowerwashing.com/wp-content/uploads/2015/11/macys-logo-fix.png"
            alt="brand-logo"
          />
        </StorePage.BrandImageWrapper>
        <StorePage.WrapFlexBox>
          <StorePage.BrandName>
            {store.name}'s Coupon Codes & Deals
          </StorePage.BrandName>
          <StorePage.NoWrapFlexBox>
            <StorePage.OffersStats>
              <span>{getCoupons(offers).length} Coupons</span>
              <span>-</span>
              <span>{getDeals(offers).length} Deals</span>
              <span>-</span>
              <span>Up to {getHighestCashback(offers)}% Cash Back </span>
            </StorePage.OffersStats>
            <StorePage.FollowStoreWrapper isStoreFollowed={isStoreFollowed}>
              <div onClick={handleStoreFollowToggler}>
                {isStoreFollowed ? <MdFavorite /> : <MdFavoriteBorder />}
                <span>Follow Store</span>
              </div>
            </StorePage.FollowStoreWrapper>
          </StorePage.NoWrapFlexBox>

          <StorePage.NoWrapFlexBoxWithBorder>
            <div>
              <StorePage.Cover>
                <StorePage.NeverOverpay isCovered={isCovered}>
                  <h2>Never Overpay Again at {store.name}'s</h2>
                  <p>
                    Automatically add all active coupons to your order with
                    Piggy's browser extension. When you get to checkout, Piggy
                    will find coupons and cash back at Macy's and more.
                  </p>
                </StorePage.NeverOverpay>
                <span onClick={handleCoveredToggler}>
                  {isCovered ? 'See More' : <MdKeyboardArrowUp />}
                </span>
              </StorePage.Cover>
              <StorePage.Advantages>
                <span>Automatic Coupons</span>
                <span>-</span>
                <span>Price Check</span>
                <span>-</span>
                <span>Secret Rates and Deals</span>
              </StorePage.Advantages>
            </div>
            <StorePage.PiggyExtAdvertisement>
              <StorePage.Reviews>
                <div>{renderStarsReview(extension.stars)}</div>
                <span>{extension.reviewsCount} reviews</span>
              </StorePage.Reviews>
              <StorePage.AddExtensionButton>
                Add to Chrome
              </StorePage.AddExtensionButton>
            </StorePage.PiggyExtAdvertisement>
          </StorePage.NoWrapFlexBoxWithBorder>
        </StorePage.WrapFlexBox>
      </StorePage.Brand>
      <StorePage.DesktopContent>
        <StorePage.ColumnNoWrapFlexBox order="2">
          {renderOffers(offers)}
        </StorePage.ColumnNoWrapFlexBox>
        <StorePage.ColumnNoWrapFlexBox order="1">
          {renderAdditionalInfo(additionalInfo)}
        </StorePage.ColumnNoWrapFlexBox>
      </StorePage.DesktopContent>
      {renderStoreInformation(store.info)}
    </StorePage.Wrapper>
  );
};

StorePage.Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;

  padding: 15px;

  ${breakpoint('xl')`
    width: 80%;
    margin: 0 auto;

    flex-flow: row wrap;
  `}
`;

StorePage.SearchBar = styled.div`
  position: relative;
  width: 100%;

  padding-top: 15px;

  ${breakpoint('xl')`
    width: 457px;
    margin-right: calc(100% - 457px);
    margin-bottom: 25px;
  `}

  > input {
    background: #fff;
    border: 1px solid #dadde2;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    font-size: 18px;
    padding: 11px 20px;
    outline: none;

    ::placeholder {
      color: #adb8c0;
    }
  }

  > svg {
    position: absolute;
    top: 17px;
    right: 15px;
    padding-top: 3px;
    color: #d2d2d2;
    width: 30px;
    height: 30px;
    transition: 0.2s;
    cursor: pointer;

    :hover {
      filter: brightness(35%);
    }
  }
`;

StorePage.Brand = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint('xl')`
    flex-flow: row nowrap;

    height: auto;
    width: 100%;
  `}

  padding-top: 15px;
`;

StorePage.BrandImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 150px;

  border: 1px solid #dadde2;
  border-radius: 5px;

  ${breakpoint('xl')`
    width: 270px;
    height: 270px;
  `}

  > img {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;

    ${breakpoint('xl')`
      width: 140px;
      height: 140px;
    `}
  }
`;

// ${breakpoint('xl')`
// `}

StorePage.BrandName = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #374b5a;

  text-align: center;
  padding-top: 15px;

  ${breakpoint('xl')`
    padding: 0 0 0  30px;
    width: 100%;

    text-align: start;
    line-height: 46px;
    font-size: 39px;
  `}
`;

StorePage.Reviews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 3px;

  ${breakpoint('xl')`
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 100%;
    padding-top: 10px;
  `}

  > div {
    display: flex;
    color: #00cbe9;
  }

  > span {
    padding-top: 15px;
    color: #c2c2c2;
    font-size: 13px;
    ${breakpoint('xl')`
      padding: 0 0 0 10px;
    `}
  }
`;

StorePage.OffersStats = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 15px 0 25px 0;

  ${breakpoint('xl')`
    width: 100%;
    max-width: 500px;
    padding: 0 0 5px 30px;
  `}

  & > span {
    font-weight: bold;
    font-size: 10px;
    color: #62707b;

    ${breakpoint('xl')`
      font-size: 16px;
    `}

    &:first-child {
      margin-left: 5px;
    }

    &:last-child {
      margin-right: 5px;
    }
  }
`;

StorePage.FollowStoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 25px 0 10px 0;

  ${breakpoint('xl')`
    padding: 0 0 0 30px;
  `}

  > div {
    display: flex;
    align-items: center;

    width: fit-content;
    height: auto;

    cursor: pointer;

    > svg {
      width: 22px;
      height: 22px;
      color: ${({ isStoreFollowed }) => (isStoreFollowed ? 'red' : '#d2d2d2')};
    }

    > span {
      padding-left: 5px;
      font-size: 14px;
      color: ${({ isStoreFollowed }) =>
        isStoreFollowed ? 'black' : '#b1b1b1'};
    }
  }
`;

StorePage.Cover = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    ${breakpoint('xl')`
      display: none;
    `}

    text-align: center;
    font-weight: bold;
    line-height: 20px;
    margin-top: 5px;
    font-size: 13px;
    color: #899197;
    cursor: pointer;
  }
`;

StorePage.Advantages = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 15px 0 25px 0;


  ${breakpoint('xl')`
      max-width: 500px;
  `}

  & > span {
    font-weight: bold;
    font-size: 10px;
    color: #62707b;

    ${breakpoint('xl')`
      font-size: 13px;
      max-width: 300px;
    `}

    &:first-child {
      margin-left: 5px;
    }

    &:last-child {
      margin-right: 5px;
    }
`;

StorePage.PiggyExtAdvertisement = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;

  width: 100%;
  padding-top: 25px;

  ${breakpoint('xl')`
    width: 250px;

    flex-flow: column-reverse nowrap;
    align-items: center;


  `}
`;

StorePage.NeverOverpay = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: ${({ isCovered }) => (isCovered ? '87px' : 'auto')};

  overflow: hidden;

  ${breakpoint('xl')`
    height: auto;
  `}

  > h2 {
    position: relative;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    color: #374b5a;
    ${breakpoint('xl')`
      text-align: start;
    `}

    padding-top: 15px;

    ${({ isCovered }) =>
      isCovered
        ? `
      &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 55px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.496207) 0%, #fff 100%);
      }
    `
        : ''}

    &:after {
      ${breakpoint('xl')`
        display: none;
      `}
    }
  }

  > p {
    padding: 15px;
    font-weight: 500;
    font-size: 13px;
    color: #899197;
    line-height: 20px;

    ${breakpoint('xl')`
      max-width: 600px;
      padding: 15px 0;
    `}
  }
`;

StorePage.NeverOverpayWithBorder = styled.div;

StorePage.AddExtensionButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #7ed321;
  border-radius: 4px;

  font-weight: bold;
  font-size: 18px;
  color: #7ed321;

  margin-left: auto;
  padding: 17px 13px;

  cursor: pointer;

  ${breakpoint('xl')`
    width: calc(100% - 26px);
  `}
`;

StorePage.Offer = styled.div`
  display: flex;
  flex-flow: row wrap;

  background: #fff;
  border: 1px solid #dadde2;
  border-radius: 5px;

  margin-top: 25px;

  ${breakpoint('xl')`
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `}
`;

StorePage.NewDeal = styled.div`
  display: flex;

  width: 100%;
  height: 20px;
  padding: 2px 0 0 5px;

  > p {
    color: #00cbe9;
    font-size: 13px;
    font-weight: bold;
  }
`;

StorePage.PiggyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 10px;

  > h2 {
    font-weight: bold;
    line-height: 40px;
    font-size: 34px;
    text-align: center;
    color: #62707b;
  }

  > p {
    width: 80%;
    text-align: center;

    line-height: 20px;
    font-size: 13px;
    color: #62707b;
  }

  > a {
    background: #fff;
    border: 2px solid #7ed321;
    border-radius: 5px;

    text-align: center;
    width: 80%;
    margin-top: 15px;
    max-width: 330px;
    padding: 10px 0;

    font-weight: bold;
    line-height: 20px;
    font-size: 17px;
    letter-spacing: -0.188889px;

    color: #7ed321;
  }
`;

StorePage.Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  margin-bottom: 25px;

  ${breakpoint('xl')`
    width: 100%;
      flex-flow: row nowrap;
      align-items: center;
      margin-top: -60px;
      margin-right: 150px;
    `}

  > p {
    width: 100%;
    text-align: center;
    font-weight: bold;
    line-height: 23px;
    font-size: 13px;

    color: #c2c2c2;
    ${breakpoint('xl')`
      width: fit-content;
      margin: 0 15px;
    `}
  }
`;

StorePage.ViewDeal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  ${breakpoint('xl')`
    width: 254px;
    margin-right: 17px;
  `}

  > p {
    font-weight: bold;
    line-height: 23px;
    font-size: 13px;
    color: #c2c2c2;
    margin-top: 15px;
  }
`;

StorePage.Content = styled.div`
  display: flex;

  padding: 25px;

  ${breakpoint('xl')`
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 130px;
  `}

  > p:first-child {
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-right: 15px;

    color: #7ed321;
    font-weight: bold;
    line-height: 46px;
    font-size: 39px;

    ${breakpoint('xl')`
      width: fit-content;
      margin-right: 45px;
      margin-top: -3px;
    `}

    > span {
      width: 100%;

      &:nth-child(2) {
        letter-spacing: -1.5px;
      }
    }
  }

  > p:nth-child(2) {
    line-height: 19px;
    font-size: 15px;
    letter-spacing: 0.375px;
    font-weight: bold;
    color: #374b5a;

    ${breakpoint('xl')`
      font-size: 18px;
      max-width: 400px;
    `}
  }
`;

StorePage.ViewDealButton = styled.a`
  width: 80%;
  max-width: 300px;
  padding: 15px;

  background: #00cbe9;
  border-radius: 4px;

  font-weight: bold;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;

  ${breakpoint('xl')`
    width: calc(100% - 30px);
  `}
`;

StorePage.RevealCouponButton = styled.a`
  width: 80%;
  max-width: 300px;
  padding: 15px;

  background: #00cbe9;
  border-radius: 4px;

  font-weight: bold;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.51px;
  color: #fff;

  clip-path: polygon(92% 0, 100% 49%, 100% 100%, 0 100%, 0 0);
`;

StorePage.PiggyOffer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #fff;
  border: 1px dashed #adb8c0;
  border-radius: 5px;

  margin-top: 25px;

  ${breakpoint('lg')`
    width: 100%;
  `}
`;

StorePage.PiggyBonus = styled.div`
  background: #f9fafc;
  border-radius: 5px;

  font-weight: bold;
  line-height: 15px;
  font-size: 13px;
  text-align: center;
  color: #00cbe9;
  padding: 7px;
`;

StorePage.AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;
`;

StorePage.AdditionalInfoSection = styled.section`
  display: flex;
  flex-direction: column;

  padding: 15px 0;

  :not(:last-child) {
    border-bottom: 1px solid #dadde2;
  }

  > h2 {
    font-weight: bold;
    line-height: 24px;
    font-size: 20px;
    letter-spacing: 0.5px;
    color: #899197;

    padding-bottom: 10px;
  }
`;

StorePage.AdditionalInfoContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px 0;

  > h3 {
    line-height: 21px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.45px;

    padding-bottom: 15px;

    color: #899197;
  }

  > h4 {
    font-weight: bold;
    line-height: 15px;
    font-size: 13px;

    padding-top: 15px;

    color: #899197;
  }

  > p {
    line-height: 21px;
    font-size: 16px;

    color: #b1b1b1;
  }
`;

StorePage.StoreInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #dadde2;
  border-radius: 5px;
`;

StorePage.StoreInformationSection = styled.div`
  display: flex;
  flex-direction: column;

  padding: 25px;

  > h2 {
    font-weight: bold;
    line-height: 21px;
    font-size: 18px;
    letter-spacing: 0.45px;
    color: #b1b1b1;
  }

  > p {
    line-height: 23px;
    font-size: 16px;
    letter-spacing: 0.1px;
    color: #b1b1b1;

    padding-top: 15px;
  }
`;

StorePage.NoWrapFlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('xl')`
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;

    width: 100%;
    padding: 10px 0;
  `}
`;

StorePage.NoWrapFlexBoxWithBorder = styled(StorePage.NoWrapFlexBox)`
  ${breakpoint('xl')`
      border: 1px dashed #00CBE9;
      border-radius: 5px;
      margin-left: 30px;
      padding: 8px 20px;

      align-items: center;

      height: auto;

      > * {
        padding: 0;
      }
    `}
`;

StorePage.WrapFlexBox = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${breakpoint('xl')`
    flex-flow: row wrap;
    align-items: center;

    width: calc(100% - 270px);
  `}
`;

StorePage.DesktopContent = styled(StorePage.NoWrapFlexBox)`
  ${breakpoint('xl')`
    > div:first-child {
      width: calc(100% - 300px);
    }

    > div:last-child {
      width: 280px;
    }
  `}
`;

StorePage.ColumnNoWrapFlexBox = styled.div`
  ${breakpoint('xl')`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    order: ${({ order }) => order};

    width: 100%;

  `}
`;

StorePage.defaultProps = {
  store: {
    name: 'Macy',
    isFollowed: false,
    info: [
      {
        title: 'Macy´s',
        body: `View the latest Online Coupons for Shoes below!
          Never miss a Shoes coupon or Cash Back opportunities
          from any of our 1,800 other stores with our Free Mobile App
          and Browser app! Any of Shoes's online coupons can be combined
          with Free, Automatic Rebates. Up to 7.0% Cash Back! Only from Piggy! Any of
          these Shoes coupon codes and promotions can be combined with our Automatic Cash
          Back at Shoes`,
      },
      {
        title: 'Cash Back not available:',
        body: `On email exclusive offers;
          Sales of products believed to be sold to parties reselling products offered by Macy´s;
          Use of coupons/promotional gift cards that are found outside of JoinPiggy.com or our browser App.`,
      },
    ],
  },
  offers: [
    {
      title:
        'Free Makeup Or Skin Care Gift With Any $55. This would be a second line.',
      cashbackPercent: 4,
      discountPercent: 7,
      expDate: '06/25/2019',
      usesToday: 4200,
      isDeal: true,
      isNew: true,
    },
    {
      title:
        'Free Makeup Or Skin Care Gift With Any $65. This would be a second line.',
      cashbackPercent: 25,
      discountPercent: 39,
      expDate: '01/12/2019',
      usesToday: 10,
      isDeal: true,
      isNew: false,
    },
    {
      title:
        'Free Makeup Or Skin Care Gift With Any $75. This would be a second line.',
      cashbackPercent: 8,
      discountPercent: 15,
      expDate: '06/01/2019',
      usesToday: 300,
      isCoupon: true,
      isNew: true,
    },
    {
      title:
        'Free Makeup Or Skin Care Gift With Any $85. This would be a second line.',
      cashbackPercent: 1,
      discountPercent: 1,
      expDate: '06/02/2025',
      usesToday: 1,
      isCoupon: true,
      isNew: true,
    },
    {
      title:
        'Get a $25 Bonus when you shop at Macy’s with Piggy and get gift cards.',
      value: '30 codes',
      isLimited: true,
      isBonus: true,
      isNew: true,
    },
  ],
  extension: {
    reviewsCount: '14,239',
    stars: 4.5,
  },
  specialConditions: {
    title: '',
    body: '',
  },
  additionalInfo: [
    {
      title: 'Return Policy',
      content: [
        {
          body:
            'Sign up for Free Sale Alerts and be the first to know when there is a huge discount. This way you can save up to 65%.',
          bonus: 'Plus get 7.0% Cash Back from Macy´s !',
        },
      ],
    },
    {
      title: 'Shopping Secrets',
      content: [
        {
          title: 'Sale alerts',
          body:
            'Sign up for Free Sale Alerts and be the first to know when there is a huge discount. This way you can save up to 65%.',
        },
        {
          title: '$100 Gift Certificate',
          body:
            'Every week you have the opportunity to get this certificate and you only need to enter once - they will include you in every drawing every week.',
        },
        {
          title: 'Sales Tax',
          body: 'They Handle all sale tax for orders that are in the US.',
        },
      ],
    },
    {
      title: "About Macy's",
      content: [
        {
          body: 'Free shipping on every order.',
          bonus: 'Shop Macy´s with 7.0% Cash Back',
        },
      ],
    },
  ],
};

export default StorePage;
