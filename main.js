fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        data.forEach(data => {

            const allData = `
            <br>{
            <dt>"id": ${data.id},</dt>
            <dt>"name" : "${data.name}",</dt>
            <dt>"username" : "${data.username}",</dt>
            <dt>"email" : "${data.email}",</dt> 
            <dt>"address" : {
                <dt>"street" : "${data.address.street}",</dt>
                <dt>"suite"  : "${data.address.suite}",</dt>
                <dt>"city"   : "${data.address.city}",</dt>
                <dt>"zipcode" : "${data.address.zipcode}",</dt>
                <dt>"geo" : {
                    <dt> "lat" : "${data.address.geo.lat}",</dt>
                    <dt> "lng" : "${data.address.geo.lng}"</dt>
                  }<br> 
            },    
            </dt> 
        
            <dt>"Phone" : "${data.phone}"</dt>
            <dt>"website" : "${data.website}"</dt>
            <dt>"address" : {
            <dt>"name" : " ${data.company.name}"</dt>
            <dt>"catchPhrase" : "${data.company.catchPhrase}",</dt>
            <dt>"bs" : "${data.company.bs}" <br>}</dt>
            },`;



            document.querySelector('ul').insertAdjacentHTML('beforeend', allData)
        });
    })
    // .catch(err => console.log(err))