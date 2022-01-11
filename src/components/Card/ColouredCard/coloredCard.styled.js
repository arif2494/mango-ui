import tw, { styled } from 'twin.macro';

const CardVariant = styled.div`
    ${tw`rounded-xl m-5 shadow-md hover:shadow-lg overflow-hidden`}
    color:white;
    background-color : ${(props) => {
    if (props.variant === 'primary') {
      return '#5C5CFF';
    } if (props.variant === 'secondery') {
      return '#7700b3';
    }
    return props.variant;
  }};
    h1{
        color:white;
        font-size:2rem;
        font-weight:500;
        margin-bottom:10px;
    }
    button{
        ${tw`py-3 px-7 rounded-lg mt-5`}
        background-color:teal;
        color:white;
    }
`;
export default CardVariant;
