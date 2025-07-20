const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/shivam-art-prod' : '',
  assetPrefix: isProd ? '/shivam-art-prod/' : '',
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true, // <== disables ESLint build errors
  },
};
