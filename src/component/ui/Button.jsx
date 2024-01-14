import React from "react";
import styled from "styled-components";

// styled-components를 사용해서 button 태그에 style을 입힌 StyledButton 컴포넌트
const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

// Button 컴포넌트는 title, onClick 두 가지 속성을 받음
// title 속성은 버튼의 텍스트 내용을 사용자 정의하는 데 사용되며, onClick 속성은 클릭 이벤트를 처리하는데 사용됨 
// Button 컴포넌트에서 props로 받은 title이 버튼 목록에 표시되도록 해 줌
function Button(props) {
    const { title, onClick } = props;
    
    // title 속성을 기반으로 텍스트 내용을 설정
    // 논리 OR( || ) 연산자를 사용함으로써, title 속성이 참인지를 확인함
    // 참이면 title 값을 버튼의 내용으로 사용하고, 거짓이면(정의되지 않았거나, null, 빈 문자열 등) button 문자열로 기본 설정됨 
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
}

export default Button;