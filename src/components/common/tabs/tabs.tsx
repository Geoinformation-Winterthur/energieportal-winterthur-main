'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { KeyboardEvent, ReactNode, useCallback, useState } from 'react';
import { TabVariant, TabsContext } from '../../../context/tabs-context';
interface TabsProps {
  children: ReactNode;
  initialValue?: string;
  name: string;
  variant?: TabVariant;
  inOverlay?: boolean;
}

export default function Tabs({
  children,
  initialValue,
  name,
  variant = 'default',
  inOverlay = false,
}: TabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete('case');
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const changeTabsValue = (value: string) => {
    setTabsValue({
      value,
      name,
      variant,
      inOverlay,
      changeTabsValue,
      handleKeyDown,
      handleBlur,
    });
    !inOverlay &&
      router.push(pathname + '?' + createQueryString('tab', value), {
        scroll: false,
      });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.target instanceof HTMLElement) {
      if (event.key === 'ArrowRight') {
        event.target.setAttribute('tabindex', '-1');

        if (event.target.nextSibling instanceof HTMLElement) {
          event.target.nextSibling.setAttribute('tabindex', '0');
          event.target.nextSibling.focus();
        } else if (event.target.parentNode?.firstChild instanceof HTMLElement) {
          event.target.parentNode.firstChild.setAttribute('tabindex', '0');
          event.target.parentNode.firstChild.focus();
        }
      }

      if (event.key === 'ArrowLeft') {
        event.target.setAttribute('tabindex', '-1');

        if (event.target.previousSibling instanceof HTMLElement) {
          event.target.previousSibling.setAttribute('tabindex', '0');
          event.target.previousSibling.focus();
        } else if (event.target.parentNode?.lastChild instanceof HTMLElement) {
          event.target.parentNode.lastChild.setAttribute('tabindex', '0');
          event.target.parentNode.lastChild.focus();
        }
      }
    }
  };

  const handleBlur = (event: React.FocusEvent) => {
    if (
      event.target instanceof Element &&
      !event.target.parentNode?.contains(event.relatedTarget as Node)
    ) {
      event.target.setAttribute('tabindex', '-1');
      event.target.parentNode
        ?.querySelector('[aria-selected="true"]')
        ?.setAttribute('tabindex', '0');
    }
  };
  const [tabsValue, setTabsValue] = useState({
    value: (inOverlay ? initialValue : searchParams.get('tab')) || '0',
    variant,
    name,
    inOverlay,
    changeTabsValue,
    handleKeyDown,
    handleBlur,
  });

  return (
    <TabsContext.Provider value={tabsValue}>{children}</TabsContext.Provider>
  );
}
