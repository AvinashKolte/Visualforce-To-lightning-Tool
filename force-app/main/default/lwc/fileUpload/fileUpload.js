/* eslint-disable no-console */
import { LightningElement } from 'lwc';

export default class FileUpload extends LightningElement {
    handleFilesChange(event)
    {
        const fileData=event.target.value;
        console.log("file data:-->"+fileData);
        const input = event.target;

    const reader = new FileReader();
    reader.onload = function(){
      const dataURL = reader.result;
      //var output = document.getElementById('output');
      //output.src = dataURL;
      console.log("data:-->"+dataURL.toString());
    };
    reader.readAsText(input.files[0]);
    }

    handleClick()
    {
        console.log("inside button click-->");
    }
}