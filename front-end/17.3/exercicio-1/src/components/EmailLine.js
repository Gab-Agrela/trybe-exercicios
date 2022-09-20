import { useState } from "react";
import styled from "styled-components";

export default function EmailLine () {
    const [emailList, setEmailList] = useState([
        {
            id: 1,
            title: "Título do email",
            status: 0
          },
          {
            id: 2,
            title: "Título do email dois",
            status: 0
          },
          {
            id: 3,
            title: "Título do email três",
            status: 0
          }
        ]);

        const readAll = () => {
            const li = document.querySelectorAll('li');
            li.forEach(d => d.style.fontWeight = "400");
        }

        const unreadAll = () => {
            const li = document.querySelectorAll('li');
            li.forEach(d => d.style.fontWeight = "900");
        }


        const readButton = ({target}) => {
            target.parentNode.parentNode.style.fontWeight = "400";
        }



        const unreadButton = ({target}) => {
            target.parentNode.parentNode.style.fontWeight = "900";
        }

        
        const createLi = emailList.map(({id,title,status}) => (
            <Email id={id}>
                {title}
                <div id={status}>
                    <Button 
                        type="button"
                        onClick={readButton}
                    >
                        Lido
                    </Button>
                    <Button 
                        type="button"
                        onClick={unreadButton}
                    >
                        Não Lido
                    </Button>
                </div>  
            </Email>
        ));


    return (
        <><BtnBox>
            <Btn onClick={readAll}>Marcar todas como lidas</Btn>
            <Btn onClick={unreadAll}>Marcar todas como não lidas</Btn>
        </BtnBox><BoxMail>
                {createLi}
            </BoxMail></>
    )
}

const BoxMail = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    margin: 15px;
    box-shadow: 0px 0px 10px 2px gray;
`;

const Email = styled.li`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    width: 100%;
    font-size: large;
    padding: 15px
`;

const Button = styled.button`
    background-color: blue;
    padding: 10px;
    font-size: large;
    width: auto;
    margin: 5px;
`;

const BtnBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center; 
    text-align: center;
`;

const Btn = styled.button`
    background-color: blue;
    padding: 10px;
    font-size: large;
    width: 200px;
    margin: 5px;
`;