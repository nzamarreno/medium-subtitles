# 🚀 Create subtitles from a video with FFmpeg and OpenAI

You can find the article relative to this repository on [Medium](https://)

## 📦 Prerequisites

- **NodeJS** _version >= 20_ - 🔗 https://nodejs.dev/en/learn/how-to-install-nodejs/
- **FFmpeg** - 🔗 https://www.partitionwizard.com/partitionmanager/how-to-install-ffmpeg.html
- Something for writing a piece of code (**Visual Studio Code**, **Fleet**…)
- API Key from **OpenAI**  -  🔗 https://openai.com/

Great, it's time to add `$API_KEY`. Rename `.env-example` or create a `.env` file and insert your **OpenAI** API Key.

## 🔥 Getting Started
### Create the audio file
```bash
ffmpeg -i video.mp4 -vn -acodec libmp3lame -q:a 5 audio.mp3
``````
FFmpeg is pretty nice, it should give you the audio of the video. `audio.mp3` should appear in the tall grass.

### Install dependencies
First all, install your dependencies.
```bash
npm install
``````
### Launch the rocket
Your dependencies are downloaded, you can launch the script in order to generate subtitles.

```bash
npm run start
``````
If all are good, you may have a `track.vtt` file generated at the root.

# 🎉 Congratulations!
You can take a look the result in your favorite browser and open the `index.html` file.

