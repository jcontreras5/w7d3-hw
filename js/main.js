//Form Submission
let form = document.querySelector('#FormData')


// Geting data with Axios
const getData = async() =>{
    let season=document.querySelector("#year").value;
    let round=document.querySelector("#round").value;
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    return response.data
}



//create const to hold our DOM elements for later use
const DOM_ELEMENTS = {
    racer_data:'#racer-data'
}


// Creation of Row
const create_table_row = (pos,name,nationality,sponsor,points) => {
    const row= `<tr><td>${pos}</td> <td>${name}</td> <td>${nationality}</td> <td>${sponsor}</td> <td>${points}</td></tr>`;
    document.querySelector(DOM_ELEMENTS.racer_data).insertAdjacentHTML('beforeend',row) // allows search where you can choose where to inject html elem  above
}

//Data load(callback to create_table_row)
const load_data= async()=>{
    console.log('three')
    const racers_data= await getData(); //waiting for data, once it gets data it will use response.data return from getData()
    let racers = racers_data.MRData.StandingsTable.StandingsLists[0].DriverStandings.slice(0,10)
    racers.forEach(element=>create_table_row(element.position,(element.Driver.givenName+" "+element.Driver.familyName),element.Driver.nationality,element.Constructors[0].name,element.points)) // data will be array, so we need to pull id,name from each element, pass those into create_list above
    
}

//add event listener
form.addEventListener('submit',(event)=>{
    console.log('one')
    event.preventDefault()

    
})
