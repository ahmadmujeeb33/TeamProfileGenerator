function generateArrayElements (array) {
    console.log(array);
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Document</title>
        <style>

        </style>
    </head>
    <body>
       

        <div>
            ${generateArrayElements(data)}
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
                </div>
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