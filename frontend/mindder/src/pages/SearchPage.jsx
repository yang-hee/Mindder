import React from "react";
import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import Button from "../components/ui/Button";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


function SearchPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
               <Button
                    title="여기는 검색페이지"
                    onClick={() => {
                        navigate("/");
                    }}
                />
        </Wrapper>
    );
}

export default SearchPage;
