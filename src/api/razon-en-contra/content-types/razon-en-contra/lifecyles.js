'use strict';
//const slugify = require('slugify');
const { default: createStrapi } = require('strapi');

const mySlugify = (slug) => { 
  return 'a';//(
    //slugify(slug, { 
   //   remove:/[*+~.(){}\[\]\\/'"!:@,]/g, 
    //  lower:true 
   // })
  //);
};

/**
 * Lifecycle callbacks for the `product` model.
 */

module.exports = {
    async beforeCreate(data) {
        console.log(data);
      if (false && data.orderno) {
        if (!data.name_en) {
          data.name_en = data.name_de;
        }
        data.slug_de = mySlugify(data.name_de + '-' + data.orderno);
        data.slug_en = mySlugify(data.name_en + '-' + data.orderno);
      }
    },

    async beforeUpdate (params,data) {
        console.log('B', params, data);
        data.slug = 'blah';
      if (false && data.orderno) {
        if (!data.name_en) {
          data.name_en = data.name_de;
        }
        data.slug_de = mySlugify(data.name_de + '-' + data.orderno);
        data.slug_en = mySlugify(data.name_en + '-' + data.orderno);
      }
    },
};