import './CampoLista.css'

function CampoLista() {
    const equipos = [
        'Programación',
        'Front End',
        'Data Science',
        'Devops',
        'UX y Diseño',
        'Móvil',
        'Innovación y  Gestión'
    ];
    return (
        <div className='CampoGrupo'>
            <label className='CampoGrupo-label'>Equipo</label>
            <select className='CampoGrupo-select'>
                {
                    equipos.map((equipo, indice) => {
                        return <option key={indice}>{equipo}</option>;
                    })
                }
            </select>
        </div>
    );
}

export default CampoLista;