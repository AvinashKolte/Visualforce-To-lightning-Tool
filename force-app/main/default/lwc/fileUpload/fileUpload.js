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
        let self=this;
        const reader = new FileReader();
        reader.onload = function(){
        self.fileData=reader.result;
        console.log("data:-->"+self.fileData);
        
        /*for (let i = 0; i <x.length; i++) {
        // Process only element nodes (type 1)
        txt += x[i].nodeName +" ";
         }
        console.log("txt:-->"+txt);*/
      /* const fileDown=this.template.querySelector("c-file-download");
        fileDown.handleDownload(this.fileName,this.data);*/
    };
    console.log();
    reader.readAsText(input.files[0]);
    }

    handleClick()
    {
        console.log("inside button click-->");
        console.log("data:"+this.fileData);
        console.log("fileName:"+this.fileName);
        const processFile=this.template.querySelector("c-process-file");
        processFile.processDocument(this.fileData);
        /*const fileDown=this.template.querySelector("c-file-download");
        fileDown.handleDownload(this.fileName,this.data);*/

    }

  
}