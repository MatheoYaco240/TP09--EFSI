
export const Introduccion = () => {
    return(
        <>
            <h1 style={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '5%' }}>Bienvenido a 'Reciclaje Plus'</h1>

            <i style={{ fontSize: '1.15rem', marginBottom: '2%' }}>En esta página web, vas a poder saber en qué sitio se debe tirar la basura del dia a dia según su material, estado y consistencia.</i>

            <a style={{ fontSize: '1.3rem', marginBottom: '2%', backgroundColor: '#1b33d1b8'}} href="/login" className='btn text-light'>Empezar</a>
        </>
    )
}