import React from 'react';
import { FC } from 'react';

interface ComponentsProps {
  width: string;
}

export const TestUI: FC<ComponentsProps> = ({ width }) => {
  return <div style={{ width }}>Test UI. Props width {width}</div>;
};
