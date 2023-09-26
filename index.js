import fs from "fs";
import OpenAI from "openai";

async function main() {
  const API_KEY = process.env.API_KEY;

  const translator = new OpenAI({
    apiKey: API_KEY,
  });

  const track = await translator.audio.transcriptions.create({
    file: fs.createReadStream("audio.mp3"),
    model: "whisper-1",
    response_format: "vtt",
  });

  fs.createWriteStream("track.vtt").write(track);
}

main();
