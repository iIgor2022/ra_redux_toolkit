import React, { useRef } from 'react';
import { Input, Text } from '../Atoms/atom';
const { useDispatch } = require('react-redux');
const USID = require('usid');
const { inputValue, filtered } = require('../../redux/slices/toolkitSlice');
const usid = new USID();

const FormFacts = (data) => {
  const tooltipRef = useRef();
  const dispatch = useDispatch();
  const { type } = data;
  let amount;

  const handleInput = (ev) => {
    ev.preventDefault();

    if (ev.target.value < 1 || ev.target.value > 5) {
      tooltipRef.current.style['visibility'] = 'visible';
      amount = 0;
    } else {
      tooltipRef.current.style['visibility'] = 'hidden';
      amount = ev.target.value;
    }

    dispatch(inputValue(amount));
    dispatch(filtered(amount));
  };

  return (
    <React.Fragment>
      <div className='form-field-wrapper'>
        <form className={`${type}-forms`}>
          <Input
            key={usid.rand()}
            onChange={handleInput}
            name='facts'
            type='number'
            className='field-facts__input'
            min={1}
            max={5}
            placeholder='Введите число от 1 до 5'
          >
          </Input>
        </form>
        <Text
          ref={tooltipRef}
          key={usid.rand()}
          className={`${data.type}-form-tooltip tooltip`}
          text='*Выберите число от 1 до 5'
        />
      </div>
    </React.Fragment>
  );
};

export default FormFacts;