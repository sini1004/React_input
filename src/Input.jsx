import React, {useState} from 'react'

const Input = () => {
  const [ text, setText ] = useState('');

  const onChange = (e) => { //input에 입력할때마다 발생하는 함수
    setText(e.target.value);
  }
  const onReset = () => {
    setText ('')
  }
  return (
    <div>
      <input placeholder='아이디' />
      <input placeholder='닉네임' />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>입력값 : </b>
        아이디 (닉네임)
      </div>
    </div>
  )
}

export default Input;