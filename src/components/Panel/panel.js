import FileUpload from '../Form/fileUpload';
import FormFacts from '../Form/formFacts';
import List from '../Sections/list';
import './panel.css';
import React from 'react';

const USID = require('usid');
const usid = new USID();

const Panel = () => {
  return (
    <React.Fragment>
      <div className='facts-box'>
        <FormFacts key={usid.rand()} type={'facts'} />
        <List key={usid.rand()} type={'facts'} />
      </div>
      <div className='gallery-box'>
        <FileUpload key={usid.rand()} type={'images'} />
        <List key={usid.rand()} type={'images'} />
      </div>
    </React.Fragment>
  );
};

export default Panel;