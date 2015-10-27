gdjs.hasieraCode = {};


gdjs.hasieraCode.GDfondoaObjects1= [];
gdjs.hasieraCode.GDfondoaObjects2= [];
gdjs.hasieraCode.GDplayObjects1= [];
gdjs.hasieraCode.GDplayObjects2= [];
gdjs.hasieraCode.GDcreditsObjects1= [];
gdjs.hasieraCode.GDcreditsObjects2= [];
gdjs.hasieraCode.GDbestObjects1= [];
gdjs.hasieraCode.GDbestObjects2= [];
gdjs.hasieraCode.GDmusicObjects1= [];
gdjs.hasieraCode.GDmusicObjects2= [];
gdjs.hasieraCode.GDmusicoffObjects1= [];
gdjs.hasieraCode.GDmusicoffObjects2= [];

gdjs.hasieraCode.conditionTrue_0 = {val:false};
gdjs.hasieraCode.condition0IsTrue_0 = {val:false};
gdjs.hasieraCode.condition1IsTrue_0 = {val:false};

gdjs.hasieraCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.hasieraCode.GDfondoaObjects1.length = 0;
gdjs.hasieraCode.GDfondoaObjects2.length = 0;
gdjs.hasieraCode.GDplayObjects1.length = 0;
gdjs.hasieraCode.GDplayObjects2.length = 0;
gdjs.hasieraCode.GDcreditsObjects1.length = 0;
gdjs.hasieraCode.GDcreditsObjects2.length = 0;
gdjs.hasieraCode.GDbestObjects1.length = 0;
gdjs.hasieraCode.GDbestObjects2.length = 0;
gdjs.hasieraCode.GDmusicObjects1.length = 0;
gdjs.hasieraCode.GDmusicObjects2.length = 0;
gdjs.hasieraCode.GDmusicoffObjects1.length = 0;
gdjs.hasieraCode.GDmusicoffObjects2.length = 0;


{


gdjs.hasieraCode.condition0IsTrue_0.val = false;
{
gdjs.hasieraCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.hasieraCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "mixdown.ogg", true, 70, 1);
}}

}


{

gdjs.hasieraCode.GDbestObjects1.createFrom(runtimeScene.getObjects("best"));

{gdjs.evtTools.storage.readNumberFromJSONFile("BS.xml", "SCORE", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.hasieraCode.GDbestObjects1.length ;i < len;++i) {
    gdjs.hasieraCode.GDbestObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}
}


{

gdjs.hasieraCode.GDplayObjects1.createFrom(runtimeScene.getObjects("play"));

gdjs.hasieraCode.condition0IsTrue_0.val = false;
{
gdjs.hasieraCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("play", gdjs.hasieraCode.GDplayObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.hasieraCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.hasieraCode.condition0IsTrue_0.val = false;
{
gdjs.hasieraCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.hasieraCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "jokoa");
}}

}

} //End of subevents
}

}


{

gdjs.hasieraCode.GDcreditsObjects1.createFrom(runtimeScene.getObjects("credits"));

gdjs.hasieraCode.condition0IsTrue_0.val = false;
{
gdjs.hasieraCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("credits", gdjs.hasieraCode.GDcreditsObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.hasieraCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.hasieraCode.condition0IsTrue_0.val = false;
{
gdjs.hasieraCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.hasieraCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "credits");
}}

}

} //End of subevents
}

}


{

gdjs.hasieraCode.GDmusicoffObjects1.createFrom(runtimeScene.getObjects("musicoff"));

gdjs.hasieraCode.condition0IsTrue_0.val = false;
{
gdjs.hasieraCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("musicoff", gdjs.hasieraCode.GDmusicoffObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.hasieraCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.hasieraCode.condition0IsTrue_0.val = false;
{
gdjs.hasieraCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.hasieraCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}

} //End of subevents
}

}


{

gdjs.hasieraCode.GDmusicObjects1.createFrom(runtimeScene.getObjects("music"));

gdjs.hasieraCode.condition0IsTrue_0.val = false;
{
gdjs.hasieraCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("music", gdjs.hasieraCode.GDmusicObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.hasieraCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.hasieraCode.condition0IsTrue_0.val = false;
{
gdjs.hasieraCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.hasieraCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 70);
}}

}

} //End of subevents
}

}

return;
}
gdjs['hasieraCode']= gdjs.hasieraCode;
