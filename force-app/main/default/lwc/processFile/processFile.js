/* eslint-disable no-console */
import { LightningElement, api } from 'lwc';
import VFLIGHTNINGMAPPING from '@salesforce/resourceUrl/VisualforceToLightningMapping';
import getMapping from '@salesforce/apex/c.VfToLightningController.getMapping';
export default class ProcessFile extends LightningElement {
   
    @api
    processDocument(data)
    {
        
        console.log("data inside process Document-->"+data);
        console.log("before get static resource data-->");
        console.log("this value:-->"+this);
        this.getVfToLightningMapping();
        console.log("after get static resourse data-->");
       /* const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data,"text/xml");
        console.log("xmlDoc::-->"+xmlDoc);
        //console.log("nodes-->"+xmlDoc.getElementsByTagName("apex:page").);
        const parentNode=xmlDoc.documentElement.nodeName;
        const parentAttribute=xmlDoc.documentElement.attributes;
        console.log("attributes of parent:-->"+parentAttribute);
        console.log("parent Node:-->"+parentNode);
        //let txt = "";
        let childNodes = xmlDoc.documentElement.childNodes;
        //console.log("root node:-->"+xmlDoc.documentElement.nodeName);
        //console.log("root node attribute:"+xmlDoc.documentElement.attributes);
        //let childs=xmlDoc.documentElement.childNodes;
        console.log("childs:"+childNodes);
        for(let j=0;j<childNodes.length;j++)
        {
 
          console.log("childs:-->"+childNodes[j].nodeName);
        }*/
    }

    getVfToLightningMapping()
    {
        console.log("inside getVFToLightning Mapping-->");
        const mapping=VFLIGHTNINGMAPPING;
       
        console.log("vf to lightning mapping:-->"+mapping.toString());
        getMapping({staticResourceName:VisualforceToLightningMapping})
        .then(result=>{
            console.log("result:"+result);
        })
        .catch(error=>
            {
                console.log("error->"+error);
            })
         /*  const reader = new FileReader();
            reader.onload = function(){
            let staticData=reader.result;
            console.log("static resource data:-->"+staticData);
        };
        console.log();
        reader.readAsText(mapping);*/
        /*let request = new XMLHttpRequest();
        request.open("GET", mapping, false);
        request.send(null);
        let staticResourceData=request.responseText;
        console.log("staticResourceData:"+staticResourceData);*/
    }
}