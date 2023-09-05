import React from "react";
import { APIContextProvider } from "./api/api.context";
import { AuthenticationContextProvider } from "./authentication/authentication.context";
import { ThemeContextProvider } from "./theme/theme.context";
import TranslationContextProvider from "./translations/translation.context";

const WrapperProvider = ({ children }) => {
  return (
    <APIContextProvider>
      <TranslationContextProvider>
        <AuthenticationContextProvider>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </AuthenticationContextProvider>
      </TranslationContextProvider>
    </APIContextProvider>
  );
};

export default WrapperProvider;
