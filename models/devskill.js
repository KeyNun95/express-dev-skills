const devskills = [
    {id: 125223, devskill: 'Python', done: true},
    {id: 127904, devskill: 'JavaScript', done: false},
    {id: 139608, devskill: 'C++', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return devskills.find(devskill => devskill.id === id)
  }
	
  function getAll() {
    return devskills;
  }