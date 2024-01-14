import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

// & > *
// styled-components에서 사용되는 특별한 문법으로, 부모 컴포넌트(Wrapper 컴포넌트)의 자식 엘리먼트들을 선택하는 CSS 선택자를 나타냄
// & : 현재의 styled 컴포넌트의 클래스나 태그를 나타냄
// > : CSS의 자식 선택자(child combinator)로, 부모와 직접적인 자식인 엘리먼트를 선택함
// * : 모든 태그를 나타냄
// 따라서 & > * : 현재 스타일드 컴포넌트의 직접적인 자식 엘리먼트들을 모두 선택하는 CSS 선택자

// :not(:last-child)
// 마지막 자식 엘리먼트를 제외한 모든 자식 엘리먼트에 스타일을 적용함
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function PostList(props) {
    const { posts, onClickItem } = props;

    return(
        // PostList 컴포넌트는 Wrapper 컴포넌트로 감싸져 있음
        // posts 배열을 순회하며 PostListItem 컴포넌트를 생성함
        // map 함수가 실행되면 post에는 배열의 각 원소(게시물)가 하나씩 할당되고, index에는 해당 원소의 인덱스가 할당됨
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;