import { useState, useEffect } from "react";

import { pdf } from '@react-pdf/renderer';

import Button from "./Button";

import "../styles/components/DownloadButton.scss";

const DownloadButton = ({ className, docComponent, fileName, label }) => {
    const [downloadLink, setDownloadLink] = useState();

    useEffect(() => {
        async function getDownloadLink() {
            const blob = await pdf(docComponent).toBlob();
            const downloadLink = URL.createObjectURL(blob);
            setDownloadLink(downloadLink);
        }
        console.log("teste");
        getDownloadLink();
    }, [docComponent]);

    return (
        <a className={`download-button ${className}`} href={downloadLink} download={fileName}>
            <Button
                label={label}
                disabled={!downloadLink}
            />
        </a>
    )
};

export default DownloadButton;
