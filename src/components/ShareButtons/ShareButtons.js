import React from "react";
import './ShareButtons.css'
import fb from '../../images/fb.svg'
import vk from '../../images/vk.svg'
import tw from '../../images/tw.svg'
import inst from '../../images/inst.svg'




function ShareButtons() {
    return (
        <div className="share-container">
            <a href="https://facebook.com/" target="blank" className="share-links share-links_fb"><img src={fb} alt="facebook" className="share-icons"/></a>
            <a href="https://vk.ru/" target="blank" className="share-links share-links_vk"><img src={vk} alt="vk" className="share-icons"/></a>
            <a href="https://x.com/" target="blank" className="share-links share-links_tw"><img src={tw} alt="twitter" className="share-icons"/></a>
            <a href="https://instagram.com/" target="blank" className="share-links share-links_inst"><img src={inst} alt="instagram" className="share-icons"/></a>
        </div>
    )
}

export default ShareButtons;