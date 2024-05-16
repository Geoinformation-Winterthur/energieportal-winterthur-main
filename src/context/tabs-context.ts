import { KeyboardEvent, createContext } from "react";

export type TabVariant = 'default' | 'reduced';
interface TabsContextType {
  value: string;
  name: string;
  variant: TabVariant;
  changeTabsValue: (value: string) => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleBlur: (event: React.FocusEvent) => void;
}

export const TabsContext = createContext<TabsContextType>({
  value: '0',
  name: 'tabs',
  variant: 'default',
  changeTabsValue: () => undefined,
  handleKeyDown: () => undefined,
  handleBlur: () => undefined,
});
