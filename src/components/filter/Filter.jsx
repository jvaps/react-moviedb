const Filter = ({params, onClick}) => {
    return ( 
        <div className="filter">
            <button onClick={onClick}className="filter-button">
                {params}
            </button>
        </div>
     );
}
 
export default Filter;