<script setup lang="ts">

import type { Ticket } from '@/class/ticket';
import { Evenement } from '../class/Evenement';


const props = defineProps({
    modelValue: {type: Evenement, required: true}
})

const emit = defineEmits(['update:MyEvent'])




function goToPanier() : void {
    window.location.hash = "panier"
}

function plus(item : Ticket) : void {
    item.place.value > 0 ? item.place.value-- : item.place.value;
    emit('update:MyEvent', props.modelValue)
}

function moins(item : Ticket) : void {
    item.place.value++
    emit('update:MyEvent', props.modelValue)
}


</script>

<template>
    <div>
        <h2>Image</h2>
    </div>
    <div>
        <h2>Description :</h2>
        <p>{{ modelValue.description }}</p>
    </div>
    <div>
        <h2>Tickets</h2>
        <div class="tickets">
            <div class="ticket" v-for="(item, index) in modelValue.tickets">
                <div class="ticket-head">
                    <h3>{{ item.nom }} :</h3>
                    <p v-if="item.description">{{ item.description }}</p>
                </div>
                <div class="ticket-body">
                    <div class="description">
                        <p>{{ item.date_String }}</p>
                        <p>Prix : {{ item.prix }}</p>
                    </div>
                    <div class="achat">

                        <label for="nb_tickt1">Nombre : </label>
                        <div class="input-number">
                            <button @click="plus(item)">-</button>
                            <input type="number" id="nb_tickt1" :value="item.place.value" min="1" max="5">
                            <button @click="moins(item)">+</button>
                        </div>
                </div>
            </div>
            <hr v-if="modelValue.tickets.length > 1 && index != modelValue.tickets.length - 1">
        </div>
    </div>
</div>
<div class="button-valide valide">
    <span>
        <a @click="goToPanier"></a>
    </span>
</div>

</template>