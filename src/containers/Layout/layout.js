import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/globalStyle/theme';
import GlobalStyle from '../../assets/globalStyle/globalStyle';

const LayoutWrapper = styled.div`
  position: relative;
`;

const Layout = ({children}) => {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout;