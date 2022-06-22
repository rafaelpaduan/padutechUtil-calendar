<template>
    <div class="card">
        <div class="card-body">
            <FullCalendar :options="calendarOptions" />
        </div>
    </div>
</template>
<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    components: {
        FullCalendar
    },

    data() {
        return {
            calendarOptions: {
                plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth'
            }
        }
    },
}

</script>