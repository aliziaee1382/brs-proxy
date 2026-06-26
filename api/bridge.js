export default async function handler(req, res) {
  // تنظیم هدرها برای دسترسی آزاد و نمایش درست JSON
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  // لینک کامل BrsApi خودت رو اینجا جایگزین کن
  const url = "لینک_کامل_BRSAPI_شما_در_اینجا";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        // همون User-Agent معتبر برای عبور از فایروال
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ 
        error: `API Error: ${response.status}`, 
        details: errorText 
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ 
      error: "Internal Server Error", 
      message: error.message 
    });
  }
}
