// @flow
import React, { useState, useEffect, useRef } from 'react';

import type { DropdownFilterProps } from './index';
import Arrow from './assets/arrow_right.svg';

const DropdownFilter = ({
  label,
  selectedFilter = {},
  filters = [],
  onChange = (value?: any) => {},
}: DropdownFilterProps) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);
  const handleSetVisible = () => setVisible(!visible);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <DropdownFilter.Wrapper ref={wrapperRef}>
      <DropdownFilter.Left>{label}:</DropdownFilter.Left>
      <DropdownFilter.Right>
        <DropdownFilter.SelectedFilter>
          <DropdownFilter.SelectedFilterContainer onClick={handleSetVisible}>
            <DropdownFilter.SelectedFilterLabel>
              {selectedFilter.label}
            </DropdownFilter.SelectedFilterLabel>
            <img src={Arrow} alt="arrow right" />
          </DropdownFilter.SelectedFilterContainer>
          {visible && (
            <DropdownFilter.Menu ref={wrapperRef}>
              {filters.map(filter => {
                const handleFilter = () => {
                  setVisible(false);
                  onChange(filter);
                };
                return (
                  <DropdownFilter.MenuItem
                    key={`dropdown-filter-${filter.value}`}
                    onClick={handleFilter}
                  >
                    {filter.label}
                  </DropdownFilter.MenuItem>
                );
              })}
            </DropdownFilter.Menu>
          )}
        </DropdownFilter.SelectedFilter>
      </DropdownFilter.Right>
    </DropdownFilter.Wrapper>
  );
};

export default DropdownFilter;
