
const Beers = ({name,abv,ibu,image,flavor,style}) => {
    return(

        <div>
           
     <div className={`beer`}>
    
     <img src={image} alt=""  className={`round`} /><br/>
    <h3>{name}</h3><br/>
    <p>Style : {style}</p>
    <p>Flavor/Aroma : {flavor}</p>
    <p>Bitterness (IBU) : {ibu}</p>
    <p>Alcohol Content (ABV) : {abv}</p>
  </div>
  </div>
    );
  }

export default Beers
