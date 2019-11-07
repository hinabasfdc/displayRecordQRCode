import { LightningElement,api,track } from 'lwc';
import qrcode from './js/qrcode.js';

export default class DisplayRecordQRCode extends LightningElement {
    @api recordId;
    @track base64GifImageData;

    renderedCallback() {
        let s = 'https://' + window.location.hostname + '/' + this.recordId;

        const qrCodeGenerated = new qrcode(0, 'H');
        qrCodeGenerated.addData(s);
        qrCodeGenerated.make();
        this.base64GifImageData = qrCodeGenerated.getBase64GifImageData();
   }    
}