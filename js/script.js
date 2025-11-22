document.addEventListener('DOMContentLoaded', function () {

   // 1. DATOS (Simulación de Base de Datos)
   const pathData = {
      1: {
         title: "Fundamentos Web",
         status: "Completado",
         statusClass: "badge-completed",
         desc: "Has dominado la estructura semántica y los estilos en cascada. Ya puedes crear maquetaciones estáticas responsive.",
         resources: [
            "Certificado de HTML5",
            "Proyecto: Landing Page Personal",
            "Examen final: 95/100"
         ],
         btnText: "Ver Repaso"
      },
      2: {
         title: "JavaScript Moderno",
         status: "En Progreso",
         statusClass: "badge-active",
         desc: "Actualmente estás aprendiendo manipulación del DOM y peticiones asíncronas (Fetch API). ¡Sigue así!",
         resources: [
            "Módulo actual: Promesas y Async/Await",
            "Reto pendiente: App de Clima",
            "Mentoría disponible"
         ],
         btnText: "Continuar Aprendiendo"
      },
      3: {
         title: "Frameworks (React)",
         status: "Bloqueado",
         statusClass: "badge-locked",
         desc: "Este módulo se desbloqueará cuando termines JavaScript Moderno. Aprenderás a crear SPAs (Single Page Applications).",
         resources: [
            "Introducción a JSX",
            "Hooks básicos",
            "Gestión de estado"
         ],
         btnText: "Ver Previsualización"
      }
   };

   // 2. ELEMENTOS DEL DOM
   const modalOverlay = document.getElementById('pathModal');
   const closeModalBtn = document.querySelector('.close-modal');
   const pathSteps = document.querySelectorAll('.path-step');

   // Elementos internos del modal a actualizar
   const mTitle = document.getElementById('modalTitle');
   const mStatus = document.getElementById('modalStatus');
   const mDesc = document.getElementById('modalDesc');
   const mList = document.getElementById('modalList');
   const mBtn = document.getElementById('modalAction');

   // 3. FUNCIONES
   function openModal(stepId) {
      const data = pathData[stepId];

      if (!data) return; // Si no hay datos, no hace nada

      // Inyectar datos en el modal
      mTitle.textContent = data.title;
      mDesc.textContent = data.desc;
      mBtn.textContent = data.btnText;

      // Configurar badge de estado
      mStatus.textContent = data.status;
      mStatus.className = 'modal-badge ' + data.statusClass; // Limpia clases anteriores

      // Limpiar y llenar lista de recursos
      mList.innerHTML = '';
      data.resources.forEach(item => {
         const li = document.createElement('li');
         li.textContent = item;
         mList.appendChild(li);
      });

      // Mostrar modal
      modalOverlay.classList.add('active');
   }

   function closeModal() {
      modalOverlay.classList.remove('active');
   }

   // 4. EVENT LISTENERS

   // Click en los pasos de la ruta
   pathSteps.forEach(step => {
      step.addEventListener('click', () => {
         const stepId = step.getAttribute('data-step');
         openModal(stepId);
      });
   });

   // Click en cerrar (X)
   closeModalBtn.addEventListener('click', closeModal);

   // Click fuera del modal (en el fondo oscuro) para cerrar
   modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
         closeModal();
      }
   });

   // Cerrar con tecla ESC
   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
         closeModal();
      }
   });
});
console.log("Plataforma EDteam style activa.");
