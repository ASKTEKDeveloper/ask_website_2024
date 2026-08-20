import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.post(
      "http://vc.asktek.net/EmailAPi/api/Mail",
      req.body
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "An error occurred while sending email." });
  }
}
