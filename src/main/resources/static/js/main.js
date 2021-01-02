var waybillApi = Vue.resource('/waybill{/id}');

Vue.component('waybill-row', {
    props: ['waybill'],
    template: '<div><i>({{ waybill.id }})</i> {{ waybill.auto }}</div>'
})

Vue.component('waybills-list', {
    props: ['waybills'],
    template: '<div>' +
        '<waybill-row v-for="waybill in waybills" :key="waybill.id" :waybill="waybill"/>' +
        '</div>',
    created: function () {
        waybillApi.get().then(result => {
                result.json().then(data =>
                    data.forEach(waybill => this.waybills.push(waybill))
                )
            }
        )
    }
})

var app = new Vue({
    el: '#app',
    template: "<waybills-list :waybills='waybills'/>",
    data: {
        waybills: []
    }
});