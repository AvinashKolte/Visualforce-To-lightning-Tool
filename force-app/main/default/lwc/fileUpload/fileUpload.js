/* eslint-disable no-console */
import { LightningElement } from 'lwc';

export default class FileUpload extends LightningElement {
    data;
    fileName;
    handleFilesChange(event)
    {
        this.fileName=event.target.value;
        console.log("file data:-->"+this.fileName);
        const input = event.target;

    const reader = new FileReader();
    reader.onload = function(){
      this.data=reader.result;
        //const dataURL = reader.result;
      //var output = document.getElementById('output');
      //output.src = dataURL;
      console.log("data:-->"+this.data);
    };
    reader.readAsText(input.files[0]);
    }

    handleClick()
    {
        console.log("inside button click-->");
        const fileDown=this.template.querySelector("fileDownload");
        fileDown.hadleDownload(this.fileName,this.data);

    }
}