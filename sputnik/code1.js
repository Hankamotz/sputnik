gdjs.jokoaCode = {};


gdjs.jokoaCode.GDpauseObjects1= [];
gdjs.jokoaCode.GDpauseObjects2= [];
gdjs.jokoaCode.GDpauseObjects3= [];
gdjs.jokoaCode.GDScoreTextObjects1= [];
gdjs.jokoaCode.GDScoreTextObjects2= [];
gdjs.jokoaCode.GDScoreTextObjects3= [];
gdjs.jokoaCode.GDsputnikObjects1= [];
gdjs.jokoaCode.GDsputnikObjects2= [];
gdjs.jokoaCode.GDsputnikObjects3= [];
gdjs.jokoaCode.GDtxapaObjects1= [];
gdjs.jokoaCode.GDtxapaObjects2= [];
gdjs.jokoaCode.GDtxapaObjects3= [];
gdjs.jokoaCode.GDtorlojuObjects1= [];
gdjs.jokoaCode.GDtorlojuObjects2= [];
gdjs.jokoaCode.GDtorlojuObjects3= [];
gdjs.jokoaCode.GDgurpilObjects1= [];
gdjs.jokoaCode.GDgurpilObjects2= [];
gdjs.jokoaCode.GDgurpilObjects3= [];
gdjs.jokoaCode.GDkonoObjects1= [];
gdjs.jokoaCode.GDkonoObjects2= [];
gdjs.jokoaCode.GDkonoObjects3= [];
gdjs.jokoaCode.GDoinarriObjects1= [];
gdjs.jokoaCode.GDoinarriObjects2= [];
gdjs.jokoaCode.GDoinarriObjects3= [];
gdjs.jokoaCode.GDtapObjects1= [];
gdjs.jokoaCode.GDtapObjects2= [];
gdjs.jokoaCode.GDtapObjects3= [];

gdjs.jokoaCode.conditionTrue_0 = {val:false};
gdjs.jokoaCode.condition0IsTrue_0 = {val:false};
gdjs.jokoaCode.condition1IsTrue_0 = {val:false};

gdjs.jokoaCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.jokoaCode.GDpauseObjects1.length = 0;
gdjs.jokoaCode.GDpauseObjects2.length = 0;
gdjs.jokoaCode.GDpauseObjects3.length = 0;
gdjs.jokoaCode.GDScoreTextObjects1.length = 0;
gdjs.jokoaCode.GDScoreTextObjects2.length = 0;
gdjs.jokoaCode.GDScoreTextObjects3.length = 0;
gdjs.jokoaCode.GDsputnikObjects1.length = 0;
gdjs.jokoaCode.GDsputnikObjects2.length = 0;
gdjs.jokoaCode.GDsputnikObjects3.length = 0;
gdjs.jokoaCode.GDtxapaObjects1.length = 0;
gdjs.jokoaCode.GDtxapaObjects2.length = 0;
gdjs.jokoaCode.GDtxapaObjects3.length = 0;
gdjs.jokoaCode.GDtorlojuObjects1.length = 0;
gdjs.jokoaCode.GDtorlojuObjects2.length = 0;
gdjs.jokoaCode.GDtorlojuObjects3.length = 0;
gdjs.jokoaCode.GDgurpilObjects1.length = 0;
gdjs.jokoaCode.GDgurpilObjects2.length = 0;
gdjs.jokoaCode.GDgurpilObjects3.length = 0;
gdjs.jokoaCode.GDkonoObjects1.length = 0;
gdjs.jokoaCode.GDkonoObjects2.length = 0;
gdjs.jokoaCode.GDkonoObjects3.length = 0;
gdjs.jokoaCode.GDoinarriObjects1.length = 0;
gdjs.jokoaCode.GDoinarriObjects2.length = 0;
gdjs.jokoaCode.GDoinarriObjects3.length = 0;
gdjs.jokoaCode.GDtapObjects1.length = 0;
gdjs.jokoaCode.GDtapObjects2.length = 0;
gdjs.jokoaCode.GDtapObjects3.length = 0;


