import { ReactElement } from 'react';
import { Grid } from 'housecall-ui';
import { noop } from 'lodash';
import './App.css'

function App(props: { children: ReactElement }) {
  const { children } = props;
  noop();
  return (
    <Grid>{children}</Grid>
  )
}

export default App
