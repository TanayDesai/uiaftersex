const Api = async (url) => {
  const token = process.env.REACT_APP_token;
  const data = await fetch("https://shot.screenshotapi.net/screenshot?token=" + token + "&url=" + url)
  var res = await data.json();
  const screenshot = await res.screenshot
  return screenshot ? screenshot : res;
  }

  
  export default async function handler(req, res) {
    const screenshot =  await Api(req.query.query)
    await res.status(200).json({ "screenshot": screenshot })
  }
