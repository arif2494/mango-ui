/* eslint-disable react/prop-types */
import React from 'react';
import Profile from './ProfileCard.styled';

function ProfileCard({ imgUrl, children }) {
  return (
    <div className="overflow-hidden  my-3 max-w-[27rem] mx-auto">
      <Profile>
        <div>
          <div className="w-full h-40 bg-red-200" />
          <div className="flex justify-center -mt-8">
            <img alt="" src={imgUrl} className="rounded-full h-32 w-32 border-solid border-white border-4 -mt-7" />
          </div>
          <div className="text-center">
            {children}
          </div>
        </div>
      </Profile>
    </div>
  );
}

export function ProfileTitle({ children }) {
  return <h3 className="text-2xl text-center my-3 font-medium bold ">{children}</h3>;
}
export function ProfileContent({ children }) {
  return <div className="px-4 text-gray-500 mb-5">{children}</div>;
}

export function ProfileIcons({ children }) {
  return <div className="px-4  text-center flex justify-center my-5">{children}</div>;
}
export function ProfileSingleIcon({ link, children }) {
  return (
    <span className="text-center mx-3 transition ease-in-out delay-75 text-gray-500 hover:-translate-y-1 hover:scale-125 hover:text-indigo-500 duration-300">
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-2xl group-hover:scale-75">{children}</a>
    </span>
  );
}

export default ProfileCard;
