import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import * as Icons from './icons';

const customTheme = {
  global: {
    colors: {
      icon: '#2196f3',
      attention: '#ff3333'
    }
  },
  icon: {
    size: {
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '300px'
    }
  }
};
storiesOf('Icon', module).add('Default', function () {
  const Icon = Icons[text('Icon', 'Accessibility')];

  if (!Icon) {
    return null;
  }

  return React.createElement(Icon, null);
}).add('Color', function () {
  const Icon = Icons[text('Icon', 'Accessibility')];

  if (!Icon) {
    return null;
  }

  return React.createElement(ThemeProvider, {
    theme: customTheme
  }, React.createElement(Icon, {
    size: text('Size', 'xlarge'),
    color: text('Color', 'attention')
  }));
}).add('Plain', function () {
  return React.createElement(Icons.Pocket, {
    color: "plain"
  });
}).add('Custom Theme', function () {
  const Icon = Icons[text('Icon', 'Accessibility')];

  if (!Icon) {
    return null;
  }

  return React.createElement(ThemeProvider, {
    theme: customTheme
  }, React.createElement(Icon, {
    size: text('Size', 'xlarge')
  }));
});