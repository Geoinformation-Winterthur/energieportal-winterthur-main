import { KeyboardEvent, createContext } from "react";

export type TabVariant = 'default' | 'reduced';
interface TabsContextType {
  value: string;
  name: string;
  variant: TabVariant;
  inOverlay: boolean;
  changeTabsValue: (value: string) => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleBlur: (event: React.FocusEvent) => void;
}

export const TabsContext = createContext<TabsContextType>({
  value: '0',
  name: 'tabs',
  variant: 'default',
  inOverlay: false,
  changeTabsValue: () => undefined,
  handleKeyDown: () => undefined,
  handleBlur: () => undefined,
});
