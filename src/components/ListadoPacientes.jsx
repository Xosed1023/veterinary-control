import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">


      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administras tus {''}
            <span className="text-indigo-600 font-bold">
              pacientes y citas
            </span>
          </p>

          {pacientes.map(paciente => (
            <Paciente key={paciente.id} paciente={paciente}
            />
          )
          )}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">
              y aquí aparecerán
            </span>
          </p>
        </>
      )}



    </div>
  )
}

export default ListadoPacientes