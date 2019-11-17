import * as core from "@actions/core";

core.startGroup("GitHub Action Test");
const message = core.getInput("message", { required: true });
core.debug(message);
core.endGroup();
