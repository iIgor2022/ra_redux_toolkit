import React from 'react';

const USID = require('usid');
const usid = new USID();

export const Li = ({ id, className, children }) => {
  return (
    <React.Fragment>
      <li id={id} className={`${className}-item item-list`} key={usid.rand()}>
        <div className={`${className}-tem-wrap`} key={usid.rand()}>
          {React.Children.map(children, (child) => {
            return child;
          })}
        </div>
      </li>
    </React.Fragment>
  );
};

export const CardTitle = ({ title }) => {
  return (
    <>
      <h5 className='card-title'>{title}</h5>
    </>
  );
};

export const Button = React.forwardRef((props, ref) => {
  return (
    <>
      <button
        ref={ref}
        id={props.id}
        className={props.type}
        onClick={props.clickHandler ? () => props.clickHandler(props.id) : null}
        style={props.btnStyle}
      >
        {props.text}
      </button>
    </>
  );
});

export const Text = React.forwardRef((data, ref) => {
  if (!data) return null;

  return (
    <React.Fragment>
      <span ref={ref} className={data.className}>
        {data.text}
      </span>
    </React.Fragment>
  );
});

export const Input = React.forwardRef((data, ref) => {
  return (
    <React.Fragment>
      <div className='input-wrapper'>
        <input
          ref={ref}
          className={`${data.className}__input`}
          type={data.type}
          name={data.name}
          value={data.value}
          onChange={data.onChange}
          min={data.min}
          max={data.max}
          placeholder={data.placeholder}
        />
        <label className='label' name={data.className}>
          {data.label}
        </label>
      </div>
    </React.Fragment>
  );
});

export const ImageUrl = (data) => {
  if (!data.url) return null;

  return (
    <React.Fragment>
      <div id={data.id} className='image-wrapper'>
        <img className={data.className} src={data.url} alt='alt' />
      </div>
    </React.Fragment>
  );
};