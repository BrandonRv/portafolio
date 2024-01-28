import React from "react";
import { Icon } from '@iconify/react';
export function SkillItem({sk}) {

  const {title, desc, icons} = sk;
  
  return (
    <div className="item col-6 col-lg-3">
      <div className="item-inner">
        <div className="item-icon">
         { icons.map((icon, index) => <Icon key={index} className="mr-1" icon={icon} style={{ color: "violet" }} /> ) }
          
        </div>
        <h3 className="item-title">{title}</h3>
        <div className="item-desc">
          { desc.map((ds, index) => <p key={index} className="mb-1">{ds}</p>) }
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
