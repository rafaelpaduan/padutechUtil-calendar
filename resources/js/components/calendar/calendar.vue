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
                height: 'auto',

                plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                dateClick: this.handleDateClick,
                events: [
                    { title: 'event 1', date: '2022-06-01' },
                    { title: 'event 2', date: '2022-06-01' },
                    { title: 'event 3', date: '2022-06-02' }
                ]
            }
        }
    },

    methods: {
        handleDateClick: function(arg) {
            alert('date click! ' + arg.dateStr)
        },

        newEvent: function() {
            this.calendarOptions.events.push({
                title: 'Novo Evento',
                date: '2022-06-' + Math.floor(Math.random() * 31)
            })
        }
    },
}

</script>