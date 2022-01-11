import tw, { styled } from 'twin.macro';

const Profile = styled.div`
    ${tw` pb-5 md:m-5 m-3 shadow-lg overflow-hidden`}
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
export default Profile;
