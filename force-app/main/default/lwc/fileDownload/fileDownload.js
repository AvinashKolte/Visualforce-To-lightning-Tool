import { LightningElement, api } from 'lwc';

export default class FileDownload extends LightningElement {
    /*@api
    data='';*/
    download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      }

    /*  handleChange(event)
      {
          this.data=event.target.value;
            
      }
      handleClick()
    {
        const fileName="demo.txt";
        this.download(fileName,this.data);
    }*/
    @api
    handleDownload(fileName,text)
    {
        this.download(fileName,text);
    }
}