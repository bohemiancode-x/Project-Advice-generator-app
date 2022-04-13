const adviceTab = document.querySelector('.advice');
const randomAdvice = document.querySelector('.button');

const getAdvice = async () => {

    const response = await fetch('https://api.adviceslip.com/advice');

    if(response.status !== 200){
        throw new Error('cannot fetch data');
    }

    const data = await response.json();

    return data;
}

const theAdvice = () => { getAdvice()
    .then(data => {
        let adviceElements = `
                 <div class="advice">
                    <h4>ADVICE #${data.slip.id}</h4>
                     <P>${data.slip.advice}</P>
                 </div>
            `
        

        adviceTab.innerHTML = adviceElements;
    })
    .catch(err => console.log(err.message));
};


randomAdvice.addEventListener('click', theAdvice);
