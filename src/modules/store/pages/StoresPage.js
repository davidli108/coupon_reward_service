// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as R from 'ramda';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Modal from '../modal/Authentication';

import StoreSidebar from '../components/StoreSidebar';
import StoreMain from '../components/StoreMain';

import { type Store } from '../models';

import googleIcon from '../assets/googleIcon.png';
import facebookIcon from '../assets/facebookIcon.png';

import {
  setLoadMore,
  setFilter,
  setSearch,
  setFilterClear,
} from '../StoreActions';

import {
  getFilteredStores,
  getFeatured,
  getStoreFilters,
  getStoreSearch,
  getLoadState,
  getLoadToState,
  getStoresAll,
} from '../StoreReducer';

type StoresPageProps = {
  title: string,
  stores: Store[],
  storesAll: Store[],
  featured: Store[],
  filter: string,
  search: string,
  loadState: number,
  loadToState: number,
  onLoadMore: Function,
  onSetFilter: Function,
  onSetSearch: Function,
  onSetFilterClear: Function,
};

const StoresPage = ({
  title,
  stores,
  featured,
  filter,
  search,
  onLoadMore,
  loadState,
  loadToState,
  storesAll,
  onSetFilter,
  onSetSearch,
  onSetFilterClear,
}: StoresPageProps) => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(!open);
  };
  const closeModal = action => {
    setOpen(!action);
  };

  const onSearch = (search, stores) => {
    if (search === '') return false;
    return R.filter(
      ({ name }) =>
        R.includes(R.toLower(R.trim(search)), R.toLower(R.trim(name))),
      stores,
    );
  };

  const onFilterFeatured = stores =>
    R.filter(({ isFeatured }) => isFeatured === true, stores);

  return (
    <React.Fragment>
      <Helmet>
        <title>Stores</title>
        <meta
          name="description"
          content="Download Piggy's Automatic Coupons at Checkout and Never Miss a Deal Again!"
        />
        <meta
          property="og:image"
          content="//d26fg97ql61k4.cloudfront.net/img/widget-logo-blue.png"
        />
        <meta
          property="og:title"
          content="Automatic Coupons, Huge Sales, and Cash back! - Piggy"
        />
      </Helmet>

      <StoresPage.Wrapper>
        <StoresPage.Container>
          <button onClick={openModal}>click</button>
          <Modal isActive={open} closeModal={closeModal}>
            <button type="button" onClick={closeModal}>
              <span>×</span>
            </button>
            <h2>Welcome Back</h2>
            <p>Good to see you again</p>
            <a href="#!">
              <img src={facebookIcon} alt="facebook" />
              Login with Facebook
            </a>
            <a href="#!">
              <img src={googleIcon} alt="google" />
              Login with Google
            </a>
            <Modal.Or>
              <span>or</span>
            </Modal.Or>
            <Modal.Form>
              <form>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
                <button>Login with Email</button>
              </form>
              <span>
                <a href="#!">Forgot Password?</a>
              </span>
              <hr />
              <p>
                Not A Member?
                <a href="#!">Join Piggy</a>
              </p>
            </Modal.Form>
          </Modal>
          {/* <Modal isActive={open} closeModal={closeModal}>
            <button type="button" onClick={closeModal}>
              <span>×</span>
            </button>
            <h2>Register to Get <br/>Automatic Cash Back</h2>
            <p>Its that easy</p>
            <a href="#!">
              <img src={facebookIcon} alt="facebook" />
              Login with Facebook
            </a>
            <a href="#!">
              <img src={googleIcon} alt="google" />
              Login with Google
            </a>
            <Modal.Or>
              <span>or</span>
            </Modal.Or>
            <Modal.Form>
              <form>
                <input name="email" type="email" placeholder="Email Address" required/>
                <button>Join Piggy</button>
              </form>
              <span>
                By joining, I agree to be added to daily mailing list and Piggy's
                <a href="#!">terms of service</a>
              </span>
              <hr/>
              <p>
                Already A Member? <a href="#!">Login</a>
              </p>
            </Modal.Form>
          </Modal> */}
          {/* <Modal isActive={open} closeModal={closeModal}>
            <button type="button" onClick={closeModal}>
              <span>×</span>
            </button>
            <h2>Forgot Your Password?</h2>
            <p>Forgot Your Password</p>
            <Modal.Form>
              <form>
                <input name="email" type="email" placeholder="Email Address" required/>
                <button>Send Reset Email</button>
              </form>
              <hr/>
              <p>
                Send Reset Email <a href="#!">Join Piggy</a>
              </p>
            </Modal.Form>
          </Modal> */}

          <StoresPage.Box>
            <StoresPage.Title>{title}</StoresPage.Title>
            <StoreSidebar
              title="Stores"
              filter={filter}
              search={search}
              // $FlowFixMe
              searchResult={onSearch(search, storesAll)}
              storesAll={storesAll}
              onSetSearch={onSetSearch}
              onSetFilter={onSetFilter}
              onSetFilterClear={onSetFilterClear}
            />
            <StoreMain
              title={title}
              stores={stores}
              featured={onFilterFeatured(featured)}
              onLoadMore={onLoadMore}
              loadState={loadState}
              loadToState={loadToState}
              storesAll={storesAll}
            />
          </StoresPage.Box>
        </StoresPage.Container>
      </StoresPage.Wrapper>
    </React.Fragment>
  );
};

StoresPage.defaultProps = {
  title: 'Browse among more than 1000 stores',
};

const mapStateToProps = state => ({
  stores: getFilteredStores(state),
  featured: getFeatured(state),
  filter: getStoreFilters(state),
  search: getStoreSearch(state),
  loadState: getLoadState(state),
  loadToState: getLoadToState(state),
  storesAll: getStoresAll(state),
});

const mapDispatchToProps = {
  onLoadMore: setLoadMore,
  onSetFilter: setFilter,
  onSetSearch: setSearch,
  onSetFilterClear: setFilterClear,
};

StoresPage.Wrapper = styled.section`
  position: relative;

  ${breakpoint('xs')`
    padding: 21px 0 75px 0;
  `}

  ${breakpoint('sx')`
    padding: 25px 0 75px 0;
  `}

  ${breakpoint('md')`
    padding: 36px 0 75px 0;
  `}

  ${breakpoint('lg')`
    padding: 41px 0 75px 0;
  `}

  ${breakpoint('xl')`
    padding: 57px 0 75px 0;
  `}
`;

StoresPage.Container = styled.div`
  max-width: 1141px;
  margin: 0 auto;
  padding: 0 15px;

  ${breakpoint('sm')`
    padding: 0 40px;
  `}

  ${breakpoint('md')`
    padding: 0 15px;
  `}
`;

StoresPage.Title = styled.h3`
  margin: 0 0 18px 0;
  text-align: center;
  line-height: 29px;
  font-weight: bold;
  font-size: 25px;
  color: ${props => props.theme.colors.blackLight};

  ${breakpoint('xs')`
    display: block;
    font-size: 17px;
    padding: 0;
  `}

  ${breakpoint('sx')`
    font-size: 22px;
  `}

  ${breakpoint('sm')`
    display: none;
    font-size: 25px;
    padding: 7px 0 0 0;
  `}
`;

StoresPage.Box = styled.div`
  display: flex;
  width: 100%;

  ${breakpoint('xs')`
    flex-direction: column;
  `}

  ${breakpoint('sm')`
    flex-direction: row;
  `}
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoresPage);
