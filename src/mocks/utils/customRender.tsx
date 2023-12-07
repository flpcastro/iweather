import { CityProvider } from "@contexts/CityContext";
import { RenderOptions, render } from "@testing-library/react-native";
import { ReactElement, ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <SafeAreaProvider>
      <CityProvider>
        {children}
      </CityProvider>
    </SafeAreaProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react-native';
export { customRender as render, Providers };