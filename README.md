# npm.7.20.0.bug

## Issue

`npm@7.20.0` seems to have changed the way it interacts with `postinstall` scripts in project workspaces.

## Expected behaviour

When running `npm i` from the project root - the `workspace/workspacePostInstall.js` script, referenced as the `postinstall` script in the workspace package json **should not be called**

## Current behaviour

When running `npm i` from the project root - the `workspace/workspacePostInstall.js` script, referenced as the `postinstall` script in the workspace package json **is called**. This is setup to execute a script that does not exist, and so errors. 


## To Replicate

Run `npm install -g npm@7.19.1`, and then `npm i` in the project root. You will not see an error. 

Then, run `npm install -g npm@7.20.0`, and then `npm i` in the project root. You will now see an error - this is incorrect. 