<script setup lang="ts">

import { ref, computed } from "vue";
import { Evenement } from "./class/Evenement";
import { Ticket } from "./class/ticket";
import EventDetail from "./components/EventDetail.vue";
import Panier from "./components/Panier.vue";

const routes : {[name: string]: any} = {
  '': EventDetail,
  'panier': Panier
}

const currentPath = ref(window.location.hash)

console.log(currentPath)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
    return routes[currentPath.value.replace("#", "") as string]
})

let t1 = new Ticket("Ticket 1", new Date(), 14, "1");
let t2 = new Ticket("Ticket 2", new Date(), 15, "2");
t1.description = "Petite description";

let monEvent = new Evenement();

monEvent.tickets = [t1, t2];
monEvent.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod velit eget tempor venenatis.\
            Pellentesque dui augue, cursus nec risus varius, elementum lacinia quam. Ut faucibus, urna ac consectetur\
            mattis, purus magna ultrices diam, et consectetur felis sem tristique metus. Praesent velit erat, vulputate ac\
            mauris et, viverra consectetur purus. Quisque feugiat sapien nec ligula suscipit convallis. Nam sit amet mi nec\
            lorem tristique venenatis. Aliquam erat volutpat. Cras ut lacinia dui, nec sollicitudin dolor. Aliquam vulputate\
            hendrerit velit, vel porttitor dui pharetra convallis. Aliquam vestibulum commodo est, sit amet auctor eros\
            pellentesque eget. Vivamus enim sapien, convallis at nisl et, vehicula hendrerit nisi. Duis maximus quam est, a\
            efficitur sapien placerat ac. Mauris bibendum, sapien id blandit euismod, justo urna mattis lacus, id\
            sollicitudin neque sapien ut ex. ";

</script>


<template>
    <div class="container">
        <div class="title">
            <h1>Billetterie</h1>
        </div>
        <component :is="currentView" v-model="monEvent"/>
    </div>
</template>


<style scoped>
</style>