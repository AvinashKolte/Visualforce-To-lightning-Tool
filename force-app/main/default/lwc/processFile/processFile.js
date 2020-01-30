/* eslint-disable no-console */
import { LightningElement, api } from 'lwc';
export default class ProcessFile extends LightningElement {
   
    @api
    processDocument(data)
    {
        console.log("data-->"+data);
        const parser = new DOMParser();
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
        }
    }
}