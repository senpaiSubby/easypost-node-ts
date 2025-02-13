import T from 'proptypes';
import base from './base';

export const propTypes = {
  id: T.string,
  object: T.string,
  mode: T.string,
  created_at: T.oneOfType([T.object, T.string]),
  updated_at: T.oneOfType([T.object, T.string]),
  description: T.string,
  quantity: T.number,
  value: T.number,
  weight: T.number,
  hs_tariff_number: T.string,
  code: T.string,
  origin_country: T.string,
  currency: T.string,
};

export default (api) =>
  class CustomsItem extends base(api) {
    static propTypes = propTypes;

    static _name = 'CustomsItem';

    static _url = 'customs_items';

    static key = 'customs_item';

    /**
     * all not implemented.
     * @returns {Promise<never>}
     */
    static all() {
      return this.notImplemented('all');
    }

    /**
     * delete not implemented.
     * @returns {Promise<never>}
     */
    static delete() {
      return this.notImplemented('delete');
    }
  };