{


gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.jokoaCode.GDScoreTextObjects1.createFrom(runtimeScene.getObjects("ScoreText"));

{for(var i = 0, len = gdjs.jokoaCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDScoreTextObjects1[i].setString(+gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}
}


{

gdjs.jokoaCode.GDtapObjects1.createFrom(runtimeScene.getObjects("tap"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.5, "hasiera");
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDtapObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDtapObjects1[i].setOpacity(gdjs.jokoaCode.GDtapObjects1[i].getOpacity() - (128*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{


gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) < 360;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.jokoaCode.GDsputnikObjects3.createFrom(runtimeScene.getObjects("sputnik"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.jokoaCode.GDsputnikObjects3.length;i<l;++i) {
    if ( !(gdjs.jokoaCode.GDsputnikObjects3[i].getX() <= 60) ) {
        gdjs.jokoaCode.condition0IsTrue_0.val = true;
        gdjs.jokoaCode.GDsputnikObjects3[k] = gdjs.jokoaCode.GDsputnikObjects3[i];
        ++k;
    }
}
gdjs.jokoaCode.GDsputnikObjects3.length = k;}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDsputnikObjects3.length ;i < len;++i) {
    gdjs.jokoaCode.GDsputnikObjects3[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.jokoaCode.GDsputnikObjects3.length ;i < len;++i) {
    gdjs.jokoaCode.GDsputnikObjects3[i].addPolarForce(180, 300, 0);
}
}}

}

} //End of subevents
}

}

} //End of subevents
}

}


{


gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) > 360;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.jokoaCode.GDsputnikObjects3.createFrom(runtimeScene.getObjects("sputnik"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.jokoaCode.GDsputnikObjects3.length;i<l;++i) {
    if ( !(gdjs.jokoaCode.GDsputnikObjects3[i].getX() >= 660) ) {
        gdjs.jokoaCode.condition0IsTrue_0.val = true;
        gdjs.jokoaCode.GDsputnikObjects3[k] = gdjs.jokoaCode.GDsputnikObjects3[i];
        ++k;
    }
}
gdjs.jokoaCode.GDsputnikObjects3.length = k;}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDsputnikObjects3.length ;i < len;++i) {
    gdjs.jokoaCode.GDsputnikObjects3[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.jokoaCode.GDsputnikObjects3.length ;i < len;++i) {
    gdjs.jokoaCode.GDsputnikObjects3[i].addPolarForce(0, 300, 0);
}
}}

}

} //End of subevents
}

}

} //End of subevents
}

}


{



}


