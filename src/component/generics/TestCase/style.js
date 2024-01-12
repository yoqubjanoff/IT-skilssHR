import styled from 'styled-components'
export const Container = styled.div`
width: 1024px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 15px;
padding:16px;
`;

Container.Flex = styled.div`
width:100%;
display: flex;
justify-content: ${({between})=>between && 'space-between'};
align-items: center;
gap:15px;
`;

Container.Wrap = styled.div`
width:fit-content;
display: flex;
gap:15px;
`;

Container.Column = styled.div`
width:100%;
display: flex;
flex-direction: column;
gap:15px;
`;

Container.Case = styled.div`
width: 40px;
height: 40px;
border: 1px solid #D8D8D8;
background-color: ${({active})=>active ? '#52E29D' : '#fff'};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
color: ${({active})=>active ? '#fff' : '#585858'};
`;

Container.Apply = styled.div`
width: 100%;
height: 45px;
background: #DFF6EE 0% 0% no-repeat padding-box;
border-radius: 10px;
display:flex;
align-items: center;
color: #4AB479;
font-size:14px;
font-weight: 600;
padding:10px;
`;

Container.Title = styled.div`
font-size:20px;
font-weight: 600;
color: #000000;
`;
Container.CaseWrap = styled.div`
width: 100%;
height: 68px;
border-bottom: ${({last})=>!last && '1px dashed #D8D8D8'};
background-color: ${({active})=>active ? '#52E29D' : '#fff'};
display: flex;
align-items: center;
justify-content: center;
color: ${({active})=>active ? '#fff' : '#585858'};
cursor:pointer;
&:hover{
    background-color: #EBD0FF3D;
}
&:active{
    background-color: #fff;
}
`;