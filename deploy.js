// import { exec } from "child_process";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// // Convert the module URL to a file path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// /**
//  * Deploys the React app to GitHub Pages.
//  */
// function deployReactApp() {
//   console.log("Starting deployment process...");

//   // Step 1: Build the project
//   console.log("Building the project...");
//   exec("npm run build", (buildError, buildStdout, buildStderr) => {
//     if (buildError) {
//       console.error(`Build failed: ${buildError.message}`);
//       return;
//     }
//     console.log(buildStdout);

//     // Step 2: Initialize a new Git repository in the dist folder
//     const distDir = path.join(__dirname, "dist");
//     if (!fs.existsSync(distDir)) {
//       console.error(`Dist folder not found: ${distDir}`);
//       return;
//     }

//     process.chdir(distDir); // Change working directory to the dist folder

//     console.log("Initializing Git repository in the dist folder...");
//     exec("git init", (initError, initStdout, initStderr) => {
//       if (initError) {
//         console.error(`Git init failed: ${initError.message}`);
//         return;
//       }
//       console.log(initStdout);

//       // Step 3: Add all files and commit
//       console.log("Adding files and committing...");
//       exec(
//         'git add . && git commit -m "Deploy to GitHub Pages"',
//         (commitError, commitStdout, commitStderr) => {
//           if (commitError) {
//             console.error(`Git commit failed: ${commitError.message}`);
//             return;
//           }
//           console.log(commitStdout);

//           // Step 4: Push to the gh-pages branch
//           console.log("Pushing to the gh-pages branch...");
//           exec(
//             "git branch -M gh-pages && git remote add origin https://github.com/Ahmed7019/farmers-warehous.git && git push -u origin gh-pages --force",
//             (pushError, pushStdout, pushStderr) => {
//               if (pushError) {
//                 console.error(`Git push failed: ${pushError.message}`);
//                 return;
//               }
//               console.log(pushStdout);
//               console.log("Deployment successful!");
//             }
//           );
//         }
//       );
//     });
//   });
// }

// // Run the deployment function
// deployReactApp();
