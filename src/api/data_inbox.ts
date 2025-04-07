const dataInbox = async () => {
  try {
    const res = await fetch(
      "https://my-json-server.typicode.com/nuruslaily/api-quicks/listInbox"
    );
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching inbox data:", error);
    return []; // default fallback
  }
};

export default dataInbox;
