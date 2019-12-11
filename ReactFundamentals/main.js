// Imperative code with for loop
/*    const people = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']
    const excitedPeople = []

    for (let i = 0; i < people.length; i++) {
        excitedPeople[i] = people[i] + '!';
    }
    console.log(excitedPeople);
*/

// Declarative Code with .map
/*    const people = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']
    const excitedPeople = people.map(name => name + 'i')
    console.log(excitedPeople);
*/

///////////// Crating new array with a sentence
/*      const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(album => `${album.name} by ${album.artist} sold ${album.sales} copies` );

console.log(albumSalesStrings);
*/

/////////// Creating new array if its name has between 10 and 25 carecter
/*const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

/////????? const results = musicData.filter(album => `${album.name.length <= 25 && album.name.length >= 10} by ${album.artist} sold ${album.sales}`);

/// Simpley
const results = musicData.filter(album => album.name.length <= 25 && album.name.length >= 10);

////With function
const results = musicData.filter((album) =>{
    return album.name.length <= 25 && album.name.length >= 10;
})

console.log(results);
*/

////////////////////////////////////////////////////////////////////////////////////
////////        .filter() and .map()
////////////////////////////////////////////////////////////////////////////////////
/*
const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

///////// This is just a way to filter and map the popular songs.
 const popular = musicData.filter(album => album.sales >= 1000000).map(album => `${album.name} by ${album.artist} sold ${album.sales} copies`)

///////// another way of filtering and maping witch is just great.
 const popular = musicData.filter(album => album.sales >= 1000000).map(album => `${album.artist} is agreat preformer. he sold ${album.sales} copies of ${album.name}`)

///////// Witch was asked from Udacity to do as a Quiz.
const popular = musicData
    .filter(album => album.sales >= 1000000)
    .map(album => `${album.artist} is a great preformer`);

console.log(popular);
*/

////////////////////////////////////////////////////////////////////////////////////
////////        Creting Element and JSX
////////////////////////////////////////////////////////////////////////////////////
/*
import React from 'react'
import ReactDOM from 'react-dom';


class ContactList extends React.Component {
    render() { 
    const people = [
        {name: 'tayler'},
        {name: 'jack'},
        {name: 'mark'},
        {name: 'jay'}
]

    return <ol>
    {people.map((person) =>(
        <li key={person.name}>{person.name}</li>
    ))}
</ol>
}
}

ReactDOM.render(
    <ContactList />,
    document.getElementById('root')
)
*/
