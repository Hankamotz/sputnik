gdjs.pauseCode = {};


gdjs.pauseCode.GDesnebideaObjects1= [];
gdjs.pauseCode.GDesnebideaObjects2= [];
gdjs.pauseCode.GDplayObjects1= [];
gdjs.pauseCode.GDplayObjects2= [];
gdjs.pauseCode.GDPAUSEObjects1= [];
gdjs.pauseCode.GDPAUSEObjects2= [];

gdjs.pauseCode.conditionTrue_0 = {val:false};
gdjs.pauseCode.condition0IsTrue_0 = {val:false};
gdjs.pauseCode.condition1IsTrue_0 = {val:false};

gdjs.pauseCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.pauseCode.GDesnebideaObjects1.length = 0;
gdjs.pauseCode.GDesnebideaObjects2.length = 0;
gdjs.pauseCode.GDplayObjects1.length = 0;
gdjs.pauseCode.GDplayObjects2.length = 0;
gdjs.pauseCode.GDPAUSEObjects1.length = 0;
gdjs.pauseCode.GDPAUSEObjects2.length = 0;


{

gdjs.pauseCode.GDplayObjects1.createFrom(runtimeScene.getObjects("play"));

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("play", gdjs.pauseCode.GDplayObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}

} //End of subevents
}

}

return;
}
gdjs['pauseCode']= gdjs.pauseCode;
