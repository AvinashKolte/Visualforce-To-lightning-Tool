public with sharing class VfToLightningController {
    public VfToLightningController() {

    }

    @AuraEnabled
    public static Map<String,String> getMapping(String staticResourceName){

        Map<String,String> mapOfResource=new Map<String,String>();
        try{
        StaticResource sr = [select id,body from StaticResource Where Name =:staticResourceName];
        String contents = sr.body.toString();
        for(String line:contents.split('\n')) {
        // Do something with this config
        if(line!=null && line!='' && line.contains('-'))
        {
            List<String> line1=line.split('-');
            mapOfResource.put(line1[0],line1[1]);
            
        }
        }
        if(mapOfResource!=null && mapOfResource.size()>0)
        {
            return mapOfResource;
        }
        else {
            return null;
        }
        }
        catch(Exception ex)
        {
            return null;
        }
    }
}
