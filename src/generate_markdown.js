function generateArrayElements (array) {
    let returnString  = '';
    array.forEach(element => {
        returnString += `<p> ${element["name"]} </p>`
        returnString += `<p> ${element["id"]} </p>`
        returnString += `<p> ${element["email"]} </p>`
        if(element['officeNumber'] != null){
            returnString += `<p> ${element["officeNumber"]} </p>`
        }
        else if(element['github'] != null){
            console.log("in thiissss43475");
            returnString += `<p> ${element["github"]} </p>`
        }
        else if(element['school'] != null){
            console.log("in thiissss3455676");
            returnString += `<p> ${element["school"]} </p>`
        }
        
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
       

        <div>
            ${generateArrayElements(data)}
        </div>
      
        
    </body>
    </html>` 
}

  // <ul>
        //     ${generateArrayElements(response.myArray)}
        // </ul>

module.exports = {
    generateHTML,
}