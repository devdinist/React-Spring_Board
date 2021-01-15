import { Image,Typography,Form } from 'antd';
import styled from 'styled-components';

export const Imagemod = styled(Image)`
    width:120px;
    height:80px;
    margin-left:15px;
    @media (max-width:380px){
      width:100px;
      height:70px;
      margin-left:10px;
    }
    @media (max-width:370px){
      width:90px;
      height:60px;
      margin-left:10px;
    }
    @media (max-width:360px){
      width:80px;
      height:50px;
      margin-left:10px;
    }
    @media (max-width:350px){
      width:70px;
      height:55px;
      margin-left:5px;
    }
`;

export const Board_title = styled(Typography)`
    color:white;
`;

export const Inboard_Title = styled(Form.Item)`
    color: white;
`;

const Base = styled.div`
    height:85vmin;

    @media (max-width:380px){
        height:"100vmin";
    }
    @media (max-width:370px){
        height:"120vmin";
    }
    @media (max-width:360px){
        height:"140vmin";
    }
    @media (max-width:350px){
        height:"160vmin";
    }
`;

const Content = styled.div`
    height:100%;
    @media (max-width:900px){
        height:105%;
    }
    @media (max-width:850px){
        height:110%;
    }
    @media (max-width:800px){
        height:125%;
    }
    @media (max-width:750px){
        height:120%;
    }
    @media (max-width:700px){
        height:125%;
    }
    @media (max-width:670px){
        height:130%;
    }
    @media (max-width:650px){
        height:140%;
    }
    @media (max-width:630px){
        height:150%;
    }
    @media (max-width:620px){
        height:170%;
    }
    @media (max-width:590px){
        height:190%;
    }
    @media (max-width:560px){
        height:210%;
    }
    @media (max-width:520px){
        height:230%;
    }
    @media (max-width:500px){
        height:250%;
    }
    @media (max-width:475px){
        height:270%;
    }
    @media (max-width:450px){
        height:290%;
    }
    @media (max-width:425px){
        height:320%;
    }
    @media (max-width:400px){
        height:340%;
    }
    @media (max-width:385px){
        height:410%;
    }
    @media (max-width:375px){
        height:440%;
    }
    @media (max-width:360px){
        height:460%;
    }
    @media (max-width:350px){
        height:480%;
    }
    @media (max-width:349px){
        height:500%;
    }
    @media (max-width:348px){
        height:630%;
    }
    @media (max-width:338px){
        height:670%;
    }
    @media (max-width:328px){
        height:720%;
    }
`;