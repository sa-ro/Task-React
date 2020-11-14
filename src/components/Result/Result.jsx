import React,{useState,useEffect} from 'react'
import Beers from '../Result/Beers'
import Button from 'react-bootstrap/Button'
function Result() {
   
    const [beers,setBeers] = useState([])

    useEffect(() => {
        
        getBeers()
    }, [])

    const  getBeers = async () =>{
        const res = await fetch (`https://api.jsonbin.io/b/5f1b0f0fc58dc34bf5d9ee03`)
        const data = await res.json();
        setBeers(data)
    }
 
    return (
        <div>
            <div>
            <h1 className={`maibeer`}>mAIBeer</h1>
                     <Button variant="outline-warning" href="/question-list" className={`exit-btn`}>Try Again</Button>
            </div>
            <div className={`center`}>
                <h5>Your Resuts</h5>
                <h3>Beers picked for you</h3>
            </div>
           {beers.map(b=>(
               <Beers
               key={b.id}
               name= {b.beer}
               image = {b.img}
               style = {b.style}
               flavor = {b.flavor_aroma1}
               ibu = {b.ibu}
               abv = {b.abv}

               />
           ))}
        </div>
    )
}
export default Result