{

gdjs.jokoaCode.GDsputnikObjects1.createFrom(runtimeScene.getObjects("sputnik"));
gdjs.jokoaCode.GDtorlojuObjects1.createFrom(runtimeScene.getObjects("torloju"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("sputnik", gdjs.jokoaCode.GDsputnikObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("torloju", gdjs.jokoaCode.GDtorlojuObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.jokoaCode.GDsputnikObjects1.createFrom(runtimeScene.getObjects("sputnik"));
gdjs.jokoaCode.GDtxapaObjects1.createFrom(runtimeScene.getObjects("txapa"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("sputnik", gdjs.jokoaCode.GDsputnikObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("txapa", gdjs.jokoaCode.GDtxapaObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.jokoaCode.GDgurpilObjects1.createFrom(runtimeScene.getObjects("gurpil"));
gdjs.jokoaCode.GDsputnikObjects1.createFrom(runtimeScene.getObjects("sputnik"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("sputnik", gdjs.jokoaCode.GDsputnikObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("gurpil", gdjs.jokoaCode.GDgurpilObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.jokoaCode.GDkonoObjects1.createFrom(runtimeScene.getObjects("kono"));
gdjs.jokoaCode.GDsputnikObjects1.createFrom(runtimeScene.getObjects("sputnik"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("sputnik", gdjs.jokoaCode.GDsputnikObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("kono", gdjs.jokoaCode.GDkonoObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{



}


{

gdjs.jokoaCode.GDtxapaObjects1.createFrom(runtimeScene.getObjects("txapa"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("txapa", gdjs.jokoaCode.GDtxapaObjects1).getEventsObjectsMap()) < 1;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("txapa", gdjs.jokoaCode.GDtxapaObjects1).getEventsObjectsMap(), 700-gdjs.random(680), -600+gdjs.random(600), "juego");
}}

}


{

gdjs.jokoaCode.GDtxapaObjects1.createFrom(runtimeScene.getObjects("txapa"));

{for(var i = 0, len = gdjs.jokoaCode.GDtxapaObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDtxapaObjects1[i].addForce(0, 150, 0);
}
}{for(var i = 0, len = gdjs.jokoaCode.GDtxapaObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDtxapaObjects1[i].rotate(30, runtimeScene);
}
}
}


{

gdjs.jokoaCode.GDtxapaObjects1.createFrom(runtimeScene.getObjects("txapa"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.jokoaCode.GDtxapaObjects1.length;i<l;++i) {
    if ( gdjs.jokoaCode.GDtxapaObjects1[i].getY() >= 1270 ) {
        gdjs.jokoaCode.condition0IsTrue_0.val = true;
        gdjs.jokoaCode.GDtxapaObjects1[k] = gdjs.jokoaCode.GDtxapaObjects1[i];
        ++k;
    }
}
gdjs.jokoaCode.GDtxapaObjects1.length = k;}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDtxapaObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDtxapaObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}}

}


{

gdjs.jokoaCode.GDtorlojuObjects1.createFrom(runtimeScene.getObjects("torloju"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("torloju", gdjs.jokoaCode.GDtorlojuObjects1).getEventsObjectsMap()) < 1;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("torloju", gdjs.jokoaCode.GDtorlojuObjects1).getEventsObjectsMap(), 700-gdjs.random(680), -300+gdjs.random(300), "juego");
}}

}


{

gdjs.jokoaCode.GDtorlojuObjects1.createFrom(runtimeScene.getObjects("torloju"));

{for(var i = 0, len = gdjs.jokoaCode.GDtorlojuObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDtorlojuObjects1[i].addForce(0, 200, 0);
}
}{for(var i = 0, len = gdjs.jokoaCode.GDtorlojuObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDtorlojuObjects1[i].rotate(-50, runtimeScene);
}
}
}


{

gdjs.jokoaCode.GDtorlojuObjects1.createFrom(runtimeScene.getObjects("torloju"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.jokoaCode.GDtorlojuObjects1.length;i<l;++i) {
    if ( gdjs.jokoaCode.GDtorlojuObjects1[i].getY() >= 1270 ) {
        gdjs.jokoaCode.condition0IsTrue_0.val = true;
        gdjs.jokoaCode.GDtorlojuObjects1[k] = gdjs.jokoaCode.GDtorlojuObjects1[i];
        ++k;
    }
}
gdjs.jokoaCode.GDtorlojuObjects1.length = k;}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDtorlojuObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDtorlojuObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}}

}


{

gdjs.jokoaCode.GDgurpilObjects1.createFrom(runtimeScene.getObjects("gurpil"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("gurpil", gdjs.jokoaCode.GDgurpilObjects1).getEventsObjectsMap()) < 1;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("gurpil", gdjs.jokoaCode.GDgurpilObjects1).getEventsObjectsMap(), 700-gdjs.random(680), -900+gdjs.random(900), "juego");
}}

}


{

gdjs.jokoaCode.GDgurpilObjects1.createFrom(runtimeScene.getObjects("gurpil"));

{for(var i = 0, len = gdjs.jokoaCode.GDgurpilObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDgurpilObjects1[i].addForce(0, 175, 0);
}
}{for(var i = 0, len = gdjs.jokoaCode.GDgurpilObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDgurpilObjects1[i].rotate(-40, runtimeScene);
}
}
}


{

gdjs.jokoaCode.GDgurpilObjects1.createFrom(runtimeScene.getObjects("gurpil"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.jokoaCode.GDgurpilObjects1.length;i<l;++i) {
    if ( gdjs.jokoaCode.GDgurpilObjects1[i].getY() >= 1270 ) {
        gdjs.jokoaCode.condition0IsTrue_0.val = true;
        gdjs.jokoaCode.GDgurpilObjects1[k] = gdjs.jokoaCode.GDgurpilObjects1[i];
        ++k;
    }
}
gdjs.jokoaCode.GDgurpilObjects1.length = k;}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDgurpilObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDgurpilObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}}

}


{

gdjs.jokoaCode.GDkonoObjects1.createFrom(runtimeScene.getObjects("kono"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("kono", gdjs.jokoaCode.GDkonoObjects1).getEventsObjectsMap()) < 1;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("kono", gdjs.jokoaCode.GDkonoObjects1).getEventsObjectsMap(), 700-gdjs.random(680), -1200+gdjs.random(1200), "juego");
}}

}


{

gdjs.jokoaCode.GDkonoObjects1.createFrom(runtimeScene.getObjects("kono"));

{for(var i = 0, len = gdjs.jokoaCode.GDkonoObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDkonoObjects1[i].addForce(0, 120, 0);
}
}{for(var i = 0, len = gdjs.jokoaCode.GDkonoObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDkonoObjects1[i].rotate(15, runtimeScene);
}
}
}


{

gdjs.jokoaCode.GDkonoObjects1.createFrom(runtimeScene.getObjects("kono"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.jokoaCode.GDkonoObjects1.length;i<l;++i) {
    if ( gdjs.jokoaCode.GDkonoObjects1[i].getY() >= 1270 ) {
        gdjs.jokoaCode.condition0IsTrue_0.val = true;
        gdjs.jokoaCode.GDkonoObjects1[k] = gdjs.jokoaCode.GDkonoObjects1[i];
        ++k;
    }
}
gdjs.jokoaCode.GDkonoObjects1.length = k;}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDkonoObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDkonoObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}}

}


{


gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > 15;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.jokoaCode.GDtxapaObjects2.createFrom(runtimeScene.getObjects("txapa"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("txapa", gdjs.jokoaCode.GDtxapaObjects2).getEventsObjectsMap()) < 2;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("txapa", gdjs.jokoaCode.GDtxapaObjects2).getEventsObjectsMap(), 700-gdjs.random(680), -600+gdjs.random(600), "juego");
}}

}

} //End of subevents
}

}


