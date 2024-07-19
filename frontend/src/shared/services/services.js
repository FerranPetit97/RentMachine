export default class APIService {
  async getMachines(filter) {
    const response = await fetch(
      `http://localhost:3000/machine?filter=${filter}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.json();
  }

  async updateMachine(machine) {
    const response = await fetch('http://localhost:3000/machine/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(machine),
    });
    return response.json();
  }

  async getFarms(filter) {
    const response = await fetch(
      `http://localhost:3000/farm?filter=${filter}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.json();
  }

  async updateFarm(farm) {
    const response = await fetch('http://localhost:3000/farm/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(farm),
    });
    return response.json();
  }
}
