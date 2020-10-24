
// const getImagenPromesa = () => new Promise(resolve => resolve('https://ajskdhaskjdhajs.com'));
// getImagenPromesa().then(console.log);

const getImage = async() => {

    try {

        const apiKey = 'qj00DAUq2aDavCWPlikVARGPcxrHzWvx';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        console.log(data);

        const {url} = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch (error) {
        console.error(error);
    }
    
}

getImage();