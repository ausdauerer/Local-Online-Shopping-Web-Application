import React from 'react';
import { Button } from '@material-ui/core';

export default function MaterialUIButton(props) {
  return <Button color="primary">{props.text}</Button>;
}