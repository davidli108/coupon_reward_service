// @flow
import React from 'react';
import {withTranslation} from 'react-i18next';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {type PriceTrackerProductType} from './PriceTrackerProduct.type';
import styles from './PriceTrackerProduct.styles';

const PriceTrackerProduct = ({
  t,
  match,
  priceTrackerProduct,
}: PriceTrackerProductType) => {

  const { token } = match.params;
  const {button_text, new_price, old_price, product_desc, product_image, product_name, url_redirect} = priceTrackerProduct;

  return (
    <>
      {(token
          ? (
              <PriceTrackerProduct.Wrapper>
                <PriceTrackerProduct.BrandHeaderBox>
                  <PriceTrackerProduct.BrandHeaderBoxImg>
                    <img src={product_image} alt="product" />
                  </PriceTrackerProduct.BrandHeaderBoxImg>
                  <PriceTrackerProduct.BrandHeaderBoxContent>
                    <PriceTrackerProduct.BrandHeaderBoxContentBoxLabel>
                      {product_name}
                    </PriceTrackerProduct.BrandHeaderBoxContentBoxLabel>
                    <PriceTrackerProduct.BrandHeaderPrice >
                      <PriceTrackerProduct.OldPrice isZero={parseInt(old_price.replace(/\D/g, "")) > 0}>{old_price}</PriceTrackerProduct.OldPrice>
                      <PriceTrackerProduct.NewPrice >{new_price}</PriceTrackerProduct.NewPrice>
                    </PriceTrackerProduct.BrandHeaderPrice>
                    <PriceTrackerProduct.BrandHeaderDescription>{product_desc}
                    </PriceTrackerProduct.BrandHeaderDescription>
                    <PriceTrackerProduct.a href={url_redirect}>
                      <PriceTrackerProduct.Button >
                        {button_text}
                      </PriceTrackerProduct.Button>
                    </PriceTrackerProduct.a>
                  </PriceTrackerProduct.BrandHeaderBoxContent>
                </PriceTrackerProduct.BrandHeaderBox>
              </PriceTrackerProduct.Wrapper>
            )
          :  <></>)
      }
    </>
  )
};

styles(PriceTrackerProduct);

const mapDispatchToProps = {
};

export default compose(
  connect(null, mapDispatchToProps),
  withTranslation()
)(PriceTrackerProduct);
