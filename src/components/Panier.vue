<script setup lang="ts">

import { Evenement } from '@/class/Evenement';


const props = defineProps({
    modelValue: {type: Evenement, required: true}
})

console.log(props.modelValue)

function back() : void{
    window.history.back();
}

function GoPayer() : void{

}

</script>

<template>
    <div @click="back" class="button-retour">
    </div>
    <div>
        <h2>Votre panier :</h2>
    </div>
    <div class="panier-body">
        <div v-if="modelValue.none()">
            Aucun élément dans votre panier
        </div>
        <div class="ticket" v-for="(item, index) in modelValue.tickets">
            <div v-if="item.place.value > 0">
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
                        <p>Nombre : {{ item.place }}</p>
                    </div>
                </div>
            </div>
            <hr v-if="modelValue.tickets.length > 1 && index != modelValue.tickets.length - 1">
        </div>
    </div>
    <div class="button-valide payer">
    <span>
        <a @click="GoPayer"></a>
    </span>
</div>
</template>