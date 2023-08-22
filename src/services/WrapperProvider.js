import React from "react";
import { APIContextProvider } from "./api/api.context";
import { AuthenticationContextProvider } from "./authentication/authentication.context";
import { ThemeContextProvider } from "./theme/theme.context";

const WrapperProvider = ({ children }) => {
  return (
    <APIContextProvider>
      <AuthenticationContextProvider>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </AuthenticationContextProvider>
    </APIContextProvider>
  );
};

export default WrapperProvider;
