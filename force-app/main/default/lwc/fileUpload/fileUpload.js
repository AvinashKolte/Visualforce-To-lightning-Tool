/* eslint-disable no-console */
import { LightningElement } from 'lwc';

export default class FileUpload extends LightningElement {
     fileData;
    fileName;
    handleFilesChange(event)
    {
        this.fileName=event.target.value;
        console.log("file data:-->"+this.fileName);
        const input = event.target;

    const reader = new FileReader();
    reader.onload = function(){
      this.fileData=reader.result;
        //const dataURL = reader.result;
      //var output = document.getElementById('output');
      //output.src = dataURL;
      console.log("data:-->"+this.fileData);
     /* const fileDown=this.template.querySelector("c-file-download");
      fileDown.handleDownload(this.fileName,this.data);*/
    };
    reader.readAsText(input.files[0]);
    }

    handleClick()
    {
        console.log("inside button click-->");
        console.log("data:"+this.fileData);
        console.log("fileName:"+this.fileName);
        /*const fileDown=this.template.querySelector("c-file-download");
        fileDown.handleDownload(this.fileName,this.data);*/

    }
}