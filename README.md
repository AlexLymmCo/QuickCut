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

- **+** imports videos from Photos or Files. Each one is auto-cut as it loads.
- Tap a clip to select it. Drag the white handles to trim. Removed parts disappear.
- Long-press a clip and drag it to reorder it, or drag it up or down onto the front or bottom layer.
- Pinch the timeline to zoom. Swipe to scrub.
- **Split** cuts at the playhead. **Copy to front / bottom** duplicates the clip onto a layer (muted).
- **Cut settings** controls how aggressive silence cutting is, pause length, breathing room,
  and the retake detector.
- **Export → Separate clips** gives you one trimmed video per imported clip, in timeline order.
  Then tap **Save to Photos**.

## Updating

Upload changed files to the repo again. The app picks up the update the next time you open it
(sometimes it takes two launches).

`source/` contains the code the app is built from. You don't need it to run the app.
