import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {message: "Enter your URL",
     name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    const textPath = 'URL.txt';
    fs.writeFile(textPath, url, (err) =>{
        if (err) {
            console.log(err);
            return;
        }
        console.log("The file has been saved!");
        }
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });