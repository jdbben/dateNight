export async function sendDataToApi(
  relationshipType: string,
  questionsType: string,
  email: string
) {
  try {
    const response = await fetch("/api/addQuationsType", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ relationshipType, questionsType, email }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const responseData = await response.json();
    console.log("Data received from API:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error sending data to API:", error);
    throw error;
  }
}
export async function getRAndomQuetionfromApi(email: string) {
  try {
    const response = await fetch(
      `/api/getThequetionsType?email=${encodeURIComponent(email)}`
    );
    if (!response.ok) {
      throw new Error("cant get your data no response from api");
    }
    const result = await response.json();
    return result;
  } catch (err) {
    throw new Error("no result:" + err);
  }
}
