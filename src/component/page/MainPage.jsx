import React from "react";
// 페이지 이동을 위해 react-router-dom의 useNavigate 훅을 사용함
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-chlid) {
            margin-bottom: 16px;
        }
    }
`;

function MainPage(props) {
    const {} = props;

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />
                
                <PostList 
                    posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

// 이상하게 계속 헷갈림
// <Button>'이거'</Button> : 이 경우에는 Button 컴포넌트의 여는 태그와 닫는 태그 사이에 직접 텍스트 내용 '이거'를 넣고 있음
// 이 '이거'는 컴포넌트의 내용(contents)으로 처리됨

// <Button title="이거"></Button> : 이 경우에는 title 속성을 사용하여 Button 컴포넌트의 텍스트 내용을 설정하고 있음
// 텍스트 "이거" 가 title 속성에 할당되며, 'Button' 컴포넌트는 이를 해당 구현에 따라 사용할 것!

export default MainPage;