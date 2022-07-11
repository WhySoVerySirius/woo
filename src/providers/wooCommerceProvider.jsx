const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
    url: 'https://per4mmedia.com', // Your store URL
    consumerKey: 'ck_4fd9dc37e0a74ed8e7d82967922e3129d0d2292d', // Your consumer key
    consumerSecret: 'cs_4e7e99dc689f144921e3c731a2d05894d597e5f2', // Your consumer secret
    version: 'wc/v3' // WooCommerce WP REST API version
  });

export default WooCommerce;// 