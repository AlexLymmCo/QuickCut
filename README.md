# QuickCut

Cuts your talking-head clips on your iPhone: silences removed, only your last take kept.
It runs in Safari as a home-screen app. Nothing is uploaded, and it's free.

## Put it online (one time, about 5 minutes)

1. Sign in at github.com and create a new repository named `QuickCut`. It must be
   **Public**, because GitHub Pages is free only for public repos. Nobody can see your
   videos; they never leave your phone.
2. On the new repo page, click **uploading an existing file**. Drag in everything in this
   folder, then click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**,
   Branch to **main** and **/ (root)**, then click **Save**.
4. Wait about a minute. Your app is at `https://YOUR-USERNAME.github.io/QuickCut/`.

## Put it on your iPhone

1. Open that link in **Safari**.
2. Tap **Share → Add to Home Screen → Add**.
3. Always open QuickCut from the home-screen icon. That keeps your projects and the speech model saved.

The first time you import, it downloads the speech model (about 40 MB, one time only).

## Using it

**Quick Cut** (the blue button) does everything in one go. Pick your videos, and it puts them in the order you
recorded them, cuts the pauses, keeps your last take of each line, removes the extra takes, and shows **Watch it**.
If it looks right, tap **Export**. If not, fix it by hand below (undo brings removed takes back).


- **+** imports videos from Photos or Files. Each one is auto-cut as it loads.
- Tap a clip to select it. Drag the white handles to trim. Removed parts disappear.
- Long-press a clip and drag it to reorder it, or drag it up or down onto the front or bottom layer.
- Pinch the timeline to zoom. Swipe to scrub.
- Each clip is one take. Pauses inside a take are cut out (small notches mark the cuts), but it stays one clip.
  A pause longer than **New take after pauses of** (Cut settings) starts a new clip.
- The bar at the top of the preview always shows what the app is working on.
- After auto-cut, **green** clips are keeper takes and **red** clips are earlier takes of the same line.
  **Remove red** deletes all red clips. To keep a middle take instead, select it and tap **Mark green**,
  then select the one you don't want and tap **Mark red**.
- The **− / +** buttons on the layer rows add or remove front and bottom layers. At least one of each always stays.
- **Split** cuts at the playhead. **Copy to front / bottom** duplicates the clip onto a layer (muted).
- **Cut settings** controls how aggressive silence cutting is, pause length, breathing room,
  and the retake detector.
- **Export** has three options: **One video**, **Each recording** (one file per video you shot), or **Each take**.
  The files are dated so they appear in Photos and CapCut in story order. Then tap **Save to Photos**.

## Updating

In the repo, click **Add file → Upload files**, drag in all the files again, and commit (they replace the old ones). The app picks up the update the next time you open it
(sometimes it takes two launches).

`source/` contains the code the app is built from. You don't need it to run the app.
