const Api = async (url) => {
  const data = await fetch("https://shot.screenshotapi.net/screenshot?token=67Z0R4W-HJGMXZ3-GFRQQER-H6QAMBE&url=" + url)
  var res = await data.json();
  const screenshot = await res.screenshot
  return screenshot ? screenshot : res;
  }

  
  export default async function handler(req, res) {
    const screenshot =  await Api(req.query.query)
    await res.status(200).json({ "screenshot": screenshot })
  }
