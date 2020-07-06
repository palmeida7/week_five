$(document).ready(() => {
    console.log('jQuery is ready to go!');
});

const $container = $('<div>');
const $title = $('<h1>', {
    text: 'Dad Jokes'
});

$container.append($title);
$(document.body).append($container);
$title.css('color', 'tomato');

const $jokeButton =$('<button></button>', {
    text: 'Click for a new joke 😂'
});
$jokeButton.appendTo($container);
$jokeButton.on('click', () => {
    console.log('You clicked!');
    getJoke()
        .then(joke => {
            $('.joke').remove(); //will remove any existing .joke elements while clicking for new
            $('<p></p>', {
                text: joke,
            }).addClass('joke') //adds class to new <p>
            .hide()
            .appendTo($container)
            .fadeIn();
        });
});

function getJoke() {
    return $.ajax({
        url: 'https://icanhazdadjoke.com/',
        headers: {
            'Accept': 'application/json'        
        }
    }).then(res => {
        return res.joke;
    }).catch(err => {
        console.log(err);
        return 'There was an error making the reqeuest';
    });
}
function searchJoke(term) {
    return $.ajax({
        url: 'https://icanhazdadjoke.com/search?term=' + term,
        headers: {
            'Accept': 'application/json'        
        }
    }).then(res => {
        return res.results.map(result => result.joke)
    }).catch(err => {
        console.log(err);
        return 'There was an error making the reqeuest';
    });
}

const $jokeForm = $('<form>');
const $jokeInput = $('<input>', {
    placeholder: 'Enter search term'
});
const $submitBtn = $('<input>', {
    type: 'submit',
    value: '😂 Search!'
});
$jokeForm
    .append($jokeInput)
    .append($submitBtn)
    .appendTo(document.body)
    .on('submit', event => {
        event.preventDefault();
        const searchTerm = $jokeInput.val();
        searchJoke(searchTerm)
            .then(jokesArray => {
                $(jokesArray).each((index, joke) => {
                    $('<p>', {
                        text: joke,
                        class: 'joke-result'
                    }).appendTo(document.body)
                })
            })
    });

//Create a button that logs "Button Pressed" to the console when clicked.
const $logButton =$('<button></button>', {
    text: 'Click & Log'
    });
    console.log('Button Pressed');
    
$logButton.appendTo($container);
$logButton.on('click', () => {
    console.log('You Left Clicked');
    })
$(window).resize(function() {    
    console.log('You changed the size of the window');
});
// Outside of our .on('submit') handler
$(document.body).on('click', '.joke-result', event => {
    $(event.target).remove();
})
