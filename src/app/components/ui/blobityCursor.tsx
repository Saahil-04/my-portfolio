'use client'

import { useEffect, useRef } from 'react'

type BlobityInstance = {
    pause?: () => void;
    resume?: () => void;
    destroy?: () => void;
};

const BlobityCursor = () => {
    const blobityRef = useRef<BlobityInstance | any>(null)

    useEffect(() => {

        if (typeof window === 'undefined' || 'ontouchstart' in window) return

        let destroyed = false;

        import('blobity').then(({ default: Blobity }) => {
            if (destroyed) return;
            blobityRef.current = new Blobity({
                licenseKey: 'opensource',
                color: '#0ea5e9',
                invert: true,
                radius: 12,
                focusableElementsOffsetX: 5,
                focusableElementsOffsetY: 5,
                magnetic: true,
                zIndex: 9999,
                dotColor: '#25dbde',
                font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,sans-serif",
                fontSize: 26,
                tooltipPadding: 12,
                mode: 'bouncy',
            })
        })

        const pause = () => blobityRef.current?.pause?.()
        const resume = () => blobityRef.current?.resume?.()
        window.addEventListener('blur', pause)
        window.addEventListener('focus', resume)

        return () => {
            destroyed = true;
            blobityRef.current?.destroy?.()
        }
    }, [])

    return null
}

export default BlobityCursor