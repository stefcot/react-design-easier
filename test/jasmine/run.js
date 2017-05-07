import Jasmine from 'jasmine';

const jasmine = new Jasmine();

jasmine.loadConfigFile('test/jasmine/support/jasmine.json');
jasmine.execute();