# Scroll-video frames

Drop a 192-frame image sequence here named `frame_001.jpg` … `frame_192.jpg`.
The site detects `frame_001.jpg` automatically and plays the frames on scroll
behind the page (with a dark patch over the bottom-right corner to hide any
AI-video watermark). Until the frames exist, a generated crimson lattice
animation is shown instead.

Making the frames:
1. Turn a portrait photo into a 5–10 s video with an image-to-video tool (Luma, Runway, Kling).
2. Export 192 frames, e.g. `ffmpeg -i clip.mp4 -vf "fps=192/DURATION,scale=1280:-2" -q:v 4 frame_%03d.jpg`
   (replace DURATION with the clip length in seconds).
3. Keep each frame small (≈60–120 KB) so the page loads quickly.

To use a different count or file type, edit `frames` at the bottom of `assets/data.js`.
