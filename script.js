window.onload = function () {
    alert("Welcome To Book Nest 📚");
};

const exploreBtn = document.querySelector("#home button");

exploreBtn.addEventListener("click", function () {
    document.getElementById("books").scrollIntoView({
        behavior: "smooth"
    });
});

const readButtons = document.querySelectorAll(".book-card button");

const books = [
    {
        title: "Tulip",
        message: "A romantic and emotional novel."
    },
    {
        title: "قواعد جارتين",
        message: "Fantasy novel full of adventures."
    },
    {
        title: "وميض",
        message: "A story about hope and dreams."
    },
    {
        title: "ماليكانا",
        message: "Love, pain and destiny."
    },
    {
        title: "عرايا الروح",
        message: "A deep emotional story."
    },
    {
        title: "نقطة لقاء",
        message: "Romantic dramatic novel."
    },
    {
        title: "Vilanki",
        message: "Dark fantasy adventure."
    },
    {
        title: "أبابيل",
        message: "One of the best Arabic fantasy novels."
    },
    {
        title: "Jane Eyre",
        message: "Classic English literature."
    },
    {
        title: "Wuthering Heights",
        message: "A timeless love story."
    },
    {
        title: "The Bronte Sisters",
        message: "Story of the famous sisters."
    },
    {
        title: "Little Women",
        message: "Family and friendship."
    }
];

for (let i = 0; i < readButtons.length; i++) {

    readButtons[i].addEventListener("click", function () {

        alert(
            books[i].title +
            "\n\n" +
            books[i].message
        );

    });

}

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const inputs = document.querySelectorAll("input");

    let name = inputs[0].value;
    let age = inputs[1].value;
    let email = inputs[3].value;
    let password = inputs[4].value;

    if (
        name === "" ||
        age === "" ||
        email === "" ||
        password === ""
    ) {

        alert("Please Fill All Required Fields");

        return;
    }

    if (age < 15) {

        alert("Age must be 15 or above");

        return;
    }

    let result = confirm("Are you sure you want to pay?");

if(result){

    alert("Payment Successful ✅");

    alert("Welcome " + name);

    form.reset();

}else{

    alert("Payment Cancelled");

    return;

}

    
});

const links = document.querySelectorAll("nav a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        links.forEach(function (item) {
            item.style.color = "white";
        });

        this.style.color = "#ffd369";

    });

});

const cards = document.querySelectorAll(".book-card");

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "scale(1)";

    });

});

const footer = document.querySelector("footer p");

footer.innerHTML = "© " + new Date().getFullYear() + " Book Nest";

console.log("Book Nest Website Loaded Successfully");

cards.forEach(function(card){

    let favBtn = document.createElement("button");

    favBtn.innerHTML = "🤍 Favorite";

    favBtn.style.margin = "10px";

    card.appendChild(favBtn);

    favBtn.addEventListener("click",function(){

        if(favBtn.innerHTML=="🤍 Favorite"){

            favBtn.innerHTML="❤️ Added";

        }else{

            favBtn.innerHTML="🤍 Favorite";

        }

    });

});
const images = document.querySelectorAll(".book-card img");

images.forEach(function(image){

    image.addEventListener("mouseover",function(){

        image.style.opacity="0.7";

    });

    image.addEventListener("mouseout",function(){

        image.style.opacity="1";

    });

});

setTimeout(function(){

    alert("Enjoy Reading 📚");

},2000);