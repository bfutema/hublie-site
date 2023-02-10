import React from 'react';
import Lottie from 'react-lottie';

import firstBannerDesktop from '../../../assets/gifs/banner_1_desktop.json';
import firstBannerMobile from '../../../assets/gifs/banner_1_mobile.json';

interface IBannerProps {
  className?: string;
}

export const BannerDesktop: React.FC<IBannerProps> = ({ className }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: firstBannerDesktop,
    renderer: 'svg',
  };
  return (
    <div className={className}>
      <Lottie
        options={defaultOptions}
        // height={400}
        width={400}
        style={{ margin: '0' }}
      />
    </div>
  );
};

export const BannerMobile: React.FC<IBannerProps> = ({ className }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: firstBannerMobile,
    renderer: 'svg',
  };
  return (
    <div className={className}>
      <Lottie
        options={defaultOptions}
        height={200}
        // width={400}
        style={{ margin: '12px 0' }}
      />
    </div>
  );
};
