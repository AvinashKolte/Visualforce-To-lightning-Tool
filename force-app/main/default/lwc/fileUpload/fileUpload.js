/* eslint-disable no-console */
import { LightningElement } from 'lwc';

export default class FileUpload extends LightningElement {
    handleFilesChange(event)
    {
        const fileData=event.target.value;
        console.log("file data:-->"+fileData);
    }

    handleClick()
    {
        console.log("inside button click-->");
    }
}