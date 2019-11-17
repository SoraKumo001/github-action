import * as core from "@actions/core";

core.startGroup("GitHub Action Test2");
const message = core.getInput("message", { required: true });
console.log(message);
core.endGroup();
