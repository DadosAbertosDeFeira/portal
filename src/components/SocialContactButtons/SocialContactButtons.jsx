import React from "react";
import Image from "next/image";

import Twitter from "../../../public/assets/icons/twitter.svg";
import Facebook from "../../../public/assets/icons/facebook.svg";
import Instagram from "../../../public/assets/icons/instagram.svg";
import Github from "../../../public/assets/icons/github.svg";

const SocialContactButtons = () => {
  const handleClick = (event) => {
    const { url } = event.currentTarget.dataset;
    window.open(url, "_blank").focus();
  };

  return (
    <div className="grid grid-flow-col grid-cols-2 grid-rows-2 auto-cols-auto mt-md gap-md self-center tablet:self-start">
      <button
        data-testid="twitter-button"
        className="bg-blue-100 h-xl px-sm  rounded flex items-center w-4xl justify-center space-x-sm pa-md"
        type="button"
        data-url={process.env.NEXT_PUBLIC_TWITTER_URL}
        onClick={handleClick}
      >
        <Image src={Twitter} alt="Twitter" />
        <span className="text-primary-dark text-sm">Twitter</span>
      </button>

      <button
        data-testid="facebook-button"
        className="bg-blue-100 h-xl px-sm rounded flex items-center w-4xl justify-center space-x-sm pa-md "
        type="button"
        data-url={process.env.NEXT_PUBLIC_FACEBOOK_URL}
        onClick={handleClick}
      >
        <Image src={Facebook} alt="Facebook" />
        <span className="text-primary-dark text-sm">Facebook</span>
      </button>

      <button
        data-testid="instagram-button"
        className="bg-blue-100 h-xl px-sm rounded flex items-center w-4xl justify-center space-x-sm pa-md "
        type="button"
        data-url={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
        onClick={handleClick}
      >
        <Image src={Instagram} alt="Instagram" />
        <span className="text-primary-dark text-sm">Instagram</span>
      </button>

      <button
        data-testid="github-button"
        className="bg-blue-100 h-xl px-sm rounded flex items-center w-4xl justify-center space-x-sm pa-md "
        type="button"
        data-url={process.env.NEXT_PUBLIC_GITHUB_URL}
        onClick={handleClick}
      >
        <Image src={Github} alt="Github" />
        <span className="text-primary-dark text-sm">Github</span>
      </button>
    </div>
  );
};

export default SocialContactButtons;
