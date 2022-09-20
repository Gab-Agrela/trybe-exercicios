import styled from "styled-components"
import EmailLine from "./EmailLine";

export default function MailBox () {
    return (
        <Box>
            <EmailLine />
        </Box>
    )

}
const Box = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`;


