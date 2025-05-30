// create an array of 3 objects with title,author,status and status is a object with three properties own,reading,read

const library = [
    {
        title:"Pride and Prejudice",
        author:"Jane Austen",
        status:{
            own:true,
            reading:false,
            read:false,
        }
    },
    {
        title:"Anna Karenina",
        author:" Leo Tolstoy",
        status:{
            own:true,
            reading:false,
            read:false,
        }
    },
    {title:"Alice's Adventures in Wonderland",
        author:"Lewis Carroll",
        status:{
            own:true,
            reading:false,
            read:false,
        }
    },
]



library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;

const {title:firstbook}= library[0];

const jasonobject = JSON.stringify(library);
console.log(jasonobject);