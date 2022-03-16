//fetch 
fetch('https://api.adviceslip.com/advice')
    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            console.log("ERROR");
        }
    })
    .then((data) => {
        console.log(data)
        advice(data);
    })
    .catch((error) => {
        console.log(error);
    });

//function that gets class card-text and then creates text to insert into card-text
let advice = (data) => {
    const adviceGiven = data.slip;
    const adviceDiv = document.getElementsByClassName('card-text')[0];
    const adviceInfo = adviceGiven.advice;
    const adviceString = document.createTextNode('"' + adviceInfo + '"');
    adviceDiv.appendChild(adviceString);

    //using id as advice number
    const heading = document.getElementsByClassName('card-title')[0];
    const number = adviceGiven.id;
    const idNumber = document.createTextNode("Advice #" + number);
    heading.appendChild(idNumber);

    const updateButton = document.getElementById('update-button');

    let updateAdvice = () => {
        window.location.reload();
    }

    updateButton.addEventListener('click', updateAdvice);
    
}
