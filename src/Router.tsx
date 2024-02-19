import { Routes, Route } from 'react-router-dom'
import { History } from './pages/History'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      {/* o / aqui é pq eu quero aplicar o layout em todas as rotas */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />

        {/* quando temos outras aplicações, imagine que estamos construindo uma aplicação que tenha um pinel de admin e ai para esse painel podemos ter um layout diferente e ai nesse caso a gente cria um AdminLayout que vai aplicar para todas as rotas que começarem com /admin

         *<Route path="/admin" element={<AdminLayout />}> 
            <Route path="/products" />
         </Route>  
         
         então no path eu estou dizendo que todas as rotas que começarem com /admin ela terão o AdminLayout 
         vale pontuar que se nós colocamos /admin e dentro dela tivermos outra rota chamada path="/products" para acessar a rota products será sempre a soma do primeiro path com o segundo path, elas são rotas encadeadas, uma é filha da outra. E ai se eu quisesse acessar a rota de products seria: http://localhost:3000/admin/products  */}
      </Route>
    </Routes>
  )
}
