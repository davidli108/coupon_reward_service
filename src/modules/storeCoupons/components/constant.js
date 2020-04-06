export const getSortedCashbackRate = (cbRate, byLetter) => {
  return cbRate.sort(function(a, b) {
    // sort by letter
    if (byLetter) {
      const na = a.category_name.toLowerCase(),
        nb = b.category_name.toLowerCase();
      if (na < nb) return -1;
      if (na > nb) return 1;
      return 0;
    }
    // sort by category weight
    return b.weight - a.weight;
  });
};
