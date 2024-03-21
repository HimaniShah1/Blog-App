import React from 'react'
import { 
    WhatsappIcon, WhatsappShareButton, 
    FacebookIcon, FacebookShareButton,
    LinkedinIcon, LinkedinShareButton

} from 'react-share';
import { MdLink, MdClose } from "react-icons/md";

function ShareModal({onClose}) {
    const currentPageUrl = window.location.href;
    const message = 'Check out this blog link: ';

    function copyToClipboard() {
        const textarea = document.createElement('textarea');
        textarea.value = currentPageUrl;
        textarea.setAttribute('readonly', '');
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        alert('Link copied to clipboard!');
    }

  return (
    <div className="share-modal">
            <WhatsappShareButton title={message} url={currentPageUrl}>
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <FacebookShareButton title={message} url={currentPageUrl}>
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton title={message} url={currentPageUrl}> 
                <LinkedinIcon size={32} round={true}/>
            </LinkedinShareButton>
            <button onClick={copyToClipboard}><MdLink /></button>
            <button onClick={onClose}><MdClose /></button>       
    </div>
  )
}

export default ShareModal
