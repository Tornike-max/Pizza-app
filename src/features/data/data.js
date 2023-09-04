// https://whiskyhunter.net/api/?format=openapi
const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getData() {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw Error(`Couldn't fetch the menu`);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function getDetails(id) {
  const res = await fetch(`${API_URL}/details/${id}`);
  if (!res.ok) throw Error(`Couldn't find details with this id #${id}`);
  const data = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  console.log(newOrder);
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
