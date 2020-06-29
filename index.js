import styled from "styled-components";
import {
  color,
  border,
  shadow,
  system,
  space,
  layout,
  flexbox,
  typography,
  position,
  variant,
  lineHeight,
} from "styled-system";
import propTypes from "@styled-system/prop-types";

const transform = system({
  textTransform: {
    property: "textTransform",
  },
});

export const Box = styled.div`
  ${color}
  ${space}
  ${layout}
  ${position}
  ${border}
  ${shadow}
`;

Box.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.border,
  ...propTypes.shadhow,
};

Box.defaultProps = {
  fontSize: [2, 3, 3],
  fontWeight: 'body',
  color: "body",
  background: "background",
  lineHeight: 'body',
}

export const Text = styled.span`
  ${color}
  ${space}
  ${typography}
  ${transform}
  ${border}
  ${shadow}
`;

Text.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  ...propTypes.typography,
  ...propTypes.transform,
  ...propTypes.border,
  ...propTypes.shadow
};

Text.defaultProps = {
  display: 'inline-block',
  fontSize: [2, 3, 3],
  fontWeight: 'body',
  color: "body",
  lineHeight: 'body',
}

export const Heading = styled.h1`
  ${color}
  ${space}
  ${typography}
  ${transform}
  ${lineHeight}
`;

Heading.propTypes = {
    ...propTypes.color,
    ...propTypes.space,
    ...propTypes.typography,
    ...propTypes.transform,
    ...propTypes.lineHeight
}

Heading.defaultProps = {
  display: 'inline-block',
  fontSize: [5, 5, 6],
  fontWeight: "heading",
  lineHeight: "heading",
  color: "body",
};

export const Flexbox = styled(Box)`
  ${flexbox}
`;

Flexbox.propTypes = {
    ...propTypes.flexbox,
}

Flexbox.defaultProps = {
    display: 'flex',
}

export const Button = styled.button`
  ${color}
  ${space}
  ${layout}
  ${position}
  ${border}
  ${typography}
  ${shadow}
  ${variant({
    scale: "buttons",
  })},

  :hover {
    cursor: pointer;
  }
`;

Button.propTypes = {
    ...propTypes.color,
    ...propTypes.space,
    ...propTypes.layout,
    ...propTypes.position,
    ...propTypes.border,
    ...propTypes.typography,
    ...propTypes.shadhow,
  };

Button.defaultProps = {
  variant: "primary",
  border: 0,
  borderRadius: 2,
  p: [2, 3],
  minWidth: "100px",
  fontSize: [2, 3, 3],
};

const colors = {
  body: '#000',
  background: '#fff',
  primary: '#00f',
  secondary: '#00a',
  highlight: '#ededff',
  accent: '#c0f',
  gray: '#eee',
  lightgray: '#fafafa',
  midgray: '#777',
  modes: {
    dark: {
      body: '#fff',
      background: '#000',
      primary: '#0cf',
      secondary: '#f0e',
      gray: '#222',
      lightgray: '#111',
      highlight: '#001119',
    },
    cyan: {
      body: '#023',
      background: '#0ff',
      primary: '#03c',
      secondary: '#01a',
      gray: '#0cc',
      lightgray: '#0ee',
      highlight: '#0de',
    },
    gray: {
      body: '#eef',
      background: '#333336',
      primary: '#09f',
      secondary: '#0bf',
      gray: '#55555a',
      lightgray: '#444448',
      highlight: '#33444c',
    },
    book: {
      body: '#322',
      background: '#fff9f9',
      primary: '#c30',
      secondary: '#400',
      gray: '#e9e6e6',
      lightgray: '#f9f6f6',
    },
    magenta: {
      body: '#203',
      background: '#f3f',
      primary: '#208',
      secondary: '#106',
      gray: '#c0c',
      lightgray: '#e0e',
    },
  },
}

const prism = {
  [['.comment', '.prolog', '.doctype', '.cdata']]: {
    color: 'midgray',
  },
  '.punctuation': {
    color: 'midgray',
  },
  [['.property', '.tag', '.constant', '.symbol', '.deleted']]: {
    color: 'primary',
  },
  [['.boolean', '.number']]: {
    color: 'secondary',
  },
  [['.selector', '.attr-name', '.string', '.char', '.builtin', '.inserted']]: {
    color: 'accent',
  },
  [['.operator', '.entity', '.url', '.string', '.variable']]: {
    color: 'accent',
  },
  [['.atrule', '.attr-value', '.function']]: {
    color: 'primary',
  },
  '.keyword': {
    color: 'primary',
  },
  '.regex': {},
  '.important': {},
}

export const defaultTheme = {
  initialColorModeName: 'light',
  colors,
  fonts: {
    body: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      },
    },
    h1: {
      fontSize: [5, 6],
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    h2: {
      fontSize: [4, 5],
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    h3: {
      fontSize: 3,
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    h4: {
      fontSize: 2,
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    h5: {
      fontSize: 1,
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    h6: {
      fontSize: 0,
      lineHeight: 'heading',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      my: 3,
      bg: 'lightgray',
      overflowX: 'auto',
      ...prism,
    },
    code: {
      fontFamily: 'monospace',
      // fontSize: '87.5%',
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      fontSize: '87.5%',
    },
    ul: {
      pl: 3,
      ul: {
        // pl: 2
        // textIndent: '1em',
      },
    },
    table: {
      width: '100%',
      my: 4,
      // borderColor: colors.gray,
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      verticalAlign: 'bottom',
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingRight: '4px',
      paddingLeft: 0,
      borderColor: 'inherit',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      verticalAlign: 'top',
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingRight: '4px',
      paddingLeft: 0,
      borderColor: 'inherit',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'lightgray',
    },
  },
}
