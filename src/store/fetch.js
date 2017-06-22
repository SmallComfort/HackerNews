const baseURL = 'https://hacker-news.firebaseio.com/v0';

export function _fetch (path) {
  return fetch({
    method: 'GET',
    url: `${baseURL}/${path}.json`
  })
  .then((response) => response.json());
}

export function fetchIdsByType (type) {
  return _fetch(`${type}stories`);
}

export function fetchItem (id) {
  return _fetch(`item/${id}`);
}

export function fetchItems (ids) {
  return Promise.all(ids.map(id => fetchItem(id)));
}

export function fetchUser (id) {
  return _fetch(`user/${id}`);
}
