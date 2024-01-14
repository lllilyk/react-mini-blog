import React from "react";
import styled from "styled-components";

// width: calc(100% - 32px) -> 요소의 너비를 화면 너비의 100%에서 32px을 뺀 값으로 설정
// (전체 너비에서 좌우 여백을 뺀 값으로 설정하여 텍스트 영역을 넓게 만듦)
// calc : CSS에서 사용되는 함수로, 계산을 통해 값을 동적으로 설정할 때 사용됨. (특정 단위 간의 변환을 자동 수행함)

// 조건부로 스타일을 동적으로 설정하기
// ${(props) => props.height && `height: ${props.height}px`} -> 조건부로 props.height가 존재할 경우에만 해당 높이(스타일)를 적용
// ${ } : 템플릿 리터럴 내에서 JavaScript 표현식을 평가하고 그 결과를 문자열에 삽입하는 역할
// height 속성이 부모 컴포넌트에서 전달되면 해당 높이로 설정됨
const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) => props.height && `height: ${props.height}px`}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

// TextInput 컴포넌트는 StyledTextarea라는 'styled 컴포넌트로부터 상속받은 <textarea> 엘리먼트'를 렌더링 함.
// onChange: 텍스트 영역의 내용이 변경될 때 호출되는 콜백 함수, 부모 컴포넌트에서 전달된 함수를 사용하여 상태를 업데이트할 수 있음
function TextInput(props) {
    const { height, value, onChange } = props; 

    return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;
