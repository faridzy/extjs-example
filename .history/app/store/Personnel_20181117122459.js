Ext.define('Management.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    storeId: 'personnel',

    model: 'App1.model.Personnel',

    data: {
        items: [
            { id: 101, name: 'Jean Luc', email: "jeanluc.picard@enterprise.com" },
            { id: 102, name: 'Worf', email: "worf.moghsson@enterprise.com" },
            { id: 103, name: 'Deanna', email: "deanna.troi@enterprise.com" },
            { id: 104, name: 'Data', email: "mr.data@enterprise.com" }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
