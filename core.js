const path = require('path');
//works like import static in java
const { log } = require('util');
const v8 = require('v8');

log(path.basename(__filename));
log('^ name of a current file.');
log(v8.getHeapStatistics());