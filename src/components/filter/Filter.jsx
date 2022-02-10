import './Filter.css'

const Filter = ({params, onClick}) => {
    return ( 
        <div className="filter-item">
            <button onClick={onClick} className="filter-button">
                {params}
            </button>
        </div>
     );
}
 
export default Filter;