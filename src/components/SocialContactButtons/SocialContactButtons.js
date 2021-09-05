import React from 'react';
import { useRouter } from 'next/router';

const SocialContactButtons = () => {
  const router = useRouter();

  return (
    <>
      <button
        data-testid="twitter-button"
        className="bg-blue-100 h-xl w-auto px-sm rounded flex items-center space-x-sm pa-md"
        type="button"
        onClick={() => router.push(process.env.NEXT_PUBLIC_TWITTER_URL)}
      >
        <img src="/assets/icons/twitter.svg" alt="Twitter" />
        <span className="text-primary-dark text-sm">Twitter</span>
      </button>

      <button
        data-testid="facebook-button"
        className="bg-blue-100 h-xl w-auto px-sm rounded flex items-center space-x-sm pa-md "
        type="button"
        onClick={() => router.push(process.env.NEXT_PUBLIC_FACEBOOK_URL)}
      >
        <img src="/assets/icons/facebook.svg" alt="Facebook" />
        <span className="text-primary-dark text-sm">Facebook</span>
      </button>

      <button
        data-testid="instagram-button"
        className="bg-blue-100 h-xl w-auto px-sm rounded flex items-center space-x-sm pa-md "
        type="button"
        onClick={() => router.push(process.env.NEXT_PUBLIC_INSTAGRAM_URL)}
      >
        <img src="/assets/icons/instagram.svg" alt="Instagram" />
        <span className="text-primary-dark text-sm">Instagram</span>
      </button>

      <button
        data-testid="github-button"
        className="bg-blue-100 h-xl w-auto px-sm rounded flex items-center space-x-sm pa-md "
        type="button"
        onClick={() => router.push(process.env.NEXT_PUBLIC_GITHUB_URL)}
      >
        <img src="/assets/icons/github.svg" alt="Github" />
        <span className="text-primary-dark text-sm">Github</span>
      </button>
    </>
  );
};

export default SocialContactButtons;
