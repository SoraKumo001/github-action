import * as core from "@actions/core";

console.log("console");
core.startGroup("GitHub Action Test");
const message = core.getInput("message", { required: true });
core.debug(message);
core.debug("ふぉっふぉっふぉ");
console.log("console");
core.endGroup();
