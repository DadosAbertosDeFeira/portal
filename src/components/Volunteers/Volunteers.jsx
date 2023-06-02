import React from 'react';
import Image from 'next/image';

import VolunteersCard from '../VolunteersCard';
import volunteersList from '../../utils/volunteers';
import HandWithHeart from '../../../public/assets/icons/hand-with-hearth.svg';

const Volunteers = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          className="max-w-[100px] max-h-[100px]"
          src={HandWithHeart}
          alt="Livro"
        />
        <h2 className="m-lg tablet:m-xl">Voluntários</h2>
      </div>
      <div className="flex flex-wrap justify-center mt-12 gap-4">
        {volunteersList.map((volunteer) => (
          <VolunteersCard
            key={`${volunteer.name}-${volunteer.role}`}
            name={volunteer.name}
            role={volunteer.role}
            picture={volunteer.picture}
            linkedin={volunteer.linkedin}
            instagram={volunteer.instagram}
            github={volunteer.github}
            twitter={volunteer.twitter}
          />
        ))}
      </div>
    </>
  );
};

export default Volunteers;
