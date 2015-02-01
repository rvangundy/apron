'use strict';

var jsdom = require('jsdom');
var Promise = require('promise');

module.exports = function(url) {
    return new Promise(function(resolve, reject) {
        jsdom.env({
            url: url,
            features: {
                FetchExternalResources   : ['script'], 
                ProcessExternalResources : ['script']
            },
            done: function(errors, window) {

                // Reject with first error
                if (errors) {
                    reject(errors[0]);
                    return;
                }

                resolve(window);
            }
        });
    });
};
