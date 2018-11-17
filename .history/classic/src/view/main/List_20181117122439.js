/**
 * This view is an example list of people.
 */
Ext.define('Management.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    id: 'dataList',

    requires: [
        'Management.store.Personnel',
        'Management.view.main.Edit'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'ID', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 }
    ],

    listeners: {

        itemdblclick: 'onItemSelected'
        //select: 'onItemSelected'
        // itemdblclick: function(dv, record, item, index, e) {
        //     //alert('working');
        //     console.log('>>',record);
        // }

    }
});
