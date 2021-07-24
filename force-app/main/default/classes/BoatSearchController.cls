public with sharing class BoatSearchController {
    @AuraEnabled
    public static Map<String, Id> getBoatTypes() {
        Map<String, Id> boatTypeToId = new Map<String, Id>();
        for(BoatType__c bt : [SELECT Id, Name FROM BoatType__c]){
            boatTypeToId.put(bt.Name, bt.Id);
        }
        return boatTypeToId;
    }
}
