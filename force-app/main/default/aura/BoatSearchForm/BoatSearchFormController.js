({
    inti :  function(component, event, helper){
        var action = cmp.get("c.getBoatTypes");
        action.setParams({ firstName : cmp.get("v.firstName") });
 
        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.boatTypeToIds", response.getReturnValue())
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },

    newBoat : function(component, event, helper) {
        var createAcountContactEvent = $A.get("e.force:createRecord");
        createAcountContactEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                // 'Phone' : '415-240-6590',
                // 'AccountId' : '001xxxxxxxxxxxxxxx'
            }
        });
        createAcountContactEvent.fire();
    }
})
