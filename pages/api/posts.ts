import {runMiddleware} from 'utils/middleware'

export default runMiddleware('posts')

// Writing de ejemplo para visualización inicial
if (req.method === 'GET') {
    const examplePost = {
        id: 'ejemplo-writing',
        title: 'Primer Blog: ¡Hola Mundo!',
        description:
            'Este es mi primer post en el blog, bienvenido a mi portfolio.',
        content:
            'Aquí puedes escribir el contenido completo del post en markdown o texto plano.',
        date: new Date().toISOString(),
    }
    // Agregar el writing de ejemplo si la base está vacía
    if (posts.length === 0) {
        posts.push(examplePost)
    }
}
