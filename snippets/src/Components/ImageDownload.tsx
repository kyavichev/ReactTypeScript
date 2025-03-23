
import React, { useState } from 'react';
import './ImageDownload.css';


export default function ImageDownload() {

    const [count, setCount] = useState<number>(0)

    const download = (imageURL: string) => {
        console.log(imageURL);

        fetch(imageURL, {
          method: "GET",
          headers: {}
        })
        .then(response => {

            console.log(response);

            response.arrayBuffer().then(function(buffer) {
                const url = window.URL.createObjectURL(new Blob([buffer]));

                console.log(`URL:: ${url}`);

                const filename = imageURL.split('/').pop() ?? "image.png";
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", filename); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
        })
        .catch(err => {
            console.log(err);
        });
    };

    const imageURL = "https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png";

    return (
        <div className="App">
            <a
                href={imageURL}
                download
                onClick={e => download(imageURL)}
                target="_blank"
            >
                <img className="image" src={imageURL} />
            </a>
        </div>
    )
}
