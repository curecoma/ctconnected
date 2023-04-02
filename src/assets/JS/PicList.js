fetch("../JSON/imageListCreated")
    .then(response => response.json())
    .then(data => {
        for (const update of data[0].updates) {
            let text = '';
            text += '<li><h4>' + update.date + '</h4>';
            text += update.content + '<hr></li>';


            document.getElementById("PhotosGiven").innerHTML += text;

            console.log();
        }
    })