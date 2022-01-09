import tw, { styled } from 'twin.macro';

const Card = styled.div`
    ${tw`rounded-xl m-5 shadow-md hover:shadow-lg overflow-hidden`}
    color:#696969;
    h1{
        color:#484848;
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
export default Card;
