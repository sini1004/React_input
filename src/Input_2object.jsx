import { getValue } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'

const Input = () => {
  const [inputs, setInputs] = useState({
    id : '',
    nick : ''
  });

  const { id, nick } = inputs; //비구조화 할당을 통해 추출

  const onChange = (e) => { //input에 입력할때마다 발생하는 함수
    const {value, name} = e.target; //e.target에서 name과 value 추출

    setInputs({
      ...inputs,
      [name] : value,
    });
  };
    //react에서는 기준 객체를 업데이트할때 - 기존객체 복사뒤 덮어씌우는 방식

  const onReset = () => {
    setInputs({
      id : '',
      nick : ''
    })
  };

  return (
    <div>
      <input name = 'id' placeholder='아이디' onChange={onChange} value = {id} />
      <input name = 'nick' placeholder='닉네임' onChange={onChange} value = {nick} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>입력값 : </b>
        {id} ({nick})
      </div>
    </div>
  )
};

export default Input;