import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { action } from "@storybook/addon-actions";


storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick = {action("action clicked")}>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   

  