{

gdjs.jokoaCode.GDtorlojuObjects1.createFrom(runtimeScene.getObjects("torloju"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > 30;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDtorlojuObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDtorlojuObjects1[i].addForce(0, 205, 0);
}
}
{ //Subevents

{

gdjs.jokoaCode.GDtorlojuObjects2.createFrom(gdjs.jokoaCode.GDtorlojuObjects1);

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("torloju", gdjs.jokoaCode.GDtorlojuObjects2).getEventsObjectsMap()) < 2;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("torloju", gdjs.jokoaCode.GDtorlojuObjects2).getEventsObjectsMap(), 700-gdjs.random(680), -300+gdjs.random(300), "juego");
}}

}

} //End of subevents
}

}


{

gdjs.jokoaCode.GDgurpilObjects1.createFrom(runtimeScene.getObjects("gurpil"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > 45;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDgurpilObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDgurpilObjects1[i].addForce(0, 208, 0);
}
}
{ //Subevents

{

gdjs.jokoaCode.GDgurpilObjects2.createFrom(gdjs.jokoaCode.GDgurpilObjects1);

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("gurpil", gdjs.jokoaCode.GDgurpilObjects2).getEventsObjectsMap()) < 2;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("gurpil", gdjs.jokoaCode.GDgurpilObjects2).getEventsObjectsMap(), 700-gdjs.random(680), -900+gdjs.random(900), "juego");
}}

}

} //End of subevents
}

}


{

gdjs.jokoaCode.GDkonoObjects1.createFrom(runtimeScene.getObjects("kono"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > 60;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDkonoObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDkonoObjects1[i].addForce(0, 150, 0);
}
}
{ //Subevents

{

gdjs.jokoaCode.GDkonoObjects2.createFrom(gdjs.jokoaCode.GDkonoObjects1);

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("kono", gdjs.jokoaCode.GDkonoObjects2).getEventsObjectsMap()) < 2;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("kono", gdjs.jokoaCode.GDkonoObjects2).getEventsObjectsMap(), 700-gdjs.random(680), -1200+gdjs.random(1200), "juego");
}}

}

} //End of subevents
}

}


{

gdjs.jokoaCode.GDtxapaObjects1.createFrom(runtimeScene.getObjects("txapa"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > 90;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDtxapaObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDtxapaObjects1[i].addForce(0, 180, 0);
}
}
{ //Subevents

{

gdjs.jokoaCode.GDtxapaObjects2.createFrom(gdjs.jokoaCode.GDtxapaObjects1);

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("txapa", gdjs.jokoaCode.GDtxapaObjects2).getEventsObjectsMap()) < 3;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("txapa", gdjs.jokoaCode.GDtxapaObjects2).getEventsObjectsMap(), 700-gdjs.random(680), -600+gdjs.random(600), "juego");
}}

}

} //End of subevents
}

}


