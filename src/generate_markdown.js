function generateArrayElements (array) {
    let returnString  = '';

    array.forEach(element => {
        returnString += `<li> ${element.getName()} </li>
        `
    });

    return returnString;
}

function generateHTML(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
       

        <ul>
            ${generateArrayElements(data)}
        </ul>
      
        
    </body>
    </html>` 
}

  // <ul>
        //     ${generateArrayElements(response.myArray)}
        // </ul>

module.exports = {
    generateHTML,
}