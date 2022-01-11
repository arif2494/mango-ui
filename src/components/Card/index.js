/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { GiShiningSword } from 'react-icons/gi';
import ColoredCard from './ColouredCard/ColoredCard';
import GridCard from './GridCard/GridCard';
import MainCard from './MainCard/MainCard';
import ProfileCard, { ProfileContent, ProfileIcons, ProfileSingleIcon, ProfileTitle } from './ProfileCard/ProfileCard';
import SubCard from './SubCard/SubCard';

function CardPage() {
  return (
    <div className="">
      <MainCard title="Hello World" button={<button type="button">Click Me</button>}>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            , impedit quasi molestias dicta nihil earum doloribus
            delectus sed blanditiis sapiente distincti
            o cupiditate neces
            sitatibus eum id officiis, exercitationem ad quos temporibus!
          </p>
          <SubCard title="Hello World" imgUrl="https://images.unsplash.com/photo-1641642909340-8135d4f2ebfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" button={<button type="button">Click Me</button>}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              , impedit quasi molestias dicta nihil earum doloribus
              delectus sed blanditiis sapiente distincti
              o cupiditate neces
              sitatibus eum id officiis, exercitationem ad quos temporibus!
            </div>
          </SubCard>
          <SubCard styling="text-center" title="Hello World" icon={<GiShiningSword className="text-center" />} button={<button type="button">Click Me</button>}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              , impedit quasi molestias dicta nihil earum doloribus
              delectus sed blanditiis sapiente distincti
              o cupiditate neces
              sitatibus eum id officiis, exercitationem ad quos temporibus!
            </div>
          </SubCard>
          <ColoredCard variant="primary">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              , impedit quasi molestias dicta nihil earum doloribus
              delectus sed blanditiis sapiente distincti
              o cupiditate neces
              sitatibus eum id officiis, exercitationem ad quos temporibus!
            </div>
          </ColoredCard>
          <ProfileCard imgUrl="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg">
            <ProfileTitle>Olvia Json</ProfileTitle>
            <ProfileContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consequuntur qui nemo ab omnis, dicta laudantium ea s
                apiente cum accusantium impedit.

              </p>
            </ProfileContent>
            <ProfileIcons>
              <ProfileSingleIcon link="https://www.facebook.com"><BsLinkedin /></ProfileSingleIcon>
              <ProfileSingleIcon link="https://www.facebook.com"><BsFacebook /></ProfileSingleIcon>
              <ProfileSingleIcon link="https://www.facebook.com"><BsInstagram /></ProfileSingleIcon>
              <ProfileSingleIcon link="https://www.facebook.com"><BsTwitter /></ProfileSingleIcon>
            </ProfileIcons>
          </ProfileCard>
        </div>
      </MainCard>
      <GridCard xs="1" md="2" lg="6">
        <SubCard styling="text-center" title="Hello World" icon={<GiShiningSword className="text-center" />} button={<button type="button">Click Me</button>}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            , impedit quasi molestias dicta nihil earum doloribus
            delectus sed blanditiis sapiente distincti
            o cupiditate neces
            sitatibus eum id officiis, exercitationem ad quos temporibus!
          </div>
        </SubCard>
        <SubCard styling="text-center" title="Hello World" icon={<GiShiningSword className="text-center" />} button={<button type="button">Click Me</button>}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            , impedit quasi molestias dicta nihil earum doloribus
            delectus sed blanditiis sapiente distincti
            o cupiditate neces
            sitatibus eum id officiis, exercitationem ad quos temporibus!
          </div>
        </SubCard>
        <SubCard styling="text-center" title="Hello World" icon={<GiShiningSword className="text-center" />} button={<button type="button">Click Me</button>}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            , impedit quasi molestias dicta nihil earum doloribus
            delectus sed blanditiis sapiente distincti
            o cupiditate neces
            sitatibus eum id officiis, exercitationem ad quos temporibus!
          </div>
        </SubCard>
        <SubCard styling="text-center" title="Hello World" icon={<GiShiningSword className="text-center" />} button={<button type="button">Click Me</button>}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            , impedit quasi molestias dicta nihil earum doloribus
            delectus sed blanditiis sapiente distincti
            o cupiditate neces
            sitatibus eum id officiis, exercitationem ad quos temporibus!
          </div>
        </SubCard>
        <SubCard styling="text-center" title="Hello World" icon={<GiShiningSword className="text-center" />} button={<button type="button">Click Me</button>}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            , impedit quasi molestias dicta nihil earum doloribus
            delectus sed blanditiis sapiente distincti
            o cupiditate neces
            sitatibus eum id officiis, exercitationem ad quos temporibus!
          </div>
        </SubCard>
        <SubCard styling="text-center" title="Hello World" icon={<GiShiningSword className="text-center" />} button={<button type="button">Click Me</button>}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            , impedit quasi molestias dicta nihil earum doloribus
            delectus sed blanditiis sapiente distincti
            o cupiditate neces
            sitatibus eum id officiis, exercitationem ad quos temporibus!
          </div>
        </SubCard>
      </GridCard>
    </div>
  );
}

export default CardPage;
