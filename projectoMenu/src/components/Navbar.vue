<script setup lang="ts">
import { ref } from 'vue'
import { navegar } from '../router'

const mostrarContenido = ref(false)
const mostrarArreglos = ref(false)
const mostrarComponentes = ref(false)
const mostrarRutas = ref(false)

function go(path: string) {
  navegar(path)
  mostrarContenido.value = false
  mostrarArreglos.value = false
  mostrarComponentes.value = false
  mostrarRutas.value = false
}

</script>

<template>
  <header class="navbar">
    <button class="brand" type="button" @click="go('/')">Mi Wiki</button>
    <nav aria-label="Navegación principal">
      <button type="button" @click="go('/')">Inicio</button>

      <div class="dropdown" @mouseenter="mostrarContenido = true" @mouseleave="mostrarContenido = false">
        <span class="menu-title">Contenido</span>
        <div v-if="mostrarContenido" class="dropdown-content">
          <button type="button" @click="go('/contenido/constants')">Constants</button>
          <button type="button" @click="go('/contenido/object-literals')">Object literals</button>
          <button type="button" @click="go('/contenido/header-component')">HeaderComponent</button>
          <button type="button" @click="go('/contenido/v-bind')">Uso de v-bind</button>
          <button type="button" @click="go('/contenido/importacion-exportacion')">Importación y exportación</button>
          <button type="button" @click="go('/contenido/promesas')">Promesas</button>
        </div>
      </div>

      <div class="dropdown" @mouseenter="mostrarArreglos = true" @mouseleave="mostrarArreglos = false">
        <span class="menu-title">Arreglos</span>
        <div v-if="mostrarArreglos" class="dropdown-content">
          <button type="button" @click="go('/arreglos/recorrido-movies')">Recorrido de movies</button>
          <button type="button" @click="go('/arreglos/recorrido')">Recorrido</button>
        </div>
      </div>

      <div class="dropdown" @mouseenter="mostrarComponentes = true" @mouseleave="mostrarComponentes = false">
        <span class="menu-title">Componentes</span>
        <div v-if="mostrarComponentes" class="dropdown-content">
          <button type="button" @click="go('/componentes/tipo-array')">Comp. Tipo Array</button>
          <button type="button" @click="go('/componentes/padre')">Padre</button>
        </div>
      </div>

      <div class="dropdown" @mouseenter="mostrarRutas = true" @mouseleave="mostrarRutas = false">
        <span class="menu-title">Rutas</span>
        <div v-if="mostrarRutas" class="dropdown-content">
          <button type="button" @click="go('/rutas/example')">Example</button>
          <button type="button" @click="go('/rutas/about')">About</button>
        </div>
      </div>
    </nav>
  </header>
</template>
