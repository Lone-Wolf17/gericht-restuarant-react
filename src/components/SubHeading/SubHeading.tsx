import React from 'react';

import { Images } from '../../constants';

type SubHeadingProps = {
  title: string
}

const SubHeading = ({title}: SubHeadingProps) => (
  <div style={{marginBottom: '1rem'}}>
    <p className="p__cormorant">{title}</p>
    <img src={Images.spoon} alt="spoon_img" className="spoon__img" />
  </div>
);

export default SubHeading;
