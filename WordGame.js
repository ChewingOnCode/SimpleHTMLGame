/** @format */

function tellStory() {
    // Gather form data
    let boyName = document.getElementById("boyName");
    let girlName = document.getElementById("girlName");
    let geoLocation = document.getElementById("geoLocation");
    let txtverb = document.getElementById("verb");
    let txtcontainer = document.getElementById("container");
    let txtliquid = document.getElementById("liquid");
    let bodyPart = document.getElementById("bodyPart");
    let txtingVerb = document.getElementById("ingVerb");
    let output = document.getElementById("output");

    // Create Variables
    let boy = boyName.value;
    let girl = girlName.value;
    let location = geoLocation.value;
    let verb = txtverb.value;
    let container = txtcontainer.value;
    let liquid = txtliquid.value;
    let part = bodyPart.value;
    let ingverb = txtingVerb.value;

    // Write the story
    let story = boy + " and " + girl + " went up the ";
    story += location + " to " + verb + " a " + container;
    story += " of " + liquid + ".";
    story += boy + " fell down and broke his " + part;
    story += " and " + girl + " came " + ingverb + " after.";

    // Copy story to ouput
    output.innerHTML = story;
}
