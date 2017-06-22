
export function SET_ACTIVE_TYPE (state, { type }) {
  state.activeType = type;
}

export function SET_LIST (state, { type, ids }) {
  state.lists[type] = ids;
}

export function SET_ITEMS (state, { items, type }) {
  state.items[type] = state.items[type]
    .concat(items)
    .reduce((acc, val) => {
      for (let i = 0, j = acc.length; i < j; i++) {
        if (acc[i].id === val.id) {
          return acc.splice(i, 1, val);
        }
      }
      acc.push(val);
      return acc;
    }, []);
}
