import { defineComponent, h, ref } from 'vue'
import HomeView from '../components/HomeView.vue'
import ObjectLiteralsView from '../components/ObjectLiteralsView.vue'
import HeaderView from '../components/HeaderView.vue'
import FatherView from '../components/FatherView.vue'
import About from '../components/About.vue'
import ArrayComponent from '../components/ArrayComponent.vue'
import ExampleComponent from '../components/ExampleComponent.vue'
import SimpleArray from '../components/SimpleArray.vue'
import arreglomovie from '../components/arreglomovie.vue'
import constantsComponent from '../components/constantsComponent.vue'
import importacionComponent from '../components/importacionComponent.vue'
import promesas from '../components/promesas.vue'
import usovbind from '../components/usovbind.vue'

export type RouteRecord = {
  path: string
  name: string
  component: object
}

export const routes: RouteRecord[] = [
  { path: '/', name: 'Inicio', component: HomeView },
  { path: '/contenido/constants', name: 'Constants', component: constantsComponent },
  { path: '/contenido/object-literals', name: 'Object literals', component: ObjectLiteralsView },
  { path: '/contenido/header-component', name: 'HeaderComponent', component: HeaderView },
  { path: '/contenido/v-bind', name: 'Uso de v-bind', component: usovbind },
  { path: '/contenido/importacion-exportacion', name: 'Importación y exportación', component: importacionComponent },
  { path: '/contenido/promesas', name: 'Promesas', component: promesas },
  { path: '/arreglos/recorrido-movies', name: 'Recorrido de movies', component: arreglomovie },
  { path: '/arreglos/recorrido', name: 'Recorrido', component: SimpleArray },
  { path: '/componentes/tipo-array', name: 'Comp. Tipo Array', component: ArrayComponent },
  { path: '/componentes/padre', name: 'Padre', component: FatherView },
  { path: '/rutas/example', name: 'Example', component: ExampleComponent },
  { path: '/rutas/about', name: 'About', component: About },
]

const rutaActual = ref(window.location.pathname)

export function navegar(ruta: string) {
  if (ruta === rutaActual.value) return
  window.history.pushState({}, '', ruta)
  rutaActual.value = ruta
}

window.addEventListener('popstate', () => {
  rutaActual.value = window.location.pathname
})

export const RouterView = defineComponent({
  name: 'RouterView',
  setup() {
    return () => {
      const ruta = routes.find((ruta) => ruta.path === rutaActual.value)
      const componente = ruta ? ruta.component : HomeView

      return h(componente)
    }
  },
})
