import { ReactNode, useRef, useState } from 'react';
import { useLockBodyScroll } from "@uidotdev/usehooks";
import styles from './overlay.module.scss';
import { Icon } from '../icon/icon';
import clsx from 'clsx';

interface OverlayProps {
    trigger: ReactNode;
    children: ReactNode;
}

interface OverlayInnerProps {
    closeHandler: () => void;
    isOpen: boolean;
    children: ReactNode;
}

const OverlayInner = ({closeHandler, isOpen, children}: OverlayInnerProps) => {
    useLockBodyScroll();

    return (
        <div className={clsx(styles['overlay__inner'], isOpen ? styles['overlay__inner--open'] : styles['overlay__inner--closed'])}>
            <div className={styles['overlay__header']}>
                <div onClick={closeHandler} className={styles['overlay__close-button']}>
                    <Icon icon={'close_overlay'} color={'light'} size={24}></Icon>
                </div>
            </div>
            <div className={styles['overlay__content']}>
                { children }
            </div>
        </div>
    )
}

export default function Overlay({ trigger, children }: OverlayProps) {
    const overlayElem = useRef<HTMLDialogElement>(null);
    const [ isOpen, setIsOpen ] = useState(false);

    const openOverlay = () => {
        setIsOpen(true);

        if (overlayElem) {
            overlayElem.current?.showModal();
        }
    }
    const closeOverlay = () => {
        setIsOpen(false);

        if (overlayElem) {
            overlayElem.current?.close();
        }
    }

    return (
        <>
            <div onClick={openOverlay}>
                { trigger }
            </div>
            <dialog ref={overlayElem} className={clsx(styles['overlay'], isOpen ? styles['overlay--open'] : styles['overlay--closed'])}>
                { isOpen && <OverlayInner isOpen={isOpen} closeHandler={closeOverlay}>{children}</OverlayInner> }
            </dialog>
        </>
    )
}