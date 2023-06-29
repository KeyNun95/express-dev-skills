const devskills = [
    {id: 125223, devskill: 'Python', done: true},
    {id: 127904, devskill: 'JavaScript', done: false},
    {id: 139608, devskill: 'C++', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    id = parseInt(id);
    const idx = devskills.findIndex(devskill => devskill.id === parseInt(id));
    devskills.splice(idx, 1);
  }

  function create(devskill) {
    devskill.id = Date.now() % 1000000;
    devskill.done = false;
    devskills.push(devskill);
    return devskill
  }

  function getOne(id) {
    id = parseInt(id);
    return devskills.find(devskill => devskill.id === id)
  }
	
  function getAll() {
    return devskills;
  }