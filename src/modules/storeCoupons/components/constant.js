export const getSortedCashbackRate = (cashbackRates, sortAlphabetically) => {
  return [...cashbackRates].sort((a, b) => {
    // sort alphabetically by 'category_name'
    if (sortAlphabetically) {
      const na = a.category_name.toLowerCase();
      const nb = b.category_name.toLowerCase();

      if (na < nb) return -1;
      if (na > nb) return 1;
      return 0;
    }

    // sort by category weight
    return b.weight - a.weight;
  });
};
