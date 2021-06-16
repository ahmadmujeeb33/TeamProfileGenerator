function generateArrayElements (array) {
    console.log(array);
    let otherVal;
    let returnString  = '';
    array.forEach(element => {
        if(element['officeNumber'] != null){
            otherVal=  element["officeNumber"]
        }
        else if(element['github'] != null){
            otherVal= element["github"]
        }
        else if(element['school'] != null){
            otherVal= element["school"]

        }

        returnString += `<div class="card employee-card">
            <div class="card-header" style = "background-color:blue;color:white;">
                <h2 class="card-title">${element["name"]}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${element.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">${element["id"]}</li>
                    <li class="list-group-item">${element["email"]}</li>
                    <li class="list-group-item">Office number: ${otherVal}</li>
                </ul>
            </div>
        </div>`
        
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
            .format{
                display:flex;
            }
        </style>
    </head>
    <body>
       

        <div class="format">
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