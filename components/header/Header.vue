<script setup>
import { ref, onMounted } from "vue";

const text = "< Frontend Developer >";
const typedText = ref("");
let i = 0;

const type = () => {
  if (i < text.length) {
    typedText.value += text.charAt(i);
    i++;
    setTimeout(type, 150); // Ajuste a velocidade conforme necessário
  }
};

onMounted(() => {
  type();
});
</script>

<template>
  <div class="container pt-3 mx-auto text-left bg-white md:text-center">
    <div class="flex flex-row justify-between items-center max-w-4xl mx-auto">
      <!-- Contêiner para a imagem -->
      <div class="flex-none image-container">
        <img
          @mousemove="handleMouseMove"
          @mouseleave="resetImage"
          class="image-hover w-3/4 grayscale hover:grayscale-0"
          src="../../public/henriquebatista.png"
          alt="Henrique Batista"
          label="imagem rosto wellington henrique batista"
        />
      </div>

      <!-- Contêiner para o texto -->
      <div class="flex-1">
        <h2
          class="pb-1 text-3xl font-extrabold text-left sm:text-3xl sm:text-4xl md:text-7xl md:text-center"
        >
          <span
            id="frontend-text"
            class="text-5xl bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900"
            >{{ typedText }}</span
          >
        </h2>
        <p
          class="mt-5 text-xs text-left text-gray-500 sm:text-sm md:text-base md:max-w-xl md:text-center md:mx-auto"
        >
          Paixão e Precisão em Desenvolvimento Front-End: Criando Sites Visuais e
          Funcionais que Encantam Usuários.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
#frontend-text {
  border-right: 2px solid;
  animation: blink 0.75s step-end infinite;
  /* Aplicando gradiente diretamente ao texto */
  -webkit-background-clip: text;
  color: transparent; /* Importante para garantir que o texto seja transparente */
  opacity: 0.6; /* Inicialmente mais fosco */
  transition: opacity 0.3s ease-in-out;
}
#frontend-text:hover {
  /* Mais vibrante ao passar o mouse */
  opacity: 1;
}

/* Estilo para a imagem */
.grayscale {
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;
}

.grayscale:hover {
  filter: grayscale(0%);
}

.image-container {
  width: 25rem; /* Ajuste o tamanho conforme necessário */
}

.image-hover {
  width: 100%;
  transition: transform 0.3s ease-in-out;
}

.image-hover:hover {
  transform: translateX(-20px); /* Ajuste o movimento conforme necessário */
}
</style>
