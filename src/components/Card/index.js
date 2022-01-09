import React from 'react';
import { GiShiningSword } from 'react-icons/gi';
import ColoredCard from './ColouredCard/ColoredCard';
import MainCard from './MainCard/MainCard';

function CardPage() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <MainCard title="Hello World" button={<button type="button">Click Me</button>}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          , impedit quasi molestias dicta nihil earum doloribus
          delectus sed blanditiis sapiente distincti
          o cupiditate neces
          sitatibus eum id officiis, exercitationem ad quos temporibus!
        </p>
      </MainCard>
      <MainCard title="Hello World" imgUrl="https://images.unsplash.com/photo-1641642909340-8135d4f2ebfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" button={<button type="button">Click Me</button>}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          , impedit quasi molestias dicta nihil earum doloribus
          delectus sed blanditiis sapiente distincti
          o cupiditate neces
          sitatibus eum id officiis, exercitationem ad quos temporibus!
        </div>
      </MainCard>
      <MainCard styling="text-center" title="Hello World" icon={<GiShiningSword className="text-center" />} button={<button type="button">Click Me</button>}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          , impedit quasi molestias dicta nihil earum doloribus
          delectus sed blanditiis sapiente distincti
          o cupiditate neces
          sitatibus eum id officiis, exercitationem ad quos temporibus!
        </div>
      </MainCard>
      <ColoredCard variant="primary">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          , impedit quasi molestias dicta nihil earum doloribus
          delectus sed blanditiis sapiente distincti
          o cupiditate neces
          sitatibus eum id officiis, exercitationem ad quos temporibus!
        </div>
      </ColoredCard>
    </div>
  );
}

export default CardPage;