{

gdjs.jokoaCode.GDtorlojuObjects1.createFrom(runtimeScene.getObjects("torloju"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > 120;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDtorlojuObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDtorlojuObjects1[i].addForce(0, 225, 0);
}
}
{ //Subevents

{

gdjs.jokoaCode.GDtorlojuObjects2.createFrom(gdjs.jokoaCode.GDtorlojuObjects1);

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("torloju", gdjs.jokoaCode.GDtorlojuObjects2).getEventsObjectsMap()) < 3;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("torloju", gdjs.jokoaCode.GDtorlojuObjects2).getEventsObjectsMap(), 700-gdjs.random(680), -300+gdjs.random(300), "juego");
}}

}

} //End of subevents
}

}


{

gdjs.jokoaCode.GDgurpilObjects1.createFrom(runtimeScene.getObjects("gurpil"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > 150;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDgurpilObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDgurpilObjects1[i].addForce(0, 220, 0);
}
}
{ //Subevents

{

gdjs.jokoaCode.GDgurpilObjects2.createFrom(gdjs.jokoaCode.GDgurpilObjects1);

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("gurpil", gdjs.jokoaCode.GDgurpilObjects2).getEventsObjectsMap()) < 3;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("gurpil", gdjs.jokoaCode.GDgurpilObjects2).getEventsObjectsMap(), 700-gdjs.random(680), -900+gdjs.random(900), "juego");
}}

}

} //End of subevents
}

}


{

gdjs.jokoaCode.GDkonoObjects1.createFrom(runtimeScene.getObjects("kono"));
gdjs.jokoaCode.GDtxapaObjects1.createFrom(runtimeScene.getObjects("txapa"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > 180;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDtxapaObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDtxapaObjects1[i].addForce(0, 200, 0);
}
}{for(var i = 0, len = gdjs.jokoaCode.GDkonoObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDkonoObjects1[i].addForce(0, 180, 0);
}
}
{ //Subevents

{

gdjs.jokoaCode.GDkonoObjects2.createFrom(gdjs.jokoaCode.GDkonoObjects1);

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("kono", gdjs.jokoaCode.GDkonoObjects2).getEventsObjectsMap()) < 3;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("kono", gdjs.jokoaCode.GDkonoObjects2).getEventsObjectsMap(), 700-gdjs.random(680), -1200+gdjs.random(1200), "juego");
}}

}

} //End of subevents
}

}


{



}


{


{gdjs.evtTools.storage.readNumberFromJSONFile("BS.xml", "SCORE", runtimeScene, runtimeScene.getVariables().getFromIndex(3));
}
}


{

gdjs.jokoaCode.GDsputnikObjects1.createFrom(runtimeScene.getObjects("sputnik"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.jokoaCode.GDsputnikObjects1.length ;i < len;++i) {
    gdjs.jokoaCode.GDsputnikObjects1[i].addPolarForce(90, 200, 0);
}
}
{ //Subevents

{


gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3));
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("BS.xml", "SCORE", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}}

}

} //End of subevents
}

}


{

gdjs.jokoaCode.GDsputnikObjects1.createFrom(runtimeScene.getObjects("sputnik"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.jokoaCode.GDsputnikObjects1.length;i<l;++i) {
    if ( gdjs.jokoaCode.GDsputnikObjects1[i].getY() >= 1270 ) {
        gdjs.jokoaCode.condition0IsTrue_0.val = true;
        gdjs.jokoaCode.GDsputnikObjects1[k] = gdjs.jokoaCode.GDsputnikObjects1[i];
        ++k;
    }
}
gdjs.jokoaCode.GDsputnikObjects1.length = k;}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{



}


{

gdjs.jokoaCode.GDpauseObjects1.createFrom(runtimeScene.getObjects("pause"));

gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("pause", gdjs.jokoaCode.GDpauseObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jokoaCode.condition0IsTrue_0.val = false;
{
gdjs.jokoaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.jokoaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}}

}

} //End of subevents
}

}

return;
}
gdjs['jokoaCode']= gdjs.jokoaCode;
