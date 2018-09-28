/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    var client = window.Mozilla.Client;

    if(client.isFirefox) {
        document.getElementById('election-has-firefox').classList.remove('hidden');
        document.getElementById('election-not-firefox').classList.add('hidden');
    }

})();
