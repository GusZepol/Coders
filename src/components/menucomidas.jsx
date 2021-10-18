
function Menucomidas({servicio,precios,imagen}){
    return(
            <div className="columnamenu">
                <h2 className='h2almuerzo'>{servicio}</h2>
                <p className="precio">{precios} </p>
                <img src={imagen} alt={servicio} className="imagenmenu"  width="200" height="200"/>
                <input className="boton" type="submit" value="VENDER"/>
            </div>
    );
}

export default Menucomidas;