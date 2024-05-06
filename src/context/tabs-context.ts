import { KeyboardEvent, createContext } from "react";

interface TabsContextType {
  value: string;
  name: string;
  changeTabsValue: (value: string) => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleBlur: (event: React.FocusEvent<HTMLButtonElement>) => void;
}

export const TabsContext = createContext<TabsContextType>({
  value: '0',
  name: 'tabs',
  changeTabsValue: () => undefined,
  handleKeyDown: () => undefined,
  handleBlur: () => undefined,
});
