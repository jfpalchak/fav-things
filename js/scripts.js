
function handleSubmit(e) {
    e.preventDefault();

    const favList = document.querySelectorAll('input[type=checkbox]:checked');
    const array = Array.from(favList);
    
    const fav1 = array[0].value;
    const fav2 = array[1].value;
    const fav3 = array[2].value;
    const fav4 = array[3].value;
    const array2 = [fav1, fav2, fav3, fav4];

    let array3 = [];
    array3 = array3.concat(array2[2]);
    array3 = array3.concat(array2[1]);
    array3 = array3.concat(array2[3]);

    console.log(array3);

const ul = document.createElement("ul");
ul.setAttribute("id", "favList");
document.querySelector("body").append(ul);
const liOne = document.createElement("li");
const liTwo = document.createElement("li");
const liThree = document.createElement("li");
liOne.append(array3[0]);
liTwo.append(array3[1]);
liThree.append(array3[2]);
ul.append(liOne, liTwo, liThree);


}


function findFave () {
    document.querySelector("form").addEventListener("submit", handleSubmit);
}



window.addEventListener("load", findFave);