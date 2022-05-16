const fontSizesPx = {
  display: '64px',
  heading0: '40px',
  heading1: '48px',
  heading2: '35px',
  heading3: '24px',
  heading4: '20px',
  heading5: '16px',
  heading6: '13px',
  caps1: '14px',
  caps2: '12px',
  caps3: '10px',
  paragraph1: '19px',
  paragraph2: '16px',
  paragraph3: '18px',
  title1: '35px',
};

const fontWeights = {
  400: '400',
  500: '500',
  600: '600',
  700: '700',
  800: '800',
};

const lineHeights = {
  display: '80px',
  heading1: '60px',
  heading2: '48px',
  heading3: '32px',
  heading4: '28px',
  heading5: '24px',
  heading6: '20px',
  caps1: '20px',
  caps2: '16px',
  caps3: '16px',
  paragraph1: '22px',
  paragraph2: '24px',
  paragraph3: '21.09px',
  title1: '41px',
  keyboard: '18px',
};

const fontTypes = {
  display: `font-size: ${fontSizesPx.display}; font-weight: ${fontWeights[500]};  line-height: ${lineHeights.display};`,
  heading1: `font-size: ${fontSizesPx.heading1}; font-weight: ${fontWeights[500]};  line-height: ${lineHeights.heading1};`,
  heading2: `font-size: ${fontSizesPx.heading2}; font-weight: ${fontWeights[500]};  line-height: ${lineHeights.heading2};`,
  heading3: `font-size: ${fontSizesPx.heading3}; font-weight: ${fontWeights[500]};  line-height: ${lineHeights.heading3};`,
  heading4: `font-size: ${fontSizesPx.heading4}; font-weight: ${fontWeights[500]};  line-height: ${lineHeights.heading4};`,
  heading5: `font-size: ${fontSizesPx.heading5}; font-weight: ${fontWeights[500]};  line-height: ${lineHeights.heading5};`,
  heading6: `font-size: ${fontSizesPx.heading6}; font-weight: ${fontWeights[500]};  line-height: ${lineHeights.heading6};`,
  caps1Bold: `font-size: ${fontSizesPx.caps1}; font-weight: ${fontWeights[600]};  line-height: ${lineHeights.caps1};`,
  caps1Regular: `font-size: ${fontSizesPx.caps1}; font-weight: ${fontWeights[400]};  line-height: ${lineHeights.caps1};`,
  caps2Bold: `font-size: ${fontSizesPx.caps2}; font-weight: ${fontWeights[600]};  line-height: ${lineHeights.caps2};`,
  caps2Regular: `font-size: ${fontSizesPx.caps2}; font-weight: ${fontWeights[400]};  line-height: ${lineHeights.caps2};`,
  caps3Bold: `font-size: ${fontSizesPx.caps3}; font-weight: ${fontWeights[600]};  line-height: ${lineHeights.caps3};`,
  caps3Regular: `font-size: ${fontSizesPx.caps3}; font-weight: ${fontWeights[400]};  line-height: ${lineHeights.caps3};`,
  paragraph1: `font-size: ${fontSizesPx.paragraph1}; font-weight: ${fontWeights[400]};  line-height: ${lineHeights.paragraph1};`,
  title1: `font-size: ${fontSizesPx.title1}; font-weight: ${fontWeights[800]};  line-height: ${lineHeights.title1};`,
  title2: `font-size: ${fontSizesPx.heading0}; font-weight: ${fontWeights[600]};  line-height: ${lineHeights.heading2};`,
  paragraph2: `font-size: ${fontSizesPx.paragraph1}; font-weight: ${fontWeights[700]};  line-height: ${lineHeights.paragraph1};`,
  paragraph3: `font-size: ${fontSizesPx.paragraph3}; font-weight: ${fontWeights[600]};  line-height: ${lineHeights.paragraph3};`,
};

export default fontTypes;
