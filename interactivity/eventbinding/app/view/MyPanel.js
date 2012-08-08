/*
 * File: app/view/MyPanel.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyPanel', {
    extend: 'Ext.panel.Panel',

    height: 250,
    width: 400,
    title: 'My Panel',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    enableToggle: true,
                    text: 'MyButton',
                    listeners: {
                        toggle: {
                            fn: me.onButtonToggle,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonToggle: function(button, pressed, options) {
        if (pressed) {
            this.setSize(100, 200);
        } else {
            this.setSize(400, 250);
        }
    }

});