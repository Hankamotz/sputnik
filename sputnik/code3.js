gdjs.creditsCode = {};


gdjs.creditsCode.GDhomeObjects1= [];
gdjs.creditsCode.GDhomeObjects2= [];
gdjs.creditsCode.GDesnebideaObjects1= [];
gdjs.creditsCode.GDesnebideaObjects2= [];
gdjs.creditsCode.GDcreditsObjects1= [];
gdjs.creditsCode.GDcreditsObjects2= [];
gdjs.creditsCode.GDGdevelopObjects1= [];
gdjs.creditsCode.GDGdevelopObjects2= [];

gdjs.creditsCode.conditionTrue_0 = {val:false};
gdjs.creditsCode.condition0IsTrue_0 = {val:false};
gdjs.creditsCode.condition1IsTrue_0 = {val:false};

gdjs.creditsCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.creditsCode.GDhomeObjects1.length = 0;
gdjs.creditsCode.GDhomeObjects2.length = 0;
gdjs.creditsCode.GDesnebideaObjects1.length = 0;
gdjs.creditsCode.GDesnebideaObjects2.length = 0;
gdjs.creditsCode.GDcreditsObjects1.length = 0;
gdjs.creditsCode.GDcreditsObjects2.length = 0;
gdjs.creditsCode.GDGdevelopObjects1.length = 0;
gdjs.creditsCode.GDGdevelopObjects2.length = 0;


{

gdjs.creditsCode.GDhomeObjects1.createFrom(runtimeScene.getObjects("home"));

gdjs.creditsCode.condition0IsTrue_0.val = false;
{
gdjs.creditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("home", gdjs.creditsCode.GDhomeObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.creditsCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.creditsCode.condition0IsTrue_0.val = false;
{
gdjs.creditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.creditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}

} //End of subevents
}

}

return;
}
gdjs['creditsCode']= gdjs.creditsCode;
