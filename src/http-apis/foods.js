import request from 'superagent';
import _ from 'lodash';

export function fetchFoodSearch(query) {
  return new Promise((resolve, reject) => {
    request
      .get('https://trackapi.nutritionix.com/v2/search/instant')
      .set('X-APP-ID', 'eec943d5')
      .set('X-APP-KEY', '76e66591b74c48afbe38d872dab7f740')
      .query({
        query: query,
      })
      .end((err, res) => {
        if (err) {
          return reject(err);
        }

        console.log(res.body);
        return resolve(res.body);
      });
  });
}