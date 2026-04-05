<template>
  <section>
    <h1 class="text-3xl font-bold">
      Pokémon <small class="text-blue-500">{{ pokemonId }}</small>
    </h1>

    <img
      class="w-50 h-50 mt-5"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`"
      width="200"
      height="200"
    />

    <RouterLink :to="{ name: 'pokemon', params: { id: pokemonId + 1 } }"
    class="inline-block bg-blue-500 text-white p-2 rounded m-5 text-center hover:bg-amber-500 transition-all"
      >Siguiente Pokémon</RouterLink
    >
  </section>
</template>

<script setup lang="ts">
interface Props {
  pokemonId: number;
}

const props = defineProps<Props>();

if (isNaN(props.pokemonId)){
    console.error("El identificador del pokémon es inválido")
}

</script>

<style scoped></style>
