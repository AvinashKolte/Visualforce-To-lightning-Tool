public with sharing class VfToLightningController {
    public VfToLightningController() {

    }

    @AuraEnabled
    public static Map<String,String> getMapping(String staticResourceName){

        Map<String,String> mapOfResource=new Map<String,String>();
        try{
        StaticResource sr = [select id,body from StaticResource Where Name =:staticResourceName];
        String contents = sr.body.toString();
        System.debug('contents:'+contents);
        for(String line:contents.split('\n')) {
        // Do something with this config
        if(line!=null && line!='' && line.contains('-'))
        {
            List<String> line1=line.split('-');
            mapOfResource.put(line1[0],line1[1]);
            
        }
        }
        System.debug('mapOfResource:'+mapOfResource);
        if(mapOfResource!=null && mapOfResource.size()>0)
        {
            System.debug('inside result not null-->');
            return mapOfResource;
        }
        else {
            System.debug('inside result null-->');
            return null;
        }
        }
        catch(Exception ex)
        {
            System.debug('inside exception--->');
            return null;
        }
    }
}
