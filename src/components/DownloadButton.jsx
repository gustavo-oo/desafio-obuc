import { useState, useEffect, useRef, useCallback } from "react";

import { pdf } from '@react-pdf/renderer';

import Button from "./Button";

import "../styles/components/DownloadButton.scss";

const DownloadButton = ({ className, docComponent, fileName, label }) => {
    const [downloadLink, setDownloadLink] = useState();
    const downloadButtonRef = useRef();

    const clickToDownload = useCallback(() =>{
        downloadButtonRef.current.click();
        URL.revokeObjectURL(downloadLink);
        setDownloadLink(null);
    }, [downloadButtonRef, downloadLink])

    useEffect(() => {
        if (downloadLink) {
            clickToDownload();
        }
    }, [downloadLink, clickToDownload]);

    async function loadBlob() {
        const blob = await pdf(docComponent).toBlob();
        const downloadLink = URL.createObjectURL(blob);
        setDownloadLink(downloadLink);
    }

    async function downloadFile(event) {
        event.stopPropagation();

        if (downloadLink) {
            clickToDownload();
        } else {
            loadBlob();
        }
    }

    return (
        <a
            ref={downloadButtonRef}
            className={`download-button ${className}`}
            href={downloadLink}
            download={fileName}
        >
            <Button
                label={label}
                onClick={downloadFile}
                disabled={downloadLink}
            />
        </a>
    )
};

export default DownloadButton;
