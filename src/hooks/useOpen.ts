import { useState, useEffect } from 'react';


interface Message {
    request: string;
}

export function useOpen() {

    const [open, setOpen] = useState(false);

    useEffect(() => {

        if(chrome.runtime){
            const handleMessage = (message: Message) => {
                if (message.request === 'open') {
                    setOpen(true);
                }
            }
            chrome.runtime.onMessage.addListener(handleMessage);
    
            return () => {
                chrome.runtime.onMessage.removeListener(handleMessage)
            }
        } else {
            // cmd + k
            const handleKeyDown = (event: KeyboardEvent) => {
                if (event.key === 'k' && event.metaKey) {
                    setOpen(true);
                }
            }
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            }  
        }
    }, [])


    return [open, {
        toggle: setOpen,
        close: () => setOpen(false),
    }] as const
}