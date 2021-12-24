const app = require('./app')
const fs = require('fs');

const mockData = 'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00\nASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00\nANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00\nDANIEL=MO10:00-12:00'
test('Instancia correctamente', () => {
  const app2 = jest.fn()
 fs.readFile = jest.fn((path, callback) => { return callback(null, JSON.stringify(mockData)); });
 app2.mockReturnValue('Something')
});