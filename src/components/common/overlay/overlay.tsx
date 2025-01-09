'use client';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '../icon/icon';
import styles from './overlay.module.scss';

interface OverlayProps {
  trigger: ReactNode;
  children: ReactNode;
  title?: string;
  isCaseStudy?: boolean;
}

interface OverlayInnerProps {
  closeHandler: () => void;
  isOpen: boolean;
  children: ReactNode;
}

const OverlayInner = ({
  closeHandler,
  isOpen,
  children,
}: OverlayInnerProps) => {
  useLockBodyScroll();

  return (
    <div
      className={clsx(
        styles['overlay__inner'],
        isOpen
          ? styles['overlay__inner--open']
          : styles['overlay__inner--closed']
      )}
    >
      <div className={styles['overlay__header']}>
        <div onClick={closeHandler} className={styles['overlay__close-button']}>
          <Icon icon={'close_overlay'} color={'light'} size={24}></Icon>
        </div>
      </div>
      <div className={styles['overlay__content']}>{children}</div>
    </div>
  );
};

export default function Overlay({
  trigger,
  children,
  title,
  isCaseStudy,
}: OverlayProps) {
  const overlayElem = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('case')) {
      if (searchParams.get('case') === title) {
        setIsOpen(true);
        if (overlayElem) {
          overlayElem.current?.showModal();
        }
      }
    }
  }, [searchParams, title]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const reduceQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
      return params.toString();
    },
    [searchParams]
  );

  const openOverlay = () => {
    setIsOpen(true);
    isCaseStudy &&
      router.push(pathname + '?' + createQueryString('case', title ?? ''), {
        scroll: false,
      });
    if (overlayElem) {
      overlayElem.current?.showModal();
    }
  };
  const closeOverlay = () => {
    setIsOpen(false);
    router.push(pathname + '?' + reduceQueryString('case'), {
      scroll: false,
    });
    if (overlayElem) {
      overlayElem.current?.close();
    }
  };

  return (
    <>
      <div onClick={openOverlay}>{trigger}</div>
      <dialog
        ref={overlayElem}
        className={clsx(
          styles['overlay'],
          isOpen ? styles['overlay--open'] : styles['overlay--closed']
        )}
      >
        {isOpen && (
          <OverlayInner isOpen={isOpen} closeHandler={closeOverlay}>
            {children}
          </OverlayInner>
        )}
      </dialog>
    </>
  );
}
