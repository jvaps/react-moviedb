import './Pagination.css'


const Pagination = ({previousPage, nextPage, selectPage, value}) => {
    return (
        <div className='pagination'>
            <button className="page-button" onClick={previousPage}>
                {'<'} Voltar página
            </button>
                <input className="input" type="number" placeholder="Escolha uma página" value={value} onChange={selectPage} onSubmit={selectPage} onBlur={selectPage} />
            <button className="page-button" onClick={nextPage}>
                 Próxima página {'>'}
            </button>
        </div>
     );
}
 
export default Pagination;