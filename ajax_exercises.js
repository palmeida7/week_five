//ajax_exercises.html
//ajax is not used as much these days, but there is logic to understand for Promise functions

//this is making an ajax request
//onreadstatechange is an event listening property
const request = new XMLHttpRequest();
request.onreadystatechange = function(){
    if(request.readyState ===4 && request.status === 200){ //4 means request finished and response is ready
    console.log(request); //200 means successful
    console.log(JSON.parse(request.response)) //completes small exercise
    }
};

request.open("GET", "./names.json");
request.send();

//be sure that live server is connecting and working
//check console log from dev tools to see correct output f/ multi XMLHttpRequest's


//another method is called Fetch
//Fetch makes GET requests
fetch("./names.json").then((response)=>{
    console.log(response);
});