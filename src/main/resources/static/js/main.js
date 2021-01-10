import Vue from 'vue'
import App from 'pages/App.vue'

new Vue({
    el: '#app',
    render: a=>a(App)
})

/*

function getIndex(list, id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] === id) {
            return i;
        }
    }

    return -1;
}

var waybillApi = Vue.resource('/waybill{/id}');

Vue.component('waybill-form', {
    props: ['waybills', 'waybillAttr'],
    data: function () {
        return {
            text: "",
            id: "",
        }
    },
    watch: {
        waybillAttr: function (newVal, oldVal) {
            this.text = newVal.auto;
            this.id = newVal.id;
        }
    },
    template:
        '<div>' +
        '<input type="text" placeholder="Write something" v-model="text"/>' +
        '<input type="button" value="Save" @click="save" />' +
        '</div>',
    methods: {
        save: function () {
            var waybill = {auto: this.text};

            if (this.id) {
                waybillApi.update({id: this.id}, waybill).then(result =>
                    result.json().then(data => {
                        var index = getIndex(this.waybills, data.id);
                        this.waybills.splice(index, 1, data);
                        this.text = '';
                        this.id = '';
                    }));
            } else {
                waybillApi.save({}, waybill).then(result =>
                    result.json().then(data => {
                            this.waybills.push(data);
                            this.text = '';
                        }
                    )
                )
            }
        }
    }
})

Vue.component('waybill-row', {
    props: ['waybill', 'editWaybill', "waybills"],
    template: '<div>' +
        '<i>({{ waybill.id }})</i> {{ waybill.auto }}' +
        '<span style="position: absolute; right: 0;">' +
        '<input type="button" value="Edit" @click="edit" />' +
        '<input type="button" value="X2" @click="del" />' +
        '</span>' +
        '</div>',
    methods: {
        edit() {
            this.editWaybill(this.waybill);
        },
        del() {
            waybillApi.remove({id: this.waybill.id}).then(result => {
                if (result.ok) {
                    console.log(this.waybill);
                    console.log(this.waybills);
                    this.waybills.splice(this.waybills.indexOf(this.waybill), 1)
                }
            })
        }
    }
})

Vue.component('waybills-list', {
    props: ['waybills'],
    data: function () {
        return {
            waybill: null,
        }
    },
    template: '<div style="position: relative; width: 300px;">' +
        '<waybill-form :waybills="waybills" :waybillAttr="waybill"></waybill-form>' +
        '<waybill-row v-for="waybill in waybills" :key="waybill.id" :waybill="waybill" ' +
        ':waybills="waybills" :editWaybill="editWaybill"/>' +
        '</div>',
    methods: {
        editWaybill(waybill) {
            this.waybill = waybill;
        }
    }
})

var app = new Vue({
    el: '#app',
    template: "<waybills-list :waybills='waybills'/>",
    data: {
        waybills: []
    },
    created: function () {
        waybillApi.get().then(result => {
                result.json().then(data =>
                    data.forEach(waybill => this.waybills.push(waybill))
                )
            }
        )
    },
});*/
